import React from "react";
import { VStack, Link, Text } from "@chakra-ui/react";

function Social() {
  return (
    <VStack align="flex-start">
      <SocialItem title="Linkedin" url="https://www.linkedin.com/in/yashx/" />
      <SocialItem title="Github" url="https://github.com/yashx" />
      <SocialItem title="Send Email" url="mailto:groyashx@gmail.com" />
    </VStack>
  );
}

function SocialItem({ title, url }) {
  return (
    <Link href={url} isExternal>
      <Text fontWeight="bold">{title}</Text>
    </Link>
  );
}

export default Social;
