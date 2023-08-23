import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img from '../assets/images/Cow_logo.jpg'
import { FaUser } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({ imageUrl }) => {
    return (
        <>
            <div className='main'>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i aria-hidden="true" className="icon"><FaUser /></i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <Link to="/collection" className="navbar-item">
                                <h1>Collection</h1>
                            </Link>
                            <p>This is where I network and build my professional protfolio.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i aria-hidden="true"><AiFillLinkedin /></i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="https://twitter.com/AdamDipinto" target="_blank">Members</a>
                            </h3>
                            <p>This is where I read news and network with different social groups.</p>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <div class="icon">
                                <i class="fa fa-github-square" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <h3>
                                <a href="https://github.com/atom888" target="_blank">atom888</a>
                            </h3>
                            <p>This is where I share code and work on projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
