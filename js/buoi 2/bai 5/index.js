var greeting =' Welcome to Nodemy, Nodemy is stand for Nodejs Academy  ';
console.log(`Length: ${greeting.length}`);

console.log('=============== TÌM nodemy ===============')
if(greeting.indexOf('nodemy') == -1)
{
    console.log('Khong co \"nodemy" trong chuoi');
  
}
else
{
    console.log(`nodemy nằm ở vị trí thứ : ${greeting.indexOf('nodemy')}`);
}

console.log('=============== TÌM Nodemy =============== ')
if(greeting.indexOf('Nodemy') == -1)
{
    console.log('Khong co \"Nodemy" trong chuoi');
  
}
else
{
    console.log(`Nodemy nằm ở vị trí thứ : ${greeting.indexOf('Nodemy')}`);
}

console.log('=============== KIỂM TRA BẮT ĐẦU Welcome ===============');
if(greeting.startsWith('Welcome'))
{
    console.log('Co');
  
}
else
{
    console.log('Khong bat dau bang Welcome');
}

console.log('=============== Lấy chữ Academy ===============');
let stringLength = 'Academy'.length;
console.log(greeting.substring(greeting.indexOf('Academy')));

console.log('=============== TÁCH TỪ ===============');
console.log(greeting.split(' '));

console.log('=============== XÓA SPACE NGOÀI RÌA ===============');
console.log(greeting.trim());

console.log('=============== KIỂM TRA Nodemy CÓ KHÔNG ===============');
console.log(greeting.includes('Nodemy'));

console.log('=============== THAY THẾ Nodemy THÀNH NODEMY ===============');
console.log(greeting.replace(/Nodemy/g, 'NODEMY'));


console.log('=============== IN HOA CHUỖI ===============');
console.log(greeting.toUpperCase());

console.log('=============== LẤY 1 KÍ TỰ Ở VỊ TRÍ SỐ 4 ===============');
console.log(greeting.charAt(4,1));