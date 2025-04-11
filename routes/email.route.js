import express from 'express';
import {
    classifyEmail,
    extractActionItems,
    generateReply
} from '../controllers/email.controller.js';

const router = express.Router();
router.post('/classify', classifyEmail);
router.post('/extract', extractActionItems);
router.post('/reply', generateReply);