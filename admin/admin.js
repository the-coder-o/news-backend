const { read, write } = require("../model/model");

const Admin = {
  GET1: (req, res) => {
    try {
      const data = read("news");
      res.json(data);
      res.status(201).send({ message: true });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  GET2: (req, res) => {
    try {
      const dataTwo = read("nownews");
      res.json(dataTwo);
      res.status(201).send({ message: true });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  POST1: async (req, res) => {
    const { name, img, create_date, views, description } = await req.body;
    try {
      const addNowNews = read("nownews");
      const newNewsNow = {
        id: addNowNews.at(-1).id + 1 || 1,
        name,
        img,
        create_date,
        views,
        description,
      };
      addNowNews.push(newNewsNow);
      write("nownews", addNowNews);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  POST2: async (req, res) => {
    const { name, img, create_date, views, description } = await req.body;
    try {
      const addNews = read("news");
      const newNews = {
        id: addNews.at(-1).id + 1 || 1,
        name,
        img,
        create_date,
        views,
        description,
      };
      addNews.push(newNews);
      write("news", addNews);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  PUT1: async (req, res) => {
    const { id, name, img, create_date, views, description } = await req.body;
    try {
      const editNowNews = read("nownews");
      const editHandle = editNowNews.filter((data) => data.id != id);
      editHandle.push({
        id,
        name,
        img,
        create_date,
        views,
        description,
      });
      write("nownews", editHandle);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  PUT2: async (req, res) => {
    const { id, name, img, create_date, views, description } = await req.body;
    try {
      const editNowNews = read("news");
      const editHandle = editNowNews.filter((data) => data.id != id);
      editHandle.push({
        id,
        name,
        img,
        create_date,
        views,
        description,
      });
      write("news", editHandle);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  DELET1: async (req, res) => {
    const { id } = req.body;
    try {
      const data = read("nownews");
      const deleteHandle = data.filter((deleted) => deleted.id != id);
      write("nownews", deleteHandle);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
  DELET2: async (req, res) => {
    const { id } = req.body;
    try {
      const data = read("news");
      const deleteHandle = data.filter((deleted) => deleted.id != id);
      write("news", deleteHandle);
      res.json(201, { status: 201, message: "success" });
    } catch (error) {
      res.json(400, { status: 400, message: error.message });
    }
  },
};

module.exports = Admin;
