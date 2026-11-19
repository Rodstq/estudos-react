import React, {useEffect, useRef} from 'react';
import './dialog.style.css'
import { IconClose } from '../icons';

export function Dialog({isOpen, onClose, children}) {

    // const dialog = document.querySelector("dialog");

    const dialogRef = useRef(null)

    const openDialog = () => {
        dialogRef.current.showModal();
    }
    const closeDialog = () => {
        dialogRef.current.close();
    }

    useEffect(() => {
        console.log('Deveriamos mostrar a modal?', isOpen)
        if(isOpen){
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])

    return (
        <>
            <dialog ref={dialogRef} className='dialog'>
                <div className='btn-close-wrapper'>
                    <button 
                        autoFocus 
                        onClick={onClose}
                        className='btn-close'
                    >
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    )
}