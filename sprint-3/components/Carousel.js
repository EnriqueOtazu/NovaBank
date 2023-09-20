import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselImage() {
    return (
        <>
            <Carousel className='p-5 ' data-bs-theme="dark">
                
                <Carousel.Item >
                    <Image
                        className="d-flex w-100 m-lg-auto mr-auto"
                        src="/estudiantes.png"
                        alt="First slide"
                        width={500} height={500}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 m-lg-auto mr-auto"
                        src="/parejaMayor.png"
                        alt="First slide"
                        width={500} height={500}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 m-lg-auto mr-auto"
                        src="/playa.png"
                        alt="First slide"
                        width={500} height={500}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100 m-lg-auto mr-auto"
                        src="/familia-sonriendo.jpg"
                        alt="First slide"
                        width={500} height={500}
                    />

                </Carousel.Item>
            </Carousel>
        </>
    );
}