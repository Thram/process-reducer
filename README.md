# process-reducer

[![Greenkeeper badge](https://badges.greenkeeper.io/Thram/process-reducer.svg)](https://greenkeeper.io/)

Organise and compose your reducers more efficiently with a `functional` approach.

With this micro library you can create reducers from maps of functions like: `{ ACTION_TYPE: handler(), ... }`

# Example

## Convert this ***(Old Switch/Case approach)***:

```javascript
const initialState = {
  visibilityFilter: 'SHOW_ALL',
  todos: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { ...state, visibilityFilter: action.filter };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo),
        ),
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map(
          todo => (todo.id === action.id ? { ...todo, text: action.text } : todo),
        ),
      };
    default:
      return state;
  }
}

export default appReducer;
```

## Into this ***(Functional approach)***:
```javascript
import processReducer from 'process-reducer';

const initialState = {
    visibilityFilter : 'SHOW_ALL',
    todos : []
};

const reducers = {
  SET_VISIBILITY_FILTER: (state, action) => ({ ...state, visibilityFilter: action.filter }),
  ADD_TODO: (state, action) => ({
    ...state,
    todos: [
      ...state.todos,
      {
        id: action.id,
        text: action.text,
        completed: false,
      },
    ],
  }),
  TOGGLE_TODO: (state, action) => ({
    ...state,
    todos: state.todos.map(
      todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo),
    ),
  }),
  EDIT_TODO: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)),
  }),
};

export default processReducer(reducer, initialState);
```

