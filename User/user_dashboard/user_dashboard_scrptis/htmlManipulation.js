

function renderFlightsJson(arrayOfFlights){
    flightsContainer.innerHTML = ` `;
    arrayOfFlights.forEach((eachFlight)=>{
        
       let div = buildEachFlightHtml(eachFlight._id,eachFlight.from,eachFlight.to,eachFlight.departureDateAndTime,eachFlight.pricePerSeat,eachFlight.name,eachFlight.number,getSeatCount(eachFlight.seats))
       flightsContainer.appendChild(div)
    })

}

function renderSeatsJson(arrayOfSeats){
    seatsContainer.innerHTML = ` `;
    
    arrayOfSeats.forEach((eachSeat)=>{
        let seatSpan = buildSeatsHtml(eachSeat)
        seatsContainer.appendChild(seatSpan)
    })

}


function buildEachFlightHtml(id,from,to,depature,price,name,number,availableSeats){

    let parentFlightDiv = document.createElement("div")
    parentFlightDiv.id = id;
    parentFlightDiv.className = "flight";

    let seatsAvailable = document.createElement("h5")
    seatsAvailable.innerText = `Seats Available - ${availableSeats}`
    parentFlightDiv.appendChild(seatsAvailable)

    let flightContent = document.createElement("div")
    flightContent.className = "flightContent";
       
        let leftDiv = document.createElement("div")
        let fromH6 = document.createElement("h6")
        fromH6.innerText = `From - ${from}`
        leftDiv.appendChild(fromH6);
        let toH6 = document.createElement("h6")
        toH6.innerText = `To - ${to}`
        leftDiv.appendChild(toH6)
        let depatureDateAndTime = document.createElement("h6")
        depatureDateAndTime.innerText = `Depature Time - ${Date(depature).toString()}`
        leftDiv.appendChild(depatureDateAndTime)

    flightContent.appendChild(leftDiv)
    
    /*
          <h6> Price - <span> 500</span></h6>
            <h6> Flight Number - <span> 500</span></h6>
            <h6> Flight Name - <span> Indigo</span></h6>
    */

        let rightDiv = document.createElement("div")
        let priceH6 = document.createElement("h6")
        priceH6.innerText = `Price - ₹${price}`
        rightDiv.appendChild(priceH6)
        let flightNumberH6 = document.createElement("h6")
        flightNumberH6.innerText = `Flight Number - ${number}`
        rightDiv.appendChild(flightNumberH6)
        let flightNameH6 = document.createElement("h6")
        flightNameH6.innerText = `Flight Name - ${name}`
        rightDiv.appendChild(flightNameH6)
    flightContent.appendChild(rightDiv)
    parentFlightDiv.appendChild(flightContent)

    let bookTicketBtn = document.createElement("button")
    bookTicketBtn.className = "btn btn-success"
    bookTicketBtn.innerText = "Book Tickets"
    let attributeBookTickets = document.createAttribute("onclick")
    attributeBookTickets.value=`bookTicketsBtn(this)`;
    bookTicketBtn.setAttributeNode(attributeBookTickets)

    parentFlightDiv.appendChild(bookTicketBtn)

    return parentFlightDiv
}


function buildSeatsHtml(seat){
    let eachSeat = document.createElement("span")
    eachSeat.innerText = seat.seatId
    if(seat.isAvailable == false){
        eachSeat.className = "eachSeatDisabled"
        return eachSeat;
    }
    eachSeat.className = "eachSeat"
    eachSeat.id = seat.seatId;

    let eachSeatAttribute = document.createAttribute("onclick")
    eachSeatAttribute.value=`selectSeats(this)`;
    eachSeat.setAttributeNode(eachSeatAttribute)
    return eachSeat
}