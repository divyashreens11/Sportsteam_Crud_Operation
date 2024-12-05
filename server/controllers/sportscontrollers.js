import sports from "../models/sportsmodels.js";
// create new sportsteam
// while writing functions remember write function name in camel case...
//for writing class or constructor use pascal case where first letter is Capss...
export const createSports =async (req,res) => {
    try {
        const sportsData = sports(req.body);
        if(!sportsData){
            return res.status(404).json({msg: "SportsTeam not found"} );
        }
        await sportsData.save();
        res.status(200).json ({ msg: "SportsTeam created successfully"});//for creation
        
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

}



export const getAllSports = async(req,res) => {
    try{
        const sportsData = await sports.find();
        if(!sportsData)
        {
            return res.status(404).json({msg: "SportsTeam not found"} );  
        }
        res.status(200).json(sportsData);//passing the data 
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}



export const getOneSports = async(req,res) => {
    try{
        const id =req.params.id;
        const sportsData = await sports.findById(id);
        if(!sportsData)
        {
            return res.status(404).json({msg: "SportsTeam not found"} );  
        }
        res.status(200).json(sportsData);//passing the data 
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}





/*export const getExist = async(req,res) => {
    try{
        const id =req.params.id;
        
        const sportsExist = await sports.findById(id);
        if(!sportsExist)
        {
            return res.status(404).json({msg: "SportsTeam not found"} );  
        }
        await sports.findByIdAndUpdate(id,req.body,{new:true})
        res.status(500).json({msg:"Sports updated Successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}*/

export const getUpdate = async (req, res) => {
    try {
      const id = req.params.id;
  
      const sportsExist = await sports.findById(id);
      if (!sportsExist) {
        return res.status(404).json({ msg: "SportsTeam not found" });
      }
  
      const updatedSports = await sports.findByIdAndUpdate(id, req.body, {
        new: true,
      });
  
      res.status(200).json({
        msg: "Sports updated Successfully",
        updatedSports,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };






  export const deleteSports = async (req, res) => {
    try {
      const id = req.params.id;
  
      const sportsExist = await sports.findById(id);
      if (!sportsExist) {
        return res.status(404).json({ msg: "SportsTeam not found" });
      }
  
      await sports.findByIdAndDelete(id);
      res.status(200).json({ msg: "SportsTeam deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  