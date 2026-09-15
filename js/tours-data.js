/* Old Africa Adventures — tour content
   One entry per tour. tour-detail.html reads the "tour" URL parameter
   (e.g. tour-detail.html?tour=tsavo-adventure) and looks up the matching
   entry here to fill in the page. 

   Fields:
   - image: hero photo at the top of the page. Path to a file in assets/images/
     (use forward slashes even on Windows, e.g. "assets/images/photo.jpg") or a
     full https:// URL. Leave as "" to show a placeholder with a "Sample photo"
     badge until you add a real one.
   - overviewImage: the wide photo under "Why Book This Tour" on the Overview
     tab. Same rules as image. Leave as "" for a placeholder.
   - gallery: up to 3 photos for the Gallery tab, same rules as image. Leave
     as [] (or fill only 1-2 slots) to placeholder the rest.
   - destination / destinations: slug(s) matching js/destination-data.js,
     used to link back to the destination page and pull in extra context.
   - difficulty: "Easy" | "Moderate" | "Challenging" — shown as a fact & badge.
   - accommodation: short one-line description of where guests stay.
   - bestTime: plain-text (no HTML) best-time-to-visit line for this tour.
   - highlights: 3-4 { emoji, title, text } cards rendered in the Overview tab. */

const OAA_TOURS = {
    "maasai-mara-safari": {
        name: "3 Day Maasai Mara Safari",
        seed: "tourjeep1",
        image: "assets/images/maasaimara.jpg",
        overviewImage: "assets/images/lion watching camera.jpg",
        gallery: [

        ],
        category: "safari",
        duration: "2 Nights,3 days",
        groupSize: "2 – 6 People",
        price: "$550 / person",
        difficulty: "Easy",
        accommodation: "Tented safari camp",
        bestTime: "July – October for the Great Migration, or January – March for calving season",
        destination: "maasai-mara",
        shortDesc: "Experience the magic of the Mara with game drives and wildlife.",
        overview: "Explore the world-famous Maasai Mara, home to the Big Five and the Great Migration. This 3-day safari takes you deep into Kenya's most iconic wildlife destination, with sunrise and sunset game drives led by expert local guides.",
        highlights: [
            { emoji: "🦁", title: "Big Five Territory", text: "Track lion, elephant, buffalo, leopard and rhino across the Mara's open grasslands with an expert local guide." },
            { emoji: "🐃", title: "Great Migration Access", text: "Positioned to reach river-crossing points during the July–October migration, when the odds of a crossing are highest." },
            { emoji: "🌅", title: "Golden-Hour Game Drives", text: "Sunrise and sunset drives timed to the best light and the most active hours for predators." },
            { emoji: "🏕️", title: "Comfortable Tented Camp", text: "Rest between drives at a well-appointed camp bordering the reserve, with hot showers and hearty meals." }
        ],
        whyGo: ["See the Big Five", "Great Migration (seasonal)", "Comfortable safari lodge", "Expert local guide"],
        itinerary: [
            { title: "Day 1 — Arrival & Afternoon Game Drive", text: "Transfer from Nairobi, check in to your lodge, then head straight out for an afternoon game drive." },
            { title: "Day 2 — Full-Day Safari", text: "Sunrise game drive followed by a full day exploring the reserve, with a picnic lunch on the plains." },
            { title: "Day 3 — Morning Drive & Departure", text: "One last game drive before breakfast and transfer back to Nairobi." }
        ],
        inclusions: ["Return transport from Nairobi", "2 nights' accommodation", "All meals & bottled water", "All game drives"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips", "Park fees"]
    },
    "maasai-cultural-tour": {
        name: "Maasai Cultural Tour",
        seed: "tourmaasai1",
        image: "https://imgs.search.brave.com/cedivS55pvHKir3SKL1UZgOojjd1zgHVRySWDK8p4QY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hamtl/bnlhc2FmYXJpcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDUvbWFhc2Fp/LXBlb3BsZS1iZzIt/MTAyNHg3NDQud2Vi/cA",
        overviewImage: "https://imgs.search.brave.com/rk03vBKh-AAeRvup-IBT2AR_z7eelVsKvpWnV69rRpQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc21hcnRu/b21hZGtlbnlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNC9tYWFzYWkt/dHJpYmUtZmFjdHMu/anBnP3Jlc2l6ZT01/ODAsMzg3JnNzbD0x",
        gallery: [],
        category: "culture",
        duration: "3 Days / 2 Nights",
        groupSize: "2 – 8 People",
        price: "$290 / person",
        difficulty: "Easy",
        accommodation: "Community homestay-style lodge",
        bestTime: "Year-round — this experience isn't weather-dependent",
        destination: "maasai-mara",
        shortDesc: "Connect with the Maasai people and their traditions.",
        overview: "Spend three days living alongside a Maasai community, learning traditional customs, beadwork, cattle-herding practices and storytelling passed down for generations — a meaningful complement to a wildlife-focused safari.",
        highlights: [
            { emoji: "🛖", title: "Living Maasai Village", text: "Stay alongside a real Maasai homestead, not a staged show, and see daily life as it actually happens." },
            { emoji: "📿", title: "Hands-On Beadwork", text: "Learn traditional beading techniques directly from Maasai women, using patterns passed down through generations." },
            { emoji: "🐄", title: "Cattle & Herding Culture", text: "Join morning herding routines and understand why cattle sit at the centre of Maasai life and status." },
            { emoji: "🔥", title: "Fireside Storytelling", text: "Close each evening with oral histories, songs and legends shared around the fire by community elders." }
        ],
        whyGo: ["Guided village visits", "Traditional beadwork workshop", "Storytelling around the fire", "Support for local livelihoods"],
        itinerary: [
            { title: "Day 1 — Arrival & Welcome Ceremony", text: "Arrive at the village and take part in a traditional welcome ceremony with local elders." },
            { title: "Day 2 — Daily Life & Traditions", text: "Join herding activities, a beadwork workshop, and a guided walk to learn about medicinal plants." },
            { title: "Day 3 — Storytelling & Departure", text: "A final morning of shared stories and songs before your return transfer." }
        ],
        inclusions: ["Return transport", "2 nights' homestay-style accommodation", "All meals", "All cultural activities & guide"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & gifts"]
    },
    "amboseli-explorer": {
        name: "5 Day Amboseli Explorer",
        seed: "tourelephant1",
        image: "assets/images/snow capped kilimanjaro.jpg",
        overviewImage: "assets/images/elephantswithmtkenyaoverview.jpg",
        gallery: [],
        category: "safari",
        duration: "5 Days / 4 Nights",
        groupSize: "2 – 6 People",
        price: "$680 / person",
        difficulty: "Easy",
        accommodation: "Safari lodge with Kilimanjaro views",
        bestTime: "June – October for the clearest Kilimanjaro views",
        destination: "amboseli",
        shortDesc: "Elephants and breathtaking views of Kilimanjaro.",
        overview: "Spend five unhurried days in Amboseli, home to some of Africa's largest elephant herds, with Mount Kilimanjaro rising over every game drive. Extra time means better light, quieter moments, and a real chance at that iconic elephants-and-mountain photograph.",
        highlights: [
            { emoji: "🐘", title: "Legendary Elephant Herds", text: "Amboseli's elephants are among the most studied in Africa, with matriarchal herds followed for over 50 years." },
            { emoji: "🏔️", title: "Kilimanjaro at Sunrise", text: "Five unhurried days give repeated chances to catch Africa's tallest peak clear of cloud at first light." },
            { emoji: "🦩", title: "Swamp-Edge Birdlife", text: "Seasonal wetlands draw hippos, waterbuck and hundreds of bird species right along the game-drive tracks." },
            { emoji: "📷", title: "Built for Photography", text: "A slower pace and flat, open terrain make this one of the best safaris for serious photographers." }
        ],
        whyGo: ["Iconic Kilimanjaro backdrop", "Large elephant herds", "Observation Hill viewpoint", "Unhurried pace over 5 days"],
        itinerary: [
            { title: "Day 1 — Arrival & Sunset Drive", text: "Transfer from Nairobi and settle in before an evening game drive as Kilimanjaro catches the last light." },
            { title: "Day 2-3 — Full Days in the Park", text: "Sunrise and afternoon game drives, with rest time at your lodge through the heat of the day." },
            { title: "Day 4 — Observation Hill & Swamp Walk", text: "Panoramic views from Observation Hill followed by a guided swamp-edge walk." },
            { title: "Day 5 — Final Drive & Departure", text: "One last morning drive before transferring back to Nairobi." }
        ],
        inclusions: ["Return transport from Nairobi", "4 nights' accommodation", "All meals & bottled water", "All game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "tsavo-adventure": {
        name: "4 Day Tsavo Adventure",
        seed: "tourtsavo1",
        image: "assets/images/tourcar.jpg",
        overviewImage: "assets/images/lionintsavo.jpg",
        gallery: [],
        category: "safari",
        duration: "4 Days / 3 Nights",
        groupSize: "2 – 6 People",
        price: "$580 / person",
        difficulty: "Easy",
        accommodation: "Safari lodge / tented camp",
        bestTime: "June – October (dry season), or January – February for warm, quiet days",
        destination: "tsavo",
        shortDesc: "Discover the wild heart of Kenya's largest parks.",
        overview: "Cross the red-earth plains of Tsavo East and West on a four-day journey through Kenya's largest protected wilderness, tracking red-dusted elephants and exploring dramatic volcanic landscapes far from the crowds.",
        highlights: [
            { emoji: "🐘", title: "Red-Dusted Elephants", text: "Tsavo's elephants coat themselves in red volcanic soil, giving the park's herds their unmistakable rust colour." },
            { emoji: "💧", title: "Mzima Springs", text: "Walk to crystal-clear spring pools where hippos and crocodiles gather, with an underwater viewing chamber." },
            { emoji: "🌋", title: "Volcanic Landscapes", text: "Cross ancient lava flows and the Yatta Plateau, one of the world's longest lava formations." },
            { emoji: "🚙", title: "Fewer Crowds", text: "Kenya's largest protected area sees a fraction of the Mara's visitor numbers, so drives feel wide open." }
        ],
        whyGo: ["Red-dusted elephant herds", "Mzima Springs' hippo pools", "Lugard Falls", "Far fewer visitors than the Mara"],
        itinerary: [
            { title: "Day 1 — Arrival & Tsavo East", text: "Transfer in and afternoon game drive through Tsavo East's open plains." },
            { title: "Day 2 — Mzima Springs & Lugard Falls", text: "Visit the crystal-clear springs and dramatic rock formations along the Galana River." },
            { title: "Day 3 — Tsavo West", text: "Cross to Tsavo West for volcanic scenery and further game viewing." },
            { title: "Day 4 — Final Drive & Departure", text: "A last game drive before your return journey." }
        ],
        inclusions: ["Return transport", "3 nights' accommodation", "All meals & bottled water", "All game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "mt-kenya-climb": {
        name: "6 Day Mt. Kenya Climb",
        seed: "tourmtkenya1",
        image: "https://imgs.search.brave.com/jRLrt-PpXnxEX60xO9BqiKXSmc1pqdth5tUdLrEK1Zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnRy/YXZlbHdpdGhhcGVu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMC9EYXkt/YnktRGF5LU1vdW50/LUtlbnlhLWhpa2lu/Zy1pdGluZXJhcnkt/c2NhbGVkLmpwZz9y/ZXNpemU9MTkyMCwy/NTYwJnNzbD0x",
        overviewImage: "https://monkeystale.ca/wp-content/uploads/2020/10/crw_1207-22-1.jpg",
        gallery: [],
        category: "adventure",
        duration: "6 Days / 5 Nights",
        groupSize: "2 – 10 People",
        price: "$900 / person",
        difficulty: "Challenging",
        accommodation: "Mountain huts & camping",
        bestTime: "January – February and August – September for the driest, clearest trekking",
        destination: "mt-kenya",
        shortDesc: "Conquer Africa's second highest peak.",
        overview: "Trek through montane forest, bamboo and moorland to Point Lenana, Mount Kenya's trekking summit, on a six-day route that requires no technical climbing — just steady legs and a sense of adventure.",
        highlights: [
            { emoji: "🏔️", title: "Point Lenana Summit", text: "Reach 4,985m without technical climbing gear, just steady acclimatisation and a determined pace." },
            { emoji: "🌿", title: "Five Vegetation Zones", text: "Walk through montane forest, bamboo, heath and moorland before the final alpine desert push." },
            { emoji: "🦌", title: "Forest-Zone Wildlife", text: "Spot elephant, buffalo and colobus monkeys on the lower slopes before the trail climbs above the treeline." },
            { emoji: "🧭", title: "Experienced Mountain Crew", text: "Certified guides and porters familiar with all major routes support you at every stage of the climb." }
        ],
        whyGo: ["Point Lenana summit (no technical climbing)", "Afro-alpine flora and glacial lakes", "Forest-zone wildlife", "Experienced mountain guides"],
        itinerary: [
            { title: "Day 1 — Nairobi to Sirimon Gate", text: "Drive to the mountain and begin trekking through montane forest." },
            { title: "Day 2-4 — Ascent Through the Zones", text: "Trek through bamboo forest, moorland and alpine desert, acclimatizing as you climb." },
            { title: "Day 5 — Summit Push", text: "Early start to reach Point Lenana for sunrise, then descend to a lower camp." },
            { title: "Day 6 — Descent & Departure", text: "Final descent to the gate and transfer back to Nairobi." }
        ],
        inclusions: ["Return transport", "5 nights' camping/hut accommodation", "All meals on the mountain", "Park fees, guide & porter"],
        exclusions: ["International flights", "Travel insurance", "Personal climbing gear", "Tips for guides & porters"]
    },
    "diani-beach-escape": {
        name: "3 Day Diani Beach Escape",
        seed: "tourdiani1",
        image: "assets/images/sunset on beach.jpg",
        overviewImage: "https://images.unsplash.com/photo-1706012955757-6c2048c32668?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlhbmklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
        gallery: [],
        category: "beach",
        duration: "3 Days / 2 Nights",
        groupSize: "1 – 10 People",
        price: "$580 / person",
        difficulty: "Easy",
        accommodation: "Beachfront hotel",
        bestTime: "December – March and July – October for the driest, sunniest beach weather",
        destination: "diani-beach",
        shortDesc: "Relax on pristine beaches and crystal-clear waters.",
        overview: "Unwind on Kenya's most celebrated stretch of coastline, with powder-white sand, warm Indian Ocean waters, and a coral reef just offshore — the perfect way to end a longer safari itinerary or a standalone beach break.",
        highlights: [
            { emoji: "🏖️", title: "Powder-White Sand", text: "Kilometres of soft white beach and warm, calm water make this Kenya's most celebrated coastline." },
            { emoji: "🤿", title: "Coral Reef Snorkelling", text: "A short boat ride reaches a living reef teeming with tropical fish and occasional dolphin sightings." },
            { emoji: "🌴", title: "Relaxed Beach Town", text: "Diani's laid-back pace, beachfront restaurants and fresh seafood make it an easy place to unwind." },
            { emoji: "🐬", title: "Optional Ocean Excursions", text: "Add on dolphin-watching or a sunset dhow cruise to round out your time on the coast." }
        ],
        whyGo: ["Powder-white sand & calm waters", "Snorkelling on the coral reef", "Relaxed beach-town atmosphere", "Optional dolphin excursions"],
        itinerary: [
            { title: "Day 1 — Arrival & Beach Time", text: "Transfer in and spend the afternoon settling in beachside." },
            { title: "Day 2 — Snorkelling & Reef Excursion", text: "A guided snorkelling trip out to the coral reef, with free time in the afternoon." },
            { title: "Day 3 — Leisure & Departure", text: "A final relaxed morning before your onward transfer." }
        ],
        inclusions: ["Return transport", "2 nights' accommodation", "Breakfast daily", "Snorkelling excursion"],
        exclusions: ["International flights", "Travel insurance", "Lunch & dinner (optional add-on)", "Personal expenses"]
    },
    "nairobi-national-park-safari": {
        name: "Nairobi National Park Safari",
        seed: "tournairobi1",
        image: "assets/images/lion watching camera.jpg",
        overviewImage: "assets/images/rhinos.jpg",
        gallery: [],
        category: "safari",
        duration: "Full-Day",
        groupSize: "6 – 7 People",
        price: "$165 / person",
        difficulty: "Easy",
        accommodation: "Half-day trip — no accommodation needed",
        bestTime: "June – October for the driest game viewing, though rewarding year-round",
        destination: "nairobi-national-park",
        shortDesc: "See lions, giraffes and rhinos minutes from the capital's skyline.",
        overview: "The only national park bordering a capital city anywhere in the world — spot lions, giraffes and black rhino with Nairobi's skyline rising behind the savannah, all in a single half-day outing.",
        highlights: [
            { emoji: "🦁", title: "Wildlife Beside a Skyline", text: "See lion, giraffe and zebra with Nairobi's high-rises visible on the horizon — a scene found nowhere else." },
            { emoji: "🐘", title: "Sheldrick Orphanage Nearby", text: "Combine your drive with a visit to see orphaned elephant calves being hand-raised close to the park gate." },
            { emoji: "⏱️", title: "Fits Any Schedule", text: "A half-day format means you can safari the same day you land or before an evening flight out." }
        ],
        whyGo: ["Black rhino sanctuary", "City skyline backdrop", "Sheldrick elephant orphanage nearby", "Easy half-day trip"],
        itinerary: [
            { title: "Morning — Pick-up & Game Drive", text: "Early pick-up from your hotel for a game drive through the park's varied habitats." },
            { title: "Midday — Return & Optional Add-On", text: "Return to the city, with an optional stop at the Sheldrick Wildlife Trust elephant orphanage." }
        ],
        inclusions: ["Round-trip transport", "Park entry fees", "Guide", "Bottled water"],
        exclusions: ["Meals", "Sheldrick Wildlife Trust entry (optional add-on)", "Personal expenses"]
    },
    "samburu-safari": {
        name: "Samburu Safari",
        seed: "toursamburu1",
        image: "assets/images/zebra and impala drinking water.jpg",
        overviewImage: "assets/images/girrafebysamburureserve.jpg",
        gallery: [],
        category: "safari",
        duration: "3 Days / 2 Nights",
        groupSize: "2 – 6 People",
        price: "$680 / person",
        difficulty: "Easy",
        accommodation: "Riverside tented camp",
        bestTime: "June – October and January – February for the easiest river-side viewing",
        destination: "samburu",
        shortDesc: "Track rare northern species along the Ewaso Nyiro River.",
        overview: "Head north of the equator to Samburu's rugged, semi-arid landscape, home to species found almost nowhere else in Kenya, and to the Samburu people, close cultural relatives of the Maasai.",
        highlights: [
            { emoji: "🦒", title: "The Samburu Special Five", text: "Look out for Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx and Somali ostrich — species rare elsewhere in Kenya." },
            { emoji: "🏜️", title: "Rugged Northern Scenery", text: "Semi-arid plains and doum palms along the Ewaso Nyiro River give Samburu a different character to southern parks." },
            { emoji: "🛖", title: "Samburu Cultural Visit", text: "Meet the Samburu people, close cultural relatives of the Maasai, and learn about pastoralist life in the north." },
            { emoji: "🐆", title: "Strong Predator Sightings", text: "The river draws lion, leopard and cheetah close to the water, especially in the dry months." }
        ],
        whyGo: ["The 'Samburu Special Five'", "Riverside game viewing", "Samburu cultural visits", "Far fewer crowds"],
        itinerary: [
            { title: "Day 1 — Arrival & River Game Drive", text: "Transfer in and an afternoon game drive along the Ewaso Nyiro River." },
            { title: "Day 2 — Full-Day Safari & Cultural Visit", text: "A full day of game viewing plus a guided visit to a Samburu village." },
            { title: "Day 3 — Final Drive & Departure", text: "One last game drive before your return journey." }
        ],
        inclusions: ["Return transport", "2 nights' accommodation", "All meals & bottled water", "All game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "lake-bogoria-day-trip": {
        name: "Lake Bogoria Day Trip",
        seed: "tourbogoria1",
        image: "assets/images/flamingos by the lake.jpg",
        overviewImage: "assets/images/lakebogoria.jpg",
        gallery: [],
        category: "safari",
        duration: "Day Trip",
        groupSize: "1 – 8 People",
        price: "$160 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "Year-round, though flamingo numbers are typically highest July – October",
        destination: "lake-bogoria",
        shortDesc: "Steaming geysers and huge flocks of flamingos in the Rift Valley.",
        overview: "A dramatic Rift Valley day trip to see boiling hot springs, geysers, and one of Kenya's largest flamingo populations, framed by towering escarpment cliffs.",
        highlights: [
            { emoji: "♨️", title: "Boiling Hot Springs", text: "Walk within metres of geysers and bubbling springs along the lake's eastern shore." },
            { emoji: "🦩", title: "Flamingo Flocks", text: "One of the Rift Valley's largest lesser flamingo populations gathers along Bogoria's alkaline shallows." },
            { emoji: "🏞️", title: "Escarpment Views", text: "Dramatic cliffs ring the lake, giving some of the most striking scenery in the Rift Valley." },
            { emoji: "🐐", title: "Greater Kudu Country", text: "The surrounding acacia woodland is one of the best places in Kenya to spot greater kudu." }
        ],
        whyGo: ["Boiling hot springs & geysers", "Large flamingo flocks", "Dramatic Rift Valley scenery", "Greater kudu sightings"],
        itinerary: [
            { title: "Morning — Departure & Hot Springs", text: "Drive to the lake and walk among the steaming geysers and hot springs." },
            { title: "Afternoon — Flamingo Viewing & Return", text: "Lakeside flamingo viewing before the drive back." }
        ],
        inclusions: ["Round-trip transport", "Park entry fees", "Guide", "Packed lunch"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses"]
    },
    "lake-naivasha-boat-safari": {
        name: "Lake Naivasha Boat Safari",
        seed: "tournaivasha1",
        image: "assets/images/boatbythelake.jpg",
        overviewImage: "assets\images\boatbylake2.jpg",
        gallery: [],
        category: "adventure",
        duration: "Day Trip",
        groupSize: "1 – 10 People",
        price: "$140 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "Year-round; clearest and driest from June to October",
        destination: "lake-naivasha",
        shortDesc: "Glide past hippos and fish eagles on a freshwater Rift Valley lake.",
        overview: "Just under two hours from Nairobi, cruise Lake Naivasha's calm waters among pods of hippos and fish eagles, with an optional walking safari on nearby Crescent Island.",
        highlights: [
            { emoji: "🚤", title: "Hippo Boat Safari", text: "Cruise close to pods of hippos and fish eagles diving for their catch, all from the water." },
            { emoji: "🚶", title: "Crescent Island Walking Safari", text: "Walk freely among giraffe, zebra and waterbuck on a predator-free island reserve." },
            { emoji: "🚴", title: "Close to Hell's Gate", text: "Naivasha sits minutes from Hell's Gate National Park, easy to combine into one longer day." },
            { emoji: "🕑", title: "Easy Nairobi Day Trip", text: "Under two hours from the capital, making it a simple half-day or full-day escape." }
        ],
        whyGo: ["Boat safari among hippos", "Crescent Island walking safari", "Close to Hell's Gate", "Easy Nairobi day trip"],
        itinerary: [
            { title: "Morning — Departure & Boat Safari", text: "Drive from Nairobi and board a boat for a guided cruise among hippos and birdlife." },
            { title: "Afternoon — Crescent Island & Return", text: "Optional walking safari on Crescent Island before the drive back." }
        ],
        inclusions: ["Round-trip transport", "Boat safari", "Guide", "Bottled water"],
        exclusions: ["Crescent Island entry (optional add-on)", "Meals", "Personal expenses"]
    },
    "hells-gate-cycling-safari": {
        name: "Hell's Gate Cycling Safari",
        seed: "tourhellsgate1",
        image: "assets/images/hellgatecycling.jpg",
        overviewImage: "assets/images/bikebylake.jpg",
        gallery: [],
        category: "adventure",
        duration: "Day Trip",
        groupSize: "2 – 10 People",
        price: "$130 / person",
        difficulty: "Moderate",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "June – October for the coolest, driest cycling conditions",
        destination: "hells-gate",
        shortDesc: "Cycle freely among zebra and giraffe through dramatic gorges.",
        overview: "One of the only Kenyan parks where you can explore on foot or by bike, Hell's Gate's towering red cliffs and volcanic gorges let you cycle among zebra, giraffe and buffalo with no vehicle required.",
        highlights: [
            { emoji: "🚴", title: "Cycle Among Wildlife", text: "Ride freely past zebra, giraffe and buffalo with no vehicle between you and the animals." },
            { emoji: "🏜️", title: "Dramatic Gorge Walk", text: "Descend into Hell's Gate Gorge on foot, squeezing between towering volcanic rock walls." },
            { emoji: "🧗", title: "Fischer's Tower", text: "A striking volcanic plug popular with rock climbers, visible throughout the ride." },
            { emoji: "🎬", title: "Lion King Scenery", text: "The park's cliffs and columns are widely credited as inspiration for the film's landscapes." }
        ],
        whyGo: ["Walking & cycling among wildlife", "Hell's Gate Gorge hike", "Fischer's Tower rock climbing", "Inspired scenery from The Lion King"],
        itinerary: [
            { title: "Morning — Cycling Through the Park", text: "Cycle through the main gorge among grazing wildlife, with a guide leading the way." },
            { title: "Afternoon — Gorge Walk & Return", text: "A guided walk into the narrow gorge before the drive back to Nairobi." }
        ],
        inclusions: ["Round-trip transport", "Bicycle hire", "Park entry fees", "Guide"],
        exclusions: ["Geothermal spa entry (optional add-on)", "Meals", "Personal expenses"]
    },
    "aberdare-tree-hotel-experience": {
        name: "Aberdare Tree Hotel Experience",
        seed: "touraberdare1",
        image: "assets/images/tourcar.jpg",
        overviewImage: "assets/images/giraffebyfigtreeaberdare.jpg",
        gallery: [],
        category: "safari",
        duration: "2 Days / 1 Night",
        groupSize: "2 – 8 People",
        price: "$340 / person",
        difficulty: "Easy",
        accommodation: "Iconic stilted \"tree hotel\"",
        bestTime: "January – February and June – September for the clearest highland weather",
        destination: "aberdare",
        shortDesc: "Watch elephants and leopards from a lodge built on stilts.",
        overview: "Spend a night in one of Kenya's famous 'tree hotels' — a lodge built on stilts overlooking a floodlit waterhole in the misty Aberdare highlands, where elephants and even leopards come to drink through the night.",
        highlights: [
            { emoji: "🌳", title: "Night Game Viewing", text: "Watch elephant, buffalo and even leopard drink at a floodlit waterhole from your lodge balcony after dark." },
            { emoji: "💦", title: "Karuru Falls", text: "Visit one of Kenya's tallest waterfalls, dropping in three dramatic stages through highland forest." },
            { emoji: "🌫️", title: "Misty Highland Forest", text: "Cool temperatures and thick forest give the Aberdares a completely different feel to the lowland parks." },
            { emoji: "🐆", title: "Rare Species Country", text: "Home to the elusive bongo antelope and one of the only confirmed black leopard populations in Kenya." }
        ],
        whyGo: ["Tree hotel night game viewing", "Karuru Falls", "Cool highland scenery", "Rare bongo & black leopard sightings"],
        itinerary: [
            { title: "Day 1 — Arrival & Afternoon Game Drive", text: "Transfer in, afternoon game drive, then check in to your tree hotel before dark." },
            { title: "Day 2 — Morning Drive & Departure", text: "A morning game drive and waterfall stop before returning to Nairobi." }
        ],
        inclusions: ["Return transport", "1 night's accommodation", "All meals", "Game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "lamu-old-town-cultural-tour": {
        name: "Lamu Old Town Cultural Tour",
        seed: "tourlamu1",
        image: "assets/images/lamutown.jpg",
        overviewImage: "assets/images/lamutown2.jpg",
        gallery: [],
        category: "culture",
        duration: "3 Days / 2 Nights",
        groupSize: "1 – 8 People",
        price: "$310 / person",
        difficulty: "Easy",
        accommodation: "Swahili-style guesthouse",
        bestTime: "December – March and July – October, avoiding the long rains",
        destination: "lamu-island",
        shortDesc: "Explore a car-free UNESCO Swahili town by foot and dhow.",
        overview: "Step into the oldest and best-preserved Swahili settlement in East Africa — a maze of narrow streets, carved wooden doors and coral-stone buildings where donkeys and dhows, not cars, set the pace of life.",
        highlights: [
            { emoji: "🏛️", title: "UNESCO Old Town", text: "Wander the oldest continuously inhabited Swahili settlement in East Africa, largely unchanged for centuries." },
            { emoji: "⛵", title: "Traditional Dhow Sailing", text: "Sail on a hand-built wooden dhow, a design used along this coast for over a thousand years." },
            { emoji: "🚫", title: "No Cars Allowed", text: "Donkeys and foot traffic are the only way to move through town, keeping the pace unhurried." },
            { emoji: "🍽️", title: "Swahili Cuisine", text: "Sample coconut-based curries, fresh seafood and spiced coastal dishes shaped by centuries of trade." }
        ],
        whyGo: ["UNESCO World Heritage Old Town", "Traditional dhow sailing", "Car-free streets", "Swahili architecture & cuisine"],
        itinerary: [
            { title: "Day 1 — Arrival & Old Town Walk", text: "Arrive by air or boat and take a guided walking tour through the Old Town." },
            { title: "Day 2 — Dhow Sailing Trip", text: "A full day dhow excursion along the coastline, with a stop for fresh seafood." },
            { title: "Day 3 — Leisure & Departure", text: "A relaxed final morning before your return transfer." }
        ],
        inclusions: ["Return transport/boat transfers", "2 nights' accommodation", "Breakfast daily", "Guided walking tour & dhow trip"],
        exclusions: ["International flights", "Travel insurance", "Lunch & dinner", "Personal expenses"]
    },
    "malindi-marine-park-snorkelling": {
        name: "Malindi Marine Park Snorkelling",
        seed: "tourmalindi1",
        image: "https://images.unsplash.com/photo-1627981584479-9605e4e7d1d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsaW5kaXxlbnwwfHwwfHx8MA%3D%3D",
        overviewImage: "https://imgs.search.brave.com/bHmLHjRcniCjY39IveeTqSdGdZI7Pb3-yN96GoLwYZE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kcHU5/ejRyNDZkdHl0LmNs/b3VkZnJvbnQubmV0/L21lZGlhL2ZpbGVy/X3B1YmxpYy8yOS84/MS8yOTgxMmE1NC02/Y2I2LTQ3NDctOTI1/Ny1lN2NmMTYwMDJl/OGQvamVzc2ljYS1w/YW1wLW1pZGZvNzh6/LW9hLXVuc3BsYXNo/LmpwZz93aWR0aD0z/NjgmcXVhbGl0eT04/MCZmb3JtYXQ9YXV0/byZoZWlnaHQ9MzY4",
        gallery: [],
        category: "beach",
        duration: "Day Trip",
        groupSize: "1 – 10 People",
        price: "$95 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "December – March and July – October for the driest, sunniest beach weather",
        destination: "malindi",
        shortDesc: "Snorkel vibrant coral gardens off Kenya's historic coast.",
        overview: "Explore the protected coral gardens of Malindi Marine National Park, one of the oldest marine parks in Africa, on a relaxed day trip that blends snorkelling with a glimpse of the town's centuries-old trading history.",
        highlights: [
            { emoji: "🐠", title: "Protected Coral Gardens", text: "Snorkel one of Africa's oldest marine national parks, established in 1968 to protect its reef." },
            { emoji: "🏛️", title: "Swahili & Portuguese History", text: "Walk past centuries-old pillars and buildings tracing Malindi's long role as an Indian Ocean trading post." },
            { emoji: "🎣", title: "Deep-Sea Fishing Option", text: "Add a half-day fishing charter for sailfish, marlin and kingfish in the waters offshore." },
            { emoji: "🏺", title: "Nearby Gede Ruins", text: "A short drive away, explore the mysterious abandoned Swahili city swallowed by forest centuries ago." }
        ],
        whyGo: ["Malindi Marine Park snorkelling", "Historic Swahili & Portuguese sites", "Deep-sea fishing available", "Nearby Gede Ruins"],
        itinerary: [
            { title: "Morning — Snorkelling Trip", text: "Boat out to the marine park's coral gardens for a guided snorkelling session." },
            { title: "Afternoon — Town Tour & Return", text: "A short walk through Malindi's historic town centre before heading back." }
        ],
        inclusions: ["Round-trip transport", "Snorkelling gear & guide", "Marine park entry fees", "Bottled water"],
        exclusions: ["Meals", "Deep-sea fishing (optional add-on)", "Personal expenses"]
    },
    "watamu-marine-park-snorkelling": {
        name: "Watamu Marine Park Snorkelling",
        seed: "tourwatamu1",
        image: "https://imgs.search.brave.com/NfGhW0zHaKbbBehOKgTlB_0lECwxuI7FaN6BiLwxJZ8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/eHRyZW1lc3BvdHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEzLzAxL1dhdGFt/dS1CZWFjaC1NYWxp/bmRpLVNub3JrZWxs/aW5nLmpwZw",
        overviewImage: "https://imgs.search.brave.com/UPCtGBC9RFCsCZ7x45tx2JRSfJoA-r0LQZnqZ5Eb4TQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MjUvZWUvOWEvZDQv/Y2FwdGlvbi5qcGc",
        gallery: [],
        category: "beach",
        duration: "Day Trip",
        groupSize: "1 – 10 People",
        price: "$95 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "December – March and July – October for calm seas and the best visibility",
        destination: "watamu",
        shortDesc: "Explore one of the coast's richest reef ecosystems.",
        overview: "Watamu Marine National Park protects one of the richest reef ecosystems on the Kenyan coast, alongside turquoise lagoons, nesting sea turtles and the nearby Arabuko-Sokoke Forest.",
        highlights: [
            { emoji: "🐢", title: "Sea Turtle Nesting", text: "Watamu is one of Kenya's most important nesting sites for endangered green and olive ridley turtles." },
            { emoji: "🐠", title: "Rich Reef Ecosystem", text: "One of the healthiest coral reefs on the Kenyan coast, home to dense and colourful marine life." },
            { emoji: "🌳", title: "Arabuko-Sokoke Forest", text: "The largest remaining coastal forest in East Africa, with rare birds found nowhere else in the country." },
            { emoji: "🛶", title: "Mida Creek Mangroves", text: "Kayak through a maze of mangrove channels alive with wading birds at low tide." }
        ],
        whyGo: ["Rich coral reef diving & snorkelling", "Sea turtle nesting sites", "Arabuko-Sokoke birdwatching", "Mida Creek mangrove kayaking"],
        itinerary: [
            { title: "Morning — Snorkelling Trip", text: "Boat out to the marine park for guided snorkelling among the coral gardens." },
            { title: "Afternoon — Mida Creek & Return", text: "An optional mangrove kayak trip at Mida Creek before returning." }
        ],
        inclusions: ["Round-trip transport", "Snorkelling gear & guide", "Marine park entry fees", "Bottled water"],
        exclusions: ["Meals", "Mida Creek kayaking (optional add-on)", "Personal expenses"]
    },
    "lake-nakuru-day-safari": {
        name: "Lake Nakuru Day Safari",
        seed: "tournakuru1",
        image: "assets/images/rhinos.jpg",
        overviewImage: "assets/images/flamingos by the lake.jpg",
        gallery: [],
        category: "safari",
        duration: "Day Trip",
        groupSize: "1 – 8 People",
        price: "$180 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "Year-round; driest and easiest June – October and January – February",
        destination: "lake-nakuru",
        shortDesc: "Flamingos and a rhino sanctuary in a compact, scenic park.",
        overview: "A compact soda-lake park easily combined with a longer itinerary, Lake Nakuru is one of Kenya's most reliable spots for both black and white rhino, alongside flamingo flocks and excellent viewpoints.",
        highlights: [
            { emoji: "🦏", title: "Rhino Sanctuary", text: "A fenced park protecting both black and white rhino, among the most reliable rhino sightings in Kenya." },
            { emoji: "🦩", title: "Flamingo Shoreline", text: "Depending on water levels, thousands of flamingos can line the lake's soda-white shore." },
            { emoji: "🏞️", title: "Baboon Cliff Views", text: "A short stop at this viewpoint gives a sweeping panorama over the entire lake and park." },
            { emoji: "🚗", title: "Easy to Combine", text: "Its compact size and proximity to Nairobi make it a simple add-on to a longer safari." }
        ],
        whyGo: ["Flamingo flocks (season-dependent)", "Black & white rhino sanctuary", "Baboon Cliff viewpoint", "Easy to combine with other parks"],
        itinerary: [
            { title: "Morning — Departure & Game Drive", text: "Drive from Nairobi and enter the park for a morning game drive." },
            { title: "Afternoon — Baboon Cliff & Return", text: "A stop at Baboon Cliff for panoramic views before the drive back." }
        ],
        inclusions: ["Round-trip transport", "Park entry fees", "Guide", "Packed lunch"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses"]
    },
    "amboseli-day-trip": {
        name: "Amboseli Day Trip",
        seed: "touramboselidt1",
        image: "assets/images/elephantswithmtkenyaoverview.jpg",
        overviewImage: "assets/images/snow capped kilimanjaro.jpg",
        gallery: [],
        category: "safari",
        duration: "Day Trip",
        groupSize: "1 – 8 People",
        price: "$220 / person",
        difficulty: "Easy",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "June – October for the clearest Kilimanjaro views",
        destination: "amboseli",
        shortDesc: "Elephants and Kilimanjaro views in a single long day.",
        overview: "A full day in Amboseli for travellers short on time — an early departure from Nairobi, a morning among the park's famous elephant herds while Kilimanjaro is at its clearest, and a return drive the same evening.",
        highlights: [
            { emoji: "🐘", title: "Elephant Herds in a Day", text: "Compress Amboseli's signature wildlife into one focused day without needing to book a lodge." },
            { emoji: "🏔️", title: "Morning Kilimanjaro Views", text: "Timed to reach the park while the mountain is typically clearest, before afternoon cloud builds." },
            { emoji: "🏞️", title: "Observation Hill Stop", text: "Climb the park's only public viewpoint for a panorama over the swamps and plains below." },
            { emoji: "💼", title: "No Overnight Needed", text: "Ideal for travellers on a tight schedule who still want a genuine big-park safari experience." }
        ],
        whyGo: ["Kilimanjaro at its clearest in the morning", "Large elephant herds", "Observation Hill viewpoint", "No overnight stay needed"],
        itinerary: [
            { title: "Early Morning — Departure", text: "Pre-dawn pick-up from Nairobi for the drive south to Amboseli." },
            { title: "Midday — Game Drive & Observation Hill", text: "Game drive across the plains and swamps, with panoramic views from Observation Hill." },
            { title: "Afternoon — Return to Nairobi", text: "A final loop through the park before the drive back." }
        ],
        inclusions: ["Round-trip transport from Nairobi", "Park entry fees", "Guide", "Packed lunch & bottled water"],
        exclusions: ["Accommodation", "Travel insurance", "Personal expenses & tips"]
    },
    "tsavo-amboseli-combo": {
        name: "Tsavo & Amboseli Combo",
        seed: "tourtsavoamboseli1",
        image: "assets/images/elephantswithmtkenyaoverview.jpg",
        overviewImage: "assets/images/snow capped kilimanjaro.jpg",
        gallery: [],
        category: "safari",
        duration: "6 Days / 5 Nights",
        groupSize: "2 – 6 People",
        price: "$760 / person",
        difficulty: "Easy",
        accommodation: "Safari lodges / tented camps",
        bestTime: "June – October (dry season) for easy game viewing in both parks",
        destinations: ["tsavo", "amboseli"],
        shortDesc: "Red-earth wilderness and Kilimanjaro views in one journey.",
        overview: "Two of Kenya's great southern parks on a single route — the vast, red-dusted wilderness of Tsavo followed by Amboseli's elephant herds beneath Mount Kilimanjaro, with none of the backtracking of two separate trips.",
        highlights: [
            { emoji: "🌋", title: "Two Landscapes, One Trip", text: "Cross from Tsavo's red-earth wilderness to Amboseli's swamps and mountain views without doubling back." },
            { emoji: "🐘", title: "Contrasting Elephant Herds", text: "See Tsavo's red-dusted elephants and Amboseli's famously large matriarchal herds on the same journey." },
            { emoji: "💧", title: "Mzima Springs Stop", text: "Visit the clear-water springs and underwater viewing chamber en route between the two parks." },
            { emoji: "🏔️", title: "Kilimanjaro Finale", text: "End the trip beneath Africa's tallest peak, Amboseli's signature backdrop for every game drive." }
        ],
        whyGo: ["Two contrasting landscapes in one trip", "Red-dusted Tsavo elephants", "Kilimanjaro backdrop in Amboseli", "Mzima Springs & Observation Hill"],
        itinerary: [
            { title: "Day 1 — Nairobi to Tsavo East", text: "Transfer in and an afternoon game drive across Tsavo East's open plains." },
            { title: "Day 2 — Lugard Falls & the Galana River", text: "Explore the river, its rock formations and the wildlife drawn to the water." },
            { title: "Day 3 — Tsavo West & Mzima Springs", text: "Cross into Tsavo West for volcanic scenery and the crystal-clear springs." },
            { title: "Day 4 — Transfer to Amboseli", text: "Drive west to Amboseli with an afternoon game drive on arrival." },
            { title: "Day 5 — Full Day in Amboseli", text: "Sunrise and afternoon game drives among the elephant herds, plus Observation Hill." },
            { title: "Day 6 — Final Drive & Departure", text: "A last morning drive before the return transfer to Nairobi." }
        ],
        inclusions: ["Return transport from Nairobi", "5 nights' accommodation", "All meals & bottled water", "All game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "rift-valley-lakes-tour": {
        name: "Rift Valley Lakes Tour",
        seed: "tourriftlakes1",
        image: "assets/images/flamingos by the lake.jpg",
        overviewImage: "assets/images/rhinos.jpg",
        gallery: [],
        category: "safari",
        duration: "4 Days / 3 Nights",
        groupSize: "2 – 8 People",
        price: "$520 / person",
        difficulty: "Easy",
        accommodation: "Lakeside lodges",
        bestTime: "June – October and January – February for the easiest travel between lakes",
        destinations: ["lake-naivasha", "lake-nakuru", "lake-bogoria"],
        shortDesc: "Flamingos, rhinos, hippos and geysers along the Rift Valley floor.",
        overview: "Follow the Rift Valley north through its chain of lakes — Naivasha's hippo-filled freshwater, Nakuru's rhino sanctuary and flamingo shoreline, and Bogoria's steaming geysers — in four days of varied, easy-paced travel.",
        highlights: [
            { emoji: "🌋", title: "Three Lakes, One Circuit", text: "Naivasha, Nakuru and Bogoria each offer a completely different Rift Valley experience in a single loop." },
            { emoji: "🦏", title: "Rhino at Nakuru", text: "A dedicated sanctuary gives strong odds of seeing both black and white rhino." },
            { emoji: "♨️", title: "Geysers at Bogoria", text: "Walk among boiling hot springs framed by dramatic escarpment cliffs." },
            { emoji: "🚤", title: "Hippo Boat Safari", text: "Start the trip on the water at Naivasha, cruising among hippo pods and fish eagles." }
        ],
        whyGo: ["Three very different Rift Valley lakes", "Black & white rhino at Nakuru", "Boiling geysers at Bogoria", "Boat safari among hippos"],
        itinerary: [
            { title: "Day 1 — Nairobi to Lake Naivasha", text: "Drive to Naivasha and take an afternoon boat safari among hippos and fish eagles." },
            { title: "Day 2 — Lake Nakuru National Park", text: "A full day in the park, with rhino tracking and views from Baboon Cliff." },
            { title: "Day 3 — Lake Bogoria", text: "Walk among the hot springs and geysers, with lakeside flamingo viewing." },
            { title: "Day 4 — Return to Nairobi", text: "A final morning stop before the drive back to the city." }
        ],
        inclusions: ["Return transport from Nairobi", "3 nights' accommodation", "All meals & bottled water", "Boat safari, guide & all park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "safari-beach-combo": {
        name: "Safari & Beach Combo",
        seed: "toursafaribeach1",
        image: "assets/images/tourcar.jpg",
        overviewImage: "assets/images/kenyancoast.jpg",
        gallery: [],
        category: "beach",
        duration: "8 Days / 7 Nights",
        groupSize: "2 – 8 People",
        price: "$1,150 / person",
        difficulty: "Easy",
        accommodation: "Safari camp + beach resort",
        bestTime: "July – October (migration season) into the dry coastal season",
        destinations: ["maasai-mara", "diani-beach"],
        shortDesc: "Game drives in the Mara, then white sand on the south coast.",
        overview: "Kenya's two signature experiences in one itinerary — four days of game drives in the Maasai Mara, then a flight to the coast for four days of reef, sand and warm Indian Ocean water at Diani Beach.",
        highlights: [
            { emoji: "🦁", title: "Big Five, Then Beach", text: "Four days of Mara game drives followed by four days unwinding on Diani's white sand." },
            { emoji: "✈️", title: "Domestic Flight Included", text: "Skip the long road transfer with a scheduled flight straight from the Mara to the coast." },
            { emoji: "🤿", title: "Reef Snorkelling", text: "Cool off from the safari heat with a guided snorkel trip on Diani's coral reef." },
            { emoji: "💍", title: "Popular Honeymoon Route", text: "A tried-and-tested combination for couples wanting both wildlife adventure and relaxed beach time." }
        ],
        whyGo: ["Big Five game drives and beach time", "Domestic flight to the coast included", "Coral reef snorkelling", "Ideal honeymoon or first-visit itinerary"],
        itinerary: [
            { title: "Day 1 — Nairobi to the Maasai Mara", text: "Transfer to the Mara with an afternoon game drive on arrival." },
            { title: "Day 2-3 — Safari in the Mara", text: "Sunrise and afternoon game drives, with a picnic lunch out on the plains." },
            { title: "Day 4 — Flight to the Coast", text: "A final morning drive, then the flight to Diani Beach and check-in." },
            { title: "Day 5-7 — Diani Beach", text: "Beach days at your own pace, with a guided snorkelling trip to the reef." },
            { title: "Day 8 — Departure", text: "A relaxed final morning before your onward transfer." }
        ],
        inclusions: ["All transfers & domestic flight to the coast", "7 nights' accommodation", "All meals on safari, breakfast at the coast", "All game drives, park fees & snorkelling excursion"],
        exclusions: ["International flights", "Travel insurance", "Lunch & dinner at the coast", "Personal expenses & tips"]
    },
    "mt-kenya-foothills-trek": {
        name: "3 Day Foothills Trek",
        seed: "tourmtkenyafoot1",
        image: "https://imgs.search.brave.com/5WpA8mQ2FpZnjR95CU0pvhlxlB3moPOlamS4SjZabeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTUx/NDIyNjgxL3Bob3Rv/L3RyZWVzLWluLW9s/ZC1mb3Jlc3QuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXdB/aUY3M0VyMEdwNHc3/UW1mM3Z6d0xlRXJN/MV9ET3BqTFlVQll2/ZlA5MTg9",
        overviewImage: "https://media.istockphoto.com/id/1249201126/photo/corn-and-trees-kenya.jpg?s=612x612&w=0&k=20&c=M0yZVVJKEUNJ2dRnPoBZ2RHS4x_ieFBLUupIpFBpBdQ=",
        gallery: [],
        category: "adventure",
        duration: "3 Days / 2 Nights",
        groupSize: "2 – 10 People",
        price: "$410 / person",
        difficulty: "Moderate",
        accommodation: "Mountain huts / camping",
        bestTime: "January – February and August – September for the driest trekking conditions",
        destination: "mt-kenya",
        shortDesc: "Forest, bamboo and moorland scenery without the summit push.",
        overview: "A gentler alternative to the full Mount Kenya climb — three days walking the mountain's lower slopes through montane forest, bamboo and open moorland, reaching striking alpine scenery without any high-altitude summit day.",
        highlights: [
            { emoji: "🌲", title: "Forest & Bamboo Zones", text: "Walk through montane forest and bamboo without pushing on to the high-altitude summit zone." },
            { emoji: "🏔️", title: "Alpine Views, Lower Effort", text: "Reach striking moorland scenery at a gentler pace than the full Point Lenana climb." },
            { emoji: "🐒", title: "Forest Wildlife", text: "Colobus monkeys, elephant and buffalo are regularly seen along the lower trekking trails." },
            { emoji: "🥾", title: "Suits First-Time Trekkers", text: "A shorter, lower-altitude route ideal for trekkers who want the experience without extreme exertion." }
        ],
        whyGo: ["Alpine scenery at an easier pace", "Forest-zone wildlife", "No altitude summit push", "Experienced mountain guides"],
        itinerary: [
            { title: "Day 1 — Nairobi to the Forest Zone", text: "Drive to the mountain and trek through montane forest to the first camp." },
            { title: "Day 2 — Bamboo & Moorland", text: "A full day's walk through bamboo forest into open moorland, with views to the peaks." },
            { title: "Day 3 — Descent & Departure", text: "Descend to the gate and transfer back to Nairobi." }
        ],
        inclusions: ["Return transport", "2 nights' camping/hut accommodation", "All meals on the mountain", "Park fees, guide & porter"],
        exclusions: ["International flights", "Travel insurance", "Personal trekking gear", "Tips for guides & porters"]
    },
    "nairobi-park-elephant-orphanage": {
        name: "Nairobi Park & Elephant Orphanage",
        seed: "tournairobiorph1",
        image: "assets/images/lion watching camera.jpg",
        overviewImage: "assets/images/rhinos.jpg",
        gallery: [],
        category: "safari",
        duration: "Half-Day",
        groupSize: "1 – 6 People",
        price: "$150 / person",
        difficulty: "Easy",
        accommodation: "Half-day trip — no accommodation needed",
        bestTime: "Year-round — the orphanage's public visiting hour runs daily",
        destination: "nairobi-national-park",
        shortDesc: "A city-edge game drive plus the Sheldrick elephant orphanage.",
        overview: "The classic Nairobi half-day: a morning game drive in the only national park bordering a capital city, followed by the daily public visit at the Sheldrick Wildlife Trust, where orphaned elephant calves are hand-raised for release.",
        highlights: [
            { emoji: "🦁", title: "Morning Game Drive", text: "A focused drive through varied habitat close to the city, with strong odds of lion and rhino." },
            { emoji: "🐘", title: "Orphan Elephant Feeding", text: "Watch hand-raised calves at their public feeding session, a Sheldrick Trust daily tradition since 1977." },
            { emoji: "🏙️", title: "Skyline Backdrop", text: "One of the only places on Earth to photograph wild lion with a city skyline behind them." },
            { emoji: "⏱️", title: "Half-Day Convenience", text: "Perfect for a layover day or as an easy add-on before or after a longer safari." }
        ],
        whyGo: ["Lions & rhino minutes from the city", "Orphaned elephant feeding visit", "Skyline-backed savannah photography", "Easy half-day itinerary"],
        itinerary: [
            { title: "Morning — Pick-up & Game Drive", text: "Early pick-up from your hotel for a game drive through the park." },
            { title: "Late Morning — Sheldrick Wildlife Trust", text: "Attend the daily public visit to see the orphaned elephant calves, then return to the city." }
        ],
        inclusions: ["Round-trip transport", "Park entry fees", "Sheldrick Wildlife Trust entry", "Guide & bottled water"],
        exclusions: ["Meals", "Travel insurance", "Personal expenses & tips"]
    },
    "samburu-maasai-mara-combo": {
        name: "Samburu & Maasai Mara Combo",
        seed: "toursamburumara1",
        image: "assets/images/zebra and impala drinking water.jpg",
        overviewImage: "assets/images/maasaimara.jpg",
        gallery: [],
        category: "safari",
        duration: "6 Days / 5 Nights",
        groupSize: "2 – 6 People",
        price: "$890 / person",
        difficulty: "Easy",
        accommodation: "Tented safari camps",
        bestTime: "June – October for the best game viewing in both regions",
        destinations: ["samburu", "maasai-mara"],
        shortDesc: "Rare northern species and the Mara's Big Five in one trip.",
        overview: "Pair the arid north with Kenya's most famous reserve — the 'Samburu Special Five' along the Ewaso Nyiro River, then the open grasslands of the Maasai Mara and its exceptional predator viewing.",
        highlights: [
            { emoji: "🦒", title: "North Meets South", text: "Pair Samburu's rare desert-adapted species with the Mara's dense predator and herbivore populations." },
            { emoji: "🦁", title: "Big Five in the Mara", text: "Finish the trip in Kenya's most famous reserve, with strong odds of all Big Five species." },
            { emoji: "🏜️", title: "Samburu Special Five", text: "Start in the arid north tracking species found almost nowhere else in the country." },
            { emoji: "🛖", title: "Two Cultures", text: "Meet both the Samburu and Maasai peoples, close cultural relatives with distinct traditions." }
        ],
        whyGo: ["Species found in few other Kenyan parks", "Big Five in the Mara", "Two contrasting ecosystems", "Cultural visits in both regions"],
        itinerary: [
            { title: "Day 1 — Nairobi to Samburu", text: "Drive north across the equator, with an afternoon game drive along the river." },
            { title: "Day 2 — Samburu Full Day", text: "Morning and afternoon game drives plus a guided visit to a Samburu village." },
            { title: "Day 3 — Transfer to the Maasai Mara", text: "The long drive southwest, arriving in time for an evening game drive." },
            { title: "Day 4-5 — Safari in the Mara", text: "Full days of game viewing across the reserve, with a picnic lunch on the plains." },
            { title: "Day 6 — Final Drive & Departure", text: "One last morning drive before the transfer back to Nairobi." }
        ],
        inclusions: ["Return transport from Nairobi", "5 nights' accommodation", "All meals & bottled water", "All game drives & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "naivasha-hells-gate-combo": {
        name: "Naivasha & Hell's Gate Combo",
        seed: "tournaivashahg1",
        image: "assets/images/hippofeedininnaivasha.jpg",
        overviewImage: "assets/images/birdsbynaivashanational park.jpg",
        gallery: [],
        category: "adventure",
        duration: "Day Trip",
        groupSize: "2 – 10 People",
        price: "$210 / person",
        difficulty: "Moderate",
        accommodation: "Day trip — no accommodation needed",
        bestTime: "June – October for the driest cycling & boating conditions",
        destinations: ["lake-naivasha", "hells-gate"],
        shortDesc: "A hippo boat safari and a cycle through Hell's Gate gorge.",
        overview: "Two of the Rift Valley's best day experiences back to back — a morning boat safari among the hippos and fish eagles of Lake Naivasha, then an afternoon cycling among zebra and giraffe through Hell's Gate's red-walled gorges.",
        highlights: [
            { emoji: "🚤", title: "Morning Boat Safari", text: "Start the day gliding among hippos and fish eagles on Lake Naivasha's calm water." },
            { emoji: "🚴", title: "Afternoon Cycling Safari", text: "Swap the boat for a bike and pedal freely among zebra and giraffe in Hell's Gate." },
            { emoji: "🏜️", title: "Gorge on Foot", text: "Finish with a guided walk into the park's narrow volcanic gorge." },
            { emoji: "🕐", title: "One Day, Two Parks", text: "An efficient day trip that pairs two of the Rift Valley's most distinctive experiences." }
        ],
        whyGo: ["Boat safari among hippos", "Cycling among wildlife", "Hell's Gate Gorge walk", "Both in a single day from Nairobi"],
        itinerary: [
            { title: "Morning — Lake Naivasha Boat Safari", text: "Drive from Nairobi and cruise the lake among hippos and birdlife." },
            { title: "Afternoon — Hell's Gate by Bike", text: "Cycle through the park among grazing wildlife, with a guided walk into the gorge before heading back." }
        ],
        inclusions: ["Round-trip transport", "Boat safari & bicycle hire", "All park entry fees", "Guide & bottled water"],
        exclusions: ["Meals", "Geothermal spa entry (optional add-on)", "Personal expenses"]
    },
    "aberdare-mt-kenya-combo": {
        name: "Aberdare & Mt. Kenya Combo",
        seed: "touraberdaremtk1",
        image: "assets/images/tourcar.jpg",
        overviewImage: "assets/images/elephantsbywatermtkenya.jpg",
        gallery: [],
        category: "safari",
        duration: "5 Days / 4 Nights",
        groupSize: "2 – 8 People",
        price: "$780 / person",
        difficulty: "Moderate",
        accommodation: "Tree hotel + mountain lodge",
        bestTime: "January – February and June – September for the clearest highland weather",
        destinations: ["aberdare", "mt-kenya"],
        shortDesc: "Highland forests, a tree hotel, and the slopes of Mount Kenya.",
        overview: "Kenya's central highlands at their best — a night in an Aberdare tree hotel watching a floodlit waterhole, waterfalls and moorland scenery, then across to Mount Kenya's forested lower slopes for walking and wildlife.",
        highlights: [
            { emoji: "🌳", title: "Tree Hotel Night", text: "Watch a floodlit waterhole after dark from a lodge built on stilts in the Aberdare forest." },
            { emoji: "💦", title: "Karuru Falls", text: "See one of Kenya's tallest waterfalls tumbling through highland forest in three dramatic drops." },
            { emoji: "🥾", title: "Mount Kenya Forest Trek", text: "Walk the lower slopes of Mount Kenya through montane forest without a summit push." },
            { emoji: "❄️", title: "Cool Highland Climate", text: "A refreshing change of pace and temperature from Kenya's savannah parks." }
        ],
        whyGo: ["Tree hotel night game viewing", "Karuru Falls", "Mount Kenya forest walks", "Cool highland climate"],
        itinerary: [
            { title: "Day 1 — Nairobi to the Aberdares", text: "Transfer in, afternoon game drive, then check in to the tree hotel before dark." },
            { title: "Day 2 — Waterfalls & Moorland", text: "Morning game drive and a visit to Karuru Falls across the high moorland." },
            { title: "Day 3 — Transfer to Mount Kenya", text: "Drive to the Mount Kenya foothills with an afternoon guided forest walk." },
            { title: "Day 4 — Lower Slopes Trek", text: "A full day walking the lower slopes, with forest wildlife and views to the peaks." },
            { title: "Day 5 — Departure", text: "A final morning walk before the return transfer to Nairobi." }
        ],
        inclusions: ["Return transport from Nairobi", "4 nights' accommodation", "All meals", "Game drives, guided walks & park fees"],
        exclusions: ["International flights", "Travel insurance", "Personal expenses & tips"]
    },
    "lamu-dhow-sailing-experience": {
        name: "Lamu Dhow Sailing Experience",
        seed: "tourlamudhow1",
        image: "assets/images/lamu dhow.jpg",
        overviewImage: "assets/images/lamudhow2.jpg",
        gallery: [],
        category: "culture",
        duration: "Full Day",
        groupSize: "1 – 8 People",
        price: "$180 / person",
        difficulty: "Easy",
        accommodation: "Full day — no accommodation needed",
        bestTime: "December – March and July – October for the calmest sailing conditions",
        destination: "lamu-island",
        shortDesc: "Sail the Lamu archipelago aboard a traditional wooden dhow.",
        overview: "Spend a day under sail on a traditional Swahili dhow, drifting between the islands of the Lamu archipelago with time to swim, snorkel the shallows, and share a fresh seafood lunch grilled on the beach.",
        highlights: [
            { emoji: "⛵", title: "Traditional Dhow", text: "Sail on a hand-built wooden dhow crewed by local sailors using techniques centuries old." },
            { emoji: "🏝️", title: "Island Hopping", text: "Drift between quiet islands in the Lamu archipelago, with time to swim in clear water." },
            { emoji: "🦐", title: "Beach Seafood Lunch", text: "Share a freshly grilled seafood lunch cooked on the sand at a quiet stop along the way." },
            { emoji: "🌅", title: "Sunset Return Sail", text: "Sail back into Lamu town as the light turns gold over the mangrove channels." }
        ],
        whyGo: ["Traditional hand-built dhow", "Island stops & swimming", "Fresh seafood lunch on the sand", "Sunset sail back to Lamu town"],
        itinerary: [
            { title: "Morning — Setting Sail", text: "Board your dhow in Lamu town and sail out through the mangrove channels." },
            { title: "Midday — Islands & Beach Lunch", text: "Stop to swim and snorkel before a grilled seafood lunch on a quiet beach." },
            { title: "Afternoon — Sunset Return", text: "Sail back towards Lamu town as the light drops over the archipelago." }
        ],
        inclusions: ["Full-day dhow charter & crew", "Seafood lunch", "Snorkelling gear", "Bottled water & soft drinks"],
        exclusions: ["Accommodation", "Flights or boat transfers to Lamu", "Personal expenses & tips"]
    },
    "malindi-watamu-coastal-escape": {
        name: "Malindi & Watamu Coastal Escape",
        seed: "tourmalindiwatamu1",
        image: "assets/images/malindicoast.jpg",
        overviewImage: "https://images.unsplash.com/photo-1692935045168-c80632f56b06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0YW11fGVufDB8fDB8fHww",
        gallery: [],
        category: "beach",
        duration: "4 Days / 3 Nights",
        groupSize: "1 – 10 People",
        price: "$420 / person",
        difficulty: "Easy",
        accommodation: "Beachfront hotel",
        bestTime: "December – March and July – October for the driest, sunniest weather",
        destinations: ["malindi", "watamu"],
        shortDesc: "Two marine parks, historic ruins and turquoise lagoons.",
        overview: "A relaxed four days along Kenya's north coast, combining the coral gardens of Malindi and Watamu marine parks with the Gede Ruins, the Arabuko-Sokoke Forest and the mangroves of Mida Creek.",
        highlights: [
            { emoji: "🐠", title: "Two Marine Parks", text: "Snorkel both Malindi and Watamu's protected reefs, among the richest on the Kenyan coast." },
            { emoji: "🏺", title: "Gede Ruins", text: "Explore a mysterious, abandoned 13th-century Swahili city swallowed by coastal forest." },
            { emoji: "🛶", title: "Mida Creek Kayaking", text: "Paddle through mangrove channels alive with wading birds at low tide." },
            { emoji: "🌊", title: "Two Coastal Towns", text: "Experience the contrasting character of historic Malindi and laid-back Watamu in one trip." }
        ],
        whyGo: ["Two of Kenya's best marine parks", "Gede Ruins & Swahili history", "Mida Creek kayaking", "Arabuko-Sokoke birdwatching"],
        itinerary: [
            { title: "Day 1 — Arrival in Malindi", text: "Transfer in, settle by the beach and walk the historic town centre." },
            { title: "Day 2 — Malindi Marine Park", text: "A guided snorkelling trip out to the marine park's coral gardens." },
            { title: "Day 3 — Watamu & Mida Creek", text: "Transfer to Watamu for reef snorkelling and an afternoon kayak at Mida Creek." },
            { title: "Day 4 — Gede Ruins & Departure", text: "A morning visit to the Gede Ruins before your onward transfer." }
        ],
        inclusions: ["All ground transport", "3 nights' accommodation", "Breakfast daily", "Both snorkelling trips, marine park fees & guide"],
        exclusions: ["International flights", "Travel insurance", "Lunch & dinner", "Personal expenses"]
    },
};
