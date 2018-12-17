import React from 'react'

const Sidebar = (props) => {
  let { deselectAlbum } = props
  return (
      <div id='sidebar'>
        <img src='juke.svg' id='logo' />
        <section>
          <h4>
            <a onClick={deselectAlbum} >ALBUMS</a>
          </h4>
        </section>
      </div>
  )
} 

export default Sidebar
