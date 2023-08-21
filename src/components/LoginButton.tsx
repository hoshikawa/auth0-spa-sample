import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  organization?: {
    id: string;
    name: string;
  };
  disabled?: boolean;
}

export const LoginButton = ({ children, organization, disabled }: Props) => {
  const { loginWithRedirect } = useAuth0();
  const redirectUri = organization ?
    import.meta.env.VITE_AUTH0_REDIRECT_URL.replace('{organization_name}', organization?.name) :
    import.meta.env.VITE_AUTH0_BASE_URL;

  return (
    <button disabled={disabled} onClick={() => loginWithRedirect({ authorizationParams: { organization: organization?.id, redirect_uri: redirectUri } })}>
      {children ?? 'Sign In'}
    </button>
  );
};
