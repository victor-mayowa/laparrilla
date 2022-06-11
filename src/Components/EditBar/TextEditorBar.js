import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorBar.css"


const TextEditorBar = (props) => {
  const barEditorState = props.barEditorState
  const setBarEditorState = props.setBarEditorState
  const editorContent = props.editorContent
  
  return (
    <div className="mb-6">
      <Editor
        editorState={barEditorState}
        onEditorStateChange={setBarEditorState}
        contentState={editorContent}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
      {/* <textarea disabled value={data}></textarea> */}
     
    </div>
  );
};

export default TextEditorBar;
