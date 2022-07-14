import React from 'react'

export default function TextComponent() {
  return (
    <div className='row text-component'>
        <div className="col-12 p-3">
            <h2 className='text-center p-3'>Send the gifts online to your loved ones</h2>
            <p className='text-center col-8 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
               aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
        </div>
        <style jsx>
          {`
            .row{
              background-color: black;
              color: #9B9B9B;
            }
            .row div h2{
              font-size: 3vw;
            }
            .row div p{
              font-size: x-large;
            }
          `}
        </style>
    </div>
  )
}
