import React from "react";

export default function Card1({ data, name }) {
    console.log(name)
    return (
        <div className="home-card">
            <div className="home-card-title">{data.title}</div>
            <div className="home-card-items-container">
                {data.items.map((item) => (
                    <div className="home-card-item">
                        <img
                            className="home-card-item-image"
                            src={item.image}
                            alt="home-card-item"
                        />
                        <div className="home-card-item-title"> {item.title} </div>
                    </div>
                ))}
            </div>
            <a className="home-card-redirect" href={data.redirect.url}>
                {data.redirect.label}
            </a>
        </div>
    );
}