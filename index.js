const prompt=require('prompt-sync')()
console.clear()
console.log('---RULES---')
console.log("You can add a number to each index, but the numbers to the left and right are increased by twice the amount")
console.log("Note: the array indices start at 0, not 1")
prompt("[ENTER]")
var arr=[0,0,0,0]
var solved=[0,0,0,0]
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
function moveSolve(index, val){
    solved[index]+=val
    if(index!=solved.length-1){solved[index+1]+=val*2}
    if(index!=0){solved[index-1]+=val*2} 
    //removeNaN()
}
function scramble(moves){
    for(let i=0;i<moves;i++){
        let ind=Math.floor(Math.random()*arr.length)
        let v=Math.floor(Math.random()*(5-1)+1)
        moveSolve(ind,v)
    }
}
function gameCycle(){
    console.clear()
    console.log("Solved state: "+solved)
    console.log(arr)
    let ind=prompt("What index? ")
    let v=prompt("How much? ")
    if(ind=="quit" || v=="quit"){
        process.exit()
    }
    move(parseInt(ind-1),parseInt(v))
    if(arr==solved){
        console.log("Solved!")
        process.exit()
    }
}
scramble(1)
while(true){
    gameCycle()
}
