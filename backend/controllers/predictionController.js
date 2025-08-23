import express from 'express';
import axios from 'axios';
import User from '../models/userModel.js'; // adjust path

const processModel = async (req, res) => {
  const { model } = req.params;   // "ckd" or "diabetes"
  const data = req.body;
  const userId = req.user._id;    // comes from your auth middleware (JWT)

  try {
    // Call FastAPI backend
    const response = await axios.post("http://localhost:8000/predict", {
      model_name: model,
      data,
    });

    const predictionResult = response.data.prediction; // assuming FastAPI sends { prediction: "High Chances..." }

    // Prepare update object
    let updateFields = {};
    if (model === "ckd") {
      updateFields = {
        lastCKDResult: predictionResult,
        "lastCKDResultCheck": new Date(),
      };
    } else if (model === "diabetes") {
      updateFields = {
        lastDiabetesResult: predictionResult,
        "lastDiabetesResultCheck": new Date(),
      };
    }

    // Update user in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true }
    );

    res.json({
      success: true,
      prediction: predictionResult,
      user: updatedUser
    });

  } catch (error) {
    console.error("Error calling FastAPI:", error.message);

    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

export default processModel;
