import React from 'react'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums />
        <Player />
      </div>
    )
  }
}
