/*
 * どのページでも使える定数を定義
 */

/*
 * http
 */
export const RESPONSE_STATE = Object.freeze({
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  OK: "OK",
  FAILURE: "FAILURE",
});

export const REQUEST_STATE = Object.freeze({
  REQUEST: "REQUEST",
  REQUEST_SUCCESS: "REQUEST_SUCCESS",
  REQUEST_FAILURE: "REQUEST_FAILURE",
});
