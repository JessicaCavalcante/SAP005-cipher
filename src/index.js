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

function upperCase(element) {
    element.value = element.value.toUpperCase();
}