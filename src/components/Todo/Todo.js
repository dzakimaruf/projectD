import React, { Component } from 'react';
import { v4 as uuid_v4 } from "uuid";
import List from './List';

const listTodo = [
	{
		id: uuid_v4(),
		task: 'Learn Javascript es6',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn React Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn Redux Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Final Project #1',
		completed: false
	}
];

class Todo extends Component {


	state = {
		task: '',
		items: []
	}

	componentDidMount() {
		this.setState({items:listTodo})
        // your code...
	}

	handleOnChange = e => {
		const { target: { value } } = e;
		console.log(value);

		// complete code below
		this.setState({
            task:value
        });
	}
//submit ketika di enter
	handleOnSubmit = e => {
		e.preventDefault();

        const todobaru ={
            id:uuid_v4,
            task:this.state.task,
            completed:false
        }
            this.setState({
                items:[...this.state.items, todobaru],
                task:''//agar tidak menghapus task yg ditulis pada kotak input
            })
        // your code, use spread operator to add new task
	}

	isCompleted = (id) => {
        this.setState({
            items:[...this.state.items.map(item=>{
                if(item.id===id){
                item.completed=true
                return item
                }
                else return item
            }
                )]
        })

		// your code, find id, then use spread operator
	
    }
	removeTask = id => {
        const newArray = this.state.items.map(item=>{
            return item.id
        })
        const index = newArray.indexOf(id)
        this.state.items.splice(index,1)
        this.setState({
            items:[...this.state.items]
        })
		// your code, use filter to get new task list
	}

	render() {
		return (
			<div className="Todo">
				<h1>Todo List:</h1>

				<form onSubmit={this.handleOnSubmit}>
					<input value={this.state.task} onChange={this.handleOnChange} />
				</form>

				<List
					items={this.state.items}
					isCompleted={this.isCompleted}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}

export default Todo;