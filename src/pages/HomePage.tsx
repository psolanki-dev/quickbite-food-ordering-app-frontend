import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
    return(
      <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-red-600">
                Grab a takeaway today
            </h1>
            <span className="text-xl">Food is a mere click away</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order your takeaway even faster with the QuickBite App
                </span>
                <span>
                    For faster orders and personalised recommendatiions, download the QuickBite App. 
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
      </div>  
    );
};

export default HomePage;