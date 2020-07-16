import React, { Component } from "react";
import Modal from './components/Modal';
import { getTodoList, createTodo, updateTodo, deleteTodo } from './todos/actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      modal: false,
      activeItem: {
        title: '',
        content: ''
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = async() => {
    try {
      let todoList = await getTodoList()
      this.setState({ todoList })
    } catch (error) {
      console.log(error)
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = async (todo) => {
    this.toggle();
    if (!todo.id) {
      try {
        await createTodo(todo)
      } catch (error) {
        console.log(error)
      }
      return;
    }
    try {
      await updateTodo(todo)
    } catch (error) {
      console.log(error)
    }
  };

  handleDelete = todo => {
    deleteTodo(todo)
  };

  createItem = () => {
    const item = { title: '', content: '' };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.todoList
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className="todo-title mr-2"
          title={item.content}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;