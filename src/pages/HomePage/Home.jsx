import TypeIt from 'typeit-react';
import { Box } from '@chakra-ui/react';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';
const Home = () => {
  return (
    <Box
      maxW="800px"
      width="100%"
      mx={['auto', 'auto', 0]}
      mt="20px"
      fontSize="45px"
      fontWeight="600"
      letterSpacing=".2 rem"
      lineHeight="2"
      fontFamily="Source Code Pro Variable"
      color="teal"
    >
      <TypeIt
        options={{ loop: true }}
        getBeforeInit={instance => {
          instance
            .pause(1500)
            .type('Welcome to PhoneBook App!')
            .pause(750)
            .type('!!')
            .pause(300)
            .type(
              ' I know, you are tired of all those boring phonebooks, but this one is different!'
            )
            .pause(500)
            .delete(1)
            .pause(200)
            .type('..!')
            .pause(300)
            .type(' Don`t wait! Let`s try this piece of she*')
            .pause(300)
            .delete(4)
            .type('masterpiece!')
            .pause(300)
            .type('!!! ')
            .pause(2000);

          return instance;
        }}
      />
    </Box>
  );
};

export default Home;
