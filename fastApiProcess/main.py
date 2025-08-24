from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict, Any
# from axios import 
import joblib

app = FastAPI()

# ===================== Required Fields =====================

CKD_FIELDS = [
    "age", "bp", "sg", "al", "su", "rbc", "pc", "pcc", "ba", "bgr",
    "bu", "sc", "sod", "pot", "hemo", "pcv", "wbcc", "rbcc",
    "htn", "dm", "cad", "appet", "pe", "ane"
]

DIABETES_FIELDS = [
    "pregnancies", "glucose", "bloodPressure", "skinThickness",
    "insulin", "bmi", "diabetesPedigreeFunction", "age"
]

# ===================== Request Schema =====================

class PredictionRequest(BaseModel):
    model_name: str
    data: Dict[str, Any]

# ===================== Models =====================

MODEL_PATHS = {
    "ckd": "models/ckd_model2.joblib",
    "diabetes": "models/diabetes_model.joblib"
}


@app.get("/")
def root():
    return {"message": "FastAPI backend is running"}


# ===================== Endpoint =====================

@app.post("/predict")
async def predict(request: PredictionRequest):
    body = request.dict()
    model_name = body["model_name"].lower()
    data = body["data"]
    print(model_name, data)


    # Validate model name
    if model_name not in MODEL_PATHS:
        raise HTTPException(status_code=400, detail="Invalid model name. Use 'ckd' or 'diabetes'.")

    # Pick required fields
    required_fields = CKD_FIELDS if model_name == "ckd" else DIABETES_FIELDS

    # Check for missing fields
    missing_fields = [field for field in required_fields if field not in data]
    if missing_fields:
        raise HTTPException(
            status_code=400,
            detail={"error": "Missing required fields", "fields": missing_fields}
        )

    # Load model
    try:
        model = joblib.load(MODEL_PATHS[model_name])
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error loading model: {str(e)}")

    # Prepare input in correct order
    input_data = [data[field] for field in required_fields]

    # Predict
    try:
        prediction = model.predict([input_data])[0]
        if prediction == 0 :
            prediction = "Chronic Kidney Disease chances are not available"
        else:
            prediction = "Chronic Kidney Disease chances are available"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

    return {
        "success": True,
        "model": model_name,
        # "input": data,
        "prediction": str(prediction)
    }
