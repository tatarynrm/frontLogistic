import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/axios";
import ConfirmPopup from "../popup/ConfirmPopup";
const DataRow = ({ note }) => {
  const [focus, setFocus] = useState(false);
  const [popup, setPopup] = useState(false);

  const deleteNote = async (id) => {
    try {
      const { data } = api.delete(`/notes/${id}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        onClick={() => {
          setFocus(!focus);
        }}
        className={focus ? "form__row focus_true" : "form__row focus_false"}
      >
        <div>{note.date}</div>
        <div>{note.cityFrom}</div>
        <div>{note.cityTo}</div>
        <div>{note.price}</div>
        <div>{note.money}</div>
        <div>{note.cargoOwner}</div>
        <div>{note.driver}</div>
        <div>{note.car}</div>
        <div>{note.carOwner}</div>
        <div className="buttons">
          <button
            className="edit"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Link to={`/notes/${note._id}`}>Редагувати</Link>
          </button>
          <button
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              setPopup(!popup);
              // deleteNote(note._id);
            }}
          >
            Видалити
          </button>
        </div>
      </div>
      {popup ? (
        <ConfirmPopup
          popup={popup}
          setPopup={setPopup}
          deleteNote={deleteNote}
          note={note}
        />
      ) : null}
    </>
  );
};

export default DataRow;
