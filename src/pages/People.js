import React, { useEffect, useState } from 'react'
import { ListItem } from '../components/ListItem'
import { CardPeople } from '../components/Card/CardPeople'
import { Loader } from '../components/common/Loader'
import { BackButton } from '../components/common/BackButton'
import { Row } from '../components/common/Row'
import { Title } from '../components/common/Title'
import { useAuth } from '../components/helpers/useAuth'

export function People() {
  // const token = useContext(AuthContext)
  const { token } = useAuth()

  const [data, setData] = useState([])
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const response = await fetch('https://swapi.dev/api/people/')
      setLoading(false)
      const result = await response.json()
      setData(result.results)
    }
    fetchData()
  }, [setItem])

  const getHeroByURL = (url) => {
    const fetchItem = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setItem(result)
    }
    fetchItem()
  }

  return (
    <>
      <Row>
        <BackButton />
      </Row>
      <Title text="People" />
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          <>
            <ul className="list">
              {data.map((item, index) => (
                <ListItem key={index} item={item} onClick={() => getHeroByURL(item.url)} />
              ))}
            </ul>
          </>
        )}
        <CardPeople item={item} />
      </div>
    </>
  )
}
