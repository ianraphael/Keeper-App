import { Note } from "../notes";
import "./NoteCard.css";
type NoteProps = {
  note: Note,
  onDelete: Function
}

function NoteCard({note, onDelete}: NoteProps) {
  const {id, title, content} = note;
  const handleClick = () => {
    onDelete(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default NoteCard;
