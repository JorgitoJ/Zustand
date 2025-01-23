import React from 'react'
import { useUserStore } from './userStore'

export const UserInfo = () => {
    
    const user = useUserStore(state => state.user)
    
    return (
    <div>
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>
  )
}
