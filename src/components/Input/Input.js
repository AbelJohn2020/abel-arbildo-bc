import React from 'react'
import Icons from '../Icons/Icons';

export const Input = ({ setActive, placeholderInput, inputValue, onChangeInput, nameIcon, nameInput, active, typeInput, fieldInput, fieldValid }) => {
    return (
        <div>
            <div 
                className={fieldInput==="" && fieldValid=== false ? "box-input empty" : (active === nameInput ? "box-input active" : "box-input")}
                 onClick={() => setActive(nameInput)}
                 onBlur={() => setActive("")}
            >
                <input 
                    type={typeInput}
                    className="form-control" 
                    id={nameInput}
                    name={nameInput}
                    placeholder={placeholderInput}
                    value={inputValue}
                    onChange={onChangeInput}
                    autoComplete="off"
                />
                <div className="box-icon">
                    <Icons type={nameIcon} color="#495057" />
                </div>
            </div>
        </div>
    )
};

export const Password = ({ setActive, placeholderInput, inputValue, onChangeInput, nameInput, active, show, onClickIcon, fieldInput, fieldValid }) => {
    return (
        <div>
            <div 
                className={fieldInput==="" && fieldValid=== false ? "box-input empty" : (active === nameInput ? "box-input active" : "box-input")}
                onClick={() => setActive(nameInput)}
                onBlur={() => setActive("")}
            >
                <input 
                    type={show ? "text" : "password"} 
                    className="form-control" 
                    id={nameInput}
                    name={nameInput}
                    placeholder={placeholderInput}
                    value={inputValue}
                    onChange={onChangeInput}
                    autoComplete="off"
                />
                <div onClick={ onClickIcon } className="password box-icon">
                    <Icons type={show ? "showPassword" : "password"} color="#495057" />
                </div>
            </div>
        </div>
    )
}

