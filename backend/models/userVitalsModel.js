import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userVitalsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  // General Vitals
  age: { type: Number, required: true },
  bp: { type: Number },
  sg: { type: Number },
  al: { type: Number },
  su: { type: Number },
  rbc: { type: Number },

  // Microscopic features
  pc: { type: String, enum: ["normal", "abnormal"] },
  pcc: { type: String, enum: ["present", "absent"] },
  ba: { type: String, enum: ["present", "absent"] },

  // Biochemical parameters
  bgr: { type: Number },
  bu: { type: Number },
  sc: { type: Number },
  sod: { type: Number },
  pot: { type: Number },
  hemo: { type: Number },
  pcv: { type: Number },
  wbcc: { type: Number },
  rbcc: { type: Number },

  htn: { type: String, enum: ["yes", "no"] },
  dm: { type: String, enum: ["yes", "no"] },
  cad: { type: String, enum: ["yes", "no"] },
  appet: { type: String, enum: ["good", "poor"] },
  pe: { type: String, enum: ["yes", "no"] },
  ane: { type: String, enum: ["yes", "no"] },

  pregnancies: { type: Number },
  glucose: { type: Number },
  bloodPressure: { type: Number },
  skinThickness: { type: Number },
  insulin: { type: Number },
  bmi: { type: Number },
  diabetesPedigreeFunction: { type: Number }

}, {
  timestamps: true
});

export default mongoose.model("UserVitals", userVitalsSchema);
