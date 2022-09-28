import { Router } from 'express'
import { CadastrarServico, BuscarServicosTitulo, BuscarProfissionaisNome, BuscarProfissas, BuscarServicos, Deletarservico } from '../repository/servicesRepository.js';
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

server.get('/profissional', async (req, resp) =>{
  try {
    const resposta = await BuscarProfissas();
    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.get('/profissional/:nome' , async (req, resp) =>{
  try {
    const {nome} = req.params;
    if(nome === undefined || nome === " ") 
    throw new Error('Não encontrado')

    const resposta = await BuscarProfissionaisNome(nome);

    resp.status(200).send(resposta)

  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

server.delete('/servicos/remover/:id' , async (req, resp) => {
  try {
    const {id} = req.params;
    if(id === undefined || id === " ") 
    throw new Error('Perfil não encontrado ou inexistente.')

    const resposta = await Deletarservico (Number(id));

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
    const {id} = req.params;
    if(id === undefined || id === " ") 
    throw new Error('Serviço  não encontrado ou inexistente.')

    const resposta = await Deletarservico (Number(id));

    resp.status(200).send(resposta)
  } 
  catch (err) {
    resp.status(400).send ({
      erro: err.message
    });
  }
})

export default server;