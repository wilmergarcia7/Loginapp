import {useState} from 'react';

import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./TodoList.css";

import firebaseSDK from '../../../FireBaseInit';

function Todo(){
  const [todoData, setTodoData] = useState({
    todos:[],
    newTodo:"",
  });

  useEffect(
    ()=>{
      const todosRef = firebaseSDK.database().ref('todos').orderByKey().limitToLast(100);
      todosRef.on('child_added', snapshot => {
        let newTodo = { ...snapshot.val(), fb_id: snapshot.key };
        let newTodos = todoData.todos;
        newTodos.push(newTodo);
        setTodoData({...todoData, todos: newTodos});
      })
    },
    []
  );


  const onChange = (e)=>{
    const {name, value} = e.currentTarget;
    setTodoData({...todoData, newTodo: value});
  };

  const onAddNew = (e)=>{
    let newToo = {
      description: todoData.newTodo,
      completed:false,
      id : new Date().getTime()
    };
    firebaseSDK.database().ref("todos").push(newToo);
    /*
    let newTodos = todoData.todos;
    newTodos.push(newToo);

    setTodoData({todos:newTodos, newTodo: ""});
    */
  }

  const doneHandler = (id)=>{
    const newTodos = todoData.todos.map((o)=>{
      if(o.id == id){
        o.completed = !o.completed;
      }
      return o;
    });

    setTodoData({...todoData, todos:newTodos});
  };

  const deleteHandler = (id)=>{
    const newTodos = todoData.todos.filter((o) => {
      return o.id !==id;
    });

    setTodoData({ ...todoData, todos: newTodos });
  }

  const tmpTodos = todoData.todos.map( (o)=>{return JSON.stringify(o)} ).join(" | ");

  return (
    <section>
     <NewTodo
      onChange={onChange}
      value={todoData.newTodo}
      onAddNew={onAddNew}
     >
     </NewTodo>
      <TodoList 
        todos={todoData.todos}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      ></TodoList>
    </section>
  )
}

export default Todo;
