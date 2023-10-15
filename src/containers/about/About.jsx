import React from "react"

// css
import "./about.css"

// assets
import imgVideo from "../../assets/IBSAP/Video.svg"

const About2 = () => {
  return (
    <>
      <div className="about">
        <div className="about_info">
          <div className="about_info_left">
            <p className="about_info_left_title">Tentang IBSAP</p>
            <h1 className="about_info_left_slog">
              Indonesian Biodiversity Strategy and Action Plan (IBSAP)
            </h1>
            <p className="about_info_left_desc">
              Indonesia Biodiversity Strategy and Action Plan (IBSAP) adalah
              suatu kerangka kerja strategis dan rencana tindakan yang
              ditetapkan oleh pemerintah Indonesia untuk melestarikan,
              mengelola, dan memanfaatkan keanekaragaman hayati dan ekosistem di
              negara tersebut.
            </p>
          </div>
          <div className="about_info_right">
            <div className="about_info_right_tujuan">
              <h1 className="about_info_right_slog">4 Tujuan</h1>
              <p className="about_info_right_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="about_info_right_target">
              <h1 className="about_info_right_slog">21 Target</h1>
              <p className="about_info_right_desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="about_info_right_button">
              <button>Pelajari Dokument IBSAP →</button>
            </div>
          </div>
        </div>
        <div className="about_img">
          <img src={imgVideo} alt="video" />
        </div>
      </div>
    </>
  )
}

export default About2
