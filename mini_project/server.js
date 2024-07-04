const express = require('express');
const AWS = require('aws-sdk');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/images', async (req, res) => {
    const bucketName = 'devops-mce';
    const params = { Bucket: bucketName };

    try {
        const data = await s3.listObjectsV2(params).promise();
        const images = data.Contents.map(item => `https://${bucketName}.s3.amazonaws.com/${item.Key}`);
        res.json(images);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving images from S3');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
