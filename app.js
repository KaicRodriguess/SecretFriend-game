let nomesAmigos = [];

        function adicionarAmigo() {
            const nome = document.getElementById("amigo").value.trim(); // Pega o valor do input e remove espaços

            if(nome === "") {
                alert("Por favor, insira um nome");
            } else {
                nomesAmigos.push(nome);
                document.getElementById("amigo").value = ""; // Limpa o campo após adicionar
                atualizarListaAmigos();
            }
        }

        function atualizarListaAmigos() {
            const listaAmigos = document.getElementById("listaAmigos");
            listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos itens

            nomesAmigos.forEach(function(nome) {
                const li = document.createElement("li");
                li.textContent = nome; // Adiciona o nome à lista
                listaAmigos.appendChild(li); // Adiciona o <li> na lista
            });
        }

        function sortearAmigo() {
            if(nomesAmigos.length === 0) {
                document.getElementById("resultado").innerHTML = "Não há amigos cadastrados para sortear.";
                return;
            } else {
                const indiceAleatorio = Math.floor(Math.random() * nomesAmigos.length);
                const amigoSorteado = nomesAmigos[indiceAleatorio];
                document.getElementById("resultado").innerHTML = `O amigo secreto é ${amigoSorteado}`;
            }
        }