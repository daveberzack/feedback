import { Link } from 'react-router-dom';
import './Nav.css'

function Nav({setTrackId1, setTrackId2, trackTitle1, trackTitle2}) {

    return (
        <nav>
            <span className="track-title">{trackTitle1}</span>
            <input id="track-id-1" autoComplete="off" onChange={ (e)=>{setTrackId1(e.target.value)} } />
            <Link to="/winner/1" className="round-link"></Link>
            <Link to="/vote/1" className="round-link"></Link>
            <Link to="/" className="square-link"></Link>
            <Link to="/choice" className="square-link"></Link>
            <Link to="/vote/2" className="round-link"></Link>
            <Link to="/winner/2" className="round-link"></Link>
            <input id="track-id-2" autoComplete="off" onChange={ (e)=>{setTrackId2(e.target.value)} } />
            <span className="track-title track-title2">{trackTitle2}</span>
        </nav>
    )
}

export default Nav