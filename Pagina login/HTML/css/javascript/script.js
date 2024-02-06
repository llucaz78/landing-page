function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    document.getElementById(tabName).classList.add('active-tab');
}

function login() {
    // Lógica de login aqui
    alert('Login realizado com sucesso!');
}

function signup() {
    // Lógica de cadastro aqui
    alert('Cadastro realizado com sucesso!');
}
