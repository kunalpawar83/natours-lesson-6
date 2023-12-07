const fs= require('fs');
const tours= JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.ID= (req,resp,next,val)=>{
 console.log(val);
    if(req.params.id*1>tours.length){
        return resp.status(404).json({
              status:"fail",
              Message:"invaild id "
        })
 
     }
     next();
}

exports.getalltour = (req,res)=>{
    res.status(200).json({
          status:"success",
          result:tours.length,
          data:{
            tours   
          }
        })
}

exports.createnewtour= (req,res)=>{
    const newid= tours[tours.length-1].id+1;
    const newtour = Object.assign({id:newid},req.body);
    tours.push(newtour);
        fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(tours),err=>{
            res.status(201).json({
                satuts:"success",
                data:{
                    tour:newtour
                }
                
            })
    
        })
    
    }

    exports.getonetour =(req,resp)=>{
  
    const tour = tours.find(el=>el.id===req.params.id*1);
    resp.status(200).json({
        status:"success",
        data:{
           tour
        }

    })

}

exports.updatetour=(req,resp)=>{
    
    resp.status(200).json({
        status:"success",
        data:{
            message:"update is done bro"
        }

    })
}

exports.deletetour = (req,resp)=>{
    
    resp.status(200).json({
        status:"success",
        data:{
            message:"is done"
        }

    })
}