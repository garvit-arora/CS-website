import React from "react";
import back from "../../assets/asset1.jpg";
import videoBg from "../../assets/back.mp4";
import chachu from "../../assets/chachu.jpg";
import scroll from "../../assets/mouse.svg";
import { useNavigate } from "react-router";
import person1 from "../../assets/person1.jpg"
import person2 from "../../assets/person2.jpeg"
import person3 from "../../assets/person3.jpg"
import left from "../../assets/left.png"
import right from "../../assets/right.png"
function Home() {
  const navigate = useNavigate();
  function LeadToServices() {
    navigate("/services");
  }
  const testimonials = [
  {
    name: "James Carter",
    role: "Startup Founder",
    image: person1, // import at top
    text: "The team made the entire compliance process so smooth and stress-free. I can now focus on growing my business without worrying about legal hurdles!"
  },
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    image: person2,
    text: "They handle everything with such professionalism and clarity. I finally feel confident that my company is 100% compliant and in good hands!"
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    image: person3,
    text: "Their expertise saved me hours of paperwork and headaches. If you want peace of mind in running your company, this is the team to trust."
  }
];
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
          <br /><br />
        <div className="flex items-center justify-center">
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

      <br />
      <div className="">
        <h1 className="text-4xl font-bold text-center">
          {" "}
          Customer Testimonials
        </h1>
        
        <div className="flex justify-between m-20">
          {testimonials.map((i,index)=>(
          <div
           key={index} className="w-[30%] border-black order-2 bg-amber-50 shadow-xl p-10 aspect-square ">
            <div className="justify-center text-center">
              <div className="flex justify-center items-center">
              <img className="w-20 h-20 rounded-full" src={i.image} alt={i.name} />
              </div>
              <br />
              <h2 className="text-2xl font-bold">{i.name}</h2>
              <h3 className="text-xl font-bold">{i.role}</h3>
              <br />
              <p><img src={right} className="w-20" alt="right" /> {i.text} </p>
              
                <div className="flex justify-end">
                <img src={left} className="w-20" alt="left" /></div>
            </div>
          </div>
          
         
          ))}
          
        </div>
        
      </div>
    </>
  );
}

export default Home;
