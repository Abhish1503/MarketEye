import React from 'react';
import './Coin.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Coin = ({id,name, price, symbol,marketcap,volume,image,priceChange}) => {
    const [link,setdata]=useState();
    return (
        <Link className='link' to={`/coins/${id}`}>
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto' />
                   <h1> <a href='https://api.coingecko.com/api/v3/coins/'>{name} </a></h1>
                   {/* <h1>{name}</h1> */}
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>Price: ₹ {price}</p>
                    <p className='coin-volume'>₹ {volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
            <p className='coin-percent red'>▼ {priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>▲ {priceChange.toFixed(2)}%</p>
          )}
          <p className='coin-marketcap'>Mkt Cap: ₹ {marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Coin;