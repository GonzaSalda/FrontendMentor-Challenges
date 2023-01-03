import { useState } from 'react'
import SliderProduct from './SliderProduct'

const MainImages = ({arrayProducts ,arrayProductsSmall}) => {

    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleOpenModal = () =>{
        window.innerWidth > 767 && setIsOpenModal(true)  
    }

    const handleCloseModal = () =>{
        setIsOpenModal(false)
    }

  return (
    <>
    
          <SliderProduct
              arrayProducts={arrayProducts}
              arrayProductsSmall={arrayProductsSmall} 
              className='cursor-pointer grid md:grid-cols-4 md:grid-rows-[4fr_1fr] gap-4 lg:px-20 '
              handleOpenModal ={handleOpenModal}
              />

        {
            isOpenModal &&
            <SliderProduct
            arrayProducts={arrayProducts}
            arrayProductsSmall={arrayProductsSmall} 
            isOpenModal={isOpenModal}
            handleCloseModal= {handleCloseModal}
            className='hidden md:absolute md:grid md:grid-cols-4 md:grid-rows-[4fr_1fr] gap-4 lg:px-20 md:max-w-xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:mt-8'/>
        }
         



    </>
  )
}

export default MainImages