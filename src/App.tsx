import React, { FC, useState, useEffect } from 'react';
import './App.css';
import List from './List';

interface State {
  person:{
    name:string
    age:number
    note?:string
  }[]
}

const App: FC = () => {
  const [persons, setPersons] = useState<State["person"]>([])
  const [newPerson,setNewPerson]= useState({
    name:"",
    age:0,
    note:""
  })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setNewPerson({...newPerson,
      [e.target.name]:e.target.value,
      
    })
    
  }
  const post = ():void=>{
    setPersons([...persons,newPerson])
  }
  return (
    <div className="App">
      <h1>name</h1>
      <input onChange={handleChange} name='name' type="text" />
      <h1>age</h1>
      <input onChange={handleChange} name='age' type="text" />
      <h1>note</h1>
      <input onChange={handleChange} name='note' type="text" />
      <button onClick={post}>ADD</button>
      <h1>Persons</h1>
      <List person={persons}  />
    
    
    </div>
  );
}

export default App;

