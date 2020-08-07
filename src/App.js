import React, { useState} from 'react';
import Header from './comps/Header';
import Form from './comps/Form';
import DisplayThoughts from './comps/DisplayThoughts'
import Modal from './comps/Modal';

function App() {
  const [selectedNote, setSelectedNote] = useState();
  console.log(selectedNote);
  return (
    <div className="App">
      <Header />
      <Form />
      <DisplayThoughts setSelectedNote={setSelectedNote}/>
      { selectedNote && <Modal selectedNote={selectedNote} setSelectedNote={setSelectedNote} />}
    </div>
  );
}

export default App;
