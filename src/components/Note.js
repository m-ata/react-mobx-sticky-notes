import React from "react";

const Note = (props) => {
    const { note } = props;
  return (
    <div class="card">
      <div class="content">
        <p> {note} </p>
      </div>
    </div>
  );
};
export default Note;