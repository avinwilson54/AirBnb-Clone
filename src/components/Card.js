import React from "react";
// import img1 from "../images/katie-zaferes.png";
// import star from "../images/star1.png";

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <>
            <div className="container">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img className="card-image" src={`../images/${props.img}`} alt="katie-zaferes"></img>
                        <div className="rating">
                            <img className="star-img" src="../images/star1.png" alt="star"></img>
                            <span className="star-rating">{props.rating}</span>
                            <span className="rating-count gray">({props.reviewCount})&nbsp;•</span>
                            <span className="rating-count gray">&nbsp;USA</span>
                        </div>
                        <p className="life-lesson">{props.title}</p>
                        <p className="price"><strong>From ${props.price}</strong> / person</p>
            </div>
        </>
    );
}