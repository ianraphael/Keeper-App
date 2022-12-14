import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteCard from "./components/NoteCard";
import CreateArea from "./components/CreateArea";
import { Note } from "./notes";
import React from "react";


function App() {

  const [notes, setNotes] = React.useState<Note[]>([]);

  function addNote(newNote: Note) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: string){
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return ( 
          <NoteCard 
            key={index}
            note={noteItem}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
