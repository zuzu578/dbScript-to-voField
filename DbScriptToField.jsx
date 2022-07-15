import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Rendering } from "./rendering";
import "./styles.css";

const App = () => {
  const [getText, setText] = useState("");
  const [resultArr, setResultArr] = useState([]);
  const accessModifier = ["public", "private", "protected", "defalut"];
  const match = /[\{\}\[\]\/0-9?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  const toCamelCase = (str) => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  };

  const convertingVO = () => {
    if (!getText) {
      alert("내용을 입력해주세요.");
      return;
    }
    let str = getText.toLowerCase().trim();

    str = str
      .replaceAll("numeric", "int")
      .replaceAll("varchar", "String")
      .replaceAll("auto_increment", "")
      .replaceAll("default null not null", "")
      .replaceAll("default null", "")
      .replaceAll("constraint", "")
      .replaceAll("primary key", "");

    const result = [];
    const scriptArr = str
      .split(",")
      .map((item) => item.trim())
      .map((item) => item.replaceAll(match, ""))
      .filter((item) => item !== 0 || item !== "")
      .map((item, index) => {
        console.log("result===>", item);
        const itemArr = item.split(" ");
        if (itemArr[0] !== "" && itemArr[1] !== "") {
          // @column anotation 필요할경우 주석해제.
          // result.push(`@Column(name = "${itemArr[0]}")`);
          result.push(
            `${accessModifier[1]} ${itemArr[1]} ${toCamelCase(itemArr[0])};`
          );
        }
      });

    setResultArr(result);
  };

  const getScripts = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h4 className="title">컬럼 을 vo로 변환해줍니다.💪</h4>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={getScripts}
            placeholder="Leave a comment here"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">
            테이블 ddl 문의 컬럼을 입력해주세요.
          </label>
        </div>
        <div className="buttons">
          <button
            type="button"
            onClick={convertingVO}
            className="btn btn-primary"
          >
            변환하기!
          </button>
        </div>
        <Rendering props={resultArr} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
