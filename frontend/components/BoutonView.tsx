import React from 'react'
  
export default function BoutonView({to,position, children,e}:any) {
    return (
        <div
        style={{ position: 'fixed', left: `${position.x}px`, top: `${position.y}px`, zIndex: 9999 }}
        className="boutonView body body-xl"
      >
        {children}
      </div>
    )
}
  