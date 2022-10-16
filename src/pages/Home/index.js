import React, { Component, useState } from "react";
import { Container } from "react-bootstrap";


import './Home.css';


function ListItem(props) {
    return(
        <li>{props.value}</li>
    );
}

 function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number)=>
        <ListItem key={number.toString()} value={number} />
    );
    return(
        <ul>
            {listItems}
        </ul>
    );
} 
const numbers = [1, 2, 3, 4, 5];


export default function Home() {
    return(
        <div>
            <h2> Como exibir os países da API</h2>
            <NumberList numbers={numbers}/>
        </div>
                
    );
}