const express = require("express");
const env = require("dotenv");
const app = express();
const cors = require("cors");
const TelegramBot = require('node-telegram-bot-api');
const adminRoutes = require("./routes/admin/auth");
// const mongoose = require("mongoose");


env.config();



const token = `${process.env.TOKEN}`;
const bot = new TelegramBot(token, {polling: true});


// const connectionUrl=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@telegrambot.ytjio.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

// mongoose.connect(connectionUrl, {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log('DB Connected')
// });





// bot.on('message', (message) => {
    
//     console.log(message)
//    let chat_id = message.from.id;
//    let firstname = message.from.first_name;
//    bot.sendMessage(chat_id,`Hello ${firstname} Sir, How can i help you?`)
  
   
//   });


  bot.onText(/\/echo (.+)/, (msg, match) => {
      
      console.log(match,"<<<match")
   
  
    const chatId = msg.chat.id;
    const resp = match[1];
  
    bot.sendMessage(chatId, resp);
  });

  bot.onText(/\/great (.+)/, (msg, match) => {
      

  const chatId = msg.chat.id;
  const res = `Hello ${match[1]}, how are you doing?`;

  bot.sendMessage(chatId, res);
});






app.use(cors());
app.use(express.json());


app.use("/api", adminRoutes);
app.get('/',(req,res) => {
    res.status(200).json({
      message:'Welcome To Our Site'
    })
  })
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});