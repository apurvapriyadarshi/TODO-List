import React, { useState ,useEffect} from 'react';
import { Button, FormControl, InputLabel ,Input} from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
function App() {

  const [todos,setTodos]=useState([]);
  const [input,setInput]=useState('');

  // when the appp loads we want to listen to DB and fetch all the todo
useEffect(() => {
  //this code is fire whne app loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id:doc.id , task: doc.data().task})))
  })
  
}, []);

  console.log(input);

  const addTodo = (event) =>{
    //this will fire off when we click the button
    //after form
    event.preventDefault(); //will stop the refresh on click

    db.collection('todos').add({
      task:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    
  
    setInput(''); //clear input after clicking enter
  } 

  return (
    <div className="App">
      <h1> Hello !!!  Online TODO App</h1>
      <h4>By Using React.js,Firebase</h4>
      
      <form>
      <FormControl>
        <InputLabel>Write a TODO</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value) } />
       
      </FormControl>
      
      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" >  
      Add TODO
      </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          //<li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
