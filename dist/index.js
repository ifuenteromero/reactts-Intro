import axios from 'axios';
const endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(endpoint).then(response => {
    const todo = response.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`The Todo with ID: ${id} 
		has a title of: ${title} 
		and is finished: ${completed}`);
};
// tsc index.ts
// node index.js
// npx tsx index.ts para ejecutarlo en un solo paso
