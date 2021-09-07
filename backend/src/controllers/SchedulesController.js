const express = require('express');
const Schedule = require('../models/Schedule');

module.exports = {
  create(req, res) {
    let results = Schedule.create(req)

    return res.send('Vou enviar para uma pagina de CRIAÇAO com os campos (Post será nessa pagina)');
  },

  async index(req, res) {
    const results = await Schedule.all();
    let allSchedules = results.rows;

    return res.json([allSchedules]);
  },

  async show(req, res) {
    const results = await Schedule.findById(req.params.id);
    const schedule = results.rows;
    
    return res.json([schedule]);
  },

  async post(req, res) {
    await Schedule.post(req.body);
    console.log('antes do post');

    return res.json([req.body]);
  },

  async put (req, res) {
    const { notes } = req.body;

    await Schedule.put(req.headers.id,notes);

    return res.json([req.body]);
  }
}
