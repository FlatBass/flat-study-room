// script-1.js
// JavaScript code for script-1.html

// TODO : alert() -> text 클릭 시 "Text clicked!" 메시지 표시
let text = document.getElementById("text");
text.onclick = function() {
    alert("Text clicked!");
}