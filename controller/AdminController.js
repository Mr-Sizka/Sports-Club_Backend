const AdminSchema = require('../model/Admin');

const saveAdmin = (req,resp)=>{
    const admin = new AdminSchema({
        name: req.body.name,
        email: req.body.email,
        password : req.body.password
    });
    admin.save().then(result=>{
        resp.json({data:{status:201,message:"Admin Saved!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const updateAdmin = (req,resp)=>{
    AdminSchema.findOneAndUpdate({_id:req.headers.id},{$set:{
            name: req.body.name,
            email: req.body.email,
            password : req.body.password
        }}).then(result=>{
        resp.json({data:{status:200,message:"Admin Updated!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const deleteAdmin = (req,resp)=>{
    AdminSchema.findOneAndDelete({_id:req.headers.id}).then(result=>{
        resp.json({data:{status:200,message:"Admin Deleted!"}})
    }).catch(error=>{
        resp.json(error)
    })
}

const getAdmin = (req,resp)=>{
    AdminSchema.findOne({email:req.headers.email}).then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error)
    })
}

const getAdminList = (req,resp)=>{
    AdminSchema.find().then(result=>{
        resp.json({data:{status:200,value:result}})
    }).catch(error=>{
        resp.json(error)
    })
}

module.exports = {
    saveAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmin,
    getAdminList
}