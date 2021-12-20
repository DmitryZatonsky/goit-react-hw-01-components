import s from '@emotion/styled';

export const List = s.ul`

  `;

export const Item = s.li`
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;

  &:not(:last-child){
    margin-bottom: 5px;
  }
  `;
  
  export const Card = s.div`
  display: flex;
  align-items: center;
  `;

const setBgColor = Stat => {
  return (Stat.Stat ? `#48AC4A` : `#FD5157`);
}

export const Status = s.span`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${setBgColor};
  `;

export const Img = s.img`
  width: 60px;
  border-radius: 5px;
  margin-right: 10px;
  `;


export const FriendName = s.p`
  font-weight: bold;
  font-size: 24px;
  color: #808F9D;

  `;
