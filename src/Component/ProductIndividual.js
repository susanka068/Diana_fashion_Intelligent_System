import React, { Component } from 'react'
import {Card ,Button} from 'react-bootstrap'
import {Link  } from 'react-router-dom'
export class ProductIndividual extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' , 'flex':'0 1 18rem' , 'margin' : '12px' , 'justifyContent' : 'space-between' }}>
            <Card.Img variant="top" src={this.props.data.image} />
            <Card.Body>
            <Card.Title>{this.props.data.title}</Card.Title>
                <Card.Text>
                {
                    this.props.data.details[0]   
                }
                </Card.Text>
                <Link to={{pathname:"/details" ,
                            dataProps: this.props.data
                           }} ><Button variant="primary">details</Button></Link>
            </Card.Body>
            </Card> 
        )
    }
}

export default ProductIndividual
