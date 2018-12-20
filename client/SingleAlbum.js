import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
    const {album, currentSong, toggleOne, isPlaying} = props
    return (
        <div id='single-album' className='column'>
        <Album album={album} />
        <Songs 
        songs={album.songs} 
        currentSong={currentSong} 
        toggleOne={toggleOne} 
        isPlaying={isPlaying} />
        </div>
    )
}

export default SingleAlbum
