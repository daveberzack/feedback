import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { getChoice } from './services/dataService';
import Blank from './pages/Blank';
import Choice from './pages/Choice';
import Vote from './pages/Vote';
import Nav from './components/Nav';

function App() {

  const [trackId1, setTrackId1] = useState(0);
  const [trackId2, setTrackId2] = useState(0);
  const [track1, setTrack1] = useState({artist:"", title:""});
  const [track2, setTrack2] = useState({artist:"", title:""});


  useEffect( () => {
    const newChoice = getChoice(trackId1, trackId2);
    setTrack1(newChoice[0]);
    setTrack2(newChoice[1]);
  }, [trackId1, trackId2]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Blank/> } />
          <Route path="/choice" element={<Choice track1={track1} track2={track2}/> } />
          <Route path="/vote/:id" element={<Vote title="Put Your Hands Up For" track1={track1} track2={track2}/> }/>
          <Route path="/winner/:id" element={<Vote title="The Winner Is..." track1={track1} track2={track2}/> }/>
        </Routes>
        <Nav setTrackId1={setTrackId1} setTrackId2={setTrackId2} trackTitle1={track1.title} trackTitle2={track2.title} />
      </Router>
    </>
  )
}

export default App

