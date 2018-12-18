import React from 'react'

const Album = (props) => {
    const {album, pickAlbum} = props;
    return (
        <div className='album'>
            <a onClick={() => pickAlbum && pickAlbum(album.id)} >
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
            </a>
        </div>
    )
}

export default Album
