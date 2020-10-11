import React from 'react';
import {Card} from 'react-bootstrap';
import {LieDetector} from './LieDetector';
const Home = () => {
    return(
        <div>
            <h1 className="py-3">Homepage</h1>
            <h5>助教要我做的</h5>
            <p>我是鄭仲堯，學號是b06901137</p>
            <h5>讓助教開心的</h5>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./pi1.jpg" />
                <Card.Body>
                    <Card.Title>鄭仲堯</Card.Title>
                    <Card.Text>電機系爆肝工程師</Card.Text>
                    <Card.Text>興趣魔術</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
  
const Introduction = () => {
    return(
        <div>
            <h1 className="py-3">Introduction</h1>
            <p>i'm too lazy to type anything here.</p>

            
        </div>
    );
};
const Magictoys = () => {
    return(
        <div>
            <h1 className="py-3">Magictoys</h1>
            <LieDetector/>
        </div>
    );
};

  
export { Home, Introduction, Magictoys };