/* Old Africa Adventures — destination content
   One entry per destination. destination-detail.html reads the "place"
   URL parameter (e.g. destination-detail.html?place=tsavo) and looks up
   the matching entry here to fill in the page. Add a new destination by
   adding a new object below — no new HTML file needed. */

const OAA_DESTINATIONS = {
    "maasai-mara": {
        name: "Maasai Mara",
        seed: "maasaimara",
        image: "assets/images/lion watching camera.jpg",
        gallery: [],

        // --- Rich content (optional — used if present, page falls back to the
        // simpler fields below when a destination doesn't have these yet) ---
        eyebrowTag: "Kenya · Wildlife · Great Migration · Maasai Culture",
        heroTitle: "Where the Wild Still Runs Free",
        heroSubtitle: "Golden savannahs. Roaming elephants. Lions beneath endless skies. And, for a few extraordinary months each year, the spectacle of the Great Migration.",
        aboutHeading: "Welcome to Kenya's Wild Heart",

        moments: [
            { emoji: "🦁", title: "The Big Five", text: "Encounter lions, elephants, buffalo, leopards and rhinos in their natural environment." },
            { emoji: "🐃", title: "The Great Migration", text: "Witness one of nature's greatest spectacles as enormous herds cross the Mara ecosystem." },
            { emoji: "🎈", title: "Sunrise From Above", text: "Take to the skies on a hot-air balloon safari and watch the savannah wake beneath you." },
            { emoji: "🛖", title: "Maasai Culture", text: "Meet local communities and learn about traditions, livelihoods and life alongside the wildlife." },
            { emoji: "🌅", title: "Endless Golden Skies", text: "Early mornings and evenings in the Mara offer some of Kenya's most unforgettable landscapes." }
        ],

        seasons: [
            { range: "JULY — OCTOBER", title: "Migration Season", text: "The classic Mara experience. Large herds move through the ecosystem, with dramatic river crossings possible during the migration period.", bestFor: ["Great Migration", "Wildlife viewing", "First-time safari"] },
            { range: "JANUARY — MARCH", title: "Calving & Green Season", text: "The landscape can be greener and quieter, while young animals arrive during the calving period.", bestFor: ["Photography", "Predators", "Fewer crowds"] },
            { range: "APRIL — JUNE", title: "Green Season", text: "Lush landscapes, fewer visitors and a different side of the Mara.", bestFor: ["Quiet safaris", "Landscapes", "Value-conscious travellers"] },
            { range: "NOVEMBER — DECEMBER", title: "Short Rains", text: "The rains can bring fresh vegetation and dramatic skies while wildlife remains abundant.", bestFor: ["Photography", "Green landscapes", "Fewer crowds"] }
        ],

        photography: {
            big: "",   // leave empty to use the "gallery" photos above instead
            small: []
        },

        tagline: "Wildlife &amp; the Great Migration — Kenya's most iconic reserve.",
        about: [
            "Few places capture the spirit of an African safari quite like the Maasai Mara.",
            "Stretching across vast golden grasslands in southwestern Kenya, the Mara is a landscape where wildlife and wilderness seem to move together. Lions patrol the plains, elephants wander beneath acacia trees, and great herds gather across the horizon.",
            "Between July and October, the reserve becomes part of the legendary Great Migration, as enormous herds of wildebeest and zebra move north from the Serengeti in search of fresh grazing.",
            "But you don't have to visit during the migration to experience the magic. The Mara offers extraordinary wildlife viewing throughout the year, spectacular sunrises and sunsets, and opportunities to experience the culture and traditions of communities living alongside this remarkable ecosystem."
        ],
        highlights: [
            "The Big Five: lion, leopard, elephant, buffalo, rhino",
            "The Great Migration river crossings (Jul–Oct)",
            "Hot air balloon safaris at sunrise",
            "Guided visits to Maasai villages"
        ],
        bestTime: "<strong>July – October</strong> for the migration and driest weather. <strong>January – March</strong> for calving season and quieter parks.",
        tours: [
            { name: "3 Day Maasai Mara Safari", slug: "maasai-mara-safari", price: "From $450 / person" },
            { name: "Maasai Cultural Tour", slug: "maasai-cultural-tour", price: "From $290 / person" }
        ]
    },
    "amboseli": {
        name: "Amboseli",
        seed: "amboseli",
        image: "https://imgs.search.brave.com/_oM7yoa2QRw6SQCLp9CEsITJxlAK_-d-849bzXVXXik/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uYXRp/b25hbC1wYXJrcy5v/cmcvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMTAvQW1ib3Nl/bGktTmF0aW9uYWwt/UGFyay1zYWZhcmlf/NTcxMDU1NjUwLmpw/Zw",
        gallery: [],

        eyebrowTag: "Kenya · Elephants · Kilimanjaro · Big Five",
        heroTitle: "Beneath Africa's Tallest Mountain",
        heroSubtitle: "Wide open plains, some of the largest elephant herds on Earth, and the unmistakable silhouette of Kilimanjaro on the horizon.",
        aboutHeading: "Where the Plains Meet the Mountain",

        moments: [
            { emoji: "🐘", title: "Elephant Herds", text: "Watch some of Africa's largest and most famous elephant families move across the plains." },
            { emoji: "🏔️", title: "Kilimanjaro Views", text: "Wake up to Africa's tallest peak framing every sunrise game drive." },
            { emoji: "🦩", title: "Swamps &amp; Birdlife", text: "Explore seasonal wetlands rich with birdlife, hippos and grazing wildlife." },
            { emoji: "📸", title: "Iconic Photography", text: "Capture some of the most photographed wildlife landscapes in the world." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER", title: "Dry Season", text: "The clearest Kilimanjaro views and the easiest wildlife viewing, as animals gather near remaining water sources.", bestFor: ["Kilimanjaro views", "Wildlife viewing", "First-time safari"] },
            { range: "NOVEMBER — MAY", title: "Green Season", text: "Lusher landscapes and fewer crowds, with the mountain often clearest in the early morning before clouds build.", bestFor: ["Photography", "Fewer crowds", "Birdlife"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Elephants and scenic views — Africa's most iconic Kilimanjaro backdrop.",
        about: [
            "Amboseli National Park sits in the shadow of Mount Kilimanjaro, Africa's tallest peak, making it one of the most photographed landscapes on the continent. Its open plains and swamps support some of Kenya's largest and best-studied elephant herds.",
            "With minimal vegetation cover, wildlife sightings here are exceptional — you'll often see lion, buffalo, giraffe and hundreds of bird species against that unmistakable snow-capped skyline."
        ],
        highlights: [
            "Iconic views of Mount Kilimanjaro",
            "Large, free-ranging elephant herds",
            "Observation Hill panoramic viewpoint",
            "Rich birdlife across seasonal swamps"
        ],
        bestTime: "<strong>June – October</strong> for clear Kilimanjaro views and easy game viewing, though the mountain can appear year-round in the early morning.",
        tours: [
            { name: "5 Day Amboseli Explorer", slug: "amboseli-explorer", price: "From $680 / person" },
            { name: "Amboseli Day Trip", slug: "amboseli-day-trip", price: "From $220 / person" }
        ]
    },
    "tsavo": {
        name: "Tsavo",
        seed: "tsavo",
        image: "assets/images/tsavoelephantwatch.jpg",
        gallery: [],

        eyebrowTag: "Kenya · Red Elephants · Vast Wilderness · Big Five",
        heroTitle: "Kenya's Largest, Wildest Frontier",
        heroSubtitle: "Red-dusted elephants, ancient lava flows and a wilderness so vast it swallows the horizon — this is safari at its rawest.",
        aboutHeading: "Welcome to Kenya's Untamed Giant",

        moments: [
            { emoji: "🐘", title: "Red Elephants", text: "Watch herds dust-bathe in Tsavo's red volcanic soil, giving them their famous rust-coloured hide." },
            { emoji: "💧", title: "Mzima Springs", text: "Peer through an underwater viewing chamber at hippos and fish in crystal-clear spring water." },
            { emoji: "🌋", title: "Volcanic Landscapes", text: "Explore the Shetani lava flows and Chaimu Crater, remnants of relatively recent volcanic activity." },
            { emoji: "🦏", title: "Ngulia Rhino Sanctuary", text: "Visit a fenced sanctuary protecting one of Kenya's key black rhino populations." },
            { emoji: "🏞️", title: "Yatta Plateau", text: "See the world's longest lava flow, a striking ridge running for over 290km above the Athi River." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER", title: "Dry Season", text: "Wildlife concentrates near the Galana River and Mzima Springs, making this the easiest and most rewarding time to visit.", bestFor: ["Wildlife viewing", "Red elephants", "First-time safari"] },
            { range: "JANUARY — FEBRUARY", title: "Short Dry Spell", text: "Warm, clear days between the rains with good visibility and fewer visitors than the July peak.", bestFor: ["Photography", "Fewer crowds"] },
            { range: "MARCH — MAY", title: "Long Rains", text: "Lush scenery and migratory birds arrive, though some park roads become harder to access.", bestFor: ["Birdwatching", "Green landscapes", "Value travel"] },
            { range: "NOVEMBER — DECEMBER", title: "Short Rains", text: "Fresh vegetation and quieter parks as the landscape greens up again after the dry season.", bestFor: ["Green season", "Quiet safaris"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Raw beauty, vast wilderness — Kenya's largest protected wildlife area.",
        about: [
            "Split into Tsavo East and Tsavo West, this is Kenya's largest national park — a rugged, sun-baked wilderness of red-earth plains, ancient lava flows and the free-flowing Galana River. It's famous for its red-dusted \u201cred elephants\u201d and some of the country's most dramatic, untouched scenery.",
            "Tsavo sees far fewer visitors than the Mara, so game drives feel wilder and more remote — ideal for travellers who want space and solitude alongside the wildlife."
        ],
        highlights: [
            "Free-roaming herds of red-dusted elephants",
            "Mzima Springs' crystal-clear pools and hippos",
            "Lugard Falls and the Galana River",
            "Ancient baobab trees and volcanic landscapes"
        ],
        bestTime: "<strong>June – October</strong> (dry season) for the easiest wildlife viewing, or <strong>January – February</strong> for warm, quiet days between the rains.",
        tours: [
            { name: "4 Day Tsavo Adventure", slug: "tsavo-adventure", price: "From $580 / person" },
            { name: "Tsavo &amp; Amboseli Combo", slug: "tsavo-amboseli-combo", price: "From $760 / person" }
        ]
    },
    "lake-nakuru": {
        name: "Lake Nakuru",
        seed: "lakenakuru",
        image: "",
        gallery: [],

        eyebrowTag: "Kenya · Flamingos · Rhino Sanctuary · Rift Valley",
        heroTitle: "A Rift Valley Jewel of Pink and Green",
        heroSubtitle: "A shimmering soda lake, a fortress for black and white rhino, and some of Kenya's most rewarding short safaris.",
        aboutHeading: "Welcome to Kenya's Compact Wildlife Haven",

        moments: [
            { emoji: "🦩", title: "Flamingo Flocks", text: "See lesser and greater flamingos gather along the shore, in numbers that shift with the lake's water levels." },
            { emoji: "🦏", title: "Rhino Sanctuary", text: "Visit one of Kenya's most reliable places to see both black and white rhino, protected inside a predator-proof fence." },
            { emoji: "🦒", title: "Rothschild's Giraffe", text: "Spot this endangered giraffe subspecies, introduced to the park as part of a conservation programme." },
            { emoji: "🌄", title: "Baboon Cliff", text: "Take in a sweeping panoramic view over the lake and the surrounding Rift Valley escarpment." },
            { emoji: "🐆", title: "Elusive Leopards", text: "Patient visitors stand a genuine chance of a leopard sighting in the park's acacia woodland." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER, JANUARY — FEBRUARY", title: "Dry Season", text: "Clearer roads and easier wildlife viewing around the lakeshore and woodland trails.", bestFor: ["Rhino tracking", "Wildlife viewing", "Day trips"] },
            { range: "MARCH — MAY, NOVEMBER — DECEMBER", title: "Rainy Season", text: "Lush greenery, migratory birds and softer light, ideal for photography.", bestFor: ["Birdwatching", "Photography", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Flamingos and a rhino sanctuary within a compact, scenic park.",
        about: [
            "Lake Nakuru National Park surrounds a shallow soda lake famous for the flocks of flamingos that gather along its shores. Fenced for protection, the park is also one of Kenya's most reliable places to see both black and white rhino.",
            "Its compact size makes it an easy add-on to a longer itinerary, with excellent viewpoints, acacia woodland, and a good chance of leopard sightings for patient visitors."
        ],
        highlights: [
            "Flamingo flocks along the lake shore (season-dependent)",
            "Black and white rhino sanctuary",
            "Baboon Cliff scenic viewpoint",
            "Compact park, easy to combine with other routes"
        ],
        bestTime: "Flamingo numbers vary with water levels, but the park offers strong wildlife viewing <strong>year-round</strong>; drier months (Jun–Oct, Jan–Feb) give the easiest access.",
        tours: [
            { name: "Lake Nakuru Day Safari", slug: "lake-nakuru-day-safari", price: "From $180 / person" },
            { name: "Rift Valley Lakes Tour", slug: "rift-valley-lakes-tour", price: "From $520 / person" }
        ]
    },
    "diani-beach": {
        name: "Diani Beach",
        seed: "dianibeach",
        image: "",
        gallery: [],

        eyebrowTag: "Kenya · Indian Ocean · Coral Reef · South Coast",
        heroTitle: "Kenya's Postcard Coastline",
        heroSubtitle: "Powder-white sand, warm turquoise water and a coral reef just offshore — the perfect place to unwind after the dust of a safari.",
        aboutHeading: "Welcome to Kenya's South Coast",

        moments: [
            { emoji: "🏖️", title: "Award-Winning Beach", text: "Diani has repeatedly been named Africa's leading beach destination at the World Travel Awards." },
            { emoji: "🤿", title: "Coral Reef Snorkelling", text: "Explore a vibrant reef just offshore, part of the protected Diani-Chale Marine Reserve." },
            { emoji: "🐒", title: "Colobus Monkeys", text: "Spot the endangered Angolan colobus swinging through the beachside forest canopy." },
            { emoji: "⛵", title: "Wasini Island Dhow Trips", text: "Sail to Wasini Island for dolphin watching and a fresh seafood lunch aboard a traditional dhow." },
            { emoji: "🦌", title: "Shimba Hills Day Trip", text: "Visit the nearby reserve, one of the few places in Kenya to see the rare sable antelope." }
        ],

        seasons: [
            { range: "DECEMBER — MARCH", title: "Hot & Dry", text: "Warm, sunny days and calm seas make this the busiest and most popular beach season.", bestFor: ["Beach holidays", "Snorkelling", "Honeymoons"] },
            { range: "JULY — OCTOBER", title: "Cool & Dry", text: "Pleasant temperatures with the Kusi trade winds, good conditions for kitesurfing.", bestFor: ["Kitesurfing", "Diving", "Safari & beach combos"] },
            { range: "APRIL — JUNE", title: "Long Rains", text: "Quieter beaches and the lowest rates of the year, though some rain should be expected.", bestFor: ["Value travel", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "White sands and turquoise waters on Kenya's south coast.",
        about: [
            "Diani Beach is Kenya's best-known stretch of coastline — kilometres of powder-white sand, warm Indian Ocean waters, and a coral reef just offshore that's ideal for snorkelling and diving.",
            "It's the perfect place to unwind after a safari, with a relaxed beach-town atmosphere, fresh seafood, and easy day trips to nearby Wasini Island and the Shimba Hills."
        ],
        highlights: [
            "Powder-white sand and calm, warm waters",
            "Snorkelling and diving on the coral reef",
            "Dolphin and whale-shark excursions (seasonal)",
            "Day trips to Wasini Island and Shimba Hills"
        ],
        bestTime: "<strong>December – March</strong> and <strong>July – October</strong> for the driest, sunniest beach weather.",
        tours: [
            { name: "3 Day Diani Beach Escape", slug: "diani-beach-escape", price: "From $580 / person" },
            { name: "Safari &amp; Beach Combo", slug: "safari-beach-combo", price: "From $1,150 / person" }
        ]
    },
    "mt-kenya": {
        name: "Mt. Kenya",
        seed: "mtkenya",
        image: "",
        gallery: [],

        eyebrowTag: "Kenya · Trekking · Alpine Peaks · UNESCO Site",
        heroTitle: "Africa's Quieter Giant",
        heroSubtitle: "Glacial peaks, five vegetation zones and a summit trek that needs no ropes — Mount Kenya rewards those who look past Kilimanjaro.",
        aboutHeading: "Welcome to Kirinyaga, the Mountain of Brightness",

        moments: [
            { emoji: "🏔️", title: "Point Lenana Summit", text: "Reach 4,985m on a trek that requires no technical climbing, just fitness and acclimatisation." },
            { emoji: "🌲", title: "Five Vegetation Zones", text: "Walk from montane forest through bamboo and moorland to bare alpine rock in just a few days." },
            { emoji: "🧊", title: "Equatorial Glaciers", text: "See the last remaining ice fields on the equator, though they are shrinking rapidly with climate change." },
            { emoji: "🐒", title: "Forest Wildlife", text: "Elephant, buffalo and colobus monkeys roam the mountain's lower forested slopes." },
            { emoji: "🛖", title: "Sacred Kirinyaga", text: "Learn why the mountain is revered by the Kikuyu, Meru and Embu peoples as a sacred, life-giving presence." }
        ],

        seasons: [
            { range: "JANUARY — FEBRUARY, AUGUST — SEPTEMBER", title: "Dry Season", text: "The clearest skies and firmest trails, the best window for summit attempts.", bestFor: ["Summit treks", "Photography", "Clear views"] },
            { range: "JUNE — JULY", title: "Cool Dry Spell", text: "Crisp mornings and good visibility, slightly quieter than the peak trekking months.", bestFor: ["Fewer crowds", "Trekking"] },
            { range: "MARCH — MAY, OCTOBER — DECEMBER", title: "Rainy Season", text: "Trails can be muddy and slippery, with limited visibility higher up the mountain.", bestFor: ["Lower-altitude forest walks"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Adventure and alpine beauty on Africa's second-highest peak.",
        about: [
            "Mount Kenya rises to 5,199m and offers some of East Africa's best high-altitude trekking, without the crowds of Kilimanjaro. Its slopes move through montane forest, bamboo, moorland and dramatic glacial peaks in just a few days' walk.",
            "Multiple routes suit different fitness levels and timeframes, from a challenging summit push to gentler multi-day treks that still reach striking alpine scenery."
        ],
        highlights: [
            "Trekking routes for all experience levels",
            "Point Lenana summit trek (no technical climbing required)",
            "Unique afro-alpine flora and glacial lakes",
            "Forest zone wildlife including elephant and colobus monkeys"
        ],
        bestTime: "<strong>January – February</strong> and <strong>August – September</strong> for the driest, clearest trekking conditions.",
        tours: [
            { name: "6 Day Mt. Kenya Climb", slug: "mt-kenya-climb", price: "From $900 / person" },
            { name: "3 Day Foothills Trek", slug: "mt-kenya-foothills-trek", price: "From $410 / person" }
        ]
    },
    "nairobi-national-park": {
        name: "Nairobi National Park",
        seed: "nairobinp",
        image: "assets/images/girrafeacrossnairobinationalpark.jpg",
        gallery: [],

        eyebrowTag: "Kenya · Nairobi · Rhino Sanctuary · City Safari",
        heroTitle: "Safari Without Leaving the City",
        heroSubtitle: "Lions, rhino and giraffe grazing with Nairobi's skyline on the horizon — the only national park in the world bordering a capital city.",
        aboutHeading: "Welcome to the World's Only Capital-City Safari",

        moments: [
            { emoji: "🦁", title: "Lions With a Skyline", text: "Spot big cats with Nairobi's skyscrapers rising in the background, a view found nowhere else on Earth." },
            { emoji: "🦏", title: "Black Rhino Sanctuary", text: "See one of Kenya's highest-density black rhino populations, protected within the park's boundaries." },
            { emoji: "🐘", title: "Sheldrick Elephant Orphanage", text: "Visit the world-famous elephant and rhino nursery run by the Sheldrick Wildlife Trust at the park's edge." },
            { emoji: "🚗", title: "Half-Day Safari", text: "Game-drive before breakfast and be back in the city centre by lunch — safari on a tight schedule." },
            { emoji: "🦓", title: "Athi-Kapiti Plains Migration", text: "Wildebeest and zebra move through the park's unfenced southern boundary during the dry season." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER", title: "Dry Season", text: "Short grass makes wildlife easy to spot, and migratory wildebeest move through from the Kapiti plains.", bestFor: ["Wildlife viewing", "Photography"] },
            { range: "YEAR-ROUND", title: "Easy Access", text: "As a half-day trip from the city, the park is worthwhile in any season, with a different mood in the rains.", bestFor: ["Short stopovers", "Layovers", "Any time of year"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "The only national park bordering a capital city — wildlife with a skyline backdrop.",
        about: [
            "Just minutes from downtown Nairobi, this compact park offers the surreal experience of spotting lions, giraffes and rhinos with the city's skyscrapers rising in the distance.",
            "It's the easiest safari in Kenya to fit into a short stay — a half-day game drive is enough to see the Big Four (leopards are elusive but present) without ever leaving the capital."
        ],
        highlights: [
            "Black rhino sanctuary",
            "City skyline backdrop unlike anywhere else",
            "Sheldrick Wildlife Trust elephant orphanage nearby",
            "Easy half-day game drives from the city"
        ],
        bestTime: "<strong>June – October</strong> for the driest game viewing, though it's a rewarding half-day trip year-round.",
        tours: [
            { name: "Half-Day Nairobi National Park Safari", slug: "nairobi-national-park-safari", price: "From $120 / person" },
            { name: "Nairobi Park &amp; Elephant Orphanage", slug: "nairobi-park-elephant-orphanage", price: "From $150 / person" }
        ]
    },
    "samburu": {
        name: "Samburu National Reserve",
        seed: "samburu",
        image: "assets/images/impalasinsamburureserve.jpg",
        gallery: [],

        eyebrowTag: "Kenya · Special Five · Ewaso Nyiro · Northern Frontier",
        heroTitle: "Kenya's Wild Northern Frontier",
        heroSubtitle: "Rugged, sun-baked landscapes along the Ewaso Nyiro River, home to species found almost nowhere else in Kenya.",
        aboutHeading: "Welcome to the Land North of the Equator",

        moments: [
            { emoji: "🦓", title: "The Samburu Special Five", text: "Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx and Somali ostrich, found almost nowhere else in Kenya." },
            { emoji: "🐘", title: "Elephant Research Hub", text: "Home to Save the Elephants, a pioneering elephant research organisation founded here in the 1990s." },
            { emoji: "🌊", title: "Ewaso Nyiro Riverside", text: "Game drives along the river draw wildlife from the surrounding dry country, especially in the dry season." },
            { emoji: "🛖", title: "Samburu Culture", text: "Visit villages of the Samburu people, close cultural cousins of the Maasai, and learn their traditions." },
            { emoji: "🦁", title: "Big Cats in Dry Country", text: "Lions, leopards and cheetah are all regularly seen despite the arid, semi-desert landscape." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER, JANUARY — FEBRUARY", title: "Dry Season", text: "Wildlife concentrates along the Ewaso Nyiro River, the easiest and most rewarding time to visit.", bestFor: ["Wildlife viewing", "Riverside game drives", "First-time safari"] },
            { range: "MARCH — MAY, NOVEMBER — DECEMBER", title: "Rainy Season", text: "A greener, quieter reserve with fewer vehicles, though some roads can be affected by rain.", bestFor: ["Fewer crowds", "Birdwatching"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Rugged northern Kenya, home to species found nowhere else in the country.",
        about: [
            "North of the equator, Samburu's semi-arid landscape and the Ewaso Nyiro River support a distinct set of wildlife found in few other Kenyan parks — the so-called 'Samburu Special Five'.",
            "It's also home to the Samburu people, close cultural relatives of the Maasai, whose vibrant traditions add another layer to a visit here."
        ],
        highlights: [
            "The 'Samburu Special Five': Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, Beisa oryx",
            "Riverside game viewing along the Ewaso Nyiro",
            "Samburu cultural visits",
            "Far fewer crowds than the Mara"
        ],
        bestTime: "<strong>June – October</strong> and <strong>January – February</strong> for the easiest wildlife viewing along the river.",
        tours: [
            { name: "3 Day Samburu Safari", slug: "samburu-safari", price: "From $520 / person" },
            { name: "Samburu &amp; Maasai Mara Combo", slug: "samburu-maasai-mara-combo", price: "From $890 / person" }
        ]
    },
    "lake-bogoria": {
        name: "Lake Bogoria",
        seed: "lakebogoria",
        image: "assets/images/birdfrlyingoverlakebogoria.jpg",
        gallery: [],

        eyebrowTag: "Kenya · Hot Springs · Flamingos · Rift Valley",
        heroTitle: "Where the Rift Valley Boils Over",
        heroSubtitle: "Steaming geysers, cliff-lined shores and vast flocks of flamingos on one of Kenya's most dramatic soda lakes.",
        aboutHeading: "Welcome to Kenya's Geothermal Wonder",

        moments: [
            { emoji: "♨️", title: "Boiling Hot Springs", text: "Geysers erupt along the lakeshore, some jetting several metres into the air." },
            { emoji: "🦩", title: "Lesser Flamingo Flocks", text: "One of the largest concentrations of lesser flamingos anywhere in the Rift Valley." },
            { emoji: "🏞️", title: "Siracho Escarpment", text: "Dramatic cliffs frame the lake along its eastern edge, backdropping every photo." },
            { emoji: "🦌", title: "Greater Kudu", text: "A rare and striking antelope sighting for visitors who explore beyond the shoreline." },
            { emoji: "🌍", title: "UNESCO World Heritage Status", text: "Part of the Kenya Lake System, recognised for its outstanding ecological importance." }
        ],

        seasons: [
            { range: "YEAR-ROUND", title: "Flamingo Viewing", text: "Flamingo numbers shift between Bogoria, Nakuru and Elementaita depending on lake conditions, with July–October often strongest here.", bestFor: ["Flamingos", "Photography", "Day trips"] },
            { range: "JUNE — OCTOBER, JANUARY — FEBRUARY", title: "Dry Season", text: "The easiest road access to the reserve and the clearest views of the hot springs.", bestFor: ["Hot springs", "Easy access", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Steaming hot springs and one of Kenya's largest flamingo populations.",
        about: [
            "Lake Bogoria is a dramatic Rift Valley soda lake ringed by cliffs, best known for its geysers, hot springs, and the huge flocks of lesser flamingos that gather along its shores.",
            "It's a quieter, less-visited alternative to Lake Nakuru for flamingo viewing, with a striking, almost otherworldly landscape."
        ],
        highlights: [
            "Boiling hot springs and geysers",
            "Large flamingo populations",
            "Dramatic Rift Valley escarpment views",
            "Greater kudu sightings"
        ],
        bestTime: "<strong>Year-round</strong>, though flamingo numbers are typically highest between <strong>July and October</strong>.",
        tours: [
            { name: "Lake Bogoria Day Trip", slug: "lake-bogoria-day-trip", price: "From $160 / person" },
            { name: "Rift Valley Lakes Tour", slug: "rift-valley-lakes-tour", price: "From $520 / person" }
        ]
    },
    "lake-naivasha": {
        name: "Lake Naivasha",
        seed: "lakenaivasha",
        image: "",
        gallery: [],

        eyebrowTag: "Kenya · Hippos · Boat Safaris · Rift Valley",
        heroTitle: "A Freshwater Escape in the Rift Valley",
        heroSubtitle: "Hippo-filled waters, a predator-free island you can walk across, and one of Kenya's easiest weekend escapes from Nairobi.",
        aboutHeading: "Welcome to Kenya's Freshwater Rift Lake",

        moments: [
            { emoji: "🚤", title: "Hippo Boat Safaris", text: "Glide past resting pods of hippos and fish eagles diving for prey along the shoreline." },
            { emoji: "🦒", title: "Crescent Island Walk", text: "Stroll freely among giraffe, zebra and waterbuck on this predator-free peninsula." },
            { emoji: "🌹", title: "Flower Farm Country", text: "The lake's fertile shores support one of the world's largest rose-export industries." },
            { emoji: "🏡", title: "Elsamere", text: "Visit Joy Adamson's former home, now a conservation centre and museum on the lakeshore." },
            { emoji: "🌋", title: "Mount Longonot Nearby", text: "An easy add-on hike around the rim of a dormant volcanic crater close to the lake." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER, JANUARY — FEBRUARY", title: "Dry Season", text: "Calm water for boat safaris and clear views across to the escarpment.", bestFor: ["Boat safaris", "Photography", "Weekend trips"] },
            { range: "MARCH — MAY, NOVEMBER — DECEMBER", title: "Rainy Season", text: "Greener scenery and quieter trails, though water levels can affect the shoreline.", bestFor: ["Birdwatching", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "A freshwater lake ringed by wildlife, flower farms and boat safaris.",
        about: [
            "Just under two hours from Nairobi, Lake Naivasha is a freshwater Rift Valley lake known for boat safaris among pods of hippos, walking safaris in nearby Hell's Gate, and its vibrant birdlife.",
            "The surrounding area is also one of Kenya's main flower-growing regions, and a popular weekend escape for Nairobi residents."
        ],
        highlights: [
            "Boat safaris among hippos and fish eagles",
            "Crescent Island walking safari",
            "Close to Hell's Gate National Park",
            "Easy weekend trip from Nairobi"
        ],
        bestTime: "<strong>Year-round</strong> destination; driest and clearest from <strong>June to October</strong>.",
        tours: [
            { name: "Lake Naivasha Boat Safari", slug: "lake-naivasha-boat-safari", price: "From $140 / person" },
            { name: "Naivasha &amp; Hell's Gate Combo", slug: "naivasha-hells-gate-combo", price: "From $210 / person" }
        ]
    },
    "hells-gate": {
        name: "Hell's Gate National Park",
        seed: "hellsgate",
        image: "https://imgs.search.brave.com/oCNYjXZEvSf0mGuvxtubvLmuNcsScdNGk8gW7BlV8tY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2hhZG93c29mYWZy/aWNhLmNvbS9tZWRp/YS9jYXRhbG9nL3By/b2R1Y3QvY2FjaGUv/MS9pbWFnZS85MDB4/LzA0MGVjMDliMWUz/NWRmMTM5NDMzODg3/YTk3ZGFhNjZmL2gv/ZS9oZWxsX3NfZ2F0/ZV9rZW55YV8xLmpw/Zw",
        gallery: [],

        eyebrowTag: "Kenya · Cycling · Gorge Hiking · Rift Valley",
        heroTitle: "The Park You Explore on Foot",
        heroSubtitle: "Towering red cliffs, a narrow gorge and one of the few places in Kenya where you can walk or cycle freely among wildlife.",
        aboutHeading: "Welcome to Hell's Gate",

        moments: [
            { emoji: "🚴", title: "Cycle or Walk Among Wildlife", text: "One of the only Kenyan parks where you can explore on foot or by bike without a vehicle." },
            { emoji: "🧗", title: "Fischer's Tower", text: "A volcanic plug popular with rock climbers, rising dramatically from the valley floor." },
            { emoji: "🏜️", title: "Hell's Gate Gorge", text: "A narrow, red-walled gorge explored on foot with a local guide, best before the rains." },
            { emoji: "⚡", title: "Olkaria Geothermal Plant", text: "See Africa's largest geothermal power station, harnessing the valley's volcanic heat." },
            { emoji: "🎬", title: "The Lion King Inspiration", text: "The park's cliffs and volcanic plugs reportedly inspired Disney's animators." }
        ],

        seasons: [
            { range: "JUNE — OCTOBER, JANUARY — FEBRUARY", title: "Dry Season", text: "Firm trails for cycling and hiking, with the clearest conditions in the gorge.", bestFor: ["Cycling", "Gorge hiking", "Rock climbing"] },
            { range: "MARCH — MAY, NOVEMBER — DECEMBER", title: "Rainy Season", text: "The gorge can flood quickly and become unsafe to enter during and after rain.", bestFor: ["Wildlife drives", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Dramatic cliffs and gorges — one of the only parks you can explore on foot or by bike.",
        about: [
            "Named for the narrow, steep-walled gorge that early explorers thought resembled the entrance to hell, this park is famous for letting visitors walk or cycle freely among zebra, giraffe and buffalo — no vehicle required.",
            "Its towering red cliffs, volcanic plugs and geothermal features also inspired the landscapes of Disney's The Lion King."
        ],
        highlights: [
            "Walking and cycling safaris among wildlife",
            "Hell's Gate Gorge hiking",
            "Fischer's Tower rock climbing",
            "Geothermal spa at the park's edge"
        ],
        bestTime: "<strong>June – October</strong> for the coolest, driest hiking and cycling conditions.",
        tours: [
            { name: "Hell's Gate Cycling Safari", slug: "hells-gate-cycling-safari", price: "From $130 / person" },
            { name: "Naivasha &amp; Hell's Gate Combo", slug: "naivasha-hells-gate-combo", price: "From $210 / person" }
        ]
    },
    "aberdare": {
        name: "Aberdare National Park",
        seed: "aberdare",
        image: "https://imgs.search.brave.com/KJNhg4wiMfr6z6Itb9-JDMgeDSBng7JXsXkB-zzU2FA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2VueWF0b3VyaXNt/LmluL2ltYWdlcy9h/YmVyZGFyZS1uYXRp/b25hbC1wYXJrLmpw/Zw",
        gallery: [],

        eyebrowTag: "Kenya · Tree Hotels · Waterfalls · Highland Forest",
        heroTitle: "Highland Mists and Legendary Tree Hotels",
        heroSubtitle: "Cascading waterfalls, floodlit waterholes and the tree hotel where a princess became a queen overnight.",
        aboutHeading: "Welcome to Kenya's Misty Highlands",

        moments: [
            { emoji: "🌳", title: "Treetops & The Ark", text: "The famous \"tree hotels\" where Princess Elizabeth was staying in 1952 when she learned she had become Queen." },
            { emoji: "💦", title: "Karuru Falls", text: "A dramatic three-tiered waterfall and one of Kenya's tallest, hidden deep in the forest." },
            { emoji: "🌙", title: "Floodlit Waterholes", text: "Watch elephant, buffalo and even leopard drink through the night from a lodge balcony." },
            { emoji: "🐆", title: "Rare Bongo & Leopard", text: "Among the last strongholds for the critically endangered bongo antelope, with rare leopard sightings too." },
            { emoji: "🌲", title: "Highland Rainforest & Moorland", text: "Bamboo forest gives way to open moorland above 3,000m, a striking change in scenery." }
        ],

        seasons: [
            { range: "JANUARY — FEBRUARY, JUNE — SEPTEMBER", title: "Dry Season", text: "The clearest highland weather and the easiest driving on forest roads.", bestFor: ["Tree hotel stays", "Waterfall hikes", "Photography"] },
            { range: "MARCH — MAY, OCTOBER — DECEMBER", title: "Rainy Season", text: "Mist and rain are common, though the waterfalls are at their most dramatic and full.", bestFor: ["Waterfalls at full flow", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Misty highland forests, waterfalls, and Kenya's famous tree hotels.",
        about: [
            "The Aberdare Range is a dramatic highland wilderness of moorland, bamboo forest and cascading waterfalls, sitting above 3,000m in central Kenya.",
            "It's best known for its unique 'tree hotels' — lodges built on stilts overlooking floodlit waterholes, where you can watch elephants and even leopards come to drink through the night."
        ],
        highlights: [
            "Tree hotel game viewing through the night",
            "Karuru Falls, one of Kenya's tallest waterfalls",
            "Cool highland forest scenery",
            "Bongo antelope and black leopard sightings (rare)"
        ],
        bestTime: "<strong>January – February</strong> and <strong>June – September</strong> for the clearest highland weather.",
        tours: [
            { name: "Aberdare Tree Hotel Experience", slug: "aberdare-tree-hotel-experience", price: "From $340 / person" },
            { name: "Aberdare &amp; Mt. Kenya Combo", slug: "aberdare-mt-kenya-combo", price: "From $780 / person" }
        ]
    },
    "lamu-island": {
        name: "Lamu Island",
        seed: "lamuisland",
        image: "https://imgs.search.brave.com/tYMauoHIl0oB7G5Y-HfFUvDtO9Epqr-wQ6QVc1HiSyc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTky/NjMyMTQ1L3Bob3Rv/L3dhdGVyZnJvbnQt/YXQtbGFtdS1pc2xh/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTdHQ2xNTHBG/dHlPOUl5eVNpdUE0/am1SUG9SaUl6dU53/VG1MTnAyWE9OOGc9",
        gallery: [],

        eyebrowTag: "Kenya · UNESCO Old Town · Swahili Culture · Coast",
        heroTitle: "An Island Where Time Slows Down",
        heroSubtitle: "Car-free streets, carved wooden doors and centuries of Swahili history — Lamu is unlike anywhere else on the Kenyan coast.",
        aboutHeading: "Welcome to Kenya's Swahili Time Capsule",

        moments: [
            { emoji: "🏛️", title: "UNESCO Old Town", text: "The oldest continuously inhabited Swahili settlement in East Africa, dating back to the 12th century." },
            { emoji: "🐴", title: "Donkeys Over Engines", text: "With almost no cars allowed on the island, donkeys remain the main form of everyday transport." },
            { emoji: "⛵", title: "Dhow Sailing", text: "Traditional hand-built wooden dhows still ply the channel, especially beautiful at sunset." },
            { emoji: "🕌", title: "Maulidi Festival", text: "One of East Africa's largest Swahili cultural and religious festivals, held here annually." },
            { emoji: "🏖️", title: "Shela Beach", text: "A long, dune-backed beach just a short walk or boat ride from the Old Town." }
        ],

        seasons: [
            { range: "JULY — OCTOBER, DECEMBER — MARCH", title: "Dry Season", text: "The most reliable weather for exploring the Old Town on foot and sailing the channel.", bestFor: ["Cultural tours", "Dhow sailing", "Beach time"] },
            { range: "APRIL — JUNE", title: "Long Rains", text: "Quieter streets and cooler days, with the best accommodation rates of the year.", bestFor: ["Value travel", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "A UNESCO World Heritage Swahili town where cars are banned and donkeys rule the streets.",
        about: [
            "Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa, a maze of narrow streets, carved wooden doors and coral-stone buildings dating back centuries.",
            "With no cars allowed, life here moves at the pace of dhow sails and donkey carts — a slower, deeply cultural counterpoint to a safari itinerary."
        ],
        highlights: [
            "UNESCO World Heritage Old Town",
            "Traditional dhow sailing trips",
            "Car-free streets and donkey transport",
            "Swahili architecture and cuisine"
        ],
        bestTime: "<strong>December – March</strong> and <strong>July – October</strong> for the best weather, avoiding the long rains.",
        tours: [
            { name: "Lamu Old Town Cultural Tour", slug: "lamu-old-town-cultural-tour", price: "From $310 / person" },
            { name: "Lamu Dhow Sailing Experience", slug: "lamu-dhow-sailing-experience", price: "From $180 / person" }
        ]
    },
    "malindi": {
        name: "Malindi",
        seed: "malindi",
        image: "https://imgs.search.brave.com/QhO-fmqOfKbtqURZhcN5H5gJjlwjKsaF3FKtaSVUmS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9raXJp/d2V0cmF2ZWwuY28u/dHovd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDkvTWFsaW5k/aS1NYXJpbmUtTmF0/aW9uYWwtUGFyay5q/cGc",
        gallery: [],

        eyebrowTag: "Kenya · Marine Park · Swahili History · Coast",
        heroTitle: "Five Centuries of Coastal History",
        heroSubtitle: "Coral gardens, a 500-year-old Portuguese landmark and ruins swallowed by the forest — Malindi layers history onto a classic beach escape.",
        aboutHeading: "Welcome to Kenya's Historic Coastal Town",

        moments: [
            { emoji: "⚓", title: "Vasco da Gama Pillar", text: "A coral pillar cross marking the Portuguese explorer's landing here in 1498, still standing over 500 years later." },
            { emoji: "🐠", title: "Malindi Marine National Park", text: "Kenya's first marine national park, gazetted in 1968, protecting vibrant offshore coral gardens." },
            { emoji: "🏛️", title: "Gede Ruins", text: "Explore the atmospheric remains of a 13th-century Swahili-Arab town, slowly reclaimed by forest." },
            { emoji: "🎣", title: "Deep-Sea Fishing", text: "One of East Africa's top spots for marlin and sailfish, drawing anglers year-round." },
            { emoji: "🇮🇹", title: "Italian Coastal Influence", text: "A long-standing Italian community has shaped the town's cafes, villas and restaurants." }
        ],

        seasons: [
            { range: "DECEMBER — MARCH, JULY — OCTOBER", title: "Dry Season", text: "Calm seas and the best underwater visibility for snorkelling and diving.", bestFor: ["Snorkelling", "Deep-sea fishing", "Beach holidays"] },
            { range: "APRIL — JUNE", title: "Long Rains", text: "Quieter streets and lower prices, though the sea can be rougher for water sports.", bestFor: ["Value travel", "Fewer crowds"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Historic coastal town with coral reefs, Italian influence, and a laid-back marine park.",
        about: [
            "Malindi blends centuries of Swahili, Arab, Portuguese and Italian history with a relaxed beach-town atmosphere and some of Kenya's best snorkelling and diving.",
            "The Malindi Marine National Park protects vibrant coral gardens just offshore, while the historic town centre reflects its long role as an Indian Ocean trading post."
        ],
        highlights: [
            "Malindi Marine National Park snorkelling",
            "Historic Swahili and Portuguese-era sites",
            "Deep-sea fishing excursions",
            "Nearby Gede Ruins archaeological site"
        ],
        bestTime: "<strong>December – March</strong> and <strong>July – October</strong> for the driest, sunniest beach weather.",
        tours: [
            { name: "Malindi Marine Park Snorkelling", slug: "malindi-marine-park-snorkelling", price: "From $95 / person" },
            { name: "Malindi &amp; Watamu Coastal Escape", slug: "malindi-watamu-coastal-escape", price: "From $420 / person" }
        ]
    },
    "watamu": {
        name: "Watamu",
        seed: "watamu",
        image: "https://imgs.search.brave.com/Z2svLZh-aXeaP_QpWBw1WX6C1Me-o-XgMv7Ig7rjVlI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2lsZGxpZmVrZW55/YXNhZmFyaS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDkvcFdsUjJNSDln/d3ZYMElmMHM2V0JD/TjBRYkdGY0t1aVBU/UnRCNDdmUC5qcGc",
        gallery: [],

        eyebrowTag: "Kenya · Marine Park · Sea Turtles · Coastal Forest",
        heroTitle: "Kenya's Quietest Corner of Coast",
        heroSubtitle: "A protected reef, nesting sea turtles and one of East Africa's last great coastal forests, all within a short drive of Malindi.",
        aboutHeading: "Welcome to Kenya's Marine and Forest Sanctuary",

        moments: [
            { emoji: "🐢", title: "Sea Turtle Conservation", text: "Local Ocean Conservation protects nesting and injured turtles right here in Watamu." },
            { emoji: "🐠", title: "Watamu Marine National Park", text: "Some of the richest, most colourful reef diving and snorkelling on the Kenyan coast." },
            { emoji: "🦉", title: "Arabuko-Sokoke Forest", text: "East Africa's largest remaining coastal forest, home to birds and mammals found nowhere else." },
            { emoji: "🌿", title: "Mida Creek Boardwalk", text: "Kayak or walk the mangrove boardwalk at sunset among herons, waders and kingfishers." },
            { emoji: "🏝️", title: "Quiet, Laid-Back Lagoons", text: "Calmer and less developed than nearby Malindi, with a relaxed village atmosphere." }
        ],

        seasons: [
            { range: "DECEMBER — MARCH, JULY — OCTOBER", title: "Dry Season", text: "The calmest seas and clearest water for diving, snorkelling and turtle watching.", bestFor: ["Diving", "Snorkelling", "Turtle watching"] },
            { range: "APRIL — JUNE", title: "Long Rains", text: "Quiet lagoons and low-season rates, with occasional rougher seas.", bestFor: ["Birdwatching", "Value travel"] }
        ],

        photography: {
            big: "",
            small: []
        },

        tagline: "Turquoise lagoons, coral reefs and one of Kenya's top marine parks.",
        about: [
            "Watamu is famed for its powder-white beaches, coral-fringed lagoons, and the Watamu Marine National Park, one of the richest reef ecosystems on the Kenyan coast.",
            "It's also a key nesting site for endangered sea turtles and home to the Arabuko-Sokoke Forest, one of East Africa's most important coastal forests for rare birds."
        ],
        highlights: [
            "Watamu Marine National Park diving and snorkelling",
            "Sea turtle nesting and conservation programs",
            "Arabuko-Sokoke Forest birdwatching",
            "Mida Creek mangrove kayaking"
        ],
        bestTime: "<strong>December – March</strong> and <strong>July – October</strong> for calm seas and the best underwater visibility.",
        tours: [
            { name: "Watamu Marine Park Snorkelling", slug: "watamu-marine-park-snorkelling", price: "From $95 / person" },
            { name: "Malindi &amp; Watamu Coastal Escape", slug: "malindi-watamu-coastal-escape", price: "From $420 / person" }
        ]
    },
};