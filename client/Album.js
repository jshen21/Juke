import React from 'react'

const Album = (props) => {
    let album = props.album;
    let pickAlbum = props.pickAlbum;
    return (
        <div className='album'>
            <a onClick={() => pickAlbum(album.id)} >
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
            </a>
        </div>
    )
}

export default Album
