import React from 'react'

const Hero = () => {
  return (
    <div>
      <div class="h-screen md:flex">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden rounded-xl">
		<div>
			<h1 class="text-white font-bold text-6xl font-sans">Fullfillment</h1>
      <h1 class="text-white font-bold text-6xl font-sans">and Packaging</h1>
			<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white">
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Request A </h1>
			<p class="text-gray-800 font-bold text-2xl mb-1">Free Consultation</p>
			<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full Name" />
      </div>
				<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
					<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
					<div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Pick-Up From" />
      </div>
						<div class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Delivering to" />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Get Delivering Today</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer"></span>
		</form>
	</div>
</div>
<div  class="mt-10 " >
  <h1 class=" text-center font-bold text-5xl">COMPREHENSIVE FULFILLMENT AND PACKAGING <br/>SOLUTIONS BY <span class="text-orange-600">AZOOZ EXPRESS</span></h1>
  <div class="mt-10">
  <h2 class="text-center  text-3xl"><span class="text-orange-600">Make business operations </span>smoother with Azooz Express – your reliable partner in top-quality <br />fulfillment and customized packaging services. Our services are quick, cost-friendly, and tailored <br /> just for you.services.</h2>
  </div>
  <div class="mt-8">
  <h1 class=" text-center font-bold text-5xl">WHY CHOOSE AZOOZ EXPRESS FOR FULFILLMENT <br />AND <span class="text-orange-600">PACKAGING?</span></h1>
  </div>
</div>
<div class="flex">

<div class="border-solid flex-1 rounded-xl ml-40 mt-10 mr-40 mb-10 bg-indigo-500 ">
    <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">COST-EFFECTIVE SOLUTIONS</h2>
    <h3 class="ml-10 text-white ">Reduce overhead costs and optimize expenses with Azooz Express. Our <br /> efficient processes and buying power are dedicated to enhancing your <br /> bottom line.</h3>
  
    <h2 class="mt-4 ml-10 font-semibold text-2xl text-white">FOCUS ON GROWTHG</h2>
    <h3 class="ml-10 text-white">Let Azooz Express manage the intricacies of fulfillment and packaging while <br /> you concentrate on strategic activities.
</h3>
<h2 class="mt-4 ml-10 font-semibold text-2xl text-white" >EXCEPTIONAL CUSTOMER EXPERIENCE</h2>
  <h3 class="ml-10  text-white">Azooz Express handles the packaging, allowing you to consistently deliver <br /> delightful customer experiences.</h3>
  <h2 class="mt-4 ml-10 font-semibold text-2xl text-white">TAILORED SOLUTIONS FOR YOUR BUSINESS</h2>
  <h3 class="ml-10 text-white">Whether you are navigating e-commerce intricacies or need retail-ready <br /> packaging, Azooz Express crafts customized models to meet your specific <br /> requirements.</h3>
  <h2 class="mt-4 ml-10 font-semibold text-2xl text-white">SAVE MONEY WITH DUTY KNOW-HOW</h2>
  <h3 class="ml-10  text-white">We know the ins and outs of duty exemptions and temporary clearance in <br />freight courier services. Azzoz Express helps you save money by navigating <br />customs rules like a pro in delivery services in Oman.</h3>
</div>
<div class="flex-2">
  <img src="https://azoozexpress.com/wp-content/uploads/2023/11/pp10-2.png"  class="mt-40 mr-40" alt="" />
</div>
</div>

<div class="mt-10"  >
  <h1 class=" text-center font-bold text-5xl">AZOOZ EXPRESS FULFILLMENT AND PACKAGING <br /><span class="text-orange-600">CAPABILITIES</span> </h1>
  <h2 class="text-center  text-2xl mt-10">At Azzoz Express, our customs clearance services keep things simple and stress-free. Here’s what <br /> we cover for you.</h2>
</div>
<div class="flex">
<div class="flex-1  ">
  <img src="https://azoozexpress.com/wp-content/uploads/2023/11/Group-760.png" class="w-96 h-96 ml-40 mt-20" alt="" />
</div>
<div class="mr-10 ">

<div class=" rounded-xl  ml-80 mt-10 mr-80 bg-indigo-500 ">
  <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">KEEP IT SAFE</h2>
  <h3 class="ml-10  text-white">We use smart packaging like clamshells, blisters, and custom boxes to keep <br/>your stuff safe.</h3>
  <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">SHOW OFF YOUR BRAND</h2>
  <h3 class="ml-10  text-white">IOur packaging makes your brand look fantastic.</h3>
  <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">PACK IT UP FAST</h2>
  <h3 class="ml-10  text-white">We can quickly pack up many different products.</h3>
  <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">MAKE IT EXTRA SPECIAL</h2>
  <h3 class="ml-10  text-white" >We can add bags, kits, and awesome gift boxes to make your customers <br /> happier.</h3>
  <h2 class="mt-8 ml-10 font-semibold text-2xl text-white">FIT RIGHT IN</h2>
  <h3 class="ml-10  text-white">Our services fit perfectly with your production and shipping plans.</h3>
</div>
</div>
</div>

</div>

  )
}

export default Hero
