import "./style.scss"
import {useEffect, useMemo, useState} from "react";
import {Input} from "antd";
const Container = ()=>{
    const [location, setLocation] = useState(235)
    const [locate, setLocate] = useState(9)
    const [intervalTime, setIntervalTime] = useState(1)

    useEffect(()=>{
        const interval = setInterval(()=>{
            const random = Math.floor(Math.random() * 2)
            if(random === 0){
                //category = 26
                let locate = Math.floor(Math.random() * 15 - 5)
                while(locate % 2 === 0){
                    locate = Math.floor(Math.random() * 15 - 5)
                }
                setLocate(locate)
                setLocation(26 * locate + 1)
                return
            }
            //category = 52
            const locate = Math.floor(Math.random() * 7 - 2)
            setLocation(52 * locate + 2)
            setLocate(locate)
        },intervalTime * 1000)
        return ()=> clearInterval(interval)
    },[intervalTime])

    const changeInterval = (e)=>{
       const value = Number(e.target.value)
        if(value < 1 || value > 5){
            return
        }
        setIntervalTime(value)
    }

    return (
        <div>
            <Input type="number" rootClassName="input" maxLength={1} onChange={changeInterval}/>
            <div className="container">
                <div style={{top : "-154px", display : locate < -3 ? "block" : "none"}}  className="line-outside"></div>
                <div style={{top : "-102px", display : locate < -1 ? "block" : "none"}} className="line-outside"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div style={{display : locate === 9 ? "block" : "none"}} className="line-outside"></div>
                <div className="node" style={{top : `${location}px`}}></div>
            </div>
        </div>
    )
}

export default Container;