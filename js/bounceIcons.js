const github = document.getElementById('github-icon')
const linkedin = document.getElementById('linkedin-icon')


function add_GithubClass() {
    github.classList.add("animate__bounce")
}

function remove_GithubClass() {
    github.classList.remove("animate__bounce")
}

function add_LinkedinClass() {
    linkedin.classList.add("animate__bounce")
}

function remove_LinkedinClass() {
    linkedin.classList.remove("animate__bounce")
}

github.addEventListener('mouseover', add_GithubClass)
github.addEventListener('mouseout', remove_GithubClass)
linkedin.addEventListener('mouseover', add_LinkedinClass)
linkedin.addEventListener('mouseout', remove_LinkedinClass)