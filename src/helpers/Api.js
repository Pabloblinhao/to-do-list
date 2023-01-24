const TodoContext = {
    todoEndpoint: () => `${Api.baseUrl}/todos`,
    todoLista: () => `${TodoContext.todoEndpoint()}/all-todos`,
    todoById: (id) => `${TodoContext.todoEndpoint()}/one-todo/${id}`,
    createTodo: () => `${TodoContext.todoEndpoint()}/create-todo`,
    updateTodoById: (id) => `${TodoContext.todoEndpoint()}/update-todo/${id}`,
    deleteTodoById: (id) => `${TodoContext.todoEndpoint()}/delete-todo/${id}`,

};


export const Api ={
    baseUrl: "https://todo-list.herokuapp.com",
    ...TodoContext
}