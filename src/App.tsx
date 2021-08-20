import React,{FC,createContext} from 'react';
import './App.css';
import { Person,Color } from './components/Persons';
interface contextValueInterface {
  name:string
  age:number
}
const App:FC = () => {
  const AppContext = createContext<contextValueInterface | null>(null)
  type names = "Hisham"|"sanu"|4
  const name:names = 4
  const contextValue:contextValueInterface = {
    name:"hisham",
    age:22
  }
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <Person Color={Color.blue} name='Hisham' age={22}  />
    </div>
    </AppContext.Provider>
  );
}

export default App;

