import { deleteTodo } from '../../../app/list'

export default function handler(req, res) {
  console.log('Hey from congrats-api delete')

  if (req.method === 'DELETE') {
    let { id } = req.query
    deleteTodo(id)
    res.status(200).json({ msg: 'todo deleted' })
  } else {
    res.status(400).json({ msg: 'invalid request method' })
  }
}
