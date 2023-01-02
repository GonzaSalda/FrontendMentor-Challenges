import LogoSneakers from '@/assets/images/logo.svg'
import AvatarImage from '@/assets/images/image-avatar.png'

const MainHeader = () => {
  return (
    <>
          <header className='px-10 flex justify-between'>
              <div className='flex gap-5'>
                  <img src={LogoSneakers} alt="" />
                  <nav>
                      <a href="#">Collections</a>
                      <a href="#">Men</a>
                      <a href="#">Women</a>
                      <a href="#">About</a>
                      <a href="#">Contact</a>
                  </nav>
              </div>
              <div className='flex gap-5'>
                  <p>cart</p>
                  <img src={AvatarImage} alt="" />
              </div>
          </header>
    </>
  )
}

export default MainHeader