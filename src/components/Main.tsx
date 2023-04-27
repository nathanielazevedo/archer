import Fields from "./Fields";
import { Box } from "@mui/material";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { createContext, useState } from "react";
import NavBar from "./Navbar";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<any>(null);

const Main = ({ user, signOut }: any) => {
  const [userState, setUserState] = useState(user);

  return (
    <AuthContext.Provider value={{ userState, setUserState, signOut }}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <Fields />
      </Box>
    </AuthContext.Provider>
  );
};

export default Main;
