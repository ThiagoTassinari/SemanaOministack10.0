const express = require('express');
const mongoose = require('mongoose'); 
const routes = require('./routes');

const app = express();

/* 
    1) Conectei com a base MongoDB Atlas criei um cluster e conectei o banco ao meu backend por esse link, 
reparei o primeiro erro do link que foi o usuário e senha estarem com <>, apaguei mas ainda continuou dando 
erro.
    2) O segundo erro eu consertei tbm no site do Mongo e adc o IP 0.0.00/0 e está tudo certo de acordo com 
o site http://portquiz.net:27017/
    3) Apenas a terceira sugestão que não realizei o processo de recriar o cluster Atlas, pode ser que seja isso.
*/

/*  Esse era o erro que deu anteriormente, antes de eu seguir esses passo de sugestão, mas ainda continua dando
undefined

MongooseTimeoutError: Server selection timed out after 30000 ms

Esse erro pode estar acontecendo por 3 motivos, sendo eles:
1 - A String de conexão do Mongoose está incorreta, geralmente vocês esquecem de remover os <>  da string para colocar o usuário e a senha;
2 - Com a String correta o segundo motivo pode ser a falta da adição do IP no Whitelist no MongoDB Atlas.
3 - Recriar o Cluster no Atlas;
*/

mongoose.connect('mongodb+srv://thiago53680:omnistack@cluster0-rjway.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
