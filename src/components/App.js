import React from "react";
import { observer } from "mobx-react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./../scss/styles.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const App = () => {
  return (
    <>
      <div className="container">
        <h2>Welcome to Sticky Notes with MobX</h2>
      </div>
      <AddNote />
      <NoteList />
    </>
  );
};

export default observer(App);
