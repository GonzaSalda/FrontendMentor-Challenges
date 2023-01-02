import LogoSneakers from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcons from '../icons/MenuIcons'
import CartIcon from '../icons/CartIcon'
import CloseIcon from '../icons/CloseIcon'
import { useState } from 'react'
import NavbarAncla from './NavbarAncla'

const MainHeader = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

  return (
    <>
          <header className='container mx-auto flex justify-between px-6 my-5'>
              <div className='flex items-center gap-5'>
              <button className='md:hidden' onClick={handleOpenMenu}><MenuIcons/></button>
                  <img src={LogoSneakers} alt="Logo sneakers"/>
                  <nav className={`md:static md:flex md:flex-row md:gap-4 md:p-0 md:mt-2 ${
                        isOpenMenu
                            ? "absolute top-0 left-0 z-10 flex h-full w-[70%] flex-col gap-y-5 bg-white p-8"
                            : "hidden"
                    }`}>
                    <button className='mb-4 md:hidden' onClick={handleCloseMenu}><CloseIcon/></button>
                    <NavbarAncla text='Collections'/>
                    <NavbarAncla text='Men'/>
                    <NavbarAncla text='Women'/>
                    <NavbarAncla text='About'/>
                    <NavbarAncla text='Contact'/>
                  </nav>
              </div>
              <div className='flex gap-5'>
                  <button><CartIcon/></button>
                  <img src={AvatarImage} alt="" className='w-8'/>
              </div>
          </header>
    </>
  )
}

export default MainHeader