import React from 'react'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

const audio = document.createElement('audio')

export default class Main extends React.Component {
  constructor () {
    super() 
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.pickAlbum = this.pickAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
    this.start = this.start.bind(this)
  }

  async componentDidMount(){
    try {
      const response = await axios.get('/api/albums')
      this.setState({albums: response.data})
    } catch (err) {
      console.log(err)     
    }
  }

  async pickAlbum (albumId) {
    try {
      const response = await axios.get(`/api/albums/${albumId}`)
      this.setState({selectedAlbum: response.data})
    } catch (err) {
      console.log(err)
    }

  }

  deselectAlbum () {
    this.setState({selectedAlbum: {}})
  }

  start(audioUrl) {
    audio.src = audioUrl;
    audio.load();
    audio.play();
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className='container'>
        {
          this.state.selectedAlbum.id?
          <SingleAlbum album={this.state.selectedAlbum} start={this.start} />:
          <AllAlbums albums={this.state.albums} pickAlbum={this.pickAlbum} />
        }
        </div>     
        <Player />
      </div>
    )
  }
}
