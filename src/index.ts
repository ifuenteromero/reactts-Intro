import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(endpoint).then(response => {
	const todo = response.data;
	const ID = todo.ID;
	const title = todo.Title;
	const finished = todo.Finished;
	console.log(
		`The Todo with ID: ${ID} has a title of: ${title} and is finished: ${finished}`
	);
});

// tsc index.ts
// node index.js
// npx tsx index.ts para ejecutarlo en un solo paso
