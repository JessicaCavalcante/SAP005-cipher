import cipher from './cipher.js';

const textEncodeDecode = document.getElementById("text-encode-decode");
const offset = document.getElementById("offset");
textEncodeDecode.addEventListener("keyup", function () {upperCase(textEncodeDecode)});

document.getElementById("encode").addEventListener("click", function () {encode(offset, textEncodeDecode)});
function encode(offset, textEncodeDecode) {
    let encode = cipher.encode(Number(offset.value),textEncodeDecode.value);
    document.getElementById("result-encode-decode").value = encode;
}

document.getElementById("decode").addEventListener("click", function () {decode(offset, textEncodeDecode)});
function decode(offset, textEncodeDecode) {
    let decode = cipher.decode(Number(offset.value),textEncodeDecode.value);
    document.getElementById("result-encode-decode").value = decode;
}

function upperCase(element) {
    element.value = element.value.toUpperCase();
}

console.log(cipher);
