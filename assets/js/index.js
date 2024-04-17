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
	// console.log(typeof(pokemon.types))
	const POKEMON_CARD =

				`<article>
						<section id="card-icons">
							<div class="pokeid">25</div>
							<svg width="35" height="35" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="url(#paint0_linear_8_599)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1423 8.96863C12.0477 8.68391 12.2597 8.39014 12.5597 8.39014H16.7062C16.9009 8.39014 17.0724 8.51809 17.1278 8.70469L19.1972 15.669C19.2809 15.951 19.0697 16.2341 18.7755 16.2341H16.2609C16.1159 16.2341 16.0106 16.372 16.0487 16.5119L17.2868 21.0518C17.4157 21.5241 16.7925 21.8219 16.5059 21.4249L10.8684 13.6156C10.6584 13.3247 10.8663 12.9183 11.225 12.9183H13.1496C13.2997 12.9183 13.4056 12.7715 13.3583 12.6291L12.1423 8.96863Z" fill="#171717"/><defs><linearGradient id="paint0_linear_8_599" x1="0.193393" y1="0" x2="0.193393" y2="29.6132" gradientUnits="userSpaceOnUse"><stop stop-color="#FBE273"/><stop offset="1" stop-color="#EDD53E"/></linearGradient></defs></svg>
						</section>

						<section>
							<img class="card-img" src="${pokemon.sprites.other['official-artwork'].front_default}" alt="Pokemon ${pokemon.name}">
							<svg id="ray-icon" width="250" height="250" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.64229 1.46871C4.5477 1.18399 4.75967 0.890221 5.05969 0.890221H9.20616C9.40082 0.890221 9.57233 1.01818 9.62777 1.20477L11.6971 8.16909C11.7809 8.45104 11.5697 8.73419 11.2755 8.73419H8.76089C8.61588 8.73419 8.51057 8.87207 8.54872 9.01197L9.78681 13.5519C9.91563 14.0242 9.29243 14.322 9.00586 13.925L3.36839 6.1157C3.1584 5.82482 3.36625 5.41843 3.725 5.41843H5.64962C5.79963 5.41843 5.90561 5.27155 5.85832 5.12919L4.64229 1.46871Z" fill="#FFF"/></svg>
						</section>

						<h2>${pokemon.name}</h2>
						<section class="card-info">
							<ul class="column">
								<li>
									<h3>HEIGHT</h3>
									<p>${pokemon.height}</p>
								</li>
								<li>
									<h3>GENERATION</h3>
									<p>V</p>
								</li>
							</ul>
							<ul class="column">
								<li>
									<h3>WEIGHT</h3>
									<p>${pokemon.weight}</p>
								</li>
								<li>
									<h3>BASE EXP.</h3>
									<p>${pokemon.base_experience}</p>
								</li>
							</ul>
							<ul >
								<li>
									<h3>ABILITY</h3>
									<ul>
										<li class="ability"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.64229 1.46871C4.5477 1.18399 4.75967 0.890221 5.05969 0.890221H9.20616C9.40082 0.890221 9.57233 1.01818 9.62777 1.20477L11.6971 8.16909C11.7809 8.45104 11.5697 8.73419 11.2755 8.73419H8.76089C8.61588 8.73419 8.51057 8.87207 8.54872 9.01197L9.78681 13.5519C9.91563 14.0242 9.29243 14.322 9.00586 13.925L3.36839 6.1157C3.1584 5.82482 3.36625 5.41843 3.725 5.41843H5.64962C5.79963 5.41843 5.90561 5.27155 5.85832 5.12919L4.64229 1.46871Z" fill="#455160"/></svg><p>Elec. Static</p></li>
										<li class="ability"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.64229 1.46871C4.5477 1.18399 4.75967 0.890221 5.05969 0.890221H9.20616C9.40082 0.890221 9.57233 1.01818 9.62777 1.20477L11.6971 8.16909C11.7809 8.45104 11.5697 8.73419 11.2755 8.73419H8.76089C8.61588 8.73419 8.51057 8.87207 8.54872 9.01197L9.78681 13.5519C9.91563 14.0242 9.29243 14.322 9.00586 13.925L3.36839 6.1157C3.1584 5.82482 3.36625 5.41843 3.725 5.41843H5.64962C5.79963 5.41843 5.90561 5.27155 5.85832 5.12919L4.64229 1.46871Z" fill="#455160"/></svg><p>Elec. Static</p></li>
										<li class="ability"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.64229 1.46871C4.5477 1.18399 4.75967 0.890221 5.05969 0.890221H9.20616C9.40082 0.890221 9.57233 1.01818 9.62777 1.20477L11.6971 8.16909C11.7809 8.45104 11.5697 8.73419 11.2755 8.73419H8.76089C8.61588 8.73419 8.51057 8.87207 8.54872 9.01197L9.78681 13.5519C9.91563 14.0242 9.29243 14.322 9.00586 13.925L3.36839 6.1157C3.1584 5.82482 3.36625 5.41843 3.725 5.41843H5.64962C5.79963 5.41843 5.90561 5.27155 5.85832 5.12919L4.64229 1.46871Z" fill="#455160"/></svg><p>Elec. Static</p></li>
									</ul>
								</li>
							</ul>
						</section>
					</article>`


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