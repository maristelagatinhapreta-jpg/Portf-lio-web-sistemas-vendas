document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productTableBody = document.querySelector('#productTable tbody');

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('productName').value.trim();
        const price = document.getElementById('productPrice').value;

        // Validação de campos vazios
        if (!name || !price) {
            alert('Por favor, preencha todos os campos do produto!');
            return;
        }

        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = name;

        const priceCell = document.createElement('td');
        priceCell.textContent = `R$ ${parseFloat(price).toFixed(2)}`;

        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i> Apagar';
        deleteBtn.className = 'btn-delete';
        
        deleteBtn.addEventListener('click', () => {
            newRow.remove();
        });

        actionCell.appendChild(deleteBtn);

        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        newRow.appendChild(actionCell);

        productTableBody.appendChild(newRow);
        productForm.reset();
    });
});
/* Estilo para o botão de apagar na tabela */
.btn-delete {
    background-color: rgba(239, 68, 68, 0.15);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.2s ease;
}

.btn-delete:hover {
    background-color: #ef4444;
    color: white;
}
