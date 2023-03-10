import React from 'react'

export const CardStarship = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Cost: {item.cost_in_credits}</p>
      <p>Hyperdrive Rating: {item.hyperdrive_rating}</p>
      <p>Passengers: {item.passengers}</p>
      <p>Manufacturer: {item.manufacturer}</p>
      <p>Model: {item.model}</p>
    </div>
  )
}
