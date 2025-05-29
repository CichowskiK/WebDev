const langSelecctor = document.getElementById("language");
const myBtn = document.getElementById("myButton");
const desc = document.getElementById("description");
const forks = document.getElementById("forks");
const url = document.getElementById("url");
const repName = document.getElementById("name");
const score = document.getElementById("score");
const issues = document.getElementById("issues");

addOption("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json");

function addOption(fromwhere) {
    fetch(fromwhere)
        .then(response => response.json())
        .then(data => {
            const options = data; 
            const len = options.length;
            for(let i=1; i<len; i++) {
                const newOption = document.createElement("option");
                newOption.value = options[i].value;
                newOption.text = options[i].title;
                langSelecctor.appendChild(newOption);
            }
        })
        .catch(error => {
            console.error('Error loading JSON:', error)
            const erroeOption = document.createElement("option");
            erroeOption.text = 'Error loading options:' + error;
            erroeOption.selected = true;
            langSelecctor.appendChild(erroeOption);
        });
} 

myBtn.onclick = async function() {

    let query="language:" + langSelecctor.value;
    query = encodeURIComponent(query);

    myBtn.textContent="Loading..."

    const total = (await searchGitHubRepos(query)).total_count;
    
    const numberOfPages = Math.ceil(total/30);

    const Page = Math.floor(Math.random()*numberOfPages) + 1;

    query += `&${Page}`

    const repoPage = await searchGitHubRepos(query);

    const random = Math.floor(Math.random()*repoPage.items.length);
    const repo = repoPage.items[random];
    console.log(`${random}`);

    console.log(repo);

    desc.textContent=repo.description;
    forks.textContent=`forks: ${repo.forks_count}`;
    url.textContent=`url: ${repo.html_url}`;
    url.href= repo.html_url;
    repName.textContent=`name: ${repo.name}`;
    score.textContent=`stars: ${repo.stargazers_count}\t`;
    issues.textContent=`issues: ${repo.open_issues_count}\t`

    myBtn.textContent="Find Repository";

}

const searchGitHubRepos = async (query) => {
  const url = `https://api.github.com/search/repositories?q=${query}`;

  try {

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    

    return data;

  } catch (error) {
    myBtn.textContent=`ERROR: ${error}`
    myBtn.style.backgroundColor= "tomato";
    console.error('Error fetching GitHub repos:', error);
  }
};
