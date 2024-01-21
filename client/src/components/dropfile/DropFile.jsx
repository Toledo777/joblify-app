import { useState, useRef } from "react";
import './DropFile.css';
import uploadIcon from "../../assets/cloud_upload_icon.png";
import skill from "../../assets/skill.png";
import LoadingOverlay from 'react-loading-overlay-ts';

function DropFile() {
  const [dragText, setDragText] = useState("Drag & Drop");
  const [file, setFile] = useState();
  const inputFile = useRef(null);
  const [dropDisplay, setDropDisplay] = useState(true);
  const [skillDisplay, setSkillDisplay] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  // for loading overlay
  const [isActive, setActive] = useState(false)
  const [loadingText, setLoadingText] = useState("Reading resume...");

  function handleDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!uploaded) setDragText("Release to Upload");      
  }
  function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!uploaded) setDragText("Drag & Drop");
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!uploaded) setDragText("Release to Upload");      

  }
  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setFile(e.dataTransfer.files[0]);
    setUploaded(true)
    setDragText("File Uploaded!");
    setTimeout(() => {
      setDragText("Drag & Drop");
      setUploaded(false);
    }, 3000);
    // console.log(file);
  }
  function filePicker(e) {
    e.preventDefault();
    inputFile.current.click();
  }
  function loading(e) {
    e.preventDefault();
    setActive(value => !value)
    setTimeout(() => {
      setActive(value => !value)
    }, 15000);
    setTimeout(() => {
      setLoadingText("Done!");
      setDropDisplay(false);
      setSkillDisplay(true);
    }, 14500);
    setTimeout(() => {
      setLoadingText("Analyzing...");
    }, 4000);
    setTimeout(() => {
      setLoadingText("Compiling data...");
    }, 10500);
  }
  function back(e) {
    e.preventDefault();
    setDropDisplay(true);
    setSkillDisplay(false);
  }

  return (
    <LoadingOverlay
      active={isActive}
      spinner
      text={loadingText}
    >
      <form>
        {dropDisplay ? <div className="container">
          <h3>Upload Your Resume</h3>
          <div className="drag-drop-area"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}
          >
            <div className="icon">
              <img src={uploadIcon} alt="cloud upload icon" />
            </div>
            <span className="header">{dragText}</span>
            <span className="header"> or <span className="browse" onClick={e => filePicker(e)}>browse</span></span>
            <input type='file' ref={inputFile} style={{ display: 'none' }} />
          </div>
          <button className="submit" type="submit" onClick={e => loading(e)}>Submit</button>
        </div> : null}
        {skillDisplay ? <div className="container">
          <img id="skill" className="skill" src={skill} alt="Resume Skill Analysis" />
          <button className="submit" onClick={e => back(e)}>Go Back</button>
        </div> : null}
      </form>
    </LoadingOverlay>
  );
}

export default DropFile;