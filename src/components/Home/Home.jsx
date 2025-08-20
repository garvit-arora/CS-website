import React from "react";
import { useState } from "react";
import { useForm } from '@formspree/react';
import chachu from "../../assets/chachu.jpg";
import { useNavigate } from "react-router";
import person1 from "../../assets/person1.jpg"
import person2 from "../../assets/person2.jpeg"
import person3 from "../../assets/person3.jpg"
import left from "../../assets/left.png"
import right from "../../assets/right.png"


export default function Home() {
  const [state, handleSubmit, reset] = useForm('myzpvlyy');
  
  const testimonials = [
  {
    name: "James Carter",
    role: "Startup Founder",
    image: person1, 
    text: "The team made the entire compliance process so smooth and stress-free. I can now focus on growing my business without worrying about legal hurdles!"
  },
  {
    name: "Michael Lee",
    role: "Small Business Owner",
    image: person2,
    text: "They handle everything with such professionalism and clarity. I finally feel confident that my company is 100% compliant and in good hands!"
  },
  {
    name: "Avika",
    role: "Entrepreneur",
    image: person3,
    text: "Their expertise saved me hours of paperwork and headaches. If you want peace of mind in running your company, this is the team to trust."
  }
];

// Services Object
const [activeService, setActiveService] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null);
const handleSubServiceClick = (id) => {
    setSelectedSubService(id);
    console.log("Selected Sub-Service ID:", id);
  };
const services = [
  {
    id: "trademark",
    name: "Trademark Registration",
    subServices: [
      { id: "tm-individual", name: "Individual Trademark" },
      { id: "tm-company", name: "Company Trademark" },
      { id: "tm-international", name: "International Trademark" }
    ]
  },
  {
    id: "patent",
    name: "Patent Registration",
    subServices: [
      { id: "patent-tech", name: "Technology Patent" },
      { id: "patent-design", name: "Design Patent" }
    ]
  },
  {
    id: "other",
    name: "Other Registrations",
    subServices: [
      { id: "gst", name: "GST Registration" },
      { id: "msme", name: "MSME Registration" }
    ]
  },
  {
    id: "compliance",
    name: "Compliance Services",
    subServices: [
      { id: "tax", name: "Tax Compliance" },
      { id: "audit", name: "Audit Compliance" }
    ]
  }
];

  return (
    <>
     
     <div className="w-full ">
       <div className="bg-white py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>

      <div className="grid grid-cols-1 m-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg cursor-pointer"
          >
            <h2
              className="text-xl font-semibold"
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            >
              {service.name}
            </h2>

            {activeService === service.id && (
              <div className="mt-4 space-y-2">
                {service.subServices.map((sub) => (
                  <button
                    key={sub.id}
                    className="block w-full text-left px-3 py-2 border rounded hover:bg-blue-50"
                    onClick={() => handleSubServiceClick(sub.id)}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
     </div>
     <form 
  onSubmit={handleSubmit} 
  className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 border border-gray-200"
>
  <h2 className="text-2xl font-bold text-center mb-4">Send Us Your Query</h2>

  {/* Name */}
  <div className="flex flex-col">
    <label htmlFor="name" className="mb-1 font-semibold">Name</label>
    <input 
      id="name" 
      type="text" 
      name="name" 
      required
      placeholder="Your Name"
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col">
    <label htmlFor="email" className="mb-1 font-semibold">Email</label>
    <input 
      id="email" 
      type="email" 
      name="email" 
      required 
      placeholder="you@example.com"
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  {/* Selected Service (read-only) */}
  <div className="flex flex-col">
    <label htmlFor="selectedService" className="mb-1 font-semibold">Selected Service</label>
    <input 
      id="selectedService"
      type="text"
      name="selectedService"
      value={selectedSubService || ""}
      readOnly
      placeholder="Select a service above"
      className="border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
    />
  </div>

  {/* Message / Query */}
  <div className="flex flex-col">
    <label htmlFor="message" className="mb-1 font-semibold">Additional Details</label>
    <textarea 
      id="message"
      name="message"
      required
      rows="3"
      placeholder="Write your query here..."
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
    ></textarea>
  </div>

  {/* Submit Button */}
  <button 
    type="submit" 
    disabled={state.submitting || !selectedSubService} 
    className={`w-full py-2 rounded text-white font-semibold 
      ${state.submitting || !selectedSubService ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
  >
    {state.submitting ? "Sending..." : "Submit Query"}
  </button>

  {/* Success message */}
  {state.succeeded && (
    <p className="text-green-600 font-semibold text-center mt-2">
      Your query has been sent successfully!
    </p>
  )}
</form><br />
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

