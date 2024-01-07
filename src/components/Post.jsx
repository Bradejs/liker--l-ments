import React from 'react'

export default function Post({ data, liker, supression}) {
  return (
  <div className={data.liker ? "post active":"post"}>
    <div className='btn'>
      <h2>{data.titre}</h2>
      <p>{data.description} </p>
      <button onClick={() => liker(data)}>{data.liker ? "Déja liker" : "Liker"}</button>
      <button className="delete" onClick={() => supression(data.id)}>Effacer</button>
    </div>
  </div>
  );
}
