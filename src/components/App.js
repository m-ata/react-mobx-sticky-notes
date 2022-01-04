import React from "react";
import { observer } from "mobx-react";
import AddNote from "./AddNote";
import NoteList from "./NoteList";
import "./../scss/styles.scss";

const App = () => {
  return (
    <>
      <div className="container">
        <h3>Welcome to Sticky Notes with MobX</h3>
      </div>
      <AddNote />
      <NoteList />
    </>
  );
};

export default observer(App);
