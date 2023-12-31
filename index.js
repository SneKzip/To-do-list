$(document).ready(() => {
    var id = 1;
    var value = $(".form-control");
    
    $(".btn-success").on("click", () => {
        if(!$(".form-control").val()){
            value.attr("placeholder", "Поле не должно быть пустым, введите что-либо");
            value.addClass("border-danger");
        }
        else{
            $(".main").append("<div data-card = '"+id+"'class = 'card note'></div>");
            $("[data-card = '" + id + "']").hide().append("<div data-card-body = '" + id + "' class = 'card-body'></div>").slideDown("slow");
            $("[data-card-body = '" + id + "']").append("<div class = 'notes'>" + value.val() + "</div>");
            $("[data-card-body = '" + id + "']").append("<div class = 'yes'><input data-success = '" + id + "'type = 'button' class = 'btn btn-outline-success' value = 'V'></div>");
            $("[data-card-body = '" + id + "']").append("<div class = 'no'><input data-delete = '" + id + "'type = 'button' class = 'btn btn-outline-danger' value = 'X'></div>");
            value.val("");
            id++;
            value.attr("placeholder", "Напишите тут что-нибудь...");
            value.removeClass("border-danger");
        }
    });

    $("body").on('click', '.btn-outline-danger', (event)=>{
        $("[data-card = '" + event.target.dataset.delete + "']").addClass("border-danger").slideUp("slow", () => {
            $(this).remove();
        });
    });
    
    $("body").on('click', '.btn-outline-success', (event)=>{
        $("[data-card = '" + event.target.dataset.success + "']").toggleClass("border-success");
    });
});