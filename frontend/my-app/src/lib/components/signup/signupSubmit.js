export async function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    if (!form.password.value || form.password.value !== form.passwordConfirmation.value) {
        return alert('Gesli se ne ujemata');
    }
    
    const formData = {
        username: form.username.value,
        email: form.email.value,
        password: form.password.value,
    };

    try {
        const response = await fetch('http://localhost:3001/auth/register', {
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
            console.error('Registration failed:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
    event.target.reset();
};