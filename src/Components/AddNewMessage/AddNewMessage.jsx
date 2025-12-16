import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './AddNewMessage.css'

export default function AddNewMessage() {
    const { addNewMessage } = useContext(ContactDetailContext)

    function handleSubmitNewMessage(event) {
        event.preventDefault()
        const input = event.target.elements.mensaje || event.target.closest('form').elements.mensaje
        const message = input.value
        if (message.trim()) {
            addNewMessage(message)
            input.value = ''
        }
    }

    return (
        <form className='message-footer' onSubmit={handleSubmitNewMessage}>
            <div className='footer-icon'>
                <i className="bi bi-emoji-smile"></i>
            </div>
            <div className='footer-icon'>
                <i className="bi bi-paperclip"></i>
            </div>

            <div className='input-container'>
                <input
                    type="text"
                    id='mensaje'
                    name='mensaje'
                    className='message-input'
                    placeholder='Escribe un mensaje'
                    autoComplete='off'
                />
            </div>

            <button className='send-btn footer-icon' type='submit'>
                <i className="bi bi-send" style={{ fontSize: '20px' }}></i>
            </button>
        </form>
    )
}
