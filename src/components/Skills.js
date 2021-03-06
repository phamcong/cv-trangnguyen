
import React, { Component } from "react";

class Skills extends Component {
    render() {
        return (
            <div className="section-content">
                <section id="skills">
                    <div className="red-divider"></div>
                    <div className="heading">
                        <h2>Compétences</h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90%" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                                        <h5>HTML/CSS 90%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85%" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}>
                                        <h5>JAVASCRIP 85%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <h5>BOOTSTRAP 80%</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <h5>NODEJS 70%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <h5>MONGODB 70%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="50%" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>
                                        <h5>REACTJS 50%</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="70%" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}>
                                        <h5>GIT/GITHUB 70%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <h5>VISUAL STUFIO CODE 80%</h5>
                                    </div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80%" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}>
                                        <h5>WINDOWS &#155;=7 80%</h5>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </div >
        );
    }
}

export default Skills;
