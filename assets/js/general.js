$(document).ready(function () {
    
    var platos = ["", "Spaghetti", "Hamburguesa", "Ensalada", "Asado", "Pizza", "Sushi"];

    for (i = 1; i <= 6; i++) {
        var html = `
            <div class="plato">
                <h2>`+platos[i]+`</h2>
                <p>Descripcion del plato</p>
                <img src="assets/img/`+i+`.jpg">
            </div>
            `;
        
        $("#platos").append(html);
    }

});
