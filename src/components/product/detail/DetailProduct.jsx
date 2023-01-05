import { useContext } from 'react'
import {useCartDetail} from '@/context/useCartDetail'

const DetailProduct = ({ products }) => {

    const {addCartProduct,count, setCount,deleteCount} = useContext(useCartDetail)

    const handleChange = (e) =>{
        if(e.target.value > 0 )return setCount(e.target.value)
       
    }

    return (
        <>

            <section className='container mx-auto p-4 md:py-20'>
                <p className='mb-5 font-semibold uppercase tracking-wide text-orange'>Sneaker Company</p>
                <h2 className='mb-5 text-4xl font-bold'>{products.title}</h2>
                <p className='mb-5'>{products.description}</p>
                <div className='flex  items-center justify-between md:block mb-5'>
                    <p className='flex gap-3 items-center'>
                        <span className='font-bold text-2xl'>${(products.price * (1 - products.descount)).toFixed(2)}</span>
                        <span className='bg-pale-orange text-orange px-2 rounded-md '>{products.descount * 100}%</span>
                    </p>
                    <p className='text-grayish-blue line-through'>${products.price.toFixed(2)}</p>
                </div>

                <div className='grid grid-cols-3 gap-3 '>

                    <div className='col-span-1 bg-light-grayish-blue  font-bold  rounded-md  flex justify-between items-center p-2'>
                        <button className='text-orange text-3xl' onClick={deleteCount}>-</button>
                        <input type='number' className='w-full bg-light-grayish-blue focus:outline-none  text-center' value={count} onChange={handleChange}/>
                        <button className='text-orange text-3xl' onClick={() => setCount(count+1)}>+</button>
                    </div>

                    <button  className='col-span-2 bg-orange text-white  rounded-md flex justify-center items-center  text-sm font-semibold' onClick = {() => addCartProduct({...products,priceFinal:(products.price * (1 - products.descount)).toFixed(2), quantity:count },)}>Add to cart</button>
                </div>
            </section>

        </>
    )
}

export default DetailProduct