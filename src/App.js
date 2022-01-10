import Header from "./components/Header"
import ShowData from "./components/ShowData"
import Search from "./components/Search"
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
    const response = await fetch(`http://www.omdbapi.com/?t=${name}=&apikey=1a321ac`)
    const data = await response.json()
    setMovieData(data)
    console.log(data)
  }

  return (
    <div>
      <Header />
      <Search onSubmit={onSubmitHandler} />
      {showCard && <ShowData data={movieData} />}
    </div>
  )
}

export default App
