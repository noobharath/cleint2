import React from 'react';


export default function Seasonal(props) {

  return (
    <div className="seasonal row mx-auto p-5">
        <div className="col-md-6 ">
            <div className='seasonal_image_container align-self-center mx-auto'>
                <img src='/images/diwali.jpg' className='align-self-center'/>
            </div>
        </div>
        <div className="col-md-6 seasonal_text_container align-self-center">
            <h1>Celebrate this colorful diwali with us</h1>
            <h3 className='text-center'>24 October 2022</h3>
            <button className='text-center align-self-center'>Get the card</button>
        </div>
        <style jsx>
            {`
                .seasonal{
                    font-family: 'Open Sans', sans-serif;
                    background-color: #e7e6bc;
                }
                .seasonal_image_container{
                    margin-top: 5vw;
                    height: 32vw;
                    width: 34vw;
                    border: 1px solid var(--color);
                    display: flex;
                    flex-direction: column;
                }
                .seasonal_image_container img{
                    position: relative;
                    bottom: 5.15vw;
                    width: 30vw;
                    height: 37vw;
                }
                .seasonal_text_container{
                    text-align: center;
                }
                .seasonal_text_container button{
                    border-radius: 5px;
                    border-color: var(--color);
                    font-family: 'Nunito', sans-serif;
                    color: black;
                    font-size: 2vw;
                }
                .seasonal_text_container h1{
                    font-size: 4vw;
                }
                @media screen and (max-width:768px) {
                    .seasonal_image_container{
                        margin-top: 2rem;
                        width: 15rem;
                        height: 15rem;
                        margin-left: 7vw;
                    }
                    .seasonal_image_container img{
                        bottom: 2rem;
                        width: 13rem;
                        height: 16rem;
                    }
                    .seasonal_text_container h1{
                        font-size: 2rem;
                    }
                    .seasonal_text_container button{
                        font-size: 1.5rem;
                    }
                }
            `}
        </style>
    </div>
  )
}