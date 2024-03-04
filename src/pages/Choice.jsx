import './Choice.css'
import Track from '../components/Track'
import { useState, useEffect } from 'react'

function Choice({track1, track2}) {

  const [isPageShown, setIsPageShown] = useState(false);
  const [isTitleShown, setIsTitleShown] = useState(false);
  const [isTrack1Shown, setIsTrack1Shown] = useState(false);
  const [isTrack2Shown, setIsTrack2Shown] = useState(false);
  const [isOrShown, setIsOrShown] = useState(false);

  useEffect( () => {
    setIsPageShown(true)
    setTimeout( ()=> { setIsTitleShown(true)}, 100)
    setTimeout( ()=> { setIsTrack1Shown(true)}, 400)
    setTimeout( ()=> { setIsOrShown(true)}, 600)
    setTimeout( ()=> { setIsTrack2Shown(true)}, 900)
  }, []);

  const pageClasses = isPageShown ? "page shown" : "page";
  const titleClasses = isTitleShown ? "shown" : "";
  const orClasses = isOrShown ? "shown" : "";
  return (
    <div className={pageClasses} id="choice-page">
        <h1 className={titleClasses}>Choose a Track</h1>
        <Track isShown={isTrack1Shown} track={track1}/>
        <p className={orClasses} id="or">OR</p>
        <Track isShown={isTrack2Shown} track={track2}/>
    </div>
  )
}

export default Choice
