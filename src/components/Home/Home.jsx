import React from "react";
import back from "../../assets/asset1.jpg";
import videoBg from "../../assets/back.mp4";
import chachu from "../../assets/chachu.jpg";
import scroll from "../../assets/mouse.svg"
import { useNavigate } from "react-router";


function Home() {
  const navigate = useNavigate();
  function LeadToServices() {
    navigate("/services")
  }
  return (
    <>
      <div className="m-0 p-0 w-full h-[calc(100vh-64px)] relative overflow-hidden">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 top-0 left-0 w-full h-full object-cover opacity-80"
        />
        <div className="mt-57">
          <h1 className="text-white ml-3 bg-black gap-3 flex flex-wrap text-6xl absolute word-by-word font-extrabold bg-opacity-50 p-2 rounded">
            <span className="fade-word" style={{ animationDelay: "0s" }}>
              Your
            </span>
            <span className="fade-word" style={{ animationDelay: "0.2s" }}>
              own
            </span>
            <span className="fade-word" style={{ animationDelay: "0.4s" }}>
              Company
            </span>
            <span className="fade-word" style={{ animationDelay: "0.6s" }}>
              Secretary
            </span>
          </h1>
          <br />
          <br />
          <br />

          <p
            className="text-xl  absolute ml-3 font-bold shadow-2xl bg-opacity-50 p-4 rounded text-white"
            style={{
              textShadow: "3px 3px 6px rgba(0,0,0,0.9)",
            }}
          >
            We take care of your company’s compliance, governance, and legal
            obligations so you can <br /> focus entirely on growing your
            business.
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <button
          className="ml-7 relative bg-blue-600 z-10 cursor-pointer opacity-100 rounded-4xl p-3 text-xl text-white font-extrabold"
          onClick={LeadToServices}
        >
          Explore Services
        </button>
        <div className="flex  justify-center left-1/2 absolute bottom-5 text-center">
        <img className="bounce-effect w-10 "  src={scroll} alt="scroll-down" />
      </div>
      </div>
      {/* About */}
      <div className="m-0 bg-amber-50">
        <div className="flex items-center justify-center">
          <br />
          <h1 className="text-5xl font-extrabold  ">Who Am I ?</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="flex gap-32 justify-center text-center px-10">
          <p className="ml-7 text-black font-bold max-w-xl">
            I'm Chandan Arora, a CS Practioner. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. <br /> Aut quo quam animi tempore
            doloremque eos dolores soluta, eligendi recusandae ducimus delectus,{" "}
            <br /> hic natus libero expedita laudantium, blanditiis nihil itaque
            rerum. Rerum nisi harum <br /> tempore cum excepturi, veniam sint
            praesentium sit quis magni hic tenetur?
            <br /> Cumque! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. <br /> Dolorem odio quo suscipit, obcaecati officia velit{" "}
            <br />
            magnam distinctio saepe. Dignissimos, magnam.
          </p>
          <img
            src={chachu}
            alt="Chandan Arora"
            className="w-72 h-72 rounded-full object-cover"
          />
        </div>
      </div>
      {/* Testimonials */}
      
      
    </>
  );
}

export default Home;
