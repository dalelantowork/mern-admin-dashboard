import React, { useState, useContext, useEffect  } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [loginError, setLoginError] = useState(false);

    return <AppContext.Provider 
        value={{
            setLoginError,
        }}
    >{children}</AppContext.Provider>

}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}