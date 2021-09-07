//console.log("You look marvelous!")

const getRondamUser = () => {
    return fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {

            console.log(data)
        })


}
getRondamUser();