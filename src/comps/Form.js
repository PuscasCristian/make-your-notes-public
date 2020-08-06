import React from 'react'

const Form = () => {
    return (
        <div className="form-wrapper">
            <form className="form-wrapper">
                <input placeholder="Title.." />
                <textarea placeholder="What's on your mind? 👀" />
                <button><span>+</span></button>
            </form>
        </div>
    )
}

export default Form
