import React, { useContext } from 'react'
import './ContactList.css'
import { Link, useParams } from 'react-router'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ContactList() {
    const {
        contactState,
        loadingContactsState
    } = useContext(ContactListContext)
    const { contact_id } = useParams()

    if (loadingContactsState) {
        return (
            <div className='contact-loading'>


                <span className='loading-text'>Cargando contactos</span>
            </div>
        )
    }

    if (contactState.length === 0) {
        return (
            <div>No hay contactos</div>
        )
    }
    return (
        <div className='contact-list-container'>
            {
                contactState.map(
                    function (contact) {
                        return (
                            <Link className={`contact-item ${Number(contact_id) === contact.contact_id ? 'active' : ''}`} key={contact.contact_id} to={'/chat/' + contact.contact_id + '/messages'}>
                                <div className='avatar-container'>
                                    <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                </div>
                                <div className='contact-info'>
                                    <div className='contact-top'>
                                        <span className='contact-name'>{contact.contact_name}</span>
                                        <span className='contact-time'>12:30</span>
                                    </div>
                                    <div className='contact-bottom'>
                                        <p className='contact-message'>{contact.last_message_content}</p>
                                        {
                                            contact.contact_unseen_messages > 0 &&
                                            <span className='unread-badge'>{contact.contact_unseen_messages}</span>
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}
