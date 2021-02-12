const cipher = {
	firstLetter: 65,
	sizelAlphabet: 26,
	encode: function(offset, textEncodeDecode) {
		if (!offset || Array.isArray(offset) || !textEncodeDecode || Array.isArray(textEncodeDecode)) {
			throw new TypeError("Invalid parameters");
		}
		let sumEncode = '';
		for (let i = 0; i < textEncodeDecode.length; i++) {
			if (textEncodeDecode.charCodeAt(i) == 32) {
				sumEncode += ' ';
				continue;
			}
			sumEncode += String.fromCharCode(((textEncodeDecode.charCodeAt(i) - cipher.firstLetter + offset) % cipher.sizelAlphabet) + cipher.firstLetter);
		}

		return sumEncode;

	},
	decode: function(offset, textEncodeDecode) {
		if (!offset || Array.isArray(offset) || !textEncodeDecode || Array.isArray(textEncodeDecode)) {
			throw new TypeError("Invalid parameters");
		}
		let sumDecode = '';
		for (let i = 0; i < textEncodeDecode.length; i++) {
			if (textEncodeDecode.charCodeAt(i) == 32) {
				sumDecode += ' ';
				continue;
			}
			sumDecode += String.fromCharCode(((textEncodeDecode.charCodeAt(i) + cipher.firstLetter - offset) % cipher.sizelAlphabet) + cipher.firstLetter);
		}

		return sumDecode;
	},
};

export default cipher;