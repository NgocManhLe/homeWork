import React from "react";
import { useParams } from "react-router-dom";

const InvoicesDetail = () => {
  const params = useParams();

  return <div>InvoicesDetail : {params.id}</div>;
};

export default InvoicesDetail;
