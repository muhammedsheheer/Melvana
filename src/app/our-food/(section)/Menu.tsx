import Image from "next/image"

const sushispecials = [
    {
        name: "OMAKASI SASHIMI BOAT",
        des: "SALMON, TUNA, SEABASS, EBI PRAWN, SASHIMI 3PCS EACH AND CALIFORNIA ROLL(8PCS)",
        price: "45"
    },
    {
        name: "OMAKASI NIGIRI BOAT",
        des: "SALMON, TUNA, SEABASS, EBI PRAWN, NIGIRI 3PCS EACH AND CALIFORNIA ROLL(8PCS)",
        price: "45"
    },
    {
        name: "SUSHI PLATTER BOAT, SHARE FOR 2-3",
        des: "Avocado, Cucumber inside Out, Topped SALMON, TUNA, SEABASS, EBI PRAWN, SASHIMI (3PCS EACH) SALMON, TUNA, SEABASS, EBI PRAWN, NIGIRI (2PCS EACH) CALIFORNIA ROLL (8PCS) CALIFORNIA ROLL",
        price: "60"
    },
    {
        name: "DYNAMITE DON",
        des: "DEEP FRIED PRAWN SERVES WITH RICE, SPICY MAYO, TERI SAUCE CRISPY ONION",
        price: "22"
    },
]

const sushiappetiser = [
    {
        name: "KIMCHI",
        des: "KIMCHI, SPRING ONION",
        price: "4"
    },
    {
        name: "MISO SOUP",
        des: "TRADITIONAL JAPANESE SOUP, TUFO, DRIED SEAWEED, SPRING ONION",
        price: "4"
    },
    {
        name: "SALTED EDAMAME",
        des: "",
        price: "4"
    },
    {
        name: "SPICY EDAMAME",
        des: "",
        price: "4"
    },
    {
        name: "ROCKSHRIMP TEMPURA",
        des: "WITH A SPICY MAYO AND HONEY GLAZE",
        price: "13"
    },
    {
        name: "PRAWN TEMPURA",
        des: "WITH A PONZU DRESSING AND SPRING ONION, GRATED GINGER",
        price: "12"
    },
]

const starters = [
    {
        name: "BEEF SLIDERS",
        des: "THREE SLIDERS, MELTED CHEESE AND TRUFFLE MAYONNAISE",
        price: "18"
    },
    {
        name: "VU BBQ RIBS",
        des: "Short Beef Ribs with Barbecue Sauce",
        price: "22"
    },
    {
        name: "GRILLED HALLOUMI",
        des: "",
        price: "8"
    },
    {
        name: "BUFFALO WINGS",
        des: "Sweet & Spicy Wings sprinkled with Sesame Seeds",
        price: "9"
    },
    {
        name: "BBQ WINGS",
        des: "Sticky Glazed Wings Sprinkled with Sesame Seeds",
        price: "9"
    },
    {
        name: "CHICKEN KARRAGE",
        des: "Crispy Marinated Chicken",
        price: "12"
    },
    {
        name: "HUMMUS",
        des: "Boiled Chickpeas, Tahini and Olive Oil",
        price: ""
    },
    {
        name: "GARLIC PRAWNS",
        des: "Giant King prawns, Garlic and herb Butter with Lemon",
        price: "12"
    },
    {
        name: "MIX OLIVES",
        des: "TRADITIONAL MIX GREEK OLIVES",
        price: "6"
    },
    {
        name: "CRISPY CHICKEN TENDER",
        des: "MARINATED CHICKEN BREAST COATED IN SEASONED FLOUR WITH GARLIC YUZU MAYO WITH LIME CHAR",
        price: "14"
    },
]

const specialmains = [
    {
        name: "VU SPECIAL BEEF FILLET MIGNON",
        des: "250g - £50, 500g - £90, 1kg - £160",
        price: ""
    },
    {
        name: "VU MIXED GRILL",
        des: "Steak, Lamb Cutlets, Chicken Tikka, Chicken Wings, Lamb Kofte Served with Grilled Peppers and Tomato",
        price: "50"
    },
    {
        name: "VU MIXED GRILL FOR TWO PEOPLE",
        des: "Lokum Steak, Lamb Cutlets, Chicken Tikka, Chicken Wings, Lamb Kofte, Chicken Steak Served with Grilled Peppers, Tomato and Side Salad",
        price: "90"
    },
    {
        name: "LAMB SHOULDER",
        des: "SLOW COOKED LAMB SHOULDER WITH ROSEMARY ROASTED POTATO AND MIX VEGETABLES FOR 2-3",
        price: "85"
    },
]

