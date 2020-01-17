const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    const { github_username } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); 
    /*
    Nessa const apiResponse é utilizado para acessar meu github ou de qualquer outro e de acordo com meu arquivo 
    Dev.js puxar as informações referentes do github do meu usuário (desenvolvedor). Contudo, não está realizando
    o procedimento.
    */
   
    console.log(response.data);
    return response.json({ message: 'Hello OmniStack' });
});

module.exports = routes;

