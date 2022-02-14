exports.test = (req, res) => {

    if(res){
        return res.status(200).json({ message: "Test is Done" });
    }else{
        return res.status(400).json({ error: "Something went wrong" });
    }

  };
  exports.chat = (req,res)=>{
    if(res){
        return res.status(200).json("Chat is Done" );
    }else{
        return res.status(400).json({ error: "Something went wrong" });
    }
  }