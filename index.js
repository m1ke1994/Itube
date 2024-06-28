let express = require(`express`);
let app = express();
let cors = require('cors')
let port = 3000;
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors())
app.use(express.json())
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/itube');


// Схема и модель
let videoSchema = new mongoose.Schema({
    title:String ,
    author: String,
    preview: String,
    likes: Number,
}, {
    timestamps: true
})

let Video = mongoose.model("video",videoSchema);

// Схема блогера



// Роуты

// Поиск всех видео
app.get(`/videos`, async function (req, res) {
   let data=await Video.find().sort({likes:-1}).limit(10);
   res.send(data)
});


// Поиск всех данных одного видео
app.get(`/video`, async function (req, res) {
    let id=req.query.id;
    let data=await Video.findOne({ _id:id });
    let array=await Video.find({ author:data.author, _id:{$ne:data._id}}).limit(3);
    
    res.send({
        video:data,
        videos:array,
    })
});


// Поиск данных блогера
app.get(`/blogger`, async function (req, res) {

});