import * as Yup from "yup";
export const createSchema = Yup.object().shape({
  date: Yup.string().required("Обов'язкове поле"),
  cityFrom: Yup.string().required("Обов'язкове поле"),
  cityTo: Yup.string().required("Обов'язкове поле"),
  price: Yup.number().typeError("Тільки цифри").required("Обов'язкове поле"),
  money: Yup.number().typeError("Тільки цифри").required("Обов'язкове поле"),
  driver: Yup.string().required("Обов'язкове поле"),
  car: Yup.string().required("Обов'язкове поле"),
  carOwner: Yup.string().required("Обов'язкове поле"),
  cargoOwner: Yup.string().required("Обов'язкове поле"),
});
