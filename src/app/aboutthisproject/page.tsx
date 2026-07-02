"use client";

import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Button
        component={Link}
        href="/"
        variant="contained"
        sx={{ mb: 3 }}
      >
        ← Back to Home
      </Button>

      <Card elevation={5}>
        <CardContent>

          <Typography
            variant="h3"
            align="center"
            gutterBottom
          >
            About This Project
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h5" gutterBottom>
            Pokemon App
          </Typography>

          <Typography>
            เว็บไซต์นี้พัฒนาขึ้นเพื่อแสดงข้อมูล Pokémon
            โดยดึงข้อมูลจาก PokeAPI พร้อมแสดงรายละเอียดของโปเกมอน
            ได้แก่ ชื่อ รูปภาพ ประเภท ค่าสถานะ เสียง และวิวัฒนาการ
          </Typography>

          <Box sx={{ mt: 4 }}>

            <Typography variant="h6">
              Developer
            </Typography>

            <Typography>
              ชื่อ : นายณัฐภูมิ แสนศิริโภค
            </Typography>

            <Typography>
              รหัสนักศึกษา : 673450189-9
            </Typography>

          </Box>

          <Box sx={{ mt: 3 }}>

            <Typography variant="h6">
              Course
            </Typography>

            <Typography>
              รายวิชา : Front-end Web Programming
            </Typography>

            <Typography>
              หลักสูตร : วิทยาการคอมพิวเตอร์
            </Typography>

            <Typography>
              มหาวิทยาลัย : มหาวิทยาลัยขอนแก่นวิทยาเขตหนองคาย
            </Typography>

          </Box>

          <Box sx={{ mt: 3 }}>

            <Typography variant="h6">
              Technology
            </Typography>

            <Typography>
              • Next.js
            </Typography>

            <Typography>
              • React
            </Typography>

            <Typography>
              • Material UI (MUI)
            </Typography>

            <Typography>
              • PokeAPI
            </Typography>

          </Box>

          <Box sx={{ mt: 3 }}>

            <Typography variant="h6">
              GitHub Source Code
            </Typography>

            <Typography>
              <a
                href="https://github.com/Nattaphoom-Saensiriphokh?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Nattaphoom-Saensiriphokh?tab=repositories
              </a>
            </Typography>

          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}