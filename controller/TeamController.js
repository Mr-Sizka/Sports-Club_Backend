const TeamSchema = require('../model/Team');

const saveTeam = (req,resp)=>{
    const team = new TeamSchema({
        name:req.body.name,
        players:req.body.teamPlayers
    })
    team.save().then(result=>{
        resp.json({data:{status:201,message:"Team Saved!"}})
    }).catch(error=>{
        resp.json(error);
    })
}


const updateTeam = (req,resp)=>{
    TeamSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            name:req.body.name,
            players:req.body.teamPlayers
        }}).then(result=>{
        resp.json({data:{status:200,message:"Team Updated!"}})
    }).catch(error=>{
        resp.json(error);
    })
}

const deleteTeam = (req,resp)=>{
    TeamSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,message:"Team Deleted!"}})
    }).catch(error=>{
        resp.json(error);
    })
}

const getTeam = (req,resp)=>{
    TeamSchema.findOne({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error);
    })
}

const getTeamList = (req,resp)=>{
    TeamSchema.find().then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error);
    })
}

module.exports = {
    saveTeam,
    updateTeam,
    deleteTeam,
    getTeam,
    getTeamList
}