import Image from "next/image";

const Sounds = () => {
    return ( 
        <>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Do you want to
        <br className="hidden lg:inline-block" />upload something of your own?
      </h1>
      <p className="mb-8 leading-relaxed">Install the HOPE application for abosulte control. Open source application to customize every nook and cranny! Add new features or just upload your own sound!</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Download</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="hope.svg" height={180} width={180} />
    </div>
  </div>
</section>
<section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Have questions?</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Send me an email. Other ways of conntacting is through my social media which you can find at the bottom of my page, or open up a ticket on my discord server. Thank you for using HOPE. I HOPE you had a well night rest!</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a href="mailto:trycaze@proton.me" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-purple-500 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Email
                </a>
                <a href="https://discord.gg/aEjafzsPe9" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    Discord Server
                </a>  
            </div>
        </div>
    </div>
</section>
</>
     );
}
 
export default Sounds;