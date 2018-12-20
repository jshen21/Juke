import React, {Component} from 'react'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

export default class Main extends Component {
  constructor () {
    super() 
    this.state = {
      albums: [],
      selectedAlbum: {},
    }
    this.pickAlbum = this.pickAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
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

  render () {
    const {albums, selectedAlbum} = this.state;
    const {currentSong, toggle, toggleOne, prev, next, isPlaying} = this.props
    return (
      <div id='main' className='row container'>
        <Sidebar deselectAlbum={this.deselectAlbum} />
        <div className='container'>
        {
          this.state.selectedAlbum.id?
          <SingleAlbum album={selectedAlbum} currentSong={currentSong} toggleOne={toggleOne}
          isPlaying={isPlaying} />:
          <AllAlbums albums={albums} pickAlbum={this.pickAlbum} />
        }
        </div>     
        <Player toggle={toggle} isPlaying={isPlaying} prev={prev} next={next} />
      </div>
    )
  }
}
