import React, {useState} from 'react';

const GithubContext = React.createContext();
const GithubProvider = ({children}) => {
    const [inputValue, setInputValue] = useState('')
    const [selectValue, setselectValue] = useState('')
    return (<GithubContext.Provider value={{inputValue, setInputValue, selectValue, setselectValue}}>
        {children}
    </GithubContext.Provider>)
}
export {GithubProvider, GithubContext}