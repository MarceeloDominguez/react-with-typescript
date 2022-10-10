import User from "../interfaces";

export const INITIAL_VALUES = {
  name: "",
  nickname: "",
  description: "",
};

interface FormState {
  state: User;
}

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | { type: "clear" };

export const userReducer = (
  state: FormState["state"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };

    case "clear":
      return INITIAL_VALUES;

    default:
      return state;
  }
};
