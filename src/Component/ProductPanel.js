import React, { Component } from 'react'
import ProductIndividual from './ProductIndividual';
import NordStormData from '../data/nordstrom-t-shirt.json'
export class ProductPanel extends Component {
    render() {
        //console.log(NordStormData)
        return (
            <div style={{'display':'flex' , 'flexWrap':'wrap' , 'justifyContent':'center' }} >
            {
                NordStormData.map(item => ( <ProductIndividual data={item} /> ))
            }
            </div>
        )
    }
}

export default ProductPanel
