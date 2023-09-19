
import HeaderBasic from "@/components/HeaderBasic"
import Carousel from "@/components/Carousel"
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
      {/* Header Fijo  */}
      <HeaderBasic/>

      {/* Titulo */}
      <h1 style={{textAlign:'center'}} className='p-4'><span style={{color:"#3044B6"}}>¡Hola!</span> ¿Cómo podemos ayudarte? </h1>

      {/* Carousel */}
      <Carousel/>

      {/* Info del banco */}
      <div className='p-5'>
        <h1 style={{textAlign:'center'}}>Nuestra Historia</h1>
        <p >
          En el corazón de la próspera ciudad de Nueva Aurora, en un rincón estratégico rodeado de rascacielos modernos y bulliciosa actividad económica, surgió un día el banco que cambiaría para siempre el panorama financiero: NovaBank.
          Corría el año 1990 cuando Amelia Martínez, una visionaria economista, decidió materializar su sueño de crear un banco que ofreciera servicios financieros innovadores y accesibles para todos. Con determinación y un pequeño grupo de inversionistas confiados en su visión, Amelia estableció las bases de NovaBank. El nombre "Nova" simbolizaba una nueva era en la banca, y sus cimientos se basaban en valores de transparencia, integridad y compromiso con la comunidad.
          Los primeros años no fueron fáciles. NovaBank enfrentó desafíos regulatorios y la desconfianza inicial de algunos clientes debido a su condición de banco nuevo. Sin embargo, Amelia y su equipo persistieron, enfocándose en brindar un servicio excepcional y soluciones financieras adaptadas a las necesidades cambiantes de la sociedad.
        </p>
        <p >
          El banco comenzó a destacar por su enfoque en la tecnología, siendo uno de los pioneros en ofrecer servicios bancarios en línea y una plataforma móvil intuitiva mucho antes de que se volvieran estándar en la industria.
          Con el tiempo, NovaBank se convirtió en un referente en innovación financiera. Introdujo conceptos como asesores virtuales para inversiones, análisis predictivos para préstamos y una plataforma de educación financiera para empoderar a sus clientes. La ética y el compromiso de NovaBank con la sostenibilidad también lo convirtieron en líder en financiamiento de proyectos verdes y sociales.
          La crisis financiera de 2008 puso a prueba a NovaBank, al igual que a muchas otras instituciones financieras. Sin embargo, gracias a una gestión prudente y un enfoque en activos de calidad, NovaBank logró sortear la tormenta con daños mínimos. Esta resiliencia aumentó aún más la confianza de sus clientes y fortaleció su posición en el mercado.
          Con el tiempo, NovaBank amplió sus fronteras. Se establecieron sucursales en diferentes países, manteniendo siempre su enfoque en la adaptación a las necesidades locales y el respeto por la diversidad cultural. Esta expansión gradual pero constante consolidó la presencia global del banco.
        </p>
        <p>
          Tristemente, en 2021, Amelia Martínez falleció dejando atrás un legado sólido y una huella imborrable en la industria financiera. Su visión y valores continuaron siendo el núcleo de NovaBank, que siguió innovando y adaptándose a un mundo en constante cambio.
          Hoy, NovaBank es reconocido como un líder en banca sostenible, tecnológicamente avanzada y comprometida con el bienestar financiero de sus clientes. Su historia es un testimonio de cómo la pasión, la perseverancia y la innovación pueden dar forma a un banco que no solo sobrevive, sino que prospera en cualquier circunstancia.
        </p>
      </div>

      {/* Footer */}
      <Footer/>
    </>
  )
}
