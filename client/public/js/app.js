$("p").click(function() {
    $('#theModal').modal('toggle')
});

(() => {
    const form = {
        cacheDOM: function () {
            this.input = document.getElementById('new-task');
            this.submit = document.getElementById('submit');
        },
        bindEvents: function () {
            this.submit.addEventListener("click", function (){
                console.log(form.input.value);
                form.input.value = "";
            })
        }
    }
    form.cacheDOM();
    form.bindEvents();

})();

