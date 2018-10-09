$($(document).ready($.get("/api", (data) => {
    console.log(data)
    for (i = 0; i < data.length; i++) {
        console.log(data[i].type);

        if (data[i].type === `today`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-today`).appendChild(pElement);
        }
        else if (data[i].type === `week`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-week`).appendChild(pElement)
        }
        else if (data[i].type === `month`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-month`).appendChild(pElement)
    }
}})));

$("p").click(function () {
    $('#theModal').modal('toggle')
});

(() => {
    const form = {
        cacheDOM: function () {
            this.input = document.getElementById('new-task');
            this.submitToday = document.getElementById('today');
            this.submitWeek = document.getElementById('week');
            this.submitMonth = document.getElementById('month');
        },
        bindEvents: function () {
            this.submitToday.addEventListener("click", this.post);
            this.submitWeek.addEventListener("click", this.post);
            this.submitMonth.addEventListener("click", this.post);
        },
        post: function () {
            let newTask = {
                task: form.input.value.trim(),
                type: this.id
            };
            $.post("/post", newTask);
            form.input.value=``;
        }
    }
    form.cacheDOM();
    form.bindEvents();

})();
