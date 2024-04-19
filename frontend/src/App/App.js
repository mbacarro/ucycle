import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from "../Pages/Home/Home.js"
import About from '../Pages/About/About.js';
import ShoppingBag from '../Pages/ShoppingBag/ShoppingBag.js';
import Inbox from '../Pages/Inbox/Inbox.js';
import Profile from '../Pages/Account/Profile.js';
import Report from '../Pages/Report/Report.js';
import CreateListing from '../Pages/CreateListing/CreateListing.js';
import Category from '../Pages/Category/Category.js';
import ItemDetails from '../Pages/ItemDetails/ItemDetails.js';
import MyStore from '../Pages/Account/MyStore.js';
import Liked from '../Pages/Account/Liked.js';
import Settings from '../Pages/Account/Settings.js';
import Register from '../Pages/Register/Register.js';
import Login from '../Pages/Login/Login.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shopping-bag" element={<ShoppingBag />} />
      <Route path="/inbox" element={<Inbox />} />

      <Route path="/account" element={<Profile />} />
      <Route path="/account/my-store" element={<MyStore />} />
      <Route path="/account/liked" element={<Liked />} />
      <Route path="/account/settings" element={<Settings />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/report" element={<Report />} />
      <Route path="/sell" element={<CreateListing />} />
      <Route path="/:category/:subcategory?" element={<Category />} />
      <Route path="/item/:itemId" element={<ItemDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
