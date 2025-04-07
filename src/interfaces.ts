interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
}

const oldCivic: Vehicle = {
	name: 'civic',
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log({
		name: vehicle.name,
		year: vehicle.year,
		broken: vehicle.broken,
	});
};

printVehicle(oldCivic);
