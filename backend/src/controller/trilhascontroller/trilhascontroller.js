const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const tokenVerifiy = require('../tokencontroller/tokenverify')

router.route('/listar').get((req, res) => {

    tokenVerifiy(req,res)
    return res.status(200).json({ trilhas: ['1','2','3']})

})