import React from 'react'

export const CardGif = ( {title, url }) => {
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
