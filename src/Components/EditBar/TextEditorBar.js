import React, { useContext } from "react";
// import React, { useContext, useState } from "react";
// import {  convertToRaw } from "draft-js";
// import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./TextEditorBar.css"
// import draftToHtml from "draftjs-to-html";
import DataContext from "../store/storeContext"

const TextEditorBar = () => {
  const dataCtx = useContext(DataContext)
  const editorState = dataCtx.editorState
  const setEditorState = dataCtx.setEditorState

  // const [editorState, setEditorState] = useState(()=>
  //   EditorState.createEmpty()
  // );

  // const data = draftToHtml(convertToRaw(editorState.getCurrentContent()))

  // const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
  
  // console.log(data)


  return (
    <div className="mb-6">
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
      {/* <textarea disabled value={data}></textarea> */}
     
    </div>
  );
};

export default TextEditorBar;
