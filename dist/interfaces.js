const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const printVehicle = (vehicle) => {
    console.log({
        name: vehicle.name,
        year: vehicle.year,
        broken: vehicle.broken,
    });
    console.log(vehicle.summary());
};
printVehicle(oldCivic);
