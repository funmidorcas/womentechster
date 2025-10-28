// --- validation.js ---
// Load Yup from CDN
import * as yup from "https://cdn.jsdelivr.net/npm/yup@1.3.3/+esm";

// Define validation schema
const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

// Get form and fields
const form = document.getElementById("signupForm");
const fields = ["username", "email", "password", "confirmPassword"];

// Clear specific error message
function clearError(field) {
  document.getElementById(`${field}Error`).textContent = "";
}

// Show specific error message
function showError(field, message) {
  document.getElementById(`${field}Error`).textContent = message;
}

// ✅ Real-time validation on input
fields.forEach((field) => {
  const input = document.getElementById(field);
  input.addEventListener("input", async () => {
    const value = input.value.trim();
    try {
      await schema.validateAt(field, {
        [field]: value,
        password: document.getElementById("password").value,
      });
      clearError(field);
    } catch (err) {
      showError(field, err.message);
    }
  });
});

// ✅ On form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  // Clear all old errors
  fields.forEach(clearError);

  // Collect form data
  const formData = {};
  fields.forEach((f) => (formData[f] = document.getElementById(f).value.trim()));

  try {
    await schema.validate(formData, { abortEarly: false });
    alert("✅ Form submitted successfully!");
    form.reset();
  } catch (err) {
    if (err.inner) {
      err.inner.forEach((e) => {
        showError(e.path, e.message);
      });
    }
  }
});
