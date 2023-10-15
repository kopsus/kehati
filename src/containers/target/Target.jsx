import React from "react"

// component
import "./target.css"
import { Card } from "../../components/"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

// assets
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io"
import arroV from "../../assets/IBSAP/v.svg"
import cardIcon1 from "../../assets/IBSAP/card_icon_1.svg"
import cardIcon2 from "../../assets/IBSAP/card-icon_2.svg"
import cardIcon3 from "../../assets/IBSAP/card_icon_3.svg"

// import required modules
import { FreeMode, Navigation } from "swiper/modules"

const Target = () => {
  return (
    <>
      <div className="target">
        <div className="target_header">
          <div className="target_header_content">
            <h1>Target Nasional IBSAP</h1>
            <div className="target_header_content_option">
              <p>Berdasarkan Semua Tujuan IBSAP </p>
              <img src={arroV} alt="arrow v" />
            </div>
          </div>
          <div className="target_header_desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>
        </div>

        <div className="carousel">
          <Swiper
            spaceBetween={20}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            navigation={{
              nextEl: ".button-arrow-right",
              prevEl: ".button-arrow-left",
              clickable: true,
            }}
            slidesPerView={1.3}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2.3,
              },
              1024: {
                slidesPerView: 3.3,
              },
              1280: {
                slidesPerView: 4.3,
              },
              1536: {
                slidesPerView: 5.3,
              },
              1900: {
                slidesPerView: 6.3,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="TN 01"
                content="Perencanaan tata ruang inklusif dan efektif untuk menjaga area berkeanekaragaman hayati dan ekosistem penting dari perubahan penggunaan lahan dan laut."
                link="10 Aksi Telah → DiImplementasikan"
                icon={
                  <>
                    <img src={cardIcon1} alt="card icon 1" />
                    <img src={cardIcon2} alt="card icon 2" />
                    <img src={cardIcon3} alt="card icon 3" />
                  </>
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="swiper-button">
          <div className="button-arrow-left">
            <IoMdArrowBack style={{ color: "blue" }} />
          </div>

          <div className="button-arrow-right">
            <IoMdArrowForward style={{ color: "blue" }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Target
