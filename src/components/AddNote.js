import React, { useState } from 'react';
import store from '../store';
import { observer } from "mobx-react";

const AddNote = () => {

    const [note, setNote] = useState('');

    const handleSubmit = () => {
        store.addNote(note);
        setNote('');
    }

    return <div className="container">
    <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
}

export default observer(AddNote);