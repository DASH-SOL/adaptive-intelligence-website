import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import Grid from '@mui/material/Grid';
import { 
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Checkbox,
  FormGroup,
  FormHelperText,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const WhiteTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.7)',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
  },
  '& .MuiFormHelperText-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

const WhiteFormControl = styled(FormControl)({
  '& .MuiFormLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiCheckbox-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiCheckbox-root.Mui-checked': {
    color: 'white',
  },
  '& .MuiRadio-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& .MuiRadio-root.Mui-checked': {
    color: 'white',
  },
  '& .MuiFormControlLabel-label': {
    color: 'white',
  },
  '& .MuiFormHelperText-root': {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  '& small': {
    color: 'rgba(255, 255, 255, 0.7) !important',
  },
});

const ContactForm4 = () => {
  const serviceOptions = [
    {
      id: "marketing_consulting",
      label: "Marketing Consulting",
      description: "Strategic marketing advisory and planning services"
    },
    {
      id: "brand_strategy",
      label: "Brand Strategy",
      description: "Strategic brand advisory and planning services"
    },
    {
      id: "email_marketing",
      label: "Email Marketing",
      description: "Strategic email marketing advisory and planning services"
    },
    {
      id: "social_media_marketing",
      label: "Social Media Marketing",
      description: "Strategic social media marketing advisory and planning services"
    },
    {
      id: "content_creation",
      label: "Content Creation",
      description: "Strategic content creation advisory and planning services"
    },
    {
      id: "pay_per_click_advertising",
      label: "Pay Per Click Advertising (PPC)",
      description: "Strategic pay per click advertising advisory and planning services"
    },
    {
      id: "search_engine_optimization",
      label: "Search Engine Optimization (SEO)",
      description: "Strategic search engine optimization advisory and planning services"
    }
  ];

  const leadSourceOptions = [
    {
      id: "website",
      label: "Website",
      description: "From our website"
    },
    {
      id: "clutch ",
      label: "Clutch",
      description: "From Clutch"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "From LinkedIn"
    },
    {
      id: "google",
      label: "Google",
      description: "From Google"
    },
    {
      id: "referral",
      label: "Referral",
      description: "From a referral"
    },
    {
      id: "instagram",
      label: "Instagram",
      description: "From Instagram"
    },
    {
      id: "other",
      label: "Other",
      description: "From another source"
    },
    
  ];

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    email_optin: "no",
    services_needed: [],
    lead_source: [],
  };

  const contactSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone Number is required"),
    company_name: yup.string().required("Company Name is required"),
    email_optin: yup.string().required("Email Optin is required"),
    services_needed: yup.array().min(1, "Please select at least one service"),
    lead_source: yup.array().min(1, "Please select at least one lead source"),
  });

  const methods = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const testFunction = async () => {
    const response = await window.ApolloMeetings.submit({
      email: "test@test.com",
      full_name: "Test User",
      phone_number: "1234567890",
      company_name: "Test Company",
      consent_approval: "yes",
      services_needed: ["marketing_consulting"],
      lead_source: ["other"],
    });
    console.log(response);
  }
  
  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Open Apollo Meetings widget with form data
      if (typeof window !== 'undefined' && window.ApolloMeetings) {
        window.ApolloMeetings.submit({
          email: data.email,
          full_name: `${data.first_name} ${data.last_name}`,
          phone_number: data.phone,
          company_name: data.company_name,
          consent_approval: data.email_optin,
          services_needed: data.services_needed,
          lead_source: data.lead_source,
        });
      }
    } catch (error) {
      console.error("Error opening Apollo Meetings widget:", error);
    } finally {
      // Reset form fields after submission
      methods.reset();
    }
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <WhiteTextField
            fullWidth
            label="First Name"
            variant="outlined"
            {...register("first_name")}
            error={!!methods.formState.errors.first_name}
            helperText={methods.formState.errors.first_name?.message}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteTextField
            fullWidth
            label="Last Name"
            variant="outlined"
            {...register("last_name")}
            error={!!methods.formState.errors.last_name}
            helperText={methods.formState.errors.last_name?.message}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteTextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            {...register("email")}
            error={!!methods.formState.errors.email}
            helperText={methods.formState.errors.email?.message}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteTextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            {...register("phone")}
            error={!!methods.formState.errors.phone}
            helperText={methods.formState.errors.phone?.message}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteTextField
            fullWidth
            label="Company Name"
            variant="outlined"
            {...register("company_name")}
            error={!!methods.formState.errors.company_name}
            helperText={methods.formState.errors.company_name?.message}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>

        </Grid>
        <Grid item xs={12} md={6}>
          <WhiteFormControl component="fieldset" error={!!methods.formState.errors.services_needed}>
            <FormLabel component="legend">Services Needed*</FormLabel>
            <FormGroup>
              {serviceOptions.map((service) => (
                <FormControlLabel
                  key={service.id}
                  control={
                    <Checkbox
                      {...register("services_needed")}
                      value={service.id}
                    />
                  }
                  label={
                    <div>
                      {service.label}
                      <small style={{ display: 'block', color: 'text.secondary' }}>{service.description}</small>
                    </div>
                  }
                />
              ))}
            </FormGroup>
            {methods.formState.errors.services_needed && (
              <FormHelperText>{methods.formState.errors.services_needed.message}</FormHelperText>
            )}
          </WhiteFormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <WhiteFormControl component="fieldset" error={!!methods.formState.errors.lead_source}>
            <FormLabel component="legend">Lead Source*</FormLabel>
            <FormGroup>
              {leadSourceOptions.map((leadSource) => (
                <FormControlLabel
                  key={leadSource.id}
                  control={
                    <Checkbox
                      {...register("lead_source")}
                      value={leadSource.id}
                    />
                  }
                  label={
                    <div>
                      {leadSource.label}
                      <small style={{ display: 'block', color: 'text.secondary' }}>{leadSource.description}</small>
                    </div>
                  }
                />
              ))}
            </FormGroup>
            {methods.formState.errors.lead_source && (
              <FormHelperText>{methods.formState.errors.lead_source.message}</FormHelperText>
            )}
          </WhiteFormControl>
        </Grid>

        <Grid item xs={12}>
          <WhiteFormControl component="fieldset" error={!!methods.formState.errors.email_optin}>
            <FormLabel component="legend">I agree to receive other communications from Adaptive Intelligence International.*</FormLabel>
            <RadioGroup row {...register("email_optin")}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            {methods.formState.errors.email_optin && (
              <FormHelperText>{methods.formState.errors.email_optin.message}</FormHelperText>
            )}
          </WhiteFormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <Button 
            className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase" 
            type="submit"
            disabled={isSubmitting}
            aria-label="Send Message"
          >
            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default ContactForm4;
