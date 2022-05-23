import React from 'react';
import './modal.css'
import closeButton from "../Img/close.svg";

const Modal = ({active, setActive, children, setEditMode}) => {

    return (
        <div className={active ? 'modalWin active' : 'modal'} onClick={() => {
            setActive(false)
            setEditMode(false)
        }}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={(event) => {
                event.stopPropagation()
            }}>
                <img src={closeButton} alt="CloseButton" className={'closeModalButton'}
                     onClick={() => {
                         setActive(false)
                         setEditMode(false)
                     }}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;
