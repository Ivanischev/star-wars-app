import React, { useState, useEffect } from 'react'
import { ListItem } from '../components/ListItem'
import { CardStarship } from '../components/Card/CardStarship'
import { Loader } from '../components/Loader'

export function Starships() {
  const [data, setData] = useState([])
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/starships/')
      setLoading(false)
      const result = await response.json()
      setData(result.results)
    }
    fetchData()
  }, [setItem])

  const getStarshipById = (id) => {
    const fetchItem = async () => {
      const response = await fetch(`https://swapi.dev/api/starships/${id}`)
      const result = await response.json()
      setItem(result)
    }
    fetchItem()
  }

  return (
    <>
      <h1>Starships</h1>
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          <ul className="list">
            {data.map((item, index) => (
              <ListItem key={index} item={item} onClick={() => getStarshipById(index + 1)} />
            ))}
          </ul>
        )}
        <CardStarship item={item} />
      </div>
    </>
  )
}
