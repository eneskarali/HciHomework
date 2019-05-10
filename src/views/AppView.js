import React from 'react';

function AppView(props) {
  return (
    <div>
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
      <h1>Flux todo</h1>
    </header>
  );
}

function Main(props) {
    if (props.todos.size === 0) {
      return null;
    }
    return (
      <section id="main">
        <ul id="todo-list">
          {[...props.todos.values()].reverse().map(todo => (
            <li key={todo.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => props.onToggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => props.onDeleteTodo(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>
        <div>
            <p style ={({marginLeft: '6.4rem'})} > Add new Todo: <input  id="addInput"></input>
            <input style={({marginLeft:'10rem'}, {width:'5rem'})} type="button" value="Add" onClick={() => props.addTodo(addInput.value)
            }></input>
            </p>
        </div>
      </section>
    );
  }

  
  function Footer(props) {
    if (props.todos.size === 0) {
      return null;
    }
  
    const remaining = props.todos.filter(todo => !todo.complete).size;
    const phrase = remaining === 1 ? ' item left' : ' items left';
  
    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {remaining}
          </strong>
          {phrase}
        </span>
      </footer>
    );
  }

  
  export default AppView;