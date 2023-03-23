async function loadRepos() {
	const BASE_URL = 'https://api.github.com/users/'
	const username = document.getElementById('username').value;
    const repos = document.getElementById('repos');

	try {
		const response = await fetch(
			`${BASE_URL}${username}/repos`,
			{
				headers: {
					Authorization: "Bearer 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",
				},
			}
		);
		
		if (response.ok == false){
			throw new Error(`${response.status} ${response.statusText}`);

		}
		const data = await response.json();
		repos.innerHTML = '';
		for (const repo of data) {
			repos.innerHTML += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.full_name} </a> </li>`;
		} 	
	} catch (error) {
		repos.innerHTML = `${error.message}`
	}

}