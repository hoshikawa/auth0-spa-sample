import { User } from "@auth0/auth0-react"

type Props = {
  user?: User;
}

export const Avatar = ({ user }: Props) => (Object.entries(user ?? {}).map(e => <p key={e[0]}>{`${e[0]}: ${e[1]}`}</p>));