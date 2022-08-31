

// need to logout, path is already made so literally just the function

const logout = async () => {
    // this is the back end path
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    
}