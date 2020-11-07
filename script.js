var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27}];

//Question 1
console.log(users[1].age);


//Question 2
console.log(users[0].name);


//Question 3
for (var nameAge = 0; nameAge < users.length; nameAge++){
    console.log(users[nameAge].name, "-", users[nameAge].age);
}