import React from "react";
import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaAward, FaUserTie } from "react-icons/fa";

// Custom theme to add some glamorous styling
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "gold",
      },
    },
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl">
        <VStack spacing={8} py={10}>
          <Heading as="h1" size="2xl" textAlign="center">
            GPT Awards Gala
          </Heading>
          <Text fontSize="xl" textAlign="center">
            Celebrating the achievements of GPTs in style!
          </Text>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1642764984340-bc9932ec5a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZWQlMjBjYXJwZXQlMjBldmVudHxlbnwwfHx8fDE3MTM0NTYzMzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Red Carpet" />
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <GridItem key={index} w="100%" h="300px" bg="purple.800" boxShadow="xl">
                <VStack>
                  <FaAward size="3em" color="gold" />
                  <Heading size="md">Award {index + 1}</Heading>
                  <Text>Outstanding Performance in AI</Text>
                  <FaUserTie size="2em" />
                  <Text>Nominee: GPT-{index + 1}</Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
