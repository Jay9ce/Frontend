const display = document.getElementById('display')

function appendText(value){
    display.value+=value

}

function clearScreen(){
    display.value = null

}

function calculate(){
    try {
        if(display.value.includes('cos')) {
            const vA = display.value.split('cos')
            console.log(vA)
            display.value = Math.cos(Number(vA[1]))
        }else{
            display.value = eval(display.value);
        }  
    } catch (error) {
        display.value = "Error" 
        
    }
    //display.value = eval(display.value)
}