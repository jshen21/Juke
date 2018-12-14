import React from 'react'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'
import axios from 'axios'

export default class Main extends React.Component {
  constructor () {
    super() 
    this.state = {
      albums: []
    }
  }

  async componentDidMount(){
    try {
      const response = await axios.get('/api/albums')
      this.setState({albums: response.data})
    } catch (err) {
      console.log(err)     
    }
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums albums={this.state.albums}/>
        <Player />
      </div>
    )
  }
}
