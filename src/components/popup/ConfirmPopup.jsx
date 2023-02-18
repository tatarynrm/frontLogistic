import React from "react";

const ConfirmPopup = ({ popup, setPopup, deleteNote, note }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <button
          className="delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteNote(note._id);
            setPopup(!popup);
          }}
        >
          Так, видалити
        </button>
        <button
          className="edit"
          onClick={(e) => {
            e.stopPropagation();
            setPopup(!popup);
          }}
        >
          Повернутись назад
        </button>
      </div>
    </div>
  );
};

export default ConfirmPopup;
