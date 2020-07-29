import React, { Component } from 'react'
import SearchBox from '../Component/SearchBox'
import ProductPanel from '../Component/ProductPanel'
export class Products extends Component {

    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render() {
        return (
            <div>
                <SearchBox/>
                <ProductPanel/>
            </div>
        )
    }
}

export default Products
