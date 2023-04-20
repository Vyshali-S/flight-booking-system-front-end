let price = 0;
let selectedSeats = [];
addEventListener("DOMContentLoaded",async()=>{
    const allFlights = await  getAllFlights()
    console.log(allFlights)
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


}