const salads = [
    {
        name: "GOAT CHEESE SALAD",
        des: "Mixed Greens, Goat Cheese Pomegranate, Sweetcorn, Cherry Tomato and Mixed Sauce",
        price: "12"
    },
    {
        name: "SWEET CHILLI CHICKEN SALAD",
        des: "Romain Lettuce, Ribboned Cucumber, Avocado and Tomaotes in a Sweet Chilli Sauce",
        price: "19"
    },
    {
        name: "CEASAR SALAD",
        des: "Grilled Chicken Breast, Parmesan Cheese, Lettuce Croutons,Lemon Juice,Virgin Olive Oil and Caesar Salad Romaine Dressing",
        price: "12"
    },
    {
        name: "GREEK SALAD",
        des: "LETTUCE, SLICED CUCUMBERS, TOMATOES, RED ONION, OLIVES AND FETA CHEESE WITH OLIVE OIL",
        price: "12"
    },
]

const specialrolls = [
    {
        name: "SALMON CRUNCH",
        des: "SALMON, AVOCADO INSIDE OUT, WRAPPED WITH SALMON, TOPPED WITH MAYO, TERIYAKI SAUCE AND CRISPY ONION SAUCE",
        price: "14"
    },
    {
        name: "MANGO ROLL",
        des: "PRAWN AVOCADO INSIDE OUT, TOPPED WITH MANGO SHEET, TOBIKO SPICY MAYO",
        price: "16"
    },
    {
        name: "SUPER SPIDER ROLL",
        des: "SOFTSHELL CRAB AVOCADO CUCUMBER LETTUCE, WRAP WITH TOBIKO SPICY MAYO",
        price: "18"
    },
    {
        name: "VU SPECIAL ROLL",
        des: "TUNA SALMON SEABASS AVOCADO, INSIDE OUT DEEP FRIED, SPICY MAYO TERI SAUCE, TEMPURA FLAKES, TOBIKO",
        price: "20"
    },
]

const beefchar = [
    {
        name: "VU STEAK",
        des: "450-550g Porterhouse",
        price: "36"
    },
    {
        name: "NEW YORK STEAK",
        des: "270-300g Sirloin Steak",
        price: "28"
    },
    {
        name: "FILLET MIGNON",
        des: "230-250g Tenderloin Served with Asparagus",
        price: "36"
    },
    {
        name: "TOMAHAWK STEAK",
        des: "650 -750g Thicker Ribeye",
        price: "60"
    },
    {
        name: "DALLAS STEAK",
        des: "400-500g Ribeye on The Bone",
        price: "34"
    },
    {
        name: "LOKUM STEAK",
        des: "230-250g Sliced Fillet Mignon",
        price: "34"
    },
    {
        name: "SPICY RIBEY STEAK",
        des: "250/300g Served with Vu Spicy Sauce , Sesame Seeds ,Fried Onion and Pepper",
        price: "34"
    },
]

const lamb = [
    {
        name: "LAMB CHOPS",
        des: "250-270g, 5 Pieces Lamb Racks",
        price: "25"
    },
    {
        name: "LAMB KAFES",
        des: "800g-1kg, 12 Pieces Chops and Sirloin Side of Lamb",
        price: "55"
    },
    {
        name: "LAMB CHOPS CHIMICHURRI",
        des: "GRILLED LAMB CHOPS WITH MINT CHIMICHURRI AND PICKLED CUCUMBER",
        price: "26"
    },
    {
        name: "LAMB KOFTE KEBAB",
        des: "TWO SKEWERS LAMB KOFTA KEBAB WITH TURKISH BREAD AND FRIES",
        price: "18"
    },
]

