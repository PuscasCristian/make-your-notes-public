
import React, { useState } from 'react';
import { db, timestamp } from '../firebase/config';

const Form = () => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputNote.length < 1 ) {
            db.collection('thoughts').add({
                title: inputTitle,
                note: inputNote,
                timestamp: timestamp,
              });
              setInputTitle(''); 
              setInputNote('');
              setError('');
        } else {
            setError("I am sure you have something to share. 🤖")
        }
         
    }
    return (
        <div className="form-wrapper">
            <form className="form-wrapper">
                <input placeholder="Title.." name='title' value={inputTitle} onChange={e => setInputTitle(e.target.value)}/>
                <textarea placeholder="What's on your mind? 👀" name='note' value={inputNote} onChange={e => setInputNote(e.target.value)} />
                <button onClick={handleSubmit}><span>+</span></button>
            </form>
            <p className="error">{error}</p>
        </div>
    )
}

export default Form
