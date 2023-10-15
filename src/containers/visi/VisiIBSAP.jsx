import React from "react"

// css
import "./visi.css"

// assets
import book from "../../assets/IBSAP/book.svg"
import arrow from "../../assets/IBSAP/arrow.svg"

const Visi = () => {
  return (
    <>
      <div className="visi">
        <div className="visi_main">
          <p className="visi_main_title">VISI ISBAP</p>
          <h1 className="visi_main_slog">
            Menuju Kelestarian Hayati Indonesia
          </h1>
          <p className="visi_main_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="visi_content">
          <div className="visi_content_left">
            <div className="visi_content_left_1">
              <div className="visi_content_left_1_title">
                <p>T01</p>
              </div>
              <p className="visi_content_left_1_desc">
                Meningkatkan integritas dan konektivitas ekosistem untuk
                memperkuat kualitas dan kesehatan ekosistem serta kualitas
                habitat berbagai spesies melalui perlindungan dan pelestarian
                serta pemulihan ekosistem.
              </p>
            </div>
            <div className="visi_content_left_2">
              <div className="visi_content_left_2_title">
                <p>T02</p>
              </div>
              <p className="visi_content_left_2_desc">
                Mengurangi potensi ancaman kehilangan keanekaragaman hayati
                akibat alih fungsi lahan, polusi, spesies invasif, pemanfaatan
                berlebihan dan perubahan iklim.
              </p>
            </div>
          </div>
          <div className="visi_content_mid">
            <img src={book} alt="book" />
          </div>
          <div className="visi_content_right">
            <div className="visi_content_right_1">
              <div className="visi_content_right_1_title">
                <p>T03</p>
              </div>
              <p className="visi_content_right_1_desc">
                Mengoptimalkan pemanfaatan berkelanjutan keanekaragaman hayati
                yang sebesar-besarnya untuk masyarakat saat ini dan generasi
                yang akan datang dengan menjunjung tinggi kearifan lokal,
                kesetaraan akses dan pembagian keuntungan yang adil dan seimbang
                melalui Ekonomi Hijau dan Ekonomi Biru.
              </p>
            </div>
            <div className="visi_content_right_2">
              <div className="visi_content_right_2_title">
                <p>T04</p>
              </div>
              <p className="visi_content_right_2_desc">
                Penguatan tata kelola dan sumber daya untuk mendukung
                pengelolaan keanekaragaman hayati Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="btn_download_documen">
          <button>
            Unduh Dokumen IBSAP
            <img src={arrow} alt="download" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Visi
