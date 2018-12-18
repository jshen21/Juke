import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
    let { album, start } = props
    return (
        <div id='single-album' className='column'>
        <Album album={album} />
        <Songs songs={album.songs} start={start} />
        </div>
    )
}

export default SingleAlbum
