import PrevIcon from '../../icons/PrevIcon'
import NextIcon from '../../icons/NextIcon'
import CloseIcon from '../../icons/CloseIcon'
import { useState } from 'react'



const SliderProduct = ({arrayProducts, arrayProductsSmall,handleOpenModal,handleCloseModal,isOpenModal = false, ...props}) => {

    const [index, setIndex] = useState(0)

    const handleNext = () =>{
        (index === arrayProducts.length -1 ) ? setIndex(0) : setIndex(index + 1)
    }

    const handlePrev = () =>{
        (index === 0) ? setIndex(arrayProducts.length -1) : setIndex(index - 1)
    }
    
  return (
    <>
    
          <section {...props}>
              <div className='relative col-start-1 col-end-5 row-start-1 row-end-2 '>
              {isOpenModal && <button onClick={handleCloseModal}><CloseIcon/></button> }
                  <img className='object-cover md:rounded-md' src={arrayProducts[index]} alt=""  onClick={handleOpenModal}/>
                {isOpenModal && <div className='absolute top-1/2 w-full flex justify-between px-2'>
                      <button className='bg-white rounded-full h-10 w-10 grid place-items-center' onClick={handlePrev}><PrevIcon /></button>
                      <button className=' bg-white rounded-full h-10 w-10 grid place-items-center'onClick={handleNext}><NextIcon /></button>
                  </div>}
              </div>
              {
                  arrayProductsSmall.map((item, i) => ( /* Como accedemos al array con map, podemos tener acceso al indice */
                    <div className='relative overflow-hidden  ' onClick={() => { setIndex(i) }} key={item}>
                          <img
                              src={item}
                              alt=""
                              className='hidden object-cover
                           md:block rounded-md cursor-pointer'
                          />
                          <span className={`absolute top-0  h-full w-full hover:bg-[rgba(255,255,255,0.5)]   ${i=== index && "bg-[rgba(255,255,255,0.5)]"}`}></span>
                    </div>
                  ))
              }
          </section>
    
    </>
  )
}

export default SliderProduct