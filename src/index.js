import cipher from './cipher.js';

const textEncodeDecode = document.getElementById("text-encode-decode");
const offset = document.getElementById("offset");
textEncodeDecode.focus();
textEncodeDecode.addEventListener("keyup", function () {
  textEncodeDecode.value = removeSpecialCharts(textEncodeDecode.value);
});

document.getElementById("encode").addEventListener("click", function () {
  let encode = cipher.encode(Number(offset.value),textEncodeDecode.value);
  document.getElementById("result-encode-decode").value = encode;
});

document.getElementById("decode").addEventListener("click", function () {
  let decode = cipher.decode(Number(offset.value), textEncodeDecode.value);
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

function removeSpecialCharts(value) {
  return value.normalize("NFD")
    .replace(/[\u0300-\u036f]/gi, "")
    .replace(/[0-9@#$]/gi,'');
}