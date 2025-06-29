import React from 'react'

function Body() {
  return (
    <div className="container mx-auto px-4 mt-5">
      {/* Header Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 bg-gradient-to-r from-orange-50 to-yellow-100 p-8 rounded-xl shadow-md">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center text-3xl md:text-4xl font-bold text-[#f94a3d]">
            <span className="mr-3">More than Faster</span>
            <img
              src="./image/bodyimage/french-fries.svg"
              alt="French Fries"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Get your cuisine <br />
            delivered right to <br />
            <span className="text-[#f94a3d]">your door</span>
          </h1>
          <p className="text-lg text-gray-700">
            Food that is delivered at the right time. The trendy food delivery
            partner. Good food is what we deliver. Your hunger companion.
          </p>
          <button className="bg-[#f94a3d] text-white px-6 py-3 rounded-xl text-lg hover:bg-[#e03b2f] transition duration-300 shadow-lg hover:shadow-xl">
            Explore Food
          </button>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="./image/bodyimage/delivery-guy.svg" alt="Delivery Guy" className="w-full" />
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Why we are Best in our Town</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Whole grains and low-fat dairy can help to reduce your risk of heart
          disease by maintaining blood pressure and boosting immunity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            {
              icon: "./image/bodyimage/meat-icon.svg",
              title: "Choose your favorite food",
            },
            {
              icon: "./image/bodyimage/delivery-icon.svg",
              title: "Get delivery at your doorstep",
            },
            {
              icon: "./image/bodyimage/phone-icon.svg",
              title: "400+ Reviews on our app",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-[#fef3c7] border border-gray-200 rounded-2xl p-6 shadow-lg transition duration-300 ease-in-out"
            >
              <img src={item.icon} alt="" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold text-[#f94a3d]">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 bg-orange-50 py-12 px-4 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./image/bodyimage/delivery-guy-2.svg"
              alt="Delivery Guy"
              className="w-full"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Take a look at the benefits we offer for you
            </h2>
            <p className="text-gray-700">
              Good service means a friendly, welcoming experience. A restaurant owner
              should not merely strive to avoid bad service — they should aim to create
              a delightful experience for every customer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <img src="./image/bodyimage/car-icon.svg" alt="" className="w-10 h-10" />
                  <div>
                    <h4 className="font-semibold text-[#f94a3d]">Free Home Delivery</h4>
                    <span className="text-sm text-gray-500">For all orders</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <img src="./image/bodyimage/dollar-icon.svg" alt="" className="w-10 h-10" />
                  <div>
                    <h4 className="font-semibold text-[#f94a3d]">Return & Refund</h4>
                    <span className="text-sm text-gray-500">Money Back Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <img src="./image/bodyimage/security-icon.svg" alt="" className="w-10 h-10" />
                  <div>
                    <h4 className="font-semibold text-[#f94a3d]">Secure Payment</h4>
                    <span className="text-sm text-gray-500">100% Safe Transactions</span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-4">
                  <img src="./image/bodyimage/time-icon.svg" alt="" className="w-10 h-10" />
                  <div>
                    <h4 className="font-semibold text-[#f94a3d]">Quality Support</h4>
                    <span className="text-sm text-gray-500">Always Online 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="mt-24 bg-[#f8f8f8] py-10 flex flex-wrap justify-around text-center rounded-xl shadow-inner">
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-[#f94a3d]">1K+</h1>
          <h4 className="text-lg text-gray-700 font-medium">Users</h4>
        </div>
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-[#f94a3d]">3</h1>
          <h4 className="text-lg text-gray-700 font-medium">Best Shops</h4>
        </div>
        <div className="mb-6">
          <h1 className="text-4xl font-extrabold text-[#f94a3d]">2K+</h1>
          <h4 className="text-lg text-gray-700 font-medium">Food Delivered</h4>
        </div>
      </section>
    </div>


  )
}

export default Body
