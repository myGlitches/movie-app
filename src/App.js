import Header from "./components/Header"
import ShowData from "./components/ShowData"
import Search from "./components/Search"
import Footer from "./components/Footer"
import About from "./components/About"
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import {useState} from 'react'

function App() {

  const [movieData, setMovieData] = useState({})

  const [showCard, setShowCard] = useState(false)

  const onSubmitHandler = (e, text) => {
    e.preventDefault()
    fetchMovieData(text)
    setShowCard(true)
  }

  async function fetchMovieData(name) {
    const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${process.env.REACT_APP_API_KEY}`)
    const data = await response.json()
    setMovieData(data)
    console.log(data)
  }

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
            <>
              <Search onSubmit={onSubmitHandler} />
              {showCard && <ShowData data={movieData} />}
            </>
        }
        />    
          <Route exact path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
