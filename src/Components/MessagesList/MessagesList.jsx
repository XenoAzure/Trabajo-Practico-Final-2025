import React, { useContext } from 'react'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import './MessagesList.css'

const MessagesList = () => {
    const { contactSelected } = useContext(ContactDetailContext)

    // Time foremat [Its a placeholder behavior until actual date are synchronized with servers or something]
    const formatTime = (dateString) => {
        if (!dateString) return ''
        const date = new Date(dateString)
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    return (
        <div className='messages-container'>
            {
                contactSelected.messages.map((message) => {
                    const isSentByMe = message.send_by_me
                    return (
                        <div key={message.message_id} className={`message-row ${isSentByMe ? 'sent' : 'received'}`}>
                            {/* Avatar only for ONCOMING MESSAGES */}
                            {!isSentByMe && (
                                <img
                                    className='message-avatar'
                                    src={contactSelected.contact_avatar}
                                    alt={contactSelected.contact_name}
                                />
                            )}

                            <div className='message-bubble'>
                                <p className='message-content'>{message.message_content}</p>
                                <div className='message-meta'>
                                    <span className='message-time'>{formatTime(message.message_created_at)}</span>
                                    {isSentByMe && (
                                        <i className={`bi ${message.message_state === 'SEEN' ? 'bi-check2-all text-primary' : 'bi-check2'}`} style={{ fontSize: '14px', color: message.message_state === 'SEEN' ? '#53bdeb' : 'inherit' }}></i>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default MessagesList

