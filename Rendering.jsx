import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
export const Rendering = (props) => {
  return (
    <div>
      {props.props.length !== 0 ? (
        <h1 className="resulth1">đëłíě ěąęłľíěľëë¤!đ</h1>
      ) : (
        ""
      )}

      {props.props.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};
