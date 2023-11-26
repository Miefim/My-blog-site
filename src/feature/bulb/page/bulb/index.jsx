import { memo, useCallback, useState } from "react";
import Bulb from "../../component/bulb";
import styled from "styled-components";
import SecondaryLayout from "../../../../components/layout/SecondaryLayout";

const BulbPage = () => {
  const [isOn, setIsOn] = useState(false);
  const [positionStart, setPositionStart] = useState(null);
  const [dx, setDx] = useState(null);
  const [dy, setDy] = useState(null);
  const [isMove, setIsMove] = useState(false);
  const callbacks = {
    onChangeBulb: useCallback(() => {
      setIsOn(!isOn);
    }, [isOn]),
    onDown: useCallback((e) => {
      e.type === "mousedown" && e.preventDefault();
      const x = e.type === "mousedown" ? e.pageX : e.touches[0]?.pageX;
      const y = e.type === "mousedown" ? e.pageY : e.touches[0]?.pageY;
      setIsMove(true);
      setPositionStart({
        x,
        y,
      });
    }, []),
    onMove: useCallback((e) => {
      e.type === "touchmove" && positionStart && (document.querySelector('body').style.overflow = "hidden")
      const x = e.type === "mousemove" ? e.pageX : e.touches[0]?.pageX;
      const y = e.type === "mousemove" ? e.pageY : e.touches[0]?.pageY;
      if (isMove) {
        if ((positionStart.y - y) > 0) {
          setDx(0);
          setDy(0);
        } else if ((positionStart.y - y) > -50) {
          setDx(positionStart.x - x);
          setDy(positionStart.y - y);
        } else if ((positionStart.y - y) < -50) {
          setDx(-50);
          setDy(-50);
        }
      };
    }, [isMove, positionStart]),
    onUp: useCallback((e) => {
      e.type === "touchend" && (document.querySelector('body').style.overflow = "auto")
      if (Math.abs(dy) > 10) callbacks.onChangeBulb();
      setDx(null);
      setDy(null);
      setPositionStart(null);
      setIsMove(false);
    }, [isOn, dy]),
  };
  return (
    <SecondaryLayout>
      <BulbContainer
        $isOn={String(isOn)}
        onMouseMove={callbacks.onMove}
        onTouchMove={callbacks.onMove}
        onMouseUp={callbacks.onUp}
        onTouchEnd={callbacks.onUp}
        onMouseLeave={callbacks.onUp}
      >
        <StyledBulb
          dx={dx}
          dy={dy}
          isOn={isOn}
          onSwitch={callbacks.onChangeBulb}
          onDown={callbacks.onDown}
        />
      </BulbContainer>  
    </SecondaryLayout>
  );
}

export default memo(BulbPage);

const BulbContainer = styled('div')`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #29343e;
  display: flex;
  justify-content: center;
  ${({ $isOn }) => $isOn === 'true' && `background-color: #f3d9a9`};
`;

const StyledBulb = styled(Bulb)`
  margin-top: 100px;
`;
