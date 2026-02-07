
async function Add() {
    const amount = document.getElementById("input1");
    const type = document.getElementById("input2");
    const description = document.getElementById("input3");
    const date = document.getElementById("input4");
    const time = document.getElementById("input5");

    const list = document.getElementById("list");


    if (amount.value == "" || type.value == "" || description.value == "")
        return;

    console.log(amount.value + " " + type.value + " " + description.value);

    const li = document.createElement("li");
    li.innerHTML = amount.value + " " + type.value + " " + description.value + " " + time.value + " " + date.value;
    list.appendChild(li);

    const response = await fetch("https://catetin.onrender.com/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: amount.value,
            type: type.value,
            description: description.value,
            date: date.value,
            time: time.value
        })
    });

    const result = await response.json();
    console.log(result);

    amount.value = "";
    type.value = "";
    description.value = "";
    date.value = "";
    time.value = "";
}

