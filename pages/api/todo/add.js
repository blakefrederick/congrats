import { addTodo } from '../../../app/list'

export default function handler(req, res) {
  if (req.method === 'POST') {
    let { input: todo } = JSON.parse(req.body)
    addTodo(todo)
    res.status(200).json({ msg: 'todo added' })
  } else {
    res.status(400).json({ msg: 'invalid request method' })
  }
}
