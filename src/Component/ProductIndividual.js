import React, { Component } from 'react'
import {Card ,Button , Accordion , Table } from 'react-bootstrap'
export class ProductIndividual extends Component {
    render() {
        const { title , image ,score } = this.props.data
        return (
            <Accordion>
            <Card>
                <Card.Header>
                <Card.Img src={image} style={{height : 'auto' , width: '140px'}}  ></Card.Img>
                <Card.Title>{title}</Card.Title>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Button className="btn btn-primary mybtn" variant="primary">view details</Button>
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
        <Card.Body>trendiness score : {score} </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
        )
    }
}

export default ProductIndividual
