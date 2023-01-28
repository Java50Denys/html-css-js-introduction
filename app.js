
function createEmployee(id, name, birthYear, salary, city, country){
    return{id, name, birthYear, salary, address: {city, country} }
}
const employees =[
    createEmployee(123, "Vsya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tei Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2000, 10000, "Arad", "Israel"),
]
//const index = employees.indexOf(createEmployee((126, "Abraham", 1990, 13000, "London", "UK"));
const index = employees.findIndex(function(empl){
    return empl.id === 126;
})
const employee = employees.find(function(empl){
    return empl.id === 126;
})
//HW#18
function getEmployee(employee, id){
   
    //returns reference to an Employee object with a given id value
    return employees.find( empl => empl.id === id);
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo){
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
    return employees.filter(empl => empl.salary >= salaryFrom &&
        empl.salary <= salaryTo) 
}
function getEmployeesByCity(employees, city){
     //returns array of Employee objects from a given city
     return employees.filter(empl => empl.address.city == city);
}
function getEmployeeNames(employees){
    //returns array of all Employee names
    return employees.map(empl => empl.name);
}
function sortEmployeesByAge(employees){
    //returns array of Employee objects sorted by age in ascending order
     employees.sort( (e1, e2) => e2.birthYear - e1.birthYear);
    }
function computeSalaryBudget(employees){
    //computes and returns total salary for all Employee objects
    return employees.reduce((res, empl) => res + empl.salary, 0);
}
console.log(computeSalaryBudget(employees))
function reducer(res, empl) {
    const newRes = res + empl.salary;
    return newRes
}
let field = "salary";
//console.log(employees[0][field])
function displayFieldValue(employees, index, field){
    console.log(employees[index][field]);
}
//displayFieldValue(employees, 3, "birthYear")
//displayFieldValue(employees, 3, "id");
//employees[0].salary = 20000;
//employees[0].department = "QA";
//displayFieldValue(employees, 0, "department");
//delete employees[0].department;
//displayFieldValue(employees, 0, "department");
