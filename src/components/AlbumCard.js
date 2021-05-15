import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AlbumCard = (props) => {
    const  album  = props.album;

    return(
        <div className="card-container">
            <img src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-album/${album.alb_id}`} className="text-decoration-none text-primary float-center">
                        { album.alb_nom }
                    </Link>
                </h2>
                <h3>Année : {album.alb_annee}</h3>
                <p>Prix : {album.alb_prix} €</p>
                <p>{album.alb_art}</p>
            </div>
        </div>
    )
};

export default AlbumCard;
