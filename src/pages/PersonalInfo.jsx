import { useBooking } from '../BookingContext';
import { useState } from 'react';
import FormField from '../components/FormField';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {
  const { userInfo, setUserInfo } = useBooking();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
      navigate('/confirm');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <header>
        <h2 id="personal-info-heading">Tell us who you are</h2>
      </header>

      <form onSubmit={handleSubmit} noValidate aria-labelledby="personal-info-heading">
        <div style={{ textAlign: 'left' }}>
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
        </div>

        <button style={{ marginTop: '1.5rem' }}>Next</button>
      </form>
    </div>
  );
}
