import React from 'react'

const Songs = (props) => {
  const {songs, currentSong, toggleOne, isPlaying} = props
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
            songs.map((song,i) => { 
              return (
                <tr key={i} className={song.id === currentSong.id ? 'active' : ''} >
                  <td>
                    <i className={song.id === currentSong.id ? 'fa fa-stop-circle' :  'fa fa-play-circle'} 
                       onClick={() => toggleOne(song)} />
                  </td>
                  <td>{i + 1}</td>
                  <td>{song.name}</td>
                  <td>{song.artist.name}</td>
                  <td>{song.genre}</td>
                </tr>             
              )})
          }
        </tbody>
      </table>
    )
}

export default Songs
