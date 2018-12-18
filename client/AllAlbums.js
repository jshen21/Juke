import React from 'react'
import Album from './Album'

const AllAlbums = (props) => {
    const {albums, pickAlbum} = props
    return (
        <div id='albums' className='row wrap'>
            {
                albums.map((album, i) => 
                    <Album album={album} pickAlbum={pickAlbum} key={i} />)
            }          
        </div>    
    )
}

export default AllAlbums
