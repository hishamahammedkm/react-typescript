import React from 'react'
interface Props {
    person:{
      name:string
      age:number
      note?:string
    }[]
  }
const List:React.FC<Props> = ({person}) => {
    return (
        <div>
            {person.map((item)=><h1>{item.name}- {item.age}-{item.note}</h1>)}
        </div>
    )
}

export default List
