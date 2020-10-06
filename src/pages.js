import React from 'react';
import { Switch, Route } from 'react-router-dom';
const Home = () => {
    return(
        <div>
            <h1 className="py-3">Homepage</h1>
            <h5>助教要我做的</h5>
            <p>我是鄭仲堯，學號是b06901137</p>
            <h5>讓助教開心的</h5>
            <div class="card" style={{width: "180 px"}}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};
  
const Introduction = () => {
    return(
        <div>
            <h1 className="py-3">Introduction</h1>
            <h5>助教要我做的</h5>
            <p>我是鄭仲堯，學號是b06901137</p>
            <h5>讓助教開心的</h5>
            <img/>
        </div>
    );
};
const Magictoys = () => {
    return(
        <div>
            <h1 className="py-3">Magictoys</h1>
            
        </div>
    );
};

  
export { Home, Introduction, Magictoys };