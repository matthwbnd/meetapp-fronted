import React from 'react';

import Pic from '~/assets/images/meetup.jpg';

import {
  Container,
  MeetupImage,
  MeetupInfoContainer,
  MeetupInfo,
  MeetupTitle,
  MeetupSubs,
} from './styles';

const Meetup = () => (
  <Container>
    <div>
      <MeetupImage style={{ background: `url(${Pic})` }} />
    </div>
    <MeetupInfoContainer>
      <MeetupInfo>
        <MeetupTitle>Oi</MeetupTitle>
        <MeetupSubs>12</MeetupSubs>
      </MeetupInfo>
    </MeetupInfoContainer>
  </Container>
);

export default Meetup;
