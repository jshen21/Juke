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
        {/* <AllAlbums albums={this.state.albums} /> */}
        <div className='container'>

          <div id='single-album' className='column'>
            <div className='album'>
              <a>
                <img src='default-album.jpg' />
                <p>ALBUM 2</p>
                <small>Artist Name</small>
              </a>
            </div>
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
          </div>
        </div>
        
        <Player />
      </div>
    )
  }
}
