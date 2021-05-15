import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArtisteCard = (props) => {
    const  artiste  = props.artiste;

    return(
        <div className="card-container">
            <img src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-artiste/${artiste.art_id}`} className="text-decoration-none text-secondary float-center">
                        { artiste.art_nom }
                    </Link>
                </h2>
                <h3>Type : {artiste.art_typ}</h3>
                <p>Pays : {artiste.art_pays}</p>
                <p>Genre : {artiste.art_genre}</p>
            </div>
        </div>
    )
};

export default ArtisteCard;
