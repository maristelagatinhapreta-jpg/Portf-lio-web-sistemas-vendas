document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTableBody = document.querySelector('#productTable tbody');

    productForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede a página de recarregar

        // Pega os valores dos inputs
        const name = document.getElementById('productName').value;
        const price = document.getElementById('productPrice').value;

        // Cria uma nova linha na tabela
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;

        const priceCell = document.createElement('td');
        // Formata o preço para o padrão brasileiro (R$)
        priceCell.textContent = `R$ ${parseFloat(price).toFixed(2)}`;

        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        productTableBody.appendChild(newRow);

        // Limpa o formulário após o envio
        productForm.reset();
    });
});
