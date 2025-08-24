
import axios from 'axios';
import User from '../models/userModel.js';
import UserVitals from '../models/userVitalsModel.js';  // Capitalize (convention)

const processModel = async (req, res) => {
  const { model } = req.params;   // "ckd" or "diabetes"
  const { data } = req.body;
  const userId = req.user._id;    // comes from auth middleware (JWT)

  try {
    //  Save or Update Vitals
    const vitals = await UserVitals.findOneAndUpdate(
      { userId },                // match the logged-in user
      { userId, ...data },       // overwrite with latest vitals
      { new: true, upsert: true } // create if not exists
    );
    console.log(vitals);
    
    const response = await axios.post("http://localhost:8000/predict", {
      model_name: model,
      data,
    });

    const predictionResult = response.data.prediction;
    console.log("Prediction result:", predictionResult);

    // Update prediction result in User
    let updateFields = {};
    if (model === "ckd") {
      updateFields = {
        lastCKDResult: predictionResult,
        lastCKDResultCheck: new Date(),
      };
    } else if (model === "diabetes") {
      updateFields = {
        lastDiabetesResult: predictionResult,
        lastDiabetesResultCheck: new Date(),
      };
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true }
    ).select("-password"); // exclude password

    // Send back response
    res.json({
      success: true,
      prediction: predictionResult,
      user: updatedUser,
      vitals
    });

  } catch (error) {
    console.error("Error in processModel:", error.message);

    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};


export default processModel;
