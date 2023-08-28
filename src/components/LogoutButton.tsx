import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return <button onClick={() => logout({ logoutParams: { returnTo: import.meta.env.VITE_AUTH0_LOGOUT_URL } })}>Log Out</button>;
};