const chickenserved = [
    {
        name: "CHICKEN STEAK",
        des: "TWO PIECES MARINATED CHICKEN BREAST WITH FRIES & MIXED SALAD",
        price: "18"
    },
    {
        name: "VU CHICKEN WINGS",
        des: "MARINATED CHICKEN WINGS SKEWER WITH FRIES & MIXED SALAD",
        price: "18"
    },
    {
        name: "CHICKEN TIKKA KEBAB",
        des: "MARINATED CHICKEN BREAST CUTLETS SKEWER WITH FRIES & MIXED SALAD",
        price: "19"
    },
    {
        name: "CHICKEN KATSU DON",
        des: "DEEP FRIED CHICKEN WITH BREADCRUMBS SERVES WITH RICE AND SPICY MAYO, TERI SAUCE. SPRING ONION",
        price: "21"
    },
    {
        name: "CHICKEN KATSU CURRY SIZZLING",
        des: "DEEP FRIED CHICKEN WITH BREADCRUMBS SERVES WITH RICE AND CURRY SAUCE",
        price: "24"
    },
]

const rolls = [
    {
        name: "VEG CRUNCH",
        des: "AVOCADO CUCUMBER CARROT TOPPED WITH SPICY MAYO TERI SAUCE CRISPY ONION",
        price: "13"
    },
    {
        name: "EL JOEY ROLL",
        des: "PRAWN CUCUMBER INSIDE OUT, TOPPED WITH SEARED EBI PRAWN SPICY MAYO, PISTACHIO",
        price: "16"
    },
    {
        name: "CALIFORNIA ROLL",
        des: "AVOCADO CUCUMBER INSIDE OUT TOPPED WITH SNOW CRAB, TOBIKO, MAYO, TERI SAUCE",
        price: "14"
    },
    {
        name: "FIRE ROLL",
        des: "SALMON, SEABASS, SPRING ONION INSIDE OUT TOPPED WITH SIRACHA SAUCE AND FRESH CHILLI.",
        price: "14"
    },
    {
        name: "RAINBOW ROLL",
        des: "AVOCADO CUCUMBER INSIDE OUT WRAPPED WITH SEARED SALMON, TUNA, EBI PRAWN AND SEABASS, TOPPED WITH MAYO, TOBIKO, KIZAMI WASABI",
        price: "18"
    },
    {
        name: "CHEF SPECIAL ROLL",
        des: "PRAWN AVOCADO INSIDE OUT, TOPPED WITH SEARED SALMON, TOBIKO SPICY TRI SAUCE TEMPURA FLAKES",
        price: "18"
    },
]

const Burgers = [
    {
        name: "VU BURGER",
        des: "Beef Patty, Pastrami, Red Onion, Tomato romaine lettuce ,with Cheese and Chipotle Sauce",
        price: "18"
    },
    {
        name: "VU KING BURGER",
        des: "2 Patties, Smoked Pastrami, Red Onion, Tomato,Romaine Lettuce, Pickles with Cheese and Chipotle Sauce",
        price: "26"
    },
    {
        name: "GRILLED CHICKEN BURGER",
        des: "AVOCADO CUCUMBER INSIDE OUT TOPPED WITH SNOW CRAB, TOBIKO, MAYO, TERI SAUCE",
        price: "14"
    },
    {
        name: "FIRE ROLL",
        des: "Tomato, Romaine lettuce , Salad with Cheese and Chipotle Sauce",
        price: "18"
    },
    {
        name: "GRILLED HALLOUMI BURGER",
        des: "Veggie Patty, Halloumi Cheese, Hummus, Tomato, Onion, Mixed Green Salad with Cheese Sauce",
        price: "14"
    },
]


const sides = [
    {
        name: "CHEESY FRIES",
        des: "French Fries with Special Cheese Sauce",
        price: "5"
    },
    {
        name: "GRILLED ASPARAGUS",
        des: "6 Pieces Char-grilled Asparagus, Olive Oil and Specialty Spices",
        price: "5"
    },
    {
        name: "TRUFFLE AND PARMESAN FRIES",
        des: "Truffe Mushroom Oil and Parmesan Cheese",
        price: "6"
    },
    {
        name: "MASHED POTATO",
        des: "Potato Puree Served with Specialty Spices",
        price: "6"
    },
    {
        name: "CHIPS",
        des: "Served with Specialty Spices",
        price: "4"
    },
    {
        name: "TURKISH BREAD",
        des: "",
        price: "5"
    },
    {
        name: "TENDERSTEM BROCCOLI",
        des: "",
        price: "5"
    },
    {
        name: "HALLOUMI CHIPS",
        des: "SLICED FRIED HALLOUMI",
        price: "6"
    },
    {
        name: "ROSEMARY ROASTED POTATOES",
        des: "",
        price: "7"
    },
    {
        name: "RICE",
        des: "PLAIN WHITE RICE, SESAME SEED",
        price: "6"
    },
    {
        name: "PENNY CORN COIN",
        des: "SWEET CORN TEMPURA WITH CHIPOTLE AND PONZU SAUCE ON THE SIDE",
        price: "6"
    },
]


