interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): string;
}

const oldCivic: Vehicle = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return `Name: ${this.name}`;
	},
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log({
		name: vehicle.name,
		year: vehicle.year,
		broken: vehicle.broken,
	});
	console.log(vehicle.summary());
};

printVehicle(oldCivic);
