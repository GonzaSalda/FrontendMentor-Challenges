import DetailProduct from './detail/DetailProduct'
import MainImages from './slider/MainImages'

import imgProduct1 from '@/assets/images/image-product-1.jpg'
import imgProduct2 from '@/assets/images/image-product-2.jpg'
import imgProduct3 from '@/assets/images/image-product-3.jpg'
import imgProduct4 from '@/assets/images/image-product-4.jpg'

import imgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import imgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import imgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import imgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'



const arrayProducts = [imgProduct1,imgProduct2,imgProduct3,imgProduct4]

const arrayProductsSmall = [imgProductSmall1,imgProductSmall2,imgProductSmall3,imgProductSmall4]

const products = 
  {
    title: 'Fall Limited Edition Sneakers',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring adurable rubber outer sole, they’ll withstand everything the weather can offer.",
    id: 1,
    price: 250.00,
    descount: 0.5,
    images: arrayProducts,
    imagesSmall:arrayProductsSmall,
  }


const MainProduct = () => {
  return (
    <>

          <main className='grid grid-cols-1 md:grid-cols-2 md:container'>
              <MainImages arrayProducts={arrayProducts} arrayProductsSmall={arrayProductsSmall}/>
              <DetailProduct products = {products} />
          </main>

    </>
  )
}

export default MainProduct