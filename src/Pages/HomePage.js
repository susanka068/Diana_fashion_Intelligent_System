import React from 'react'
import {Jumbotron , Button , Image ,Card } from 'react-bootstrap'
import Logo from '../Img/logos/android-chrome-512x512.png'
export default function HomePage() {
    return (
        <div style={{'display':'flex' , 'flexDirection':'column' ,'flexWrap':'wrap' , 'marginLeft':'16%'}}>
        <Jumbotron style={{'backgroundColor' : 'white' , 'padding' : "100px 20px" }} >
        <div className="container" style={{ 'position' : 'relative'}}  >
            <div className="row" >
                <div className="col-5" style={{  'width' :'auto'}}>
                    <h1>Diana</h1>
                    <h3>Fashion Intelligent System</h3> 
                    <p>
                        Diana is an Fashion Intelligent System for designers and retailers powered by modern tool of machine learning
                        sjdkdsfnsfnsdjkdsbd  asnshsd sdhdsfbsd sbdsb sdnsb sdhsd  bjsfnbsd bsbv vsd bsdj sjdkd hjhe sdbjsd dsbsdf sbsd bjsfnb sdbsfb bsdbds dsbds 
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </div>
                <div class="col-7">
                    <Image src={Logo} style={{'height':'400px' , 'width': '400px' , position: 'relative'  }} />
                </div>
            </div>
        </div>
        </Jumbotron>
        <div className='row' style={{position :'relative'}}>
        <div className="col-6"  style={{left : '15%'}} >
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>GO EXTRACTING</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Extract</Button>
        </Card.Body>
        </Card>
        </div>
        <div className="col-6" >
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>GO EXPLORING</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">EXPLORE</Button>
        </Card.Body>
        </Card>
        </div>
        </div>
        </div>
    )
}
