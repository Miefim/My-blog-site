import { memo } from "react";
import styled from "styled-components";

const Bulb = (props) => {
   return (
      <Wrapper className={props.className} $isOn={String(props.isOn)}>
         <Electrode $isOn={String(props.isOn)} />
         <Electrode $isOn={String(props.isOn)} $right="true" />
         <Plinth $isOn={String(props.isOn)} />
         <Rope
            $isOn={String(props.isOn)}
            onMouseDown={props.onDown}
            onTouchStart={props.onDown}
            $dx={props.dx}
            $dy={props.dy}
         />
      </Wrapper>
   );
}
 
export default memo(Bulb);

const Wrapper = styled('div')`
   width: 100px;
   height: 100px;
   border: 5px solid #7c808c;
   border-radius: 50%;
   position: relative;
   background-color: #354751;
   ${({ $isOn }) => $isOn === 'true' && `border: 5px solid #000000;`};

   &:before {
      content: '';
      position: absolute;
      width: 29px;
      height: 30px;
      top: 8px;
      left: 10px;
      border-top: 10px solid #7c808c;
      border-left: 10px solid #7c808c;
      border-radius: 100px 0 0 0;
      ${({ $isOn }) => $isOn === 'true' && `
         border-top: 10px solid #7c808c10;
         border-left: 10px solid #7c808c10;
      `};
   }

   ${({ $isOn }) => $isOn === 'true' && `background-color: #e6eba6`};
`;

const Plinth = styled('div')`
   width: 40px;
   height: 50px;
   position: absolute;
   top: 100px;
   left: 30px;
   border-left: 2px solid #878b8d;
   border-right: 2px solid #878b8d;
   border-bottom: 2px solid #878b8d;
   background-color: #282828;
   z-index: 2;
   border-radius: 0 0 50px 50px;
   ${({ $isOn }) => $isOn === 'true' && `
      background-color: #b3b4ba;
      border-left: 2px solid #000000;
      border-right: 2px solid #000000;
      border-bottom: 2px solid #000000;
   `};

   &:before {
      content: '';
      position: absolute;
      width: 40px;
      height: 10px;
      border: 2px solid #878b8d;
      border-radius: 50%;
      top: -8px;
      left: -2px;
      background-color: #707477;
      ${({ $isOn }) => $isOn === 'true' && `
         background-color: #c7d5b0;
         border-bottom: 2px solid #000000;
         border-left: 2px solid #000000;
         border-right: 2px solid #000000;
         border-top: 2px solid #404b2d;
      `}
   }

   &:after {
      content: '';
      position: absolute;
      width: 10px;
      height: 90%;
      top: 0px;
      left: 2px;
      clip-path: polygon(0% 10%, 100% 15%, 100% 105%, 0% 80%);
      background-color: #dcdcdf;
      ${({ $isOn }) => $isOn === 'true' && `background-color: #dcdcdf50`};
   }
`;

const Electrode = styled('div')`
   width: 5px;
   height: 40px;
   background-color: #404f5a;
   position: absolute;
   bottom: 0;
   left: 35px;
   border-radius: 20px;
   z-index: 5;
   transform: rotate(340deg);
   ${({ $right }) => $right === 'true' && `
      left: 60px;
      transform: rotate(20deg);
   `}
   ${({ $isOn }) => $isOn === 'true' && `background-color: #ebf5c0`};
`;
const Rope = styled.div.attrs(({ $dy }) => ({
   style: {
      height: `calc(100px + ${-$dy}px)`
   }
}))`
   width: 2px;
   height: 100px;
   background-color: #8a919c;
   position: absolute;
   top: 150px;
   left: 50px;
   cursor: pointer;
   ${({ $isOn }) => $isOn === 'true' && `background-color: #000000`};

   &:before {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #8a919c;
      bottom: 0;
      left: -4px;
      ${({ $isOn }) => $isOn === 'true' && `background-color: #000000`};
   }
`;
