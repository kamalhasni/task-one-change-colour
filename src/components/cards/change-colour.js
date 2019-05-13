import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

const ChangeColour = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://i1.creativecow.net/u/107592/paints_more_usethisonesmall.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle><h6 className="card-title">Change Modal's Colour On Click</h6></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <a className="btn btn-default float-right" href="/change-colour" >See More</a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ChangeColour;