const Menu = ({ }) => {
    return (
        <section className="w-full h-fit py-12 px-4 flex justify-center items-center">
            <div className="w-full max-w-[1300px] flex flex-col-reverse md:flex-row gap-4">
                <div className="w-full md:max-w-[975px] columns-1 md:columns-3 space-y-2 gap-3">

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            STARTERS
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {starters.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            SALADS
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {salads.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VU SPECIAL MAINS
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {specialmains.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VU SPECIAL ROLLS
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {specialrolls.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            BEEFCHAR - GRILL
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {beefchar.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>


                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            LAMB
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {lamb.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            CHICKEN SERVED
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {chickenserved.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            VU special rolls
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {rolls.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            BURGERS - ALL SERVED WITH FRIES
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {Burgers.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg break-inside-avoid-column">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            SIDES
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        {sides.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>


                </div>

                <div className="w-full md:max-w-[325px] flex flex-col gap-3">

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] border-[2px] border-primary shadow-lg rounded-xl">
                        <div className="relative uppercase text-xl font-inter font-[500] pb-2 text-primary w-fit">
                            24 CARAT GOLD
                            <div className="absolute w-full h-full left-0 top-0 flex justify-start items-end">
                                <div className="h-[1px] w-3/5 bg-primary"></div>
                            </div>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">VU KING BURGER</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">50</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">VU SPECIAL
                                    TOMAHAWK</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">180</p>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-primary font-opens font-[400] text-lg uppercase">LAMB CHOPS</p>
                            </div>
                            <p className="text-primary font-opens text-lg font-[400]">60</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <p className="uppercase text-xl font-inter font-[500] pb-2 border-b-[1px] border-b-primary text-primary w-fit">SAUCES - £1.50 EACH</p>
                        <div className="flex justify-between items-start" >
                            <div className="flex flex-col gap-1 items-start justify-start">
                                <p className="text-[#CCD8DC] font-opens font-[600] text-lg uppercase">MUSHROOM, PEPPERCORN, CHEESY, CHILLI , GARLIC, GARLIC BUTTER</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <p className="uppercase text-xl font-inter font-[500] pb-2 border-b-[1px] border-b-primary text-primary w-fit">vU Shushi Specials</p>
                        {sushispecials.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col gap-4 py-7 px-10 bg-[#0a1214] shadow-lg">
                        <p className="uppercase text-xl font-inter font-[500] pb-2 border-b-[1px] border-b-primary text-primary w-fit">SUSHI APPETISER</p>
                        {sushiappetiser.map((item, index) => (
                            <div className="flex justify-between items-start" key={index}>
                                <div className="flex flex-col gap-1 items-start justify-start">
                                    <p className="text-[#CCD8DC] font-opens font-[400] text-lg uppercase">{item.name}</p>
                                    <p className="font-opens text-[#6C7F85] font-[300] max-w-[300px] text-sm">{item.des}</p>
                                </div>
                                <p className="text-[#CCD8DC] font-opens text-lg font-[400]">{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex flex-col shadow-lg">
                        <Image
                            src='/images/menu/1.jpg'
                            width={412}
                            height={515}
                            alt="food"
                            className="h-auto"
                        />
                    </div>
                    <div className="w-full flex flex-col shadow-lg">
                        <Image
                            src='/images/menu/2.jpg'
                            width={412}
                            height={515}
                            alt="food"
                            className="h-auto"
                        />
                    </div>
                    {/* <div className="w-full flex flex-col shadow-lg">
                        <Image
                            src='/images/menu/food2.jpg'
                            width={5849}
                            height={3893}
                            alt="food"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col shadow-lg">
                        <Image
                            src='/images/menu/food3.jpg'
                            width={5849}
                            height={3893}
                            alt="food"
                            className="object-cover"
                        />
                    </div>
                    <div className="w-full flex flex-col shadow-lg">
                        <Image
                            src='/images/menu/DSC03610.png'
                            width={5849}
                            height={3893}
                            alt="food"
                            className="object-cover"
                        />
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Menu