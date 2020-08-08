import React, { useState } from 'react'

const Modal = () => {
    const handleClosingModal = (e) => {
        if(e.target.classList.contains('backdrop')){
            sessionStorage.setItem('modalVisibility', JSON.stringify(false))
            sessionStorage.clear();
        }

    }

    return (
        <div className="backdrop" onClick={handleClosingModal}>
            <form className="modal-form-wrapper">
                <input placeholder="title" />
                <textarea placeholder="get value"/>
                <button type="submit" className="submit-button">
                    <span>Done</span>
                </button>
                <button type="button" className="delete-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                </button>
            </form>
        </div>
    )
}

export default Modal;
