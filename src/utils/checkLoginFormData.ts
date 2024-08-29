import toast from "react-hot-toast";

export const checkLoginFormData = (data: {
  [k: string]: FormDataEntryValue;
}) => {
    if(data?.email === "" || data?.password === "") {
        toast.error("Please fill in all fields");
        return false;
    }
    return true;
};
