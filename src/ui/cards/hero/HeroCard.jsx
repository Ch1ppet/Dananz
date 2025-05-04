import React from "react";

const HeroCard = () => {
    return (
        <div className="hero__card">
            <ul className="hero__card-list">
                <li className="hero__card-list-item">
                    <div className="hero__card-list-item--number">
                        350+
                    </div>
                    <div className="hero__card-list-item--text">
                        Project Completed
                    </div>
                </li>
                <li className="hero__card-list-item">
                    <div className="hero__card-list-item--number">
                        23+
                    </div>
                    <div className="hero__card-list-item--text">
                        Professional Teams
                    </div>
                </li>
                <li className="hero__card-list-item">
                    <div className="hero__card-list-item--number">
                        15+
                    </div>
                    <div className="hero__card-list-item--text">
                        Years Experience
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default HeroCard;