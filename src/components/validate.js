
const repoRegex = new RegExp("^\\w+?/\\w+$");

export function isValidRepo(repoName) {
    return repoRegex.test(repoName);
}
