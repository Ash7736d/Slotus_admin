document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.ui-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            }
        });
    });
});

async function addBalance() {
    const userId = document.getElementById('userId').value.trim();
    const amount = parseInt(document.getElementById('amount').value.trim());

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    const API_KEY = 'j8Mv7yFEJRvvRmEhmZJ5DmruVIHWTRdNpKdkMTJvsVSGBybnW0v2I72ONxQsLWmw';

    try {
        const response = await fetch('https://ap-southeast-1.aws.data.mongodb-api.com/app/application-1-yhwxffq/endpoint/addBalance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': API_KEY,
            },
            body: JSON.stringify({ userId, amount }),
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            console.error('Error adding balance:', result);
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error adding balance:', error);
        alert('There was an error adding balance. Please try again later.');
    }
}
