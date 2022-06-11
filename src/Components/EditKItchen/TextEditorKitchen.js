import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorKitchen.css"

const TextEditorBar = (props) => {
  const kitchenEditorState = props.kitchenEditorState
  const setKitchenEditorState = props.setKitchenEditorState
  const editorContent = props.editorContent
  
  return (
    <div className="mb-6">
      <Editor
        editorState={kitchenEditorState}
        onEditorStateChange={setKitchenEditorState}
        contentState={editorContent} 
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </div>
  );
};

export default TextEditorBar;
