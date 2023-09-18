import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/layout'
import { Context_buttonMenu_provider, Context_sound_backgroundMusic_provider } from './contexts'
import { ScrollToTop, Widget_activateSounds } from './components/widgets'
import { AppRoutes } from './routes'
import './App.css'

function App() {

  return (
    <article className='app'>
      <Context_sound_backgroundMusic_provider>
        <Context_buttonMenu_provider>
          <BrowserRouter>
            <Navbar/>
              <AppRoutes/>
              <Widget_activateSounds/>
              <ScrollToTop/>
          </BrowserRouter>
        </Context_buttonMenu_provider>
      </Context_sound_backgroundMusic_provider>
    </article>
  )
}

export default App
