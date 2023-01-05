import { useContext } from 'react'
import {useCartDetail} from '@/context/useCartDetail'
import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import DeleteIcon from '../icons/DeleteIcon'


const Cart = () => {

    const {cartProduct, deleteCartProduct,addProduct,deleteProduct} = useContext(useCartDetail)

    
  return (
    <>
        
          <section className='absolute top-full left-0  z-10 w-full md:max-w-md md:left-full md:-translate-x-full'>
              <div className="bg-white rounded-md mx-4   ">
                  <h4 className='px-6 py-6 font-bold text-lg'>Cart</h4>
                  <hr />
                  {cartProduct.length === 0 && <p className='py-16 font-semibold text-center'>Your cart is empty</p>}
                  {
                      cartProduct.map(item => (
                          <article key={item.id} className='grid grid-cols-[1fr_4fr_1fr] px-6 py-6 items-center gap-2'>
                              <img src={imgProductSmall1} alt="" className='col-start-1 col-end-2 object-cover rounded-md' />
                              <div className='col-start-2 col-end-3'>
                                  <h6>{item.title}</h6>
                                  <p>
                                      <span>${item.priceFinal} x {item.quantity}</span>
                                      <span className='font-bold ml-2'>${(item.priceFinal * item.quantity)}</span>    
                                      <button onClick={()=> deleteProduct(item.id)} className='text-orange text-4xl ml-8 mr-2'>-</button>
                                      <button onClick={() => addProduct(item.id)} className='text-orange text-4xl'>+</button>                                 
                                  </p>
                              </div>
                              <button className='col-start-3 col-end-4 ml-auto' onClick={() => deleteCartProduct(item.id)}><DeleteIcon /></button>
                          </article>
                      ))
                  }
                  {
                      cartProduct.length !== 0 && <div className='px-6 pb-6'>
                          <button className='py-4 w-full text-white bg-orange rounded-md'>Checkout</button>
                      </div>
                  }
              </div>
          </section>

    </>
  )
}

export default Cart