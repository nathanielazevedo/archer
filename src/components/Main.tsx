import Fields from "./Fields";
import NavBar from "./Navbar";
import { Box } from "@mui/material";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { createContext, useState } from "react";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<any>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Main = ({ user, signOut }: { user: any; signOut: any }) => {
  const [userState, setUserState] = useState(user);

  return (
    <AuthContext.Provider value={{ userState, setUserState, signOut }}>
      <NavBar />
      <Box sx={styles.container}>
        <Fields />
      </Box>
    </AuthContext.Provider>
  );
};

export default Main;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5rem",
  },
};
