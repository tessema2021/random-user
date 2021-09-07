//console.log("You look marvelous!")
import { getUser } from "./userlist.js";

const getRondamUser = () => {
    return fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {


            const contentElement = document.querySelector(".user_ifo")
            contentElement.innerHTML = getUser(data.results[0]);
        })


}
getRondamUser();




