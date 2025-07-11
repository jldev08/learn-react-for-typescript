import type { ComponentPropsWithoutRef} from "react"

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  color: string,
  type:string
};

const Button = (props:ButtonProps)=>{
  return <button 
  {...props}
  id="submitBtn" 
  className="cursor-pointer border p-2 bg-black" style={{
    color:props.color
  }}>{props.children}</button>
}

export const App = ()=>{
  return <div className="mx-ato my-4">
    <Button type="button" color="#ddd" onClick={(e)=>alert(e.currentTarget.id)}>CLICK ON BUTTON</Button>
  </div>
}

{/* */}