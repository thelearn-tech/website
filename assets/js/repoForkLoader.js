
//auto loads forks and repository count from apt.github.com
// using the httpRequest() from main.js


/*  V1  */
var apiURL = "https://api.github.com/users/thelearn-tech/repos"
var data = JSON.parse(httpRequest("/repo.json"))

var forkCount = 0;

for (let i = 0; i < data.length; i++) {
 forkCount += data[i].forks_count;
}

document.getElementById("repoHolder").innerHTML = data.length;
document.getElementById("forkHolder").innerHTML = forkCount;

document.getElementById("repoHolderMobile").innerHTML = data.length;
document.getElementById("forkHolderMobile").innerHTML = forkCount;
