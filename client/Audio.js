import React, {Component} from 'react'
import Main from './Main'

//creates the Audio element
const audio = document.createElement('audio')

//creates the Audio component to modularize the code, handling all the player features
class Audio extends Component {
    constructor () {
        super()
        this.state = {
            currentSong: {},
            isPlaying: false

        }
        this.toggle = this.toggle.bind(this)
        this.toggleOne = this.toggleOne.bind(this)
    }

    play() {
        audio.play()
        this.setState({isPlaying: true})
    }

    pause () {
        audio.pause()
        this.setState({isPlaying: false})
    }

    load(currentSong) {
        audio.src = currentSong.audioUrl;
        audio.load();
        this.setState({currentSong})
    } 
    
    start(currentSong) {
        this.pause()
        this.load(currentSong)
        this.play();
    }

    toggleOne (selectedSong) {
        if (selectedSong.id !== this.state.currentSong.id) {
          this.start(selectedSong)
        } else {
          this.toggle()
        }
    }
    
    toggle () {
    if (this.state.isPlaying) this.pause()
    else this.play()
    }

    render () {
        return (
            <Main
                {...this.state}
                toggleOne={this.toggleOne}
                toggle={this.toggle} />
        )
    }
}

export default Audio

