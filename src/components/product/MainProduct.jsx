import DetailProduct from './DetailProduct'
import SliderProduct from './SliderProduct'
const MainProduct = () => {
  return (
    <>

          <main className='grid grid-cols-1 md:grid-cols-2 md:container'>
              <SliderProduct />
              <DetailProduct />
          </main>

    </>
  )
}

export default MainProduct