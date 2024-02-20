import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from "../Pages/Home/Home.js"
import About from '../Pages/About/About.js';
import Bag from '../Pages/Bag/Bag.js';
import Inbox from '../Pages/Inbox/Inbox.js';
import Profile from '../Pages/Profile/Profile.js';
import Report from '../Pages/Report/Report.js';
import CreateListing from '../Pages/CreateListing/CreateListing.js';
import Category from '../Pages/Category/Category.js';
import ItemDetails from '../Pages/ItemDetails/ItemDetails.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/Inbox" element={<Inbox />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Report" element={<Report />} />
      <Route path="/Sell" element={<CreateListing />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/item/:itemId" element={<ItemDetails />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
