let nomesAmigos = [];

function adicionarAmigo()
{
    const nome = document.getElementById("amigo");
    if(nome === " ")
    {
        alert("Por favor, insira um nome");
    }
    else
    {
        nomesAmigos.push(nome);
        document.getElementById("amigo").value = " ";
        atualizarListaAmigos();
    }

    function atualizarListaAmigos()
    {
        const listaAmigos = document.getElementById("listaAmigos");

        listaAmigos.innerHTML = " ";

        nomesAmigos.forEach(function(nome)
        {
            const li = document.createElement("li");
            listaAmigos.appendChild(li); 
        });
    }

    function sorterAmigo()
    {
        if(nomesAmigos.length === 0)
        {
            document.getElementById("resultado").innerHTML = "Não há amigos cadastrados para sortear.";
            return ;           
        }
        else
        {
            const indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length);
            const  amigoSorteado = nomesAmigos[indiceAleatorio];
            document.getElementById("resultado").innerHTML = `O amigo secreto é ${amigoSorteado}`;
        }
    }
}