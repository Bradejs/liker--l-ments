import React from 'react'

export default function Post({ data }) {
  return (
  <div className='post'>
    <div className='btn'>
      <h2>{data.titre}</h2>
      <p>{data.description} </p>
      <button>Liker</button>
      <button className="delete">Effacer</button>
    </div>
  </div>
  );
}
