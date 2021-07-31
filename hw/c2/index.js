const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const userName = form.userName.value
    console.log(userName)
    check(userName.trim())
})
// let name1 = 'anhtbok92'
function check(userName) {
    if (userName == '') {
        alert('pls innput the user name')
    }
    else {
        document.getElementById('userName').innerHTML = `${userName}`
        document.getElementById('name').innerHTML = ``
        document.getElementById('id').innerHTML = ``
        document.getElementById('email').innerHTML = ``,
        document.getElementById('company').innerHTML = ``,
        document.getElementById('followers').innerHTML = ``
        fetch(`https://api.github.com/users/${userName}`)
            .then(responses => {
                console.log(responses)
                if (!responses.ok) { alert('error') }
                if (responses.status == 404) {
                    return alert('user doesnt exist')
                }
                else {
                    console.log(`${responses.url}:${responses.status}`)
                    return responses.json()
                }
            })
            .then(data => {
                alert('fetch complete')
                console.log(data)
                document.getElementById('name').innerHTML = `${data.name}`,
                    document.getElementById('name').innerHTML = `${data.name}`,
                    document.getElementById('id').innerHTML = `${data.id}`,
                    document.getElementById('email').innerHTML = `${data.email}`,
                    document.getElementById('company').innerHTML = `${data.company}`,
                    document.getElementById('followers').innerHTML = `${data.followers}`
            })
    }
}
// check(name1)