export async function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    
    const formData = {
        usernameOrEmail: form.username.value,
        password: form.password.value,
    };

    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.message);
        } else {
            console.error('Login failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
    event.target.reset();
};