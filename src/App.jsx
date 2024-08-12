import React from 'react'
import Profile from './Profile'
import EditorModal from './EditorModal'
import HashtagList from './HashtagList'
import PostCard from './PostCard'
import NavigationBar from './NavigationBar'

const App = () => {
  return (
    <div className=' flex flex-row justify-center bg-custom-gray h-screen '>

      <div>
      <Profile/>
      <NavigationBar/>
      </div>
      
     <div>
     <EditorModal/>
     <PostCard/>
     </div>

     <div>
      <HashtagList/>
     </div>
   
    </div>
  )
}

export default App
