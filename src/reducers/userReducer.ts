import { RESPONSE_STATE, REQUEST_STATE } from "../constants";

export type UserState = {
  responseState: keyof typeof RESPONSE_STATE;
  user?: {
    id: string;
    name: string;
  };
  errorMessage?: string;
};

export const initialUserState: UserState = {
  responseState: "INITIAL",
  user: {
    id: "",
    name: "",
  },
  errorMessage: "",
};

export type UserAction = {
  type: keyof typeof REQUEST_STATE;
  payload?: UserState["user"];
  errorMessage?: UserState["errorMessage"];
};

type UserReducer = (state: UserState, action: UserAction) => UserState;

const userReducer: UserReducer = (state, action) => {
  switch (action.type) {
    case REQUEST_STATE.REQUEST:
      return {
        ...state,
        responseState: RESPONSE_STATE.LOADING,
      };
    case REQUEST_STATE.REQUEST_SUCCESS:
      return {
        ...state,
        responseState: RESPONSE_STATE.OK,
        payload: action.payload,
      };
    case REQUEST_STATE.REQUEST_FAILURE:
      return {
        ...state,
        responseState: RESPONSE_STATE.FAILURE,
        errorMessage: action.errorMessage,
      };
    default:
      throw new Error();
  }
};

export default userReducer;
