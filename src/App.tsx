import { BrowserRouter} from 'react-router-dom'
import './App.css'
import { AuthContextProvider } from './Context/AuthContext'
import { MainRoutes } from './routes'
import { getAllLocalStorage, createLocalStorage, orcaMaisLocal } from './services/storage'

function App() {

  !getAllLocalStorage() && createLocalStorage(orcaMaisLocal);

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MainRoutes/>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
