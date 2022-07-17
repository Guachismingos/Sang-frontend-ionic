import FormValues from "./FormValues";

interface ICRUD {
  newRequirement: (
    formValues: FormValues,
    files: { id: string; file: File }[]
  ) => string;
}
export default ICRUD;
