
import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div className="form-wrapper">
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <input placeholder="Title.." name='title' onChange={handleChange}/>
                <textarea placeholder="What's on your mind? 👀" name='note' onChange={handleChange} />
                <button><span>+</span></button>
            </form>
        </div>
    )
}

export default Form
