import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/createForm/EditForm";
import api from "../utils/axios";

const EditNote = ({ data }) => {
  return (
    <div>
      <EditForm data={data} />
    </div>
  );
};

export default EditNote;
