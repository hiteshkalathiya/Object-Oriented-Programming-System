class Employee {
    constructor(Name, Number, Post) {
        this.Name = Name;
        this.Number = Number;
        this.Post = Post;
    }

    Employee_Name() {
        console.log(`${this.Name}`);
    }
    Employee_Numbers() {
        console.log(`${this.Number}`);
    }
    Employee_Salary() {
        console.log("Employee Salary Fix :- 200000");
    }
    Employee_Post() {
        console.log(`${this.Post}`);
    }
}

let harshad = new Employee("Harshad", 9876543210, "HR");
console.log(harshad);
harshad.Employee_Salary();
