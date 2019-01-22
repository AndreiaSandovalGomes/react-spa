import React from 'react'
import AddBtn from './add-btn'
import RemoveBtn from './remove-btn'
import './product.css';

export default function ProductListItem(props){
  return <div className='product-list-item'>
    <h3> { props.name } </h3>
    <img
      height={100}
      title={ props.product.name }
      src= {`/products/${props.product.image}`}
    />
    <div className='description'>{ props.product.description }</div>
    <div className='price'>R$ { props.product.price }</div>
    <div>{ props.product.unity }</div>
    <div>
      <AddBtn
      cartItem={props.cartItem}
      product={props.product}
      addToCart={props.addToCart}
      />
      {
        props.cartItem
        ? <RemoveBtn
          cartItem={props.cartItem}
          product={props.product}
          removeFromCart={props.removeFromCart}
        />
        : null
      }

    </div>
  </div>
  }
