import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const MainCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.item.img} alt="Card image cap" />
        <CardBody>
          <CardTitle><h6 className="card-title">{props.item.name}: {props.item.description}</h6></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <a className="btn btn-default float-right" href={props.item.url} >See More</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default MainCard