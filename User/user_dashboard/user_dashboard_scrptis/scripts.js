let price = 0;
let selectedSeats = [];
addEventListener("DOMContentLoaded",async()=>{
    
    welcomeGreeting()

    const allFlights = await  getAllFlights()
    if(!allFlights) return alert("could not fetech all flights")
    renderFlightsJson(allFlights)
})

async function bookTicketsBtn(obj){
    let flightId =obj.parentElement.id
    
    let user = isUserSignedIn()
    if(!user){
        alert("you have't sign in yet, please sign in or create new account to continue")
        return
    }
    modal.style.display = "block";
    localStorage.setItem("flightId",flightId)
 
    let flight = await getFlight(flightId)
    
    price = flight[0].pricePerSeat;
    selectedSeats = []
    renderSeatsJson(flight[0].seats)
}

function selectSeats (obj){
    if(obj.id == "")
    return

    obj.style.backgroundColor = "lightgreen"
    console.log()
    selectedSeats.push({seatId : obj.id});
    displayTotalAmountForSelectedSeates.innerText = price * selectedSeats.length
    obj.id = "";
}


async function confirmBooking (){
    if(selectedSeats.length <1) {
        alert("you must select atleast one seat")
        return
    }
    let flightId = localStorage.getItem("flightId")
    if(!flightId) {
        alert("flight Id not found")
    }

    let user = isUserSignedIn()
    if(!user){
        alert("you have't sign in yet, please sign in or create new account to continue")
        return
    }
   let result = bookTickets(user.user._id,flightId,selectedSeats,user.token)
   if(!result) result
   alert("booked Ticket !")
   modal.style.display = "none";


}

function logOutUser(){
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    alert("Logging Out")
    location.reload();
}

function welcomeGreeting(){
    let {user} = isUserSignedIn()
    if(user){
        console.log(user)
        welcomeGreatingsDisp.innerHTML = `Welcome Back  <b>${user.name}</b>  <button style="margin-left:10px" class="btn btn-danger" onclick="logOutUser()">Log Out</button>`
    }else{
     welcomeGreatingsDisp.innerHTML= `You haven't Signed In... <a href="../user_login/user_login_index.html">Click here to sign in</a>`
    }
}

