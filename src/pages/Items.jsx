import React, { useContext, useState } from 'react';
import { Plus, ShoppingBag } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Items() {
  const [allItems] = useState(JSON.parse(localStorage.getItem('items')));

  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <div className='container items-container'>
      <NavLink to='/cart'>
        <button>
          <span>{cartItems.length}</span>
          &nbsp;&nbsp;
          <ShoppingBag />
        </button>
      </NavLink>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th key='id'>ID</th>
            <th key='title' className='sortable' onClick={(_) => handleSort('title')}>
              <div>Title</div>
            </th>
            <th key='description' className='sortable' onClick={(_) => handleSort('description')}>
              <div>Description</div>
            </th>
            <th key='price' className='sortable' onClick={(_) => handleSort('price')}>
              <div>Price</div>
            </th>
            <th key='brand'>
              <div>Brand</div>
            </th>
            <th key='category'>
              <div>Category</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allItems.length === 0 ? (
            <tr>
              <td colSpan={6}>No Items Available</td>
            </tr>
          ) : (
            allItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>$ {parseFloat(item.price).toFixed(3)}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>
                    <button onClick={(_) => addToCart(item)}>
                      <Plus /> Add to Cart
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

