import { createContext, useState } from "react";


export const Context = createContext()

export function ContextProvider(props) {

    const [theme, setTheme] = useState(true)

    function toggleTheme() {
        setTheme(!theme);
    }

    const [data, setData] = useState()

    async function getApi() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            setData(json)
            
        } catch (e) {
            console.log(e.message)
        }
    }

    
    const value = {
        theme,
        toggleTheme,
        data,
        getApi,
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}