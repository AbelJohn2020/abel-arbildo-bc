import React from 'react'
import { Link } from 'react-router-dom';
import "./CardSignUp.css";

const CardSignUp = ({ cardImg, altImg, firstTitle, secondTitle, kind, goTo, idiom, space, setAccount, name }) => {
    return (
        <div onClick={() => setAccount(name)} className={space ? "card space" : "card"}>
            <Link to={goTo} className="linkCard">
                <div className="card__card">
                    <div className="card__box">
                        <img src={cardImg} alt={altImg} className="card__box--img"/>
                    </div> 
                    {
                        idiom
                            ?   <div className="card__information">
                                    <h1 className="card__information--t2">{secondTitle}</h1>
                                    <h1 className="card__information--t1">{firstTitle}</h1>
                                    <p className="card__information--message">{kind}</p>
                                </div>
                            :   <div className="card__information">
                                    <h1 className="card__information--t1">{firstTitle}</h1>
                                    <h1 className="card__information--t2">{secondTitle}</h1>
                                    <p className="card__information--message">{kind}</p>
                                </div>
                    }
                </div>
            </Link>
        </div>
    )
}

export default CardSignUp;
