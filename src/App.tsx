import './App.css'
import { useHooks } from './App.hooks'
import { LoginButton } from './components/LoginButton'
import { Avatar } from './components/Avatar'
import { LogoutButton } from './components/LogoutButton'

function App() {
  const { auth, organizations } = useHooks();

  return (
    <>
      <h2>Sign in</h2>
      <p style={{ width: '70%', margin: 'auto', textAlign: 'left' }}>
        サインイン先 Organization が不明な画面からサインインする場合は、Auth0 でサインイン後、
        プロンプトで Organization を選ぶことになる。
        ただし、選択される Organization が事前にわからないので、`redirect_uri` としてリダイレクト先をサブドメイン付き URL にすることができない。
        <br />
        （追記）今回はこのケースは存在しないのでこれ以上は考慮しない。
      </p>
      <LoginButton disabled={auth.isAuthenticated} />

      <hr />

      <h2>Sign in(Organization specified)</h2>
      <p style={{ width: '70%', margin: 'auto', textAlign: 'left' }}>
        `authorizationParams.redirect_uri` の指定を `Auth0Provider` から `loginWithRedirect()` に移し、
        動的にリダイレクト先を変えられるようにした例。<br />
        つまり、リダイレクト先がアプリケーション全体で固定だったのが、Organization ごとに動的に変わるようになる。
      </p>
      {organizations.map(organization => <LoginButton disabled={auth.isAuthenticated} organization={organization}>Sign in to company {organization.name} (ID: {organization.id})</LoginButton>)}

      <hr />

      {auth.isAuthenticated && (
        <div style={{ backgroundColor: 'lightgray' }}>
          <Avatar user={auth.user} />
          <LogoutButton />
        </div>
      )}
    </>
  )
}

export default App