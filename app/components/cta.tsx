import Image from "next/image";
import Button from "./button";

const CTA = () => {
    return ( 
        <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <Image className="w-full" src="/cat.gif" alt="CTA Image" width={240} height={240} />
        <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ready to sleep better?</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Download the app for free and to use extra features! I didnt add any custom payment plan just download it.</p>
            <Button text="Download" href="/download" />
        </div>
    </div>
</section>
     );
}
 
export default CTA;