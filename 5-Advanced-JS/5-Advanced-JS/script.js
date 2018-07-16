var jon = {
    name: 'Jon',
    yearOfBirth: 1990,
    job: 'Teacher'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}
Person.prototype.calculateAge = function(){
        console.log(2018 - this.yearOfBirth);        
    }

var jon = new Person('Jony', 1990, 'teacher');
var rafael = new Person('Rafael', 1989, 'Dev');

jon.calculateAge();
rafael.calculateAge();