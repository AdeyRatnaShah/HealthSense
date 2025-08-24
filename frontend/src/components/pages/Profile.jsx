import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../layouts/Loader";
import { User, Calendar, Mail, Activity } from "lucide-react";

// Map of vitals abbreviations → full form
const vitalsFullForms = {
  age: "Age",
  al: "Albumin",
  ane: "Anemia",
  appet: "Appetite",
  ba: "Bacteria",
  bgr: "Blood Glucose Random",
  bp: "Blood Pressure",
  bu: "Blood Urea",
  cad: "Coronary Artery Disease",
  dm: "Diabetes Mellitus",
  hemo: "Hemoglobin",
  htn: "Hypertension",
  pc: "Pus Cell",
  pcc: "Pus Cell Clumps",
  pcv: "Packed Cell Volume",
  pe: "Pedal Edema",
  pot: "Potassium",
  rbc: "Red Blood Cells",
  rbcc: "Red Blood Cell Count",
  sc: "Serum Creatinine",
  sg: "Specific Gravity",
  sod: "Sodium",
  su: "Sugar",
  wbcc: "White Blood Cell Count",
};

// Map values 0/1 → human readable
// Map values 0/1 → human readable
const formatVitalValue = (key, value) => {
  const numVal = Number(value);

  if (numVal === 1 || numVal === 0) {
    switch (key) {
      case "htn":
      case "dm":
      case "cad":
      case "pe":
      case "ane":
        return numVal === 1 ? "Yes" : "No";

      case "pc":
      case "pcc":
      case "ba":
        return numVal === 1 ? "Present" : "Absent";

      case "appet":
        return numVal === 1 ? "Good" : "Poor";

      default:
        return numVal;
    }
  }

  return value; // return raw if not 0/1
};


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("HealthSense_token");
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserData(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <Loader />;

  if (!userData) {
    return (
      <div className="text-center text-red-600 mt-20">
        Failed to load profile data.
      </div>
    );
  }

  const { user, userVitals } = userData;

  return (
    <div className="flex justify-center py-12 px-6 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center space-x-6 border-b pb-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center text-white text-4xl font-bold shadow-md">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center gap-2">
              <User className="w-6 h-6 text-blue-600" /> {user?.name}
            </h2>
            <p className="text-gray-500 flex items-center gap-2">
              <Mail className="w-4 h-4" /> {user?.email}
            </p>
            <p className="text-gray-500 flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Joined:{" "}
              {user?.createdAt
                ? new Date(user?.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Vitals */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6 text-green-600" /> Health Vitals
          </h3>

          {userVitals ? (
            <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Parameter</th>
                  <th className="p-3 border">Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(userVitals).map(([key, value]) => (
                  <tr key={key} className="hover:bg-gray-50">
                    <td className="p-3 border font-medium">
                      <span className="block">
                        {vitalsFullForms[key] || key}
                      </span>
                      {/* <span className="text-xs text-gray-400">({key})</span> */}
                    </td>
                    <td className="p-3 border text-gray-700">
                      {formatVitalValue(key, value)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 italic">No vitals data found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
