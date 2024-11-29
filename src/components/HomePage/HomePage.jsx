import { Grid, GridItem } from "@chakra-ui/react";
import MainContent from "../MainContent/MainContent";
function HomePage({ children }) {
  return (
    <Grid
      // templateAreas={`"main"
      //                   "footer"`}
    >
      <GridItem area="main" p={0}>
        {children}
        <MainContent />
      </GridItem>
      {/* <GridItem area="footer" bg={"red"}>
        Footer
      </GridItem> */}
    </Grid>
  );
}

export default HomePage;
