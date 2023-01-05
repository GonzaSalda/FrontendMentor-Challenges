import LogoSneakers from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'
import MenuIcons from '../icons/MenuIcons'
import CartIcon from '../icons/CartIcon'
import CloseIcon from '../icons/CloseIcon'
import { useState } from 'react'
import NavbarAncla from './NavbarAncla'



import { useContext } from 'react'
import {useCartDetail} from '@/context/useCartDetail'

import Cart from './Cart'

const MainHeader = () => {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false);


    const {totalQuantityProduct} = useContext(useCartDetail)


    const handleOpenMenu = () => {
        setIsOpenMenu(true);
    };
    const handleCloseMenu = () => {
        setIsOpenMenu(false);
    };

  return (
    <>
          <header className='relative container mx-auto flex justify-between px-5 md:px-11 py-5'>
              <div className='flex items-center gap-5'>
                  <button className='md:hidden' onClick={handleOpenMenu}><MenuIcons /></button>
                  <img src={LogoSneakers} alt="Logo sneakers" />
                  <nav className={`md:static md:flex md:flex-row md:gap-4 md:p-0 md:mt-2 ${isOpenMenu
                          ? "absolute top-0 left-0 z-10 flex h-screen w-[70%] flex-col gap-y-5 bg-white p-8 "
                          : "hidden"
                      }`}>
                      <button className='mb-4 md:hidden' onClick={handleCloseMenu}><CloseIcon /></button>
                      <NavbarAncla text='Collections' />
                      <NavbarAncla text='Men' />
                      <NavbarAncla text='Women' />
                      <NavbarAncla text='About' />
                      <NavbarAncla text='Contact' />
                  </nav>
              </div>
              <div className='flex gap-5'>
                  <button className='relative' onClick={() => setIsOpenCart(!isOpenCart)}><CartIcon />
                  <span className='bg-orange px-2 text-xs top-0 text-white absolute rounded-full font-bold'>{totalQuantityProduct()}</span></button>
                  <img src={AvatarImage} alt="" className='w-8' />
                  {isOpenCart && <Cart/>}
                   
              </div>
          </header>
          <span className='container md:block mx-auto  hidden h-[1px] w-full bg-gray-300 mb-10'></span>
    </>
  )
}

export default MainHeader