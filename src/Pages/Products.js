import React, { Component } from 'react'
import SearchBox from '../Component/SearchBox'
import ProductPanel from '../Component/ProductPanel'
export class Products extends Component {
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
