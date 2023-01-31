const prompt=require('prompt-sync')()
console.log('---RULES---')
console.log("You can add a number to each index, but the numbers to the left and right are increased by twice the amount")
console.log("Note: the array indices start at 0, not 1")
prompt("[ENTER]")
var arr=[0,0,0,0]
function removeNaN(){
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            arr.splice(i,1)
        }
    }
}
function move(index, val){
    arr[index]+=val
    if(index!=arr.length-1){arr[index+1]+=val*2}
    if(index!=0){arr[index-1]+=val*2} 
    //removeNaN()
}
function scramble(moves){
    for(let i=0;i<moves;i++){
        let ind=Math.floor(Math.random()*arr.length)
        let v=Math.floor(Math.random()*5)
        move(ind,v)
    }
}
scramble(15)
console.log(arr)
