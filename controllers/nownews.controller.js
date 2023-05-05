const { read, write } = require("../model/model");

const NowNews = {
  GET: (req, res) => {
    const data = read("nownews");
    try {
      const { id } = req.params;
      res.json(data.find((nowNewsId) => nowNewsId.id == id));
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

module.exports = NowNews;
