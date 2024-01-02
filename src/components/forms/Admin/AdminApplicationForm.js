import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { applicationStatus } from "../../../constants/Application/applicationStatusTypes";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  Container,
} from "@material-ui/core";
import CenteredContainer from "../../CenteredContainer";
import Loading from "../../Loading";
import {
  getAllApplications,
  getApplicationById,
} from "../../../services/applicationsService";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AdminApplicationForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});

  const [_applicationStatus, setApplicationStatus] =
    useState(applicationStatus);
  const [loading, setLoading] = useState(false);
  const { basvuruNo } = useParams();

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        setLoading(true);
        const allApplicationsResponse = await getAllApplications();

        const selectedApplication = allApplicationsResponse.find(
          (element) => element?.applicationCode === basvuruNo
        );

        if (!selectedApplication) {
          toast.error("Başvuru bulunamadı.");
          setLoading(false);
          return;
        }

        const selectedApplicationResponse = await getApplicationById(
          selectedApplication.id
        );

        setApplicationStatus(selectedApplicationResponse.applicationStatus);
        setValue(
          "applicationStatus",
          selectedApplicationResponse.applicationStatus
        );
        setValue("id", selectedApplication.id);
        setLoading(false);
        toast.success("Başvuru bilgisi başarılı bir şekilde getirildi.");
      } catch (error) {
        console.error(error);
        toast.error("404(bulunamadı)");
        setLoading(false);
      }
    };

    fetchApplicationData();
  }, [basvuruNo]);

  const handlApplicationStatusChange = (event) => {
    setApplicationStatus(event.target.value);
    setValue("applicationStatus", event.target.value);
  };

  return (
    <CenteredContainer>
      {loading ? (
        <Loading />
      ) : (
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5" align="center" gutterBottom>
              Başvuru Güncelleme
            </Typography>

            <InputLabel>Başvuru Durumu</InputLabel>
            <Select
              {...register("applicationStatus")}
              fullWidth
              value={_applicationStatus}
              onChange={handlApplicationStatusChange}
            >
              {Object.entries(applicationStatus).map(([key, value]) => (
                <MenuItem key={key} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>

            <TextField
              label="Cevap"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register("adminResponse")}
              error={!!errors.adminResponse}
              helperText={errors.adminResponse && errors.adminResponse.message}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
            >
              Gönder
            </Button>
          </form>
        </Container>
      )}
    </CenteredContainer>
  );
};

export default AdminApplicationForm;
