import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactList } from "../services/contactService";

export const ContactListContext = createContext()

const ContactListContextProvider = () => {
    const [contactState, setContactState] = useState([])
    const [loadingContactsState, setLoadingContactState] = useState(true)


    function loadContactList() {
        setLoadingContactState(true)
        setTimeout(
            function () {
                console.log('Cargando la lista de contactos')
                const contact_list = getContactList()
                setContactState(contact_list)
                setLoadingContactState(false)
            },
            2000
        )

    }

    useEffect(
        loadContactList,
        []
    )

    function addNewContact(contactName) {
        const newContact = {
            id: Date.now(), // Generate an ID thatss unique
            nombre: contactName,
            thumbnail: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", // Default avatar
            mensajes: []
        }
        setContactState([...contactState, newContact])
    }

    const providerValues = {
        contactState,
        loadingContactsState,
        loadContactList,
        addNewContact,
    }

    return (
        <ContactListContext.Provider value={providerValues}>
            <Outlet />
        </ContactListContext.Provider>
    )
}


export default ContactListContextProvider