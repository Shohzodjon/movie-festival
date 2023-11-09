import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide, SwiperContainer } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import img from "../assets/images/history_img.png";
import "../assets/styles/history-section.css";
const HistorySection = () => {
  const data = [img, img, img, img, img, img, img, img, img];
  return (
    <section className="history__section">
      <div className="container">
        <div className="history__section__flex">
          <SectionTitle title="История" />
          <select>
            <option value="1">2023 г</option>
            <option value="1">2022 г</option>
            <option value="1">2020 г</option>
            <option value="1">2018 г</option>
          </select>
        </div>

        <div className="history__section__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            navigation
            centeredSlides={true}
            loop={true}
            breakpoints={{
              375: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1050: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="watched__film__card">
                    <img src={item} alt="img" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default HistorySection;
