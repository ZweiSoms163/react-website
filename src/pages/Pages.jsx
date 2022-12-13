import React from 'react';
import Discount from '../components/discount/Discount';
import { FlashDeals } from '../components/flashDeals/FlashDeals';
import Home from '../components/MainPage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import { TopCate } from '../components/top/TopCate';
import Shop from '../components/shops/Shop';
import Annocument from '../components/annocument/Annocument';
import Wrapper from '../components/wrapper/Wrapper';

export const Pages = ({ productItems, cartItem, addToCart, shopItems }) => {
  return (
    <div>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument />
      <Wrapper />
    </div>
  );
};
export default Pages;
