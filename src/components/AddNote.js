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
    <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={5}
        className='text-area'
      />
      <button className={`add-btn ${!note ? 'disabled' : ''}`} disabled={!note} onClick={handleSubmit}>Add</button>
    </div>
}

export default observer(AddNote);