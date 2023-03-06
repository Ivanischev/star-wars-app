import React from 'react'
import { useEffect, useState } from 'react'
import { ListItem } from '../components/ListItem'
import { CardPlanet } from '../components/Card/CardPlanet'
import { Loader } from '../components/Loader'

export function Planets() {
  const [data, setData] = useState([])
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/planets/')
      setLoading(false)
      const result = await response.json()
      setData(result.results)
    }
    fetchData()
  }, [setItem])

  const getPlanetById = (id) => {
    const fetchItem = async () => {
      const response = await fetch(`https://swapi.dev/api/planets/${id}`)
      const result = await response.json()
      setItem(result)
    }
    fetchItem()
  }

  return (
    <>
      <h1>Planets</h1>
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          <ul className="list">
            {data.map((item, index) => (
              <ListItem key={index} item={item} onClick={() => getPlanetById(index + 1)} />
            ))}
          </ul>
        )}
        <CardPlanet item={item} />
      </div>
    </>
  )
}
