"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";

interface PokemonDetail {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  cries: {
    latest: string;
  };
  species: {
    url: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export default function PokemonDetailPage({
  params,
}: {
  params: Promise<{ pokemonname: string }>;
}) {
  const { pokemonname } = use(params);

  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [evolutions, setEvolutions] = useState<string[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        // รายละเอียด Pokemon
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonname}`
        );
        const data = await res.json();
        setPokemon(data);

        // Species
        const speciesRes = await fetch(data.species.url);
        const speciesData = await speciesRes.json();

        // Evolution Chain
        const evolutionRes = await fetch(
          speciesData.evolution_chain.url
        );
        const evolutionData = await evolutionRes.json();

        const evoList: string[] = [];

        let current = evolutionData.chain;

        while (current) {
          evoList.push(current.species.name);

          if (current.evolves_to.length > 0) {
            current = current.evolves_to[0];
          } else {
            current = null;
          }
        }

        setEvolutions(evoList);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon();
  }, [pokemonname]);

  if (!pokemon) {
    return (
      <Container sx={{ mt: 5 }}>
        <Skeleton
          variant="circular"
          width={180}
          height={180}
          sx={{ mx: "auto" }}
        />

        <Skeleton height={60} />

        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} height={30} />
        ))}
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Button
        component={Link}
        href="/"
        variant="contained"
        sx={{ mb: 3 }}
      >
        ← Back
      </Button>

      <Card>
        <CardContent>

          <Avatar
            src={pokemon.sprites.front_default}
            sx={{
              width: 180,
              height: 180,
              mx: "auto",
              mb: 2,
            }}
          />

          <Typography
            variant="h3"
            align="center"
            sx={{ textTransform: "capitalize" }}
          >
            {pokemon.name}
          </Typography>

          <Typography align="center">
            Height : {pokemon.height}
          </Typography>

          <Typography
           align="center"
           sx={{ mb: 2 }}
>
            Weight : {pokemon.weight}
          </Typography>
 
          <Typography variant="h6">
            Type
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              mb: 3,
            }}
          >
            {pokemon.types.map((type) => (
              <Chip
                key={type.type.name}
                label={type.type.name}
              />
            ))}
          </Box>

          <Typography variant="h6">
            Base Stats
          </Typography>

          {pokemon.stats.map((stat) => (
            <Box key={stat.stat.name} sx={{mb: 2}}>
              <Typography sx={{ textTransform: "capitalize" }}>
                {stat.stat.name} : {stat.base_stat}
              </Typography>

              <LinearProgress
                variant="determinate"
                value={Math.min(stat.base_stat, 100)}
              />
            </Box>
          ))}

          <Typography variant="h6" sx={{mt: 4}}>
            Pokemon Cry
          </Typography>

          <audio controls>
            <source src={pokemon.cries.latest} />
          </audio>

          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            Evolution Chain
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {evolutions.map((name) => (
              <Box
                key={name}
                sx={{
                  textAlign: "center",
                }}
              >
                <Avatar
                  src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
                  sx={{
                    width: 90,
                    height: 90,
                    mx: "auto",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  {name}
                </Typography>
              </Box>
            ))}
          </Box>

        </CardContent>
      </Card>
    </Container>
  );
}