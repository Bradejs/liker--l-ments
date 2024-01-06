import React from 'react'

export default function Post({ data, liker }) {
  return (
  <div className='post'>
    <div className='btn'>
      <h2>{data.titre}</h2>
      <p>{data.description} </p>
      <button onClick={()=>liker(data)}>Liker</button>
      <button className="delete">Effacer</button>
    </div>
  </div>
  );
}
