import { ReactNode } from "react"

export type DetetiveLayoutProps = { children: ReactNode }

export default function DetetiveLayout({ children }: DetetiveLayoutProps) {
  return (
    <div className="container m-3 flex flex-col items-center">
      <h1>Detetive</h1>
      {children}
    </div>
  )
}