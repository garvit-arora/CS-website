import React from "react";

function Services() {
  return (
    
    <>
      <div className="flex flex-row flex-nowrap gap-5 relative justify-center mt-15 items-center">
        <div className="w-[30%] border-black order-1 p-10 bg-pink-50 shadow-2xl aspect-square ">
          <div className="justify-center text-center">
            <div className="flex h-12 w-12 bg-blue-200 text-[var(--primary-color)] mx-auto rounded-full items-center justify-center ">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0c.002-.34.004-.68.005-1.02a11.955 11.955 0 01-2.382-9.028z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <br />

            <h1 className="text-2xl font-bold ">Compliance Services</h1>
            <br />
            <p className="border-b border-black pb-2">
              Ensuring your business adheres to all statutory and regulatory
              requirements, minimizing risks and promoting good corporate
              governance.
            </p>
            <br />
            <h2 className="text-xl font-bold">Key Features : </h2>
            <br />
            <ul className="text-left">
              <li>✔️ Statutory filings and record maintenance </li>
              <li>✔️ Compliance health checks</li>
              <li>✔️ Regulatory updates and guidance</li>
            </ul>
            <br />
            <button className="bg-blue-600 w-[70%] h-10 text-white text-xl font-bold rounded-2xl">
              Put Up Query
            </button>
          </div>
        </div>
        <div className="w-[30%] border-black order-2 bg-amber-50 shadow-xl p-10 aspect-square ">
            <div className="justify-center text-center">
            <div className=" flex h-12 w-12 bg-blue-200 text-[var(--primary-color)] mx-auto rounded-full items-center justify-center ">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0c.002-.34.004-.68.005-1.02a11.955 11.955 0 01-2.382-9.028z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <br />

            <h1 className="text-2xl font-bold ">Governance Services</h1>
            <br />
            <p className="border-b border-black pb-2">
              Providing expert guidance on corporate governance best practices to enhance board effectiveness and stakeholder confidence.
            </p>
            <br />
            <h2 className="text-xl font-bold">Key Features : </h2>
            <br />
            <ul className="text-left">
              <li>✔️ Development of governance frameworks </li>
              <li>✔️ Board and committee evaluations</li>
              <li>✔️ Policy and charter development</li>
            </ul>
            <br />
            <button className="bg-blue-600 w-[70%] h-10 text-white text-xl font-bold rounded-2xl">
              Put Up Query
            </button>
          </div>
        </div>

        <div className="w-[30%] border-black order-3 p-10 bg-green-50 shadow-2xl aspect-square ">
            <div className="justify-center text-center">
            <div className=" flex h-12 w-12 bg-blue-200 text-[var(--primary-color)] mx-auto rounded-full items-center justify-center ">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 0118 0c.002-.34.004-.68.005-1.02a11.955 11.955 0 01-2.382-9.028z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <br />

            <h1 className="text-2xl font-bold ">Board Support</h1>
            <br />
            <p className="border-b border-black pb-2">
              Comprehensive support for board and committee meetings, ensuring they are productive, efficient, and well-documented.
            </p>
            <br />
            <h2 className="text-xl font-bold">Key Features : </h2>
            <br />
            <ul className="text-left">
              <li>✔️ Meeting management and minute taking </li>
              <li>✔️ Board paper preparation and distribution</li>
              <li>✔️ Action item tracking and follow-up</li>
            </ul>
            <br />
            <button className="bg-blue-600 w-[70%] h-10 text-white text-xl font-bold rounded-2xl">
              Put Up Query
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
