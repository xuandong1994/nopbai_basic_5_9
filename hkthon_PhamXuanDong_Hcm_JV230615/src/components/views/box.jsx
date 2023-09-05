import React, { useState, useEffect } from "react";
// import Box from "./views/box";
import AbcIcon from "@mui/icons-material/Abc";
// import Textarea from "./views/textarea";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

export default function Index() {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0); 
  const [letter, setLetter] = useState(0); 
  const [paragraph, setParagraph] = useState(0); 

  const countLetter = (text) => {
    const textSplit = text.split(" ").join(""); 
    setLetter(textSplit.length);
  };

  const countWord = (text) => {
    const wordsArray = text.trim().split(/\s+/);
    return wordsArray.length;
  };

  const countParagraph = (text) => {
    const lineCount = text.split("\n").filter((line) => line.trim() !== "")
      .length;
    return lineCount;
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  useEffect(() => {
    countLetter(text);
    setWord(countWord(text));
    setParagraph(countParagraph(text));
  }, [text]);

  return (
    <div style={{ background: "linear-gradient(to right,#e002ec86,#f3b6b9db)" }}>
      <h1 style={{ textAlign: "center" }}>
        <span>
          <AbcIcon fontSize="large" />
        </span>
        Word Counter
      </h1>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", padding: "10px 30px 30px 30px", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <span>
                <NoteAltIcon />
              </span>
              <span>Word</span>
            </div>
            <div>{text !==''? word : '0'}</div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        >
          <div style={{ display: "flex", padding: "10px 30px 30px 30px", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <span>
                <NoteAltIcon />
              </span>
              <span>Letter</span>
            </div>
            <div>{letter}</div>
          </div>
        </div>

        <div
          style={{
            background: "linear-gradient(to right,#7D0AB8,#C2228C",
            width: "200px",
            display: "flex",
            justifyContent: "center",
            color: "#ffff",
            borderRadius: "10px",
          }}
        ><div style={{ display: "flex", padding: "10px 30px 30px 30px", flexDirection: "column" }}>
        <div style={{ display: "flex" }}>
          <span>
            <NoteAltIcon />
          </span>
          <span>Paragraph</span>
        </div>
        <div>{paragraph}</div>
      </div>
    </div>
  </div>

  <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
    <textarea
      onChange={(e) => setText(e.target.value)}
      value={text}
      style={{ width: "1000px", height: "250px", borderRadius: "10px" }}
    ></textarea>
  </div>

  <div style={{ display: "flex", justifyContent: "center", padding: "20px 0px 10px 0px" }}>
    <button
      style={{
        background: "linear-gradient(to right,#7D0AB8,#C2228C",
        color: "#fff",
        borderRadius: "5px",
        padding: "5px",
        margin: "0 10px", 
      }}
      onClick={handleUppercase} 
    >
      Click to UpperCase
    </button>
    <button
      style={{
        background: "linear-gradient(to right,#7D0AB8,#C2228C",
        color: "#fff",
        borderRadius: "5px",
      }}
      onClick={handleLowerCase} 
    >
      Click to LowerCase
    </button>
  </div>
</div>
);
}