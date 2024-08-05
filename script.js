document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('formCadastro');
    const listaUsuarios = document.getElementById('listaUsuarios');
    const excluirTodosBtn = document.getElementById('excluirTodosBtn');
    const mensagem = document.getElementById('mensagem');

    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();
        mensagem.textContent = '';

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        if (!nome || !email || !telefone) {
            mensagem.textContent = 'Todos os campos devem estar preenchidos';
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            Nome: ${nome} | Email: ${email} | Telefone: ${telefone}
            <button class="excluirBtn">Excluir</button>
        `;

        li.querySelector('.excluirBtn').addEventListener('click', () => {
            li.remove();
        });

        listaUsuarios.appendChild(li);

        formCadastro.reset();
    });

    excluirTodosBtn.addEventListener('click', () => {
        if (listaUsuarios.children.length === 0) {
            mensagem.textContent = 'Não há usuários cadastrados para excluir';
            return;
        }
        listaUsuarios.innerHTML = '';
        mensagem.textContent = '';
    });
});
