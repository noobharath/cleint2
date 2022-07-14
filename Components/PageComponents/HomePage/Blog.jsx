import React from 'react'
import Data from '../../data/BlogData'

export default function Blog() {
  return (
    <div className='blog_main'>
        <div className='blog_container row p-5'>
        {
        Data.map(data => {
          return(
            <div 
            className='blog col-4 mx-auto '
            key={data.id}
            >
              <img src={data.img}/>
              <p className='small_heading' data-aos="fade-right">{data.category}</p>
              <h5 className='blog_title ' data-aos="fade-left">{data.title}</h5>
              <p className="blog_para " data-aos="fade-right">{data.intro_para}</p>
              <p className="link " data-aos="fade-left"><a  href={data.link}>Read more →</a></p>
            </div>
          )
        })
        }
    </div>
    <style jsx>
        {`
        .blog_container{
        }
        .blog{
            margin: 2vw;
            width: 25vw;
            height: 33vw;
            padding: 0;
            border: 1px solid black;
        }
            .blog img{
                width: 100%;
                height: 17vw;
            }
            .link{
                margin-top: 8px;
                width: 110px;
                position: absolute;
            }
            .link a{
                text-decoration: none;
                color: black;
            }
            .link:after {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0%;
                left: 0;
                width: 0%;
                border-bottom: 2px solid rgb(255, 0, 0);
                transition: 0.4s;
            }
            .link:hover::after {
                width: 110px;
            }
            .blog p{
                margin-left: 5px;
            }
            .blog h5{
                margin-left: 5px;
            }
        `}
    </style>
    </div>
  )
}