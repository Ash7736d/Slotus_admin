async function addBalance() {
    const userId = document.getElementById('userId').value.trim(); // Get user ID input and trim any extra whitespace
    const amount = parseInt(document.getElementById('amount').value.trim()); // Get amount input and parse to integer

    if (!userId || isNaN(amount)) {
        alert('Please enter a valid User ID and Amount.');
        return;
    }

    const uri = "mongodb+srv://alternoteamnexus:XWSDVIjEImvH9Dlg@nexuseconomypeoject.69cjkla.mongodb.net/";

    try {
        const mongoClient = new MongoClient(uri);
        await mongoClient.connect();
        const database = mongoClient.db("cluster1");
        const updatesCollection = database.collection("pendingUpdates");

        await updatesCollection.insertOne({ user_id: userId, amount });
        alert('Balance update request submitted successfully');

        await mongoClient.close();
    } catch (error) {
        console.error('Error adding balance:', error);
        alert('There was an error adding balance. Please try again later.');
    }
}
