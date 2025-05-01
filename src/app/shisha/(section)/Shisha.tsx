
const drinks = [
    {
        name: "Magna Carta",
        des: '',
        price: '',
    },
    {
        name: "Black Mamba",
        des: '',
        price: '',
    },
    {
        name: "Purple Rain",
        des: '',
        price: '',
    },
    {
        name: "Passionova",
        des: '',
        price: '',
    },
    {
        name: "Piccasso",
        des: '',
        price: '',
    },
    {
        name: "Frozen Smurf",
        des: '',
        price: '',
    },
]

const vuvip = [
    {
        name: "",
        des: 'Ice base shisha with ice pipe, your choice of flavour, UNLIMITED shisha head.',
        price: '',
    },
]

const vuviplaser = [
    {
        name: "",
        des: 'Enjoy our special laser shisha with Ice base and ice pipe, your choice of flavour, UNLIMITED shisha head.',
        price: '',
    },
]

const vuvipmixes = [
    {
        name: "VU LOVE",
        des: 'Mix of iced pineapple and iced lychee',
        price: '£45',
    },
    {
        name: "VU FRUIT MIX",
        des: 'Mix of strawberries and wild berries',
        price: '£45',
    },
]

const extras = [
    {
        name: "ICE PIPES",
        des: '',
        price: '£10',
    },
    {
        name: "FRUIT HEAD",
        des: '',
        price: '£15',
    },
]



const savacco = [
    {
        name: "Magna Carta",
        des: '',
        price: '',
    },
    {
        name: "Black Mamba",
        des: '',
        price: '',
    },
    {
        name: "Purple Rain",
        des: '',
        price: '',
    },
    {
        name: "Passionova",
        des: '',
        price: '',
    },
    {
        name: "Piccasso",
        des: '',
        price: '',
    },
    {
        name: "Frozen Smurf",
        des: '',
        price: '',
    },
]


const AlFakher = [
    {
        name: "Grape",
        des: '',
        price: '',
    },
    {
        name: "Double Apple",
        des: '',
        price: '',
    },
    {
        name: "Mint",
        des: '',
        price: '',
    },
    {
        name: "Blueberry",
        des: '',
        price: '',
    },
    {
        name: "Kiwi",
        des: '',
        price: '',
    },
    {
        name: "Lemon",
        des: '',
        price: '',
    },
    {
        name: "Orange",
        des: '',
        price: '',
    },
    {
        name: "Peach",
        des: '',
        price: '',
    },
    {
        name: "Pomegrate",
        des: '',
        price: '',
    },
    {
        name: "Gum",
        des: '',
        price: '',
    },
]

const premium = [
    {
        name: "Frozen Blueberry",
        des: '',
        price: '',
    },
    {
        name: "White Gummy Bear",
        des: '',
        price: '',
    },
    {
        name: "Frozen Lemon",
        des: '',
        price: '',
    },
    {
        name: "Raspberry Slush",
        des: '',
        price: '',
    },
    {
        name: "Frozen Mango",
        des: '',
        price: '',
    },
    {
        name: "Rubicon Lychee",
        des: '',
        price: '',
    },
    {
        name: "Blue Mist",
        des: '',
        price: '',
    },
    {
        name: "Irn Bru",
        des: '',
        price: '',
    },
    {
        name: "Frozen Raspberry",
        des: '',
        price: '',
    },
    {
        name: "Frozen Apple",
        des: '',
        price: '',
    },
    {
        name: "Strawberry Mojito",
        des: '',
        price: '',
    },
    {
        name: "Frozen Pineapple",
        des: '',
        price: '',
    },
    {
        name: "Love 66",
        des: '',
        price: '',
    },
    {
        name: "Lady Killer",
        des: '',
        price: '',
    },
    {
        name: "Skittles",
        des: '',
        price: '',
    },
    {
        name: "Berry Bang",
        des: '',
        price: '',
    },
]

const Shisha = ({ }) => {
    return (
        <section className="w-full h-fit py-12 px-4 flex flex-col justify-center items-center gap-4">
            <p className="font-inter text-2xl md:text-5xl w-full max-w-[1300px] md:font-[200] text-primary">SHISHA</p>
            <div className="w-full max-w-[1300px] flex flex-col gap-4">
                <div className="w-full columns-1 md:columns-3 space-y-2 gap-3">
                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            SAVACCO £40
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {savacco.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            AL FAKHER £34
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {AlFakher.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            PREMIUM £36
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {premium.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VU VIP £150
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {vuvip.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VU VIP LASER £200
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {vuviplaser.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VIP SPECIAL MIXES
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {vuvipmixes.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            EXTRAS
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {vuvipmixes.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-base uppercase">{item?.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item?.des ? item?.des : ''}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item?.price ? item?.price : ''}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            <div className="w-full max-w-[1300px] flex flex-col gap-2">
                <p className="w-full font-opens text-[#6C7F85] font-[300] text-sm">Weekend Policy; 1 Shisha between 2. 2 Hours max smoke time per shisha. Want a flavour that’s not on menu? Ask a member of staff and we will endeavour to meet your requirement. </p>
                <p className="w-full font-opens text-[#6C7F85] font-[300] text-sm">A dicretionary service charge of 12.5% applies. </p>
            </div>
        </section>
    )
}

export default Shisha