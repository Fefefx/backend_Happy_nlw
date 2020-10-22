import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/Handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static(path.join(__dirname, '..','uploads')));
app.use(errorHandler);

/*
app.post('/users/:id',(request, response)=>{
    //Recupera os query params
    console.log(request.query);
    //Recupera os routes params
    console.log(request.params);
    //Recupera o body
    console.log(request.body);
    return response.json( { message: "Hello World !" } );
});
*/

app.listen(3333);