// const url = "https://fpl.udemy.com/learning-paths/5209048/";
// function loadScript(src, callback) {
//     let script = document.createElement("script");
//     script.src = src;

// }
// loadScript(url, function (script)){

// }

const url = "https://fpl.udemy.com/learning-paths/5209048/";


function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = function () {
        callback(script);
    }
    document.head.append(script)
}

loadScript(url, function (script) {
    console.log("hello", script);
})