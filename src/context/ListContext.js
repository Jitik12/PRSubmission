import React, { createContext, useState } from 'react'

const List = createContext();

const ListContext = ({ children }) => {

  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
 

  return (
    <List.Provider value={{input, setInput, list, setList}}>
      { children }
    </List.Provider>
  )
}

export {List}
export default ListContext