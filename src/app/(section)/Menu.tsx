'use client'
import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const Menu = ({ }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const mm = gsap.matchMedia();
        mm.add("(max-width:500px)", () => {
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 0,
                duration: 0.8

            })

        })

        mm.add("(min-width:501px)", () => {
            gsap.to('.menu-one', {
                scrollTrigger: {
                    trigger: ".menu-one",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
            gsap.to('.menu-two', {
                scrollTrigger: {
                    trigger: ".menu-two",
                    toggleActions: 'restart none none none',
                    // start: "top 80%", // When the top of the .title enters 80% of the viewport
                    // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                    // scrub: true
                },
                x: 30,
                duration: 0.8

            })
        })
        gsap.to('.menu-arrow', {
            scrollTrigger: {
                trigger: ".menu-arrow",
                toggleActions: 'restart none none none',
                // start: "top 80%", // When the top of the .title enters 80% of the viewport
                // end: "top 50%",   // When the top of the .title reaches 50% of the viewport
                // scrub: true
            },
            scale: 1,
            duration: 0.8

        })

        const splitType = document.querySelectorAll(".head-menu")
        splitType.forEach((char, i) => {
            if (char instanceof HTMLElement) {
                const text = new SplitType(char, { types: "chars" })
                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                        markers: false
                    },
                    opacity: 0.2,
                    stagger: 0.2
                })
            }
        })

    }, [])
    return (
        <section id="welcome" className="relative w-full h-fit py-12 lg:py-24 bg-[#0f1d22]">
            <div className="relative flex flex-col lg:flex-row gap-9 lg:gap-0 h-fit bg-transparent w-full items-center justify-center px-3 lg:p-0  overflow-hidden">
                <div className="z-30 flex flex-col gap-5 lg:gap-9 h-full w-full items-center lg:items-center justify-center">
                    <div className="w-full flex flex-col gap-10 justify-center items-center">
                        <div className="w-full flex flex-col items-center justify-center gap-12">
                            <div className="w-full flex flex-col gap-4 items-center justify-center">
                                <p className="menu-one font-stone font-[200] text-xl md:text-3xl text-primary md:-ml-[50px]">
                                    Special selection
                                </p>
                                <p className="styled_section_head break-words uppercase text-primary text-center flex gap-3 justify-center items-center">
                                    <Image src='/images/left.png' alt="left" width={44} height={12} className="menu-arrow w-fit"
                                        style={{
                                            transform: "scale(0.5)"
                                        }}
                                    />
                                    <span className="head-menu max-w-72 md:max-w-full">From our menu</span>
                                    <Image src='/images/right.png' alt="right" width={44} height={12} className="menu-arrow w-fit h-fit"
                                        style={{
                                            transform: "scale(0.5)"
                                        }}
                                    />
                                </p>
                            </div>
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center md:justify-between gap-5">
                               
                                <div className="hidden lg:flex w-10 xl:w-[108px] h-[800px]" style={{backgroundImage: "url('/images/home/facility/side.png')"}}>

                                </div>
                                {/* TODO: Put the menus ans subs into an array/json and use JS to render this */}
                                <div className="px-2 w-full h-full md:w-9/12 flex flex-col md:flex-row justify-center md:justify-between gap-9 md:gap-14">
                                    <div className="w-full md:w-1/2 flex flex-col gap-9">
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary  menu_item">Omakasi sashimi boat</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£45</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub menu_item_sub ">Salmon, tuna, seabass, ebi prawn, sashimi 3pcs each and california roll (8pcs)</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Omakasi nigiri boat</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£45</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">Salmon, tuna, seabass, ebi prawn, nigiri 3pcs each and california roll (8pcs)</p>
                                            </div>
                                            
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Sushi platter boat, share for 2-3</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£60</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">Avocado, cucumber inside out, topped salmon, tuna, seabass, ebi prawn, sashimi (3pcs each) salmon, tuna, seabass, ebi prawn, nigiri (2pcs each) california roll (8pcs) california roll</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Dynamite don</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£22</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">Deep fried prawn serves with rice, spicy mayo, teri sauce crispy onion</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Lamb Chops</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£25</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">250-270g, 5 pieces Lamb Racks</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Lamb Kafes</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£55</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">800-1kg, 12 Pieces Chops and Sirloin side of Lamb</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Lamb Chops Chimichurri</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£26</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">Grilled Lamb chops with mint Chimichurri and pickled cucumber</p>
                                            </div>
                                            
                                        </div>
                                    <div className="w-full md:w-1/2 flex flex-col gap-9">
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Vu steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£36</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">450-550g Porterhouse</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">New york steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£28</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">270-300g Sirloin Steak</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Fillet mignon</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£36</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">230-250g Tenderloin Served with Asparagus</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Tomahawk steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£60</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">650 -750g Thicker Ribeye</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Dallas steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£34</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">400-500g Ribeye on The Bone</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Lokum steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£34</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">230-250g Sliced Fillet Mignon</p>
                                            </div>
                                            <div className="w-full flex flex-col">
                                                <div className="w-full flex gap-1 items-center">
                                                    <p className="w-auto text-primary menu_item">Spicy ribey steak</p>
                                                    <div className="flex-grow border-y py-[2px] border-y-[#715B3E] mr-[15px] h-[1px]"></div>
                                                    <p className="w-auto flex items-end text-primary text-lg">£34</p>
                                                </div>
                                                <p className="text-[#9aa0a2] menu_item_sub">250/300g Served with Vu Spicy Sauce , Sesame Seeds ,Fried Onion and Pepper</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="hidden lg:flex w-10 xl:w-[108px] h-[800px] " style={{backgroundImage: "url('/images/home/facility/side.png')"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="w-full pb-5 pt-20 flex justify-center items-center">
                    <Link href='/menu'>
                        <Button variant='image' className="lg:w-[195.91px] lg:h-[61.76px] py-6 px-10 bg-button-hover text-white font-open uppercase leading-[22.4px] tracking-[13%] font-[200]">View Menu</Button>
                    </Link>
                </div>
        </section >
    );
};

export default Menu;
