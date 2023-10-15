import React from "react"
import "./card.css"

export default function Card({ title, content, link, icon }) {
  return (
    <>
      {/* Card-Start */}
      <div className="card">
        <div className="card_title">
          <p>{title}</p>
        </div>
        <div className="card_desc">
          <p>{content}</p>
        </div>
        <div className="card_link">
          <p>{link}</p>
        </div>
        <div className="card_icon">{icon}</div>
      </div>
      {/* Card-End */}
    </>
  )
}
