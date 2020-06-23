const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = (req,res,next)=>{
    Bootcamp.find()
    .then(result=>{
        res.status(400).json({success:true,count:result.length,dtat:result})
    })
    .catch(err=>next(err))
}

exports.getBootcamp = (req,res,next)=>{
    Bootcamp.findById(req.params.id)
    .then(result=>{
        if(!result) return res.status(400).json({success:false,data:result})
        res.status(200).json({success:true,data:result})
    })
    .catch(err=>next(err));
}

exports.postBootcamp = (req,res,next)=>{
    // bootcamp = new Bootcamp({...req.body})
    // bootcamp.save()//not working
    Bootcamp.create(req.body)
    .then(()=>{
        res.status(201).json({success:true,data:req.body})
    })
    .catch(err=>{
        next(err);
    })
}

exports.putBootcamp = (req,res,next)=>{ //update bootcamp
    Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
    })
    .then(result=>{
        if(!result) return res.status(400).json({success:false}) 
        res.status(200).json({success:true,data:result})
    })
    .catch(err=>next(err))
}

exports.deleteBootcamp = (req,res,next)=>{
    Bootcamp.findByIdAndDelete(req.params.id)
    .then(result=>{
        if(!result) return res.status(400).json({success:false})
        res.status(200).json({success:true})
    })
    .catch(err=>next(err))
}