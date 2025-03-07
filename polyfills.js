console.log("Hello, World!");
const arr = [1, 2, 3];

function createcounter(){
    let count =0;
    return function(){
        count++;
        return count;
    }
}

function onef(){
    let name="ary"
    console.log(name);
}
// console.log(name); //scope ke bhar h ,so access nhi kr sakte h

onef();
createcounter();

const aryan = function(param){
  console.log("hi");
}
aryan();