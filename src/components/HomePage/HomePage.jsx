import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "../MainContent/MainContent";
function HomePage({ children }) {
  return (
    <Grid
      templateAreas={`"main"
                        "footer"`}
      gridTemplateRows="1fr auto"
      minH="calc(100vh - 90px)"
    >
      <GridItem area="main" p={0} bg={"blue"}>
        {children}
        <MainContent />
      </GridItem>
      <GridItem area="footer" bg={"red"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default HomePage;
