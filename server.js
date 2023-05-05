const express = require("express");

const admin = require("./admin/admin");
const news = require("./controllers/news.controller");
const nowNews = require("./controllers/nownews.controller");

const app = express();
app.use(express.json());

app.get("/now-news/:id", nowNews.GET);
app.get("/news/:id", news.GET);

app.get("/now-news", nowNews.GET1);
app.get("/news", news.GET1);

app.get("/admin/see/all-news", admin.GET1);
app.get("/admin/see/all-nownews", admin.GET2);

app.post("/admin/create-new-nownews", admin.POST1);
app.post("/admin/create-new-news", admin.POST2);

app.put("/admin/edit-new-nownews", admin.PUT1);
app.put("/admin/edit-new-news", admin.PUT2);

app.delete("/admin/delete-new-nownews", admin.DELET1);
app.delete("/admin/delete-new-news", admin.DELET2);

app.listen(5000, () => console.log("Server running"));
