import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'
import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'
import PrevIcon from '../icons/PrevIcon'
import NextIcon from '../icons/NextIcon'
import { useState } from 'react'


const arrayProducts = [imgProduct1,imgProduct2,imgProduct3,imgProduct4]


const SliderProduct = () => {

    const [index, setIndex] = useState(0)

    const handleNext = () =>{
        (index === arrayProducts.length -1 ) ? setIndex(0) : setIndex(index + 1)
    }

    const handlePrev = () =>{
        (index === 0) ? setIndex(arrayProducts.length -1) : setIndex(index - 1)
    }

  return (
    <>
    
          <section className='grid md:grid-cols-4 md:grid-rows-2 p-5 gap-5 '>
              <div className='relative col-start-1 col-end-5 row-start-1 row-end-2 rounded-xl'>
                  <img src={arrayProducts[index]} alt="" />
                  <div className='absolute top-1/2 w-full flex justify-between px-2'>
                      <button className='bg-white rounded-full h-10 w-10 grid place-items-center' onClick={handlePrev}><PrevIcon /></button>
                      <button className='bg-white rounded-full h-10 w-10 grid place-items-center'onClick={handleNext}><NextIcon /></button>
                  </div>
              </div>
              <img className='col-start-1 col-end-2 row-start-2 row-end-3 hidden md:block' src={imgProductSmall1} alt="" />
              <img className='col-start-2 col-end-3 row-start-2 row-end-3 hidden md:block' src={imgProductSmall2} alt="" />
              <img className='col-start-3 col-end-4 row-start-2 row-end-3 hidden md:block' src={imgProductSmall3} alt="" />
              <img className='col-start-4 col-end-5 row-start-2 row-end-3 hidden md:block' src={imgProductSmall4} alt="" />
          </section>
    
    </>
  )
}

export default SliderProduct