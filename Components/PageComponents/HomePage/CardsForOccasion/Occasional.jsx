import CardsSlider from "./CardsSlider";

import React from 'react'

export default function Occasional() {
  return (
    <div className="row p-4 occasional">
        <div className="col-md-6 card-container">
            <CardsSlider />
        </div>
        <div className="col-md-6  text-container">
            <h2 className="text-center align-self-center">Cards for every occasion</h2>
            <h3 className="text-center align-self-center">From Baby Shower to Retirement Party</h3>
            <button>Explore</button>
        </div>
        <style jsx>
        {`
            .occasional{
                margin: 0px 3vw;
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
            }
            .text-container{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border-left: 1px solid black;
            }
            .text-container h2{
                font-size: 3.5vw;
            }
            .text-container button{
                border-radius: 5px;
                border-color: var(--color);
                font-family: 'Nunito', sans-serif;
                color: black;
                font-size: 2vw;
            }
            @media screen and (max-width: 768px) {
                .text-container{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    margin-top: 2vh;
                    border-left: 1px solid transparent;
                }
                .text-container h2{
                    font-size: 2rem;
                }
                .text-container button{
                    font-size: 1rem;
                }
            }
        `}
        </style>
    </div>
  )
}