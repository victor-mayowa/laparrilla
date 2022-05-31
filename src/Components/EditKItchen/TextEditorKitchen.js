import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorKitchen.css"

const TextEditorBar = () => {

  const [editorState, setEditorState] = useState(() => {
    EditorState.createEmpty();
  });
  console.log(editorState)
  return (
    <div className="mb-6">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </div>
  );
};

export default TextEditorBar;
