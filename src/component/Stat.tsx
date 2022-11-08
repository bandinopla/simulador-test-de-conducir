import { PropsWithChildren } from "react"

export const Stat: React.FC<PropsWithChildren<{ label: string }>> = ({ label, children }) => {
    return <div style={{ margin: 55 }}>
        <div>{label}</div>
        <div style={{ fontSize: "3em" }}>{children}</div>
    </div>
}