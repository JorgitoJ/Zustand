import React from 'react'

import usePersonStore from '../../context/useContext'

export const Update = () => {
    
  const updateFirstName = usePersonStore((state) => state.updateFirstName)
  const updateLastName = usePersonStore((state) => state.updateLastName)

  const handleFirstNameChange = (e) => updateFirstName(e.target.value)
  const handleLastNameChange = (e) => updateLastName(e.target.value)

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastNameChange}
      />
    </form>
  )
}

