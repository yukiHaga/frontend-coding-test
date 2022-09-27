import { useReducer, createContext, ReactNode, Dispatch } from "react";
import userReducer, {
  UserState,
  UserAction,
  initialUserState,
} from "../reducers/userReducer";

type ContextValue = {
  userState: UserState;
  dispatch: Dispatch<UserAction>;
};

export const Context = createContext<ContextValue | null>(null);

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props): JSX.Element => {
  const [userState, dispatch] = useReducer(userReducer, initialUserState);

  const value = {
    userState,
    dispatch,
  };

  return <Context.Provider {...{ value }}>{children}</Context.Provider>;
};

export default Provider;
