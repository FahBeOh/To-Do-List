
$($( document ).ready($.get("/api", (data) => console.log(data))));

$("p").click(function() {
    $('#theModal').modal('toggle')
});

(() => {
    const form = {
        cacheDOM: function () {
            this.input = document.getElementById('new-task');
            this.submitToday = document.getElementById('submit-today');
            this.submitWeek = document.getElementById('submit-week');
            this.submitMonth = document.getElementById('submit-month');
        },
        bindEvents: function () {
            this.submitToday.addEventListener("click", function (){
                console.log(form.input.value);
                form.input.value = "";
            });
            this.submitWeek.addEventListener("click", function (){
                console.log(form.input.value);
                form.input.value = "";
            });
            this.submitMonth.addEventListener("click", function (){
                console.log(form.input.value);
                form.input.value = "";
            })
        }
    }
    form.cacheDOM();
    form.bindEvents();

})();
