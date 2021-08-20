import {FC,useState,ChangeEvent} from 'react';

interface Props {
    name:string
    age:number
    email?:string
    Color:Color
}
export enum Color {
  red = 'red color',
  blue= 'blue color'

}




export const Person:FC<Props> = ({name,age,email,Color})=> {
  const [state, setState] = useState<string | null>(null)
  const handle = (e:ChangeEvent<HTMLInputElement>)=>{
    setState(e.target.value)
  }
  return (
    <div>
      <h1>{state}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <input  onChange={handle} type="text" name="" id="" />
      <h2>{Color}</h2>
    </div>
  );
}




// export const Person = ({name,age,email}: Props)=> {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   );
// }
