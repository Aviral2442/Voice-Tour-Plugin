import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import Navbar from './(main)/navbar';
import { Footer } from "./(main)/footer";
import { Notifications } from "@mantine/notifications";
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoiceTour Navigator",
  description: "Generated by create next app",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({ children }) {
  const myStyles = {
    backgroundColor: ' black',
  }

  return (
    <html lang="en">

      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
        <GoogleOAuthProvider clientId="516047116356-fp52utk011pciu8evrc5g75ilg805aq7.apps.googleusercontent.com">
        <Notifications />
          <div style={myStyles}>
            {children}
          </div>
          </GoogleOAuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
