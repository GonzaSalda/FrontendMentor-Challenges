import PrevIcon from '../../icons/PrevIcon'
import NextIcon from '../../icons/NextIcon'
import { useState } from 'react'



const SliderProduct = ({arrayProducts, arrayProductsSmall}) => {

    const [index, setIndex] = useState(0)

    const handleNext = () =>{
        (index === arrayProducts.length -1 ) ? setIndex(0) : setIndex(index + 1)
    }

    const handlePrev = () =>{
        (index === 0) ? setIndex(arrayProducts.length -1) : setIndex(index - 1)
    }
    
  return (
    <>
    
          <section className='grid md:grid-cols-4 md:grid-rows-[4fr_1fr] gap-4 lg:px-20'>
              <div className='relative col-start-1 col-end-5 row-start-1 row-end-2 '>
                  <img className='md:rounded-md' src={arrayProducts[index]} alt="" />
                  <div className='absolute top-1/2 w-full flex justify-between px-2'>
                      <button className='md:hidden bg-white rounded-full h-10 w-10 grid place-items-center' onClick={handlePrev}><PrevIcon /></button>
                      <button className='md:hidden bg-white rounded-full h-10 w-10 grid place-items-center'onClick={handleNext}><NextIcon /></button>
                  </div>
              </div>
              {
                  arrayProductsSmall.map((item, i) => (
                      <div onClick={() => { setIndex(i) }} key={item}>
                         <img
                           src={item}
                           alt=""
                           className='hidden
                           md:block rounded-md cursor-pointer'
                           /></div>
                  ))
              }
          </section>
    
    </>
  )
}

export default SliderProduct