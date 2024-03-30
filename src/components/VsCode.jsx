
import React, { useState, useRef } from 'react';
import { CloseButton } from '@mantine/core';
import { IconArrowAutofitDown, IconArrowAutofitHeight, IconArrowMoveDown, IconArrowMoveUp, IconUnderline } from '@tabler/icons-react';
function VsCode(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [isMax, setIsMax] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const divRef = useRef(null);
  const handleMouseDown = (event) => {
    setIsDragging(true);
    const divRect = event.target.getBoundingClientRect();
    setOffsetX(event.clientX - divRect.left);
    setOffsetY(event.clientY - divRect.top);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const { clientX, clientY } = event;
      const newLeft = clientX - offsetX;
      const newTop = clientY - offsetY;

      // Constrain movement to prevent the div from going off-screen (optional)
      const container = divRef.current.parentNode;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const divWidth = divRef.current.offsetWidth;
      const divHeight = divRef.current.offsetHeight;

      const left = Math.min(Math.max(0, newLeft), containerWidth - divWidth);
      const top = Math.min(Math.max(0, newTop), containerHeight - divHeight);

      divRef.current.style.left = `${left}px`;
      divRef.current.style.top = `${top}px`;
    }
  };


  return (
    <div
      key={props.index}

      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseOutCapture={handleMouseUp}
      onClick={() => {
        props.handleSetItemProp(props.index,"zIndex",3)
    
    }}
      style={{
        zIndex:props.value[props.index].zIndex,
        position: 'absolute',
        cursor: 'grab', // Change cursor on hover
        width: '802px',
        height: '771px',
        backgroundColor: 'black',
        border: '1px solid black',
       ...(!(props.value[props.index].isShow || props.value[props.index].isMin)?
       { display: 'flex',
        flexDirection: 'column',}:
        { display: 'none',}
        )

      }}
    >
     <div style={{

            display: 'flex',
            justifyContent: "flex-end",

          }} >
<CloseButton
      icon={<IconArrowMoveDown/>}
        onClick={() => {
          props.handleSetItemProp(props.index,"isMin",true)
      
      }}
       bg="black" />
      <CloseButton
      icon={<IconArrowMoveUp/>}
        onClick={() => {
          if(isMax){
            divRef.current.style.left='50px';
            divRef.current.style.top='50px';
            divRef.current.style.width = '802px';
            divRef.current.style.height = '771px';
            setIsMax(false)
          }else{
            const container = divRef.current.parentNode;
            divRef.current.style.left=0;
            divRef.current.style.top=0;
            divRef.current.style.width = `${container.clientWidth}px`;
            divRef.current.style.height = `${container.clientHeight}px`;
            setIsMax(true)
          }
      }}
      bg="black"  />


            <CloseButton
        onClick={() => {
          props.handleSetItemProp(props.index,"isShow",true)
  
      }} radius={0} bg="red" />
     </div>
        
      <iframe style={{flexGrow: 8}} src="https://github1s.com/vivek9patel/vivek9patel.github.io/blob/HEAD/components/ubuntu.js"></iframe>
    </div>
  );
}

export default VsCode;
