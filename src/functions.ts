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

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }) => {
	console.log({ date: forecast.date });
	console.log({ weather: forecast.weather });
};

logWeather(todaysWeather);

const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
	console.log({ date });
	console.log({ weather });
};

const profile = {
	name: 'Irene',
	age: 41,
	coords: {
		lat: 0,
		lng: 20,
	},
	setAge(age: number) {
		this.age = age;
	},
};

const { age }: { age: number } = profile;

const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
