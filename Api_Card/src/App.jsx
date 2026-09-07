import { useEffect, useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar"

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const data = await response.json()

    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Navbar/>
      <div className="container">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
            <span>By: userId: {card.userId}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default App