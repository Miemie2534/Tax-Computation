function myFunction (){
    let myForm = document.getElementById("total").value; 
    let value = 0.07
    let result = myForm * value ;
    alert(`จำนวนภาษีที่ต้องจ่าย ${result} บาท` );
}

function ResetAll (){
    document.getElementById("myform").reset();
}
