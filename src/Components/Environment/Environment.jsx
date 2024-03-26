

const Environment = () => {
    return (
        <div className=" md:mt-32 mt-20">
           <div className=" flex md:flex-row  flex-col-reverse  items-center gap-16">
           <div>
                <h2 className=" md:text-4xl xl:text-4xl 2xl:text-6xl text-2xl font-semibold md:leading-snug leading-snug xl:leading-snug 2xl:leading-tight">We are all in for the <br /> <span className=" text-[#f72d57]">enviroment</span></h2>
                <p className=" mt-4 text-[#767676] md:text-sm xl:text-lg 2xl:text-lg">TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
            </div>

            <div>
                <img className="md:w-[1270px] xl:w-[1370px] 2xl:w-[1770px] rounded-md" src="https://i.ibb.co/3WCxKLd/8f6425c575383305c4246360626e7485.jpg" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Environment;