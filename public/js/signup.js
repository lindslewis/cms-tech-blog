const signUpFormHandler = async (e) => {
    e.preventDefault();

    const username = document.querySelector('#inputUser').value.trim();
    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && email && password) {
        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector('.signUpForm').addEventListener('submit', signUpFormHandler);