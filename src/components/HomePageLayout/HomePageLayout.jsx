function HomePageLayout({
  children,
  headerBg = "teal.500",
  footerBg = "gray.800",
}) {
  return (
    <Grid
      templateAreas={`"header"
                        "main"
                        "footer"`}
      gridTemplateRows="auto 1fr auto"
      minH="100vh"
      gap={4}
    >
      <GridItem area="header" bg={headerBg} p={4} color="white">
        Header
      </GridItem>
      <GridItem area="main" p={4}>
        {children}
      </GridItem>
      <GridItem area="footer" bg={footerBg} p={4} color="white">
        Footer
      </GridItem>
    </Grid>
  );
}
