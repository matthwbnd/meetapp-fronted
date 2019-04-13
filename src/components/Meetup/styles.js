import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background: #fff;
  border-radius: 5px;
  width: 290px;
  height: 180px;
  max-width: 100%;
  margin: 10px 15px;
`;

export const MeetupImage = styled.div`
  width: 100%;
  height: 130px;
  background: center no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

export const MeetupInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const MeetupInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 10px;
`;

export const MeetupTitle = styled.span`
  color: #222;
  font-size: 16px;
  font-weight: bold;
`;

export const MeetupSubs = styled.small`
  color: #999;
  font-size: 14px;
`;

export const Go = styled(Link)`
  text-decoration: none;
  background: #e5556e;
  color: #fff;
  padding: 10px 14px;
  border-radius: 50%;
`;
