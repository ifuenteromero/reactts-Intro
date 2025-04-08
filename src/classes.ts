class Vehicle {
	drive(): void {
		console.log('chugga chugga');
	}
	honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

class Car2 extends Vehicle {
	drive(): void {
		console.log('vroom');
	}
}

const car2 = new Car2();
car2.drive();
car2.honk();
