import React from "react";
import { observer } from "mobx-react";
import store from "../store";

const Note = (props) => {
    const { note, index } = props;
  return (
    <div className="card">
      <span onClick={() => store.removeNote(index)}> <i className="fas fa-minus-circle remove"  ></i> </span>
      <div className="content">
        <p> {note} </p>
      </div>
    </div>
  );
};
export default observer(Note);