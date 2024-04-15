const API_ENDPOINT = ``;
const RESPONSE_CONTAINER = document.getElementById('fetchResponse');
const ERROR_MESSAGE = document.getElementById('errorMessage');
const SEARCH_BAR = document.getElementById('searchBar');

const mainFunction = async (url) => {
	const RESPONSE = await fetchResource(url);
	const PARSED_JSON = await parseJson(RESPONSE);
}

const fetchResource = async (url) => {
	try {
		const RESPONSE = await fetch(url);
		return RESPONSE;
	}

	catch {
		const CONSOLE_MESSAGE = `fetchResource function has failed.`;
		ERROR_MESSAGE.textContent = `Connection to the Rick and Morty API has failed.`;
		throw (console.warn(CONSOLE_MESSAGE));
	}
}

const parseJson = async (response) => {
	try {
		const { results: characters, info: page } = await response.json();
		return { characters, page }
	}

	catch {
		const CONSOLE_MESSAGE = `parseJson function has failed.`;
		throw (console.warn(CONSOLE_MESSAGE));
	}
}