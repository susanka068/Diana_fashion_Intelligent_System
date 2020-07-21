import React, { Component } from 'react'
import ProductIndividual from './ProductIndividual';
import {Row , Col} from 'react-bootstrap'
export class ProductPanel extends Component {
    render() {
        return (
            <div>
            <Row>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
            </Row>
            <Row>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
            </Row>
            <Row>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
                <Col>
                <ProductIndividual/>
                </Col>
            </Row>
            </div>
        )
    }
}

export default ProductPanel
