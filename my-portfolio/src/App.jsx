import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <h1>Elle Miller</h1>
        <p>
          Student at Grand Valley State University pursing a B.S. in Computer Science with a 
          minor in Mathematics and an M.S. in Data Science and Analytics. Board member of the 
          GVSU Society of Women Engineers and an Undergraduate Student Mentor for the 
          College of Computing. 
        </p>
      </div>
  )
}

export default App
