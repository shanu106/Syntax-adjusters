import express from 'express';
const router = express.Router();
import askGemini from '../utils/gemini.js';


router.post('/process-email', async (req, res)=>{
    const {emailContent , sender, subject} = req.body;

    const prompt = `Analyze the following professional email .
    1. classify it (e.g. Meeting, |Task, Info, Spam, or classify on your own if not get any kind then put in others).
    2. Extract action items from the email.
    3. Suggest a short professional reply.
    Email: subject: ${subject}
    From: ${sender}
    Content: ${emailContent}`;

    try {
        const result = await askGemini(prompt);
        console.log("result : ",result);
        res.json( result);
    } catch (error) {
        res.status(500).json({error: 'Error processing email'});
    }
})

export default router;