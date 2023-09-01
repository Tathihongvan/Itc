let learning = 'ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;'
console.log(`Chuỗi có ${learning.length} kí tự.`);
console.log(`Vị trí chữ  ITC cuối cùng trong chuỗi là ${learning.lastIndexOf('ITC')}`);
console.log('Tách từ trong chuỗi: ' + learning.split(' '));
console.log('Thay thế từ JS thành Javascipt: ' + learning.replace(/JS/g,'Javascipt'));
let flag;
if(learning.includes('JS'))
{
    console.log('Chuỗi có chữ JS');
}
else
console.log('Chuỗi không có chữ JS');


