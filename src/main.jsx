import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './pages/Cart';
import Items from './pages/Items';

import './index.css';
import CartProvider from './context/CartContext';

localStorage.setItem(
  'items',
  JSON.stringify([
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      brand: 'Apple',
      category: 'smartphones',
      createdAt: 1679541532000,
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899.5,
      brand: 'Apple',
      category: 'smartphones',
      createdAt: 1679541532000,
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      brand: 'Samsung',
      category: 'smartphones',
      createdAt: 1679541601000,
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280.4,
      brand: 'OPPO',
      category: 'smartphones',
      createdAt: 1679541532000,
    },
    {
      id: 5,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499.83,
      brand: 'Huawei',
      category: 'smartphones',
      createdAt: 1679541601000,
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      brand: 'Apple',
      category: 'laptops',
      createdAt: 1679541601000,
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      brand: 'Samsung',
      category: 'laptops',
      createdAt: 1679541532000,
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      brand: 'Microsoft Surface',
      category: 'laptops',
      createdAt: 1679541601000,
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      description:
        'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      price: 1099,
      brand: 'HP Pavilion',
      category: 'laptops',
      createdAt: 1679541532000,
    },
  ]),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Items />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

