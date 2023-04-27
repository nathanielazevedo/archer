import { Authenticator } from "@aws-amplify/ui-react";
import Main from "./Main";
import SignInHeader from "./marketing/SignInHeader";

const components = {
  Header: SignInHeader,
};

const Home = () => {
  return (
    <Authenticator components={components}>
      {({ signOut, user }: any) => <Main signOut={signOut} user={user} />}
    </Authenticator>
  );
};

export default Home;
