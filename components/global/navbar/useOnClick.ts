import { useEffect } from "react"

export const useOnClickOutside = (ref: React.MutableRefObject<any>, handler: any) => {
    useEffect(
      ()=>{
        const listener = (e: { target: any }) => {
          if(!ref.current || ref.current.contains(e.target)) {
            return
          }
          handler(e)
        }
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)
  
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        }
      },
      [ref, handler]
    )
  }
  