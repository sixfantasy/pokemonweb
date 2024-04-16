const RESPONSE_CONTAINER = document.getElementById('fetchResponse');
const ERROR_MESSAGE = document.getElementById('errorMessage');
const SEARCH_BAR = document.getElementById('searchBar');
const SEARCH_BUTTON = document.getElementById('searchButton');

const mainFunction = async (url) => {
	const RESPONSE = await fetchResource(url);
	const PARSED_JSON = await parseJson(RESPONSE);
	printPokemons(PARSED_JSON);
}

const fetchResource = async (url) => {
	try {
		const RESPONSE = await fetch(url);
		return RESPONSE;
	}

	catch {
		const CONSOLE_MESSAGE = `fetchResource function has failed.`;
		throw (console.warn(CONSOLE_MESSAGE));
	}
}

const parseJson = async (response) => {
	try {
		const VALUES = await response.json();
		return VALUES;
	}

	catch {
		const CONSOLE_MESSAGE = `parseJson function has failed.`;
		throw (console.warn(CONSOLE_MESSAGE));
	}
}

const printPokemons = (pokemon) => {
	const POKEMON_CARD =
		`<article>
				<h2>${pokemon.name}</h2>
				<img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemon.name}">
				<ul>
					<li><strong>Height:</strong> ${pokemon.height}</li>
				</ul>
			</article>`

	RESPONSE_CONTAINER.insertAdjacentHTML("beforeend", POKEMON_CARD);
}

const prepareInput = (userQuery) => {
	const NEW_INPUT = userQuery.trim().toLowerCase();
	return NEW_INPUT;
}

const localFilter = (query) => {
	const FILTERED_DATA = POKEMON_DATABASE.filter((pokemon => pokemon.name.includes(query)));
	return FILTERED_DATA;
}

const firstFunction = (UserInput) => {
	const NEW_INPUT = prepareInput(UserInput);
	const FILTERED_DATA = localFilter(NEW_INPUT);
	FILTERED_DATA.forEach(pokemon => mainFunction(pokemon.url));
}

const deleteLastSearch = () => {
	RESPONSE_CONTAINER.innerHTML = "";
}

SEARCH_BUTTON.onclick = () => {
	deleteLastSearch();
	firstFunction(SEARCH_BAR.value);
}