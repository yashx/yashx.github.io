import * as React from "react";
import { Container, Divider, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Social from "../components/Social";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Container h="100vh" maxW="container.sm">
        <VStack align="flex-start" justifyContent="center" height="100%">
          <Text fontSize="5xl">Hi 👋</Text>
          <Text fontSize="xl">
            I am still working on my website. For now you can know more about me
            or contact me on the links below.
          </Text>
          <Divider />
          <Social />
        </VStack>
      </Container>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
