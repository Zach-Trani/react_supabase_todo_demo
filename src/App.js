import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function App() {
  // accessing DBs/APIs requires async/await
  const fetchTodosc = async () => {
    // select * from todos
    const {data, error} = await supabase
    .from('todos')
    .select('*')
    .order('id',{ascending:true})
  }

  const addTodo = async () => {

  }

  const updateTodo = async () => {

  }

  const toggleCompletion = async () => {

  } 

  const deleteTodo = async () => {

  }
}

export default App;