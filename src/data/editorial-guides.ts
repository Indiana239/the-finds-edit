import type { Guide, Locale } from "@/types/content";

const images = {
  skincare: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=85",
  cleanser: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85",
  sunscreen: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1400&q=85",
  moisturizer: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1400&q=85",
  travel: "https://images.unsplash.com/photo-1553531384-411a247ecd73?auto=format&fit=crop&w=1400&q=85",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
  storage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  desk: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
  bag: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1400&q=85",
};

const en: Guide[] = [
  {
    slug: "building-a-simple-skincare-routine",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "A Simple Skincare Routine for Beginners",
    seoTitle: "Simple Skincare Routine for Beginners",
    excerpt: "Starting skincare can feel confusing when every shelf promises something different. Begin with a few clear steps and add products only when you know why you need them.",
    seoDescription: "New to skincare? Learn how to build a simple cleanser, moisturizer, and sunscreen routine without buying a crowded shelf of products.",
    dateLabel: "BEGINNER'S GUIDE", publishedAt: "2026-11-08", readTime: "6 MIN READ", image: images.skincare,
    imageAlt: "A small selection of skincare bottles arranged on a neutral surface",
    sections: [
      { heading: "When every skincare shelf feels like a checklist", paragraphs: [
        "If you are new to skincare, it is easy to feel behind. One person recommends a serum, another talks about exfoliating acids, and a short video can make it seem as though a basic routine is never enough. Before long, choosing a first cleanser feels like a research project.",
        "The problem is not that you are missing ten steps. It is that too many choices are being presented before you have worked out what you actually want your routine to do. A useful starting point is deliberately small: clean the skin, moisturize when needed, and protect it from the sun during the day."
      ]},
      { heading: "Start with three everyday roles", paragraphs: [
        "A cleanser is there to remove the day's dirt, oil, and residue. Look for something described for facial use that feels comfortable when rinsed away. A strong squeaky-clean feeling is not a goal you need to chase.",
        "A moisturizer helps reduce the feeling of dryness and supports a comfortable finish. Texture is personal: some people prefer a light lotion, while others like a richer cream. You do not need to choose based on a trend or on the most complicated ingredient list.",
        "For daytime, sunscreen is the protection step. The American Academy of Dermatology recommends broad-spectrum protection, SPF 30 or higher, and water resistance. Follow the label for how much to apply and when to reapply."
      ], bullets: [
        "Morning: use the steps that suit your skin and finish with sunscreen.",
        "Evening: cleanse gently and moisturize if your skin needs it.",
        "Keep the routine short enough that you can repeat it on an ordinary day."
      ]},
      { heading: "How to stop buying products before you understand them", paragraphs: [
        "Before adding another product, name the problem you want it to solve. Is your current routine difficult to use? Does a cleanser leave an uncomfortable feeling? Do you avoid sunscreen because of its texture? A specific problem gives you a better buying checklist than a trending ingredient ever will.",
        "Introduce new products gradually rather than changing everything at once. That makes it easier to notice what you like or what does not agree with your skin. If you develop persistent or severe irritation, stop using the product and seek advice from a qualified healthcare professional."
      ], bullets: [
        "Check the intended use and complete ingredient list.",
        "Compare texture, fragrance, packaging, size, and the manufacturer's directions.",
        "Avoid products that promise instant, guaranteed, or universal results."
      ]},
      { heading: "A sensible first shopping list", paragraphs: [
        "You can begin by comparing one facial cleanser, one moisturizer, and one sunscreen. That is a shortlist, not a requirement to buy all three at once. If you already own a product that works comfortably and is within its recommended use period, there may be no reason to replace it.",
        "For a deeper explanation of product order and everyday care, see the American Academy of Dermatology's [skin care basics](https://www.aad.org/public/everyday-care/skin-care-basics) and its [budget-friendly skincare guidance](https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget)."
      ]},
      { heading: "A quick way to decide what belongs in your routine", paragraphs: [
        "Write down what you already use for one ordinary week. Note which products you reach for, which ones you avoid, and when discomfort or inconvenience tends to happen. This simple inventory prevents you from buying a second cleanser or moisturizer just because a new product is popular. It also shows whether your main issue is the product itself, the order of use, or a routine that takes too long.",
        "A beginner routine should be easy to repeat and easy to understand. If a product has directions you cannot follow confidently, or if you are unsure whether it is suitable for your circumstances, pause and check the manufacturer's information or ask a qualified professional. A short routine is not a lesser routine; it is a way to make each step understandable before adding another one."
      ], bullets: [
        "Keep products you already tolerate and use as directed.",
        "Add a new item only when you can explain the job it is meant to do.",
        "Give yourself time to understand one change before making another."
      ]},
    ],
    related: ["choosing-a-gentle-face-cleanser", "finding-a-sunscreen-you-will-wear", "choosing-a-moisturizer-texture"],
    sources: [{ label: "American Academy of Dermatology: Skin care basics", url: "https://www.aad.org/public/everyday-care/skin-care-basics" }, { label: "American Academy of Dermatology: Skin care on a budget", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget" }]
  },
  {
    slug: "choosing-a-gentle-face-cleanser",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "How to Choose a Face Cleanser That Feels Comfortable",
    seoTitle: "How to Choose a Gentle Face Cleanser",
    excerpt: "A face wash can leave your skin feeling tight, or it may simply be a poor match for your routine. Here is what to compare before buying another bottle.",
    seoDescription: "Learn what to look for in a facial cleanser, how to wash without unnecessary scrubbing, and what to compare before choosing a new face wash.",
    dateLabel: "BUYING GUIDE", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.cleanser,
    imageAlt: "Facial cleanser and simple skincare items on a clean surface",
    sections: [
      { heading: "That tight feeling after washing", paragraphs: [
        "You wash your face, rinse it, and your skin immediately feels tight. Maybe you reach for moisturizer as quickly as possible, or you assume that the cleanser must be doing a thorough job because your face feels very clean. It is understandable, but that sensation is not a useful performance score.",
        "A cleanser should fit the way you use it and leave your skin feeling comfortable. If a product repeatedly leaves you uncomfortable, do not feel obliged to finish it just because you bought it."
      ]},
      { heading: "What to compare on the label", paragraphs: [
        "Start with the product's intended use. A body wash, makeup remover, and facial cleanser are not interchangeable just because they all foam. Look for clear directions for facial use and read the full ingredient list, especially if you already know that certain ingredients do not suit you.",
        "The American Academy of Dermatology recommends a gentle, non-abrasive cleanser and lukewarm water. It also advises using your fingertips rather than scrubbing with a rough cloth or sponge. Those small habits can matter as much as the bottle you choose."
      ], bullets: [
        "Choose a texture you can use comfortably: gel, cream, lotion, or another format.",
        "Check whether fragrance is included if you prefer to avoid it.",
        "Read the directions and avoid assuming that more foam means a better clean."
      ]},
      { heading: "A calmer way to wash", paragraphs: [
        "Wet your face with lukewarm water, apply the cleanser gently with your fingertips, rinse, and pat dry. Avoid turning the routine into a scrub. If you wash more often than you need to, consider whether the extra step is making your routine harder rather than better.",
        "If discomfort continues after changing your routine, or you experience ongoing redness, swelling, or pain, seek advice from a dermatologist or another qualified healthcare professional instead of trying a series of random products."
      ]},
      { heading: "Before you add it to your basket", paragraphs: [
        "Compare the amount in the bottle, the pump or cap, the directions, the seller, and the return policy. A low price is not much of a saving if the texture makes you avoid using the product. You may also want to compare a fragrance-free option, but remember that the full ingredient list matters more than a single label claim.",
        "For step-by-step washing advice, read the [American Academy of Dermatology's face-washing guide](https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101)."
      ]},
      { heading: "How to compare two cleansers without getting distracted", paragraphs: [
        "Put two products side by side and compare their intended use, directions, ingredient lists, size, and cost per amount. Then look at the parts of the experience that matter to you: how easy the cap is to open, whether the texture is easy to rinse, and whether the bottle can sit safely near your sink. These details do not prove that one formula is better, but they help you choose something you can realistically use.",
        "Try not to treat foam, fragrance, or a strong after-wash sensation as proof of effectiveness. A cleanser is one part of a routine, not a test of how much you can strip away. If you have a known sensitivity, read the full ingredient list and follow the advice you have been given by your clinician rather than relying on a broad label claim."
      ], bullets: [
        "Compare the full ingredient list, not only front-label claims.",
        "Check the amount dispensed per pump or squeeze if that affects daily use.",
        "Avoid buying a large size until you know the format suits your routine."
      ]},
    ],
    related: ["building-a-simple-skincare-routine", "introducing-new-skincare-products-slowly"],
    sources: [{ label: "American Academy of Dermatology: Face washing 101", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101" }]
  },
  {
    slug: "finding-a-sunscreen-you-will-wear",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "How to Find a Sunscreen You Will Actually Wear",
    seoTitle: "How to Choose Sunscreen You Will Wear Daily",
    excerpt: "If sunscreen feels sticky, leaves a visible cast, or does not sit well under makeup, it can be tempting to skip it. Compare comfort and label basics together.",
    seoDescription: "A practical sunscreen buying guide covering broad-spectrum protection, SPF, water resistance, texture preferences, and label checks.",
    dateLabel: "BUYING GUIDE", publishedAt: "2026-11-08", readTime: "6 MIN READ", image: images.sunscreen,
    imageAlt: "Sun protection products arranged for a bright outdoor day",
    sections: [
      { heading: "When the sunscreen stays in the drawer", paragraphs: [
        "Maybe the last sunscreen you tried felt heavy, left a white cast, pilled under makeup, or made reapplication unpleasant. After a few frustrating attempts, it is easy to decide that sunscreen is just not for you. The real issue may be that the product's finish does not fit your routine.",
        "Texture matters because a product you dislike is harder to use consistently. But comfort should sit alongside the protection information on the label, not replace it."
      ]},
      { heading: "The label details worth checking first", paragraphs: [
        "For everyday selection, the American Academy of Dermatology recommends a sunscreen that is broad-spectrum, SPF 30 or higher, and water resistant. Broad-spectrum means the product protects against both UVA and UVB rays. Water resistance is labelled for a specific duration, commonly 40 or 80 minutes; it does not mean waterproof.",
        "SPF is not a timer that tells you how long you can stay in the sun. Follow the product directions. The AAD advises reapplying at least every two hours when outdoors, and after swimming or sweating, according to the product label."
      ], bullets: [
        "Confirm broad-spectrum coverage and SPF 30 or higher.",
        "Check the water-resistance duration if you expect to swim or sweat.",
        "Read the instructions for application amount and reapplication."
      ]},
      { heading: "Now compare the everyday experience", paragraphs: [
        "Once the label meets your basic criteria, compare the format and finish. Lotions, creams, gels, and sticks can feel different and suit different preferences. Think about when you will use it: under makeup, during a commute, for outdoor activity, or on days when you want a quick routine.",
        "Avoid relying on one person's review as proof that the texture will feel the same on you. Look for clear product information, a full ingredient list where available, and a seller you can verify."
      ]},
      { heading: "Make the decision easier", paragraphs: [
        "Choose a format you are willing to apply in the amount and frequency recommended. If the finish is the reason you keep skipping sunscreen, compare a few different textures rather than abandoning sun protection entirely. Clothing, shade, and other sun-protective habits also matter.",
        "For more detail, see the [AAD sunscreen selection guide](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen) and [how to apply sunscreen](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen)."
      ]},
      { heading: "Build a sunscreen comparison around your actual day", paragraphs: [
        "Think about the setting in which you most often forget sunscreen. A rushed morning, makeup, outdoor exercise, commuting, and a day near water create different practical questions. You may want a formula that layers comfortably under other products, a format that is easy to reapply, or a water-resistant option when your activities call for it. Start with the protection information on the label, then compare these day-to-day details.",
        "Do not compare products by SPF number alone or assume that a higher number means you can apply less. Follow the directions for the individual product, including the amount and reapplication guidance. If a sunscreen consistently irritates your skin or eyes, stop using it and ask a qualified professional for help identifying a suitable alternative."
      ], bullets: [
        "Check broad-spectrum coverage, SPF, and water-resistance duration first.",
        "Compare finish, texture, packaging, and how you plan to reapply.",
        "Make sure the directions are clear and the seller is trustworthy."
      ]},
    ],
    related: ["building-a-simple-skincare-routine", "choosing-a-moisturizer-texture", "packing-a-practical-skincare-travel-kit"],
    sources: [{ label: "American Academy of Dermatology: How to select a sunscreen", url: "https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen" }, { label: "American Academy of Dermatology: How to apply sunscreen", url: "https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen" }]
  },
  {
    slug: "choosing-a-moisturizer-texture",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "Choosing a Moisturizer Texture That Fits Your Day",
    seoTitle: "How to Choose a Moisturizer Texture",
    excerpt: "A moisturizer can feel too rich, too sticky, or disappear too quickly. Start with the finish and routine you prefer instead of chasing a one-size-fits-all formula.",
    seoDescription: "Compare moisturizer textures, product labels, packaging, and everyday use to find an option that fits your preferences and routine.",
    dateLabel: "BUYING GUIDE", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.moisturizer,
    imageAlt: "Moisturizer jar and simple personal care products",
    sections: [
      { heading: "The moisturizer that never feels quite right", paragraphs: [
        "You apply a moisturizer and spend the next hour noticing it. Maybe it feels heavy by midday, leaves a tacky finish, or does not feel comfortable under sunscreen. Or perhaps the container is awkward and you keep forgetting to use it. A product can be well made and still be a poor fit for your preferences.",
        "People with oily skin may also want to moisturize. The goal is not to pick the richest cream or the lightest gel by default; it is to compare what the product is designed for and how its texture fits your routine."
      ]},
      { heading: "Understand the common formats", paragraphs: [
        "Lotions are usually easier to spread and may feel lighter than creams. Creams tend to feel richer. Gels and gel-creams can feel lighter or more refreshing to some people, although product formulas vary. These are broad texture descriptions, not guarantees about how a specific formula will feel.",
        "Labels such as 'non-comedogenic' may help narrow a shortlist if clogged pores are a concern, but no label can guarantee that a product will suit every person. Check the directions and full ingredient list rather than choosing from the front label alone."
      ], bullets: [
        "Think about when you apply it: morning, evening, or both.",
        "Compare finish, absorption feel, fragrance, and packaging.",
        "Check whether the container is practical and easy to use cleanly."
      ]},
      { heading: "Test the fit before committing to a large size", paragraphs: [
        "If samples or smaller sizes are available, they can be a lower-commitment way to understand the texture. Introduce a new moisturizer on its own rather than changing several products at the same time. That makes it easier to identify what you like or dislike.",
        "Stop using a product that causes a reaction. If a skin concern is persistent or difficult to understand, consult a qualified professional rather than buying more products in the hope that one will solve it."
      ]},
      { heading: "A short comparison checklist", paragraphs: [
        "Before buying, compare the intended use, texture description, ingredient list, container size, and return terms. Think about the rest of your routine too: a moisturizer that works comfortably with the sunscreen you already own may be more practical than one that looks appealing in isolation.",
        "For a reminder that oily skin can still need moisturizer, see the [American Academy of Dermatology's budget-friendly skin care guide](https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget)."
      ]},
      { heading: "Make the comparison more useful than a texture trend", paragraphs: [
        "Choose a moment in your routine and imagine using each option then. A lightweight lotion may be convenient before sunscreen or makeup, while a richer cream may feel more comfortable as part of an evening routine. Those are preferences to test, not universal rules about skin types. Formulas within the same category can also feel very different, so read the specific product description rather than relying on the word gel, lotion, or cream alone.",
        "If you are comparing online, look for package size, ingredient list, directions, and whether a smaller size is available. Product photos can show packaging but rarely communicate texture accurately. User reviews may help you spot recurring practical details, but individual experiences are not a guarantee that the same formula will feel identical on your skin."
      ], bullets: [
        "Compare the product's intended use and the full ingredient list.",
        "Consider a smaller size before committing to a large container.",
        "Think about how it layers with products already in your routine."
      ]},
    ],
    related: ["building-a-simple-skincare-routine", "choosing-a-gentle-face-cleanser", "introducing-new-skincare-products-slowly"],
    sources: [{ label: "American Academy of Dermatology: Skin care on a budget", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget" }]
  },
  {
    slug: "introducing-new-skincare-products-slowly",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "How to Introduce New Skincare Products Slowly",
    seoTitle: "How to Introduce New Skincare Products Slowly",
    excerpt: "Changing cleanser, serum, and moisturizer at the same time makes it difficult to tell what is working. A slower approach gives you clearer information.",
    seoDescription: "Learn a cautious way to introduce skincare products, read product directions, and test for possible reactions before changing your routine.",
    dateLabel: "PRACTICAL GUIDE", publishedAt: "2026-11-08", readTime: "6 MIN READ", image: images.skincare,
    imageAlt: "A small set of skincare products ready to be added to a routine",
    sections: [
      { heading: "When a new routine becomes too many changes at once", paragraphs: [
        "You buy a new cleanser, moisturizer, and serum because each one seems useful. A few days later, your skin feels different and you cannot work out which product is responsible. You may be left guessing, or replacing the whole set again.",
        "Introducing several new products at once makes it harder to understand your own experience. A slower routine is not exciting, but it gives you a clearer way to notice changes and decide whether a product belongs in your day."
      ]},
      { heading: "Change one thing at a time", paragraphs: [
        "Keep the rest of your routine as steady as you reasonably can while you introduce a new product. Read the manufacturer's instructions and use the product as directed. Avoid adding multiple products with strong active ingredients just because they are popular together.",
        "The American Academy of Dermatology recommends testing skincare products on a small area before adding them to a routine. Its at-home guidance describes applying the product to a test spot twice daily for seven to ten days, following the directions for products that are normally rinsed off. This is a practical precaution, not a guarantee that a reaction cannot occur."
      ], bullets: [
        "Read the full directions before the first use.",
        "Introduce one new product at a time where practical.",
        "Keep track of when you started using it and any reaction you notice."
      ]},
      { heading: "Know when to stop", paragraphs: [
        "If a product causes a reaction, stop using it and follow appropriate care guidance. Severe, persistent, or worrying symptoms deserve advice from a qualified healthcare professional. Do not keep applying a product just to see whether the discomfort will pass.",
        "Be careful with claims that suggest redness, burning, or peeling means a product is automatically working. Discomfort is not proof of effectiveness."
      ]},
      { heading: "Buy with a plan, not a haul", paragraphs: [
        "Before buying, write down what role the product would play, what you already own, and whether the new item duplicates an existing step. A smaller number of well-understood products is easier to manage than a shelf full of products you have not had time to evaluate.",
        "Read the [AAD guide to testing skincare products](https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products) for the full at-home testing steps."
      ]},
      { heading: "Keep a simple record while you make a change", paragraphs: [
        "You do not need a complicated spreadsheet. Write down the date you started, how you used the product, and any noticeable changes or discomfort. Keep the rest of your routine as consistent as possible, and do not deliberately continue a product that causes a concerning reaction just to complete a test period. Follow product directions and seek professional advice when symptoms are severe, persistent, or worrying.",
        "A small record is useful because memory can blur when several products are involved. It can help you describe what happened if you speak with a dermatologist, pharmacist, or other qualified professional. It is not a diagnostic tool and cannot establish that a particular ingredient caused a reaction, but it is more useful than changing everything at once and trying to remember the sequence later."
      ], bullets: [
        "Record the product name, start date, and how often you used it.",
        "Do not add another new product while you are still evaluating the first.",
        "Stop and seek qualified advice if you experience a significant reaction."
      ]},
    ],
    related: ["building-a-simple-skincare-routine", "choosing-a-gentle-face-cleanser", "choosing-a-moisturizer-texture"],
    sources: [{ label: "American Academy of Dermatology: How to test skin care products", url: "https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products" }]
  },
  {
    slug: "packing-a-practical-skincare-travel-kit",
    categorySlug: "beauty-self-care", categoryLabel: "Beauty & self-care",
    title: "Packing a Practical Skincare Kit for Travel",
    seoTitle: "How to Pack a Practical Skincare Travel Kit",
    excerpt: "A full bathroom shelf is difficult to carry and easy to overpack. Build a travel kit around the routine you already use and the length of your trip.",
    seoDescription: "A practical guide to choosing a travel skincare pouch, packing only the essentials, and comparing reusable bottles and organizers.",
    dateLabel: "TRAVEL EDIT", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.travel,
    imageAlt: "A neatly packed travel toiletry kit",
    sections: [
      { heading: "The overpacked toiletry bag problem", paragraphs: [
        "You pack for a short trip and somehow end up carrying half the bathroom. The pouch gets bulky, small bottles disappear at the bottom, and you bring products you barely use at home. It is a familiar kind of over-preparation.",
        "A travel kit works better when it supports the routine you already understand. It does not need to become a separate collection of travel-only products."
      ]},
      { heading: "Decide what actually needs to travel", paragraphs: [
        "Start with the products you use consistently and consider the length of the trip, where you are staying, and what you can reasonably buy at the destination. Avoid adding new skincare products just before travelling, when it is harder to understand how your skin may respond.",
        "For each item, check the manufacturer's storage instructions and whether the original packaging needs to be kept. Do not transfer products into unlabelled containers if doing so could make the contents or use instructions unclear."
      ], bullets: [
        "Choose a pouch that fits the products you already use.",
        "Check bottle capacity, closure quality, and whether compartments are washable.",
        "Pack a small number of items with clearly identifiable contents."
      ]},
      { heading: "Compare organizers by real dimensions", paragraphs: [
        "A pouch that looks spacious in a product photo may be shallow or narrow in real life. Compare its width, height, depth, opening, and internal layout against the bottles you plan to carry. A wide opening can make it easier to see what is inside; separate compartments may help keep items apart.",
        "If you plan to use refillable travel bottles, check that they are made for the product type you intend to put inside and that their instructions explain cleaning and refilling. A leakproof claim should be supported by clear product information, not assumed from the appearance of the cap."
      ]},
      { heading: "A quick check before checkout", paragraphs: [
        "Measure the products you intend to carry, then compare them with the organizer's internal dimensions. Check material, seams, closure, cleaning directions, and the seller's return terms. The best travel pouch is the one that fits your routine and luggage without encouraging you to pack more than you need."
      ]},
      { heading: "A packing test before you buy travel containers", paragraphs: [
        "Lay out the products you genuinely use on a normal day, then separate the items that are essential for the trip from those you can leave at home. Check the length of the trip, whether you can buy replacements at the destination, and whether the accommodation provides any basics you are comfortable using. This helps you avoid transferring every bottle into a smaller container simply because empty travel bottles are sold in a set.",
        "Before decanting anything, confirm that the container is appropriate for the product and can close securely. Keep labels or another clear way to identify what is inside. Follow airline and airport rules for liquids, which can vary by route and may change; check the current rules for your departure airport and airline rather than relying on an old packing tip."
      ], bullets: [
        "Make a short list before shopping for a pouch or bottle set.",
        "Compare actual container dimensions and closure design.",
        "Check current transport rules and the product's storage instructions."
      ]},
    ],
    related: ["building-a-simple-skincare-routine", "finding-a-sunscreen-you-will-wear", "choosing-a-gentle-face-cleanser"],
    sources: [{ label: "Transportation Security Administration: Travel checklist", url: "https://www.tsa.gov/sites/default/files/tsa-travel-checklist.pdf" }]
  },
  {
    slug: "choosing-small-kitchen-tools-that-earn-their-space",
    categorySlug: "home-kitchen", categoryLabel: "Home & kitchen",
    title: "Small Kitchen Tools That Earn Their Space",
    seoTitle: "How to Choose Useful Small Kitchen Tools",
    excerpt: "A clever gadget is not useful if it duplicates what you own, takes too long to clean, or never fits in the drawer. Start with a task you repeat.",
    seoDescription: "A practical checklist for choosing compact kitchen tools based on recurring tasks, storage space, cleaning, materials, and maintenance.",
    dateLabel: "HOME & KITCHEN", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.kitchen,
    imageAlt: "A compact, practical kitchen with everyday cooking tools",
    sections: [
      { heading: "The drawer full of tools you rarely use", paragraphs: [
        "A gadget looks useful when you see it online. Then it arrives, takes up more space than expected, and becomes another thing to wash. The problem is rarely a lack of gadgets; it is that the purchase was not connected to a task you do often.",
        "Before choosing a tool, think about the small jobs that repeatedly slow you down: opening, slicing, measuring, storing, or cleaning up. A product has a better chance of earning its place when it solves a recurring inconvenience."
      ]},
      { heading: "Measure the kitchen before browsing", paragraphs: [
        "Check the available drawer, shelf, and counter space. Compare the tool's full dimensions, including handles or accessories, rather than relying on a styled product photo. If you have to move several items to reach it, you may not use it as often as you expect.",
        "Look at how the tool comes apart, which parts need hand washing, and whether replacement parts or clear care instructions are available. Easy cleaning is not a glamorous feature, but it affects how practical a tool feels after the first week."
      ], bullets: [
        "Name the repeated task it should make easier.",
        "Measure storage space before choosing the size.",
        "Check cleaning instructions, materials, and included parts."
      ]},
      { heading: "Avoid buying a duplicate", paragraphs: [
        "Compare the proposed tool with items already in your kitchen. Does it offer a genuinely different use, or does it simply perform a job you can already do with what you own? Multi-purpose products can be helpful, but only when they are comfortable to use and easy to maintain.",
        "Be wary of product descriptions that focus on a long list of possible uses without showing the dimensions, care details, or limitations. For example, if you cook meat or poultry often, a food thermometer may solve a recurring task that a general-purpose gadget cannot. The USDA explains [how to use a food thermometer](https://ask.fsis.usda.gov/article/How-to-use-a-food-thermometer), which is useful background before comparing probe design, readability, and cleaning instructions."
      ]},
      { heading: "A better small-tool shortlist", paragraphs: [
        "Start with one tool that solves a real repeated task. Compare its size, material, cleaning requirements, storage footprint, and warranty or return terms. You can always add another item later, after you have seen how the first one fits into your kitchen."
      ]},
      { heading: "Use a one-week test before adding another gadget", paragraphs: [
        "For one week, notice which kitchen task repeatedly slows you down. Is it opening packages, draining food, measuring ingredients, or reaching something stored at the back of a cupboard? Write down how often the task occurs and how you currently solve it. A tool is more likely to earn its space when it removes a recurring inconvenience rather than solving a problem you only imagine having.",
        "Then compare the tool with alternatives you already own. A multi-purpose item may be useful if it performs its main job well and is easy to clean. A specialised gadget may be worth considering when it saves meaningful effort on a task you do regularly. Check dimensions, material, cleaning instructions, replacement parts, and whether the item can be stored where you will actually use it."
      ], bullets: [
        "Name the repeated task before searching for a gadget.",
        "Check whether an existing tool already does the job.",
        "Include washing, drying, and storage effort in the decision."
      ]},
    ],
    related: ["choosing-food-storage-containers", "organizing-a-home-workspace-without-more-clutter"],
    sources: [{ label: "USDA Food Safety and Inspection Service: How to use a food thermometer", url: "https://ask.fsis.usda.gov/article/How-to-use-a-food-thermometer" }]
  },
  {
    slug: "choosing-food-storage-containers",
    categorySlug: "home-kitchen", categoryLabel: "Home & kitchen",
    title: "How to Choose Food Storage Containers That Fit Your Kitchen",
    seoTitle: "How to Choose Food Storage Containers",
    excerpt: "Mismatched lids, awkward shapes, and containers that do not fit your shelves can make leftovers harder to manage. Compare the set by how you store food.",
    seoDescription: "Compare food storage containers by size, shape, lids, materials, care instructions, and the space available in your kitchen.",
    dateLabel: "HOME & KITCHEN", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.storage,
    imageAlt: "Organized kitchen storage with containers and shelves",
    sections: [
      { heading: "When storing leftovers becomes a puzzle", paragraphs: [
        "One lid is missing, another container is too tall for the fridge shelf, and the smallest one is never quite big enough. A large set can look like good value until you discover that only two sizes suit the way you cook.",
        "The useful question is not how many pieces come in a set. It is whether the shapes and sizes match the food you usually store and the shelves, drawers, or cupboards you have."
      ]},
      { heading: "Choose sizes based on what you actually store", paragraphs: [
        "Think about typical portions, meal preparation habits, and whether you need containers for lunch, leftovers, dry ingredients, or snacks. A few sizes that stack neatly may be more useful than a large assortment of unusual shapes.",
        "Compare the outside dimensions as well as the stated capacity. Check how the lids fit, whether they are interchangeable within the set, and how the containers stack when empty."
      ], bullets: [
        "Measure fridge shelves and cupboard depth.",
        "Check whether lids attach securely and are easy to identify.",
        "Read the manufacturer's instructions for microwave, freezer, and dishwasher use."
      ]},
      { heading: "Do not guess from the material name alone", paragraphs: [
        "Glass, plastic, and stainless steel containers have different weights, handling needs, and use instructions. The material alone does not tell you whether a specific container is safe for a microwave, freezer, or dishwasher. Look for explicit guidance from the manufacturer for that exact product.",
        "For food storage itself, follow established food-safety guidance rather than assuming a container makes food safe for longer. The USDA's [leftovers and food safety guidance](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety) is a useful reference."
      ]},
      { heading: "A set worth considering", paragraphs: [
        "A practical set should match your portion sizes, fit your storage space, and come with clear care instructions. Compare the number of useful sizes, lid design, stackability, replacement availability, and seller details before buying."
      ]},
      { heading: "Think about the whole storage routine, not only the container", paragraphs: [
        "A container is used when food is placed inside it, moved to storage, taken out, cleaned, and put away again. If the lid is difficult to match, the shape wastes shelf space, or the container is awkward to wash, the set may become frustrating even if it looks neat when new. Consider each stage before choosing a large bundle.",
        "Check whether the manufacturer gives clear instructions for the exact model and lid. Do not assume all parts of a set are suitable for the microwave, freezer, or dishwasher just because one component is labelled that way. For food safety, follow trusted handling and storage guidance; containers do not replace correct cooling, refrigeration, and timing."
      ], bullets: [
        "Measure the shelves where the containers will be stored.",
        "Check whether lids and bases stack or nest in a way that saves space.",
        "Read the care instructions for every component, including lids."
      ]},
    ],
    related: ["choosing-small-kitchen-tools-that-earn-their-space", "choosing-a-practical-everyday-bag"],
    sources: [{ label: "USDA Food Safety and Inspection Service: Leftovers and food safety", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety" }]
  },
  {
    slug: "organizing-a-home-workspace-without-more-clutter",
    categorySlug: "lifestyle", categoryLabel: "Lifestyle essentials",
    title: "Organizing a Home Workspace Without Adding More Clutter",
    seoTitle: "Organize a Home Workspace Without More Clutter",
    excerpt: "A desk can look tidy in a photo and still feel awkward to work at. Start with what interrupts your work, then choose only the accessories that solve it.",
    seoDescription: "A realistic home-workspace guide to measuring your desk, managing cables, choosing organizers, and avoiding unnecessary desk accessories.",
    dateLabel: "THE DAILY EDIT", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.desk,
    imageAlt: "A simple home workspace with a laptop and a clear desk surface",
    sections: [
      { heading: "The desk looks neat, but working still feels awkward", paragraphs: [
        "You clear the desk, buy a few organizers, and take a satisfying photo. A week later, the cables are back, everyday items have migrated across the surface, and the new storage boxes are taking up the space you needed to work.",
        "A useful workspace is not the one with the most accessories. It is the one where the things you use often are easy to reach and the things that interrupt you have a sensible place to go."
      ]},
      { heading: "Find the friction before buying anything", paragraphs: [
        "Notice what gets in your way during a normal work session. Is it a charging cable, papers that have no home, poor task lighting, or a laptop that takes up too much space? Choose one repeated frustration to solve first.",
        "Measure the desk and the equipment you already own. Check the footprint of stands, drawers, lamps, and cable organizers before ordering. An item can be compact in a product photo and still take up the exact space you need."
      ], bullets: [
        "Keep frequently used tools within easy reach.",
        "Choose cable management that fits the number and route of your cables.",
        "Avoid storage that blocks legroom or turns the desk into a shelf."
      ]},
      { heading: "Choose accessories for fit and adjustability", paragraphs: [
        "For a monitor or laptop stand, compare height, width, stability information, and compatibility with your device. For a lamp, compare the footprint, adjustability, and light settings. For organizers, check the dimensions and whether the compartments match the items you want to store.",
        "If you are changing the way you sit or position your screen, use established workstation guidance rather than relying only on a product's marketing claims. OSHA provides a [computer workstation checklist](https://www.osha.gov/etools/computer-workstations/checklist) that can help you review the setup itself."
      ]},
      { heading: "Make one improvement, then reassess", paragraphs: [
        "Try one change for a few working days before adding another accessory. If the change does not make the task easier, remove it or reposition it. A workspace should support your habits, not create a new maintenance routine."
      ]},
      { heading: "A desk reset that does not start with shopping", paragraphs: [
        "Remove items that do not belong to the current task, then put the things you use most within comfortable reach. Route only the cables that repeatedly get in the way, and leave enough clear space for the way you write, use a mouse, or move between devices. Take a photo or note the layout before buying anything; it gives you a reference when checking whether an accessory will fit.",
        "If your discomfort is related to posture, vision, or pain, do not assume a desk accessory alone will solve it. Check workstation guidance and consider appropriate professional advice. An accessory should address a specific fit or organisation issue, not replace an assessment of the setup as a whole."
      ], bullets: [
        "Clear the surface and observe the friction points during a normal work session.",
        "Measure the available space, including cable routes and device footprints.",
        "Add one accessory at a time and remove anything that creates a new obstacle."
      ]},
    ],
    related: ["choosing-small-kitchen-tools-that-earn-their-space", "choosing-food-storage-containers", "choosing-a-practical-everyday-bag"],
    sources: [{ label: "U.S. Occupational Safety and Health Administration: Computer workstation checklist", url: "https://www.osha.gov/etools/computer-workstations/checklist" }]
  },
  {
    slug: "choosing-a-practical-everyday-bag",
    categorySlug: "lifestyle", categoryLabel: "Lifestyle essentials",
    title: "How to Choose a Practical Everyday Bag",
    seoTitle: "How to Choose a Practical Everyday Bag",
    excerpt: "A bag can look perfect online and feel inconvenient once you carry your usual things. Choose around your real day, not an imaginary packing list.",
    seoDescription: "A practical everyday-bag buying guide covering size, weight, straps, compartments, closures, materials, and return policies.",
    dateLabel: "THE DAILY EDIT", publishedAt: "2026-11-08", readTime: "5 MIN READ", image: images.bag,
    imageAlt: "An everyday bag displayed in a simple neutral setting",
    sections: [
      { heading: "The bag that fits everything except your day", paragraphs: [
        "A bag looks roomy in the photos, but once you add your wallet, keys, water bottle, charger, and the other things you carry, it becomes awkward. Or it is so structured that the items you reach for most often disappear into the wrong pocket.",
        "Before browsing, think about an ordinary weekday. What do you carry every day? What do you only bring occasionally? The best size is the one that fits your actual routine without encouraging you to carry unnecessary weight."
      ]},
      { heading: "Compare the details that change daily use", paragraphs: [
        "Start with external and internal dimensions, then compare the opening, closure, strap length, strap width, and overall weight. Look at how the bag is meant to be carried and whether the straps can be adjusted to your preference.",
        "Compartments are useful only when they match the things you carry. A large number of pockets can make it harder to find items if the layout is not intuitive. Check whether the bag can stand on its own if that matters to you, and read the material and care instructions."
      ], bullets: [
        "Measure a device or bottle you need to carry regularly.",
        "Check bag weight before adding your belongings.",
        "Review closure type, strap adjustability, lining, and care directions."
      ]},
      { heading: "Use product photos carefully", paragraphs: [
        "Lifestyle photos can make a bag look larger or smaller depending on the model and camera angle. Look for photos that show the bag beside a familiar object, plus clear dimension information. Read reviews for specific fit details, but remember that another person's daily carry may be different from yours.",
        "Check the seller, return window, and any restrictions on returns before buying. These details matter when you cannot handle the bag in person."
      ]},
      { heading: "Choose the bag you will reach for", paragraphs: [
        "A practical shortlist might include one compact option for light days and one larger option if you regularly carry a laptop or other bulky items. Compare them by dimensions, comfort-related design details, weight, and care requirements. Avoid paying for compartments or materials that do not solve a problem you actually have."
      ]},
      { heading: "A simple loadout test before choosing a size", paragraphs: [
        "Gather the items you carry on a typical day and place them together. Measure anything rigid, such as a laptop, tablet, bottle, or notebook. Compare those measurements with the bag's internal dimensions, not just its advertised capacity. Pay attention to the opening: a bag can be technically large enough but still awkward if you have to angle every item through a narrow zip.",
        "Think about the weight of the empty bag as well as its capacity. A large number of pockets may sound useful, but each compartment adds structure and can make it harder to find things if the layout does not match your habits. Look for clear measurements and close-up photos of straps, seams, closures, and the inside."
      ], bullets: [
        "Measure your largest everyday item and compare it with internal dimensions.",
        "Consider empty weight, strap adjustment, closure, and access while moving.",
        "Check return terms in case the real-world fit differs from the photos."
      ]},
    ],
    related: ["organizing-a-home-workspace-without-more-clutter", "choosing-food-storage-containers"],
    sources: [{ label: "Federal Trade Commission: Online Shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }]
  }
];

const id: Guide[] = [
  {
    slug: "memulai-rutinitas-skincare-sederhana",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Cara Memulai Rutinitas Skincare yang Sederhana",
    seoTitle: "Rutinitas Skincare Pemula yang Sederhana",
    excerpt: "Memulai skincare bisa terasa membingungkan saat setiap produk seolah punya fungsi yang wajib dicoba. Mulai dari beberapa langkah dasar, lalu tambahkan produk hanya ketika kamu tahu alasannya.",
    seoDescription: "Baru mulai skincare? Pelajari cara menyusun rutinitas sederhana dengan pembersih, pelembap, dan sunscreen tanpa membeli terlalu banyak produk.",
    dateLabel: "PANDUAN PEMULA", publishedAt: "2026-11-08", readTime: "6 MENIT BACA", image: images.skincare,
    imageAlt: "Beberapa botol skincare yang disusun di atas permukaan bernuansa netral",
    sections: [
      { heading: "Saat rak skincare terasa seperti daftar belanja wajib", paragraphs: [
        "Kalau baru mulai skincare, mudah sekali merasa ketinggalan. Ada yang menyarankan serum, ada yang membahas exfoliating acid, dan video singkat bisa membuat rutinitas dasar terasa tidak pernah cukup. Akhirnya, memilih facial wash pertama saja bisa terasa seperti mengerjakan riset panjang.",
        "Masalahnya bukan karena kamu belum punya sepuluh langkah. Justru terlalu banyak pilihan muncul sebelum kamu tahu apa yang sebenarnya ingin kamu dapatkan dari rutinitas tersebut. Awali dengan hal sederhana: membersihkan wajah, menjaga kelembapan ketika dibutuhkan, dan melindungi kulit dari matahari pada siang hari."
      ]},
      { heading: "Mulai dari tiga fungsi sehari-hari", paragraphs: [
        "Pembersih wajah digunakan untuk membantu mengangkat kotoran, minyak, dan sisa aktivitas harian. Cari produk yang memang ditujukan untuk wajah dan terasa nyaman setelah dibilas. Sensasi kesat berlebihan bukan sesuatu yang harus dikejar.",
        "Pelembap membantu mengurangi rasa kering dan menjaga kulit terasa nyaman. Teksturnya bersifat personal: ada yang lebih suka lotion ringan, ada juga yang nyaman memakai cream lebih rich. Kamu tidak harus memilih berdasarkan tren atau daftar kandungan yang paling rumit.",
        "Untuk siang hari, sunscreen menjadi langkah perlindungan. American Academy of Dermatology merekomendasikan perlindungan broad-spectrum, SPF 30 atau lebih, dan water resistant. Ikuti petunjuk produk mengenai jumlah pemakaian dan kapan perlu mengaplikasikannya kembali."
      ], bullets: [
        "Pagi: gunakan langkah yang sesuai dengan kebutuhanmu dan akhiri dengan sunscreen.",
        "Malam: bersihkan wajah dengan lembut dan gunakan pelembap bila diperlukan.",
        "Buat rutinitas sesederhana mungkin agar tetap realistis dilakukan setiap hari."
      ]},
      { heading: "Berhenti membeli produk sebelum tahu fungsinya", paragraphs: [
        "Sebelum menambah produk, sebutkan dulu masalah yang ingin kamu atasi. Apakah rutinitas saat ini terlalu merepotkan? Apakah facial wash membuat kulit terasa tidak nyaman? Apakah kamu menghindari sunscreen karena teksturnya? Masalah yang spesifik akan menghasilkan daftar pertimbangan yang lebih berguna daripada sekadar mengikuti kandungan yang sedang tren.",
        "Perkenalkan produk baru secara bertahap, bukan mengganti semuanya sekaligus. Dengan begitu, kamu lebih mudah mengenali apa yang terasa cocok atau justru menimbulkan reaksi. Jika iritasi berlangsung lama atau terasa berat, hentikan pemakaian dan minta saran tenaga kesehatan yang kompeten."
      ], bullets: [
        "Periksa fungsi produk dan daftar komposisi lengkap.",
        "Bandingkan tekstur, aroma, kemasan, ukuran, dan petunjuk produsen.",
        "Hindari produk yang menjanjikan hasil instan, pasti, atau cocok untuk semua orang."
      ]},
      { heading: "Daftar belanja awal yang masuk akal", paragraphs: [
        "Kamu bisa mulai dengan membandingkan satu facial cleanser, satu moisturizer, dan satu sunscreen. Ini daftar untuk dipertimbangkan, bukan kewajiban untuk membeli semuanya sekaligus. Kalau sudah punya produk yang terasa nyaman dan masih layak digunakan, belum tentu perlu diganti.",
        "Untuk memahami urutan pemakaian dan perawatan sehari-hari, baca panduan [skin care basics dari American Academy of Dermatology](https://www.aad.org/public/everyday-care/skin-care-basics) serta [panduan skincare dengan anggaran lebih terukur](https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget)."
      ]},
      { heading: "Cara menentukan produk mana yang benar-benar dibutuhkan", paragraphs: [
        "Coba catat produk yang sudah kamu gunakan selama satu minggu. Perhatikan mana yang rutin dipakai, mana yang justru sering dihindari, dan kapan rasa tidak nyaman muncul. Inventaris sederhana ini bisa mencegah kamu membeli cleanser atau moisturizer kedua hanya karena sedang ramai dibahas. Bisa jadi masalah utamanya bukan kekurangan produk, melainkan urutan pemakaian atau rutinitas yang terlalu merepotkan.",
        "Rutinitas awal sebaiknya mudah diulang dan mudah dipahami. Kalau petunjuk sebuah produk sulit dimengerti atau kamu ragu apakah produk tersebut sesuai dengan kondisimu, jangan terburu-buru membeli. Periksa informasi produsennya atau konsultasikan dengan tenaga profesional yang kompeten. Rutinitas singkat bukan berarti kurang lengkap; justru setiap langkah jadi lebih jelas sebelum menambah langkah lain."
      ], bullets: [
        "Pertahankan produk yang sudah nyaman digunakan dan ikuti petunjuknya.",
        "Tambahkan produk baru hanya saat kamu tahu fungsi yang dibutuhkan.",
        "Beri waktu untuk memahami satu perubahan sebelum mencoba perubahan lain."
      ]},
    ],
    related: ["memilih-facial-cleanser-yang-nyaman", "memilih-sunscreen-yang-nyaman-dipakai", "memilih-tekstur-moisturizer"],
    sources: [{ label: "American Academy of Dermatology: Skin care basics", url: "https://www.aad.org/public/everyday-care/skin-care-basics" }, { label: "American Academy of Dermatology: Skin care on a budget", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget" }]
  },
  {
    slug: "memilih-facial-cleanser-yang-nyaman",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Cara Memilih Facial Cleanser yang Tidak Membuat Kulit Terasa Ketarik",
    seoTitle: "Cara Memilih Facial Cleanser yang Gentle",
    excerpt: "Wajah terasa ketarik setelah cuci muka, atau mungkin cleanser yang dipakai memang kurang cocok dengan rutinitasmu. Ini hal yang perlu dibandingkan sebelum membeli botol baru.",
    seoDescription: "Panduan memilih facial cleanser, cara mencuci wajah tanpa menggosok berlebihan, dan hal yang perlu dibandingkan sebelum membeli face wash.",
    dateLabel: "PANDUAN MEMILIH", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.cleanser,
    imageAlt: "Facial cleanser dan kebutuhan skincare sederhana di atas permukaan bersih",
    sections: [
      { heading: "Wajah terasa ketarik setelah cuci muka", paragraphs: [
        "Kamu mencuci wajah, membilasnya, lalu kulit langsung terasa kencang atau ketarik. Mungkin kamu buru-buru memakai moisturizer, atau menganggap cleanser itu bekerja maksimal karena wajah terasa sangat bersih. Wajar kalau muncul anggapan seperti itu, tetapi sensasi tersebut bukan ukuran kualitas pembersih.",
        "Cleanser sebaiknya sesuai dengan cara kamu menggunakannya dan membuat kulit tetap terasa nyaman. Kalau suatu produk berulang kali membuat tidak nyaman, kamu tidak harus memaksakan diri menghabiskannya hanya karena sudah dibeli."
      ]},
      { heading: "Apa yang perlu dilihat dari labelnya?", paragraphs: [
        "Mulai dengan melihat fungsi produk. Body wash, makeup remover, dan facial cleanser tidak otomatis bisa saling menggantikan hanya karena semuanya menghasilkan busa. Cari petunjuk yang jelas untuk penggunaan pada wajah dan baca daftar komposisi lengkap, terutama kalau kamu sudah tahu ada bahan tertentu yang tidak cocok.",
        "American Academy of Dermatology menyarankan penggunaan pembersih yang lembut dan tidak abrasif serta air suam-suam kuku. Mereka juga menyarankan penggunaan ujung jari, bukan menggosok wajah dengan kain atau spons yang kasar. Kebiasaan kecil seperti ini sama pentingnya untuk dipertimbangkan saat memilih produk."
      ], bullets: [
        "Pilih tekstur yang nyaman digunakan, misalnya gel, cream, lotion, atau format lain.",
        "Periksa apakah produk mengandung fragrance bila kamu ingin menghindarinya.",
        "Baca petunjuk penggunaan dan jangan menganggap busa yang lebih banyak berarti lebih bersih."
      ]},
      { heading: "Cara mencuci wajah dengan lebih tenang", paragraphs: [
        "Basahi wajah dengan air suam-suam kuku, aplikasikan cleanser secara lembut menggunakan ujung jari, bilas, lalu keringkan dengan menepuk perlahan. Hindari menjadikan proses cuci muka seperti kegiatan scrubbing. Kalau kamu mencuci wajah jauh lebih sering dari yang diperlukan, pertimbangkan apakah langkah tambahan itu justru membuat rutinitas semakin rumit.",
        "Jika rasa tidak nyaman terus berlanjut setelah rutinitas diubah, atau muncul kemerahan, pembengkakan, maupun nyeri yang menetap, konsultasikan kepada dokter kulit atau tenaga kesehatan yang kompeten daripada mencoba banyak produk secara acak."
      ]},
      { heading: "Checklist sebelum memasukkannya ke keranjang", paragraphs: [
        "Bandingkan isi kemasan, model pump atau tutup, petunjuk penggunaan, penjual, dan kebijakan retur. Harga murah tidak banyak membantu kalau teksturnya membuat kamu enggan memakainya. Kamu juga bisa membandingkan pilihan fragrance-free, tetapi daftar komposisi lengkap tetap lebih informatif daripada hanya satu klaim di bagian depan kemasan.",
        "Untuk panduan mencuci wajah langkah demi langkah, baca [Face Washing 101 dari American Academy of Dermatology](https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101)."
      ]},
      { heading: "Cara membandingkan dua cleanser tanpa terdistraksi tren", paragraphs: [
        "Letakkan dua produk berdampingan, lalu bandingkan tujuan penggunaan, petunjuk, daftar bahan, ukuran, dan harga per isi. Setelah itu perhatikan pengalaman yang penting buatmu: apakah tutupnya mudah dibuka, teksturnya gampang dibilas, dan botolnya praktis diletakkan dekat wastafel. Detail ini tidak membuktikan satu formula lebih bagus, tetapi membantumu memilih produk yang realistis dipakai setiap hari.",
        "Jangan menjadikan busa, aroma, atau sensasi kesat setelah mencuci muka sebagai bukti bahwa produk bekerja lebih baik. Cleanser hanyalah salah satu bagian dari rutinitas, bukan ukuran seberapa banyak minyak yang harus dihilangkan. Kalau kamu sudah mengetahui bahan tertentu tidak cocok, periksa daftar ingredients lengkap dan ikuti saran tenaga profesional daripada hanya mengandalkan klaim di bagian depan kemasan."
      ], bullets: [
        "Bandingkan daftar ingredients lengkap, bukan hanya klaim di kemasan depan.",
        "Perhatikan jumlah produk yang keluar setiap kali pump atau tube digunakan.",
        "Jangan langsung membeli ukuran besar sebelum tahu formatnya nyaman digunakan."
      ]},
    ],
    related: ["memulai-rutinitas-skincare-sederhana", "mengenalkan-produk-skincare-secara-bertahap"],
    sources: [{ label: "American Academy of Dermatology: Face washing 101", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/face-washing-101" }]
  },
  {
    slug: "memilih-sunscreen-yang-nyaman-dipakai",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Cara Menemukan Sunscreen yang Nyaman Dipakai Setiap Hari",
    seoTitle: "Cara Memilih Sunscreen yang Nyaman Dipakai",
    excerpt: "Kalau sunscreen terasa lengket, meninggalkan white cast, atau tidak nyaman di bawah makeup, rasanya ingin dilewati saja. Bandingkan kenyamanan dan informasi pada label sekaligus.",
    seoDescription: "Panduan memilih sunscreen yang membahas broad-spectrum, SPF, water resistance, tekstur, dan cara membaca label sebelum membeli.",
    dateLabel: "PANDUAN MEMILIH", publishedAt: "2026-11-08", readTime: "6 MENIT BACA", image: images.sunscreen,
    imageAlt: "Produk perlindungan matahari yang ditata untuk aktivitas luar ruangan",
    sections: [
      { heading: "Saat sunscreen hanya tersimpan di laci", paragraphs: [
        "Mungkin sunscreen terakhir yang kamu coba terasa berat, meninggalkan white cast, menggumpal di bawah makeup, atau membuat pemakaian ulang terasa tidak nyaman. Setelah beberapa kali pengalaman seperti itu, wajar kalau muncul keinginan untuk berhenti mencoba. Bisa jadi persoalannya ada pada hasil akhir produk yang tidak sesuai dengan rutinitasmu.",
        "Tekstur penting karena produk yang tidak disukai cenderung lebih sulit dipakai secara konsisten. Namun, kenyamanan harus dipertimbangkan bersama informasi perlindungan pada label, bukan menggantikannya."
      ]},
      { heading: "Informasi label yang perlu diperiksa lebih dulu", paragraphs: [
        "Untuk pemilihan sunscreen sehari-hari, American Academy of Dermatology merekomendasikan produk broad-spectrum, SPF 30 atau lebih, dan water resistant. Broad-spectrum berarti produk memberi perlindungan terhadap sinar UVA dan UVB. Label water resistant menunjukkan durasi tertentu, umumnya 40 atau 80 menit, bukan berarti waterproof.",
        "SPF bukan timer yang menentukan berapa lama kamu bisa berada di bawah matahari. Ikuti petunjuk produk. AAD menyarankan pemakaian ulang setidaknya setiap dua jam saat beraktivitas di luar ruangan, serta setelah berenang atau berkeringat, sesuai petunjuk label."
      ], bullets: [
        "Pastikan ada keterangan broad-spectrum dan SPF 30 atau lebih.",
        "Periksa durasi water resistance bila kamu sering berenang atau berkeringat.",
        "Baca petunjuk mengenai jumlah pemakaian dan kapan harus mengaplikasikannya kembali."
      ]},
      { heading: "Bandingkan kenyamanan untuk kegiatan sehari-hari", paragraphs: [
        "Setelah label memenuhi kriteria dasar, bandingkan format dan hasil akhirnya. Lotion, cream, gel, dan stick bisa memberikan sensasi berbeda serta cocok untuk preferensi yang berbeda. Pikirkan kapan produk akan digunakan: di bawah makeup, saat berangkat kerja, ketika beraktivitas di luar, atau ketika kamu ingin rutinitas yang praktis.",
        "Jangan menganggap pengalaman satu orang sebagai jaminan teksturnya akan terasa sama di kulitmu. Cari informasi produk yang jelas, daftar komposisi yang tersedia, dan penjual yang bisa diverifikasi."
      ]},
      { heading: "Buat keputusan tanpa mengabaikan perlindungan", paragraphs: [
        "Pilih format yang realistis untuk kamu gunakan sesuai jumlah dan frekuensi yang dianjurkan. Kalau hasil akhir produk menjadi alasan kamu sering melewatkan sunscreen, bandingkan beberapa tekstur daripada langsung menyerah pada perlindungan matahari. Pakaian pelindung dan mencari tempat teduh juga menjadi bagian dari kebiasaan perlindungan.",
        "Baca [panduan memilih sunscreen dari AAD](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen) dan [cara mengaplikasikan sunscreen](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen) untuk informasi lebih rinci."
      ]},
      { heading: "Buat perbandingan sunscreen sesuai kegiatanmu", paragraphs: [
        "Pikirkan situasi ketika kamu paling sering lupa memakai sunscreen. Pagi yang terburu-buru, penggunaan makeup, olahraga luar ruangan, perjalanan harian, atau aktivitas dekat air bisa menimbulkan kebutuhan praktis yang berbeda. Mungkin kamu mencari formula yang nyaman dipakai di bawah makeup, kemasan yang mudah dibawa untuk reapply, atau produk water-resistant saat aktivitasmu memang membutuhkannya. Mulai dari informasi perlindungan pada label, baru bandingkan detail pemakaian harian.",
        "Jangan menilai produk hanya dari angka SPF atau menganggap SPF yang lebih tinggi membuat jumlah pemakaian bisa dikurangi. Ikuti petunjuk masing-masing produk, termasuk takaran dan waktu pemakaian ulang. Jika sunscreen menyebabkan iritasi yang berulang pada kulit atau mata, hentikan pemakaian dan konsultasikan alternatifnya dengan tenaga profesional."
      ], bullets: [
        "Periksa broad spectrum, SPF, dan durasi water-resistant lebih dulu.",
        "Bandingkan tekstur, hasil akhir, kemasan, dan kemudahan reapply.",
        "Pastikan petunjuk penggunaan jelas dan penjualnya dapat dipercaya."
      ]},
    ],
    related: ["memulai-rutinitas-skincare-sederhana", "memilih-tekstur-moisturizer", "menyiapkan-skincare-untuk-bepergian"],
    sources: [{ label: "American Academy of Dermatology: How to select a sunscreen", url: "https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-select-sunscreen" }, { label: "American Academy of Dermatology: How to apply sunscreen", url: "https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen" }]
  },
  {
    slug: "memilih-tekstur-moisturizer",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Memilih Tekstur Moisturizer yang Cocok untuk Rutinitasmu",
    seoTitle: "Cara Memilih Tekstur Moisturizer",
    excerpt: "Moisturizer bisa terasa terlalu rich, lengket, atau justru cepat hilang. Mulailah dari hasil akhir dan rutinitas yang kamu sukai, bukan dari klaim satu formula untuk semua orang.",
    seoDescription: "Bandingkan tekstur moisturizer, label produk, kemasan, dan cara penggunaan untuk menemukan pelembap yang sesuai dengan preferensi sehari-hari.",
    dateLabel: "PANDUAN MEMILIH", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.moisturizer,
    imageAlt: "Jar moisturizer dan produk perawatan diri sederhana",
    sections: [
      { heading: "Moisturizer yang selalu terasa kurang pas", paragraphs: [
        "Kamu memakai moisturizer lalu terus menyadari keberadaannya sepanjang hari. Bisa jadi terasa berat menjelang siang, meninggalkan rasa lengket, atau kurang nyaman ketika ditimpa sunscreen. Atau mungkin kemasannya merepotkan sehingga kamu sering lupa memakainya. Produk yang bagus sekalipun belum tentu cocok dengan preferensimu.",
        "Kulit berminyak juga tetap bisa membutuhkan pelembap. Tujuannya bukan otomatis memilih cream paling rich atau gel paling ringan, tetapi membandingkan fungsi produk dan teksturnya dengan kebiasaanmu."
      ]},
      { heading: "Kenali beberapa format yang umum", paragraphs: [
        "Lotion umumnya lebih mudah diratakan dan bisa terasa lebih ringan dibanding cream. Cream biasanya terasa lebih rich. Gel atau gel-cream dapat terasa ringan atau menyegarkan bagi sebagian orang, tetapi formula setiap produk berbeda. Ini gambaran umum tekstur, bukan jaminan bagaimana produk tertentu akan terasa.",
        "Label seperti 'non-comedogenic' dapat membantu mempersempit pilihan bila kamu sedang mempertimbangkan produk yang tidak mudah menyumbat pori, tetapi tidak ada label yang bisa menjamin suatu produk cocok untuk semua orang. Tetap baca petunjuk dan daftar komposisi lengkap."
      ], bullets: [
        "Pikirkan kapan kamu akan memakainya: pagi, malam, atau keduanya.",
        "Bandingkan hasil akhir, rasa setelah diaplikasikan, aroma, dan kemasan.",
        "Periksa apakah wadahnya praktis dan mudah digunakan dengan bersih."
      ]},
      { heading: "Cari tahu teksturnya sebelum membeli ukuran besar", paragraphs: [
        "Kalau tersedia sampel atau ukuran kecil, keduanya bisa menjadi cara yang lebih ringan untuk mengenali tekstur. Perkenalkan moisturizer baru tanpa mengganti beberapa produk lain secara bersamaan agar kamu lebih mudah mengetahui apa yang disukai atau tidak disukai.",
        "Hentikan penggunaan produk yang menimbulkan reaksi. Jika masalah kulit terus berlanjut atau sulit dipahami, konsultasikan kepada tenaga profesional daripada membeli lebih banyak produk dengan harapan salah satunya menyelesaikan semuanya."
      ]},
      { heading: "Checklist perbandingan sederhana", paragraphs: [
        "Sebelum membeli, bandingkan fungsi produk, deskripsi tekstur, daftar komposisi, ukuran kemasan, dan ketentuan retur. Pertimbangkan juga rutinitas yang sudah ada: moisturizer yang nyaman digunakan bersama sunscreen yang kamu miliki bisa lebih praktis daripada produk yang terlihat menarik jika dilihat sendirian.",
        "Untuk mengingat bahwa kulit berminyak tetap bisa membutuhkan moisturizer, baca [panduan skincare hemat dari American Academy of Dermatology](https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget)."
      ]},
      { heading: "Buat perbandingan berdasarkan rutinitas, bukan tren tekstur", paragraphs: [
        "Bayangkan kapan kamu akan memakai masing-masing produk. Lotion yang ringan mungkin terasa praktis sebelum sunscreen atau makeup, sedangkan cream yang lebih rich bisa terasa nyaman sebagai bagian dari rutinitas malam. Itu semua preferensi yang perlu dicocokkan, bukan aturan mutlak berdasarkan jenis kulit. Produk dengan kategori tekstur yang sama pun bisa terasa berbeda karena formulanya tidak selalu sama.",
        "Saat membandingkan produk secara online, cari informasi ukuran, daftar ingredients, petunjuk pemakaian, dan opsi kemasan yang lebih kecil. Foto produk biasanya bisa menunjukkan bentuk kemasan, tetapi tidak cukup untuk menggambarkan tekstur secara akurat. Review pengguna bisa membantu menemukan detail praktis yang berulang, tetapi pengalaman orang lain bukan jaminan hasil yang sama pada kulitmu."
      ], bullets: [
        "Periksa tujuan penggunaan dan daftar ingredients lengkap.",
        "Pertimbangkan ukuran kecil sebelum membeli kemasan besar.",
        "Pikirkan kecocokannya dengan sunscreen atau produk yang sudah digunakan."
      ]},
    ],
    related: ["memulai-rutinitas-skincare-sederhana", "memilih-facial-cleanser-yang-nyaman", "mengenalkan-produk-skincare-secara-bertahap"],
    sources: [{ label: "American Academy of Dermatology: Skin care on a budget", url: "https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-budget" }]
  },
  {
    slug: "mengenalkan-produk-skincare-secara-bertahap",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Cara Mengenalkan Produk Skincare Baru Secara Bertahap",
    seoTitle: "Cara Mencoba Produk Skincare Baru Secara Bertahap",
    excerpt: "Mengganti cleanser, serum, dan moisturizer dalam waktu bersamaan membuat kita sulit mengetahui produk mana yang cocok. Pendekatan bertahap memberi informasi yang lebih jelas.",
    seoDescription: "Pelajari cara mengenalkan skincare baru secara hati-hati, membaca petunjuk produk, dan menguji kemungkinan reaksi sebelum mengubah rutinitas.",
    dateLabel: "PANDUAN PRAKTIS", publishedAt: "2026-11-08", readTime: "6 MENIT BACA", image: images.skincare,
    imageAlt: "Beberapa produk skincare sederhana yang siap ditambahkan ke rutinitas",
    sections: [
      { heading: "Saat rutinitas baru berubah menjadi terlalu banyak perubahan", paragraphs: [
        "Kamu membeli cleanser, moisturizer, dan serum baru karena semuanya terlihat berguna. Beberapa hari kemudian kulit terasa berbeda dan kamu tidak tahu produk mana yang menjadi penyebabnya. Akhirnya kamu hanya menebak-nebak, atau mengganti semuanya lagi.",
        "Memperkenalkan banyak produk baru sekaligus membuat pengalamanmu sendiri lebih sulit dievaluasi. Pendekatan bertahap memang tidak terlalu menarik, tetapi membantu kamu mengenali perubahan dan memutuskan apakah sebuah produk layak dipertahankan."
      ]},
      { heading: "Ubah satu hal dalam satu waktu", paragraphs: [
        "Pertahankan bagian rutinitas lain sesederhana dan sestabil mungkin ketika mencoba produk baru. Baca instruksi produsen dan gunakan sesuai petunjuk. Hindari menambahkan banyak produk dengan bahan aktif kuat sekaligus hanya karena sedang populer digunakan bersama.",
        "American Academy of Dermatology menyarankan menguji produk skincare pada area kecil sebelum memasukkannya ke rutinitas. Panduan uji di rumah mereka menjelaskan pemakaian pada area tes dua kali sehari selama tujuh sampai sepuluh hari, dengan mengikuti petunjuk untuk produk yang biasanya dibilas. Langkah ini merupakan pencegahan praktis, bukan jaminan bahwa reaksi tidak mungkin terjadi."
      ], bullets: [
        "Baca petunjuk lengkap sebelum penggunaan pertama.",
        "Perkenalkan satu produk baru dalam satu waktu bila memungkinkan.",
        "Catat kapan mulai menggunakannya dan reaksi apa yang muncul."
      ]},
      { heading: "Kenali kapan harus berhenti", paragraphs: [
        "Jika produk menimbulkan reaksi, hentikan pemakaian dan ikuti panduan perawatan yang sesuai. Gejala berat, menetap, atau mengkhawatirkan sebaiknya dikonsultasikan kepada tenaga kesehatan yang kompeten. Jangan terus memakai produk hanya untuk melihat apakah rasa tidak nyaman akan hilang.",
        "Berhati-hatilah terhadap klaim yang menyebut kemerahan, rasa terbakar, atau kulit mengelupas sebagai tanda bahwa produk pasti bekerja. Rasa tidak nyaman bukan bukti efektivitas."
      ]},
      { heading: "Belanja dengan rencana, bukan sekadar haul", paragraphs: [
        "Sebelum membeli, tuliskan fungsi produk yang ingin ditambahkan, produk yang sudah kamu miliki, dan apakah produk baru tersebut sebenarnya hanya mengulang fungsi yang sama. Lebih mudah mengelola beberapa produk yang dipahami daripada satu rak penuh produk yang belum sempat dievaluasi.",
        "Baca [panduan AAD tentang cara menguji produk skincare](https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products) untuk langkah uji di rumah secara lengkap."
      ]},
      { heading: "Buat catatan sederhana saat mencoba perubahan", paragraphs: [
        "Kamu tidak perlu membuat spreadsheet rumit. Catat tanggal mulai, cara penggunaan, dan perubahan atau rasa tidak nyaman yang terlihat. Usahakan rutinitas lainnya tetap sama selama memungkinkan. Namun, jangan sengaja meneruskan produk yang menimbulkan reaksi yang mengkhawatirkan hanya demi menyelesaikan masa percobaan. Ikuti petunjuk produk dan cari saran profesional bila gejalanya berat, menetap, atau membuatmu khawatir.",
        "Catatan singkat berguna karena ingatan bisa tercampur ketika beberapa produk dicoba dalam waktu berdekatan. Informasi ini juga bisa membantu saat kamu menjelaskan pengalaman kepada dokter kulit, apoteker, atau tenaga profesional lain. Catatan tersebut bukan alat diagnosis dan tidak dapat memastikan bahan tertentu sebagai penyebab reaksi, tetapi lebih jelas daripada mengganti seluruh rutinitas sekaligus."
      ], bullets: [
        "Catat nama produk, tanggal mulai, dan seberapa sering digunakan.",
        "Jangan menambahkan produk baru saat masih mengevaluasi produk pertama.",
        "Hentikan pemakaian dan cari saran profesional jika terjadi reaksi signifikan."
      ]},
    ],
    related: ["memulai-rutinitas-skincare-sederhana", "memilih-facial-cleanser-yang-nyaman", "memilih-tekstur-moisturizer"],
    sources: [{ label: "American Academy of Dermatology: How to test skin care products", url: "https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products" }]
  },
  {
    slug: "menyiapkan-skincare-untuk-bepergian",
    categorySlug: "kecantikan-perawatan-diri", categoryLabel: "Kecantikan & perawatan diri",
    title: "Menyiapkan Skincare Travel Kit yang Praktis",
    seoTitle: "Cara Menyiapkan Skincare Travel Kit yang Praktis",
    excerpt: "Membawa seluruh isi rak kamar mandi tentu merepotkan dan membuat tas cepat penuh. Susun travel kit berdasarkan rutinitas yang sudah kamu jalani dan durasi perjalanan.",
    seoDescription: "Panduan memilih pouch skincare, membawa produk seperlunya, serta membandingkan botol travel dan organizer sebelum bepergian.",
    dateLabel: "TRAVEL EDIT", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.travel,
    imageAlt: "Pouch perlengkapan mandi untuk bepergian yang tertata rapi",
    sections: [
      { heading: "Masalah tas skincare yang terlalu penuh", paragraphs: [
        "Berangkat untuk perjalanan singkat, tetapi isi toiletry bag terasa seperti setengah isi kamar mandi. Pouch menjadi tebal, botol kecil sulit ditemukan, dan ada produk yang dibawa padahal jarang dipakai di rumah. Rasanya familiar: terlalu banyak persiapan justru merepotkan.",
        "Travel kit akan lebih praktis kalau mendukung rutinitas yang sudah kamu pahami. Kamu tidak harus membuat koleksi skincare khusus perjalanan yang justru menambah barang."
      ]},
      { heading: "Tentukan produk yang benar-benar perlu dibawa", paragraphs: [
        "Mulailah dari produk yang memang rutin digunakan, lalu pertimbangkan durasi perjalanan, tempat menginap, dan barang apa yang mungkin bisa dibeli di tujuan. Hindari mencoba produk skincare baru tepat sebelum bepergian karena lebih sulit memahami bagaimana kulit meresponsnya.",
        "Untuk setiap produk, periksa petunjuk penyimpanan dari produsen dan apakah kemasan aslinya perlu dipertahankan. Jangan memindahkan produk ke wadah tanpa label jika isi atau petunjuk pemakaiannya bisa menjadi tidak jelas."
      ], bullets: [
        "Pilih pouch yang cukup untuk produk yang memang kamu gunakan.",
        "Periksa kapasitas botol, kualitas tutup, dan apakah kompartemennya mudah dibersihkan.",
        "Bawa barang secukupnya dengan isi yang mudah dikenali."
      ]},
      { heading: "Bandingkan organizer berdasarkan ukuran sebenarnya", paragraphs: [
        "Pouch yang terlihat luas di foto produk bisa saja dangkal atau sempit ketika digunakan. Bandingkan lebar, tinggi, kedalaman, bukaan, dan tata letak bagian dalamnya dengan ukuran botol yang ingin dibawa. Bukaan yang lebar memudahkan melihat isi; kompartemen terpisah membantu menjaga barang tetap teratur.",
        "Kalau ingin memakai botol travel yang bisa diisi ulang, periksa apakah botol tersebut memang dibuat untuk jenis produk yang akan dimasukkan dan apakah petunjuknya menjelaskan cara membersihkan serta mengisinya kembali. Klaim anti-bocor perlu didukung informasi produk yang jelas, bukan hanya bentuk tutupnya."
      ]},
      { heading: "Checklist singkat sebelum checkout", paragraphs: [
        "Ukur produk yang akan dibawa, lalu cocokkan dengan ukuran bagian dalam organizer. Periksa material, jahitan, tutup, petunjuk pembersihan, dan ketentuan retur penjual. Travel pouch yang paling berguna adalah yang sesuai dengan rutinitas dan ukuran koper, bukan yang membuat kamu membawa lebih banyak barang."
      ]},
      { heading: "Tes kebutuhan sebelum membeli travel container", paragraphs: [
        "Susun dulu produk yang benar-benar kamu gunakan pada hari biasa. Pisahkan barang yang memang diperlukan selama perjalanan dari yang bisa ditinggal di rumah. Pertimbangkan durasi perjalanan, kemudahan membeli pengganti di tempat tujuan, dan apakah akomodasi menyediakan perlengkapan dasar yang nyaman kamu gunakan. Langkah ini mencegah kamu memindahkan semua botol ke wadah mini hanya karena satu set travel bottle terlihat menarik.",
        "Sebelum memindahkan isi produk, pastikan wadah tersebut sesuai dengan jenis produknya dan bisa tertutup rapat. Beri label atau cara lain untuk mengenali isinya. Ikuti aturan cairan dari bandara dan maskapai yang berlaku untuk rute perjalananmu. Aturan dapat berubah, jadi periksa informasi terbaru dari bandara keberangkatan dan maskapai, jangan hanya mengandalkan tips packing lama."
      ], bullets: [
        "Buat daftar singkat sebelum membeli pouch atau botol travel.",
        "Bandingkan dimensi dan model tutup wadah, bukan hanya jumlah botol.",
        "Periksa aturan transportasi dan petunjuk penyimpanan dari produsen."
      ]},
    ],
    related: ["memulai-rutinitas-skincare-sederhana", "memilih-sunscreen-yang-nyaman-dipakai", "memilih-facial-cleanser-yang-nyaman"],
    sources: [{ label: "Transportation Security Administration: Travel checklist (for US departures)", url: "https://www.tsa.gov/sites/default/files/tsa-travel-checklist.pdf" }]
  },
  {
    slug: "memilih-peralatan-dapur-kecil-yang-berguna",
    categorySlug: "rumah-dapur", categoryLabel: "Rumah & dapur",
    title: "Memilih Peralatan Dapur Kecil yang Benar-Benar Berguna",
    seoTitle: "Cara Memilih Peralatan Dapur Kecil yang Berguna",
    excerpt: "Gadget dapur belum tentu berguna kalau fungsinya sudah ada, sulit dibersihkan, atau tidak muat di laci. Mulailah dari pekerjaan yang sering kamu lakukan.",
    seoDescription: "Checklist memilih alat dapur kecil berdasarkan aktivitas berulang, ruang penyimpanan, kemudahan dibersihkan, material, dan perawatan.",
    dateLabel: "RUMAH & DAPUR", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.kitchen,
    imageAlt: "Dapur praktis dengan peralatan memasak sehari-hari",
    sections: [
      { heading: "Laci penuh alat yang jarang digunakan", paragraphs: [
        "Sebuah gadget terlihat praktis ketika muncul di internet. Setelah datang, ukurannya ternyata makan tempat dan membersihkannya butuh waktu. Akhirnya, barang itu menjadi benda lain yang jarang disentuh. Sering kali masalahnya bukan kekurangan alat, tetapi pembelian yang tidak berkaitan dengan aktivitas rutin.",
        "Sebelum memilih alat, pikirkan pekerjaan kecil yang sering memperlambatmu: membuka kemasan, memotong, mengukur, menyimpan, atau membersihkan dapur. Produk punya peluang lebih besar untuk terpakai kalau membantu menyelesaikan kerepotan yang memang berulang."
      ]},
      { heading: "Ukur dapur sebelum mulai browsing", paragraphs: [
        "Periksa ruang laci, rak, dan meja dapur yang tersedia. Bandingkan dimensi keseluruhan alat, termasuk gagang atau aksesori, bukan hanya mengandalkan foto produk. Kalau kamu harus memindahkan banyak barang untuk mengambilnya, kemungkinan alat itu tidak akan sesering yang dibayangkan.",
        "Perhatikan cara alat dibongkar, bagian yang harus dicuci manual, dan apakah suku cadang atau petunjuk perawatan tersedia. Kemudahan dibersihkan memang bukan fitur paling menarik, tetapi berpengaruh terhadap seberapa praktis alat tersebut setelah minggu pertama."
      ], bullets: [
        "Tentukan pekerjaan berulang yang ingin dibuat lebih mudah.",
        "Ukur ruang penyimpanan sebelum memilih ukuran alat.",
        "Periksa petunjuk pembersihan, material, dan bagian yang disertakan."
      ]},
      { heading: "Hindari membeli fungsi yang sebenarnya sudah ada", paragraphs: [
        "Bandingkan alat yang ingin dibeli dengan barang yang sudah ada di dapur. Apakah alat tersebut menawarkan fungsi berbeda, atau hanya mengerjakan pekerjaan yang sebenarnya sudah bisa dilakukan dengan barang yang dimiliki? Produk multifungsi bisa berguna, tetapi hanya jika nyaman dipakai dan mudah dirawat.",
        "Waspadai deskripsi produk yang menonjolkan banyak kemungkinan fungsi tanpa mencantumkan dimensi, detail perawatan, atau batasan penggunaannya. Cari spesifikasi yang jelas dan informasi independen sebelum mengambil keputusan."
      ]},
      { heading: "Buat shortlist alat yang masuk akal", paragraphs: [
        "Mulailah dari satu alat yang menyelesaikan pekerjaan rutin. Bandingkan ukuran, material, cara membersihkan, kebutuhan tempat penyimpanan, serta garansi atau ketentuan retur. Kamu bisa menambah alat lain nanti setelah melihat apakah pilihan pertama benar-benar membantu dapur."
      ]},
      { heading: "Uji kebutuhan selama seminggu sebelum membeli gadget dapur", paragraphs: [
        "Selama satu minggu, perhatikan pekerjaan dapur apa yang berulang kali membuatmu repot. Apakah membuka kemasan, meniriskan makanan, mengukur bahan, atau mengambil barang dari bagian belakang lemari? Catat seberapa sering hal itu terjadi dan bagaimana kamu menyelesaikannya sekarang. Sebuah alat lebih berpeluang berguna jika menyelesaikan kerepotan yang benar-benar sering muncul, bukan masalah yang baru terasa penting setelah melihat iklan.",
        "Lalu bandingkan fungsinya dengan alat yang sudah kamu miliki. Alat multifungsi bisa membantu bila fungsi utamanya tetap baik dan mudah dibersihkan. Peralatan khusus bisa dipertimbangkan jika memang menghemat usaha untuk tugas yang sering dilakukan. Periksa ukuran, material, petunjuk pembersihan, ketersediaan suku cadang, dan tempat penyimpanannya."
      ], bullets: [
        "Tentukan pekerjaan yang berulang sebelum mencari alat baru.",
        "Periksa apakah alat yang sudah dimiliki sebenarnya bisa digunakan.",
        "Hitung juga waktu mencuci, mengeringkan, dan menyimpan alat tersebut."
      ]},
    ],
    related: ["memilih-wadah-penyimpanan-makanan", "menata-workspace-tanpa-menambah-barang"],
    sources: [{ label: "USDA Food Safety and Inspection Service: How to use a food thermometer", url: "https://ask.fsis.usda.gov/article/How-to-use-a-food-thermometer" }]
  },
  {
    slug: "memilih-wadah-penyimpanan-makanan",
    categorySlug: "rumah-dapur", categoryLabel: "Rumah & dapur",
    title: "Cara Memilih Wadah Penyimpanan Makanan untuk Dapur",
    seoTitle: "Cara Memilih Wadah Penyimpanan Makanan",
    excerpt: "Tutup yang tertukar, bentuk yang kurang pas, dan wadah yang tidak muat di rak membuat urusan menyimpan sisa makanan jadi merepotkan. Mulai dari kebiasaan menyimpan makanan.",
    seoDescription: "Bandingkan wadah makanan berdasarkan ukuran, bentuk, tutup, material, petunjuk perawatan, dan ruang yang tersedia di dapur.",
    dateLabel: "RUMAH & DAPUR", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.storage,
    imageAlt: "Penyimpanan dapur yang tertata dengan wadah dan rak",
    sections: [
      { heading: "Saat menyimpan makanan sisa terasa seperti puzzle", paragraphs: [
        "Satu tutup entah ke mana, wadah lain terlalu tinggi untuk rak kulkas, dan ukuran paling kecil selalu kurang besar. Satu set besar terlihat seperti pembelian hemat sampai kamu sadar hanya dua ukuran yang benar-benar sesuai dengan cara memasakmu.",
        "Pertanyaan yang lebih berguna bukan berapa banyak potongan dalam satu set, tetapi apakah bentuk dan ukurannya sesuai dengan makanan yang biasa disimpan serta ruang di rak atau lemari yang kamu punya."
      ]},
      { heading: "Pilih ukuran sesuai makanan yang biasa disimpan", paragraphs: [
        "Pikirkan porsi yang biasa dimasak, kebiasaan meal prep, serta apakah kamu membutuhkan wadah untuk bekal, sisa makanan, bahan kering, atau camilan. Beberapa ukuran yang mudah ditumpuk bisa lebih berguna daripada banyak bentuk yang jarang digunakan.",
        "Bandingkan dimensi luar selain kapasitas yang tertulis. Periksa cara tutup terpasang, apakah dapat saling digunakan dalam satu set, dan bagaimana wadah disusun ketika kosong."
      ], bullets: [
        "Ukur rak kulkas dan kedalaman lemari.",
        "Periksa apakah tutup terpasang dengan baik dan mudah dikenali.",
        "Baca instruksi produsen untuk penggunaan microwave, freezer, dan dishwasher."
      ]},
      { heading: "Jangan menebak hanya dari nama material", paragraphs: [
        "Wadah kaca, plastik, dan stainless steel memiliki bobot, kebutuhan penggunaan, dan petunjuk yang berbeda. Nama material saja tidak cukup untuk memastikan sebuah wadah aman digunakan di microwave, freezer, atau dishwasher. Cari petunjuk yang jelas dari produsen untuk produk yang spesifik.",
        "Untuk cara menyimpan makanan, ikuti panduan keamanan pangan yang tepercaya dan jangan menganggap wadah tertentu otomatis membuat makanan tahan lebih lama. Panduan [USDA tentang leftovers dan keamanan pangan](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety) bisa menjadi referensi tambahan."
      ]},
      { heading: "Seperti apa set wadah yang layak dipertimbangkan?", paragraphs: [
        "Set yang praktis seharusnya cocok dengan ukuran porsi, muat di tempat penyimpanan, dan dilengkapi petunjuk perawatan yang jelas. Bandingkan jumlah ukuran yang benar-benar berguna, desain tutup, kemudahan ditumpuk, ketersediaan pengganti, serta informasi penjual sebelum membeli."
      ]},
      { heading: "Pikirkan seluruh rutinitas penyimpanan, bukan wadahnya saja", paragraphs: [
        "Wadah digunakan saat makanan dimasukkan, dipindahkan ke tempat penyimpanan, dikeluarkan, dicuci, lalu disimpan kembali. Kalau tutupnya sulit dicocokkan, bentuknya membuang banyak ruang rak, atau wadahnya sulit dibersihkan, satu set bisa terasa merepotkan walaupun tampak rapi ketika baru dibeli. Pertimbangkan setiap tahap ini sebelum memilih paket besar.",
        "Periksa apakah produsen memberikan petunjuk yang jelas untuk model dan tutup yang spesifik. Jangan menganggap semua bagian set aman digunakan di microwave, freezer, atau dishwasher hanya karena satu komponennya memiliki label tersebut. Untuk keamanan pangan, ikuti panduan penyimpanan yang tepercaya; wadah tidak menggantikan proses pendinginan, penyimpanan di kulkas, dan batas waktu konsumsi yang benar."
      ], bullets: [
        "Ukur rak kulkas dan lemari tempat wadah akan disimpan.",
        "Periksa apakah tutup dan badan wadah bisa ditumpuk atau disusun bersarang.",
        "Baca petunjuk perawatan untuk setiap komponen, termasuk tutupnya."
      ]},
    ],
    related: ["memilih-peralatan-dapur-kecil-yang-berguna", "memilih-tas-sehari-hari-yang-praktis"],
    sources: [{ label: "USDA Food Safety and Inspection Service: Leftovers and food safety", url: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety" }]
  },
  {
    slug: "menata-workspace-tanpa-menambah-barang",
    categorySlug: "lifestyle", categoryLabel: "Lifestyle essentials",
    title: "Menata Workspace di Rumah Tanpa Menambah Banyak Barang",
    seoTitle: "Menata Workspace Tanpa Menambah Banyak Barang",
    excerpt: "Meja kerja bisa terlihat rapi di foto, tetapi tetap terasa kurang nyaman saat digunakan. Mulai dari hal yang mengganggu pekerjaan, lalu pilih aksesori hanya jika memang dibutuhkan.",
    seoDescription: "Panduan menata workspace di rumah: mengukur meja, merapikan kabel, memilih organizer, dan menghindari aksesori meja yang tidak perlu.",
    dateLabel: "PILIHAN HARIAN", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.desk,
    imageAlt: "Workspace rumah sederhana dengan laptop dan meja yang lapang",
    sections: [
      { heading: "Meja terlihat rapi, tapi bekerja tetap terasa kurang nyaman", paragraphs: [
        "Kamu merapikan meja, membeli beberapa organizer, lalu mengambil foto yang terlihat memuaskan. Seminggu kemudian kabel kembali berantakan, barang yang dipakai sehari-hari berpindah ke mana-mana, dan kotak penyimpanan baru justru mengambil ruang kerja.",
        "Workspace yang berguna bukan yang paling banyak aksesorinya. Yang lebih penting adalah barang yang sering digunakan mudah dijangkau dan hal yang mengganggu pekerjaan punya tempat yang masuk akal."
      ]},
      { heading: "Cari sumber kerepotan sebelum membeli", paragraphs: [
        "Perhatikan hal yang paling sering mengganggu selama bekerja. Apakah kabel charger, dokumen yang tidak punya tempat, pencahayaan, atau laptop yang memenuhi meja? Pilih satu masalah yang paling sering muncul untuk diselesaikan lebih dulu.",
        "Ukur meja dan perangkat yang sudah dimiliki. Periksa jejak ukuran stand, laci, lampu, dan pengatur kabel sebelum memesan. Barang yang terlihat compact di foto bisa saja mengambil ruang yang justru kamu butuhkan."
      ], bullets: [
        "Letakkan alat yang sering digunakan di tempat yang mudah dijangkau.",
        "Pilih pengatur kabel sesuai jumlah dan arah kabel yang kamu miliki.",
        "Hindari penyimpanan yang menghalangi ruang kaki atau mengubah meja menjadi rak."
      ]},
      { heading: "Pilih aksesori berdasarkan ukuran dan penyesuaian", paragraphs: [
        "Untuk stand monitor atau laptop, bandingkan tinggi, lebar, informasi kestabilan, dan kecocokan perangkat. Untuk lampu, periksa ukuran dasar, kemampuan penyesuaian, dan pilihan pengaturan cahaya. Untuk organizer, pastikan ukuran kompartemen sesuai barang yang ingin disimpan.",
        "Kalau kamu ingin mengubah posisi duduk atau layar, gunakan panduan workstation yang sudah teruji dan jangan hanya mengandalkan klaim marketing produk. OSHA menyediakan [checklist computer workstation](https://www.osha.gov/etools/computer-workstations/checklist) untuk membantu mengevaluasi penataan meja kerja."
      ]},
      { heading: "Coba satu perubahan, lalu evaluasi", paragraphs: [
        "Terapkan satu perubahan selama beberapa hari kerja sebelum menambahkan aksesori lain. Kalau perubahan itu tidak membuat aktivitas lebih mudah, singkirkan atau ubah posisinya. Workspace seharusnya mendukung kebiasaanmu, bukan membuat rutinitas perawatan barang baru."
      ]},
      { heading: "Rapikan meja tanpa harus mulai dari belanja", paragraphs: [
        "Singkirkan barang yang tidak berkaitan dengan pekerjaan saat itu, lalu letakkan benda yang paling sering dipakai dalam jangkauan yang nyaman. Atur hanya kabel yang memang berulang kali mengganggu, dan sisakan ruang untuk menulis, menggunakan mouse, atau berpindah antarperangkat. Foto atau catat susunan meja sebelum membeli apa pun; catatan itu bisa dipakai untuk memeriksa apakah aksesori baru benar-benar muat.",
        "Kalau ketidaknyamanan berkaitan dengan postur, penglihatan, atau rasa sakit, jangan berasumsi aksesori meja akan menyelesaikan semuanya. Periksa panduan workstation dan cari saran profesional yang sesuai. Aksesori seharusnya membantu masalah ukuran atau pengaturan yang spesifik, bukan menggantikan evaluasi keseluruhan setup kerja."
      ], bullets: [
        "Kosongkan sebagian permukaan dan amati hal yang mengganggu saat bekerja.",
        "Ukur ruang yang tersedia, termasuk jalur kabel dan ukuran perangkat.",
        "Tambahkan satu aksesori, lalu singkirkan yang justru membuat meja makin sempit."
      ]},
    ],
    related: ["memilih-peralatan-dapur-kecil-yang-berguna", "memilih-wadah-penyimpanan-makanan", "memilih-tas-sehari-hari-yang-praktis"],
    sources: [{ label: "U.S. Occupational Safety and Health Administration: Computer workstation checklist", url: "https://www.osha.gov/etools/computer-workstations/checklist" }]
  },
  {
    slug: "memilih-tas-sehari-hari-yang-praktis",
    categorySlug: "lifestyle", categoryLabel: "Lifestyle essentials",
    title: "Cara Memilih Tas Sehari-hari yang Praktis",
    seoTitle: "Cara Memilih Tas Sehari-hari yang Praktis",
    excerpt: "Tas bisa terlihat sempurna di foto, tetapi terasa merepotkan saat diisi barang yang biasa kamu bawa. Pilih berdasarkan aktivitas nyata, bukan daftar bawaan yang dibuat-buat.",
    seoDescription: "Panduan memilih tas sehari-hari berdasarkan ukuran, bobot, tali, kompartemen, penutup, material, dan kebijakan retur.",
    dateLabel: "PILIHAN HARIAN", publishedAt: "2026-11-08", readTime: "5 MENIT BACA", image: images.bag,
    imageAlt: "Tas sehari-hari yang ditampilkan dengan latar bernuansa netral",
    sections: [
      { heading: "Tas yang muat banyak barang, tapi tidak cocok untuk aktivitasmu", paragraphs: [
        "Tas terlihat luas di foto, tetapi setelah diisi dompet, kunci, botol minum, charger, dan barang lain yang biasa dibawa, bentuknya menjadi tidak nyaman. Atau justru terlalu banyak kompartemen hingga barang yang sering dicari terselip di tempat yang salah.",
        "Sebelum browsing, pikirkan hari kerja biasa. Apa saja yang benar-benar kamu bawa setiap hari? Barang mana yang hanya sesekali diperlukan? Ukuran yang tepat adalah ukuran yang sesuai dengan rutinitas tanpa membuatmu membawa barang yang sebenarnya tidak dibutuhkan."
      ]},
      { heading: "Bandingkan detail yang memengaruhi penggunaan harian", paragraphs: [
        "Mulai dari dimensi luar dan dalam, kemudian bandingkan bukaan, jenis penutup, panjang dan lebar tali, serta bobot tas. Perhatikan cara tas tersebut dibawa dan apakah tali dapat disesuaikan dengan preferensimu.",
        "Kompartemen akan berguna jika sesuai dengan barang yang dibawa. Banyak kantong justru bisa membuat barang sulit ditemukan jika tata letaknya tidak intuitif. Periksa apakah tas dapat berdiri sendiri bila hal itu penting bagimu, lalu baca informasi material dan petunjuk perawatannya."
      ], bullets: [
        "Ukur perangkat atau botol yang perlu dibawa secara rutin.",
        "Periksa berat tas sebelum ditambah barang bawaan.",
        "Bandingkan jenis penutup, penyesuaian tali, lapisan dalam, dan petunjuk perawatan."
      ]},
      { heading: "Gunakan foto produk dengan lebih kritis", paragraphs: [
        "Foto lifestyle dapat membuat tas tampak lebih besar atau kecil tergantung model dan sudut kamera. Cari foto yang menunjukkan tas berdampingan dengan benda yang ukurannya mudah dikenali, serta informasi dimensi yang jelas. Baca ulasan untuk detail penggunaan, tetapi ingat bahwa barang bawaan orang lain belum tentu sama dengan milikmu.",
        "Periksa penjual, masa retur, dan batasan pengembalian sebelum membeli. Detail ini menjadi penting ketika kamu tidak bisa memegang tasnya secara langsung."
      ]},
      { heading: "Pilih tas yang benar-benar akan digunakan", paragraphs: [
        "Shortlist praktis mungkin terdiri dari satu tas compact untuk aktivitas ringan dan satu opsi lebih besar jika kamu rutin membawa laptop atau barang berukuran besar. Bandingkan dimensi, detail desain yang berkaitan dengan kenyamanan, bobot, dan kebutuhan perawatannya. Jangan membayar lebih untuk kompartemen atau material yang tidak menyelesaikan masalahmu."
      ]},
      { heading: "Tes barang bawaan sebelum menentukan ukuran tas", paragraphs: [
        "Kumpulkan barang yang biasa kamu bawa pada hari normal, lalu letakkan berdampingan. Ukur benda yang bentuknya kaku seperti laptop, tablet, botol, atau notebook. Bandingkan ukuran tersebut dengan dimensi bagian dalam tas, bukan hanya kapasitas yang tertera. Perhatikan juga bukaan tas: ukurannya mungkin cukup, tetapi tetap merepotkan jika setiap barang harus dimasukkan dengan posisi miring melalui resleting yang sempit.",
        "Pertimbangkan berat tas sebelum diisi barang. Banyak kantong memang terdengar praktis, tetapi setiap kompartemen bisa membuat struktur tas lebih berat dan barang makin sulit ditemukan jika tata letaknya tidak sesuai kebiasaanmu. Cari informasi ukuran yang jelas serta foto detail tali, jahitan, penutup, dan bagian dalam tas."
      ], bullets: [
        "Ukur barang terbesar yang rutin dibawa dan cocokkan dengan dimensi dalam tas.",
        "Periksa berat kosong, panjang tali, jenis penutup, dan akses saat bergerak.",
        "Baca kebijakan retur jika ukuran asli ternyata berbeda dari ekspektasi foto."
      ]},
    ],
    related: ["menata-workspace-tanpa-menambah-barang", "memilih-wadah-penyimpanan-makanan"],
    sources: [{ label: "Federal Trade Commission: Online Shopping", url: "https://consumer.ftc.gov/articles/online-shopping" }]
  }
];

export const guides: Record<Locale, Guide[]> = { en, id };
