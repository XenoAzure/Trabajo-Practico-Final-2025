/* 
Snippet para crear un componente de react
RFC = React Functional Component
*/


import './ContactSidebar.css'
import "./ContactSideBarLeftIcons.css"
import "./ContactSideBarMiddle.css"
import "./ContactSideBarRight.css"
import { useContext } from 'react'
import ContactSearchForm from '../ContactSearchForm/ContactSearchForm'
import ContactList from '../ContactList/ContactList'
import { ThemeContext } from '../../Context/ThemeContext'
import { ContactListContext } from '../../Context/ContactListContext'

export default function ContactSidebar({ children }) {

    /* I wanna thank my 2 friends for helping me with the JS part before I had an Aneurysm, Betharni and Marotte
       I owe them a beer */

    const { isDark, toggleTheme } = useContext(ThemeContext)
    const { contactState } = useContext(ContactListContext)

    const totalUnreadMessages = contactState.reduce((acc, contact) => acc + contact.contact_unseen_messages, 0)
    return (
        <aside className={`aside ` + (isDark ? 'aside-dark' : '')}>
            <div className='first-page-content'>
                <div className="front-page">
                    <div className='left-options'>
                        <div className='upper-icons'>
                            <a className='left-icons' href=""><i class="bi bi-chat-left-text-fill"></i></a>
                            <a className='left-icons' href=""><i class="bi bi-openai"></i></a>
                            <a className='left-icons' href=""><i class="bi bi-chat-dots"></i></a>
                            <a className='left-icons' href=""><i class="bi bi-people"></i></a>
                        </div>
                        <div className='lower-icons'>
                            <a className='left-icons' href=""><i class="bi bi-gear"></i></a>
                            <a className='left-icons' href=""><i class="bi bi-images"></i></a>
                        </div>
                    </div>
                </div>
                <div className={`middle-contacts ${children ? 'hidden-on-mobile' : ''}`}>
                    <div className='title-upper'>
                        <h1 className='main-title'>WhatsApp</h1>
                        <div className='title-two-icons'>
                            <a className='two-icons' href=""><i class="bi bi-plus-square"></i></a>
                            <a className='two-icons' href=""><i class="bi bi-three-dots-vertical"></i></a>
                        </div>
                    </div>


                    <ContactSearchForm />

                    {/* Button for the Dark and FLASHBANG  PWaaaaaoooo themes */}
                    <div className='theme-toggle-container' style={{ width: '100%', padding: '0 15px', display: 'flex', justifyContent: 'center' }}>
                        <button
                            className='buttons-enclosed'
                            style={{ width: '100%', background: isDark ? 'var(--bg-color-secondary)' : '#e9edef' }}
                            onClick={toggleTheme}
                        >
                            <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                            <span style={{ marginLeft: '8px' }}>{isDark ? 'Modo Claro' : 'Modo Oscuro'}</span>
                        </button>
                    </div>

                    <div className='buttons-above'>
                        <a href='' className='buttons-enclosed'>
                            <span className='buttons-inner'>Todos</span>
                        </a>
                        <a href='' className='buttons-enclosed'>
                            <span className='buttons-inner'>No leidos</span>
                        </a>
                        <a href='' className='buttons-enclosed'>
                            <span className='buttons-inner'>Favoritos</span>
                        </a>
                        <a href='' className='buttons-enclosed'>
                            <span className='buttons-inner'>Grupos</span>
                        </a>
                    </div>
                    <ContactList />
                    <div className='bottom-line'>
                        <hr className='horizontal-line-bottom' />
                        <div className='bottom-info'>

                            <span className='text-bottom'>
                                {totalUnreadMessages} mensajes no leídos
                            </span>
                            <span className='text-bottom' style={{ marginTop: '5px' }}>
                                {contactState.length} contactos
                            </span>
                        </div>
                    </div>
                </div>
                <div className={'right-screen ' + (children ? 'show-on-mobile' : '')}>
                    {children}
                </div>
            </div>
        </aside>
    )
}
