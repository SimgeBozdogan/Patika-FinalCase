// CreateApplication.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationForm from "../components/forms/ApplicationForm";
import { createSubmission } from "../services/api";
import { generateRandomGUID } from "../utils/stringUtils";
import Loading from "../components/Loading";
import { toast } from "react-toastify";
import { applicationStatus } from "../constants/applicationStatusTypes";

const CreateApplication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      const applicationCode = generateRandomGUID();
      setLoading(true);
      const submissionResponse = await createSubmission({
        ...data,
        applicationCode,
        applicationStatus: applicationStatus.WAITING
      });
      setLoading(false);
      toast.success("Başvuru bilgisi başarılı bir şekilde kaydedildi.");
      navigate("/basvuru-basarili", {
        state: { submissionResponse },
      });
    } catch (error) {
      console.error(error);
      toast.error("Yeni basvuru eklenirken bir hata olustu.");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h1>Başvuru Oluştur</h1>
      <ApplicationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default CreateApplication;