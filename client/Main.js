import React, {Component} from 'react'
import Sidebar from './Sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'
import SingleAlbum from './SingleAlbum'
import axios from 'axios'

//creates the Audio element
const audio = document.createElement('audio')

// Some utility functions for player (prev & next)

const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id)
  idx = mod(idx + interval, currentSongList.length)
  const next = currentSongList[idx]
  return next
}

export default class Main extends Component {
  constructor () {
    super() 
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {},
      isPlaying: false
    }
    this.pickAlbum = this.pickAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggleOne = this.toggleOne.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  //Make AJAX request to fetch all albums
  async componentDidMount(){
    try {
      const response = await axios.get('/api/albums')
      this.setState({albums: response.data})
    } catch (err) {
      console.log(err)     
    }
    audio.addEventListener('ended', () => this.next())
  }

  //Make AJAX request to fetch selected album
  async pickAlbum (albumId) {
    try {
      const response = await axios.get(`/api/albums/${albumId}`)
      this.setState({
        selectedAlbum: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  deselectAlbum () {
    this.setState({selectedAlbum: {}})
  }

  play() {
    audio.play()
    this.setState({isPlaying: true})
  }

  pause () {
    audio.pause()
    this.setState({isPlaying: false})
  }

  start(currentSong) {
    this.pause()
    audio.src = currentSong.audioUrl;
    audio.load();
    this.setState({currentSong})
    this.play();
  }

  toggleOne (selectedSong, selectedSongList) {
    if (selectedSong.id !== this.state.currentSong.id) {
      this.start(selectedSong, selectedSongList)
    } else {
      this.toggle()
    }
  }

  toggle () {
    if (this.state.isPlaying) this.pause()
    else this.play()
  }

  next () {
    const currentSongList = this.state.selectedAlbum.songs
    const currentSong = this.state.currentSong
    this.start(skip(1, {currentSongList, currentSong}))
  }

  prev () {
    const currentSongList = this.state.selectedAlbum.songs
    const currentSong = this.state.currentSong
    this.start(skip(-1, {currentSongList, currentSong}))
  }

  render () {
    const {albums, selectedAlbum, currentSong, isPlaying} = this.state;
    const {toggle, toggleOne, prev, next} = this;
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
