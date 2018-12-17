import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
    let album = props.album
    return (
        <div id='single-album' className='column'>
        <Album album={album} />
        <Songs songs={album.songs} />
        </div>
    )
}

export default SingleAlbum
