const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

// tupla
const pepsi: [string, boolean, number] = ['brown', true, 40];

// alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354];
const carStats = {
	horsepower: 400,
	weight: 3354,
};
