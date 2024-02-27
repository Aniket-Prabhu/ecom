import React from 'react'
import '../App.css'
export default function Header(props) {
  return (
    <div className=" flex shopping-cart">
      <div onClick={()=>props.handleShow(false)}>Shopping App</div>
      <div onClick={()=>props.handleShow(true)}>Cart
           <sup>{props.count}</sup>
      </div>
   
    </div>
  )
}
