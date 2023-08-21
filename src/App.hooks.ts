import { useAuth0 } from "@auth0/auth0-react";

export const useHooks = () => {
  const auth = useAuth0();

  const organizations = [
    {
      id: import.meta.env.VITE_AUTH0_ORG1_ID,
      name: import.meta.env.VITE_AUTH0_ORG1_NAME,
    },
    {
      id: import.meta.env.VITE_AUTH0_ORG2_ID,
      name: import.meta.env.VITE_AUTH0_ORG2_NAME,
    }
  ]

  return {
    auth,
    organizations,
  };
}