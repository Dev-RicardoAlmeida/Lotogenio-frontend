function sortear(tipo) {
    const loader = document.getElementById('loader');
    const botaoSena = document.getElementById('botaoSortearSena');
	const botaoLotoFacil = document.getElementById('botaoSortearLotoFacil');
    const numeros = document.getElementById('numeros');

    loader.style.display = 'block';
    botaoSena.disabled = true;
	botaoLotoFacil.disabled = true;
	numeros.textContent = '';

    const start = Date.now();
	
	console.log(`Servlet?tipo=${tipo}`);

    fetch(`Servlet?tipo=${tipo}`)
        .then(response => response.json())
        .then(data => {
            const elapsed = Date.now() - start;
            const delay = Math.max(0, 2000 - elapsed); // espera o tempo restante

            setTimeout(() => {
                numeros.textContent = `Números sorteados (${tipo}): ${data.join(', ')}`;
                loader.style.display = 'none';
				botaoSena.disabled = false;
				botaoLotoFacil.disabled = false;
            }, delay);
        })
        .catch(error => {
            numeros.textContent = 'Erro ao sortear números.';
            loader.style.display = 'none';
            botaoSena.disabled = false;
			botaoLotoFacil.disabled = false;
        });
}