export const replaceSpecialChars = (text: string) => {
	if (!text) return "";
	text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	return text;
};

export const remove3dots = (text: string) => {
	if (!text) return "";
	text = text.replace(/^(\.\.\.\s)|(\s\.\.\.)$/g, "");
	return text;
};

// Remove the question index.
// Example: "1. Question" -> "Question"
// "XII. Question" -> "Question"
export function removeIndexText(str: string) {
	return str.replace(/^\w+\.\s/, "");
}

export function replaceAcuteAccentsWithMacrons(text: string) {
	if (!text) return "";

	text = text.replace(/á/g, "ā");
	text = text.replace(/é/g, "ē");
	text = text.replace(/í/g, "ī");
	text = text.replace(/ó/g, "ō");
	text = text.replace(/ú/g, "ū");
	text = text.replace(/ý/g, "ȳ");
	text = text.replace(/Á/g, "Ā");
	text = text.replace(/É/g, "Ē");
	text = text.replace(/Í/g, "Ī");
	text = text.replace(/Ó/g, "Ō");
	text = text.replace(/Ú/g, "Ū");
	text = text.replace(/Ý/g, "Ȳ");
	return text;
}

export function isInputCorrect(
	text: string,
	answer: string,
	strictMode: boolean
) {
	if (!answer) return false;

	text = remove3dots(text);

	if (!strictMode) {
		// Remove accents
		text = replaceSpecialChars(text);
		answer = replaceSpecialChars(answer);
	} else {
		text = replaceAcuteAccentsWithMacrons(text);
	}

	text = text.toLowerCase().trim();
	answer = answer.toLowerCase();

	if (answer.includes("|")) {
		// If there are multiple answers
		const answers = answer.split("|");
		for (let i = 0; i < answers.length; i++) {
			const answer_ = remove3dots(answers[i]);

			if (answer_ == text) {
				return true;
			}
		}
		return false;
	}

	answer = remove3dots(answer);

	return text == answer;
}
