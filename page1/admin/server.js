async function addBalance() {
    const userId = document.getElementById('userId').value.trim();
    const amount = parseInt(document.getElementById('amount').value.trim());

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    try {
        const response = await fetch('http://your-ngrok-url/add-balance', { // Replace 'your-ngrok-url' with your actual Ngrok URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, amount }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error adding balance:', error);
        alert('There was an error adding balance. Please try again later.');
    }
}
