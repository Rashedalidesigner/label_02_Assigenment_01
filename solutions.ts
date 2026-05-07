const filterEvenNumbers = (arry: number[]) => {
    return arry.filter((item) => item % 2 === 0);
}

// problem 1 solution 
filterEvenNumbers([1, 2, 3, 4, 5, 6])




const reverseString = (str: string) => {
    return str.split("").reverse().join("");
}

//problelm 2 solution 
reverseString("typescript")




type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number"
    }
}

//problem 3 solution 
checkType("Hello")
checkType(42)




const getProperty = <obj>(object: obj, key: keyof obj) => {
    return (object[key]);
}

const user = {
    id: 1, name: "John Doe", age: 21
}
//problem 4 solution 
getProperty(user, "name")




interface Book {
    title: String,
    author: string,
    publishedYear: number,
}

const toggleReadStatus = (input: Book) => {
    return {
        ...input,
        isRead: true
    }
};


const myBook = {
    title: "TypeScript Fuide",
    author: "Jane Doe",
    publishedYear: 2024,
}
//problem 5 solution
toggleReadStatus(myBook)




class Person {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
    }
}

// problem 6 solution
const student1 = new Student("rashed", 20, "A");
student1.getDetails()




const getIntersection = (arry1: number[], array2: number[]) => {
    return arry1.filter((item) => array2.includes(item));
}
// problem 7 solution
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);




