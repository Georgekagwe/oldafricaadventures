/* Old Africa Adventures — blog content
   One entry per article. blog.html lists them all (text-only cards, no
   images); blog-article.html reads the "post" URL parameter
   (e.g. blog-article.html?post=kenya-visa-requirements) and looks up the
   matching entry here to render the full article. Add a new article by
   adding a new object below — no new HTML file needed.

   Fields:
   - category: groups articles on the Categories sidebar (counts are
     computed automatically from what's actually here — don't hardcode them
     anywhere else).
   - date / readTime: shown as the article's byline.
   - excerpt: one-line teaser used on blog.html's cards.
   - featured: set true on exactly one article to feature it at the top of
     blog.html.
   - intro: array of opening paragraphs (plain strings, before any heading).
   - sections: array of { heading, paragraphs: [...], list?: [...] } — list
     is optional, renders as a checklist under that section's paragraphs. */

const OAA_BLOG = {
    "best-time-to-visit-kenya": {
        title: "Best Time to Visit Kenya: A Month-by-Month Safari Guide",
        category: "Safari Guide",
        date: "August 18, 2026",
        readTime: "7 min read",
        excerpt: "There's no single \"best\" month for Kenya — it depends on whether you're chasing the Great Migration, calving season, or simply the lowest rates.",
        featured: true,
        intro: [
            "Kenya is a year-round safari destination — there's no month when the parks are empty of wildlife. That said, timing your trip around what you specifically want to see makes a real difference, and it's the single most common question we get asked when someone starts planning."
        ],
        sections: [
            {
                heading: "The Great Migration Calendar",
                paragraphs: [
                    "July to October is the classic window for the Maasai Mara: millions of wildebeest and zebra move north from the Serengeti, and dramatic river crossings become possible (never guaranteed — the herds move on their own schedule, not a timetable). Days are dry and sunny with cool mornings, which also makes this the busiest and most expensive stretch of the year.",
                    "January to March covers calving season further south on the plains, when huge numbers of wildebeest calves are born in a short window. It draws intense predator activity — lion, cheetah and hyena all follow the vulnerable young — and the light for photography is excellent.",
                    "April to June is Kenya's green season: landscapes are lush, crowds thin out, and lodge rates typically drop. Afternoon showers are common, which is the trade-off for the quieter, better-value experience."
                ]
            },
            {
                heading: "Kenya's Rainy Seasons, in General Terms",
                paragraphs: [
                    "Kenya has two broad rainy periods — the \"long rains\" roughly March to May, and the \"short rains\" roughly November. Both vary noticeably from year to year, so treat these as general patterns rather than fixed rules when you're picking exact dates. Rain rarely ruins a safari outright; it tends to arrive in afternoon bursts rather than settling in for days, and mornings are often clear."
                ]
            },
            {
                heading: "Choosing Based on What You Actually Want",
                paragraphs: [
                    "If this is a first, once-in-a-while trip and you want the highest odds of dramatic wildlife action, aim for July–October. If you're drawn to predator drama and don't mind slightly warmer, greener conditions, January–March is arguably underrated. If budget and fewer crowds matter more than any single spectacle, April–June (and to a lesser extent November) offer real value without sacrificing wildlife viewing — the Big Five don't migrate anywhere."
                ]
            },
            {
                heading: "Coastal Timing Is a Different Question",
                paragraphs: [
                    "If your trip includes the coast — Diani, Malindi, Watamu — the best beach weather runs December to March and July to October, which happens to overlap nicely with peak safari season if you're combining both. Coastal rain patterns don't track the inland safari seasons exactly, so if you're doing a safari-and-beach combo, it's worth planning the itinerary with both halves in mind rather than optimizing for one."
                ]
            }
        ]
    },

    "kenya-visa-requirements": {
        title: "Do You Need a Visa to Visit Kenya?",
        category: "Kenya Travel Guide",
        date: "August 4, 2026",
        readTime: "5 min read",
        excerpt: "Most visitors need an Electronic Travel Authorization before they fly — here's what that process generally involves and how to avoid the common mistakes.",
        intro: [
            "Kenya's entry requirements have shifted to a fully electronic system in recent years, and it's one of the first practical questions almost every client asks us. Requirements do vary by nationality and change over time, so treat this as an orientation to the process rather than the final word — always confirm current requirements against the official source before you book flights."
        ],
        sections: [
            {
                heading: "Kenya's Electronic Travel Authorization",
                paragraphs: [
                    "Kenya now runs entry approval through an online Electronic Travel Authorization (eTA) system rather than a visa stamp arranged on arrival or a sticker issued in advance at an embassy. In practice, this means applying online before you fly, linking the approval to your passport, and carrying confirmation of that approval with you when you travel — there's typically no physical document to collect beforehand.",
                    "A small number of nationalities are exempt or covered by regional arrangements (for example, some East African Community member states), so it's worth checking your specific situation rather than assuming you need to apply."
                ]
            },
            {
                heading: "What You'll Typically Need to Apply",
                paragraphs: [
                    "Applications are generally straightforward: a passport with a reasonable amount of validity remaining beyond your travel dates, a digital passport-style photo, your travel dates and accommodation details, and a way to pay the application fee online. Processing is usually quick, but we'd still recommend applying at least a couple of weeks before departure rather than the night before, in case anything needs correcting."
                ]
            },
            {
                heading: "Mistakes Worth Avoiding",
                paragraphs: [
                    "The most common issue we hear about is travelers using an unofficial third-party website that charges a significant markup over the real government fee — always apply through Kenya's official immigration portal directly. The other frequent problem is passport validity: many countries' entry systems (Kenya included) expect meaningful validity left on your passport well beyond your return date, so it's worth checking that before you even book flights."
                ]
            }
        ],
        closing: "Because these rules do change, please verify the current process and fees on Kenya's official immigration website (or with your nearest Kenyan embassy or consulate) before booking — and feel free to ask us when you get in touch, we're happy to point you in the right direction based on what we're seeing from recent travelers."
    },

    "health-vaccinations-kenya": {
        title: "Health & Vaccinations: What to Know Before You Travel to Kenya",
        category: "Kenya Travel Guide",
        date: "July 22, 2026",
        readTime: "6 min read",
        excerpt: "Not medical advice — but here's what most travelers end up discussing with their doctor before a Kenya safari, and why the timing of that conversation matters.",
        intro: [
            "This isn't medical advice — it's a starting point for the conversation you should have with a doctor or travel health clinic, ideally four to six weeks before you fly, since some precautions need lead time to be effective."
        ],
        sections: [
            {
                heading: "Yellow Fever Certification",
                paragraphs: [
                    "Under international health regulations, Kenya can require proof of yellow fever vaccination from travelers arriving from, or who have recently transited through, a country with risk of yellow fever transmission. Whether this applies to you depends on your travel history, not just your nationality, so check current guidance from the WHO, your national travel health authority, or a travel clinic based on your actual itinerary."
                ]
            },
            {
                heading: "Malaria Prevention",
                paragraphs: [
                    "Most of Kenya's classic safari destinations — the Maasai Mara, Amboseli, Tsavo, Samburu, and the coast — sit in malaria-risk areas, particularly at lower altitudes. Nairobi and the higher slopes of Mount Kenya carry lower risk. Ask your doctor whether antimalarial medication is appropriate for your trip, and combine that with practical prevention: insect repellent, long sleeves and trousers around dawn and dusk when mosquitoes are most active, and using a net where camps provide one."
                ]
            },
            {
                heading: "Routine Travel Vaccinations Worth Checking",
                paragraphs: [
                    "Many travel clinics also review whether you're up to date on hepatitis A and B, typhoid, and tetanus for a trip like this — again, this is a conversation for your doctor based on your personal health history, not a fixed checklist that applies identically to everyone."
                ]
            },
            {
                heading: "Travel Insurance Matters More Than People Expect",
                paragraphs: [
                    "Safari camps and lodges are often genuinely remote. Comprehensive travel insurance that includes medical evacuation coverage is worth having — not because incidents are common, but because the cost and logistics of arranging evacuation privately from a remote camp, if it were ever needed, are significant."
                ]
            }
        ],
        closing: "Talk to a doctor or travel health clinic well before departure — requirements and recommendations can vary by your health history, nationality, and exact itinerary, and this article is only meant to help you know what questions to bring to that appointment."
    },

    "safari-packing-list": {
        title: "What to Pack for a Kenya Safari: The Complete Checklist",
        category: "Safari Guide",
        date: "July 9, 2026",
        readTime: "6 min read",
        excerpt: "Mornings on a game drive can be surprisingly cold and afternoons surprisingly hot — here's how to pack for both without overpacking.",
        intro: [
            "Safari packing has a few genuine quirks that don't come up on a normal holiday — light-aircraft luggage limits, dawn game drives that start cold and end hot, and a couple of items that are more restricted than you'd expect. Here's what actually matters."
        ],
        sections: [
            {
                heading: "Clothing",
                paragraphs: [
                    "Neutral colours (khaki, olive, tan, muted greens) work best — they don't stand out to wildlife and don't show dust the way bright colours or white do. Layers matter more than any single item: mornings on an open-sided vehicle can be genuinely cold, and by mid-morning you'll likely be down to a t-shirt."
                ],
                list: [
                    "A warm layer (fleece or light jacket) for early morning and evening drives",
                    "Breathable, lightweight shirts and trousers for the heat of the day",
                    "A wide-brimmed hat and sunglasses",
                    "Comfortable closed shoes for camp, plus sandals for downtime",
                    "A light rain jacket if you're travelling in the green season"
                ]
            },
            {
                heading: "Sun and Bug Protection",
                paragraphs: [
                    "The equatorial sun is stronger than it feels, especially with the breeze from an open vehicle masking how much you're burning. Bring a high-SPF sunscreen, lip balm with SPF, and a reliable insect repellent — DEET-based products are the most effective option most travel clinics recommend."
                ]
            },
            {
                heading: "Camera and Optics",
                paragraphs: [
                    "If wildlife photography matters to you, a zoom lens (200mm or longer) makes a bigger difference than almost any other gear choice — animals are often further away than they look in other people's photos. Bring more memory cards and batteries than you think you'll need, and a dry bag or dust cover for camera gear, since safari roads are dusty. A pair of binoculars per person is worth it even if you're not photographing — guides can spot things well before you can see them with the naked eye."
                ]
            },
            {
                heading: "Practical Extras",
                paragraphs: [
                    "A portable power bank is genuinely useful, since not every camp has power at your tent around the clock. Kenya uses UK-style three-pin plugs (Type G), so pack the right adapter. Carry some cash in small denominations (Kenyan shillings and small-denomination US dollars are both widely useful) for tips and small purchases at community visits or curio stalls, where cards often aren't an option."
                ]
            },
            {
                heading: "What to Leave at Home",
                paragraphs: [
                    "Camouflage-patterned clothing is restricted for civilians in Kenya (and several neighbouring countries) — leave it out of your suitcase entirely, including for children. If you're flying between parks on a light aircraft, ask about the luggage weight and bag-type limit in advance — most operators require a soft-sided duffel bag rather than a rigid suitcase, since it packs more easily into small aircraft holds."
                ]
            }
        ]
    },

    "kenya-safari-cost-budget": {
        title: "How Much Does a Kenya Safari Cost? A Realistic Budget Guide",
        category: "Kenya Travel Guide",
        date: "June 26, 2026",
        readTime: "6 min read",
        excerpt: "Safari pricing varies enormously depending on a handful of choices — here's what actually drives the cost, and where you can save without giving up the experience.",
        intro: [
            "\"How much does this cost?\" is usually the very first question after \"when should I go?\" — and it's a genuinely hard one to answer in the abstract, because a handful of choices swing the price more than anything else."
        ],
        sections: [
            {
                heading: "What Actually Drives the Price",
                paragraphs: [
                    "Accommodation tier matters more than almost anything else — a basic tented camp, a comfortable mid-range lodge, and a luxury private camp can differ enormously in price for the same park. Group size matters too: a private vehicle and guide cost more per person than joining a small shared group. Season plays a role, with July–October and the calving months typically priced higher than the quieter green season. Finally, how you move between parks — road transfers versus light-aircraft flights — adds up quickly on longer multi-park itineraries."
                ]
            },
            {
                heading: "A Sense of Range",
                paragraphs: [
                    "Rather than quote industry-wide figures that go stale quickly, it's more useful to look at real examples: our own tours currently range from around $95 per person for a half-day or day trip close to Nairobi, up to $1,150+ per person for a multi-day safari-and-beach combination. Most classic multi-day safari packages (3–6 days, mid-range accommodation, small group) tend to land somewhere in the middle of that range. A custom quote based on your actual dates, group size, and preferred accommodation level will always be more accurate than any general figure."
                ]
            },
            {
                heading: "What's Usually Included vs. What's Extra",
                paragraphs: [
                    "Most well-put-together safari packages include ground transport, accommodation, meals during the safari, park entry fees, and game drives with a guide — those are the big-ticket items that are easiest to bundle. International flights, travel insurance, tips for guides and camp staff, alcoholic drinks, and personal souvenirs are almost always separate, so budget for them on top of the quoted package price."
                ]
            },
            {
                heading: "Ways to Manage the Cost Without Cutting the Experience",
                paragraphs: [
                    "Travelling in the green season (April–June) typically gets you meaningfully lower rates at the same lodges. Joining a small shared-group departure instead of booking a private vehicle reduces per-person cost noticeably. Choosing parks closer to Nairobi (like Nairobi National Park, Lake Nakuru, or Amboseli) over those requiring a flight or a very long drive also keeps transfer costs down. None of these trade-offs reduce the quality of the wildlife viewing — they mainly affect price and crowd levels."
                ]
            }
        ],
        closing: "The most reliable way to get an accurate number is a custom quote — tell us your dates, group size, and what matters most to you, and we'll put together pricing based on that rather than a generic estimate."
    },

    "is-kenya-safe-for-tourists": {
        title: "Is Kenya Safe for Tourists?",
        category: "Kenya Travel Guide",
        date: "June 10, 2026",
        readTime: "5 min read",
        excerpt: "A fair, balanced look at the question almost every first-time visitor asks — and the practical steps that actually make the biggest difference.",
        intro: [
            "This comes up in nearly every first conversation with a new client, and it deserves a straight answer rather than either dismissing the question or overstating the risk."
        ],
        sections: [
            {
                heading: "Safari Areas Have a Strong Safety Record",
                paragraphs: [
                    "Guided, vehicle-based safaris in Kenya's national parks and reserves are, in practical terms, a very safe way to experience wildlife — you're with an experienced guide who reads animal behaviour for a living, in a vehicle, following well-established protocols. The main rules that matter: stay in the vehicle unless your guide says otherwise, don't walk around camp alone after dark in an unfenced camp, and always follow your guide's instructions immediately, especially around water sources and thick bush."
                ]
            },
            {
                heading: "Nairobi and Other Cities",
                paragraphs: [
                    "Like any large city, Nairobi has areas and situations that call for ordinary travel common sense: avoid displaying valuables openly, use transport arranged by your operator or a reputable taxi app rather than hailing an unmarked vehicle, and be more cautious after dark, particularly on foot. Most visitors pass through Nairobi only briefly at the start and end of their trip, and doing so without incident is the norm, not the exception."
                ]
            },
            {
                heading: "Road Travel",
                paragraphs: [
                    "Kenyan roads vary from excellent tarmac to rough unpaved tracks, particularly closer to remote parks. Reputable operators use experienced drivers who know the specific routes and well-maintained vehicles suited to those conditions — this is genuinely one of the more meaningful safety factors in choosing who to travel with, more so than most people expect going in."
                ]
            },
            {
                heading: "The More Realistic Day-to-Day Risks",
                paragraphs: [
                    "For most safari travelers, sun exposure, dehydration, and — for those climbing Mount Kenya — altitude are more realistic everyday concerns than crime or dangerous wildlife encounters. They're also the easiest to manage: drink more water than feels necessary, pace yourself on any trek, and don't skip the health precautions covered in our vaccinations article."
                ]
            },
            {
                heading: "Check Official Travel Advisories",
                paragraphs: [
                    "Conditions can vary by region and change over time, so the most reliable, current source is your own government's travel advisory for Kenya — check it before you finalize your trip, not just before you leave."
                ]
            }
        ],
        closing: "Booking with a licensed, experienced local operator who knows current conditions on the ground is itself one of the best safety measures you can take — it's a large part of why we run every trip the way we do."
    },

    "maasai-mara-vs-amboseli-vs-tsavo": {
        title: "Maasai Mara vs Amboseli vs Tsavo: Which Should You Visit First?",
        category: "Safari Guide",
        date: "May 21, 2026",
        readTime: "6 min read",
        excerpt: "Three of Kenya's best-known parks, three very different experiences — here's how to decide, or whether to just do more than one.",
        intro: [
            "These are the three parks we get asked to compare most often, and the honest answer is that they're different enough in character that the choice usually comes down to what you're most excited to see, not which one is objectively \"best.\""
        ],
        sections: [
            {
                heading: "Maasai Mara: Best for Density and the Migration",
                paragraphs: [
                    "If you want the highest concentration of predators and the Great Migration's river crossings (July–October), the Mara is the standard-bearer for a reason. It's also an excellent choice for a first safari precisely because sightings tend to come thick and fast. The trade-off is that it's the most visited of the three, especially in peak season."
                ]
            },
            {
                heading: "Amboseli: Best for Elephants and That Kilimanjaro Shot",
                paragraphs: [
                    "Amboseli is famous for two things at once: some of Africa's largest, best-studied elephant herds, and open plains that put Mount Kilimanjaro directly in the background of your photos on a clear morning. It suits travelers who want a slightly quieter, more photography-focused park without sacrificing big-game viewing."
                ]
            },
            {
                heading: "Tsavo: Best for Space and Value",
                paragraphs: [
                    "Kenya's largest protected area sees a fraction of the Mara's visitor numbers, so game drives feel genuinely remote. It's known for red-dusted elephants (a result of the local volcanic soil), dramatic lava-flow landscapes, and generally lower prices than the more famous parks. It's also a natural stop on the route between Nairobi and the coast, which makes it easy to combine with a beach extension."
                ]
            },
            {
                heading: "Can You Just Do More Than One?",
                paragraphs: [
                    "Yes, and many of our clients do exactly that. Our Tsavo & Amboseli Combo pairs the two southern parks on one route without backtracking, and our Safari & Beach Combo pairs the Mara with a stretch of Diani Beach. Combining two parks generally costs more than visiting one, but it's a good option if you can't decide, or simply have the time for a longer trip."
                ]
            },
            {
                heading: "A Quick Way to Decide",
                paragraphs: [],
                list: [
                    "Want the highest odds of dramatic Big Five action and the Migration → Maasai Mara",
                    "Want elephants with a mountain backdrop and great photography → Amboseli",
                    "Want space, solitude, and better value → Tsavo",
                    "Can't choose, or have 6+ days → consider combining two"
                ]
            }
        ]
    },

    "maasai-culture-responsibly": {
        title: "Experiencing Maasai Culture Responsibly: A Guide for Visitors",
        category: "Culture & Experience",
        date: "May 3, 2026",
        readTime: "5 min read",
        excerpt: "A cultural visit can be one of the most meaningful parts of a Kenya trip, or feel like a staged photo-op — the difference comes down to a few simple choices.",
        intro: [
            "A guided visit to a Maasai community is one of the most requested add-ons to a wildlife-focused safari, and it can be genuinely meaningful — but a few simple choices make the difference between a respectful exchange and something that feels extractive."
        ],
        sections: [
            {
                heading: "Choose Visits That Genuinely Benefit the Community",
                paragraphs: [
                    "Ask how the visit is structured and where the fee actually goes. A well-run community visit compensates the people you're meeting fairly and directly, rather than routing most of the money through an unrelated middleman. We only arrange visits we're confident are structured this way."
                ]
            },
            {
                heading: "Ask Before You Photograph Anyone",
                paragraphs: [
                    "Always ask permission before photographing individuals, not just the group generally. It's common and entirely fair for a small fee to be expected in exchange for photos in some communities — treat that as a normal part of the visit, not an inconvenience."
                ]
            },
            {
                heading: "Buy Directly From Artisans",
                paragraphs: [
                    "Beadwork, jewellery, and other crafts bought directly from the people who made them put money straight into local families, rather than into a generic souvenir supply chain. It's usually a better souvenir too — you'll know exactly who made it and where."
                ]
            },
            {
                heading: "Dress and Behaviour",
                paragraphs: [
                    "Modest dress is appreciated in rural community settings, and it's worth asking your guide before entering someone's home rather than assuming it's open to visitors. Small courtesies like this go a long way and are usually simple to get right if you just ask."
                ]
            },
            {
                heading: "It's an Exchange, Not a Performance",
                paragraphs: [
                    "The most rewarding visits tend to happen when travelers approach them with genuine curiosity and let the conversation (usually through your guide, who often translates) go beyond a quick walkthrough. Ask questions about daily life, not just tradition — most communities are happy to talk about both, and it tends to make the whole visit feel far less like a scheduled stop on a tour."
                ]
            }
        ]
    },
};
