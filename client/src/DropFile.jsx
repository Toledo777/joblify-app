import { useState, useRef } from "react";
import './DropFile.css';

function DropFile() {
  const [dragText, setDragText] = useState("Drag & Drop");
  const [file, setFile] = useState();
  const inputFile = useRef(null) 

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Release to Upload");
  }
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Drag & Drop");
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragText("Release to Upload");
  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files[0]);
    // console.log(file);
  }
  function filePicker(e){
    e.preventDefault();
    inputFile.current.click();
  }
  function tt(e){
    e.preventDefault();
    console.log(inputFile);
  }
  return (
    <div className="container">
      <button onClick={e => tt(e)}>test</button>
      <h3>Upload Your File</h3>
      <div className="drag-drop-area"
        onDrop={e => handleDrop(e)}
        onDragOver={e => handleDragOver(e)}
        onDragEnter={e => handleDragEnter(e)}
        onDragLeave={e => handleDragLeave(e)}
      >
        <div className="icon">
          <i className="fas fa-images"></i>
        </div>
        <span className="header">{dragText}</span>
        <span className="header"> or <span className="button" onClick={e => filePicker(e)}>browse</span></span>
      </div>
      <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    </div>
  );
}

export default DropFile;