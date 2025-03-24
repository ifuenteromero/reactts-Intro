const add = (a: number, b: number): number => a + b;

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);

	// This function will never return anything
	// We actually never reach the end of the function
};
// si queremos que a veces retorne un string y a veces un error
// esta función será más común

const throwError2 = (message: string): string => {
	if (!message) {
		throw new Error(message);
	}

	return message;
};
