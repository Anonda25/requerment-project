
import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';

const About = () => {
    const { cost, treatment, description, image } = useLoaderData();
    console.log(cost);
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
            <p className="mb-5">{description}</p>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Book Appoinment(1)
            </button>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn btn-primary"
            >
              Book Appoinment
            </button>
          </div>
        </div>
        <Modal treatment={treatment}></Modal>
      </div>
    );
  
};

export default About;