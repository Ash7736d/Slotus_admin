async function addBalance() {
    const userId = document.getElementById('userId').value.trim();
    const amount = parseInt(document.getElementById('amount').value.trim());

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    const apiKey = 'j8Mv7yFEJRvvRmEhmZJ5DmruVIHWTRdNpKdkMTJvsVSGBybnW0v2I72ONxQsLWmw'; // Replace with your actual API key

    try {
        const response = await fetch('https://application-1-yhwxffq.mongodb.com/api/client/v2.0/app/application-1-yhwxffq/functions/call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
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
