export const ListItem = ({ item, onClick }) => {
  return (
    <li>
      <button onClick={onClick}>{item.name}</button>
    </li>
  )
}
