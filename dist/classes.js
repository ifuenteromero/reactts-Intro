class Vehicle {
    drive() {
        console.log('chugga chugga');
    }
    honk() {
        console.log('beep');
    }
}
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
class Car2 extends Vehicle {
    drive() {
        console.log('vroom');
    }
}
const car2 = new Car2();
car2.drive();
car2.honk();
