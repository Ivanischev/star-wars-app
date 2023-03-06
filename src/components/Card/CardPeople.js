import React from 'react'

export const CardPeople = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Gender: {item.gender}</p>
      <p>Birth Year: {item.birth_year}</p>
      <p>Height: {item.height}</p>
      <p>Mass: {item.mass}</p>
      <p>Eye Color: {item.eye_color}</p>
    </div>
  )
}
