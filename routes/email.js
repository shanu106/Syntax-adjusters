import express from 'express';
const router = express.Router();



router.post('/process', async (req, res)=>{
    const {emails } = req.body;
console.log("hyyyyyy")
    if(!emails || !Array.isArray(emails)){
        return res.status(400).json({error: 'Invalid emails data'});
    }

    try {
        console.log("email incoming : ",emails);

        
        res.json({success:true, message: 'Emails processed successfully'});

    } catch (error) {
        console.error('Error processing emails:', error);
        res.status(500).json({error: 'Failed to process emails'});
        
    }
})

export default router;