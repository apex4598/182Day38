
var num = window.prompt("Enter Number")
function power(num)
{
    if(num==0){
        console.log(1);
    }
    for(var i=1;i<=num;i++){
        console.log(Math.pow(2, i));
    }
}
power(num);