import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const items=useSelector((state)=>state.cart)
  console.log(items)
  return (
    <div className='navbar-div'>
        <div className="left">
            <Link to='/' className='Link'>Home</Link>
            <Link to='/cart' className='Link'>Cart</Link>
        </div>
        <div className="right">
            <div className='cartico'>
                <span><FiShoppingCart/></span>
                <span className='count'>{items.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar