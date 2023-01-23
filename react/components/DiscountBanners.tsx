import React  from 'react'
 import { useProduct  } from 'vtex.product-context'
// import { getSeller } from './modules/seller'


export default function discountBanners() {

  // useEffect(() : void => {
  //   if (
  //     !!document.querySelector(
  //       '.vtex-store-components-3-x-carouselGaleryCursor'
  //     ) &&
  //     !!document.querySelectorAll(
  //       '.vtex-stack-layout-0-x-stackItem--product .price-highlights'
  //     )
  //   ) {
  //     const wrapGalery = document.querySelector(
  //       '.vtex-store-components-3-x-carouselGaleryCursor'
  //     )
  //     const elems = document.querySelector(
  //       '.vtex-stack-layout-0-x-stackItem--product .price-highlights'
  //     )
  //     if (!!elems) wrapGalery?.appendChild(elems)
  //     }
  //   },
  //   [productContextValue]
  // )

  const productContextValue = useProduct()
  const priceWithDiscount: number = productContextValue?.product?.priceRange?.sellingPrice?.lowPrice
  const commercialOffer: number = productContextValue?.product?.priceRange?.listPrice?.highPrice

  const discountPercent: number = priceWithDiscount * 100 / commercialOffer;
  const result = Math.floor(100 - discountPercent)

  return (
    <div>
      <p>Me estoy renderizando</p>
      {productContextValue?.product?.productName}
    <br />
      { `${result}%`}

      {console.log(useProduct(), "useProduct")}
    </div>
  )
}

