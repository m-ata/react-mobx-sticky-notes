import React from 'react';
import { observer } from "mobx-react";
import AddNote from './AddNote';
import NoteList from './NoteList';

const App = () => {

    return <>
    <h3>Welcome to Sticky Notes with MobX</h3>
    <AddNote />
    <NoteList />
    </>
}

export default observer(App);