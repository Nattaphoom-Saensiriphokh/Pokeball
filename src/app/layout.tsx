import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon App",
  description: "Pokemon Web Application using PokeAPI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, fontWeight: "bold" }}
            >
              Pokemon App
            </Typography>

 <Link href="/" style={{ textDecoration: "none" }}>
  <Button color="inherit">
    Home
  </Button>
</Link>

<Link
  href="/aboutthisproject"
  style={{ textDecoration: "none" }}
>
  <Button color="inherit">
    About
  </Button>
</Link>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {children}
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 6,
            py: 3,
            textAlign: "center",
            bgcolor: "#f5f5f5",
          }}
        >
          <Typography variant="body2">
            Pokemon App © 2026
          </Typography>

          <Typography variant="body2">
            Developed by นายณัฐภูมิ แสนศิริโภค
          </Typography>

          <Typography variant="body2">
            Front-end Web Programming
          </Typography>

          <Typography variant="body2">
            Khon Kaen University, Nong Khai Campus
          </Typography>
        </Box>
      </body>
    </html>
  );
}