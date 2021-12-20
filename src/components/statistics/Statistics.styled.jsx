import s from '@emotion/styled';

export const Container = s.section`
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
  `;
  
  export const Title = s.h2`
  padding: 20px;
  text-align: center;
  `;
  
  export const List = s.ul`
  background-color: #F3F6F9;
  display: flex; 
  // justify-content: space-between;
  overflow: hidden;
`;
  
export const Item = s.li`
width: 100%;
padding: 15px;
text-align: center;
border-top: 1px solid #A1D3FF;
&:not(:last-child){
border-right: 1px solid #A1D3FF;
}
`;

export const Label = s.span`
font-size: 12px;
display: block;
`

