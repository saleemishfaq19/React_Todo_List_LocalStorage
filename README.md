# Todo App

A simple and responsive Todo application built with React and Tailwind CSS. The application allows users to add, edit, complete, and delete todo items. Todo data is stored in the browser's Local Storage so that the data remains available after refreshing the page.

## Features

* Add new todos
* Edit existing todos
* Save edited todos
* Delete individual todos
* Mark todos as complete
* Store todos in Local Storage
* Automatically load saved todos when the application starts
* Responsive user interface
* Dark theme styling
* Context API for global state management

## Technologies Used

* React
* JavaScript
* Tailwind CSS
* React Context API
* React Hooks
* Local Storage
* Vite

## React Concepts Used

### useState

`useState` is used to manage:

* Todo list
* New todo input
* Todo completion state

### useEffect

`useEffect` is used to save the updated todo list to Local Storage whenever the todos change.

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

### useContext

`useContext` is used to access the Todo functions and data from the `UserContext`.

```js
const { todos, addItem, delItem, toggleComplete } =
  useContext(UserContext);
```

## Project Structure

```text
todo-app/
│
├── src/
│   ├── components/
│   │   ├── Context.jsx
│   │   └── TodoItems.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── package.json
├── package-lock.json
└── README.md
```

## Context API

The application uses React Context API to manage todo data and functions globally.

The `UserProvider` provides:

```text
todos
addItem
delItem
editTodo
toggleComplete
setTodos
```

This allows different components to access and modify the todo list without passing props through multiple components.

## Local Storage

Todo data is stored in the browser using Local Storage.

When the application starts, it checks whether previously saved todos exist:

```js
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
});
```

Whenever the todo list changes, it is saved again:

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

## Todo Object

Each todo is stored as an object:

```js
{
  id: Date.now(),
  todo: "Learn React",
  complete: false
}
```

### Properties

| Property   | Description                                       |
| ---------- | ------------------------------------------------- |
| `id`       | Unique identifier for the todo                    |
| `todo`     | Todo text                                         |
| `complete` | Determines whether the todo is being edited/saved |

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project directory:

```bash
cd todo-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

## Available Commands

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How It Works

### Add Todo

The user enters text into the input field and clicks the Add Todo button. The todo is added to the `todos` array.

### Edit Todo

The Edit button changes the selected todo into an editable state.

The user can then modify the todo text.

### Save Todo

After editing, the button changes to Save. Clicking Save makes the todo read-only again.

### Delete Todo

The Delete button removes the selected todo from the array using its unique ID.

### Persistence

Every change to the todo list is automatically stored in Local Storage. This means todos remain available after refreshing the browser.

## Future Improvements

Possible improvements include:

* Add a completed/pending filter
* Add a search feature
* Add todo categories
* Add due dates
* Add priority levels
* Add animations
* Add a clear-all button
* Add authentication
* Add a backend database
* Add mobile-specific improvements

## License

This project is created for learning and educational purposes.
#
