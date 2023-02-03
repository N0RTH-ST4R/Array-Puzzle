const prompt=require('prompt-sync')()
console.clear()
console.log('---RULES---')
console.log("You can add a number to each index, but the numbers to the left and right are increased by twice the amount")
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
Array.prototype.compareTo=function(arr){
    var check=true
    for(let i=0;i<this.length;i++){
        if(this[i]!=arr[i]){
            check=false
        }
    }
    return check
    
}
function gameCycle(){
    console.clear()
    console.log("Solved state: "+solved)
    console.log(arr)
    let ind=prompt("What index? ")
    if(ind=="quit"){
        process.exit()
    }
    let v=prompt("How much? ")
    move(parseInt(ind-1),parseInt(v))
    var checkArr=[]
    if(arr.compareTo(solved)){
        console.clear()
        console.log("Solved!")
        console.log(arr)
        process.exit()
    }else{
        gameCycle()
    }
}
scramble(parseInt(prompt("How many moves in scramble? (> 0) ")))
gameCycle()
