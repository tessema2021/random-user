const newDate = (date) => {
    var d = new Date();
    var n = d.toLocaleDateString();
    return n
}
// const newDate = (date) => {
//     var d = newDate(date);
//     var n = d.tolocalDateString();
//     return n
// }




export const getUser = (results) => {
    return `<section class="user_ifo">
      <div>
           <img src=" ${results.picture.large}">
           </div>
           <li>${results.name.title} ${results.name.first} ${results.name.last}</li>
           <li>${results.gender}</li>
           <li>${newDate(results.dob.date)} ${results.dob.age}</li>
           <li>${results.email}</li>
          <li>${results.id.name} ${results.id.value}</li>
           <li>${results.location.street.number} ${results.location.street.name}</li>
           <li>${results.location.city} ${results.location.state} ${results.location.country} ${results.location.postcode}</li>
           <li>${results.phone}</li>
           <li>${newDate(results.registered.date)} ${results.registered.age}</li>
           </section > `

}

//getDate()