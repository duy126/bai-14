import React from 'react'
import ProductItem from './ProductItem'

const ProductList = (props) => {
   const renderListItem = (item)=>{
     return item.map((ite)=>{
      return <ProductItem ite={ite}></ProductItem>

     })
  }
  return <div>{renderListItem(props.listItem)}</div>
}

export default ProductList