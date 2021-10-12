// first way
function element(){
    var h1=document.createElement("h1")
    h1.innerHTML="hello im here virtually"
    document.getElementById("root").append(h1)
}
element()
element()
element()

// second way
function element(name){
    <h1>hello</h1>
    var h1=document.createElement("h1")
    h1.innerHTML="hello im here virtually"
    document.getElementById("root").append(h1)
}
element("banana")
element("apple")
element("mango")