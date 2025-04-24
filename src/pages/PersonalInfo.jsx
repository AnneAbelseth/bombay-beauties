import { useBooking } from '../BookingContext';
import { useState } from 'react';
import FormField from '../components/FormField';

export default function PersonalInfo() {
  const { userInfo, setUserInfo } = useBooking();
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!userInfo.name) newErrors.name = "Name is required.";
    if (!userInfo.email || !/\S+@\S+\.\S+/.test(userInfo.email)) newErrors.email = "Valid email required.";
    if (!userInfo.phone || userInfo.phone.length < 8) newErrors.phone = "Phone must be at least 8 digits.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert("Form is valid! Proceeding to next step...");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Tell us who you are</h2>

      <FormField
        label="Full Name"
        id="name"
        value={userInfo.name}
        onChange={(val) => handleChange('name', val)}
        required
        error={errors.name}
      />
      <FormField
        label="Email"
        id="email"
        type="email"
        value={userInfo.email}
        onChange={(val) => handleChange('email', val)}
        required
        error={errors.email}
      />
      <FormField
        label="Phone Number"
        id="phone"
        type="tel"
        value={userInfo.phone}
        onChange={(val) => handleChange('phone', val)}
        required
        error={errors.phone}
      />
      <FormField
        label="Note / Allergies"
        id="note"
        value={userInfo.note}
        onChange={(val) => handleChange('note', val)}
      />

      <button type="submit">Next</button>
    </form>
  );
}
