import React from 'react'
import data from '../../data/Workdata'


export default function Gifts() {
  return (
    <div className='gifts row '>
        <div className='col-md-4 align-self-center mx-auto text-center'>
            <h2>Gift</h2>
            <h2>Your</h2>
            <h2>Love.</h2>
            <p className='px-2 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>
        <div className='col-md-8 align-self-center mx-auto text-center'>
            <div className="gallery">
                <div className='images'>
                    {
                    data.map( image => {
                        return (
                            <img  src={image.img}/>
                        )
                    }) 
                    }
                </div>
            </div>
        </div>
        <style jsx>
            {`
                .gifts{
                    padding: 3vw;
                    border-left: 1px solid black;
                    border-right: 1px solid black;
                    margin: 0px 3vw;
                }
                .gallery{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .images{
                    width: 54vw;
                    height: 60vmin;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    gap: .5vw;
                }
                .images img{
                    height: 100%;
                    flex: 1;
                    object-fit: cover;
                    overflow: hidden;
                    cursor: pointer;
                    border-radius: 10px;
                    transition: all .3s;
                }
                .images img:hover{
                    flex: 2 ;
                }
                @media screen and (max-width: 768px) {
                    .images {
                        width: 20rem;
                    }
                    .imageOne{
                    width: 10rem;
                    }
                }
            `}
        </style>
    </div>
  )
}
