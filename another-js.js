const form = document.getElementById("item-form");
const apiUrl = "http://206.189.148.20:8080/api/create";

function getFormValue(){
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;

    const postData = {
        name: name,
        image: image,
        description: description,
        price: price
    };
    return postData
}

html_output = document.querySelector("#output")

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let postData = getFormValue()
    console.log(postData)

fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(postData)
})

.then(response => response.json())
.then(data => {
    console.log('Response', data);

    const { _id, created_at, description, image, name, price } = data;

    html_output.innerHTML = `<div class="new-data">
    
    <div class="card">
        <div class="image">
            <img src="${image}">
        </div
        <div class="name">
            product name: ${name}
        </div>
        <div class="description">
            description: ${description}
        </div>
        <div class="price">
            price: ${price}
        </div>
    </div>`;
        
})

    .catch(error => {
        console.error('Error', error);
    });
})