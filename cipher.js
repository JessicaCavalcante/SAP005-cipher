const cipher = {
	firstLetter: 65,
	sizelAlphabet: 26,
	encode: function(offset, textEncodeDecode) {
		let sumEncode = '';
		for(let i = 0; i < textEncodeDecode.length; i++) {
		sumEncode += String.fromCharCode(((textEncodeDecode.charCodeAt(i) - cipher.firstLetter + offset) % cipher.sizelAlphabet) + cipher.firstLetter);
		}
		return sumEncode;

	},
	decode: function(offset, textEncodeDecode) {
		let sumDecode = '';
		for(let i = 0; i < textEncodeDecode.length; i++){
		sumDecode += String.fromCharCode(((textEncodeDecode.charCodeAt(0) + cipher.firstLetter - offset) % cipher.sizelAlphabet) + cipher.firstLetter);
		}
		return sumDecode;
	},
};

export default cipher;
