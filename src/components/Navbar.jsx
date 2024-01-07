import React from 'react'

export default function Navbar({nombreLike}) {
  return (
    <div className='entete'>
        <h3>les posts liker sont : {nombreLike}</h3>
    </div>
  );
}
