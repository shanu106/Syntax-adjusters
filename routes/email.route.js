import express from 'express';
const router = express.Router();
import {getEmails} from '../utils/gmail.js';

import {
    classifyEmail,
    extractActionItems,
    generateReply
} from '../controller/email.controller.js';


router.post('/fetch', async(req, res)=>{
    const {accessToken} = req.body;
    try {
        const emails = await getEmails(accessToken);
        res.json(emails);
    } catch (error) {
        console.error('Error fetching emails:', error);
        res.status(500).json({error: 'Failed to fetch emails'});
    }
})
router.post('/classify', classifyEmail);
router.post('/extract', extractActionItems);
router.post('/reply', generateReply);

export default router;