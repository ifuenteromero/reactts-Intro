import axios from "axios";

const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(endpoint).then((response) => {
  console.log({ response: response.data });
});

// tsc index.ts
// node index.js
// npx tsx index.ts para ejecutarlo en un solo paso
