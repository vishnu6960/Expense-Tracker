
let mainDiv = document.getElementById("mainDiv")
let weeklyFormContainer = document.getElementById("weeklyFormContainer")
let weekCount = 1
document.getElementById("addWeek").addEventListener("click", (e)=>{
    e.preventDefault()
    if(weekCount < 5){
        let weeklyForm = document.createElement("form")
        weeklyForm.className = "weeklyForm"
        weeklyForm.innerHTML = `
            <h2>Month : ${selectDrop.value}</h2>
            <h2>Week : ${weekCount}</h2>
            <label for="foodId">Food</label>
            <input type="text" id="foodId">
            <label for="travelId">Travel</label>
            <input type="text" id="foodId">
            <label for="utilitiesId">Utilities</label>
            <input type="text" id="utilitiesId">
            <button>Submit</button>
        `
        weeklyFormContainer.appendChild(weeklyForm)
        // mainDiv.appendChild(weeklyForm)
        weekCount++
    }
    else{
        alert("weeks should only have 4")
    }
    
})

let selectDrop = document.getElementById("select")
selectDrop.addEventListener("change", ()=>{
    weekCount = 1
    if(selectDrop.value == ""){
        document.getElementById("addWeek").style.display = "none"
    }
    else{
        document.getElementById("addWeek").style.display = "inline-block"
    }
    weeklyFormContainer.innerText = ""
})