import React from 'react';
import store from '../store';
import { observer } from "mobx-react";

const NoteList = () => {

    const notes = store.getAllNotes;

    return (
        <div className="container">
          <ul>
        {notes.map((element, index) => (
          <li key={index} onClick={() => store.removeItem(index)}>
            {element}
          </li>
        ))}
      </ul>
        </div>
    )
}
export default observer(NoteList);