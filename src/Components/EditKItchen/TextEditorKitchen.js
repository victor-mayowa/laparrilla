import React, { useContext } from "react";
// import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorKitchen.css"
import { convertToRaw } from "draft-js";
import DataContext from "../store/storeContext";

const TextEditorBar = () => {
  const dataCtx = useContext(DataContext)

  const editorState = dataCtx.editorState

  const setEditorState = dataCtx.setEditorState

    // const editorStateData = 
    // convertToRaw(editorState.getCurrentContent()).blocks

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
