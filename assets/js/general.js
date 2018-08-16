$(document).ready(function () {
    
    var platos = ["", "Spaghetti", "Hamburguesa", "Ensalada", "Asado", "Pizza", "Sushi"];

    for (i = 1; i <= 6; i++) {
        var html = `
            <a data-fancybox="gallery" href="assets/img/`+i+`.jpg" class="plato">
                <h3>`+platos[i]+`</h3>
                <p>Descripcion del plato</p>
                <img src="assets/img/`+i+`.jpg">
            </a>
            `;
        
        $("#platos").append(html);
    }

});
