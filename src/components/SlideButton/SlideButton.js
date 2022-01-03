import React from 'react';
import "./SlideButton.css";

const SlideButton = ({ idiom, setIdiom }) => {
    return (
        <div>
            <div className="form-check form-switch d-flex align-items-center">
                <input className="form-check-input" type="checkbox" role="switch" id="changeIdiom" onClick={() => setIdiom(!idiom)}/>
                <label className="form-check-label" htmlFor="changeIdiom">{idiom ? 'en' : 'es' }</label>
            </div>
        </div>
    )
}

export default SlideButton;
