//console.log("You look marvelous!")

const getRondamUser = () => {
    return fetch("https://randomuser.me/")
        .then(response => response.json())
        .then(data =>
            display.innerHTML = data.randomUser
        )


}
getRondamUser();