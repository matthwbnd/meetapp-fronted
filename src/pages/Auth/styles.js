import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  margin-bottom: 25px;
`;

export const Form = styled.form`
  width: 330px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  color: #fff;
  border: 0;
  font-size: 20px;
  margin-bottom: 35px;
`;

export const Button = styled.button`
  width: 100%;
  background: #e5556e;
  color: #fff;
  border: 0;
  border-radius: 25px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #999;
  font-size: 16px;
  margin-top: 10px;
`;
