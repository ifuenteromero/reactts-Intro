interface Reportable {
	summary(): string;
}

const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

const drink2 = {
	color: 'brown',
	carbonated: true,
	broken: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	},
};

printSummary(oldCivic);
printSummary(drink2);
