document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.getElementById('avatar')
    const name = document.getElementById('name')
    const username = document.getElementById('username')
    const repositories = document.getElementById('repositories')
    const follower = document.getElementById('follower')
    const following = document.getElementById('following')
    const link = document.getElementById('link')

    fetch('https://api.github.com/users/ThaynaShinoda')
        .then(function(resposta) {
            return resposta.json()
        })
        .then(function(json) {
            avatar.src = json.avatar_url
            name.innerText = json.name
            username.innerText = json.login
            repositories.innerText = json.public_repos
            follower.innerText = json.followers
            following.innerText = json.following
            link.href = json.html_url
        })
        .catch(function(erro) {
            alert('Erro de requisição! Tente novamente mais tarde!')
        })
})