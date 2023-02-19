import React from "react";
import { Formik, Field, Form } from "formik";
import api from "../../utils/axios";
import { createSchema } from "../../utils/validations/createNoteValidator";
const CreateForm = () => {
  const createPost = async (values) => {
    const { data } = await api.post("/notes", values);
  };
  return (
    <div className="create__form">
      <Formik
        initialValues={{
          date: "",
          cityFrom: "",
          cityTo: "",
          price: "",
          money: "",
          driver: "",
          car: "",
          carOwner: "",
          cargoOwner: "",
        }}
        validationSchema={createSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          createPost(values);
          // resetForm();
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="form">
            <div className="form__body">
              <div className="form__group">
                <label htmlFor="date">Дата</label>
                <Field id="date" name="date" placeholder="Дата" type="date" />
              </div>

              <div className="form__group">
                <label htmlFor="cityFrom">Завантаження</label>
                <Field
                  id="cityFrom"
                  name="cityFrom"
                  placeholder="Місто завантаження"
                />
              </div>

              <div className="form__group">
                <label htmlFor="cityTo">Вигрузка</label>
                <Field
                  id="cityTo"
                  name="cityTo"
                  placeholder="Місто вигрузки"
                  type="text"
                />
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Ціна</label>
                <Field
                  id="price"
                  name="price"
                  placeholder="Ціна перевезення"
                  type="text"
                />
                {errors.price && touched.price ? (
                  <div className="form__error">{errors.price}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Маржа</label>
                <Field
                  id="money"
                  name="money"
                  placeholder="Маржа"
                  type="text"
                />
                {errors.money && touched.money ? (
                  <div className="form__error">{errors.money}</div>
                ) : null}
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Замовник</label>
                <Field
                  id="cargoOwner"
                  name="cargoOwner"
                  placeholder="Замовник"
                  type="text"
                />
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Водій</label>
                <Field
                  id="driver"
                  name="driver"
                  placeholder="Водій"
                  type="text"
                />
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Автомобіль</label>
                <Field
                  id="car"
                  name="car"
                  placeholder="Автомобіль"
                  type="text"
                />
              </div>
              <div className="form__group">
                <label htmlFor="Ціна">Власник авто</label>
                <Field
                  id="carOwner"
                  name="carOwner"
                  placeholder="Власник авто"
                  type="text"
                />
              </div>
            </div>
            <button type="submit">Створити запис</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateForm;
