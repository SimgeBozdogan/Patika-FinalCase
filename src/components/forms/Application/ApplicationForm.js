import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";

// Define the validation schema using yup
const validationSchema = yup.object().shape({
  name: yup.string().required("Ad zorunlu alandır."),
  surname: yup.string().required("Soyad zorunlu alandır."),
  age: yup
    .number()
    .required("Yaş zorunlu alandır.")
    .typeError("Yaş sayı olmalıdır."),
  tcNo: yup
    .string()
    .required("TC No zorunlu alandır.")
    .length(11, "TC No 11 haneli olmalıdır."),
  reasonForApplication: yup
    .string()
    .required("Başvuru Nedeni zorunlu alandır."),
  adress: yup.string().required("Adres Bilgisi zorunlu alandır."),
  attachment: yup.string().required("Fotograflar/Ekler zorunlu alandır."),
});

const ApplicationForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Extracting only the file name from the dropped files
      const fileName = acceptedFiles.length > 0 ? acceptedFiles[0].name : "";
      // Setting the value using setValue
      setValue("attachment", fileName);
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h5" align="center" gutterBottom>
          Başvuru Formu
        </Typography>

        <TextField
          label="Ad"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
        />

        <TextField
          label="Soyad"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("surname")}
          error={!!errors.surname}
          helperText={errors.surname && errors.surname.message}
        />

        <TextField
          label="Yaş"
          variant="outlined"
          fullWidth
          margin="normal"
          type="number"
          {...register("age")}
          error={!!errors.age}
          helperText={errors.age && errors.age.message}
        />

        <TextField
          label="TC No"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("tcNo")}
          error={!!errors.tcNo}
          helperText={errors.tcNo && errors.tcNo.message}
        />

        <TextField
          label="Başvuru Nedeni"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("reasonForApplication")}
          error={!!errors.reasonForApplication}
          helperText={
            errors.reasonForApplication && errors.reasonForApplication.message
          }
        />

        <TextField
          label="Adres Bilgisi"
          variant="outlined"
          fullWidth
          margin="normal"
          {...register("adress")}
          error={!!errors.adress}
          helperText={errors.adress && errors.adress.message}
        />

        <div
          {...getRootProps()}
          style={{
            marginTop: "16px",
            padding: "16px",
            border: "1px dashed #ccc",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <input {...getInputProps()} />
          <Typography align="center" variant="body1">
            Fotografları/Ekleri sürükleyip bırakın veya tıklayarak dosya seçin.
          </Typography>
        </div>
        {acceptedFiles.length > 0 && (
          <Typography align="center" variant="body1">
            Seçilen Dosya: {acceptedFiles[0].name}
          </Typography>
        )}

        {errors.attachment && (
          <p style={{ color: "red" }}>{errors.attachment.message}</p>
        )}

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
  );
};

export default ApplicationForm;
