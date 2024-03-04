import './Vote.css'
import { useState, useEffect } from 'react'
import Track from '../components/Track'
import { useParams } from 'react-router-dom';

function Vote({track1, track2, title}) {

  const { id } = useParams();
  const myTrack = id==1 ? track1 : track2;

  const [randomBg, setRandomBg] = useState(1);
  const [isPageShown, setIsPageShown] = useState(false);
  const [isTitleShown, setIsTitleShown] = useState(false);
  const [isTrackShown, setIsTrackShown] = useState(false);
  const [titleToShow, setTitleToShow] = useState("");
  const [TrackToShow, setTrackToShow] = useState({artist:"", title:""});

  useEffect( () => {
    if (!isPageShown){
      setIsPageShown(true);
      setTimeout( ()=> { setIsTitleShown(true)}, 100);
      setTimeout( ()=> { setIsTrackShown(true)}, 300);
      setTimeout( ()=> { setTitleToShow(title)}, 100);
      setTimeout( ()=> { setTrackToShow(myTrack)}, 300);

      setRandomBg(randomBg%11+1);
    }
    else {
      setIsPageShown(false)
      setTimeout( ()=> { setIsTitleShown(false)}, 100);
      setTimeout( ()=> { setIsTrackShown(false)}, 200);
      setTimeout( ()=> { setIsPageShown(true)}, 500);
      setTimeout( ()=> { setIsTitleShown(true)}, 600);
      setTimeout( ()=> { setIsTrackShown(true)}, 800);
      setTimeout( ()=> { setTitleToShow(title)}, 500);
      setTimeout( ()=> { setTrackToShow(myTrack)}, 500);
      setTimeout( ()=> { setRandomBg(Math.ceil(Math.random()*11)) }, 500);
      
    }
  }, [title, id]);
  const pageClasses = "page bg" + randomBg + (isPageShown?" shown":"");
  const titleClasses = isTitleShown ? "shown" : "";

  return (
    <div className={pageClasses} id="vote-page">
        <h1 className={titleClasses}>{titleToShow}</h1>
        <Track isShown={isTrackShown} track={TrackToShow}/>
    </div>
  )
}

export default Vote
