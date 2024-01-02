import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminApplicationForm from "../../components/forms/Admin/AdminApplicationForm";
import Loading from "../../components/Loading";
import { updateApplication } from "../../services/applicationsService";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService";

const AdminViewApplication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const isLoggedIn = AuthService.isLoggedIn();
    if (!isLoggedIn) {
      navigate("/admin");
    }
  }, []);
  
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      await updateApplication(data);
      setLoading(false);
      toast.success("Başvuru bilgisi başarılı bir şekilde güncellendi.");
      navigate("/admin/basvuru-listesi");
    } catch (error) {
      console.error(error);
      toast.error("Basvuru güncellenirken bir hata olustu.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <AdminApplicationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default AdminViewApplication;
