import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
export const Rendering = (props) => {
  return (
    <div>
      {props.props.length !== 0 ? (
        <h1 className="resulth1">🎉변형에 성공했습니다!🎊</h1>
      ) : (
        ""
      )}

      {props.props.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};
