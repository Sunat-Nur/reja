console.log('Front JS ishga tushdi');


function itemTemplate(item) {
   return ` <li
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${item.reja}</span>
        <div>
            <button
                data-id="${item._id}" class="edit-me btn btn-secondary btn-sm me-1">
                o'zgartirish
            </button>
            <button
                data-id="${item._id}"
                class="delete-me btn btn-danger btn-sm">o'chirish</button>
        </div>
    </li>` ;
}

let createField = document.getElementById("create-field");

document
    .getElementById("create-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        axios
            .post("/create-item", { reja: createField.value })
            .then((response) => {
                document
                    .getElementById("item-list")
                    .insertAdjacentElement("beforeend", itemTemplate(response.data))
                createField.value = "";
                createField.focus();
            })
            .catch((err) => {
                console.log("please try again");
            });
    });
