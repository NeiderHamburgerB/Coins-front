import React, { useState, useEffect } from "react";
import NavbarTop from "../components/navbars/main";
import { fetchData } from "../utils/fetch";
import CardCoin from "../components/cards/coin";
import CoinChart from "../components/charts/coin"; 

export default function Main() {
  const [info, setInfo] = useState([]);
 
  useEffect(() => {
      async function get() {
        let res = await fetchData(process.env.REACT_APP_DATA);
        const { btc, eth } = res;
        const data = [
          {
            name: "BITCOIN",
            symbol: "BTC",
            values: btc,
            img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
          },
          {
            name: "ETHEREUM",
            symbol: "ETH",
            values: eth,
            img: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
          },
        ];
        setInfo(data);
      }
      get();
  }, []);

  return (
    <>
      <NavbarTop />
      <div className="row mt-3 justify-content-center">
        {info.map((coin,index) => (
          <div className="col-lg-5 col-md-12 col-xs-12 mb-3" key={index}>
            <CardCoin coin={coin} />
            <div className="mt-2">
              <CoinChart coin={coin}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
