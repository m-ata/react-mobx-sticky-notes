import React from "react";

const Note = (props) => {
    const { note } = props;
  return (
    <div class="card">
      <i class="fas fa-minus-circle remove"></i>
      <div class="content">
        <p> {note} </p>
      </div>
    </div>
  );
};
export default Note;