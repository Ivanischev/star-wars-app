import React, { useState, useEffect } from 'react'
import { ListItem } from '../components/ListItem'
import { CardStarship } from '../components/Card/CardStarship'
import { Loader } from '../components/common/Loader'
import { Row } from '../components/common/Row'
import { Container } from '../components/common/Container'
import { Title } from '../components/common/Title'
import { BackButton } from '../components/common/BackButton'

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

  const getStarshipByURL = (url) => {
    const fetchItem = async () => {
      const response = await fetch(url)
      const result = await response.json()
      !response.ok ? setItem('') : setItem(result)
    }
    fetchItem()
  }

  return (
    <Container>
      <Row>
        <BackButton />
      </Row>
      <Title text="Starships" />
      <Row>
        {loading ? (
          <Loader />
        ) : (
          <ul className="list">
            {data.map((item, index) => (
              <ListItem key={index} item={item} onClick={() => getStarshipByURL(item.url)} />
            ))}
          </ul>
        )}
        <CardStarship item={item} />
      </Row>
    </Container>
  )
}
