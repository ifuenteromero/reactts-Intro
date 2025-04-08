const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    },
};
const printVehicle = (item) => {
    console.log(item.summary());
};
printVehicle(oldCivic);
