import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const AlbumCard = (props) => {
    const  album  = props.album;

    return(
        <div className="card-container">
            <img src={album.img} alt="" class="img-thumbnail" />
            <div className="desc">
                <h2>
                    <Link to={`/show-album/${album.alb_id}`} className="text-decoration-none text-warning float-center">
                        { album.alb_nom }
                    </Link>
                </h2>
                <p>Artiste : {album.art_nom}</p>
                <h3>Price : {album.alb_prix} €</h3>
                
            </div>
        </div>
    )
};

export default AlbumCard;
