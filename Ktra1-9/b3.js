let number = [2,5,12,4,99,8];
let tangDan = number.sort((a,b) => a-b );
console.log('Mảng tăng dần: '+ tangDan);
let giamDan = number.sort((a,b) => b - a );
console.log('Mảng giảm dần: '+ giamDan);