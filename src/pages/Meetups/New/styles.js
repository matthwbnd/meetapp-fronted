import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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

export const Label = styled.label`
  width: 100%;
  border: 1px dashed grey;
  border-radius: 5px;
  display: block;
  padding: 30px 0;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
  margin-bottom: 25px;

  &:hover {
    border: 2px solid $input-file-hover-color;
  }
`;

export const Icon = styled.i`
  display: block;
  font-size: 24px;
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
