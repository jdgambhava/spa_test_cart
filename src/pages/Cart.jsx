import React, { useContext } from 'react';
import { ChevronLeft, Minus, Plus, X } from 'react-feather';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className='container'>
      <h1>Cart</h1>
      <a className='back-btn' onClick={(_) => navigate(-1)}>
        <ChevronLeft /> Back
      </a>
      <table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th key='title' className='sortable' onClick={(_) => handleSort('title')}>
              <div>Title</div>
            </th>
            <th key='description' className='sortable' onClick={(_) => handleSort('description')}>
              <div>Description</div>
            </th>
            <th key='brand'>
              <div>Brand</div>
            </th>
            <th key='category'>
              <div>Category</div>
            </th>
            <th key='quantity'>
              <div>Quantity</div>
            </th>
            <th key='price' className='sortable' onClick={(_) => handleSort('price')}>
              <div>Price</div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan={8} align='center'>
                Wow ! So Empty !!
              </td>
            </tr>
          ) : (
            cartItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>
                    <div className='qtyButton'>
                      <button
                        onClick={(_) =>
                          updateQuantity({
                            id: item.id,
                            add: false,
                          })
                        }
                      >
                        <Minus />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={(_) =>
                          updateQuantity({
                            id: item.id,
                            add: true,
                          })
                        }
                      >
                        <Plus />
                      </button>
                    </div>
                  </td>
                  <td>${parseFloat(item.price).toFixed(2)}</td>
                  <td>
                    <button onClick={(_) => removeFromCart(item.id)}>
                      <X />{' '}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              Total: $
              {parseFloat(
                cartItems.reduce((total, items) => {
                  return total + items.price;
                }, 0),
              ).toFixed(3)}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <br />
      <button disabled>Checkout</button>
    </div>
  );
}
