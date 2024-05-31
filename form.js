
        document.getElementById('meu-formulario').addEventListener('submit', validateForm);

    function validateForm(event) {
        event.preventDefault();

            const campoNome = document.getElementById('nome');
            const valorNome = campoNome.value.trim();
            const email = document.getElementById('email')
            const valorEmail = campoEmail.value.trim();
            const password = document.getElementById('password')
            const valorPassword = campoPassword.value.trim();
            const result = document.getElementById('result');
        
            // Inicializa a mensagem de resultado
            result.textContent = '';
            result.style.color = 'red'; // Cor padrão para mensagem de erro
        

                if (valorNome === '') {
                alert('Por favor, preencha o campo Nome.');
                campoNome.focus();
                return false;
                }
                if (valorEmail === '') {
                    alert('Por favor, preencha o campo Email.');
                    email.focus();
                    return false;
                    }
                    if (valorPassword === '') {
                        alert('Por favor, preencha o campo Password.');
                        password.focus();
                        return false;
                        }
                // Verificação do email
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(email)) {
                result.textContent = 'Por favor, insira um email válido.';
                return;
                }

                // Verificação da senha
                if (password.length < 6) {
                result.textContent = 'A senha deve ter pelo menos 6 caracteres.';
                return;
                }

                // Se todas as verificações passarem
                result.textContent = 'Cadastro realizado com sucesso!';
                result.style.color = 'green';
                }

                // Outras validações aqui...

                // Se tudo estiver válido, você pode enviar o formulário
                // Ou fazer outras ações, como enviar dados para o servidor
                return true;