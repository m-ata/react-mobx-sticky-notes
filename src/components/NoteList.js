import React from "react";
import store from "../store";
import { observer } from "mobx-react";
import Note from "./Note";

const NoteList = () => {
  const notes = store.getAllNotes;

  return (
      <div className="list-container">
        {notes.map((element, index) => (
          <Note key={index} note={element} index={index} />
        ))}
      </div>
  );
};
export default observer(NoteList);
