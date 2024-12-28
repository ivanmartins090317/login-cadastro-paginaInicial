
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import "./style.css"
import 'swiper/css';

const ContainerText = ({title, text}) =>{
 return(
  <div className="container-texto">
  <h3>{title}</h3>
  <p>{text}</p>
</div>
 )
}
const CarrosselSobre = () =>{
  return(
    <Swiper
    className='carrossel mySwiper'
    slidesPerView={1}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    
  >
    <SwiperSlide>
      <div className="container-texto">
        <h3>Sobre nós</h3>
        <p>Bem- vindo à TIL, uma inovadora plataforma de contratação que nasceu da paixão e dedicação de voluntários comprometidos com o processo de Recrutamento e Seleção de forma humanizada e acessível. Nossa jornada teve início com um projeto voluntário de profissionais entusiastas que acreditavam que o processo de oportunidades de trabalho não deveria ser um privilégio, mais sim um direito.</p>
      </div>
    </SwiperSlide>
    <SwiperSlide>
     <ContainerText title="Nossa História" text="A Til surgiu em 2024, com o intuito de inovar os processos de contratação no mundo do trabalho. Impulsionada por um time de voluntários apaixonados, construímos uma plataforma que conecta empregadores e candidatos da área de tecnologia de forma humanizada e lúdica. Desde o início, nosso objetivo foi criar um ambiente onde as pessoas pudessem encontrar as oportunidades que mais se encaixam com seus talentos e aspirações."/>
    </SwiperSlide>
    <SwiperSlide>
     <ContainerText title="O Que Fazemos" text="Nós conectamos pessoas e empresas de forma rápida e divertida. Através de jogos online, dinâmicas e entrevistas inovadoras, facilitamos a busca por profissionais qualificados e a descoberta de novas oportunidades de carreira."/>
    </SwiperSlide>
  </Swiper>
  )
}

export { CarrosselSobre }