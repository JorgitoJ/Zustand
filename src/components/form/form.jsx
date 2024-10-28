import React from 'react'
import usePersonStore from '../../context/useContext'

export const Form = () => {

   const firstName = usePersonStore((state) => state.firstName);
   const lastName = usePersonStore((state) => state.lastName);
  
  return (
    
    <div >
        <p>El nombre es: {firstName} y el apellido {lastName}</p>
    </div>
  )
}
