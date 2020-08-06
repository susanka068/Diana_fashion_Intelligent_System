import React from 'react'
import { Button , Image ,Card } from 'react-bootstrap'
import Logo from '../Img/logos/android-chrome-512x512.png'
import {Link} from 'react-router-dom'
import '../index.css';
export default function HomePage() {
    return (
        
        <React.Fragment>

<section id="banner" style={{"padding" : "100px 20px"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-5">
            <h1>Diana</h1>
                    <h3>Fashion Intelligent System</h3> 
                    <p>
                        Diana is an Fashion Intelligent System for designers and retailers powered by modern tool of machine learning
                        sjdkdsfnsfnsdjkdsbd  asnshsd sdhdsfbsd sbdsb sdnsb sdhsd  bjsfnbsd bsbv vsd bsdj sjdkd hjhe sdbjsd dsbsdf sbsd bjsfnb sdbsfb bsdbds dsbds 
                    </p>
                    <Button className="btn btn-primary mybtn" variant="primary">Learn more</Button>
                    
            </div>
            <div className="col-lg-7">
                <Image src={Logo} style={{"width": "auto" , height:"auto"}}/>
            </div>
        </div>
    </div>
</section>
        <section style={{background : '#ececec'}} >
            <div className='container' >
                <div className="row" >
                    <div className="col-lg-6" >
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>GO EXTRACTING</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Link><Button variant="primary">Extract</Button></Link>
                    </Card.Body>
                    </Card>
                    </div>
                    <div className="col-lg-6" >
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
        </section>
        </React.Fragment>
    )
}
