const { read, write } = require("../model/model");

const News = {
  GET: (req, res) => {
    const data = read("news");
    try {
      const { id } = req.params;
      res.json(data.find((newsId) => newsId.id == id));
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  GET1: (req, res) => {
    const data = read("news");
    try {
      res.json(data);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
};

module.exports = News;
