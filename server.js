import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res) => {

    console.log(req)

    res.send('Ok post')

})

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu certo!')
})

app.listen(3000)