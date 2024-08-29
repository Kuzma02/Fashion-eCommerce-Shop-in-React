import toast from "react-hot-toast";

export const checkRegisterFormData = (data: {
  [k: string]: FormDataEntryValue;
}): boolean => {
  if (data?.name === "") {
    toast.error("Please enter your name");
    return false;
  } else if (data?.lastname === "") {
    toast.error("Please enter your lastname");
    return false;
  } else if (data?.email === "") {
    toast.error("Please enter your email");
    return false;
  } else if (data?.password === "") {
    toast.error("Please enter your password");
    return false;
  } else if (data?.password !== data?.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }
  return true;
};
