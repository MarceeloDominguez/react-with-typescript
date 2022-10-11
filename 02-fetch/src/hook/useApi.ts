import { useEffect, useReducer } from "react";
import { INITIAL_STATE, userReducer } from "../reducers";

function useApi(url: string) {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      dispatch({ type: "fetch_start" });
      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({ type: "result_success", payload: data });
      } catch (error) {
        dispatch({ type: "fetch_error", payload: error as Error });
      }
    })();
  }, [url]);

  return { userState };
}

export default useApi;
