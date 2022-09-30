import { Router } from 'express'
import { CadastrarServico, BuscarServicosTitulo, BuscarServicos, Deletarservico, DetalhesServicos, EditarServico } from '../repository/servicesRepository.js';
const server = Router();

server.post('/servicos', async (req, resp) =>{
  try {
    const servico = req.body;
    const resposta = await CadastrarServico(servico);

    if(!servico.usuario)
      throw new Error('Campo usuário é obrigatório.')
    else if(!servico.titulo)
      throw new Error('Campo título é obrigatório.')
    else if(!servico.descricao)
      throw new Error('Campo descrição é obrigatório.')
    else if(!servico.ideias)
      throw new Error('Campo ideias é obrigatório.')
    else if(!servico.requisitos)
      throw new Error('Campo requisitos é obrigatório.')
    
    resp.status(204).send(resposta);                                        
  } 

  catch (err) {
    resp.status(401).send ({
      erro: err.message
    });
  }
})

server.get('/servicos', async (req, resp) =>{
  try {
    const resposta = await BuscarServicos();
    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/servicos/:titulo' , async (req, resp) =>{
  try {
    const {titulo} = req.params;
    if(titulo === undefined || titulo === " ") 
        throw new Error('Não encontrado')


    const resposta = await BuscarServicosTitulo(titulo);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})


server.get('/servicos/detalhes/:id', async (req, resp) => {
    try {
      const id = Number(req.params.id);
      
      if(id === undefined || id === "")
        throw new Error('ID inexistente');

      const resposta = await DetalhesServicos(id);
      resp.status(200).send(resposta);
      console.log(resposta);
      console.log(id);
    }

    catch(err) {
      resp.status(400).send(err.message)
    }
})


server.delete('/servicos/remover/:id' , async (req, resp) => {
  try {
    const id = Number(req.params.id);
    if(id === undefined || id === " ") 
    throw new Error('Perfil não encontrado ou inexistente.')

    const resposta = await Deletarservico(id);
    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.put('/servicos/alterar/:id' , async (req , resp) => {
  try {
    const id = Number(req.params.id);
    const novoServico = req.body;

    if(!novoServico.titulo)
      throw new Error('Campo título é obrigatório.')
    else if(!novoServico.descricao)
      throw new Error('Campo descrição é obrigatório.')
    else if(!novoServico.ideias)
      throw new Error('Campo ideias é obrigatório.')
    else if(!novoServico.requisitos)
      throw new Error('Campo requisitos é obrigatório.')

    const resposta = await EditarServico(id, novoServico);
    resp.status(200).send(resposta)
  } 

  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

export default server;