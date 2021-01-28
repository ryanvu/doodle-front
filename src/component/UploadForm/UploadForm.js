import React, { useRef } from 'react'

const UploadForm = ({ handleClick }) => {

    const captionRef = useRef();

    return (
        <form className="upload__form">
            <textarea ref={captionRef} placeholder="Add a description..." className="upload__caption" name="caption" id="caption" cols="30" rows="10"></textarea>
           <button type="button" className="upload__btn" onClick={() => handleClick(captionRef.current.value)}>Upload</button> 
        </form>
    )
}

export default UploadForm
