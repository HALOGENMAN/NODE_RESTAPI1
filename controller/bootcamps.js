
exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({success:true})
}

exports.getBootcamp = (req,res,next)=>{
    res.status(200).json({success:req.params.id})
}

exports.postBootcamp = (req,res,next)=>{
    res.status(200).json({success:true})
}

exports.putBootcamp = (req,res,next)=>{
    res.status(200).json({success:req.params.id})
}

exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({success:req.params.id,check:"delete"})
}