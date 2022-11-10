import { updateTodo } from './list'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let { id, name, isDone } = JSON.parse(req.body)
    const updateResult = await updateTodo({ id, isDone: Boolean(isDone) })
    console.log(updateResult)
    res.status(200).json({ msg: 'todo updated' })
  } else {
    res.status(400).json({ msg: 'invalid request method' })
  }
}
