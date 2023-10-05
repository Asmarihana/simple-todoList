import './index.css'

const TodoItem = props => {
  const {paraDetails, deletePara} = props
  const {id, title} = paraDetails
  const deleteOn = () => {
    deletePara(id)
  }
  return (
    <li className="mini-card">
      <p>{title}</p>
      <button type="button" className="button" onClick={deleteOn}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
