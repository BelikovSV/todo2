import React, {useEffect, useState} from 'react';
import './App.css';
import {Input} from "./components/input";
import {Button} from "./components/Button";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])
    const [newTitle, SetNewTitle] = useState('')

    const fetchFoo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchFoo()
    }, [])

    const onclickHandler = () => {
        fetchFoo()
    }

    const onclickDeleteHandler = () => {
        setTodos([])
    }

    const addTodo = () => {
        const newTodo = {userId: 999, id: todos.length + 1, title: 'NEW-NEW', completed: false}
        setTodos([newTodo, ...todos])
        SetNewTitle('')
    }

    return (
        <div className="App">
            <Button name={'Show todos'} callBack={onclickHandler}/>
            <Button name={'Delete todos'} callBack={onclickDeleteHandler}/>
            <div>
                <Input newTitle={newTitle} SetNewTitle={SetNewTitle}/>
                <Button name={'addTodo'} callBack={addTodo}/>
            </div>
            <ul>
                {todos.map(el => {
                    return (
                        <ol key={el.id}>
                            <span>{el.id} - </span>
                            <span>{el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                            <span>{el.completed}</span>
                        </ol>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;