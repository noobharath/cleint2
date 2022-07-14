import React from 'react'


export default function Hero() {
  return (
    <div>
      <div className='hero row p-5' >
        <div className='col-md-6 justify-content-center align-self-center hero_text'>
            <p>Celebrate Life with perfect <bold>CARD</bold> and INVITATION</p>
            <button className='hero_button'>Shop our collection</button>
        </div>
        <div className='col-md-6'>
            <div className="justify-content align-self-center imgdiv">
                <img src="/images/heroimage.png" className="heroimg" />
            </div>
        </div>
      </div>
      <style jsx>
        {`
            .hero{
                margin: 0px 3vw;
                margin-top: 4vw;
                border-left: 1px solid black;
                border-right: 1px solid black;
                border-bottom: 1px solid black;
            }
            .imgdiv{
                display: flex;
                justify-content: center;
                align-item: center;
            }
            .heroimg{
                width:25vw ;
            }
            .hero_text{
                font-size: 4vw;
                font-family: 'Titan One', cursive;
            }
            .hero_text bold{
                background-color: black;
                padding: 0px 15px;
                color: white ;
            }
            .hero_button{
                width: 20vw;
                font-size: 2vw;
                border: 3px solid ;
                border-radius: 2px;
                background-color: #e7e6bc;
                border-color: var(--color);
                font-family: 'Nunito', sans-serif;
            }
            @media screen and (max-width:768px) {
                .hero_text{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .hero_text p{
                    font-size: 2.2rem;
                }
                .heroimg{
                    width: 20rem;
                    height: 21rem;
                }
                .hero_button{
                    width: 10rem;
                    font-size: 1rem;
                }
            }
        `}
      </style>
    </div>
  )
}