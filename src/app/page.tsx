"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Card,
  CardContent,
  Avatar,
  Grid,
  CardActionArea,
  Button,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const limit = 20;

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
       setPokemonList((prev) => {
       const merged = [...prev, ...data.results];

      return merged.filter(
        (pokemon, index, self) =>
          index === self.findIndex((p) => p.name === pokemon.name)
    );
  });

  setLoading(false);
})
  }, [offset]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Pokemon App
      </Typography>

      <Grid container spacing={2}>
        {/* แสดง Pokemon */}
        {pokemonList.map((pokemon) => {
          const pokemonId = pokemon.url.split("/")[6];

          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pokemon.name}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea href={`/pokemon/${pokemon.name}`}>
                  <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                      alt={pokemon.name}
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                      }}
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                    />

                    <Typography
                      variant="h6"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}

        {/* Skeleton ตอนกำลังโหลด */}
        {loading &&
          [...Array(limit)].map((_, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`skeleton-${index}`}>
              <Card>
                <CardContent sx={{ textAlign: "center" }}>
                  <Skeleton
                    variant="circular"
                    width={80}
                    height={80}
                    sx={{ mx: "auto", mb: 2 }}
                  />

                  <Skeleton width="80%" sx={{ mx: "auto" }} />
                  <Skeleton width="60%" sx={{ mx: "auto" }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Button
  component={Link}
  href="/aboutthisproject"
  variant="outlined"
  sx={{ mb: 3 }}
>
  About This Project
</Button>

      {/* ปุ่มโหลดเพิ่ม */}
      {pokemonList.length < 1351 && (
        <Button
          variant="contained"
          sx={{
            mt: 4,
            display: "block",
            mx: "auto",
          }}
          onClick={() => setOffset((prev) => prev + limit)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </Container>
  );
}