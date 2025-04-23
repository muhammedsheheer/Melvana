// "use client";
// import { Icons } from "@/components/Icon";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useRestaurant } from "@/context/RestaurantContext";
// import Image from "next/image";

// const Reviews = ({}) => {
//   const { reviews } = useRestaurant();
//   return (
//     <section className="relative flex h-full w-full justify-center bg-[#fff] pb-10">
//       <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full py-12 md:py-44 md:pt-24">
//         <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
//           <div className="flex flex-col items-center justify-center gap-2">
//             <h6 className="font-sofia_sans text-center text-5xl font-[500] uppercase text-[#638D39] md:text-7xl md:tracking-[-1px]">
//               lEvAnt STORIES{" "}
//             </h6>
//           </div>
//         </div>
//         <div className="flex w-full items-center justify-center">
//           {reviews && (
//             <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
//               <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
//                 {reviews.map((review, index) => (
//                   <CarouselItem
//                     key={index}
//                     className="flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none border-[#611326] bg-[#611326] py-6 md:basis-1/3 md:py-12"
//                   >
//                     <div className="flex flex-col gap-6 bg-transparent px-6 pb-4">
//                       <div className="flex w-full justify-center">
//                         {Array.from({ length: review.rating }).map(
//                           (_, index) => (
//                             <Icons.star
//                               key={index}
//                               className="text-[#DCB355]"
//                             />
//                           ),
//                         )}
//                       </div>
//                       <div className="flex flex-col gap-4">
//                         <p className="font-poppins line-clamp-6 w-full max-w-[350px] text-center text-sm font-[500] uppercase tracking-[2px] text-[#fff] md:px-4 lg:leading-[120%]">
//                           {review.text}
//                         </p>
//                       </div>
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
//                 <CarouselPrevious className="border-[#445AA8] text-[#445AA8] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
//                 <CarouselNext className="border-[#445AA8] text-[#445AA8] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
//               </div>
//             </Carousel>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;

"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#fff] pb-10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-t-full py-12 md:py-44 md:pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h6 className="text-center font-marcellus text-4xl font-[400] uppercase text-[#194129] md:text-6xl">
              Reserve <br />
              Your Table
            </h6>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          {reviews && (
            <Carousel className="ml-6 mr-0 w-full md:ml-0 md:mr-12">
              <CarouselContent className="flex w-full justify-center gap-4 md:ml-4">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className={`} flex w-full basis-full flex-col items-center justify-center gap-6 rounded-none border border-[#194129] bg-transparent py-6 md:basis-1/3 md:py-12`}
                    >
                      <div className="flex flex-col gap-3 bg-transparent px-6 pb-6">
                        <div className="flex w-full justify-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <Icons.star
                                key={index}
                                className="text-[#F5CA71]"
                              />
                            ),
                          )}
                        </div>
                        <div className="flex flex-col gap-4">
                          <p
                            className={`line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#679895] md:px-4 lg:leading-[120%]`}
                          >
                            {review.text.text}
                          </p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <p
                            className={`line-clamp-6 w-full max-w-[350px] text-center font-poppins text-sm font-[500] uppercase tracking-[2px] text-[#679895] md:px-4 lg:leading-[120%]`}
                          >
                            {review.authorAttribution.displayName}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-8 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#194129] text-[#194129] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
