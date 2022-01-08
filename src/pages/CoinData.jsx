import React from "react";
import './CoinData.css';

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="data-main">
          {/* <div >
            <div >
              <span>Market Cap</span>
              <span>{data.market_cap}</span>
            </div>
            <hr />
            <div >
              <span >
                Total Supply
              </span>
              <span>{data.total_supply}</span>
            </div>
          </div>

          <div>
            <div>
              <span >Volume(24H)</span>
              <span>{data.total_volume}</span>
            </div>
            <hr />
            <div>
              <span>high 24h</span>
              <span>{data.high_24h}</span>
            </div>
          </div>

          <div>
            <div>
              <span>
                Circulating Supply
              </span>
              <span>{data.circulating_supply}</span>
            </div>
            <hr />
            <div>
              <span>low 24h</span>
              <span>{data.low_24h}</span>
            </div>
          </div> */}

          <table class="table table-dark table-hover pg">
  <thead>
    <tr>
      <th scope="col" className="pg1">Description</th>
      <th scope="col" className="pg2">Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Market Cap</td>
      <td>{data.market_cap} INR</td>
    </tr>
    <tr>
      <td class="table-active">Total Supply</td>
      <td class="table-active">{data.total_supply}</td>
    </tr>
    <tr>
      <td>Volume(24H)</td>
      <td>{data.total_volume}</td>
    </tr>
    <tr>
      <td class="table-active">High 24h</td>
      <td class="table-active">{data.high_24h} INR</td>
    </tr>
    <tr>
      <td>Circulating Supply</td>
      <td>{data.circulating_supply}</td>
    </tr>
    <tr>
      <td class="table-active">Low 24h</td>
      <td class="table-active">{data.low_24h} INR</td>
    </tr>

  </tbody>
</table>


        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;