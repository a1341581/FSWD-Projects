// function ff(){}
// function ff1(){}
// function ff2(){}

// export {ff,ff1,ff2}

// var log={
//     function ff(){}
//     function ff1(){}
//     function ff2(){}
// }
// export{log}

// var log={
//     info:()=>{},
//     warning:()=>{},
//     error:()=>{}
// }
// export{log}

var log={
    info:(info)=>{console.log("info:",info)},
    warning:(warning)=>{console.log("warning:", warning)},
    error:(error)=>{console.log("error:", error)}
}
module.exports=log