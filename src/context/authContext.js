import React from "react";
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext(getAuth | null);
