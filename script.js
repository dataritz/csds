function diceG(){
    var x = Math.floor(Math.random()*6)+1
    document.getElementById("g1").innerText = x
}
function otpG(){
    var x = Math.floor(Math.random()*(9999-1000))+1000
    document.getElementById("g2").innerText = x
}
function lunchG(){
    const menu = ['Pizza','Burgur','Dosa','Idli','Noodles','Pasta','Spring Roll','Paneer','Sandwich','Donuts']
    var x = Math.floor(Math.random()*10)
    document.getElementById("g3").innerText = menu[x]
}
function nameG(){
        var x = Math.floor(Math.random()*(99-10))+10
        var c = Math.floor(Math.random()*(122-97))+97
        c = String.fromCharCode(c)
        document.getElementById("g4").innerText = c + x + c + x

}

function rps1G(){
    const list = ['rock','paper','scissor']
    var x = Math.floor(Math.random()*3)
    var y = " You Win"
    var z = " You lost"
    var a = "Your Choice = Rock "
    var b = " Computer Choice = "

    if(x==2){
         document.getElementById("g5").innerText = a + b + list[x] + y
    }
    else {
         document.getElementById("g5").innerText = a + b + list[x] + z

    }
    
}    

function rps2G(){
    const list = ['Rock','Paper','Scissor']
    var x = Math.floor(Math.random()*3)
    var y = " You Win"
    var z = " You lost"
    var a = "Your Choice = Paper "
    var b = " Computer Choice = "


    if(x==0){
    document.getElementById("g5").innerText = a + b + list[x] + y
    }
    else {
        document.getElementById("g5").innerText = a + b + list[x] + z

    }
    
}
function rps3G(){
    const list = ['Rock','Paper','Scissor']
    var x = Math.floor(Math.random()*3)
    var y = " You Win"
    var z = " You lost"
    var a = "Your Choice = Scissor "
    var b = " Computer Choice = "

    

    if(x==1){
    document.getElementById("g5").innerText = a + b + list[x] + y
    }
    else {
        document.getElementById("g5").innerText = a + b + list[x] + z

    }
    
}