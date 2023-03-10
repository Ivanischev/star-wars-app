import React from 'react'
import { useEffect, useState } from 'react'
import { ListItem } from '../components/ListItem'
import { CardPlanet } from '../components/Card/CardPlanet'
import { Loader } from '../components/common/Loader'
import { Title } from '../components/common/Title'
import { Row } from '../components/common/Row'
import { Container } from '../components/common/Container'
import { BackButton } from '../components/common/BackButton'

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

  const getPlanetByURL = (url) => {
    const fetchItem = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setItem(result)
    }
    fetchItem()
  }

  return (
    <>
      <Container>
        <Row>
          <BackButton />
        </Row>
        <Title text="Planets" />
        <Row>
          {loading ? (
            <Loader />
          ) : (
            <ul className="list">
              {data.map((item, index) => (
                <ListItem key={index} item={item} onClick={() => getPlanetByURL(item.url)} />
              ))}
            </ul>
          )}
          <CardPlanet item={item} />
        </Row>
      </Container>
    </>
  )
}
