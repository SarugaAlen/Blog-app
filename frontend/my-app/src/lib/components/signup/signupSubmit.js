export async function handleFormSubmission(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const requestData = {};

    formData.forEach((value, key) => {
        requestData[key] = value;
    });

    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
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
};
