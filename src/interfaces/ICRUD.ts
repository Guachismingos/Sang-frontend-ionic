import { DocumentData, QuerySnapshot } from "firebase/firestore";
import FormValues from "./FormValues";

interface ICRUD {
  newRequirement: (
    formValues: FormValues,
    files: { id: string; file: File }[]
  ) => string;
  loadRequirementById: (idRef: string) => Promise<QuerySnapshot<DocumentData>>;
}
export default ICRUD;
