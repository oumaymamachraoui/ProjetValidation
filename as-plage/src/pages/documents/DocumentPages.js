import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../../components/document/form/form";
import { getDocs } from "../../JS/actions/DocumentAction";
import DocsList from "../../components/document/DocsList";

const DocumentPages = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocs());
  }, [currentId, dispatch]);
  return (
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <DocsList setCurrentId={setCurrentId} />
    </div>
  );
};

export default DocumentPages;
