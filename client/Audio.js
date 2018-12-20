import React, {Component} from 'react'
import Main from './Main'

//creates the Audio element
const audio = document.createElement('audio')

// Some utility functions for player (prev & next)

const mod = (num, m) => ((num % m) + m) % m

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id)
  idx = mod(idx + interval, currentSongList.length)
  const next = currentSongList[idx]
  return [next, currentSongList]
}

//creates the Audio component to modularize the code, handling all the player features
class Audio extends Component {
    constructor () {
        super()
        this.state = {
            currentSong: {},
            currentSongList: [],
            isPlaying: false

        }
        this.toggle = this.toggle.bind(this)
        this.toggleOne = this.toggleOne.bind(this)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    componentDidMount () {
        audio.addEventListener('ended', () => this.next())
      }

    play() {
        audio.play()
        this.setState({isPlaying: true})
    }

    pause () {
        audio.pause()
        this.setState({isPlaying: false})
    }

    load (currentSong, currentSongList) {
        audio.src = currentSong.audioUrl
        audio.load()
        this.setState({
          currentSong,
          currentSongList
        })
    }
    
    start (song, list) {
        this.pause()
        this.load(song, list)
        this.play()
    }
    
    // start(currentSong, currentSongList) {
    //     this.pause()
    //     audio.src = currentSong.audioUrl;
    //     audio.load();
    //     this.setState({currentSong, currentSongList})
    //     this.play();
    // }

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
        this.start(...skip(1, this.state))
    }
    
    prev () {
        this.start(...skip(-1, this.state))
    }
    

    render () {
        return (
            <Main
                {...this.state}
                toggleOne={this.toggleOne}
                toggle={this.toggle}
                next={this.next}
                prev={this.prev} />
        )
    }
}

export default Audio

