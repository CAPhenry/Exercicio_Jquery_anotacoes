let down = false;
let clicados = [];

$(document).ready(function(){
    $('.adicionar').click(function (e) { 
        e.preventDefault();
        if (down){
            down = false;
            $('.form-lateral').slideUp();
        }else{
            down = true;
            $('.form-lateral').slideDown();
        }
    });
    $(".form-lateral").submit(function(e){
        e.preventDefault();
        const texto = $("#input-texto").val();
        let linha = '<li>'
        linha += `${texto}`
        linha += '</li>'
       $(linha).appendTo('ol');
        $("#input-texto").val('')
        $("li").draggable();
        $(texto).val('');
    })

    $(document).on('click', 'li', function(e){
        e.preventDefault();
        const $this = $(this);
        if (clicados.includes(this)) {
            $this.removeClass("adicionardecoracao");
            clicados = clicados.filter(item => item !== this);
        } else {
            $this.addClass("adicionardecoracao");
            clicados.push(this);
        }
    });
})


