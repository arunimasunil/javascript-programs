// class creation for first letter it should be capital

class Student{
    /*constructor(name,age){
        this.name=name;
        this.age =  age;

    }*/
    constructor(name,age,course){
        this.name=name;
        this.age =  age;
        this.course = course;

    }
    display(){
        console.log("name" +this.name);
        console.log("Age" +this.age);
        console.log("Course" +this.course);

    }
}

//How to create object
let student1 = new Student("Anu",20);
let student2 = new Student("Vivek",22 );
let student3 = new Student("maya",19,"MBA")
student3.display();



