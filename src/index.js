import cipher from './cipher.js';

const textEncodeDecode = document.getElementById("text-encode-decode");
const offset = document.getElementById("offset");
textEncodeDecode.focus();
textEncodeDecode.addEventListener("keyup", function () {upperCase(textEncodeDecode)});

document.getElementById("encode").addEventListener("click", function () {
    let encode = cipher.encode(Number(offset.value),textEncodeDecode.value);
    document.getElementById("result-encode-decode").value = encode;
});

document.getElementById("decode").addEventListener("click", function () {
    let decode = cipher.decode(Number(offset.value),textEncodeDecode.value);
    document.getElementById("result-encode-decode").value = decode;
});

document.getElementById("copy").addEventListener("click", function () {
    let copy = document.getElementById("result-encode-decode");
    copy.select();
    copy.setSelectionRange(0,99999);
    document.execCommand("copy");
});

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("result-encode-decode").value = '';
});

function upperCase(element) {
    element.value = element.value.toUpperCase();
}