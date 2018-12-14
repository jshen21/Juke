import React from 'react'

const AllAlbums = ({albums}) => {
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
            {
                albums.map((album, i) => (
                    <div className='album' key={i}>
                        <a>
                        <img src={album.artworkUrl} />
                        <p>{album.name}</p>
                        <small>{album.artist.name}</small>
                        </a>
                    </div>
                ))
            }          
            </div>
        </div>
    )
}

export default AllAlbums
