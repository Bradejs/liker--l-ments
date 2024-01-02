import React from 'react'

export default function Post({ data }) {
  return (
  <div className='post'>
    <div>
      <h2>{data.titre}</h2>
      <p>{data.description} </p>
    </div>
  </div>
  );
}
