class person  {
    firstName
     lastName 
     age
     address
     score

     constructor(firstName, lastName, age, address, score)
     {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age= age;
        this.address= address;
        this.score = score;
     }


}
let per1 = new Animal('Nam','Hoa', 18,'Ha Noi', 10);
per1.className = 'DHTI';
per1.getFullName = function() {
    return this.firstName + this.lastName;
}