import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './landingPage.css';
import image1 from './assets/Image1.jpg';
import image2 from './assets/image2.jpg';

class LandingPage extends React.Component{

    render(){
        return(
            <div className="container-fluid">
                <section>
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand">invoiceME</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link">About<span class="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Contact</a>
                                </li>
                              
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <button className="btn" type="submit">Sign In</button>
                                    <button className="btn btn-success my-2 my-sm-0" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </nav>
                </section>

                <section>
                    <div className="flex-container">
                    <div className="getPaid">
                        <h1 className="header1">Get paid faster and improved your cash flow</h1><br/>
                        <h5 className="header2">Professional Online Invoicing and Billing Software for Small Businessed Owners and Freelancers</h5>
                        <button className="btn btn-success my-2 my-sm-0 start" type="submit">Get started now!</button>
                    </div>
                    <div className="getPaidImage">
                        <div className="techGuys">
                            <img src={image1} alt="image" width="400px" height="400px" className="invoice1"/>
                        </div>
                    </div>
                    </div>
                </section>

                <section>
                <div className="flex-container">
                    <div className="getPaid2">
                    <h1 className="header1" style={{color: "white"}}>Tired of looking for where, ways and how to print?</h1><br/>
                        <h5 className="header2" style={{color: "white"}}>Worry no more with our App, you ca get paid right on time.</h5>
                    </div>
                    <div className="getPaidImage2">
                        <div className="techGuys2">
                        <img src={image2} alt="image" width="400px" height="200px" className="invoice1"/>
                        </div>
                    </div>
                    </div>
                </section>
                <section>
                    <div className="footer">
                        <h5 style={{marginTop:"60px"}}>Powered by us</h5>
                    </div>
                </section>
                
            </div>
        );
    }
}


export default LandingPage;