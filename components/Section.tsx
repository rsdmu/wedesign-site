import React from "react";
export default function Section({children, className}:{children:React.ReactNode; className?:string}){
  return <section className={["container-2xl", className].filter(Boolean).join(" ")}>{children}</section>
}
