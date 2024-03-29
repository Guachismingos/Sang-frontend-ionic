import { createContext, ReactNode, useContext } from "react";
import {
  db,
  doc,
  setDoc,
  storage,
  ref,
  uploadBytes,
  collection,
} from "../firebase/firebase";
import FormValues from "../interfaces/FormValues";
import ICRUD from "../interfaces/ICRUD";

const CRUDContext = createContext<ICRUD>(null);

export const useCRUD = () => {
  return useContext(CRUDContext);
};

export const CRUDProvider = ({ children }: { children: ReactNode }) => {
  const newRequirement = (
    formValues: FormValues,
    files: { id: string; file: File }[]
  ) => {
    let refValues = { ...formValues };
    files.forEach(({ id, file }) => {
      const storageRef = ref(
        storage,
        `/files/${formValues.primaryPhone}_${formValues.lastNames}/${id}_${file.name}`
      );
      uploadBytes(storageRef, file);
      refValues = { ...refValues, [id]: storageRef.fullPath };
    });
    const refRequirement = doc(collection(db, "requirements"));
    setDoc(refRequirement, refValues);
    return refRequirement.id;
  };

  const value = { newRequirement };

  return <CRUDContext.Provider value={value}>{children}</CRUDContext.Provider>;
};
