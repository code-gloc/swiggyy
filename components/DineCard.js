export default function DineCard({ dineData }) {
    return (
        <div className="max-w-sm flex-none">
            <a target="_blank" href={dineData?.cta?.link} rel="noopener noreferrer">
                <div className="relative">
                    <img
                        className="w-80 h-50 object-cover"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            dineData?.info?.mediaFiles?.[0]?.url
                        }
                        alt="Restaurant"
                    />
                    {/* Gradient overlay behind the text */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
                    {/* Text with higher z-index */}
                    <p className="absolute bottom-2 left-2 text-xl text-white z-10">
                        {dineData?.info?.name}
                    </p>
                    <p className="absolute bottom-2 right-2 text-xl text-white z-10">
                        {dineData?.info?.rating?.value}
                    </p>
                </div>
            </a>
        </div>
    );
}
