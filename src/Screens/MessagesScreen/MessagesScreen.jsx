import React, { use, useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { getContactById } from '../../services/contactService'
import { ContactDetailContext } from '../../Context/ContactDetailContext'
import MessagesList from '../../Components/MessagesList/MessagesList'
import AddNewMessage from '../../Components/AddNewMessage/AddNewMessage'
import './MessagesScreen.css'


export default function MessagesScreen() {

    const {
        contactSelected,
        loadingContact,
        loadContactById
    } = useContext(ContactDetailContext)
    return (
        <div>

            <ContactSidebar>
                {
                    loadingContact
                        ? <div className='loading-container'>
                            <i className="bi bi-whatsapp loading-logo-icon"></i>
                            <div className='loading-bar-container'>
                                <div className='loading-bar-fill'></div>
                            </div>
                            <span className='loading-text'>Cargando mensajes...</span>
                        </div>
                        : <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div className='chat-header'>
                                <Link to="/" className="back-button-mobile">
                                    <i className="bi bi-arrow-left"></i>
                                </Link>
                                <img
                                    className='header-avatar'
                                    src={contactSelected.contact_avatar}
                                    alt={contactSelected.contact_name}
                                />
                                <div className='header-info'>
                                    <span className='header-name'>{contactSelected.contact_name}</span>
                                    <span className='header-status'>Online</span> {/* Placeholder status */}
                                </div>
                                <div className='header-actions'>
                                    <i className="bi bi-camera-video header-icon"></i>
                                    <i className="bi bi-telephone header-icon"></i>
                                    <i className="bi bi-search header-icon"></i>
                                    <i className="bi bi-three-dots-vertical header-icon"></i>
                                </div>
                            </div>
                            <MessagesList />
                            <AddNewMessage />
                        </div>
                }
            </ContactSidebar>

        </div>
    )
}
