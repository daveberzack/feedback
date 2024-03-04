import './Track.css'
import { useState, useEffect } from 'react'

function Track({track, isShown}) {

  const [isWide, setIsWide] = useState(false);

  useEffect( () => {
    if (isShown){
      setTimeout( ()=> { setIsWide(true)}, 20)
    }
    else {
      setTimeout( ()=> { setIsWide(false)}, 20)
    }
  }, [isShown]);

  const myClasses = "track"+ (isShown ? " shown" : "")+ (isWide ? " wide" : "");
  return (
    <div className={myClasses}>
        <h3>{track.title}</h3>
        <h4>{track.artist}</h4>
    </div>
  )
}

export default Track
