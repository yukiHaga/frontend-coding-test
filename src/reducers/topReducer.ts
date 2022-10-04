import { RESPONSE_STATE, REQUEST_STATE } from "../constants";

export type Coffee = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
};

export type TopState = {
  responseState: keyof typeof RESPONSE_STATE;
  coffee: Coffee[];
  errorMessage?: string;
};

export const initialTopState: TopState = {
  responseState: "INITIAL",
  coffee: [],
  errorMessage: "",
};

export type TopAction = {
  type: keyof typeof REQUEST_STATE;
  payload?: TopState["coffee"];
  errorMessage?: TopState["errorMessage"];
};

type TopReducer = (state: TopState, action: TopAction) => TopState;

const topReducer: TopReducer = (state, action) => {
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

export default topReducer;
