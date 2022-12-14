import React from "react";
import { Note } from "../notes";
import "./CreateArea.css";
import { v4 as uuidv4 } from 'uuid';

type CreateAreaProps = {
  onAdd: Function
}
function CreateArea({onAdd}: CreateAreaProps) {
  const [note, setNote] = React.useState<Note>({id: "", title: "", content: ""});

  const handleChange = (event: React.FormEvent<HTMLInputElement| HTMLTextAreaElement>) => {
    const {name, value} = event.currentTarget;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: React.FormEvent<HTMLButtonElement>) {
    onAdd({...note, id: uuidv4()});
    setNote({...note, title: "", content: ""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
