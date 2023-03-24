import Card from "react-bootstrap/Card";

import ListGroup from "react-bootstrap/ListGroup";

export default function CardCoin(props) {
  
  const { coin } = props

  console.log(coin)
  
  return (
    <>
      <Card className="coin-card">
        <div className="coin-image-wrapper">
          <div className="coin-image">
            <Card.Img
              variant="top"
              src={coin.img}
            />
          </div>
        </div>
        <Card.Body>
          <Card.Title>{coin.name}</Card.Title>
          <Card.Text>{coin.symbol}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Último valor: { coin.values.prices[0].toLocaleString('en-US', {style: 'currency', currency: 'USD'}) }</ListGroup.Item>
        </ListGroup>
      </Card>
        
    </>
  );
}
