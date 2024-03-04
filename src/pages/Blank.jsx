import './Blank.css'
import { useState, useEffect } from 'react'

function Blank() {
  
  const [isPageShown, setIsPageShown] = useState(false);

  useEffect( () => {
    setTimeout( ()=> { setIsPageShown(true)}, 50)
  }, []);

  const pageClasses = "page" + (isPageShown?" shown":"");
  return (
    <div className={pageClasses} id="blank-page">
    </div>
  )
}

export default Blank