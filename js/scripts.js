document.addEventListener('DOMContentLoaded',function () {
    const boton_abierto = document.getElementById('bot_crear_reunion');

    boton_abierto.addEventListener('click', function () {
        form_crear_reuinon.classList.remove('hidden');
    });

});