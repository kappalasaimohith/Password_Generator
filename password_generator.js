function generateRandomPassword(length = 12) {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
            return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');
        }

        document.getElementById('generate').addEventListener('click', () => {
            const length = parseInt(document.getElementById('length').value, 10);
            const password = generateRandomPassword(length);
            document.getElementById('password').textContent = password;
            document.getElementById('password-container').style.display = 'flex';
        });

        document.getElementById('copy').addEventListener('click', () => {
            const passwordText = document.getElementById('password').textContent;
            navigator.clipboard.writeText(passwordText)
                .then(() => {
                    alert('Password copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });