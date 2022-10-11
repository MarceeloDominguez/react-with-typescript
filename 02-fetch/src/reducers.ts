import { User } from "./interfaces";

interface ResultsState {
  state: User[];
  loading: boolean;
  error: boolean;
}

type Action =
  | { type: "fetch_start" }
  | { type: "result_success"; payload: User[] }
  | { type: "fetch_error"; payload: Error };

export const INITIAL_STATE: ResultsState = {
  state: [],
  loading: false,
  error: false,
};

export const userReducer = (state: ResultsState, action: Action) => {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true, error: false };

    case "result_success":
      return {
        ...state,
        state: action.payload,
        loading: false,
        error: false,
      };

    case "fetch_error":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
