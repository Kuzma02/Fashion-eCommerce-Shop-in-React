import { redirect } from "react-router-dom";

interface SearchActionRequest {
  request: {
    formData: () => Promise<FormData>;
  };
}

export const searchAction = async ({ request }: SearchActionRequest) => {
  // getting form data
  const formData = await request.formData();
  // converting form data to object for easy access
  const data = Object.fromEntries(formData);

  return redirect(`/search?query=${data?.searchInput || ""}`);
};
