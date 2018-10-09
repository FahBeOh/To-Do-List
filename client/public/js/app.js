$($(document).ready($.get("/api", (data) => {
    console.log(data)
    let taskData = {
        id: "",
        task: ""
    };

    for (i = 0; i < data.length; i++) {
        console.log(data[i].type);

        if (data[i].type === `today`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            pElement.id = `${data[i].id}`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-today`).appendChild(pElement);
        }
        else if (data[i].type === `week`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            pElement.id = `${data[i].id}`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-week`).appendChild(pElement)
        }
        else if (data[i].type === `month`){
            let pElement = document.createElement('p');
            pElement.className = `border mt-2 p-2`;
            pElement.id = `${data[i].id}`;
            let task = document.createTextNode(`${data[i].task}`);
            pElement.appendChild(task);
            document.getElementById(`body-month`).appendChild(pElement)
    }
}
(() => {
    const modal = {
        cacheDOM: function () {
            this.input = document.getElementById('modal-form');
            this.saveBtn = document.getElementById('save');
            this.deleteBtn = document.getElementById('delete');
            this.task = document.getElementsByTagName('p')
        },
        bindEvents: function () {
            for (i = 0; i < this.task.length; i++) {
                this.task[i].addEventListener("click", this.modal);
            };
            this.saveBtn.addEventListener("click", this.save);
            // this.task.addEventListener("click", this.update);
            this.deleteBtn.addEventListener("click", this.delete);
        },
        modal: function () {
            taskData.id = this.id,
            modal.input.value = this.innerHTML;
            $('#theModal').modal('toggle');
        },
        save: function() {
            if (modal.input.value === ""){
                return
            }
            else {
                taskData.task = modal.input.value.trim()
                $.ajax({
                    url: '/update',
                    type: 'PUT',
                    data: taskData
                });
                taskData.id = "";
                taskData.task = "";
                console.log(taskData)
            }
        },
        delete: function() {
                taskData.task = modal.input.value.trim()

                $.ajax({
                    url: '/delete',
                    type: 'DELETE',
                    data: taskData
                });
                console.log(taskData)
                taskData.id = "";
                taskData.task = "";

        }
    }
    modal.cacheDOM();
    modal.bindEvents();
})();

})));

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


