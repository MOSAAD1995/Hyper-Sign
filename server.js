const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { performTransaction } = require('./transaction'); // Import the transaction logic

const { Gateway, Wallets } = require('fabric-network');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.) from the public directory
app.use(express.static('public'));

// Serve your HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/user.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'user.html'));
});
app.get('/Notifications.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Notifications.html'));
});
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});
app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});
app.get('/Stored Contracts.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Stored Contracts.html'));
});
app.get('/Completed Contracts.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Completed Contracts.html'));
});
app.get('/Draft.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Draft.html'));
});
app.get('/Billing.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Billing.html'));
});
app.get('/About.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'About.html'));
});
app.get('/Settings.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Settings.html'));
});

app.get('/connect', async (req, res) => {
    try {
      await performTransaction(); // Use the performTransaction function from transaction.js
  
      res.send('Connected to Hyperledger Fabric Network successfully.');
    } catch (error) {
      console.error('Error connecting to Hyperledger Fabric Network:', error);
      res.status(500).send('Failed to connect to Hyperledger Fabric Network.');
    }
  });


app.get('/connect', async (req, res) => {
    try {
        const connectionProfile = require('./connection-profile.json');
        const walletPath = '/C:\\Users\Lenovo\\Desktop\\contract signing web site';
        const userId = 'u0k3gmk4r2';

        const gateway = new Gateway();
        await gateway.connect(connectionProfile, {
            wallet: await Wallets.newFileSystemWallet(walletPath),
            identity: userId,
            discovery: { enabled: true, asLocalhost: true }
        });

        // TODO: Add your interaction with the Hyperledger Fabric network here

        res.send('Connected to Hyperledger Fabric Network successfully.');
    } catch (error) {
        console.error('Error connecting to Hyperledger Fabric Network:', error);
        res.status(500).send('Failed to connect to Hyperledger Fabric Network.');
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});
