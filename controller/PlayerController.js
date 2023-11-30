const PlayerSchema = require('../model/Player');

const savePlayer = (req,resp)=>{
    const player = new PlayerSchema({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email,
        points: req.body.points,
        age: req.body.age,
        password: req.body.password
    })
    player.save().then(result=>{
        resp.json({data:{status:201,message:"Player Saved"}});
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const updatePlayer = (req,resp)=>{
    PlayerSchema.findOneAndUpdate({_id:req.headers.id},{$set: {
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            email: req.body.email,
            points: req.body.points,
            age: req.body.age,
            password: req.body.password
        }
    }).then(result=>{
        resp.json({data:{status:201,message:"Player Updated"}});
    }).catch(error=>{
        console.log(error)
        resp.json(error)
    })
};

const deletePlayer = (req,resp)=>{
    PlayerSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:201,message:"Player Deleted!"}});
    }).catch(error=>{
        resp.json(error)
    })
};

const getPlayer = (req,resp)=>{
    PlayerSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,value:result}});
    }).catch(error=>{
        resp.json(error);
    })
}

const login = (req,resp)=>{
    PlayerSchema.findOne({email:req.headers.email} && {password:req.headers.password}).then(result=>{
        resp.json({data:{status:200,value:result}});
    }).catch(error=>{
        resp.json(error);
    })
}

const getPlayerList = (req,resp)=>{
    PlayerSchema.find().then(result=>{
        resp.json({data:{status:200,value:result}});
    }).catch(error=>{
        resp.json(error);
    })
}


module.exports = {
    savePlayer,
    updatePlayer,
    deletePlayer,
    getPlayerList,
    getPlayer,
    login
}