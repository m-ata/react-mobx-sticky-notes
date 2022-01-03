import React, { useState } from 'react';
import store from '../store';
import { observer } from "mobx-react";

const AddNote = () => {

    const [note, setNote] = useState('');

    const handleSubmit = () => {
        store.addNote(note);
    }

    return <>
    <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Item</button>
    </>
}

export default observer(AddNote);