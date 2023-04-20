async function getAllFlights(){

    let response = await fetch("http://localhost:3000/flights/allFlights");
    if(response.status != 200){
         alert("Connection Error")
         return
    }
    let jsonData = await response.json();
    return jsonData
}

async function getFlight(id){
    let response = await fetch(`http://localhost:3000/flights/${id}`)
    if(response.status != 200){
        alert("Could not fetch Flight object")
        return
   }
   let jsonData = await response.json();
   return jsonData
}