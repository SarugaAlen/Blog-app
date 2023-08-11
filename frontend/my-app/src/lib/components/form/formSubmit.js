export async function handleSubmit(event)  {
    event.preventDefault();

    const username = localStorage.getItem('username');
    const nazivValue = event.target.naziv.value;
    const opisValue = event.target.opis.value;
    const avtor = username || 'Anonymous';

    if (!username) {
        console.log("Ni prijavljenega uporabnika");
    }

    const formData = {
        naziv: nazivValue,
        opis: opisValue,
        avtor: avtor,
        date: new Date().toISOString().slice(0, 10)
    };

    try {
        const response = await fetch('http://localhost:3001/blog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData.msg);
        } else {
            console.error('Failed to submit form:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }

    event.target.reset();
};