import React, { Component } from 'react'
import {Image} from 'react-bootstrap'
export class ProductDetails extends Component {
    render() {
        //console.log(this.props.location)
        const { title , details , image , comments } = this.props.location.dataProps
        return (
            <div>
                <h1>{title}</h1>
        <p>{details[0]}</p>
                <Image src={image} />
            
            {
                comments.map( comment => {
                    return (
                        <div>
                        <h2>{comment.heading}</h2>
                        <p>{comment.body}</p>
                        <p>on {comment.date}</p>
                        </div>
                    )
                })
            }

            </div>
        )
    }
}

export default ProductDetails
