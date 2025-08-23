import axios from 'axios';
import express from 'express';
const router = express.Router();

router.get('/demo', async (req, res) => { 
    try {
    const response = await axios.get('http://example.com/protected'); // <-- replace with actual endpoint

    // Access headers
    const etag = response.headers['etag']; // header keys are lowercase
    console.log('ETag:', etag);

  } catch (err) {
    console.error('Error fetching ETag:', err.message);
  }
});



async function getETag() {
  
}

getETag();
