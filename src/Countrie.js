import React from "react";
import { useParams } from "react-router-dom";
export default function Countrie() {
  let { id } = useParams();
  return <div className="Countrie">x I'm {id}</div>;
}
