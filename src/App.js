import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  
  const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])
  
  // accessing DBs/APIs requires async/await
  const fetchTodos = async () => {
    // select * from todos order by id ascending
    const {data, error} = await supabase
    .from('todos')
    .select('*')
    .order('id',{ascending:true})
    if (error) {
      console.error('Error fetching todos:.', error)
    } else {
      setTodos(data);
    }
  }

  const addTodo = async () => {
    // insert into todos (task, is_completed) values (newTask, false)
    const {data, error} = await supabase
    .from('todos')
    .insert([{task: newTask, is_completed: false}])
    .select()
    if (error) {
      console.error('Error fetching todos:.', error)
    } else {
      setTodos(prevTodos => [...prevTodos, ...data])
      setNewTask('')
    }
  }

  const updateTodo = async () => {

  }

  const toggleCompletion = async () => {

  } 

  const deleteTodo = async () => {

  }
}

export default App;