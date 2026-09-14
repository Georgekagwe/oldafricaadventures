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
        gallery: [
            "https://imgs.search.brave.com/X8uMTVz1kjUreYGGF8pzYjsO1xVaiC5SR8frtLk5nWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2lsdmVyYmFja2dv/cmlsbGF0b3Vycy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDkvbWFhc2Fp/LW1hcmEta2VueWEu/anBn",
            "https://imgs.search.brave.com/b1loXEDuLJwPQ7cL7AVz8_iqxaLNCNwKkTCyw5WRYuI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS50YWNkbi5jb20v/bWVkaWEvYXR0cmFj/dGlvbnMtc3BsaWNl/LXNwcC0zNjB4MjQw/L3IvMzIvODkvMDUv/NDAvY2FwdGlvbi5q/cGc",
            "https://imgs.search.brave.com/UV4rB83suVq952BTuqbJWsFiL3IrGauWdTxy--hsouc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGMvYmUvNjgvYjMv/cGhvdG8wanBnLmpw/Zw"
        ],

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
        image: "",
        gallery: [],
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