import { ReactNode } from "react";
import s from '../../styles/wrapper.module.css'

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({children}: WrapperProps) {
    return <div className={s.wrapper}>{children}</div>;
};