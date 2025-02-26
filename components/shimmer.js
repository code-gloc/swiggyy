export default function Shimmer() {
    let shimmerItems = [];
  
    for (let i = 0; i < 12; i++) {
      shimmerItems.push(
        <div key={i} className="w-64 p-4">
          <div className="w-64 h-40 bg-gray-300 rounded-2xl"></div>
          <div className="w-64 h-5 bg-gray-300 rounded-2xl mt-2"></div>
          <div className="w-64 h-5 bg-gray-300 rounded-2xl mt-2"></div>
          <div className="w-64 h-5 bg-gray-300 rounded-2xl mt-2"></div>
        </div>
      );
    }
  
    return (
      <div className="container max-w-[80%] mx-auto grid grid-cols-4 gap-3 p-5">
        {shimmerItems}
      </div>
    );
  }
  