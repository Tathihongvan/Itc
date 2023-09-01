var persons = [
    {
        fullName: 'Tran Anh Khoa',
        age: 18,
        Address: 'Ha Noi'
    },
    {
        fullName: 'Nguyen Quang Hoc',
        age: 21,
        Address: 'Bac Giang'
    }, 
    {
        fullName: 'Vu Thanh Dat',
        age: 20,
        Address: 'Thai Binh'
    },
    {
        fullName: 'Dang Phuc Linh',
        age: 19,
        Address: 'Ha Noi'
    },
]
    persons.sort((a,b) => a.age-b.age );
    console.log('Mảng tăng dần: ');
    console.log(persons);
    persons.sort((a,b) => b.age-a.age );
    console.log('Mảng giảm dần: ');
    console.log(persons);

    let myString = persons.filter((person) =>
    {
        return person.Address === 'Ha Noi';
    }
   );
   console.log('Tìm người ở Hà Nội : ');
   console.log(myString);

   let upper = persons.map((person, i) =>
   {
       return person.Address.toUpperCase();
   }
  );
  console.log('Viết hoa person: ');
  console.log(upper);

