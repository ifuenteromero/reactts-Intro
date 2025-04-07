const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}): void => {
	console.log({
		name: vehicle.name,
		year: vehicle.year,
		broken: vehicle.broken,
	});
};

printVehicle(oldCivic);
