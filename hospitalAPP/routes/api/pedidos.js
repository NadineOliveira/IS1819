var express = require("express");
var router = express.Router();
var passport = require("passport");
var Pedido = require("../../controllers/Pedido");

var resposta = {
  headers: {},
  pedido: {},
  erros: [],
  erro: false,
  totalRecebidos: 0,
  totalRegistados: 0,
  totalRejeitados: 0,
  totalValidados: 0,

}

router.get("/:nome", (req, res) => {
  Pedido.getAllPedidos(req.params.nome)
    .then(dados => res.json(dados))
    .catch(erro =>
      res.status(500).send("Erro na obtenção do diagnostico: " + erro)
    );
});

router.post("/:nr_processo", async (req, res) => {
  await Pedido.countPedidosEmProcesso()
    .then(async dados => {
      if (dados > 10) {
        resposta.headers = req.headers
        var pedido = {
          nif: req.body.nif,
          estado: req.body.estado,
          nome_hospital: req.body.nome_hospital,
          nome_seguradora: req.body.nome_seguradora,
          nr_processo: req.body.nr_processo,
          data_acidente: req.body.data_acidente,
          tipo_acidente: req.body.tipo_acidente,
          idSeguro: req.body.idSeguro,
        }
        resposta.pedido = pedido
        resposta.erros.push('Número de Pedidos Em processamento excedido.')
        resposta.erro = true
        resposta.totalRecebidos = 1
        resposta.totalRejeitados = 1
        res.json(resposta)
      }
      else {
        var pedido = await Pedido.getPedidoByNProcesso(req.params.nr_processo)
        if (pedido == null) {
          await Pedido.addPedido(req.body)
            .then(() => {
              resposta.headers = req.headers
              var pedido = {
                nif: req.body.nif,
                estado: req.body.estado,
                nome_hospital: req.body.nome_hospital,
                nome_seguradora: req.body.nome_seguradora,
                nr_processo: req.body.nr_processo,
                data_acidente: req.body.data_acidente,
                tipo_acidente: req.body.tipo_acidente,
                idSeguro: req.body.idSeguro,
              }
              resposta.pedido = pedido
              resposta.totalRecebidos = 1
              resposta.totalRegistados = 1
              res.json(resposta)
            })
            .catch(erro3 => res.status(500).send('Erro na inserção do Pedido: ' + erro3))
        }
        else {
          resposta.headers = req.headers
          resposta.erros.push('Pedido com número de processo recebido já existente.')
          resposta.erro = true
          resposta.totalRecebidos = 1
          resposta.totalRejeitados = 1
          var pedido = {
            nif: req.body.nif,
            estado: req.body.estado,
            nome_hospital: req.body.nome_hospital,
            nome_seguradora: req.body.nome_seguradora,
            nr_processo: req.body.nr_processo,
            data_acidente: req.body.data_acidente,
            tipo_acidente: req.body.tipo_acidente,
            idSeguro: req.body.idSeguro,
          }
          resposta.pedido = pedido
          res.json(resposta)
        }
      }
    })
    .catch(erro => res.status(500).send('Erro na inserção do Pedido: ' + erro))
})


router.post('/resposta/estado', async (req, res) => {
  await Pedido.getPedidoByID(req.body.idPedido)
    .then(async dados => {
      var update = await Pedido.updatePedidoByID(req.body.idPedido)
      if(update) {
        resposta.headers = req.headers
        var p = {
          nif: dados.nif,
          estado: true,
          nome_hospital: dados.nome_hospital,
          nome_seguradora: dados.nome_seguradora,
          nr_processo: dados.nr_processo,
          data_acidente: dados.data_acidente,
          tipo_acidente: dados.tipo_acidente,
          idSeguro: dados.idSeguro,
        }
        resposta.pedido = p
        resposta.totalValidados = 1
        res.json(resposta)
      }
      else {
        resposta.headers = req.headers
        var p = {
          nif: dados.nif,
          estado: false,
          nome_hospital: dados.nome_hospital,
          nome_seguradora: dados.nome_seguradora,
          nr_processo: dados.nr_processo,
          data_acidente: dados.data_acidente,
          tipo_acidente: dados.tipo_acidente,
          idSeguro: dados.idSeguro,
        }
        resposta.pedido = p
        resposta.erros.push('Não conseguimos efetuar Pedido!')
        resposta.erro = true
        console.log('Resposta Erro')
        console.log(resposta)
        res.json(resposta)
      }
    })
    .catch(erro => res.status(500).send('Erro na inserção do Pedido: ' + erro))
})


module.exports = router;