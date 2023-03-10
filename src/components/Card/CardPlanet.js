import React from 'react'

export const CardPlanet = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Rotation period: {item.rotation_period}</p>
      <p>Population: {item.population}</p>
      <p>Terrain: {item.terrain}</p>
      <p>Climate: {item.climate}</p>
    </div>
  )
}
