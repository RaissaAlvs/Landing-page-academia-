function assinar(plano){
    alert(
        "Parabéns! Você escolheu o Plano " +
        plano +
        ". Nossa equipe entrará em contato."
    );
}

document
.getElementById("formContato")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Mensagem enviada com sucesso!"
    );

    this.reset();
});