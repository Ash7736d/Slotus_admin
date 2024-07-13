async function addBalance() {
    const userId = document.getElementById('userId').value.trim();
    const amount = parseInt(document.getElementById('amount').value.trim());

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    try {
        const response = await fetch('http://192.168.100.12:4000/updateUserBalance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, amount })
        });

        const result = await response.json();
        const resultElement = document.getElementById("result");

        if (response.ok) {
            resultElement.textContent = result.message;
            resultElement.style.color = "green";
        } else {
            console.error('Error adding balance:', result);
            resultElement.textContent = `Error: ${result.message}`;
            resultElement.style.color = "red";
        }
    } catch (error) {
        console.error('Error adding balance:', error);
        document.getElementById("result").textContent = "There was an error adding balance. Please try again later.";
        document.getElementById("result").style.color = "red";
    }
}
