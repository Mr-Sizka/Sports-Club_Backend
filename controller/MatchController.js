const MatchSchema = require('../model/Match');

const saveMatch = (req,resp)=>{
    const match = new MatchSchema({
        name:req.body.name,
        place:req.body.place,
        date:req.body.date,
        teams:req.body.teams,
        isHeld:req.body.isHeld
    });
    match.save().then(result=>{
        resp.json({data:{status:201,message:"Match Saved!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const updateMatch = (req,resp)=>{
    MatchSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            name:req.body.name,
            place:req.body.place,
            date:req.body.date,
            teams:req.body.teams,
            isHeld:req.body.isHeld
        }}).then(result=>{
        resp.json({data:{status:200,message:"Match Updated!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const deleteMatch = (req,resp)=>{
    MatchSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,message:"Match Deleted!!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const getMatchList = (req,resp)=>{
    MatchSchema.find().then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error)
    })
}

const getMatch = (req,resp)=>{
    MatchSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error)
    })
}

module.exports = {
    saveMatch,
    updateMatch,
    deleteMatch,
    getMatch,
    getMatchList
}
