function chuanHoa() {
    let myString = document.getElementById('inputString').value;
    console.log(`Chuỗi sau khi chuẩn hóa: ${myString.trim()}`);
}
function demChuoi() {
    let myString = document.getElementById('inputString').value;
    let stringLength = myString.length;
    console.log(`Độ dài của chuỗi: ${stringLength}`);

    var newString = myString.trim().split(/\s+/);
    if (stringLength > 10) {
        console.log(newString[0].toUpperCase());
    }
    else {
        console.log(newString[newString.length - 1].toUpperCase());
    }
}
function timChuoi() {
    let myString = document.getElementById('inputString').value;
    var newString = myString.trim().split(/\s+/);
    let  dem = 0;
    for(let i in newString)
    {
        if(newString[i] === 'js')
        {
            dem ++;
        }
    }
    console.log(dem);
}
function thayThe() {
    let myString = document.getElementById('inputString').value;
    let newString = myString.replace(/js/g,'javascript');
    console.log(newString);    
}
function xoaChuoi() {
    let myString = document.getElementById('inputString').value;
    var newString = myString.trim().split(/\s+/);
  newString = myString.replace(/javascript/g,'');
    
    console.log(newString);

}
function catChuoi() {
    let myString = document.getElementById('inputString').value;
   
    var newString = myString.trim().split(/\s+/);
    console.log(newString);
}



