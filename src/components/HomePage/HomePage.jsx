import { Grid, GridItem } from "@chakra-ui/react";
function HomePage({
  children,
}) {
  return (
    <Grid
      templateAreas={`"main"
                        "footer"`}
      gridTemplateRows="1fr auto"
      minH="calc(100vh - 90px)"
      gap={0}
    >
      <GridItem area="main" p={4} bg={'blue'}>
        {children}
      </GridItem>
      <GridItem area="footer" bg={'red'}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default HomePage;
