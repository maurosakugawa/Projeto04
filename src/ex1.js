


const express = require('express'); 
const app = express();
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Subir servidor
app.listen(3101, () => {console.log('Rodando...');});


// curl http://localhost:3101/somar/5/10

app.get('/somar/:a/:b', (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    let c = a + b;
    res.send('A soma é: ' + c );
});

// curl -X GET -d "x=12&y=4" http://localhost:3101/diff

app.get('/diff', (req, res) => {
    let { x, y } = req.body;
    x = parseInt(x);
    y = parseInt(y);
    let c = x - y;
    res.send('A diferença é: '+ c);
});

// curl -X POST -d "x=12&y=4" http://localhost:3101/diff
app.post('/diff', (req, res) => {
    let { x, y } = req.body;
    x = parseInt(x);
    y = parseInt(y);
    res.send(x - y + '');
});

// curl -X POST -d "x=12" http://localhost:3101/diff/4

app.post('/diff/:y', (req, res) => {
    let {x} = req.body;
    let y = req.params.y;
    x = parseInt(x);
    y = parseInt(y);
    res.send(x - y + '');
});


// curl -X GET -d "b=2&e=5" http://localhost:3101/pow
// curl -X POST -d "b=2&e=5" http://localhost:3101/pow
// curl -X PUT -d "b=2&e=5" http://localhost:3101/pow
// curl -X DELETE -d "b=2&e=5" http://localhost:3101/pow

app.all('/pow', (req, res) => {
    let{b, e} = req.body;
    b = parseInt(b);
    e = parseInt(e);
    res.send(b ** e + '');
});

// curl http://localhost:3101/texto.txt
app.use(express.static('public'));



// curl http://localhost:3101/arquivo/txt
app.use('/arquivo/txt', express.static("public/texto.txt"));


// curl http://localhost:3101/
app.get('/', (req, res) => res.send("caminho raiz"));


// curl -X GET -d "b=2&e=5" http://localhost:3101/errado
// curl -X POST http://localhost:3101/rota/desconhecida
// curl -X PUT http://localhost:3101/nao/mapeado
 app.use((req, res) => res.send("caminho desconhecido"));


