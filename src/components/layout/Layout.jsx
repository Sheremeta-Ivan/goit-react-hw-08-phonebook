import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/navigation/Navigation';
import { Box, Divider, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Layout = () => {
  return (
    <Box maxWidth="1200px" width="100%" mx="auto" px="20px" height="100%">
      <Box py="20px">
        <Navigation />
      </Box>
      {/* content */}
      <Box
        as="main"
        maxWidth="1200px"
        minHeight="80vh"
        width="100%"
        mx="auto"
        px="20px"
        display="flex"
        gap="20px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Suspense fallback={null}>
          {}
          <Outlet />
        </Suspense>
      </Box>
      {/* footer */}
      <Box
        as="footer"
        maxWidth="1200px"
        width="100%"
        mx="auto"
        px="15px"
        height="60px"
        display="flex"
        gap="20px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Divider maxW="80%" />
        <Text color="teal" as="b">
          © 2023 |{` `}
          <Link
            color="teal"
            href="https://github.com/Sheremeta-Ivan"
            target="_blank"
            rel="noopener noreferrer"
            isExternal
          >
            Sheremeta Ivan
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Layout;
