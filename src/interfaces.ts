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

const printVehicle = (item: Reportable): void => {
	console.log(item.summary());
};

printVehicle(oldCivic);
