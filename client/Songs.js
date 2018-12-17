import React from 'react'

const Songs = () => {
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
          <tr>
            <td><i className='fa fa-play-circle' /></td>
            <td>1</td>
            <td>Song Name</td>
            <td>Artist Name</td>
            <td>Song Genre</td>
          </tr>
          <tr>
            <td><i className='fa fa-play-circle' /></td>
            <td>2</td>
            <td>Song Name</td>
            <td>Artist Name</td>
            <td>Song Genre</td>
          </tr>
          <tr>
            <td><i className='fa fa-play-circle' /></td>
            <td>3</td>
            <td>Song Name</td>
            <td>Artist Name</td>
            <td>Song Genre</td>
          </tr>
        </tbody>
      </table>
    )
}

export default Songs
