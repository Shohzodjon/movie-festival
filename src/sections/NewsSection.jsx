import SectionTitle from "../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import NewsCard from "../components/NewsCard";
import "swiper/css/navigation";
import "swiper/css";
import img from "../assets/images/news_card.png";
import "../assets/styles/news-section.css";
const NewsSection = () => {
  const data = [
    {
      img: img,
      desc: "Алдияр Байракимов, режиссер нашумевшего казахского фильма «Паралимпиец»:",
    },
    {
      img: img,
      desc: "Аяз Салаев, известный киновед, кинорежиссер, сценарист, педагог, телеведущий, актер, заслуженный деятель искусств Республики Азербайджан:",
    },
    {
      img: img,
      desc: "Артём Михалков, известный актёр и режиссёр:",
    },
    {
      img: img,
      desc: "Гульбара Толомушова, известная актриса театра и кино:",
    },
    {
      img: img,
      desc: "Гульбара Толомушова, известная актриса театра и кино:",
    },
  ];
  return (
    <section className="news__section">
      <div className="container">
        <SectionTitle title="Новости" />
        <div className="news__slider">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={4}
            navigation
            breakpoints={{
              375: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <NewsCard imgUrl={item.img} desc={item.desc} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
