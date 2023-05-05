import { useEffect, useState } from "react";

type FrameProps = {
    color?: string;
    children?: JSX.Element
}

export const Frame = (props: FrameProps) => {
    const [like, setLike] = useState(0);
    const [isIn, setIsIn] = useState(false);
    const {color = 'gray', children} = props;
    return <div onMouseLeave={() => setIsIn(false)} onMouseEnter={() => setIsIn(true)} style={{
        margin: '5px',
        padding: '3px',
        fontSize: '20px',
        backgroundColor: isIn ? 'red' : 'transparent',
        border: `1px solid ${color}`, 
        width: '300px', 
        height: '300px'}}>
        {children}
        
        <span>{like}</span>
    </div>
}