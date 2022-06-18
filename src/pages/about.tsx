import * as React from 'react';
import {
  Text,
} from '@chakra-ui/react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
// import Header from '../components/header';

/* eslint-disable react/jsx-no-constructed-context-values */
function About() {
  return (
    <>
      <Text>
        [In the works... more info coming soon!]
      </Text>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="0xMouseLessDev"
        options={{ width: '400' }}
      />
    </>
  );
}

export default About;
