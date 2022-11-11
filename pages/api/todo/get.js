import { getTodoList } from '../../../app/list'

export default async function handler(req, res) {
  console.log('hey')
  if (req.method === 'GET') {
    const todoList = await getTodoList()
    console.log(todoList)
    res.status(200).json(todoList)
  } else {
    res.status(400).json({ msg: 'invalid request method' })
  }
}
