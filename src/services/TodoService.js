import { Api } from 'helpers/Api';

const parseResponse = (response) => response.json();

export const TodoService = {
    getLista: () =>
    fetch(Api.todoLista(), { method: "GET"}).then(parseResponse),
    getById: (id) =>
    fetch(Api.todoById(id), { method: "GET"}).then(parseResponse),
    create: () =>
    fetch(Api.createTodo(), { method: "POST"}).then(parseResponse),
    updateById: (id) =>
    fetch(Api.updateTodoById(id), { method: "PUT"}).then(parseResponse),
    deleteById: (id) =>
    fetch(Api.deleteTodoById(id), { method: "DELETE"}).then(parseResponse),
}  