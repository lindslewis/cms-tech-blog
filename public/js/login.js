const loginFormHandler = async (e) => {
    // default is to refresh page
    e.preventDefault();

    const email = document.querySelector('#inputEmail').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if ( email && password ) {
        // need to call the login request from the api
        const res = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) { 
            document.location.replace('/dashboard');
        } else {
            alert('res.statusText');
        }
    }
};

document.querySelector('.loginForm').addEventListener('submit', loginFormHandler);