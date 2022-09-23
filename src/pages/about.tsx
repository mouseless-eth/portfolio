import * as React from 'react';
import {
  Text,
  Center
} from '@chakra-ui/react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { twitterHandle } from '../configs/site-config';
import Section from '../components/section';
// import Header from '../components/header';

/* eslint-disable react/jsx-no-constructed-context-values */
function About() {
  return (
    <Section full={false}>
      <Text>
        [In the works... more info coming soon!]
      </Text>
      <Center>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={twitterHandle}
          options={{ width: '400' }}
        />
      </Center>
    </Section>
  );
}

export default About;
