
// problem 1
const filterEvenNumbers = (arry: number[]) => {
    return arry.filter((item) => item % 2 === 0);
}






// problem 2
const reverseString = (str: string) => {
    return str.split("").reverse().join("");
}




// problem 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number"
    }
}




// problem 4
const getProperty = <obj>(object: obj, key: keyof obj) => {
    return (object[key]);
}





// problem 5
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




// problem 6
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




// problem 7
const getIntersection = (arry1: number[], array2: number[]) => {
    return arry1.filter((item) => array2.includes(item));
}



