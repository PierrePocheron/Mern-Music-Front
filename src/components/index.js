import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Index = (props) => {
    const  album  = props.album;
    const  artiste  = props.artiste;
    const  book  = props.book;


    return(
        <div className="card-container d-flex justify-content-center mt-5 py-4">
            <div className="">
                <button type="button" class="btn btn-primary"><a href="albums" class="text-white">Albums list</a></button>   
                <hr></hr>            
                <button type="button" class="btn btn-secondary"><a href="artistes" class="text-white">Artistes list</a></button> 
                <hr></hr>            
                <button type="button" class="btn btn-success"><a href="exercice1" class="text-white">Exercice 1</a></button> 
                <hr></hr>            
                <button type="button" class="btn btn-danger"><a href="exercice2" class="text-white">Exercice 2</a></button> 
                <hr></hr>  
                <button type="button" class="btn btn-warning"><a href="exercice3" class="text-white">Exercice 3</a></button> 
            </div>
        </div>
    )
};

export default Index;