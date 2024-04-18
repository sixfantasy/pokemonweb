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
		`<a onclick="playAudio('${pokemon.cries.latest}')"><article class="${pokemon.types[0].type.name}">
						<p class="pokeid">${pokemon.id}</p>

						<section>
							<img class="card-img" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemon.name}">
							<img class="icon" src="assets/img/icons/Type=${pokemon.types[0].type.name}.svg">
						</section>

						<h2>${pokemon.name}</h2>
						<section class="card-info">
							<ul class="column">
								<li>
									<h3>TYPE</h3>
									<img class="icon-small" src="assets/img/icons-color/Type=${pokemon.types[0].type.name}.svg">
								</li>
								<li>
									<h3>HEIGHT</h3>
									<p>${pokemon.height}</p>
								</li>
							</ul>
							<ul class="column">
								<li>
									<h3>BASE EXP.</h3>
									<p>${pokemon.base_experience}</p>
								</li>
								<li>
									<h3>WEIGHT</h3>
									<p>${pokemon.weight}</p>
								</li>
							</ul>
							<ul class="column">
								<li>
									<h3>ABILITY</h3>
									<p class="transform-info">${pokemon.abilities[0].ability.name}</p>
								</li>
								<li>
									<h3>MOVES</h3>
									<p class="transform-info">${pokemon.moves[0].move.name}</p>
								</li>
							</ul>
						</section>
					</article>
				</a>`
				




	//  `<article>
	// 	<h2>${pokemon.name}</h2>
	// 	<img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemon.name}">
	// 	<ul>
	// 		<li><strong>Height:</strong> ${pokemon.height}</li>
	// 		<li><strong>Weight:</strong> ${pokemon.weight}</li>
	// 		<li><strong>Base experience:</strong> ${pokemon.base_experience}</li>


	// 		<li><strong>Scream:</strong> <audio src="${pokemon.cries.latest}" controls></audio></li>

	// 		<li>
	// 	</ul>
	// </article>`

	RESPONSE_CONTAINER.insertAdjacentHTML("beforeend", POKEMON_CARD);
}

const prepareInput = (userQuery) => {
	if (userQuery === "") {
		throw(ERROR_MESSAGE.innerHTML = "Please introduce a value");
	}
	const NEW_INPUT = userQuery.trim().toLowerCase();
	return NEW_INPUT;
}

const localFilter = (query) => {
	const FILTERED_DATA = POKEMON_DATABASE.filter((pokemon => pokemon.name.includes(query)));

	if (FILTERED_DATA.length === 0) {
		throw (ERROR_MESSAGE.innerHTML = "No results found");
	}

	return FILTERED_DATA;
}

const firstFunction = (userInput) => {
	const NEW_INPUT = prepareInput(userInput);
	const FILTERED_DATA = localFilter(NEW_INPUT);
	FILTERED_DATA.forEach(pokemon => mainFunction(pokemon.url));
}

const deleteLastSearch = () => {
	RESPONSE_CONTAINER.innerHTML = "";
	ERROR_MESSAGE.innerHTML = "";
}

SEARCH_BUTTON.onclick = () => {
	deleteLastSearch();
	firstFunction(SEARCH_BAR.value);
}

window.addEventListener("keydown", input => {
	if (input.key === "Enter") {
		deleteLastSearch();
		firstFunction(SEARCH_BAR.value);
	}
});
function playAudio(url) {
	console.log("Playing audio")
	new Audio(url).play();
  }