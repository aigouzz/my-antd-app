let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let _ = require('lodash')
let port = process.env.NODE_ENV === 'production' ? 3002 : 3001

app.use(bodyParser.urlencoded({
    extended: false,
    limit: '10mb'
}))

app.use(bodyParser.json({
    limit: '10mb'
}))

app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'content-type, with-credentials');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method.toLowerCase() === 'options') {
        res.header('Access-Control-Max-Age', '3000');
        res.sendStatus(200);
    } else {
        next();
    }
});

app.post('/search', (req, res) => {
    console.log(req.body);
    let list = _.shuffle([
        {
            label: '夜曲-周杰伦',
            key: 1
        },
        {
            label: '心甘情愿-周以',
            key: 2
        },
        {
            label: '西界-林俊杰',
            key: 3
        },
        {
            label: '姑娘爱情了-邓伦',
            key: 4
        },
        {
            label: '酸酸甜甜就是我-张含韵',
            key: 5
        },
    ]);
    list = list.slice(0, Math.ceil(Math.random() * list.length));
    let result = {
        message: '请求search成功',
        list,
    };
    res.send(JSON.stringify(result));
});

app.post('/upload', (req, res) => {
    console.log((req.body.image.length / 1024).toFixed(2) + 'kb');
    const result = {
        message: '上传成功',
        status: 200,
        url: ''
    };
    res.send(JSON.stringify(result));
});


app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log(`启动成功，地址:http://127.0.0.1:${port}`)
    }
})