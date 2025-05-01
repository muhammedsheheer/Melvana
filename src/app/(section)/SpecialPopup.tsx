'use client'
import { useState, type FC } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { Calendar, Clock, Music, Soup, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface SpecialPopupProps {
    children: React.ReactNode;
    item: {
        image: string;
        date?: string;
        time?: string;
        food: string;
        dj?: string;
        name?: string;
    }
}

const SpecialPopup: FC<SpecialPopupProps> = ({ children, item }) => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="flex flex-col w-[90%] md:w-full h-fit bg-menubackground lg:max-w-[695px] py-0 px-0 border-none">
                <div className='w-full flex flex-col md:flex-row justify-center items-center gap-4'>
                    <div className='hidden md:block w-full md:w-1/2 bg-black h-full '>
                        <Image
                            src={item?.image}
                            alt="right"
                            width={417}
                            height={531}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className='w-full h-full md:w-1/2 flex flex-col gap-5 px-5 py-5'>
                        {item?.name && (
                            <h1 className='text-3xl font-[600]'>{item.name}</h1>
                        )}
                        {item?.date && (
                            <p className='flex gap-2 justify-start items-start w-full'><Calendar className='w-1/12' /><span className='w-11/12'>{item.date}</span></p>
                        )}
                        {item?.time && (
                            <p className='flex gap-2 justify-start items-start w-full'><Clock className='w-1/12' /><span className='w-11/12'>{item.time}</span></p>
                        )}
                        {item?.dj && (
                            <p className='flex gap-2 justify-start items-start w-full'><Music className='w-1/12' /><span className='w-11/12'>{item.dj}</span></p>
                        )}
                        <p className='w-full flex gap-2 justify-start text-sm items-start'><span>{item?.food && item.food}</span> </p>
                        <div className='w-full flex justify-center'>
                            <Link href="/table-booking">
                                <Button
                                    className="hero-button flex items-center justify-center gap-3 ring-0 border-[0px] px-10 py-7"
                                    variant="image"
                                >
                                    Book A Table
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}

export default SpecialPopup