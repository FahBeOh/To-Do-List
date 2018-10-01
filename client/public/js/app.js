$($( document ).ready($.get("/api", (data) => console.log(data))));

$("p").click(function() {
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
        post: function (){
            let newTask = {
                task: form.input.value.trim(),
                type: this.id
            };
            $.post("/post", newTask);
            
            console.log(newTask)
        }
    }
    form.cacheDOM();
    form.bindEvents();

})();

// let newTask = {
//     task: form.input.value.trim(),
//     type: this.id
// };

// console.log(newTask)


// $.post("/api/new", newChirp)
// // On success, run the following code
// .then(function() {

//   var row = $("<div>");
//   row.addClass("chirp");

//   row.append("<p>" + newChirp.author + " chirped: </p>");
//   row.append("<p>" + newChirp.body + "</p>");
//   row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

//   $("#chirp-area").prepend(row);

// });