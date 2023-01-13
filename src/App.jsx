import React, { useEffect, useState } from 'react'
import avatarMark from './assets/images/avatar-mark-webber.webp'
import avatarAngela from './assets/images/avatar-angela-gray.webp'
import avatarJacob from './assets/images/avatar-jacob-thompson.webp'
import avatarRikzy from './assets/images/avatar-rizky-hasanuddin.webp'
import avatarKimberly from './assets/images/avatar-kimberly-smith.webp'
import avatarNathan from './assets/images/avatar-nathan-peterson.webp'
import avatarAnna from './assets/images/avatar-anna-kim.webp'
import imgChess from "./assets/images/image-chess.webp"

import Notifications from './components/Notifications'
const App = () => {


  const [people, setPeople] = useState(

    [
      {
        id: 1,
        name: "Mark Webber",
        img: avatarMark,
        text: "reacted to your recent post",
        span: "My first tournament today!",
        time: "1m ago",
        readed: false,
        isImgComment: false
      },
      {
        id: 2,
        name: "Angela Gray",
        img: avatarAngela,
        text: "Followed you",
        span: "",
        time: "5m ago",
        readed: false,
        isImgComment: false
      },
      {
        id: 3,
        name: "Jacob Thompson",
        img: avatarJacob,
        text: "Has joined your group",
        span: "Chess club",
        time: "5m ago",
        readed: false,
        isImgComment: false
      },
      {
        id: 4,
        name: "Rikzy hasanuddin",
        img: avatarRikzy,
        text: "sent you a private message",
        span: "",
        msg: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "1m ago",
        readed:true,
        isImgComment: false
      },
  
      {
        id: 5,
        name: "Kimberly Smith",
        img: avatarKimberly,
        text: "commented on your picture",
        span: " ",
        msg: "",
        time: "1m ago",
        readed: true,
        isImgComment: true,
        imgComment: imgChess
      },
      {
        id: 6,
        name: "Nathan Peterson",
        img: avatarNathan,
        text: "reacted to your recent post",
        span: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        readed: true,
        isImgComment: false
      },
      {
        id: 7,
        name: "Anna Kim",
        img: avatarAnna,
        text: "left the group",
        span: "Chess Club",
        time: "2 weeks ago",
        readed: true,
        isImgComment: false
      }
  
    ]
  )


    const count = (people.filter(item => !item.readed).length)

  const markAllRead = () => {
    setPeople(people.map((item) =>(
      {...item, readed:true}
    )))
  }

  return (
    <>


      <main className='bg-[#F9FAFE] flex justify-center items-center h-auto'>

        <div className='bg-[#FFFFFF] max-w-[730px] p-8'>
          <header className='flex justify-between my-4 '>
            <h1 className='text-2xl font-semibold mb-2'>Notifications <span className='bg-[#053378] text-white text-xs  rounded-md py-[2px] px-[9px]'>{count}</span></h1>
            <button  className='text-[#72757A]' onClick={markAllRead}>Mark all as read</button>
          </header>

          <Notifications people={people} />
        


        </div>
      </main>


    </>
  )
}

export default App