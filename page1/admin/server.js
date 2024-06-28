async function addBalance() {
    const userId = document.getElementById('userId').value.trim(); // Get user ID input and trim any extra whitespace
    const amount = parseInt(document.getElementById('amount').value.trim()); // Get amount input and parse to integer

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    try {
        const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-1-yhwxffq/endpoint/data/v1/action/updateOne', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'j8Mv7yFEJRvvRmEhmZJ5DmruVIHWTRdNpKdkMTJvsVSGBybnW0v2I72ONxQsLWmw', // Your API Key
            },
            body: JSON.stringify({
                dataSource: 'Cluster0', // Replace with your data source name
                database: 'cluster1', // Replace with your database name
                collection: 'profiles', // Replace with your collection name
                filter: { user_id: userId }, // Filter to find the document
                update: { $inc: { coins: amount } }, // Update to increment the balance
            }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Balance added successfully');
        } else {
            console.error('Error adding balance:', result);
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error adding balance:', error);
        alert('There was an error adding balance. Please try again later.');
    }
}
