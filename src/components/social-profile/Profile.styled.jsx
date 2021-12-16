import s from '@emotion/styled';

export const Container = s.div`
background-color: #ffffff;
border-radius: 5px;
margin-bottom: 20px;
`;

export const Description = s.div`
  font-size: 18px;
  color: #808F9D;
  padding: 32px;
  text-align: center;
`;

export const Avatar = s.img`
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Username = s.p`
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  color: #000000;
`;

export const Tag = s.p`
  margin-bottom: 10px;
`;

export const List = s.ul`
  background-color: #F3F6F9;
  display: flex; 
  justify-content: space-between;
`;
  
export const Item = s.li`
  font-size: 18px;
  color: #808F9D;
  text-align: center;
  flex-basis: calc(100% / 3);
  padding: 10px;
`;
