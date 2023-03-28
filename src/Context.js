import { createContext, useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const ContextProvider = (props) => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      priority: "high",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      priority: "low",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      priority: "medium",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      priority: "low",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      priority: "low",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      priority: "medium",
      done: false
    },
    {
      id: uuidv4(),
      title: "Title6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      priority: "high",
      done: false
    }
  ]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleDarkMode = useCallback(
    () => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode),
    []
  );

  const handleUpdateTodo = useCallback(
    (data) =>
      setTodos((prevTodoList) => {
        const newTodoList = [...prevTodoList];
        const todoIndex = newTodoList.findIndex((todo) => todo.id === data.id);
        newTodoList[todoIndex] = data;
        return newTodoList;
      }),
    []
  );

  const handleToggleDone = useCallback(
    (id) =>
      setTodos((prevTodoList) => {
        const newTodoList = [...prevTodoList];
        const todoIndex = newTodoList.findIndex((todo) => todo.id === id);
        newTodoList[todoIndex].done = !newTodoList[todoIndex].done;
        return newTodoList;
      }),
    []
  );

  const handleDeleteTodo = useCallback(
    (id) =>
      setTodos((prevTodoList) => prevTodoList.filter((todo) => todo.id !== id)),
    []
  );

  const handleCreateTodo = useCallback(
    (data) =>
      setTodos((prevTodoList) => [
        { id: uuidv4(), done: false, ...data },
        ...prevTodoList
      ]),
    []
  );

  const providerValue = useMemo(
    () => ({
      todos,
      isDarkMode,
      handleToggleDarkMode,
      handleUpdateTodo,
      handleToggleDone,
      handleDeleteTodo,
      handleCreateTodo
    }),
    [
      todos,
      isDarkMode,
      handleToggleDarkMode,
      handleUpdateTodo,
      handleToggleDone,
      handleDeleteTodo,
      handleCreateTodo
    ]
  );

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};

export default Context;
