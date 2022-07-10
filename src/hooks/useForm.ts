import { InputChangeEventDetail, IonInputCustomEvent } from "@ionic/core";
import { useReducer } from "react";

const useForm = (initialState: any) => {
  const reducer = (
    state: typeof initialState,
    payload: { field: string; value: string | number | null | undefined }
  ) => {
    return {
      ...state,
      [payload.field]: payload.value,
    };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e: IonInputCustomEvent<InputChangeEventDetail>) => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  return {
    state,
    bind: {
      onIonChange: handleChange,
    },
  };
};

export default useForm;
