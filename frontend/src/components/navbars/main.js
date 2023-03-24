import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { fetchData } from "../../utils/fetch.js";

export default function NavbarTop() {
  const [time, setTime] = useState(new Date());

  const [info, setInfo] = useState({});

  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };

  let timeFormat = new Intl.DateTimeFormat("en-US", options).format(time);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    async function get(){
      let res = await fetchData(process.env.REACT_APP_INFO_GENERAL);
      setInfo(res);
    }
    get()
  }, []);

  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            {" "}
            <span className="c-red">{timeFormat}</span>{" "}
          </Navbar.Brand>
          <Nav className="d-flex flex-wrap justify-content-between">
            <Nav.Link>
              Cryptos: <span className="c-blue">{info.cryptos} </span>
            </Nav.Link>
            <Nav.Link>
              Market Cap: <span className="c-blue">{info.market_cap}</span>
            </Nav.Link>
            <Nav.Link>
              24h Vol: <span className="c-blue"> {info.vol_24h}</span>
            </Nav.Link>
            <Nav.Link>
              Exchanges: <span className="c-blue"> {info.exchanges} </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
