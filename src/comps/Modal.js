import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';

const Modal = ({ModalVisibility, modalData }) => {
    const [editedInputTitle, setEditedInputTitle ] = useState('');
    const [editedInputNote, setEditedInputNote ] = useState('');
    const [selector, setSelector ] = useState('');
    const handleClosingModal = (e) => {
        if(e.target.classList.contains('backdrop')){
            ModalVisibility(false)
        }
    }
    const handleRemove = () => {
        if(window.confirm("Are you sure you want to forget this tought?")) {
            console.log('deleted');
            db.collection('thoughts').doc(modalData[2]).delete();
            ModalVisibility(false);
        }
    }
    const handleEdit = (e) => {
        e.preventDefault();
        if(!editedInputNote.length < 1 ) {
            db.collection('thought').doc(modalData[2]).update({
                title: editedInputTitle,
                note: editedInputNote,
            });
        } else {
            alert('Blank notes should be deleted. Please delete the note or add some thoughts in it. 💭');
        }
    }
    useEffect(() => {
        setEditedInputTitle(modalData[0]);
        setEditedInputTitle(modalData[1]);
        setSelector(modalData[2]);
    },[modalData]);

    return (
        <div className="backdrop" onClick={handleClosingModal}>
            <form className="modal-form-wrapper">
                <input placeholder="Title" defaultValue={editedInputTitle} onChange={e => setEditedInputTitle(e.target.value)}/>
                <textarea defaultValue={editedInputTitle} onChange={e => setEditedInputNote(e.target.value)}/>
                <button type="submit" onClick={handleEdit} className="submit-button">
                    <span>Done</span>
                </button>
                <button type="button" onClick={handleRemove} className="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                </button>
            </form>
        </div>
    )
}

export default Modal;
