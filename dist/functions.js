const add = (a, b) => a + b;
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
    // This function will never return anything
    // We actually never reach the end of the function
};
// si queremos que a veces retorne un string y a veces un error
// esta función será más común
const throwError2 = (message) => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};
const logWeather = (forecast) => {
    console.log({ date: forecast.date });
    console.log({ weather: forecast.weather });
};
logWeather(todaysWeather);
const logWeather2 = ({ date, weather }) => {
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
    setAge(age) {
        this.age = age;
    },
};
const { age } = profile;
const { coords: { lat, lng }, } = profile;
