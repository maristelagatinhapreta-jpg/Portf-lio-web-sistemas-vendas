document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTableBody = document.querySelector('#productTable tbody');

    productForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de recarregar a página

        // Pega e limpa os espaços em branco dos valores digitados
        const name = document.getElementById('productName').value.trim();
        const price = document.getElementById('productPrice').value;

        // 1. Validação de campos vazios
        if (!name || !price) {
            alert('Por favor, preencha todos os campos do produto!');
            return;
        }

        // Cria uma nova linha (tr) para a tabela
        const newRow = document.createElement('tr');

        // Célula do Nome do Produto
        const nameCell = document.createElement('td');
        nameCell.textContent = name;

        // Célula do Preço Formatado
        const priceCell = document.createElement('td');
        priceCell.textContent = `R$ ${parseFloat(price).toFixed(2)}`;

        // Célula de Ações (Botão de apagar)
        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Apagar';
        deleteBtn.className = 'btn-delete'; // Classe para estilizar no CSS
        
        // Evento para remover a linha quando clicar no botão de apagar
        deleteBtn.addEventListener('click', () => {
            newRow.remove();
        });

        actionCell.appendChild(deleteBtn);

        // Adiciona todas as células à linha
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(actionCell);

        // Adiciona a linha completa ao corpo da tabela
        productTableBody.appendChild(newRow);

        // Reseta o formulário para novos cadastros
        productForm.reset();
    });
});
