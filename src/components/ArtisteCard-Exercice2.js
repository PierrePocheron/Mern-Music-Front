import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArtisteCard = (props) => {
    const  artiste  = props.artiste;

    return(
        <div className="card-container">
            <img src="http://terredecompassion.com/wp-content/uploads/2012/03/The-Artist-Logo.svg.png" alt="" class="img-thumbnail"/>
            <div className="desc">
                <h2>
                    <Link to={`/show-artiste/${artiste.art_id}`} className="text-decoration-none text-danger float-center">
                        { artiste.art_nom }
                    </Link>
                </h2>
                <p>Country : {artiste.pay_libelle}</p>
                <h3>Type : {artiste.gen_libelle}</h3>
            </div>
        </div>
    )
};

export default ArtisteCard;
