import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import api from "../../utils/axios";
import { createSchema } from "../../utils/validations/createNoteValidator";
import { useNavigate, useParams } from "react-router-dom";
const EditForm = ({ data }) => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/");
  }
  const { id } = useParams();
  const editableNote = data.filter((item) => item._id === id);
  const updatePost = async (id, values) => {
    const { data } = await api.put(`/notes/${id}`, values);
  };
  return (
    <Formik
      initialValues={{
        date: editableNote[0].date,
        cityFrom: editableNote[0].cityFrom,
        cityTo: editableNote[0].cityTo,
        price: editableNote[0].price,
        money: editableNote[0].money,
        driver: editableNote[0].driver,
        car: editableNote[0].car,
        carOwner: editableNote[0].carOwner,
        cargoOwner: editableNote[0].cargoOwner,
      }}
      validationSchema={createSchema}
      onSubmit={(values, { resetForm }) => {
        updatePost(id, values);
        navigateHome();
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
              <Field id="money" name="money" placeholder="Маржа" type="text" />
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
              <Field id="car" name="car" placeholder="Автомобіль" type="text" />
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
          <button type="submit">Редагувати запис</button>
        </Form>
      )}
    </Formik>
  );
};

export default EditForm;
