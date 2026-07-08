import { useState } from "react";
import "./Companyprofile.css";
import Toast from "../../components/Toast";
import { createCompanyProfile } from "../service/authService";
import { useNavigate } from "react-router";

function CompanyProfile() {
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [logo, setLogo] = useState(null);

  const [toast, setToast] = useState({
    message: "",
    type: "info",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("company_name", companyName);
    payload.append("description", description);
    payload.append("website", website);

    if (logo) {
      payload.append("logo", logo, logo.name);
    }

    try {
      const response = await createCompanyProfile(payload);
      const responseData = response?.data;

      if (responseData?.success === false) {
        setToast({
          message: responseData.message || "Company profile creation failed",
          type: "error",
        });
        return;
      }
       localStorage.setItem("Token", responseData.token || "");
      setToast({
        message:
          responseData?.message || "Company profile created successfully",
        type: "success",
      });

      setCompanyName("");
      setDescription("");
      setWebsite("");
      setLogo(null);

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.response?.data?.detail ||
        "Something went wrong";

      setToast({
        message,
        type: "error",
      });
    }
  };

  return (
    <div className="company-container">
      <div className="company-card">
        <h2>Company Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              placeholder="Enter company description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="input-group">
            <label>Website</label>
            <input
              type="url"
              placeholder="https://example.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Company Logo</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setLogo(e.target.files[0])}
            />
          </div>

          <button type="submit" className="company-btn">
            Save Profile
          </button>
        </form>
      </div>

      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ message: "", type: "info" })}
      />
    </div>
  );
}

export default CompanyProfile;