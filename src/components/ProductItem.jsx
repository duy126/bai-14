import React from 'react'

const ProductItem = (props) => {
  return <div className="card" style={{width: '18rem'}} style={{display:'inline-block',width:'29%',margin:'2% '}}>
  <img src={props.ite.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.ite.name}</h5>
    <p className="card-text">{props.ite.price}$</p>
    <p className="card-text">{props.ite.shortDescription}</p>
    <p className="card-text">{props.ite.description}</p>
    <p className="card-text">{props.ite.quantity}</p>
    <button className='btn btn-success'>add to cart</button>
  </div>
</div>

}

export default ProductItem