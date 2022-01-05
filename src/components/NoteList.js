import React from "react";
import store from "../store";
import { observer } from "mobx-react";
import Note from "./Note";

const NoteList = () => {
  const notes = store.getAllNotes;

  return (
      <>
        {notes.map((element, index) => (
          <Note key={index} note={element} index={index} />
        ))}
      </>
  );
};
export default observer(NoteList);
