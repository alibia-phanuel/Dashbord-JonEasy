import * as Yup from "yup";
export const LoginValidation = Yup.object({
  username: Yup.string().min(3).required("Veuillez saisir le nom"),
  //   email: Yup.string()
  //     .email("Veuillez saisir une adresse électronique valide")
  //     .required("Veuillez saisir l'adresse électronique"),
  password: Yup.string().min(5).required("Veuillez saisir votre mot de passe"),
});
