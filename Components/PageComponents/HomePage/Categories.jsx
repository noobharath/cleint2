import React from 'react'
import Data from '../../data/CatagoryData'

export default function Categories() {
  return (
    <div className='categories row p-4'>
        <h1>Explore Our catalogue</h1>
      <div className='category_component'>
      {
        Data.map(data => {
          return(
            <div className="container_row">
              <div className="layer1" >
                  <img src={data.img1} className='image' />
              </div>
              <div className="layer2" >
                  <img src={data.img2} className='image' />
              </div>
              <div className='rack'>
                <p>{data.category_name}</p>
              <img src='/images/Rack2.png' className="rack_image" />
              </div>
            </div>
             )
          })
        }
    </div>

        {/* please don't touch anything here */}

    <style jsx>
        {`   
            .categories{
                margin: 0px 3vw;
                height: 110vh;
                padding-top: 3vw;
                height: fit-content;
                padding-bottom: 2%;
                border: 1px solid black;
            }

            .category_component{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
            .categories h1{
                margin-bottom: 2rem;
                font-family: 'Open Sans', sans-serif;
            }

            @keyframes color-change {
               0% { color: red; }
               50% { color: blue; }
               100% { color: red; }
            }


            /* text animation */

            .container_row{
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-bottom: 5%;
                padding-left: 0%;
            }

            .layer1 {
                width: 90%;
            }
            
            .layer2{
                width: 100%;
                margin-left: -74%;
            }

            .image{
                width: 9.5vw;
            }

            .layer1 img{
                margin-left: 23%;
                transform: rotate(10deg);
            }


            .layer2 img{
                transform: rotate(-7deg);
            }


            .rack{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 13vw;
                margin-left: -3.8vw;
                margin-top: 8vw;
            }


            .rack p{
                margin-top: 37%;
                font-family: 'Open Sans', sans-serif;
                font-size: 25px;
                width: fit-content;
                position: absolute;
                text-align: center;
            }
            .rack_image{
                width: 100%;
            }
            .container_row:hover .layer2 img{
                transform: translateY(-10px);
                transition: .5s;
                margin-left: 6.2%;
            }
            .container_row:hover .layer1 img {
                transform: translateY(-8px);
                margin-left: 17%;
                transition: .5s;
            }
            @media screen and (width: 768px) {
                .rack{
                    margin-right: 3vh;
                }
            }
            
            @media screen and (max-width:768px){
                .image{
                    width: 4rem;
                }
            
                .layer1{
                    width: 90%;
                }
                .rack{
                    width: 5rem;
                    margin-top: 7vh;
                    margin-right: 2vh;
                }
                .rack p{
                    font-size: medium;
                }
                .categories h2{
                    font-size: 2rem;
                }
                .categories p{
                    font-size: large;
                }
            }
        `}
    </style>
    </div>
  )
}