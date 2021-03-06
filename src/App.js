import React, { Component } from "react";
import Modal from './components/Modal';
import NavBar from './components/NavBar'
import { getTodoList, createTodo, updateTodo, deleteTodo } from './services/todos-api-service'
import store from './store/todos/reducers/index'
import authStore from './store/auth/reducers/index'
import { fetchTodos, addTodo, update, deleteSingleTodo } from './store/todos/actions/actionCreators'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      modal: false,
      activeItem: {
        title: '',
        content: ''
      },
      isLoggedIn: false
    };
  }
  
  componentDidMount () {
    this.refreshList();
    const isLoggedIn = authStore.isLoggedIn
    this.setState({isLoggedIn})
  }

  refreshList = async () => {
    const todos = await getTodoList();
    store.dispatch(fetchTodos(todos));
    this.setState({ todos });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = async (todo) => {
    this.toggle();
    if (!todo.id) {
      try {
        const newTodo = await createTodo(todo)
        store.dispatch(addTodo(newTodo))
        this.setState(prevState => {
          return {
            todos: [...prevState.todos, newTodo]
          }
        })
      } catch (error) {
        console.log(error)
      }
      return;
    }
    try {
      const updatedTodo = await updateTodo(todo)
      store.dispatch(update(updatedTodo))
      this.setState(prevState => {
        const todos = prevState.todos.map(todo => {
          if (todo.id === updatedTodo.id) {
            todo.title = updatedTodo.title
            todo.content = updatedTodo.content
            return todo
          }
          return todo
        })
        return { todos }
      })
    } catch (error) {
      console.log(error)
    }
  };

  handleDelete = todoToDelete => {
    deleteTodo(todoToDelete)
    store.dispatch(deleteSingleTodo(todoToDelete))
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => todo.id !== todoToDelete.id)
      }
    })
  };

  createItem = () => {
    const item = { title: '', content: '' };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const newItems = this.state.todos
    let actionButtons
    if (this.state.isLoggedIn) {
      actionButtons = (item) => {
        return <span>
          <button onClick={() => this.editItem(item)} className="btn btn-secondary mr-2">
            Edit
          </button>
          <button onClick={() => this.handleDelete(item)} className="btn btn-danger">
            Delete
          </button>
        </span>;
      }
    } else {
      actionButtons = () => {}
    }
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
        {actionButtons(item)}
      </li>
    ));
  };
  render () {
    let addButton
    if (this.state.isLoggedIn) {
      addButton = <div className=""><button onClick={this.createItem} className="btn btn-primary">Add task</button></div>
    } else {
      addButton = ''
    }
    return (
      <main className="content">
        {this.props.children}
        <div style={{ background: "white" }}>
          <NavBar isLoggedIn={this.state.isLoggedIn} />
        </div>
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              {addButton}
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
export default App