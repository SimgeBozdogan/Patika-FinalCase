// CreateApplication.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../../components/forms/Application/ApplicationForm";
import { createApplication } from "../../services/applicationsService";
import { generateRandomGUID } from "../../utils/stringUtils";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import { applicationStatus } from "../../constants/Application/applicationStatusTypes";

const CreateApplication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      const applicationCode = generateRandomGUID();
      setLoading(true);
      const applicationResponse = await createApplication({
        ...data,
        applicationCode,
        applicationStatus: applicationStatus.PENDING,
      });
      setLoading(false);
      toast.success("Başvuru bilgisi başarılı bir şekilde kaydedildi.");
      navigate("/basvuru-basarili", {
        state: { applicationResponse },
      });
    } catch (error) {
      console.error(error);
      toast.error("Yeni basvuru eklenirken bir hata olustu.");
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <ApplicationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateApplication;
