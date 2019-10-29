import React, { useState } from 'react';
import './App.css';
import { useCreateNoteMutation, useFindAllNotesQuery } from './generated-types';
import logo from './logo.svg';

const App: React.FC = () => {
  const allNotes = useFindAllNotesQuery();
  allNotes.startPolling(2000);
  const [createNote] = useCreateNoteMutation();
  const [newNoteTitle, setNewNoteTitle] = useState();
  const [newNoteDescription, setNewNoteDescription] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form onSubmit={() => createNote({ variables: { title: newNoteTitle, description: newNoteDescription }})}>
        <legend>Create New Note</legend>
        <label htmlFor="title">Title</label>
        <input name="title" value={newNoteTitle} onChange={(e) => setNewNoteTitle(e.target.value)} />
        <label htmlFor="description">Description</label>
        <input name="description" value={newNoteDescription} onChange={(e) => setNewNoteDescription(e.target.value)} />
        <input type='submit' />
      </form>
      <ul>
      {
        allNotes.data && allNotes.data.findAllNotes.map((note) => (
        <li><strong>{note.title}</strong>{note.description}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default App;
