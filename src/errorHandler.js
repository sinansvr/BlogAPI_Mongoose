"use strict"

module.exports=(err,req,res,next)=>{

    const errorStatusCode=res?.errorStatusCode;

    res.status(errorStatusCode).send({
        error:true,
        message:err.message,
        cause:err.cause,
        body:req.body

    })

}