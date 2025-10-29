import React, { useEffect } from 'react'
import Favorites from '../components/Favorites'
import WatchNext from '../components/WatchNext'
import RecentlyViewed from '../components/RecentlyViewed'

const Profile = () => {
  useEffect(()=>{
            window.scrollTo({ top: 0 });
  },[])
  return (
    <div>  <RecentlyViewed/>
           <Favorites/>
             <WatchNext/>
             
     </div>
  )
}

export default Profile