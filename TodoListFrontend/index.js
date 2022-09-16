console.log("He4rt Developers");

const url = "https://localhost:7190/api/todoitems";

async function postItem() {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
    }
    )
    return response.json();
}


function submitForm(event) {
    event.preventDefault()
    // const formElement = document.querySelector("form")
    // const request = new XMLHttpRequest()
    // request.open("POST", url)
    // request.setRequestHeader("Access-Control-Allow-Origin", "*")
    // request.send(new FormData(formElement))

    

    const form = document.getElementById("form")
    const formData = new FormData(form)
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify()
    })
    console.log(formData)

}

