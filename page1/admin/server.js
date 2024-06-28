async function addBalance() {
    const userId = document.getElementById('userId').value.trim();
    const amount = parseInt(document.getElementById('amount').value.trim());

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    const app = new Realm.App({ id: "application-1-yhwxffq" }); // Replace with your Realm App ID

    const credentials = Realm.Credentials.anonymous();
    try {
        const user = await app.logIn(credentials);

        const result = await user.functions.addBalance(userId, amount);
        alert(result.message);
    } catch (error) {
        console.error('Error adding balance:', error);
        alert('There was an error adding balance. Please try again later.');
    }
}
