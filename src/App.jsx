import React from 'react'
import avatarMark from './assets/images/avatar-mark-webber.webp'
import avatarRikzy from './assets/images/avatar-rizky-hasanuddin.webp'
import avatarKimberly from './assets/images/avatar-kimberly-smith.webp'
import imgChess from "./assets/images/image-chess.webp"

import Notifications from './components/Notifications'
const App = () => {

  const people = [
    {
      id: 1,
      name: "Mark Webber",
      img: avatarMark,
      text: "reacted to your recent post",
      span: "My first tournament today!",
      time: "1m ago",
      readed: true,
      isImgComment: false
    },
    {
      id: 2,
      name: "Rikzy hasanuddin",
      img: avatarRikzy,
      text: "sent you a private message",
      span: false,
      msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      time: "1m ago",
      readed: false,
      isImgComment: false
    },

    {
      id: 3,
      name: "Kimberly Smith",
      img: avatarKimberly,
      text: "commented on your picture",
      span: false,
      msg: false,
      time: "1m ago",
      readed: false,
      isImgComment: true,
      imgComment: imgChess
    }

  ]




  return (
    <>


      <main className='bg-[#F9FAFE] flex justify-center items-center h-screen'>
        <div className='bg-[#FFFFFF] max-w-[730px] p-8 mt-8'>
          <header className='flex justify-between my-4 '>
            <h1 className='text-2xl font-semibold mb-2'>Notifications <span className='bg-[#053378] text-white text-xs  rounded-md py-[2px] px-[9px]'>3</span></h1>
            <button className='text-[#72757A]'>Mark all as read</button>
          </header>


          <Notifications people={people} />


        </div>
      </main>


    </>
  )
}

export default App