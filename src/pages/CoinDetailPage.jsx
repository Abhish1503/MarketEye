import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import HistoryChart from './HistoryChart';
import CoinData from './CoinData';
import coinGecko from '../apis/coinGecko';

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, detail] = await Promise.all([
        coinGecko.get(`/coins/${id.toLowerCase()}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "1",
          },
        }),
        coinGecko.get(`/coins/${id.toLowerCase()}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "7",
          },
        }),
        coinGecko.get(`/coins/${id.toLowerCase()}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "365",
          },
        }),
        coinGecko.get("/coins/markets/", {
          params: {
            vs_currency: "inr",
            ids: id.toLowerCase(),
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
    };

    fetchData();
  }, []);

  const renderData = () => {
    return (
      <div>
      <div>
        <HistoryChart data={coinData} />
      </div>
      <div>
      <CoinData data={coinData.detail} />
      </div>
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;