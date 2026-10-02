export interface PyqQuestion {
  id: number;
  type: "MCQ" | "AR" | "SA" | "LA";
  tag: string;
  question: string;
  options?: string[];
  answer: string;
  explanation: string;
}

export interface PyqChapterInfo {
  chapter_num: number;
  unit_num: number;
  title: string;
  unit_title: string;
  weightage_unit: string;
}

export interface PyqChapter {
  info: PyqChapterInfo;
  questions: PyqQuestion[];
}

export const BIOLOGY_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "unit_num": 6,
      "title": "Sexual Reproduction in Flowering Plants",
      "unit_title": "Reproduction",
      "weightage_unit": "16 Marks (Unit VI)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The innermost wall layer of microsporangium which nourishes the developing pollen grains and possesses dense cytoplasm with more than one nucleus is:",
        "options": [
          "(a) Endothecium",
          "(b) Middle layers",
          "(c) Tapetum",
          "(d) Epidermis"
        ],
        "answer": "(c) Tapetum",
        "explanation": "Tapetum is the innermost layer of the microsporangium wall. Cells of the tapetum possess dense cytoplasm and generally have more than one nucleus (polyploid). Its primary function is to provide nourishment to the developing pollen grains and secrete callase, sporopollenin precursors, and pollenkitt."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The exine of pollen grain is composed of sporopollenin, which is highly resistant to environmental factors because:",
        "options": [
          "(a) It is a hard protein crosslinked with cellulose",
          "(b) No enzyme that degrades sporopollenin is so far known and it resists high temperature and strong acids/alkali",
          "(c) It contains thick pectin and lignified hemicellulose",
          "(d) It is formed by the intine during microgametogenesis"
        ],
        "answer": "(b) No enzyme that degrades sporopollenin is so far known and it resists high temperature and strong acids/alkali",
        "explanation": "Sporopollenin is one of the most resistant organic materials known. It can withstand high temperatures, strong acids, and alkali. No enzyme capable of degrading sporopollenin has been discovered to date, allowing pollen grains to be well- preserved as fossils."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In over 60 percent of angiosperms, pollen grains are shed at which stage of development?",
        "options": [
          "(a) 2-celled stage",
          "(b) 3-celled stage",
          "(c) 4-celled stage",
          "(d) 1-celled stage"
        ],
        "answer": "(a) 2-celled stage",
        "explanation": "In over 60% of angiosperms, pollen grains are shed at the 2-celled stage (one large vegetative cell and one small generative cell). In the remaining species, the generative cell divides mitotically to form two male gametes before pollen grains are shed (3-celled stage)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The filiform apparatus is a characteristic cellular thickening found in which cell of the female gametophyte?",
        "options": [
          "(a) Antipodal cells",
          "(b) Synergids",
          "(c) Central cell",
          "(d) Egg cell"
        ],
        "answer": "(b) Synergids",
        "explanation": "The synergids have special cellular thickenings at the micropylar tip called the filiform apparatus, which plays a crucial role in guiding the entry of the pollen tube into the synergid."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the ploidy level of cells of nucellus, megaspore mother cell (MMC), functional megaspore, and female gametophyte (embryo sac) respectively?",
        "options": [
          "(a) 2n, 2n, n, n",
          "(b) 2n, n, n, n",
          "(c) n, 2n, n, 2n",
          "(d) 2n, 2n, 2n, n"
        ],
        "answer": "(a) 2n, 2n, n, n",
        "explanation": "The nucellus and megaspore mother cell (MMC) are diploid sporophytic tissues (2n). Meiosis in the MMC produces 4 haploid megaspores, of which one functional megaspore survives (n). The embryo sac develops from this single functional megaspore via mitosis and is haploid (n)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A typical mature angiosperm embryo sac at maturity is:",
        "options": [
          "(a) 8-celled, 8-nucleate",
          "(b) 7-celled, 8-nucleate",
          "(c) 8-celled, 7-nucleate",
          "(d) 7-celled, 7-nucleate"
        ],
        "answer": "(b) 7-celled, 8-nucleate",
        "explanation": "At maturity, the typical angiosperm embryo sac consists of 7 cells: 3 cells at the micropylar end forming the egg apparatus (1 egg + 2 synergids), 3 antipodal cells at the chalazal end, and 1 large central cell containing 2 polar nuclei, making it 7- celled and 8-nucleate."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cleistogamous flowers ensure guaranteed seed set even in the absence of pollinators because:",
        "options": [
          "(a) They expose their anthers and stigmas to the wind",
          "(b) They produce excessive fragrant nectar",
          "(c) They do not open at all, leading to obligate autogamy",
          "(d) They have brightly colored perianth attracting insects"
        ],
        "answer": "(c) They do not open at all, leading to obligate autogamy",
        "explanation": "Cleistogamous flowers (such as in Commelina, Viola, Oxalis) do not open at all. Anthers and stigma lie close to each other. When anthers dehisce in flower buds, pollen grains fall on the stigma, ensuring 100% autogamous pollination and guaranteed seed set without pollinators."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following outbreeding devices prevents both autogamy and geitonogamy in plants?",
        "options": [
          "(a) Dichogamy (protandry or protogyny)",
          "(b) Self-incompatibility",
          "(c) Dioecy (male and female flowers on different plants)",
          "(d) Monoecy (male and female flowers on the same plant)"
        ],
        "answer": "(c) Dioecy (male and female flowers on different plants)",
        "explanation": "In dioecious plants (like papaya and date palm), staminate and pistillate flowers are borne on separate plants (male plant and female plant). This prevents both autogamy (pollination within same flower) and geitonogamy (pollination between different flowers of same plant)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Geitonogamy is functionally cross-pollination involving a pollinating agent, but genetically it is similar to autogamy because:",
        "options": [
          "(a) The pollen grains come from the same flower",
          "(b) The pollen grains come from a different plant of another species",
          "(c) The pollen grains come from a different flower on the same plant",
          "(d) It involves fusion of two polar nuclei"
        ],
        "answer": "(c) The pollen grains come from a different flower on the same plant",
        "explanation": "Functionally, geitonogamy involves the transfer of pollen grains from the anther to the stigma of another flower of the same plant via an external pollinator. But genetically, since both flowers share the identical genetic makeup of the parent plant, it is equivalent to autogamy."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following characteristics is NOT exhibited by wind-pollinated (anemophilous) flowers?",
        "options": [
          "(a) Pollen grains are light and non-sticky",
          "(b) Large feathery stigma to easily trap air-borne pollen",
          "(c) Flowers produce abundant nectar and strong sweet fragrance",
          "(d) Single ovule in each ovary and numerous flowers packed into an inflorescence"
        ],
        "answer": "(c) Flowers produce abundant nectar and strong sweet fragrance",
        "explanation": "Wind-pollinated flowers do not produce nectar or fragrance, nor do they have colorful petals, as they do not need to attract animal pollinators. They have light, non-sticky pollen, exposed stamens, and large feathery stigmas (e.g., corn cob tassels)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In water-pollinated plants like Vallisneria:",
        "options": [
          "(a) Female flowers remain completely submerged beneath water",
          "(b) Female flowers reach the surface of water by long pedicels and pollen grains are carried passively by water currents",
          "(c) Pollen grains are heavy and sink to the bottom",
          "(d) Insects pollinate the flowers floating on the surface"
        ],
        "answer": "(b) Female flowers reach the surface of water by long pedicels and pollen grains are carried passively by water currents",
        "explanation": "In Vallisneria (hydrophily), female flowers reach the water surface by long stalks. Male flowers or pollen grains are released onto the surface of the water and carried passively by water currents; some eventually reach the stigma."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Double fertilisation, a phenomenon unique to flowering plants, involves:",
        "options": [
          "(a) Syngamy and Triple fusion",
          "(b) Syngamy and Parthenogenesis",
          "(c) Triple fusion and Apomixis",
          "(d) Autogamy and Allogamy"
        ],
        "answer": "(a) Syngamy and Triple fusion",
        "explanation": "Double fertilisation involves: (1) Syngamy: fusion of one haploid male gamete with the egg cell nucleus forming a diploid zygote (2n); and (2) Triple fusion: fusion of the second haploid male gamete with the two polar nuclei of the central cell forming a triploid Primary Endosperm Nucleus (PEN, 3n)."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The primary endosperm nucleus (PEN) in a typical angiosperm embryo sac is:",
        "options": [
          "(a) Haploid (n)",
          "(b) Diploid (2n)",
          "(c) Triploid (3n)",
          "(d) Tetraploid (4n)"
        ],
        "answer": "(c) Triploid (3n)",
        "explanation": "The PEN is formed by the fusion of three haploid nuclei (one male gamete + two polar nuclei), hence its ploidy level is triploid (3n)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Coconut water from tender coconut represents:",
        "options": [
          "(a) Free-nuclear endosperm",
          "(b) Cellular endosperm",
          "(c) Fleshy mesocarp",
          "(d) Degenerated nucellus"
        ],
        "answer": "(a) Free-nuclear endosperm",
        "explanation": "The coconut water from tender coconut is free-nuclear endosperm (made of thousands of free nuclei), while the surrounding white kernel is the cellular endosperm."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a non-albuminous (exalbuminous) seed, endosperm is absent at maturity because:",
        "options": [
          "(a) Endosperm was never formed during fertilisation",
          "(b) Endosperm is completely consumed by the developing embryo before seed maturation",
          "(c) Endosperm is converted into the hard seed coat",
          "(d) The plant reproduced apomictically"
        ],
        "answer": "(b) Endosperm is completely consumed by the developing embryo before seed maturation",
        "explanation": "In non-albuminous seeds (e.g., pea, gram, groundnut, beans), the endosperm is completely consumed by the growing embryo during its development prior to seed maturation."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Perisperm represents persistent, residual nucellus found in mature seeds of:",
        "options": [
          "(a) Pea and Groundnut",
          "(b) Black pepper and Beet",
          "(c) Maize and Wheat",
          "(d) Castor and Gram"
        ],
        "answer": "(b) Black pepper and Beet",
        "explanation": "In most seeds, the nucellus is consumed during embryo development. However, in seeds such as black pepper (Piper nigrum) and beet (Beta vulgaris), remnants of persistent nucellus are retained, which is termed perisperm."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The single cotyledon of the monocot embryo (grass family) is positioned laterally and known as:",
        "options": [
          "(a) Coleoptile",
          "(b) Scutellum",
          "(c) Coleorhiza",
          "(d) Epiblast"
        ],
        "answer": "(b) Scutellum",
        "explanation": "In the grass family, the single shield-shaped cotyledon situated towards one side (lateral) of the embryonal axis is called the scutellum."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The root cap and radical in a monocotyledonous embryo are enclosed in an undifferentiated sheath termed:",
        "options": [
          "(a) Coleoptile",
          "(b) Scutellum",
          "(c) Coleorhiza",
          "(d) Pericarp"
        ],
        "answer": "(c) Coleorhiza",
        "explanation": "At its lower end, the embryonal axis has the radicle and root cap enclosed in an undifferentiated protective sheath called coleorhiza. The epicotyl and shoot apex are enclosed by coleoptile."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is an example of a false fruit where the thalamus also contributes to fruit formation alongside the ovary?",
        "options": [
          "(a) Mango",
          "(b) Apple",
          "(c) Tomato",
          "(d) Banana"
        ],
        "answer": "(b) Apple",
        "explanation": "In fruits like apple, strawberry, and cashew, the thalamus also contributes to fruit formation. Such fruits are called false fruits. True fruits develop solely from the ovary (e.g., mango, tomato)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Parthenocarpic fruits are seedless and develop without fertilisation. Which growth hormone is commonly applied to induce parthenocarpy artificially?",
        "options": [
          "(a) Abscisic acid",
          "(b) Auxin",
          "(c) Ethylene",
          "(d) Cytokinin"
        ],
        "answer": "(b) Auxin",
        "explanation": "Parthenocarpy can be induced through the application of growth hormones like auxins and gibberellins, yielding commercially desirable seedless fruits such as seedless grapes and watermelons."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Apomixis is a form of asexual reproduction that mimics sexual reproduction because:",
        "options": [
          "(a) It produces seeds without fertilisation",
          "(b) It involves reduction division followed by syngamy",
          "(c) It requires two genetically distinct parents",
          "(d) It always produces haploid offspring"
        ],
        "answer": "(a) It produces seeds without fertilisation",
        "explanation": "Apomixis (seen in Asteraceae and grasses) is a mechanism where seeds are formed without fertilisation. Since it forms seeds (the end product of sexual reproduction) without actual gametic fusion, it mimics sexual reproduction."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Polyembryony, commonly observed in Citrus and Mango species, arises most frequently when:",
        "options": [
          "(a) Multiple pollen tubes enter a single ovule",
          "(b) Nucellar cells surrounding the embryo sac divide and protrude into the embryo sac to develop into embryos",
          "(c) Synergids divide meiotically to produce embryos",
          "(d) Multiple central cells undergo triple fusion simultaneously"
        ],
        "answer": "(b) Nucellar cells surrounding the embryo sac divide and protrude into the embryo sac to develop into embryos",
        "explanation": "In many Citrus and Mango varieties, some of the maternal nucellar cells surrounding the embryo sac start dividing, push into the embryo sac, and develop into distinct embryos, resulting in more than one embryo in a seed (polyembryony)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In an anatropous ovule, the junction where the body of the ovule fuses with the funicle is called:",
        "options": [
          "(a) Micropyle",
          "(b) Chalaza",
          "(c) Hilum",
          "(d) Raphe"
        ],
        "answer": "(c) Hilum",
        "explanation": "The hilum represents the junction between the ovule and the funicle (stalk). It is the scar left on the seed where it was attached to the funicle."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the viability duration of pollen grains in cereals like wheat and rice compared to members of Rosaceae, Leguminosae, and Solanaceae?",
        "options": [
          "(a) 30 minutes in cereals; several months in Rosaceae/Leguminosae/Solanaceae",
          "(b) Several months in cereals; 30 minutes in Rosaceae",
          "(c) 24 hours in all angiosperms",
          "(d) 10 years when stored at room temperature"
        ],
        "answer": "(a) 30 minutes in cereals; several months in Rosaceae/Leguminosae/Solanaceae",
        "explanation": "In some cereals such as rice and wheat, pollen grains lose viability within 30 minutes of their release. In contrast, in some members of Rosaceae, Leguminosae, and Solanaceae, pollen viability is maintained for months."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Pollen grains can be stored for years in liquid nitrogen at what temperature for use in crop breeding programmes?",
        "options": [
          "(a) -80°C",
          "(b) -120°C",
          "(c) -196°C",
          "(d) -273°C"
        ],
        "answer": "(c) -196°C",
        "explanation": "Pollen grains of a large number of species can be stored for years in liquid nitrogen at -196°C\n(cryopreservation) in pollen banks for use in plant breeding programmes. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Chasmogamous flowers always require cross-pollinating agents for successful fertilization.\nReason (R): Cleistogamous flowers never open and are strictly autogamous.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(d) (A) is false but (R) is true",
        "explanation": "Assertion is false: Chasmogamous flowers have exposed anthers and stigmas, but they can undergo autogamy (if anthers and stigma mature simultaneously and lie close together), geitonogamy, or xenogamy. Reason is true: Cleistogamous flowers do not open at all and are invariantly autogamous."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Endosperm development precedes embryo development in an angiosperm seed.\nReason (R): The cells of endosperm are filled with reserve food materials to provide nutrition to the developing embryo.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and R is the correct explanation. The zygote divides only after a certain amount of endosperm is formed. This is an adaptation to assure adequate nutritional support to the developing embryo."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Pollen grains are well-preserved as fossils for millions of years.\nReason (R): The intine of pollen grains is made up of cellulose and pectin.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are individually true, but R does not explain A. Pollen grains are fossilized because the exine contains sporopollenin, which resists high temperatures, strong acids, alkali, and enzymatic degradation. Intine is composed of pectin and cellulose, but does not impart fossilization durability."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Self-incompatibility is a genetically controlled mechanism that prevents self-pollen from fertilising ovules.\nReason (R): It prevents inbreeding depression by inhibiting pollen germination or pollen tube growth in the pistil.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Self-incompatibility is an outbreeding mechanism determined by multiple alleles (S-genes) that prevents self-pollen from fertilising ovules by inhibiting pollen germination or pollen tube growth in the style, thus averting the harmful effects of inbreeding depression."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Apomictic seeds are highly advantageous in commercial hybrid seed production.\nReason (R): Apomixis eliminates the segregation of desirable hybrid traits across successive crop generations.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) provides the exact reason. Farmers currently have to buy costly hybrid seeds every year because sexual reproduction causes segregation of hybrid traits. If hybrids are made apomictic, no segregation occurs, and farmers can save and replant seeds year after year. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the structure of a mature 2-celled pollen grain of an angiosperm. Mention the functions and characteristics of both cells. [3 Marks]",
        "answer": "Vegetative cell and Generative cell characteristics.",
        "explanation": "Vegetative cell and Generative cell characteristics.\n\nMarking Scheme:\n• Vegetative Cell: It is bigger in size, has abundant food reserve materials, and possesses a large, irregularly shaped nucleus. [1 Mark]\n• Generative Cell: It is small, spindle-shaped with dense cytoplasm and a nucleus; it floats in the cytoplasm of the vegetative cell. [1 Mark]\n• Fate/Division: In 60% angiosperms, pollen is shed at this 2-celled stage; in the remaining 40%, the generative cell divides mitotically to produce two non-motile male gametes before shedding (3-celled stage). [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Geitonogamy and Xenogamy on the basis of: (i) Pollen source, (ii) Genetic outcome, (iii) Evolutionary significance. [3 Marks]",
        "answer": "Tabular comparison between Geitonogamy and Xenogamy.",
        "explanation": "Tabular comparison between Geitonogamy and Xenogamy.\n\nMarking Scheme (1 Mark per point):\n1. Pollen source: In Geitonogamy, pollen is transferred from the anther to the stigma of another flower on the same plant. In Xenogamy, pollen is transferred to the stigma of a flower on a different plant of the same species. [1 Mark]\n2. Genetic outcome: Geitonogamy is genetically identical to autogamy (no genetic variation). Xenogamy brings genetically different types of pollen grains to the stigma (introduces genetic variation). [1 Mark]\n3. Evolutionary significance: Geitonogamy does not promote evolution or adaptability and may lead to inbreeding depression; Xenogamy provides raw material for natural selection and adaptation to changing environments. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State any three outbreeding devices developed by flowering plants to discourage self-pollination and encourage cross- pollination. [3 Marks]",
        "answer": "Outbreeding adaptations: Dichogamy, Self-incompatibility, and Unisexuality/Herkogamy.",
        "explanation": "Outbreeding adaptations: Dichogamy, Self-incompatibility, and Unisexuality/Herkogamy.\n\nMarking Scheme (1 Mark each for any three devices):\n1. Non-synchronisation of pollen release and stigma receptivity (Dichogamy): Either pollen is released before stigma becomes receptive (protandry, e.g., sunflower) or stigma becomes receptive before pollen release (protogyny, e.g., Datura). [1 Mark]\n2. Anther and stigma placed at different positions (Heterostyly / Herkogamy): Prevents mechanical contact between pollen and stigma of the same flower (e.g., Primula). [1 Mark]\n3. Self-incompatibility: A genetically mediated physiological barrier that prevents self-pollen from germinating or growing pollen tubes in the style. [1 Mark]\n4. Production of unisexual flowers (Dioecy/Monoecy): In dioecious plants (papaya), male and female flowers are on separate plants, completely preventing autogamy and geitonogamy. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the events of pollen-pistil interaction that lead to fertilization in angiosperms. Why is it termed a dynamic process? [3 Marks]",
        "answer": "Recognition, acceptance/rejection, pollen tube growth, entry into ovule.",
        "explanation": "Recognition, acceptance/rejection, pollen tube growth, entry into ovule.\n\nMarking Scheme:\n• Dynamic Recognition: Pistil recognizes whether the pollen is compatible (right type) or incompatible (wrong type), mediated by chemical dialogue between pollen and stigma proteins. [1 Mark]\n• Growth Response: If compatible, pistil accepts it and promotes pollen germination; pollen tube emerges through a germ pore, grows through tissues of stigma and style, guided chemotropically towards the ovary. [1 Mark]\n• Entry into Synergid: The pollen tube enters the ovule through micropyle and penetrates one of the degenerate synergids guided by the filiform apparatus, releasing two male gametes. It is called a 'dynamic process' because of continuous chemical signaling determining acceptance or rejection. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is triple fusion? Where and how does it take place? Name the nuclei involved in triple fusion and mention the product formed. [3 Marks]",
        "answer": "Fusion of second male gamete with two polar nuclei to form PEN.",
        "explanation": "Fusion of second male gamete with two polar nuclei to form PEN.\n\nMarking Scheme:\n• Location and mechanism: Triple fusion takes place inside the central cell of the female gametophyte (embryo sac). [1 Mark]\n• Nuclei involved: Three haploid nuclei are involved: one haploid male gamete nucleus (n) and two haploid polar nuclei (or one diploid secondary nucleus, 2n). [1 Mark]\n• Product formed & ploidy: Fusion yields the triploid Primary Endosperm Nucleus (PEN, 3n), which subsequently divides to form the nutritive endosperm tissue. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between albuminous (endospermic) and non-albuminous (exalbuminous) seeds. Give two examples of each. [3 Marks]",
        "answer": "Comparison between albuminous and non-albuminous seeds with examples.",
        "explanation": "Comparison between albuminous and non-albuminous seeds with examples.\n\nMarking Scheme:\n• Albuminous (Endospermic) Seeds: Retain a portion of endosperm as it is not completely consumed during embryo development; endosperm serves as food storage during seed germination. Examples: Wheat, maize, barley, castor, sunflower. [1.5 Marks]\n• Non-albuminous (Exalbuminous) Seeds: Have no residual endosperm at maturity because it is completely consumed by the developing embryo; food is stored in cotyledons. Examples: Pea, gram, groundnut, bean. [1.5 Marks]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat, labelled diagram of a mature 7-celled, 8-nucleate female gametophyte (embryo sac) of an angiosperm. [3 Marks]",
        "answer": "Labeled diagram of mature embryo sac showing 7 cells and 8 nuclei.",
        "explanation": "Labeled diagram of mature embryo sac showing 7 cells and 8 nuclei.\n\nMarking Scheme:\n• Diagram accuracy and neatness. [1 Mark]\n• Correct labeling of Micropylar end structures: Egg cell, Synergids, Filiform apparatus. [1 Mark]\n• Correct labeling of Central cell with 2 Polar nuclei and Chalazal end structures: 3 Antipodal cells. [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why is apple called a false fruit and banana termed a parthenocarpic fruit? Explain with biological definitions. [3 Marks]",
        "answer": "Explanation of false fruit vs parthenocarpic fruit.",
        "explanation": "Explanation of false fruit vs parthenocarpic fruit.\n\nMarking Scheme:\n• False Fruit (Apple): Fruits that develop not only from the ovary but also from other floral parts like the thalamus are called false fruits. In apple, the fleshy edible part is derived from the enlarged thalamus. [1.5 Marks]\n• Parthenocarpic Fruit (Banana): Fruits that develop from the ovary without fertilisation are called parthenocarpic fruits; they are naturally seedless. Banana develops without ovule fertilisation. [1.5 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of: (i) Tapetum, (ii) Germ pore, (iii) Filiform apparatus in the sexual reproduction of angiosperms. [3 Marks]",
        "answer": "Functional roles of tapetum, germ pore, and filiform apparatus.",
        "explanation": "Functional roles of tapetum, germ pore, and filiform apparatus.\n\nMarking Scheme (1 Mark each):\n(i) Tapetum: Nourishes the developing microspores/pollen grains and synthesises enzymes, sporopollenin precursors, and pollenkitt. [1 Mark]\n(ii) Germ pore: Prominent apertures on exine where sporopollenin is absent; allows the emergence of the pollen tube during germination. [1 Mark]\n(iii) Filiform apparatus: Finger-like cellular projections in synergids that secrete chemical attractants and guide the entry of pollen tube into the synergid. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is apomixis? How can it be developed in hybrid crop varieties, and why is it considered a boon for Indian farmers? [3 Marks]",
        "answer": "Definition of apomixis, role in preventing hybrid segregation, benefits for farmers.",
        "explanation": "Definition of apomixis, role in preventing hybrid segregation, benefits for farmers.\n\nMarking Scheme:\n• Definition: Apomixis is a form of asexual reproduction that produces seeds without fertilisation (amixis). [1 Mark]\n• Mechanism & Hybrid advantage: In hybrid crops, sexual reproduction causes segregation of desirable characters in the progeny. If hybrid varieties are converted into apomicts, the hybrid characters do not segregate in offspring. [1 Mark]\n• Economic benefit to farmers: Farmers do not have to purchase expensive hybrid seeds every year; they can save and sow the harvest seeds repeatedly without loss of hybrid vigor. [1 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the development of a microspore mother cell into a mature pollen grain in an angiosperm.\n(b) Describe the structure of a typical pollen grain, explaining the chemical nature and functions of its wall layers. [5 Marks]",
        "answer": "Microsporogenesis and pollen grain morphology.",
        "explanation": "Microsporogenesis and pollen grain morphology.\n\nMarking Scheme:\n(a) Microsporogenesis [2.5 Marks]:\n• Each microspore mother cell (MMC, 2n) undergoes meiosis (reduction division) to form a cluster of four haploid cells called microspore tetrad. [1 Mark]\n• As the anther matures and dehydrates, the microspores dissociate from one another and develop into pollen grains. [0.5 Mark]\n• Inside the pollen grain, the nucleus undergoes mitosis accompanied by unequal cytokinesis to produce two cells: a large Vegetative cell and a smaller Generative cell. [1 Mark]\n(b) Pollen Grain Wall Structure [2.5 Marks]:\n• Exine: Outer hard layer made of sporopollenin (most resistant organic material, withstands high temp, strong acids, alkali; no enzyme degrades it). It has germ pores where sporopollenin is absent. [1.5 Marks]\n• Intine: Inner thin, continuous layer made of cellulose and pectin. Protects protoplast and forms the pollen tube upon germination. [1 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Trace the development of a megaspore mother cell (MMC) into a mature 7-celled, 8-nucleate female gametophyte (embryo sac) in a typical angiosperm (Polygonum type). [5 Marks]",
        "answer": "Megasporogenesis and monosporic embryo sac development.",
        "explanation": "Megasporogenesis and monosporic embryo sac development.\n\nMarking Scheme:\n• Megasporogenesis: A single MMC (2n) differentiates in the micropylar region of nucellus and undergoes meiosis to produce 4 haploid megaspores arranged in a linear tetrad. [1.5 Marks]\n• Monosporic Development: 3 megaspores at the micropylar end degenerate; only 1 functional megaspore at the chalazal end survives. [1 Mark]\n• Mitotic Divisions: Functional megaspore nucleus undergoes 3 successive free-nuclear mitotic divisions:\n- 1st division: 2 nuclei, move to opposite poles. [0.5 Mark]\n- 2nd division: 4 nuclei (2 at each pole). [0.5 Mark]\n- 3rd division: 8 nuclei (4 at each pole). [0.5 Mark]\n• Cellular Organisation: Cell walls are laid down: 3 cells at micropylar end form egg apparatus (1 egg cell + 2 synergids with filiform apparatus); 3 cells at chalazal end form antipodals; remaining 2 nuclei (polar nuclei) are situated in the large central cell. Hence, 7 cells and 8 nuclei. [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is double fertilisation? Name the two events involved and write the ploidy of the resulting cells.\n(b) Why is endosperm development essential prior to embryo development? Describe the free-nuclear and cellular stages of endosperm formation with an example. [5 Marks]",
        "answer": "Double fertilisation and endospermy.",
        "explanation": "Double fertilisation and endospermy.\n\nMarking Scheme:\n(a) Double Fertilisation [2.5 Marks]:\n• Release of 2 male gametes into synergid cytoplasm. One male gamete fuses with egg cell nucleus (Syngamy) -> Diploid zygote (2n). [1 Mark]\n• Second male gamete fuses with two polar nuclei in central cell (Triple fusion) -> Triploid primary endosperm nucleus (PEN, 3n). [1 Mark]\n• Since two types of fusion occur in the embryo sac, it is called double fertilisation. [0.5 Mark]\n(b) Endosperm Development [2.5 Marks]:\n• Essentiality: Endosperm accumulates reserve food materials needed to nourish the developing embryo. [1 Mark]\n• Free-nuclear endosperm: PEN undergoes repeated mitotic divisions without immediate cytokinesis, producing thousands of free nuclei (e.g., coconut water from tender coconut). [1 Mark]\n• Cellular endosperm: Subsequently, cell wall formation occurs from periphery inwards, making it cellular (e.g., surrounding white coconut flesh/kernel). [0.5 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Draw a labelled diagram of a dicotyledonous embryo showing all essential parts.\n(b) Differentiate between the structure of a dicot embryo and a monocot embryo. [5 Marks]",
        "answer": "Dicot embryo diagram and comparison with monocot embryo.",
        "explanation": "Dicot embryo diagram and comparison with monocot embryo.\n\nMarking Scheme:\n(a) Diagram of Dicot Embryo [2.5 Marks]:\n• Neat diagram showing embryonal axis, two cotyledons, epicotyl, plumule (shoot tip), hypocotyl, radicle (root tip), and root cap. [2.5 Marks]\n(b) Dicot vs Monocot Embryo Differences [2.5 Marks]:\n• Cotyledons: Dicot has two cotyledons; monocot has only one single shield-shaped cotyledon called scutellum. [1 Mark]\n• Protective sheaths: Monocot possesses coleoptile (sheath protecting plumule) and coleorhiza (undifferentiated sheath protecting radicle and root cap); absent in dicot embryos. [1 Mark]\n• Position: Scutellum is lateral in monocot; cotyledons are symmetrical and flanking the embryonal axis in dicots. [0.5 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the morphological adaptations of flowers pollinated by: (i) Insects (entomophily), (ii) Wind (anemophily), (iii) Water\n(hydrophily).\n(b) What are floral rewards? Give two examples of rewards offered to animal pollinators. [5 Marks]",
        "answer": "Pollination adaptations and floral rewards.",
        "explanation": "Pollination adaptations and floral rewards.\n\nMarking Scheme:\n(a) Adaptations [3 Marks]:\n• Entomophily: Flowers are large, brightly colored, fragrant, rich in nectar; pollen grains and stigma are sticky (pollenkitt). [1 Mark]\n• Anemophily: Flowers small, non-showy, devoid of scent and nectar; pollen light and non-sticky; long exerted stamens; large feathery stigma. [1 Mark]\n• Hydrophily: Pollen grains are long, ribbon-like, light, without exine or covered by mucilaginous coating to prevent wetting. [1 Mark]\n(b) Floral Rewards [2 Marks]:\n• Meaning: Incentives provided by flowers to sustain visits by animal pollinators. [0.5 Mark]\n• Examples: (1) Nectar and edible pollen grains as food. [0.75 Mark]\n(2) Providing safe sites for laying eggs (oviposition), e.g., Amorphophallus (6 feet tall flower) and the symbiotic relationship between Yucca plant and Pronuba moth. [0.75 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A flower breeder wants to cross two varieties of pea plants to obtain high-yielding disease-resistant progeny. Describe the step- by-step artificial hybridisation technique she should employ, explaining the rationale of each step. [5 Marks]",
        "answer": "Artificial hybridisation: Emasculation, Bagging, Dusting, and Re-bagging.",
        "explanation": "Artificial hybridisation: Emasculation, Bagging, Dusting, and Re-bagging.\n\nMarking Scheme:\n1. Selection of Parents: Identify female and male parent plants with desirable agronomic traits. [0.5 Mark]\n2. Emasculation: If female parent bears bisexual flowers, removal of anthers from the flower bud before anther dehiscence using a pair of forceps. Rationale: Prevents contamination of stigma with self-pollen. (Not required if female parent is unisexual). [1.5 Marks]\n3. Bagging: The emasculated flower is immediately covered with a bag of suitable size (usually made of butter paper). Rationale: Prevents contamination of stigma with unwanted foreign pollen. [1 Mark]\n4. Pollination (Dusting): When stigma attains receptivity, mature pollen grains collected from anthers of chosen male parent are dusted onto the receptive stigma. [1 Mark]\n5. Re-bagging & Tagging: The flower is re-bagged till fruit develops, and labeled with date of emasculation and pollination for tracking. [1 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the structure of a typical anatropous ovule with the help of a neat labelled diagram.\n(b) What happens to the following parts of the ovule after fertilisation: (i) Ovary wall, (ii) Outer and inner integuments, (iii) Micropyle, (iv) Zygote? [5 Marks]",
        "answer": "Structure of anatropous ovule and post-fertilisation transformations.",
        "explanation": "Structure of anatropous ovule and post-fertilisation transformations.\n\nMarking Scheme:\n(a) Anatropous Ovule Structure & Diagram [3 Marks]:\n• Inverted ovule where body is curved 180° so micropyle lies close to funicle. Parts: Funicle (stalk), Hilum (attachment scar), Integuments (outer and inner protective coats), Micropyle (pore for pollen tube entry), Chalaza (basal tissue opposite micropyle), Nucellus (nutritive parenchymatous mass), and Embryo sac. [Diagram 1.5 Marks, Description 1.5 Marks]\n(b) Post-fertilisation Changes [2 Marks, 0.5 Mark each]:\n• (i) Ovary wall -> Pericarp (fruit wall).\n• (ii) Integuments -> Seed coats (outer testa and inner tegmen).\n• (iii) Micropyle -> Remains as a small pore in seed coat to facilitate oxygen and water entry during germination.\n• (iv) Zygote -> Develops into the embryo."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the development of an angiosperm embryo from a diploid zygote up to the heart-shaped stage.\n(b) Why does a zygote undergo a period of dormancy before dividing in seeds? [5 Marks]",
        "answer": "Embryogenesis and zygotic dormancy.",
        "explanation": "Embryogenesis and zygotic dormancy.\n\nMarking Scheme:\n(a) Embryogenesis [3.5 Marks]:\n• The zygote divides transversely into an upper apical cell (embryonal cell) and a lower basal cell (suspensor cell). [0.5 Mark]\n• The basal cell divides repeatedly to form a 6 to 10-celled filament called suspensor; the uppermost cell swells to form haustorium, and lowermost cell is hypophysis. Suspensor pushes embryo into endosperm. [1 Mark]\n• The apical cell divides by two vertical divisions and one transverse division to form an 8-celled octant, then a globular embryo stage. [1 Mark]\n• Continued mitotic growth and development of cotyledonary primordia transform the globular embryo into a heart- shaped embryo, followed by the torpedo and mature stages. [1 Mark]\n(b) Zygotic Dormancy [1.5 Marks]:\n• The zygote rests until sufficient endosperm is formed. This is an evolutionary adaptation ensuring that food supplies are guaranteed for the developing embryo before energy-intensive cell division begins. [1.5 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Seed dormancy and dehydration are crucial for the preservation of agricultural grains. Without these properties, seeds would germinate on the mother plant itself under moist conditions or decay, making seasonal agriculture and grain storage impossible.'\n(a) What physiological changes occur during seed dehydration and maturation?\n(b) Distinguish between dormancy and viability of seeds.\n(c) Name two seeds that hold records for extreme seed viability periods. [5 Marks]",
        "answer": "Seed maturation, dormancy vs viability, extreme viability examples.",
        "explanation": "Seed maturation, dormancy vs viability, extreme viability examples.\n\nMarking Scheme:\n(a) Seed Dehydration Changes [1.5 Marks]:\n• Water content reduces to 10–15% moisture by mass. Metabolic activities of the embryo slow down drastically; integuments harden into tough seed coats (testa and tegmen); embryo enters an inactive state called dormancy. [1.5 Marks]\n(b) Dormancy vs Viability [1.5 Marks]:\n• Dormancy: A state of suspended growth and low metabolic activity where viable seeds fail to germinate even when external conditions (moisture, temperature) are favorable. [0.75 Mark]\n• Viability: The duration of time for which a seed retains the biological ability to germinate upon provision of favorable conditions. [0.75 Mark]\n(c) Extreme Viability Records [2 Marks]:\n• Lupinus arcticus (Lupine) excavated from Arctic Tundra: Germinated after an estimated 10,000 years of dormancy. [1 Mark]\n• Phoenix dactylifera (Date palm) excavated from King Herod's palace near Dead Sea: Viable after 2,000 years. [1 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A farmer observed that in a field of hybrid maize, saving the harvested seeds and sowing them next season resulted in severe loss of uniform yield, height, and pest resistance.\n(a) Explain the biological reason for this phenomenon.\n(b) How can apomixis resolve this dilemma for farmers?\n(c) Mention two mechanisms through which apomictic seeds are formed naturally in angiosperms. [5 Marks]",
        "answer": "Hybrid segregation, apomixis application, and mechanisms.",
        "explanation": "Hybrid segregation, apomixis application, and mechanisms.\n\nMarking Scheme:\n(a) Reason for hybrid breakdown [1.5 Marks]:\n• Hybrid crops are heterozygous for desirable traits. When allowed to reproduce sexually, segregation and independent assortment of alleles occur in the F2 generation according to Mendel's laws. This leads to phenotypic variation, loss of hybrid vigor (heterosis), and decreased yields. [1.5 Marks]\n(b) Role of Apomixis [1.5 Marks]:\n• Apomixis produces seeds without fertilization or meiosis (clonal seed reproduction). Therefore, all progeny maintain the exact genetic constitution of the parent hybrid; no segregation occurs, allowing farmers to reuse seeds season after season without buying expensive new hybrid seeds. [1.5 Marks]\n(c) Mechanisms of Apomixis [2 Marks, 1 Mark each]:\n• Diplospory / Apospory: A diploid egg cell is formed without reduction division (meiosis) and develops directly into an embryo without fertilization. [1 Mark]\n• Adventive polyembryony: Diploid somatic nucellar or integumentary cells surrounding the embryo sac divide, invade the embryo sac, and develop into mature embryos (e.g., Citrus, Mango). [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "unit_num": 6,
      "title": "Human Reproduction",
      "unit_title": "Reproduction",
      "weightage_unit": "16 Marks (Unit VI)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The scrotum helps in maintaining the low temperature of the testes necessary for spermatogenesis. How much lower is the scrotal temperature compared to normal internal body temperature?",
        "options": [
          "(a) 1 - 1.5°C",
          "(b) 2 - 2.5°C",
          "(c) 4 - 5°C",
          "(d) 0.5°C"
        ],
        "answer": "(b) 2 - 2.5°C",
        "explanation": "The testes are situated outside the abdominal cavity within a pouch called scrotum. The scrotum helps in maintaining the low temperature of the testes (2–2.5°C lower than normal internal body temperature) necessary for spermatogenesis."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Leydig cells (interstitial cells) located in the interstitial spaces between seminiferous tubules synthesise and secrete:",
        "options": [
          "(a) Estrogens",
          "(b) Androgens (Testosterone)",
          "(c) Progesterone",
          "(d) Oxytocin"
        ],
        "answer": "(b) Androgens (Testosterone)",
        "explanation": "Leydig cells or interstitial cells lie in the interstitial spaces outside the seminiferous tubules. They synthesise and secrete testicular hormones called androgens (primarily testosterone), which maintain male secondary sexual characteristics and spermatogenesis."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Sertoli cells (sustentacular cells) present in the seminiferous tubules perform the vital function of:",
        "options": [
          "(a) Secreting luteinizing hormone (LH)",
          "(b) Providing nutrition to the developing germ cells and secreting inhibin and ABP",
          "(c) Undergoing meiotic divisions to produce mature sperms",
          "(d) Synthesising human chorionic gonadotropin"
        ],
        "answer": "(b) Providing nutrition to the developing germ cells and secreting inhibin and ABP",
        "explanation": "Sertoli cells line the inside of the seminiferous tubules alongside male germ cells. They act as nurse cells, providing nutrition to developing spermatocytes and spermatids, and secrete Androgen Binding Protein (ABP) and inhibin (which regulates FSH)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The correct sequence of transport of sperms through the male reproductive duct system is:",
        "options": [
          "(a) Seminiferous tubules -> Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens -> Ejaculatory duct -> Urethra",
          "(b) Seminiferous tubules -> Vasa efferentia -> Rete testis -> Vas deferens -> Epididymis -> Urethra",
          "(c) Rete testis -> Seminiferous tubules -> Epididymis -> Vas deferens -> Urethra",
          "(d) Epididymis -> Vasa efferentia -> Rete testis -> Vas deferens -> Ejaculatory duct"
        ],
        "answer": "(a) Seminiferous tubules -> Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens -> Ejaculatory duct -> Urethra",
        "explanation": "Sperms produced in the seminiferous tubules open into rete testis, which lead into vasa efferentia. Vasa efferentia leave the testis and open into epididymis located along the posterior surface. Epididymis leads to vas deferens, joining seminal vesicle duct to form ejaculatory duct, opening into urethra."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Seminal plasma, the fluid component of semen, is rich in which of the following substances?",
        "options": [
          "(a) Glucose, sodium, and salivary amylase",
          "(b) Fructose, calcium, and certain enzymes",
          "(c) Glycogen, potassium, and pepsin",
          "(d) Cholesterol, iron, and bile salts"
        ],
        "answer": "(b) Fructose, calcium, and certain enzymes",
        "explanation": "Secretions of male accessory glands (paired seminal vesicles, a prostate gland, and paired bulbourethral glands) constitute the seminal plasma, which is rich in fructose (energy source for sperm motility), calcium, and specific coagulation/proteolytic enzymes."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The secretions of which male accessory gland help in the lubrication of the penis during coitus?",
        "options": [
          "(a) Prostate gland",
          "(b) Seminal vesicles",
          "(c) Bulbourethral (Cowper's) glands",
          "(d) Bartholin's glands"
        ],
        "answer": "(c) Bulbourethral (Cowper's) glands",
        "explanation": "Secretions of paired bulbourethral glands (also known as Cowper's glands) help in the lubrication of the penis and neutralize traces of acidic urine in the urethra prior to ejaculation."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The funnel-shaped part of the Fallopian tube (oviduct) closest to the ovary with finger-like projections called fimbriae is the:",
        "options": [
          "(a) Ampulla",
          "(b) Isthmus",
          "(c) Infundibulum",
          "(d) Uterine fundus"
        ],
        "answer": "(c) Infundibulum",
        "explanation": "The part of the fallopian tube closer to the ovary is the funnel-shaped infundibulum. The edges of the infundibulum possess finger-like projections called fimbriae, which help in collection of the ovum after ovulation."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Fertilisation in human females typically takes place at which specific anatomical site in the reproductive tract?",
        "options": [
          "(a) Uterine cavity",
          "(b) Ampullary-isthmic junction of fallopian tube (Ampulla)",
          "(c) Cervix",
          "(d) Infundibulum"
        ],
        "answer": "(b) Ampullary-isthmic junction of fallopian tube (Ampulla)",
        "explanation": "Fertilisation occurs only if the released ovum and sperms are transported simultaneously to the ampullary- isthmic junction (ampulla) of the fallopian tube."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The middle thick muscular layer of the uterine wall composed of smooth muscles that exhibits strong contractions during parturition is the:",
        "options": [
          "(a) Perimetrium",
          "(b) Endometrium",
          "(c) Myometrium",
          "(d) Epimetrium"
        ],
        "answer": "(c) Myometrium",
        "explanation": "The wall of the uterus has three layers: perimetrium (outer thin membrane), myometrium (middle thick layer of smooth muscle), and endometrium (inner glandular layer). The myometrium exhibits strong rhythmic contractions under the influence of oxytocin during delivery (parturition)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which layer of the uterus undergoes cyclical cyclic changes during the menstrual cycle and is sloughed off during menstruation?",
        "options": [
          "(a) Perimetrium",
          "(b) Endometrium",
          "(c) Myometrium",
          "(d) Mesovarium"
        ],
        "answer": "(b) Endometrium",
        "explanation": "The endometrium is the inner glandular, highly vascularized mucosal lining of the uterus that undergoes cyclical destruction and regeneration during the menstrual cycle. It sloughs off when progesterone levels drop at the end of the luteal phase."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Spermiogenesis is the biological process of transformation of:",
        "options": [
          "(a) Spermatogonia into primary spermatocytes",
          "(b) Primary spermatocytes into secondary spermatocytes",
          "(c) Spermatids into spermatozoa (flagellated sperms)",
          "(d) Spermatozoa into functional semen"
        ],
        "answer": "(c) Spermatids into spermatozoa (flagellated sperms)",
        "explanation": "The conversion of non-motile, circular, haploid spermatids into motile, mature, flagellated spermatozoa is called spermiogenesis. After spermiogenesis, sperm heads become embedded in the Sertoli cells and are released from the seminiferous tubules by the process called spermiation."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "How many functional spermatozoa and secondary oocytes are produced from 100 primary spermatocytes and 100 primary oocytes respectively?",
        "options": [
          "(a) 100 and 100",
          "(b) 400 and 100",
          "(c) 200 and 100",
          "(d) 400 and 400"
        ],
        "answer": "(b) 400 and 100",
        "explanation": "Each diploid primary spermatocyte (2n) undergoes meiosis I and II to form 4 functional haploid spermatozoa (100 * 4 = 400 sperms). In contrast, each primary oocyte (2n) undergoes unequal meiosis I yielding only 1 functional secondary oocyte (and 1 tiny first polar body), so 100 primary oocytes yield 100 secondary oocytes."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The cap-like structure filled with proteolytic enzymes covering the anterior portion of the sperm head is derived from:",
        "options": [
          "(a) Mitochondria",
          "(b) Golgi apparatus",
          "(c) Centriole",
          "(d) Lysosome"
        ],
        "answer": "(b) Golgi apparatus",
        "explanation": "The acrosome is a cap-like organelle covering the anterior two-thirds of the sperm head, derived embryologically from the Golgi apparatus. It contains hydrolytic enzymes (hyaluronidase, corona penetrating enzyme, and acrosin/zona lysin) essential for penetrating the ovum coatings."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "At which phase of cell division is the primary oocyte arrested from foetal embryonic life until puberty?",
        "options": [
          "(a) Metaphase II of Meiosis II",
          "(b) Prophase I (Diplotene stage) of Meiosis I",
          "(c) Anaphase I of Meiosis I",
          "(d) Telophase II of Meiosis II"
        ],
        "answer": "(b) Prophase I (Diplotene stage) of Meiosis I",
        "explanation": "Oogenesis is initiated during the embryonic development stage when a couple of million gamete mother cells (oogonia) are formed within each foetal ovary. These cells start division and enter into prophase-I of meiosis, remaining arrested at this stage (specifically diplotene) as primary oocytes until puberty."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The tertiary follicle is characterized by a fluid-filled cavity known as:",
        "options": [
          "(a) Blastocoel",
          "(b) Antrum",
          "(c) Archenteron",
          "(d) Amniotic sac"
        ],
        "answer": "(b) Antrum",
        "explanation": "The secondary follicle soon transforms into a tertiary follicle which is characterized by a fluid-filled cavity called antrum. The theca layer is organized into an inner theca interna (vascular and steroidogenic) and an outer theca externa."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The rupture of the mature Graafian follicle and release of the secondary oocyte (ovulation) is triggered by:",
        "options": [
          "(a) Rapid fall in progesterone level",
          "(b) High peak level of Luteinizing Hormone (LH surge)",
          "(c) High level of human Placental Lactogen (hPL)",
          "(d) Release of prolactin from mammary glands"
        ],
        "answer": "(b) High peak level of Luteinizing Hormone (LH surge)",
        "explanation": "Both LH and FSH attain a peak level in the middle of menstrual cycle (about 14th day). Rapid secretion of LH leading to its maximum level during the mid-cycle called LH surge induces rupture of Graafian follicle and thereby the release of ovum (secondary oocyte), termed ovulation."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "After ovulation, the ruptured Graafian follicle transforms into a temporary endocrine structure called corpus luteum, which secretes large amounts of:",
        "options": [
          "(a) Estrogen",
          "(b) Progesterone",
          "(c) Luteinizing hormone",
          "(d) Human chorionic gonadotropin"
        ],
        "answer": "(b) Progesterone",
        "explanation": "The corpus luteum secretes large amounts of progesterone which is essential for the maintenance of the endometrium. Such an endometrium is necessary for implantation of the fertilised ovum and other events of pregnancy."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During fertilisation, which membrane of the ovum is directly modified by the sperm head contact to induce a block against polyspermy?",
        "options": [
          "(a) Corona radiata",
          "(b) Zona pellucida",
          "(c) Plasma membrane (oolemma)",
          "(d) Perivitelline space"
        ],
        "answer": "(b) Zona pellucida",
        "explanation": "During fertilisation, a sperm comes in contact with the zona pellucida layer of the ovum and induces changes in the membrane that block the entry of additional sperms. Thus, it ensures that only one sperm can fertilise an ovum (preventing polyspermy)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Completion of meiotic division (Meiosis II) of the secondary oocyte is triggered by:",
        "options": [
          "(a) LH surge during ovulation",
          "(b) Entry of sperm into the cytoplasm of the ovum",
          "(c) Implantation of blastocyst into endometrium",
          "(d) Secretion of progesterone by corpus luteum"
        ],
        "answer": "(b) Entry of sperm into the cytoplasm of the ovum",
        "explanation": "The entry of sperm into the cytoplasm of the secondary oocyte induces the completion of the meiotic division of the secondary oocyte (which was arrested in metaphase II). This second meiotic division is unequal and results in the formation of a second polar body and a haploid ovum (ootid)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The blastomeres in the blastocyst are arranged into an outer layer called ______ and an inner group of cells attached to it called the ______:",
        "options": [
          "(a) Ectoderm, Endoderm",
          "(b) Trophoblast, Inner cell mass",
          "(c) Epiblast, Hypoblast",
          "(d) Mesoderm, Chorioallantoic membrane"
        ],
        "answer": "(b) Trophoblast, Inner cell mass",
        "explanation": "The blastocyst consists of an outer layer of cells called the trophoblast and an inner cell mass attached to one pole of the trophoblast. The trophoblast layer gets attached to the endometrium, while inner cell mass differentiates into the embryo."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following hormones are produced in women ONLY during pregnancy?",
        "options": [
          "(a) Estrogen, progesterone, cortisol",
          "(b) hCG, hPL, and relaxin",
          "(c) LH, FSH, and prolactin",
          "(d) Oxytocin, vasopressin, and insulin"
        ],
        "answer": "(b) hCG, hPL, and relaxin",
        "explanation": "Human chorionic gonadotropin (hCG), human placental lactogen (hPL), and relaxin (secreted by the ovary in later stages of pregnancy) are produced in women only during pregnancy. Placenta also secretes estrogens and progestogens."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The inner cell mass of the blastocyst contains certain unspecialized cells which have the potency to give rise to all tissues and organs of the body. These cells are called:",
        "options": [
          "(a) Trophoblast cells",
          "(b) Stem cells",
          "(c) Germ cells",
          "(d) Decidual cells"
        ],
        "answer": "(b) Stem cells",
        "explanation": "The inner cell mass contains certain cells called stem cells which have the potency (pluripotency) to give rise to all the tissues and organs of the adult organism."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The signals for parturition originate from:",
        "options": [
          "(a) Fully developed foetus and placenta",
          "(b) Maternal pituitary gland only",
          "(c) Placenta only",
          "(d) Corpus luteum and cervical stretch receptors"
        ],
        "answer": "(a) Fully developed foetus and placenta",
        "explanation": "The signals for parturition originate from the fully developed foetus and the placenta which induce mild uterine contractions called foetal ejection reflex. This triggers the release of oxytocin from the maternal posterior pituitary."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which hormone acts directly on uterine smooth muscles to cause increasingly stronger contractions during labour?",
        "options": [
          "(a) Progesterone",
          "(b) Oxytocin",
          "(c) Prolactin",
          "(d) Relaxin"
        ],
        "answer": "(b) Oxytocin",
        "explanation": "Oxytocin released from maternal pituitary acts on the uterine myometrium causing stronger contractions. This in turn stimulates further secretion of oxytocin, establishing a positive feedback reflex that expels the baby through the birth canal."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Colostrum, the yellowish fluid secreted by mammary glands during the initial days of lactation, is critically important for newborns because it is abundant in:",
        "options": [
          "(a) Immunoglobulin A (IgA) antibodies",
          "(b) Immunoglobulin E (IgE) and histamines",
          "(c) High fat and glucose content",
          "(d) Iron and Vitamin C"
        ],
        "answer": "(a) Immunoglobulin A (IgA) antibodies",
        "explanation": "Colostrum contains abundant antibodies (IgA) to protect the newborn infant against bacterial and viral gastrointestinal and respiratory infections, conferring natural passive immunity. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): All copulations do not lead to fertilisation and pregnancy in human beings.\nReason (R): Fertilisation can only occur if the ovum and sperms are transported simultaneously to the ampullary region of the fallopian tube.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) explains (A). Human ova are viable for approximately 24 hours after ovulation, and sperm viability in the female tract is 48–72 hours. Unless coitus occurs during the fertile window (days 10–17 of the menstrual cycle) such that both gametes arrive simultaneously at the ampullary-isthmic junction, fertilisation fails."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): In human females, no more oogonia are formed or added after birth.\nReason (R): A couple of million gamete mother cells are formed within each foetal ovary during embryonic development.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) correctly explains (A). Unlike males where spermatogonial stem cells continuously divide throughout life, female oogenesis initiates in the embryo where roughly 2 million oogonia are formed per ovary, and zero oogonia are added after birth."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Corpus luteum degenerates in the absence of fertilisation.\nReason (R): Degeneration of corpus luteum causes a sharp drop in progesterone, precipitating menstruation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true statements. In the absence of fertilisation, LH levels decline and corpus luteum degenerates into corpus albicans. This causes a steep drop in progesterone and estrogen, leading to breakdown of the endometrium and onset of menstrual bleeding. However, (R) is the consequence of degeneration, not the biological cause of why it degenerates (which is lack of hCG/LH support)."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The middle piece of the human sperm is called the powerhouse of the sperm.\nReason (R): The middle piece possesses numerous mitochondria spiraled around the axial filament that produce ATP for flagellar motility.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) accurately explains (A). The middle piece contains mitochondrial spiral\n(nebenkern) that generates ATP required for vigorous swimming of the sperm through the female reproductive tract."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Testes in human males descend into the scrotum through the inguinal canal prior to birth.\nReason (R): Failure of testes to descend into the scrotum causes cryptorchidism and results in sterility.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are correct. Scrotum maintains a temperature 2–2.5°C below core body temperature. If testes fail to descend (cryptorchidism), spermatogenesis cannot occur due to higher internal abdominal temperature, leading to male sterility. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of pituitary gonadotropins (LH and FSH) and sex hormones in the regulation of spermatogenesis in human males. [3 Marks]",
        "answer": "Hormonal axis: GnRH -> LH & FSH -> Leydig & Sertoli cells.",
        "explanation": "Hormonal axis: GnRH -> LH & FSH -> Leydig & Sertoli cells.\n\nMarking Scheme:\n• Hypothalamic GnRH: Increases significantly at puberty, stimulating the anterior pituitary to secrete LH and FSH. [1 Mark]\n• Luteinizing Hormone (LH): Acts on Leydig cells and stimulates synthesis and secretion of androgens (testosterone). Androgens stimulate the process of spermatogenesis. [1 Mark]\n• Follicle Stimulating Hormone (FSH): Acts on Sertoli cells and stimulates the secretion of some factors (like ABP and inhibin) which help in spermiogenesis. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between spermatogenesis and oogenesis on the basis of: (i) Site of initiation, (ii) Number of functional gametes produced per primary gametocyte, (iii) Continuity of meiosis. [3 Marks]",
        "answer": "Comparison between spermatogenesis and oogenesis.",
        "explanation": "Comparison between spermatogenesis and oogenesis.\n\nMarking Scheme (1 Mark each):\n1. Initiation: Spermatogenesis begins at puberty; Oogenesis is initiated during foetal embryonic development. [1 Mark]\n2. Number of functional gametes: Spermatogenesis produces 4 functional spermatozoa from each primary spermatocyte; Oogenesis yields only 1 functional ovum (and 2-3 polar bodies) from each primary oocyte. [1 Mark]\n3. Continuity: Spermatogenesis is continuous throughout adult life without arrest; Oogenesis undergoes two developmental arrests (Prophase-I until puberty, and Metaphase-II until sperm entry). [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the structure of a mature human Graafian follicle. Name the fluid-filled cavity and the layer surrounding the ovum. [3 Marks]",
        "answer": "Structure of Graafian follicle, antrum, corona radiata, zona pellucida.",
        "explanation": "Structure of Graafian follicle, antrum, corona radiata, zona pellucida.\n\nMarking Scheme:\n• Antrum & Theca: Has a large eccentric fluid-filled antrum filled with liquor folliculi; bounded by theca interna (vascular, endocrine) and theca externa (fibrous capsule). [1 Mark]\n• Membrana Granulosa: Multiple stratified layers of granulosa cells lining the follicular wall. [1 Mark]\n• Secondary Oocyte & Enclosing coats: Oocyte is surrounded by a non-cellular glycoprotein layer called zona pellucida and radially arranged granulosa cells called corona radiata, anchored by cumulus oophorus. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the major events of the follicular (proliferative) phase and ovulatory phase of the human menstrual cycle. [3 Marks]",
        "answer": "Follicular growth, estrogen surge, LH surge, ovulation.",
        "explanation": "Follicular growth, estrogen surge, LH surge, ovulation.\n\nMarking Scheme:\n• Follicular (Proliferative) Phase: Primary follicles grow to become mature Graafian follicles under the influence of FSH; endometrium regenerates through proliferation under estrogens secreted by growing follicles. [1.5 Marks]\n• Ovulatory Phase: Mid-cycle (day 14), LH and FSH reach peak levels; LH surge causes rupture of the Graafian follicle and release of the secondary oocyte into the pelvic cavity (ovulation). [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is meant by the cortical reaction and how does it prevent polyspermy during human fertilisation? [3 Marks]",
        "answer": "Cortical granule exocytosis and hardening of zona pellucida.",
        "explanation": "Cortical granule exocytosis and hardening of zona pellucida.\n\nMarking Scheme:\n• Trigger: When the sperm head contacts and fuses with the oolemma (egg plasma membrane), a wave of calcium ions is released inside the egg cytoplasm. [1 Mark]\n• Cortical Granule Exocytosis: Cortical granules beneath the oolemma fuse with the plasma membrane and release cortical enzymes into the perivitelline space. [1 Mark]\n• Zona Hardening: These enzymes alter the structure of zona pellucida (destroying sperm receptors ZP3 and ZP2), creating a permanent physical and chemical barrier preventing entry of additional sperms (blocks polyspermy). [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Name the four embryonic membranes formed during pregnancy. Mention two vital endocrine functions of the placenta. [3 Marks]",
        "answer": "Amnion, Chorion, Allantois, Yolk sac; endocrine role of placenta.",
        "explanation": "Amnion, Chorion, Allantois, Yolk sac; endocrine role of placenta.\n\nMarking Scheme:\n• Extraembryonic membranes: Amnion, Chorion, Allantois, and Yolk sac. [1 Mark]\n• Endocrine functions of placenta (1 Mark each for any two hormones):\n1. Secretes human Chorionic Gonadotropin (hCG) to sustain corpus luteum and progesterone production. [1 Mark]\n2. Secretes human Placental Lactogen (hPL) to stimulate mammary gland development and fetal metabolic regulation. [1 Mark]\n3. Secretes Estrogens and Progesterone to maintain pregnancy and prevent uterine contractions. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is implantation? When and at what developmental stage does it occur in human females? [3 Marks]",
        "answer": "Attachment of blastocyst to uterine endometrium.",
        "explanation": "Attachment of blastocyst to uterine endometrium.\n\nMarking Scheme:\n• Definition: Implantation is the process by which the blastocyst attaches to and embeds within the vascular endometrium of the uterus. [1 Mark]\n• Timing: Occurs approximately 6 to 8 days following fertilisation. [1 Mark]\n• Developmental Stage: It occurs at the blastocyst stage (which consists of outer trophoblast and inner cell mass). The trophoblast secretes proteolytic enzymes that erode uterine mucosa, facilitating embedding. [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the neuroendocrine reflex that induces parturition in humans. Name the hormone released and its source. [3 Marks]",
        "answer": "Foetal ejection reflex and oxytocin release from posterior pituitary.",
        "explanation": "Foetal ejection reflex and oxytocin release from posterior pituitary.\n\nMarking Scheme:\n• Origin: The signals for parturition originate from the fully developed fetus and the placenta. [1 Mark]\n• Reflex Mechanism: These signals induce mild contractions of the uterus called the 'foetal ejection reflex'. [1 Mark]\n• Hormonal Action: This reflex stimulates the maternal posterior pituitary gland to release Oxytocin. Oxytocin acts on the myometrium, causing increasingly stronger contractions in a positive feedback loop until the fetus is delivered. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is colostrum? Why is breast-feeding strongly recommended by paediatricians during the initial period of infant growth? [3 Marks]",
        "answer": "Colostrum composition, IgA, passive immunity.",
        "explanation": "Colostrum composition, IgA, passive immunity.\n\nMarking Scheme:\n• Definition: The yellowish milk produced during the initial 2 to 3 days of lactation following parturition is called colostrum. [1 Mark]\n• Composition & Antibodies: Colostrum is rich in proteins, vitamins, and especially abundant in Immunoglobulin A (IgA) antibodies. [1 Mark]\n• Health significance: It confers natural passive immunity to the infant, protecting the sterile gut and respiratory mucosa from pathogens, while promoting beneficial gut microflora. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat labelled diagram of a human sperm and write the functions of: (i) Acrosome, (ii) Middle piece. [3 Marks]",
        "answer": "Labeled diagram of sperm; functions of acrosome and middle piece.",
        "explanation": "Labeled diagram of sperm; functions of acrosome and middle piece.\n\nMarking Scheme:\n• Neat diagram showing Head (with nucleus & acrosome), Neck, Middle piece (with mitochondria), and Tail. [1.5 Marks]\n• Acrosome function: Cap filled with hydrolytic enzymes (hyaluronidase, acrosin) that dissolve ovum layers during fertilisation. [0.75 Mark]\n• Middle piece function: Contains spiraled mitochondria that generate ATP for tail movement, facilitating sperm motility. [0.75 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the step-by-step process of spermatogenesis in human males with the help of a flow chart showing ploidy at each stage.\n(b) Distinguish between spermiogenesis and spermiation. [5 Marks]",
        "answer": "Spermatogenesis flowchart, ploidy levels, spermiogenesis vs spermiation.",
        "explanation": "Spermatogenesis flowchart, ploidy levels, spermiogenesis vs spermiation.\n\nMarking Scheme:\n(a) Spermatogenesis Steps & Flowchart [3.5 Marks]:\n• Spermatogonia (2n) multiply by mitosis on the basement membrane of seminiferous tubules. [0.5 Mark]\n• Some spermatogonia grow into Primary spermatocytes (2n). [0.5 Mark]\n• Primary spermatocyte undergoes Meiosis I (reduction division) forming two equal haploid Secondary spermatocytes (n). [1 Mark]\n• Secondary spermatocytes undergo Meiosis II (equational division) to form four haploid Spermatids (n). [1 Mark]\n• Flow chart representation showing chromosome numbers (46 -> 46 -> 23 -> 23). [0.5 Mark]\n(b) Spermiogenesis vs Spermiation [1.5 Marks]:\n• Spermiogenesis: The morphological transformation of non-motile spermatids into flagellated motile spermatozoa. [0.75 Mark]\n• Spermiation: The process of release of mature spermatozoa from Sertoli cells into the lumen of seminiferous tubules. [0.75 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the major phases of the menstrual cycle in human females. Correlate the uterine changes with the fluctuations in ovarian and pituitary hormones throughout the cycle. [5 Marks]",
        "answer": "Menstrual cycle phases, endometrial histology, and hormone graphs.",
        "explanation": "Menstrual cycle phases, endometrial histology, and hormone graphs.\n\nMarking Scheme:\n1. Menstrual Phase (Days 1–5): Low progesterone and estrogen cause breakdown of the endometrial lining, resulting in menstrual flow (blood and unfertilized ovum). [1 Mark]\n2. Follicular / Proliferative Phase (Days 6–13): Pituitary FSH stimulates growth of ovarian follicles. Growing follicles secrete Estrogen. Rising estrogen stimulates rapid mitotic proliferation and thickening of the uterine endometrium and cervical mucus thinning. [1.5 Marks]\n3. Ovulatory Phase (Day 14): LH and FSH reach peak levels (LH surge); triggers rupture of mature Graafian follicle and release of secondary oocyte (ovulation). [1 Mark]\n4. Luteal / Secretory Phase (Days 15–28): Ruptured follicle transforms into Corpus Luteum under LH; secretes copious amounts of Progesterone. Progesterone maintains and vascularizes the endometrium, making it glandular and receptive for blastocyst implantation. If pregnancy does not occur, corpus luteum degenerates, progesterone plunges, initiating a new cycle. [1.5 Marks]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the development of an unfertilised secondary oocyte from an oogonium in the human ovary.\n(b) Why is oogenesis considered an unequal division process? What is the fate of polar bodies? [5 Marks]",
        "answer": "Oogenesis pathway, unequal cytokinesis, and polar body fate.",
        "explanation": "Oogenesis pathway, unequal cytokinesis, and polar body fate.\n\nMarking Scheme:\n(a) Oogenesis Pathway [3.5 Marks]:\n• Embryonic Stage: Oogonia (2n) divide mitotically to produce millions of primary oocytes. Primary oocytes start Meiosis I but freeze at Prophase-I (diplotene). [1 Mark]\n• Puberty onwards: Each month, a primary oocyte completes Meiosis I just prior to ovulation, yielding a large haploid Secondary Oocyte (n) and a tiny First Polar Body (n). [1 Mark]\n• Arrest & Second Division: The secondary oocyte begins Meiosis II but arrests at Metaphase II. It is released at ovulation. Upon sperm entry, Meiosis II is completed, producing the mature Ovum (ootid, n) and a Second Polar Body (n). [1.5 Marks]\n(b) Unequal Division & Polar Bodies [1.5 Marks]:\n• Unequal Cytokinesis: Unequal division ensures that almost the entire cytoplasm, nutrient yolk, and cellular organelles are conserved in a single large functional gamete (the ovum) to sustain the early zygote before implantation. [1 Mark]\n• Fate: Polar bodies contain negligible cytoplasm and degenerate shortly after division. [0.5 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the events taking place from the time of sperm deposition into the female reproductive tract up to the implantation of the blastocyst in the uterus. [5 Marks]",
        "answer": "Insemination, capacitation, acrosome reaction, fertilization, cleavage, implantation.",
        "explanation": "Insemination, capacitation, acrosome reaction, fertilization, cleavage, implantation.\n\nMarking Scheme:\n• Insemination & Capacitation: Millions of sperms deposited in vagina swim through cervix and uterus; undergo capacitation (removal of cholesterol coat, hyperactivation). [1 Mark]\n• Acrosome Reaction & Fertilisation: At the ampullary-isthmic junction, sperm binds to ZP3 on zona pellucida, releases acrosin/hyaluronidase, penetrates to oolemma; activates cortical block to polyspermy; second meiotic division of oocyte finishes; male and female pronuclei fuse forming diploid zygote (2n). [1.5 Marks]\n• Cleavage Divisions: Zygote moves down the fallopian tube, undergoing rapid mitotic divisions: 2 -> 4 -> 8 -> 16 celled solid sphere called Morula. [1 Mark]\n• Blastocyst Formation: Morula hollows into a blastocyst with blastocoel, trophoblast layer, and inner cell mass. [0.75 Mark]\n• Implantation: By day 6–7, trophoblast cells secrete enzymes, penetrate endometrium; blastocyst is completely embedded in the uterine wall. [0.75 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Draw a labelled sectional view of the female reproductive system.\n(b) Write the functions of: (i) Ovary, (ii) Fallopian tube, (iii) Uterus, (iv) Fimbriae. [5 Marks]",
        "answer": "Diagram of female reproductive system and organ functions.",
        "explanation": "Diagram of female reproductive system and organ functions.\n\nMarking Scheme:\n(a) Diagram [2 Marks]: Correct drawing and neat labeling of Ovary, Fallopian tube (Infundibulum, Ampulla, Isthmus), Uterus (Fundus, Body, Cervix), Cervical canal, and Vagina. [2 Marks]\n(b) Functions [3 Marks, 0.75 Mark each]:\n• (i) Ovary: Primary female sex organ; produces female gametes (ova) and steroid sex hormones (estrogen, progesterone). [0.75 Mark]\n• (ii) Fallopian tube: Conveys released ovum from ovary to uterus; site of fertilisation at ampulla. [0.75 Mark]\n• (iii) Uterus: Site of blastocyst implantation, placental attachment, fetal nourishment, and embryonic gestation. [0.75 Mark]\n• (iv) Fimbriae: Finger-like projections at infundibulum margins that sweep over ovary surface to collect ovulated ovum. [0.75 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Draw a diagram of a cross-section of a seminiferous tubule of human testis and label any four parts.\n(b) Explain the function of: (i) Interstitial cells of Leydig, (ii) Sertoli cells. [5 Marks]",
        "answer": "Section of seminiferous tubule diagram and cellular functions.",
        "explanation": "Section of seminiferous tubule diagram and cellular functions.\n\nMarking Scheme:\n(a) Diagram & Labeling [2.5 Marks]: Section showing Spermatogonia, Primary spermatocytes, Spermatids, Spermatozoa, Sertoli cells, and Leydig cells in interstitial spaces. [Neat drawing 1.5M, 4 correct labels 1M]\n(b) Functions [2.5 Marks]:\n• (i) Leydig cells: Endocrine interstitial cells that produce androgens, predominantly testosterone, which promotes secondary sexual traits, stimulates spermatogenesis, and maintains libido. [1.25 Marks]\n• (ii) Sertoli cells: Somatic sustentacular nurse cells; provide nutritional and physical support to developing germ cells; form blood-testis barrier; secrete ABP (Androgen Binding Protein) and inhibin. [1.25 Marks]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Describe the hormonal control of the female reproductive system from puberty to menopause, specifically explaining the roles of GnRH, FSH, LH, Estrogen, and Progesterone. [5 Marks]",
        "answer": "Hypothalamic-pituitary-ovarian axis in human females.",
        "explanation": "Hypothalamic-pituitary-ovarian axis in human females.\n\nMarking Scheme (1 Mark for each hormone):\n1. GnRH (Gonadotropin-Releasing Hormone): Hypothalamic decapeptide released in pulsatile manner; stimulates anterior pituitary to secrete gonadotropins (FSH & LH). [1 Mark]\n2. FSH (Follicle Stimulating Hormone): Stimulates the recruitment, growth, and maturation of ovarian follicles and stimulates granulosa cells to convert androgens to estrogens. [1 Mark]\n3. LH (Luteinizing Hormone): Triggers the final maturation of Graafian follicle, induces LH surge causing ovulation; converts post-ovulatory follicle into corpus luteum. [1 Mark]\n4. Estrogen: Produced by developing follicles; stimulates endometrial proliferation, thin cervical mucus secretion, secondary sex characters; exerts positive/negative feedback on pituitary. [1 Mark]\n5. Progesterone: Secreted abundantly by corpus luteum; maintains secretory phase of endometrium, inhibits uterine contractions, prepares breasts for lactation. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the physiological mechanism of parturition and lactation in human females. Mention the hormones involved and their target organs. [5 Marks]",
        "answer": "Physiology of parturition (oxytocin) and lactation (prolactin, oxytocin).",
        "explanation": "Physiology of parturition (oxytocin) and lactation (prolactin, oxytocin).\n\nMarking Scheme:\n(a) Parturition [2.5 Marks]:\n• Initiated by signals from fully grown fetus and placenta (foetal ejection reflex). [0.5 Mark]\n• Triggers maternal posterior pituitary to secrete Oxytocin. [0.5 Mark]\n• Oxytocin acts on the myometrium of the uterus, stimulating forceful rhythmic muscular contractions. [0.75 Mark]\n• Each contraction sends positive feedback signaling more oxytocin release, dilating the cervix and pushing the baby through the birth canal, followed by delivery of placenta (afterbirth). [0.75 Mark]\n(b) Lactation [2.5 Marks]:\n• During pregnancy, high estrogen and progesterone stimulate development of glandular alveoli and ducts in mammary glands. [0.5 Mark]\n• After birth, sudden drop in placental hormones allows Prolactin from anterior pituitary to stimulate milk synthesis in alveolar epithelial cells. [1 Mark]\n• Sucking by infant sends sensory signals to hypothalamus, inducing posterior pituitary to release Oxytocin (milk letdown / ejection reflex) causing contraction of myoepithelial cells around alveoli. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Human development begins when a single sperm out of several hundreds of millions successfully fuses with the secondary oocyte. Within minutes, intricate biochemical shields are erected to prevent polyspermy, following which embryonic cleavage begins.'\n(a) What causes the block to polyspermy in the human ovum?\n(b) Why do secondary spermatocytes and spermatids have only 23 chromosomes, whereas primary spermatocytes have 46?\n(c) What happens if the corpus luteum is surgically removed in the 6th week of human pregnancy? [5 Marks]",
        "answer": "Polyspermy block, meiosis chromosome numbers, corpus luteum removal in early pregnancy.",
        "explanation": "Polyspermy block, meiosis chromosome numbers, corpus luteum removal in early pregnancy.\n\nMarking Scheme:\n(a) Block to Polyspermy [2 Marks]:\n• Fast electrical block (depolarization of oolemma) followed by slow mechanical/cortical block: Contact of sperm head triggers calcium release and exocytosis of cortical granules into perivitelline space, which enzymatically harden the zona pellucida and destroy sperm receptors (ZP3). [2 Marks]\n(b) Chromosome count explanation [1.5 Marks]:\n• Primary spermatocytes are diploid (46 chromosomes). They undergo Meiosis I (reduction division), where homologous chromosomes separate into daughter cells, reducing chromosome count by half to 23 (haploid) in secondary spermatocytes and their descendant spermatids. [1.5 Marks]\n(c) Removal of Corpus Luteum at 6 weeks [1.5 Marks]:\n• In the first trimester (up to weeks 10–12), pregnancy is maintained entirely by progesterone produced by the corpus luteum (sustained by hCG). If removed at 6 weeks before the placenta assumes steroidogenic production, progesterone levels will crash, leading to endometrial shedding and spontaneous abortion (miscarriage). [1.5 Marks]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A woman has a regular 28-day menstrual cycle.\n(a) On which day of the cycle is ovulation expected to occur? Explain the hormonal trigger.\n(b) What would happen to the cycle if fertilisation does not take place?\n(c) What would happen to the cycle if fertilisation takes place? Explain the role of hCG. [5 Marks]",
        "answer": "Day 14 ovulation, cycle outcome without fertilisation, outcome with fertilisation and role of hCG.",
        "explanation": "Day 14 ovulation, cycle outcome without fertilisation, outcome with fertilisation and role of hCG.\n\nMarking Scheme:\n(a) Ovulation day & hormonal trigger [1.5 Marks]:\n• Expected around Day 14 (mid-cycle). Triggered by the rapid surge of Luteinizing Hormone (LH surge) accompanied by FSH peak, inducing rupture of Graafian follicle. [1.5 Marks]\n(b) If fertilisation does not occur [1.5 Marks]:\n• The corpus luteum degenerates into corpus albicans within 10–12 days. Progesterone and estrogen levels drop sharply, causing uterine blood vessels to constrict and the endometrium to slough off, leading to menstruation (Day 1 of next cycle). [1.5 Marks]\n(c) If fertilisation occurs [2 Marks]:\n• The trophoblast of the implanting blastocyst secretes human Chorionic Gonadotropin (hCG). hCG mimics LH and prevents the regression of corpus luteum. Corpus luteum continues secreting progesterone, maintaining the endometrium; menstruation is arrested, confirming pregnancy. [2 Marks]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "unit_num": 6,
      "title": "Reproductive Health",
      "unit_title": "Reproduction",
      "weightage_unit": "16 Marks (Unit VI)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "India was amongst the first countries in the world to initiate action plans and programmes at a national level to attain total reproductive health. These family planning programmes were initiated in:",
        "options": [
          "(a) 1947",
          "(b) 1951",
          "(c) 1965",
          "(d) 1974"
        ],
        "answer": "(b) 1951",
        "explanation": "India was among the first countries in the world to initiate national family planning programmes in 1951. These programmes have been periodically evaluated and are currently operating under the broader banner of Reproductive and Child Health Care (RCH) programmes."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why is there a statutory ban imposed on amniocentesis for sex determination in India?",
        "options": [
          "(a) Because it harms the developing fetus physically",
          "(b) To prevent the rampant menace of female foeticide",
          "(c) Because it causes severe infection in mothers",
          "(d) Because it cannot detect chromosomal disorders"
        ],
        "answer": "(b) To prevent the rampant menace of female foeticide",
        "explanation": "Amniocentesis is a foetal sex and disorder determination test based on the chromosomal pattern in the amniotic fluid surrounding the developing embryo. A statutory ban on sex determination was enforced to legally check increasing female foeticides."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "'Saheli', a new oral contraceptive pill for females, was developed by scientists at which premier Indian research institute?",
        "options": [
          "(a) All India Institute of Medical Sciences (AIIMS), New Delhi",
          "(b) Central Drug Research Institute (CDRI), Lucknow",
          "(c) Indian Institute of Science (IISc), Bengaluru",
          "(d) National Institute of Virology (NIV), Pune"
        ],
        "answer": "(b) Central Drug Research Institute (CDRI), Lucknow",
        "explanation": "'Saheli' is an oral contraceptive developed by scientists at Central Drug Research Institute (CDRI) in Lucknow, India. It is a 'once-a-week' non-steroidal pill (centchroman) with very few side effects and very high contraceptive value."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Periodic abstinence is a natural contraceptive method where couples avoid coitus during which fertile period of the menstrual cycle?",
        "options": [
          "(a) Day 1 to 5",
          "(b) Day 10 to 17",
          "(c) Day 21 to 28",
          "(d) Day 1 to 8"
        ],
        "answer": "(b) Day 10 to 17",
        "explanation": "Periodic abstinence is one such method in which couples avoid or abstain from coitus from day 10 to 17 of the menstrual cycle when ovulation could be expected. As chances of fertilisation are very high during this period, it is called the fertile period."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Lactational amenorrhea serves as a natural contraceptive method based on the fact that ovulation does not occur during intense lactation. It is effective up to a maximum period of:",
        "options": [
          "(a) 2 months",
          "(b) 6 months",
          "(c) 1 year",
          "(d) 2 years"
        ],
        "answer": "(b) 6 months",
        "explanation": "Lactational amenorrhea (absence of menstruation) method is based on the fact that ovulation and therefore the cycle do not occur during the period of intense lactation following parturition. This method has been reported to be effective only up to a maximum period of six months following parturition."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following barrier contraceptives provides the dual benefit of preventing both unwanted pregnancies and Sexually Transmitted Infections (STIs) including HIV?",
        "options": [
          "(a) Diaphragms",
          "(b) Condoms",
          "(c) Cervical caps",
          "(d) Intrauterine devices (IUDs)"
        ],
        "answer": "(b) Condoms",
        "explanation": "Condoms (made of thin rubber/latex sheath) cover the penis in the male or vagina/cervix in the female, preventing ejaculated semen from entering the female tract. They provide the additional benefit of protecting the user from contracting STIs and AIDS."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is an example of a non-medicated Intrauterine Device (IUD)?",
        "options": [
          "(a) CuT",
          "(b) Lippes loop",
          "(c) LNG-20",
          "(d) Multiload 375"
        ],
        "answer": "(b) Lippes loop",
        "explanation": "IUDs are classified as: (1) Non-medicated IUDs: Lippes loop; (2) Copper-releasing IUDs: CuT, Cu7, Multiload 375; (3) Hormone-releasing IUDs: Progestasert, LNG-20."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the primary contraceptive mechanism of action of copper ions released by Copper-releasing IUDs (CuT, Cu7, Multiload 375)?",
        "options": [
          "(a) They inhibit ovulation and alter the quality of cervical mucus",
          "(b) They suppress sperm motility and the fertilising capacity of sperms",
          "(c) They induce permanent blocking of fallopian tubes",
          "(d) They prevent implantation by shedding the myometrium"
        ],
        "answer": "(b) They suppress sperm motility and the fertilising capacity of sperms",
        "explanation": "IUDs increase phagocytosis of sperms within the uterus. In addition, the Cu ions released suppress sperm motility and the fertilising capacity of sperms."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Hormone-releasing IUDs such as LNG-20 and Progestasert prevent conception by:",
        "options": [
          "(a) Producing toxic ions that kill developing embryos",
          "(b) Making the uterus unsuitable for implantation and the cervix hostile to sperms",
          "(c) Mechanically preventing semen deposition into the vagina",
          "(d) Causing surgical occlusions in the oviduct"
        ],
        "answer": "(b) Making the uterus unsuitable for implantation and the cervix hostile to sperms",
        "explanation": "The hormone-releasing IUDs (Progestasert, LNG-20), in addition to promoting phagocytosis, make the uterus unsuitable for implantation and the cervix hostile to the sperms by thickening cervical mucus."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Oral contraceptive pills composed of progestogens or progestogen-estrogen combinations prevent pregnancy primarily by:",
        "options": [
          "(a) Inducing permanent sterilisation in females",
          "(b) Inhibiting ovulation and implantation as well as altering cervical mucus quality to retard sperm entry",
          "(c) Physically blocking the entry of pollen or sperms into the uterus",
          "(d) Acting as spermicidal jellies on the vaginal wall"
        ],
        "answer": "(b) Inhibiting ovulation and implantation as well as altering cervical mucus quality to retard sperm entry",
        "explanation": "Pills inhibit ovulation and implantation as well as alter the quality of cervical mucus to prevent/retard the entry of sperms. Pills are very effective with lesser side effects and are widely accepted by females."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Emergency contraceptives, such as administration of progestogens or progestogen-estrogen combinations or IUDs, are effective if used within how many hours of unprotected coitus?",
        "options": [
          "(a) 24 hours",
          "(b) 48 hours",
          "(c) 72 hours",
          "(d) 120 hours"
        ],
        "answer": "(c) 72 hours",
        "explanation": "Administration of progestogens or progestogen-estrogen combinations or IUDs within 72 hours of coitus have been found to be very effective as emergency contraceptives as they could be used to avoid possible pregnancy due to rape or casual unprotected intercourse."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In surgical sterilisation methods, vasectomy in males involves the cutting and tying of which duct?",
        "options": [
          "(a) Vasa efferentia",
          "(b) Vas deferens",
          "(c) Ureter",
          "(d) Ejaculatory duct"
        ],
        "answer": "(b) Vas deferens",
        "explanation": "In vasectomy, a small part of the vas deferens is removed or tied up through a small incision on the scrotum. This blocks the transport of sperms, while hormone production and ejaculation of seminal fluid continue normally."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why are surgical sterilisation methods (vasectomy and tubectomy) generally advised only as terminal methods of contraception?",
        "options": [
          "(a) Because they cause severe hormonal imbalances",
          "(b) Because their reversibility is very poor",
          "(c) Because they have high failure rates",
          "(d) Because they reduce sexual drive"
        ],
        "answer": "(b) Because their reversibility is very poor",
        "explanation": "Surgical interventions block gamete transport and thereby prevent conception. Sterilisation procedure in the male is called vasectomy and in the female tubectomy. They are highly effective, but their reversibility is very poor."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Medical Termination of Pregnancy (MTP) was legalised by the Government of India with strict conditions to avoid its misuse in which year?",
        "options": [
          "(a) 1951",
          "(b) 1971",
          "(c) 1984",
          "(d) 2002"
        ],
        "answer": "(b) 1971",
        "explanation": "Government of India legalised MTP in 1971 with some strict conditions to avoid its misuse. Such restrictions are all the more important to check indiscriminate and illegal female foeticides which are reported to be high in India."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Medical Termination of Pregnancy (MTP) is considered relatively safe during which period of pregnancy?",
        "options": [
          "(a) First trimester (up to 12 weeks)",
          "(b) Second trimester (12 to 24 weeks)",
          "(c) Third trimester (after 24 weeks)",
          "(d) At any time up to the 8th month"
        ],
        "answer": "(a) First trimester (up to 12 weeks)",
        "explanation": "MTPs are considered relatively safe during the first trimester, i.e., up to 12 weeks of pregnancy. Second trimester abortions are much more risky because the fetus becomes intimately associated with maternal uterine tissue."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following Sexually Transmitted Infections (STIs) is completely curable if detected early and treated properly?",
        "options": [
          "(a) Genital herpes",
          "(b) Hepatitis B",
          "(c) Syphilis",
          "(d) HIV infection"
        ],
        "answer": "(c) Syphilis",
        "explanation": "Except for hepatitis-B, genital herpes and HIV infections, all other STIs (such as gonorrhea, syphilis, chlamydiasis, genital warts, trichomoniasis) are completely curable if detected early and treated properly."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Hepatitis-B and HIV can also be transmitted by which of the following non-sexual modes?",
        "options": [
          "(a) Mosquito and insect bites",
          "(b) Sharing of injection needles, surgical instruments, and blood transfusion",
          "(c) Hugging and sharing eating utensils",
          "(d) Inhaling respiratory droplets"
        ],
        "answer": "(b) Sharing of injection needles, surgical instruments, and blood transfusion",
        "explanation": "Hepatitis-B and HIV are transmitted not only sexually but also by sharing of injection needles, surgical instruments with infected persons, transfusion of contaminated blood, or from an infected mother to the fetus through placenta."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the 'Test Tube Baby' programme, the technique involving in vitro fertilisation followed by transfer of an embryo with up to 8 blastomeres into the fallopian tube is termed:",
        "options": [
          "(a) ZIFT",
          "(b) IUT",
          "(c) GIFT",
          "(d) ICSI"
        ],
        "answer": "(a) ZIFT",
        "explanation": "In ZIFT (Zygote Intra Fallopian Transfer), the zygote or early embryo with up to 8 blastomeres is transferred into the fallopian tube. Embryos with more than 8 blastomeres are transferred into the uterus (IUT - Intra Uterine Transfer)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Transfer of an ovum collected from a donor female into the fallopian tube of another female who cannot produce one, but can provide suitable environment for fertilisation and development, is known as:",
        "options": [
          "(a) ZIFT",
          "(b) GIFT",
          "(c) IUI",
          "(d) ICSI"
        ],
        "answer": "(b) GIFT",
        "explanation": "GIFT stands for Gamete Intra Fallopian Transfer. It involves the transfer of an ovum collected from a donor into the fallopian tube of another female who cannot produce an ovum, but can provide suitable environment for fertilisation and further development."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Intra Cytoplasmic Sperm Injection (ICSI) is a specialized laboratory procedure in which:",
        "options": [
          "(a) Semen is collected and inseminated into the uterus",
          "(b) A single sperm is directly injected into the cytoplasm of an ovum",
          "(c) Multiple sperms are mixed with ovum in a petri dish",
          "(d) Sperms are placed directly into the fallopian tube"
        ],
        "answer": "(b) A single sperm is directly injected into the cytoplasm of an ovum",
        "explanation": "Intra Cytoplasmic Sperm Injection (ICSI) is a specialized procedure to form an embryo in the laboratory in which a single sperm is directly injected into the cytoplasm of an ovum using a micropipette."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In cases of male infertility due to very low sperm count (oligozoospermia) or inability to inseminate the female partner, which Assisted Reproductive Technology is most appropriate?",
        "options": [
          "(a) GIFT",
          "(b) Intrauterine Insemination (IUI) / Artificial Insemination (AI)",
          "(c) Amniocentesis",
          "(d) Periodic abstinence"
        ],
        "answer": "(b) Intrauterine Insemination (IUI) / Artificial Insemination (AI)",
        "explanation": "Infertility cases due to inability of the male partner to inseminate the female or due to very low sperm counts in the ejaculates could be corrected by Artificial Insemination (AI) technique. In this technique, the semen collected either from the husband or a healthy donor is artificially introduced into the vagina or into the uterus (IUI - intrauterine insemination)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "According to the Medical Termination of Pregnancy (Amendment) Act, 2017, a pregnancy may be terminated on certain specified grounds within the first 12 weeks on the opinion of:",
        "options": [
          "(a) One registered medical practitioner",
          "(b) Two registered medical practitioners",
          "(c) A district magistrate and police officer",
          "(d) A board of five specialist doctors"
        ],
        "answer": "(a) One registered medical practitioner",
        "explanation": "According to the MTP (Amendment) Act, a pregnancy may be terminated up to 12 weeks on the opinion of one registered medical practitioner. For pregnancies between 12 and 20 weeks (or 24 weeks under revised criteria), the opinion of two registered medical practitioners is required."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following sexually transmitted infections is caused by the bacterium Treponema pallidum?",
        "options": [
          "(a) Gonorrhoea",
          "(b) Syphilis",
          "(c) Trichomoniasis",
          "(d) Chlamydiasis"
        ],
        "answer": "(b) Syphilis",
        "explanation": "Syphilis is a sexually transmitted bacterial infection caused by the spirochete bacterium Treponema pallidum."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the key chemical composition difference between traditional oral contraceptive pills and 'Saheli'?",
        "options": [
          "(a) Traditional pills are steroidal; Saheli is non-steroidal (centchroman)",
          "(b) Traditional pills contain copper ions; Saheli contains zinc",
          "(c) Traditional pills are non-steroidal; Saheli contains testosterone",
          "(d) Traditional pills are taken weekly; Saheli is taken daily"
        ],
        "answer": "(a) Traditional pills are steroidal; Saheli is non-steroidal (centchroman)",
        "explanation": "Traditional oral contraceptive pills contain steroid hormones (progestogen or progestogen-estrogen combinations) and must be taken daily for 21 days. 'Saheli' contains a non-steroidal selective estrogen receptor modulator (centchroman/ormeloxifene) taken once weekly."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is NOT an objective of Reproductive and Child Health Care (RCH) programmes?",
        "options": [
          "(a) Creating awareness about reproduction-related aspects among people",
          "(b) Providing facilities and support for building up a reproductively healthy society",
          "(c) Promoting female foeticide through mandatory sex-determination testing",
          "(d) Creating awareness regarding STIs, safe sexual practices, and contraception"
        ],
        "answer": "(c) Promoting female foeticide through mandatory sex-determination testing",
        "explanation": "Promoting female foeticide is strictly illegal and contrary to RCH goals. RCH focuses on creating awareness about reproductive health, maternal-infant care, family planning methods, and STI prevention. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Statutory ban on amniocentesis is deeply justified in India.\nReason (R): Amniocentesis was being rampant misused for prenatal sex determination leading to female foeticide.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and R is the correct explanation. Amniocentesis was introduced for diagnosing genetic disorders (Down syndrome, sickle-cell anemia), but its misuse for selective abortion of female fetuses led to the ban under the PC-PNDT Act."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): 'Saheli' is widely accepted as an effective contraceptive with high user compliance.\nReason (R): 'Saheli' is a non-steroidal, once-a-week pill with very few side effects.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and R provides the correct reason. Since Saheli is taken only once weekly and lacks steroidal side-effects (weight gain, nausea), women find it convenient and easy to adhere to."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Condoms are considered an ideal barrier contraceptive method.\nReason (R): Condoms protect both sexual partners against contracting STIs including HIV/AIDS in addition to preventing conception.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) correctly explains (A). The unique advantage of condoms over hormonal or surgical methods is the dual protection against unintended pregnancies and sexually transmitted pathogens."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Tubectomy is a highly irreversible method of contraception.\nReason (R): In tubectomy, both ovaries are surgically excised from the female body.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(c) (A) is true but (R) is false",
        "explanation": "Assertion is true: Tubectomy has extremely poor reversibility. Reason is false: Ovaries are NOT removed in tubectomy; only a small portion of the fallopian tubes is cut and ligated. Surgical removal of ovaries is called oophorectomy."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Lactational amenorrhea is a dependable contraceptive method only up to 6 months postpartum.\nReason (R): High levels of prolactin during intense lactation inhibit GnRH secretion, thereby suppressing gonadotropins (LH and FSH) and preventing ovulation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) gives the physiological explanation of (A). Suckling stimulates prolactin secretion which suppresses hypothalamic GnRH, blocking LH surge and ovulation. However, as nursing frequency decreases after 6 months, prolactin drops and ovulation resumes. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is amniocentesis? State its legitimate clinical purpose and explain why a statutory ban has been imposed on its use for prenatal sex determination. [3 Marks]",
        "answer": "Amniocentesis procedure, clinical utility, and reason for statutory ban.",
        "explanation": "Amniocentesis procedure, clinical utility, and reason for statutory ban.\n\nMarking Scheme:\n• Definition & Procedure: Prenatal diagnostic technique where amniotic fluid containing fetal cells is withdrawn from the uterus of a pregnant woman using a hypodermic needle under ultrasound guidance. [1 Mark]\n• Clinical Purpose: Analysis of fetal chromosomes to detect chromosomal abnormalities (e.g., Down syndrome, Turner syndrome, Klinefelter syndrome) and metabolic or metabolic enzyme deficiencies. [1 Mark]\n• Reason for Ban: Rampant misuse by people to determine the sex of the fetus followed by female foeticide if the fetus is female. Statutory ban under PC-PNDT Act checks declining sex ratio. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Classify Intrauterine Devices (IUDs) into three categories with one example of each. State their general mode of contraceptive action. [3 Marks]",
        "answer": "Classification of IUDs with examples and contraceptive mechanism.",
        "explanation": "Classification of IUDs with examples and contraceptive mechanism.\n\nMarking Scheme:\n• Three Categories & Examples [1.5 Marks, 0.5 Mark each]:\n1. Non-medicated IUDs: Lippes loop.\n2. Copper-releasing IUDs: CuT, Cu7, Multiload 375.\n3. Hormone-releasing IUDs: Progestasert, LNG-20.\n• Modes of Action [1.5 Marks]: Increase phagocytosis of sperms within the uterus; Cu ions suppress sperm motility and fertilising capacity; Hormone-releasing IUDs make the uterus unsuitable for implantation and cervix hostile to sperms."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the composition, administration schedule, and contraceptive mechanism of action of combined oral contraceptive pills. [3 Marks]",
        "answer": "Composition, 21-day schedule, and triple contraceptive action.",
        "explanation": "Composition, 21-day schedule, and triple contraceptive action.\n\nMarking Scheme:\n• Composition: Synthetic combinations of progestogens or progestogen-estrogen. [1 Mark]\n• Administration Schedule: Taken daily for 21 days starting preferably within the first 5 days of menstrual cycle; followed by a 7-day pill-free interval (during which menstruation occurs). [1 Mark]\n• Mechanism of Action: (1) Inhibit ovulation by negative feedback on pituitary LH/FSH secretion; (2) Inhibit implantation by altering uterine endometrium; (3) Thicken cervical mucus to retard sperm motility. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Vasectomy and Tubectomy on the basis of: (i) Organ/duct operated, (ii) Method of execution, (iii) Effect on gamete formation vs gamete transport. [3 Marks]",
        "answer": "Comparison between vasectomy and tubectomy.",
        "explanation": "Comparison between vasectomy and tubectomy.\n\nMarking Scheme (1 Mark each):\n1. Duct operated: Vasectomy involves the vas deferens in males; Tubectomy involves the fallopian tubes in females. [1 Mark]\n2. Method of execution: In vasectomy, a small cut is made in the scrotum and vas deferens is cut and ligated; in tubectomy, a small cut in the abdomen or through vagina is made and fallopian tubes are cut and ligated. [1 Mark]\n3. Gamete effect: In both methods, gamete production (spermatogenesis in testes and oogenesis in ovaries) and sex hormone synthesis continue normally; only gamete transport/conduction is blocked to prevent fertilisation. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Medical Termination of Pregnancy (MTP)? Under what medical conditions is MTP legally permitted in India? [3 Marks]",
        "answer": "Definition of MTP and legal grounds under MTP Act.",
        "explanation": "Definition of MTP and legal grounds under MTP Act.\n\nMarking Scheme:\n• Definition: Intentional or voluntary termination of pregnancy before full term is called Medical Termination of Pregnancy\n(MTP) or induced abortion. [1 Mark]\n• Legal Conditions for MTP (1 Mark each for any two grounds):\n1. Continuation of pregnancy involves risk to the life of the pregnant woman or of grave injury to her physical or mental health. [1 Mark]\n2. Substantial risk that if the child were born, it would suffer from serious physical or mental abnormalities to be seriously handicapped. [1 Mark]\n3. Pregnancies resulting from rape or failure of contraceptive device used by married couple. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Name three Sexually Transmitted Infections (STIs) that are NOT completely curable even if detected early. Suggest two preventive measures against STIs. [3 Marks]",
        "answer": "Incurable STIs: HIV, Hepatitis-B, Genital herpes; prevention strategies.",
        "explanation": "Incurable STIs: HIV, Hepatitis-B, Genital herpes; prevention strategies.\n\nMarking Scheme:\n• Incurable STIs [1.5 Marks, 0.5 Mark each]:\n1. Human Immunodeficiency Virus (HIV/AIDS)\n2. Hepatitis-B infection\n3. Genital herpes (Herpes simplex virus)\n• Preventive Measures [1.5 Marks, 0.75 Mark each]:\n1. Avoid sex with unknown partners or multiple partners.\n2. Always use condoms during coitus.\n3. In case of doubt, consult a qualified doctor for early detection and get complete treatment if diagnosed."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between ZIFT and GIFT techniques of Assisted Reproductive Technologies (ART). [3 Marks]",
        "answer": "Comparison between Zygote Intra Fallopian Transfer and Gamete Intra Fallopian Transfer.",
        "explanation": "Comparison between Zygote Intra Fallopian Transfer and Gamete Intra Fallopian Transfer.\n\nMarking Scheme:\n• ZIFT (Zygote Intra Fallopian Transfer): Fertilisation is in vitro (outside body in lab). Zygote or early embryo up to 8 blastomeres is transferred into the fallopian tube of female. Used when fallopian tubes are patent but fertilisation fails naturally. [1.5 Marks]\n• GIFT (Gamete Intra Fallopian Transfer): Fertilisation is in vivo (inside female body). Unfertilised ovum collected from donor along with sperms are transferred into the fallopian tube of a female who cannot produce ova but can sustain pregnancy. [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Intra Cytoplasmic Sperm Injection (ICSI)? In what specific clinical conditions is it recommended over conventional IVF? [3 Marks]",
        "answer": "Mechanism of ICSI and clinical indications.",
        "explanation": "Mechanism of ICSI and clinical indications.\n\nMarking Scheme:\n• ICSI Definition: A specialized micromanipulation technique under high-power microscope where a single motile sperm is mechanically micro-injected directly into the cytoplasm of a mature ovum. [1.5 Marks]\n• Clinical Indications: Recommended when the male partner has severe male factor infertility: severe oligozoospermia (extremely low sperm count), asthenozoospermia (poor sperm motility), teratozoospermia (abnormal morphology), or repeated failure of conventional IVF fertilization. [1.5 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain how the 'Barrier Methods' of contraception function in human females. Mention two examples of female barrier devices and their advantages. [3 Marks]",
        "answer": "Barrier contraceptives for females: diaphragms, cervical caps, vaults.",
        "explanation": "Barrier contraceptives for females: diaphragms, cervical caps, vaults.\n\nMarking Scheme:\n• Working mechanism: Prevent conception by mechanically blocking sperms from reaching and entering the cervix and uterus. [1 Mark]\n• Examples: Diaphragms, cervical caps, and vaults made of rubber inserted into the female reproductive tract to cover the cervix before coitus. [1 Mark]\n• Advantages: Reusable; non-hormonal (no metabolic side effects); can be combined with spermicidal creams, jellies, and foams to increase contraceptive efficiency. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why is lactational amenorrhea considered an effective natural method of contraception? What is its main physiological limitation? [3 Marks]",
        "answer": "Prolactin suppression of gonadotropins; time limitation.",
        "explanation": "Prolactin suppression of gonadotropins; time limitation.\n\nMarking Scheme:\n• Mechanism: Intense breastfeeding stimulates high prolactin release from anterior pituitary, which suppresses hypothalamic GnRH secretion. This prevents secretion of LH and FSH, thereby preventing follicular maturation and ovulation. [1.5 Marks]\n• Absence of side effects: It is natural, free of cost, and involves no drugs or foreign devices. [0.5 Mark]\n• Limitation: It is effective only for a maximum duration of 6 months following delivery, after which maternal nursing frequency decreases, prolactin declines, and unpredictable ovulation can occur leading to unwanted pregnancy. [1 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Give an exhaustive classification of all major contraceptive methods available to human couples, giving suitable examples for each.\n(b) What are the ideal characteristics of a contraceptive device? [5 Marks]",
        "answer": "Contraceptive classification and ideal contraceptive traits.",
        "explanation": "Contraceptive classification and ideal contraceptive traits.\n\nMarking Scheme:\n(a) Classification of Contraceptive Methods [3.5 Marks]:\n1. Natural/Traditional: Periodic abstinence, coitus interruptus (withdrawal), lactational amenorrhea. [0.75 Mark]\n2. Barrier methods: Condoms (male and female), diaphragms, cervical caps, vaults. [0.75 Mark]\n3. Intrauterine Devices (IUDs): Non-medicated (Lippes loop), copper-releasing (CuT, Multiload 375), hormone-releasing (LNG-20, Progestasert). [0.75 Mark]\n4. Oral contraceptives: Combined pills (Mala-D), non-steroidal once-weekly (Saheli). [0.5 Mark]\n5. Injectables and Implants: Subdermal progestogen implants (Norplant). [0.25 Mark]\n6. Surgical / Sterilisation: Vasectomy (male), Tubectomy (female). [0.5 Mark]\n(b) Characteristics of an Ideal Contraceptive [1.5 Marks]:\n• Must be user-friendly, easily available, highly effective, completely reversible with least or no side effects, and must not interfere with sexual desire/drive of the user. [1.5 Marks]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A couple has been unable to conceive after three years of regular unprotected intercourse.\n(a) Define infertility.\n(b) Explain any three Assisted Reproductive Technologies (ART) that can help them achieve parenthood, indicating the clinical scenario appropriate for each technique. [5 Marks]",
        "answer": "Infertility definition and ART techniques (IVF-ET, ZIFT/GIFT, ICSI/IUI).",
        "explanation": "Infertility definition and ART techniques (IVF-ET, ZIFT/GIFT, ICSI/IUI).\n\nMarking Scheme:\n(a) Infertility Definition [1 Mark]:\n• Inability to conceive or produce children despite two or more years of regular, unprotected sexual cohabitation. [1 Mark]\n(b) ART Techniques [4 Marks]:\n1. IVF-ET (In Vitro Fertilisation and Embryo Transfer): Ova from wife/donor and sperms from husband/donor are fertilised under simulated conditions in vitro. The zygote/early embryo (up to 8 blastomeres) is transferred into fallopian tube (ZIFT) or >8 blastomeres into uterus (IUT). Appropriate when female has blocked or damaged fallopian tubes. [1.5 Marks]\n2. GIFT (Gamete Intra Fallopian Transfer): Transfer of an ovum collected from a donor female into the fallopian tube of another female who cannot produce eggs but has healthy uterus. [1 Mark]\n3. ICSI / IUI: In ICSI, a single sperm is microinjected directly into ovum; in IUI, semen is concentrated and injected into uterus. Appropriate for severe male factor infertility (low sperm count, defective motility). [1.5 Marks]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What are Sexually Transmitted Infections (STIs)? Name two bacterial and two viral STIs.\n(b) What are the early symptoms of STIs? Why do people often delay seeking medical treatment, and what long-term complications can occur if STIs are left untreated? [5 Marks]",
        "answer": "STIs, examples, symptoms, social stigma, and long-term consequences.",
        "explanation": "STIs, examples, symptoms, social stigma, and long-term consequences.\n\nMarking Scheme:\n(a) Definition & Examples [2 Marks]:\n• Infections or diseases transmitted through sexual intercourse are collectively called STIs / STDs / Venereal Diseases (VD). [1 Mark]\n• Bacterial examples: Syphilis (Treponema pallidum), Gonorrhoea (Neisseria gonorrhoeae). [0.5 Mark]\n• Viral examples: Genital herpes (HSV), Genital warts (HPV), Hepatitis-B, HIV/AIDS. [0.5 Mark]\n(b) Symptoms, Stigma & Complications [3 Marks]:\n• Early symptoms: Itching, fluid discharge, slight pain, swelling in genital region. Often asymptomatic in females. [1 Mark]\n• Delay in treatment: Social stigma attached to venereal diseases, embarrassment, and lack of awareness prevent patients from seeking timely advice. [1 Mark]\n• Long-term complications: Pelvic Inflammatory Diseases (PID), ectopic pregnancies, stillbirths, abortions, infertility, and reproductive tract cancers. [1 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the procedure of amniocentesis with a labelled schematic diagram.\n(b) Explain why amniocentesis has been legally banned for sex determination while remaining permitted for medical diagnosis.\n(c) Name two chromosomal abnormalities that can be detected by this technique. [5 Marks]",
        "answer": "Amniocentesis technique, ethical/legal aspects, and detectable disorders.",
        "explanation": "Amniocentesis technique, ethical/legal aspects, and detectable disorders.\n\nMarking Scheme:\n(a) Amniocentesis Procedure & Diagram [2 Marks]:\n• Under ultrasound guidance, a hollow needle is inserted transabdominally into the amniotic cavity to withdraw ~15-20 ml of amniotic fluid containing desquamated fetal skin cells. [1 Mark]\n• Cells are cultured, karyotyped, and analyzed for chromosomal count and morphology. [Diagram 1 Mark]\n(b) Legal Context [2 Marks]:\n• Banned for sex determination because widespread social bias against female children led to selective female foeticide, distorting the child sex ratio. [1 Mark]\n• Permitted strictly for diagnosing genetic abnormalities where continuation of pregnancy would result in severely handicapped offspring or risk to maternal life. [1 Mark]\n(c) Detectable Disorders [1 Mark, 0.5 Mark each]:\n• Down syndrome (Trisomy 21), Turner syndrome (45, XO), Klinefelter syndrome (47, XXY), Edward syndrome."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Discuss the reasons behind the rapid population explosion in India following independence.\n(b) State the measures taken by the Government of India and medical authorities to control the population growth rate. [5 Marks]",
        "answer": "Causes of population explosion and control measures.",
        "explanation": "Causes of population explosion and control measures.\n\nMarking Scheme:\n(a) Causes of Population Explosion [2.5 Marks]:\n• Drastic decline in Death Rate (mortality rate). [0.75 Mark]\n• Drastic decline in Maternal Mortality Rate (MMR) and Infant Mortality Rate (IMR). [0.75 Mark]\n• Significant increase in the number of people in reproducible age groups (demographic momentum). [0.5 Mark]\n• Better public health, eradication of mass epidemics, improved sanitation, and food security. [0.5 Mark]\n(b) Control Measures [2.5 Marks]:\n• Promoting smaller families through media campaigns (slogans like 'Hum Do Hamare Do'). [0.5 Mark]\n• Increasing marriageable age: statutory age raised to 18 years for females and 21 years for males. [0.75 Mark]\n• Providing subsidized or free contraceptives (Nirodh, Mala-D, IUD insertions, Saheli). [0.75 Mark]\n• Financial incentives given to couples opting for sterilisation after one or two children. [0.5 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A village health worker encounters three couples with distinct family planning needs:\n- Couple A has one child and wants to space the second child by 3 years.\n- Couple B has completed their family with two children and seeks permanent sterilisation.\n- Couple C had an unexpected condom rupture during intercourse last night. Suggest and justify the most suitable contraceptive method for each couple. [5 Marks]",
        "answer": "Contraceptive prescriptions: IUD/Pills for spacing, Sterilisation for terminal, Emergency contraceptive.",
        "explanation": "Contraceptive prescriptions: IUD/Pills for spacing, Sterilisation for terminal, Emergency contraceptive.\n\nMarking Scheme:\n• Couple A (Spacing Method) [2 Marks]:\n- Recommendation: Intrauterine Device (IUD) like CuT or Multiload 375, or Oral Contraceptive Pills (Saheli / combined pill). [1 Mark]\n- Justification: IUDs are ideal for females who want to delay pregnancy or space children; they offer multi-year protection, have high efficacy, and allow immediate return to fertility upon removal. [1 Mark]\n• Couple B (Permanent Method) [1.5 Marks]:\n- Recommendation: Surgical sterilisation — Vasectomy for the husband or Tubectomy for the wife. [0.75 Mark]\n- Justification: Terminal methods that permanently block gamete transport with near 100% success rate when no further children are desired. [0.75 Mark]\n• Couple C (Emergency Method) [1.5 Marks]:\n- Recommendation: Emergency Contraceptive Pills (progestogen / progestogen-estrogen pill like i-Pill / LNG) or insertion of a Copper-releasing IUD within 72 hours of intercourse. [0.75 Mark]\n- Justification: Inhibits delayed ovulation or prevents implantation of any fertilized ovum, preventing unplanned pregnancy resulting from contraceptive failure. [0.75 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the major provisions and amendments of the Medical Termination of Pregnancy (MTP) Act in India. Why is second trimester abortion significantly more hazardous than first trimester abortion? [5 Marks]",
        "answer": "MTP Act provisions, gestational limits, and surgical hazards of second trimester abortion.",
        "explanation": "MTP Act provisions, gestational limits, and surgical hazards of second trimester abortion.\n\nMarking Scheme:\n(a) MTP Act Provisions & Amendments [3 Marks]:\n• Legalized in 1971 with conditions to avoid misuse and female foeticide. [0.5 Mark]\n• Gestational limits: Termination allowed up to 12 weeks on opinion of one registered medical practitioner; between 12 to 20 weeks (or 24 weeks for vulnerable categories like rape survivors, minors) on opinion of two doctors. [1.5 Marks]\n• Requires informed consent of the woman; strictly confidential medical reporting. [1 Mark]\n(b) Why 2nd Trimester Abortions are more hazardous [2 Marks]:\n• During the second trimester, the fetus is larger and fully attached to the uterine wall via the vascular placenta. [1 Mark]\n• Surgical intervention carries high risks of severe uterine perforation, extensive hemorrhage, cervical trauma, pelvic sepsis, and incomplete evacuation leading to life-threatening complications. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Compare and contrast the following Assisted Reproductive Technologies:\n(a) In Vitro Fertilisation (IVF) vs In Vivo Fertilisation\n(b) ZIFT vs IUT\n(c) Artificial Insemination (AI) vs Intra Cytoplasmic Sperm Injection (ICSI). [5 Marks]",
        "answer": "Detailed comparison of ART modalities.",
        "explanation": "Detailed comparison of ART modalities.\n\nMarking Scheme:\n(a) IVF vs In Vivo Fertilisation [1.5 Marks]:\n• IVF: Fusion of male and female gametes takes place outside the female body in a laboratory petri dish under controlled artificial culture conditions. [0.75 Mark]\n• In Vivo Fertilisation: Fusion of gametes takes place naturally inside the reproductive tract (fallopian tube) of the female. [0.75 Mark]\n(b) ZIFT vs IUT [1.5 Marks]:\n• ZIFT: Embryo at an early developmental stage (up to 8 blastomeres) is transferred into the fallopian tube. [0.75 Mark]\n• IUT (Intrauterine Transfer): Embryo with more than 8 blastomeres (morula or blastocyst stage) is transferred directly into the uterine cavity. [0.75 Mark]\n(c) AI vs ICSI [2 Marks]:\n• AI: Semen from husband/donor is collected, processed, and mechanically introduced into the vagina or uterus (IUI) so that sperms swim and fertilise ovum naturally inside fallopian tube. [1 Mark]\n• ICSI: A high-precision micromanipulation technique where a single chosen sperm is injected directly into the cytoplasm of an ovum in vitro using a micropipette. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the structure and mode of application of sub-dermal contraceptive implants.\n(b) What are spermicidal agents? Why are they usually combined with barrier devices?\n(c) What is the main cause of coitus interruptus failure as a contraceptive method? [5 Marks]",
        "answer": "Implants, spermicides, and failure mechanism of withdrawal method.",
        "explanation": "Implants, spermicides, and failure mechanism of withdrawal method.\n\nMarking Scheme:\n(a) Sub-dermal Implants [2 Marks]:\n• Small flexible capsules (e.g., Norplant containing levonorgestrel) implanted under the skin of the inner upper arm. [1 Mark]\n• Release slow, continuous, steady amounts of progestogen over 3 to 5 years, providing long-term reversible contraception identical to pills without requiring daily compliance. [1 Mark]\n(b) Spermicidal Agents [1.5 Marks]:\n• Chemical agents (creams, jellies, foams containing nonoxynol-9) that immobilize and kill sperms chemically. [0.75 Mark]\n• Combined with barrier methods (diaphragms, caps) to ensure that even if any sperm slips past the barrier edge, it is destroyed, drastically reducing failure rates. [0.75 Mark]\n(c) Failure of Coitus Interruptus [1.5 Marks]:\n• Coitus interruptus (withdrawal) fails frequently because pre-ejaculatory lubricating fluid secreted by bulbourethral glands often contains viable sperms that can cause fertilisation even before ejaculation; also requires perfect voluntary control. [1.5 Marks]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'According to the World Health Organization (WHO), reproductive health is a state of complete physical, mental and social well- being and not merely the absence of disease or infirmity, in all matters relating to the reproductive system and its functions and processes.'\n(a) Mention any four indicators of a reproductively healthy society.\n(b) Why should sex education be introduced in schools? State two arguments supporting its introduction.\n(c) How can awareness regarding female foeticide be promoted in rural communities? [5 Marks]",
        "answer": "WHO reproductive health, sex education rationale, and female foeticide prevention.",
        "explanation": "WHO reproductive health, sex education rationale, and female foeticide prevention.\n\nMarking Scheme:\n(a) Indicators of Reproductively Healthy Society [2 Marks, 0.5 Mark each]:\n• Better awareness about sex-related matters and hygiene.\n• Increased number of medically assisted deliveries and lower MMR and IMR.\n• Better detection, prevention, and treatment of STIs.\n• Small family norms and widespread availability of voluntary family planning services.\n(b) Arguments for School Sex Education [1.5 Marks]:\n• Dispel myths, misconceptions, and taboos regarding sex and adolescent body changes. [0.75 Mark]\n• Impart scientifically accurate knowledge about reproductive organs, hygiene, safe sex, adolescence issues, and prevention of STIs/AIDS. [0.75 Mark]\n(c) Combating Female Foeticide [1.5 Marks]:\n• Stringent enforcement of PC-PNDT Act with anonymous reporting mechanisms and heavy penalties. [0.75 Mark]\n• Public education campaigns highlighting equal dignity, female empowerment, scholarships for girl children (Beti Bachao Beti Padhao), and eradicating gender prejudice through street plays and panchayat meetings. [0.75 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "unit_num": 7,
      "title": "Principles of Inheritance and Variation",
      "unit_title": "Genetics and Evolution",
      "weightage_unit": "20 Marks (Unit VII)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A cross between a true-breeding red-flowered snapdragon (Antirrhinum majus) and a true-breeding white-flowered snapdragon produces all pink flowers in the F1 generation. What phenotypic and genotypic ratio will be obtained in the F2 generation upon selfing F1?",
        "options": [
          "(a) 3 Red : 1 White; 1:2:1",
          "(b) 1 Red : 2 Pink : 1 White; 1:2:1",
          "(c) 9 Red : 3 Pink : 3 White : 1 Yellow; 9:3:3:1",
          "(d) All Pink; 1:1"
        ],
        "answer": "(b) 1 Red : 2 Pink : 1 White; 1:2:1",
        "explanation": "In Antirrhinum (snapdragon), flower color exhibits incomplete dominance. When RR (red) is crossed with rr\n(white), F1 is Rr (pink). Selfing Rr x Rr produces 1 RR (red) : 2 Rr (pink) : 1 rr (white). Both the phenotypic ratio and genotypic ratio are identically 1:2:1."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Human ABO blood groups are controlled by the gene I, which has three alleles: I^A, I^B, and i. How many genotypes and phenotypes are possible in the human population for ABO blood grouping?",
        "options": [
          "(a) 6 genotypes and 4 phenotypes",
          "(b) 4 genotypes and 6 phenotypes",
          "(c) 3 genotypes and 3 phenotypes",
          "(d) 6 genotypes and 6 phenotypes"
        ],
        "answer": "(a) 6 genotypes and 4 phenotypes",
        "explanation": "With 3 alleles (I^A, I^B, i), the number of possible genotypes is n(n+1)/2 = 3(4)/2 = 6 genotypes (I^A I^A, I^A i, I^B I^B, I^B i, I^A I^B, ii). These express 4 distinct phenotypes (Blood group A, B, AB, and O)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A person with AB blood group expresses both A and B antigens on the surface of red blood cells. This is an example of:",
        "options": [
          "(a) Incomplete dominance",
          "(b) Co-dominance",
          "(c) Pleiotropy",
          "(d) Polygenic inheritance"
        ],
        "answer": "(b) Co-dominance",
        "explanation": "When both alleles (I^A and I^B) are present together in an individual (genotype I^A I^B), both express their respective antigens equally and completely on the RBC membrane without blending. This phenomenon is called co-dominance."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the expected phenotypic ratio in a Mendelian dihybrid test cross involving a heterozygous tall, round-seeded plant\n(TtRr) crossed with a dwarf, wrinkled-seeded plant (ttrr)?",
        "options": [
          "(a) 9:3:3:1",
          "(b) 1:1:1:1",
          "(c) 3:1",
          "(d) 1:2:1"
        ],
        "answer": "(b) 1:1:1:1",
        "explanation": "In a dihybrid test cross (TtRr x ttrr), the heterozygous parent produces 4 types of gametes (TR, Tr, tR, tr) in equal proportion (25% each), while the homozygous recessive parent produces only 'tr' gametes. Hence, the resulting phenotypic ratio is 1 Tall Round : 1 Tall Wrinkled : 1 Dwarf Round : 1 Dwarf Wrinkled (1:1:1:1)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Chromosomal Theory of Inheritance, which noted that the behavior of chromosomes was parallel to the behavior of genes, was proposed by:",
        "options": [
          "(a) Gregor Mendel and Hugo de Vries",
          "(b) Walter Sutton and Theodor Boveri",
          "(c) Thomas Hunt Morgan and Alfred Sturtevant",
          "(d) Watson and Crick"
        ],
        "answer": "(b) Walter Sutton and Theodor Boveri",
        "explanation": "In 1902, Walter Sutton and Theodor Boveri noted that the behavior of chromosomes during meiosis parallels the behavior of genes. Sutton united the knowledge of chromosomal segregation with Mendelian principles and called it the Chromosomal Theory of Inheritance."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Thomas Hunt Morgan selected the fruit fly, Drosophila melanogaster, for his genetic studies because:",
        "options": [
          "(a) They complete their life cycle in about two weeks and a single mating produces hundreds of progeny",
          "(b) They can be grown easily on simple synthetic medium in the laboratory",
          "(c) There is a clear differentiation of the sexes and many hereditary variations visible under low-power microscope",
          "(d) All of the above"
        ],
        "answer": "(d) All of the above",
        "explanation": "Drosophila melanogaster is an ideal model organism because: they can be cultured on simple synthetic medium, complete their life cycle in ~2 weeks, produce vast numbers of offspring per mating, show clear sexual dimorphism (males smaller than females), and possess easily observable morphological variations."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Alfred Sturtevant utilized the frequency of recombination between gene pairs on the same chromosome to:",
        "options": [
          "(a) Discover the structure of the double helix",
          "(b) Measure the distance between genes and map their positions on the chromosome (genetic maps)",
          "(c) Prove the semi-conservative replication of DNA",
          "(d) Demonstrate transcription in prokaryotes"
        ],
        "answer": "(b) Measure the distance between genes and map their positions on the chromosome (genetic maps)",
        "explanation": "Alfred Sturtevant (Morgan's student) used the frequency of recombination between gene pairs on the same chromosome as a measure of the distance between genes and 'mapped' their position on the chromosome. Genetic maps are extensively used today in genome sequencing."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In birds, sex determination follows the ZZ-ZW mechanism. Which of the following statements is correct regarding this system?",
        "options": [
          "(a) Males are heterogametic (ZW) and females are homogametic (ZZ)",
          "(b) Females are heterogametic (ZW) and males are homogametic (ZZ)",
          "(c) Sex is determined by the number of sets of chromosomes (haplodiploidy)",
          "(d) Both males and females have identical sex chromosomes"
        ],
        "answer": "(b) Females are heterogametic (ZW) and males are homogametic (ZZ)",
        "explanation": "In birds, the females have one Z and one W chromosome (heterogametic, ZW) and produce two types of eggs (50% with Z and 50% with W). The males have a pair of Z chromosomes (homogametic, ZZ) and produce only Z-bearing sperms. Thus, the female determines the sex of offspring."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In honeybees, sex determination is haplodiploid. In this mechanism:",
        "options": [
          "(a) Males (drones) develop parthenogenetically from unfertilised eggs and are haploid (n = 16)",
          "(b) Females (queens and workers) develop from fertilised eggs and are diploid (2n = 32)",
          "(c) Drones produce sperms by mitosis and do not have a father or sons",
          "(d) All of the above are correct"
        ],
        "answer": "(d) All of the above are correct",
        "explanation": "In honeybees, females (queens/workers) develop from fertilised eggs (2n = 32). Males (drones) develop parthenogenetically from unfertilised eggs (n = 16). Because drones are haploid, they produce sperms by mitosis. Consequently, drones have no father and cannot have sons, but have a grandfather and can have grandsons."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Sickle-cell anaemia results from a point mutation in the beta-globin gene, causing the substitution of which amino acid at the 6th position of the beta-globin polypeptide chain?",
        "options": [
          "(a) Glutamic acid by Valine (GAG to GUG)",
          "(b) Valine by Glutamic acid (GUG to GAG)",
          "(c) Glycine by Alanine",
          "(d) Phenylalanine by Tyrosine"
        ],
        "answer": "(a) Glutamic acid by Valine (GAG to GUG)",
        "explanation": "Sickle-cell anemia is an autosomal recessive disorder caused by a single base substitution at the 6th codon of the beta-globin gene from GAG to GUG. This leads to the substitution of Glutamic acid (Glu) by Valine (Val) at the 6th position of the beta- globin chain."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Under conditions of low oxygen tension, the mutant haemoglobin molecule (HbS) undergoes polymerization that causes the red blood cells to:",
        "options": [
          "(a) Swell and burst rapidly (hemolysis)",
          "(b) Change from biconcave disc to elongated sickle-like structure",
          "(c) Turn into giant multinucleated cells",
          "(d) Precipitate as uric acid crystals"
        ],
        "answer": "(b) Change from biconcave disc to elongated sickle-like structure",
        "explanation": "Under low oxygen tension, HbS molecules polymerize into fibrous aggregates, distorting the normal flexible, biconcave disc shape of RBCs into rigid, elongated sickle-like shapes that clog narrow capillaries."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A human female with Turner syndrome has which of the following karyotypes and clinical manifestations?",
        "options": [
          "(a) 47, XXY; tall stature with gynaecomastia",
          "(b) 45, XO; sterile female with rudimentary ovaries and webbed neck",
          "(c) 47, Trisomy 21; flat back of head, furrowed tongue",
          "(d) 47, XYY; criminal syndrome"
        ],
        "answer": "(b) 45, XO; sterile female with rudimentary ovaries and webbed neck",
        "explanation": "Turner syndrome is caused by the absence of one of the X chromosomes (monosomy, 45, XO). Such females are sterile as ovaries are rudimentary, with short stature, webbed neck, lack of secondary sexual characteristics, and shield-shaped chest."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Klinefelter syndrome is a genetic disorder caused by the presence of an additional X-chromosome in males, resulting in the karyotype:",
        "options": [
          "(a) 45, XO",
          "(b) 47, XXY",
          "(c) 47, Trisomy 21",
          "(d) 46, XY with microdeletion"
        ],
        "answer": "(b) 47, XXY",
        "explanation": "Klinefelter syndrome is caused due to the presence of an additional copy of X-chromosome resulting in a karyotype of 47, XXY. Such an individual has overall masculine development, but feminine traits like development of breasts (gynaecomastia) are expressed, and the individual is sterile."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Down syndrome is an autosomal aneuploidy caused by the presence of an extra copy of chromosome number:",
        "options": [
          "(a) 13",
          "(b) 18",
          "(c) 21",
          "(d) 22"
        ],
        "answer": "(c) 21",
        "explanation": "Down syndrome (first described by Langdon Down in 1866) is caused by the presence of an extra copy of chromosome number 21 (Trisomy of 21, total 47 chromosomes). Features: short stature, small round head, furrowed tongue, partially open mouth, broad palm with simian crease, mental retardation."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A woman whose father was colour-blind marries a man with normal vision. What is the probability that their son will be colour- blind?",
        "options": [
          "(a) 0%",
          "(b) 25%",
          "(c) 50%",
          "(d) 100%"
        ],
        "answer": "(c) 50%",
        "explanation": "Color blindness is an X-linked recessive trait. The woman's father was color-blind (X^c Y), so she inherited X^c from him, making her a carrier (X^C X^c). Her husband has normal vision (X^C Y). For their sons, the mother contributes either X^C\n(normal) or X^c (color-blind) with equal probability (50%). Thus, 50% of the sons will be color-blind."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Haemophilia is an X-linked recessive disorder where a single cut leads to non-stop bleeding. A famous pedigree tracing this disorder is the royal family of:",
        "options": [
          "(a) Queen Victoria of England",
          "(b) Marie Curie",
          "(c) Gregor Mendel",
          "(d) Florence Nightingale"
        ],
        "answer": "(a) Queen Victoria of England",
        "explanation": "The family pedigree of Queen Victoria of England shows a number of haemophilic descendants as she was a carrier of the disease. In haemophilia, a single protein that is a part of the cascade of proteins involved in the clotting of blood is affected."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Phenylketonuria (PKU) is an inborn error of metabolism inherited as an autosomal recessive trait. Affected individuals lack which liver enzyme?",
        "options": [
          "(a) Phenylalanine hydroxylase",
          "(b) Tyrosinase",
          "(c) Hexosaminidase A",
          "(d) Adenosine deaminase"
        ],
        "answer": "(a) Phenylalanine hydroxylase",
        "explanation": "PKU is caused by a mutation in the gene coding for the enzyme phenylalanine hydroxylase. As a result, phenylalanine is not converted to tyrosine and accumulates, being converted into phenylpyruvic acid and other derivatives, resulting in severe mental retardation."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In pedigree analysis, a horizontal line connecting a square and a circle represents:",
        "options": [
          "(a) Siblings",
          "(b) Mating / Marriage",
          "(c) Consanguineous mating",
          "(d) Monozygotic twins"
        ],
        "answer": "(b) Mating / Marriage",
        "explanation": "In human pedigree charts: square represents male, circle represents female. A horizontal line between a male and a female represents mating (marriage). Double lines indicate consanguineous mating (mating between relatives)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is an example of an autosomal dominant genetic disorder in humans?",
        "options": [
          "(a) Sickle-cell anaemia",
          "(b) Myotonic dystrophy",
          "(c) Cystic fibrosis",
          "(d) Thalassemia"
        ],
        "answer": "(b) Myotonic dystrophy",
        "explanation": "Myotonic dystrophy is an autosomal dominant Mendelian disorder where the presence of a single mutant allele in an individual results in muscle wasting and progressive stiffness. Sickle-cell anemia, cystic fibrosis, and thalassemia are autosomal recessive."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Polygenic inheritance in humans is well exemplified by traits that are governed by three or more genes, showing continuous variation such as:",
        "options": [
          "(a) ABO blood groups",
          "(b) Flower color in pea",
          "(c) Human skin color and height",
          "(d) Pod shape in pea"
        ],
        "answer": "(c) Human skin color and height",
        "explanation": "Traits like human skin color, height, and intelligence are governed by three or more genes (e.g., A, B, C for skin color), and the phenotype reflects the contribution of each allele (additive effect), resulting in continuous gradation/bell-shaped curve."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In Morgan's dihybrid cross in Drosophila between yellow-bodied, white-eyed females and brown-bodied, red-eyed males, what was the percentage of recombinant types observed in the F2 generation?",
        "options": [
          "(a) 1.3%",
          "(b) 37.2%",
          "(c) 62.8%",
          "(d) 50.0%"
        ],
        "answer": "(a) 1.3%",
        "explanation": "In Cross A (genes for yellow body and white eye on X chromosome), Morgan observed 98.7% parental types and only 1.3% recombinant types, showing very tight linkage between body color and eye color genes."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "When Morgan crossed white-eyed, miniature-winged flies with wild-type red-eyed, normal-winged flies (Cross B), the proportion of recombinant types in F2 was:",
        "options": [
          "(a) 1.3%",
          "(b) 37.2%",
          "(c) 98.7%",
          "(d) 50%"
        ],
        "answer": "(b) 37.2%",
        "explanation": "In Cross B (genes for white eye and miniature wing), the genes were loosely linked on the X chromosome, showing 62.8% parental types and 37.2% recombinant types."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Pleiotropy refers to the phenomenon where:",
        "options": [
          "(a) Multiple genes control a single phenotypic trait",
          "(b) A single gene influences multiple phenotypic traits",
          "(c) Two dominant alleles express together",
          "(d) Genes on different chromosomes assort independently"
        ],
        "answer": "(b) A single gene influences multiple phenotypic traits",
        "explanation": "Pleiotropy occurs when a single gene product affects multiple metabolic pathways, manifesting in multiple distinct phenotypic expressions (e.g., Phenylketonuria gene affects mental ability, hair pigmentation, and skin pigmentation)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Thalassemia is an autosomal recessive blood disorder. It differs fundamentally from sickle-cell anaemia because:",
        "options": [
          "(a) Thalassemia is a quantitative problem of synthesising too few globin molecules, while sickle-cell anaemia is a qualitative problem of synthesising incorrectly functioning globin",
          "(b) Thalassemia is qualitative while sickle-cell anaemia is quantitative",
          "(c) Thalassemia is sex-linked while sickle-cell anaemia is autosomal",
          "(d) Thalassemia is caused by trisomy while sickle-cell is a monosomy"
        ],
        "answer": "(a) Thalassemia is a quantitative problem of synthesising too few globin molecules, while sickle-cell anaemia is a qualitative problem of synthesising incorrectly functioning globin",
        "explanation": "Thalassemia differs from sickle-cell anaemia in that the former is a quantitative problem of synthesising too few globin molecules, whereas the latter is a qualitative problem of synthesising an aberrantly functioning globin."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Failure of cytokinesis after telophase stage of cell division results in an increase in a whole set of chromosomes in an organism, a phenomenon known as:",
        "options": [
          "(a) Aneuploidy",
          "(b) Polyploidy",
          "(c) Monosomy",
          "(d) Trisomy"
        ],
        "answer": "(b) Polyploidy",
        "explanation": "Failure of cytokinesis after telophase stage of cell division results in an increase in a whole set of chromosomes in an organism and, this phenomenon is known as polyploidy. This condition is often seen in plants. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): A cross between a pure tall plant (TT) and a pure dwarf plant (tt) produces only tall plants in the F1 generation.\nReason (R): In a dissimilar pair of factors, one member of the pair dominates (dominant) the other (recessive).",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) is Mendel's Law of Dominance which explains why only tall plants appear in F1."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Morgan observed that tightly linked genes show very low recombination frequency.\nReason (R): The physical distance between two genes on a chromosome is directly proportional to the recombination frequency.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Genes located closer together on the same chromosome have lower chance of crossing-over during meiosis, leading to high parental linkage and low recombination percentage."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Haemophilia is much more common in human males than in human females.\nReason (R): The gene for haemophilia is located on the X-chromosome, and males have only one X-chromosome.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) explains (A). Since males are hemizygous (XY), a single recessive allele on the X chromosome manifests the disease. Females have two X chromosomes (XX) and require homozygous mutant alleles (X^h X^h) to express haemophilia, which is extremely rare."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Persons suffering from Down syndrome have 47 chromosomes in each somatic cell.\nReason (R): Down syndrome is caused by the non-disjunction of the 21st pair of autosomes during gametogenesis.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Non-disjunction (failure of homologous chromosomes to separate) results in an extra chromosome 21 in the gamete, creating trisomy 21 (2n + 1 = 47) upon fertilisation."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Sickle-cell anaemia carriers (HbA HbS) have an evolutionary survival advantage against malaria.\nReason (R): The sickle-shaped red blood cells inhibit the proliferation and growth of the malarial parasite Plasmodium falciparum.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). Heterozygotes (HbA HbS) exhibit sickle-cell trait without suffering severe anemia. When infected by Plasmodium, the cells sickle and are removed by the spleen, clearing the parasite and protecting the host from fatal malaria (heterozygote advantage/balanced polymorphism). SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State Mendel's Law of Independent Assortment. Explain it using a dihybrid cross between homozygous round yellow (RRYY) and wrinkled green (rryy) pea plants. [3 Marks]",
        "answer": "Statement of Law of Independent Assortment, dihybrid cross summary, and 9:3:3:1 ratio.",
        "explanation": "Statement of Law of Independent Assortment, dihybrid cross summary, and 9:3:3:1 ratio.\n\nMarking Scheme:\n• Law Statement: 'When two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair of characters at the time of gamete formation.' [1 Mark]\n• Cross & Gametes: P generation: RRYY x rryy -> Gametes: RY and ry -> F1 generation: RrYy (Round Yellow). [1 Mark]\n• F2 Dihybrid Ratio: Selfing RrYy produces 4 types of gametes (RY, Ry, rY, ry). Punnett square yields 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green (9:3:3:1). [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "A child with blood group 'O' has a mother with blood group 'A' and a father with blood group 'B'. Determine the genotypes of the parents and show the possible blood groups of other children from this marriage with a Punnett square. [3 Marks]",
        "answer": "Genotypes of parents and Punnett square showing A, B, AB, and O.",
        "explanation": "Genotypes of parents and Punnett square showing A, B, AB, and O.\n\nMarking Scheme:\n• Parental Genotypes: Since the child has blood group 'O' (genotype ii), the child must receive one 'i' allele from each parent. Therefore, mother is heterozygous A (I^A i) and father is heterozygous B (I^B i). [1 Mark]\n• Punnett Square: Cross I^A i x I^B i gives:\n- I^A I^B -> Blood Group AB (25%)\n- I^A i -> Blood Group A (25%)\n- I^B i -> Blood Group B (25%)\n- ii -> Blood Group O (25%) [1.5 Marks]\n• Conclusion: All four blood groups (A, B, AB, O) are possible among their children. [0.5 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the biological basis of sex determination in honeybees (Haplodiploidy). Why cannot a male bee have a father or sons? [3 Marks]",
        "answer": "Haplodiploid sex determination in honeybee.",
        "explanation": "Haplodiploid sex determination in honeybee.\n\nMarking Scheme:\n• Mechanism: Honeybees show haplodiploidy. Females are diploid (2n = 32 chromosomes) developing from fertilised eggs; males (drones) are haploid (n = 16 chromosomes) developing parthenogenetically from unfertilised eggs. [1 Mark]\n• Mitotic Spermatogenesis: Since drones are haploid, they produce sperms via mitosis without meiosis. [1 Mark]\n• Why no father or sons: A drone develops from an unfertilized egg of the queen (no father, only a mother). When a drone mates, his sperms fertilise eggs that always develop into females (queens/workers), so he has daughters, never sons. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Incomplete Dominance and Co-dominance. Give one suitable genetic example of each. [3 Marks]",
        "answer": "Comparison between Incomplete Dominance and Co-dominance.",
        "explanation": "Comparison between Incomplete Dominance and Co-dominance.\n\nMarking Scheme:\n• Incomplete Dominance: In a heterozygote, neither allele is completely dominant over the other; the phenotype produced is an intermediate blending between the two parental traits. Example: Flower color in Antirrhinum majus\n(Snapdragon) / Mirabilis jalapa, where RR (red) x rr (white) gives pink (Rr). [1.5 Marks]\n• Co-dominance: In a heterozygote, both alleles express themselves fully and simultaneously without blending. Example:\nABO blood group in humans, where genotype I^A I^B expresses both A and B antigens equally on red blood cells. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the molecular cause of Sickle-cell anaemia. How does this point mutation alter haemoglobin structure under low oxygen tension? [3 Marks]",
        "answer": "Point mutation GAG to GUG, Glu to Val, HbS polymerization.",
        "explanation": "Point mutation GAG to GUG, Glu to Val, HbS polymerization.\n\nMarking Scheme:\n• Point Mutation: Transversion mutation at the 6th codon of the beta-globin gene on chromosome 11, changing CTC (coding strand) / GAG (mRNA) to CAC / GUG. [1 Mark]\n• Amino acid substitution: Leads to substitution of polar Glutamic acid (Glu) by hydrophobic Valine (Val) at the 6th position of beta-globin polypeptide chain. [1 Mark]\n• Structural alteration: Under low oxygen tension, mutant HbS undergoes hydrophobic polymerization, forming long insoluble fibers that distort RBCs into sickle shape, causing vascular occlusion and hemolytic anemia. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Compare Turner syndrome and Klinefelter syndrome on the basis of: (i) Karyotype, (ii) Sex, (iii) Characteristic phenotypic features. [3 Marks]",
        "answer": "Comparison between Turner syndrome and Klinefelter syndrome.",
        "explanation": "Comparison between Turner syndrome and Klinefelter syndrome.\n\nMarking Scheme (1 Mark each):\n1. Karyotype: Turner syndrome is 45, XO (monosomy); Klinefelter syndrome is 47, XXY (trisomy). [1 Mark]\n2. Sex: Turner individuals are phenotypically female; Klinefelter individuals are phenotypically male. [1 Mark]\n3. Features: Turner females have short stature, webbed neck, rudimentary ovaries, sterile, no secondary sex traits; Klinefelter males have tall stature with disproportionately long limbs, gynaecomastia (breast development), sparse body hair, and sterility. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is a test cross? Why is it conducted? Illustrate a monohybrid test cross with a Punnett square. [3 Marks]",
        "answer": "Definition of test cross, purpose, and monohybrid cross illustration.",
        "explanation": "Definition of test cross, purpose, and monohybrid cross illustration.\n\nMarking Scheme:\n• Definition & Purpose: A cross between an individual of unknown dominant phenotype with the homozygous recessive parent. Purpose: To determine whether the dominant individual is homozygous (pure) or heterozygous (hybrid). [1.5 Marks]\n• Punnett Square Cross: If dominant is heterozygous (Tt):\nTt x tt -> 50% Tt (Tall) and 50% tt (Dwarf). Phenotypic ratio 1:1 confirms the unknown plant was heterozygous. [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why is Haemophilia called a 'Criss-cross' inherited disease? Show the pattern of inheritance when a carrier woman marries a normal man. [3 Marks]",
        "answer": "Criss-cross inheritance definition and Punnett square.",
        "explanation": "Criss-cross inheritance definition and Punnett square.\n\nMarking Scheme:\n• Criss-cross Inheritance: Transmission of a sex-linked gene from a father to his grandson through his carrier daughter (or mother to son to granddaughter). [1 Mark]\n• Cross: Carrier female (X^H X^h) x Normal male (X^H Y):\n- Offspring: X^H X^H (normal girl, 25%), X^H X^h (carrier girl, 25%), X^H Y (normal boy, 25%), X^h Y (haemophilic boy, 25%). [1.5 Marks]\n• Result: 50% of the sons are haemophilic, while daughters are either normal or carriers. [0.5 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the concept of Pleiotropy with the help of a suitable human genetic disorder. [3 Marks]",
        "answer": "Pleiotropy mechanism in Phenylketonuria.",
        "explanation": "Pleiotropy mechanism in Phenylketonuria.\n\nMarking Scheme:\n• Definition: The phenomenon in which a single gene influences multiple unrelated phenotypic traits is called pleiotropy. [1 Mark]\n• Human Example (Phenylketonuria): Mutation in the gene coding for the enzyme phenylalanine hydroxylase. [1 Mark]\n• Multiple Phenotypic Manifestations: Inability to convert phenylalanine to tyrosine causes accumulation of phenylpyruvate, manifesting clinically as: (1) Severe mental retardation, (2) Reduction in hair pigmentation, and (3) Hypopigmentation of the skin. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Polygenic Inheritance? How does it differ from Monogenic Mendelian Inheritance? Give an example. [3 Marks]",
        "answer": "Polygenic inheritance definition, additive effect, and skin color example.",
        "explanation": "Polygenic inheritance definition, additive effect, and skin color example.\n\nMarking Scheme:\n• Polygenic Inheritance: Traits controlled by three or more pairs of non-allelic genes where each dominant allele has an additive (cumulative) effect on the phenotype, resulting in continuous variation. [1 Mark]\n• Difference from Monogenic: Monogenic inheritance involves distinct, discontinuous phenotypic categories (e.g., Tall vs Dwarf, 3:1); Polygenic inheritance shows a continuous gradation resembling a bell-shaped curve. [1 Mark]\n• Example: Human skin color controlled by three genes (A, B, C). AABBCC is darkest black, aabbcc is lightest albino, and AaBbCc has intermediate mulatto skin color. [1 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) State the Chromosomal Theory of Inheritance and explain how it parallels Mendelian genetics.\n(b) Why did T.H. Morgan choose Drosophila melanogaster for experimental verification of this theory? [5 Marks]",
        "answer": "Sutton-Boveri Chromosomal Theory, parallelism, and Morgan's Drosophila model.",
        "explanation": "Sutton-Boveri Chromosomal Theory, parallelism, and Morgan's Drosophila model.\n\nMarking Scheme:\n(a) Chromosomal Theory & Parallelism [3 Marks]:\n• Proposed by Walter Sutton and Theodor Boveri (1902). Stated that chromosomes are the physical carriers of Mendelian factors (genes). [1 Mark]\n• Parallelism points:\n1. Both chromosomes and genes occur in pairs in diploid cells. [0.5 Mark]\n2. Both segregate at the time of gamete formation so that only one member of each pair enters a gamete. [0.75 Mark]\n3. Independent pairs segregate independently of other pairs during meiosis / fertilization. [0.75 Mark]\n(b) Why Drosophila was chosen [2 Marks, 0.5 Mark each for any four]:\n• Cultured on simple synthetic medium in the lab.\n• Short life cycle of about 2 weeks.\n• Single mating yields hundreds of offspring.\n• Clear sexual dimorphism (males smaller, females larger).\n• Abundant hereditary morphological variations visible under low-power dissecting microscope."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Differentiate between Linkage and Recombination with reference to Morgan's dihybrid crosses in Drosophila.\n(b) In Morgan's experiment, Cross A showed 1.3% recombinants while Cross B showed 37.2% recombinants. Explain the reason behind this significant difference. [5 Marks]",
        "answer": "Linkage vs Recombination, Morgan's Drosophila crosses A and B.",
        "explanation": "Linkage vs Recombination, Morgan's Drosophila crosses A and B.\n\nMarking Scheme:\n(a) Linkage vs Recombination [2.5 Marks]:\n• Linkage: Physical association and close proximity of two or more genes located on the same chromosome, causing them to be co-inherited without separating during meiosis. [1.25 Marks]\n• Recombination: Generation of non-parental gene combinations in offspring caused by crossing-over between non-sister chromatids of homologous chromosomes during prophase-I of meiosis. [1.25 Marks]\n(b) Analysis of Cross A vs Cross B [2.5 Marks]:\n• Cross A (yellow body 'y' and white eye 'w'): The two genes are situated extremely close to each other on the X- chromosome. Because they are tightly linked, crossing-over occurs very rarely, resulting in 98.7% parental types and only\n1.3% recombinants. [1.25 Marks]\n• Cross B (white eye 'w' and miniature wing 'm'): These genes are located much further apart on the X-chromosome. Looser linkage allows higher crossing-over frequency, yielding 37.2% recombinants and 62.8% parental types. [1.25 Marks]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the mechanism of sex determination in: (i) Humans, (ii) Birds, (iii) Grasshoppers.\n(b) Which parent determines the sex of the offspring in humans and in birds? Justify. [5 Marks]",
        "answer": "Sex determination mechanisms: XX-XY, ZZ-ZW, XX-XO, and parental heterogamety.",
        "explanation": "Sex determination mechanisms: XX-XY, ZZ-ZW, XX-XO, and parental heterogamety.\n\nMarking Scheme:\n(a) Mechanisms [3 Marks, 1 Mark each]:\n• (i) Humans (XX-XY): Female is homogametic (XX, producing only X-eggs); Male is heterogametic (XY, producing 50% X- sperms and 50% Y-sperms). Fusion with Y yields male (XY); fusion with X yields female (XX). [1 Mark]\n• (ii) Birds (ZZ-ZW): Male is homogametic (ZZ, producing all Z-sperms); Female is heterogametic (ZW, producing 50% Z-eggs and 50% W-eggs). Fusion of Z-sperm with W-egg produces female (ZW); with Z-egg produces male (ZZ). [1 Mark]\n• (iii) Grasshoppers (XX-XO): Female has two X-chromosomes (XX); Male has only one X-chromosome (XO). Males produce two types of sperms: 50% with X, 50% with no sex chromosome (O). [1 Mark]\n(b) Sex determination responsibility [2 Marks]:\n• In humans: The father determines sex because sperm can carry either X or Y, whereas mother always contributes X. [1 Mark]\n• In birds: The mother (female bird) determines sex because female is heterogametic (ZW) and produces two types of eggs, whereas male always contributes Z. [1 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the inheritance of Haemophilia and Colour-blindness in humans. Why are women usually carriers and very rarely affected by these disorders? Under what genetic condition can a female become haemophilic? [5 Marks]",
        "answer": "X-linked recessive inheritance, female carriers, and condition for affected female.",
        "explanation": "X-linked recessive inheritance, female carriers, and condition for affected female.\n\nMarking Scheme:\n• X-linked Recessive Mechanism: Both haemophilia and colour-blindness genes reside on the X-chromosome and are recessive to the normal wild-type alleles. [1 Mark]\n• Hemizygosity in Males: Males have only one X chromosome (XY). If they inherit a single mutant allele from their mother (X^h Y or X^c Y), they inevitably suffer from the disorder. [1.5 Marks]\n• Carrier status of Females: Females have two X chromosomes (XX). A single mutant allele is masked by the dominant normal allele on the second X chromosome (X^H X^h), making her a phenotypically normal carrier. [1.5 Marks]\n• Condition for an Affected Female: A female can be haemophilic (X^h X^h) only if her mother is at least a carrier (X^H X^h) and her father is haemophilic (X^h Y). Such a condition is extraordinarily rare because haemophilic males historically rarely survived to reproductive age. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Aneuploidy? How does it differ from Polyploidy?\n(b) Describe the cause, karyotype, and four symptoms of Down syndrome. [5 Marks]",
        "answer": "Aneuploidy vs Polyploidy; Down syndrome etiology and clinical features.",
        "explanation": "Aneuploidy vs Polyploidy; Down syndrome etiology and clinical features.\n\nMarking Scheme:\n(a) Aneuploidy vs Polyploidy [2 Marks]:\n• Aneuploidy: Gain or loss of one or two individual chromosomes due to failure of chromatid segregation during cell division (e.g., 2n + 1, 2n - 1). [1 Mark]\n• Polyploidy: Gain of an entire extra set of chromosomes due to failure of cytokinesis after telophase (e.g., 3n, 4n). Common in plants, lethal in higher animals. [1 Mark]\n(b) Down Syndrome [3 Marks]:\n• Cause & Karyotype: Trisomy of chromosome 21 caused by non-disjunction during oogenesis; karyotype has 47 chromosomes (45 autosomes + XX/XY). [1 Mark]\n• Clinical symptoms (0.5 Mark each for any four):\n1. Short stature with small rounded head.\n2. Broad flat face with upward slanting eyes and epicanthic fold.\n3. Characteristic furrowed tongue and partially open mouth.\n4. Broad palm with a single distinctive 'simian' crease.\n5. Physical, psychomotor, and mental retardation with congenital heart defects. [2 Marks]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A normal couple has a child suffering from Thalassemia.\n(a) What is the mode of inheritance of Thalassemia?\n(b) What are the genotypes of the parents?\n(c) Differentiate between alpha-Thalassemia and beta-Thalassemia on the basis of affected globin chain and chromosomal genes involved. [5 Marks]",
        "answer": "Thalassemia genetics, parental genotypes, alpha vs beta thalassemia.",
        "explanation": "Thalassemia genetics, parental genotypes, alpha vs beta thalassemia.\n\nMarking Scheme:\n(a) Mode of Inheritance [1 Mark]:\n• Autosomal recessive Mendelian disorder. [1 Mark]\n(b) Parental Genotypes [1 Mark]:\n• Both parents must be heterozygous carriers (carriers of the mutant thalassemia allele). [1 Mark]\n(c) Alpha vs Beta Thalassemia [3 Marks]:\n• Alpha-Thalassemia: Production of alpha-globin chains is reduced. Controlled by two closely linked genes, HBA1 and HBA2, on chromosome 16 of each parent. Severity depends on how many of the 4 alleles are deleted/mutated. [1.5 Marks]\n• Beta-Thalassemia: Production of beta-globin chains is reduced. Controlled by a single gene, HBB, on chromosome 11 of each parent. Mutation of one or both alleles leads to beta-thalassemia minor or major (Cooley's anemia). [1.5 Marks]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Pedigree Analysis? Mention two significant utilities of constructing pedigree charts in human genetics.\n(b) Draw standard symbols used in pedigree analysis for: (i) Male, (ii) Female, (iii) Mating, (iv) Affected individual, (v) Consanguineous mating, (vi) Sex unspecified. [5 Marks]",
        "answer": "Pedigree analysis definition, utility, and standard symbols.",
        "explanation": "Pedigree analysis definition, utility, and standard symbols.\n\nMarking Scheme:\n(a) Definition & Utilities [2 Marks]:\n• Definition: The study of inheritance of traits over several generations in human families represented in the form of a family tree diagram. [1 Mark]\n• Utilities: (1) Helps trace the inheritance of specific Mendelian disorders and determine whether a trait is dominant, recessive, autosomal, or sex-linked. (2) Enables genetic counselors to predict the risk of genetic diseases in prospective offspring of carriers. [1 Mark]\n(b) Pedigree Symbols [3 Marks, 0.5 Mark each]:\n• (i) Square = Male\n• (ii) Circle = Female\n• (iii) Square joined by horizontal line to Circle = Mating\n• (iv) Solid shaded square or circle = Affected individual\n• (v) Double horizontal lines between square and circle = Consanguineous mating\n• (vi) Diamond shape = Sex unspecified."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A homozygous purple-flowered, long-pollen sweet pea plant was crossed with a red-flowered, round-pollen plant. The F1 plants were all purple with long pollen. When F1 was test crossed, the following progeny was obtained:\n- Purple, Long: 44%\n- Purple, Round: 6%\n- Red, Long: 6%\n- Red, Round: 44%\n(a) Does this data follow Mendel's Law of Independent Assortment? Explain.\n(b) Calculate the recombination frequency between flower colour and pollen shape genes.\n(c) What phenomenon explains this departure from expected Mendelian ratios? [5 Marks]",
        "answer": "Linkage analysis, recombinant calculation, and deviation from independent assortment.",
        "explanation": "Linkage analysis, recombinant calculation, and deviation from independent assortment.\n\nMarking Scheme:\n(a) Deviation from Independent Assortment [2 Marks]:\n• No, it deviates sharply. If genes assorted independently, a test cross would yield a 1:1:1:1 phenotypic ratio (25% each). Here, parental classes total 88% (44% + 44%) and recombinant classes total only 12% (6% + 6%). [2 Marks]\n(b) Recombination Frequency Calculation [1.5 Marks]:\n• Recombination frequency = (Total Recombinants / Total Progeny) x 100\n• Recombination frequency = (6 + 6) / 100 x 100 = 12%. [1.5 Marks]\n(c) Phenomenon [1.5 Marks]:\n• Incomplete Linkage: The gene for flower colour and pollen shape are located on the same homologous chromosome pair (linked genes) at a distance of 12 map units (centimorgans), tending to stay together during meiosis. [1.5 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Phenylketonuria (PKU) is an inherited metabolic disease caused by a deficiency of the liver enzyme phenylalanine hydroxylase. If undetected at birth, the newborn suffers irreversible intellectual disability. However, early screening and a special diet low in phenylalanine allow normal neurological development.'\n(a) State the mode of inheritance and chromosomal location of the PKU gene.\n(b) Explain why phenylpyruvic acid is excreted in urine in PKU patients.\n(c) Why is PKU cited as a classical example of Pleiotropy? [5 Marks]",
        "answer": "PKU genetics, renal threshold mechanism, and pleiotropic effects.",
        "explanation": "PKU genetics, renal threshold mechanism, and pleiotropic effects.\n\nMarking Scheme:\n(a) Inheritance & Location [1.5 Marks]:\n• Autosomal recessive Mendelian disorder; gene is located on human chromosome 12. [1.5 Marks]\n(b) Renal excretion explanation [1.5 Marks]:\n• Due to lack of phenylalanine hydroxylase, phenylalanine accumulates and is converted into phenylpyruvic acid and phenylketones. Because the kidney has poor tubular reabsorption capacity for phenylpyruvic acid, it overflows and is excreted in large amounts in urine. [1.5 Marks]\n(c) Why Pleiotropic [2 Marks]:\n• A single gene mutation affects multiple phenotypic traits: (1) Impaired brain development and mental retardation, (2) Reduced hair pigmentation, and (3) Hypopigmentation of the skin, demonstrating pleiotropy. [2 Marks]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "In a cross between two pea plants heterozygous for round and yellow seeds (RrYy x RrYy):\n(a) Draw a Punnett square showing the 16 zygotic combinations.\n(b) Write the phenotypic ratio of the F2 generation.\n(c) How many of the 16 genotypes are:\n(i) Homozygous for both dominant traits,\n(ii) Homozygous for both recessive traits,\n(iii) Heterozygous for both traits? [5 Marks]",
        "answer": "Dihybrid F2 Punnett square, 9:3:3:1 ratio, and genotypic counts.",
        "explanation": "Dihybrid F2 Punnett square, 9:3:3:1 ratio, and genotypic counts.\n\nMarking Scheme:\n(a) Punnett Square [2 Marks]: 4x4 grid with gametes RY, Ry, rY, ry on both axes showing all 16 zygotic genotypes correctly. [2 Marks]\n(b) Phenotypic Ratio [1 Mark]:\n• 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green. [1 Mark]\n(c) Genotypic Counts [2 Marks]:\n• (i) Homozygous for both dominant traits (RRYY) = 1/16 [0.5 Mark]\n• (ii) Homozygous for both recessive traits (rryy) = 1/16 [0.5 Mark]\n• (iii) Heterozygous for both traits (RrYy) = 4/16 [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "unit_num": 7,
      "title": "Molecular Basis of Inheritance",
      "unit_title": "Genetics and Evolution",
      "weightage_unit": "20 Marks (Unit VII)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a double-stranded B-DNA molecule, the pitch of the helix and the distance between two consecutive base pairs are respectively:",
        "options": [
          "(a) 3.4 nm and 0.34 nm",
          "(b) 0.34 nm and 3.4 nm",
          "(c) 2.0 nm and 0.2 nm",
          "(d) 34 nm and 3.4 nm"
        ],
        "answer": "(a) 3.4 nm and 0.34 nm",
        "explanation": "According to the Watson and Crick double-helix model of B-DNA, the pitch of the helix is 3.4 nm (34 Angstroms), and there are roughly 10 base pairs per turn. Consequently, the distance between two consecutive base pairs is 3.4 nm / 10 =\n0.34 nm (3.4 Angstroms)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "If a double-stranded DNA has 20 percent cytosine, what will be the percentage of adenine in this DNA sample according to Chargaff's rules?",
        "options": [
          "(a) 20%",
          "(b) 30%",
          "(c) 40%",
          "(d) 60%"
        ],
        "answer": "(b) 30%",
        "explanation": "According to Chargaff's rule, A = T and G = C. If Cytosine (C) = 20%, then Guanine (G) = 20%. Together, G + C = 40%. The remaining 60% is shared equally between Adenine and Thymine (A + T = 60%). Therefore, Adenine (A) = 60% / 2 = 30%."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A typical eukaryotic nucleosome contains how many base pairs of DNA helix wrapped around a histone octamer?",
        "options": [
          "(a) 100 bp",
          "(b) 200 bp",
          "(c) 300 bp",
          "(d) 400 bp"
        ],
        "answer": "(b) 200 bp",
        "explanation": "A typical nucleosome contains 200 bp of DNA helix wrapped around the core of eight histone molecules (histone octamer: two copies each of H2A, H2B, H3, and H4). Histone H1 binds to the linker DNA."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following statements correctly distinguishes Euchromatin from Heterochromatin?",
        "options": [
          "(a) Euchromatin is densely packed, stains dark, and is transcriptionally inactive",
          "(b) Euchromatin is loosely packed, stains light, and is transcriptionally active",
          "(c) Heterochromatin is loosely packed and replicates early in S phase",
          "(d) Both euchromatin and heterochromatin have identical transcriptional activity"
        ],
        "answer": "(b) Euchromatin is loosely packed, stains light, and is transcriptionally active",
        "explanation": "In a typical eukaryotic nucleus, euchromatin refers to loosely packed chromatin regions that stain light and are transcriptionally active. Heterochromatin is more densely packed, stains dark, and is transcriptionally inactive/silent."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In Frederick Griffith's transforming experiment (1928), mice died when injected with a mixture of:",
        "options": [
          "(a) Heat-killed S-strain + Live R-strain bacteria",
          "(b) Heat-killed R-strain + Live R-strain bacteria",
          "(c) Heat-killed S-strain alone",
          "(d) Live R-strain alone"
        ],
        "answer": "(a) Heat-killed S-strain + Live R-strain bacteria",
        "explanation": "Mice injected with heat-killed S-strain died when mixed with living R-strain because the living R-strain bacteria transformed into virulent smooth S-strain by picking up the 'transforming principle' from the heat-killed S-strain."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Oswald Avery, Colin MacLeod, and Maclyn McCarty (1944) determined that the biochemical nature of the transforming principle was DNA because transformation was inhibited ONLY by:",
        "options": [
          "(a) Proteases",
          "(b) RNases",
          "(c) DNases",
          "(d) Lipases"
        ],
        "answer": "(c) DNases",
        "explanation": "Avery, MacLeod, and McCarty purified proteins, RNA, and DNA from heat-killed S cells. Digestion with proteases and RNase did not affect transformation, but digestion with DNase completely inhibited transformation, proving DNA was the hereditary material."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Alfred Hershey and Martha Chase (1952) used radioactive isotopes of which two elements to definitively prove that DNA is the genetic material in bacteriophage T2?",
        "options": [
          "(a) 14C and 15N",
          "(b) 32P (for DNA) and 35S (for protein capsule)",
          "(c) 3H and 14C",
          "(d) 15N and 31P"
        ],
        "answer": "(b) 32P (for DNA) and 35S (for protein capsule)",
        "explanation": "Bacteriophages grown on radioactive phosphorus (32P) had radioactive DNA (because DNA contains phosphorus but no sulfur). Phages grown on radioactive sulfur (35S) had radioactive protein coats (because proteins contain sulfur but no phosphorus)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Matthew Meselson and Franklin Stahl (1958) demonstrated the semi-conservative replication of DNA in Escherichia coli using:",
        "options": [
          "(a) Tritiated thymidine and autoradiography",
          "(b) 15NH4Cl and CsCl density gradient centrifugation",
          "(c) X-ray crystallography",
          "(d) Southern blotting"
        ],
        "answer": "(b) 15NH4Cl and CsCl density gradient centrifugation",
        "explanation": "Meselson and Stahl grew E. coli in a medium containing heavy isotope of nitrogen (15NH4Cl), followed by transfer to 14N medium. Density gradient centrifugation in Cesium Chloride (CsCl) proved that after one generation (20 min), all DNA was of intermediate hybrid density (15N-14N), confirming semi-conservative replication."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During DNA replication, the discontinuously synthesized Okazaki fragments on the lagging template strand are joined together by the enzyme:",
        "options": [
          "(a) DNA Helicase",
          "(b) DNA Topoisomerase",
          "(c) DNA Ligase",
          "(d) RNA Primase"
        ],
        "answer": "(c) DNA Ligase",
        "explanation": "On the lagging template strand (3' -> 5' polarity away from the replication fork), DNA is synthesized discontinuously as small segments called Okazaki fragments. These fragments are later joined into a continuous strand by DNA ligase."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "If the sequence of the coding strand of a transcription unit is 5'-ATGCATGCATGC-3', what will be the sequence of the corresponding mRNA?",
        "options": [
          "(a) 5'-AUGCAUGCAUGC-3'",
          "(b) 3'-UACGUACGUACG-5'",
          "(c) 5'-TACGTACGTACG-3'",
          "(d) 3'-AUGCAUGCAUGC-5'"
        ],
        "answer": "(a) 5'-AUGCAUGCAUGC-3'",
        "explanation": "The mRNA transcript has the identical sequence and polarity as the coding strand (5' to 3'), with the single difference that Thymine (T) in DNA is replaced by Uracil (U) in RNA. Hence, 5'-ATGCATGCATGC-3' becomes 5'-AUGCAUGCAUGC-3'."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In prokaryotes, the initiation factor that binds to the core RNA polymerase enzyme to confer promoter specificity for transcription initiation is:",
        "options": [
          "(a) Rho factor (ρ)",
          "(b) Sigma factor (σ)",
          "(c) TATA-binding protein",
          "(d) Release factor"
        ],
        "answer": "(b) Sigma factor (σ)",
        "explanation": "In prokaryotes, the RNA polymerase holoenzyme consists of core enzyme (alpha2 beta beta' omega) and a transient initiation factor called Sigma factor (σ). Sigma factor recognizes and binds to the promoter sequence, initiating transcription. Rho factor terminates transcription."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In eukaryotic post-transcriptional processing, capping of hnRNA involves the addition of an unusual nucleotide at the 5'-end, namely:",
        "options": [
          "(a) Polyadenylate residues",
          "(b) Methyl guanosine triphosphate",
          "(c) Deoxythymidine monophosphate",
          "(d) Ethyl cytidine triphosphate"
        ],
        "answer": "(b) Methyl guanosine triphosphate",
        "explanation": "In capping, an unusual nucleotide (methyl guanosine triphosphate / 7-mG) is added to the 5'-end of hnRNA. In tailing, adenylate residues (200–300) are added at 3'-end in a template-independent manner."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Splicing of eukaryotic pre-mRNA (hnRNA) is necessary because eukaryotic genes are split genes containing:",
        "options": [
          "(a) Exons (non-coding) and Introns (coding)",
          "(b) Exons (coding) interrupted by Introns (non-coding intervening sequences)",
          "(c) Polycistronic operons",
          "(d) Only promoter and terminator sequences"
        ],
        "answer": "(b) Exons (coding) interrupted by Introns (non-coding intervening sequences)",
        "explanation": "Eukaryotic structural genes are split genes: coding sequences (exons) are interrupted by non-coding intervening sequences (introns). During splicing, introns are removed and exons are joined in a defined order by spliceosomes."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following codons has a dual function, serving as an initiation codon during translation as well as coding for the amino acid Methionine?",
        "options": [
          "(a) UAA",
          "(b) UAG",
          "(c) AUG",
          "(d) UGA"
        ],
        "answer": "(c) AUG",
        "explanation": "AUG has dual functions: it acts as the universal initiator codon that starts polypeptide synthesis and also codes for the amino acid Methionine (Met)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following codons represent stop (nonsense / termination) codons that do not code for any amino acid and cause release of the polypeptide chain?",
        "options": [
          "(a) UAA, UAG, UGA",
          "(b) AUG, GUG, UUG",
          "(c) UUU, UUC, UUA",
          "(d) CAA, CAG, CGA"
        ],
        "answer": "(a) UAA, UAG, UGA",
        "explanation": "Three codons: UAA (ochre), UAG (amber), and UGA (opal) do not specify any amino acid and function as stop/termination codons during translation."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The degenerate nature of the genetic code means that:",
        "options": [
          "(a) One codon specifies more than one amino acid",
          "(b) Some amino acids are coded by more than one codon",
          "(c) The code is read in a non-punctuated continuous fashion",
          "(d) The code is universal from bacteria to humans"
        ],
        "answer": "(b) Some amino acids are coded by more than one codon",
        "explanation": "Degeneracy of the genetic code means that since there are 61 codons specifying only 20 standard amino acids, most amino acids (like Leucine, Serine, Arginine) are coded by more than one codon."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The amino acid acceptor arm of a mature tRNA molecule has which invariant trinucleotide sequence at its 3'-hydroxyl terminus?",
        "options": [
          "(a) 5'-AUG-3'",
          "(b) 5'-CCA-3'",
          "(c) 5'-UAA-3'",
          "(d) 5'-GGC-3'"
        ],
        "answer": "(b) 5'-CCA-3'",
        "explanation": "The amino acid acceptor stem of all mature tRNA molecules ends in the invariant sequence 5'-CCA-3' at the 3' terminus, to which the cognate amino acid is covalently attached during aminoacylation."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During translation, the enzyme peptidyl transferase that catalyzes peptide bond formation between amino acids is chemically:",
        "options": [
          "(a) A ribosomal protein",
          "(b) 23S rRNA in bacteria (a catalytic RNA / ribozyme)",
          "(c) DNA polymerase I",
          "(d) Aminoacyl-tRNA synthetase"
        ],
        "answer": "(b) 23S rRNA in bacteria (a catalytic RNA / ribozyme)",
        "explanation": "In bacteria, the formation of peptide bond between amino acids during translation is catalyzed by peptidyl transferase, which is an RNA enzyme (ribozyme) constituted by the 23S rRNA of the 50S large ribosomal subunit."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the Lac Operon of Escherichia coli, the 'z' structural gene encodes:",
        "options": [
          "(a) Permease",
          "(b) Beta-galactosidase",
          "(c) Transacetylase",
          "(d) Repressor protein"
        ],
        "answer": "(b) Beta-galactosidase",
        "explanation": "The structural genes of the lac operon encode: gene z -> beta-galactosidase (hydrolyzes lactose into galactose and glucose); gene y -> permease (increases permeability of the cell to beta-galactosides); gene a -> transacetylase."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the presence of lactose (inducer), the lac operon is switched 'ON' because:",
        "options": [
          "(a) Lactose binds to RNA polymerase and accelerates transcription",
          "(b) Lactose (allolactose) binds to the repressor protein, inactivating it so it cannot bind to the operator",
          "(c) Lactose binds directly to the promoter region",
          "(d) Lactose degrades the regulatory gene"
        ],
        "answer": "(b) Lactose (allolactose) binds to the repressor protein, inactivating it so it cannot bind to the operator",
        "explanation": "Lactose (the inducer) binds to the repressor protein, inducing a conformational change that inactivates it. The inactive repressor fails to bind the operator, allowing RNA polymerase access to the promoter to transcribe the z, y, and a genes."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is NOT a salient feature of the Human Genome Project (HGP)?",
        "options": [
          "(a) The human genome contains 3164.7 million nucleotide base pairs",
          "(b) Less than 2 percent of the genome codes for proteins",
          "(c) Chromosome 1 has the fewest genes (231) while the Y chromosome has the most (2968)",
          "(d) Repeated sequences make up very large portion of the human genome"
        ],
        "answer": "(c) Chromosome 1 has the fewest genes (231) while the Y chromosome has the most (2968)",
        "explanation": "Statement (c) is false/inverted: Chromosome 1 has the MOST genes (2968) and the Y chromosome has the FEWEST genes (231)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The technique of DNA fingerprinting was originally developed by which British geneticist in 1984?",
        "options": [
          "(a) Francis Crick",
          "(b) Alec Jeffreys",
          "(c) Kary Mullis",
          "(d) Frederick Sanger"
        ],
        "answer": "(b) Alec Jeffreys",
        "explanation": "The technique of DNA fingerprinting was developed by Sir Alec Jeffreys in 1984. He used a satellite DNA as probe that shows very high degree of polymorphism, termed Variable Number of Tandem Repeats (VNTR)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Variable Number of Tandem Repeats (VNTRs) used as probes in DNA fingerprinting belong to a class of satellite DNA known as:",
        "options": [
          "(a) Micro-satellites",
          "(b) Mini-satellites",
          "(c) Macro-satellites",
          "(d) Ribosomal DNA"
        ],
        "answer": "(b) Mini-satellites",
        "explanation": "A VNTR is a mini-satellite. It is a small DNA sequence arranged tandemly in many copy numbers (from 0.1 to 20 kb). The copy number varies from chromosome to chromosome and individual to individual, giving high polymorphism."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the Sanger method of automated DNA sequencing, termination of growing nucleotide chains is achieved by incorporating:",
        "options": [
          "(a) Ribonucleoside triphosphates",
          "(b) Dideoxynucleoside triphosphates (ddNTPs)",
          "(c) Ethidium bromide",
          "(d) Restriction endonucleases"
        ],
        "answer": "(b) Dideoxynucleoside triphosphates (ddNTPs)",
        "explanation": "The Sanger chain-termination method uses 2',3'-dideoxynucleoside triphosphates (ddNTPs), which lack the 3'-OH group required for phosphodiester bond formation, resulting in site-specific termination."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What are Single Nucleotide Polymorphisms (SNPs) and roughly how many locations in the human genome harbor SNPs?",
        "options": [
          "(a) 1.4 million locations",
          "(b) 140 million locations",
          "(c) 14,000 locations",
          "(d) 3.1 billion locations"
        ],
        "answer": "(a) 1.4 million locations",
        "explanation": "Scientists have identified about 1.4 million locations where single-base DNA differences (SNPs - single nucleotide polymorphisms, pronounced 'snips') occur in humans. This information revolutionizes tracing human evolutionary history and locating disease-associated genes. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): DNA is a better and more chemically stable genetic material than RNA.\nReason (R): The 2'-OH group present on ribose in RNA makes it labile, reactive, and catalytic, whereas DNA has 2'-deoxyribose and thymine.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) correctly explains (A). RNA contains 2'-OH group which makes it reactive and easily degradable. DNA lacks 2'-OH and possesses thymine (5-methyluracil) instead of uracil, imparting superior structural stability."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Replication of DNA is continuous on one strand and discontinuous on the other strand.\nReason (R): DNA-dependent DNA polymerase catalyzes polymerization strictly in the 5' -> 3' direction.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Because DNA polymerase can add nucleotides only to the 3'- OH end (synthesizing 5' -> 3'), the strand with 3' -> 5' template is copied continuously (leading strand), while the opposite 5' -> 3' template strand is copied discontinuously as Okazaki fragments (lagging strand)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): In eukaryotes, transcription and translation cannot take place simultaneously in the same compartment.\nReason (R): Eukaryotic cells possess a distinct nuclear membrane separating transcription in the nucleus from translation in the cytoplasm.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). In prokaryotes, lack of nuclear envelope allows translation to begin before transcription is complete (coupled transcription-translation). In eukaryotes, pre-mRNA is transcribed, spliced, capped, and polyadenylated inside the nucleus before export to the cytoplasm for translation."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The genetic code is unambiguous and universal.\nReason (R): One codon codes for only one amino acid, and from bacteria to humans, UUU codes for phenylalanine.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) defines unambiguous (one codon specifies only one amino acid) and universal (same codon translates to same amino acid across all living taxa)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The Lac Operon is an example of negative inducible regulation of gene expression.\nReason (R): In the presence of glucose, the lac operon is constitutively switched on at maximum levels.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(c) (A) is true but (R) is false",
        "explanation": "Assertion is true: Lac operon is regulated negatively by the repressor protein and is induced in the presence of lactose. Reason is false: When glucose is present, catabolite repression occurs (cAMP levels are low, CAP cannot bind), shutting down the lac operon because glucose is the preferred carbon source. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a schematic diagram of a nucleosome and explain how roughly 2.2 metres of DNA is packaged inside a mammalian cell nucleus measuring 10^-6 m. [3 Marks]",
        "answer": "Nucleosome diagram and DNA packaging calculation.",
        "explanation": "Nucleosome diagram and DNA packaging calculation.\n\nMarking Scheme:\n• Calculation: Total bp in human diploid cell = 6.6 x 10^9 bp. Distance between bp = 0.34 x 10^-9 m. Total length = 6.6 x 10^9 x 0.34 x 10^-9 m = 2.24 m. [1 Mark]\n• Packaging Mechanism: Positively charged basic histone proteins (rich in lysine and arginine) form an octamer core (H2A, H2B, H3, H4)2. Negatively charged DNA (due to phosphate groups) wraps around the octamer to form nucleosomes (beads-on-a-string, ~200 bp each). [1 Mark]\n• Higher Order Folding: Nucleosomes condense into 30 nm chromatin fibers, looped into chromosomes facilitated by Non- Histone Chromosomal (NHC) proteins. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe Hershey and Chase's bacteriophage T2 experiment. How did they conclude that DNA, not protein, enters the bacterial cell? [3 Marks]",
        "answer": "Hershey-Chase blender experiment: Infection, Blending, Centrifugation.",
        "explanation": "Hershey-Chase blender experiment: Infection, Blending, Centrifugation.\n\nMarking Scheme:\n• Radioactive Labeling: Phages labeled with 35S (incorporated into protein coat) and 32P (incorporated into DNA). [1 Mark]\n• Experimental Steps: (1) Infection of E. coli, (2) Blending (shearing viral coats off bacteria in kitchen blender), (3) Centrifugation (pelleting heavy bacteria, leaving light viral coats in supernatant). [1 Mark]\n• Conclusion: Bacteria infected with 32P showed radioactivity in bacterial pellet; bacteria infected with 35S had radioactivity only in supernatant. Proved that DNA, not protein, entered bacteria as the genetic material. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of the following enzymes in DNA replication: (i) DNA Helicase, (ii) DNA Polymerase III, (iii) DNA Ligase. [3 Marks]",
        "answer": "Functions of helicase, DNA polymerase, and ligase.",
        "explanation": "Functions of helicase, DNA polymerase, and ligase.\n\nMarking Scheme (1 Mark each):\n(i) DNA Helicase: Unwinds the double-stranded DNA helix at the replication origin by breaking hydrogen bonds between complementary bases, creating a replication fork. [1 Mark]\n(ii) DNA Polymerase III: Catalyzes the 5' -> 3' polymerization of deoxynucleotides with extreme speed and fidelity, using single-stranded DNA as template. [1 Mark]\n(iii) DNA Ligase: Catalyzes the formation of phosphodiester bonds to seal nicks between adjacent Okazaki fragments on the lagging strand, forming a continuous DNA strand. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the three major post-transcriptional modifications that convert eukaryotic hnRNA into functional mature mRNA. [3 Marks]",
        "answer": "Splicing, Capping, and Tailing.",
        "explanation": "Splicing, Capping, and Tailing.\n\nMarking Scheme (1 Mark each):\n1. Splicing: Introns (non-coding intervening sequences) are excised and exons (coding sequences) are spliced together in a defined linear sequence by the spliceosome complex. [1 Mark]\n2. Capping: Addition of an unusual nucleotide, 7-methylguanosine triphosphate (7-mG cap), to the 5'-end of hnRNA to protect it from exonucleases and aid ribosome binding. [1 Mark]\n3. Tailing (Polyadenylation): 200–300 adenylate residues are added at the 3'-end in a template-independent manner (poly- A tail) to stabilize mRNA and assist nuclear export. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Enumerate any six salient properties of the universal genetic code. [3 Marks]",
        "answer": "Properties of genetic code.",
        "explanation": "Properties of genetic code.\n\nMarking Scheme (0.5 Mark each for any six):\n1. Triplet nature: 3 consecutive nitrogenous bases code for one amino acid (64 codons total).\n2. Degenerate: Most amino acids are specified by more than one codon.\n3. Unambiguous and Specific: One particular codon codes for only one amino acid.\n4. Commaless: Read continuously without punctuation or pauses.\n5. Universal: Same codon codes for the same amino acid across all organisms (e.g., UUU codes for Phe from bacteria to man).\n6. Initiator codon: AUG has dual function (initiates translation and codes for Methionine).\n7. Terminator codons: UAA, UAG, UGA signal termination of polypeptide synthesis."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat labelled diagram of a tRNA clover-leaf model and explain why it is described as an 'adaptor molecule'. [3 Marks]",
        "answer": "tRNA structure diagram and adaptor function.",
        "explanation": "tRNA structure diagram and adaptor function.\n\nMarking Scheme:\n• Clover-leaf Diagram [1.5 Marks]: Showing Amino acid acceptor stem (with 3'-CCA end), Anticodon loop (with 3 bases complementary to codon), D-loop (DHU loop), and T-psi-C loop. [1.5 Marks]\n• Adaptor Role [1.5 Marks]: Francis Crick postulated that amino acids have no structural affinity to read mRNA code directly. tRNA acts as an adaptor because: on one end it reads the codon on mRNA via its complementary anticodon, while on its other end (3'-CCA) it binds the corresponding specific amino acid. [1.5 Marks]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is meant by the 'charging' (aminoacylation) of tRNA? Why is it an essential preliminary step for protein synthesis? [3 Marks]",
        "answer": "Aminoacylation of tRNA and energy requirement for peptide bond.",
        "explanation": "Aminoacylation of tRNA and energy requirement for peptide bond.\n\nMarking Scheme:\n• Definition: Attachment of a specific amino acid to its cognate tRNA at the 3'-CCA end in the presence of ATP and the enzyme aminoacyl-tRNA synthetase is called charging of tRNA. [1.5 Marks]\n• Essentiality for Translation: Formation of peptide bond between two amino acids is thermodynamically unfavorable. Charging energizes the amino acid; when two charged tRNAs are brought close together on the ribosome, the energy drives spontaneous peptide bond formation. [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State the functions of: (i) Promoter, (ii) Structural gene, (iii) Terminator in a transcription unit. [3 Marks]",
        "answer": "Components of transcription unit.",
        "explanation": "Components of transcription unit.\n\nMarking Scheme (1 Mark each):\n(i) Promoter: DNA sequence located towards the 5'-end (upstream) of the coding strand that provides the binding site for RNA polymerase and determines which strand serves as template. [1 Mark]\n(ii) Structural gene: DNA segment flanked by promoter and terminator that is transcribed into RNA (monocistronic in eukaryotes, polycistronic in prokaryotes). [1 Mark]\n(iii) Terminator: DNA sequence located towards the 3'-end (downstream) of coding strand that signals the release of RNA polymerase and termination of transcription. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Expressed Sequence Tags (ESTs) and Sequence Annotation methodologies used in the Human Genome Project. [3 Marks]",
        "answer": "Comparison between ESTs and Sequence Annotation.",
        "explanation": "Comparison between ESTs and Sequence Annotation.\n\nMarking Scheme:\n• Expressed Sequence Tags (ESTs): A targeted approach focused solely on identifying and sequencing all the genes that are expressed as RNA (coding sequences). [1.5 Marks]\n• Sequence Annotation: The blind, comprehensive approach of sequencing the entire genome (both coding and non- coding sequences), and subsequently assigning functions to different regions using bioinformatics tools. [1.5 Marks]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are VNTRs? Explain their significance in forensic DNA fingerprinting. [3 Marks]",
        "answer": "VNTR definition, tandem repetition, and forensic utility.",
        "explanation": "VNTR definition, tandem repetition, and forensic utility.\n\nMarking Scheme:\n• Definition: Variable Number of Tandem Repeats (VNTRs) are short nucleotide sequences (10–100 bp) repeated tandemly in clusters (minisatellites) across chromosomes. [1 Mark]\n• Polymorphism: The number of repeats varies dramatically between unrelated individuals due to high mutation rates in non-coding DNA. [1 Mark]\n• Forensic Significance: Because an individual inherits maternal and paternal VNTR patterns that are unique (except in identical twins), matching VNTR band patterns from crime scene biological evidence (blood, semen, hair) definitively identifies the culprit or settles paternity disputes. [1 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the Meselson and Stahl experiment that proved the semi-conservative replication of DNA in E. coli.\n(b) What would be the proportion of hybrid (15N-14N) and light (14N-14N) DNA molecules after 80 minutes of growth in 14N medium? [5 Marks]",
        "answer": "Meselson-Stahl experiment procedure, CsCl gradient, and mathematical calculation.",
        "explanation": "Meselson-Stahl experiment procedure, CsCl gradient, and mathematical calculation.\n\nMarking Scheme:\n(a) Meselson and Stahl Experiment [3 Marks]:\n• E. coli grown in 15NH4Cl medium for several generations; all DNA became heavy (15N-15N). [0.5 Mark]\n• Transferred to normal 14NH4Cl medium. Samples extracted after generation 1 (20 min) and generation 2 (40 min). [0.5 Mark]\n• Extracted DNA separated on CsCl density gradient by equilibrium centrifugation. [0.5 Mark]\n• Results: After 20 min (Gen 1), 100% of DNA had an intermediate hybrid density (15N-14N). After 40 min (Gen 2), equal amounts of hybrid (15N-14N) and light (14N-14N) DNA were observed. Proved semi-conservative replication. [1.5 Marks]\n(b) 80-minute Calculation [2 Marks]:\n• Generation time of E. coli = 20 minutes. In 80 minutes, 4 generations (n = 4) occur. [0.5 Mark]\n• Total DNA molecules = 2^4 = 16 molecules. [0.5 Mark]\n• The two original 15N strands are conserved and form 2 hybrid (15N-14N) molecules. [0.5 Mark]\n• The remaining 14 molecules are light (14N-14N). Ratio = 2 Hybrid : 14 Light (or 1:7; 12.5% Hybrid and 87.5% Light). [0.5 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the operon concept with reference to the Lac Operon in E. coli.\n(b) Describe the molecular mechanism of regulation of the lac operon in the: (i) Absence of lactose (switched OFF), (ii) Presence of lactose (switched ON). [5 Marks]",
        "answer": "Lac operon components and regulation in absence/presence of inducer.",
        "explanation": "Lac operon components and regulation in absence/presence of inducer.\n\nMarking Scheme:\n(a) Operon Concept [1.5 Marks]:\n• An operon is a polycistronic transcriptional unit found in prokaryotes consisting of a regulator gene (i), promoter (P), operator (O), and structural genes (z, y, a) that function together in a metabolic pathway. [1.5 Marks]\n(b) Mechanism of Regulation [3.5 Marks]:\n• (i) In Absence of Lactose (Switched OFF) [1.75 Marks]:\n- The 'i' gene transcribes mRNA that produces an active repressor protein.\n- The repressor protein binds tightly to the operator region (O).\n- This physically blocks RNA polymerase from transcribing the structural genes z, y, a. Hence, enzyme synthesis is repressed (OFF). [1.75 Marks]\n• (ii) In Presence of Lactose (Switched ON) [1.75 Marks]:\n- Lactose/allolactose enters the bacterium via basal permease and acts as an inducer.\n- Inducer binds to the repressor protein, inducing conformational change and inactivating it.\n- Inactive repressor cannot bind operator; RNA polymerase binds promoter and transcribes z (beta-galactosidase), y\n(permease), and a (transacetylase), allowing lactose metabolism (ON). [1.75 Marks]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the step-by-step process of Translation in a prokaryote from initiation to termination.\n(b) What are Untranslated Regions (UTRs) on an mRNA? What is their function? [5 Marks]",
        "answer": "Translation steps (Initiation, Elongation, Termination) and role of UTRs.",
        "explanation": "Translation steps (Initiation, Elongation, Termination) and role of UTRs.\n\nMarking Scheme:\n(a) Translation Steps [3.5 Marks]:\n• Initiation: mRNA binds small ribosomal subunit (30S). Initiator tRNA (carrying fMet) binds AUG start codon via anticodon loop. Large ribosomal subunit (50S) joins to form functional 70S ribosome with P (peptidyl) and A (aminoacyl) sites. [1.25 Marks]\n• Elongation: Next aminoacyl-tRNA binds at A site. 23S rRNA peptidyl transferase forms peptide bond between amino acids. Ribosome moves codon by codon towards 3'-end (translocation). [1.25 Marks]\n• Termination: When a stop codon (UAA, UAG, UGA) enters A site, a release factor binds, halting elongation and releasing the polypeptide chain and ribosomal subunits. [1 Mark]\n(b) Untranslated Regions (UTRs) [1.5 Marks]:\n• Meaning: Sequences of mRNA flanking the coding region (present at both 5'-end before start codon and 3'-end after stop codon) that are not translated into proteins. [0.75 Mark]\n• Function: Essential for efficient translation process and mRNA stability/localization. [0.75 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Describe the process of transcription in eukaryotes. How does it differ from transcription in prokaryotes in terms of enzymes involved, post-transcriptional processing, and cellular location? [5 Marks]",
        "answer": "Eukaryotic transcription and comparison with prokaryotes.",
        "explanation": "Eukaryotic transcription and comparison with prokaryotes.\n\nMarking Scheme:\n(a) Eukaryotic Transcription Process [2.5 Marks]:\n• RNA Polymerase II binds TATA box promoter with transcription factors, synthesizing hnRNA 5' -> 3'. [1 Mark]\n• Post-transcriptional processing: Capping (7-mG at 5'), Tailing (poly-A at 3'), and Splicing of introns by spliceosomes. [1.5 Marks]\n(b) Differences between Eukaryotic and Prokaryotic Transcription [2.5 Marks]:\n• RNA Polymerases: Prokaryotes have a single RNA polymerase for all RNAs; Eukaryotes have 3 distinct RNA polymerases (Pol I for 28S, 18S, 5.8S rRNA; Pol II for mRNA/hnRNA; Pol III for tRNA, 5S rRNA, snRNA). [1 Mark]\n• Processing & Introns: Prokaryotic mRNA requires no processing (no introns); Eukaryotic hnRNA undergoes extensive splicing, capping, tailing. [0.75 Mark]\n• Cellular Compartment: Prokaryotic transcription occurs in cytoplasm (coupled with translation); eukaryotic transcription occurs inside nucleus. [0.75 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is DNA Fingerprinting? Explain the step-by-step procedure of this technique.\n(b) Mention two clinical and forensic applications of DNA profiling. [5 Marks]",
        "answer": "DNA fingerprinting technique steps and forensic applications.",
        "explanation": "DNA fingerprinting technique steps and forensic applications.\n\nMarking Scheme:\n(a) DNA Fingerprinting Technique Steps [3.5 Marks]:\n1. Isolation of high-molecular-weight genomic DNA from blood, hair root, or semen. [0.5 Mark]\n2. Digestion of DNA by restriction endonucleases at specific palindromic sequences. [0.5 Mark]\n3. Separation of resulting DNA fragments according to size by agarose gel electrophoresis. [0.5 Mark]\n4. Southern Blotting: Denaturation and transfer of separated DNA bands from agarose gel to synthetic nitrocellulose or nylon membrane. [0.75 Mark]\n5. Hybridization using labeled radioactive VNTR probes that bind complementary tandem repeats. [0.75 Mark]\n6. Detection of hybridized DNA bands by Autoradiography using X-ray film, producing dark band profiles (DNA fingerprint). [0.5 Mark]\n(b) Applications [1.5 Marks, 0.75 Mark each]:\n• Settling paternity disputes by matching parental VNTR bands with child.\n• Forensic identification of rapists, murderers, and unidentified victims of disasters."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Enumerate the salient goals, methodologies, and five major findings of the Human Genome Project (HGP). [5 Marks]",
        "answer": "Goals, methodology (ESTs/Annotation), and key findings of HGP.",
        "explanation": "Goals, methodology (ESTs/Annotation), and key findings of HGP.\n\nMarking Scheme:\n(a) Goals & Methodology [2 Marks]:\n• Goals: Sequence all 3 billion base pairs, identify all human genes (~20,000–25,000), store in databases, develop bioinformatics tools. [1 Mark]\n• Methodology: Used BAC and YAC vectors and automated Sanger sequencers. Employed ESTs (expressed genes) and Sequence Annotation (whole genome sequencing followed by functional assignment). [1 Mark]\n(b) Five Salient Findings [3 Marks, 0.6 Mark each]:\n1. Total size: 3164.7 million base pairs.\n2. Average gene size: 3000 bases; largest human gene is Dystrophin (2.4 million bases).\n3. Protein coding: Less than 2% of the genome codes for proteins.\n4. Identical DNA: 99.9% nucleotide bases are exactly identical in all human beings.\n5. Repetitive DNA & SNPs: Repeated sequences make up large portion; ~1.4 million locations contain single nucleotide polymorphisms (SNPs)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the chemical structure of a polynucleotide strand of DNA with a neat labelled diagram.\n(b) List three fundamental differences between DNA and RNA. [5 Marks]",
        "answer": "Polynucleotide chain diagram and DNA vs RNA comparison.",
        "explanation": "Polynucleotide chain diagram and DNA vs RNA comparison.\n\nMarking Scheme:\n(a) Polynucleotide Structure & Diagram [2.5 Marks]:\n• Nucleotide consists of: Deoxyribose sugar, nitrogenous base attached to C1' via N-glycosidic bond, and phosphate attached to C5'-OH via phosphoester bond. [1 Mark]\n• Nucleotides joined by 3'-5' phosphodiester bonds forming sugar-phosphate backbone. Polarity runs 5'-phosphate to 3'- hydroxyl. [Diagram 1.5 Marks]\n(b) DNA vs RNA Differences [2.5 Marks, 0.75 Mark each]:\n• Sugar: DNA contains 2'-deoxyribose; RNA contains ribose (with 2'-OH group).\n• Bases: DNA has Adenine, Guanine, Cytosine, and Thymine; RNA has Uracil instead of Thymine.\n• Strandedness & Stability: DNA is double-stranded and chemically stable; RNA is single-stranded, catalytic, and labile."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the role of the following in molecular biology:\n(a) Polynucleotide phosphorylase (Severo Ochoa enzyme)\n(b) Aminoacyl-tRNA synthetase\n(c) Spliceosome\n(d) Origin of replication (Ori)\n(e) Single-strand DNA-binding proteins (SSBs). [5 Marks]",
        "answer": "Functions of Severo Ochoa enzyme, synthetase, spliceosome, ori, and SSBs.",
        "explanation": "Functions of Severo Ochoa enzyme, synthetase, spliceosome, ori, and SSBs.\n\nMarking Scheme (1 Mark each):\n(a) Severo Ochoa enzyme: Catalyzes template-independent polymerization of RNA with defined sequences, instrumental in deciphering the genetic code. [1 Mark]\n(b) Aminoacyl-tRNA synthetase: Catalyzes the charging (esterification) of specific amino acids to their cognate tRNAs using ATP. [1 Mark]\n(c) Spliceosome: Large ribonucleoprotein complex (snRNPs) that recognizes splice junctions, excises introns from hnRNA, and ligates exons. [1 Mark]\n(d) Origin of replication (Ori): Specific DNA sequence where replication initiates; replication forks form here. [1 Mark]\n(e) SSBs: Bind to exposed single-stranded DNA at replication forks to prevent re-annealing and hairpin formation. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Francis Crick proposed the Central Dogma in molecular biology, which states that genetic information flows from DNA to RNA to Protein. However, certain viruses challenged this dogma with an exceptional reverse mechanism.'\n(a) Diagrammatically represent the Central Dogma.\n(b) Name an organism that represents an exception to the unidirectional central dogma. What enzyme performs this exceptional step?\n(c) Why is RNA considered the first genetic material (RNA World hypothesis)? [5 Marks]",
        "answer": "Central dogma, reverse transcription in retroviruses, and RNA world hypothesis.",
        "explanation": "Central dogma, reverse transcription in retroviruses, and RNA world hypothesis.\n\nMarking Scheme:\n(a) Central Dogma Diagram [1.5 Marks]:\n• DNA -> (Transcription) -> mRNA -> (Translation) -> Protein. (With circular arrow on DNA indicating Replication). [1.5 Marks]\n(b) Exception & Enzyme [1.5 Marks]:\n• Exception: Retroviruses (such as HIV, Rous Sarcoma Virus) where genetic material is RNA. [0.75 Mark]\n• Enzyme: Reverse transcriptase (RNA-dependent DNA polymerase), transcribing RNA into cDNA (Teminism). [0.75 Mark]\n(c) RNA World Hypothesis [2 Marks]:\n• Essential life processes (metabolism, translation, splicing) evolved around RNA. [1 Mark]\n• RNA can act both as genetic material (storing information) and as a catalyst (ribozymes like peptidyl transferase). DNA evolved from RNA with chemical modifications (loss of 2'-OH, thymine substitution) making it more stable. [1 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A segment of DNA template strand has the sequence: 3'-TAC TTA CCG GAG TGT ACT-5'\n(a) Write the sequence of the mRNA transcribed from this DNA segment.\n(b) Write the anticodons on the tRNAs that will translate this mRNA.\n(c) If a mutation replaces the 9th base (C) with A, what will be the effect on the translated polypeptide? [5 Marks]",
        "answer": "Transcription sequence, tRNA anticodons, and mutation analysis.",
        "explanation": "Transcription sequence, tRNA anticodons, and mutation analysis.\n\nMarking Scheme:\n(a) mRNA Sequence [1.5 Marks]:\n• Template: 3'-TAC TTA CCG GAG TGT ACT-5'\n• mRNA: 5'-AUG AAU GGC CUC ACA UGA-3' (antiparallel, U in place of T). [1.5 Marks]\n(b) tRNA Anticodons [1.5 Marks]:\n• Codon 1: AUG -> Anticodon: 3'-UAC-5'\n• Codon 2: AAU -> Anticodon: 3'-UUA-5'\n• Codon 3: GGC -> Anticodon: 3'-CCG-5'\n• Codon 4: CUC -> Anticodon: 3'-GAG-5'\n• Codon 5: ACA -> Anticodon: 3'-UGU-5'\n• Codon 6: UGA is stop codon -> No tRNA binds; release factor binds. [1.5 Marks]\n(c) Mutation Effect [2 Marks]:\n• 9th base on template DNA changes from C to A: 3'-TAC TTA CAG GAG TGT ACT-5'.\n• 3rd codon on mRNA changes from GGC (Glycine) to GUC (Valine). [1 Mark]\n• Effect: Missense mutation resulting in substitution of Glycine by Valine at the 3rd amino acid position in the synthesized peptide. [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "unit_num": 7,
      "title": "Evolution",
      "unit_title": "Genetics and Evolution",
      "weightage_unit": "20 Marks (Unit VII)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In Stanley Miller's classical experiment on the origin of life (1953), which gaseous mixture was enclosed in the spark chamber at 800°C?",
        "options": [
          "(a) CH4, H2, NH3, and water vapor",
          "(b) CO2, O2, N2, and water vapor",
          "(c) CH4, O2, NH3, and H2",
          "(d) H2, N2, CO2, and sulfur dioxide"
        ],
        "answer": "(a) CH4, H2, NH3, and water vapor",
        "explanation": "Stanley Miller created electric discharges in a closed flask containing methane (CH4), hydrogen (H2), ammonia (NH3) in the ratio 2:1:2, and water vapor at 800°C to simulate primitive Earth reducing atmospheric conditions."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following organic compounds was directly identified by Stanley Miller in the condensed fluid of his spark- discharge apparatus?",
        "options": [
          "(a) Nucleic acids",
          "(b) Amino acids (glycine, alanine, aspartic acid)",
          "(c) Complex carbohydrates",
          "(d) Lipids and phospholipids"
        ],
        "answer": "(b) Amino acids (glycine, alanine, aspartic acid)",
        "explanation": "After running the spark discharge apparatus for a week, Miller observed the formation of simple amino acids such as glycine, alanine, and aspartic acid. In similar experiments, others synthesized sugars, nitrogenous bases, pigments, and fats."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The thorns of Bougainvillea and the tendrils of Cucurbita represent:",
        "options": [
          "(a) Homologous organs arising from divergent evolution",
          "(b) Analogous organs arising from convergent evolution",
          "(c) Vestigial organs",
          "(d) Atavistic organs"
        ],
        "answer": "(a) Homologous organs arising from divergent evolution",
        "explanation": "Both the thorns of Bougainvillea and the tendrils of Cucurbita are modified axillary buds (identical anatomical origin and morphology), but perform different functions (defense vs climbing support). Hence, they are homologous structures exhibiting divergent evolution."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The flippers of penguins (birds) and dolphins (mammals) are examples of:",
        "options": [
          "(a) Homology showing divergent evolution",
          "(b) Analogy showing convergent evolution",
          "(c) Homology showing parallel evolution",
          "(d) Vestigial structures"
        ],
        "answer": "(b) Analogy showing convergent evolution",
        "explanation": "Flippers of penguins and dolphins have different anatomical structures and embryonic origins (avian wing modification vs mammalian forelimb modification) but perform the same hydrodynamic swimming function in aquatic habitats. This is analogy reflecting convergent evolution."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Sweet potato (root modification) and potato (stem modification) illustrate:",
        "options": [
          "(a) Homology",
          "(b) Analogy (Convergent evolution)",
          "(c) Adaptive radiation",
          "(d) Saltation"
        ],
        "answer": "(b) Analogy (Convergent evolution)",
        "explanation": "Sweet potato is an underground tuberous root modification, whereas potato is an underground modified stem (tuber). Both have different morphological origins but converge on the same function of food storage, exemplifying analogy."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In pre-industrial England (before 1850), white-winged peppered moths (Biston betularia) survived better than dark-winged melanic moths because:",
        "options": [
          "(a) Dark moths were blinded by sunlight",
          "(b) Tree trunks were covered with thick white lichens that camouflaged white-winged moths from predatory birds",
          "(c) White moths laid toxic eggs",
          "(d) Predators preferred feeding on dark moths due to bad odor"
        ],
        "answer": "(b) Tree trunks were covered with thick white lichens that camouflaged white-winged moths from predatory birds",
        "explanation": "Before industrialisation, tree trunks were encrusted with thick light-colored lichens (as lichens are sensitive to air pollution). White-winged moths blended into the background and escaped bird predators, whereas dark melanic moths were easily spotted and predated."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The evolution of different species in a given geographical area starting from a common point and radiating to other geographical areas (habitats) is called:",
        "options": [
          "(a) Convergent evolution",
          "(b) Adaptive radiation",
          "(c) Saltation",
          "(d) Genetic drift"
        ],
        "answer": "(b) Adaptive radiation",
        "explanation": "The process of evolution of different species in a given geographical area starting from a point and literally radiating to other areas of geography (habitats) is called adaptive radiation (e.g., Darwin's Finches in Galapagos, Australian marsupials)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following pairs represents convergent evolution between Australian marsupials and placental mammals?",
        "options": [
          "(a) Anteater and Numbat (banded anteater)",
          "(b) Flying squirrel and Flying phalanger",
          "(c) Wolf and Tasmanian wolf",
          "(d) All of the above"
        ],
        "answer": "(d) All of the above",
        "explanation": "Placental mammals in other continents and Australian marsupials evolved similar morphological traits in parallel ecological niches: Anteater / Numbat, Flying squirrel / Flying phalanger, Wolf / Tasmanian wolf, Mouse / Marsupial mouse, Bobcat / Tasmanian tiger cat. All represent convergent evolution."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Hugo de Vries proposed his Mutation Theory of Evolution based on his breeding experiments with which plant?",
        "options": [
          "(a) Pisum sativum (Garden pea)",
          "(b) Oenothera lamarckiana (Evening primrose)",
          "(c) Antirrhinum majus (Snapdragon)",
          "(d) Mirabilis jalapa (4 o'clock plant)"
        ],
        "answer": "(b) Oenothera lamarckiana (Evening primrose)",
        "explanation": "Hugo de Vries conducted experiments on evening primrose (Oenothera lamarckiana) and proposed that large, sudden discontinuous variations called mutations are the primary driving force of evolution."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "According to Hugo de Vries, mutations are:",
        "options": [
          "(a) Small, gradual, and directional",
          "(b) Random, discontinuous, and directionless (Saltation)",
          "(c) Caused exclusively by environmental use and disuse",
          "(d) Strictly beneficial and cumulative"
        ],
        "answer": "(b) Random, discontinuous, and directionless (Saltation)",
        "explanation": "De Vries believed that mutations are random and directionless, whereas Darwinian variations are small and directional. Evolution for de Vries was discontinuous, single-step large mutations causing speciation, which he termed saltation."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a population in Hardy-Weinberg equilibrium, the frequency of a recessive allele (q) is 0.4. What is the frequency of heterozygous individuals (2pq) in this population?",
        "options": [
          "(a) 0.16",
          "(b) 0.48",
          "(c) 0.36",
          "(d) 0.24"
        ],
        "answer": "(b) 0.48",
        "explanation": "If q = 0.4, then p = 1 - q = 1 - 0.4 = 0.6. The frequency of heterozygous carriers is given by 2pq = 2 x 0.6 x 0.4 = 0.48 (48%)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "When natural selection favors individuals at both extreme ends of the phenotypic distribution curve while eliminating intermediate phenotypes, it is called:",
        "options": [
          "(a) Stabilising selection",
          "(b) Directional selection",
          "(c) Disruptive selection",
          "(d) Balancing selection"
        ],
        "answer": "(c) Disruptive selection",
        "explanation": "Disruptive selection splits a population into two distinct sub-populations by selecting for both extreme phenotypes and selecting against intermediate phenotypes, creating a two-peaked curve."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Founder effect is an extreme manifestation of which evolutionary mechanism?",
        "options": [
          "(a) Gene flow",
          "(b) Genetic drift",
          "(c) Mutation",
          "(d) Natural selection"
        ],
        "answer": "(b) Genetic drift",
        "explanation": "Genetic drift refers to random changes in allele frequencies occurring in small isolated populations due to chance alone. When a small group of colonizers establishes a new isolated colony, their allele frequencies become the blueprint for future generations, termed the Founder Effect."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Coelacanth (a lobefin fish) caught in South Africa in 1938 is an extraordinary living fossil because lobefins were the direct ancestors of:",
        "options": [
          "(a) Cartilaginous fishes",
          "(b) Amphibians",
          "(c) Birds",
          "(d) Mammals"
        ],
        "answer": "(b) Amphibians",
        "explanation": "Lobefins (Coelacanth) were stout, fleshy-finned fishes that could move on land and go back to water. They evolved into the first amphibians that lived on both land and water."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Dinosaurs suddenly disappeared from the face of the Earth approximately how many million years ago?",
        "options": [
          "(a) 15 mya",
          "(b) 65 mya",
          "(c) 200 mya",
          "(d) 350 mya"
        ],
        "answer": "(b) 65 mya",
        "explanation": "About 65 million years ago (mya), at the end of the Cretaceous period of the Mesozoic era, dinosaurs suddenly became extinct, paving the way for the adaptive radiation of mammals and birds."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following hominids was the first to use fire, make sophisticated stone axes, walk fully erect, and had a cranial capacity of about 900 cc?",
        "options": [
          "(a) Australopithecus",
          "(b) Homo habilis",
          "(c) Homo erectus",
          "(d) Neanderthal man"
        ],
        "answer": "(c) Homo erectus",
        "explanation": "Homo erectus (discovered in Java in 1891, ~1.5 mya) had a cranial capacity of about 900 cc, walked fully upright, used fire, and probably ate meat."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Neanderthal man, who lived in near east and central Asia between 100,000 to 40,000 years ago, had a cranial capacity of:",
        "options": [
          "(a) 650 - 800 cc",
          "(b) 900 cc",
          "(c) 1400 cc",
          "(d) 1650 cc"
        ],
        "answer": "(c) 1400 cc",
        "explanation": "The Neanderthal man with a brain size of 1400 cc lived in near east and central Asia between 100,000– 40,000 years ago. They used hides to protect their body and buried their dead."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The first human-like being, the hominid called Homo habilis, had a brain capacity of:",
        "options": [
          "(a) 400 - 500 cc",
          "(b) 650 - 800 cc",
          "(c) 900 cc",
          "(d) 1400 cc"
        ],
        "answer": "(b) 650 - 800 cc",
        "explanation": "Homo habilis ('handy man') was the first human-like hominid. Their brain capacities were between 650– 800 cc, they made primitive stone tools, and they probably did not eat meat."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Prehistoric cave art by early modern Homo sapiens developed about how many years ago?",
        "options": [
          "(a) 10,000 years ago",
          "(b) 18,000 years ago",
          "(c) 40,000 years ago",
          "(d) 75,000 years ago"
        ],
        "answer": "(b) 18,000 years ago",
        "explanation": "Prehistoric cave art developed about 18,000 years ago (such as rock art at Bhimbetka rock shelters in Raisen district of MP). Agriculture started around 10,000 years ago and human settlements began."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Industrial melanism in England is a classic demonstration of:",
        "options": [
          "(a) Natural selection in action",
          "(b) Genetic drift in small populations",
          "(c) Direct gene mutations caused by coal soot",
          "(d) Inheritance of acquired characters"
        ],
        "answer": "(a) Natural selection in action",
        "explanation": "Industrial melanism is a textbook example of natural selection. Coal soot darkened tree trunks during the industrial revolution, conferring selective camouflage advantage to dark melanic moths (Biston betularia carbonaria) over white-winged moths against bird predation."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following conditions is NOT required to maintain Hardy-Weinberg genetic equilibrium in a population?",
        "options": [
          "(a) Random mating among individuals",
          "(b) Extremely small population size",
          "(c) Absence of natural selection",
          "(d) No gene flow or mutations"
        ],
        "answer": "(b) Extremely small population size",
        "explanation": "Hardy-Weinberg equilibrium requires a very LARGE population size to prevent random sampling errors (genetic drift). A small population size leads to drift and violates equilibrium."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Ernst Haeckel proposed the Biogenetic Law, stating that 'ontogeny recapitulates phylogeny'. This embryological theory was disproved by:",
        "options": [
          "(a) Karl Ernst von Baer",
          "(b) Charles Darwin",
          "(c) Thomas Malthus",
          "(d) Alfred Russel Wallace"
        ],
        "answer": "(a) Karl Ernst von Baer",
        "explanation": "Karl Ernst von Baer noted that embryos never pass through the adult stages of other animals, disproving Haeckel's proposal that embryonic development (ontogeny) is an exact replay of adult evolutionary history (phylogeny)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "About 15 million years ago, which primates were hairy and walked like gorillas and chimpanzees?",
        "options": [
          "(a) Dryopithecus and Ramapithecus",
          "(b) Australopithecus and Homo habilis",
          "(c) Homo erectus and Neanderthal",
          "(d) Cro-Magnon and Modern man"
        ],
        "answer": "(a) Dryopithecus and Ramapithecus",
        "explanation": "About 15 mya, primates called Dryopithecus and Ramapithecus existed. They were hairy and walked like gorillas and chimpanzees. Dryopithecus was more ape-like, while Ramapithecus was more man-like."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The development of antibiotic resistance in bacterial colonies exposed to penicillin is an example of:",
        "options": [
          "(a) Natural selection driven by anthropogenic action",
          "(b) Convergent evolution",
          "(c) Spontaneous abiogenesis",
          "(d) Artificial hybridisation"
        ],
        "answer": "(a) Natural selection driven by anthropogenic action",
        "explanation": "Excessive use of antibiotics has selected for pre-existing resistant bacterial variants within months or years. This rapid evolutionary shift is driven by anthropogenic (human) action."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the geological time scale, which era is known as the 'Age of Reptiles'?",
        "options": [
          "(a) Paleozoic era",
          "(b) Mesozoic era",
          "(c) Cenozoic era",
          "(d) Proterozoic era"
        ],
        "answer": "(b) Mesozoic era",
        "explanation": "The Mesozoic era (comprising Triassic, Jurassic, and Cretaceous periods) was dominated by reptiles, especially giant dinosaurs, hence it is known as the 'Age of Reptiles'. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Thorns of Bougainvillea and tendrils of Cucurbita are homologous organs.\nReason (R): Both arise from axillary buds in the stems of plants, showing common ancestry despite different functions.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) explains (A). Homology is defined by identical anatomical origin (axillary buds) and common ancestry, even though divergent evolution has adapted them for different functions."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Darwin's finches on the Galapagos islands represent a textbook example of adaptive radiation.\nReason (R): From an ancestral seed-eating stock, varied beak shapes evolved for insectivorous, cactus-eating, and vegetarian diets in isolated islands.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) accurately explains (A). The geographic isolation of different islands allowed the original ancestral seed-eating finches to radiate into diverse ecological niches by adapting their beaks."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Hugo de Vries proposed that evolution occurs in sudden large jumps called saltation.\nReason (R): Darwinian natural selection is based on small, continuous, directional variations.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are correct facts regarding de Vries' Mutation Theory and Darwin's Natural Selection. However, (R) does not explain why de Vries proposed saltation (which was based on his experimental observations of sudden mutations in Oenothera lamarckiana)."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): In a large, randomly mating population with no evolutionary forces, gene pool frequencies remain constant generation after generation.\nReason (R): This genetic equilibrium is described by the Hardy-Weinberg equation p^2 + 2pq + q^2 = 1.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) provides the mathematical formulation of genetic equilibrium (Hardy- Weinberg principle)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Anthropogenic actions have caused the rapid evolution of pesticide-resistant mosquitoes and drug-resistant bacteria.\nReason (R): Evolution is not a directed process in the sense of determinism; it is a stochastic process based on chance events in nature and chance mutations in organisms.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are true. Human use of DDT and antibiotics applied massive selective pressure on pre- existing resistant mutants, leading to rapid evolution within years. However, (R) is a broader philosophical statement on the stochastic nature of evolution. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat labelled diagram of Stanley Miller's spark discharge apparatus and list any four organic compounds detected in the condensed fluid. [3 Marks]",
        "answer": "Miller's experiment apparatus diagram and products.",
        "explanation": "Miller's experiment apparatus diagram and products.\n\nMarking Scheme:\n• Diagram [1.5 Marks]: Showing Spark chamber with tungsten electrodes, boiling water flask, condenser, and collection trap. [1.5 Marks]\n• Reaction conditions: CH4, NH3, H2 (2:1:2) + water vapor at 800°C. [0.5 Mark]\n• Products Identified [1 Mark]: Amino acids (Glycine, Alanine, Aspartic acid), sugars, nitrogenous bases, and organic acids. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Homologous organs and Analogous organs with one plant and one animal example for each. [3 Marks]",
        "answer": "Comparison between homologous and analogous organs.",
        "explanation": "Comparison between homologous and analogous organs.\n\nMarking Scheme:\n• Homologous Organs [1.5 Marks]: Structures that have similar anatomical origin and embryonic development but perform different functions; show Divergent evolution. Animal example: Forelimbs of whale, bat, cheetah, and human. Plant example: Thorns of Bougainvillea and tendrils of Cucurbita. [1.5 Marks]\n• Analogous Organs [1.5 Marks]: Structures that have different anatomical origins and embryonic structures but perform similar functions; show Convergent evolution. Animal example: Wings of butterfly and bird / flippers of penguin and dolphin. Plant example: Sweet potato (root) and potato (stem). [1.5 Marks]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain Industrial Melanism in the peppered moth (Biston betularia) as an example of natural selection in action. [3 Marks]",
        "answer": "Industrial melanism before and after industrialisation in England.",
        "explanation": "Industrial melanism before and after industrialisation in England.\n\nMarking Scheme:\n• Pre-industrial period (Before 1850): Thick white lichens covered tree trunks in rural England; white-winged moths were camouflaged and survived, while dark melanic moths were easily spotted and predated by birds. [1 Mark]\n• Post-industrial period (1920): Coal soot and smoke coated tree trunks; lichens died due to SO2 pollution. Dark melanic moths (Biston betularia carbonaria) were now camouflaged against dark bark and survived, while white moths were predated. [1 Mark]\n• Evolutionary significance: Proportion of dark moths increased dramatically, demonstrating natural selection where directional environmental change selects for pre-existing beneficial mutations. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Adaptive Radiation? Illustrate with the help of Darwin's Finches. [3 Marks]",
        "answer": "Adaptive radiation definition and Darwin's finches illustration.",
        "explanation": "Adaptive radiation definition and Darwin's finches illustration.\n\nMarking Scheme:\n• Definition: The evolutionary diversification of a single ancestral species into multiple distinct ecological niches within a geographical region. [1.5 Marks]\n• Darwin's Finches Illustration: Darwin observed that all finches on Galapagos islands arose from a single ancestral seed- eating finch from South American mainland. In the absence of competition on isolated islands, natural selection molded beak morphologies into insect-eating beaks, vegetarian tree-finch beaks, probing cactus beaks, and crushing seed beaks. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State the Hardy-Weinberg Principle. Write the algebraic equation and enumerate any four factors that upset Hardy-Weinberg equilibrium. [3 Marks]",
        "answer": "Hardy-Weinberg principle statement, equation, and disturbing factors.",
        "explanation": "Hardy-Weinberg principle statement, equation, and disturbing factors.\n\nMarking Scheme:\n• Principle Statement: 'Allele frequencies in a large, randomly mating population remain constant from generation to generation in the absence of evolutionary influences.' [1 Mark]\n• Equation: p^2 + 2pq + q^2 = 1 (where p = dominant allele freq, q = recessive allele freq). [0.5 Mark]\n• Four Disturbing Factors [1.5 Marks, 0.5 Mark each for any four]:\n1. Gene migration or Gene flow\n2. Genetic drift (Founder effect, Bottleneck effect)\n3. Mutation\n4. Genetic recombination (Crossing-over)\n5. Natural selection."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the three types of natural selection curves: (i) Stabilising, (ii) Directional, (iii) Disruptive. [3 Marks]",
        "answer": "Three modes of natural selection on phenotypic distribution.",
        "explanation": "Three modes of natural selection on phenotypic distribution.\n\nMarking Scheme (1 Mark each):\n(i) Stabilising selection: Natural selection favors intermediate phenotypes; extreme phenotypes are eliminated. The phenotypic distribution curve becomes narrower and taller (e.g., human infant birth weight). [1 Mark]\n(ii) Directional selection: Selection favors individuals at one extreme of the phenotypic distribution. The peak of the curve shifts towards that extreme direction (e.g., industrial melanism, antibiotic resistance). [1 Mark]\n(iii) Disruptive selection: Selection favors both extreme phenotypes simultaneously while eliminating intermediate forms. The curve develops two distinct peaks, potentially driving speciation. [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Trace the chronological evolutionary lineage of modern Homo sapiens, mentioning the brain capacity of: (i) Homo habilis, (ii) Homo erectus, (iii) Neanderthal man. [3 Marks]",
        "answer": "Human evolutionary lineage and cranial capacities.",
        "explanation": "Human evolutionary lineage and cranial capacities.\n\nMarking Scheme:\n• Chronological Lineage: Dryopithecus -> Ramapithecus -> Australopithecus -> Homo habilis -> Homo erectus -> Neanderthal man -> Homo sapiens. [1.5 Marks]\n• Cranial Capacities [1.5 Marks, 0.5 Mark each]:\n(i) Homo habilis: 650 – 800 cc\n(ii) Homo erectus: ~900 cc\n(iii) Neanderthal man: 1400 cc."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Darwinian variation and Mutation as proposed by Hugo de Vries. [3 Marks]",
        "answer": "Comparison between Darwinian variations and de Vriesian mutations.",
        "explanation": "Comparison between Darwinian variations and de Vriesian mutations.\n\nMarking Scheme (1 Mark per parameter):\n1. Nature of variation: Darwinian variations are small, gradual, and continuous; Mutations are sudden, large, and discontinuous (saltations). [1 Mark]\n2. Direction: Darwinian variations are directional (guided by natural selection); Mutations are random and directionless. [1 Mark]\n3. Mode of speciation: Darwin viewed speciation as slow, continuous gradualism over many generations; de Vries viewed speciation as single-step large mutation (saltation). [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Genetic Drift? Explain the Founder Effect with a suitable biological scenario. [3 Marks]",
        "answer": "Genetic drift and founder effect mechanism.",
        "explanation": "Genetic drift and founder effect mechanism.\n\nMarking Scheme:\n• Genetic Drift: Fluctuations in allele frequencies of a population due to random chance events rather than natural selection; highly pronounced in small populations. [1.5 Marks]\n• Founder Effect: When a small splinter group of individuals emigrates and colonizes a new, geographically isolated habitat, their limited gene pool becomes the genetic foundation of the new population. The new population may have dramatically different allele frequencies from the parental population, turning the colonizers into 'founders'. [1.5 Marks]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain Convergent Evolution with two examples from Australian marsupials and placental mammals. [3 Marks]",
        "answer": "Convergent evolution definition and placental vs marsupial counterparts.",
        "explanation": "Convergent evolution definition and placental vs marsupial counterparts.\n\nMarking Scheme:\n• Definition: The independent evolutionary development of similar morphological adaptations in unrelated lineages occupying similar ecological niches in different geographical locations. [1 Mark]\n• Examples [2 Marks, 1 Mark each]:\n1. Placental Wolf and Tasmanian Wolf (Marsupial wolf): Both evolved canine-like predator morphology with sharp carnassial teeth and cursorial hunting bodies.\n2. Flying Squirrel (Placental) and Flying Phalanger (Marsupial): Both independently evolved skin flaps (patagium) between limbs for gliding locomotion between trees. SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe Oparin and Haldane's hypothesis of chemical evolution of life.\n(b) Explain how Stanley Miller and Harold Urey provided experimental support for this hypothesis. [5 Marks]",
        "answer": "Oparin-Haldane theory and Miller-Urey experiment.",
        "explanation": "Oparin-Haldane theory and Miller-Urey experiment.\n\nMarking Scheme:\n(a) Oparin-Haldane Chemical Evolution [2.5 Marks]:\n• Proposed that the first form of life arose from pre-existing non-living organic molecules (chemical evolution). [1 Mark]\n• Conditions on primitive Earth: High temperature, volcanic storms, reducing atmosphere devoid of free oxygen, rich in CH4, NH3, H2, and water vapor. [0.75 Mark]\n• Energy from lightning and UV rays drove abiotic synthesis of simple organic monomers (sugars, amino acids, purines, pyrimidines) in primitive oceans ('hot dilute soup'). These assembled into coacervates/microspheres and self-replicating RNA. [0.75 Mark]\n(b) Miller-Urey Experimental Verification [2.5 Marks]:\n• Created a closed spark-discharge glass apparatus to simulate primitive Earth. [0.5 Mark]\n• Gases enclosed: Methane, ammonia, and hydrogen in 2:1:2 ratio with water vapor. [0.5 Mark]\n• Tungsten electrodes generated electric spark discharges at 800°C for one week. [0.5 Mark]\n• Water was boiled to provide steam, and condenser cooled gases into collection trap. [0.5 Mark]\n• Analysis of trap fluid revealed synthesis of amino acids (glycine, alanine, aspartic acid), providing direct empirical proof that organic precursors of life could form abiotically. [0.5 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is natural selection? Describe Charles Darwin's Theory of Evolution by Natural Selection.\n(b) Mention three major criticisms/limitations of Darwin's original theory that were resolved by the Modern Synthetic Theory. [5 Marks]",
        "answer": "Darwin's natural selection theory, key postulates, and criticisms.",
        "explanation": "Darwin's natural selection theory, key postulates, and criticisms.\n\nMarking Scheme:\n(a) Darwinian Natural Selection [3 Marks]:\n• Postulates: (1) Prodigality of production (high reproductive capacity); (2) Limited natural resources leading to struggle for existence (intraspecific, interspecific, environmental); (3) Variations exist among individuals; (4) Survival of the fittest:\nindividuals with variations suited to environment survive and reproduce more efficiently; (5) Natural selection leads to gradual accumulation of favorable variations over time, creating new species. [3 Marks]\n(b) Criticisms & Resolution [2 Marks]:\n• 1. Origin of variations: Darwin could not explain the origin and biological mechanism of variations (resolved by genetics/mutations). [0.75 Mark]\n• 2. Mechanism of inheritance: Darwin believed in blending inheritance (pangenesis) (resolved by Mendelian discrete particulate inheritance). [0.75 Mark]\n• 3. Arrival of the fittest: Darwin explained survival of the fittest, but not the arrival of the fittest (resolved by Hugo de Vries' mutation theory). [0.5 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) State the Hardy-Weinberg Law of Genetic Equilibrium.\n(b) Explain any five evolutionary forces that disrupt Hardy-Weinberg equilibrium, leading to evolutionary change in a population. [5 Marks]",
        "answer": "Hardy-Weinberg equilibrium and five disturbing evolutionary factors.",
        "explanation": "Hardy-Weinberg equilibrium and five disturbing evolutionary factors.\n\nMarking Scheme:\n(a) Hardy-Weinberg Law [1 Mark]:\n• Allele and genotype frequencies in a large, randomly mating population remain constant from generation to generation in the absence of evolutionary factors: p^2 + 2pq + q^2 = 1. [1 Mark]\n(b) Five Disruptive Evolutionary Forces [4 Marks, 0.8 Mark each]:\n1. Gene Migration / Gene Flow: Influx (immigration) or efflux (emigration) of alleles changes gene frequencies in both source and recipient populations.\n2. Genetic Drift: Random fluctuations in allele frequencies in small populations due to chance alone (Founder effect, Bottleneck effect).\n3. Mutation: Introduces new alleles into the gene pool at low frequencies; provides primary raw material for evolution.\n4. Genetic Recombination: Crossing-over during meiosis creates novel allele combinations in gametes.\n5. Natural Selection: Differential reproductive success of genotypes leads to directional shifts in allele frequencies, favoring adaptive phenotypes."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain Adaptive Radiation with reference to: (i) Darwin's Finches, (ii) Australian Marsupials.\n(b) When more than one adaptive radiation occurs in an isolated geographical area, what evolutionary phenomenon does it result in? Give an example. [5 Marks]",
        "answer": "Adaptive radiation in finches and marsupials, and convergent evolution.",
        "explanation": "Adaptive radiation in finches and marsupials, and convergent evolution.\n\nMarking Scheme:\n(a) Adaptive Radiation Cases [3.5 Marks]:\n• Meaning: Evolution of multiple distinct species radiating from a common ancestral founder to exploit diverse ecological niches in a geographic zone. [0.75 Mark]\n• (i) Darwin's Finches: Ancestral seed-eating finch arrived on Galapagos archipelago; dispersed across islands and evolved distinct beak specializations (crushing, probing, insectivorous, vegetarian) without competition. [1.5 Marks]\n• (ii) Australian Marsupials: In Australia (geographically isolated after continental drift), ancestral marsupial stock underwent adaptive radiation to produce marsupial rat, bandicoot, wombat, kangaroo, koala, Tasmanian wolf. [1.25 Marks]\n(b) Convergent Evolution Result [1.5 Marks]:\n• Phenomenon: When more than one adaptive radiation occurs in an isolated geographical area (representing different habitats), it results in Convergent Evolution. [0.75 Mark]\n• Example: Placental mammals in North America and Australian marsupials evolved parallel counterparts: Placental Wolf vs Tasmanian Wolf, Anteater vs Numbat, Flying Squirrel vs Flying Phalanger. [0.75 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the origin and evolution of modern man (Homo sapiens sapiens) starting from Dryopithecus, highlighting the anatomical changes and behavioral milestones at each stage.\n(b) At what geological period did the Neanderthal man live, and what was their brain capacity? [5 Marks]",
        "answer": "Human evolution timeline, cranial capacity progression, and Neanderthal features.",
        "explanation": "Human evolution timeline, cranial capacity progression, and Neanderthal features.\n\nMarking Scheme:\n(a) Lineage of Modern Man [4 Marks]:\n1. Dryopithecus & Ramapithecus (15 mya): Hairy, walked like apes. Dryopithecus was ape-like; Ramapithecus walked more erect and was man-like. [0.75 Mark]\n2. Australopithecus (2 mya): Lived in East African grasslands. Hunted with stone weapons; essentially ate fruits; brain ~450–600 cc. [0.75 Mark]\n3. Homo habilis (first hominid): Cranial capacity 650–800 cc; made primitive tools; did not eat meat. [0.75 Mark]\n4. Homo erectus (1.5 mya): Fossils discovered in Java (1891); brain ~900 cc; fully upright posture; controlled fire; ate meat. [0.75 Mark]\n5. Neanderthal man (100,000–40,000 ya): Brain 1400 cc; used hides for clothing; buried dead. [0.5 Mark]\n6. Homo sapiens (arose in Africa 75,000–10,000 ya during ice age): Developed cave art (18,000 ya), agriculture (10,000 ya), language and culture. [0.5 Mark]\n(b) Neanderthal Man [1 Mark]:\n• Lived 100,000 to 40,000 years ago (Late Pleistocene) in Near East and Central Asia. Brain capacity: 1400 cc. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Provide anatomical and morphological evidence supporting organic evolution through Divergent and Convergent evolution.\n(b) How does molecular homology provide evidence for common ancestry among living organisms? [5 Marks]",
        "answer": "Divergent and convergent anatomical evidence, and molecular homology.",
        "explanation": "Divergent and convergent anatomical evidence, and molecular homology.\n\nMarking Scheme:\n(a) Divergent vs Convergent Evolution [3.5 Marks]:\n• Divergent Evolution (Homology): Origin from a common ancestor followed by morphological diversification into different functions. Example: Vertebrate forelimbs (human, cheetah, whale, bat) share identical skeletal pentadactyl pattern (humerus, radius, ulna, carpals, metacarpals, phalanges) adapted for grasping, running, swimming, and flying. Plant example: Thorns of Bougainvillea and tendrils of Cucurbita. [2 Marks]\n• Convergent Evolution (Analogy): Independent evolution of superficially similar adaptations in unrelated taxa living in similar habitats. Example: Wings of butterfly and bird; eyes of octopus and mammals; flippers of penguin and dolphin. [1.5 Marks]\n(b) Molecular Homology [1.5 Marks]:\n• Similarities in biochemical constituents (genetic code, ATP energy currency, metabolic pathways like glycolysis) and sequence homology in conserved proteins (e.g., Cytochrome c, Hemoglobin) across diverse organisms prove descent with modification from a common universal ancestor. [1.5 Marks]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "In a hypothetical butterfly population in a forest, wing color is determined by a single gene with two alleles: Dominant 'B'\n(Brown) and Recessive 'b' (White). In a survey of 1000 butterflies, 840 are brown and 160 are white. Assuming the population is in Hardy-Weinberg equilibrium:\n(a) Calculate the frequency of the recessive allele (b).\n(b) Calculate the frequency of the dominant allele (B).\n(c) Calculate the percentage of heterozygous brown butterflies (Bb).\n(d) How many butterflies in this population are homozygous brown (BB)? [5 Marks]",
        "answer": "Hardy-Weinberg mathematical population genetics calculation.",
        "explanation": "Hardy-Weinberg mathematical population genetics calculation.\n\nMarking Scheme:\n(a) Frequency of Recessive Allele (q) [1.5 Marks]:\n• White butterflies are homozygous recessive (bb, q^2).\n• q^2 = 160 / 1000 = 0.16.\n• q = sqrt(0.16) = 0.4. Recessive allele frequency (b) = 0.4. [1.5 Marks]\n(b) Frequency of Dominant Allele (p) [1 Mark]:\n• p + q = 1 => p = 1 - 0.4 = 0.6. Dominant allele frequency (B) = 0.6. [1 Mark]\n(c) Percentage of Heterozygous Butterflies (2pq) [1.5 Marks]:\n• Frequency of Bb = 2pq = 2 x 0.6 x 0.4 = 0.48.\n• Percentage = 0.48 x 100 = 48%. [1.5 Marks]\n(d) Number of Homozygous Brown Butterflies (BB) [1 Mark]:\n• Frequency of BB = p^2 = (0.6)^2 = 0.36.\n• Number of butterflies = 0.36 x 1000 = 360 butterflies. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'The history of life on Earth shows that major evolutionary transitions occurred in distinct geological eras. From the Cambrian explosion in the Paleozoic to the dominance and sudden extinction of dinosaurs in the Mesozoic, fossil records provide tangible proof of life forms that lived in prehistoric epochs.'\n(a) What are fossils and how do sedimentary rocks preserve them?\n(b) Name a transitional fossil link between reptiles and birds, mentioning two reptilian and two avian features.\n(c) What was the significance of the discovery of Coelacanth in South Africa? [5 Marks]",
        "answer": "Fossilization, Archaeopteryx transitional link, and Coelacanth significance.",
        "explanation": "Fossilization, Archaeopteryx transitional link, and Coelacanth significance.\n\nMarking Scheme:\n(a) Fossils & Sedimentary Preservation [1.5 Marks]:\n• Fossils are preserved remains, imprints, or traces of organisms that lived in the past. [0.75 Mark]\n• Sediments accumulate layer upon layer at the bottom of bodies of water; dead organisms buried in mud are petrified under pressure, with deeper layers containing older fossils (stratigraphy). [0.75 Mark]\n(b) Archaeopteryx (Transitional Fossil) [2 Marks]:\n• Connects reptiles and birds. [0.5 Mark]\n• Reptilian features: Toothed beak, long bony tail with vertebrae, claws on forelimbs. [0.75 Mark]\n• Avian features: Feathers on wings, pneumatic bones, wishbone (furcula). [0.75 Mark]\n(c) Coelacanth (Lobefin) Significance [1.5 Marks]:\n• A lobe-finned fish caught in 1938 thought to be extinct. Demonstrated that stout, fleshy lobefins moved on land, representing the transitional link through which fishes evolved into amphibians ~350 million years ago. [1.5 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain Ernst Mayr's Biological Species Concept.\n(b) Describe Allopatric Speciation and Sympatric Speciation.\n(c) Name any two pre-zygotic and two post-zygotic reproductive isolating mechanisms. [5 Marks]",
        "answer": "Biological species concept, speciation modes, and reproductive isolation.",
        "explanation": "Biological species concept, speciation modes, and reproductive isolation.\n\nMarking Scheme:\n(a) Biological Species Concept [1 Mark]:\n• A species is a group of interbreeding natural populations that are reproductively isolated from other such groups, producing viable and fertile offspring. [1 Mark]\n(b) Allopatric vs Sympatric Speciation [2 Marks]:\n• Allopatric Speciation: Speciation occurring when populations are geographically separated by physical barriers (mountains, rivers), leading to independent genetic divergence. [1 Mark]\n• Sympatric Speciation: Speciation occurring within the same geographical territory without physical isolation (e.g., through polyploidy or behavioral isolation). [1 Mark]\n(c) Reproductive Isolating Mechanisms [2 Marks, 0.5 Mark each]:\n• Pre-zygotic (prevents fertilization): (1) Temporal isolation (different breeding seasons), (2) Behavioral/Ecological isolation (mating rituals).\n• Post-zygotic (prevents viable hybrid development): (1) Hybrid inviability (embryo dies), (2) Hybrid sterility (mule from donkey and horse)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Biogeographical evidence of evolution? How does continental drift explain the distribution of marsupials in Australia?\n(b) Distinguish between Lamarckism and Darwinism regarding the evolution of long neck in giraffes. [5 Marks]",
        "answer": "Biogeographical evidence, continental drift, and Lamarck vs Darwin comparison.",
        "explanation": "Biogeographical evidence, continental drift, and Lamarck vs Darwin comparison.\n\nMarking Scheme:\n(a) Biogeographical Evidence & Continental Drift [2.5 Marks]:\n• Geographic distribution of organisms reflects evolutionary history. [0.5 Mark]\n• Continental Drift explanation: During the Mesozoic era, Australia split off from the supercontinent Pangaea/Gondwanaland before placental mammals had fully evolved. Continental isolation protected primitive Australian marsupials from competition and predation by superior placental mammals, allowing marsupials to radiate and survive exclusively in Australia. [2 Marks]\n(b) Giraffe Neck Evolution: Lamarck vs Darwin [2.5 Marks]:\n• Lamarck's view (Use and Disuse): Ancestral giraffes had short necks. Stretching continuously to reach leaves on high tree branches elongated their necks (acquired trait). This acquired elongated neck was passed to offspring generation after generation. [1.25 Marks]\n• Darwin's view (Natural Selection): Ancestral giraffes had variable neck lengths (short, medium, long). When ground vegetation became scarce, long-necked giraffes could reach tree canopy food and had higher survival and reproductive success (survival of the fittest). Over generations, natural selection increased the frequency of long-necked giraffes. [1.25 Marks]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "unit_num": 8,
      "title": "Human Health and Disease",
      "unit_title": "Biology and Human Welfare",
      "weightage_unit": "12 Marks (Unit VIII)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Typhoid fever in humans is diagnosed clinically through which standard serological diagnostic test?",
        "options": [
          "(a) ELISA test",
          "(b) Widal test",
          "(c) Western Blot",
          "(d) PCR test"
        ],
        "answer": "(b) Widal test",
        "explanation": "Typhoid fever is caused by the pathogenic bacterium Salmonella typhi. It enters the small intestine through contaminated food and water. Diagnosis is confirmed through the Widal test (an agglutination reaction between typhoid antigens and patient serum antibodies)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Pneumonia, caused by Streptococcus pneumoniae and Haemophilus influenzae, differs from the common cold in that pneumonia affects the:",
        "options": [
          "(a) Nasal chamber and throat only",
          "(b) Alveoli of the lungs, filling them with fluid and causing severe respiratory distress",
          "(c) Vocal cords and larynx exclusively",
          "(d) Mucosa of the stomach and duodenum"
        ],
        "answer": "(b) Alveoli of the lungs, filling them with fluid and causing severe respiratory distress",
        "explanation": "Pneumonia infects the alveoli (air-filled sacs) of the lungs, filling them with inflammatory fluid resulting in severe breathing difficulties, fever, chills, cough, and in severe cases, lips and finger nails turning gray to bluish. The common cold (Rhino virus) infects the nose and respiratory passage, but NOT the lungs."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the life cycle of the malarial parasite Plasmodium, the rupture of red blood cells releases a toxic pigment responsible for the recurring chills and high fever. This pigment is called:",
        "options": [
          "(a) Haemocyanin",
          "(b) Haemozoin",
          "(c) Bilirubin",
          "(d) Histamine"
        ],
        "answer": "(b) Haemozoin",
        "explanation": "The rupture of RBCs is associated with release of a toxic substance called haemozoin, which is responsible for the chill and high fever recurring every three to four days in malaria patients."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Where does sexual reproduction (fertilisation of gametocytes) of the malarial parasite Plasmodium take place?",
        "options": [
          "(a) Human liver cells (hepatocytes)",
          "(b) Human red blood cells (erythrocytes)",
          "(c) Gut (stomach) of the female Anopheles mosquito",
          "(d) Salivary glands of the female Anopheles mosquito"
        ],
        "answer": "(c) Gut (stomach) of the female Anopheles mosquito",
        "explanation": "Plasmodium reproduces asexually in the human host (liver and RBCs) and forms gametocytes. When a female Anopheles mosquito sucks blood from an infected person, gametocytes enter the mosquito's gut, where fertilisation and zygote development take place."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following gastrointestinal infections is transmitted through houseflies acting as mechanical carriers from faeces of an infected person to food and water?",
        "options": [
          "(a) Amoebiasis (Amoebic dysentery)",
          "(b) Filariasis",
          "(c) Ringworm",
          "(d) Pneumonia"
        ],
        "answer": "(a) Amoebiasis (Amoebic dysentery)",
        "explanation": "Entamoeba histolytica is a protozoan parasite in the large intestine of humans that causes amoebiasis. Houseflies act as mechanical carriers and serve to transmit the parasite from faeces of infected persons to food, thereby contaminating it."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Wuchereria bancrofti and Wuchereria malayi, the filarial worms, cause chronic inflammation in which anatomical structures of the human body?",
        "options": [
          "(a) Alveoli of the lungs",
          "(b) Lymphatic vessels of the lower limbs and genital organs (Elephantiasis)",
          "(c) Mucosa of the small intestine",
          "(d) Bile duct and gall bladder"
        ],
        "answer": "(b) Lymphatic vessels of the lower limbs and genital organs (Elephantiasis)",
        "explanation": "Wuchereria bancrofti and W. malayi cause elephantiasis or filariasis, characterized by chronic inflammation of lymphatic vessels of the lower limbs, causing gross deformities of the legs and genital organs. Transmitted by female Culex mosquitoes."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Ringworm, one of the most common infectious diseases in humans characterized by dry, scaly lesions on skin and nails, is caused by fungi belonging to the genera:",
        "options": [
          "(a) Microsporum, Trichophyton, and Epidermophyton",
          "(b) Aspergillus, Penicillium, and Rhizopus",
          "(c) Agaricus, Puccinia, and Ustilago",
          "(d) Saccharomyces, Candida, and Neurospora"
        ],
        "answer": "(a) Microsporum, Trichophyton, and Epidermophyton",
        "explanation": "Fungi belonging to the genera Microsporum, Trichophyton, and Epidermophyton are responsible for ringworm. Heat and moisture help these fungi grow in skin folds like groin or between toes."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Interferons, which are cytokine barriers of innate immunity, are proteins secreted by:",
        "options": [
          "(a) Bacterial cells to inhibit antibiotics",
          "(b) Virus-infected cells to protect non-infected surrounding cells from viral infection",
          "(c) Plasma B-cells as memory molecules",
          "(d) Mast cells during anaphylaxis"
        ],
        "answer": "(b) Virus-infected cells to protect non-infected surrounding cells from viral infection",
        "explanation": "Virus-infected cells secrete proteins called interferons which protect non-infected cells from further viral infection by activating intracellular anti-viral pathways. They form cytokine barriers in innate immunity."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "An antibody molecule is represented as H2L2 because it consists of:",
        "options": [
          "(a) Two heavy polypeptide chains and two light polypeptide chains",
          "(b) Two histone chains and two lipid chains",
          "(c) Two hemoglobin molecules and two leukocytes",
          "(d) Two hydrophobic ends and two lipophilic ends"
        ],
        "answer": "(a) Two heavy polypeptide chains and two light polypeptide chains",
        "explanation": "Each antibody molecule has four peptide chains: two small light (L) chains and two longer heavy (H) chains bound together by disulfide bridges. Hence, an antibody is represented as H2L2 (e.g., IgG, IgA, IgM, IgE, IgD)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which branch of the immune system is primarily responsible for the graft rejection of transplanted organs (such as heart, kidney, or liver)?",
        "options": [
          "(a) Humoral immune response (B-cells)",
          "(b) Cell-Mediated Immunity (CMI mediated by T-lymphocytes)",
          "(c) Innate physiological barriers",
          "(d) Cytokine barriers"
        ],
        "answer": "(b) Cell-Mediated Immunity (CMI mediated by T-lymphocytes)",
        "explanation": "The body is able to differentiate 'self' and 'non-self' tissue. The cell-mediated immune response (CMI), mediated by cytotoxic T-lymphocytes, is responsible for graft rejection following organ transplantation. Patients must take immunosuppressants."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Injection of anti-tetanus serum (ATS) or anti-venom after a snakebite provides which type of immunity?",
        "options": [
          "(a) Natural active immunity",
          "(b) Artificial active immunity",
          "(c) Artificial passive immunity",
          "(d) Natural passive immunity"
        ],
        "answer": "(c) Artificial passive immunity",
        "explanation": "When preformed, ready-made antibodies are directly injected into an individual to provide immediate emergency protection against lethal toxins or snake venom, it is called artificial passive immunity."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Allergic reactions are mediated by which class of immunoglobulins and the release of which chemicals from mast cells?",
        "options": [
          "(a) IgG; perforins and granzymes",
          "(b) IgE; histamine and serotonin",
          "(c) IgA; interferon and pyrogens",
          "(d) IgM; heparin and acetylcholine"
        ],
        "answer": "(b) IgE; histamine and serotonin",
        "explanation": "The antibodies produced to allergens are of the IgE type. Allergy is due to the release of chemicals like histamine and serotonin from mast cells in response to allergen binding to IgE on their surfaces."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Rheumatoid arthritis is a classic example of:",
        "options": [
          "(a) Immunodeficiency disorder",
          "(b) Autoimmune disease",
          "(c) Infectious bacterial disease",
          "(d) Sexually transmitted infection"
        ],
        "answer": "(b) Autoimmune disease",
        "explanation": "In an autoimmune disease, the body loses self-tolerance and attacks its own body cells and tissues. In rheumatoid arthritis, the immune system mistakenly attacks the synovial membranes of joints, causing chronic inflammation and deformity."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following primary lymphoid organs is the site where all blood cells including T and B lymphocytes are produced?",
        "options": [
          "(a) Spleen",
          "(b) Bone marrow",
          "(c) Thymus",
          "(d) Peyer's patches"
        ],
        "answer": "(b) Bone marrow",
        "explanation": "The bone marrow is the main primary lymphoid organ where all blood cells including lymphocytes are produced and where B-lymphocytes mature. T-lymphocytes migrate to the thymus for maturation."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Mucosa-Associated Lymphoid Tissue (MALT) constitutes approximately what percentage of the total lymphoid tissue in the human body?",
        "options": [
          "(a) 10%",
          "(b) 25%",
          "(c) 50%",
          "(d) 80%"
        ],
        "answer": "(c) 50%",
        "explanation": "Lymphoid tissue located within the mucosal lining of the major tracts (respiratory, digestive, and urogenital tracts) is called Mucosa-Associated Lymphoid Tissue (MALT). It constitutes about 50 percent of the lymphoid tissue in the human body."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Human Immunodeficiency Virus (HIV) preferentially infects and destroys which specific immune cell, leading to progressive immune collapse?",
        "options": [
          "(a) Cytotoxic T-cells",
          "(b) Helper T-lymphocytes (CD4+ T-cells)",
          "(c) B-lymphocytes",
          "(d) Erythrocytes"
        ],
        "answer": "(b) Helper T-lymphocytes (CD4+ T-cells)",
        "explanation": "HIV attacks helper T-lymphocytes (TH cells / CD4+ cells). It replicates within TH cells and destroys them, resulting in a progressive decrease in helper T-lymphocyte counts, destroying cell-mediated immunity."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Once inside the host macrophage (termed the 'HIV factory'), the viral RNA genome of HIV is reverse-transcribed into viral DNA by the enzyme:",
        "options": [
          "(a) DNA Polymerase",
          "(b) Reverse Transcriptase",
          "(c) RNA Polymerase II",
          "(d) Integrase"
        ],
        "answer": "(b) Reverse Transcriptase",
        "explanation": "HIV has an RNA genome. Inside the macrophage, the viral RNA genome replicates to form viral DNA using the enzyme reverse transcriptase. The viral DNA incorporates into host DNA and directs the production of new virus particles."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is a widely used screening test for detecting HIV infection?",
        "options": [
          "(a) Widal test",
          "(b) ELISA (Enzyme Linked Immunosorbent Assay)",
          "(c) Pap smear",
          "(d) Mantoux test"
        ],
        "answer": "(b) ELISA (Enzyme Linked Immunosorbent Assay)",
        "explanation": "A widely used screening test for AIDS is ELISA (Enzyme Linked Immunosorbent Assay). Positive samples are confirmed by Western Blot test."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The property of normal cells that prevents them from uncontrolled overgrowth upon touching neighboring cells, which is lost in cancerous cells, is called:",
        "options": [
          "(a) Metastasis",
          "(b) Contact inhibition",
          "(c) Apoptosis",
          "(d) Angiogenesis"
        ],
        "answer": "(b) Contact inhibition",
        "explanation": "Normal cells show a property called contact inhibition by virtue of which contact with other cells inhibits their uncontrolled growth. Cancer cells appear to have lost this property, continuing to divide and forming tumors."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The most dreaded property of malignant tumors, where cancerous cells slough off from a primary tumor, travel via blood, and establish secondary tumors at distant sites, is termed:",
        "options": [
          "(a) Contact inhibition",
          "(b) Metastasis",
          "(c) Biopsy",
          "(d) Oncogenesis"
        ],
        "answer": "(b) Metastasis",
        "explanation": "Malignant tumors are masses of proliferating neoplastic cells. Cells sloughed from such tumors reach distant sites through blood, and wherever they lodge in the body, they start a new tumor there. This property called metastasis is the most feared characteristic of malignant cancers."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following biological response modifiers is administered to cancer patients to activate their immune system and destroy tumors?",
        "options": [
          "(a) Alpha-interferon",
          "(b) Histamine",
          "(c) Morphine",
          "(d) Penicillin"
        ],
        "answer": "(a) Alpha-interferon",
        "explanation": "Tumor cells often avoid detection and destruction by the immune system. Therefore, patients are given substances called biological response modifiers such as alpha-interferon which activates their immune system and helps destroy the tumor."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Heroin (commonly called 'smack') is chemically diacetylmorphine, obtained by the acetylation of morphine extracted from the latex of:",
        "options": [
          "(a) Cannabis sativa",
          "(b) Papaver somniferum (Opium poppy)",
          "(c) Erythroxylum coca",
          "(d) Datura stramonium"
        ],
        "answer": "(b) Papaver somniferum (Opium poppy)",
        "explanation": "Heroin, commonly called smack, is chemically diacetylmorphine which is a white, odorless, bitter crystalline compound. This is obtained by acetylation of morphine, which is extracted from the latex of poppy plant Papaver somniferum."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cannabinoids interact with cannabinoid receptors present principally in which organ of the human body, affecting the cardiovascular system?",
        "options": [
          "(a) Liver",
          "(b) Brain",
          "(c) Kidneys",
          "(d) Lungs"
        ],
        "answer": "(b) Brain",
        "explanation": "Cannabinoids interact with cannabinoid receptors present principally in the brain. Natural cannabinoids are obtained from the inflorescences of the plant Cannabis sativa. They are generally taken by inhalation and oral ingestion and produce effects on the cardiovascular system."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cocaine (coke or crack) is an alkaloid obtained from Erythroxylum coca that interferes with the transport of which neurotransmitter, causing intense euphoria and hallucinations at high doses?",
        "options": [
          "(a) Acetylcholine",
          "(b) Dopamine",
          "(c) GABA",
          "(d) Serotonin"
        ],
        "answer": "(b) Dopamine",
        "explanation": "Coca alkaloid or cocaine is obtained from coca plant Erythroxylum coca native to South America. It interferes with the transport of the neuro-transmitter dopamine. Cocaine has a potent stimulating action on the central nervous system, producing a sense of euphoria and increased energy. Excessive dosage causes hallucinations."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Chronic alcohol abuse leads to severe liver damage characterized by replacement of healthy liver tissue with non-functioning fibrous scar tissue, a condition known as:",
        "options": [
          "(a) Hepatitis A",
          "(b) Cirrhosis",
          "(c) Emphysema",
          "(d) Atherosclerosis"
        ],
        "answer": "(b) Cirrhosis",
        "explanation": "Chronic alcohol consumption damages the liver, leading to fatty liver syndrome followed by progressive fibrous degeneration called liver cirrhosis, which can result in liver failure and death. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): An individual who recovers from measles develops lifelong immunity against that specific infection.\nReason (R): Acquired immunity is characterized by immunological memory; subsequent encounter with the same pathogen elicits a heightened, rapid anamnestic response.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) correctly explains (A). Memory B and T cells generated during the primary infection rapidly recognize and destroy the pathogen upon secondary exposure before disease develops."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Organ transplant patients must be administered immunosuppressive drugs for the rest of their lives.\nReason (R): The human body is capable of differentiating 'self' and 'non-self' cells, and cell-mediated immunity (CMI) mediated by T-cells will attack and reject foreign donor tissues.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains why immunosuppressants (like Cyclosporin A) are mandatory to avert graft rejection by host T-lymphocytes."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Macrophages in HIV-infected patients act as 'HIV factories'.\nReason (R): HIV incorporates its viral DNA into the host macrophage genome and continuously sheds new viral progeny without being immediately destroyed itself.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) accurately explains (A). Unlike helper T-cells which lyse rapidly upon viral release, macrophages survive long-term while continuously producing and releasing new HIV particles."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Metastasis is the most feared characteristic of malignant cancers.\nReason (R): Cancerous cells from a malignant tumor detach and spread via bloodstream to distant vital organs, seeding secondary tumors throughout the body.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) provides the exact definition and pathology of metastasis."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Sudden cessation of regular drug or alcohol intake precipitates withdrawal syndrome.\nReason (R): Drug addiction leads to psychological and physical dependence where the body's physiological functions become reliant on the continuous presence of the substance.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). Withdrawal syndrome (anxiety, tremors, nausea, profuse sweating) is the physiological manifestation of physical dependence when the addictive drug is abruptly withheld. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Trace the life cycle of Plasmodium in the human host from the entry of sporozoites up to the release of haemozoin. [3 Marks]",
        "answer": "Life cycle of Plasmodium in human: Sporozoite entry, liver schizogony, erythrocytic cycle, and haemozoin release.",
        "explanation": "Life cycle of Plasmodium in human: Sporozoite entry, liver schizogony, erythrocytic cycle, and haemozoin release.\n\nMarking Scheme:\n• Sporozoite Entry: Female Anopheles mosquito bites human, injecting infectious sporozoites into bloodstream. [1 Mark]\n• Liver Phase: Sporozoites reach hepatocytes, multiply asexually, and burst liver cells, releasing merozoites into blood. [1 Mark]\n• Erythrocytic Phase & Haemozoin: Parasites invade RBCs, reproduce asexually, and burst RBCs synchronously. Rupture releases toxic pigment Haemozoin, triggering cyclic chills and high spiking fever every 3–4 days. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Innate Immunity and Acquired Immunity on the basis of: (i) Specificity, (ii) Time of development, (iii) Memory. [3 Marks]",
        "answer": "Comparison between Innate and Acquired Immunity.",
        "explanation": "Comparison between Innate and Acquired Immunity.\n\nMarking Scheme (1 Mark each):\n1. Specificity: Innate immunity is non-specific (acts against all foreign pathogens generally); Acquired immunity is pathogen-specific. [1 Mark]\n2. Time of development: Innate immunity is present from birth (inherited); Acquired immunity develops during an individual's lifetime upon exposure to pathogens. [1 Mark]\n3. Memory: Innate immunity lacks immunological memory; Acquired immunity possesses long-lasting memory that mounts a rapid anamnestic response upon secondary challenge. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat labelled diagram of an antibody molecule and label: Antigen-binding site, Light chain, Heavy chain, Disulfide bonds. [3 Marks]",
        "answer": "Labeled diagram of antibody H2L2 structure.",
        "explanation": "Labeled diagram of antibody H2L2 structure.\n\nMarking Scheme:\n• Diagram Structure: Y-shaped structure showing two heavy chains and two light chains. [1 Mark]\n• Labeling [2 Marks, 0.5 Mark each]:\n1. Antigen-binding site (Fab, variable regions of H & L chains)\n2. Heavy chain\n3. Light chain\n4. Disulfide bonds linking chains."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Active Immunity and Passive Immunity with one example of each. [3 Marks]",
        "answer": "Comparison between active and passive immunity.",
        "explanation": "Comparison between active and passive immunity.\n\nMarking Scheme:\n• Active Immunity: Produced when host cells are directly exposed to living or dead antigens, synthesizing their own antibodies; slow to develop but long-lasting with memory. Examples: Natural recovery from chickenpox or artificial vaccination (e.g., Polio, BCG vaccine). [1.5 Marks]\n• Passive Immunity: Conferred when ready-made, preformed antibodies are directly administered into the body; provides immediate protection but is short-lived with no memory. Examples: Maternal IgA in colostrum to infant, or Anti-tetanus serum (ATS) / anti-snake venom. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are primary and secondary lymphoid organs? Give two examples of each. [3 Marks]",
        "answer": "Primary vs secondary lymphoid organs and examples.",
        "explanation": "Primary vs secondary lymphoid organs and examples.\n\nMarking Scheme:\n• Primary Lymphoid Organs: Organs where immature lymphocytes differentiate and mature into antigen-sensitive lymphocytes. Examples: Bone marrow and Thymus. [1.5 Marks]\n• Secondary Lymphoid Organs: Organs that provide sites for interaction of mature lymphocytes with antigens, followed by proliferation to become effector cells. Examples: Spleen, lymph nodes, tonsils, Peyer's patches of small intestine, and appendix. [1.5 Marks]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the biological mechanism of Allergy. Name the antibodies involved and two drugs used to quickly reduce symptoms of allergy. [3 Marks]",
        "answer": "Allergy mechanism, IgE, mast cells, and treatment.",
        "explanation": "Allergy mechanism, IgE, mast cells, and treatment.\n\nMarking Scheme:\n• Mechanism: Exaggerated immune hypersensitivity response to environmental substances (allergens). Allergen cross-links with IgE antibodies bound to high-affinity receptors on mast cells, triggering degranulation and release of inflammatory mediators (Histamine and Serotonin). [1.5 Marks]\n• Antibody: Immunoglobulin E (IgE). [0.5 Mark]\n• Treatment: Antihistamines, adrenaline (epinephrine), and corticosteroids quickly reduce symptoms (sneezing, watery eyes, bronchoconstriction). [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Benign Tumors and Malignant Tumors. Why is metastasis considered the most dangerous characteristic of cancer? [3 Marks]",
        "answer": "Benign vs malignant tumors and danger of metastasis.",
        "explanation": "Benign vs malignant tumors and danger of metastasis.\n\nMarking Scheme:\n• Benign Tumors: Remain confined to their original anatomical location, enclosed in fibrous capsule, do not spread, and cause little damage. [1 Mark]\n• Malignant Tumors: Proliferating mass of neoplastic cells that grow invasively, damage surrounding normal tissue, and lack contact inhibition. [1 Mark]\n• Danger of Metastasis: Malignant cells slough off into blood and lymph vessels, colonizing distant vital organs (liver, lungs, brain) to seed secondary tumors, making surgical excision and cure extremely difficult. [1 Mark]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Mention the source plant, mode of intake, and physiological effect on human body of: (i) Heroin, (ii) Cocaine. [3 Marks]",
        "answer": "Source, intake, and effect of heroin and cocaine.",
        "explanation": "Source, intake, and effect of heroin and cocaine.\n\nMarking Scheme (1.5 Marks each):\n• Heroin: Source is Papaver somniferum (opium poppy, latex acetylation). Mode of intake is snorting or intravenous injection. Physiological effect: Acts as a central nervous system depressant and slows down body functions. [1.5 Marks]\n• Cocaine: Source is Erythroxylum coca (coca bush). Mode of intake is snorting or smoking. Physiological effect: Interferes with dopamine reuptake, stimulates CNS producing euphoria and intense energy; excessive dose causes severe hallucinations and paranoia. [1.5 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Autoimmunity? Name two autoimmune diseases in humans and state how the immune system behaves pathologically in autoimmune states. [3 Marks]",
        "answer": "Autoimmunity definition, mechanism, and clinical examples.",
        "explanation": "Autoimmunity definition, mechanism, and clinical examples.\n\nMarking Scheme:\n• Definition & Mechanism: An abnormal state where the immune system loses its capacity to distinguish between 'self' antigens and 'foreign' antigens, attacking and destroying the host's own body tissues. [1.5 Marks]\n• Examples [1.5 Marks, 0.75 Mark each]:\n1. Rheumatoid arthritis: Autoantibodies attack synovial joints causing chronic crippling inflammation.\n2. Myasthenia gravis / Hashimoto's thyroiditis / Multiple sclerosis: Autoimmune destruction of acetylcholine receptors at neuromuscular junctions or thyroid follicles."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "List four physical, physiological, cellular, and cytokine barriers that provide innate immunity to the human body. [3 Marks]",
        "answer": "Four barriers of innate immunity with examples.",
        "explanation": "Four barriers of innate immunity with examples.\n\nMarking Scheme (0.75 Mark each):\n1. Physical barriers: Skin (outer stratum corneum prevents entry of microbes) and Mucus coating of respiratory, gastrointestinal, and urogenital tracts.\n2. Physiological barriers: Acid in stomach, saliva in mouth, and lysozyme in tears which prevent microbial growth.\n3. Cellular barriers: Phagocytes such as PMNL-neutrophils, monocytes, and natural killer (NK) cells in blood, as well as macrophages in tissues.\n4. Cytokine barriers: Interferons secreted by virus-infected cells which protect non-infected cells from viral attack. SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the replication cycle of Human Immunodeficiency Virus (HIV) inside a human host with the help of a schematic flow chart.\n(b) Why does an HIV-infected person eventually succumb to opportunistic infections? [5 Marks]",
        "answer": "HIV replication cycle, reverse transcription, and opportunistic infection pathology.",
        "explanation": "HIV replication cycle, reverse transcription, and opportunistic infection pathology.\n\nMarking Scheme:\n(a) HIV Replication Cycle & Flow Chart [3.5 Marks]:\n• Virus binds CD4 receptors on host macrophage/helper T-cell and viral RNA enters cell. [0.5 Mark]\n• Reverse transcriptase copies viral RNA into double-stranded viral DNA. [0.75 Mark]\n• Viral DNA integrates into host cell genome via viral integrase. [0.75 Mark]\n• Host cell machinery transcribes viral DNA into new viral RNA and viral structural proteins. [0.75 Mark]\n• New virions assemble, bud from cell surface, and infect new Helper T-cells (CD4+). Macrophages act as 'HIV factory'. [0.75 Mark]\n(b) Opportunistic Infections [1.5 Marks]:\n• HIV progressively destroys Helper T-lymphocytes (CD4+ count falls below 200 cells/mm3). [0.75 Mark]\n• With cell-mediated immunity decimated, the patient cannot mount immune defense against common opportunistic pathogens (Mycobacterium tuberculosis, Cytomegalovirus, Toxoplasma, Pneumocystis carinii pneumonia, and fungi), leading to fatal complications. [0.75 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Define Cancer. Differentiate between normal cells and cancerous cells.\n(b) Explain the major causes (carcinogens) of cancer with examples.\n(c) Describe any two approaches for cancer detection and two modalities of cancer treatment. [5 Marks]",
        "answer": "Cancer pathology, carcinogens, detection, and therapy.",
        "explanation": "Cancer pathology, carcinogens, detection, and therapy.\n\nMarking Scheme:\n(a) Cancer & Normal vs Cancer Cells [1.5 Marks]:\n• Definition: Disease characterized by uncontrolled cellular proliferation forming malignant tumors. [0.5 Mark]\n• Normal vs Cancerous: Normal cells exhibit contact inhibition, programmed cell death (apoptosis), and controlled division; cancer cells lose contact inhibition, divide indefinitely, and show metastasis. [1 Mark]\n(b) Carcinogens [1.5 Marks, 0.5 Mark each]:\n• Physical: Ionizing radiation (X-rays, gamma rays) and non-ionizing radiation (UV rays) causing DNA mutations.\n• Chemical: Chemical mutagens like tobacco smoke (polycyclic hydrocarbons causing lung cancer).\n• Biological: Oncogenic viruses (possessing viral oncogenes) and activation of proto-oncogenes to cellular oncogenes.\n(c) Detection & Treatment [2 Marks]:\n• Detection: Biopsy / histopathological examination of tissue; imaging (MRI, CT scan); monoclonal antibodies against tumor markers. [1 Mark]\n• Treatment: Surgery (excision), Radiotherapy (irradiating tumor tissue), Chemotherapy (antineoplastic drugs like vincristine), and Immunotherapy (alpha-interferon). [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the complete life cycle of Plasmodium vivax with a detailed schematic diagram showing stages in both the human host and the female Anopheles mosquito.\n(b) Why is malaria called a digenetic parasite disease? [5 Marks]",
        "answer": "Plasmodium life cycle in human and mosquito hosts.",
        "explanation": "Plasmodium life cycle in human and mosquito hosts.\n\nMarking Scheme:\n(a) Life Cycle Stages & Diagram [4 Marks]:\n• In Human Host [2 Marks]:\n1. Mosquito bites, injecting sporozoites.\n2. Sporozoites enter liver cells, reproduce asexually, bursting hepatocytes.\n3. Merozoites infect RBCs, reproduce asexually, causing rupture of RBCs and release of haemozoin (inducing fever and chills).\n4. Some parasites differentiate into male and female gametocytes in RBCs.\n• In Mosquito Vector [2 Marks]:\n1. Female Anopheles bites human, ingests gametocytes with blood meal.\n2. Fertilisation and zygote (ookinete) formation occur in mosquito stomach/gut.\n3. Ookinete penetrates stomach wall, forms oocyst, producing thousands of sporozoites.\n4. Sporozoites migrate to mosquito salivary glands, ready to infect next host. [Diagram 1 Mark, Steps 3 Marks]\n(b) Digenetic Nature [1 Mark]:\n• Requires two hosts to complete its life cycle: Human host (intermediate host for asexual cycle) and Female Anopheles mosquito (primary/definitive host for sexual reproduction). [1 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is vaccination? Explain the principle behind immunization through vaccines.\n(b) How does recombinant DNA technology help in the production of modern, safer vaccines? Give an example.\n(c) Why are vaccines ineffective against an established rabies or snake venom emergency? What is administered instead? [5 Marks]",
        "answer": "Vaccination principle, recombinant vaccines, and passive immunization in emergencies.",
        "explanation": "Vaccination principle, recombinant vaccines, and passive immunization in emergencies.\n\nMarking Scheme:\n(a) Vaccination Principle [2 Marks]:\n• Introduction of antigenic preparation of weakened/attenuated or killed pathogen, or toxoids into the body. [1 Mark]\n• Principle of Memory: Generates memory B and T cells that recognize the pathogen quickly on subsequent exposure and produce massive antibodies to neutralize it before infection takes hold. [1 Mark]\n(b) Recombinant Vaccines [1.5 Marks]:\n• Produced by transferring antigenic protein genes from pathogens into microbial hosts (yeast or bacteria), allowing large- scale, safe production devoid of live pathogens. [0.75 Mark]\n• Example: Hepatitis-B vaccine produced from transgenic yeast. [0.75 Mark]\n(c) Emergency Situations & Passive Immunization [1.5 Marks]:\n• Vaccines take weeks to build active antibody titers, which is too slow when dealing with fast-acting, deadly toxins (snake venom, tetanus, rabies). [0.75 Mark]\n• Instead, preformed ready-made antibodies (Anti-venom, Anti-tetanus serum, or Anti-rabies immunoglobulins) are directly injected to confer immediate passive immunity. [0.75 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Categorize the major classes of commonly abused drugs based on their pharmacological effects, receptors, and source plants:\n(i) Opioids, (ii) Cannabinoids, (iii) Coca alkaloids.\n(b) What are hallucinogens? Name two plants with hallucinogenic properties. [5 Marks]",
        "answer": "Drug classification: opioids, cannabinoids, cocaine, and hallucinogens.",
        "explanation": "Drug classification: opioids, cannabinoids, cocaine, and hallucinogens.\n\nMarking Scheme:\n(a) Drug Classes [3.5 Marks]:\n• (i) Opioids [1.25 Marks]: Bind specific opioid receptors in CNS and GIT. Source: Latex of Papaver somniferum (opium poppy). Heroin (smack / diacetylmorphine) is a depressant that slows body functions. Taken by snorting/injection.\n• (ii) Cannabinoids [1.25 Marks]: Interact with cannabinoid receptors in brain. Source: Inflorescences of Cannabis sativa\n(hemp). Ganja, charas, bhang, hashish. Affect cardiovascular system and perception. Taken by inhalation/ingestion.\n• (iii) Coca alkaloids (Cocaine) [1 Mark]: Source: Erythroxylum coca. Interferes with dopamine transport. CNS stimulant, induces euphoria, paranoia, hallucinations. Taken by snorting/smoking.\n(b) Hallucinogens [1.5 Marks]:\n• Substances that alter sensory perceptions, causing visions, sounds, and feelings that seem real but do not exist. [0.75 Mark]\n• Plant sources: Atropa belladonna and Datura stramonium (also LSD from fungus Claviceps purpurea). [0.75 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A school student is showing noticeable behavioral changes: sudden drop in academic grades, unkempt appearance, withdrawal from family activities, aggressive outbursts, and secretive borrowing of money.\n(a) What could be the probable underlying issue?\n(b) Explain the difference between drug addiction and drug dependence.\n(c) What are the physiological symptoms of withdrawal syndrome?\n(d) Suggest three practical remedial and counseling measures. [5 Marks]",
        "answer": "Drug/substance abuse signs, addiction vs dependence, withdrawal, and intervention.",
        "explanation": "Drug/substance abuse signs, addiction vs dependence, withdrawal, and intervention.\n\nMarking Scheme:\n(a) Probable Issue [0.5 Mark]: Drug or alcohol abuse / substance addiction. [0.5 Mark]\n(b) Addiction vs Dependence [1.5 Marks]:\n• Addiction: A psychological attachment to certain effects (euphoria, temporary well-being) of drugs/alcohol, driving compulsive use despite adverse consequences. [0.75 Mark]\n• Dependence: The physical reliance of the body's physiological systems on the continued intake of the drug, where sudden discontinuation precipitates severe withdrawal symptoms. [0.75 Mark]\n(c) Withdrawal Symptoms [1 Mark]:\n• Severe anxiety, shakiness/tremors, nausea, vomiting, profuse sweating, and palpitations relieved only by resumption of the substance. [1 Mark]\n(d) Remedial Measures [2 Marks, 0.75 Mark each for any three]:\n• Seeking professional help from psychologists, psychiatrists, and de-addiction rehabilitation centers.\n• Compassionate counseling and non-judgmental parental and peer support.\n• Encouraging positive outlets: sports, yoga, creative hobbies, and stress management."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the structure and function of the human Spleen and Lymph Nodes as secondary lymphoid organs.\n(b) What is Mucosa-Associated Lymphoid Tissue (MALT)? Where is it located and what is its role? [5 Marks]",
        "answer": "Secondary lymphoid organs: Spleen, lymph nodes, and MALT.",
        "explanation": "Secondary lymphoid organs: Spleen, lymph nodes, and MALT.\n\nMarking Scheme:\n(a) Spleen and Lymph Nodes [3 Marks]:\n• Spleen [1.5 Marks]: Large bean-shaped organ containing lymphocytes and phagocytes. Acts as a blood filter by trapping blood-borne microorganisms and serves as a major reservoir of erythrocytes (graveyard of old/worn-out RBCs).\n• Lymph Nodes [1.5 Marks]: Small solid structures located along the lymphatic system. Trap microorganisms and foreign antigens circulating in lymph fluid; trapped antigens activate residing B and T lymphocytes, initiating immune response.\n(b) MALT [2 Marks]:\n• Location: Mucosal lining of the major visceral tracts: respiratory, gastrointestinal, and urogenital tracts. [1 Mark]\n• Functional Role: Constitutes ~50% of lymphoid tissue in the body; provides immediate frontline immune surveillance and antibody (secretory IgA) defense at primary mucosal surfaces exposed to external environment. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Tobacco was introduced into Europe by Christopher Columbus and has since become a global epidemic. Smoking tobacco delivers nicotine and tar into the human respiratory tract, causing systemic vascular and carcinogenic damage.'\n(a) How does nicotine affect the endocrine and cardiovascular system of smokers?\n(b) Why does cigarette smoke cause carbon monoxide toxicity and hypoxia in tissues?\n(c) List four major fatal diseases directly linked to chronic tobacco consumption. [5 Marks]",
        "answer": "Nicotine physiology, carbon monoxide hypoxia, and tobacco-induced diseases.",
        "explanation": "Nicotine physiology, carbon monoxide hypoxia, and tobacco-induced diseases.\n\nMarking Scheme:\n(a) Nicotine Action [1.5 Marks]:\n• Nicotine stimulates the adrenal glands to secrete adrenaline and nor-adrenaline into blood circulation. These hormones increase heart rate, cause vasoconstriction, and raise arterial blood pressure. [1.5 Marks]\n(b) Carbon Monoxide Toxicity [1.5 Marks]:\n• Tobacco smoke contains carbon monoxide (CO), which binds to hemoglobin with an affinity 200 times higher than oxygen, forming carboxyhemoglobin. This drastically reduces the concentration of oxyhemoglobin, causing severe cellular hypoxia (oxygen starvation) in vital tissues. [1.5 Marks]\n(c) Fatal Diseases [2 Marks, 0.5 Mark each]:\n• 1. Lung cancer (bronchogenic carcinoma)\n• 2. Coronary heart disease and atherosclerosis\n• 3. Chronic bronchitis and Emphysema (breakdown of alveolar septa)\n• 4. Cancer of the oral cavity, larynx, and urinary bladder."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the pathogenesis of Typhoid fever: causative organism, mode of entry, target organ, symptoms, and severe complications.\n(b) Name the classic historical asymptomatic carrier who infected dozens of people with typhoid. [5 Marks]",
        "answer": "Typhoid fever etiology, pathology, symptoms, and Mary Mallon.",
        "explanation": "Typhoid fever etiology, pathology, symptoms, and Mary Mallon.\n\nMarking Scheme:\n(a) Typhoid Pathogenesis [4 Marks]:\n• Causative Organism: Salmonella typhi (pathogenic bacterium). [0.5 Mark]\n• Mode of Entry: Ingested through contaminated food and drinking water. [0.5 Mark]\n• Target Organ: Enters the small intestine, penetrates intestinal mucosa, and migrates to other organs through blood circulation. [1 Mark]\n• Clinical Symptoms: Sustained high fever (39° to 40°C), weakness, stomach pain, constipation, headache, and loss of appetite. [1 Mark]\n• Severe Complications: Intestinal ulceration and perforation, leading to peritonitis and death in untreated cases. [1 Mark]\n(b) Historical Carrier [1 Mark]:\n• Mary Mallon (nicknamed 'Typhoid Mary'), a cook by profession who was an asymptomatic carrier of Salmonella typhi and continued to spread typhoid for years through the food she prepared. [1 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A person is bitten by a venomous cobra snake.\n(a) What medical treatment should be administered immediately: active vaccine or passive anti-venom? Justify.\n(b) How is anti-snake venom prepared commercially?\n(c) Why does anti-snake venom not provide lifelong immunity against future snakebites? [5 Marks]",
        "answer": "Passive immunization for snakebite, preparation of anti-venom, and lack of memory.",
        "explanation": "Passive immunization for snakebite, preparation of anti-venom, and lack of memory.\n\nMarking Scheme:\n(a) Immediate Treatment & Justification [2 Marks]:\n• Anti-venom (passive immunization) must be administered immediately. [0.5 Mark]\n• Justification: Snake venom neurotoxins/hemotoxins act within minutes to hours. The body takes days to weeks to generate an active immune response, which would be fatal. Preformed specific antibodies in anti-venom neutralize the circulating venom immediately. [1.5 Marks]\n(b) Preparation of Anti-Venom [1.5 Marks]:\n• Small, sublethal doses of snake venom are repeatedly injected into large mammals (such as horses or sheep) to hyperimmunize them. The animal's blood plasma containing high titers of specific anti-venom antibodies is harvested, purified, and bottled for clinical emergency use. [1.5 Marks]\n(c) Lack of Lifelong Immunity [1.5 Marks]:\n• Passive immunity introduces preformed foreign antibodies without activating the host's own B or T lymphocytes. Therefore, no immunological memory B or T cells are created. The injected antibodies are gradually metabolized and cleared from the body within weeks, leaving no future protection. [1.5 Marks]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "unit_num": 8,
      "title": "Microbes in Human Welfare",
      "unit_title": "Biology and Human Welfare",
      "weightage_unit": "12 Marks (Unit VIII)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Lactic Acid Bacteria (LAB) convert milk into curd and improve its nutritional quality by significantly increasing the content of which vitamin?",
        "options": [
          "(a) Vitamin A",
          "(b) Vitamin B12",
          "(c) Vitamin C",
          "(d) Vitamin D"
        ],
        "answer": "(b) Vitamin B12",
        "explanation": "During the conversion of milk into curd, Lactic Acid Bacteria (LAB) produce acids that coagulate and partially digest milk proteins. LAB also enhances its nutritional value by significantly increasing the concentration of Vitamin B12 and plays a beneficial role in checking disease-causing microbes in our stomach."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The large holes in 'Swiss cheese' are due to the production of a large amount of carbon dioxide gas by which bacterium?",
        "options": [
          "(a) Propionibacterium sharmanii",
          "(b) Penicillium roqueforti",
          "(c) Streptococcus thermophilus",
          "(d) Lactobacillus acidophilus"
        ],
        "answer": "(a) Propionibacterium sharmanii",
        "explanation": "The large holes in 'Swiss cheese' are due to the production of large amounts of CO2 by the bacterium named Propionibacterium sharmanii. In contrast, Roquefort cheese is ripened by growing a specific fungus (Penicillium roqueforti) on them."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which microorganism is used in the brewing industry for fermenting malted cereals and fruit juices to produce ethanol?",
        "options": [
          "(a) Saccharomyces cerevisiae (Brewer's yeast)",
          "(b) Aspergillus niger",
          "(c) Acetobacter aceti",
          "(d) Clostridium butylicum"
        ],
        "answer": "(a) Saccharomyces cerevisiae (Brewer's yeast)",
        "explanation": "Saccharomyces cerevisiae, commonly called Brewer's yeast (and Baker's yeast in baking), is utilized for fermenting malted barley, wheat, and fruit juices to produce ethanol in breweries."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Alexander Fleming discovered penicillin in 1928 when he observed that a mould inhibited the growth of which bacterium in unwashed culture plates?",
        "options": [
          "(a) Escherichia coli",
          "(b) Staphylococcus",
          "(c) Streptococcus",
          "(d) Salmonella typhi"
        ],
        "answer": "(b) Staphylococcus",
        "explanation": "Alexander Fleming while working on Staphylococci bacteria once observed a mould growing in one of his unwashed culture plates, around which Staphylococci could not grow. He found that it was produced by a fungus named Penicillium notatum, and named it Penicillin."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following organic acids is produced commercially through fermentation by the fungus Aspergillus niger?",
        "options": [
          "(a) Acetic acid",
          "(b) Citric acid",
          "(c) Butyric acid",
          "(d) Lactic acid"
        ],
        "answer": "(b) Citric acid",
        "explanation": "Aspergillus niger (a fungus) is used commercially for the industrial production of citric acid. Acetobacter aceti produces acetic acid, Clostridium butylicum produces butyric acid, and Lactobacillus produces lactic acid."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Streptokinase, produced by the bacterium Streptococcus and modified by genetic engineering, is used clinically as a:",
        "options": [
          "(a) Clot buster to dissolve blood clots from blood vessels of heart attack patients",
          "(b) Blood cholesterol-lowering agent",
          "(c) Immunosuppressant in organ transplantation",
          "(d) Biological pesticide"
        ],
        "answer": "(a) Clot buster to dissolve blood clots from blood vessels of heart attack patients",
        "explanation": "Streptokinase produced by the bacterium Streptococcus and modified by genetic engineering is used as a 'clot buster' for removing clots from the blood vessels of patients who have undergone myocardial infarction leading to heart attack."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cyclosporin A, an important bioactive molecule used as an immunosuppressive agent in organ-transplant patients, is produced by the fungus:",
        "options": [
          "(a) Trichoderma polysporum",
          "(b) Monascus purpureus",
          "(c) Penicillium notatum",
          "(d) Aspergillus niger"
        ],
        "answer": "(a) Trichoderma polysporum",
        "explanation": "Cyclosporin A, which is used as an immunosuppressive agent in organ-transplant patients, is produced by the fungus Trichoderma polysporum."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Statins, produced by the yeast Monascus purpureus, lower blood cholesterol levels by:",
        "options": [
          "(a) Binding directly to dietary cholesterol in the gut",
          "(b) Competitively inhibiting the enzyme HMG-CoA reductase responsible for cholesterol synthesis",
          "(c) Degrading LDL particles in the liver",
          "(d) Stimulating bile excretion"
        ],
        "answer": "(b) Competitively inhibiting the enzyme HMG-CoA reductase responsible for cholesterol synthesis",
        "explanation": "Statins produced by the yeast Monascus purpureus have been commercialized as blood cholesterol- lowering agents. It acts by competitively inhibiting the rate-limiting enzyme (HMG-CoA reductase) responsible for the endogenous synthesis of cholesterol in the liver."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During secondary (biological) sewage treatment, the primary effluent is vigorously agitated in large aeration tanks to encourage the growth of 'flocs'. What are flocs?",
        "options": [
          "(a) Aggregates of protozoa and microalgae",
          "(b) Masses of aerobic bacteria associated with fungal filaments to form mesh-like structures",
          "(c) Precipitates of heavy metal salts and sand",
          "(d) Colonies of anaerobic methanogens"
        ],
        "answer": "(b) Masses of aerobic bacteria associated with fungal filaments to form mesh-like structures",
        "explanation": "Flocs are masses of aerobic bacteria held together and associated with fungal filaments to form mesh-like structures. These aerobic microbes consume the major part of the organic matter in the effluent, significantly reducing BOD."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Biochemical Oxygen Demand (BOD) is a measure of:",
        "options": [
          "(a) The total dissolved oxygen in a water sample",
          "(b) The amount of oxygen consumed by aerobic microorganisms to oxidize all organic matter in one liter of water",
          "(c) The amount of carbon monoxide produced by algae",
          "(d) The rate of photosynthesis in an aquatic ecosystem"
        ],
        "answer": "(b) The amount of oxygen consumed by aerobic microorganisms to oxidize all organic matter in one liter of water",
        "explanation": "BOD refers to the amount of oxygen that would be consumed if all the organic matter in one liter of water were oxidized by bacteria. High BOD indicates high organic pollution; low BOD indicates cleaner water."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a sewage treatment plant, the sedimented bacterial-fungal flocs in the settling tank are called:",
        "options": [
          "(a) Primary sludge",
          "(b) Activated sludge",
          "(c) Biogas slurry",
          "(d) Humus"
        ],
        "answer": "(b) Activated sludge",
        "explanation": "Once the BOD of sewage is reduced significantly, the effluent is passed into a settling tank where the bacterial flocs are allowed to sediment. This sediment is called activated sludge."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Biogas produced in anaerobic sludge digesters and gobar gas plants is predominantly composed of:",
        "options": [
          "(a) Methane (CH4), Carbon dioxide (CO2), and Hydrogen sulfide (H2S)",
          "(b) Carbon monoxide, Hydrogen, and Nitrogen",
          "(c) Ethane, Propane, and Oxygen",
          "(d) Pure Methane gas only"
        ],
        "answer": "(a) Methane (CH4), Carbon dioxide (CO2), and Hydrogen sulfide (H2S)",
        "explanation": "During anaerobic sludge digestion, methanogenic bacteria digest the bacteria and fungi in the sludge, producing a mixture of gases consisting of methane (50–70%), carbon dioxide (30–40%), and traces of H2S and H2, which is inflammable."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Methanobacterium is found in which of the following natural habitats?",
        "options": [
          "(a) Aeration tank of sewage treatment plant",
          "(b) Rumen (part of stomach) of cattle and anaerobic sludge",
          "(c) Leaf margins of green plants",
          "(d) Saline coastal waters"
        ],
        "answer": "(b) Rumen (part of stomach) of cattle and anaerobic sludge",
        "explanation": "Methanogenic bacteria like Methanobacterium are found in the anaerobic sludge of STPs and commonly in the rumen of cattle, where they break down cellulosic food. The dung of cattle (gobar) is rich in these bacteria, used in biogas production."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The technology of biogas production in rural India was developed largely through the collaborative efforts of:",
        "options": [
          "(a) Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC)",
          "(b) Council of Scientific and Industrial Research (CSIR) and WHO",
          "(c) ICAR and Department of Biotechnology (DBT)",
          "(d) Ministry of Health and Family Welfare"
        ],
        "answer": "(a) Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC)",
        "explanation": "The technology of biogas production was developed in India mainly due to the efforts of Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following biological agents is commonly employed to control aphids and mosquitoes respectively in crop fields?",
        "options": [
          "(a) Ladybird beetles (for aphids) and Dragonflies (for mosquitoes)",
          "(b) Trichoderma and Baculoviruses",
          "(c) Bacillus thuringiensis and Glomus",
          "(d) Nostoc and Anabaena"
        ],
        "answer": "(a) Ladybird beetles (for aphids) and Dragonflies (for mosquitoes)",
        "explanation": "The very familiar beetle with red and black markings—the Ladybird—is effective in getting rid of aphids, while Dragonflies are used to control mosquito populations biologically."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Bacillus thuringiensis (Bt) acts as an effective biocontrol agent against caterpillar pests because:",
        "options": [
          "(a) It infects caterpillars with a fungal mycelium",
          "(b) Ingested Bt spores release toxic insecticidal protein crystals in the alkaline gut of larvae, killing them",
          "(c) It secretes acidic antibiotics on plant leaves",
          "(d) It acts as a mechanical barrier"
        ],
        "answer": "(b) Ingested Bt spores release toxic insecticidal protein crystals in the alkaline gut of larvae, killing them",
        "explanation": "Bt spores are mixed with water and sprayed onto vulnerable plants. When insect larvae eat them, the toxin is activated in the alkaline midgut, creating pores that cause cell swelling and lysis, killing the caterpillar without harming beneficial non- target insects."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Baculoviruses used as biological control agents belong to the genus:",
        "options": [
          "(a) Nucleopolyhedrovirus (NPV)",
          "(b) Retrovirus",
          "(c) Adenovirus",
          "(d) Caulimovirus"
        ],
        "answer": "(a) Nucleopolyhedrovirus (NPV)",
        "explanation": "The majority of baculoviruses used as biological control agents belong to the genus Nucleopolyhedrovirus. These viruses are excellent candidates for species-specific, narrow spectrum insecticidal applications."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why are Baculoviruses considered ideal for Integrated Pest Management (IPM) programmes in ecologically sensitive areas?",
        "options": [
          "(a) They kill all insects indiscriminately including honeybees",
          "(b) They have no negative impacts on plants, mammals, birds, fish, or non-target beneficial insects",
          "(c) They act as synthetic chemical fertilizers",
          "(d) They eradicate soil bacteria"
        ],
        "answer": "(b) They have no negative impacts on plants, mammals, birds, fish, or non-target beneficial insects",
        "explanation": "Baculoviruses have been shown to have no negative impacts on plants, mammals, birds, fish, or even on non-target insects. This is especially desirable when beneficial insects are being conserved to aid in an overall IPM programme."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A free-living fungus that is very common in the root ecosystems and acts as an effective biocontrol agent against several soil- borne plant pathogens is:",
        "options": [
          "(a) Trichoderma",
          "(b) Aspergillus",
          "(c) Puccinia",
          "(d) Rhizopus"
        ],
        "answer": "(a) Trichoderma",
        "explanation": "Trichoderma species are free-living fungi that are very common in the root ecosystems. They are effective biocontrol agents of several soil-borne fungal plant pathogens."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Rhizobium forms symbiotic root nodules in leguminous plants to fix atmospheric nitrogen. Which of the following are free- living nitrogen-fixing bacteria in soil?",
        "options": [
          "(a) Azotobacter and Azospirillum",
          "(b) Glomus and Trichoderma",
          "(c) Lactobacillus and Streptococcus",
          "(d) Methanobacterium and Clostridium"
        ],
        "answer": "(a) Azotobacter and Azospirillum",
        "explanation": "Other bacteria can fix atmospheric nitrogen while free-living in the soil (e.g., Azospirillum and Azotobacter), thus enriching the nitrogen content of the soil."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The fungal symbiont in a Mycorrhizal association (such as members of the genus Glomus) benefits the host plant primarily by:",
        "options": [
          "(a) Fixing atmospheric nitrogen directly",
          "(b) Absorbing phosphorus from soil and passing it to the plant",
          "(c) Secreting juvenile hormone to induce flowering",
          "(d) Producing ethyl alcohol"
        ],
        "answer": "(b) Absorbing phosphorus from soil and passing it to the plant",
        "explanation": "Fungi belonging to the genus Glomus form mycorrhiza. The fungal symbiont absorbs phosphorus from soil and passes it to the plant. Plants with mycorrhizal association also show resistance to root-borne pathogens, tolerance to salinity and drought, and overall growth increase."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In paddy fields, which autotrophic microorganisms serve as an important biofertiliser by fixing atmospheric nitrogen and adding organic matter to the soil?",
        "options": [
          "(a) Cyanobacteria (Blue-green algae like Anabaena and Nostoc)",
          "(b) Mycorrhizae",
          "(c) Baker's yeast",
          "(d) Methanogens"
        ],
        "answer": "(a) Cyanobacteria (Blue-green algae like Anabaena and Nostoc)",
        "explanation": "Cyanobacteria are autotrophic microbes widely distributed in aquatic and terrestrial environments, many of which can fix atmospheric nitrogen (e.g., Anabaena, Nostoc, Oscillatoria). In paddy fields, cyanobacteria serve as an essential biofertiliser."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following enzymes is used in detergent formulations to remove oily stains from laundry clothes?",
        "options": [
          "(a) Pectinase",
          "(b) Lipase",
          "(c) Protease",
          "(d) Amylase"
        ],
        "answer": "(b) Lipase",
        "explanation": "Lipases are used in detergent formulations and are helpful in removing oily stains from the laundry."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Bottled fruit juices bought from the market are clearer compared to homemade fruit juices because commercially bottled juices are clarified by using:",
        "options": [
          "(a) Pectinases and Proteases",
          "(b) Lipases and Cellulases",
          "(c) Streptokinases and Amylases",
          "(d) Glucanases and Ligases"
        ],
        "answer": "(a) Pectinases and Proteases",
        "explanation": "Bottled fruit juices bought from the market are clearer as compared to those made at home because the bottled juices are clarified by the use of pectinases and proteases."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The traditional fermented alcoholic beverage 'Toddy' of southern India is prepared by fermenting the sap from:",
        "options": [
          "(a) Palms",
          "(b) Sugarcane",
          "(c) Coconut water",
          "(d) Cashew apples"
        ],
        "answer": "(a) Palms",
        "explanation": "'Toddy', a traditional drink of some parts of southern India, is made by fermenting sap from palms using naturally occurring wild yeasts. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Biochemical Oxygen Demand (BOD) is a reliable indicator of the degree of organic pollution in a water body.\nReason (R): BOD measures the amount of oxygen consumed by aerobic microorganisms to break down organic matter in a water sample.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) explains (A). The greater the BOD of wastewater, the greater is its polluting potential, because more oxygen is consumed by microbes to oxidize the high organic load."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Secondary treatment of sewage is fundamentally a biological process.\nReason (R): It utilizes naturally occurring aerobic and anaerobic microbes to mineralize and degrade organic wastes.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). Primary treatment is physical (filtration and sedimentation), whereas secondary treatment uses aerobic flocs and anaerobic digesters (biological agents)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Baculoviruses are highly recommended in Integrated Pest Management (IPM) programmes.\nReason (R): Baculoviruses have narrow-spectrum insecticidal action and do not harm non-target beneficial insects.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Because Nucleopolyhedroviruses target only specific pest species without harming pollinators, predatory beetles, fish, birds, or mammals, they are ideal for IPM."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Chemical fertilisers must be gradually replaced by biofertilisers in sustainable agriculture.\nReason (R): Excessive use of chemical fertilisers causes severe soil degradation, groundwater pollution, and eutrophication of water bodies.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) explains (A). Biofertilisers (Rhizobium, Mycorrhiza, Blue-green algae) restore soil fertility sustainably without creating toxic runoff or environmental hazards."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Curd is nutritionally superior to raw milk.\nReason (R): Lactic acid bacteria synthesize large amounts of Vitamin B12 and produce organic acids that check harmful gut microflora.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the biological reason for curd's superior nutritional and digestive benefits. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Name the microbial source and commercial applications of: (i) Cyclosporin A, (ii) Statins, (iii) Streptokinase. [3 Marks]",
        "answer": "Microbial sources and applications of bioactive molecules.",
        "explanation": "Microbial sources and applications of bioactive molecules.\n\nMarking Scheme (1 Mark each):\n(i) Cyclosporin A: Produced by fungus Trichoderma polysporum. Used as an immunosuppressive agent in organ-transplant patients to prevent graft rejection. [1 Mark]\n(ii) Statins: Produced by yeast Monascus purpureus. Used as blood cholesterol-lowering agents (competitively inhibits HMG-CoA reductase). [1 Mark]\n(iii) Streptokinase: Produced by bacterium Streptococcus (modified genetically). Used as a 'clot buster' to dissolve intravasular blood clots in myocardial infarction patients. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of Lactic Acid Bacteria (LAB) in: (i) Conversion of milk to curd, (ii) Human gut health. [3 Marks]",
        "answer": "LAB in milk curdling and gut probiotics.",
        "explanation": "LAB in milk curdling and gut probiotics.\n\nMarking Scheme:\n• Milk to Curd [1.5 Marks]: A small inoculum (starter) of curd added to fresh milk at suitable temperature multiplies LAB. LAB ferment lactose into lactic acid, which coagulates and partially digests milk protein (casein), setting milk into curd and increasing Vitamin B12. [1.5 Marks]\n• Gut Health [1.5 Marks]: In the human stomach and intestines, LAB play a beneficial probiotic role by maintaining an acidic pH that checks the growth and colonization of harmful putrefactive and disease-causing pathogens. [1.5 Marks]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the Primary Treatment phase of municipal sewage before it undergoes biological oxidation. [3 Marks]",
        "answer": "Primary sewage treatment: Filtration and sedimentation.",
        "explanation": "Primary sewage treatment: Filtration and sedimentation.\n\nMarking Scheme:\n• Nature of process: Physical removal of large and small particulate debris through two sequential mechanical steps. [0.5 Mark]\n• Sequential Filtration: Floating debris (paper, plastics, rags) is removed by wire mesh screens (bar screens). [1 Mark]\n• Grit Settling / Primary Sedimentation: The filtered sewage enters primary settling tanks where grit (coarse soil and small pebbles) and suspended solid organic matter settle down under gravity. [1 Mark]\n• Output: The settled solids form 'Primary Sludge' and the supernatant liquid constitutes 'Primary Effluent' that moves to secondary treatment. [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Biochemical Oxygen Demand (BOD)? How does it correlate with the organic pollution level of a water body? [3 Marks]",
        "answer": "BOD definition and relationship with organic pollution.",
        "explanation": "BOD definition and relationship with organic pollution.\n\nMarking Scheme:\n• Definition: Biochemical Oxygen Demand (BOD) is the amount of dissolved oxygen in milligrams required by aerobic microorganisms to break down and oxidize all the organic matter present in one liter of water sample at 20°C over 5 days. [1.5 Marks]\n• Correlation with Pollution: BOD is directly proportional to the amount of biodegradable organic waste in water. High BOD indicates heavy organic pollution, which rapidly depletes dissolved oxygen and causes fish kills. As microbes digest the organic waste, BOD declines, indicating purification. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a schematic diagram of a typical rural Biogas plant (Gobar gas plant) and label: Slurry inlet, Digester, Floating gas holder, Gas outlet, Spent slurry outlet. [3 Marks]",
        "answer": "Biogas plant diagram and labels.",
        "explanation": "Biogas plant diagram and labels.\n\nMarking Scheme:\n• Diagram Neatness [1 Mark]: Cylindrical digester tank (10–15 ft deep) with floating gas holder over slurry. [1 Mark]\n• Correct Labeling [2 Marks, 0.5 Mark each for any four]:\n1. Inlet chamber (Dung and water mix / slurry)\n2. Anaerobic Digester pit\n3. Floating gas holder (collects CH4, CO2)\n4. Gas outlet pipe (to household stove)\n5. Overflow chamber (Spent slurry outlet used as organic fertilizer)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain how Baculoviruses (Nucleopolyhedrovirus) act as effective biocontrol agents. Why are they particularly desirable in ecologically fragile areas? [3 Marks]",
        "answer": "Baculovirus biocontrol mechanism and ecological safety.",
        "explanation": "Baculovirus biocontrol mechanism and ecological safety.\n\nMarking Scheme:\n• Biocontrol Action: Baculoviruses (genus Nucleopolyhedrovirus) are pathogens that attack insects and other arthropods. They possess species-specific, narrow-spectrum insecticidal action. [1.5 Marks]\n• Ecological Desirability: They have no negative effects on plants, mammals, birds, fish, or non-target insects (e.g., honeybees). When applied in ecologically sensitive zones, they eliminate target pests while preserving beneficial pollinator and predator biodiversity, ideal for Integrated Pest Management (IPM). [1.5 Marks]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are Mycorrhizae? Name the genus of fungus commonly involved and mention two benefits derived by the host plant from this association. [3 Marks]",
        "answer": "Mycorrhiza definition, Glomus genus, and symbiotic benefits.",
        "explanation": "Mycorrhiza definition, Glomus genus, and symbiotic benefits.\n\nMarking Scheme:\n• Definition & Genus: Mycorrhiza is a symbiotic mutualistic association between a fungus and the roots of higher plants. Common genus: Glomus. [1 Mark]\n• Two Benefits to Plant [2 Marks, 1 Mark each for any two]:\n1. Enhanced nutrient absorption: Fungal hyphae explore vast soil volume and efficiently absorb phosphorus and pass it to the plant roots.\n2. Stress and disease resistance: Imparts resistance to root-borne pathogens and increases tolerance to salinity and drought, promoting robust vegetative growth."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Name two free-living and two symbiotic nitrogen-fixing microorganisms that enrich soil fertility as biofertilisers. [3 Marks]",
        "answer": "Free-living and symbiotic nitrogen fixers.",
        "explanation": "Free-living and symbiotic nitrogen fixers.\n\nMarking Scheme:\n• Free-living Nitrogen Fixers [1.5 Marks, 0.75 Mark each]:\n1. Azotobacter (aerobic bacterium in soil)\n2. Azospirillum (bacterium associated with grass roots) (Also free-living cyanobacteria: Nostoc, Anabaena).\n• Symbiotic Nitrogen Fixers [1.5 Marks, 0.75 Mark each]:\n1. Rhizobium (in root nodules of legumes)\n2. Frankia (in non-leguminous plants like Alnus/Casuarina) / Anabaena azollae in Azolla water fern."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Write the name of the microbial source and chemical produced for: (i) Citric acid, (ii) Acetic acid, (iii) Butyric acid. [3 Marks]",
        "answer": "Microbial sources for organic acids.",
        "explanation": "Microbial sources for organic acids.\n\nMarking Scheme (1 Mark each):\n(i) Citric acid: Fungus Aspergillus niger. [1 Mark]\n(ii) Acetic acid: Bacterium Acetobacter aceti. [1 Mark]\n(iii) Butyric acid: Bacterium Clostridium butylicum. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Distilled and Non-distilled alcoholic beverages produced by fermentation, giving two examples of each. [3 Marks]",
        "answer": "Distilled vs non-distilled alcoholic beverages with examples.",
        "explanation": "Distilled vs non-distilled alcoholic beverages with examples.\n\nMarking Scheme:\n• Non-distilled Beverages: Produced by direct alcoholic fermentation of fruit juices or malt without subsequent distillation; have lower alcohol percentage (3–12%). Examples: Wine and Beer. [1.5 Marks]\n• Distilled Beverages: The fermented broth is distilled to concentrate ethanol, yielding much higher alcohol content (40– 50%). Examples: Whisky, Brandy, Rum, Vodka. [1.5 Marks] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the complete step-by-step process of municipal Sewage Treatment in a modern sewage treatment plant (STP).\n(b) Differentiate between Primary Sludge and Activated Sludge. [5 Marks]",
        "answer": "Sewage treatment stages (Primary and Secondary) and sludge comparison.",
        "explanation": "Sewage treatment stages (Primary and Secondary) and sludge comparison.\n\nMarking Scheme:\n(a) Sewage Treatment Steps [3.5 Marks]:\n• Primary Treatment (Physical) [1 Mark]: Sequential filtration removes floating debris; primary sedimentation in settling tanks allows grit and heavy solids to settle as primary sludge, separating primary effluent.\n• Secondary Treatment (Biological) [2.5 Marks]:\n1. Primary effluent pumped into large aeration tanks; continuously agitated and aerated.\n2. Vigorous aerobic microbial growth forms 'flocs' (bacteria + fungal mesh). Flocs oxidize organic matter, drastically reducing BOD. [1 Mark]\n3. Effluent transferred to settling tank; flocs sediment to form 'Activated Sludge'. [0.5 Mark]\n4. A small part of activated sludge returns to aeration tank as inoculum; bulk is pumped to Anaerobic Sludge Digesters. Anaerobic bacteria digest flocs, producing Biogas (CH4, CO2, H2S). Clean treated water released into rivers. [1 Mark]\n(b) Primary Sludge vs Activated Sludge [1.5 Marks]:\n• Primary sludge is formed by physical sedimentation of raw solids in primary settling tank; contains no flocs or aerobic biological biomass. [0.75 Mark]\n• Activated sludge is formed during secondary biological treatment; consists of living microbial biomass (aerobic bacterial- fungal flocs) that is highly active in degrading waste. [0.75 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Biogas? Describe the structure, working, and microbial basis of a rural Biogas Plant.\n(b) What are the advantages of using biogas over conventional biomass fuels like firewood and dry cow dung cakes? [5 Marks]",
        "answer": "Biogas composition, plant working, and socio-environmental advantages.",
        "explanation": "Biogas composition, plant working, and socio-environmental advantages.\n\nMarking Scheme:\n(a) Structure & Working of Biogas Plant [3.5 Marks]:\n• Biogas: Inflammable gas mixture containing predominantly methane (50–70%), CO2 (30–40%), H2, and H2S. [0.5 Mark]\n• Structure: Deep concrete digester pit (10–15 ft deep) covered with floating steel/masonry gas holder. Has slurry inlet pipe and spent slurry outlet. [1 Mark]\n• Working: Dung is mixed with water (1:1 slurry) and fed into digester. Anaerobic methanogens (Methanobacterium) break down cellulose into organic acids, then into methane and CO2. Gas rises and collects in holder, piped to houses for cooking/lighting. Spent slurry used as manure. [2 Marks]\n(b) Advantages over Conventional Fuels [1.5 Marks, 0.5 Mark each]:\n• Smokeless, non-polluting clean burning fuel with high calorific efficiency (prevents respiratory illness in rural women).\n• Conserves trees by substituting firewood; prevents deforestation.\n• Leftover digested slurry is rich in nitrogen and phosphorus, acting as excellent organic manure without fly/pathogen breeding."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the concept of Biological Control of pests and plant diseases with three distinct examples.\n(b) Why is biocontrol considered far superior to chemical insecticides and pesticides? [5 Marks]",
        "answer": "Biocontrol principles, examples (Bt, Trichoderma, NPV), and ecological advantages.",
        "explanation": "Biocontrol principles, examples (Bt, Trichoderma, NPV), and ecological advantages.\n\nMarking Scheme:\n(a) Biocontrol Concept & Examples [3.5 Marks]:\n• Concept: Method of controlling plant pests and diseases using natural predators, parasites, or pathogens rather than synthetic chemicals, relying on natural ecological predation checks. [1 Mark]\n• Examples [2.5 Marks, ~0.8 Mark each]:\n1. Bacillus thuringiensis (Bt): Spores spray controls butterfly caterpillars by disrupting alkaline midgut.\n2. Trichoderma: Free-living root fungus that parasitizes and inhibits pathogenic soil fungi.\n3. Baculoviruses (Nucleopolyhedrovirus): Narrow-spectrum species-specific insecticidal viruses controlling caterpillars and beetles.\n(b) Superiority over Chemical Pesticides [1.5 Marks, 0.5 Mark each]:\n• Non-toxic to non-target beneficial organisms, wildlife, pollinators, and humans.\n• Biodegradable; does not accumulate in food chains (no biomagnification).\n• Pests do not easily evolve resistance, preserving natural ecological balance."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What are Biofertilisers? Categorize the major groups of biofertilisers based on the microorganisms involved, giving two examples for each group.\n(b) Explain why Cyanobacteria are considered invaluable biofertilisers in paddy agriculture. [5 Marks]",
        "answer": "Biofertilisers classification (Bacteria, Fungi, Cyanobacteria) and cyanobacteria in rice fields.",
        "explanation": "Biofertilisers classification (Bacteria, Fungi, Cyanobacteria) and cyanobacteria in rice fields.\n\nMarking Scheme:\n(a) Biofertilisers Definition & Categories [3.5 Marks]:\n• Definition: Organisms that enrich the nutrient quality of the soil through biological processes like nitrogen fixation, phosphorus solubilization, and organic matter synthesis. [0.5 Mark]\n• Categories [3 Marks, 1 Mark each]:\n1. Bacteria: (i) Symbiotic: Rhizobium in legume root nodules. (ii) Free-living: Azotobacter and Azospirillum in soil.\n2. Fungi: Mycorrhizal fungi (Glomus genus) forming mutualistic associations with roots, absorbing phosphorus.\n3. Cyanobacteria: Nitrogen-fixing blue-green algae: Anabaena, Nostoc, Oscillatoria.\n(b) Cyanobacteria in Paddy Fields [1.5 Marks]:\n• Paddy (rice) fields maintain standing water that provides optimal phototrophic aquatic habitat for cyanobacteria. [0.5 Mark]\n• Heterocyst-bearing cyanobacteria (Anabaena, Nostoc) fix substantial atmospheric nitrogen into bioavailable ammonium compounds while continually adding rich organic biomass upon decomposition, dramatically boosting paddy yields without chemical fertilizer costs. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Microorganisms are ubiquitous and have been harnessed by humans for thousands of years. Today, industrial biotechnology exploits microbial metabolism for mass-producing medicines, industrial enzymes, and fine organic chemicals.'\n(a) Name two industrial enzymes and explain their commercial applications.\n(b) How was penicillin discovered, and who received the Nobel Prize for establishing its full therapeutic potential?\n(c) Name the microorganism used for producing Roquefort cheese and Swiss cheese respectively. [5 Marks]",
        "answer": "Industrial enzymes, penicillin history, and cheese microbes.",
        "explanation": "Industrial enzymes, penicillin history, and cheese microbes.\n\nMarking Scheme:\n(a) Industrial Enzymes [2 Marks, 1 Mark each]:\n• Lipases: Used in commercial laundry detergents to hydrolyze fatty and oily stains.\n• Pectinases and Proteases: Used in fruit processing industries to clarify bottled fruit juices by digesting suspended pectins and cellular debris.\n(b) Penicillin Discovery & Nobel Prize [1.5 Marks]:\n• Alexander Fleming discovered it in 1928 by noticing inhibition of Staphylococcus around Penicillium notatum mold. [0.75 Mark]\n• Ernst Chain and Howard Florey established its clinical antibiotic potential; Fleming, Chain, and Florey were jointly awarded the Nobel Prize in 1945. [0.75 Mark]\n(c) Cheese Microorganisms [1.5 Marks]:\n• Roquefort cheese: Ripened by the fungus Penicillium roqueforti. [0.75 Mark]\n• Swiss cheese: Fermented by the bacterium Propionibacterium sharmanii. [0.75 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A river flowing through an industrial city suddenly experiences a massive fish kill. Environmental scientists measure a very high BOD and low dissolved oxygen near an urban sewage outfall.\n(a) Explain why a discharge of untreated sewage causes a spike in BOD and drop in dissolved oxygen.\n(b) Why does this drop lead to fish mortality?\n(c) Describe the action plans launched by the Indian government to clean polluted major rivers. [5 Marks]",
        "answer": "BOD dynamics, fish mortality, and Ganga/Yamuna Action Plans.",
        "explanation": "BOD dynamics, fish mortality, and Ganga/Yamuna Action Plans.\n\nMarking Scheme:\n(a) Sewage discharge & BOD spike [2 Marks]:\n• Raw sewage contains huge loads of biodegradable organic waste. Aerobic heterotrophic bacteria rapidly proliferate and consume dissolved oxygen from the water to oxidize this waste, leading to a massive spike in BOD and rapid oxygen depletion (hypoxia/anoxia). [2 Marks]\n(b) Fish Mortality [1 Mark]:\n• Fish and other aquatic gill-breathing organisms require dissolved oxygen (>4-5 mg/L) for cellular respiration. Severe hypoxia suffocates fish, causing mass mortality. [1 Mark]\n(c) Government River Action Plans [2 Marks]:\n• The Ministry of Environment and Forests initiated the Ganga Action Plan (GAP) and Yamuna Action Plan (YAP). [1 Mark]\n• Under these plans, massive capacity Sewage Treatment Plants (STPs) were constructed along riverbanks so that only treated effluent with low BOD is released into the rivers. [1 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Discuss the microbial production and mechanism of action of:\n(a) Statins\n(b) Cyclosporin A\n(c) Streptokinase. [5 Marks]",
        "answer": "Detailed pharmacology of statins, cyclosporin A, and streptokinase.",
        "explanation": "Detailed pharmacology of statins, cyclosporin A, and streptokinase.\n\nMarking Scheme:\n(a) Statins [2 Marks]:\n• Microbial source: Yeast Monascus purpureus. [0.5 Mark]\n• Mechanism of action: Competitively inhibits the enzyme HMG-CoA reductase, which is the rate-limiting enzyme in hepatic biosynthesis of cholesterol, thereby lowering circulating blood cholesterol levels. [1.5 Marks]\n(b) Cyclosporin A [1.5 Marks]:\n• Microbial source: Fungus Trichoderma polysporum. [0.5 Mark]\n• Mechanism of action: Powerful immunosuppressive drug that selectively inhibits T-cell activation and interleukin-2 synthesis, averting graft rejection in organ-transplant patients. [1 Mark]\n(c) Streptokinase [1.5 Marks]:\n• Microbial source: Bacterium Streptococcus (genetically modified). [0.5 Mark]\n• Mechanism of action: Acts as a plasminogen activator (clot buster) that converts plasminogen to plasmin, enzymatically dissolving fibrin clots inside coronary arteries to prevent irreversible myocardial infarction damage. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the role of microbes in household food processing:\n(a) Curd formation\n(b) Bread making\n(c) Traditional South Indian foods (Dosa, Idli, Toddy). [5 Marks]",
        "answer": "Microbes in curd, bread, dosa, idli, and toddy.",
        "explanation": "Microbes in curd, bread, dosa, idli, and toddy.\n\nMarking Scheme:\n(a) Curd Formation [1.5 Marks]:\n• Inoculum of Lactic Acid Bacteria (Lactobacillus / LAB) added to lukewarm milk converts lactose to lactic acid, coagulating milk proteins (casein), boosting Vitamin B12, and checking pathogenic stomach microbes. [1.5 Marks]\n(b) Bread Making [1.5 Marks]:\n• Baker's yeast (Saccharomyces cerevisiae) ferment sugars in kneaded wheat flour, producing ethanol and large volumes of CO2 gas. Escaping CO2 bubbles leaven the dough, giving bread its soft, porous, and spongy texture. [1.5 Marks]\n(c) Traditional Foods [2 Marks]:\n• Dosa & Idli [1 Mark]: Fermentation of rice and black gram batter by bacteria produces CO2, giving puffed-up texture.\n• Toddy [1 Mark]: Traditional drink of Southern India made by fermenting sap from palms using natural wild yeasts."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Activated Sludge? How is it generated and what is its dual fate in sewage treatment plants?\n(b) Name the three gases that constitute biogas produced in anaerobic digesters. [5 Marks]",
        "answer": "Activated sludge generation, dual fate, and biogas constituents.",
        "explanation": "Activated sludge generation, dual fate, and biogas constituents.\n\nMarking Scheme:\n(a) Activated Sludge & Fate [3.5 Marks]:\n• Generation: Primary effluent is agitated in aeration tanks where aerobic bacteria and fungi grow into flocs that digest organic waste. When BOD drops, the mixture enters a settling tank where the flocs sediment under gravity as 'activated sludge'. [1.5 Marks]\n• Dual Fate [2 Marks]:\n1. Inoculum: A small fraction (5–10%) is recycled back into the aeration tank to serve as an active microbial inoculum for incoming sewage. [1 Mark]\n2. Digestion: The major portion is pumped into large Anaerobic Sludge Digesters where anaerobic methanogens digest the aerobic biomass, producing inflammable biogas. [1 Mark]\n(b) Biogas Constituents [1.5 Marks, 0.5 Mark each]:\n• 1. Methane (CH4) - 50% to 70%\n• 2. Carbon dioxide (CO2) - 30% to 40%\n• 3. Hydrogen sulfide (H2S) and Hydrogen (H2) - traces."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A progressive farmer wants to shift from chemical farming to organic farming.\n(a) What biological inputs can she utilize to replace: (i) Chemical nitrogenous fertilisers, (ii) Chemical phosphatic fertilisers, (iii) Chemical pesticides?\n(b) Why does organic farming yield long-term ecological sustainability? [5 Marks]",
        "answer": "Organic farming biological alternatives and sustainability benefits.",
        "explanation": "Organic farming biological alternatives and sustainability benefits.\n\nMarking Scheme:\n(a) Biological Inputs [3 Marks, 1 Mark each]:\n• (i) Nitrogen replacement: Rhizobium inoculants for pulses; free-living Azotobacter and Azospirillum for cereals; blue- green algae (Anabaena, Nostoc) in paddy fields.\n• (ii) Phosphate replacement: Mycorrhizal fungal cultures (Glomus genus) that solubilize and mobilize soil phosphorus.\n• (iii) Chemical pesticide replacement: Bt sprays for caterpillars, Ladybird beetles for aphids, Dragonflies for mosquitoes, Baculoviruses (NPV) for borers, and Trichoderma for fungal root rots.\n(b) Long-term Sustainability [2 Marks]:\n• Preserves natural soil microbiome, prevents soil acidification and compaction, prevents toxic agrochemical leaching into water tables, eliminates bioaccumulation of toxic pesticides in agricultural produce, and protects human consumers and biodiversity. [2 Marks]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "unit_num": 9,
      "title": "Biotechnology: Principles and Processes",
      "unit_title": "Biotechnology and its Applications",
      "weightage_unit": "12 Marks (Unit IX)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The first recombinant DNA molecule was constructed in 1972 by linking an antibiotic resistance gene to a native plasmid of Salmonella typhimurium by:",
        "options": [
          "(a) Stanley Cohen and Herbert Boyer",
          "(b) Kary Mullis and Frederick Sanger",
          "(c) James Watson and Francis Crick",
          "(d) Paul Berg and Alec Jeffreys"
        ],
        "answer": "(a) Stanley Cohen and Herbert Boyer",
        "explanation": "Stanley Cohen and Herbert Boyer accomplished this in 1972 by isolating the antibiotic resistance gene by cutting out a piece of DNA from a plasmid of Salmonella typhimurium and linking it to a plasmid vector."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following was the very first restriction endonuclease to be isolated and characterized?",
        "options": [
          "(a) EcoRI",
          "(b) Hind II",
          "(c) BamHI",
          "(d) PstI"
        ],
        "answer": "(b) Hind II",
        "explanation": "The first restriction endonuclease—Hind II—was isolated and characterized five years after the discovery of restriction enzymes. It was found that Hind II always cut DNA molecules at a particular point by recognizing a specific sequence of six base pairs."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the naming convention of restriction endonuclease 'EcoRI', the letter 'R' stands for:",
        "options": [
          "(a) Genus of bacterium",
          "(b) Species name",
          "(c) Strain of the bacterium (RY 13)",
          "(d) Order in which enzyme was isolated"
        ],
        "answer": "(c) Strain of the bacterium (RY 13)",
        "explanation": "In EcoRI: 'E' comes from the genus Escherichia; 'co' comes from the species coli; 'R' comes from the strain RY 13; and Roman numeral 'I' indicates that it was the first enzyme isolated from that strain."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The specific recognition sequence of the restriction enzyme EcoRI is a palindromic sequence reading:",
        "options": [
          "(a) 5'-GAATTC-3' and 3'-CTTAAG-5'",
          "(b) 5'-GGATCC-3' and 3'-CCTAGG-5'",
          "(c) 5'-AAGCTT-3' and 3'-TTCGAA-5'",
          "(d) 5'-CTGCAG-3' and 3'-GACGTC-5'"
        ],
        "answer": "(a) 5'-GAATTC-3' and 3'-CTTAAG-5'",
        "explanation": "EcoRI cuts the DNA between bases G and A only when the sequence 5'-GAATTC-3' is present in the DNA. It creates overhanging single-stranded ends called sticky ends."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In agarose gel electrophoresis, DNA fragments separate and migrate towards which electrode based on what physical property?",
        "options": [
          "(a) Towards cathode based on molecular weight",
          "(b) Towards anode based on size/length of fragments",
          "(c) Towards cathode based on net positive charge",
          "(d) DNA does not move in an electric field"
        ],
        "answer": "(b) Towards anode based on size/length of fragments",
        "explanation": "Since DNA fragments are negatively charged molecules due to phosphate groups, they move towards the positive electrode (anode) under an electric field through the agarose sieve matrix. Smaller fragments move farther than larger ones (sieving effect)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Separated DNA bands on an agarose gel can be visualized only after staining with which dye followed by exposure to:",
        "options": [
          "(a) Methylene blue under infrared light",
          "(b) Ethidium bromide under Ultraviolet (UV) light",
          "(c) Crystal violet under visible light",
          "(d) Acetocarmine under fluorescent light"
        ],
        "answer": "(b) Ethidium bromide under Ultraviolet (UV) light",
        "explanation": "Separated DNA fragments can be visualized only after staining the DNA with a compound known as ethidium bromide followed by exposure to UV radiation (DNA bands appear as bright orange colored bands)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The process of cutting out and extracting separated bands of DNA from the agarose gel slab into a buffer solution is called:",
        "options": [
          "(a) Spooling",
          "(b) Elution",
          "(c) Annealing",
          "(d) Transformation"
        ],
        "answer": "(b) Elution",
        "explanation": "The separated bands of DNA are cut out from the agarose gel piece and extracted from the gel slice. This step is known as elution."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the cloning vector pBR322, insertion of a foreign foreign DNA fragment into the BamHI site results in the loss of resistance to which antibiotic?",
        "options": [
          "(a) Ampicillin",
          "(b) Tetracycline",
          "(c) Kanamycin",
          "(d) Chloramphenicol"
        ],
        "answer": "(b) Tetracycline",
        "explanation": "In pBR322, the BamHI restriction recognition site lies within the tetracycline resistance gene (tetR). Ligation of foreign DNA at this site causes insertional inactivation of the tetR gene, making the recombinant plasmid sensitive to tetracycline."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In insertional inactivation using the beta-galactosidase gene (lacZ), recombinant bacterial colonies appear white on an X-gal agar medium because:",
        "options": [
          "(a) Beta-galactosidase is hyper-activated by recombinant DNA",
          "(b) Insertion of foreign gene disrupts the beta-galactosidase coding sequence, inactivating enzyme production",
          "(c) Bacteria cannot absorb X-gal",
          "(d) Foreign DNA kills recombinant colonies"
        ],
        "answer": "(b) Insertion of foreign gene disrupts the beta-galactosidase coding sequence, inactivating enzyme production",
        "explanation": "Insertional inactivation of beta-galactosidase by foreign DNA prevents the synthesis of functional enzyme. In the presence of chromogenic substrate (X-gal), non-recombinants produce blue colonies, whereas recombinants fail to produce blue color and form white colonies."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following natural plant pathogens is modified into a disarmed cloning vector for delivering foreign genes into dicotyledonous crop plants?",
        "options": [
          "(a) Agrobacterium tumefaciens (Ti plasmid)",
          "(b) Bacillus thuringiensis",
          "(c) Escherichia coli",
          "(d) Thermus aquaticus"
        ],
        "answer": "(a) Agrobacterium tumefaciens (Ti plasmid)",
        "explanation": "Agrobacterium tumefaciens, a pathogen of several dicot plants, delivers a piece of DNA known as 'T-DNA' to transform normal plant cells into tumor cells. The tumor inducing (Ti) plasmid has been disarmed and modified into an efficient cloning vector to deliver genes of interest into plants."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "To make bacterial cells competent to take up foreign hydrophilic plasmid DNA, they are treated with a specific concentration of a divalent cation, such as:",
        "options": [
          "(a) Calcium (Ca2+)",
          "(b) Sodium (Na+)",
          "(c) Potassium (K+)",
          "(d) Chloride (Cl-)"
        ],
        "answer": "(a) Calcium (Ca2+)",
        "explanation": "Since DNA is a hydrophilic molecule, it cannot pass through cell membranes. Treatment with divalent cations such as Ca2+ increases the permeability of the bacterial cell wall, facilitating entry of plasmid DNA through transient pores."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the biolistic or gene gun method of direct gene transfer into plant cells, micro-particles used to bombard cells are coated with DNA and made of:",
        "options": [
          "(a) Gold or Tungsten",
          "(b) Platinum or Silver",
          "(c) Iron or Copper",
          "(d) Silica or Diamond"
        ],
        "answer": "(a) Gold or Tungsten",
        "explanation": "In biolistics or gene gun method, plant cells are bombarded with high-velocity micro-particles of gold or tungsten coated with recombinant DNA."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During the isolation of genomic DNA from fungal cells, which enzyme is utilized to break open the cell wall?",
        "options": [
          "(a) Lysozyme",
          "(b) Cellulase",
          "(c) Chitinase",
          "(d) Ribonuclease"
        ],
        "answer": "(c) Chitinase",
        "explanation": "To release DNA, cell walls are degraded using specific enzymes: Lysozyme for bacterial cells, Cellulase for plant cells, and Chitinase for fungal cell walls (since fungal walls are composed of chitin)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the isolation of DNA, addition of chilled ethanol results in the visible precipitation of pure DNA fibers that can be collected by:",
        "options": [
          "(a) Electrophoresis",
          "(b) Spooling",
          "(c) Elution",
          "(d) Centrifugation"
        ],
        "answer": "(b) Spooling",
        "explanation": "Purified DNA ultimately precipitates out after the addition of chilled ethanol. This can be seen as a collection of fine threads in the suspension and is removed by spooling using a glass rod."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Polymerase Chain Reaction (PCR) technique was invented by:",
        "options": [
          "(a) Kary Mullis",
          "(b) Frederick Sanger",
          "(c) Paul Berg",
          "(d) Alec Jeffreys"
        ],
        "answer": "(a) Kary Mullis",
        "explanation": "The Polymerase Chain Reaction (PCR) was developed by Kary Mullis in 1983 (awarded Nobel Prize in Chemistry in 1993). PCR enables automated in vitro amplification of specific DNA segments by billions of times."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the correct chronological sequence of steps in a single cycle of Polymerase Chain Reaction (PCR)?",
        "options": [
          "(a) Denaturation -> Annealing -> Extension",
          "(b) Annealing -> Denaturation -> Extension",
          "(c) Extension -> Denaturation -> Annealing",
          "(d) Denaturation -> Extension -> Annealing"
        ],
        "answer": "(a) Denaturation -> Annealing -> Extension",
        "explanation": "Each PCR cycle consists of three steps in order: (1) Denaturation of double-stranded DNA at ~94°C; (2) Annealing of two sets of oligonucleotide primers at ~50–60°C; (3) Extension of primers by Taq DNA polymerase at ~72°C."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Taq polymerase used in PCR is extracted from the thermophilic bacterium Thermus aquaticus because:",
        "options": [
          "(a) It remains active and stable during the high-temperature denaturation step (~94°C)",
          "(b) It synthesizes RNA instead of DNA",
          "(c) It works without magnesium ions",
          "(d) It cuts DNA at palindromes"
        ],
        "answer": "(a) It remains active and stable during the high-temperature denaturation step (~94°C)",
        "explanation": "A thermostable DNA polymerase (isolated from a bacterium, Thermus aquaticus) is used in PCR because it remains active during the high-temperature-induced denaturation of double-stranded DNA, eliminating the need to add fresh enzyme after each thermal cycle."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "If 30 cycles of PCR are performed on a single target DNA molecule, approximately how many copies of the gene are generated?",
        "options": [
          "(a) 1,000 copies",
          "(b) 1 million copies",
          "(c) 1 billion copies (2^30)",
          "(d) 30 copies"
        ],
        "answer": "(c) 1 billion copies (2^30)",
        "explanation": "In PCR, DNA amplifies exponentially as 2^n, where n is the number of cycles. After 30 cycles, 2^30 copies = 1,073,741,824 copies (approximately 1 billion copies) are synthesized."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A stirred-tank bioreactor is superior to a simple shake-flask culture because it provides:",
        "options": [
          "(a) Agitation, temperature control, pH regulation, foam control, and optimal oxygen transfer",
          "(b) Completely anaerobic conditions without oxygen",
          "(c) High hydrostatic pressure only",
          "(d) Manual sampling without sterilization"
        ],
        "answer": "(a) Agitation, temperature control, pH regulation, foam control, and optimal oxygen transfer",
        "explanation": "A stirred-tank bioreactor is designed for large-scale culture (100–1000 liters) providing optimum conditions for microbial growth: uniform temperature, pH, substrate concentrations, oxygen availability, an agitator system, and foam control."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The processes that include separation, purification, and formulation of a recombinant product with suitable preservatives before marketing are collectively called:",
        "options": [
          "(a) Upstream processing",
          "(b) Downstream processing",
          "(c) Electrophoresis",
          "(d) Transformation"
        ],
        "answer": "(b) Downstream processing",
        "explanation": "After completion of the biosynthetic stage in the bioreactor, the product has to be subjected through a series of processes before it is ready for marketing as a finished product. The processes include separation and purification, which are collectively referred to as downstream processing."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which component of a cloning vector controls the copy number of the linked foreign DNA in the host cell?",
        "options": [
          "(a) Selectable marker",
          "(b) Origin of replication (Ori)",
          "(c) Cloning site",
          "(d) Rop gene"
        ],
        "answer": "(b) Origin of replication (Ori)",
        "explanation": "Ori is a specific DNA sequence responsible for initiating replication. Any piece of DNA linked to this sequence can be replicated inside the host cell. This sequence is also responsible for controlling the copy number of the linked DNA."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Micro-injection is a technique used to introduce recombinant DNA directly into the nucleus of:",
        "options": [
          "(a) Plant cells",
          "(b) Animal cells",
          "(c) Bacterial cells",
          "(d) Fungal hyphae"
        ],
        "answer": "(b) Animal cells",
        "explanation": "In micro-injection, recombinant DNA is directly injected into the nucleus of an animal cell using a microscopic glass micropipette."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the function of the 'rop' gene present in the plasmid pBR322?",
        "options": [
          "(a) Codes for resistance to ampicillin",
          "(b) Codes for the proteins involved in the replication of the plasmid",
          "(c) Codes for beta-galactosidase",
          "(d) Serves as the origin of replication"
        ],
        "answer": "(b) Codes for the proteins involved in the replication of the plasmid",
        "explanation": "In pBR322, the 'rop' gene codes for proteins involved in the replication of the plasmid (Repressor of Primer)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Exonucleases differ functionally from endonucleases because exonucleases:",
        "options": [
          "(a) Remove nucleotides from the ends of the DNA strand",
          "(b) Make cuts at specific positions within the DNA strand",
          "(c) Join RNA primers to DNA",
          "(d) Synthesize new DNA chains"
        ],
        "answer": "(a) Remove nucleotides from the ends of the DNA strand",
        "explanation": "Restriction enzymes belong to a larger class of nucleases. Exonucleases remove nucleotides from the terminal ends of the DNA, whereas endonucleases make cuts at specific positions within the interior of the DNA molecule."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why must both the foreign DNA of interest and the cloning vector be cleaved by the SAME restriction endonuclease?",
        "options": [
          "(a) To produce identical complementary sticky ends that can anneal and be joined by DNA ligase",
          "(b) To prevent the host cell from digesting the plasmid",
          "(c) To accelerate PCR replication",
          "(d) To avoid staining with ethidium bromide"
        ],
        "answer": "(a) To produce identical complementary sticky ends that can anneal and be joined by DNA ligase",
        "explanation": "Unless the vector and source DNA are cut by the same restriction enzyme, the resulting fragments will not have identical complementary sticky ends. Compatible cohesive ends allow hydrogen bonding between complementary bases, enabling DNA ligase to seal them into a recombinant DNA molecule. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Agarose gel electrophoresis separates DNA fragments purely according to their size.\nReason (R): DNA molecules carry a uniform negative charge per unit length on their phosphate-sugar backbone.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) correctly explains (A). Because the charge-to-mass ratio is constant for all DNA fragments, they migrate through the sieving pores of the agarose gel at rates inversely proportional to their molecular size."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): In insertional inactivation using the lacZ gene, recombinant bacterial colonies appear white while non- recombinants appear blue.\nReason (R): Insertion of foreign DNA into the lacZ coding sequence inactivates the enzyme beta-galactosidase, preventing the breakdown of chromogenic substrate X-gal.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the exact biochemical basis for blue-white colony screening."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Taq DNA polymerase is used in Polymerase Chain Reaction (PCR) instead of normal DNA Polymerase III.\nReason (R): Taq DNA polymerase is isolated from the thermophilic bacterium Thermus aquaticus and can withstand repeated heating up to 94°C without denaturation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Conventional eukaryotic or mesophilic prokaryotic DNA polymerases denature and become permanently inactivated at ~94°C during the denaturation step."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): A cloning vector should ideally possess only one recognition site for a chosen restriction enzyme.\nReason (R): The presence of multiple recognition sites will generate several fragments, which complicates gene cloning.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). If a vector has multiple cutting sites for an enzyme, treatment with that enzyme will cleave the vector into many pieces, disrupting essential genes (like ori or selectable markers) and preventing proper recombinant assembly."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Downstream processing and quality control testing vary from product to product.\nReason (R): Biological products like recombinant therapeutic proteins, enzymes, and vaccines require stringent safety and purity protocols before clinical licensing.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). Injectable therapeutic drugs need rigorous clinical trials and pyrogen testing, whereas industrial enzymes require different purification standards. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a neat labelled diagram of the cloning vector pBR322 showing: (i) Origin of replication (Ori), (ii) Selectable markers (ampR and tetR), (iii) Restriction sites for EcoRI, BamHI, SalI, and PstI. [3 Marks]",
        "answer": "Labeled diagram of cloning vector pBR322.",
        "explanation": "Labeled diagram of cloning vector pBR322.\n\nMarking Scheme:\n• Circular Plasmid Diagram [1 Mark]: Neat circular double-stranded structure. [1 Mark]\n• Accurate Labeling [2 Marks, 0.5 Mark each]:\n1. Ori (Origin of replication) and rop gene.\n2. Selectable markers: ampR (with PstI, PvuI sites) and tetR (with BamHI, SalI sites).\n3. Other cloning sites: EcoRI, ClaI, HindIII."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the principle and procedure of Agarose Gel Electrophoresis. Mention how DNA bands are visualized and extracted from the gel. [3 Marks]",
        "answer": "Agarose gel electrophoresis, visualization with EtBr, and elution.",
        "explanation": "Agarose gel electrophoresis, visualization with EtBr, and elution.\n\nMarking Scheme:\n• Principle: Negatively charged DNA fragments migrate towards the positive anode through an agarose polymer matrix under an electric field, separating based on size (smaller fragments travel faster and farther). [1 Mark]\n• Visualization: Gel is stained with ethidium bromide (EtBr) and exposed to Ultraviolet (UV) radiation, revealing glowing bright orange DNA bands. [1 Mark]\n• Elution: Specific DNA bands are excised with a razor blade from the agarose gel slice and extracted into a clean buffer solution. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is meant by 'Insertional Inactivation'? How is it utilized to screen recombinant bacteria from non-recombinants in blue- white colony selection? [3 Marks]",
        "answer": "Insertional inactivation mechanism and blue-white colony screening.",
        "explanation": "Insertional inactivation mechanism and blue-white colony screening.\n\nMarking Scheme:\n• Definition: The loss of activity of a gene when a foreign DNA fragment is inserted within its coding sequence. [1 Mark]\n• Blue-White Screening Mechanism: A vector containing the beta-galactosidase gene (lacZ) is used. When foreign DNA is ligated into the multiple cloning site inside lacZ, the coding sequence is disrupted (insertional inactivation), producing no functional enzyme. [1 Mark]\n• Colony Phenotypes: Inoculated on agar containing X-gal (chromogenic substrate):\n- Non-recombinant colonies: Functional beta-galactosidase hydrolyzes X-gal forming blue colonies.\n- Recombinant colonies: Inactive enzyme cannot hydrolyze X-gal, producing white colonies, easily picked out without dual-antibiotic replica plating. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the three thermal steps involved in a single cycle of Polymerase Chain Reaction (PCR). Name the DNA polymerase utilized. [3 Marks]",
        "answer": "PCR steps: Denaturation, Annealing, Extension; Taq polymerase.",
        "explanation": "PCR steps: Denaturation, Annealing, Extension; Taq polymerase.\n\nMarking Scheme:\n• 1. Denaturation (94°C): Double-stranded target DNA is heated to high temperature to break hydrogen bonds, yielding two separated single strands. [0.75 Mark]\n• 2. Annealing (50°–60°C): Temperature lowered to allow two sets of short synthetic oligonucleotide primers to hybridize to their complementary sequences on template strands. [0.75 Mark]\n• 3. Extension (72°C): Thermostable Taq DNA polymerase extends primers by synthesizing complementary strands in 5' -> 3' direction using dNTPs and Mg2+. [0.75 Mark]\n• Enzyme: Taq DNA polymerase (from Thermus aquaticus). [0.75 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Enumerate the three essential features of a plasmid vector that make it suitable for gene cloning. [3 Marks]",
        "answer": "Three essential features of cloning vectors: Ori, Selectable marker, Cloning site.",
        "explanation": "Three essential features of cloning vectors: Ori, Selectable marker, Cloning site.\n\nMarking Scheme (1 Mark each):\n1. Origin of replication (Ori): Initiates DNA replication inside host and controls the copy number of linked foreign genes. [1 Mark]\n2. Selectable marker: Genes conferring resistance to antibiotics (ampicillin, tetracycline, kanamycin) that permit identification and selective growth of transformants while eliminating non-transformants. [1 Mark]\n3. Cloning sites (Recognition sites): Unique palindromic recognition sites for restriction endonucleases where foreign DNA can be ligated without destroying essential plasmid regions. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain two direct (vectorless) methods of gene transfer into host cells: (i) Micro-injection, (ii) Biolistics (Gene gun). [3 Marks]",
        "answer": "Direct gene transfer: Micro-injection and biolistics.",
        "explanation": "Direct gene transfer: Micro-injection and biolistics.\n\nMarking Scheme:\n• (i) Micro-injection: A direct mechanical method used primarily for animal cells (e.g., fertilized egg/zygote). Recombinant DNA is directly injected into the nucleus of an animal cell using an ultra-fine glass micro-capillary under an inverted microscope. [1.5 Marks]\n• (ii) Biolistics / Gene Gun: A direct method suitable for plant cells with tough cellulose walls. Microscopic heavy metal particles of gold or tungsten are coated with DNA and accelerated at high velocity into target plant tissues using a helium pressure gun. [1.5 Marks]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is a palindromic nucleotide sequence in DNA? Illustrate with the palindromic sequence recognized by the restriction enzyme EcoRI. [3 Marks]",
        "answer": "Palindromic sequence definition and EcoRI illustration.",
        "explanation": "Palindromic sequence definition and EcoRI illustration.\n\nMarking Scheme:\n• Definition: A sequence of base pairs in double-stranded DNA that reads identical on both complementary strands when read in the same 5' -> 3' (or 3' -> 5') direction. [1.5 Marks]\n• EcoRI Sequence Illustration:\n5' - G A A T T C - 3' 3' - C T T A A G - 5'\n• EcoRI cuts each strand between G and A, leaving 5'-overhanging single-stranded ends (sticky ends: 5'-AATT-3'). [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why is Agrobacterium tumefaciens called 'Nature's Genetic Engineer'? How has its Ti plasmid been modified for use in plant biotechnology? [3 Marks]",
        "answer": "Agrobacterium as natural genetic engineer and disarmed Ti plasmid.",
        "explanation": "Agrobacterium as natural genetic engineer and disarmed Ti plasmid.\n\nMarking Scheme:\n• Natural Genetic Engineer: In nature, Agrobacterium tumefaciens infects dicotyledonous plants and naturally transfers a specific segment of its plasmid DNA, called T-DNA, into host plant nuclear genome, reprogramming plant cells to produce crown gall tumors and specialized opines for bacterial nourishment. [1.5 Marks]\n• Ti Plasmid Modification (Disarming): Genetic engineers have 'disarmed' the Ti plasmid by excising the tumor-inducing oncogenes while retaining the T-DNA border sequences. The gene of interest is inserted, allowing the disarmed plasmid to deliver desirable agronomic genes without causing gall tumors. [1.5 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of chilled ethanol and spooling in the isolation of genetic material (DNA). [3 Marks]",
        "answer": "Chilled ethanol precipitation and spooling of DNA.",
        "explanation": "Chilled ethanol precipitation and spooling of DNA.\n\nMarking Scheme:\n• Addition of Chilled Ethanol: DNA is highly soluble in aqueous salt solutions. When chilled ethanol is added, the dielectric constant drops, decreasing DNA solubility and precipitating pure DNA out of solution as a visible white fibrous precipitate while proteins and RNA remain dissolved. [1.5 Marks]\n• Spooling: The long, viscous, thread-like DNA fibers precipitate as a tangled mass and can be wound onto and recovered using a glass rod or plastic loop (spooling). [1.5 Marks]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between a simple stirred-tank bioreactor and a sparged stirred-tank bioreactor. [3 Marks]",
        "answer": "Comparison between stirred-tank and sparged bioreactors.",
        "explanation": "Comparison between stirred-tank and sparged bioreactors.\n\nMarking Scheme:\n• Simple Stirred-tank Bioreactor: Cylindrical vessel with curved base to facilitate mixing; has a motorized impeller (stirrer) that ensures uniform mixing of nutrients and oxygen throughout the culture broth. [1.5 Marks]\n• Sparged Stirred-tank Bioreactor: Equipped with a sparger through which sterile air or oxygen is bubbled vigorously into the liquid broth. The bubbling dramatically increases the surface area for oxygen transfer, producing high dissolved oxygen levels needed for high-density microbial cultures. [1.5 Marks] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the complete step-by-step process of constructing a Recombinant DNA molecule and cloning it inside a bacterial host.\n(b) Why are restriction enzymes referred to as 'molecular scissors'? [5 Marks]",
        "answer": "Recombinant DNA technology pathway and restriction enzyme action.",
        "explanation": "Recombinant DNA technology pathway and restriction enzyme action.\n\nMarking Scheme:\n(a) Recombinant DNA Construction & Cloning [3.5 Marks]:\n1. Isolation of pure DNA: Digesting source cells with lysozyme/chitinase, treating with RNase and protease, precipitating with chilled ethanol. [0.5 Mark]\n2. Cleavage by Restriction Enzymes: Cutting source DNA and plasmid vector with the identical restriction endonuclease to produce compatible cohesive sticky ends. [1 Mark]\n3. Ligation: Mixing target gene fragment and cut plasmid vector in the presence of DNA Ligase, forming phosphodiester bonds to create Recombinant DNA. [0.75 Mark]\n4. Transformation: Introducing recombinant plasmid into competent host bacterium (treated with divalent Ca2+ and heat shock at 42°C). [0.75 Mark]\n5. Selection and Culture: Selecting transformants on antibiotic plates (or blue-white screening) and culturing in bioreactors to produce target protein. [0.5 Mark]\n(b) Molecular Scissors [1.5 Marks]:\n• Restriction endonucleases recognize specific palindromic sequences and cut both strands of double-stranded DNA at precise phosphodiester bond locations, acting like high-precision molecular scissors. [1.5 Marks]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the working principle and schematic diagram of a Stirred-Tank Bioreactor.\n(b) Explain Downstream Processing and state two reasons why it is critical for commercial recombinant pharmaceuticals. [5 Marks]",
        "answer": "Bioreactor engineering and downstream processing.",
        "explanation": "Bioreactor engineering and downstream processing.\n\nMarking Scheme:\n(a) Stirred-Tank Bioreactor [3 Marks]:\n• Design & Working: Large closed stainless-steel vessel (100–1000 L) providing optimum environmental conditions:\ntemperature control jacket, pH sensor/control, agitator with impellers for uniform mixing, oxygen sparger, antifoam system, and sampling ports for periodic testing. [2 Marks]\n• Diagram: Showing motor, impeller shaft, sparger, sterile air inlet, steam port, and harvesting outlet. [1 Mark]\n(b) Downstream Processing [2 Marks]:\n• Definition: Series of downstream recovery stages: cell lysis/filtration, centrifugation, liquid-liquid extraction, chromatographic purification (affinity, ion-exchange), and formulation with stabilizers. [1 Mark]\n• Critical Importance: (1) Ensures ultra-pure active protein free of host DNA, endotoxins, or pyrogens that could trigger fatal anaphylaxis in patients. (2) Mandatory for obtaining clinical regulatory approval from drug control agencies. [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the Polymerase Chain Reaction (PCR) in detail with a labelled diagram showing denaturation, primer annealing, and extension.\n(b) Name the source organism of Taq polymerase and mention its unique biochemical feature.\n(c) State two diagnostic applications of PCR in medicine. [5 Marks]",
        "answer": "PCR detailed mechanism, diagram, Taq polymerase, and clinical applications.",
        "explanation": "PCR detailed mechanism, diagram, Taq polymerase, and clinical applications.\n\nMarking Scheme:\n(a) PCR Process & Diagram [3 Marks]:\n• Step 1: Denaturation at 94°C separates dsDNA strands into single strands. [0.5 Mark]\n• Step 2: Annealing at 50°–60°C allows forward and reverse synthetic oligonucleotide primers to bind complementary ends. [0.5 Mark]\n• Step 3: Extension at 72°C: Taq DNA polymerase adds dNTPs to 3'-OH ends of primers, synthesizing new strands. Repeated cycles yield 2^n copies. [1 Mark]\n• Diagram showing thermal cycle and exponential amplification. [1 Mark]\n(b) Taq Polymerase [1 Mark]:\n• Source: Thermophilic bacterium Thermus aquaticus. [0.5 Mark]\n• Feature: Thermostable; retains catalytic activity even after exposure to high denaturation temperatures (94°C–95°C). [0.5 Mark]\n(c) Diagnostic Applications [1 Mark, 0.5 Mark each]:\n• Early detection of HIV before antibody levels are detectable.\n• Detection of specific genetic mutations in suspected cancer patients and prenatal diagnosis of genetic disorders."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A molecular biologist wants to clone a foreign human gene into the plasmid pBR322 at its PstI restriction site.\n(a) Which selectable marker gene will undergo insertional inactivation?\n(b) How will she identify and differentiate recombinants from non-recombinants using replica plating on ampicillin and tetracycline plates?\n(c) Why is insertional inactivation using the lacZ gene preferred over dual-antibiotic replica plating? [5 Marks]",
        "answer": "Insertional inactivation at PstI site, replica plating screening, and blue-white superiority.",
        "explanation": "Insertional inactivation at PstI site, replica plating screening, and blue-white superiority.\n\nMarking Scheme:\n(a) Inactivated Selectable Marker [1 Mark]:\n• The ampicillin resistance gene (ampR) will be insertionally inactivated because the PstI recognition site is located within ampR. [1 Mark]\n(b) Replica Plating Screening [2.5 Marks]:\n• Transformants are first plated on medium containing Tetracycline. Both recombinants (intact tetR) and non- recombinants will grow because the tetR gene is unaltered. [1 Mark]\n• Colonies from the tetracycline plate are replica-plated onto an Ampicillin plate: [0.5 Mark]\n- Non-recombinants: Have intact ampR and will grow on ampicillin plate.\n- Recombinants: Have insertionally disrupted ampR and will fail to grow (die) on ampicillin plate.\n• By comparing plates, colonies that grew on tetracycline but died on ampicillin are identified as recombinants and isolated. [1 Mark]\n(c) Advantage of lacZ (Blue-White Selection) [1.5 Marks]:\n• Dual-antibiotic replica plating is tedious and requires overnight culture on two successive sets of antibiotic plates. Insertional inactivation of beta-galactosidase (lacZ) allows direct visual differentiation of white recombinant colonies and blue non-recombinant colonies on a single agar plate with X-gal, saving time and reagents. [1.5 Marks]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the chemical method and physical methods used to make a bacterial host cell competent to take up exogenous plasmid DNA.\n(b) How does a disarmed pathogen act as a cloning vector? [5 Marks]",
        "answer": "Competence induction (chemical Ca2+, physical heat shock, biolistics, micro-injection) and disarmed vectors.",
        "explanation": "Competence induction (chemical Ca2+, physical heat shock, biolistics, micro-injection) and disarmed vectors.\n\nMarking Scheme:\n(a) Competence Induction [3.5 Marks]:\n• Chemical Treatment [1.5 Marks]: Bacterial cells are treated with a specific concentration of a divalent cation like Calcium (Ca2+). The positive calcium ions shield repulsive negative charges on both DNA phosphate backbone and lipopolysaccharide membrane, promoting adhesion of DNA to cell surface.\n• Physical Heat Shock [1 Mark]: Cells incubated with DNA on ice are subjected to a brief heat shock at 42°C for 2 minutes, then returned to ice. This creates transient physical pores in the bacterial cell wall through which plasmid enters.\n• Other Physical Methods [1 Mark]: (1) Micro-injection: direct injection into animal cell nucleus. (2) Biolistics: bombarding plant cells with gold/tungsten particles coated with DNA.\n(b) Disarmed Pathogens [1.5 Marks]:\n• Naturally infectious pathogens (like Agrobacterium tumefaciens in plants or retroviruses in animals) have their virulence/disease-causing genes deleted (disarmed) while retaining their natural molecular delivery apparatus. When foreign beneficial genes are inserted, the disarmed pathogen delivers the gene into host chromosomes without causing disease. [1.5 Marks]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Describe the complete laboratory procedure for isolating high-molecular-weight chromosomal DNA from plant tissue for recombinant DNA work. [5 Marks]",
        "answer": "Plant DNA extraction protocol: Cell lysis, enzymatic cleanup, precipitation, and spooling.",
        "explanation": "Plant DNA extraction protocol: Cell lysis, enzymatic cleanup, precipitation, and spooling.\n\nMarking Scheme:\n1. Tissue Homogenization: Fresh plant leaf tissue is frozen in liquid nitrogen and pulverized into a fine powder using mortar and pestle to mechanically break cell walls. [1 Mark]\n2. Enzymatic Cell Wall Lysis: Treated with enzyme Cellulase (and pectinase) in lysis buffer (containing detergent like SDS or CTAB) to dissolve cell wall and disrupt lipid membranes, releasing cell contents into solution. [1 Mark]\n3. Enzymatic Digestion of RNA: Ribonuclease (RNase A) is added to degrade all cellular RNA molecules into soluble ribonucleotides. [1 Mark]\n4. Protein Depletion: Protease (Proteinase K) is added to digest histones, nucleases, and cellular proteins. Organic extraction with phenol-chloroform separates denatured proteins in interphase. [1 Mark]\n5. Ethanol Precipitation & Spooling: Cold chilled ethanol is gently layered on top. Pure DNA precipitates at the aqueous- ethanol interface as white cottony threads, which are collected by spooling onto a sterile glass hook and dissolved in TE buffer. [1 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Palindrome in DNA? Give an example of a palindromic sequence and show where the enzyme cuts both strands.\n(b) Differentiate between Sticky Ends and Blunt Ends produced by restriction enzymes. Which are preferred in gene cloning and why? [5 Marks]",
        "answer": "Palindromes in DNA, EcoRI cleavage, sticky vs blunt ends, and ligation preference.",
        "explanation": "Palindromes in DNA, EcoRI cleavage, sticky vs blunt ends, and ligation preference.\n\nMarking Scheme:\n(a) Palindrome & Cleavage [2.5 Marks]:\n• Palindrome: Symmetrical nucleotide sequence reading identical on both strands in 5' -> 3' direction. [1 Mark]\n• Example (EcoRI):\n5' - G | A A T T C - 3' 3' - C T T A A | G - 5'\n• EcoRI cleaves between G and A on both strands, generating 5'-AATT-3' overhanging single-stranded ends. [1.5 Marks]\n(b) Sticky Ends vs Blunt Ends [2.5 Marks]:\n• Sticky Ends: Staggered cuts leaving single-stranded overhanging nucleotides (e.g., EcoRI, BamHI, HindIII). [0.75 Mark]\n• Blunt Ends: Straight flush cuts right down the symmetry axis without overhangs (e.g., SmaI, EcoRV). [0.75 Mark]\n• Preference in Cloning: Sticky ends are strongly preferred because the overhanging complementary single-stranded tails spontaneously base-pair through hydrogen bonds (anneal), holding the fragments together so that DNA Ligase can rapidly and efficiently seal the phosphodiester bonds. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Biotechnology owes its origin to the serendipitous discovery of restriction endonucleases in bacteria, where they evolved as a primitive immune defense mechanism against bacteriophage infections.'\n(a) How do restriction endonucleases naturally protect bacteria from viral infections?\n(b) Why doesn't the host bacterium's own genomic DNA get digested by its endogenous restriction enzymes?\n(c) Who shared the Nobel Prize for the discovery and application of restriction endonucleases? [5 Marks]",
        "answer": "Restriction-modification systems in bacteria, DNA methylation, and Nobel laureates.",
        "explanation": "Restriction-modification systems in bacteria, DNA methylation, and Nobel laureates.\n\nMarking Scheme:\n(a) Bacterial Defense Mechanism [2 Marks]:\n• When a bacteriophage injects its foreign DNA into a bacterium, bacterial restriction endonucleases recognize specific palindromic sequences in the viral DNA and cut it into fragments, neutralizing the viral replication cycle. [2 Marks]\n(b) Protection of Host Genomic DNA [2 Marks]:\n• The host bacterium possesses a cognate Methyltransferase enzyme that adds methyl groups (-CH3) to specific adenine or cytosine bases within its own recognition sites. Methylation alters the site geometry, preventing the restriction enzyme from binding and cutting the host's own chromosome (Restriction-Modification system). [2 Marks]\n(c) Nobel Laureates [1 Mark]:\n• Werner Arber, Hamilton Smith, and Daniel Nathans were awarded the Nobel Prize in Physiology or Medicine in 1978. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the role of the following in Recombinant DNA technology:\n(i) Origin of replication (Ori),\n(ii) DNA Ligase,\n(iii) Thermus aquaticus,\n(iv) Chitinase,\n(v) Disarmed Ti plasmid. [5 Marks]",
        "answer": "Functions of Ori, Ligase, T. aquaticus, Chitinase, and Ti plasmid.",
        "explanation": "Functions of Ori, Ligase, T. aquaticus, Chitinase, and Ti plasmid.\n\nMarking Scheme (1 Mark each):\n(i) Ori: Specific site where replication begins; determines vector autonomous replication and controls the copy number of linked foreign genes in the host.\n(ii) DNA Ligase: Forms covalent phosphodiester bonds between adjacent 3'-OH and 5'-phosphate ends of cohesive or blunt DNA fragments, sealing chimeric recombinant molecules.\n(iii) Thermus aquaticus: Source bacterium of thermostable Taq DNA polymerase used in automated PCR thermal cycling.\n(iv) Chitinase: Hydrolytic enzyme that digests the fungal cell wall (chitin) to release intact fungal genomic DNA during nucleic acid extraction.\n(v) Disarmed Ti plasmid: Modified non-oncogenic vector from Agrobacterium tumefaciens that safely delivers foreign recombinant genes into plant genomes."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A recombinant therapeutic human growth hormone is produced by an E. coli culture in a 500-litre stirred-tank bioreactor.\n(a) Describe the physiological growth parameters that must be monitored continuously during fermentation.\n(b) What steps are taken if excessive foaming occurs during high-speed agitation?\n(c) Outline the downstream processing steps needed before the purified hormone can be bottled for clinical injection. [5 Marks]",
        "answer": "Bioreactor monitoring, foam control, and downstream pharmaceutical purification.",
        "explanation": "Bioreactor monitoring, foam control, and downstream pharmaceutical purification.\n\nMarking Scheme:\n(a) Fermentation Parameters Monitored [2 Marks, 0.5 Mark each]:\n• Temperature (maintained via cooling water jacket).\n• pH (automatically balanced with acid/base addition systems).\n• Dissolved oxygen (DO) concentration (monitored by DO probe and regulated via airflow and impeller RPM).\n• Substrate/nutrient feed rate and cell density.\n(b) Foam Control [1 Mark]:\n• Vigorous agitation and protein release generate thick surface foam that clogs filters. Antifoaming chemical agents (silicones or vegetable oils) are automatically injected via a foam sensor and spray nozzle to break bubbles. [1 Mark]\n(c) Downstream Processing for Injectable Hormone [2 Marks]:\n• Cell harvesting by continuous centrifugation. [0.5 Mark]\n• Cell lysis (homogenizer/sonicator) to release intracellular hormone. [0.5 Mark]\n• Multi-stage chromatography (affinity and reverse-phase HPLC) to purify the recombinant hormone to >99.9% purity. [0.5 Mark]\n• Sterile filtration, formulation with clinical preservatives, and pyrogen/endotoxin safety testing in animals before vialing. [0.5 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "unit_num": 9,
      "title": "Biotechnology and its Applications",
      "unit_title": "Biotechnology and its Applications",
      "weightage_unit": "12 Marks (Unit IX)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Golden rice is a genetically modified crop engineered to biosynthesize high levels of which essential nutrient to alleviate deficiency diseases?",
        "options": [
          "(a) Vitamin C",
          "(b) Vitamin A (beta-carotene)",
          "(c) Iron and Zinc",
          "(d) Lysine"
        ],
        "answer": "(b) Vitamin A (beta-carotene)",
        "explanation": "Golden rice is a genetically engineered variety of rice enriched with beta-carotene (provitamin A) to combat childhood blindness and Vitamin A deficiency in developing regions where rice is the staple diet."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The insecticidal crystal protein (Cry protein) produced by Bacillus thuringiensis is harmless to the bacterium itself because:",
        "options": [
          "(a) The protein is enclosed in a thick lipid envelope",
          "(b) It exists as an inactive protoxin within the bacterium",
          "(c) The bacterium possesses an antidote enzyme",
          "(d) The protein is secreted outside the cell immediately"
        ],
        "answer": "(b) It exists as an inactive protoxin within the bacterium",
        "explanation": "Bt toxin protein exists as an inactive protoxin within the bacterium. When an insect ingests the inactive protoxin, it is converted into an active toxin due to the alkaline pH of the insect midgut which solubilises the crystals."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In Bt cotton, the activated Cry toxin kills insect pests like cotton bollworms by:",
        "options": [
          "(a) Inhibiting their central nervous system transmission",
          "(b) Binding to epithelial cells of the midgut and creating pores that cause cell swelling and lysis",
          "(c) Digesting their digestive enzymes in the stomach",
          "(d) Preventing respiratory gas exchange"
        ],
        "answer": "(b) Binding to epithelial cells of the midgut and creating pores that cause cell swelling and lysis",
        "explanation": "The activated toxin binds to the surface of midgut epithelial cells and creates pores that cause cell swelling and lysis, and eventually causes death of the insect."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which specific Cry genes are introduced into cotton plants to control cotton bollworms and corn borer respectively?",
        "options": [
          "(a) CryIAc and CryIIAb control cotton bollworms; CryIAb controls corn borer",
          "(b) CryIAb controls cotton bollworms; CryIAc controls corn borer",
          "(c) CryIIAb controls corn borer; CryIAb controls cotton bollworms",
          "(d) CryIAc and CryIAb both control corn borer"
        ],
        "answer": "(a) CryIAc and CryIIAb control cotton bollworms; CryIAb controls corn borer",
        "explanation": "The proteins encoded by the genes cryIAc and cryIIAb control the cotton bollworms, while that encoded by cryIAb controls the corn borer."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The nematode that infects the roots of tobacco plants and causes a great reduction in agricultural yield is:",
        "options": [
          "(a) Ascaris lumbricoides",
          "(b) Meloidogyne incognita",
          "(c) Wuchereria bancrofti",
          "(d) Ancylostoma duodenale"
        ],
        "answer": "(b) Meloidogyne incognita",
        "explanation": "A nematode Meloidogyne incognita infects the roots of tobacco plants and causes a great reduction in yield. A novel strategy based on RNA interference (RNAi) was adopted to prevent this infestation."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "RNA interference (RNAi) functions as a natural method of cellular defense in all eukaryotic organisms by causing:",
        "options": [
          "(a) Translation of foreign viral DNA",
          "(b) Silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule",
          "(c) Direct enzymatic breakdown of ribosomes",
          "(d) Recombination between sister chromatids"
        ],
        "answer": "(b) Silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule",
        "explanation": "RNAi takes place in all eukaryotic organisms as a method of cellular defense. This method involves silencing of a specific mRNA due to a complementary double-stranded RNA (dsRNA) molecule that binds to and prevents translation of the mRNA (silencing)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Mature human insulin differs from proinsulin because mature active insulin lacks:",
        "options": [
          "(a) Polypeptide A-chain",
          "(b) Polypeptide B-chain",
          "(c) Connecting C-peptide",
          "(d) Disulfide bonds"
        ],
        "answer": "(c) Connecting C-peptide",
        "explanation": "Insulin is synthesized in mammals (including humans) as a pro-hormone containing an extra stretch called the C-peptide. This C-peptide is not present in the mature, biologically active insulin and is excised out during processing."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In 1983, which pharmaceutical company successfully produced human insulin (Humulin) by preparing separate DNA sequences for chains A and B in E. coli?",
        "options": [
          "(a) Pfizer",
          "(b) Eli Lilly (an American company)",
          "(c) Bayer",
          "(d) Novartis"
        ],
        "answer": "(b) Eli Lilly (an American company)",
        "explanation": "In 1983, Eli Lilly, an American company, prepared two DNA sequences corresponding to A and B chains of human insulin and introduced them into plasmids of E. coli to produce insulin chains. Chains A and B were produced separately, extracted, and combined by creating disulfide bonds to form human insulin."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The first clinical gene therapy was administered in 1990 to a 4-year-old girl suffering from which genetic deficiency?",
        "options": [
          "(a) Phenylketonuria",
          "(b) Adenosine Deaminase (ADA) deficiency (causing SCID)",
          "(c) Cystic fibrosis",
          "(d) Haemophilia A"
        ],
        "answer": "(b) Adenosine Deaminase (ADA) deficiency (causing SCID)",
        "explanation": "The first clinical gene therapy was given in 1990 to a 4-year-old girl with adenosine deaminase (ADA) deficiency. This disorder is caused by the deletion of the gene coding for adenosine deaminase, an enzyme crucial for the immune system."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why is bone marrow transplantation or periodic infusion of genetically modified lymphocytes not a permanent cure for ADA deficiency?",
        "options": [
          "(a) Because the transfused lymphocytes are mortal and do not have an infinite lifespan",
          "(b) Because the ADA gene is rejected by the patient's heart",
          "(c) Because retroviruses become toxic in blood",
          "(d) Because the patient develops severe allergies to ADA"
        ],
        "answer": "(a) Because the transfused lymphocytes are mortal and do not have an infinite lifespan",
        "explanation": "As transformed lymphocytes are not immortal, the patient requires periodic infusion of such genetically engineered lymphocytes. However, if the gene isolated from marrow cells producing ADA is introduced into cells at early embryonic stages, it could be a permanent cure."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The first transgenic cow, named 'Rosie' (produced in 1997), produced human protein-enriched milk containing:",
        "options": [
          "(a) Human alpha-lactalbumin (2.4 grams per litre)",
          "(b) Human alpha-1-antitrypsin (10 grams per litre)",
          "(c) Insulin and glucagon",
          "(d) Erythropoietin"
        ],
        "answer": "(a) Human alpha-lactalbumin (2.4 grams per litre)",
        "explanation": "In 1997, the first transgenic cow, Rosie, produced human protein-enriched milk (2.4 grams per litre). The milk contained the human alpha-lactalbumin and was nutritionally more balanced for human babies than natural cow-milk."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Human alpha-1-antitrypsin, obtained through transgenic animal bioreactors, is used clinically in the treatment of which pulmonary disorder?",
        "options": [
          "(a) Asthma",
          "(b) Emphysema",
          "(c) Tuberculosis",
          "(d) Bronchial pneumonia"
        ],
        "answer": "(b) Emphysema",
        "explanation": "Transgenic animals are produced to yield biological products. For example, human protein (alpha-1- antitrypsin) is used to treat emphysema. Similar attempts are being made for treatment of phenylketonuria (PKU) and cystic fibrosis."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Over 95 percent of all existing transgenic laboratory animals used in scientific research are:",
        "options": [
          "(a) Transgenic pigs",
          "(b) Transgenic rabbits",
          "(c) Transgenic mice",
          "(d) Transgenic sheep"
        ],
        "answer": "(c) Transgenic mice",
        "explanation": "Although transgenic rats, rabbits, pigs, sheep, cows, and fish have been produced, over 95 percent of all existing transgenic animals are mice, serving as models for human physiology, genetics, and diseases."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which statutory Indian governmental committee is responsible for evaluating the safety and biosafety validity of genetically modified (GM) research and releasing GM crops for commercial use?",
        "options": [
          "(a) IARI",
          "(b) GEAC (Genetic Engineering Appraisal Committee)",
          "(c) CSIR",
          "(d) ICMR"
        ],
        "answer": "(b) GEAC (Genetic Engineering Appraisal Committee)",
        "explanation": "The Indian Government has set up organizations such as GEAC (Genetic Engineering Appraisal Committee), which makes decisions regarding the validity of GM research and the safety of introducing GM-organisms for public services."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Biopiracy is defined as:",
        "options": [
          "(a) Pirating copyrighted scientific research papers on the internet",
          "(b) The commercial exploitation of bio-resources by multinational companies without proper authorization and compensatory payment to indigenous communities",
          "(c) Smuggling of endangered live animals across international borders",
          "(d) Culturing GMOs without government permission"
        ],
        "answer": "(b) The commercial exploitation of bio-resources by multinational companies without proper authorization and compensatory payment to indigenous communities",
        "explanation": "Biopiracy is the term used to refer to the use of bio-resources by multinational companies and other organizations without proper authorization from the countries and people concerned without compensatory payment."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In 1997, an American company obtained patent rights on Basmati rice through the US Patent and Trademark Office by crossing it with:",
        "options": [
          "(a) Wild African rice varieties",
          "(b) Semi-dwarf varieties and claiming it as a novel invention",
          "(c) Golden rice varieties",
          "(d) Wheat hybrids"
        ],
        "answer": "(b) Semi-dwarf varieties and claiming it as a novel invention",
        "explanation": "In 1997, an American company (RiceTec) got patent rights on Basmati rice through the US Patent and Trademark Office. This allowed the company to sell a 'new' variety of Basmati, which actually had been derived from Indian farmer varieties by crossing with semi-dwarf lines."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Early detection of infectious pathogens (like HIV) before clinical symptoms appear is possible using which molecular diagnostic tool that amplifies minute amounts of nucleic acids?",
        "options": [
          "(a) Serum analysis",
          "(b) Polymerase Chain Reaction (PCR)",
          "(c) Urine analysis",
          "(d) Sputum culture"
        ],
        "answer": "(b) Polymerase Chain Reaction (PCR)",
        "explanation": "Very low concentration of a bacteria or virus (at a time when symptoms of disease are not yet visible) can be detected by amplification of their nucleic acid by PCR. It is routinely used to detect HIV in suspected AIDS patients."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "ELISA (Enzyme-Linked Immunosorbent Assay) is a diagnostic technique based on the principle of:",
        "options": [
          "(a) Antigen-antibody interaction",
          "(b) DNA replication",
          "(c) Agarose gel sieving",
          "(d) Radioisotope decay"
        ],
        "answer": "(a) Antigen-antibody interaction",
        "explanation": "ELISA is based on the principle of antigen-antibody interaction. Infection by a pathogen can be detected by the presence of antigens (proteins, glycoproteins, etc.) or by detecting the antibodies synthesized against the pathogen."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A probe used in molecular biology and autoradiography for detecting mutated genes is a:",
        "options": [
          "(a) Double-stranded circular plasmid",
          "(b) Single-stranded DNA or RNA molecule tagged with a radioactive molecule",
          "(c) Monoclonal antibody linked to an enzyme",
          "(d) Thermostable DNA polymerase"
        ],
        "answer": "(b) Single-stranded DNA or RNA molecule tagged with a radioactive molecule",
        "explanation": "A single-stranded DNA or RNA, tagged with a radioactive molecule (probe), is allowed to hybridize to its complementary DNA in a clone of cells followed by detection using autoradiography. The clone with the mutated gene will not appear on photographic film because the probe will not have complementarity with the mutated gene."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Transgenic animals are produced to serve as disease models for all of the following human genetic disorders EXCEPT:",
        "options": [
          "(a) Cancer and Cystic fibrosis",
          "(b) Rheumatoid arthritis",
          "(c) Alzheimer's disease",
          "(d) Common cold"
        ],
        "answer": "(d) Common cold",
        "explanation": "Transgenic models exist for many human diseases such as cancer, cystic fibrosis, rheumatoid arthritis, and Alzheimer's, but not for self-limiting viral infections like the common cold."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "How many recombinant therapeutics have been approved for human use worldwide, and how many are currently marketed in India?",
        "options": [
          "(a) 30 worldwide and 12 in India",
          "(b) 12 worldwide and 30 in India",
          "(c) 100 worldwide and 50 in India",
          "(d) 500 worldwide and 100 in India"
        ],
        "answer": "(a) 30 worldwide and 12 in India",
        "explanation": "At present, about 30 recombinant therapeutics have been approved for human use the world over. In India, 12 of these are presently being marketed."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The vector used to deliver functional ADA cDNA into cultured lymphocytes of an ADA-deficient patient during gene therapy is:",
        "options": [
          "(a) Bacteriophage lambda",
          "(b) Disarmed retroviral vector",
          "(c) Agrobacterium Ti plasmid",
          "(d) pBR322"
        ],
        "answer": "(b) Disarmed retroviral vector",
        "explanation": "A functional ADA cDNA (using a retroviral vector) is introduced into the cultured lymphocytes, which are subsequently returned to the patient."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the production of pest-resistant tobacco plants by RNAi, Agrobacterium vectors were used to introduce nematode-specific genes into the host plant that produced:",
        "options": [
          "(a) Both sense and anti-sense RNA",
          "(b) Sense RNA only",
          "(c) Anti-sense RNA only",
          "(d) Cry protein crystals"
        ],
        "answer": "(a) Both sense and anti-sense RNA",
        "explanation": "Using Agrobacterium vectors, nematode-specific genes were introduced into the host plant. The introduction of DNA was such that it produced both sense and anti-sense RNA in the host cells. These two RNAs being complementary to each other formed a double-stranded RNA (dsRNA) that initiated RNAi."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the primary advantage of genetically engineered human insulin over animal-derived slaughterhouse insulin?",
        "options": [
          "(a) It is sweet tasting",
          "(b) It eliminates immune allergic reactions caused by foreign animal proteins",
          "(c) It does not require refrigeration",
          "(d) It can be taken orally"
        ],
        "answer": "(b) It eliminates immune allergic reactions caused by foreign animal proteins",
        "explanation": "Insulin from an animal source caused some patients to develop allergy or other types of reactions to the foreign protein. Recombinant human insulin (Humulin) matches human amino acid sequence identically, eliminating hypersensitivity."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Indian Parliament cleared the second amendment of which legislative act to prevent biopiracy and protect indigenous bio- resources?",
        "options": [
          "(a) Indian Patents Bill",
          "(b) Wildlife Protection Act",
          "(c) Forest Conservation Act",
          "(d) Environmental Protection Act"
        ],
        "answer": "(a) Indian Patents Bill",
        "explanation": "The Indian Parliament has recently cleared the second amendment of the Indian Patents Bill, which takes such issues into consideration, including patent terms emergency provisions, and research and development initiatives. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Bt cotton is resistant to lepidopteran pests like cotton bollworms.\nReason (R): Ingested inactive Cry protoxin is solubilized and activated in the alkaline pH of the insect midgut, lysing epithelial cells.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) explains the physiological mechanism behind Bt cotton's pest resistance."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Mature human insulin consists of two polypeptide chains linked by disulfide bridges.\nReason (R): The C-peptide present in proinsulin is cleaved and removed during the maturation of insulin.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are correct facts about insulin architecture. However, (R) describes the maturation processing step rather than explaining why the two chains (A and B) are linked specifically by disulfide bridges."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Gene therapy for ADA deficiency using patient's lymphocytes requires repeated periodic infusions.\nReason (R): Mature genetically modified lymphocytes have a limited lifespan and die naturally in the bloodstream.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Because differentiated lymphocytes are mortal, patients must receive periodic infusions unless the functional gene is integrated into immortal embryonic stem/bone marrow cells."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Transgenic cow 'Rosie' produced milk that was nutritionally superior to natural cow milk for human babies.\nReason (R): Rosie's milk was enriched with human alpha-lactalbumin protein (2.4 grams/litre).",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the exact biochemical reason for the nutritional superiority of Rosie's milk for human infants."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Traditional knowledge of indigenous communities must be protected against biopiracy.\nReason (R): Developed nations possess advanced biotechnology and patents but are often rich in biodiversity and traditional bio-resources.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(c) (A) is true but (R) is false",
        "explanation": "Assertion is true. Reason is false: Developed nations are financially rich and technologically advanced, but are POOR in biodiversity and traditional knowledge. The developing and underdeveloped world is biodiversity-rich, leading to biopiracy by multinational corporations. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "How did the American company Eli Lilly produce human insulin (Humulin) using recombinant DNA technology? [3 Marks]",
        "answer": "Eli Lilly recombinant insulin production method.",
        "explanation": "Eli Lilly recombinant insulin production method.\n\nMarking Scheme:\n• DNA Synthesis: Synthesized two separate artificial DNA sequences corresponding to the A-chain (21 amino acids) and B- chain (30 amino acids) of human insulin. [1 Mark]\n• Plasmid Insertion: Introduced these sequences separately into plasmid vectors of E. coli alongside the beta-galactosidase promoter. [1 Mark]\n• Harvesting & Ligation: Cultured both recombinant E. coli strains separately to produce chains A and B. Extracted and purified both chains and linked them chemically by forming disulfide bonds in vitro to yield mature, active human insulin\n(Humulin). [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the biological mechanism of RNA interference (RNAi) used to develop nematode-resistant tobacco plants. [3 Marks]",
        "answer": "RNAi mechanism in tobacco against Meloidogyne incognita.",
        "explanation": "RNAi mechanism in tobacco against Meloidogyne incognita.\n\nMarking Scheme:\n• Vector & Gene Insertion: Agrobacterium tumefaciens vectors were used to introduce nematode-specific genes into the tobacco plant genome. [1 Mark]\n• Formation of dsRNA: The introduced DNA was engineered under a promoter such that it transcribed both sense and anti- sense RNA strands in the host cells, which annealed to form double-stranded RNA (dsRNA). [1 Mark]\n• Silencing & Resistance: The dsRNA initiated RNA interference (RNAi), binding and cleaving the specific mRNA of the nematode Meloidogyne incognita. Consequently, the nematode could not synthesize vital proteins and could not survive in the transgenic tobacco host. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Adenosine Deaminase (ADA) deficiency? Describe the gene therapy approach used to treat it in a 4-year-old child in\n1990. [3 Marks]",
        "answer": "ADA deficiency causes SCID; retroviral gene therapy protocol.",
        "explanation": "ADA deficiency causes SCID; retroviral gene therapy protocol.\n\nMarking Scheme:\n• Cause & Pathology: Caused by a deletion in the gene coding for the enzyme adenosine deaminase, causing accumulation of toxic deoxyadenosine that destroys T-lymphocytes, leading to Severe Combined Immunodeficiency (SCID). [1 Mark]\n• Gene Therapy Steps: (1) Lymphocytes from patient's blood are cultured in vitro. (2) Functional ADA cDNA is introduced into cultured lymphocytes using a disarmed retroviral vector. (3) Genetically modified cells are re-infused into the patient. [1.5 Marks]\n• Limitation: Lymphocytes have finite lifespans, requiring periodic repeat infusions (permanent cure requires stem cell transduction at embryonic stage). [0.5 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why does the Bt toxin not kill the bacterium Bacillus thuringiensis, but kills the insect that ingests it? [3 Marks]",
        "answer": "Inactive protoxin vs alkaline gut activation.",
        "explanation": "Inactive protoxin vs alkaline gut activation.\n\nMarking Scheme:\n• Inactive in Bacterium: In Bacillus thuringiensis, the insecticidal protein is synthesized and stored as an inactive crystalline protoxin, which is completely non-toxic to bacterial cells. [1.5 Marks]\n• Activation in Insect Gut: When an insect larva ingests the protoxin, the highly alkaline pH of the insect midgut dissolves the protein crystals. Midgut proteases cleave the protoxin into the active toxin, which binds midgut epithelial receptors, creates lytic pores, and kills the insect. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are Transgenic Animals? Mention any four specific reasons for creating transgenic animals. [3 Marks]",
        "answer": "Transgenic animals definition and four purposes.",
        "explanation": "Transgenic animals definition and four purposes.\n\nMarking Scheme:\n• Definition: Animals that have had their genome experimentally manipulated to incorporate, carry, and express a foreign\n(exogenous) gene. [1 Mark]\n• Four Specific Reasons [2 Marks, 0.5 Mark each]:\n1. Study of normal physiology and development (e.g., insulin-like growth factors).\n2. Study of human disease pathology (models for cancer, cystic fibrosis, Alzheimer's).\n3. Production of valuable biological products (e.g., alpha-1-antitrypsin, Rosie's milk).\n4. Vaccine safety testing (polio vaccine testing on transgenic mice) and chemical toxicity testing."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is GEAC? State its two main responsibilities under the Ministry of Environment, Forest and Climate Change. [3 Marks]",
        "answer": "GEAC full form and biosafety mandates.",
        "explanation": "GEAC full form and biosafety mandates.\n\nMarking Scheme:\n• Full Form: Genetic Engineering Appraisal Committee. [1 Mark]\n• Two Main Mandates [2 Marks, 1 Mark each]:\n1. To evaluate and approve the safety and validity of proposals involving genetically modified organisms (GMOs) in research and industrial production.\n2. To assess the environmental safety and biosafety risks of releasing genetically modified crops (such as Bt cotton, GM mustard) into the open environment for commercial public cultivation."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Define Biopiracy. Explain how an American company attempted to patent Basmati rice in 1997. [3 Marks]",
        "answer": "Biopiracy definition and Basmati rice patent case.",
        "explanation": "Biopiracy definition and Basmati rice patent case.\n\nMarking Scheme:\n• Definition: The commercial exploitation of biological resources and traditional indigenous knowledge by multinational corporations without authorization, acknowledgment, or compensatory royalty sharing with native communities. [1.5 Marks]\n• Basmati Patent Case: In 1997, US company RiceTec obtained a broad patent from the US Patent and Trademark Office on 'Basmati rice lines and grains'. The patent was based on crossing traditional Indian Basmati varieties with semi-dwarf lines and claiming it as a novel proprietary invention, which threatened Indian rice exports until the Indian government legally challenged it. [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "How does early molecular diagnosis using PCR and ELISA help in disease management compared to conventional diagnostic methods? [3 Marks]",
        "answer": "PCR and ELISA advantages over conventional diagnosis.",
        "explanation": "PCR and ELISA advantages over conventional diagnosis.\n\nMarking Scheme:\n• Conventional Limitations: Serum, blood smear, and urine cultures can detect pathogens only after they have multiplied to high titers and caused clinical symptoms, leading to delayed treatment. [1 Mark]\n• PCR Superiority: Can amplify and detect infinitesimal amounts of viral/bacterial DNA/RNA even before symptoms appear or during early latent phases (e.g., HIV detection, asymptomatic carriers). [1 Mark]\n• ELISA Superiority: Rapid, highly sensitive antibody-antigen interaction assay that can screen thousands of samples simultaneously for infection markers. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Proinsulin and Mature Insulin with the help of a neat labelled schematic diagram. [3 Marks]",
        "answer": "Proinsulin vs mature insulin diagram and C-peptide cleavage.",
        "explanation": "Proinsulin vs mature insulin diagram and C-peptide cleavage.\n\nMarking Scheme:\n• Schematic Diagram [1.5 Marks]: Showing Chain A (21 aa) and Chain B (30 aa) connected by C-peptide in proinsulin; mature insulin showing A and B chains linked by two interchain disulfide bonds with C-peptide detached. [1.5 Marks]\n• Differences [1.5 Marks]: Proinsulin is an inactive precursor containing 84 amino acids (A + B + C peptide). Mature insulin is biologically active, containing 51 amino acids (A + B chains only), with C-peptide enzymatically excised. [1.5 Marks]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State any three advantages of genetically modified (GM) crops over traditional crop varieties. [3 Marks]",
        "answer": "Three agronomic advantages of GM crops.",
        "explanation": "Three agronomic advantages of GM crops.\n\nMarking Scheme (1 Mark each for any three):\n1. Increased tolerance to abiotic stresses: Engineered to withstand extreme cold, drought, high salinity, and heat.\n2. Reduced reliance on chemical pesticides: Pest-resistant crops (like Bt cotton) reduce chemical pesticide inputs.\n3. Reduced post-harvest losses and enhanced shelf-life: Delayed ripening (e.g., Flavr Savr tomato).\n4. Enhanced nutritional value: Biofortified crops like Golden rice (Vitamin A enriched).\n5. Increased mineral utilization efficiency: Prevents early exhaustion of soil nutrients. SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the development of pest-resistant transgenic plants using RNA interference (RNAi) with specific reference to tobacco and Meloidogyne incognita.\n(b) Why is RNAi considered a eukaryotic mechanism of cellular defense? [5 Marks]",
        "answer": "RNAi mechanism in tobacco roots, dsRNA action, and evolutionary defense role.",
        "explanation": "RNAi mechanism in tobacco roots, dsRNA action, and evolutionary defense role.\n\nMarking Scheme:\n(a) RNAi Development against Meloidogyne incognita [3.5 Marks]:\n• Nematode problem: Meloidogyne incognita invades tobacco roots, inducing giant root-knot galls that severely retard nutrient uptake and yield. [0.5 Mark]\n• Transformation: Using Agrobacterium Ti vectors, nematode-specific cDNA is inserted into tobacco genome under a dual promoter. [1 Mark]\n• dsRNA synthesis: Host plant cells transcribe both sense and anti-sense RNA strands, which spontaneously anneal to form double-stranded RNA (dsRNA). [1 Mark]\n• Dicer & RISC action: The enzyme Dicer chops dsRNA into small interfering RNAs (siRNAs). siRNAs incorporate into RISC (RNA-Induced Silencing Complex), unwind, and guide RISC to bind complementary nematode mRNA. The mRNA is cleaved, silencing protein translation. The nematode cannot survive in the transgenic plant. [1 Mark]\n(b) Cellular Defense Role [1.5 Marks]:\n• RNAi evolved universally in eukaryotes as a defense system against viral pathogens (cleaving viral dsRNA intermediates) and transposable genetic elements (transposons / jumping genes) that replicate via RNA intermediates. [1.5 Marks]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the structure of human proinsulin and explain how genetically engineered insulin (Humulin) was synthesized by Eli Lilly.\n(b) What technical challenge did Eli Lilly overcome to produce active human insulin in bacterial hosts? [5 Marks]",
        "answer": "Proinsulin structure, Humulin production, and overcoming C-peptide processing challenge.",
        "explanation": "Proinsulin structure, Humulin production, and overcoming C-peptide processing challenge.\n\nMarking Scheme:\n(a) Structure & Recombinant Synthesis [3.5 Marks]:\n• Proinsulin Structure: Single polypeptide containing Chain A (21 aa) and Chain B (30 aa) joined by an extra connecting C- peptide (33 aa) and stabilized by disulfide bridges. [1 Mark]\n• Eli Lilly Protocol: (1) Synthesized two independent DNA sequences coding for human Chain A and Chain B. (2) Cloned them separately into plasmids of E. coli downstream of the beta-galactosidase gene. (3) Cultured the two strains to produce separate A and B polypeptide chains. (4) Extracted, purified, and chemically reacted them with sodium tetrathionate to form authentic disulfide bonds between Chain A and B, producing active Humulin. [2.5 Marks]\n(b) Technical Challenge Overcome [1.5 Marks]:\n• Challenge: E. coli bacteria lack eukaryotic post-translational processing machinery (endopeptidases) needed to cleave C- peptide from proinsulin. Producing whole proinsulin in bacteria resulted in an inactive molecule. Eli Lilly bypassed this by expressing chains A and B separately, avoiding the need for C-peptide excision entirely. [1.5 Marks]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Gene Therapy? Illustrate with the clinical treatment of Adenosine Deaminase (ADA) deficiency in a human patient.\n(b) Differentiate between Somatic Cell Gene Therapy and Germline Gene Therapy in terms of inheritability. [5 Marks]",
        "answer": "Gene therapy for ADA-SCID, protocol, and somatic vs germline gene therapy.",
        "explanation": "Gene therapy for ADA-SCID, protocol, and somatic vs germline gene therapy.\n\nMarking Scheme:\n(a) Gene Therapy & ADA Protocol [3.5 Marks]:\n• Definition: Insertion of functional genes into an individual's cells and tissues to treat genetic diseases by correcting defective genes. [1 Mark]\n• ADA Treatment Protocol: Lymphocytes isolated from peripheral blood of the child are cultured in laboratory. A functional ADA cDNA is inserted into these lymphocytes using a disarmed retroviral vector. The corrected cells are infused back into patient's circulation, where they produce ADA enzyme, restoring immune function. Must be repeated periodically because mature lymphocytes have finite life. [2.5 Marks]\n(b) Somatic vs Germline Gene Therapy [1.5 Marks]:\n• Somatic Cell Gene Therapy: Genes are transferred only into somatic body cells (e.g., lymphocytes, bone marrow). The therapeutic modifications are NOT inherited by future offspring. [0.75 Mark]\n• Germline Gene Therapy: Genes are introduced into germ cells (sperms, eggs, or early zygote). The genetic corrections ARE transmitted to all subsequent generations. (Currently banned for humans due to ethical reasons). [0.75 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What are Transgenic Animals? Discuss five major applications of transgenic animals in medical research and biotechnology.\n(b) Name the first transgenic cow and explain the benefit of its milk. [5 Marks]",
        "answer": "Transgenic animals, five applications, and cow Rosie.",
        "explanation": "Transgenic animals, five applications, and cow Rosie.\n\nMarking Scheme:\n(a) Definition & Five Applications [4 Marks]:\n• Definition: Animals containing functional exogenous foreign genes introduced into their genome. [0.5 Mark]\n• Applications [3.5 Marks, 0.7 Mark each]:\n1. Study of normal physiology: Elucidating gene regulation and growth factors (e.g., IGF).\n2. Human disease models: Transgenic mice engineered to study cancer, cystic fibrosis, Alzheimer's, rheumatoid arthritis.\n3. Biological product bioreactors: Transgenic farm animals producing human proteins (e.g., alpha-1-antitrypsin for emphysema).\n4. Vaccine safety: Transgenic mice expressing human poliovirus receptor used to test safety of batches before human use.\n5. Chemical safety / Toxicity testing: Transgenic animals carry genes making them more sensitive to toxins, yielding rapid toxicity results.\n(b) Transgenic Cow Rosie [1 Mark]:\n• Produced in 1997; secreted milk containing human alpha-lactalbumin (2.4 g/L), providing a nutritionally complete, digestible milk tailored for human infants. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Discuss the ethical issues and biosafety concerns associated with the release of Genetically Modified Organisms (GMOs) into the environment.\n(b) What role does the Genetic Engineering Appraisal Committee (GEAC) play in India? [5 Marks]",
        "answer": "GMO ethical issues, biosafety risks, and GEAC mandate.",
        "explanation": "GMO ethical issues, biosafety risks, and GEAC mandate.\n\nMarking Scheme:\n(a) Ethical Issues & Biosafety Concerns [3.5 Marks]:\n• Unintended ecological disruption: Transgenic crops may cross-pollinate with wild relatives, creating herbicide-resistant 'superweeds'. [1 Mark]\n• Threat to non-target biodiversity: Insecticidal Cry toxins might leach into soil or harm non-target beneficial pollinators and soil fauna. [0.75 Mark]\n• Health concerns: Potential risk of novel allergenicity or antibiotic resistance marker transfer to human gut bacteria. [0.75 Mark]\n• Ethical dilemmas: Altering the genetic integrity of species and corporate monopolization of seeds through patents, threatening farmers' livelihood. [1 Mark]\n(b) GEAC Role in India [1.5 Marks]:\n• Apex statutory regulatory body under the Ministry of Environment and Forests that evaluates the environmental safety of field trials, checks biosafety protocols, and grants regulatory clearance for commercial cultivation of GM organisms in India. [1.5 Marks]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Biopiracy threatens the sovereign bio-resources of developing nations. Historical instances involving Basmati rice, Neem, and Turmeric highlighted the urgent need to protect traditional indigenous knowledge through national and international intellectual property laws.'\n(a) What is Biopiracy? Explain with an example.\n(b) How did a foreign patent on Basmati rice infringe upon Indian farmers' traditional agricultural rights?\n(c) What measures has India taken to protect its biological wealth against biopiracy? [5 Marks]",
        "answer": "Biopiracy concept, Basmati rice dispute, and legislative protections in India.",
        "explanation": "Biopiracy concept, Basmati rice dispute, and legislative protections in India.\n\nMarking Scheme:\n(a) Biopiracy Definition & Example [1.5 Marks]:\n• Definition: Unauthorized exploitation of biological resources and traditional knowledge of indigenous communities by corporations without consent or equitable benefit-sharing. [1 Mark]\n• Example: Patenting wound-healing properties of turmeric or fungicidal properties of neem, which have been documented in Ayurveda for millennia. [0.5 Mark]\n(b) Basmati Rice Patent Dispute [2 Marks]:\n• In 1997, US firm RiceTec was granted a US patent on 'Basmati rice lines'. [0.5 Mark]\n• The patent claimed novel varieties that were actually crosses between authentic Indian Basmati (cultivated for centuries in the Indo-Gangetic plains) and semi-dwarf lines. [0.75 Mark]\n• This patent restricted Indian farmers from selling Basmati abroad and monopolized the iconic brand name, prompting the Indian government to challenge and revoke major claims of the patent. [0.75 Mark]\n(c) Protective Measures by India [1.5 Marks]:\n• Passed the Biological Diversity Act (2002) and established the National Biodiversity Authority (NBA). [0.75 Mark]\n• Created the Traditional Knowledge Digital Library (TKDL) to document ancient Ayurvedic formulations in multiple international languages, preventing fraudulent foreign patent claims, and amended the Indian Patents Bill. [0.75 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the mechanism of action of Bt toxin against insect pests.\n(b) Why do different Cry genes need to be cloned for different crop pests? Give two examples of specific Cry genes and their target pests. [5 Marks]",
        "answer": "Bt toxin mechanism, Cry gene specificity, and pest targets.",
        "explanation": "Bt toxin mechanism, Cry gene specificity, and pest targets.\n\nMarking Scheme:\n(a) Mechanism of Action [3 Marks]:\n• Synthesis: Bacterium Bacillus thuringiensis synthesizes crystalline insecticidal Cry proteins during sporulation as inactive protoxins. [0.5 Mark]\n• Ingestion: Target insect larvae feed on plant tissues containing Bt toxin. [0.5 Mark]\n• Solubilization: High alkaline pH of the insect midgut dissolves crystals. [0.5 Mark]\n• Activation: Midgut proteases cleave protoxin into active toxic core. [0.5 Mark]\n• Pore Formation & Lysis: Active toxin binds specifically to cadherin receptors on the surface of midgut epithelial cells, inserting into membrane and forming lytic ion pores. Influx of water causes cell swelling, lysis, gut paralysis, starvation, and death. [1 Mark]\n(b) Cry Gene Specificity & Examples [2 Marks]:\n• Specificity: Cry proteins are highly specific because their binding depends on specific membrane receptors present only in the midgut of particular insect orders (Lepidopterans, Coleopterans, Dipterans). [1 Mark]\n• Examples [1 Mark, 0.5 Mark each]:\n1. cryIAc and cryIIAb: Specifically target and control Cotton Bollworms.\n2. cryIAb: Specifically targets and controls Corn Borer."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the role of modern biotechnology in medical diagnostics:\n(a) Detection of HIV using PCR and ELISA\n(b) Detection of cancer mutations using Autoradiography and radioactive probes\n(c) Recombinant therapeutic proteins in human medicine. [5 Marks]",
        "answer": "Biotechnology in medical diagnostics and therapeutics.",
        "explanation": "Biotechnology in medical diagnostics and therapeutics.\n\nMarking Scheme:\n(a) HIV Detection [2 Marks]:\n• PCR [1 Mark]: Amplifies minute quantities of viral RNA/DNA in blood, allowing detection during the early 'window period' before the patient's body produces detectable antibodies.\n• ELISA [1 Mark]: Rapid serological screening assay that detects HIV antigens or host anti-HIV antibodies using enzyme- conjugated antibodies and colorigenic substrates.\n(b) Cancer Mutation Detection via Autoradiography [1.5 Marks]:\n• Single-stranded DNA probe labeled with radioactive 32P is hybridized to complementary genomic DNA from patient's cloned cells. [0.75 Mark]\n• In wild-type cells, probe hybridizes and leaves dark exposure bands on X-ray film. If the cell carries a mutated oncogene, the probe cannot hybridize due to base mismatch, leaving no photographic band, pinpointing the mutation. [0.75 Mark]\n(c) Recombinant Therapeutics [1.5 Marks]:\n• Enables mass production of completely pure, non-immunogenic human proteins in bioreactors (e.g., Humulin, growth hormone, erythropoietin, tissue plasminogen activator), preventing infections transmitted via human/animal donors. [1.5 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A 5-year-old child is diagnosed with severe immunodeficiency. Clinical genetic analysis shows a homozygous deletion of the ADA gene.\n(a) Name the disease the child is suffering from.\n(b) What are the two non-genetic clinical treatments available and what are their limitations?\n(c) Explain the gene therapy approach that could offer a permanent cure for this child. [5 Marks]",
        "answer": "SCID diagnosis, conventional treatments vs embryonic gene therapy.",
        "explanation": "SCID diagnosis, conventional treatments vs embryonic gene therapy.\n\nMarking Scheme:\n(a) Disease Name [1 Mark]: Severe Combined Immunodeficiency (SCID) due to Adenosine Deaminase (ADA) deficiency. [1 Mark]\n(b) Non-genetic Treatments & Limitations [2 Marks]:\n• 1. Bone Marrow Transplantation: Replacing defective stem cells with healthy HLA-matched donor marrow. Limitation:\nFinding a histocompatible matched donor is difficult; risk of graft-versus-host disease (GVHD). [1 Mark]\n• 2. Enzyme Replacement Therapy (ERT): Periodic intravenous injections of bovine PEG-ADA enzyme. Limitation: Not completely curative; requires lifelong painful, expensive injections. [1 Mark]\n(c) Permanent Cure via Gene Therapy [2 Marks]:\n• Conventional somatic gene therapy in circulating lymphocytes requires repetitive infusions because mature lymphocytes are mortal. [0.5 Mark]\n• Permanent Cure: If the functional ADA cDNA is isolated and introduced into hematopoietic stem cells from bone marrow at early embryonic stages (or umbilical cord blood stem cells) using a safe retroviral/lentiviral vector, the transformed stem cells will continuously self-renew and give rise to functional T-cells throughout the patient's life. [1.5 Marks]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Differentiate between chemical agriculture, organic agriculture, and genetically engineered crop-based agriculture.\n(b) State four significant ways in which Genetically Modified (GM) plants have revolutionized modern agriculture. [5 Marks]",
        "answer": "Comparison of agricultural paradigms and benefits of GM crops.",
        "explanation": "Comparison of agricultural paradigms and benefits of GM crops.\n\nMarking Scheme:\n(a) Agricultural Paradigms Comparison [2.5 Marks]:\n• Chemical Agriculture: Relies on high-yielding crop varieties and heavy inputs of synthetic agrochemicals (fertilizers, pesticides). High yield but causes environmental degradation, soil compaction, and biomagnification. [0.75 Mark]\n• Organic Agriculture: Avoids synthetic chemicals; relies on biofertilizers, green manures, crop rotation, and biocontrol. Ecologically safe, but often has lower immediate yields and higher labor costs. [0.75 Mark]\n• Genetically Engineered Agriculture: Utilizes plants whose genetic makeup has been directly modified using recombinant DNA technology to introduce desirable agronomic traits (pest resistance, stress tolerance, biofortification), minimizing chemical inputs while maximizing yields. [1 Mark]\n(b) Four Ways GM Crops Revolutionized Agriculture [2.5 Marks, ~0.6 Mark each for any four]:\n• 1. Pest Resistance: Reduced reliance on synthetic insecticides (e.g., Bt cotton, Bt brinjal).\n• 2. Abiotic Stress Tolerance: Crops engineered to grow in saline soils, drought conditions, and extreme temperatures.\n• 3. Enhanced Nutritional Quality: Biofortification of staple foods (e.g., Vitamin A enriched Golden rice, protein-rich potatoes).\n• 4. Reduced Post-Harvest Losses: Delayed fruit ripening and rotting (e.g., Flavr Savr tomato with antisense polygalacturonase).\n• 5. Efficient Mineral Utilization: Plants absorb and use soil minerals more efficiently, preventing rapid depletion of soil fertility."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 11,
      "unit_num": 10,
      "title": "Organisms and Populations",
      "unit_title": "Ecology and Environment",
      "weightage_unit": "10 Marks (Unit X)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "According to Allen's Rule, mammals living in colder climates generally possess:",
        "options": [
          "(a) Longer limbs and larger ears to dissipate body heat",
          "(b) Shorter ears and shorter limbs to minimize heat loss",
          "(c) Thinner fur and absence of subcutaneous fat",
          "(d) Higher surface-area-to-volume ratio"
        ],
        "answer": "(b) Shorter ears and shorter limbs to minimize heat loss",
        "explanation": "Allen's Rule states that mammals from colder climates generally have shorter ears and limbs to minimize heat loss by reducing the surface area relative to body volume."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Why are very small animals like shrews and hummingbirds rarely found in polar regions?",
        "options": [
          "(a) Because they cannot find seeds to eat under snow",
          "(b) Because small animals have a large surface area relative to their volume and lose body heat very fast in the cold",
          "(c) Because their blood freezes at 0°C",
          "(d) Because they lack hemoglobin"
        ],
        "answer": "(b) Because small animals have a large surface area relative to their volume and lose body heat very fast in the cold",
        "explanation": "Thermoregulation is energetically expensive for many organisms. Small animals have a larger surface area relative to their volume, so they tend to lose body heat very fast when it is cold outside. They have to expend much metabolic energy to generate body heat, which is why very small animals are rarely found in polar regions."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Kangaroo rat of North American deserts is capable of surviving without drinking water because:",
        "options": [
          "(a) It stores massive quantities of water in its subcutaneous fat",
          "(b) It meets all its water requirements through internal fat oxidation and excretes highly concentrated urine",
          "(c) It absorbs atmospheric moisture directly through its skin",
          "(d) It enters lifelong aestivation"
        ],
        "answer": "(b) It meets all its water requirements through internal fat oxidation and excretes highly concentrated urine",
        "explanation": "In the absence of an external source of water, the Kangaroo rat in North American deserts is capable of meeting all its water requirements through its internal fat oxidation (in which water is a byproduct). It also has the ability to concentrate its urine so that minimal volume of water is lost."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A person visiting Rohtang Pass near Manali (>3,500 m) experiences altitude sickness with nausea, fatigue, and heart palpitations. The body compensates for low atmospheric pressure by:",
        "options": [
          "(a) Decreasing RBC production and slowing breathing",
          "(b) Increasing RBC production, decreasing the binding affinity of hemoglobin, and increasing breathing rate",
          "(c) Shutting down sweat glands and shivering",
          "(d) Secreting excess bile"
        ],
        "answer": "(b) Increasing RBC production, decreasing the binding affinity of hemoglobin, and increasing breathing rate",
        "explanation": "At high altitudes, the atmospheric pressure is low, so the body does not get enough oxygen. The body compensates by increasing red blood cell production, decreasing the binding affinity of hemoglobin (facilitating oxygen release to tissues), and increasing breathing rate."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Keoladeo National Park in Bharatpur (Rajasthan) is famous for hosting thousands of migratory birds coming from:",
        "options": [
          "(a) Sahara desert",
          "(b) Siberia and other extremely cold northern regions",
          "(c) Western Ghats",
          "(d) Amazon rainforest"
        ],
        "answer": "(b) Siberia and other extremely cold northern regions",
        "explanation": "Every winter, the famous Keoladeo National Park (Bharatpur) in Rajasthan hosts thousands of migratory birds coming from Siberia and other extremely cold northern regions."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A stage of suspended development entered by many species of zooplankton in lakes and ponds to survive adverse environmental conditions is known as:",
        "options": [
          "(a) Hibernation",
          "(b) Aestivation",
          "(c) Diapause",
          "(d) Dormancy"
        ],
        "answer": "(c) Diapause",
        "explanation": "Under unfavorable conditions, many zooplankton species in lakes and ponds are known to enter diapause, a stage of suspended physiological development."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In an expanding population, the age pyramid has:",
        "options": [
          "(a) Broad base with pre-reproductive individuals outnumbering reproductive individuals",
          "(b) Bell-shaped appearance with equal pre-reproductive and reproductive individuals",
          "(c) Urn-shaped appearance with pre-reproductive individuals fewer than reproductive ones",
          "(d) Narrow base with declining birth rates"
        ],
        "answer": "(a) Broad base with pre-reproductive individuals outnumbering reproductive individuals",
        "explanation": "A growing/expanding population pyramid has a triangular shape with a broad base, representing a high proportion of pre-reproductive individuals, followed by reproductive and post-reproductive individuals."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Verhulst-Pearl Logistic Growth of a population is described by which differential equation?",
        "options": [
          "(a) dN/dt = rN",
          "(b) dN/dt = rN[(K - N)/K]",
          "(c) dN/dt = (K - N)/rN",
          "(d) Nt = N0 e^(rt)"
        ],
        "answer": "(b) dN/dt = rN[(K - N)/K]",
        "explanation": "Verhulst-Pearl Logistic Growth is represented by dN/dt = rN[(K - N)/K], where N = population density at time t, r = intrinsic rate of natural increase, and K = carrying capacity of the environment."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the logistic growth curve, the asymptotic plateau phase is reached when:",
        "options": [
          "(a) Population density (N) equals the carrying capacity (K)",
          "(b) Population density (N) exceeds carrying capacity (K)",
          "(c) Intrinsic rate of natural increase (r) becomes zero",
          "(d) Environmental resources become unlimited"
        ],
        "answer": "(a) Population density (N) equals the carrying capacity (K)",
        "explanation": "In a logistic growth curve, after the lag phase, acceleration, and deceleration phases, the curve reaches an asymptote when population density (N) equals carrying capacity (K), so (K - N)/K = 0 and dN/dt = 0."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following organisms reproduces only once in its entire lifetime and then dies?",
        "options": [
          "(a) Pacific salmon fish and Bamboo species",
          "(b) Oysters and Pelagic fishes",
          "(c) Birds and Mammals",
          "(d) Honeybees"
        ],
        "answer": "(a) Pacific salmon fish and Bamboo species",
        "explanation": "Some organisms breed only once in their lifetime (Pacific salmon fish, bamboo species), while others breed many times during their lifetime (most birds and mammals)."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Abingdon tortoise in Galapagos Islands became extinct within a decade after goats were introduced on the island. This was due to:",
        "options": [
          "(a) Predation of tortoises by goats",
          "(b) Greater browsing efficiency of the goats outcompeting tortoises for food",
          "(c) Transmission of viral disease from goats to tortoises",
          "(d) Heavy trampling of tortoise nests by goats"
        ],
        "answer": "(b) Greater browsing efficiency of the goats outcompeting tortoises for food",
        "explanation": "The Abingdon tortoise in Galapagos became extinct within a decade after goats were introduced on the island, apparently due to the greater browsing efficiency of the goats outcompeting tortoises for limited vegetation."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Gause's 'Competitive Exclusion Principle' states that:",
        "options": [
          "(a) Larger organisms always prey on smaller organisms",
          "(b) Two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will eventually be eliminated",
          "(c) Competitors always evolve mutualistic relationships",
          "(d) Parasites cannot coexist with their hosts"
        ],
        "answer": "(b) Two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will eventually be eliminated",
        "explanation": "Gause's Competitive Exclusion Principle states that two closely related species competing for the same limiting resources cannot co-exist indefinitely and the competitively inferior one will be eliminated eventually (assuming resources are strictly limiting)."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Robert MacArthur demonstrated that five closely related species of warblers living on the same spruce tree were able to avoid competition and coexist due to:",
        "options": [
          "(a) Resource partitioning through behavioral differences in their foraging activities",
          "(b) Competitive exclusion of four species",
          "(c) Morphological convergence of beaks",
          "(d) Nocturnal feeding habits"
        ],
        "answer": "(a) Resource partitioning through behavioral differences in their foraging activities",
        "explanation": "MacArthur showed that five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to behavioral differences in their foraging activities (resource partitioning)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Monarch butterfly avoids predation by birds because it is highly distasteful to its predator. It acquires this chemical defense by:",
        "options": [
          "(a) Secreting formic acid from abdomen",
          "(b) Feeding on a poisonous weed containing toxic cardiac glycosides during its caterpillar stage",
          "(c) Synthesizing cyanide in salivary glands",
          "(d) Mimicking the dead leaf pattern"
        ],
        "answer": "(b) Feeding on a poisonous weed containing toxic cardiac glycosides during its caterpillar stage",
        "explanation": "The monarch butterfly is highly distasteful to its predator (bird) because of a special chemical present in its body. Interestingly, the butterfly acquires this chemical during its caterpillar stage by feeding on a poisonous weed (Calotropis/milkweed containing cardiac glycosides)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The weed Calotropis growing in abandoned fields produces which deadly chemical compound as a defense against grazing herbivores (cattle and goats)?",
        "options": [
          "(a) Nicotine",
          "(b) Poisonous cardiac glycosides",
          "(c) Strychnine",
          "(d) Quinine"
        ],
        "answer": "(b) Poisonous cardiac glycosides",
        "explanation": "Calotropis produces highly poisonous cardiac glycosides, which is why cattle or goats are never seen browsing on this weed."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cuscuta (dodder), a non-green parasitic plant that grows on hedge plants, lacks which physiological and morphological structures?",
        "options": [
          "(a) Chlorophyll and leaves",
          "(b) Stems and flowers",
          "(c) Haustoria",
          "(d) Seeds"
        ],
        "answer": "(a) Chlorophyll and leaves",
        "explanation": "Cuscuta, a parasitic plant that is commonly found growing on hedge plants, has lost its chlorophyll and leaves in the course of evolution. It derives its nutrition from the host plant which it entwines using specialized absorbing organs called haustoria."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Brood parasitism in birds, where a parasitic bird lays its eggs in the nest of its host and lets the host incubate them, is illustrated by:",
        "options": [
          "(a) Cuckoo (Koel) and Crow",
          "(b) Pigeon and Sparrow",
          "(c) Eagle and Vulture",
          "(d) Penguin and Albatross"
        ],
        "answer": "(a) Cuckoo (Koel) and Crow",
        "explanation": "Brood parasitism in birds is a fascinating example of parasitism in which the parasitic bird (cuckoo / Koel) lays its eggs in the nest of its host (crow) and lets the host incubate them. The eggs of the parasitic bird have evolved to resemble the host's egg in size and colour to avoid detection."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "An orchid growing as an epiphyte on the branch of a mango tree is an ecological interaction classified as:",
        "options": [
          "(a) Mutualism",
          "(b) Commensalism (+, 0)",
          "(c) Parasitism",
          "(d) Amensalism"
        ],
        "answer": "(b) Commensalism (+, 0)",
        "explanation": "An orchid growing as an epiphyte on a mango branch gets support and exposure to sunlight without deriving nutrition or causing harm to the mango tree. This is Commensalism (+, 0), where the orchid benefits and the mango tree is neither harmed nor benefited."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Mediterranean orchid Ophrys employs which unique biological phenomenon to ensure cross-pollination by male bees of the genus Colpa?",
        "options": [
          "(a) Secretion of abundant sweet nectar",
          "(b) 'Sexual deceit' (pseudocopulation), where a petal resembles the female bee in size, color, and markings",
          "(c) Trapping the bee inside a water pool",
          "(d) Cleistogamous self-pollination"
        ],
        "answer": "(b) 'Sexual deceit' (pseudocopulation), where a petal resembles the female bee in size, color, and markings",
        "explanation": "The Mediterranean orchid Ophrys employs 'sexual deceit' to get pollinated by a species of bee. One petal of its flower bears an uncanny resemblance to the female of the bee in size, colour, and markings. The male bee is attracted and 'pseudocopulates' with the flower, dusting and picking up pollinia."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The interaction between Sea Anemone (with stinging tentacles) and Clownfish (living among the tentacles) is an example of:",
        "options": [
          "(a) Commensalism",
          "(b) Mutualism",
          "(c) Parasitism",
          "(d) Amensalism"
        ],
        "answer": "(a) Commensalism",
        "explanation": "The clownfish gets protection from predators which stay away from the stinging tentacles of the sea anemone. The anemone does not derive any apparent benefit nor is it harmed (+, 0), exemplifying commensalism."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Amensalism is an ecological population interaction in which:",
        "options": [
          "(a) One species is harmed while the other is unaffected (-, 0)",
          "(b) Both species are benefited (+, +)",
          "(c) Both species are harmed (-, -)",
          "(d) One species benefits while the other is unaffected (+, 0)"
        ],
        "answer": "(a) One species is harmed while the other is unaffected (-, 0)",
        "explanation": "In amensalism, one species is harmed or inhibited while the other species is unaffected (neither benefited nor harmed, -, 0). For example, Penicillium mould secretes penicillin that inhibits Staphylococcus bacteria, but the mould is unaffected."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The prickly pear cactus introduced into Australia in the early 1920s caused widespread ecological havoc by spreading over millions of hectares. It was brought under control by introducing a:",
        "options": [
          "(a) Cactus-feeding moth (Cactoblastis cactorum) from its natural habitat",
          "(b) Chemical defoliant herbicide",
          "(c) Fungal pathogen",
          "(d) Herds of domestic goats"
        ],
        "answer": "(a) Cactus-feeding moth (Cactoblastis cactorum) from its natural habitat",
        "explanation": "In the early 1920s, the prickly pear cactus introduced into Australia spread rapidly because of the absence of natural predators. It was brought under control only after a cactus-feeding predator (a moth, Cactoblastis) was introduced from its natural habitat."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "When the predatory starfish Pisaster was experimentally removed from an enclosed intertidal community on the Pacific Coast of America, what happened to the community?",
        "options": [
          "(a) Species diversity increased rapidly",
          "(b) More than 10 species of invertebrates became extinct within a year due to intense interspecific competition",
          "(c) Invertebrates started reproducing parthenogenetically",
          "(d) Algal bloom covered the entire rocky shoreline"
        ],
        "answer": "(b) More than 10 species of invertebrates became extinct within a year due to intense interspecific competition",
        "explanation": "In the rocky intertidal communities of the American Pacific Coast, the starfish Pisaster is an important keystone predator. When all starfish were removed from an experimental area, more than 10 species of invertebrates became extinct within a year because of unchecked interspecific competition."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a pond, there were 20 lotus plants last year and through reproduction, 8 new plants are added in a year, taking the current population to 28. What is the birth rate of the lotus population?",
        "options": [
          "(a) 0.4 offspring per lotus per year",
          "(b) 0.8 offspring per lotus per year",
          "(c) 4 offspring per lotus per year",
          "(d) 0.28 offspring per lotus per year"
        ],
        "answer": "(a) 0.4 offspring per lotus per year",
        "explanation": "Birth rate is calculated as: Number of births / Initial population = 8 / 20 = 0.4 offspring per lotus plant per year."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "If in a laboratory population of 40 fruit flies, 4 fruit flies died during a specified time interval of one week, what is the death rate in the population during that period?",
        "options": [
          "(a) 0.1 individuals per fruit fly per week",
          "(b) 0.4 individuals per fruit fly per week",
          "(c) 1.0 individuals per fruit fly per week",
          "(d) 0.01 individuals per fruit fly per week"
        ],
        "answer": "(a) 0.1 individuals per fruit fly per week",
        "explanation": "Death rate is calculated as: Number of deaths / Initial population = 4 / 40 = 0.1 individuals per fruit fly per week. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Predators act as 'conduits' for energy transfer across trophic levels in an ecosystem.\nReason (R): Predators maintain prey populations under control, preventing them from causing ecosystem degradation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are correct ecological roles of predators. Predators transfer energy from lower trophic levels (herbivores) to top carnivores, and they also control prey numbers (as demonstrated in the prickly pear cactus and Pisaster experiments). However, prey population regulation does not define why they act as energy conduits."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Nearly all plants and 99 percent of animals are conformers.\nReason (R): Maintaining homeostatic internal body temperature and osmolarity is energetically very expensive.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Heat loss or heat gain is a function of surface area. Thermodynamic costs of maintaining constant internal environment (homeostasis) outweigh the physiological benefits for most ectotherms, so they simply conform to ambient conditions."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Brood parasitism represents an evolutionary arms race between the cuckoo and the crow.\nReason (R): Cuckoo eggs have evolved to closely mimic the host crow's eggs in size, pattern, and color to prevent detection and ejection.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). As host crows evolved cognitive mechanisms to recognize and eject foreign eggs, parasitic cuckoos co-evolved egg mimicry, driving co-evolutionary arms race."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Logistic growth model is considered far more realistic than the exponential growth model in nature.\nReason (R): In natural habitats, resources (food, space) are strictly finite and limited, leading to a maximum carrying capacity\n(K).",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains (A). Unlimited resource availability (exponential growth) is a theoretical condition that cannot be sustained indefinitely in any natural ecosystem; finite resources impose a carrying capacity (K), producing a sigmoid logistic growth curve."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The relationship between the Mediterranean orchid Ophrys and the male solitary bee is an example of co- evolution.\nReason (R): If the female bee's color patterns change slightly during evolution, the orchid flower must also co-evolve corresponding petal patterns to maintain pollination.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) explains (A). Because pollination success relies entirely on sexual mimicry, any evolutionary divergence in the female bee requires reciprocal adaptive mutation in the orchid petal to avoid extinction. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Regulators and Conformers with one animal example of each. Why did conformers not evolve into regulators? [3 Marks]",
        "answer": "Regulators vs conformers and energetic cost of homeostasis.",
        "explanation": "Regulators vs conformers and energetic cost of homeostasis.\n\nMarking Scheme:\n• Regulators: Organisms that maintain physiological homeostasis (constant internal body temperature and osmotic concentration) regardless of external environmental fluctuations. Examples: Mammals and birds. [1 Mark]\n• Conformers: Organisms whose internal body temperature and osmotic concentration change passively with the ambient environment. Examples: 99% of animals (fishes, reptiles, amphibians) and all plants. [1 Mark]\n• Why Conformers Did Not Evolve: Thermoregulation is energetically extremely expensive (especially for heat generation in cold environments). For most species, the metabolic energy needed to maintain homeostasis outweighs the ecological advantage, so they adopted conforming as an evolutionary strategy. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe any three xerophytic adaptations exhibited by desert plants like Opuntia to survive severe water scarcity. [3 Marks]",
        "answer": "Xerophytic adaptations: Spines, thick cuticle, CAM pathway.",
        "explanation": "Xerophytic adaptations: Spines, thick cuticle, CAM pathway.\n\nMarking Scheme (1 Mark each for any three):\n1. Leaf modification: Leaves are reduced to sharp spines to minimize water loss via transpiration.\n2. Stem modification (Phylloclade): Flattened green succulent stems take over the function of photosynthesis and store mucilage and water.\n3. Thick cuticle and sunken stomata: Stems have a thick waxy cuticle and stomata arranged in deep pits (sunken) to curtail vapor loss.\n4. Crassulacean Acid Metabolism (CAM): Special photosynthetic pathway where stomata remain closed during the hot day and open only at night to absorb CO2."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is an Age Pyramid? Draw schematic age pyramids representing: (i) An Expanding population, (ii) A Stable population, (iii) A Declining population. [3 Marks]",
        "answer": "Age pyramids definition and three graphical types.",
        "explanation": "Age pyramids definition and three graphical types.\n\nMarking Scheme:\n• Definition: Graphical representation showing the percentage distribution of different age groups (pre-reproductive, reproductive, post-reproductive) in a population. [0.75 Mark]\n• Three Pyramids [2.25 Marks, 0.75 Mark each]:\n(i) Expanding: Broad triangular base with large pre-reproductive group.\n(ii) Stable: Bell-shaped with nearly equal pre-reproductive and reproductive age classes.\n(iii) Declining: Urn-shaped with narrow base (pre-reproductive individuals fewer than reproductive ones)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain Gause's Competitive Exclusion Principle. How did MacArthur show that competitive species can coexist through 'Resource Partitioning'? [3 Marks]",
        "answer": "Gause's principle and MacArthur's warblers resource partitioning.",
        "explanation": "Gause's principle and MacArthur's warblers resource partitioning.\n\nMarking Scheme:\n• Gause's Principle: Two closely related species competing for identical limiting resources cannot coexist indefinitely; the competitively superior species will eliminate the inferior one. [1.5 Marks]\n• MacArthur's Resource Partitioning: MacArthur studied 5 species of warblers living on the same spruce tree. Instead of competing to extinction, they coexisted by partitioning resources: foraging at different heights on the tree, searching for different insects, and having distinct daily feeding schedules, avoiding direct competition. [1.5 Marks]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Define Mutualism. Explain the obligate mutualistic relationship between the Fig tree and the Fig Wasp, mentioning the phenomenon of 'cheating'. [3 Marks]",
        "answer": "Mutualism, fig-wasp co-evolution, and cheaters.",
        "explanation": "Mutualism, fig-wasp co-evolution, and cheaters.\n\nMarking Scheme:\n• Mutualism Definition: An ecological interaction between two species where both partners derive mutual physiological and survival benefits (+, +). [1 Mark]\n• Fig and Wasp Relationship: The female wasp uses the hollow fleshy inflorescence of the fig fruit as an oviposition site (egg laying) and feeds her larvae on some developing fig seeds. In return, the wasp pollinates the fig inflorescence while searching for suitable egg-laying sites. [1 Mark]\n• Cheaters: Organisms that attempt to consume nectar or lay eggs without performing pollination. To prevent cheating, the fig tree and wasp have co-evolved strict morphological match so that only the specific wasp pollinator can access the fig syconium. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain Commensalism with two distinct ecological examples from the animal and plant kingdoms. [3 Marks]",
        "answer": "Commensalism definition and examples: Epiphytic orchid, barnacles on whale.",
        "explanation": "Commensalism definition and examples: Epiphytic orchid, barnacles on whale.\n\nMarking Scheme:\n• Definition: An interspecific interaction where one species benefits while the other species is neither harmed nor benefited (+, 0). [1 Mark]\n• Plant Example: An epiphytic orchid growing on the branch of a mango tree gets structural support, rain moisture, and light exposure without extracting sap or causing injury to the mango host. [1 Mark]\n• Animal Example: Barnacles growing on the back of a baleen whale benefit from being carried to nutrient-rich plankton feeding grounds, while the whale is unaffected. (Or Cattle Egret foraging near grazing cattle). [1 Mark]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Altitude Sickness? State its clinical symptoms and explain how the human body acclimatizes to high altitude within a few days. [3 Marks]",
        "answer": "Altitude sickness symptoms and physiological acclimatization.",
        "explanation": "Altitude sickness symptoms and physiological acclimatization.\n\nMarking Scheme:\n• Cause & Symptoms: Experienced at high altitudes (>3500 m) due to low atmospheric pressure and resultant hypoxia (low oxygen). Symptoms: Nausea, fatigue, headache, dizziness, and heart palpitations. [1.5 Marks]\n• Acclimatization Mechanism: The body compensates by:\n1. Stimulating kidney to release erythropoietin, increasing RBC production.\n2. Decreasing the binding affinity of hemoglobin to oxygen so that oxygen is unloaded more readily to tissues.\n3. Increasing the breathing rate through hyperventilation. [1.5 Marks]"
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Mention any three behavioral, morphological, or chemical adaptations developed by prey species to protect themselves from predators. [3 Marks]",
        "answer": "Prey adaptations against predators.",
        "explanation": "Prey adaptations against predators.\n\nMarking Scheme (1 Mark each for any three):\n1. Cryptic coloration (Camouflage): Stick insects, praying mantis, and tree frogs blend with surrounding foliage or bark to avoid visual detection.\n2. Chemical defense: Monarch butterfly accumulates toxic cardiac glycosides during caterpillar stage, making it unpalatable to birds.\n3. Physical defenses: Pufferfish puffs up spiny body; porcupines have sharp quills; Acacia and cacti develop sharp thorns to deter herbivores.\n4. Warning coloration (Aposematism): Poison dart frogs exhibit bright warning colors signaling lethal skin alkaloids."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the equation: Nt+1 = Nt + [(B + I) - (D + E)] in population growth dynamics, defining each parameter. [3 Marks]",
        "answer": "Population growth equation parameters.",
        "explanation": "Population growth equation parameters.\n\nMarking Scheme:\n• Parameters Defined [2 Marks, 0.5 Mark each]:\n- Nt = Population density at time t\n- Nt+1 = Population density at time t+1\n- B = Natality (number of births)\n- I = Immigration (individuals entering population)\n- D = Mortality (number of deaths)\n- E = Emigration (individuals leaving population).\n• Significance: Population density increases if (B + I) > (D + E), and decreases if (B + I) < (D + E). Under normal conditions, births and deaths are the most decisive factors. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Brood Parasitism? How has it evolved between the Asian Koel and the Crow? [3 Marks]",
        "answer": "Brood parasitism mechanism in cuckoo and crow.",
        "explanation": "Brood parasitism mechanism in cuckoo and crow.\n\nMarking Scheme:\n• Definition: A specialized form of parasitism in which the parasite bird lays its eggs in the nest of another host bird species, leaving the host to incubate the eggs and rear the hatchlings. [1 Mark]\n• Evolution in Koel and Crow: The Asian Koel (cuckoo) does not build a nest. During the crow's breeding season, the female koel lays eggs in the crow's nest while the male koel distracts the crows. [1 Mark]\n• Co-adaptation: Through evolutionary time, koel eggs have evolved identical color, pattern, and size to match crow eggs, preventing the host crow from detecting and ejecting the parasitic eggs. [1 Mark] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Distinguish between Exponential Growth and Logistic Growth of populations with the help of growth curves and mathematical equations.\n(b) Why is logistic growth considered ecologically realistic while exponential growth is considered hypothetical? [5 Marks]",
        "answer": "Exponential vs logistic growth models, equations, and ecological reality.",
        "explanation": "Exponential vs logistic growth models, equations, and ecological reality.\n\nMarking Scheme:\n(a) Growth Curves & Equations [3.5 Marks]:\n• Exponential Growth (J-shaped curve) [1.75 Marks]:\n- Occurs when resources (food and space) in the habitat are unlimited.\n- Equation: dN/dt = rN or Nt = N0 e^(rt) (where r = intrinsic rate of natural increase).\n- Curve rises continuously without plateau, eventually resulting in population crash.\n• Logistic Growth (S-shaped / Sigmoid curve) [1.75 Marks]:\n- Occurs when resources are limited and finite.\n- Equation: dN/dt = rN[(K - N)/K] (where K = Carrying Capacity).\n- Exhibits four phases: Lag phase -> Acceleration (Log) phase -> Deceleration phase -> Asymptote (when N = K).\n(b) Ecological Reality [1.5 Marks]:\n• In nature, no habitat possesses infinite resources. As population density rises, competition for food, shelter, and mates intensifies, and predators/diseases increase. Carrying capacity (K) represents the maximum sustainable population size, making the sigmoid logistic curve the only realistic model. [1.5 Marks]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the various physiological, morphological, and behavioral responses exhibited by organisms to cope with stressful abiotic environmental conditions.\n(b) Distinguish between Hibernation and Aestivation with examples. [5 Marks]",
        "answer": "Responses to abiotic stress: Regulate, conform, migrate, suspend; hibernation vs aestivation.",
        "explanation": "Responses to abiotic stress: Regulate, conform, migrate, suspend; hibernation vs aestivation.\n\nMarking Scheme:\n(a) Responses to Abiotic Stress [3.5 Marks]:\n1. Regulate: Maintain physiological homeostasis via thermoregulation and osmoregulation (sweating, shivering in mammals and birds). [1 Mark]\n2. Conform: Internal state changes with ambient environment; 99% animals and plants conform to avoid metabolic costs. [0.75 Mark]\n3. Migrate: Move away temporarily from stressful habitat to hospitable area and return when stressful period ends (Siberian birds visiting Bharatpur). [0.75 Mark]\n4. Suspend: Escape in time: Spores in bacteria/fungi, seed dormancy, hibernation (winter sleep in bears), aestivation (summer sleep in snails/fishes), and diapause (suspended development in lake zooplankton). [1 Mark]\n(b) Hibernation vs Aestivation [1.5 Marks]:\n• Hibernation (Winter sleep): Organisms escape cold winter conditions by lowering metabolic rate and heart rate. Example: Polar bears. [0.75 Mark]\n• Aestivation (Summer sleep): Organisms escape heat and desiccation during hot dry summer months. Example: Garden snails and lungfish. [0.75 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain Predation as an ecological interaction. Discuss three important roles played by predators in natural ecosystems.\n(b) What happens when an exotic species is introduced into a new geographical area lacking natural predators? Illustrate with a historical example. [5 Marks]",
        "answer": "Predation roles in ecosystems and exotic invasive species consequences.",
        "explanation": "Predation roles in ecosystems and exotic invasive species consequences.\n\nMarking Scheme:\n(a) Predation Definition & Three Roles [3.5 Marks]:\n• Definition: Interspecific interaction where one organism (predator) captures, kills, and consumes another organism\n(prey) (+, -). [0.5 Mark]\n• Role 1 (Energy Conduits): Transfer solar energy fixed by autotrophs through herbivores to higher carnivores. [1 Mark]\n• Role 2 (Prey Population Regulation): Keep prey populations under check. In absence of predators, prey species reach explosive densities causing habitat destruction. [1 Mark]\n• Role 3 (Maintaining Species Diversity): Reduce competition among competing prey species, preventing competitive exclusion (e.g., Pisaster starfish maintaining >10 invertebrate species in intertidal zone). [1 Mark]\n(b) Exotic Species Introduction [1.5 Marks]:\n• Consequence: In absence of co-evolved natural predators, the introduced exotic species multiplies unchecked and turns invasive. [0.5 Mark]\n• Example: Prickly pear cactus introduced into Australia in 1920s invaded over millions of hectares of rangeland, brought under control only after introducing its natural predator moth (Cactoblastis) from South America. [1 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Parasitism? Differentiate between Ectoparasites and Endoparasites with two examples of each.\n(b) List four specialized morphological and physiological adaptations evolved by parasites to live successfully inside host bodies. [5 Marks]",
        "answer": "Parasitism classification and parasitic adaptations.",
        "explanation": "Parasitism classification and parasitic adaptations.\n\nMarking Scheme:\n(a) Definition & Ecto vs Endoparasites [2.5 Marks]:\n• Definition: An interaction where one organism (parasite) lives on or in another organism (host), deriving nourishment and causing harm (+, -). [0.5 Mark]\n• Ectoparasites: Feed on the external surface of the host organism. Examples: Lice on humans, ticks on dogs, marine copepods on fishes, Cuscuta on hedge plants. [1 Mark]\n• Endoparasites: Live inside host tissues, organs, or blood cells. Examples: Liver fluke (Fasciola), tapeworm (Taenia), malarial parasite (Plasmodium). [1 Mark]\n(b) Four Parasitic Adaptations [2.5 Marks, ~0.6 Mark each]:\n• 1. Loss of unnecessary sense organs (e.g., eyes in gut parasites).\n• 2. Presence of adhesive suckers, hooks, or haustoria to anchor onto host tissue.\n• 3. Loss of digestive system (directly absorbing pre-digested nutrients through body surface).\n• 4. High reproductive capacity (producing millions of eggs/cysts) and complex life cycles involving intermediate vectors."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Define Interspecific Competition. Explain Interference Competition with an example.\n(b) How does Resource Partitioning promote the coexistence of competing species rather than competitive exclusion? [5 Marks]",
        "answer": "Interspecific competition, interference competition, and resource partitioning.",
        "explanation": "Interspecific competition, interference competition, and resource partitioning.\n\nMarking Scheme:\n(a) Competition & Interference Competition [2.5 Marks]:\n• Interspecific Competition: An ecological interaction where fitness of one species is significantly reduced in the presence of another species competing for shared resources (-, -). [1 Mark]\n• Interference Competition: Competition occurring even when resources (food, space) are abundant, because the feeding efficiency or browsing activity of one species interferes with and inhibits the other. Example: Abingdon tortoises on Galapagos islands outcompeted to extinction by goats due to the goats' greater browsing efficiency. [1.5 Marks]\n(b) Resource Partitioning [2.5 Marks]:\n• Mechanism: If two species compete for the same resource, they avoid competitive exclusion by partitioning the resource into distinct niches. [1 Mark]\n• Coexistence Strategies: Species may choose different times of day for feeding (diurnal vs nocturnal), forage in different strata of vegetation (canopy vs trunk vs ground), or evolve divergent beak/mouthpart morphology to exploit different food sizes (e.g., MacArthur's five species of warblers coexisting on a single spruce tree). [1.5 Marks]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Construct a comprehensive tabular summary of all six major interspecific population interactions, indicating the nature of interaction (+, -, 0), defining characteristics, and one biological example for each. [5 Marks]",
        "answer": "Tabular matrix of population interactions: Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism.",
        "explanation": "Tabular matrix of population interactions: Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism.\n\nMarking Scheme:\nTabular Matrix (0.8 Mark per interaction):\n1. Mutualism (+, +): Both species benefit. Example: Lichens (alga + fungus), Mycorrhizae (Glomus + roots), Fig and Fig wasp.\n2. Competition (-, -): Both species are adversely affected. Example: Abingdon tortoise and goats, flamingos and resident fishes competing for zooplankton.\n3. Predation (+, -): Predator benefits, prey is killed/eaten. Example: Tiger and deer, Pisaster starfish and intertidal invertebrates.\n4. Parasitism (+, -): Parasite benefits, host is harmed. Example: Cuscuta on hedge plant, ticks on dogs, Plasmodium in humans.\n5. Commensalism (+, 0): One benefits, other is unaffected. Example: Orchid epiphyte on mango, barnacles on whale, clownfish and sea anemone.\n6. Amensalism (-, 0): One is inhibited/harmed, other is unaffected. Example: Penicillium mould inhibiting bacteria, large walnut tree inhibiting undergrowth."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the major abiotic factors shaping ecosystems: (i) Temperature, (ii) Water, (iii) Light, (iv) Soil.\n(b) Differentiate between Eurythermal and Stenothermal organisms. [5 Marks]",
        "answer": "Abiotic factors and thermal tolerance ranges.",
        "explanation": "Abiotic factors and thermal tolerance ranges.\n\nMarking Scheme:\n(a) Abiotic Factors [3.5 Marks]:\n• (i) Temperature: Most ecologically relevant factor; affects enzyme kinetics, basal metabolism, and geographic distribution. [1 Mark]\n• (ii) Water: Next to temperature; affects primary productivity. Salinity tolerance dictates marine vs freshwater distribution. [1 Mark]\n• (iii) Light: Photosynthetic energy source for autotrophs; photoperiod governs flowering in plants and breeding/migration in animals. [0.75 Mark]\n• (iv) Soil: Texture, grain size, pH, mineral composition, and topography determine water-holding capacity and type of vegetation and benthic fauna. [0.75 Mark]\n(b) Eurythermal vs Stenothermal [1.5 Marks]:\n• Eurythermal: Organisms capable of tolerating and thriving in a wide range of temperatures (e.g., most mammals, birds). [0.75 Mark]\n• Stenothermal: Organisms restricted to a narrow range of temperatures (e.g., polar bears, corals, lizards). [0.75 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Populations have specific demographic attributes that individuals do not possess. An individual is born and dies, but a population has birth and death rates. An individual is either male or female, but a population has a sex ratio.'\n(a) Differentiate between Natality and Mortality.\n(b) What is meant by the 'Sex Ratio' of a population?\n(c) In a pond population of 500 water beetles, 50 died and 100 were born in a month. Calculate the per capita birth rate and death rate. [5 Marks]",
        "answer": "Population attributes and mathematical calculation of natality/mortality rates.",
        "explanation": "Population attributes and mathematical calculation of natality/mortality rates.\n\nMarking Scheme:\n(a) Natality vs Mortality [1.5 Marks]:\n• Natality: Number of live births per unit population per unit time in a specified habitat. [0.75 Mark]\n• Mortality: Number of deaths per unit population per unit time. [0.75 Mark]\n(b) Sex Ratio [1 Mark]:\n• The ratio of males to females in a population (usually expressed as the number of females per 1,000 males). [1 Mark]\n(c) Rate Calculations [2.5 Marks]:\n• Initial population (N) = 500 beetles. Time = 1 month. [0.5 Mark]\n• Birth rate = Births / Initial Population = 100 / 500 = 0.2 births per beetle per month. [1 Mark]\n• Death rate = Deaths / Initial Population = 50 / 500 = 0.1 deaths per beetle per month. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain the mutualistic interaction between the Mediterranean orchid Ophrys and the solitary bee Colpa aurea. Why is it termed 'Sexual Deceit'?\n(b) How does co-evolution maintain this pollination mechanism? [5 Marks]",
        "answer": "Ophrys-Colpa mutualism, sexual deceit, and co-evolutionary dynamics.",
        "explanation": "Ophrys-Colpa mutualism, sexual deceit, and co-evolutionary dynamics.\n\nMarking Scheme:\n(a) Ophrys & Colpa Mutualism ('Sexual Deceit') [3.5 Marks]:\n• Floral Mimicry: The Mediterranean orchid Ophrys has evolved a specialized petal that bears an uncanny resemblance to the female solitary bee in size, coloration, velvet texture, and scent markings. [1.5 Marks]\n• Pseudocopulation: The male bee, mistaking the flower petal for a receptive female bee, attempts to mate with it ('pseudocopulates'). [1 Mark]\n• Pollination: During this mock copulation, pollinia (pollen sacs) stick firmly to the male bee's head. When the bee is deceived by another orchid flower, the pollinia are deposited on the stigma, achieving cross-pollination without offering any nectar reward. [1 Mark]\n(b) Co-evolutionary Dynamics [1.5 Marks]:\n• If the female bee evolves even subtle changes in her color pattern or pheromones to deter unproductive male attempts, the orchid's pollination success drops to zero unless the orchid co-evolves reciprocal floral mutations. Thus, natural selection tightly coordinates their evolutionary changes. [1.5 Marks]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A biologist studies a laboratory population of Paramecium growing in a culture flask containing a fixed daily allotment of bacterial food.\n(a) Predict the shape of the growth curve and identify the four developmental phases.\n(b) Write the mathematical equation describing this population growth.\n(c) What ecological factor determines the carrying capacity (K) of this culture? [5 Marks]",
        "answer": "Logistic growth of Paramecium culture, sigmoid phases, equation, and carrying capacity.",
        "explanation": "Logistic growth of Paramecium culture, sigmoid phases, equation, and carrying capacity.\n\nMarking Scheme:\n(a) Growth Curve Shape & Phases [2.5 Marks]:\n• Shape: S-shaped or Sigmoid Logistic growth curve. [0.5 Mark]\n• Four Phases [2 Marks, 0.5 Mark each]:\n1. Lag phase: Initial slow acclimation to culture media.\n2. Log / Exponential phase: Rapid cell division when food is relatively abundant.\n3. Deceleration phase: Growth slows as food depletes and metabolic wastes accumulate.\n4. Asymptote (Stationary phase): Population density stabilizes at carrying capacity.\n(b) Mathematical Equation [1.5 Marks]:\n• dN/dt = rN[(K - N)/K]\n• Where N = Paramecium population density, r = intrinsic rate of natural increase, K = carrying capacity. [1.5 Marks]\n(c) Determinants of Carrying Capacity (K) [1 Mark]:\n• The fixed daily quantity of bacterial food supplied, the volume of the culture vessel, and the buildup of toxic metabolic waste products. [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 12,
      "unit_num": 10,
      "title": "Ecosystem",
      "unit_title": "Ecology and Environment",
      "weightage_unit": "10 Marks (Unit X)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The annual net primary productivity of the entire biosphere is approximately 170 billion tons (dry weight). Although oceans occupy about 70 percent of Earth's surface, their annual productivity is only about:",
        "options": [
          "(a) 15 billion tons",
          "(b) 55 billion tons",
          "(c) 115 billion tons",
          "(d) 170 billion tons"
        ],
        "answer": "(b) 55 billion tons",
        "explanation": "The annual net primary productivity of the whole biosphere is approximately 170 billion tons of organic matter. Despite occupying 70% of the Earth's surface, the productivity of the oceans is only about 55 billion tons, largely due to light and nutrient limitations in deep pelagic zones. Land ecosystems produce the remaining 115 billion tons."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Net Primary Productivity (NPP) is mathematically related to Gross Primary Productivity (GPP) by the formula:",
        "options": [
          "(a) NPP = GPP - R (where R is respiratory loss)",
          "(b) NPP = GPP + R",
          "(c) GPP = NPP - R",
          "(d) NPP = GPP / R"
        ],
        "answer": "(a) NPP = GPP - R (where R is respiratory loss)",
        "explanation": "A considerable amount of GPP is utilized by plants in cellular respiration (R). Gross primary productivity minus respiration losses (R) is the net primary productivity: NPP = GPP - R. NPP is the available biomass for the consumption of heterotrophs."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following environmental conditions favors the fastest rate of decomposition of detritus?",
        "options": [
          "(a) Warm and moist environment with detritus rich in nitrogen and water-soluble sugars",
          "(b) Low temperature and anaerobiosis with detritus rich in lignin and chitin",
          "(c) Submerged anaerobic mud at 4°C",
          "(d) Extremely dry desert sand with high salinity"
        ],
        "answer": "(a) Warm and moist environment with detritus rich in nitrogen and water-soluble sugars",
        "explanation": "Decomposition rate is slower if detritus is rich in lignin and chitin, and quicker if detritus is rich in nitrogen and water-soluble substances like sugars. Warm and moist environment favors decomposition, whereas low temperature and anaerobiosis inhibit it."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In the process of decomposition, the breakdown of detritus into smaller particles by the physical action of earthworms and other detritivores is called:",
        "options": [
          "(a) Leaching",
          "(b) Catabolism",
          "(c) Fragmentation",
          "(d) Mineralisation"
        ],
        "answer": "(c) Fragmentation",
        "explanation": "Detritivores (e.g., earthworm) break down detritus into smaller particles. This physical breakdown process is called fragmentation."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "During decomposition, the accumulation of a dark-coloured, amorphous, colloidal substance that is highly resistant to microbial action and acts as a nutrient reservoir is known as:",
        "options": [
          "(a) Catabolism",
          "(b) Humification",
          "(c) Leaching",
          "(d) Mineralisation"
        ],
        "answer": "(b) Humification",
        "explanation": "Humification leads to accumulation of a dark-coloured amorphous substance called humus that is highly resistant to microbial action and undergoes decomposition at an extremely slow rate. Being colloidal in nature it serves as a reservoir of nutrients."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What proportion of incident solar radiation constitutes Photosynthetically Active Radiation (PAR)?",
        "options": [
          "(a) Less than 50%",
          "(b) 100%",
          "(c) 75%",
          "(d) 10% to 20%"
        ],
        "answer": "(a) Less than 50%",
        "explanation": "Of the total incident solar radiation, less than 50 percent of it is photosynthetically active radiation (PAR) spanning wavelengths between 400 nm to 700 nm. Plants capture only 2–10 percent of the PAR."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "According to Lindeman's 10 percent law of energy transfer, what percentage of energy is transferred from one trophic level to the next higher trophic level?",
        "options": [
          "(a) 1%",
          "(b) 10%",
          "(c) 50%",
          "(d) 90%"
        ],
        "answer": "(b) 10%",
        "explanation": "Only 10 percent of the energy is transferred to each trophic level from the lower trophic level; the remaining 90% is dissipated as heat during respiration, metabolism, and excretion."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In an aquatic ecosystem (such as an ocean or deep lake), the major conduit for energy flow is the:",
        "options": [
          "(a) Grazing Food Chain (GFC)",
          "(b) Detritus Food Chain (DFC)",
          "(c) Parasitic food chain",
          "(d) Saprophytic food chain"
        ],
        "answer": "(a) Grazing Food Chain (GFC)",
        "explanation": "In an aquatic ecosystem, GFC is the major conduit for energy flow (Phytoplankton -> Zooplankton -> Small fish -> Big fish). In a terrestrial ecosystem, a much larger fraction of energy flows through the Detritus Food Chain (DFC) than through the GFC."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following ecological pyramids is ALWAYS upright and can NEVER be inverted in any natural ecosystem?",
        "options": [
          "(a) Pyramid of Numbers",
          "(b) Pyramid of Biomass",
          "(c) Pyramid of Energy",
          "(d) Both Pyramid of Numbers and Biomass"
        ],
        "answer": "(c) Pyramid of Energy",
        "explanation": "Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step in accordance with the Second Law of Thermodynamics."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The pyramid of biomass in sea is generally inverted because:",
        "options": [
          "(a) Fishes reproduce much faster than phytoplankton",
          "(b) The standing biomass of microscopic phytoplankton is far less than that of the fishes feeding on them at any given time",
          "(c) Phytoplankton have very long lifespans",
          "(d) Primary consumers do not eat phytoplankton"
        ],
        "answer": "(b) The standing biomass of microscopic phytoplankton is far less than that of the fishes feeding on them at any given time",
        "explanation": "The pyramid of biomass in sea is generally inverted because the standing crop biomass of primary producers (phytoplankton) at any given instant is very small compared to the standing biomass of long-lived zooplankton and fishes, even though phytoplankton have extremely high turnover rates."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a single large banyan tree ecosystem supporting thousands of herbivorous birds and bird parasites, the pyramid of numbers is:",
        "options": [
          "(a) Upright",
          "(b) Inverted",
          "(c) Spindle-shaped",
          "(d) Bell-shaped"
        ],
        "answer": "(b) Inverted",
        "explanation": "One single large producer tree (T1 = 1) supports a large number of fruit-eating birds (T2 = hundreds), which in turn host thousands of ectoparasites like lice and ticks (T3 = thousands). Hence, the pyramid of numbers is inverted (or spindle-shaped if top hyperparasites are considered)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Secondary productivity in an ecosystem refers to the rate of formation of new organic matter by:",
        "options": [
          "(a) Producers (autotrophs)",
          "(b) Consumers (heterotrophs)",
          "(c) Decomposers only",
          "(d) Abiotic factors"
        ],
        "answer": "(b) Consumers (heterotrophs)",
        "explanation": "Secondary productivity is defined as the rate of assimilation and formation of new organic matter by consumers (herbivores and carnivores) over a given period."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is a major limitation of ecological pyramids?",
        "options": [
          "(a) It does not accommodate food webs and assumes only simple linear food chains",
          "(b) It does not take into account the same species belonging to two or more trophic levels",
          "(c) Saprophytes and decomposers are completely excluded from ecological pyramids",
          "(d) All of the above are major limitations"
        ],
        "answer": "(d) All of the above are major limitations",
        "explanation": "Ecological pyramids have three major limitations: (1) They assume simple food chains, almost never taking food webs into account; (2) They do not accommodate omnivorous species that occupy multiple trophic levels (like sparrows or humans); (3) Saprophytes/decomposers are given no place in pyramids despite playing a vital ecological role."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "If 1,000,000 Joules of sunlight is incident on green plants in a terrestrial ecosystem, how much energy is converted into plant biomass (NPP), and how much will reach the tertiary consumer?",
        "options": [
          "(a) 10,000 J at producer level and 10 J at tertiary consumer",
          "(b) 100,000 J at producer and 1,000 J at tertiary consumer",
          "(c) 1,000 J at producer and 1 J at tertiary consumer",
          "(d) 10,000 J at producer and 100 J at tertiary consumer"
        ],
        "answer": "(a) 10,000 J at producer level and 10 J at tertiary consumer",
        "explanation": "Plants capture only 1% of total incident solar energy: 1% of 1,000,000 J = 10,000 J at producer level (T1). Applying Lindeman's 10% rule:\n- Herbivore (T2) gets 10% of 10,000 J = 1,000 J\n- Primary carnivore (T3) gets 10% of 1,000 J = 100 J\n- Tertiary consumer (T4) gets 10% of 100 J = 10 J."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The downward movement of water-soluble inorganic nutrients into the soil horizon and their precipitation as unavailable salts is termed:",
        "options": [
          "(a) Catabolism",
          "(b) Leaching",
          "(c) Fragmentation",
          "(d) Humification"
        ],
        "answer": "(b) Leaching",
        "explanation": "By the process of leaching, water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Bacterial and fungal enzymes degrade detritus into simpler inorganic substances during decomposition through the process known as:",
        "options": [
          "(a) Catabolism",
          "(b) Leaching",
          "(c) Humification",
          "(d) Fragmentation"
        ],
        "answer": "(a) Catabolism",
        "explanation": "Bacterial and fungal enzymes degrade detritus into simpler inorganic substances. This biochemical enzymatic process is called catabolism."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a food chain consisting of Grass -> Deer -> Tiger, the tiger represents which trophic level?",
        "options": [
          "(a) First trophic level (T1)",
          "(b) Second trophic level (T2)",
          "(c) Third trophic level (T3)",
          "(d) Fourth trophic level (T4)"
        ],
        "answer": "(c) Third trophic level (T3)",
        "explanation": "Grass is producer (T1), Deer is primary consumer / herbivore (T2), and Tiger is secondary consumer / top carnivore (T3)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Primary productivity in an ecosystem depends on all of the following factors EXCEPT:",
        "options": [
          "(a) Plant species inhabiting a particular area",
          "(b) Environmental factors like solar radiation and temperature",
          "(c) Availability of soil nutrients and water",
          "(d) Number of top carnivores present in the region"
        ],
        "answer": "(d) Number of top carnivores present in the region",
        "explanation": "Primary productivity depends on the plant species inhabiting a particular area, photosynthetic capacity of plants, nutrient availability, solar radiation, temperature, and moisture. It does not depend directly on the abundance of top carnivores."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The rate of biomass production in an ecosystem is called productivity. It is expressed in units of:",
        "options": [
          "(a) g m^-2 yr^-1 or kcal m^-2 yr^-1",
          "(b) g m^-1 yr^-1",
          "(c) kcal m^-3 yr^-1",
          "(d) kg m^-2"
        ],
        "answer": "(a) g m^-2 yr^-1 or kcal m^-2 yr^-1",
        "explanation": "Productivity is expressed in terms of weight (g m^-2 yr^-1) or energy (kcal m^-2 yr^-1) to compare the productivity of different ecosystems."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following organisms can occupy more than one trophic level in an ecosystem depending on its diet?",
        "options": [
          "(a) Sparrow",
          "(b) Phytoplankton",
          "(c) Zooplankton",
          "(d) Lion"
        ],
        "answer": "(a) Sparrow",
        "explanation": "A sparrow is a primary consumer (herbivore) when it feeds on seeds, fruits, and grains, and a secondary consumer (carnivore) when it feeds on insects and worms."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "A Detritus Food Chain (DFC) begins with:",
        "options": [
          "(a) Living green plants",
          "(b) Dead organic matter (detritus)",
          "(c) Herbivorous zooplankton",
          "(d) Solar radiation directly"
        ],
        "answer": "(b) Dead organic matter (detritus)",
        "explanation": "The detritus food chain (DFC) begins with dead organic matter (detritus). It is made up of decomposers which are heterotrophic organisms, mainly fungi and bacteria."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The standing crop of an ecosystem is measured as the:",
        "options": [
          "(a) Mass of living organisms (biomass) or the number in a unit area at a particular time",
          "(b) Total amount of solar radiation absorbed",
          "(c) Total volume of water in soil",
          "(d) Annual rate of decomposition"
        ],
        "answer": "(a) Mass of living organisms (biomass) or the number in a unit area at a particular time",
        "explanation": "Each trophic level has a certain mass of living material at a particular time called the standing crop. The standing crop is measured as the mass of living organisms (biomass) or the number in a unit area."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Measurement of biomass in terms of dry weight is more accurate than fresh weight because:",
        "options": [
          "(a) Fresh weight is difficult to measure in the field",
          "(b) Fresh weight fluctuates dramatically due to varying water and moisture content",
          "(c) Dry weight includes atmospheric gases",
          "(d) Dry weight is always double the fresh weight"
        ],
        "answer": "(b) Fresh weight fluctuates dramatically due to varying water and moisture content",
        "explanation": "Measurement of biomass in terms of dry weight is more accurate because fresh weight varies substantially depending on seasonal and diurnal moisture fluctuations in the tissues."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following ecosystems exhibits the highest annual net primary productivity per unit area?",
        "options": [
          "(a) Tropical rainforest",
          "(b) Temperate deciduous forest",
          "(c) Desert",
          "(d) Deep ocean abyss"
        ],
        "answer": "(a) Tropical rainforest",
        "explanation": "Tropical rainforests receive year-round high solar insolation, abundant rainfall, and optimal temperatures, making them the most productive terrestrial ecosystems per unit area."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "In a forest ecosystem, what type of ecological pyramid of numbers is observed?",
        "options": [
          "(a) Upright",
          "(b) Inverted",
          "(c) Spindle-shaped",
          "(d) Circular"
        ],
        "answer": "(c) Spindle-shaped",
        "explanation": "In a forest, a moderate number of large trees support a very large number of herbivorous birds/monkeys, which in turn support a smaller number of top carnivores (hawks, tigers). Hence, the pyramid of numbers is spindle-shaped. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The pyramid of energy is always upright in all natural ecosystems.\nReason (R): Energy flow between trophic levels is unidirectional, and according to the Second Law of Thermodynamics, energy is lost as metabolic heat at every transfer.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) explains why energy pyramids can never be inverted. Only ~10% of energy reaches the next level; the rest is lost as heat."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): The pyramid of biomass in an open sea ecosystem is typically inverted.\nReason (R): Microscopic phytoplankton have an extremely short lifespan and their instantaneous standing biomass is less than that of long-lived zooplankton and fishes.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) accurately explains why aquatic biomass pyramids are inverted."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Humus undergoes decomposition at an extremely slow rate.\nReason (R): Humus is a dark-colored, amorphous, colloidal substance that is highly resistant to microbial enzymatic degradation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) defines the chemical and physical characteristics that make humus resistant to degradation."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): In a terrestrial ecosystem, a much larger fraction of energy flows through the Detritus Food Chain (DFC) than through the Grazing Food Chain (GFC).\nReason (R): Most of the primary plant biomass in forests and grasslands dies without being directly consumed by herbivores, entering the decomposer subsystem as leaf litter and wood.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true and (R) explains why DFC dominates energy flow on land, whereas GFC dominates in open aquatic ecosystems."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Food webs provide greater stability to an ecological community than isolated linear food chains.\nReason (R): In a food web, alternative prey and foraging pathways prevent population collapses when one prey species declines.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the ecological mechanism of resilience in food webs. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP). Write the mathematical relationship between them. [3 Marks]",
        "answer": "GPP vs NPP and equation NPP = GPP - R.",
        "explanation": "GPP vs NPP and equation NPP = GPP - R.\n\nMarking Scheme:\n• Gross Primary Productivity (GPP): The total rate of production of organic matter or biomass by green plants (producers) during photosynthesis per unit area over a given time interval. [1 Mark]\n• Net Primary Productivity (NPP): The remaining biomass stored in plant tissues after accounting for metabolic respiratory losses (R) by the autotrophs; this represents the actual biomass available to heterotrophic consumers (herbivores and decomposers). [1 Mark]\n• Mathematical Relationship: NPP = GPP - R (where R = energy consumed in respiration). [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Describe the five sequential steps involved in the process of decomposition of detritus in an ecosystem. [3 Marks]",
        "answer": "Five steps of decomposition.",
        "explanation": "Five steps of decomposition.\n\nMarking Scheme (0.6 Mark each):\n1. Fragmentation: Physical breakdown of large detritus into smaller particles by detritivores (e.g., earthworms).\n2. Leaching: Water-soluble inorganic nutrients percolate downward into the soil horizon and precipitate as unavailable salts.\n3. Catabolism: Extracellular bacterial and fungal enzymes biochemically degrade detritus into simpler inorganic substances.\n4. Humification: Accumulation of dark, amorphous, colloidal humus resistant to microbial action.\n5. Mineralisation: Gradual degradation of humus by microbes, releasing bound inorganic mineral nutrients back to the soil."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain how temperature, moisture, and chemical composition of detritus regulate the rate of decomposition. [3 Marks]",
        "answer": "Environmental and chemical factors governing decomposition.",
        "explanation": "Environmental and chemical factors governing decomposition.\n\nMarking Scheme (1 Mark each):\n1. Chemical Composition of Detritus: Decomposition is slow if detritus is rich in complex structural polymers like lignin, suberin, and chitin; it is rapid if detritus is rich in nitrogen and water-soluble sugars. [1 Mark]\n2. Temperature: Warm temperatures accelerate microbial enzyme activity, promoting rapid decomposition; cold temperatures inactivate microbes and arrest decay. [1 Mark]\n3. Moisture & Oxygen: Moist, well-aerated soil accelerates aerobic decomposition; desiccation or anaerobic waterlogged conditions strongly inhibit decomposition. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between Grazing Food Chain (GFC) and Detritus Food Chain (DFC). Mention which chain carries the major fraction of energy in: (i) An aquatic ecosystem, (ii) A terrestrial ecosystem. [3 Marks]",
        "answer": "GFC vs DFC comparison and ecosystem energy flow.",
        "explanation": "GFC vs DFC comparison and ecosystem energy flow.\n\nMarking Scheme:\n• GFC vs DFC [1.5 Marks]:\n- GFC begins with living autotrophic green plants (Producers -> Herbivore -> Carnivore). Driven directly by solar radiation.\n- DFC begins with dead organic matter/detritus (Detritus -> Decomposers/saprotrophs -> Detritivores -> Predators). Driven by energy stored in decaying matter. [1.5 Marks]\n• Energy conduits in ecosystems [1.5 Marks]:\n- (i) Aquatic ecosystem: GFC is the major conduit of energy flow. [0.75 Mark]\n- (ii) Terrestrial ecosystem: DFC carries a much larger fraction of energy flow. [0.75 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Why is the pyramid of energy always upright and can never be inverted in any ecosystem? [3 Marks]",
        "answer": "Energy pyramid thermodynamic explanation and Lindeman's 10% law.",
        "explanation": "Energy pyramid thermodynamic explanation and Lindeman's 10% law.\n\nMarking Scheme:\n• Second Law of Thermodynamics: Whenever energy is converted from one form to another, entropy increases and a fraction of usable energy is inevitably dissipated as non-recoverable metabolic heat into the environment. [1 Mark]\n• Lindeman's 10% Rule: Only roughly 10% of the energy stored in the biomass of a trophic level is converted into biomass at the next trophic level; 90% is consumed in cellular respiration, motion, and body maintenance. [1 Mark]\n• Unidirectional flow: Because energy can never increase as it moves up successive trophic levels, the base (producers) always contains the highest energy content and top carnivores always contain the least, making the pyramid strictly upright. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Draw a schematic diagram of an inverted pyramid of biomass in an aquatic ecosystem. Explain why it is inverted. [3 Marks]",
        "answer": "Inverted aquatic biomass pyramid diagram and explanation.",
        "explanation": "Inverted aquatic biomass pyramid diagram and explanation.\n\nMarking Scheme:\n• Diagram [1.5 Marks]: Inverted pyramid showing a narrow base for Producers (Phytoplankton, ~4 g/m^2) and a wide top for Consumers (Fishes, ~12–20 g/m^2). [1.5 Marks]\n• Explanation [1.5 Marks]: Phytoplankton are microscopic unicellular autotrophs with very low standing biomass at any given moment. However, they reproduce extraordinarily rapidly (high turnover rate) and have short life cycles. Long-lived predatory fishes accumulate biomass over years, resulting in a standing consumer biomass that exceeds the standing producer biomass. [1.5 Marks]"
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "State any three limitations of ecological pyramids in representing natural trophic structures. [3 Marks]",
        "answer": "Three limitations of ecological pyramids.",
        "explanation": "Three limitations of ecological pyramids.\n\nMarking Scheme (1 Mark each):\n1. Exclusion of Saprophytes: Decomposers (bacteria and fungi) process the largest fraction of energy and nutrients in ecosystems but are given no place in any ecological pyramid.\n2. Inability to Accommodate Food Webs: Assumes simple, isolated linear food chains, whereas in nature trophic interactions form intricate, multidirectional food webs.\n3. Organisms with Multiple Trophic Levels: Fails to accommodate omnivorous species that operate at different trophic levels simultaneously (e.g., humans, sparrows, bears)."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is 'Standing Crop'? How is it measured in an ecosystem, and why is dry weight preferred over fresh weight? [3 Marks]",
        "answer": "Standing crop definition, measurement, and dry weight preference.",
        "explanation": "Standing crop definition, measurement, and dry weight preference.\n\nMarking Scheme:\n• Definition: The total mass of living organic matter (or total number of organisms) present at a particular trophic level in an ecosystem at a specific point in time. [1 Mark]\n• Measurement: Expressed in terms of biomass (weight per unit area) or number of individuals. [1 Mark]\n• Preference for Dry Weight: Fresh weight varies substantially due to fluctuations in water content caused by recent precipitation or transpiration, whereas dry weight reflects actual cellular organic matter. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the role of: (i) Producers, (ii) Consumers, (iii) Decomposers in maintaining ecosystem homeostasis. [3 Marks]",
        "answer": "Roles of producers, consumers, and decomposers.",
        "explanation": "Roles of producers, consumers, and decomposers.\n\nMarking Scheme (1 Mark each):\n(i) Producers (Autotrophs): Fix solar energy through photosynthesis, synthesizing organic food from carbon dioxide and water, providing the energy foundation for all heterotrophs. [1 Mark]\n(ii) Consumers (Heterotrophs): Regulate producer populations through herbivory, transfer energy to higher trophic levels, and aid in plant seed dispersal and pollination. [1 Mark]\n(iii) Decomposers (Saprotrophs): Break down dead plant and animal detritus, recycling bound nutrients (C, N, P) back to the soil/water for autotrophic uptake. [1 Mark]"
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Photosynthetically Active Radiation (PAR)? What percentage of PAR is captured by plants, and what percentage of incident solar radiation is converted into chemical energy? [3 Marks]",
        "answer": "PAR definition, capture percentage, and energy conversion.",
        "explanation": "PAR definition, capture percentage, and energy conversion.\n\nMarking Scheme:\n• PAR Definition: The spectral waveband of solar radiation between 400 nm and 700 nm that photosynthetic pigments (chlorophylls, carotenoids) can absorb and utilize for photosynthesis. [1 Mark]\n• Proportion of PAR: Constitutes less than 50% of the total incident solar radiation. [0.5 Mark]\n• Energy Captured: Plants capture only 2% to 10% of PAR. Consequently, plants convert only about 1% to 5% of the total incident solar radiation into chemical biomass. [1.5 Marks] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Trace the complete pathway of Decomposition of detritus in a terrestrial forest ecosystem.\n(b) Differentiate between Humification and Mineralisation.\n(c) Why is decomposition severely inhibited in waterlogged soils? [5 Marks]",
        "answer": "Decomposition pathway, humification vs mineralisation, and anaerobic inhibition.",
        "explanation": "Decomposition pathway, humification vs mineralisation, and anaerobic inhibition.\n\nMarking Scheme:\n(a) Decomposition Pathway [2.5 Marks]:\n• Raw Detritus (leaf litter, dead wood, animal carcasses) is fragmented into fine particles by detritivores (earthworms, termites). [0.5 Mark]\n• Soluble organic sugars and mineral ions are leached down into soil pores by rainwater. [0.5 Mark]\n• Saprophytic bacteria and fungi secrete cellulases, ligninases, and proteases, performing catabolism. [0.75 Mark]\n• Partial decomposition forms a colloidal, dark humus layer (humification). [0.5 Mark]\n• Slow, ongoing breakdown releases inorganic ions (mineralisation). [0.25 Mark]\n(b) Humification vs Mineralisation [1.5 Marks]:\n• Humification: Synthesis and accumulation of dark amorphous, colloidal humus from partially decayed organic matter. [0.75 Mark]\n• Mineralisation: The subsequent enzymatic breakdown of humus by specialized microbes, releasing trapped inorganic nutrients (CO2, NH4+, PO4^3-, K+, Ca2+) back into soil solution. [0.75 Mark]\n(c) Inhibition in Waterlogged Soils [1 Mark]:\n• Waterlogged soils fill all interstitial pores with water, displacing oxygen and creating an anaerobic environment. Decomposer bacteria and fungi are predominantly aerobic; lack of oxygen inhibits their metabolic activity, slowing decomposition. [1 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the three types of Ecological Pyramids (Numbers, Biomass, Energy) with suitable examples.\n(b) Construct a food chain and draw its corresponding pyramid of numbers for: (i) A grassland ecosystem, (ii) A single tree ecosystem. [5 Marks]",
        "answer": "Ecological pyramids description and contrasting pyramids of numbers.",
        "explanation": "Ecological pyramids description and contrasting pyramids of numbers.\n\nMarking Scheme:\n(a) Three Types of Pyramids [3 Marks]:\n• Pyramid of Numbers: Shows the total number of individual organisms at each trophic level. Can be upright (grassland), inverted (tree with parasites), or spindle-shaped (forest). [1 Mark]\n• Pyramid of Biomass: Shows the dry weight of standing living matter at each trophic level. Upright in terrestrial ecosystems; inverted in marine/lake ecosystems. [1 Mark]\n• Pyramid of Energy: Shows total energy content utilized per unit area per year at each trophic level. ALWAYS upright in all ecosystems due to heat dissipation (10% rule). [1 Mark]\n(b) Grassland vs Tree Pyramid of Numbers [2 Marks]:\n• (i) Grassland (Upright): Grass (thousands, T1) -> Grasshoppers (hundreds, T2) -> Frogs (tens, T3) -> Snakes (few, T4). Base is broadest. [1 Mark]\n• (ii) Single Tree (Inverted / Spindle): One large tree (T1 = 1) -> Herbivorous birds (T2 = dozens) -> Parasites/lice (T3 = thousands). Base is narrowest. [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain Energy Flow in an ecosystem with reference to Lindeman's 10% law and the First and Second Laws of Thermodynamics.\n(b) Why are food chains in nature generally restricted to 3 to 4 trophic levels? [5 Marks]",
        "answer": "Thermodynamics in energy flow and trophic level limits.",
        "explanation": "Thermodynamics in energy flow and trophic level limits.\n\nMarking Scheme:\n(a) Thermodynamics & Energy Flow [3.5 Marks]:\n• First Law of Thermodynamics: Energy is neither created nor destroyed; radiant solar energy captured by chlorophyll is transformed into chemical bond energy in glucose. [1 Mark]\n• Second Law of Thermodynamics: Energy transformations are never 100% efficient; each transfer results in loss of usable energy as disordered metabolic heat into the environment. [1 Mark]\n• Lindeman's 10% Law: On average, only 10% of chemical energy in biomass is transferred from one trophic level to the next. 90% is expended in respiration and maintenance. [1.5 Marks]\n(b) Limitation to 3–4 Trophic Levels [1.5 Marks]:\n• Because 90% of energy is lost at each successive transfer, the amount of available energy dwindles rapidly. By the 4th or 5th trophic level, the remaining energy is too meager to sustain a viable population of top predators. [1.5 Marks]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What is Productivity? Differentiate between Primary Productivity and Secondary Productivity.\n(b) Discuss the abiotic and biotic factors that govern primary productivity across different ecosystems of the biosphere. [5 Marks]",
        "answer": "Productivity concepts and environmental determinants.",
        "explanation": "Productivity concepts and environmental determinants.\n\nMarking Scheme:\n(a) Productivity & Primary vs Secondary [2.5 Marks]:\n• Productivity: The rate of biomass or organic matter production per unit area over a specified time interval (g/m^2/yr or kcal/m^2/yr). [0.5 Mark]\n• Primary Productivity: Rate of biomass synthesis by photosynthetic autotrophs (green plants) from inorganic solar and chemical inputs. [1 Mark]\n• Secondary Productivity: Rate of assimilation and generation of new organic biomass by heterotrophic consumers (herbivores, carnivores). [1 Mark]\n(b) Factors Governing Primary Productivity [2.5 Marks, 0.5 Mark each]:\n• 1. Solar Radiation & Photoperiod: High insolation drives photosynthesis (tropics > polar regions).\n• 2. Temperature: Controls enzyme kinetics of Calvin cycle; extremes inhibit productivity.\n• 3. Moisture / Rainfall: Water availability is limiting in deserts and savannas.\n• 4. Soil Nutrient Availability: Nitrogen and phosphorus limit productivity on land and in open oceans.\n• 5. Photosynthetic capacity of plant species and canopy structure."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the structure and functioning of a small freshwater Pond Ecosystem.\n(b) Identify the producers, consumers, and decomposers in a pond and explain how nutrient recycling maintains the ecosystem. [5 Marks]",
        "answer": "Pond ecosystem structure, trophic guilds, and self-sustaining function.",
        "explanation": "Pond ecosystem structure, trophic guilds, and self-sustaining function.\n\nMarking Scheme:\n(a) Pond Structure & Function [2.5 Marks]:\n• Abiotic components: Water with dissolved inorganic salts (phosphates, nitrates), dissolved gases (O2, CO2), soil sediment at pond bottom, and solar radiation reaching surface. [1 Mark]\n• Functional integration: Autotrophs fix solar energy; consumers harvest autotrophs; decomposers mineralize detritus; physical currents circulate nutrients, making the pond a self-sustaining miniature ecosystem. [1.5 Marks]\n(b) Trophic Guilds & Recycling [2.5 Marks]:\n• Producers: Phytoplankton (diatoms, chlorella), filamentous algae (Spirogyra), and submerged/floating aquatic macrophytes (Hydrilla, Eichhornia). [0.75 Mark]\n• Consumers: Zooplankton (Daphnia, Cyclops), benthic molluscs, and small/large fishes. [0.75 Mark]\n• Decomposers: Fungi and bacteria in bottom silt that decompose dead organic matter, releasing soluble nutrients into water for autotrophic reuse. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following scenario and answer the questions:\n'An agricultural researcher measures the primary productivity of a 100-hectare maize farm. Over a 120-day growing season, the total photosynthetic output (GPP) is 4,800 kg/ha of glucose. The total respiration (R) by the maize crop is measured at 1,800 kg/ha.'\n(a) Calculate the Net Primary Productivity (NPP) of the maize crop.\n(b) What percentage of GPP is lost to respiration?\n(c) If herbivorous pests consume 10% of the NPP, how much biomass is transferred to the pest population? [5 Marks]",
        "answer": "Mathematical calculation of NPP, respiratory loss, and secondary consumer intake.",
        "explanation": "Mathematical calculation of NPP, respiratory loss, and secondary consumer intake.\n\nMarking Scheme:\n(a) NPP Calculation [2 Marks]:\n• Formula: NPP = GPP - R [0.5 Mark]\n• Given: GPP = 4,800 kg/ha, R = 1,800 kg/ha.\n• NPP = 4,800 - 1,800 = 3,000 kg/ha. [1.5 Marks]\n(b) Percentage Respiration Loss [1.5 Marks]:\n• % Loss = (R / GPP) x 100 [0.5 Mark]\n• % Loss = (1,800 / 4,800) x 100 = 37.5%. [1 Mark]\n(c) Herbivore Biomass Transfer [1.5 Marks]:\n• Herbivore intake = 10% of NPP = 0.10 x 3,000 kg/ha = 300 kg/ha. [1.5 Marks]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Construct a simplified food web consisting of at least 8 organisms across a terrestrial grassland ecosystem.\n(b) Explain how this food web provides greater stability compared to a single linear food chain if a disease eliminates one herbivore species. [5 Marks]",
        "answer": "Grassland food web diagram and ecological resilience.",
        "explanation": "Grassland food web diagram and ecological resilience.\n\nMarking Scheme:\n(a) Food Web Construction [3 Marks]:\n• Producers: Grasses and flowering plants. [0.5 Mark]\n• Primary Consumers (Herbivores): Grasshopper, Rabbit, Mouse. [1 Mark]\n• Secondary Consumers (Carnivores): Frog (eats grasshopper), Snake (eats mouse and frog), Hawk (eats snake, rabbit, mouse). [1.5 Marks]\n• Interconnections drawn showing multiple branching feeding links. [1 Mark]\n(b) Ecological Stability [2 Marks]:\n• In a simple linear chain (Grass -> Rabbit -> Hawk), if rabbit population crashes due to myxomatosis virus, the hawk would face starvation. In a food web, the hawk can switch its feeding preference to mice or snakes. Alternative trophic channels buffer population fluctuations, preventing top predator collapse and maintaining ecosystem stability. [2 Marks]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain why the oceans, despite covering 70% of the Earth's surface, account for only 32% (55 billion tons) of the biosphere's annual net primary productivity.\n(b) State two limiting factors in open oceans that curtail primary productivity. [5 Marks]",
        "answer": "Ocean productivity limitations, euphotic zone depth, and nutrient scarcity.",
        "explanation": "Ocean productivity limitations, euphotic zone depth, and nutrient scarcity.\n\nMarking Scheme:\n(a) Low Oceanic Productivity Explanation [3 Marks]:\n• Light Penetration: Solar radiation penetrates only the upper thin euphotic zone (top 100–200 m). Over 90% of ocean volume is completely dark (aphotic), where photosynthesis cannot occur. [1.5 Marks]\n• Low producer standing crop: Open oceans are biological deserts (oligotrophic) where microscopic phytoplankton are widely dispersed. [1.5 Marks]\n(b) Two Major Limiting Factors [2 Marks, 1 Mark each]:\n1. Nutrient Scarcity: Essential mineral macronutrients (nitrogen and phosphorus) and micronutrients (iron) rapidly sink into deep water. Lack of vertical upwelling keeps surface waters nutrient-poor.\n2. Light Extinction: Rapid attenuation of sunlight with depth restricts autotrophs to the surface layer."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Draw the ecological pyramid of biomass for: (i) A terrestrial forest ecosystem, (ii) A lake ecosystem.\n(b) What fundamental biological difference causes the contrasting shapes of these two pyramids? [5 Marks]",
        "answer": "Forest vs lake biomass pyramids and turnover rates.",
        "explanation": "Forest vs lake biomass pyramids and turnover rates.\n\nMarking Scheme:\n(a) Diagrams [3 Marks, 1.5 Marks each]:\n• (i) Forest Ecosystem (Upright): Broad base of large woody trees (thousands of kg/ha) -> Herbivorous insects/birds -> Carnivorous birds -> Apex carnivores. [1.5 Marks]\n• (ii) Lake Ecosystem (Inverted): Narrow base of phytoplankton (small biomass) -> Zooplankton -> Carnivorous fishes (larger biomass). [1.5 Marks]\n(b) Fundamental Biological Difference [2 Marks]:\n• Forest trees have massive long-lived structural biomass (cellulose and lignin) that accumulates over decades, resulting in high standing biomass at the producer level. [1 Mark]\n• Phytoplankton are microscopic unicellular algae with rapid turnover rates (lifespan of days) and minimal structural biomass, yet their high reproductive rate sustains a much larger instantaneous biomass of longer-lived primary and secondary consumers. [1 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Explain the ecological significance of Humus in soil fertility and ecosystem nutrient dynamics. [5 Marks]",
        "answer": "Humus composition, soil physical properties, and nutrient buffering.",
        "explanation": "Humus composition, soil physical properties, and nutrient buffering.\n\nMarking Scheme (1 Mark per point for five points):\n1. Nutrient Reservoir: Humus is rich in organically bound nitrogen, phosphorus, sulfur, and potassium, which are slowly released via mineralization for continuous plant nutrition.\n2. Moisture Retention: High colloidal surface area enables humus to absorb and hold vast quantities of water, increasing soil water-holding capacity and drought resistance.\n3. Soil Structure & Aeration: Promotes crumb aggregation in clayey soils, enhancing porosity, drainage, and root aeration, while preventing soil compaction.\n4. Cation Exchange Capacity (CEC): Humic acid carboxyl and phenolic groups carry high negative charges, binding and buffering essential cations (Ca2+, Mg2+, K+) against leaching by rain.\n5. Microbial Habitat: Serves as an energy and carbon substrate for beneficial mycorrhizae and nitrogen-fixing bacteria, fostering healthy soil biodiversity."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 13,
      "unit_num": 10,
      "title": "Biodiversity and Conservation",
      "unit_title": "Ecology and Environment",
      "weightage_unit": "10 Marks (Unit X)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Robert May's scientific estimate places the global species diversity of Earth at approximately:",
        "options": [
          "(a) 1.5 million",
          "(b) 7 million",
          "(c) 20 million",
          "(d) 50 million"
        ],
        "answer": "(b) 7 million",
        "explanation": "According to the comprehensive global estimate proposed by ecologist Robert May, the total number of species on Earth is around 7 million, of which only about 1.5 million have been described and catalogued so far."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "India occupies only 2.4 percent of the world's land area, but shares what impressive percentage of the global species diversity, making it one of the 12 mega-diversity nations?",
        "options": [
          "(a) 2.4%",
          "(b) 5.1%",
          "(c) 8.1%",
          "(d) 12.5%"
        ],
        "answer": "(c) 8.1%",
        "explanation": "Although India has only 2.4 percent of the world's land area, its share of global species diversity is an impressive 8.1 percent. That is what makes India one of the 12 mega diversity countries of the world."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which taxonomic group of animals is the most species-rich on Earth, accounting for more than 70 percent of all known animal species?",
        "options": [
          "(a) Molluscs",
          "(b) Insects (Arthropods)",
          "(c) Birds",
          "(d) Fishes"
        ],
        "answer": "(b) Insects (Arthropods)",
        "explanation": "Among animals, insects are the most species-rich taxonomic group, making up more than 70 percent of the total. That means out of every 10 animals on this planet, 7 are insects."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges displays genetic variation in the potency and concentration of which active chemical alkaloid?",
        "options": [
          "(a) Quinine",
          "(b) Reserpine",
          "(c) Nicotine",
          "(d) Morphine"
        ],
        "answer": "(b) Reserpine",
        "explanation": "The genetic variation shown by the medicinal plant Rauwolfia vomitoria growing in different Himalayan ranges might be in terms of the potency and concentration of the active chemical (reserpine) that the plant produces."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which Indian geographic region has a greater amphibian species diversity compared to the Eastern Ghats?",
        "options": [
          "(a) Western Ghats",
          "(b) Aravalli Hills",
          "(c) Thar Desert",
          "(d) Indo-Gangetic Plains"
        ],
        "answer": "(a) Western Ghats",
        "explanation": "Western Ghats have a greater amphibian species diversity than the Eastern Ghats, serving as a classic example of species diversity."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  — T — e — r — m — - — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Alexander von Humboldt observed that within a region, species richness increases with increasing explored area up to a limit. On a logarithmic scale, the species-area relationship is a straight line represented by:",
        "options": [
          "(a) log S = log C + Z log A",
          "(b) log S = log Z + C log A",
          "(c) S = C A^Z",
          "(d) Both (a) and (c) are correct"
        ],
        "answer": "(d) Both (a) and (c) are correct",
        "explanation": "On a logarithmic scale, the relationship is a straight line described by log S = log C + Z log A. On a normal linear scale, it is a rectangular hyperbola given by S = C A^Z (where S = species richness, A = area, Z = regression coefficient / slope, C = Y- intercept)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — D — e — l — h — i —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "What is the typical value of regression coefficient (Z-slope) in species-area relationships when analyzed for a small local region, regardless of taxonomic group?",
        "options": [
          "(a) 0.1 to 0.2",
          "(b) 0.6 to 1.2",
          "(c) 1.15",
          "(d) 2.0 to 3.0"
        ],
        "answer": "(a) 0.1 to 0.2",
        "explanation": "Ecologists have discovered that the value of Z lies in the range of 0.1 to 0.2, regardless of the taxonomic group or the region (whether plants in Britain, birds in California or molluscs in New York). If the analysis is done across very large continents, the slope is steeper (0.6 to 1.2)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  — A — I —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Who proposed the famous 'Rivet Popper Hypothesis' comparing the species in an ecosystem to rivets holding together an airplane?",
        "options": [
          "(a) Alexander von Humboldt",
          "(b) Paul Ehrlich",
          "(c) David Tilman",
          "(d) Edward Wilson"
        ],
        "answer": "(b) Paul Ehrlich",
        "explanation": "Stanford ecologist Paul Ehrlich proposed the 'Rivet Popper Hypothesis' using an analogy: in an airplane\n(ecosystem) all parts are joined together using thousands of rivets (species). Popping a rivet from the wings (loss of a keystone species) drives catastrophic structural failure."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is considered the MOST significant and devastating cause of the ongoing mass extinction of species (the primary driver of 'The Evil Quartet')?",
        "options": [
          "(a) Over-exploitation",
          "(b) Habitat loss and fragmentation",
          "(c) Alien species invasions",
          "(d) Co-extinctions"
        ],
        "answer": "(b) Habitat loss and fragmentation",
        "explanation": "Habitat loss and fragmentation is the most important cause driving animals and plants to extinction. The most dramatic examples of habitat loss come from tropical rainforests (such as clearing the Amazon basin for soybean cultivation and cattle pastures)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The introduction of which predatory alien fish into Lake Victoria in East Africa led to the extinction of an ecologically unique assemblage of more than 200 species of endemic cichlid fish?",
        "options": [
          "(a) African catfish (Clarias gariepinus)",
          "(b) Nile perch",
          "(c) Gambusia",
          "(d) Rainbow trout"
        ],
        "answer": "(b) Nile perch",
        "explanation": "When the Nile perch was introduced into Lake Victoria in East Africa, it led eventually to the extinction of an ecologically unique assemblage of more than 200 species of cichlid fish in the lake."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which invasive alien weed species, introduced accidentally as a contaminant with imported wheat into India, has caused environmental damage and severe respiratory allergies?",
        "options": [
          "(a) Parthenium hysterophorus (Carrot grass)",
          "(b) Lantana camara",
          "(c) Eichhornia crassipes (Water hyacinth)",
          "(d) All of the above"
        ],
        "answer": "(a) Parthenium hysterophorus (Carrot grass)",
        "explanation": "Parthenium hysterophorus (carrot grass) was accidentally introduced into India along with imported wheat. It spread aggressively across the country, choking native vegetation and causing contact dermatitis and pollen allergies."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Steller's sea cow and Passenger pigeon became completely extinct in the last 500 years primarily due to:",
        "options": [
          "(a) Habitat fragmentation",
          "(b) Over-exploitation by humans",
          "(c) Co-extinction with parasites",
          "(d) Alien fungal disease"
        ],
        "answer": "(b) Over-exploitation by humans",
        "explanation": "Humans have always depended on nature for food and shelter, but when 'need' turned to 'greed', it led to over-exploitation. Many species extinctions in the last 500 years (Steller's sea cow, passenger pigeon) were due to over-exploitation by humans."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Biodiversity hotspots are regions characterized by exceptionally high levels of species richness and high degree of:",
        "options": [
          "(a) Endemism",
          "(b) Alien invasions",
          "(c) Biopiracy",
          "(d) Eutrophication"
        ],
        "answer": "(a) Endemism",
        "explanation": "Biodiversity hotspots are regions with very high levels of species richness and high degree of endemism (that is, species confined to that region and not found anywhere else)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "How many terrestrial Biodiversity Hotspots have been identified globally, and which of the following covers the high- biodiversity regions of India?",
        "options": [
          "(a) 25 globally; Western Ghats and Himalayas",
          "(b) 36 globally; Western Ghats-Sri Lanka, Indo-Burma, and Himalayas",
          "(c) 50 globally; Sundarbans only",
          "(d) 12 globally; Thar desert and Deccan"
        ],
        "answer": "(b) 36 globally; Western Ghats-Sri Lanka, Indo-Burma, and Himalayas",
        "explanation": "Initially 25 biodiversity hotspots were identified, but subsequently nine more have been added, bringing the total number of biodiversity hotspots in the world to 36. Three of these hotspots—Western Ghats and Sri Lanka, Indo-Burma, and Himalaya—cover our country's exceptionally high biodiversity regions."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following is an example of In situ (on-site) biodiversity conservation?",
        "options": [
          "(a) Botanical gardens",
          "(b) Zoological parks",
          "(c) Wildlife Sanctuaries and National Parks",
          "(d) Seed banks"
        ],
        "answer": "(c) Wildlife Sanctuaries and National Parks",
        "explanation": "In situ conservation involves protecting endangered species in their natural habitats (National Parks, Wildlife Sanctuaries, Biosphere Reserves, Sacred Groves). Botanical gardens, zoological parks, and seed banks are Ex situ conservation."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Sacred Groves in India represent traditional in situ conservation. In which state are the famous Khasi and Jaintia Hills sacred groves located?",
        "options": [
          "(a) Rajasthan",
          "(b) Meghalaya",
          "(c) Karnataka",
          "(d) Madhya Pradesh"
        ],
        "answer": "(b) Meghalaya",
        "explanation": "Sacred groves are found in Khasi and Jaintia Hills in Meghalaya, Aravalli Hills of Rajasthan, Western Ghat regions of Karnataka and Maharashtra, and the Chanda and Bastar areas of Madhya Pradesh/Chhattisgarh. In Meghalaya, the sacred groves are the last refuges for a large number of rare and threatened plants."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Cryopreservation of gametes of threatened species in viable and fertile conditions for long periods is carried out in liquid nitrogen at what temperature?",
        "options": [
          "(a) 0°C",
          "(b) -80°C",
          "(c) -196°C",
          "(d) -273°C"
        ],
        "answer": "(c) -196°C",
        "explanation": "Advanced ex-situ conservation uses cryopreservation techniques: gametes of threatened species can be preserved in viable and fertile condition for long periods at ultra-low temperatures (-196°C in liquid nitrogen)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The historic 'Earth Summit' on Conservation of Biological Diversity (CBD) was held in 1992 at:",
        "options": [
          "(a) Johannesburg, South Africa",
          "(b) Rio de Janeiro, Brazil",
          "(c) Kyoto, Japan",
          "(d) Montreal, Canada"
        ],
        "answer": "(b) Rio de Janeiro, Brazil",
        "explanation": "The historic Convention on Biological Diversity ('The Earth Summit') held in Rio de Janeiro in 1992 called upon all nations to take appropriate measures for conservation of biodiversity and sustainable utilization of its benefits."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The World Summit on Sustainable Development was held in 2002 in Johannesburg, South Africa, where how many countries pledged their commitment to achieve a significant reduction in the rate of biodiversity loss?",
        "options": [
          "(a) 50 countries",
          "(b) 100 countries",
          "(c) 190 countries",
          "(d) 250 countries"
        ],
        "answer": "(c) 190 countries",
        "explanation": "In the World Summit on Sustainable Development held in 2002 in Johannesburg, South Africa, 190 countries pledged their commitment to achieve by 2010 a significant reduction in the current rate of biodiversity loss at global, regional, and local levels."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following vertebrate classes faces the highest percentage of species threatened with extinction according to the IUCN Red List?",
        "options": [
          "(a) Birds (12%)",
          "(b) Mammals (23%)",
          "(c) Amphibians (32%)",
          "(d) Reptiles (20%)"
        ],
        "answer": "(c) Amphibians (32%)",
        "explanation": "Presently, 12 percent of all bird species, 23 percent of all mammal species, 31 percent of all gymnosperm species, and 32 percent of all amphibian species in the world face the threat of extinction. Amphibians appear to be more vulnerable to extinction."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "David Tilman's long-term outdoor ecological plot experiments demonstrated that:",
        "options": [
          "(a) Plots with more species showed less year-to-year variation in total biomass and higher productivity",
          "(b) Species diversity has zero effect on ecosystem stability",
          "(c) Monoculture plots produce more biomass than species-rich plots",
          "(d) Ecosystem stability depends solely on rainfall"
        ],
        "answer": "(a) Plots with more species showed less year-to-year variation in total biomass and higher productivity",
        "explanation": "David Tilman showed that outdoor plots with more species showed less year-to-year variation in total biomass. He also showed in his experiments that increased diversity contributed to higher productivity."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 1 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Bioprospecting is defined as the:",
        "options": [
          "(a) Exploration of molecular, genetic, and species-level diversity for products of economic importance",
          "(b) Smuggling of forest wood",
          "(c) Poaching of rhinos for horn",
          "(d) Extraction of fossil fuels"
        ],
        "answer": "(a) Exploration of molecular, genetic, and species-level diversity for products of economic importance",
        "explanation": "Nations endowed with rich biodiversity can expect to reap enormous benefits from bio-prospecting (exploring molecular, genetic, and species-level diversity for products of economic importance)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The Amazonian rainforest in South America is so vast and produces so much of the biosphere's oxygen that it is rightfully referred to as the:",
        "options": [
          "(a) Heart of the biosphere",
          "(b) Lungs of the planet",
          "(c) Liver of the Earth",
          "(d) Kidney of nature"
        ],
        "answer": "(b) Lungs of the planet",
        "explanation": "The largely tropical Amazonian rain forest in South America has the greatest biodiversity on Earth. It is estimated to produce 20 percent of the total oxygen in the Earth's atmosphere through photosynthesis, earning it the title 'lungs of the planet'."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Which of the following extinct animals is correctly paired with its native country?",
        "options": [
          "(a) Dodo - Mauritius",
          "(b) Quagga - Africa",
          "(c) Thylacine - Australia",
          "(d) All of the above are correctly paired"
        ],
        "answer": "(d) All of the above are correctly paired",
        "explanation": "Some examples of recent extinctions include the Dodo (Mauritius), Quagga (Africa), Thylacine (Australia), Steller's Sea Cow (Russia), and three subspecies of tiger (Bali, Javan, Caspian)."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "The concept of 'Biodiversity Hotspots' was first introduced in 1988 by the British ecologist:",
        "options": [
          "(a) Norman Myers",
          "(b) Edward Wilson",
          "(c) Robert May",
          "(d) Ernst Haeckel"
        ],
        "answer": "(a) Norman Myers",
        "explanation": "The biodiversity hotspot concept was originally developed and introduced by British environmentalist Norman Myers in 1988 to identify priority areas for global conservation action. SECTION B: ASSERTION-REASON QUESTIONS (1 MARK EACH)"
      },
      {
        "id": 26,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Tropical regions harbor far greater biological diversity than temperate and polar regions.\nReason (R): Tropical latitudes have remained relatively undisturbed by glaciations for millions of years, promoting prolonged evolutionary speciation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both Assertion and Reason are true and (R) is one of the primary evolutionary hypotheses explaining the high species richness observed in the tropics."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): On a continent-wide scale, the slope of the species-area curve (Z value) becomes much steeper (0.6 to 1.2).\nReason (R): Over large continental landmasses, diverse geographical barriers and varied biomes encompass distinct endemic species assemblages.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are correct and (R) explains why the species-area curve is much steeper when sampled across whole continents compared to local habitats."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Biodiversity hotspots cover less than 2 percent of the Earth's total land area.\nReason (R): Strict legal protection of all 36 hotspots could reduce the ongoing mass extinction rate by almost 30 percent.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both (A) and (R) are true statements emphasizing the extraordinary conservation priority of biodiversity hotspots. However, (R) is the conservation benefit of protecting them, not the explanation for why they occupy <2% of land area."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Sacred groves in Meghalaya and Rajasthan have helped in the conservation of rare and threatened plant species.\nReason (R): Indigenous tribal cultural traditions prohibit felling of trees and hunting within sacred forest tracts.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the socio-cultural explanation for why sacred groves act as pristine in situ floral and faunal sanctuaries."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 1 —  — M — a — r — k — ",
        "question": "Assertion (A): Co-extinction is one of the major drivers of biodiversity loss in 'The Evil Quartet'.\nReason (R): When a host species becomes extinct, its obligate monophagous parasites and mutualistic partners inevitably become extinct as well.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true and (R) provides the definition and mechanism of co-extinction. In obligate relationships (such as monophagous parasite and host, or plant and its specific pollinator), the demise of one partner automatically seals the fate of the dependent partner. SECTION C: SHORT ANSWER QUESTIONS (2/3 MARKS EACH)"
      },
      {
        "id": 31,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the three interrelated levels of biological diversity: (i) Genetic diversity, (ii) Species diversity, (iii) Ecological diversity, giving one example of each. [3 Marks]",
        "answer": "Three levels of biological diversity with examples.",
        "explanation": "Three levels of biological diversity with examples.\n\nMarking Scheme (1 Mark each):\n1. Genetic Diversity: Diversity of genes and alleles within a single species. Example: Rauwolfia vomitoria showing varying reserpine potency across Himalayan ranges; >50,000 distinct genetic strains of rice and >1,000 varieties of mango in India. [1 Mark]\n2. Species Diversity: Variety of species within a given region (species richness). Example: Western Ghats possess a much greater amphibian species richness than the Eastern Ghats. [1 Mark]\n3. Ecological (Ecosystem) Diversity: Diversity of ecosystems, biomes, and trophic niches within a geographical area. Example: India, with its deserts, rain forests, mangroves, coral reefs, and alpine meadows, has higher ecosystem diversity than Norway. [1 Mark]"
      },
      {
        "id": 32,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain the Species-Area Relationship proposed by Alexander von Humboldt with the help of a graph and equation. What is the significance of the slope 'Z'? [3 Marks]",
        "answer": "Species-area curve, log equation, and Z slope significance.",
        "explanation": "Species-area curve, log equation, and Z slope significance.\n\nMarking Scheme:\n• Observation & Graph: Alexander von Humboldt observed that within a region, species richness increases with explored area, up to a limit. Graph of S vs A is a rectangular hyperbola: S = C A^Z. [1 Mark]\n• Logarithmic Equation: log S = log C + Z log A (straight line, where S = species richness, A = area, Z = regression coefficient/slope, C = Y-intercept). [1 Mark]\n• Significance of Z: Represents the rate of species accumulation. Within a small local region, Z = 0.1 to 0.2 regardless of taxa. Over very large continental areas, the slope is much steeper (Z = 0.6 to 1.2), indicating a much higher rate of adding unique endemic species per unit area. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain Paul Ehrlich's 'Rivet Popper Hypothesis'. How does it illustrate the ecological danger of losing keystone species? [3 Marks]",
        "answer": "Rivet popper hypothesis and keystone species analogy.",
        "explanation": "Rivet popper hypothesis and keystone species analogy.\n\nMarking Scheme:\n• Analogy: An ecosystem is compared to an airplane and its thousands of species are compared to rivets holding the airplane together. [1 Mark]\n• Popping Rivets (Extinction): If passengers start popping rivets (causing species extinction), the plane might initially fly safely if rivets are removed from internal passenger seats (loss of non-critical species). [1 Mark]\n• Keystone Species Analogy: However, if rivets are popped from the wings (loss of keystone species that drive key ecosystem functions, such as major pollinators or apex predators), it creates immediate catastrophic flight hazard, leading to rapid ecosystem collapse. [1 Mark]"
      },
      {
        "id": 34,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is 'The Evil Quartet'? Name all four major causes of biodiversity losses driven by human activities. [3 Marks]",
        "answer": "The Evil Quartet: Four drivers of biodiversity loss.",
        "explanation": "The Evil Quartet: Four drivers of biodiversity loss.\n\nMarking Scheme:\n• Meaning: Sobriquet used by ecologists to describe the four major anthropogenic causes driving accelerated species extinction. [1 Mark]\n• Four Causes [2 Marks, 0.5 Mark each]:\n1. Habitat loss and fragmentation\n2. Over-exploitation\n3. Alien (exotic) species invasions\n4. Co-extinctions."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between In situ (on-site) and Ex situ (off-site) biodiversity conservation. Give two examples of each approach. [3 Marks]",
        "answer": "Comparison between in situ and ex situ conservation.",
        "explanation": "Comparison between in situ and ex situ conservation.\n\nMarking Scheme:\n• In situ Conservation: Protecting threatened and endangered species in their natural, original habitat so that the whole ecosystem and its evolutionary processes are conserved. Examples: National Parks, Wildlife Sanctuaries, Biosphere Reserves, Sacred Groves. [1.5 Marks]\n• Ex situ Conservation: Taking threatened animals and plants out of their natural habitat and placing them in special human-managed settings where they are protected and given special care. Examples: Zoological parks, Botanical gardens, Wildlife safari parks, Cryopreservation gene banks. [1.5 Marks]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are Biodiversity Hotspots? Name the three biodiversity hotspots that cover regions of India. [3 Marks]",
        "answer": "Hotspot definition and Indian hotspots.",
        "explanation": "Hotspot definition and Indian hotspots.\n\nMarking Scheme:\n• Definition: Priority terrestrial geographical areas characterized by exceptionally high species richness, high levels of endemism (species found nowhere else), and facing accelerated rates of habitat destruction. [1.5 Marks]\n• Three Indian Hotspots [1.5 Marks, 0.5 Mark each]:\n1. Western Ghats and Sri Lanka\n2. Indo-Burma (covering Northeastern India)\n3. The Himalaya."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What are Sacred Groves? Mention their cultural and ecological significance, naming any two regions in India where they are found. [3 Marks]",
        "answer": "Sacred groves definition, conservation significance, and locations.",
        "explanation": "Sacred groves definition, conservation significance, and locations.\n\nMarking Scheme:\n• Definition & Cultural Significance: Tracts of pristine natural forests that are venerated and protected by indigenous local communities due to deep-rooted religious beliefs; all cutting of trees and hunting are strictly taboo. [1.5 Marks]\n• Ecological Significance: Serve as the last undisturbed refuges for many highly endangered, endemic plant and animal species that have disappeared from surrounding deforested landscapes. [0.5 Mark]\n• Locations [1 Mark, 0.5 Mark each for any two]: Khasi and Jaintia Hills in Meghalaya, Aravalli Hills in Rajasthan, Western Ghats in Karnataka/Maharashtra, Chanda and Bastar areas in MP/Chhattisgarh."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Differentiate between the 'Narrowly Utilitarian' and 'Broadly Utilitarian' arguments for conserving biodiversity. [3 Marks]",
        "answer": "Narrowly vs broadly utilitarian arguments for biodiversity conservation.",
        "explanation": "Narrowly vs broadly utilitarian arguments for biodiversity conservation.\n\nMarking Scheme:\n• Narrowly Utilitarian: Human beings derive countless direct economic, commercial, and material benefits from biodiversity: cereals, pulses, fruits, firewood, fiber, construction timber, industrial resins/dyes/perfumes, and over 25% of all commercial pharmaceuticals derived from tropical medicinal plants. [1.5 Marks]\n• Broadly Utilitarian: Biodiversity plays an indispensable role in maintaining vital, non-monetized ecosystem services that sustain life on Earth: Amazon rainforest producing 20% of Earth's oxygen, insect/bird/bat pollination of agricultural crops, climate moderation, watershed protection, flood control, and aesthetic/spiritual joy. [1.5 Marks]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "Explain how Alien Species Invasions cause the loss of indigenous biodiversity with two examples. [3 Marks]",
        "answer": "Alien species invasion mechanism and examples (Nile perch, Water hyacinth, Clarias).",
        "explanation": "Alien species invasion mechanism and examples (Nile perch, Water hyacinth, Clarias).\n\nMarking Scheme:\n• Mechanism: When non-native species are introduced into a new ecosystem intentionally or accidentally, in the absence of co-evolved predators and parasites, they multiply aggressively and outcompete or prey upon native species, driving them to extinction. [1 Mark]\n• Examples [2 Marks, 1 Mark each for any two]:\n1. Nile Perch in Lake Victoria: Introduced predatory fish wiped out >200 endemic cichlid fish species.\n2. Water Hyacinth (Eichhornia) / Carrot grass (Parthenium): Smothers waterways and native vegetation.\n3. African Catfish (Clarias gariepinus): Illegally introduced for aquaculture, poses a grave predatory threat to indigenous Indian river catfishes."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 2 — / — 3 —  — M — a — r — k — s — ",
        "question": "What is Cryopreservation? How is it utilized in modern ex situ conservation of threatened species? [3 Marks]",
        "answer": "Cryopreservation principle and applications in ex situ conservation.",
        "explanation": "Cryopreservation principle and applications in ex situ conservation.\n\nMarking Scheme:\n• Definition: The preservation of viable cells, tissues, gametes, or embryos at ultra-subzero temperatures (-196°C) in liquid nitrogen, which halts all metabolic decay. [1.5 Marks]\n• Applications in Ex situ Conservation: (1) Long-term preservation of viable sperms, ova, and pollen of critically endangered species. (2) Facilitates in vitro fertilization (IVF) to breed endangered animals in zoological parks, preserving genetic diversity without maintaining large captive populations. [1.5 Marks] SECTION D: LONG ANSWER & EVALUATIVE QUESTIONS (4/6 MARKS EACH)"
      },
      {
        "id": 41,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  — ( — S — e — t —  — 5 — 7 — / — 1 — / — 1 — ) —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Discuss the 'Latitudinal Gradient' in species diversity. Why do the tropics harbor vastly greater biological wealth than temperate and polar zones?\n(b) Give three ecological and evolutionary hypotheses proposed by scientists to explain high tropical diversity. [5 Marks]",
        "answer": "Latitudinal gradients and three hypotheses for tropical species richness.",
        "explanation": "Latitudinal gradients and three hypotheses for tropical species richness.\n\nMarking Scheme:\n(a) Latitudinal Gradient [2 Marks]:\n• Species diversity decreases steadily from the equator towards the polar regions. Tropics (23.5° N to 23.5° S) harbor vastly more species than temperate/polar areas. For example, Colombia near equator has 1,400 bird species; New York at 41° N has 105; Greenland at 71° N has only 56. [2 Marks]\n(b) Three Hypotheses for High Tropical Diversity [3 Marks, 1 Mark each]:\n1. Evolutionary Time Hypothesis: Temperate regions underwent repeated cycles of glaciation in the past, wiping out species, whereas tropical latitudes remained largely undisturbed for millions of years, allowing continuous evolutionary speciation.\n2. Environmental Predictability Hypothesis: Tropical environments are less seasonal, relatively constant, uniform, and predictable, promoting intense niche specialization and high species richness.\n3. Solar Energy & Productivity Hypothesis: The tropics receive year-round maximum solar insolation, resulting in higher primary productivity, which directly and indirectly supports more trophic webs and higher biodiversity."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 4 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain 'The Evil Quartet' in detail, providing one biological example for each of the four causes of biodiversity loss.\n(b) Why are amphibians currently considered the most threatened vertebrate group on Earth? [5 Marks]",
        "answer": "The Evil Quartet detailed explanation and amphibian extinction vulnerability.",
        "explanation": "The Evil Quartet detailed explanation and amphibian extinction vulnerability.\n\nMarking Scheme:\n(a) The Evil Quartet [4 Marks, 1 Mark each]:\n1. Habitat Loss and Fragmentation: Most destructive driver. Clearing of Amazonian rainforests for soybean fields and pastures; cutting forests into patches disrupts animals requiring large territories (elephants, tigers) and migratory birds.\n2. Over-exploitation: Human over-hunting and commercial harvesting driven by greed. Led to complete extinction of Dodo\n(Mauritius), Steller's sea cow, and Passenger pigeon.\n3. Alien Species Invasions: Introduction of non-native species that turn invasive. E.g., Nile perch wiping out >200 cichlid fish species in Lake Victoria; African catfish (Clarias gariepinus) threatening indigenous catfishes.\n4. Co-extinctions: Obligate evolutionary partnerships. When a host fish goes extinct, its unique monogenean parasites go extinct; loss of a specialized pollinator leads to extinction of co-evolved plant.\n(b) Amphibian Vulnerability [1 Mark]:\n• 32% of all amphibian species face extinction. Amphibians possess permeable, moist glandular skins and complex two- stage life cycles (aquatic tadpole and terrestrial adult), making them acutely sensitive to habitat loss, fungal pathogens\n(chytridiomycosis), chemical pesticides, and climate change. [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 3 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe the Species-Area Relationship established by Alexander von Humboldt with a neat graph.\n(b) Write the logarithmic and exponential equations and state what each symbol represents.\n(c) When is the slope of regression (Z) between 0.1 to 0.2, and when does it reach 0.6 to 1.2? [5 Marks]",
        "answer": "Humboldt's species-area relationship, equations, and Z slope dynamics.",
        "explanation": "Humboldt's species-area relationship, equations, and Z slope dynamics.\n\nMarking Scheme:\n(a) Description & Graph [2 Marks]:\n• Observed that within a geographic region, species richness increases as explored area increases, but up to a plateau. Graph is a rectangular hyperbola on arithmetic scale and straight line on log-log scale. [Graph 1 Mark, Description 1 Mark]\n(b) Equations & Symbols [1.5 Marks]:\n• Arithmetic: S = C A^Z\n• Logarithmic: log S = log C + Z log A [0.5 Mark]\n• Symbols: S = Species richness, A = Area, Z = Slope of line (regression coefficient), C = Y-intercept. [1 Mark]\n(c) Z Slope Dynamics [1.5 Marks]:\n• Z = 0.1 to 0.2: Observed in small to moderately sized local regions (e.g., plants in Britain, birds in California, molluscs in NY state), where the rate of adding new species with area is standard. [0.75 Mark]\n• Z = 0.6 to 1.2: Observed when the species-area relationship is analyzed across very large continental regions (e.g., frugivorous birds and mammals in tropical forests across continents, Z = 1.15), reflecting inclusion of completely distinct biogeographic zones. [0.75 Mark]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 2 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Categorize the arguments for biodiversity conservation into: (i) Narrowly Utilitarian, (ii) Broadly Utilitarian, (iii) Ethical.\n(b) How does Bioprospecting provide immense economic value to biodiversity-rich developing nations? [5 Marks]",
        "answer": "Three arguments for conservation and bioprospecting potential.",
        "explanation": "Three arguments for conservation and bioprospecting potential.\n\nMarking Scheme:\n(a) Three Conservation Arguments [3.5 Marks]:\n• (i) Narrowly Utilitarian [1.25 Marks]: Tangible direct economic goods: food crops, spices, firewood, fiber, construction timber, industrial tannins, dyes, lubricants, and commercial pharmaceuticals (25% of all drugs come from ~120 plant species).\n• (ii) Broadly Utilitarian [1.25 Marks]: Vital ecosystem services: oxygen production (Amazon produces 20% of Earth's O2), pollination by insects/birds, climate buffering, soil erosion control, nutrient recycling, and psychological/aesthetic joy of wilderness.\n• (iii) Ethical Argument [1 Mark]: Every species has an intrinsic value regardless of its immediate utility to human beings. We have a moral responsibility to coexist and pass our biological heritage undamaged to future generations.\n(b) Bioprospecting [1.5 Marks]:\n• The systematic exploration of biodiversity at molecular, genetic, and species levels to discover novel drugs, genes, and bio-products. Countries rich in biodiversity (like India) can harness indigenous gene pools to patent valuable biotechnological discoveries and earn billions in sustainable economic revenue. [1.5 Marks]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 2 — 0 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Explain In situ and Ex situ conservation strategies with two detailed examples of each.\n(b) What are Biodiversity Hotspots? Name three hotspots in India and explain why protecting them is of global urgency. [5 Marks]",
        "answer": "In situ vs ex situ conservation strategies and biodiversity hotspots.",
        "explanation": "In situ vs ex situ conservation strategies and biodiversity hotspots.\n\nMarking Scheme:\n(a) Conservation Strategies [3 Marks]:\n• In situ Conservation [1.5 Marks]: Whole-ecosystem protection where species are conserved in their natural habitats. Examples: (1) National Parks (e.g., Jim Corbett, Kaziranga) where human exploitation is strictly prohibited. (2) Biosphere Reserves (e.g., Nilgiri, Sundarbans) balancing conservation with sustainable tribal usage.\n• Ex situ Conservation [1.5 Marks]: High-risk species rescued and cared for outside natural habitats. Examples: (1) Botanical Gardens and Zoological Parks breeding endangered animals in captivity. (2) Cryopreservation seed and gamete banks.\n(b) Hotspots & Global Urgency [2 Marks]:\n• Definition: Priority regions with extreme species richness, high endemism, and high habitat loss. [0.5 Mark]\n• Indian Hotspots: Western Ghats-Sri Lanka, Indo-Burma, and Himalayas. [0.75 Mark]\n• Global Urgency: Hotspots occupy <2% of Earth's land area, yet harbor over 50% of terrestrial plant and animal species. Strict conservation of all 36 global hotspots could reduce the ongoing Sixth Mass Extinction by nearly 30%. [0.75 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 9 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "Read the following passage and answer the questions:\n'Human history is witnessing the Sixth Mass Extinction episode. Unlike the five prehistoric mass extinctions caused by natural geological catastrophes, the current extinction crisis is anthropocentrically driven and proceeding at an alarming rate.'\n(a) How does the current extinction rate compare with pre-human natural background extinction rates?\n(b) Name four animal species that became extinct in the last 500 years.\n(c) List three significant ecological consequences of biodiversity loss on natural ecosystems. [5 Marks]",
        "answer": "Sixth mass extinction, recent extinct species, and consequences of biodiversity loss.",
        "explanation": "Sixth mass extinction, recent extinct species, and consequences of biodiversity loss.\n\nMarking Scheme:\n(a) Current Extinction Rate [1.5 Marks]:\n• Current extinction rates are estimated to be 100 to 1,000 times faster than natural pre-human background extinction rates, with nearly half of all species facing potential extinction within the next century if habitat destruction continues unabated. [1.5 Marks]\n(b) Four Recently Extinct Animals [1.5 Marks, ~0.4 Mark each]:\n• 1. Dodo (Mauritius)\n• 2. Quagga (Africa)\n• 3. Thylacine (Tasmanian wolf, Australia)\n• 4. Steller's sea cow (Russia) / Javan tiger.\n(c) Three Consequences of Biodiversity Loss [2 Marks, ~0.7 Mark each]:\n• 1. Decline in overall plant primary productivity and agricultural yields.\n• 2. Lowered resistance of ecosystems to environmental perturbations such as drought and pest outbreaks.\n• 3. Increased variability and breakdown in key ecosystem processes like water use, decomposition, and pest-disease cycles."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 8 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Describe David Tilman's long-term ecological experiments on outdoor grassland plots.\n(b) How did his findings prove that species richness is essential for ecosystem stability and productivity? [5 Marks]",
        "answer": "David Tilman's outdoor plot experiments and biodiversity-stability relationship.",
        "explanation": "David Tilman's outdoor plot experiments and biodiversity-stability relationship.\n\nMarking Scheme:\n(a) Tilman's Experiments [2.5 Marks]:\n• Experimental Setup: David Tilman created dozens of outdoor grassland experimental plots containing different numbers and combinations of plant species, monitoring them over many successive seasons. [1.5 Marks]\n• Measurements: Measured total annual biomass production, nitrogen uptake, and year-to-year fluctuations in biomass. [1 Mark]\n(b) Key Findings & Proof of Stability [2.5 Marks]:\n• Finding 1 (Biomass Stability): Plots with higher species richness showed significantly less year-to-year variation in total biomass compared to species-poor monocultures. [1.25 Marks]\n• Finding 2 (Higher Productivity): Species-rich plots consistently achieved higher overall biomass productivity because diverse species possess complementary root depths and photosynthetic strategies, exploiting soil nutrients more completely (niche complementarity). Proved that biodiversity is not a luxury, but essential for ecosystem resilience. [1.25 Marks]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 7 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) What are Sacred Groves? Where are they located in India?\n(b) Explain how traditional religious beliefs have inadvertently contributed to the in situ preservation of rare and endangered species in India. [5 Marks]",
        "answer": "Sacred groves, geographic distribution, and traditional conservation ethics.",
        "explanation": "Sacred groves, geographic distribution, and traditional conservation ethics.\n\nMarking Scheme:\n(a) Sacred Groves & Distribution [2.5 Marks]:\n• Definition: Tracts of forest land dedicated to local deities or ancestral spirits, where all forms of exploitation (tree felling, hunting, grazing) are taboo under customary tribal law. [1 Mark]\n• Locations [1.5 Marks, 0.5 Mark each for any three]:\n1. Khasi and Jaintia Hills in Meghalaya\n2. Aravalli Hills of Rajasthan\n3. Western Ghat regions of Karnataka and Maharashtra\n4. Chanda and Bastar areas of Madhya Pradesh and Chhattisgarh.\n(b) Conservation Contribution [2.5 Marks]:\n• Protection of Rare Flora: In many parts of India, especially in the Khasi Hills of Meghalaya, sacred groves represent the final remaining islands of pristine climax forest. [1.25 Marks]\n• Gene Bank for Endemics: They shelter critically endangered, endemic plant and animal species that have been exterminated from all surrounding areas due to commercial logging and agriculture, proving that indigenous cultural traditions can provide powerful grassroots in situ conservation. [1.25 Marks]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 6 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "A conservation biologist is tasked with developing a 10-year action plan to save an endangered freshwater turtle species whose natural riverine habitat is severely fragmented by dams.\n(a) Outline the In situ conservation steps she should implement in the turtle's natural river.\n(b) Outline the Ex situ conservation measures she should establish as a safety backup. [5 Marks]",
        "answer": "Conservation action plan: In situ and ex situ integrated strategy.",
        "explanation": "Conservation action plan: In situ and ex situ integrated strategy.\n\nMarking Scheme:\n(a) In situ Conservation Measures [2.5 Marks]:\n• Demarcate Critical River Sanctuaries: Establish legal protected river stretches with bans on commercial sand mining, dredging, and destructive gill-net fishing. [1 Mark]\n• Nesting Beach Protection: Protect sandbars where turtles lay eggs using wire fencing and local community vigil to prevent egg poaching by dogs and humans. [0.75 Mark]\n• Ecological Flow & Fish Ladders: Mandate minimum environmental water flows from upstream dams to maintain aquatic connectivity. [0.75 Mark]\n(b) Ex situ Conservation Measures [2.5 Marks]:\n• Captive Breeding Facility: Establish an off-site specialized breeding center in a zoological park to breed wild-caught pairs in temperature-controlled tanks. [1 Mark]\n• Cryopreservation: Cryopreserve turtle semen and tissue samples in liquid nitrogen (-196°C) for future genetic diversity infusion. [0.75 Mark]\n• Head-Starting & Reintroduction: Hatch eggs in incubators, rear hatchlings until shells harden (head-starting), and reintroduce healthy sub-adults into protected river zones. [0.75 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": " — C — B — S — E —  — 2 — 0 — 1 — 5 —  —  —  —  — 4 — / — 6 —  — M — a — r — k — s — ",
        "question": "(a) Discuss the outcomes of the 1992 Earth Summit held in Rio de Janeiro and the 2002 World Summit held in Johannesburg.\n(b) What pledge was made by the participating nations at the Johannesburg summit? [5 Marks]",
        "answer": "Earth Summit (1992) and World Summit (2002) outcomes and commitments.",
        "explanation": "Earth Summit (1992) and World Summit (2002) outcomes and commitments.\n\nMarking Scheme:\n(a) Summits Overview [3 Marks]:\n• Earth Summit (Rio de Janeiro, 1992) [1.5 Marks]: The historic United Nations Conference on Environment and Development (UNCED) where the Convention on Biological Diversity (CBD) was opened for signature. Called upon all signatory nations to take concrete national legislative measures for: (1) Conservation of biological diversity, (2) Sustainable utilization of its components, and (3) Fair and equitable sharing of benefits arising from commercial utilization of genetic resources.\n• World Summit on Sustainable Development (Johannesburg, 2002) [1.5 Marks]: A global review summit assessing implementation of Rio declarations, emphasizing the link between poverty eradication, environmental degradation, and biodiversity conservation.\n(b) Johannesburg Pledge [2 Marks]:\n• 190 participating countries formally pledged their commitment to achieve, by the year 2010, a significant reduction in the current rate of biodiversity loss at global, regional, and national levels through international cooperation and funding. [2 Marks]"
      }
    ]
  }
];
