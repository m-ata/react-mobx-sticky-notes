import { action, computed, makeObservable, observable } from "mobx";

class StickyNotesStore {

    notes = [];

    constructor() {
        makeObservable(this, {
          notes: observable,
          addNote: action.bound,
          removeNote: action.bound,
          notesCount: computed,
        });
      }

    get getAllNotes() {
        return this.notes;
    }

    get notesCount() {
        return this.notes.length;
    }

    addNote = (note) => {
        this.notes.push(note);
    }

    removeNote = (index) => {
        console.log(index);
        this.notes.splice(index, 1);
    }
}

export default new StickyNotesStore();