import React from 'react'

const DetailProduct = () => {
  return (
    <>
    
          <section className='container mx-auto p-4 md:py-20'>
              <p className='mb-5 font-semibold uppercase tracking-wide text-orange'>Sneaker Company</p>
              <h2 className='mb-5 text-4xl font-bold'>Fall Limited Edition Sneakers</h2>
              <p className='mb-5'>These low-profile sneakers are your perfect casual wear companion. Featuring a
                  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
              <div className='flex  items-center justify-between md:block mb-5'>
                  <p className='flex gap-3 items-center'>
                      <span className='font-bold text-2xl'>$125.00</span>
                      <span className='bg-pale-orange text-orange px-2 rounded-md '>50%</span>
                  </p>
                  <p className='text-grayish-blue line-through'>$250.00</p>
              </div>
          
              <div className='grid grid-cols-3 gap-3 '>
                
                  <div className='col-span-1 bg-light-grayish-blue  font-bold  rounded-md  flex justify-between items-center p-2'>
                      <button className='text-orange text-3xl'>-</button>
                      <span className='text-2xl'>0</span>
                      <button className='text-orange text-3xl'>+</button>
                  </div>

                  <button className='col-span-2 bg-orange text-white  rounded-md flex justify-center items-center  text-sm font-semibold'>Add to cart</button>
              </div>
          </section>

    </>
  )
}

export default DetailProduct