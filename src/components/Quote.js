import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class Quote extends Component {
    render() {
        return (
            <div className="section-content">
                <section id="quote">
                    <div className="container">
                        <div className="red-divider"></div>
                        <div className="heading">
                            <h2>Quote</h2>
                        </div>
                        <Carousel id="myCarousel">
                            <Carousel.Item interval={10000} className="carousel-item">
                                <h3>"There is no meaningless effort, just try your best or not.<br />
                                There is no such thing as too late,
                                but you dare to change"
                            </h3>
                                <p>- trangnguyen307 -</p>
                            </Carousel.Item>
                            <Carousel.Item interval={10000} className="carousel-item">
                                <h3>"Never dream for "success". Work for it"</h3>
                                <p>- Harsh Dwivedi -</p>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item">
                                <h3>“Accept yourself, love yourself, and keep moving forward.<br />If you want to fly, you have to give up what weights you down.”</h3>
                                <p>-Roy T. Bennett-</p>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </section>
            </div>
        );
    }
}

export default Quote;