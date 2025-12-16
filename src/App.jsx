import React, { useState, useEffect } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import { Route, Routes } from "react-router"
import ChatScreen from "./Screens/ChatScreen/ChatScreen"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import './global.css'
import ContactListContextProvider from "./Context/ContactListContext"
import ContactDetailContextProvider from "./Context/ContactDetailContext"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
import 'bootstrap-icons/font/bootstrap-icons.css'


import { ThemeContext } from "./Context/ThemeContext"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark } = React.useContext(ThemeContext)

  useEffect(() => {
    // Apply theme to the body, yes body
    if (!isDark) {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [isDark])

  useEffect(() => {
    // Loading time simulator, change the time to whatever I/you want i guess
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <LoadingScreen isLoading={isLoading} />
      {/* <ContactSidebar/> */}
      <Routes>
        {/* Cuando estemos en la ruta contact mostrar el h1 */}
        <Route
          element={<ContactListContextProvider />}
        >
          <Route
            path="/"
            element={
              <ChatScreen />
            }
          />
          <Route
            path="/chat/:contact_id"
            element={
              <ContactDetailContextProvider />
            }
          >
            <Route
              path="/chat/:contact_id/messages"
              element={
                <MessagesScreen />
              }
            />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <h1>Soy el login</h1>
          }
        />
      </Routes>
    </div>
  )
    ;
}

export default App

