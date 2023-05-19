var pass = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e",
            "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
            "u","v","w","x","y","z","A","B","C","D","E","F","G","H","I",
            "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
            "Y","Z","!","@","#","$","%","^","&","*","(",")","-","=","_",
            "+","[","]","{","}","|",",","."];

function get_password(){
    var n = document.getElementById('num').value;
    // console.log(n);
    var temp = "";
    for(var i = 0; i < n; i++) {
        temp += pass[Math.floor(Math.random()*pass.length)];
        // console.log(temp);
    }
    document.getElementById('Password').value = temp;
    // console.log(temp);
}
        
function cpy() {
    var copyText = document.getElementById('Password'); //get the text field
    // console.log(copyText);
    //select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); //for mobile devices

    //copy the text inside the textfield

    navigator.clipboard.writeText(copyText.value);
    alert("Copied Successfully");

}