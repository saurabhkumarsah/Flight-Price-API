import express from 'express';
import { createFlight, showFlight } from '../controller/showFligh.js';
const router = express.Router();

router.get('/test', (req, res) => {
    res.send({ status: true, message: "Testing" })
})

router.post('/create', createFlight)
router.get('/show', showFlight)

export default router;