import { KurukinPlayer } from './kurukin-video-player'
import './App.css'

function App() {
  return (
    <main>
      <h1>Video player sandbox</h1>
      <div className="card">
        <KurukinPlayer provider="html5" videoId="" />
      </div>
    </main>
  )
}

export default App
