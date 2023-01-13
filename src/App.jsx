import React from 'react'
import avatarRicky from './assets/images/avatar-nathan-peterson.webp'
const App = () => {
  return (
    <>

      <main className='bg-[#F9FAFE] flex justify-center items-center h-screen'>
        <div className='bg-[#FFFFFF] max-w-[730px] p-8'>
          <header className='flex justify-between my-4'>
            <h1 className='text-2xl font-semibold mb-2'>Notifications <span className='bg-[#053378] text-white text-xs  rounded-md py-[2px] px-[9px]'>3</span></h1>
            <button className='text-[#72757A]'>Mark all as read</button>
          </header>


          <article className=' bg-[#F6FAFD] mb-4'>
            <div className=' flex gap-3 items-center'>
              <img className=' w-[45px] h-[45px]' src={avatarRicky} alt="avatar" />
              <h5 className='font-bold'> Mark Webber </h5>
              <p>reacted to your recent post My first tournament today! <span className='w-2 h-2 inline-block rounded-full bg-red-900'></span></p>
            </div>
            <span className='text-[#72757A]'>1m ago</span>
          </article>

          <article className='grid grid-rows-[1fr_2fr] grid-cols-[50px_10fr] gap-3'>
            <img className='col-start-1 col-end-2 row-start-1 row-end-2 w-[45px] h-[45px]' src={avatarRicky} alt="avatar" />
            <div className='col-start-2 col-end-3 row-start-1 row-end-2  flex flex-col'>
              <div className='flex gap-2'>
                <h5 className='font-bold'>Rizky Hasanuddin</h5>
                <p>sent you a private message</p>
              </div>
              <span className='col-start-1 col-end-2 row-start-1 row-end-2 text-[#72757A]'>5day ago</span>
            </div>

            <p className='col-start-2 col-end-3 row-start-2 row-end-3 border-2 rounded-md mb-2 py-3 px-2'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
              I'm already having lots of fun and improving my game.</p>
          </article>
        </div>
      </main>


    </>
  )
}

export default App