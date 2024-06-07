// Event loop on Node Js

function a() {
    console.log("a")
}
function b() {
    console.log("b")
}
function c() {
    console.log("c")
    a()
    b()
}

c()
