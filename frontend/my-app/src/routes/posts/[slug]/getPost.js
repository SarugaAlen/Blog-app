export async function getPost(id) {
    try {
        console.log('Fetching post with ID:', id);
        
        const response = await fetch('http://localhost:3001/blogPost/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        console.log('Response status:', response.status);

        console.log('Response json', response.json())
        if (!response.ok) {
            throw new Error('Failed to fetch post');
        }

        const responseData = await response.json();
        console.log('Response data:', responseData);

        return responseData.post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }    
}
