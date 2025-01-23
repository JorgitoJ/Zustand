import React,{ useEffect } from 'react'
import  UserInfo  from './store/userInfo'
import  useUserStore  from './store/userStore'

export const User = () => {
    
    const setUser = useUserStore(state => state.setUser)
    
    useEffect(() => {
        const user = {
          name: 'Lionel Andres',
          email: 'lionelmessi@gmail.com',
          avatar: 'https://www.google.com/search?q=messi&sca_esv=c935ac157191f824&sxsrf=AHTn8zprsT9rS_YHuryA7mYyx4O99BJ1PA%3A1737648767534&source=hp&ei=f2qSZ7b2HbWUwbkPxqTpoAo&iflsig=ACkRmUkAAAAAZ5J4j5Aft2jHE2uyP2Nw_yjoVOzk-FZy&udm=2&oq=&gs_lp=Egdnd3Mtd2l6IgAqAggAMgoQIxjwBRgnGOoCMgcQLhgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCSJ4PUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAhSoAgqYAxTxBRxXvbyqJR9LkgcBMaAHAA&sclient=gws-wiz#vhid=7cxrOdqvEfJMqM&vssid=mosaic'
        };
    
        setUser(user);
      }, [setUser]);
    
    return (
    <div>
        <UserInfo/>
    </div>
  )
}
