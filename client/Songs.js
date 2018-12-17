import React from 'react'

const Songs = ({songs}) => {
    return (
        <table id='songs'>
        <tbody>
          <tr className='gray'>
            <td />
            <td>#</td>
            <td>Name</td>
            <td>Artist</td>
            <td>Genre</td>
          </tr>
          {
            songs.map((song,i) => (
          <tr key={i}>
            <td><i className='fa fa-play-circle' /></td>
            <td>{i + 1}</td>
            <td>{song.name}</td>
            <td>{song.artist.name}</td>
            <td>{song.genre}</td>
          </tr>             
            ))
          }
        </tbody>
      </table>
    )
}

export default Songs
