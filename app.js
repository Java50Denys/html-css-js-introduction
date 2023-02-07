const rectangle = {width: 20, height: 10, square: function () {
    return this.width * this.height;
},perimeter: function()  {
    return this.width * 2 + this.height * 2
}}
// this.width = 100;
// this.height = 200;
// console.log(this)
 console.log(rectangle.square());
 console.log(rectangle.perimeter());

class Rectangle {
    #width;
    #height;
    constructor(width, height) {
        this.#height = height;
        this.#width = width;
    }
    square() {
        return this.#width * this.#height;
    }
    perimeter() {
        return this.#width * 2 + this.#height *2
    }
}
// function Rectangle(width, height) {
//     this.width = width;
//     this.height = height;
// }
// Rectangle.prototype.square = function() {
//     return this.width * this.height;
// }
const rectangle1 = new Rectangle(3, 4);
console.log(rectangle1.square());
Rectangle.prototype.square = function() {
    return "kuku"
}
console.log(rectangle1.square());
//console.log(rectangle1.perimeter());
function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
addEmployee(empl) {
    
    //adds empl into #employees object
    //returns true if added new employee object
    //returns false if employee with a given id value already exists
    let res = false;
    if (!this.#employees[empl.id]) {
        this.#employees[empl.id] = empl;
        res = true;
    }
    return res;
}
removeEmployee(id) {
    //TODO
    //removes employee with a given id from #employees object
    //returns true if removed
    //returns false if employee with the id doesn't exist
    let res = false;
    if (this.#employees[id]) {
        res = true;
        delete this.#employees[id]
    }
}
getEmployeesCountry(country) {
    //TODO
    //returns array of employee objects having field "country" equaled to a given country
    return Object.values(this.#employees)
    .filter(empl => empl.address.country === country);
}
getEmployeesByAge(age) {
    //returns array of employee objects with a given age
    const currentYear = new Date().getFullYear();
    return Object.values(this.#employees)
    .filter(empl => currentYear - empl.birthYear === age);
}
getEmployeesBySalaries(salaryFrom, salaryTo) {
    //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
    //if salaryFrom < 0, then get employees with salary less or equal salaryTo
    //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
    //if salaryTo < 0, then get employees with salary greater or equal salaryFrom
    //if salaryFrom < 0 && salaryTo < 0, then get all employees
    if (salaryTo < 0) {
        salaryTo = Number.MAX_VALUE
    }
    return Object.values(this.#employees)
    .filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);

}

