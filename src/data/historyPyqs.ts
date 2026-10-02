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
  book: string;
  author: string;
  title: string;
  weightage_unit: string;
}

export interface PyqChapter {
  info: PyqChapterInfo;
  questions: PyqQuestion[];
}

export const HISTORY_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "book": "Themes in Indian History Part-I (Ancient India)",
      "title": "Bricks, Beads and Bones: The Harappan Civilisation",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part I: Ancient India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following Harappan sites has yielded evidence of a ploughed field with two sets of \nfurrows at right angles to each other?",
        "options": [
          "(a) Kalibangan",
          "(b) Banawali",
          "(c) Lothal",
          "(d) Chanhudaro"
        ],
        "answer": "(a) Kalibangan",
        "explanation": "Kalibangan in Rajasthan revealed a ploughed field from Early Harappan levels showing two \nperpendicular sets of furrows, suggesting two different crops were grown together simultaneously."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "At which Harappan site was an elaborate water reservoir, used for storing rainwater for agricultural \nirrigation, discovered?",
        "options": [
          "(a) Dholavira",
          "(b) Shortughai",
          "(c) Rakhigarhi",
          "(d) Harappa"
        ],
        "answer": "(a) Dholavira",
        "explanation": "Dholavira in Gujarat features monumental stone-cut water reservoirs engineered to store rainwater and \nharvest run-off for the city and agriculture."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who was the first Director General of the Archaeological Survey of India (ASI), often referred to as the \n'Father of Indian Archaeology'?",
        "options": [
          "(a) Alexander Cunningham",
          "(b) John Marshall",
          "(c) R.E.M. Wheeler",
          "(d) Daya Ram Sahni"
        ],
        "answer": "(a) Alexander Cunningham",
        "explanation": "Alexander Cunningham was appointed the first Director General of the Archaeological Survey of India in \n1871 and is regarded as the Father of Indian Archaeology."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which tiny Harappan settlement (approx. 7 hectares) was almost exclusively devoted to craft \nproduction, including bead-making, shell-cutting, and seal-making?",
        "options": [
          "(a) Chanhudaro",
          "(b) Mohenjodaro",
          "(c) Kalibangan",
          "(d) Banawali"
        ],
        "answer": "(a) Chanhudaro",
        "explanation": "Chanhudaro is a small settlement in Sindh dedicated almost entirely to specialized artisanal craft \nactivities like bead making, shell cutting, seal engraving, and weight making."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The red color of carnelian beads produced by Harappan artisans was obtained by:",
        "options": [
          "(a) Firing yellowish raw material and beads at various stages of production",
          "(b) Soaking the stone in vegetable dye",
          "(c) Applying red cinnabar powder",
          "(d) Painting with hematite iron ore"
        ],
        "answer": "(a) Firing yellowish raw material and beads at various stages of production",
        "explanation": "Archaeological experiments demonstrated that carnelian's vibrant red hue was obtained by firing the \nyellowish nodules of rock and unfinished beads at various stages of manufacturing."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which of the following materials was imported by the Harappans from Shortughai in northeastern \nAfghanistan?",
        "options": [
          "(a) Lapis lazuli",
          "(b) Carnelian",
          "(c) Copper",
          "(d) Steatite"
        ],
        "answer": "(a) Lapis lazuli",
        "explanation": "The Harappan outpost at Shortughai in Badakhshan (Afghanistan) was established near the most \nrevered source of lapis lazuli, a deep-blue precious stone."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "In Mesopotamian texts, which region is identified as the 'land of seafarers' and believed to refer to the \nHarappan region?",
        "options": [
          "(a) Meluhha",
          "(b) Dilmun",
          "(c) Magan",
          "(d) Ur"
        ],
        "answer": "(a) Meluhha",
        "explanation": "Cuneiform inscriptions from Mesopotamia mention trade contacts with Dilmun (Bahrain), Magan \n(Oman), and Meluhha (the Indus Valley region, termed the land of seafarers)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The lower denominations of weights used in the Harappan civilization followed which numbering \nsystem?",
        "options": [
          "(a) Binary (1, 2, 4, 8, 16, 32, up to 12,800)",
          "(b) Decimal",
          "(c) Hexadecimal",
          "(d) Duodecimal"
        ],
        "answer": "(a) Binary (1, 2, 4, 8, 16, 32, up to 12,800)",
        "explanation": "Harappan chert weights followed a binary system for lower denominations (1, 2, 4, 8, 16, 32... up to \n12,800) and the decimal system for higher denominations."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Which Director General of ASI brought military precision to archaeology and insisted on following the \nstratigraphy of mounds rather than horizontal digging?",
        "options": [
          "(a) R.E.M. Wheeler",
          "(b) John Marshall",
          "(c) Alexander Cunningham",
          "(d) George Dales"
        ],
        "answer": "(a) R.E.M. Wheeler",
        "explanation": "R.E.M. Wheeler, taking over as DG of ASI in 1944, recognized the fatal flaw in Marshall's horizontal unit \nexcavation and revolutionized Indian archaeology by excavating along stratigraphic layers."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The Great Bath and a massive Warehouse (granary) are prominent public structures located on the \nCitadel of:",
        "options": [
          "(a) Mohenjodaro",
          "(b) Lothal",
          "(c) Kalibangan",
          "(d) Harappa"
        ],
        "answer": "(a) Mohenjodaro",
        "explanation": "The Great Bath, an elite ritual bathing complex lined with gypsum mortar, and the monumental \nWarehouse brick base are both situated on the Citadel of Mohenjodaro."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following was a coastal Harappan settlement specialized in manufacturing shell objects \nlike bangles, ladles, and inlays?",
        "options": [
          "(a) Nageshwar and Balakot",
          "(b) Banawali",
          "(c) Kalibangan",
          "(d) Rakhigarhi"
        ],
        "answer": "(a) Nageshwar and Balakot",
        "explanation": "Both Nageshwar (Gujarat) and Balakot (Pakistan) were coastal settlements located near marine shell \nresources, serving as specialized manufacturing hubs for shell artefacts."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is unique about the Harappan script?",
        "options": [
          "(a) It remains undeciphered, was written right to left, and contains between 375 and 400 signs",
          "(b) It is written left to right in alphabetical Brahmi",
          "(c) It consists of vowels only",
          "(d) It was borrowed directly from Egyptian hieroglyphics"
        ],
        "answer": "(a) It remains undeciphered, was written right to left, and contains between 375\nand 400 signs",
        "explanation": "The Harappan script is logo-syllabic, written from right to left (evidenced by wider spacing on the right \nand cramping on the left), containing 375-400 distinct signs, and remains undeciphered."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The standardized ratio of Harappan baked bricks across all settlements in terms of thickness, \nbreadth, and length was:",
        "options": [
          "(a) 1 : 2 : 4",
          "(b) 1 : 3 : 5",
          "(c) 2 : 3 : 4",
          "(d) 1 : 1 : 2"
        ],
        "answer": "(a) 1 : 2 : 4",
        "explanation": "Harappan bricks, whether sun-dried or baked, conformed to a standard ratio: thickness was 1 unit, \nbreadth was twice the thickness (2 units), and length was 4 times the thickness (4 units), i.e., 1:2:4."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following is an example of a utilitarian artefact used in daily life by Harappans, as \nclassified by archaeologists?",
        "options": [
          "(a) Querns and pottery",
          "(b) Miniature faience perfume pots",
          "(c) Gold jewelry",
          "(d) Jasper beads with micro-holes"
        ],
        "answer": "(a) Querns and pottery",
        "explanation": "Archaeologists classify daily domestic tools made of ordinary clay or stone (saddle querns, pottery, \nneedles, flesh-rubbers) as utilitarian, in contrast to non-utilitarian luxury goods of faience or gold."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Terracotta models of the plough have been discovered at which Harappan sites?",
        "options": [
          "(a) Cholistan and Banawali",
          "(b) Lothal and Dholavira",
          "(c) Mohenjodaro and Kot Diji",
          "(d) Chanhudaro and Sutkagendor"
        ],
        "answer": "(a) Cholistan and Banawali",
        "explanation": "Terracotta models of agricultural ploughs have been unearthed at sites in Cholistan (the desert tract \nadjoining the Thar) and at Banawali in Haryana."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The Khetri region of Rajasthan was known in Harappan times as an important indigenous source of:",
        "options": [
          "(a) Copper",
          "(b) Gold",
          "(c) Tin",
          "(d) Silver"
        ],
        "answer": "(a) Copper",
        "explanation": "Harappans procured copper from the Khetri region in Rajasthan through trade with the local indigenous \nGaneshwar-Jodhpura culture."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "In 1924, who officially announced the discovery of the Indus Valley Civilisation to the entire world?",
        "options": [
          "(a) John Marshall",
          "(b) Alexander Cunningham",
          "(c) Daya Ram Sahni",
          "(d) Rakhal Das Banerji"
        ],
        "answer": "(a) John Marshall",
        "explanation": "John Marshall, Director General of the ASI, made the momentous announcement in 1924 in the \nIllustrated London News, marking India's entry into the league of the world's oldest civilisations."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What archaeological evidence indicates that Harappan households prioritized domestic privacy in the \nLower Town of Mohenjodaro?",
        "options": [
          "(a) There were no windows in the ground-floor walls and main entrances did not give a direct view of the interior courtyard",
          "(b) Houses had high fort walls surrounding each family unit",
          "(c) Entrances were built underground",
          "(d) Each house had only one single room"
        ],
        "answer": "(a) There were no windows in the ground-floor walls and main entrances did not\ngive a direct view of the interior courtyard",
        "explanation": "Privacy was preserved by designing ground-level exterior walls without windows and placing outer \nentrances in such an angle that passersby could not view the inner courtyard."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The total number of wells estimated to have existed across the city of Mohenjodaro is approximately:",
        "options": [
          "(a) 700",
          "(b) 100",
          "(c) 2000",
          "(d) 50"
        ],
        "answer": "(a) 700",
        "explanation": "Scholars estimate that Mohenjodaro alone had approximately 700 wells, many accessible from streets \nfor use by passersby."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which animal is depicted on the 'Pashupati' seal, surrounded by animals, which early archaeologists \nidentified as a 'Proto-Shiva' figure?",
        "options": [
          "(a) Elephant, tiger, rhinoceros, buffalo, and deer below the seat",
          "(b) Horse, lion, cow, and camel",
          "(c) Peacock, bull, and sheep",
          "(d) Dog, goat, and donkey"
        ],
        "answer": "(a) Elephant, tiger, rhinoceros, buffalo, and deer below the seat",
        "explanation": "The seated yogic figure on the famous seal is surrounded by an elephant, a tiger, a rhinoceros, and a \nwater buffalo, with two antelopes/deer depicted beneath his stool."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Why did Alexander Cunningham fail to grasp the historical antiquity of Harappa?",
        "options": [
          "(a) He relied on the travelogues of 4th-7th century CE Chinese Buddhist pilgrims to locate early settlements",
          "(b) He did not possess the seals recovered from the site",
          "(c) He believed Indian history began with the Mughals",
          "(d) Harappan bricks were hidden under deep ocean water"
        ],
        "answer": "(a) He relied on the travelogues of 4th-7th century CE Chinese Buddhist\npilgrims to locate early settlements",
        "explanation": "Cunningham believed Indian civilisation began with early historic cities in the Ganga valley (6th c. BCE) \nand attempted to fit Harappan artefacts into the timeline of Chinese pilgrims (Faxian, Xuanzang)."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following grains has NOT been commonly recovered from Harappan archaeological \nsites?",
        "options": [
          "(a) Wheat",
          "(b) Barley",
          "(c) Lentil",
          "(d) Rice (found very rarely)"
        ],
        "answer": "(d) Rice (found very rarely)",
        "explanation": "Grains found at Harappan sites include wheat, barley, lentil, chickpea, and sesame. Millets are found in \nGujarat, whereas finds of rice are exceedingly rare."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What kind of stone was the famous seated bearded 'Priest-King' sculpture of Mohenjodaro sculpted \nfrom?",
        "options": [
          "(a) Steatite",
          "(b) Sandstone",
          "(c) Terracotta",
          "(d) Marble"
        ],
        "answer": "(a) Steatite",
        "explanation": "The seated figure with an embroidered shawl across his left shoulder was carved out of soft white \nsteatite."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In which present-day Indian state is the site of Rakhigarhi situated?",
        "options": [
          "(a) Haryana",
          "(b) Punjab",
          "(c) Gujarat",
          "(d) Rajasthan"
        ],
        "answer": "(a) Haryana",
        "explanation": "Rakhigarhi, one of the largest Harappan metropolis sites, is located in the Hisar district of Haryana."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Traces of Harappan irrigation canals have been identified at which site in Afghanistan?",
        "options": [
          "(a) Shortughai",
          "(b) Mundigak",
          "(c) Manda",
          "(d) Kot Diji"
        ],
        "answer": "(a) Shortughai",
        "explanation": "Remains of ancient irrigation canals built by Harappans have been documented at Shortughai in \nnortheastern Afghanistan."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Harappans did not bury immense treasures or precious luxury goods with their \ndead.\nReason (R): Unlike ancient Egyptian pharaohs, Harappan socio-religious beliefs did not emphasize \ntaking massive wealth into the afterlife.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Harappan graves contain modest pots, copper mirrors, and shell ornaments \nrather than royal hoard hoards, reflecting modest funerary beliefs."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Alexander Cunningham missed the historical significance of the Harappan seal given \nto him by an Englishman.\nReason (R): Cunningham assumed that Indian civilizational history originated only in the 6th century \nBCE in the Ganga valley.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Cunningham's preconception that urban civilization began with the Ganga valley \ncities blinded him to the 3rd millennium BCE antiquity of the Harappan seal."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The streets and drainage channels of the Lower Town at Mohenjodaro were laid out on \na planned grid pattern.\nReason (R): It appears that streets with drains were planned and laid out first, and houses were built \nalongside them.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The grid pattern required every house to have at least one wall touching a street \ndrain, indicating civic master planning preceded residential construction."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The Harappan civilization witnessed an abrupt collapse across all regions in 1800 BCE \ndue to an Aryan military invasion.\nReason (R): Archaeological excavations show uniform destruction layers across all mature Harappan \nsettlements.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. The 'Aryan invasion' theory proposed by Wheeler was refuted by modern \narchaeologists. The decline was gradual and uneven, caused by ecological degradation, river course \nshifts, and drying of water sources."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The Citadel at Harappan settlements was physically separated from the Lower Town by \nhigh mud-brick walls and elevated platforms.\nReason (R): Buildings on the Citadel were constructed for specialized public rituals and \nadministrative functions.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The Citadel was built on massive platforms and enclosed by walls to separate \nelite civic and ritual spaces (Great Bath, Warehouse) from daily residential quarters."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Describe the unique features of the domestic architecture of the Lower Town at Mohenjodaro with \nspecial reference to courtyard and privacy.",
        "options": null,
        "answer": "Domestic architecture features in Mohenjodaro",
        "explanation": "1. Courtyard as Hub [1 Mark] : The residential houses were centered on a central courtyard, around \nwhich rooms were arranged. The courtyard served as the nucleus for activities like cooking and \nweaving, especially during warm weather.\n2. Concern for Privacy [1 Mark] : There were no windows in the ground-floor walls facing streets, \npreventing outsiders from looking inside. Furthermore, the main entrance was oriented so that it did not \nafford a direct view of the interior courtyard.\n3. Sanitation & Bathrooms [1 Mark] : Every house had its own paved bathroom made of bricks, with a \ndrain connected through the wall to the main street sewer, and many had dedicated staircases leading \nto upper storeys or flat roofs."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain the architectural features of the Great Bath situated on the Citadel of Mohenjodaro.",
        "options": null,
        "answer": "Architectural features of the Great Bath",
        "explanation": "1. Layout and Construction [1 Mark] : It was a large rectangular tank situated in an open courtyard, \nsurrounded by corridors on all four sides. Steps on the north and south led down into the tank.\n2. Waterproofing [1 Mark] : The tank was made watertight by setting bricks on edge and using a thick \nlining of gypsum mortar along with bitumen.\n3. Rooms and Drainage [1 Mark] : Rooms were built on three sides (one of which contained a large well). \nWater from the tank emptied into a massive corbelled brick drain culvert, indicating its use for special \npublic ritual baths."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did Harappan craftspersons procure raw materials for craft production? Mention any three \nexternal regions and the resources obtained.",
        "options": null,
        "answer": "Procurement strategies of Harappan craftspersons",
        "explanation": "1. Establishment of Settlements [1 Mark] : Harappans established settlements near resource points, \nsuch as Nageshwar and Balakot (for marine shells) and Shortughai in Afghanistan (for lapis lazuli).\n2. Expeditions to Indigenous Pockets [1 Mark] : They sent trade expeditions to regions like the Khetri \ncopper belt in Rajasthan (procuring copper from Ganeshwar-Jodhpura culture) and to South India (for \nprocuring gold).\n3. Long-Distance Maritime Trade [1 Mark] : They traded with Oman for copper (containing traces of \nnickel) and Meluhha (Mesopotamian trade contacts) for carnelian, lapis lazuli, and exotic woods."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Mention any three methods used by archaeologists to track socio-economic differences among the \nHarappans.",
        "options": null,
        "answer": "Methods to track socio-economic differences",
        "explanation": "1. Study of Burials [1 Mark] : Examining funerary pits for variations in construction (some lined with \nbricks) and grave goods (simple earthenware vs expensive copper ornaments and jewelry).\n2. Classification of Artefacts into Utilitarian vs Luxury [1 Mark] : Distinguishing everyday items made of \ncommon clay/stone (querns, pottery, needles) from rare luxury goods made of non-local materials \n(faience pots, gold beads).\n3. Settlement Spatial Analysis [1 Mark] : Examining differences in house sizes, number of rooms, and \nlocation (Citadel vs Lower Town quarters)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "What were the chief characteristics of Harappan seals and the Harappan script?",
        "options": null,
        "answer": "Characteristics of Harappan seals and script",
        "explanation": "1. Seals [1 Mark] : Made predominantly of steatite, usually square or rectangular, engraved with animal \nmotifs (unicorn, humpback bull, elephant) and signs in an undeciphered script.\n2. Script Direction and Signs [1 Mark] : Written from right to left (proven by cramped lettering on the left \nmargin); contained between 375 and 400 signs.\n3. Nature of Script [1 Mark] : It was logo-syllabic (non-alphabetical) where each symbol represented a \nsyllable or word, found on copper tablets, rim of jars, terracotta seals, and signboards (Dholavira)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "Discuss the archaeological evidence of agricultural technologies employed by the Harappan \ncivilisation.",
        "options": null,
        "answer": "Evidence of Harappan agricultural technology",
        "explanation": "1. Ploughed Fields [1 Mark] : Kalibangan in Rajasthan revealed Early Harappan furrows crossing at right \nangles, proving the use of oxen-drawn wooden ploughs for two simultaneous crops.\n2. Terracotta Models [1 Mark] : Terracotta models of the plough have been discovered at Banawali \n(Haryana) and Cholistan.\n3. Irrigation Networks [1 Mark] : Canals were discovered at Shortughai (Afghanistan), stone reservoirs at \nDholavira (Gujarat) to store rainwater, and wells across settlements for manual watering."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Describe the drainage system of the Harappan cities. Why did Ernest Mackay call it 'the most \ncomplete ancient system'?",
        "options": null,
        "answer": "Harappan drainage system details",
        "explanation": "1. Grid Layout [1 Mark] : Streets and drains were planned along a grid intersecting at right angles, \nrunning parallel to roadways.\n2. Covered Channels and Manholes [1 Mark] : Drains were constructed of brick-on-edge, corbelled with \nbrick slabs or limestone covers that could be lifted for periodic cleaning.\n3. Connection to Houses [1 Mark] : Domestic wastewater flowed through walls into street drains \nequipped with sumps/soak pits to prevent blockages, reflecting unmatched public health engineering."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Explain the role of bead-making at Chanhudaro, highlighting the materials and techniques used.",
        "options": null,
        "answer": "Bead-making at Chanhudaro",
        "explanation": "1. Variety of Materials [1 Mark] : Stones (carnelian, jasper, crystal, quartz, steatite), metals (copper, \nbronze, gold), and synthetic substances (shell, faience, terracotta).\n2. Manufacturing Techniques [1 Mark] : Steatite powder paste was molded into beads; hard stones were \nchipped into rough shapes, fired to produce red carnelian, flaked, ground, polished, and drilled.\n3. Specialized Drills [1 Mark] : Specialized micro-drills found at Chanhudaro, Lothal, and Dholavira \nenabled precision perforations for stringing."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What problems did early archaeologists face when trying to reconstruct religious practices of the \nHarappans?",
        "options": null,
        "answer": "Problems in interpreting Harappan religious practices",
        "explanation": "1. Assumption from Unusual Objects [1 Mark] : Early scholars assumed unusual or unfamiliar artefacts \nhad religious meaning, such as terracotta female figurines labeled as 'Mother Goddesses'.\n2. 'Priest-King' & Temples [1 Mark] : A seated stone figure was dubbed 'Priest-King' through parallels \nwith Mesopotamia, though no identifiable Harappan palaces or temples were found.\n3. Proto-Shiva Dilemma [1 Mark] : Seals with a horned yogic figure surrounded by animals were \nidentified with 'Proto-Shiva', yet the Rigvedic Rudra is not described as a yogi or Pashupati, making \nretrospective analogies speculative."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "What factors are attributed to the decline and final collapse of the Mature Harappan Civilisation by c. \n1800 BCE?",
        "options": null,
        "answer": "Factors behind Harappan decline",
        "explanation": "1. Environmental & Climatic Changes [1 Mark] : Long-term climatic shifts, severe droughts, and \ndeforestation caused by fuel demands for baking millions of bricks and metallurgy.\n2. Hydrological Disruptions [1 Mark] : Excessive flooding or shifting/drying up of major river systems \nlike the Ghaggar-Hakra network.\n3. Breakdown of Central Authority [1 Mark] : Disappearance of uniform seals, weights, standardized \nbricks, and urban planning points to the collapse of the overarching state apparatus rather than a single \nsudden cataclysm."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "'The town planning and municipal drainage system of Mohenjodaro reflect an extraordinary level of \ncivic organization.' Elucidate this statement with reference to the Citadel, the Lower Town, streets, \nand sanitation engineering.",
        "options": null,
        "answer": "Town planning and drainage of Mohenjodaro",
        "explanation": "Marking Scheme (8 Marks total):\n1. Division of Settlement (2 Marks):\n- The settlement was segregated into two distinct parts: the Citadel (smaller, built on high mud-brick \nplatforms to the west) and the Lower Town (larger, residential, to the east). Both were walled.\n2. Planned Construction and Bricks (2 Marks):\n- Platforms served as foundations, indicating planning preceded building. All structures utilized \nstandardized baked and sun-dried bricks in a 1:2:4 ratio across the city.\n3. Streets and Drainage Grid (2 Marks):\n- Streets were aligned on a north-south and east-west grid, intersecting at right angles. Drains were \nconstructed along the roads using mortared bricks covered with loose slabs for desilting. Sump pits \ncollected solid waste.\n4. Residential Houses & Sanitation (2 Marks):\n- Every home had a paved bathing room connected to street drains, courtyards for communal living, \nstairways to upper floors, and well-designed exterior walls with no windows for privacy."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the strategies adopted by Harappans to produce artisanal crafts and procure raw materials \nfrom domestic and distant lands.",
        "options": null,
        "answer": "Craft production and procurement strategies",
        "explanation": "Marking Scheme (8 Marks total):\n1. Craft Specialization at Sites (2 Marks):\n- Centers like Chanhudaro and Lothal were dedicated to bead-making, shell-working, metal casting, seal \nengraving, and weight production using sophisticated tools.\n2. Raw Material Range (2 Marks):\n- Minerals included carnelian, jasper, steatite, copper, bronze, gold, lapis lazuli, shell, and faience. \nHeating techniques turned yellowish rock into red carnelian.\n3. Domestic Procurement Strategies (2 Marks):\n- Harappans established settlements near resources: Nageshwar and Balakot (shells), Shortughai (lapis \nlazuli), and sent expeditions to Khetri (Rajasthan) for copper and South India for gold.\n4. Distant External Trade Networks (2 Marks):\n- Maritime trade with Oman (Magan) for copper with nickel traces; links with Mesopotamia (Meluhha) \nevidenced by seals, weights, carnelian beads, and cuneiform references to Meluhha as a land of \nseafarers."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the archaeological debates regarding the nature of political authority in the Harappan \ncivilization. Was there a single ruler, multiple kings, or no centralized state?",
        "options": null,
        "answer": "Debates on Harappan political authority",
        "explanation": "Marking Scheme (8 Marks total):\n1. Uniformity as Evidence of Authority (2.5 Marks):\n- Extraordinary standardization in brick sizes (1:2:4), planned settlements across thousands of \nkilometers, identical weight systems, and uniform layout of drainage suggest strong centralized \ngovernance.\n2. Three Major Archaeological Hypotheses (3.5 Marks):\n- Opinion 1: No single ruler; society enjoyed equal democratic status (unlikely given large public work \nmobilizations).\n- Opinion 2: Multiple rulers; separate kings for Mohenjodaro, Harappa, Lothal, and Kalibangan.\n- Opinion 3 (Most Favored): A single unified state; supported by planned labor mobilization, uniform seal \nmotifs, standardized pottery, and identical town design.\n3. The 'Priest-King' Debate (2 Marks):\n- The stone sculpture named 'Priest-King' was an analogy drawn from Mesopotamian parallel, but no \nunambiguous palaces, tombs, or temples have been found in the Indus Valley."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source excerpt carefully and answer the questions that follow:\nSource: Evidence of an 'Invasion'?\n'Deadman Lane is a narrow alley, varying from 3 to 6 feet in width... At the point where the lane turns to the \nwestward, part of a skull and the bones of the thorax and upper arm of an adult were discovered... Sixteen \nskeletons of people with the ornaments that they were wearing when they died were found in 1925...'\n— From John Marshall, Mohenjodaro and the Indus Civilisation, 1931.\n(i) Name the archaeologist who originally excavated Deadman Lane and what did he find? (1 Mark)\n(ii) How did R.E.M. Wheeler interpret these skeletal remains in 1946? (1 Mark)\n(iii) Why did later scholars like George Dales reject the 'massacre / invasion' theory? (2 Marks)",
        "options": null,
        "answer": "Solutions for Source-Based Question on Deadman Lane",
        "explanation": "Marking Scheme:\n(i) Excavation Details [1 Mark] : Excavated under John Marshall / Ernest Mackay at Mohenjodaro; they \nfound 16 skeletal remains in cramped alleyways with ornaments still on them.\n(ii) Wheeler's Interpretation [1 Mark] : Wheeler cited the Rigvedic god Indra as 'Purandara' (fort-\ndestroyer) and concluded that the Aryan invasion violently sacked Mohenjodaro.\n(iii) Modern Refutation [2 Marks] : George Dales demonstrated that the skeletons belonged to different \nstratigraphic periods, showed no weapon wound marks, and were scattered burials rather than a single \nbattlefield massacre."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source excerpt carefully and answer the questions that follow:\nSource: The Most Ancient System Yet Discovered\n'It is certainly the most complete ancient system as yet discovered. Every house was connected to the \nstreet drains. The main channels were made of brick set in mortar and were covered with loose bricks that \ncould be removed for cleaning. In some cases, limestone was used for the covers...'\n— From Ernest Mackay, Early Indus Civilisations, 1948.\n(i) Why was loose brick or limestone used to cover the drainage channels? (1 Mark)\n(ii) How was waste water from domestic bathrooms funneled into the streets? (1 Mark)\n(iii) Explain two reasons why this municipal system is considered revolutionary for the Bronze Age \nworld. (2 Marks)",
        "options": null,
        "answer": "Solutions for Source-Based Question on Drainage",
        "explanation": "Marking Scheme:\n(i) Maintenance Feature [1 Mark] : Loose bricks and limestone slabs were deliberately not cemented so \nmunicipal workers could lift them easily to clear silt and blockages.\n(ii) Domestic Connection [1 Mark] : Wastewater flowed through pipes in the house walls directly into \nstreet sewers, equipped with cesspools to trap solids.\n(iii) Revolutionary Bronze Age Engineering [2 Marks] :\n1. Planned before houses: Streets and drains were surveyed and laid first, ensuring strict hygiene \nstandards unknown in contemporary Egypt or Mesopotamia. [1 Mark]\n2. Universal public health focus: Even modest homes in the Lower Town were connected to the civic \ndrainage network. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Trace the history of the discovery of the Harappan Civilisation. Discuss the contributions and \nlimitations of Alexander Cunningham, John Marshall, and R.E.M. Wheeler.",
        "options": null,
        "answer": "History of discovery and archaeological pioneers",
        "explanation": "Marking Scheme (8 Marks total):\n1. Alexander Cunningham (2.5 Marks):\n- First DG of ASI. Collected Harappan seals but failed to recognize their 3rd millennium BCE antiquity \nbecause he relied on 4th-7th c. CE Chinese Buddhist pilgrim chronicles.\n2. John Marshall (3 Marks):\n- Announced discovery of Indus Valley Civilisation to the world in 1924 after Sahni and Banerji found \nidentical seals at Harappa and Mohenjodaro. Transformed India's historical antiquity by 2,000 years.\n- Limitation: Excavated along horizontal levels across mounds, ignoring stratigraphy, grouping artefacts \nfrom different epochs together.\n3. R.E.M. Wheeler (2.5 Marks):\n- Appointed DG in 1944; introduced scientific stratigraphy, excavating along natural soil layers rather \nthan arbitrary horizontal lines, rectifying Marshall's error."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Describe the subsistence strategies of the Harappans, detailing the plant products, animal resources, \nand agricultural methods revealed by archaeological excavations.",
        "options": null,
        "answer": "Harappan subsistence strategies",
        "explanation": "Marking Scheme (8 Marks total):\n1. Archaeobotanical Finds (2.5 Marks):\n- Grains discovered include wheat, barley, lentil, chickpea, and sesame. Millets found in Gujarat; rice \nfinds are very rare.\n2. Archaeozoological Finds (2.5 Marks):\n- Domesticated animal bones: cattle, sheep, goat, buffalo, and pig. Wild species bones (boar, deer, \ngharial) indicate hunting or foraging. Fish and fowl were also consumed.\n3. Agricultural Technology (3 Marks):\n- Oxen were used for ploughing (proven by seal depictions and terracotta models at Banawali).\n- Ploughed fields at Kalibangan showing two sets of furrows at right angles.\n- Canals at Shortughai and stone rainwater harvesting reservoirs at Dholavira provided irrigation."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source excerpt carefully and answer the questions:\nSource: How Artefacts are Identified\n'Recovering artefacts is just the beginning of the archaeological enterprise. Archaeologists then classify \ntheir finds. One simple principle of classification is in terms of material (stone, clay, metal, bone, ivory, etc.). \nThe second, and more complicated, is in terms of function...'\n(i) On what two major principles do archaeologists classify their finds? (1 Mark)\n(ii) How do archaeologists determine the function of an ancient artefact? (1 Mark)\n(iii) Mention two problems faced in identifying religious artefacts of the Harappans. (2 Marks)",
        "options": null,
        "answer": "Solutions for Source-Based Question on Artefact Classification",
        "explanation": "Marking Scheme:\n(i) Classification Principles [1 Mark] : By material (stone, clay, metal, bone) and by function (tool, \nweapon, ornament, ritual object).\n(ii) Determining Function [1 Mark] : By studying resemblance to present-day objects (querns, pots, \nbeads) and the contextual location where it was discovered (house, drain, grave).\n(iii) Religious Interpretation Problems [2 Marks] :\n1. Projecting present beliefs onto ancient symbols (e.g. interpreting a seal with a seated figure as Proto-\nShiva). [1 Mark]\n2. Assuming any unusual or ornate object (e.g. terracottas with heavy headdresses) was an idol of \nworship. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Explain the features of Harappan burials and craft luxury items. How do these help historians \nunderstand social and economic hierarchies in Harappan society?",
        "options": null,
        "answer": "Burials, luxuries, and social hierarchies",
        "explanation": "Marking Scheme (8 Marks total):\n1. Burial Practices (3 Marks):\n- Dead were placed in pits, sometimes lined with mud-bricks.\n- Pottery and ornaments were placed alongside, indicating belief in an afterlife.\n- Jewelry (shell rings, jasper beads) found in both male and female graves, but precious gold treasures \nwere rarely buried.\n2. Utilitarian vs Luxury Artefacts (3 Marks):\n- Utilitarian items: querns, pottery, needles, flesh-rubbers made of stone or clay, distributed uniformly \nacross all settlements.\n- Luxury items: rare objects made of non-local materials like faience pots, micro-steatite beads, and \ngold, concentrated in major metropolises (Mohenjodaro and Harappa) and rare in smaller settlements.\n3. Conclusion on Social Hierarchy (2 Marks):\n- Proves that while wealth inequality existed, Harappan elite did not hoard wealth in tombs, directing \nsurplus towards urban civic amenities instead."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "'The late Harappan period witnessed the transformation of an urban civilisation into rural cultures.' \nAnalyze the changes that took place in the material culture of the Indus region after 1800 BCE.",
        "options": null,
        "answer": "Transformation in Late Harappan period",
        "explanation": "Marking Scheme (8 Marks total):\n1. Abandonment of Cities (2 Marks):\n- Massive depopulation of major urban centers like Mohenjodaro and Harappa; migration eastward \ntoward Gujarat, Haryana, and western UP.\n2. Disappearance of Urban Markers (2 Marks):\n- Disappearance of distinctive seals, undeciphered script, specialized chert weights, and long-distance \ntrade goods like lapis lazuli.\n3. Deterioration of Architecture (2 Marks):\n- House construction declined; grand public structures were no longer built; drainage systems fell into \ndisuse; re-use of old bricks haphazardly.\n4. Emergence of Rural Cultures (2 Marks):\n- Reversion to localized, rural subsistence farming cultures (termed 'Late Harappan' or 'Successor \nCultures' like Cemetery H, Jhukar, and Ochre Coloured Pottery)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "book": "Themes in Indian History Part-I (Ancient India)",
      "title": "Kings, Farmers and Towns: Early States and Economies (c. 600 BCE - 600 CE)",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part I: Ancient India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Who deciphered the Brahmi and Kharosthi scripts used in earliest Indian inscriptions in the year \n1838?",
        "options": [
          "(a) James Prinsep",
          "(b) Alexander Cunningham",
          "(c) John Marshall",
          "(d) William Jones"
        ],
        "answer": "(a) James Prinsep",
        "explanation": "James Prinsep, an officer in the mint of the East India Company, deciphered Brahmi and Kharosthi in \n1838, unlocking the edicts of Emperor Ashoka."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which ancient Mahajanapada emerged as the most powerful state between the 6th and 4th centuries \nBCE?",
        "options": [
          "(a) Magadha",
          "(b) Kosala",
          "(c) Vatsa",
          "(d) Avanti"
        ],
        "answer": "(a) Magadha",
        "explanation": "Magadha (in present-day Bihar) became the most dominant Mahajanapada due to agricultural \nproductivity, rich iron ore deposits, elephant resources, and strategic riverine routes."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The Prayag Prashasti (Allahabad Pillar Inscription), eulogizing Emperor Samudragupta, was \ncomposed in Sanskrit by his court poet:",
        "options": [
          "(a) Harishena",
          "(b) Kalidasa",
          "(c) Banabhatta",
          "(d) Ravikirti"
        ],
        "answer": "(a) Harishena",
        "explanation": "Harishena, the court poet (sandhivigrahika) of Samudragupta, composed the famous Prayag Prashasti \nin ornate Sanskrit Kavya style on the Ashokan pillar at Allahabad."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following dynasties issued the first gold coins in India during the first century CE?",
        "options": [
          "(a) Kushanas",
          "(b) Guptas",
          "(c) Mauryas",
          "(d) Indo-Greeks"
        ],
        "answer": "(a) Kushanas",
        "explanation": "The Kushana rulers issued the earliest gold coins in India around the 1st century CE, matching the \nweight standards of contemporary Roman and Parthian coins."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What title did the Kushana rulers adopt, inspired by Chinese emperors, to project divine status?",
        "options": [
          "(a) Devaputra",
          "(b) Piyadassi",
          "(c) Maharajadhiraja",
          "(d) Chakravartin"
        ],
        "answer": "(a) Devaputra",
        "explanation": "Kushana rulers claimed high divine status by adopting the title 'Devaputra' ('Son of God'), possibly \ninfluenced by Chinese rulers who called themselves Sons of Heaven."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "According to Megasthenes, how many sub-committees were formed within the committee \ncoordinating military activities in the Mauryan administration?",
        "options": [
          "(a) 6",
          "(b) 5",
          "(c) 4",
          "(d) 8"
        ],
        "answer": "(a) 6",
        "explanation": "Megasthenes described a committee of thirty members with six sub-committees of five members each, \noverseeing navy, transport/provisions, infantry, cavalry, chariots, and war elephants."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "An 'Agrahara' in ancient India referred to:",
        "options": [
          "(a) Land granted to a Brahmana, usually exempt from paying land revenue",
          "(b) Land reserved exclusively for royal pasture",
          "(c) Land donated to a Buddhist monastery",
          "(d) A fortified border outpost"
        ],
        "answer": "(a) Land granted to a Brahmana, usually exempt from paying land revenue",
        "explanation": "An agrahara was land endowed to a Brahmana, who was usually exempted from paying king's taxes and \ngiven the right to collect local dues from the cultivators."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which rock inscription in Junagadh, Gujarat records the repair of the Sudarshana Lake by the Shaka \nruler Rudradaman in the 2nd century CE?",
        "options": [
          "(a) Junagadh Rock Inscription",
          "(b) Mehrauli Pillar Inscription",
          "(c) Aihole Inscription",
          "(d) Rummindei Pillar"
        ],
        "answer": "(a) Junagadh Rock Inscription",
        "explanation": "The famous Sanskrit rock inscription of Shaka Mahakshatrapa Rudradaman at Junagadh mentions the \nconstruction of the embankment under Chandragupta Maurya and its repair by Rudradaman without \nlevying taxes."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "In early Tamil Sangam literature, large landowners were known as:",
        "options": [
          "(a) Vellalar",
          "(b) Uzhavar",
          "(c) Adimai",
          "(d) Gahapati"
        ],
        "answer": "(a) Vellalar",
        "explanation": "Sangam texts differentiate rural society into Vellalar (large landowners), Uzhavar (ordinary ploughmen), \nand Adimai (landless labourers/slaves)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Who was Prabhavati Gupta?",
        "options": [
          "(a) Daughter of Chandragupta II, married into the Vakataka dynasty of the Deccan",
          "(b) Queen of Ashoka who erected the queen's edict",
          "(c) Sister of Harshavardhana",
          "(d) Mother of Samudragupta"
        ],
        "answer": "(a) Daughter of Chandragupta II, married into the Vakataka dynasty of the\nDeccan",
        "explanation": "Prabhavati Gupta was the daughter of the Gupta emperor Chandragupta II and queen of the Vakataka \nruler Rudrasena II, known for exercising independent land-granting authority."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The first coins bearing the names and images of rulers were issued in northwestern India by the:",
        "options": [
          "(a) Indo-Greeks",
          "(b) Kushanas",
          "(c) Shakas",
          "(d) Guptas"
        ],
        "answer": "(a) Indo-Greeks",
        "explanation": "The Indo-Greeks, who established control over northwestern India in the 2nd century BCE, were the first \nto issue coins featuring the portraits and names of monarchs."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What does the Pali word 'Gahapati' designate in ancient texts?",
        "options": [
          "(a) The owner, master, or head of a household, also used to denote wealthy urban merchants and landholders",
          "(b) A Buddhist monk who traveled across villages",
          "(c) A royal tax collector appointed by the king",
          "(d) A commander of the elephant corps"
        ],
        "answer": "(a) The owner, master, or head of a household, also used to denote wealthy\nurban merchants and landholders",
        "explanation": "A gahapati was the master/head of a household who exercised control over women, children, and \nresources, frequently referring to prosperous rural landholders."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following was NOT one of the five major political centers of the Mauryan Empire \nmentioned in Ashokan edicts?",
        "options": [
          "(a) Mathura",
          "(b) Taxila",
          "(c) Ujjayini",
          "(d) Suvarnagiri"
        ],
        "answer": "(a) Mathura",
        "explanation": "The 5 major Mauryan administrative centers were the capital Pataliputra and 4 provincial capitals: \nTaxila, Ujjayini, Tosali, and Suvarnagiri."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which ancient Jataka tale describes the plight of subjects under a wicked, oppressive king who fled \nto the forests?",
        "options": [
          "(a) Gandatindu Jataka",
          "(b) Mahajanaka Jataka",
          "(c) Vessantara Jataka",
          "(d) Ruru Jataka"
        ],
        "answer": "(a) Gandatindu Jataka",
        "explanation": "The Gandatindu Jataka vividly depicts how an evil king's excessive tax demands caused villagers to \nabandon their homes and flee to the forests to live like wild animals."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What is the epigraphical study of ancient inscriptions called?",
        "options": [
          "(a) Epigraphy",
          "(b) Numismatics",
          "(c) Paleography",
          "(d) Archaeology"
        ],
        "answer": "(a) Epigraphy",
        "explanation": "The study and decipherment of inscriptions engraved on stone, metal, or pottery is known as Epigraphy \n(while paleography is the study of ancient handwriting)."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which region was termed as 'Tamilakam' in early historical times?",
        "options": [
          "(a) Parts of present-day Andhra Pradesh, Kerala, and Tamil Nadu",
          "(b) Only the Kaveri delta",
          "(c) The entire Deccan plateau",
          "(d) Sri Lanka and Maldives"
        ],
        "answer": "(a) Parts of present-day Andhra Pradesh, Kerala, and Tamil Nadu",
        "explanation": "Tamilakam encompassed the ancient Tamil country including parts of modern Tamil Nadu, Kerala, and \nsouthern Andhra Pradesh, ruled by Cholas, Cheras, and Pandyas."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which tribal republic of Punjab and Haryana issued thousands of copper coins in the 1st century CE?",
        "options": [
          "(a) Yaudheyas",
          "(b) Malavas",
          "(c) Lichchhavis",
          "(d) Sakyas"
        ],
        "answer": "(a) Yaudheyas",
        "explanation": "The Yaudheyas, a warrior tribal republic of Punjab and Haryana, minted thousands of copper coins \nbearing images of Kartikeya and expressing their commercial autonomy."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Special officers appointed by Ashoka to disseminate the message of Dhamma across his empire \nwere known as:",
        "options": [
          "(a) Dhamma Mahamattas",
          "(b) Rajukas",
          "(c) Yuktas",
          "(d) Samahartas"
        ],
        "answer": "(a) Dhamma Mahamattas",
        "explanation": "Ashoka created a specialized cadre of officers called Dhamma Mahamattas charged specifically with \ntraveling, teaching, and propagating Dhamma."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The capital of Magadha before it was shifted to Pataliputra in the 4th century BCE was:",
        "options": [
          "(a) Rajagriha",
          "(b) Vaishali",
          "(c) Varanasi",
          "(d) Champa"
        ],
        "answer": "(a) Rajagriha",
        "explanation": "The early capital of Magadha was Rajagriha ('house of the king'), a fortified settlement surrounded by \nrugged hills, before moving to riverine Pataliputra."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which Greek ambassador visited the court of Chandragupta Maurya and authored the account titled \n'Indica'?",
        "options": [
          "(a) Megasthenes",
          "(b) Deimachus",
          "(c) Dionysius",
          "(d) Ptolemy"
        ],
        "answer": "(a) Megasthenes",
        "explanation": "Megasthenes was sent by Seleucus Nicator to the court of Chandragupta Maurya at Pataliputra and \nrecorded detailed observations of the Mauryan empire in his book Indica."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Guilds or organizations of craftspersons and merchants in ancient urban cities were known as:",
        "options": [
          "(a) Shrenis",
          "(b) Samitis",
          "(c) Sabhas",
          "(d) Parishads"
        ],
        "answer": "(a) Shrenis",
        "explanation": "Shrenis were powerful corporate organizations or guilds of artisans and merchants that procured raw \nmaterials, regulated production, and marketed finished goods."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Why did the Gupta Empire issue remarkably pure gold coins in large quantities?",
        "options": [
          "(a) To facilitate thriving long-distance maritime and overland trade transactions",
          "(b) Because silver was completely unavailable",
          "(c) To pay war indemnities to Romans",
          "(d) Purely for religious temple donations"
        ],
        "answer": "(a) To facilitate thriving long-distance maritime and overland trade\ntransactions",
        "explanation": "The Guptas issued the most magnificent and pure gold coins (dinaras) reflecting prosperous economic \nnetworks, vibrant trade, and imperial authority."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What is a 'Votive Inscription'?",
        "options": [
          "(a) An inscription recording gifts and donations made to religious institutions or ascetics",
          "(b) An edict announcing royal conquests",
          "(c) An inscription recording land revenue tax rates",
          "(d) A treaty between two sovereign kings"
        ],
        "answer": "(a) An inscription recording gifts and donations made to religious institutions\nor ascetics",
        "explanation": "Votive inscriptions are short records inscribed on railings, pillars, or images documenting donations \nmade by ordinary donors (weavers, potters, carpenters, monks) to religious bodies."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which of the following was a coastal port town in South India that engaged in Roman maritime trade?",
        "options": [
          "(a) Puhar (Kaveripattinam)",
          "(b) Mathura",
          "(c) Ujjayini",
          "(d) Shravasti"
        ],
        "answer": "(a) Puhar (Kaveripattinam)",
        "explanation": "Puhar (Kaveripattinam) was a major coastal emporium of the Cholas in Tamilakam that conducted \nthriving overseas trade with the Roman world and Southeast Asia."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "What is the meaning of the Prakrit term 'Piyadassi' frequently associated with Ashoka in his \ninscriptions?",
        "options": [
          "(a) Pleasant to behold",
          "(b) Beloved of the Gods",
          "(c) Conqueror of Earth",
          "(d) King of Kings"
        ],
        "answer": "(a) Pleasant to behold",
        "explanation": "In Ashokan edicts, 'Devanampiya' translates to 'Beloved of the Gods' and 'Piyadassi' means 'pleasant to \nbehold'."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Magadha became the most powerful Mahajanapada in ancient northern India between \nthe 6th and 4th centuries BCE.\nReason (R): Magadha possessed rich agricultural lands, accessibility to iron mines for armaments, \nand abundant war elephants in its forested tracts.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Magadha's geographical location gave it distinct ecological and mineral \nadvantages that enabled kings like Bimbisara and Ajatasattu to overpower rival states."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Prabhavati Gupta, as a woman in ancient India, had independent legal access to land \nand donated an agrahara to a Brahmana.\nReason (R): According to Sanskrit Dharmashastric legal texts, women were granted complete \nindependent ownership of family ancestral land.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is true (her Danguna copper-plate inscription records land donation). Reason R is false \nbecause classical Dharmashastras prohibited women from possessing independent real estate; \nPrabhavati was an exceptional royal widow/regent."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): Epigraphists face significant limitations when reconstructing history solely from \ninscriptional records.\nReason (R): Inscriptions can be weathered, faint, damaged, and almost always present the subjective \nviewpoint of the ruling patrons who financed them.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Letters may be broken or eroded, decipherment of colloquial terms remains \nuncertain, and inscriptions ignore the daily lives, joys, and sorrows of ordinary commoners."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The Mauryan Empire established an identical, highly centralized administrative \nmachinery operating uniformly across its entire territory.\nReason (R): The empire spanned vast diverse terrains ranging from the forested hills of Odisha to the \nfrontier provinces of Afghanistan.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because administrative control was not uniform; it was strongest near the capital \nPataliputra and major provincial capitals (Taxila, Ujjayini), while outlying areas maintained local \nautonomy. Reason R is true."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Kushana rulers erected colossal stone statues of themselves in royal shrines \n(devakulas) at Mat near Mathura and in Afghanistan.\nReason (R): Kushana kings sought to claim divine status and present themselves as god-like \nsovereigns to legitimize their rule.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Placing royal portrait statues alongside divine icons in shrines was a deliberate \nstrategy of divine kingship adopted by Kushana monarchs like Kanishka."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Explain any three factors responsible for the rise of Magadha as the most powerful Mahajanapada \nbetween the 6th and 4th centuries BCE.",
        "options": null,
        "answer": "Factors behind the rise of Magadha",
        "explanation": "1. Agricultural Fertility [1 Mark] : The region around the Ganga and Son rivers was exceptionally fertile, \ngenerating regular agricultural surplus to feed a large standing army and urban populations.\n2. Mineral & Forest Resources [1 Mark] : Proximity to rich iron ore deposits in modern Jharkhand \nprovided raw materials for superior weapons and agricultural ploughshares. Surrounding forests \nsupplied timber and war elephants.\n3. Strategic Locations & Dynamic Kings [1 Mark] : Early capital Rajagriha was a natural hill fortress; later \ncapital Pataliputra commanded vital river routes. Ambitious rulers like Bimbisara, Ajatasattu, and the \nNandas pursued aggressive expansion."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the main principles of Ashoka's policy of 'Dhamma'.",
        "options": null,
        "answer": "Principles of Ashoka's Dhamma",
        "explanation": "1. Moral Conduct & Respect [1 Mark] : Reverence towards elders, parents, and teachers; gentle and \nhumane treatment of servants and slaves.\n2. Religious Tolerance & Harmony [1 Mark] : Respect for all religious sects, including Brahmanas and \nBuddhist/Jaina ascetics, refraining from praising one's own sect while disparaging others.\n3. Ahimsa & Compassion [1 Mark] : Non-violence towards all living beings, abstaining from animal \nslaughter, and welfare works such as digging wells, planting trees, and establishing hospitals."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did rulers of the Kushana dynasty project their divine status? Mention any three strategies.",
        "options": null,
        "answer": "Kushana strategies of divine kingship",
        "explanation": "1. Royal Titles [1 Mark] : They adopted the regal title 'Devaputra' ('Son of God'), claiming heavenly \nsanction akin to contemporary Chinese emperors.\n2. Colossal Statues in Shrines [1 Mark] : Monumental stone portrait sculptures of kings (such as \nKanishka) were installed in royal shrines (devakulas) at Mat near Mathura and Surkh Kotal in \nAfghanistan.\n3. Coin Iconography [1 Mark] : Their gold and copper coins depicted portraits of kings on one side and a \nhalo/nimbus around their heads, with deities from Indian, Greek, and Iranian pantheons on the reverse."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "What were the chief limitations of inscriptional evidence in historical reconstruction?",
        "options": null,
        "answer": "Limitations of inscriptional evidence",
        "explanation": "1. Physical Deterioration [1 Mark] : Inscriptions are often damaged, eroded, weathered, or broken, \nleaving faint letters and missing words that hinder accurate reading.\n2. Ambiguity of Meaning [1 Mark] : Linguistic context and specific terms (such as royal titles or \nadministrative posts) cannot always be interpreted with complete certainty.\n3. Elite Bias & Silence on Commoners [1 Mark] : Inscriptions reflect the perspective, victories, and \npropaganda of wealthy rulers and patrons; daily struggles, agriculture, and ordinary folk remain \nunrecorded."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Explain the role of 'Shrenis' (guilds) in the urban economy of the early historic period.",
        "options": null,
        "answer": "Role of Shrenis in early historic economy",
        "explanation": "1. Economic Organization [1 Mark] : Shrenis were collective organizations of craftspersons (weavers, \npotters, ivory carvers) and merchants that procured raw materials and standardized production.\n2. Financial & Banking Role [1 Mark] : They operated as banks, accepting deposits from kings, \nmerchants, and commoners, lending capital at interest, and endowing temples/monasteries.\n3. Socio-Political Influence [1 Mark] : Shrenis had their own customary laws, maintained their own \nsecurity guards, and held significant advisory influence in municipal and royal courts."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "How did agricultural production increase between 6th century BCE and 6th century CE? Mention three \nstrategies.",
        "options": null,
        "answer": "Strategies for increasing agricultural output",
        "explanation": "1. Spread of Iron Ploughshares [1 Mark] : In fertile alluvial zones like the Ganga and Kaveri valleys, heavy \niron-tipped ploughshares replaced wooden ones, turning deep fertile soil.\n2. Paddy Transplantation [1 Mark] : The technique of raising paddy saplings in nursery beds and \ntransplanting them into flooded fields dramatically boosted crop yields (though requiring intensive \nlabor).\n3. Expansion of Irrigation [1 Mark] : Construction of irrigation wells, rainwater tanks, and canals \nundertaken collectively by villages and individually by kings (e.g. Sudarshana lake)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Discuss the significance of the Prayag Prashasti in understanding the Gupta administration and \ncharacter of Samudragupta.",
        "options": null,
        "answer": "Significance of Prayag Prashasti",
        "explanation": "1. Portrayal of Samudragupta [1 Mark] : Composed by Harishena, it depicts Samudragupta as a \nmajestic warrior, poet, musician (equaling Tumburu and Narada), and a god dwelling on earth (Purusha).\n2. Conquests & Diplomacy [1 Mark] : Classifies defeated rulers into categories: kings of Aryavarta \nviolently uprooted, forest kings made subservient, and rulers of Dakshinapatha restored to tribute-paying \nstatus.\n3. Sanskrit Literary Landmark [1 Mark] : Serves as an exceptional specimen of ornate classical Sanskrit \nKavya (Campu style, mixing prose and verse) of the 4th century CE."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Differentiate between an Oligarchy (Gana/Sangha) and a Monarchy in the 6th century BCE.",
        "options": null,
        "answer": "Oligarchy vs Monarchy",
        "explanation": "1. Distribution of Power [1 Mark] : In a monarchy, political power was concentrated in a single hereditary \nking; in an oligarchy (Gana/Sangha), power was shared collectively by a group of men, each styled 'raja'.\n2. Decision Making [1 Mark] : Monarchs ruled through royal ministers and imperial edicts, whereas \nGanas resolved political matters through assemblies, debates, and consensus.\n3. Historical Examples [1 Mark] : Magadha and Kosala were monarchies; the Vajji confederacy \n(Lichchhavis) and the Sakyas of Kapilavastu (to which the Buddha belonged) were oligarchies."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What does the Danguna copper-plate inscription tell us about Prabhavati Gupta and the legal status \nof women regarding land ownership?",
        "options": null,
        "answer": "Significance of Prabhavati Gupta's copper-plate",
        "explanation": "1. Royal Lineage and Donation [1 Mark] : The inscription details Prabhavati Gupta's high Gupta lineage \n(daughter of Chandragupta II) and records her donation of village Danguna to an Acharya named \nChanalasvamin.\n2. Violation of Classical Norms [1 Mark] : Classical Dharmashastras barred women from independent \nproperty rights; Prabhavati's gift shows that elite royal women or queens acting as regents could hold \nand donate land.\n3. Exemption Privileges [1 Mark] : The inscription lists extensive privileges granted to the village: \nimmunity from entry by royal soldiers and freedom from providing provisions to visiting royal officials."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Explain the significance of the introduction of coinage in the subcontinent from the 6th century BCE.",
        "options": null,
        "answer": "Significance of ancient coinage",
        "explanation": "1. Facilitating Trade [1 Mark] : Punch-marked silver and copper coins replaced barter, simplifying \ntransactions and accelerating regional and trans-continental commerce.\n2. Royal Authority and Identity [1 Mark] : Indo-Greeks and Kushanas introduced portrait coins with royal \nnames and divine symbols, transforming currency into imperial political propaganda.\n3. Economic Integration [1 Mark] : Widespread circulation of Roman and Kushana gold coins proves the \nvibrant inclusion of India in global maritime and overland Silk Route exchanges."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Examine the administrative system of the Mauryan Empire. Discuss the role of the capital, provincial \ncenters, military committees, and Ashoka's Dhamma in holding the vast empire together.",
        "options": null,
        "answer": "Comprehensive analysis of Mauryan administrative system",
        "explanation": "Marking Scheme (8 Marks total):\n1. Administrative Centers (2.5 Marks):\n- Centralized capital at Pataliputra and four major provincial seats: Taxila (northwestern gateway), \nUjjayini (commercial hub), Tosali (eastern coastal center), and Suvarnagiri (southern gold mines).\n- Administrative grip was tightest around the capital and provincial hubs; frontier and tribal areas \nretained local systems.\n2. Military Organization (2.5 Marks):\n- Megasthenes describes a military committee of 30 members with 6 specialized sub-committees:\n  (i) Navy, (ii) Transport and food provisions, (iii) Infantry, (iv) Cavalry, (v) War chariots, and (vi) War \nelephants.\n- Logistical arrangements included recruiting bullock carts, cooks, armorers, and medical assistants.\n3. Role of Ashoka's Dhamma (3 Marks):\n- Ashoka realized military force alone could not bind a diverse sub-continental empire.\n- Propagated universal ethical principles (Dhamma): religious tolerance, filial piety, compassion to \nslaves, and non-violence.\n- Appointed Dhamma Mahamattas to tour provinces, mediate disputes, and reinforce social cohesion."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Discuss the strategies of increasing agricultural production and examine the resulting social \ndisparities in rural society between c. 600 BCE and 600 CE.",
        "options": null,
        "answer": "Agricultural strategies and social differentiation",
        "explanation": "Marking Scheme (8 Marks total):\n1. Technological Strategies (3 Marks):\n- Iron ploughshares: Adopted widely in fertile river basins (Ganga, Kaveri), boosting crop yield.\n- Paddy transplantation: Replaced broadcasting of seeds, drastically multiplying rice output.\n- Artificial irrigation: Kings, wealthy landowners, and village collectives constructed wells, tanks, and \ndams (e.g. Sudarshana lake in Saurashtra).\n2. Growth of Social Disparities in Northern India (2.5 Marks):\n- Buddhist and Sanskrit texts classify rural society hierarchically:\n  - Large landholders and village headmen (Gahapati / Gramabhojaka): Exercised immense power over \nvillagers.\n  - Small peasants: Worked modest family farms.\n  - Landless agricultural laborers (Dasa-kammakara): Sunk in debt, poverty, and servitude.\n3. Rural Differentiation in Southern India (2.5 Marks):\n- Sangam literature categorizes southern society based on landholding:\n  - Vellalar: Large landed aristocracy controlling village affairs.\n  - Uzhavar: Intermediate ordinary ploughmen.\n  - Adimai: Enslaved laborers and landless workers subjected to exploitation."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "How do historians reconstruct the history of the Mauryas? Evaluate the diverse archaeological, \ninscriptional, and literary sources available.",
        "options": null,
        "answer": "Sources for reconstructing Mauryan history",
        "explanation": "Marking Scheme (8 Marks total):\n1. Ashokan Inscriptions (3 Marks):\n- First physical epigraphic records: Major rock edicts, minor rock edicts, and pillar edicts in Brahmi, \nKharosthi, Aramaic, and Greek.\n- Document royal policies, welfare measures, Kalinga war remorse, and Dhamma principles.\n2. Literary Accounts (3 Marks):\n- Megasthenes' Indica: Survives in Greek fragments; details court etiquette, municipal committees, caste \ndivisions, and military boards.\n- Kautilya's Arthashastra: Treatise on statecraft, espionage, tax collection, and diplomacy.\n- Puranas, Buddhist chronicles (Mahavamsa, Dipavamsa, Divyavadana), and Jaina texts providing \ndynastic chronologies.\n3. Material and Sculptural Artefacts (2 Marks):\n- Northern Black Polished Ware (NBPW) pottery, punch-marked coins, and polished sandstone Ashokan \npillars and lion capitals reflecting imperial aesthetic mastery."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following excerpt from the Prayag Prashasti carefully and answer the questions:\nSource: In Praise of Samudragupta\n'He was without an antagonist on earth; he, by the overflowing of the multitude of (his) many good qualities \nadorned by hundreds of good actions, has wiped off the fame of other kings with the soles of his feet; (he \nis) Purusha (the Supreme Being), being the cause of the prosperity of the good and the destruction of the \nbad; (he is) incomprehensible; (he is) one whose tender heart can be captured only by devotion and humility; \n(he is) possessed of compassion; (he is) the giver of many hundred-thousands of cows...'\n(i) Who composed this prashasti and in which language? (1 Mark)\n(ii) Mention any two divine qualities attributed to the king in this excerpt. (1 Mark)\n(iii) How does this inscription help historians assess the ideology of kingship in the Gupta period? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Prayag Prashasti Source Question",
        "explanation": "Marking Scheme:\n(i) Author and Language [1 Mark] : Composed by court poet Harishena in Sanskrit.\n(ii) Divine Attributes [1 Mark] : Portrayed as Purusha (the Supreme Being), incomprehensible, and the \narbiter of prosperity for the good and destruction for the evil.\n(iii) Ideology of Kingship [2 Marks] :\n1. Divine Legitimation: Kings claimed god-like status to command unconditional reverence from \nsubjects. [1 Mark]\n2. Ideal Ruler Concept: Blended fierce military prowess (vanquisher of enemies) with moral benevolence \n(compassionate donor, protector of Dharma). [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from an Ashokan inscription carefully:\nSource: The Anguish of the King\n'When king Devanampiya Piyadassi had been consecrated eight years, Kalinga was conquered. One hundred \nand fifty thousand were deported, a hundred thousand were slain, and many more died (from other causes). \nAfter that, now that Kalinga was taken, Devanampiya began to zealously protect Dhamma, have love for \nDhamma, and give instruction in Dhamma. This is the repentance of Devanampiya on account of his \nconquest of Kalinga...'\n(i) What names are used for Ashoka in this edict? (1 Mark)\n(ii) What was the immediate human cost of the Kalinga conquest mentioned in the source? (1 Mark)\n(iii) How did this war radically transform Ashoka's domestic and foreign policy? (2 Marks)",
        "options": null,
        "answer": "Solutions for Ashoka's Kalinga Edict Source Question",
        "explanation": "Marking Scheme:\n(i) Royal Titles [1 Mark] : 'Devanampiya' (Beloved of the Gods) and 'Piyadassi' (Pleasant to behold).\n(ii) Human Casualties [1 Mark] : 150,000 people captured/deported, 100,000 killed on the battlefield, \nand many more died from famine and disease.\n(iii) Policy Transformation [2 Marks] :\n1. Renunciation of Bherighosha (war drum) in favor of Dhammaghosha (conquest through \nrighteousness and moral persuasion). [1 Mark]\n2. Adoption of non-violence, patronage to Buddhist teachings, and appointing Dhamma Mahamattas for \nuniversal public welfare. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Trace the evolution of early Indian coinage from punch-marked coins to the Gupta period. How does \nnumismatic evidence reflect economic prosperity and political legitimacy?",
        "options": null,
        "answer": "Evolution of early Indian coinage",
        "explanation": "Marking Scheme (8 Marks total):\n1. Punch-Marked Coins (6th c. BCE onwards) (2 Marks):\n- Minted in silver and copper, stamped with distinct symbols (trees, hills, animals) by kings, oligarchies, \nand merchant guilds (shrenis).\n2. Indo-Greek Coinage (2nd c. BCE) (2 Marks):\n- Introduced portraits and names of reigning monarchs; bilingual inscriptions in Greek and Kharosthi; set \nstandards for aesthetic coinage.\n3. Kushana Coinage (1st c. CE) (2 Marks):\n- Minted India's first gold coins; matched Roman denarii in weight and purity; featured portraits of rulers \nwith halos alongside deities, projecting divine status.\n4. Gupta Gold Coinage (4th c. CE) (2 Marks):\n- Most magnificent gold coins (dinaras) showing emperors as archers, horsemen, veena players, and \nperforming Ashvamedha sacrifices, proving peak economic prosperity and cultural sophistication."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Discuss the features of the 16 Mahajanapadas. Why is the 6th century BCE regarded as a major \nturning point in early Indian history?",
        "options": null,
        "answer": "Features of Mahajanapadas and 6th c. BCE turning point",
        "explanation": "Marking Scheme (8 Marks total):\n1. Turning Point Characteristics of 6th Century BCE (3 Marks):\n- Second Urbanization: Re-emergence of cities in northern India after Harappa.\n- Extensive use of iron tools and weapons.\n- Introduction of metallic punch-marked coinage.\n- Proliferation of new philosophical heterodox movements (Buddhism, Jainism, Ajivikas) challenging \nVedic ritualism.\n2. General Features of the 16 Mahajanapadas (3 Marks):\n- Mentioned in Buddhist (Anguttara Nikaya) and Jaina (Bhagavati Sutra) texts (e.g. Magadha, Kosala, \nKuru, Gandhara, Avanti).\n- Most were monarchies governed by hereditary rulers; some were oligarchies (Ganas/Sanghas) ruled by \ncollective assemblies.\n- Each Mahajanapada had a fortified capital city requiring massive resources to maintain.\n3. Administration & Military (2 Marks):\n- Kings collected taxes (Bali, Bhaga) from farmers, traders, and artisans, maintaining standing armies \nrather than relying on tribal militias."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding land grants by Prabhavati Gupta and answer the questions:\nSource: Prabhavati Gupta and the Village of Danguna\n'Prabhavati Gupta ... commands the gramakutumbinas (householders/peasants) ... and others of the village \nof Danguna:\nBe it known to you that on the twelfth lunar day of the bright fortnight of Kartika, we have, in order to \nincrease our religious merit, donated this village with the pouring out of water to the Acharya \nChanalasvamin...'\n(i) To whom was the village of Danguna donated and on what occasion? (1 Mark)\n(ii) Which social category of people did the queen command in the village? (1 Mark)\n(iii) Why is this inscription considered an exceptional historical document? (2 Marks)",
        "options": null,
        "answer": "Solutions for Prabhavati Gupta Land Grant Source Question",
        "explanation": "Marking Scheme:\n(i) Grant Details [1 Mark] : Donated to Acharya Chanalasvamin on the 12th lunar day of Kartika bright \nfortnight with the pouring out of water.\n(ii) Addressees [1 Mark] : The gramakutumbinas (householders/peasants living in the village) and local \nBrahmanas.\n(iii) Exceptional Historical Document [2 Marks] :\n1. Proof that a royal woman held, alienated, and transferred land despite patriarchal Dharmashastric \nrestrictions. [1 Mark]\n2. Highlights the institutional mechanism of agrahara grants, transferring royal revenue rights to \nreligious elites. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Critically analyze the role of land grants (Agraharas) in early Indian socio-economic structure. What \nare the two contrasting views held by modern historians?",
        "options": null,
        "answer": "Analysis of land grants and historical debates",
        "explanation": "Marking Scheme (8 Marks total):\n1. Nature of Land Grants (3 Marks):\n- Recorded on copper plates (tamra-patra) or stone; granted by kings/queens to Brahmanas (Agrahara) \nor religious monasteries.\n- Conferred ownership, tax exemption, and rights to extract local revenues and judicial fines from \nresident peasants.\n2. View 1: Extension of Agriculture and State Power (2.5 Marks):\n- Land grants served as an effective state strategy to bring uncultivated frontier and forested lands \nunder settled plough agriculture.\n- Won the loyalty of influential religious elites to stabilize political authority in peripheral areas.\n3. View 2: Feudalization and Decline of Central Authority (2.5 Marks):\n- Weakening rulers surrendered sovereign political, judicial, and fiscal powers to local beneficiaries.\n- Created a hierarchy of intermediaries (samantas, feudal lords), reducing free cultivators to bonded \ntenants and leading to political fragmentation."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "'Between the 6th century BCE and 6th century CE, trade networks expanded both within and beyond \nthe Indian subcontinent.' Discuss the trade routes, merchandise, and participants involved in this \ncommercial expansion.",
        "options": null,
        "answer": "Trade networks, merchandise, and mercantile groups",
        "explanation": "Marking Scheme (8 Marks total):\n1. Domestic & Trans-Continental Routes (3 Marks):\n- Riverine routes: The Ganga and its tributaries provided connectivity across northern India.\n- Overland routes: The Uttarapatha connected Pataliputra to Taxila and onwards to the Silk Route into \nCentral Asia.\n- Maritime routes: Ports along the Arabian Sea (Bhrigukachchha/Bharuch) connected to Egypt, Rome, \nand the Persian Gulf; ports along the Bay of Bengal (Puhar, Tamralipti) connected to Southeast Asia and \nChina.\n2. Traded Merchandise (2.5 Marks):\n- Exports: Indian spices (black pepper demanded heavily in Rome as 'black gold'), fine textiles (muslin, \nsilk), ivory, pearls, medicinal plants, and iron/steel.\n- Imports: Roman gold and silver coins, Mediterranean wine, olive oil, and horses from Central Asia.\n3. Mercantile Participants (2.5 Marks):\n- Ranged from peddlers traveling on foot to wealthy seafarers (Masattuvan in Tamil, Setthis and \nSatthavahas in Prakrit).\n- Organized in powerful corporate guilds (Shrenis) capable of financing caravans and maintaining armed \nescorts."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "book": "Themes in Indian History Part-I (Ancient India)",
      "title": "Kinship, Caste and Class: Early Societies (c. 600 BCE - 600 CE)",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part I: Ancient India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Under whose leadership was the ambitious project to prepare the Critical Edition of the Mahabharata \ninitiated in 1919?",
        "options": [
          "(a) V.S. Sukthankar",
          "(b) B.B. Lal",
          "(c) R.G. Bhandarkar",
          "(d) Max Muller"
        ],
        "answer": "(a) V.S. Sukthankar",
        "explanation": "In 1919, noted Sanskrit scholar V.S. Sukthankar led an elite team of scholars at the Bhandarkar Oriental \nResearch Institute, Pune, to prepare the Critical Edition of the Mahabharata."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following dynasties provides historical evidence of matronymics (naming kings after \ntheir mothers) alongside patrilineal succession?",
        "options": [
          "(a) Satavahanas",
          "(b) Mauryas",
          "(c) Guptas",
          "(d) Kushanas"
        ],
        "answer": "(a) Satavahanas",
        "explanation": "Satavahana rulers were identified through metronymics derived from their mothers (e.g., Gotamiputa Siri \nSatakani), although succession to the throne was strictly patrilineal."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "According to the Manusmriti, the paternal estate after the death of parents was to be divided:",
        "options": [
          "(a) Equally among all sons, with a special share for the eldest son",
          "(b) Equally among sons and daughters",
          "(c) Inherited solely by the eldest son",
          "(d) Donated to the royal treasury"
        ],
        "answer": "(a) Equally among all sons, with a special share for the eldest son",
        "explanation": "The Manusmriti prescribed that paternal property must be divided equally among all sons after the \ndeath of parents, with a special pre-eminent share reserved for the eldest son."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The famous Mandasor stone inscription in Madhya Pradesh records the migration and achievements \nof a guild of:",
        "options": [
          "(a) Silk weavers from Lata (Gujarat)",
          "(b) Ivory carvers of Vidisha",
          "(c) Potters of Ujjayini",
          "(d) Goldsmiths of Mathura"
        ],
        "answer": "(a) Silk weavers from Lata (Gujarat)",
        "explanation": "The 5th century CE Mandasor inscription chronicles a guild of silk weavers who migrated from Lata \n(Gujarat) to Dashapura (Mandasor) and pooled wealth to construct a grand temple to the Sun God."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which Chinese Buddhist pilgrim wrote that 'untouchables' (Chandalas) had to sound a wooden \nclapper when entering a town to warn people to avoid contact?",
        "options": [
          "(a) Faxian",
          "(b) Xuanzang",
          "(c) Yijing",
          "(d) Song Yun"
        ],
        "answer": "(a) Faxian",
        "explanation": "Faxian, who visited India in the 5th century CE, recorded that Chandalas had to strike a piece of wood on \nentering a city so that people could hear and steer clear of their polluting presence."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In the Mahabharata, the marriage of Draupadi to the five Pandava brothers is a prime example of:",
        "options": [
          "(a) Polyandry",
          "(b) Polygyny",
          "(c) Exogamy only",
          "(d) Endogamy"
        ],
        "answer": "(a) Polyandry",
        "explanation": "Polyandry refers to the practice of a woman having multiple husbands simultaneously, exemplified by \nDraupadi's marriage to the five Pandavas."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The term 'Stridhana' in ancient legal Dharmashastras referred to:",
        "options": [
          "(a) Wealth and gifts received by a woman on the occasion of her marriage",
          "(b) Land owned jointly by a husband and wife",
          "(c) Religious taxes paid by female householders",
          "(d) Property donated by a queen to a temple"
        ],
        "answer": "(a) Wealth and gifts received by a woman on the occasion of her marriage",
        "explanation": "Stridhana refers to the gifts, jewelry, and movable property given to a bride at her wedding, over which \nshe retained ownership and which could be inherited by her children."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which Satavahana ruler claimed to be a 'unique Brahmana' (eka bamhana) and destroyer of the pride \nof Kshatriyas?",
        "options": [
          "(a) Gotamiputa Siri Satakani",
          "(b) Vasithiputa Pulumavi",
          "(c) Simuka",
          "(d) Yajna Sri Satakani"
        ],
        "answer": "(a) Gotamiputa Siri Satakani",
        "explanation": "Gotamiputa Siri Satakani proclaimed himself both a peerless Brahmana and the slayer of arrogant \nKshatriyas, while simultaneously forging marital ties with Shaka rulers."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "According to the Purusha Sukta hymn of the Rigveda, which varna emerged from the mouth of the \nprimeval cosmic being (Purusha)?",
        "options": [
          "(a) Brahmana",
          "(b) Kshatriya",
          "(c) Vaishya",
          "(d) Shudra"
        ],
        "answer": "(a) Brahmana",
        "explanation": "The Purusha Sukta claims the Brahmana arose from Purusha's mouth, the Kshatriya from his arms, the \nVaishya from his thighs, and the Shudra from his feet."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Who excavated the site of Hastinapura in Meerut district, Uttar Pradesh in 1951-52?",
        "options": [
          "(a) B.B. Lal",
          "(b) V.S. Sukthankar",
          "(c) Daya Ram Sahni",
          "(d) Sir Mortimer Wheeler"
        ],
        "answer": "(a) B.B. Lal",
        "explanation": "Archaeologist B.B. Lal excavated the ancient mound of Hastinapura in 1951-52, identifying five distinct \noccupational periods, including Painted Grey Ware (PGW) layers."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The original composition of the Mahabharata is credited to the 'Sutas', who were:",
        "options": [
          "(a) Charioteer-bards who accompanied warrior heroes into battle",
          "(b) Temple priests of Hastinapura",
          "(c) Buddhist monks collecting moral fables",
          "(d) Greek travelers visiting northern India"
        ],
        "answer": "(a) Charioteer-bards who accompanied warrior heroes into battle",
        "explanation": "The earliest core narratives of the epic were orally composed by bards known as Sutas who rode \nalongside Kshatriya warriors into battles, composing poems celebrating their exploits."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following was NOT an occupation prescribed for Brahmanas by the Dharmashastras?",
        "options": [
          "(a) Engaging in warfare and territorial administration",
          "(b) Studying and teaching the Vedas",
          "(c) Performing Vedic sacrifices",
          "(d) Giving and receiving gifts"
        ],
        "answer": "(a) Engaging in warfare and territorial administration",
        "explanation": "Warfare, statecraft, and governing subjects were the sacred duties reserved exclusively for the Kshatriya \nvarna, not Brahmanas."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which Buddhist text in Pali contains a dialogue between King Avantiputta and Kachchana proving \nthat wealth and social status cross-cut caste divisions?",
        "options": [
          "(a) Majjhima Nikaya",
          "(b) Digha Nikaya",
          "(c) Vinaya Pitaka",
          "(d) Milindapanho"
        ],
        "answer": "(a) Majjhima Nikaya",
        "explanation": "In the Majjhima Nikaya, a discourse between King Avantiputta and the Buddha's disciple Kachchana \ndemonstrates that a wealthy Shudra could have Brahmanas and Kshatriyas serving him."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The system of Gotras prescribed that members belonging to the same gotra:",
        "options": [
          "(a) Could not marry each other (rule of exogamy)",
          "(b) Had to marry within the gotra (rule of endogamy)",
          "(c) Were prohibited from owning cattle",
          "(d) Must reside in the same village"
        ],
        "answer": "(a) Could not marry each other (rule of exogamy)",
        "explanation": "Brahmanical gotra rules mandated gotra exogamy: members of the same gotra, being descendants of \nthe same Vedic seer, were treated as siblings and forbidden from marrying."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which forest-dwelling tribal hero in the Mahabharata cut off his right thumb as Guru Dakshina to \nDronacharya?",
        "options": [
          "(a) Ekalavya",
          "(b) Ghatotkacha",
          "(c) Karna",
          "(d) Barbarika"
        ],
        "answer": "(a) Ekalavya",
        "explanation": "Ekalavya, a Nishada (forest-dwelling hunter), voluntarily offered his right thumb to Dronacharya to honor \nDrona's vow that Arjuna would remain the greatest archer."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The Shungas and Kanvas, who succeeded the Mauryan emperors, were socially classified as:",
        "options": [
          "(a) Brahmanas",
          "(b) Kshatriyas",
          "(c) Shudras",
          "(d) Mlechchhas"
        ],
        "answer": "(a) Brahmanas",
        "explanation": "Both the Shunga dynasty (founded by Pushyamitra Shunga) and the succeeding Kanva dynasty were \nBrahmanas who defied the Dharmashastric norm that only Kshatriyas could be kings."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the difference between Varna and Jati in the ancient social framework?",
        "options": [
          "(a) Varna was fixed at four categories, whereas Jatis were numerous occupational groups with no fixed number",
          "(b) Varna was based on karma while Jati was based on birth",
          "(c) Jati had only four categories while Varna had hundreds",
          "(d) They were completely identical terms"
        ],
        "answer": "(a) Varna was fixed at four categories, whereas Jatis were numerous\noccupational groups with no fixed number",
        "explanation": "While the Varna system was rigidly capped at four divinely ordained ranks, Jatis evolved flexibly based \non specialized crafts, tribes, and professions with no theoretical limit."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "According to the Manusmriti, which of the following was a duty prescribed for Chandalas?",
        "options": [
          "(a) Living outside the village and using discarded clothes and broken utensils",
          "(b) Reciting the Vedas at dawn",
          "(c) Donating gold to royal preceptors",
          "(d) Serving as chariot drivers for the king"
        ],
        "answer": "(a) Living outside the village and using discarded clothes and broken utensils",
        "explanation": "Manusmriti mandated that Chandalas must live outside human settlements, wear clothes of the \ndeceased, eat from discarded plates, and wear ornaments of black iron."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The didactic (instructional) portions of the Mahabharata, such as the Bhagavad Gita and Shanti \nParva, were primarily added to the text between:",
        "options": [
          "(a) c. 200 BCE and 400 CE",
          "(b) c. 1000 BCE and 800 BCE",
          "(c) c. 500 CE and 1000 CE",
          "(d) 16th century CE"
        ],
        "answer": "(a) c. 200 BCE and 400 CE",
        "explanation": "Massive didactic sections were interpolated into the Mahabharata between c. 200 BCE and 400 CE \nwhen the epic grew into an encyclopedic reservoir of 100,000 verses."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "How did Buddhist philosophy view the origin of social differences and the state in the Digha Nikaya?",
        "options": [
          "(a) As a social contract created by human beings to maintain peace and order, rather than divine creation",
          "(b) As an eternal divine order established by Brahma",
          "(c) As an unchangeable biological destiny",
          "(d) As the result of astrological planets"
        ],
        "answer": "(a) As a social contract created by human beings to maintain peace and order,\nrather than divine creation",
        "explanation": "In the Aggañña Sutta of the Digha Nikaya, the institution of kingship (Mahasammata - 'the Great Chosen \nOne') is presented as a voluntary human social contract funded through taxes."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which contemporary writer penned a short story titled 'Kunti and the Nishadi', offering a subaltern, \nfeminist re-interpretation of the Mahabharata?",
        "options": [
          "(a) Mahasweta Devi",
          "(b) Arundhati Roy",
          "(c) Anita Desai",
          "(d) Amrita Pritam"
        ],
        "answer": "(a) Mahasweta Devi",
        "explanation": "Acclaimed writer Mahasweta Devi wrote 'Kunti O Nishadi', giving voice to the innocent forest-dwelling \nNishadi woman and her five sons who were burnt to death in the Lakshagriha episode."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The term 'Mlechchhas' was used in Sanskrit Brahmanical texts to designate:",
        "options": [
          "(a) Foreigners or outsiders who did not speak Sanskrit and stood outside the Vedic cultural fold",
          "(b) Wealthy Brahmana priests",
          "(c) Slaves captured in battle",
          "(d) Forest hermits"
        ],
        "answer": "(a) Foreigners or outsiders who did not speak Sanskrit and stood outside the\nVedic cultural fold",
        "explanation": "Sanskrit texts used the derogatory label 'Mlechchha' for non-Sanskritic foreign groups (like the Shakas, \nKushanas, and Greeks) who followed unfamiliar customs."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "How many years did it take for the team led by V.S. Sukthankar to complete the Critical Edition of the \nMahabharata?",
        "options": [
          "(a) 47 years",
          "(b) 12 years",
          "(c) 25 years",
          "(d) 60 years"
        ],
        "answer": "(a) 47 years",
        "explanation": "The monumental project began in 1919 and was brought to completion after 47 years of meticulous \ncollation in 1966 across 13,000 pages."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which of the following forms of marriage involves marrying outside one's kin group or gotra?",
        "options": [
          "(a) Exogamy",
          "(b) Endogamy",
          "(c) Polygyny",
          "(d) Polyandry"
        ],
        "answer": "(a) Exogamy",
        "explanation": "Exogamy refers to marriage outside the specified social unit (gotra or kin group), which was highly \npraised in Dharmashastras as virtuous."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "In the Mahabharata war, who fought on the side of the Kauravas despite being the eldest brother of \nthe Pandavas?",
        "options": [
          "(a) Karna",
          "(b) Bhishma",
          "(c) Dronacharya",
          "(d) Ashwatthama"
        ],
        "answer": "(a) Karna",
        "explanation": "Karna, born to Kunti before her marriage to Pandu, was abandoned at birth and raised by a charioteer; he \nremained loyal to Duryodhana and fought against his Pandava brothers."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Critical Edition of the Mahabharata revealed that the epic has both a core narrative \nand vast regional variations.\nReason (R): Over centuries, oral traditions, regional folklore, and marginal dialogues were integrated \ninto the epic across diverse linguistic communities.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. More than half of the 13,000 pages of the Critical Edition are devoted to recording \nregional variants and local adaptations."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Satavahana kings exclusively followed the Brahmanical rule of gotra exogamy in their \nroyal marriages.\nReason (R): Inscriptions show that Satavahana queens retained their paternal gotras (Gotama and \nVasistha) after marriage and practiced marriage within the kin group.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Satavahanas violated Brahmanical exogamy norms; Reason R is true and \nexplains the epigraphic evidence of gotra endogamy."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): Classical Sanskrit Dharmashastras insisted that only Kshatriyas were eligible to \nbecome rulers.\nReason (R): Historical records demonstrate that several major ruling dynasties, including the \nShungas, Kanvas, and Satavahanas, were Brahmanas.",
        "options": [
          "(a) Both A and R are true and R is NOT the correct explanation of A.",
          "(b) Both A and R are true and R is the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is NOT the correct explanation of A.",
        "explanation": "Both statements are historically accurate. Brahmanical theory mandated Kshatriya kingship, while \npolitical reality saw Shungas and Kanvas (Brahmanas) and Mauryas/Shakas ascending thrones."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): In early historic India, women were generally deprived of independent claims to landed \nproperty.\nReason (R): The patriarchal social order regulated ownership of resources to prevent female \nautonomy and preserve male inheritance lines.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Manusmriti and other legal codes restricted women's property rights to stridhana \nto safeguard patriarchal lineages."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The Chinese pilgrim Xuanzang observed that executioners and scavengers were forced \nto live outside town boundaries.\nReason (R): The concept of ritual purity and pollution classified contact with dead corpses and bodily \nwastes as deeply defiling.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly explains the ritual pollution rationale underlying the spatial \nsegregation of Chandalas."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Describe the two Brahmanical rules regarding the Gotra system that emerged around 1000 BCE. How \ndid the Satavahanas violate these rules?",
        "options": null,
        "answer": "Brahmanical Gotra rules and Satavahana violations",
        "explanation": "1. Two Brahmanical Gotra Rules [1.5 Marks] :\n- Rule 1: Women were expected to adopt their husband's gotra upon marriage and give up their father's \ngotra.\n- Rule 2: Members of the same gotra could not marry each other (rule of gotra exogamy).\n2. Satavahana Violations [1.5 Marks] :\n- Epigraphs show Satavahana queens retained their father's gotras (such as Gotama and Vasistha) \ninstead of adopting their husbands'.\n- Satavahana rulers practiced endogamy (cross-cousin marriages within the kin group), directly \ncontravening Brahmanical exogamy."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain the four varnas and the ideal occupations assigned to them according to the \nDharmashastras.",
        "options": null,
        "answer": "Four varnas and their prescribed duties",
        "explanation": "1. Brahmanas [0.75 Mark] : Study and teach the Vedas, perform sacrificial rituals, give and receive gifts.\n2. Kshatriyas [0.75 Mark] : Engage in warfare, protect subjects, ensure justice, study the Vedas, and get \nsacrifices performed.\n3. Vaishyas [0.75 Mark] : Engage in agriculture, cattle rearing, and trade alongside studying Vedas and \nmaking gifts.\n4. Shudras [0.75 Mark] : Assigned the sole duty of serving the three higher varnas without Vedic \ninitiation."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the duties of Chandalas laid down in the Manusmriti.",
        "options": null,
        "answer": "Duties of Chandalas in Manusmriti",
        "explanation": "1. Spatial Segregation [1 Mark] : They were required to live outside the village boundaries.\n2. Utensils and Clothing [1 Mark] : They could only use discarded, broken clay pots, wear garments \ntaken from corpses, and wear ornaments made of iron.\n3. Polluting Tasks [1 Mark] : They served as executioners of criminals, disposed of bodies of those who \ndied without relatives, and walked the streets only by day."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "How did V.S. Sukthankar and his team prepare the Critical Edition of the Mahabharata? What did this \nstudy reveal?",
        "options": null,
        "answer": "Preparation and findings of the Critical Edition",
        "explanation": "1. Collation Methodology [1.5 Marks] : The scholars collected hundreds of Sanskrit manuscripts from \nacross India written in scripts like Sharada, Devanagari, Bengali, and Malayalam, comparing verses line \nby line to identify common verses.\n2. Findings [1.5 Marks] : The text revealed a remarkable common narrative across India, but also \nextensive regional variations (over half the 13,000 pages recorded regional variations), proving the epic \nwas constantly retold and dynamic."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Analyze the story of Ekalavya in the Mahabharata. What does it reveal about the Brahmanical attitude \ntowards Nishadas?",
        "options": null,
        "answer": "Significance of Ekalavya episode",
        "explanation": "1. Context [1 Mark] : Ekalavya, a forest-dwelling Nishada, was rejected by Guru Dronacharya because he \nwas not of royal Kshatriya blood.\n2. Guru Dakshina [1 Mark] : When Ekalavya mastered archery by practicing before Drona's mud statue, \nDrona demanded his right thumb to ensure Arjuna remained peerless.\n3. Brahmanical Social Control [1 Mark] : The story highlights the rigid enforcement of the caste \nhierarchy, where tribal communities (Nishadas) were systematically denied martial parity with the \nKshatriya elite."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What information does the Mandasor inscription give regarding the silk weavers' guild?",
        "options": null,
        "answer": "Silk weavers' guild of Mandasor",
        "explanation": "1. Migration [1 Mark] : The guild originally resided in Lata (Gujarat) and migrated to Dashapura \n(Mandasor) attracted by the virtuous king.\n2. Professional Flexibility [1 Mark] : In Mandasor, guild members branched out into diverse vocations: \nsome mastered astrology, some became soldiers, and others pursued poetry.\n3. Collective Patronage [1 Mark] : Demonstrating collective wealth and social status, the guild pooled \nfinancial resources to erect a sun temple in Dashapura."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Differentiate between the 'narrative' and 'didactic' sections of the Mahabharata.",
        "options": null,
        "answer": "Narrative vs Didactic sections",
        "explanation": "1. Narrative Sections [1.5 Marks] : Consist of dramatic stories, royal feuds, battlefield dialogues, and \ncharacter adventures (the core conflict between the Kauravas and Pandavas).\n2. Didactic Sections [1.5 Marks] : Contain philosophical discourses, moral prescriptions, and social \ncodes regarding Dharma (e.g. the Bhagavad Gita and Bhishma's Shanti Parva discourses)."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Explain the concept of 'Stridhana' and discuss women's access to property in ancient India.",
        "options": null,
        "answer": "Stridhana and women's property rights",
        "explanation": "1. Definition of Stridhana [1 Mark] : Movable wealth, jewels, and bridal gifts given to a woman during her \nwedding, over which she held personal ownership.\n2. Inheritance of Stridhana [1 Mark] : Children could inherit this property without the husband having any \nlegal claim over it.\n3. General Restrictions [1 Mark] : Beyond Stridhana, Manusmriti cautioned women against hoarding \nfamily wealth or claiming a share in immovable paternal land."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "How did the Buddhists challenge the Brahmanical concept of Varna hierarchy? Cite an example from \nBuddhist literature.",
        "options": null,
        "answer": "Buddhist critique of Varna hierarchy",
        "explanation": "1. Rejection of Divine Origin [1 Mark] : Buddhists rejected the Rigvedic myth of divine creation of varnas, \nviewing social distinctions as conventional human constructs.\n2. Primacy of Moral Conduct [1 Mark] : Status in the Buddhist Sangha was determined by virtue, ethical \nconduct, and wisdom rather than birth.\n3. Majjhima Nikaya Evidence [1 Mark] : King Avantiputta conceded to monk Kachchana that a wealthy \nShudra could command the services of Brahmanas and Kshatriyas, proving economic power \nsuperseded caste dogma."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "What archaeological evidence did B.B. Lal discover during his excavations at Hastinapura in 1951-52?",
        "options": null,
        "answer": "B.B. Lal's Hastinapura excavation findings",
        "explanation": "1. Five Occupational Strata [1 Mark] : Uncovered five successive cultural phases of human occupation \nfrom the 2nd millennium BCE to the 11th century CE.\n2. Period II (PGW Culture) [1 Mark] : Dated c. 12th-6th c. BCE, featuring Painted Grey Ware pottery, mud \nand wattle-and-daub huts, and terracotta animal figurines.\n3. Period III Architecture [1 Mark] : Revealed burnt-brick houses, terracotta drain pipes, and soak-pits, \nmatching descriptions of a prospering town."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "'The Mahabharata is not a static epic but a dynamic text that evolved over millennia.' Discuss the \nlanguage, authors, transmission, regional adaptations, and modern reinterpretations of the text.",
        "options": null,
        "answer": "The Mahabharata as a dynamic living epic",
        "explanation": "Marking Scheme (8 Marks total):\n1. Language and Composition (2 Marks):\n- Composed in accessible Sanskrit, far simpler than Vedic or classical Kavya Sanskrit, ensuring broad \ncommunication.\n- Originally sung by charioteer bards (Sutas); later compiled, edited, and committed to writing by \nBrahmanas from c. 500 BCE to 400 CE; traditionally attributed to Sage Vyasa.\n2. The Critical Edition Project (2 Marks):\n- Undertaken by V.S. Sukthankar (1919-1966). Collated hundreds of regional manuscripts, demonstrating \nboth a common core and massive regional interpolations across 13,000 pages.\n3. Accretion of Didactic Material (2 Marks):\n- Expanded from an 8,800-verse heroic tale (Jaya) into a 100,000-verse encyclopedic epic incorporating \nlaw books, myths, statecraft (Shanti Parva), and the Bhagavad Gita.\n4. Regional and Subaltern Adaptations (2 Marks):\n- Retold in every major regional language through performing arts, folk dances, and sculpture.\n- Reinterpreted by marginalized voices, such as Mahasweta Devi's 'Kunti O Nishadi', critiquing elite \nupper-caste exploitation."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Analyze the rules and varied practices of marriage in early Indian societies. Highlight endogamy, \nexogamy, polygyny, and polyandry with historical and literary examples.",
        "options": null,
        "answer": "Rules and varied practices of marriage",
        "explanation": "Marking Scheme (8 Marks total):\n1. Gotra Exogamy & Kanyadana (2 Marks):\n- Brahmanical texts exalted exogamy (marrying outside one's kin gotra) and Kanyadana (gifting a virgin \ndaughter) as supreme religious duties for householders.\n2. Endogamy & Kin Marriage (2 Marks):\n- Practiced in parts of southern India; Satavahana royal epigraphs prove kings married within their \nmother's kin network (cross-cousin marriages) to consolidate political power.\n3. Polygyny among Royal Elites (2 Marks):\n- Polygyny (one man marrying multiple wives) was standard practice among Kshatriya rulers (e.g. \nSatavahana and Gupta kings) to cement inter-dynastic treaties.\n4. Polyandry and Draupadi's Marriage (2 Marks):\n- Polyandry (one woman marrying several husbands) was dramatized in Draupadi's union with the five \nPandavas.\n- Ancient commentators offered diverse justifications: maternal command of Kunti, Lord Shiva's boon in \na previous life, or traces of archaic Himalayan customary practices."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Examine the social framework of Varna and Jati in early India. How did non-Kshatriya rulers, craft \nguilds, and marginalized groups fit into this structure?",
        "options": null,
        "answer": "Social framework of Varna and Jati",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Varna Model vs Political Reality (2.5 Marks):\n- Classical theory decreed only Kshatriyas could rule.\n- In reality, political power was open to anyone who could muster resources:\n  - Mauryas: Regarded as Shudras or men of humble origin by Brahmanical sources.\n  - Shungas and Kanvas: Orthodox Brahmanas who seized the throne.\n  - Shakas: Central Asian 'Mlechchhas' who ruled western India and patronized Sanskrit.\n2. Jatis and Urban Guilds (2.5 Marks):\n- New social and occupational groups were accommodated as 'Jatis' rather than varnas.\n- Example: Mandasor silk weavers' guild, demonstrating that jati members could diversify into poetry, \nscholarship, and warfare while maintaining corporate identity.\n3. Marginalized Groups Beyond the Pale (3 Marks):\n- Forest tribes (Nishadas like Ekalavya) were integrated as subordinate outsiders.\n- Chandalas: Subjected to severe ritual pollution, forced to live outside settlements, handle dead bodies, \nand warn citizens of their presence with clappers."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding the duties of Chandalas from the Manusmriti carefully and \nanswer the questions:\nSource: The Duties of the Chandalas\n'The Manusmriti laid down the duties of the chandalas. They had to live outside the village, use discarded \nutensils, wear clothes of the dead and ornaments of iron. They could not walk about in villages and cities at \nnight. They had to dispose of the bodies of those who had no relatives and serve as executioners. Much \nlater, the Chinese Buddhist pilgrim Faxian wrote that 'untouchables' had to sound a clapper in the streets so \nthat people could avoid seeing them...'\n(i) State any two duties assigned to Chandalas in the Manusmriti. (1 Mark)\n(ii) Why did Faxian state that untouchables sounded a clapper in the streets? (1 Mark)\n(iii) What does this source reveal about the Brahmanical obsession with ritual purity and pollution? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Source Question on Duties of Chandalas",
        "explanation": "Marking Scheme:\n(i) Duties [1 Mark] : Live outside village boundaries and dispose of unclaimed dead bodies / serve as \nexecutioners.\n(ii) Sounding Clapper [1 Mark] : To announce their approach so that high-caste persons could steer clear \nand avoid visual pollution.\n(iii) Purity and Pollution Ideology [2 Marks] :\n1. Severe segregation: Society was divided into rituals of sacred purity (Brahmanas) and polluting \nphysical tasks (handling corpses). [1 Mark]\n2. Structural violence: Institutionalized hereditary untouchability to enforce absolute subordination on \nmenial laborers. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following dialogue from the Buddhist text Majjhima Nikaya carefully and answer the \nquestions:\nSource: The Wealthy Shudra\n'Avantiputta, king of Madhura, asked the venerable Mahakachchana what he thought about the Brahmanas \nwho said: 'The Brahmanas are the best caste; all other castes are low; only Brahmanas are fair, others dark; \nonly Brahmanas are pure, not non-Brahmanas...'\nKachchana replied: 'What if a Shudra were wealthy, rich in grain, gold, or silver? Would he not have another \nShudra, or a Kshatriya, or a Brahmana, to speak politely to him, get up before him, and serve him?'\nAvantiputta replied: 'Indeed he would.'\n(i) What Brahmanical claim is King Avantiputta challenging in this dialogue? (1 Mark)\n(ii) What argument does Mahakachchana put forward to counter the Brahmana claim? (1 Mark)\n(iii) How does this source prove that economic power could override the orthodox varna order? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Source Question on The Wealthy Shudra",
        "explanation": "Marking Scheme:\n(i) Challenged Claim [1 Mark] : The supremacist claim that Brahmanas are the highest, purest, and only \nnoble varna by birth.\n(ii) Kachchana's Argument [1 Mark] : A wealthy Shudra who possesses gold and grain can employ and \ncommand even Brahmanas and Kshatriyas to serve him.\n(iii) Economic Power vs Caste [2 Marks] :\n1. Shows that material wealth, rather than birth-based ritual purity, governed actual socio-economic \nrelationships in early urban society. [1 Mark]\n2. Highlights the Buddhist rationalist critique of the Brahmanical theory of divinely ordained social \nhierarchy. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Discuss the gendered access to property in early Indian society with reference to the Manusmriti and \nthe unique case of Prabhavati Gupta.",
        "options": null,
        "answer": "Gendered access to property in early India",
        "explanation": "Marking Scheme (8 Marks total):\n1. Manusmriti Prescriptions on Paternal Property (3 Marks):\n- Paternal estate was partitioned exclusively among sons after the death of parents, with an additional \nshare for the eldest son.\n- Daughters had no legal right to claim a share in the family's immovable ancestral land.\n2. Concept and Limits of Stridhana (2.5 Marks):\n- Women were entitled to retain bridal gifts and jewelry (Stridhana), which passed to their offspring.\n- However, Manusmriti warned women against accumulating secret wealth or managing valuable family \nassets without their husband's consent.\n3. The Exceptional Case of Prabhavati Gupta (2.5 Marks):\n- Danguna copper-plate proves that as the queen regent of the Vakatakas, Prabhavati owned, managed, \nand gifted an entire village to an Acharya.\n- Demonstrates that royal women occasionally exercised independent property rights, overriding \nnormative legal codes that bound ordinary women."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Analyze the Gotra rules framed by Brahmanas from c. 1000 BCE onwards. How did the Satavahanas \nchallenge these norms? Support your answer with inscriptional evidence.",
        "options": null,
        "answer": "Gotra rules and Satavahana epigraphic deviations",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Brahmanical Gotra Model (3 Marks):\n- Classified kin groups under the names of ancient Vedic rishis (e.g. Bharadvaja, Gotama, Kashyapa, \nVasistha).\n- Rule of name change: A bride abandoned her father's gotra upon marriage and assumed her husband's \ngotra.\n- Rule of exogamy: Marrying within the same gotra was treated as incestuous and prohibited.\n2. Satavahana Epigraphic Evidence (3 Marks):\n- Inscriptions record names of Satavahana queens like 'Gotami' and 'Vasithi' (names derived from their \nfathers' gotras), proving they retained their natal gotra even after marriage.\n- Several queens belonged to the same gotra as their husbands, directly defying exogamic rules.\n3. Political and Kinship Significance of Endogamy (2 Marks):\n- Practiced cross-cousin marriage (endogamy), a common Dravidian custom in South India, to prevent \nfragmentation of wealth and cement royal alliances."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Draupadi's question in the assembly of the Kauravas and answer \nthe questions:\nSource: Draupadi's Question\n'Draupadi is supposed to have asked this question: 'Did you lose yourself before you lost me, or lost me first \nand then yourself?' When Yudhishthira staked Draupadi after having staked and lost all his wealth, his \nbrothers, and finally himself... Draupadi questioned whether a man who had already enslaved himself had \nany legal authority to stake another person...'\n(i) What specific question did Draupadi raise in the Kaurava assembly? (1 Mark)\n(ii) On what legal ground did Draupadi challenge Yudhishthira's action? (1 Mark)\n(iii) What does this episode reveal about the status of women and patriarchal authority in the epic? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Source Question on Draupadi's Question",
        "explanation": "Marking Scheme:\n(i) Specific Question [1 Mark] : Whether Yudhishthira staked and lost himself first, or staked and lost her \nfirst.\n(ii) Legal Ground [1 Mark] : If Yudhishthira had already lost himself and become a slave/dependent, he \npossessed no legal ownership to gamble another human being.\n(iii) Status of Women & Patriarchal Authority [2 Marks] :\n1. Highlights women's vulnerability in a patriarchal society where husbands treated wives as disposable \npersonal property. [1 Mark]\n2. Portrays Draupadi as an intelligent, outspoken woman who publicly interrogated legal jurisprudence \nand exposed the ethical moral bankruptcy of the assembly elders. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Explain the concept of 'Varna' as divinely ordained according to the Rigveda. How did the Brahmanas \nenforce and legitimize this social hierarchy?",
        "options": null,
        "answer": "Brahmanical enforcement and legitimation of Varna hierarchy",
        "explanation": "Marking Scheme (8 Marks total):\n1. Divine Origin in Rigveda (2 Marks):\n- The Purusha Sukta hymn claimed the four varnas originated from the limbs of the cosmic sacrifice: \nBrahmanas from the mouth, Kshatriyas from the arms, Vaishyas from the thighs, and Shudras from the \nfeet.\n2. Brahmanical Strategies of Enforcement (4 Marks):\n- Claiming Divine Sanction: Asserted that the varna order was an immutable cosmic creation rather than \na human arrangement.\n- Persuading Kings to Enforce Norms: Advised kings to ensure that people within their kingdoms strictly \nadhered to their prescribed varna duties.\n- Indoctrination by Birth: Persuaded the populace that their social status, profession, and privileges were \npre-ordained by birth and past-life karma.\n3. Counter-Strategies and Limitations (2 Marks):\n- Often challenged by heterodox sects (Buddhism, Jainism) and bypassed by non-Kshatriya rulers and \nrich urban guilds who rejected hereditary ritual superiority."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Discuss the archaeological excavations at Hastinapura conducted by B.B. Lal. To what extent does \narchaeological evidence corroborate the narrative of the Mahabharata?",
        "options": null,
        "answer": "Archaeological excavations at Hastinapura and epic correlation",
        "explanation": "Marking Scheme (8 Marks total):\n1. Objectives and Methodology (2 Marks):\n- B.B. Lal excavated the mound of Hastinapura in 1951-52 to investigate whether archaeological remains \nmatched the literary epic tradition.\n2. Five Stratigraphic Periods Discovered (3 Marks):\n- Period II (c. 12th-6th c. BCE - Painted Grey Ware / PGW):\n  - Mud and wattle-and-daub huts, reed marks on plaster, animal husbandry (cattle, horses), and simple \ncopper and iron tools.\n  - Floods destroyed this settlement, matching the Puranic tradition of King Nichakshu shifting the \ncapital to Kaushambi due to Ganga floods.\n- Period III (c. 6th-3rd c. BCE):\n  - Mud-brick and burnt-brick houses, terracotta ring-wells, and punch-marked coins.\n3. Historical Evaluation & Limitations (3 Marks):\n- While geography (names of settlements like Hastinapura, Kurukshetra) and the flood episode align, the \nlavish palaces and golden chariots described in the epic were poetic exaggerations of later bards rather \nthan Bronze/Iron Age realities."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "book": "Themes in Indian History Part-I (Ancient India)",
      "title": "Thinkers, Beliefs and Buildings: Cultural Developments (c. 600 BCE - 600 CE)",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part I: Ancient India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which Begum of Bhopal provided generous financial grants for the preservation, museum, and guest \nhouse at the Sanchi Stupa complex?",
        "options": [
          "(a) Shahjehan Begum and Sultan Jehan Begum",
          "(b) Qudsia Begum and Sikandar Begum",
          "(c) Begum Hazrat Mahal",
          "(d) Jahanara Begum"
        ],
        "answer": "(a) Shahjehan Begum and Sultan Jehan Begum",
        "explanation": "Shahjehan Begum and her successor Sultan Jehan Begum provided vital funds for the maintenance of \nSanchi, funded the guesthouse where John Marshall lived, and financed his illustrated volumes."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In early Buddhist sculpture, the 'Empty Seat' symbolizes which significant event in the life of the \nBuddha?",
        "options": [
          "(a) The Meditation and Enlightenment of the Buddha",
          "(b) His Mahaparinirvana",
          "(c) His First Sermon at Sarnath",
          "(d) His Renunciation of the Palace"
        ],
        "answer": "(a) The Meditation and Enlightenment of the Buddha",
        "explanation": "Early Buddhist art did not depict the Buddha in human form; an empty seat or throne represented the \nBuddha's intense meditation and ultimate enlightenment under the Bodhi tree."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following Pitakas contains the moral teachings and sermons of the Buddha?",
        "options": [
          "(a) Sutta Pitaka",
          "(b) Vinaya Pitaka",
          "(c) Abhidhamma Pitaka",
          "(d) Dipavamsa"
        ],
        "answer": "(a) Sutta Pitaka",
        "explanation": "The Sutta Pitaka contains the core philosophical dialogues, moral discourses, and teachings of the \nBuddha. Vinaya Pitaka contains monastic rules, and Abhidhamma deals with metaphysical philosophy."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who was the first woman to be admitted into the Buddhist Sangha as a Bhikkhuni?",
        "options": [
          "(a) Mahapajapati Gotami",
          "(b) Yashodhara",
          "(c) Amrapali",
          "(d) Prabhavati Gupta"
        ],
        "answer": "(a) Mahapajapati Gotami",
        "explanation": "Mahapajapati Gotami, the foster mother and maternal aunt of the Buddha, was the first woman \nadmitted into the Sangha following the persistent intervention of Ananda."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The balcony-like architectural structure perched atop the hemispherical mound (Anda) of a stupa is \ncalled:",
        "options": [
          "(a) Harmika",
          "(b) Yashti",
          "(c) Chhatri",
          "(d) Torana"
        ],
        "answer": "(a) Harmika",
        "explanation": "The Harmika is a square balcony-like structure resting on the dome (Anda), representing the sacred \ndwelling place of the gods."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which of the following is the central philosophy of Jainism?",
        "options": [
          "(a) The entire world is animated; even stones, rocks, and water possess life",
          "(b) Performing Vedic sacrifices guarantees salvation",
          "(c) Human destiny is governed entirely by arbitrary fate (Niyati)",
          "(d) Salvation is achieved by extreme sensory indulgence"
        ],
        "answer": "(a) The entire world is animated; even stones, rocks, and water possess life",
        "explanation": "The core tenet of Jaina philosophy is that all nature is animated with life (jiva), mandating absolute non-\ninjury (Ahimsa) towards humans, animals, plants, and elements."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Why did Amaravati Stupa fail to survive while Sanchi Stupa remained remarkably well-preserved?",
        "options": [
          "(a) Amaravati was plundered by British collectors and local rajas for marble slabs before modern conservation was practiced",
          "(b) Amaravati was made of perishable wood",
          "(c) An earthquake completely submerged Amaravati",
          "(d) Sanchi was hidden under sea water"
        ],
        "answer": "(a) Amaravati was plundered by British collectors and local rajas for marble\nslabs before modern conservation was practiced",
        "explanation": "Amaravati's magnificent limestone sculptures were carted away to Madras, Calcutta, and London by \nBritish officers like Walter Elliot, leaving the mound stripped bare."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The magnificent Kailashanatha temple at Ellora (Cave 16) is architecturally unique because:",
        "options": [
          "(a) It was carved completely out of a single monolithic rock from the top downwards",
          "(b) It was built entirely of prefabricated timber",
          "(c) It is submerged inside a lake",
          "(d) It was made using Greek columns"
        ],
        "answer": "(a) It was carved completely out of a single monolithic rock from the top\ndownwards",
        "explanation": "The 8th-century Rashtrakuta Kailashanatha temple was carved out of a massive basalt hill from the top \ndownwards, a breathtaking feat of monolithic rock-cut engineering."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "The sculpted woman dangling from the gateway of Sanchi, touching a tree and causing it to bear \nflowers, is identified as:",
        "options": [
          "(a) Shalabhanjika",
          "(b) Gajalakshmi",
          "(c) Maya",
          "(d) Yakshini Hariti"
        ],
        "answer": "(a) Shalabhanjika",
        "explanation": "The Shalabhanjika motif depicts an auspicious fertility maiden whose touch causes trees to flower and \nfruit, incorporated into Buddhist architecture from folk traditions."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which Buddhist text contains the verses composed by senior Buddhist nuns (Theris) celebrating their \nspiritual liberation?",
        "options": [
          "(a) Therigatha",
          "(b) Jataka",
          "(c) Mahavamsa",
          "(d) Dipavamsa"
        ],
        "answer": "(a) Therigatha",
        "explanation": "The Therigatha is an extraordinary anthology in the Sutta Pitaka consisting of 73 poems composed by \nBuddhist elder nuns, offering rare insight into ancient women's spiritual lives."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In early Hindu temple architecture, the small square sanctum sanctorum where the principal deity's \nidol was installed was called the:",
        "options": [
          "(a) Garbhagriha",
          "(b) Mandapa",
          "(c) Shikhara",
          "(d) Antarala"
        ],
        "answer": "(a) Garbhagriha",
        "explanation": "The Garbhagriha ('womb-chamber') was the innermost sacred cubical room with a single door where the \npresiding image or linga was housed and worshipped."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following schools of Buddhism introduced the concept of the 'Bodhisattva' and the \nworship of Buddha images?",
        "options": [
          "(a) Mahayana",
          "(b) Hinayana (Theravada)",
          "(c) Vajrayana",
          "(d) Lokayata"
        ],
        "answer": "(a) Mahayana",
        "explanation": "Mahayana ('Great Vehicle') introduced devotion to Bodhisattvas (compassionate beings who postponed \ntheir nirvana to save others) and worshipped sculpted idols of the Buddha."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The donation of the exquisite southern gateway of the Sanchi Stupa was financed by the guild of:",
        "options": [
          "(a) Ivory carvers of Vidisha",
          "(b) Silk weavers of Mandasor",
          "(c) Potters of Ujjayini",
          "(d) Goldsmiths of Mathura"
        ],
        "answer": "(a) Ivory carvers of Vidisha",
        "explanation": "An inscription on the southern gateway (torana) of Sanchi records that it was carved and donated by the \naffluent guild of ivory carvers of nearby Vidisha."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "At which of the following places did the Buddha deliver his first sermon, known as the 'Dharmachakra \nPravartana'?",
        "options": [
          "(a) Sarnath",
          "(b) Bodh Gaya",
          "(c) Lumbini",
          "(d) Kusinagara"
        ],
        "answer": "(a) Sarnath",
        "explanation": "The Buddha preached his maiden sermon to five ascetic disciples at the Deer Park in Sarnath near \nVaranasi, an event commemorated as the Turning of the Wheel of Law."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The fatalist philosopher Makkhali Gosala belonged to which heterodox religious tradition?",
        "options": [
          "(a) Ajivikas",
          "(b) Lokayatas",
          "(c) Charvakas",
          "(d) Jains"
        ],
        "answer": "(a) Ajivikas",
        "explanation": "Makkhali Gosala was the foremost teacher of the Ajivika sect, which preached strict fatalism (Niyati), \nbelieving that all events and human destinies are completely predetermined."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "A 'Kutagarashala' literally meant:",
        "options": [
          "(a) A hut with a pointed roof where traveling philosophers held intellectual debates",
          "(b) A storehouse for grain",
          "(c) A royal armory",
          "(d) A monk's rock-cut cave"
        ],
        "answer": "(a) A hut with a pointed roof where traveling philosophers held intellectual\ndebates",
        "explanation": "Kutagarashalas were pointed-roof huts situated in groves where mendicant thinkers and teachers \nstayed and engaged in philosophical debates to win disciples."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is NOT one of the five monastic vows (Mahavratas) prescribed in Jainism?",
        "options": [
          "(a) Performing animal sacrifice in fire",
          "(b) Abstaining from killing (Ahimsa)",
          "(c) Abstaining from stealing (Asteya)",
          "(d) Observing celibacy (Brahmacharya)"
        ],
        "answer": "(a) Performing animal sacrifice in fire",
        "explanation": "Jainism strictly condemns Vedic animal sacrifice. The five vows are: Ahimsa (non-killing), Satya (truth), \nAsteya (non-stealing), Aparigraha (non-possession), and Brahmacharya (celibacy)."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In Buddhist terminology, 'Nirvana' literally signifies:",
        "options": [
          "(a) The extinguishing of the ego and desire",
          "(b) Rebirth in the heavenly realm of Indra",
          "(c) Ascension of the physical body to the sun",
          "(d) Acquiring supernatural magical powers"
        ],
        "answer": "(a) The extinguishing of the ego and desire",
        "explanation": "Nirvana literally means the 'blowing out' or extinguishing of the lamp of human ego and cravings, \nthereby ending the cycle of rebirth and sorrow."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which tradition within Hinduism developed around the worship of Vishnu and his ten divine \nincarnations (Avatars)?",
        "options": [
          "(a) Vaishnavism",
          "(b) Shaivism",
          "(c) Shaktism",
          "(d) Tantrism"
        ],
        "answer": "(a) Vaishnavism",
        "explanation": "Vaishnavism centered on devotion to Lord Vishnu, characterized by the doctrine of ten Avataras \n(incarnations) who descend to earth whenever order is threatened by evil."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is the tall tower or spire constructed over the central sanctum (garbhagriha) of a temple called?",
        "options": [
          "(a) Shikhara",
          "(b) Mandapa",
          "(c) Gopuram",
          "(d) Antarala"
        ],
        "answer": "(a) Shikhara",
        "explanation": "The rising pyramidal or curvilinear superstructure built directly over the garbhagriha to symbolize the \nsacred mountain of the gods is termed the Shikhara."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which ancient Buddhist text records that Emperor Ashoka distributed the relics of the Buddha to \nevery important town and ordered the erection of stupas over them?",
        "options": [
          "(a) Ashokavadana",
          "(b) Mahavamsa",
          "(c) Dipavamsa",
          "(d) Divyavadana"
        ],
        "answer": "(a) Ashokavadana",
        "explanation": "According to the Sanskrit Buddhist text Ashokavadana, Ashoka distributed Buddha's corporeal relics \nacross thousands of towns and commissioned stupas over them."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which symbol on the gateways of Sanchi was used to depict the 'Mahaparinirvana' of the Buddha?",
        "options": [
          "(a) The Stupa mound",
          "(b) The Wheel of Law",
          "(c) The Lotus",
          "(d) The Bodhi Tree"
        ],
        "answer": "(a) The Stupa mound",
        "explanation": "In aniconic early Buddhist sculpture, the stupa was the visual emblem of the Buddha's final departure \nand liberation (Mahaparinirvana)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The term 'Tirthankara' in Jainism refers to:",
        "options": [
          "(a) Those who guide men and women across the river of existence",
          "(b) Priests who perform temple rituals",
          "(c) Kings who conquer foreign lands",
          "(d) Forest hermits who do not speak"
        ],
        "answer": "(a) Those who guide men and women across the river of existence",
        "explanation": "Tirthankaras ('ford-makers') are the 24 enlightened spiritual teachers who show devotees the path \nacross the turbulent river of mundane worldly rebirth (samsara)."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which materialist school of thought rejected the concept of karma, afterlife, and soul, asserting that \nhumans are made purely of four physical elements?",
        "options": [
          "(a) Lokayata / Charvaka",
          "(b) Ajivika",
          "(c) Mimamsa",
          "(d) Samkhya"
        ],
        "answer": "(a) Lokayata / Charvaka",
        "explanation": "Lokayata (associated with Ajita Kesakambalin and Charvaka) was an uncompromising materialist \nphilosophy asserting that death is the complete end of consciousness and bodily matter."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Who was H.H. Cole and what was his major contribution to Indian heritage conservation?",
        "options": [
          "(a) He advocated in-situ preservation, opposing the plundering and removal of original sculptures to European museums",
          "(b) He excavated Mohenjodaro",
          "(c) He deciphered Kharosthi",
          "(d) He translated the Rigveda into English"
        ],
        "answer": "(a) He advocated in-situ preservation, opposing the plundering and removal of\noriginal sculptures to European museums",
        "explanation": "Archaeologist H.H. Cole fiercely defended the policy of in-situ preservation, stating it was suicidal to loot \noriginal art pieces to decorate British or European museum galleries."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Sanchi Stupa survived the ravages of time while Amaravati was stripped of its \narchitectural treasures.\nReason (R): The rulers of Bhopal safeguarded Sanchi by denying Europeans original artefacts, \noffering plaster casts instead, while Amaravati was excavated before modern conservation ethics \ntook root.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Amaravati was discovered in the late 18th century and ransacked by antiquarians, \nwhereas Sanchi benefited from 19th-century Begums of Bhopal who funded in-situ conservation."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Early Buddhist art represents the Buddha through abstract symbols rather than human \nanthropomorphic figures.\nReason (R): Early Buddhist theology considered the Buddha's attainment of Nirvana as transcending \nall worldly physical representation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Early sculptors at Sanchi and Bharhut represented his presence through symbols \n(tree, wheel, stupa, footprints, empty seat) because the enlightened one had extinguished worldly bodily \nego."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The mid-first millennium BCE is regarded as a major watershed in world cultural and \nintellectual history.\nReason (R): This era witnessed the emergence of profound thinkers like Zarathustra in Iran, Kong Zi in \nChina, Socrates in Greece, and Mahavira and Buddha in India.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R highlights the global contemporary intellectual ferment seeking to \nunderstand the cosmic order and the ethical meaning of life."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The inclusion of motifs like Gajalakshmi and Shalabhanjika at Sanchi indicates that \nBuddhist art integrated local pre-Buddhist popular beliefs.\nReason (R): Common people who converted to Buddhism brought with them their cultural traditions, \nauspicious symbols, and folk deities into the decoration of stupas.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. As Buddhism spread, indigenous auspicious symbols (fertility spirits, protective \nserpents, elephants) were harmoniously incorporated into stupa art."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): In the Mahayana tradition of Buddhism, the Buddha came to be regarded as a savior \ndeity to whom devotees could pray for liberation.\nReason (R): Mahayana followers rejected the earlier Theravada concept that individual salvation \ndepended entirely on self-effort and moral discipline.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Mahayana introduced idol worship of Buddha and faith in compassionate \nBodhisattvas, diverging from Theravada's doctrine of solitary self-liberation."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Why did Sanchi survive while Amaravati was ruined? Give three reasons.",
        "options": null,
        "answer": "Reasons for survival of Sanchi vs Amaravati",
        "explanation": "1. Timing of Discovery [1 Mark] : Amaravati was discovered in 1796 before archaeological conservation \nexisted; British collectors hauled away sculptures to decorate museums. Sanchi was found in 1818 \nwhen heritage preservation had matured.\n2. Role of Bhopal Rulers [1 Mark] : Shahjehan Begum and Sultan Jehan Begum refused to allow \nEuropeans to remove the original eastern gateway, appeasing them with plaster casts, and funded on-\nsite preservation.\n3. In-Situ Preservation [1 Mark] : John Marshall and H.H. Cole insisted on preserving relics at their \noriginal site (in-situ) rather than plundering them for foreign display."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain the architectural components of a Buddhist Stupa with a neat description.",
        "options": null,
        "answer": "Architectural components of a stupa",
        "explanation": "1. Anda [0.75 Mark] : The hemispherical earthen/brick mound symbolizing the cosmic dome of creation.\n2. Harmika [0.75 Mark] : A square balcony-like structure atop the mound, representing the sacred abode \nof the gods.\n3. Yashti and Chhatri [0.75 Mark] : A central mast (Yashti) arising from the harmika, surmounted by an \numbrella (Chhatri) symbolizing spiritual sovereignty.\n4. Vedika and Toranas [0.75 Mark] : A circumambulatory stone railing (Vedika) and four richly sculpted \nceremonial gateways (Toranas) aligned with cardinal directions."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the main teachings of Mahavira and the five vows of Jainism.",
        "options": null,
        "answer": "Teachings of Mahavira and five vows",
        "explanation": "1. Core Philosophy [1.5 Marks] :\n- Animation of Nature: All elements (earth, water, rocks) possess living souls (jivas).\n- Extreme Non-violence (Ahimsa): Highest ethical duty; no injury to any living organism.\n- Karma and Asceticism: Penance, fasting, and self-denial are required to free the soul from the cycle of \nrebirth.\n2. Five Great Vows (Mahavratas) [1.5 Marks] :\n(i) Ahimsa (not killing), (ii) Satya (truthfulness), (iii) Asteya (not stealing), (iv) Aparigraha (non-\npossession of property), (v) Brahmacharya (celibacy)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "What were the 'Four Noble Truths' and the 'Eightfold Path' (Ashtangika Marga) taught by the Buddha?",
        "options": null,
        "answer": "Four Noble Truths and Eightfold Path",
        "explanation": "1. Four Noble Truths (Arya Satya) [1.5 Marks] :\n(i) Life is full of sorrow (Dukkha).\n(ii) Desire/attachment (Tanha) is the root cause of sorrow.\n(iii) Renunciation of desire leads to cessation of sorrow (Nirodha).\n(iv) The path to end sorrow is the Eightfold Path (Marga).\n2. Eightfold Path (Majjhima Patipada) [1.5 Marks] :\nRight view, right resolve, right speech, right action, right livelihood, right effort, right mindfulness, and \nright concentration; avoiding both extreme asceticism and sensory indulgence."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "How did the Buddhist Sangha function? Describe its internal organization and admission rules.",
        "options": null,
        "answer": "Organization and functioning of Buddhist Sangha",
        "explanation": "1. Democratic Functioning [1 Mark] : Functioned like a tribal assembly (Gana/Sangha); decisions were \nreached through discussion, consensus, or voting by ballot when disagreements arose.\n2. Egalitarian Brotherhood [1 Mark] : On joining the Sangha, all previous social identities (varna, caste, \nclan) were erased; monks owned only essential items (yellow robes and an alms bowl).\n3. Inclusion of Women [1 Mark] : Following Ananda's pleading, Buddha permitted women into the \nSangha as Bhikkhunis (nuns), who lived under strict monastic Vinaya codes."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "Differentiate between Hinayana (Theravada) and Mahayana Buddhism.",
        "options": null,
        "answer": "Hinayana vs Mahayana comparison",
        "explanation": "1. Concept of Buddha [1 Mark] : Hinayana viewed the Buddha as a mortal human teacher whose path \nmust be followed; Mahayana elevated Buddha to a divine savior deity.\n2. Form of Worship [1 Mark] : Hinayana practiced aniconic contemplation of symbols (wheel, stupa); \nMahayana introduced sculpted idol worship and prayer rituals.\n3. The Ideal [1 Mark] : Hinayana focused on individual liberation as an Arhat; Mahayana focused on the \nBodhisattva ideal (compassionate beings who delay their own nirvana to rescue suffering humanity)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Explain the significance of the Shalabhanjika motif at Sanchi Stupa.",
        "options": null,
        "answer": "Significance of Shalabhanjika motif",
        "explanation": "1. Description [1 Mark] : A sculpted maiden holding onto a flowering tree branch, carved on the bracket \nof the gateway.\n2. Folk Origin [1 Mark] : Originates from popular folk belief where the touch of a virtuous maiden was \nbelieved to make barren trees flower and yield fruit.\n3. Syncretic Buddhism [1 Mark] : Demonstrates that Buddhist art assimilated auspicious pre-Buddhist \nsymbols of fertility and prosperity to connect with lay devotees."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "What is the Therigatha? Why is it considered an exceptional historical text?",
        "options": null,
        "answer": "Significance of the Therigatha",
        "explanation": "1. Description [1 Mark] : A Pali text forming part of the Sutta Pitaka, containing verses composed by \nsenior Buddhist nuns (Theris).\n2. Celebration of Freedom [1 Mark] : The poems express women's joy at escaping domestic drudgery \n(pounding rice, cooking, abusive husbands) and achieving spiritual enlightenment.\n3. Rare Subaltern Female Voice [1 Mark] : It stands as one of the very few surviving ancient Indian \nliterary works authored entirely by women expressing their autonomous spiritual agency."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "Discuss the evolution of early Hindu temple architecture from a simple Garbhagriha to complex \nstructures.",
        "options": null,
        "answer": "Evolution of early Hindu temple architecture",
        "explanation": "1. Early Flat-Roofed Stage [1 Mark] : Began as a modest single square room called Garbhagriha with a \nsingle door for worship (e.g. Temple 17 at Sanchi).\n2. Addition of Shikhara [1 Mark] : A towering superstructure (Shikhara) was constructed over the \nsanctum to symbolize the cosmic mountain (Meru).\n3. Assembly Halls & Enclosures [1 Mark] : Mandapas (pillared audience halls), pradakshinapatha \n(circumambulatory passages), elaborate gateways, and gateway sculptures were integrated over time."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Who were the Ajivikas and Lokayatas? How did their philosophies differ from mainstream Vedic \ntradition?",
        "options": null,
        "answer": "Ajivikas and Lokayatas philosophies",
        "explanation": "1. Ajivikas [1.5 Marks] : Founded by Makkhali Gosala; fatalists who believed that human destiny is ruled \nentirely by inexorable cosmic fate (Niyati), rendering moral efforts and rituals meaningless.\n2. Lokayatas (Charvakas) [1.5 Marks] : Materialists who asserted that humans consist purely of physical \nelements (earth, water, fire, air); rejected rebirth, the soul, and Vedic sacrificial rituals as priestly \ndeception."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Examine the life, enlightenment, core philosophy, and social appeal of Gautama Buddha. Why did \nBuddhism spread so rapidly across the Indian subcontinent and beyond?",
        "options": null,
        "answer": "Comprehensive essay on the Buddha and spread of Buddhism",
        "explanation": "Marking Scheme (8 Marks total):\n1. Life & Traumatic Sights (2 Marks):\n- Prince Siddhartha of Sakya clan at Kapilavastu encountered four sights: an old man, a sick man, a \ncorpse, and a serene wandering mendicant.\n- Renounced royal life, meditated, and attained enlightenment at Bodh Gaya; delivered first sermon at \nSarnath.\n2. Core Philosophy & Middle Path (2 Marks):\n- World is anicca (transient/impermanent) and anatta (soulless); dukkha (suffering) is intrinsic.\n- Preached the Middle Path (Majjhima Patipada) between extreme self-mortification and worldly \nindulgence.\n- Emphasized individual righteous conduct and compassion to attain Nirvana (extinguishing ego and \ndesires).\n3. Social Critique and Democratic Sangha (2 Marks):\n- Rejected Vedic animal sacrifices and divine origin of the Varna system.\n- Replaced birth-based superiority with ethical merit; opened Sangha to all varnas, untouchables, and \nwomen.\n4. Factors for Rapid Spread (2 Marks):\n- Preached in common people's language (Prakrit/Pali) rather than elite Sanskrit.\n- Emphasized love, non-violence, and practical morality rather than expensive rituals.\n- Attracted oppressed lower castes, urban merchants (who funded stupas), and imperial rulers like \nAshoka and Kanishka."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "'The mid-first millennium BCE witnessed a vibrant debate among diverse intellectual and \nphilosophical traditions in India.' Discuss this statement with reference to the Upanishadic thinkers, \nMahavira, Buddha, Ajivikas, and Lokayatas.",
        "options": null,
        "answer": "Philosophical ferment of mid-first millennium BCE",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Context of Ferment (2 Marks):\n- 6th century BCE witnessed the Second Urbanization, rise of mahajanapadas, and questioning of rigid \nLater Vedic animal sacrifices.\n- Philosophers gathered at Kutagarashalas to debate the nature of reality, rebirth, and human action.\n2. Upanishadic Seekers (1.5 Marks):\n- Explored the mystery of death, the ultimate cosmic reality (Brahman), and the individual immortal soul \n(Atman), seeking salvation through spiritual knowledge.\n3. Jainism & Mahavira (1.5 Marks):\n- Proclaimed that all nature is animated; emphasized supreme non-violence (Ahimsa), karma, and \nmonastic asceticism.\n4. Buddhism & the Buddha (1.5 Marks):\n- Rejected both Vedic ritualism and extreme ascetic penance, teaching the Middle Path, ethical conduct, \nand Nirvana.\n5. Radical Fatalists and Materialists (1.5 Marks):\n- Ajivikas (Makkhali Gosala): Believed that fate (Niyati) predetermines all sorrow and joy, rendering moral \ndeeds inconsequential.\n- Lokayatas (Ajita Kesakambalin): Denied the existence of an afterlife, soul, or karma, teaching empirical \nmaterialism."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Explain the architectural features, symbolic meanings, and patronage behind the construction of \nBuddhist stupas with special reference to Sanchi.",
        "options": null,
        "answer": "Architectural features and patronage of stupas",
        "explanation": "Marking Scheme (8 Marks total):\n1. Origins and Symbolic Meaning (2.5 Marks):\n- Stupas were sacred mounds raised over the corporeal relics (bones, ashes) or belongings of the \nBuddha or revered monks.\n- Symbolized the Buddha's Mahaparinirvana and the cosmic dome of creation.\n2. Architectural Anatomy (3 Marks):\n- Anda: The hemispherical earthen and brick dome.\n- Harmika: Square balcony atop the anda symbolizing the abode of gods.\n- Yashti & Chhatri: Central spire with three ceremonial umbrellas.\n- Pradakshinapatha: Circumambulatory stone path enclosed by a stone railing (Vedika).\n- Toranas: Four monumental carved gateways oriented to cardinal directions.\n3. Votive Inscriptions & Democratic Patronage (2.5 Marks):\n- Financed not just by emperors, but by collective contributions:\n  - Inscriptions at Sanchi record gifts by royal ladies, the guild of ivory carvers of Vidisha, merchants, \nordinary artisans, monks, and nuns."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source excerpt from the Sutta Pitaka carefully and answer the questions:\nSource: Advice to Sigala\n'Here is advice given by the Buddha to a wealthy householder named Sigala:\n'In five ways should a master look after his servants and employees: by assigning them work according to \ntheir strength, by supplying them with food and wages, by tending them in sickness; by sharing with them \ndelicacies and by granting leave at times... In five ways should the clansman look after the samanas \n(ascetics) and brahmanas: by affection in act and speech and mind, by keeping open house to them, by \nsupplying their worldly needs...'\n(i) To whom is the Buddha addressing this ethical advice? (1 Mark)\n(ii) State any two duties of a master towards his servants and workers. (1 Mark)\n(iii) How does this teaching reflect the humanistic and practical approach of early Buddhism? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Advice to Sigala Source Question",
        "explanation": "Marking Scheme:\n(i) Addressee [1 Mark] : Addressed to Sigala, a wealthy young householder.\n(ii) Duties of Master [1 Mark] : Assigning labor according to physical capacity, providing fair \nwages/food, nursing them during illness, and granting leave.\n(iii) Humanistic Approach [2 Marks] :\n1. Ethical reciprocity: Transformed master-servant and householder-ascetic relations into bonds of \nmutual respect and compassion rather than exploitation. [1 Mark]\n2. Universal morality: Emphasized real-world social responsibilities rather than abstract theology or \nanimal sacrifice. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following poem from the Therigatha carefully and answer the questions:\nSource: The Verses of Mutta\n'O free, indeed, O gloriously free am I in thirty ways,\nFree from my pestle, my mortar and my insolent husband,\nFree from my pot and the stench of my dirty room,\nAll that is gone, all that is burned up,\nI am at peace, blissful, and meditating under the cool forest trees.'\n(i) Who composed this poem and to which text does it belong? (1 Mark)\n(ii) From what household burdens did the speaker celebrate her liberation? (1 Mark)\n(iii) Why is the Therigatha considered a landmark text for understanding early Indian women's lives? \n(2 Marks)",
        "options": null,
        "answer": "Solutions for Mutta's Verses Source Question",
        "explanation": "Marking Scheme:\n(i) Author & Text [1 Mark] : Composed by Buddhist nun Mutta; belongs to the Therigatha (part of Sutta \nPitaka).\n(ii) Burdens Listed [1 Mark] : The pestle and mortar (domestic grain pounding), cooking pot, filthy room, \nand an arrogant, abusive husband.\n(iii) Landmark Significance [2 Marks] :\n1. Rare feminine voice: Captures authentic first-person female experiences of domestic oppression in \npatriarchal households. [1 Mark]\n2. Spiritual autonomy: Proves that the Buddhist monastic path offered ancient women a liberating \nalternative space to achieve intellectual and spiritual liberation. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Analyze the iconography and sculpture of Sanchi. How did sculptors portray the Jataka stories, \nnatural motifs, and non-Buddhist popular symbols?",
        "options": null,
        "answer": "Iconography and sculpture of Sanchi Stupa",
        "explanation": "Marking Scheme (8 Marks total):\n1. Jataka Narratives in Stone (2.5 Marks):\n- Depicted past lives of the Buddha; e.g. the Vessantara Jataka on the northern gateway showing the \ngenerous prince giving away his elephant, horses, and children to fulfill charity.\n2. Aniconic Representation of Buddha (2.5 Marks):\n- Empty seat / throne: Meditation and enlightenment.\n- Stupa: Mahaparinirvana.\n- Wheel (Dharmachakra): First sermon at Sarnath.\n- Footprints (Paduka) and umbrella: His sacred presence.\n3. Natural Motifs & Animals (1.5 Marks):\n- Beautiful carvings of elephants (symbol of strength and wisdom), horses, monkeys, lions, and cattle, \ncreating an animate visual world.\n4. Non-Buddhist Popular Motifs (1.5 Marks):\n- Shalabhanjika: Auspicious tree maiden bringing fertility.\n- Gajalakshmi: Goddess of good fortune flanked by elephants bathing her with water vessels.\n- Serpentine Nagas and floral creepers integrated from folk belief."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Discuss the growth of Puranic Hinduism between c. 600 BCE and 600 CE. Explain the rise of \nVaishnavism, Shaivism, and the evolution of temple architecture.",
        "options": null,
        "answer": "Growth of Puranic Hinduism and temple architecture",
        "explanation": "Marking Scheme (8 Marks total):\n1. Emergence of Puranic Hinduism (2 Marks):\n- Puranas were composed in simple Sanskrit verse to make divine lore accessible to women and \nShudras (excluded from Vedic study).\n- Devotion (Bhakti) to personal gods replaced elaborate fire sacrifices.\n2. Vaishnavism and the Avatara Doctrine (2 Marks):\n- Focused on devotion to Vishnu; popularized the 10 incarnations (Matsya, Kurma, Varaha, Narasimha, \nRama, Krishna) descending to combat cosmic disorder.\n3. Shaivism and the Linga (2 Marks):\n- Focused on Shiva, symbolized through the aniconic Linga as well as anthropomorphic forms \n(Nataraaja, yogic ascetic).\n4. Evolution of Temple Architecture (2 Marks):\n- Transitioned from simple flat-roofed single-celled Garbhagriha to towering curvilinear Shikharas, ornate \nmandapas, and rock-cut monolithic wonders like the Kailashanatha temple at Ellora."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding the Fatalists and Materialists from the Digha Nikaya and answer \nthe questions:\nSource: Fatalists and Materialists\n'Makkhali Gosala said: 'There is neither cause nor basis for the sins of living beings... There is no human \npower or energy... All beings are bent this way and that by their fate (niyati)...'\nAjita Kesakambalin said: 'There is no such thing as alms, sacrifice, or offering... A human being is made up \nof the four elements. When he dies, the earthy in him returns to the earth, the fluid to water, the heat to fire, \nthe windy to air, and his faculties pass into space... Fools and wise alike are cut off, extinguished. They do \nnot exist after death.''\n(i) Name the teachers representing the Fatalist and Materialist schools in the excerpt. (1 Mark)\n(ii) What was Makkhali Gosala's view on human effort and fate? (1 Mark)\n(iii) Differentiate between the core philosophies of these two heterodox thinkers. (2 Marks)",
        "options": null,
        "answer": "Solutions for Fatalists and Materialists Source Question",
        "explanation": "Marking Scheme:\n(i) Teachers [1 Mark] : Fatalist: Makkhali Gosala (Ajivika); Materialist: Ajita Kesakambalin (Lokayata).\n(ii) Gosala's View [1 Mark] : Complete denial of human free will and agency; all beings are helpless \nplaythings of pre-ordained destiny (Niyati).\n(iii) Philosophical Differences [2 Marks] :\n1. Gosala (Ajivika) believed in a soul that must pass through an unalterable cycle of millions of rebirths \ndetermined by fate. [1 Mark]\n2. Ajita (Materialist) denied the existence of soul, afterlife, and karma, asserting that consciousness \nends permanently when the physical body dissolves. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Explain the role played by the Begums of Bhopal in the preservation of the Sanchi Stupa. Contrast \ntheir actions with the tragic fate of the Amaravati Stupa.",
        "options": null,
        "answer": "Preservation of Sanchi by Begums of Bhopal vs Amaravati",
        "explanation": "Marking Scheme (8 Marks total):\n1. Contribution of the Begums of Bhopal (4 Marks):\n- Shahjehan Begum and her successor Sultan Jehan Begum guarded the stupa against European \ncollectors.\n- When the French and British sought permission to carry away the eastern gateway, the Begums \nprovided carefully prepared plaster casts, preserving the original in-situ.\n- Provided immense financial grants for setting up a museum and library at the site, building a \nguesthouse for John Marshall, and funding the publication of Marshall's monumental excavation \nvolumes.\n2. The Tragedy of Amaravati (4 Marks):\n- Discovered in 1796 by a local raja who used its limestone slabs to build a temple.\n- British officials like Walter Elliot hauled away tons of intricately carved panels ('Elliot marbles') to \nMadras.\n- Colin Mackenzie, Robert Sewell, and others stripped the site, shipping masterpieces to the British \nMuseum, London, leaving the great stupa an unrecognizable barren mound."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Discuss the rock-cut cave architecture and monumental sculpture of ancient India with special \nreference to the Kailashanatha Temple at Ellora and the Ajanta cave shrines.",
        "options": null,
        "answer": "Rock-cut architecture at Ellora and Ajanta",
        "explanation": "Marking Scheme (8 Marks total):\n1. Rock-Cut Tradition in India (2 Marks):\n- Initiated in the 3rd century BCE under Ashoka at the Barabar caves (for Ajivikas); blossomed into \nviharas (monasteries) and chaityas (prayer halls) in the Western Ghats.\n2. Kailashanatha Temple, Ellora (Cave 16) (3.5 Marks):\n- Patronized by Rashtrakuta king Krishna I in the 8th century CE.\n- Carved out of a single living basalt rock from top to bottom (vertical excavation), removing an \nestimated 200,000 tons of rock.\n- Features a monumental courtyard, multi-storeyed pavilions, life-size sculpted elephants, and dynamic \nrelief panels of Ravana shaking Mount Kailash.\n3. Ajanta Caves and Buddhist Murals (2.5 Marks):\n- Horseshoe-shaped gorge containing 30 rock-cut caves dating from 2nd c. BCE to 5th c. CE.\n- Renowned for world-famous tempera murals illustrating Jataka tales, Bodhisattva Padmapani, and \nVajrapani with expressive naturalism and spiritual tranquility."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "book": "Themes in Indian History Part-II (Medieval India)",
      "title": "Through the Eyes of Travellers: Perceptions of Society (c. 10th - 17th Century)",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part II: Medieval India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which 11th-century Central Asian scholar from Khwarizm authored the voluminous Arabic text 'Kitab-\nul-Hind'?",
        "options": [
          "(a) Al-Biruni",
          "(b) Ibn Battuta",
          "(c) Abdur Razzaq",
          "(d) François Bernier"
        ],
        "answer": "(a) Al-Biruni",
        "explanation": "Al-Biruni, born in Khwarizm (modern Uzbekistan) in 973 CE, arrived in India following Mahmud of Ghazni \nand authored the encyclopedic 80-chapter work Kitab-ul-Hind in Arabic."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In his travelogue 'Rihla', Ibn Battuta expressed great fascination for two unusual Indian plant products \nunfamiliar to his North African readers. These were:",
        "options": [
          "(a) Paan (betel leaf) and Coconut",
          "(b) Mango and Sugarcane",
          "(c) Cotton and Indigo",
          "(d) Tea and Coffee"
        ],
        "answer": "(a) Paan (betel leaf) and Coconut",
        "explanation": "Ibn Battuta dedicated detailed chapters to describing the paan (chewed with areca nut) and the coconut \ntree (which he compared to a human palm tree with nuts resembling human heads with two eyes)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which French physician and political philosopher stayed in India for 12 years (1656–1668) and \nserved at the Mughal court of Aurangzeb?",
        "options": [
          "(a) François Bernier",
          "(b) Jean-Baptiste Tavernier",
          "(c) Duarte Barbosa",
          "(d) Niccolao Manucci"
        ],
        "answer": "(a) François Bernier",
        "explanation": "François Bernier was a French doctor and philosopher who served as personal physician to Dara Shukoh \nand later attached himself to the Mughal courtier Danishmand Khan."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "According to Ibn Battuta, the foot-post communication system in 14th-century India was known as \nthe:",
        "options": [
          "(a) Dawa",
          "(b) Uluq",
          "(c) Barid",
          "(d) Sarai"
        ],
        "answer": "(a) Dawa",
        "explanation": "Ibn Battuta recorded two postal systems: the horse-post (Uluq) stationed every 4 miles, and the foot-\npost (Dawa) with three runners' stations per mile, which was swifter than the horse-post."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Why did Al-Biruni reject the Brahmanical notion of 'pollution' (untouchability) in the caste system?",
        "options": [
          "(a) He argued it was contrary to the universal laws of nature, where everything impure strives to regain purity",
          "(b) Because the Quran prohibited it",
          "(c) Because he found no castes in India",
          "(d) He believed only kings were pure"
        ],
        "answer": "(a) He argued it was contrary to the universal laws of nature, where everything\nimpure strives to regain purity",
        "explanation": "Al-Biruni observed that in nature, anything that falls into impurity cleanses itself (the sun purifies the air \nand salt prevents the sea from rotting), making hereditary human pollution unnatural."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "François Bernier dedicated his major work 'Travels in the Mughal Empire' to which European \nmonarch?",
        "options": [
          "(a) King Louis XIV of France",
          "(b) King Charles II of England",
          "(c) King Philip IV of Spain",
          "(d) Emperor Leopold I"
        ],
        "answer": "(a) King Louis XIV of France",
        "explanation": "Bernier dedicated his travelogue to Louis XIV of France, structuring his observations as a stark warning \nto the French monarch against the dangers of royal monopoly over land."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which Sultan of Delhi appointed Ibn Battuta as the Qazi (judge) of Delhi in 1334 due to his Islamic \nscholarship?",
        "options": [
          "(a) Muhammad bin Tughlaq",
          "(b) Alauddin Khalji",
          "(c) Ghiyasuddin Balban",
          "(d) Firoz Shah Tughlaq"
        ],
        "answer": "(a) Muhammad bin Tughlaq",
        "explanation": "Impressed by Ibn Battuta's deep expertise in Islamic Sharia law, Sultan Muhammad bin Tughlaq \nappointed him Qazi of Delhi with an enormous annual stipend."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What fundamental flaw did François Bernier attribute to the Mughal economic and agrarian system?",
        "options": [
          "(a) The absence of private property in land",
          "(b) Excessive reliance on foreign sea trade",
          "(c) The ban on metal currency",
          "(d) Complete lack of agricultural rivers"
        ],
        "answer": "(a) The absence of private property in land",
        "explanation": "Bernier asserted that the Mughal emperor owned all land, preventing private hereditary ownership, \nwhich he claimed disincentivized long-term agricultural investment and ruined the peasantry."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Al-Biruni identified which three major barriers that made it difficult for him to understand Indian \nsociety?",
        "options": [
          "(a) The Sanskrit language, differences in religious beliefs, and the insular pride of the local scholars",
          "(b) Severe hot climate, tropical diseases, and forest beasts",
          "(c) Lack of paper, ink, and scribes",
          "(d) Hostile rajas, bandit attacks, and lack of currency"
        ],
        "answer": "(a) The Sanskrit language, differences in religious beliefs, and the insular pride\nof the local scholars",
        "explanation": "Al-Biruni highlighted three barriers: the immense linguistic complexity of Sanskrit, deep theological and \nmetaphysical differences, and the insularity and aloofness of local Brahmanas."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which 15th-century diplomat from Herat visited the Vijayanagara Empire and described its seven \nconcentric rings of defensive walls enclosing agricultural fields?",
        "options": [
          "(a) Abdur Razzaq Samarqandi",
          "(b) Duarte Barbosa",
          "(c) Marco Polo",
          "(d) Afanasy Nikitin"
        ],
        "answer": "(a) Abdur Razzaq Samarqandi",
        "explanation": "Abdur Razzaq, an envoy from the court of the Timurid ruler Shah Rukh of Herat, visited Calicut and \nVijayanagara in the 1440s, admiring the city's concentric fortification."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What derogatory term did François Bernier use to characterize Mughal cities, asserting they owed \ntheir existence solely to the presence of the royal court?",
        "options": [
          "(a) Camp Towns",
          "(b) Shadow Cities",
          "(c) Feudal Castles",
          "(d) Parasitic Hamlets"
        ],
        "answer": "(a) Camp Towns",
        "explanation": "Bernier labeled Mughal urban centers as 'camp towns', claiming they were artificially sustained by the \nimperial military camp and collapsed whenever the emperor departed."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "In Ibn Battuta's description of Daulatabad (Maharashtra), what was 'Tarababad'?",
        "options": [
          "(a) A specialized marketplace for male and female singers and dancers",
          "(b) A fortress armory",
          "(c) A grand central public bath",
          "(d) A royal elephant stable"
        ],
        "answer": "(a) A specialized marketplace for male and female singers and dancers",
        "explanation": "Ibn Battuta described Tarababad in Daulatabad as an elaborate market with shops for female and male \nsingers, featuring decorated pavilions and royal listening chambers."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which French jeweler traveled across India six times in the 17th century, comparing Indian trading \nconditions with those of Iran and the Ottoman Empire?",
        "options": [
          "(a) Jean-Baptiste Tavernier",
          "(b) François Bernier",
          "(c) Niccolao Manucci",
          "(d) Duarte Barbosa"
        ],
        "answer": "(a) Jean-Baptiste Tavernier",
        "explanation": "Jean-Baptiste Tavernier was a French gem merchant who undertook six extensive voyages to India, \nproviding rich numismatic and commercial accounts of Mughal diamond mines."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "How did Al-Biruni structure each of the 80 chapters in his magnum opus 'Kitab-ul-Hind'?",
        "options": [
          "(a) Beginning with a question, followed by a description based on Sanskritic traditions, and concluding with a cross-cultural comparison",
          "(b) In rhyming Arabic poetic verses",
          "(c) As a diary entry recording daily market prices",
          "(d) In the form of letters addressed to the Caliph"
        ],
        "answer": "(a) Beginning with a question, followed by a description based on Sanskritic\ntraditions, and concluding with a cross-cultural comparison",
        "explanation": "Al-Biruni adopted a rigorous geometric methodology: each chapter opened with a precise question, \nfollowed by an objective analysis of Sanskritic texts, and concluded with comparisons with Greek and \nPersian cultures."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Ibn Battuta was sent by Sultan Muhammad bin Tughlaq in 1342 as an official royal ambassador to the \ncourt of the ruler of:",
        "options": [
          "(a) China (Mongol Yuan Dynasty)",
          "(b) France",
          "(c) Egypt",
          "(d) Persia"
        ],
        "answer": "(a) China (Mongol Yuan Dynasty)",
        "explanation": "In 1342, the Sultan sent Ibn Battuta as imperial envoy to the Mongol court in China, taking him through \ncentral India, the Malabar coast, Maldives, and Sumatra."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Whose ideas on Asian societies were heavily influenced by François Bernier's erroneous thesis of \n'state ownership of land'?",
        "options": [
          "(a) Montesquieu and Karl Marx",
          "(b) Adam Smith and John Stuart Mill",
          "(c) Jean-Jacques Rousseau and Voltaire",
          "(d) Max Weber and Emile Durkheim"
        ],
        "answer": "(a) Montesquieu and Karl Marx",
        "explanation": "Bernier's binary model influenced Montesquieu's concept of 'Oriental Despotism' and Karl Marx's \nformulation of the stagnant 'Asiatic Mode of Production'."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What vivid socio-cultural practice did François Bernier describe with horror after witnessing a 12-year-\nold child widow forced onto a funeral pyre?",
        "options": [
          "(a) Sati",
          "(b) Child marriage",
          "(c) Female infanticide",
          "(d) Purdah"
        ],
        "answer": "(a) Sati",
        "explanation": "Bernier penned a harrowing eyewitness account of Sati near Lahore, where an agonizingly young 12-\nyear-old widow was physically held down on her dead husband's flaming pyre."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "According to official Mughal records like the Ain-i Akbari, the state's land revenue demand was \nregarded as:",
        "options": [
          "(a) A remuneration of sovereignty (tax on produce) rather than rent on crown land",
          "(b) Rent charged by the royal landlord",
          "(c) A voluntary religious charity",
          "(d) Penalty for forest clearing"
        ],
        "answer": "(a) A remuneration of sovereignty (tax on produce) rather than rent on crown\nland",
        "explanation": "Abul Fazl's Ain-i Akbari clarifies that land revenue was 'jizya/kharaj-i jins' (a remuneration paid by \npeasant landowners to the monarch for maintaining peace and security), disproving Bernier's crown-\nownership claim."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What made travel in 14th-century India perilous for Ibn Battuta, as documented in his Rihla?",
        "options": [
          "(a) Frequent attacks by highway robbers and brigands",
          "(b) Total absence of paved roads",
          "(c) Ban on foreign visitors by regional sultans",
          "(d) Lack of horses and carts"
        ],
        "answer": "(a) Frequent attacks by highway robbers and brigands",
        "explanation": "Ibn Battuta survived multiple armed assaults by bandits; traveling from Delhi to Malabar, his caravan \nwas attacked, many companions were slain, and he was stripped of his possessions."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which Italian traveler settled in India for over 50 years and practiced medicine at the Mughal court, \nauthoring the 'Storia do Mogor'?",
        "options": [
          "(a) Niccolao Manucci",
          "(b) Duarte Barbosa",
          "(c) Marco Polo",
          "(d) Pietro Della Valle"
        ],
        "answer": "(a) Niccolao Manucci",
        "explanation": "Niccolao Manucci arrived in India as a young adventurer in the 17th century, worked as an artilleryman \nand physician, and spent his entire life in India compiling Storia do Mogor."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following Sanskritic texts did Al-Biruni translate into Arabic for the Islamic world?",
        "options": [
          "(a) Patanjali's Yoga Sutra and works of Varahamihira",
          "(b) The Ramayana and Mahabharata",
          "(c) Kautilya's Arthashastra",
          "(d) Kalidasa's Shakuntala"
        ],
        "answer": "(a) Patanjali's Yoga Sutra and works of Varahamihira",
        "explanation": "Al-Biruni translated Sanskrit scientific and philosophical masterpieces, including Patanjali's grammatical \nand yogic treatises and astronomical works of Varahamihira and Brahmagupta, into Arabic."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Ibn Battuta noted that the postal runner system was so swift that fresh fruits from Khurasan reached \nthe Sultan in Delhi within:",
        "options": [
          "(a) 5 days",
          "(b) 50 days",
          "(c) 20 days",
          "(d) 1 day"
        ],
        "answer": "(a) 5 days",
        "explanation": "While ordinary merchants took 50 days to march from the Indus to Delhi, the relay foot-post (Dawa) \ncarried intelligence and fresh melons from Central Asia in just 5 days."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "How did Al-Biruni compare the four Indian castes with social divisions in ancient Persia?",
        "options": [
          "(a) He showed that ancient Zoroastrian Persia also recognized four social classes (knights, monks, physicians, and peasants)",
          "(b) He claimed Persia had no social distinctions",
          "(c) He stated Persian society had 10 castes",
          "(d) He claimed Indian castes were imported from Greece"
        ],
        "answer": "(a) He showed that ancient Zoroastrian Persia also recognized four social\nclasses (knights, monks, physicians, and peasants)",
        "explanation": "Al-Biruni noted that Sasanian Persia maintained four functional ranks: knights/princes, monks/fire-\npriests, physicians/astronomers, and peasants/artisans, showing social ranking was universal."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In his comparative analysis, Bernier claimed that Indian society lacked a vital social stratum present \nin Western Europe. This was:",
        "options": [
          "(a) A prosperous middle class",
          "(b) An elite aristocracy",
          "(c) Slaves",
          "(d) Peasant farmers"
        ],
        "answer": "(a) A prosperous middle class",
        "explanation": "Bernier lamented that in Mughal India there was no middle class ('a middle state'): society was split \nbetween opulent court tyrants and impoverished, destitute masses."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which of the following Indian textiles did Ibn Battuta highlight as enjoying tremendous international \ncommercial demand across Asian ports?",
        "options": [
          "(a) Fine muslin, cottons, silks, and satin",
          "(b) Jute mats only",
          "(c) Woolen overcoats",
          "(d) Synthetic nylon"
        ],
        "answer": "(a) Fine muslin, cottons, silks, and satin",
        "explanation": "Ibn Battuta noted that Indian manufactured cotton cloths, fine muslins (so sheer they could pass \nthrough a ring), and brocaded silks were heavily sought in East Africa, Egypt, and China."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): François Bernier's portrayal of the Mughal Empire was systematically biased towards \nproving Western superiority.\nReason (R): Bernier belonged to the European intellectual tradition that used India as an inverted \nmirror to highlight the virtues of European private property and enlightened monarchy.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Bernier constantly contrasted Mughal India with Europe, deliberately painting \nIndia as a dystopia of state tyranny to defend French aristocratic private property."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Al-Biruni relied heavily on Sanskritic sacred and secular texts rather than popular \neveryday interactions to reconstruct Indian society.\nReason (R): He was immersed in the scholarly milieu of Brahmanas who introduced him to the Vedas, \nPuranas, the Bhagavad Gita, and Patanjali's treatises.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Al-Biruni studied classical Sanskrit literature with pundits, which gave him an \nexceptionally learned but text-centric Brahmana perspective on society."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): Ibn Battuta found Indian cities to be decaying, depopulated, and economically \nstagnating in the 14th century.\nReason (R): Sultan Muhammad bin Tughlaq had ordered the complete destruction of Delhi's \ncommercial markets.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are completely false. Ibn Battuta marveled at the immense wealth, bustling bazaars, and \nvibrant population of Indian cities like Delhi and Daulatabad."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The postal system in 14th-century India served not only state administrative \nintelligence but also commercial mercantile operations.\nReason (R): Merchants could transmit credit notes, remit cash, and dispatch goods across long \ndistances using state-protected postal relays.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Ibn Battuta highlighted that the postal system facilitated rapid trade \ncommunication and commercial remittances alongside imperial espionage."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Bernier's claim that the Mughal emperor was the sole owner of all agricultural land in \nIndia was factually accurate.\nReason (R): 16th-century Persian revenue records like the Ain-i Akbari state that land was state-\nowned crown property leased to tenants.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. Bernier was wrong; Mughal records prove peasants held hereditary ownership \nrights, and land revenue was a tax on crop production, not rental on state property."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Describe the three major barriers identified by Al-Biruni that hindered his understanding of Indian \nculture and society.",
        "options": null,
        "answer": "Three barriers identified by Al-Biruni",
        "explanation": "1. Linguistic Barrier (Sanskrit) [1 Mark] : Sanskrit had a vast vocabulary and distinct grammatical \nstructure where ideas and concepts could not be easily translated into Arabic or Persian.\n2. Religious and Philosophical Divergence [1 Mark] : Deep differences in religious theology, \nmetaphysical concepts, and social practices made immediate comprehension difficult.\n3. Insularity of the Local Population [1 Mark] : The intellectual pride, suspicion, and aloofness of local \nscholars (Brahmanas) who concealed knowledge from foreign outsiders."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did Ibn Battuta describe the Indian postal system? Differentiate between Uluq and Dawa.",
        "options": null,
        "answer": "Ibn Battuta's account of Uluq and Dawa",
        "explanation": "1. Overall Postal Network [1 Mark] : An exceptionally efficient communication network that enabled \nimperial surveillance, troop mobilization, and commercial credit over vast distances.\n2. Uluq (Horse-Post) [1 Mark] : Maintained by royal horses stationed at relay posts (dawa/sarai) every \nfour miles along highways.\n3. Dawa (Foot-Post) [1 Mark] : Had three relay stations per mile; runners held rods with brass bells, \nrunning swiftly to transfer mail bags, operating faster than the horse-post."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain François Bernier's concept of 'Crown Ownership of Land' in Mughal India and discuss its \nsupposed disastrous consequences.",
        "options": null,
        "answer": "Bernier on Crown Ownership of Land",
        "explanation": "1. Central Premise [1 Mark] : Bernier asserted that the Mughal emperor owned all agricultural land and \ndistributed it among nobles as temporary jagirs that could not be inherited.\n2. Disincentive for Investment [1 Mark] : Believed that since jagirdars held land temporarily, neither lords \nnor peasants invested in canals or manure, ruining soil fertility.\n3. Social Degradation [1 Mark] : Claimed this resulted in the absence of private property, eliminating the \nmiddle class and creating an impoverished, oppressed peasantry."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Why did Al-Biruni reject the Brahmanical concept of untouchability? Explain with his analogy of \nnature.",
        "options": null,
        "answer": "Al-Biruni's critique of untouchability",
        "explanation": "1. Natural Law of Purity [1.5 Marks] : Al-Biruni argued that according to the universal laws of nature, \neverything that falls into impurity strives to regain its original state of cleanliness.\n2. Natural Analogies [1.5 Marks] : He noted that the sun purifies the atmosphere and salt prevents the \nocean from decaying; therefore, the concept of hereditary, irreversible human social pollution was \nunnatural and fundamentally flawed."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "How did Ibn Battuta describe Indian cities, with special reference to Delhi and Daulatabad?",
        "options": null,
        "answer": "Ibn Battuta's description of Indian cities",
        "explanation": "1. Vibrant & Populous [1 Mark] : Noted that Indian cities were bustling, densely populated, and wealthy, \nsustained by rich agricultural hinterlands and commercial trade.\n2. Delhi's Magnificence [1 Mark] : Described Delhi as a vast city with formidable fortified walls \ncontaining storage rooms for food, weapons, and cavalry regiments.\n3. Daulatabad & Cultural Bazaars [1 Mark] : Observed that Daulatabad rivaled Delhi in size, praising its \nlively commercial bazaars and Tarababad, a dedicated marketplace for performing artists."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What were 'Camp Towns' according to François Bernier? Why is this view considered limited by \nmodern historians?",
        "options": null,
        "answer": "Bernier's Camp Towns and modern critique",
        "explanation": "1. Bernier's Concept [1.5 Marks] : Bernier claimed that Mughal cities were merely imperial military \ncamps that arose when the emperor arrived and dissolved into ghost towns when he moved away.\n2. Modern Historical Critique [1.5 Marks] : In reality, 17th-century India had thriving manufacturing \ncenters (Agra, Surat, Dhaka), inland commercial ports, pilgrimage centers, and banking hubs that \noperated independently of the imperial court."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Explain how Al-Biruni adopted a distinctive geometric and comparative methodology in writing 'Kitab-\nul-Hind'.",
        "options": null,
        "answer": "Al-Biruni's geometric methodology",
        "explanation": "1. Chapter Organization [1 Mark] : Divided the 80 chapters systematically across religion, philosophy, \nfestivals, astronomy, alchemy, manners, weights, and laws.\n2. Geometric Format [1 Mark] : Began every chapter with an analytical question, followed by \ndescriptions drawn from Sanskrit texts, and concluded with objective cross-cultural comparisons.\n3. Cross-Cultural Comparisons [1 Mark] : Frequently drew parallels between Indian philosophical \nconcepts and ancient Greek ideas (Plato, Socrates) as well as Islamic theology."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Analyze François Bernier's horrifying eyewitness account of the practice of Sati.",
        "options": null,
        "answer": "Bernier's account of Sati",
        "explanation": "1. Coercive Violence [1 Mark] : Witnessed an emotional account of a 12-year-old child widow at Lahore \nwho was forced onto the funeral pyre while weeping in terror.\n2. Role of Priests and Family [1 Mark] : Noted that orthodox Brahmanas and elder female relatives \nphysically held down the screaming child to prevent her escape.\n3. Social Conditioning [1 Mark] : Differentiated between older women who embraced self-immolation \ndue to societal indoctrination and young victims subjected to brutal coercion."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What does Ibn Battuta's description of coconut and paan reveal about the role of travelogues in \ncross-cultural understanding?",
        "options": null,
        "answer": "Role of travelogues in cross-cultural understanding",
        "explanation": "1. Bridging the Unfamiliar [1 Mark] : Used vivid analogies to explain alien botanical species to North \nAfrican audiences (e.g. comparing coconut to human faces and dates).\n2. Cultural Appreciation [1 Mark] : Documented the refined social etiquette of chewing paan offered to \nhonored guests at Indian courts.\n3. Ethnographic Value [1 Mark] : Transformed personal sensory encounters into valuable historical \ndocuments of daily medieval material culture."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "How did European travelers like Jean-Baptiste Tavernier and Duarte Barbosa view Indian merchants \nand trade?",
        "options": null,
        "answer": "European travelers on Indian trade and merchants",
        "explanation": "1. Wealthy Mercantile Elite [1 Mark] : Tavernier marveled at the financial sophistication of Indian \nmerchants (Banias, Chettis) who operated extensive transnational credit networks (Hundis).\n2. Diamond Mines & Global Trade [1 Mark] : Documented booming diamond production in Golconda and \nthe flourishing trade with Persia and the Ottoman Empire.\n3. South Indian Maritime Network [1 Mark] : Portuguese traveler Duarte Barbosa praised the trade in \ntextiles, pearls, and spices across the Indian Ocean basin."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Compare and contrast the accounts of Indian society, economy, and politics left by Al-Biruni, Ibn \nBattuta, and François Bernier. How do their personal backgrounds and intellectual aims influence \ntheir writings?",
        "options": null,
        "answer": "Comprehensive comparison of Al-Biruni, Ibn Battuta, and Bernier",
        "explanation": "Marking Scheme (8 Marks total):\n1. Al-Biruni (11th Century) (2.5 Marks):\n- Scholar, mathematician, linguist from Khwarizm; learned Sanskrit and studied Hindu scriptures.\n- Kitab-ul-Hind: Objective, geometric, scholarly inquiry into religion, caste, astronomy, and philosophy.\n- Rejected untouchability as unnatural; highlighted barriers of language and Brahmanical insularity.\n2. Ibn Battuta (14th Century) (2.5 Marks):\n- Moroccan globetrotter and Islamic jurist (Qazi); traveled out of curiosity and adventure.\n- Rihla: Lively, observational travelogue detailing cities (Delhi, Daulatabad), swift postal relays (Uluq, \nDawa), coconut, and paan.\n- Portrayed India as an integrated, prosperous participant in Afro-Eurasian trade networks.\n3. François Bernier (17th Century) (3 Marks):\n- French physician and Enlightenment intellectual; viewed India through a rigid Eurocentric binary.\n- Travels in the Mughal Empire: Portrayed India as a despotic wasteland ruined by crown ownership of \nland.\n- Warned King Louis XIV against state land monopolies, influencing European thinkers like Montesquieu \nand Marx."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "'Bernier's description of the Mughal economy was an oversimplified binary model that contrasted a \nstagnant India with a progressive Europe.' Critically evaluate this statement with reference to his \nviews on landownership, peasantry, and cities.",
        "options": null,
        "answer": "Critical evaluation of Bernier's views on Mughal economy",
        "explanation": "Marking Scheme (8 Marks total):\n1. Binary Framework of Comparison (2 Marks):\n- Bernier systematically compared Mughal India unfavorably with Europe, constructing an intellectual \ndichotomy: European freedom vs Asian despotism, private property vs state monopoly.\n2. Flawed Claim of Crown Landownership (2.5 Marks):\n- Asserted that the Emperor owned all land, eliminating private property and driving peasants into \nmisery.\n- Reality: Mughal records (Ain-i Akbari) confirm peasants possessed hereditary ownership rights, and \nland revenue was a sovereign protection tax, not crown rental.\n3. Overdrawn Peasant Distress (1.5 Marks):\n- While peasant taxation was heavy, the agrarian countryside was not uniformly destitute; dynamic \ncommercial crops (cotton, indigo, sugarcane) were widely cultivated.\n4. Mischaracterization of Cities as 'Camp Towns' (2 Marks):\n- Dismissed Indian cities as parasitical military encampments.\n- In reality, Mughal cities were humming mercantile hubs with thriving craft guilds, wholesale markets \n(mandis), and banking networks."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Examine Ibn Battuta's observations on 14th-century Indian cities, communication systems, and trade \nnetworks under Sultan Muhammad bin Tughlaq.",
        "options": null,
        "answer": "Ibn Battuta's observations on cities, communications, and trade",
        "explanation": "Marking Scheme (8 Marks total):\n1. Prosperity and Urban Density (2.5 Marks):\n- Found Indian cities crowded, exciting, and prosperous, supported by a productive agrarian hinterland \nyielding two crops a year.\n- Delhi: Described as an immense metropolis with 28 massive gates and colossal fort walls storing \nprovisions during sieges.\n- Daulatabad: Praised for its trade and Tarababad, a specialized musical entertainment market.\n2. The Efficient Postal Communication Relay (3 Marks):\n- Uluq (Horse post): Run by fresh horses stationed every four miles.\n- Dawa (Foot post): Three stations per mile operated by runners holding ringing brass batons; \ntransmitted intelligence from Sind to Delhi in 5 days.\n- Facilitated state espionage, official directives, cash remittances, and transport of luxury perishables.\n3. Indian Trade in the Indian Ocean World (2.5 Marks):\n- High global demand for Indian cottons, muslins, silks, and spices in Southeast Asia, China, and the Red \nSea.\n- Documented the prominence of merchant communities who financed overseas caravans and utilized \ncredit instruments."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from Al-Biruni's Kitab-ul-Hind carefully and answer the questions:\nSource: The System of Varnas\n'The highest caste are the Brahmana, of whom the books of the Hindus tell us that they were created from \nthe head of Brahman... The next caste are the Kshatriya, who were created from the shoulders and hands of \nBrahman... Below them follow the Vaisya, who were created from the thigh of Brahman. The Sudra, who \nwere created from his feet... However, Al-Biruni notes: 'Everything that falls into a state of impurity strives \nand succeeds in regaining its original condition of purity. The sun cleanses the air, and the salt in the sea \nsecures the water from corruption. If it were not so, life on earth would be impossible...'\n(i) According to Hindu texts cited by Al-Biruni, how were the four varnas created? (1 Mark)\n(ii) What natural phenomena does Al-Biruni mention to illustrate the law of purity? (1 Mark)\n(iii) Why did Al-Biruni reject the concept of hereditary social pollution in the caste system? (2 Marks)",
        "options": null,
        "answer": "Solutions for Al-Biruni's Varna Source Question",
        "explanation": "Marking Scheme:\n(i) Creation of Varnas [1 Mark] : Brahmanas from the head, Kshatriyas from shoulders/hands, Vaishyas \nfrom thighs, and Shudras from feet of Brahman.\n(ii) Natural Phenomena [1 Mark] : The sun purifying the air and salt preserving sea water from rotting.\n(iii) Rejection of Pollution [2 Marks] :\n1. Violation of cosmic order: Insisted that natural law guarantees all contaminated things can restore \ntheir original purity. [1 Mark]\n2. Social critique: Viewed the notion of an irrevocably polluted human caste as irrational and contrary to \nfundamental natural laws. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from Ibn Battuta's Rihla carefully and answer the questions:\nSource: On Horse-Post and Foot-Post\n'In India the postal system is of two kinds. The horse-post, called 'uluq', is run by royal horses stationed at a \ndistance of every four miles. The foot-post has three stations per mile; it is called 'dawa'... At each station \nthere is a village, outside which are three pavilions in which sit men with their girded loins, ready to start. \nEach carries a rod, two cubits long, with copper bells at the top... When the runner starts from the city he \nholds the letter in one hand and the rod with bells in the other, and he runs as fast as he can...'\n(i) Name the two types of postal systems described in the passage. (1 Mark)\n(ii) Describe the gear and method used by the foot-post runner. (1 Mark)\n(iii) How did this communication network benefit both the state and merchants? (2 Marks)",
        "options": null,
        "answer": "Solutions for Ibn Battuta Postal System Source Question",
        "explanation": "Marking Scheme:\n(i) Two Postal Systems [1 Mark] : Uluq (horse-post) and Dawa (foot-post).\n(ii) Gear & Method [1 Mark] : Runner tied up his loins, held the letters in one hand and a staff with \njingling copper bells in the other, running full sprint to the next post.\n(iii) Dual Benefits [2 Marks] :\n1. State: Transmitted rapid military news, orders, and dispatched imperial spies across provinces in \nrecord time. [1 Mark]\n2. Merchants: Enabled long-distance trade, transmission of commercial intelligence, and dispatch of \ncredit notes (hundis). [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Discuss Al-Biruni's description of the caste system in India. How did he contextualize it by comparing \nit with ancient Persia and Islamic egalitarian ideals?",
        "options": null,
        "answer": "Al-Biruni on the caste system and cross-cultural comparisons",
        "explanation": "Marking Scheme (8 Marks total):\n1. Account of the Four Varnas (2.5 Marks):\n- Detailed the scriptural creation myth (head, shoulders, thighs, feet) of Brahmanas, Kshatriyas, \nVaishyas, and Shudras.\n- Noted that despite formal separation, Vaishyas and Shudras lived together in the same villages.\n- Mentioned the Antyaja (outcastes) who provided menial labor outside the four-varna scheme.\n2. Comparison with Ancient Persia (2.5 Marks):\n- Argued that social ranking was not unique to India; ancient Zoroastrian Persia recognized four classes \n(knights, priests, physicians, peasants).\n- Pointed out that social stratification is a universal structural feature of complex civilisations.\n3. The Islamic Egalitarian Contrast and Critique of Pollution (3 Marks):\n- Stated that in Islam, all human beings are viewed as equal before God, distinguished only by piety.\n- Formulated his famous philosophical objection to hereditary untouchability, arguing that nature \nrestores purity to all things, rendering eternal social impurity unnatural."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Examine the status, roles, and conditions of women in medieval India as reflected in the travelogues \nof foreign visitors, especially François Bernier and Ibn Battuta.",
        "options": null,
        "answer": "Women's status in medieval India through foreign travelogues",
        "explanation": "Marking Scheme (8 Marks total):\n1. Bernier's Focus on Sati (3 Marks):\n- Highlighted the traumatic violence of Sati; described both indoctrinated widows who immolated \nthemselves willingly and young girls forced onto pyres by male relatives and priests.\n- Used Sati to portray Indian society as barbarous and in need of European enlightenment.\n2. Women in Commerce, Labor, and Production (2.5 Marks):\n- Ibn Battuta and other visitors noted that women played vital economic roles in agriculture, weaving, \nand street retail.\n- In Daulatabad's Tarababad, female musicians and singers managed their own commercial \nestablishments.\n3. Women in Courtly Politics and Slave Markets (2.5 Marks):\n- Ibn Battuta purchased female domestic slaves, who served as companions, maids, and spies for the \nSultan.\n- Royal women (like Nur Jahan and Jahanara) possessed significant wealth, owned commercial ships, \nand engaged in architectural patronage."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following excerpt from François Bernier's Travels in the Mughal Empire and answer the \nquestions:\nSource: The Poor Peasant\n'Owing to the absolute power of the monarch, the country is ruined; the fields are deserted, and the \npeasantry are grievously oppressed. In India there is no middle state: a man must either be of the highest \nrank or live in poverty. A lack of private property in land discourages investment, for who will cultivate the \nsoil if he cannot bequeath his land to his children?...'\n(i) What core reason does Bernier give for the ruin of Indian agriculture? (1 Mark)\n(ii) What did Bernier mean by the statement 'In India there is no middle state'? (1 Mark)\n(iii) How have modern historians corrected Bernier's assessment of Mughal property rights? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Bernier's Poor Peasant Source Question",
        "explanation": "Marking Scheme:\n(i) Core Reason [1 Mark] : The lack of private property in land due to the absolute royal monopoly of the \nmonarch.\n(ii) No Middle State [1 Mark] : Society lacked a prosperous middle class; it was divided between an \nopulent aristocracy and an impoverished peasantry.\n(iii) Modern Historical Corrections [2 Marks] :\n1. Peasants possessed hereditary land rights: Peasant families owned and cultivated ancestral fields so \nlong as they paid the tax. [1 Mark]\n2. Land revenue was a sovereign tax on crop output, not land rent; vibrant merchant and artisan middle \nclasses flourished in urban centers. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Discuss the life, adventurous journeys, and ethnographical methodology of Ibn Battuta as an intrepid \nglobetrotter of the 14th century.",
        "options": null,
        "answer": "Life, travels, and methodology of Ibn Battuta",
        "explanation": "Marking Scheme (8 Marks total):\n1. Life and Passion for Travel (2.5 Marks):\n- Born in Tangier, Morocco, into an educated legal family; valued travel and personal experience far \nabove bookish knowledge.\n- Journeyed for over 30 years across North Africa, Mecca, Persia, Syria, India, the Maldives, Sri Lanka, \nand China, traveling roughly 73,000 miles.\n2. Adventures and Dangers Faced (2.5 Marks):\n- Endured pirate attacks, shipwrecks, bandits, and severe fever, showing exceptional resilience.\n- Lived in India for nearly a decade; served as Qazi of Delhi and imperial diplomat to China under \nMuhammad bin Tughlaq.\n3. Ethnographical Value of the Rihla (3 Marks):\n- Dictated his memoirs to scribe Ibn Juzayy at Fez.\n- Recorded minute socio-cultural details: food habits (coconut, paan), slavery, gender roles, city life, \nreligious shrines, and transport networks."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "How did foreign travelers contribute to the reconstruction of medieval Indian history? Discuss the \nstrengths and limitations of travel literature as a historical source.",
        "options": null,
        "answer": "Strengths and limitations of travel literature",
        "explanation": "Marking Scheme (8 Marks total):\n1. Strengths of Travel Accounts (4 Marks):\n- Fresh outsider perspective: Noticed everyday sights and practices that native writers took for granted \n(postal relays, coconut, bazaars, social customs).\n- Cross-cultural comparisons: Al-Biruni compared India with Greece/Persia; Tavernier compared India \nwith the Ottoman empire.\n- Eyewitness accounts of court politics, administration, urban layouts, and artisanal manufacturing.\n2. Limitations and Biases (4 Marks):\n- Eurocentric & Ideological Prejudices: Bernier distorted facts to demonstrate Western superiority and \ndefend French private property.\n- Linguistic and Cultural Barriers: Al-Biruni struggled with Sanskrit nuances; Ibn Battuta relied on Arabic \ntranslators.\n- Overgeneralizations: Mistaking local customs for universal practices (e.g., Bernier generalizing all \ntowns as temporary 'camp towns')."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "book": "Themes in Indian History Part-II (Medieval India)",
      "title": "Bhakti-Sufi Traditions: Changes in Religious Beliefs and Devotional Texts",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part II: Medieval India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The 'Nalayira Divyaprabandham', often described as the 'Tamil Veda', is a sacred anthology of 4,000 \nverses composed by the:",
        "options": [
          "(a) Alvars",
          "(b) Nayanars",
          "(c) Virashaivas",
          "(d) Siddhas"
        ],
        "answer": "(a) Alvars",
        "explanation": "The Nalayira Divyaprabandham was compiled in the 10th century by Nathamuni, consisting of 4,000 \ndevotional hymns composed by the twelve Vaishnavite Alvar poet-saints of Tamil Nadu."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which female Alvar poet-saint saw herself as the beloved bride of Lord Vishnu and sang passionate \nverses of divine love?",
        "options": [
          "(a) Andal",
          "(b) Karaikkal Ammaiyar",
          "(c) Akka Mahadevi",
          "(d) Mirabai"
        ],
        "answer": "(a) Andal",
        "explanation": "Andal was the only woman among the twelve Alvars; she visualized herself as the bride of Vishnu \n(Ranganatha) and composed celebrated devotional hymns like Tiruppavai."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The Virashaiva (Lingayat) movement in 12th-century Karnataka was spearheaded by:",
        "options": [
          "(a) Basavanna",
          "(b) Ramanuja",
          "(c) Shankaracharya",
          "(d) Madhvacharya"
        ],
        "answer": "(a) Basavanna",
        "explanation": "Basavanna, a Brahmana minister at the court of the Kalachuri king Bijjala, led the Virashaiva/Lingayat \nmovement, composing Vachanas in simple Kannada."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following practices is uniquely observed by the followers of the Lingayat (Virashaiva) \ntradition upon death?",
        "options": [
          "(a) They bury their dead without cremation",
          "(b) They perform Vedic post-mortem rituals (shraddha)",
          "(c) They consign the body to a river",
          "(d) They leave corpses on towers of silence"
        ],
        "answer": "(a) They bury their dead without cremation",
        "explanation": "Lingayats believe that on death the devotee unites directly with Shiva and will not be reborn; therefore, \nthey do not cremate or perform funerary shraddhas, but bury their dead ceremonially."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The famous Sufi shrine (Dargah) of Khwaja Muinuddin Chishti, revered as 'Gharib Nawaz', is situated \nin:",
        "options": [
          "(a) Ajmer",
          "(b) Delhi",
          "(c) Fatehpur Sikri",
          "(d) Gulbarga"
        ],
        "answer": "(a) Ajmer",
        "explanation": "Khwaja Muinuddin Chishti settled in Ajmer (Rajasthan) in the late 12th century, where his Dargah \nattracted royal pilgrimages from Mughal emperors including Akbar."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which Sikh Guru compiled the holy scripture 'Adi Granth' (Guru Granth Sahib) in 1604, incorporating \nthe verses of Kabir, Baba Farid, and Ravidas?",
        "options": [
          "(a) Guru Arjan Dev",
          "(b) Guru Nanak Dev",
          "(c) Guru Gobind Singh",
          "(d) Guru Tegh Bahadur"
        ],
        "answer": "(a) Guru Arjan Dev",
        "explanation": "Guru Arjan Dev, the fifth Sikh Guru, compiled the Adi Granth in 1604 at Amritsar, synthesizing the hymns \nof the first five Gurus with verses of Sufi and Bhakti saints."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Who was the legendary preceptor (Guru) chosen by Mirabai, defying royal Rajput caste orthodoxy?",
        "options": [
          "(a) Raidas (Ravidas)",
          "(b) Kabir",
          "(c) Vallabhacharya",
          "(d) Chaitanya"
        ],
        "answer": "(a) Raidas (Ravidas)",
        "explanation": "Mirabai, a Sisodia royal princess of Mewar, took Raidas—a leather-worker from an untouchable caste—\nas her spiritual guru, challenging feudal and caste hierarchies."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The term 'Ulatbansi' associated with Kabir refers to:",
        "options": [
          "(a) Upside-down mystical sayings where everyday meanings are inverted",
          "(b) War poems sung to horses",
          "(c) Melodious flutes played by Krishna",
          "(d) Classical Persian court poetry"
        ],
        "answer": "(a) Upside-down mystical sayings where everyday meanings are inverted",
        "explanation": "Kabir composed 'Ulatbansi' (upside-down verses) like 'the ocean is burned in fire' or 'the clay vessel \nmolds the potter' to shock the listener into awakening to mystical truth."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "In Sufism, the hospice where the spiritual master (Pir/Shaikh) lived with his disciples was known as a:",
        "options": [
          "(a) Khanqah",
          "(b) Madrasa",
          "(c) Dargah",
          "(d) Sarai"
        ],
        "answer": "(a) Khanqah",
        "explanation": "A Khanqah was a Sufi residential hospice managed by a Shaikh/Pir that housed disciples, hosted \nvisiting travelers, and served community meals from an open kitchen (langar)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which Chola bronze sculpture of the medieval period achieved global fame as a supreme synthesis \nof art, religion, and dance?",
        "options": [
          "(a) Nataraja (Dancing Shiva)",
          "(b) Gommateshwara",
          "(c) Varaha",
          "(d) Buddha at Sarnath"
        ],
        "answer": "(a) Nataraja (Dancing Shiva)",
        "explanation": "Chola bronzes, particularly the four-armed cosmic Nataraja performing the Ananda Tandava dance \nenclosed in a circle of fire, represent the pinnacle of South Indian metal sculpture."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The 'Tevaram' is a revered Tamil devotional canon containing the collected hymns of which Nayanar \nsaints?",
        "options": [
          "(a) Appar, Sambandar, and Sundarar",
          "(b) Nammalvar and Periyalvar",
          "(c) Andal and Karaikkal Ammaiyar",
          "(d) Basavanna and Allama Prabhu"
        ],
        "answer": "(a) Appar, Sambandar, and Sundarar",
        "explanation": "The Tevaram, compiled in the 10th century under Chola patronage by Nambiyandar Nambi, contains the \nShaivite hymns of Appar, Sambandar, and Sundarar."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which female Nayanar devotee adopted the path of extreme asceticism and wished to be \ntransformed into a terrifying, emaciated demoness (pey) to guard Shiva's feet?",
        "options": [
          "(a) Karaikkal Ammaiyar",
          "(b) Andal",
          "(c) Akka Mahadevi",
          "(d) Lalleshwari"
        ],
        "answer": "(a) Karaikkal Ammaiyar",
        "explanation": "Karaikkal Ammaiyar renounced worldly beauty and family life, praying to Lord Shiva to strip away her \nyouthful feminine flesh and grant her the skeletal form of a dancing demoness."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The concept of 'Ziyarat' in the Sufi tradition signifies:",
        "options": [
          "(a) Pilgrimage to the tombs (dargahs) of Sufi saints on their death anniversaries",
          "(b) Fasting during the holy month of Ramadan",
          "(c) Giving a mandatory percentage of income as charity",
          "(d) Performing holy warfare"
        ],
        "answer": "(a) Pilgrimage to the tombs (dargahs) of Sufi saints on their death\nanniversaries",
        "explanation": "Ziyarat refers to the devotional pilgrimage to the dargahs of revered Sufis to seek spiritual grace \n(barakat), especially during the saint's Urs (death anniversary celebrating union with God)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following Bhakti saints preached the 'Eka Sarana Nama Dharma' in Assam, establishing \nprayer halls called 'Kirtana-ghosa' and monasteries called 'Satras'?",
        "options": [
          "(a) Shankaradeva",
          "(b) Chaitanya Mahaprabhu",
          "(c) Ramananda",
          "(d) Dadu Dayal"
        ],
        "answer": "(a) Shankaradeva",
        "explanation": "In late 15th-century Assam, Shankaradeva popularized Eka Sarana Nama Dharma (surrender to the One \nsupreme Vishnu/Krishna) through Naamghar/Kirtana-ghosa prayer halls and Satras."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What is the distinction between 'Saguna' and 'Nirguna' Bhakti traditions?",
        "options": [
          "(a) Saguna focused on worship of specific deities with anthropomorphic forms (avatars), while Nirguna worshiped an abstract, formless supreme reality",
          "(b) Saguna was for women only, Nirguna for men",
          "(c) Saguna rejected temples, Nirguna built temples",
          "(d) There was no difference"
        ],
        "answer": "(a) Saguna focused on worship of specific deities with anthropomorphic forms\n(avatars), while Nirguna worshiped an abstract, formless supreme reality",
        "explanation": "Saguna Bhakti (Mirabai, Tulsidas, Surdas) worshiped God with attributes and personal forms (Rama, \nKrishna), whereas Nirguna Bhakti (Kabir, Guru Nanak) focused on the formless (Nirankar), unmanifest \nDivine."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The legendary Sufi saint Shaikh Nizamuddin Auliya was known among devotees by which title?",
        "options": [
          "(a) Sultan-ul-Mashaikh",
          "(b) Chiragh-i Dehli",
          "(c) Gharib Nawaz",
          "(d) Qutb-ud-din"
        ],
        "answer": "(a) Sultan-ul-Mashaikh",
        "explanation": "Shaikh Nizamuddin Auliya of Delhi was revered by disciples and the public as 'Sultan-ul-Mashaikh' \n('Sultan of the Spiritual Masters')."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Guru Gobind Singh established the 'Khalsa Panth' (the army of the pure) in which year, instituting the \nFive Ks?",
        "options": [
          "(a) 1699",
          "(b) 1604",
          "(c) 1526",
          "(d) 1708"
        ],
        "answer": "(a) 1699",
        "explanation": "Guru Gobind Singh founded the Khalsa at Anandpur Sahib on Baisakhi in 1699, establishing the five \nsacred symbols: Kesh, Kangha, Kara, Kachhera, and Kirpan."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following literary works is an allegorical Sufi romance (Premakhyan) composed in \nAwadhi by Malik Muhammad Jayasi?",
        "options": [
          "(a) Padmavat",
          "(b) Madhumalti",
          "(c) Mrigavati",
          "(d) Chandayan"
        ],
        "answer": "(a) Padmavat",
        "explanation": "Malik Muhammad Jayasi composed Padmavat in Awadhi around 1540 CE, using the heroic romance of \nPadmini and Ratansen as an allegory for the soul's passionate journey to God."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In the Islamic state, protected non-Muslim subjects (such as Hindus, Jews, and Christians) who paid \nthe poll tax 'Jizya' were designated as:",
        "options": [
          "(a) Zimmis",
          "(b) Ulema",
          "(c) Murids",
          "(d) Sufis"
        ],
        "answer": "(a) Zimmis",
        "explanation": "Zimmis ('protected people') were non-Muslim subjects who paid Jizya to the Islamic state in return for \nstate protection of their lives, property, and freedom of religious practice."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What does the term 'Sharia' encompass in Islam?",
        "options": [
          "(a) The legal code governing the Muslim community based on the Quran and Hadith",
          "(b) Musical gatherings in Sufi khanqahs",
          "(c) Land grants given to temples",
          "(d) Royal seals used on imperial farmans"
        ],
        "answer": "(a) The legal code governing the Muslim community based on the Quran and\nHadith",
        "explanation": "Sharia is the comprehensive religious and civil legal framework of Islam derived from the Quran, the \nSunna/Hadith (traditions of Prophet Muhammad), Qiyas (analogical deduction), and Ijma (consensus)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which local deity in Puri, Odisha, originally worshipped by indigenous forest dwellers, came to be \nidentified as a form of Lord Vishnu by the 12th century?",
        "options": [
          "(a) Lord Jagannatha",
          "(b) Venkateshwara",
          "(c) Vitthala",
          "(d) Ranganatha"
        ],
        "answer": "(a) Lord Jagannatha",
        "explanation": "Lord Jagannatha (literally 'Lord of the World') was an indigenous tribal deity carved out of wood who \nwas harmoniously integrated into the Puranic pantheon as a manifestation of Vishnu."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which musical genre, popularized in Chishti shrines, involves devotional singing in mystical \nassemblies (Sama) to induce ecstatic trance?",
        "options": [
          "(a) Qawwali",
          "(b) Dhrupad",
          "(c) Tappa",
          "(d) Khayal"
        ],
        "answer": "(a) Qawwali",
        "explanation": "Qawwali, pioneered in Delhi by Amir Khusrau, was the signature musical medium of Chishti sama \nassemblies used to evoke divine love and spiritual ecstasy."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "How did the Virashaivas view the authority of the Vedas and the caste hierarchy?",
        "options": [
          "(a) They explicitly rejected the divine authority of the Vedas, caste distinctions, and the notion of ritual pollution",
          "(b) They insisted on performing horse sacrifices",
          "(c) They made Sanskrit the compulsory language of prayer",
          "(d) They banned women from entering temples"
        ],
        "answer": "(a) They explicitly rejected the divine authority of the Vedas, caste distinctions,\nand the notion of ritual pollution",
        "explanation": "The Virashaivas fiercely opposed Vedic sacrificial rituals, condemned caste-based discrimination, \nwelcomed outcastes, and rejected Brahmanical pollution taboos."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which Chishti saint is buried at the Dargah situated in Ghiyaspur, Delhi, where thousands of devotees \ngather every day?",
        "options": [
          "(a) Shaikh Nizamuddin Auliya",
          "(b) Qutbuddin Bakhtiyar Kaki",
          "(c) Baba Farid",
          "(d) Shaikh Salim Chishti"
        ],
        "answer": "(a) Shaikh Nizamuddin Auliya",
        "explanation": "Shaikh Nizamuddin Auliya's shrine is situated at Ghiyaspur (now Nizamuddin East, New Delhi) on the \nbanks of the Yamuna, a bustling center of pilgrimage."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The poems composed by Basavanna and his followers in Kannada to communicate mystical ideas \ndirectly to common folk are called:",
        "options": [
          "(a) Vachanas",
          "(b) Abhangs",
          "(c) Shabad",
          "(d) Kirtans"
        ],
        "answer": "(a) Vachanas",
        "explanation": "Vachanas ('sayings') are spontaneous prose-poems composed in everyday Kannada by Lingayat saints \n(Basavanna, Akka Mahadevi) expressing devotion to Shiva as Kudalasangamadeva."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Chishti Sufis in India adopted local vernacular languages and musical traditions for \ndevotional expression.\nReason (R): They realized that reaching the hearts of the common masses required communicating \nin regional dialects (Hindavi) through poetry and musical sama.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Chishtis embraced local languages (Hindavi, Dakhani, Punjabi) and musical \ntraditions (qawwali) to build bridges with ordinary people."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Chola kings built magnificent stone temples like Thanjavur, Gangaikondacholapuram, \nand Chidambaram and donated land to Alvars and Nayanars.\nReason (R): Rulers sought divine legitimation for their royal authority by associating themselves with \npopular local Bhakti traditions.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Royal temple building and the consecration of metal images of Appar and \nSambandar were calculated political strategies to gain mass popular loyalty."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): Kabir's poetry expresses a synthesis of diverse mystical vocabularies including \nVedantic Brahman and Islamic Allah.\nReason (R): Kabir was initiated into both the Rigvedic priestly guild and the orthodox Sunni Ulema \nhierarchy.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(c) A is true but R is false.",
        "explanation": "Assertion A is true (Kabir used Allah, Khuda, Pir alongside Atman, Brahman, Rama). Reason R is false \nbecause Kabir belonged to a humble weaver family and mocked both orthodox priesthoods."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): Mirabai broke social taboos of caste and patriarchal domesticity in medieval \nRajasthan.\nReason (R): She rejected her aristocratic matrimonial ties to the Sisodia clan of Mewar and accepted \nan untouchable leather-worker (Raidas) as her spiritual preceptor.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R correctly demonstrates how Mirabai's actions directly shattered both feudal \nmarital expectations and upper-caste purity boundaries."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The Lingayats vehemently encouraged child marriage and prohibited the remarriage of \nwidows.\nReason (R): Basavanna and his followers strictly upheld the traditional marital laws laid down in the \nManusmriti.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. The Lingayats opposed child marriage, endorsed post-puberty marriage, \npermitted the remarriage of widows, and openly rejected Dharmashastric social codes."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Explain the major features of the Virashaiva (Lingayat) tradition of 12th-century Karnataka.",
        "options": null,
        "answer": "Major features of the Virashaiva tradition",
        "explanation": "1. Leadership and Sacred Symbol [1 Mark] : Founded by Basavanna; devotees wear a small Shiva linga \nin a silver capsule looped over the left shoulder.\n2. Rejection of Vedic Authority & Caste [1 Mark] : Vehemently rejected the authority of the Vedas, temple \nidolatry, and caste hierarchy, welcoming all castes and untouchables.\n3. Progressive Social Customs [1 Mark] : Condemned child marriage, approved post-puberty marriage \nand widow remarriage, and buried their dead without performing shraddha rites."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did the Alvars and Nayanars initiate a devotional revolution in Tamil Nadu? Mention their sacred \ntexts.",
        "options": null,
        "answer": "Alvars and Nayanars devotional movement",
        "explanation": "1. Egalitarian Devotion [1 Mark] : Traveled from village to village singing emotional hymns in Tamil; \nopened the path of divine love to all castes, including untouchable communities like the Pulaiyas.\n2. Involving Women Devotees [1 Mark] : Included prominent women saints like Andal (Alvar bride of \nVishnu) and Karaikkal Ammaiyar (ascetic Nayanar devotee of Shiva).\n3. Sacred Compilations [1 Mark] : The Vaishnavite Alvars compiled the 'Nalayira Divyaprabandham' \n(Tamil Veda), while the Shaivite Nayanars compiled the 'Tevaram'."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the main practices associated with Chishti Sufi Khanqahs in India.",
        "options": null,
        "answer": "Practices in Chishti Khanqahs",
        "explanation": "1. Community Living & Langar [1 Mark] : Managed by a spiritual master (Shaikh); featured an open \ncommunity kitchen (langar) where people of all religions ate together without discrimination.\n2. Sama & Musical Assemblies [1 Mark] : Devotional poetry and qawwali sessions (sama) were held to \ninduce mystical trance and divine contemplation.\n3. Assimilation of Local Customs [1 Mark] : Adopted practices like bowing before the Shaikh, shaving \nthe heads of initiates, and yogic breathing techniques to integrate with Indian society."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Analyze the core teachings of Baba Guru Nanak Dev.",
        "options": null,
        "answer": "Core teachings of Guru Nanak Dev",
        "explanation": "1. Nirguna Devotion [1 Mark] : Preached devotion to a formless (Nirankar), eternal, omnipresent Divine \nReality, rejecting anthropomorphic idolatry.\n2. Critique of External Ritualism [1 Mark] : Denounced ritual sacrifices, holy baths, ascetic mortifications, \nand the sectarian scriptures of both Hindus and Muslims.\n3. Nam-Dan-Isnan & Shabad [1 Mark] : Advocated righteous living based on Nam Simran (remembrance \nof the Divine Name), Dan (honest charity), Isnan (purity of body and mind), and singing hymns (Shabad)."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "How did Kabir use language and poetry to express his mystical philosophy?",
        "options": null,
        "answer": "Kabir's poetry and linguistic expression",
        "explanation": "1. Vernacular Reach [1 Mark] : Composed in colloquial Hindavi (Sant Bhasha), an everyday idiom \naccessible to common artisans and villagers.\n2. Synthesis of Vocabularies [1 Mark] : Seamlessly merged Islamic terminology (Allah, Khuda, Hazrat, \nPir) with Vedantic concepts (Brahman, Atman, Shunya, Rama).\n3. Ulatbansi (Inverted Tropes) [1 Mark] : Used paradoxical, startling imagery ('the beast hunts the \nhunter') to jar minds out of conventional dogma into spiritual awakening."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "Discuss the relationship between the Chishti Sufis and the Delhi Sultanate rulers.",
        "options": null,
        "answer": "Chishti Sufis and the Delhi Sultanate",
        "explanation": "1. Ideological Distance [1 Mark] : Chishtis avoided formal political office and imperial titles, preferring \nascetic independence from court intrigues.\n2. Acceptance of Unsolicited Gifts [1 Mark] : They accepted unasked cash offerings (futuh) and \ncharitable land endowments (waqf) to maintain their community langars.\n3. Complex Interdependence [1 Mark] : Kings sought Sufi blessings and proximity to their shrines to \nlegitimize rule, leading to occasional tensions (e.g. Sultan Ghiyasuddin Tughlaq and Nizamuddin Auliya)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Who was Mirabai? How did her life challenge the patriarchal norms of her era?",
        "options": null,
        "answer": "Mirabai's challenge to patriarchal norms",
        "explanation": "1. Rejection of Feudal Domesticity [1 Mark] : A Rajput princess married to the prince of Mewar; she \nrefused marital submission, identifying Krishna as her true and only husband.\n2. Guru from Untouchable Caste [1 Mark] : Took Raidas (a Chamar leather-worker) as her spiritual \npreceptor, defying upper-caste purity rules.\n3. Public Defiance [1 Mark] : Abandoned palace wealth, wandered singing bhajans in public, and \nsurvived royal attempts to poison her, becoming an enduring icon of female spiritual autonomy."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Explain the concept of 'Zimmi' and 'Jizya' in medieval Indian political administration.",
        "options": null,
        "answer": "Zimmi and Jizya concepts",
        "explanation": "1. Definition of Zimmi [1 Mark] : Protected non-Muslim subjects (Hindus, Christians, Jews) living under \nthe governance of an Islamic state.\n2. Nature of Jizya [1 Mark] : A poll tax levied on adult, able-bodied male Zimmis in exchange for \nexemption from military service.\n3. Rights Guaranteed [1 Mark] : Ensured state protection of life, freedom of internal religious practice, \nand preservation of community temples and customs."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What role did royal patronage play in the growth of temple architecture under the Cholas?",
        "options": null,
        "answer": "Chola royal patronage of temples",
        "explanation": "1. Monumental Construction [1 Mark] : Kings like Rajaraja I and Rajendra I built magnificent granite \ntemples at Thanjavur and Gangaikondacholapuram.\n2. Consecration of Saints' Images [1 Mark] : Chola monarchs commissioned exquisite bronze statues of \nNayanar saints (Appar, Sambandar) to be carried in temple processions alongside Shiva.\n3. Institutional Power [1 Mark] : Endowed temples with extensive villages, transforming them into \neconomic, administrative, cultural, and banking hubs."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Describe the integration of local and Puranic cults with special reference to Lord Jagannatha of Puri.",
        "options": null,
        "answer": "Integration of cults: Lord Jagannatha",
        "explanation": "1. Tribal Roots [1 Mark] : Jagannatha was originally worshipped by local forest-dwelling communities as \nan indigenous wooden deity.\n2. Puranic Assimilation [1 Mark] : By the 12th century, Brahmanas identified this tribal wooden image as \nan incarnation of Lord Vishnu (Krishna), alongside his brother Balabhadra and sister Subhadra.\n3. Synthesis of Traditions [1 Mark] : Excluded classical iconographic rules to preserve local folk \naesthetics, exemplifying the seamless dialogue between the 'Great' and 'Little' traditions."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the Chishti tradition in the Indian subcontinent. Discuss their hospice life (khanqah), \ndevotional practices (sama and ziyarat), linguistic integration, and relations with the state.",
        "options": null,
        "answer": "Comprehensive essay on the Chishti tradition in India",
        "explanation": "Marking Scheme (8 Marks total):\n1. Life in the Khanqah (2 Marks):\n- Established communal hospices (e.g. Nizamuddin Auliya's khanqah at Ghiyaspur).\n- Run on an open-door policy where disciples, travelers, and poor folk dined together at the langar.\n- Managed by a Shaikh who granted amulets, moral counseling, and spiritual blessings.\n2. Devotional Practices: Ziyarat & Sama (2 Marks):\n- Ziyarat: Pilgrimage to tombs of saints on their Urs (death anniversary celebrating union with God).\n- Sama: Musical gatherings featuring Qawwali (pioneered by Amir Khusrau) to evoke mystical divine love \nand trance.\n3. Linguistic and Cultural Assimilation (2 Marks):\n- Composed verses in local Hindavi and regional vernaculars rather than exclusive Persian or Arabic.\n- Adopted local folk genres like lurinama (cradle songs) and shadinama (wedding songs) in Dakhani.\n- Incorporated yogic postures, tonsure of heads, and bowing before the master.\n4. Relations with Ruling Dynasties (2 Marks):\n- Maintained spiritual autonomy, declining royal administrative offices.\n- Accepted unasked grants (waqf) and cash donations (futuh) for charity.\n- Emperors (like Akbar) regularly visited shrines like Ajmer to legitimize their imperial sovereignty."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Compare and contrast the Bhakti philosophies of Kabir and Guru Nanak Dev. How did they reject \nritualistic orthodoxies and articulate a vision of Nirguna devotion?",
        "options": null,
        "answer": "Comparative study of Kabir and Guru Nanak Dev",
        "explanation": "Marking Scheme (8 Marks total):\n1. Nirguna Conceptualization of God (3 Marks):\n- Both rejected idol worship, polytheism, and the incarnation (Avatara) doctrine.\n- Kabir: Conceived the Divine as the formless Absolute (Shunya, Brahman), accessible through inward \nspiritual vision.\n- Guru Nanak: Preached devotion to the One formless, omnipresent Creator (Nirankar / Akal Purakh) \nthrough 'Nam Simran'.\n2. Rejection of Religious Orthodoxy (3 Marks):\n- Denounced the external dogmatism of both Hinduism and Islam:\n  - Condemned caste hierarchy, untouchability, sacred threads, and ritualistic baths.\n  - Mocked empty Islamic rituals: formal prayers without heartfelt devotion, fasts, and circumcision.\n  - Replaced institutional priesthoods with personal, inward spiritual realization.\n3. Language, Medium, and Social Organization (2 Marks):\n- Kabir: Composed provocative couplets (Dohas) and Ulatbansi in everyday Hindavi, remaining an \nindependent mystic without institutionalizing a formal church.\n- Guru Nanak: Composed hymns (Shabad) in Punjabi, instituted Sangat (congregation) and Pangat \n(common kitchen), and designated a successor (Angad), founding a distinct organized religious \ntradition (Sikhism)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Examine the role of women poet-saints in the Bhakti movement with special reference to Andal, \nKaraikkal Ammaiyar, and Mirabai.",
        "options": null,
        "answer": "Role of women poet-saints in the Bhakti movement",
        "explanation": "Marking Scheme (8 Marks total):\n1. Andal (Alvar Tradition) (2.5 Marks):\n- Only woman among the 12 Alvars of Tamil Nadu.\n- Saw herself as the bride of Vishnu (Ranganatha), composing Tiruppavai expressing passionate \nspiritual yearning.\n- Refused mortal marriage; her verses remain an integral part of South Indian temple liturgy.\n2. Karaikkal Ammaiyar (Nayanar Tradition) (2.5 Marks):\n- Renounced comfortable married life and youthful beauty to dedicate herself to Lord Shiva.\n- Prayed to be transformed into an emaciated, skeletal demoness (pey) dancing in the cremation \ngrounds alongside Shiva's retinue.\n- Discarded traditional patriarchal models of feminine elegance to attain radical ascetic freedom.\n3. Mirabai (Saguna Tradition of North India) (3 Marks):\n- Rajput princess of Merta married to the Sisodia dynasty of Mewar.\n- Publicly rejected feudal wifely codes, declaring Girdhar Gopal (Krishna) her true husband.\n- Drank the cup of poison sent by the Rana without harm, broke court seclusion, and wandered singing \nbhajans.\n- Took Raidas, an untouchable leather-worker, as her guru, attacking caste prejudice and female \nsubjugation."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding a Vachana composed by Basavanna carefully and answer the \nquestions:\nSource: The Rich Will Make Temples for Shiva\n'The rich will make temples for Shiva.\nWhat shall I, a poor man, do?\nMy legs are pillars,\nthe body the shrine,\nthe head a cupola of gold.\nListen, O Lord of the meeting rivers (Kudalasangamadeva),\nthings standing shall fall,\nbut the moving ever shall stay.'\n(i) Name the saint who composed this Vachana and mention his chosen deity. (1 Mark)\n(ii) How does the author contrast the temples built by the rich with his own body? (1 Mark)\n(iii) Explain the philosophical significance of the line: 'things standing shall fall, but the moving ever \nshall stay'. (2 Marks)",
        "options": null,
        "answer": "Solutions for Basavanna Vachana Source Question",
        "explanation": "Marking Scheme:\n(i) Author & Deity [1 Mark] : Composed by Basavanna; addressed to Shiva as Kudalasangamadeva ('Lord \nof the meeting rivers').\n(ii) Temple vs Body Contrast [1 Mark] : The wealthy build external stone temples, whereas the poor saint \nvisualizes his own physical body as the living, walking shrine (legs as pillars, head as golden cupola).\n(iii) Philosophical Significance [2 Marks] :\n1. Critique of static stone temples: Physical monuments and rigid social structures ('things standing') \nare impermanent and will crumble over time. [1 Mark]\n2. Praise of dynamic spirit: The living human soul, walking devotee, and inner devotion ('the moving') are \nimmortal and spiritually enduring. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following verse by Kabir carefully and answer the questions:\nSource: Who is a True Seeker?\n'Tell me, brother, how can there be two gods for the world?\nWho has led you astray?\nAllah and Ram are one, by different names.\nSome call Him Shiva, some Vishnu, some Allah, some Khuda.\nGold is shaped into bracelets and rings;\nIs it not gold in both?\nWhy make a difference where none exists?\nKabir says: Worship the One Spirit within you.'\n(i) What central message does Kabir convey regarding the names of God? (1 Mark)\n(ii) What metaphor does Kabir use to explain the unity of the Divine? (1 Mark)\n(iii) How does this poem challenge institutional religious dogmatism? (2 Marks)",
        "options": null,
        "answer": "Solutions for Kabir's Verse Source Question",
        "explanation": "Marking Scheme:\n(i) Central Message [1 Mark] : God is One; Ram, Allah, Shiva, and Khuda are different human names for \nthe same singular divine reality.\n(ii) Metaphor of Gold [1 Mark] : Just as gold is fashioned into different ornaments (bracelets, rings) \nwhile remaining pure gold, diverse religions are varied manifestations of the one Divine essence.\n(iii) Challenge to Dogmatism [2 Marks] :\n1. Attacks sectarian hostility: Condemns religious conflicts manufactured by priests and clerics over \nlabels. [1 Mark]\n2. Emphasizes inward realization: Urges seekers to abandon external ritualism and experience the divine \nspirit residing within the human heart. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Trace the origin, spread, and major institutional features of Sufism in India. How did the Chishti silsila \nbecome the most influential order?",
        "options": null,
        "answer": "Origin, spread, and features of Chishti Sufism in India",
        "explanation": "Marking Scheme (8 Marks total):\n1. Origins and Reaction against Materialism (2 Marks):\n- Sufism emerged in the early centuries of Islam as a mystic protest against the growing worldly \nmaterialism and political corruptions of the Caliphate.\n- Emphasized asceticism, deep personal love for God (ishq), and humanitarian service.\n2. Institutional Structure (Silsila and Khanqah) (2.5 Marks):\n- Sufis organized into Silsilas (spiritual lineages) linking disciples through a master (Shaikh/Pir) back to \nProphet Muhammad.\n- Centered on the Khanqah (hospice) where the master guided murids and maintained open community \nkitchens.\n3. The Chishti Silsila in India (2 Marks):\n- Introduced by Khwaja Muinuddin Chishti in Ajmer in the late 12th century.\n- Expanded by luminaries: Qutbuddin Bakhtiyar Kaki, Baba Farid, Nizamuddin Auliya, and Nasiruddin \nChiragh-i Dehli.\n4. Reasons for Chishti Prominence (1.5 Marks):\n- Avoided orthodox fanaticism, embraced local vernaculars (Hindavi), popularized musical sama, and \nmaintained egalitarian open langars for all castes."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Analyze the social and ideological rebellion embodied by the Virashaiva (Lingayat) movement in 12th-\ncentury Karnataka. How did they overturn traditional Brahmanical norms?",
        "options": null,
        "answer": "Virashaiva social rebellion and challenge to Brahmanism",
        "explanation": "Marking Scheme (8 Marks total):\n1. Socio-Religious Context (2 Marks):\n- Founded by Basavanna in 12th-century Karnataka during Kalachuri rule as a radical revolt against \ncaste hierarchy, ritualism, and sacrificial religion.\n2. Rejection of Caste and Purity Taboos (2.5 Marks):\n- Rejected the varna system, declaring all Shiva devotees equal irrespective of birth.\n- Questioned Brahmanical notions of ritual purity and pollution, dining and intermarrying with formerly \nuntouchable communities.\n3. Reform of Marriage and Gender Customs (2 Marks):\n- Strongly opposed child marriage, advocating post-puberty marriage.\n- Supported widow remarriage and accorded spiritual dignity to women saints like Akka Mahadevi.\n4. Distinctive Mortuary and Devotional Rites (1.5 Marks):\n- Rejected cremation and post-mortem shraddha rites, choosing to bury their dead as souls united with \nShiva.\n- Worshipped the personal linga worn on the body rather than participating in temple idolatry."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding a poem by Karaikkal Ammaiyar carefully and answer the \nquestions:\nSource: A Demoness Guards Shiva\n'The female demon with sunken eyes, protruding teeth, and withered breasts,\nwanders in the burning grounds,\nHer legs like dry logs, her voice a screeching howl,\nSinging the praises of the Lord of Alankatu,\nWho dances in the fire holding blazing flames,\nShe watches in ecstatic wonder at the cosmic dance.'\n(i) Who is the author of this poem and to which Bhakti tradition does she belong? (1 Mark)\n(ii) Describe the physical form adopted by the author in her verses. (1 Mark)\n(iii) Why did the author consciously reject the conventional feminine ideal of beauty? (2 Marks)",
        "options": null,
        "answer": "Solutions for Karaikkal Ammaiyar Source Question",
        "explanation": "Marking Scheme:\n(i) Author & Tradition [1 Mark] : Karaikkal Ammaiyar; belongs to the Shaivite Nayanar tradition of Tamil \nNadu.\n(ii) Physical Form [1 Mark] : An emaciated demoness (pey) with sunken eyes, protruding fangs, withered \nbreasts, and skeletal limbs.\n(iii) Rejection of Conventional Beauty [2 Marks] :\n1. Renunciation of patriarchal domesticity: Rejected the traditional role of a submissive wife bound to \ndomestic vanity. [1 Mark]\n2. Ultimate spiritual surrender: Embraced a terrifying, ascetic form to transcend mortal physical \nexistence and abide forever as a witness to Shiva's cosmic dance. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Examine the growth of regional languages, vernacular poetry, and devotional music in the Bhakti and \nSufi movements of medieval India.",
        "options": null,
        "answer": "Vernacular languages, poetry, and devotional music in Bhakti-Sufi movements",
        "explanation": "Marking Scheme (8 Marks total):\n1. Shift from Sanskrit to Regional Vernaculars (2.5 Marks):\n- Bhakti saints abandoned elite Sanskrit in favor of regional idioms to communicate directly with \ncommon people:\n  - Tamil (Alvars, Nayanars), Kannada (Vachanas of Virashaivas), Marathi (Abhangs of Tukaram, \nJnaneshwar), Hindi/Braj/Awadhi (Kabir, Mirabai, Surdas, Tulsidas), Bengali (Chaitanya), and Assamese \n(Shankaradeva).\n2. Literary Innovations in Poetry (2.5 Marks):\n- Developed expressive poetic forms: Dohas, Padas, Vachanas, and Sufi allegorical Premakhyans \n(Jayasi's Padmavat in Awadhi).\n- Democratized literature by depicting everyday rural and artisanal imagery (weaving, pottery, farming).\n3. Musical Traditions and Devotional Assemblies (3 Marks):\n- Kirtan and Bhajan: Group singing in temples and prayer halls (Naamghar) accompanied by cymbals, \nmridangam, and kartals.\n- Qawwali and Sama: Chishti Sufis pioneered Qawwali in Hindavi and Persian, bridging Hindu and \nIslamic musical modes into a shared North Indian classical heritage."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "'The Bhakti and Sufi movements forged a shared cultural and spiritual synthesis in medieval India.' \nDiscuss with reference to syncretic literature, architectural styles, and communal interactions.",
        "options": null,
        "answer": "Bhakti-Sufi cultural and spiritual synthesis",
        "explanation": "Marking Scheme (8 Marks total):\n1. Syncretic Devotional Philosophy (3 Marks):\n- Both movements challenged rigid scriptural dogmatism, ritualism, and caste hierarchies.\n- Saints like Kabir, Guru Nanak, and Chishti masters articulated the underlying unity of God, popularizing \nterms like 'Ram-Rahim' and 'Hari-Allah'.\n2. Shared Social Spaces and Pilgrimages (2.5 Marks):\n- Shrines of Sufi saints (e.g. Ajmer Dargah) and Bhakti centers drew millions of Hindu and Muslim \ndevotees together for blessings and common meals (langars).\n- Shared moral ethics of compassion, hospitality, humility, and peace (Sulh-i Kul).\n3. Architectural and Literary Synthesis (2.5 Marks):\n- Sufi dargahs incorporated indigenous architectural elements (chhatris, jalis, lotus motifs).\n- Islamic romances were composed in Hindu dialects (Awadhi, Braj), creating an enduring composite \nIndo-Islamic cultural fabric."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "book": "Themes in Indian History Part-II (Medieval India)",
      "title": "An Imperial Capital: Vijayanagara (c. 14th - 16th Century)",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part II: Medieval India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Who prepared the first detailed survey map of the ruins of Hampi in the year 1800?",
        "options": [
          "(a) Colin Mackenzie",
          "(b) Alexander Greenlaw",
          "(c) John Marshall",
          "(d) J.F. Fleet"
        ],
        "answer": "(a) Colin Mackenzie",
        "explanation": "Colonel Colin Mackenzie, an engineer and antiquarian in the East India Company (later first Surveyor \nGeneral of India), surveyed Hampi in 1800 and created its first map based on local oral memories."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which river provided natural water resources and framed the northern boundary of the Vijayanagara \nEmpire?",
        "options": [
          "(a) Tungabhadra",
          "(b) Kaveri",
          "(c) Krishna",
          "(d) Godavari"
        ],
        "answer": "(a) Tungabhadra",
        "explanation": "The capital Vijayanagara was located in the natural basin formed by the river Tungabhadra, which flows \nin a north-easterly direction surrounded by granite hills."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The Vijayanagara Empire was founded in 1336 by two brothers belonging to the Sangama dynasty \nnamed:",
        "options": [
          "(a) Harihara and Bukka",
          "(b) Krishnadeva Raya and Achyuta Raya",
          "(c) Rama Raya and Tirumala",
          "(d) Saluva Narasimha and Vira Narasimha"
        ],
        "answer": "(a) Harihara and Bukka",
        "explanation": "Harihara and Bukka established the Vijayanagara kingdom in 1336 on the banks of the Tungabhadra, \nestablishing the Sangama dynasty."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which Vijayanagara ruler is regarded as the greatest emperor, whose reign (1509–1529) witnessed \npeak expansion, economic prosperity, and literary patronage?",
        "options": [
          "(a) Krishnadeva Raya",
          "(b) Deva Raya II",
          "(c) Rama Raya",
          "(d) Harihara II"
        ],
        "answer": "(a) Krishnadeva Raya",
        "explanation": "Krishnadeva Raya of the Tuluva dynasty expanded the empire by acquiring the Raichur Doab, defeating \nthe Gajapati of Orissa and the Sultan of Bijapur, and patronizing Telugu and Sanskrit arts."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The battle of Rakshasi-Tangadi (popularly known as the Battle of Talikota) that led to the sacking of \nVijayanagara took place in the year:",
        "options": [
          "(a) 1565",
          "(b) 1526",
          "(c) 1509",
          "(d) 1556"
        ],
        "answer": "(a) 1565",
        "explanation": "In 1565, the combined armies of the Deccan Sultanates (Bijapur, Ahmadnagar, and Golconda) routed the \nVijayanagara army led by Chief Minister Rama Raya at Talikota, sacking the imperial capital."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In the Vijayanagara administrative framework, the 'Amara-Nayakas' were:",
        "options": [
          "(a) Military commanders who were given territories to govern and collect taxes",
          "(b) Hereditary priests of the Virupaksha temple",
          "(c) Horse traders from Portugal",
          "(d) Royal court musicians"
        ],
        "answer": "(a) Military commanders who were given territories to govern and collect taxes",
        "explanation": "The Amara-Nayaka system was a key political innovation (similar to the Sultanate Iqta) where military \nchiefs governed territories, maintained armed contingents, and remitted annual revenue to the king."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which foreign traveler was astonished to find that the fortifications of Vijayanagara enclosed not only \nthe urban city but also extensive cultivated agricultural fields and forests?",
        "options": [
          "(a) Abdur Razzaq",
          "(b) Domingo Paes",
          "(c) Fernao Nuniz",
          "(d) Duarte Barbosa"
        ],
        "answer": "(a) Abdur Razzaq",
        "explanation": "Timurid ambassador Abdur Razzaq Samarqandi noted in the 1440s that seven concentric rings of \ndefensive walls enclosed agricultural fields, gardens, and granaries to survive protracted sieges."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The massive stone ceremonial platform in the Royal Centre associated with the 10-day Dussehra \nfestival rituals was the:",
        "options": [
          "(a) Mahanavami Dibba",
          "(b) Lotus Mahal",
          "(c) Hazara Rama",
          "(d) King's Audience Hall"
        ],
        "answer": "(a) Mahanavami Dibba",
        "explanation": "The Mahanavami Dibba is an 11,000 sq ft, 40-foot high stone platform carved with sculptures where the \nemperor reviewed army parades, received tributes, and performed Navratri sacrifices."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "The guardian deity of the Vijayanagara kingdom, in whose name all royal orders were signed in \nKannada script, was:",
        "options": [
          "(a) Lord Virupaksha",
          "(b) Lord Vitthala",
          "(c) Lord Venkateshwara",
          "(d) Lord Ranganatha"
        ],
        "answer": "(a) Lord Virupaksha",
        "explanation": "The Vijayanagara kings claimed to rule on behalf of Lord Virupaksha (a manifestation of Shiva), signing \nofficial royal edicts in Kannada script as 'Shri Virupaksha'."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which title was adopted by the Vijayanagara kings to proclaim their sovereignty, signaling cultural \nfamiliarity with contemporary Sultanate court culture?",
        "options": [
          "(a) Hindu Suratrana",
          "(b) Chhatrapati",
          "(c) Samrat",
          "(d) Devaputra"
        ],
        "answer": "(a) Hindu Suratrana",
        "explanation": "Vijayanagara kings adopted the Sanskritized title 'Hindu Suratrana' (literally 'Hindu Sultan'), reflecting an \nIndo-Islamic political vocabulary shared across medieval Deccan borders."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The local mother goddess of Hampi, who performed severe penance in the hills to marry Lord \nVirupaksha, is known as:",
        "options": [
          "(a) Pampa Devi",
          "(b) Meenakshi",
          "(c) Kamakshi",
          "(d) Bhadrakali"
        ],
        "answer": "(a) Pampa Devi",
        "explanation": "Pampa Devi is the local tutelary goddess of the Tungabhadra hills from whose name the modern town \n'Hampi' is derived; her celestial marriage to Virupaksha is celebrated annually."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which temple in the Sacred Centre of Vijayanagara features an iconic, freestanding Stone Chariot \n(Garuda shrine) and musical stone pillars?",
        "options": [
          "(a) Vitthala Temple",
          "(b) Virupaksha Temple",
          "(c) Hazara Rama Temple",
          "(d) Chennakeshava Temple"
        ],
        "answer": "(a) Vitthala Temple",
        "explanation": "The Vitthala Temple features the world-famous monolithic Stone Chariot in its courtyard and intricate \nmusical stone pillars (which resonate notes when tapped) in the Ranga Mandapa."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What Telugu political treatise on statecraft, diplomacy, and urban governance was authored by \nEmperor Krishnadeva Raya?",
        "options": [
          "(a) Amuktamalyada",
          "(b) Arthashastra",
          "(c) Manucharitra",
          "(d) Kavirajamarga"
        ],
        "answer": "(a) Amuktamalyada",
        "explanation": "Emperor Krishnadeva Raya authored the acclaimed Telugu epic Amuktamalyada, detailing the life of \nAndal alongside astute political guidelines on royal alliances, horses, and state finances."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The local horse-trading merchant guilds in the Vijayanagara empire were known as:",
        "options": [
          "(a) Kudirai Chettis",
          "(b) Shrenis",
          "(c) Banjaras",
          "(d) Marwaris"
        ],
        "answer": "(a) Kudirai Chettis",
        "explanation": "Local merchants who specialized in purchasing Arabian and Central Asian war horses for the imperial \ncavalry were known as Kudirai Chettis ('horse merchants')."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which waterworks engineering project, constructed by Sangama kings, drew water from the \nTungabhadra through a dam to irrigate the Sacred and Royal Centres?",
        "options": [
          "(a) Hiriya Canal",
          "(b) Kamalapuram Tank",
          "(c) Sudarshana Dam",
          "(d) Grand Anicut"
        ],
        "answer": "(a) Hiriya Canal",
        "explanation": "The Hiriya Canal, built by the Sangama rulers, channeled water from a dam across the Tungabhadra \nthrough stone aqueducts to irrigate the valley separating the Sacred and Royal Centres."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "What was the purpose of the 'Kalyana Mandapa' built in Vijayanagara temple complexes?",
        "options": [
          "(a) To celebrate the divine wedding ceremonies of the deity and his consort",
          "(b) For royal military meetings",
          "(c) To store armaments and gunpowder",
          "(d) For feeding war elephants"
        ],
        "answer": "(a) To celebrate the divine wedding ceremonies of the deity and his consort",
        "explanation": "Kalyana Mandapas were elaborately sculpted open pillared halls used to celebrate the ceremonial \nmarriages of temple deities with grand musical performances."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The monumental gateways (Gopurams) constructed at temple entrances, which dwarfed the central \nsanctum towers, were known as:",
        "options": [
          "(a) Raya Gopurams",
          "(b) Toranas",
          "(c) Shikharas",
          "(d) Harmikas"
        ],
        "answer": "(a) Raya Gopurams",
        "explanation": "Royal gateway towers built by Vijayanagara rulers at temple entry points were known as Raya \nGopurams, symbolizing imperial power, wealth, and engineering skill."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which European travelers visited Vijayanagara in the 16th century and recorded detailed accounts of \nthe bustling bazaars, palaces, and cavalry?",
        "options": [
          "(a) Duarte Barbosa, Domingo Paes, and Fernao Nuniz",
          "(b) François Bernier and Jean-Baptiste Tavernier",
          "(c) Marco Polo and Ibn Battuta",
          "(d) Vasco da Gama and Sir Thomas Roe"
        ],
        "answer": "(a) Duarte Barbosa, Domingo Paes, and Fernao Nuniz",
        "explanation": "Portuguese travelers Duarte Barbosa, Domingo Paes, and Fernao Nuniz visited the empire during \nKrishnadeva Raya and Achyuta Raya's reigns, providing vibrant commercial accounts."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The Hazara Rama temple, located in the Royal Centre, is renowned for stone relief carvings depicting \nscenes from the:",
        "options": [
          "(a) Ramayana",
          "(b) Mahabharata",
          "(c) Panchatantra",
          "(d) Puranas"
        ],
        "answer": "(a) Ramayana",
        "explanation": "The Hazara Rama Temple, used exclusively by the king and his royal family, features stone wall panels \nillustrating continuous narrative scenes from the Valmiki Ramayana."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What is unique about the construction technique of the stone fortification walls of Vijayanagara?",
        "options": [
          "(a) No mortar or cementing agent was used; stones were wedge-shaped and locked together",
          "(b) They were built of mud and straw",
          "(c) They used reinforced concrete",
          "(d) They were imported prefabricated from Portugal"
        ],
        "answer": "(a) No mortar or cementing agent was used; stones were wedge-shaped and\nlocked together",
        "explanation": "The stone fortification walls were dry-masonry structures constructed without any mortar, utilizing \nwedge-shaped blocks that fitted tightly together by gravity and interlocking joints."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which suburban township near Vijayanagara was founded by Krishnadeva Raya and named in \nmemory of his mother?",
        "options": [
          "(a) Nagalapuram",
          "(b) Chandragiri",
          "(c) Penukonda",
          "(d) Kamalapuram"
        ],
        "answer": "(a) Nagalapuram",
        "explanation": "Krishnadeva Raya established the prosperous suburban township of Nagalapuram near the capital, \nnaming it in honor of his mother Nagala Devi."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The 'Lotus Mahal', an exquisite pavilion in the Royal Centre, displays a fusion of which architectural \nstyles?",
        "options": [
          "(a) Indic and Islamic (Indo-Islamic architectural synthesis)",
          "(b) Gothic and Romanesque",
          "(c) Dravidian and Greek",
          "(d) Chinese and Persian"
        ],
        "answer": "(a) Indic and Islamic (Indo-Islamic architectural synthesis)",
        "explanation": "The Lotus Mahal displays a synthesis of Dravidian step-carved plinths with Indo-Islamic cusped pointed \narches and plastered vault ceilings."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In 1986, the archaeological ruins of Hampi were officially recognized as a:",
        "options": [
          "(a) UNESCO World Heritage Site",
          "(b) National Geological Monument",
          "(c) Tiger Reserve",
          "(d) Protected Biosphere"
        ],
        "answer": "(a) UNESCO World Heritage Site",
        "explanation": "Recognizing its monumental architectural significance, UNESCO designated the ruins of Hampi as a \nWorld Heritage Site in 1986."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which dynasty ruled Vijayanagara after the destruction of the capital in 1565, shifting the royal seat to \nPenukonda and Chandragiri?",
        "options": [
          "(a) Aravidu",
          "(b) Tuluva",
          "(c) Saluva",
          "(d) Sangama"
        ],
        "answer": "(a) Aravidu",
        "explanation": "Following the sack of Hampi, the Aravidu dynasty, founded by Tirumala Raya, transferred the imperial \ncapital eastward to Penukonda and later to Chandragiri."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Why did Vijayanagara kings maintain friendly diplomatic and commercial ties with the Portuguese?",
        "options": [
          "(a) To secure an exclusive supply of high-grade Arabian war horses and modern firearms (muskets)",
          "(b) To convert to Christianity",
          "(c) To recruit European infantry commanders",
          "(d) To export Indian rice to Lisbon"
        ],
        "answer": "(a) To secure an exclusive supply of high-grade Arabian war horses and\nmodern firearms (muskets)",
        "explanation": "The Portuguese controlled naval ports on the western coast (Goa); maintaining good ties ensured \nVijayanagara secured superior cavalry horses and guns over the Deccan Sultanates."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The fortifications of Vijayanagara enclosed agricultural fields and canal-irrigated \ngardens alongside urban settlements.\nReason (R): Medieval besieging armies aimed to starve cities into surrender; enclosing farmlands \nensured the city could survive multi-year sieges.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Enclosing agricultural fields within massive stone ramparts was a military \ndefense strategy to prevent food shortages during prolonged enemy blockades."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The Amara-Nayakas were completely independent feudal monarchs who paid no \nallegiance to the Vijayanagara Raya.\nReason (R): Amara-Nayakas maintained standing armies, collected taxes, and were periodically \ntransferred by the king to assert royal control.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Amara-Nayakas were military agents under the sovereign authority of the \nRaya, sent annual tributes, and faced transfers. Reason R is true."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): Krishnadeva Raya was able to maintain internal stability and successfully annex \nstrategic territories like the Raichur Doab.\nReason (R): His reign was characterized by superior military preparedness, diplomatic alliances with \nthe Portuguese for horses, and immense economic wealth from international trade.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true and R provides the geopolitical and military factors that enabled Krishnadeva Raya \nto achieve his territorial victories."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The architectural landscape of Vijayanagara displayed zero Islamic architectural \nelements, adhering purely to orthodox Dravidian shastras.\nReason (R): The Vijayanagara rulers fought wars with the northern Deccan Sultanates.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) Both A and R are false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is completely false because secular royal buildings (Lotus Mahal, Elephant Stables, gate \narches) made extensive use of Indo-Islamic cusped arches and domes. Reason R is true."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Vijayanagara kings claimed to rule as representatives of the deity Virupaksha and \nsigned royal edicts in his name.\nReason (R): Associating with divine deities was a vital mechanism for establishing religious \nlegitimacy and securing the emotional loyalty of subjects.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Kings derived sacred authority by presenting themselves as temporal regents of \nVirupaksha, cementing divine kingship."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Describe the Amara-Nayaka system of the Vijayanagara Empire. What were their duties and how did \nthe king maintain control over them?",
        "options": null,
        "answer": "Features of the Amara-Nayaka system",
        "explanation": "1. Military Administration [1 Mark] : Amara-Nayakas were military commanders assigned territories \n(amaram) to govern, collect taxes from peasants, and maintain contingents of foot-soldiers, horses, and \nelephants.\n2. Fiscal & Court Duties [1 Mark] : They retained a portion of revenue for administrative expenses and \ntroop upkeep, sending the remainder as annual tribute to the king, appearing in court with gifts.\n3. Royal Control [1 Mark] : The Raya asserted sovereignty by transferring commanders from one \nterritory to another and punishing insubordinate chiefs."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain the architectural and ritual significance of the 'Mahanavami Dibba' in the Royal Centre of \nVijayanagara.",
        "options": null,
        "answer": "Significance of the Mahanavami Dibba",
        "explanation": "1. Monumental Structure [1 Mark] : A massive stone platform (11,000 sq ft, 40 ft high) rising on a \ngranite plinth carved with dynamic reliefs of elephants, archers, and dancers.\n2. Sacred 10-Day Festival [1 Mark] : The center of the autumnal Navratri/Mahanavami festival, involving \nworship of the state horse, animal sacrifices, wrestling bouts, and dances.\n3. Imperial Display [1 Mark] : The emperor sat on an elevated throne atop the platform to inspect royal \ntroops, receive grand tributes from Amara-Nayakas, and display imperial splendor."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did the geographic and natural setting of Vijayanagara influence its water resource \nmanagement?",
        "options": null,
        "answer": "Water resource management in Vijayanagara",
        "explanation": "1. Natural Basin & Granite Hills [1 Mark] : Located in the arid peninsula where streams flowed from \ngranite hills down to the Tungabhadra; rulers constructed dams across these streams.\n2. Kamalapuram Tank [1 Mark] : A massive reservoir built to store run-off water that irrigated crops and \nwas piped into the Royal Centre.\n3. Hiriya Canal [1 Mark] : Diverted water from a stone weir across the Tungabhadra through aqueducts \nto irrigate the agricultural valley between sacred shrines and residential quarters."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Why did Abdur Razzaq express great surprise at the fortifications of Vijayanagara? Describe the \nfortification system.",
        "options": null,
        "answer": "Abdur Razzaq on Vijayanagara fortifications",
        "explanation": "1. Seven Concentric Lines [1 Mark] : Abdur Razzaq noted seven concentric circuits of walls encircling \nnot just the core city, but outer agricultural fields, forests, and orchards.\n2. Siege Strategy [1 Mark] : Enclosing farmlands ensured that during prolonged enemy sieges, the \npopulation had unhindered access to freshly cultivated food and granaries.\n3. Dry-Stone Interlocking Masonry [1 Mark] : The massive walls were erected without mortar, using \nwedge-shaped granite blocks that interlocked snugly."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Discuss the distinctive features of the Virupaksha temple at Hampi.",
        "options": null,
        "answer": "Features of the Virupaksha Temple",
        "explanation": "1. Ancient Sacred Antiquity [1 Mark] : Dedicated to Shiva as Virupaksha; shrines existed for centuries \nbefore the empire, but were vastly expanded by Vijayanagara kings.\n2. Krishnadeva Raya's Additions [1 Mark] : Constructed a grand pillared hall (mahamandapa) decorated \nwith carved floral pillars and erected the soaring Eastern Raya Gopuram.\n3. Ritual Spaces [1 Mark] : Incorporated pillared halls for music, dance, dramatic performances, and \ndivine marriages (Kalyana Mandapa)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What led to the catastrophic defeat of the Vijayanagara Empire at the Battle of Talikota in 1565?",
        "options": null,
        "answer": "Causes and consequences of the Battle of Talikota",
        "explanation": "1. Diplomatic Arrogance [1 Mark] : Chief Minister Rama Raya pursued an aggressive policy of playing \none Deccan Sultanate against another, generating mutual hostility.\n2. Combined Sultanate Coalition [1 Mark] : The Sultanates of Bijapur, Ahmadnagar, and Golconda set \naside rivalries and formed a grand military alliance against Vijayanagara.\n3. Utter Destruction [1 Mark] : The imperial army was routed at Talikota (Rakshasi-Tangadi); the \nvictorious armies sacked, burned, and looted the capital, reducing it to ruins."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Explain the architectural fusion of Indo-Islamic styles observed in the secular buildings of the Royal \nCentre.",
        "options": null,
        "answer": "Indo-Islamic architectural fusion in Vijayanagara",
        "explanation": "1. Pointed Arches & Domes [1 Mark] : Secular structures like the Lotus Mahal and Elephant Stables \nfeatured Islamic pointed arches, vaults, and stucco domes.\n2. Hindu Architectural Plinths [1 Mark] : Combined with Dravidian multi-stepped stone basements, \nprojecting eaves, and carved brackets.\n3. Cosmopolitan Court Culture [1 Mark] : Proves that despite political warfare, the Vijayanagara elite \nembraced contemporary Sultanate architectural aesthetics and regal court styles."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "What information does Domingo Paes provide regarding the international markets and trade of \nVijayanagara?",
        "options": null,
        "answer": "Domingo Paes on Vijayanagara bazaars",
        "explanation": "1. Broad Avenue Bazaars [1 Mark] : Described long, broad market streets radiating from temple \nentrances lined with arcaded stone pavilions.\n2. Luxury Merchandise [1 Mark] : Markets overflowed with diamonds, rubies, pearls, seed pearls, fine \nsilks, and imported Persian velvets.\n3. Abundant Food Supply [1 Mark] : Noted endless supplies of grains, mutton, poultry, and fruits sold \ncheaply, proving high agricultural productivity."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "Discuss the contribution of Colin Mackenzie in rediscovering the heritage of Hampi.",
        "options": null,
        "answer": "Contribution of Colin Mackenzie",
        "explanation": "1. First Survey Map (1800) [1 Mark] : Surveyed the ruins of Hampi, creating the first topographical map \nof the site.\n2. Recording Oral Traditions [1 Mark] : Interviewed the hereditary priests of the Virupaksha temple, \ndocumenting local folklore regarding Pampa Devi and Harihara-Bukka.\n3. Catalyst for Research [1 Mark] : His preliminary manuscripts laid the foundation for subsequent \nepigraphic decipherments and archaeological excavations."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Why did the Vijayanagara kings patronize temple building so extensively? Give three reasons.",
        "options": null,
        "answer": "Reasons for royal patronage of temples",
        "explanation": "1. Divine Legitimation [1 Mark] : Claimed sacred authority by portraying themselves as earthly \nprotectors of deities (ruling as regents of Virupaksha).\n2. Economic & Agrarian Centers [1 Mark] : Temples were massive landholders, irrigators, bankers, and \nemployers, driving regional economic development.\n3. Political Imperial Propaganda [1 Mark] : Monumental Raya Gopurams signaled royal power and \nmilitary dominance over regional rivals."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the spatial layout of the city of Vijayanagara. Contrast the characteristics, architecture, and \nfunctions of the 'Sacred Centre' and the 'Royal Centre'.",
        "options": null,
        "answer": "Comprehensive essay on Sacred vs Royal Centres of Vijayanagara",
        "explanation": "Marking Scheme (8 Marks total):\n1. Sacred Centre along the Tungabhadra (4 Marks):\n- Located along the rocky northern banks of the river, imbued with mythological sanctity (associated \nwith Pampa Devi and Rama's Kishkindha).\n- Dominated by monumental Hindu temple complexes: Virupaksha and Vitthala temples.\n- Characterized by soaring Raya Gopurams, stone chariots, Kalyana Mandapas, and long broad bazaar \nstreets where temple processions occurred.\n- Architectural style followed classical Dravidian traditions with carved granite colonnades.\n2. Royal Centre in the South-Western Sector (4 Marks):\n- Contained over 60 temples and more than 30 palatial complexes, separating courtly administration \nfrom public religious life.\n- Elite Secular Architecture: Lotus Mahal (council chamber), Elephant Stables, and King's Audience Hall \ndisplaying Indo-Islamic arches and domes.\n- Ritual and Political Platforms: The Mahanavami Dibba, where state rituals, military inspections, and \nforeign tributes were conducted.\n- Private royal temple: Hazara Rama temple, adorned with narrative friezes from the Ramayana reserved \nfor the royal family."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the reign of Krishnadeva Raya (1509–1529) as the golden age of the Vijayanagara Empire. \nDiscuss his military triumphs, diplomatic initiatives, administrative acumen, and cultural \ncontributions.",
        "options": null,
        "answer": "Reign of Krishnadeva Raya as golden age",
        "explanation": "Marking Scheme (8 Marks total):\n1. Military Triumphs & Expansion (2.5 Marks):\n- Subjugated the rebel chieftains of Ummattur and annexed the fertile Raichur Doab (1512).\n- Defeated Prataparudra Gajapati of Orissa (1514) and decisively routed the Sultan of Bijapur (1520).\n2. Diplomatic & Commercial Strategy (2 Marks):\n- Maintained cordial diplomatic relations with the Portuguese governor Afonso de Albuquerque, securing \na monopoly over imported Arabian war horses and guns.\n- Encouraged foreign commerce, transforming coastal ports into buzzing commercial outlets.\n3. Architectural Patronage (2 Marks):\n- Built the magnificent Eastern Gopuram and the Mahamandapa at the Virupaksha Temple; founded the \nsuburban township of Nagalapuram.\n- Excavated immense irrigation reservoirs and water canals to sustain the urban populace.\n4. Literary and Cultural Flourishing (1.5 Marks):\n- A patron of arts and an accomplished scholar himself; authored the Telugu classic Amuktamalyada.\n- Presided over the Ashtadiggajas (eight celebrated court poets), including Allasani Peddana and Tenali \nRamakrishna."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the military organization and the Amara-Nayaka system of Vijayanagara. How far was it \nderived from the Iqta system of the Delhi Sultanate?",
        "options": null,
        "answer": "Military organization and Amara-Nayaka system",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Amara-Nayaka System Structure (3 Marks):\n- Amara-Nayakas were military captains granted territories (amaram) to govern and collect revenue.\n- Maintained specified contingents of infantry, cavalry, and war elephants, ready for imperial deployment.\n- Used tax revenues for troop upkeep, horses, temple maintenance, and irrigation works.\n2. Fiscal and Diplomatic Obligations to the Crown (2.5 Marks):\n- Sent an agreed annual cash tribute to the imperial exchequer.\n- Attended the annual Mahanavami festival in person with lavish gifts to demonstrate fealty.\n- Rulers maintained royal authority through the threat of transfers and confiscation.\n3. Comparison with the Delhi Sultanate Iqta System (2.5 Marks):\n- Similarities: Both granted revenue rights over territory in exchange for military service and troop \nmaintenance.\n- Distinctive Features: The Amara-Nayakas established deeper dynastic and cultural roots in their \nterritories, eventually breaking away as independent Nayaka kingdoms (Madurai, Thanjavur, Senji) after \n1565."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Colin Mackenzie's discovery of Hampi carefully and answer the \nquestions:\nSource: Colin Mackenzie at Hampi\n'Colin Mackenzie brought the ruins at Hampi to light in 1800. An engineer, surveyor and cartographer, he \nspent much of his career collecting historical manuscripts and surveying historical sites. He prepared the \nfirst survey map of the site. Much of the initial information he received was based on the memories of \npriests of the Virupaksha temple and the shrine of Pampa Devi...'\n(i) Who was Colin Mackenzie and when did he visit Hampi? (1 Mark)\n(ii) What primary sources of information did Mackenzie rely upon? (1 Mark)\n(iii) Why is Colin Mackenzie's survey considered a landmark in Indian historiography? (2 Marks)",
        "options": null,
        "answer": "Solutions for Colin Mackenzie Source Question",
        "explanation": "Marking Scheme:\n(i) Identity & Date [1 Mark] : An engineer, surveyor, and cartographer of the East India Company; visited \nHampi in 1800.\n(ii) Primary Sources [1 Mark] : Oral traditions and memories preserved by the hereditary priests of the \nVirupaksha and Pampa Devi shrines.\n(iii) Landmark Historiography [2 Marks] :\n1. First scientific documentation: Produced the first accurate topographical map of the ruined \nmetropolis before physical vandalism could distort it. [1 Mark]\n2. Initiated modern archaeological recovery: Sparked interest that led to epigraphic collection, \nphotography, and eventual recognition as a UNESCO World Heritage Site. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following excerpt from Domingo Paes's account of the Mahanavami festival and answer the \nquestions:\nSource: The Mahanavami Festival\n'The king has a room made of cloth, with the door open, in which is a throne of gold and jewels... Outside \nthis tent, on the platform, are wrestling matches between women and men, and dancing, and displays of \nhorses and elephants. On the tenth day, the king leaves his palace and goes outside the city to inspect his \narmies, which are arrayed in endless ranks with weapons shining in the sun...'\n(i) On which platform did these festival celebrations take place? (1 Mark)\n(ii) Mention any two performances witnessed by Paes on the platform. (1 Mark)\n(iii) How did the 10th day of the festival symbolize imperial military power? (2 Marks)",
        "options": null,
        "answer": "Solutions for Domingo Paes Mahanavami Source Question",
        "explanation": "Marking Scheme:\n(i) Platform Name [1 Mark] : The Mahanavami Dibba in the Royal Centre.\n(ii) Performances [1 Mark] : Wrestling matches (between both men and women) and dances alongside \nanimal displays.\n(iii) Display of Imperial Power [2 Marks] :\n1. Military Inspection: The emperor reviewed his entire cavalry, elephant corps, and infantry assembled \nin full battle regalia. [1 Mark]\n2. Reaffirmation of Loyalty: Subordinate Amara-Nayakas publicly presented tributes and renewed their \nvows of military fealty to the sovereign. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Explain the architectural features of the Vitthala Temple complex at Vijayanagara. Discuss the stone \nchariot, musical pillars, and its cultural significance.",
        "options": null,
        "answer": "Architectural features of the Vitthala Temple",
        "explanation": "Marking Scheme (8 Marks total):\n1. Dedication and Cultural Import (2.5 Marks):\n- Dedicated to Vitthala, a manifestation of Vishnu predominantly worshipped in Maharashtra.\n- Indicates how the Vijayanagara rulers incorporated diverse regional deities across their empire to \nfoster cultural unity.\n2. The Freestanding Stone Chariot (3 Marks):\n- Centrally located in the courtyard, designed as an ornamental processional chariot of Garuda (Vishnu's \nmount).\n- Features revolving stone wheels, carved elephants at the base, and a stone superstructure reflecting \npeerless sculptural skill.\n3. The Mahamandapa and Musical Pillars (2.5 Marks):\n- Supported by 56 monolithic carved granite pillars; each main pillar is surrounded by slender \ncolonnettes.\n- Resonates distinct musical notes (swaras) when tapped, showcasing sophisticated acoustic-\narchitectural engineering."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Describe the water supply, storage, and distribution systems developed by the rulers of Vijayanagara \nto sustain the massive urban population.",
        "options": null,
        "answer": "Water management and distribution systems of Vijayanagara",
        "explanation": "Marking Scheme (8 Marks total):\n1. Arid Peninsula & Tungabhadra River Basin (2 Marks):\n- Capital was situated in a dry zone; rivers and hill runoff had to be harnessed to feed more than 500,000 \nresidents.\n2. The Great Embankments and Reservoirs (3 Marks):\n- Kamalapuram Tank: Fed by channels from the river, providing irrigation water for surrounding paddies \nand drinking water through pipes to the Royal Centre.\n- Water collected from natural granite amphitheaters surrounding the city.\n3. The Hiriya Canal and Aqueducts (3 Marks):\n- Constructed by the Sangama dynasty; drew water from a stone dam on the Tungabhadra.\n- Traversed rugged rocky terrain via stone aqueducts to irrigate the vast agricultural fields nestled \nbetween the Sacred and Royal Centres."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source excerpt from Krishnadeva Raya's Amuktamalyada carefully and answer the \nquestions:\nSource: On the King and Trade\n'A king should improve the harbours of his country and encourage commerce so that horses, elephants, \nprecious gems, sandalwood, pearls and other articles are freely imported... He should arrange that foreign \nsailors who land in his country on account of storms, illness and exhaustion are looked after in a suitable \nmanner... Make the merchants of distant foreign countries who import good horses and elephants attend \non you, and give them towns and mansions...'\n(i) Name the author and the text from which this excerpt is taken. (1 Mark)\n(ii) What advice does the author give regarding foreign sailors who face shipwreck? (1 Mark)\n(iii) Why was the ruler so obsessed with attracting merchants who imported horses? (2 Marks)",
        "options": null,
        "answer": "Solutions for Krishnadeva Raya Amuktamalyada Source Question",
        "explanation": "Marking Scheme:\n(i) Author & Text [1 Mark] : Krishnadeva Raya; from the Telugu political treatise Amuktamalyada.\n(ii) Foreign Sailors [1 Mark] : They should be treated with hospitality, cared for during illness and \nexhaustion, and provided safety.\n(iii) Strategic Importance of Horses [2 Marks] :\n1. Military supremacy: Medieval warfare depended heavily on swift, robust cavalry; Indian bred horses \nwere inferior to imported Arabian and Persian breeds. [1 Mark]\n2. Border defense: Securing horse supplies ensured military superiority over the Deccan Sultans and \nGajapati rivals. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Analyze the causes, course, and historical impact of the Battle of Talikota (1565) on the fortunes of \nthe Vijayanagara Empire.",
        "options": null,
        "answer": "Causes, course, and impact of the Battle of Talikota",
        "explanation": "Marking Scheme (8 Marks total):\n1. Causes of the Conflict (3 Marks):\n- Aggressive realpolitik of Chief Minister Rama Raya, who constantly meddled in the internal feuds of the \nDeccan Sultanates.\n- Deep resentment among the Sultans (Bijapur, Ahmadnagar, Golconda, Bidar), leading them to forge an \nunprecedented military alliance.\n2. Course of the Battle (2 Marks):\n- Fought in January 1565 at Rakshasi-Tangadi near Talikota.\n- Rama Raya's vast army was routed; he was captured and executed on the battlefield.\n3. Aftermath and Devastation (3 Marks):\n- The victorious allied armies occupied and systematically sacked Vijayanagara over several months, \nburning palaces, smashing sculptures, and depopulating the city.\n- Imperial power shifted eastward under the Aravidu dynasty to Penukonda and Chandragiri, leading to \nthe disintegration of the empire into independent Nayaka states."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "'The architecture of Vijayanagara represented both the continuation of ancient Dravidian traditions \nand bold innovations in monumental design.' Discuss with reference to Raya Gopurams, Kalyana \nMandapas, and secular complexes.",
        "options": null,
        "answer": "Dravidian continuity and architectural innovations of Vijayanagara",
        "explanation": "Marking Scheme (8 Marks total):\n1. Continuation of Dravidian Temple Traditions (2.5 Marks):\n- Maintained the core architectural layout: central garbhagriha, ardhamandapa, and stone enclosure \nwalls established by Cholas and Pandyas.\n- Preserved sacred sculptural iconography (Virupaksha, Krishna, Rama, Vishnu avatars).\n2. Bold Innovations in Religious Monuments (3 Marks):\n- Raya Gopurams: Monumental gateway towers rising dozens of tiers, dwarfing the central sanctum, \nvisible from miles away.\n- Kalyana Mandapa: Elaborate open pillared halls with intricately carved monolithic pillars (depicting \nrearing horses, mythological yalis) designed for divine marriage rites.\n- Stone Chariots: Masterpieces of stone carving, such as the one at the Vitthala temple.\n3. Secular Innovations (Indo-Islamic Synthesis) (2.5 Marks):\n- Lotus Mahal and Elephant Stables incorporated pointed cusped arches, barrel vaults, and plastered \ndomes, creating a bold, syncretic imperial aesthetic."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "book": "Themes in Indian History Part-II (Medieval India)",
      "title": "Peasants, Zamindars and the State: Agrarian Society and the Mughal Empire",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part II: Medieval India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The 'Ain-i Akbari', which provides an exhaustive administrative and statistical record of Akbar's \nempire, was authored by:",
        "options": [
          "(a) Abul Fazl",
          "(b) Abdul Hamid Lahori",
          "(c) Faizi",
          "(d) Badauni"
        ],
        "answer": "(a) Abul Fazl",
        "explanation": "Abul Fazl, Akbar's grand vizier and court historian, compiled the Ain-i Akbari as the third book of the \nmonumental imperial chronicle Akbar Nama."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In Mughal revenue terminology, non-resident cultivators who traveled from other villages to cultivate \nland on a contractual basis were called:",
        "options": [
          "(a) Pahi-kasht",
          "(b) Khud-kasht",
          "(c) Asami",
          "(d) Muqaddam"
        ],
        "answer": "(a) Pahi-kasht",
        "explanation": "Pahi-kasht were non-resident tenant peasants who moved to distant villages to farm land under \nfavorable tax terms, while Khud-kasht were permanent resident villagers farming their own lands."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Under Akbar's land classification system, land that was cultivated continuously every year without \never being left fallow was termed:",
        "options": [
          "(a) Polaj",
          "(b) Parauti",
          "(c) Chachar",
          "(d) Banjar"
        ],
        "answer": "(a) Polaj",
        "explanation": "Polaj was the highest class of agricultural land, cropped continuously every year and never allowed to lie \nfallow."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The term 'Jins-i Kamil' used in Mughal administrative documents literally meant:",
        "options": [
          "(a) Perfect crops (high-value cash crops like cotton and sugarcane)",
          "(b) Inferior coarse foodgrains",
          "(c) Land left uncultivated",
          "(d) War weapons"
        ],
        "answer": "(a) Perfect crops (high-value cash crops like cotton and sugarcane)",
        "explanation": "Mughal authorities encouraged the cultivation of Jins-i Kamil ('perfect crops' or lucrative commercial \ncash crops like cotton, sugarcane, and oilseeds) because they generated higher revenue in cash."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In the Mughal revenue assessment process, what was the difference between 'Jama' and 'Hasil'?",
        "options": [
          "(a) Jama was the assessed revenue, while Hasil was the actual amount collected",
          "(b) Jama was tax in kind, Hasil was tax in cash",
          "(c) Jama was paid to zamindars, Hasil to the emperor",
          "(d) There was no difference"
        ],
        "answer": "(a) Jama was the assessed revenue, while Hasil was the actual amount\ncollected",
        "explanation": "Jama was the predetermined assessed revenue estimated by the state, whereas Hasil was the net \namount of revenue actually realized and collected."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which of the following cash crops, introduced from the New World via the Americas, arrived in the \nDeccan and northern India during the early 17th century?",
        "options": [
          "(a) Tobacco",
          "(b) Wheat",
          "(c) Barley",
          "(d) Rice"
        ],
        "answer": "(a) Tobacco",
        "explanation": "Tobacco arrived in the Deccan around 1600 through Portuguese traders and spread so rapidly across \nnorthern India that Emperor Jahangir issued an imperial farman banning its consumption in 1617."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The hereditary headman of the Mughal village community, who maintained accounts and mediated \nwith state tax collectors, was called the:",
        "options": [
          "(a) Muqaddam or Mandal",
          "(b) Patwari",
          "(c) Qanungo",
          "(d) Amil-guzar"
        ],
        "answer": "(a) Muqaddam or Mandal",
        "explanation": "The village headman, known as Muqaddam or Mandal, was chosen by village elders with the zamindar's \nconsent and held personal liability for village tax payments."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "The hereditary system in which village artisans (blacksmiths, carpenters, potters) provided services \nto cultivators in exchange for a share of the harvest was known in northern India as:",
        "options": [
          "(a) Jajmani system",
          "(b) Dahsala system",
          "(c) Mansabdari system",
          "(d) Iqta system"
        ],
        "answer": "(a) Jajmani system",
        "explanation": "Under the Jajmani system (called Miras or Watan in Maharashtra), village artisans rendered essential \ncraft services in return for customary shares of grain at harvest time or small tax-free land plots."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Which book of the 'Ain-i Akbari' contains detailed statistical and fiscal tables for all the twelve Subahs \n(provinces) of the empire?",
        "options": [
          "(a) Mulk-abadi",
          "(b) Manzil-abadi",
          "(c) Sipah-abadi",
          "(d) Daftari"
        ],
        "answer": "(a) Mulk-abadi",
        "explanation": "Mulk-abadi ('the empire building') is the third book of the Ain-i Akbari, presenting comprehensive fiscal \nand revenue statistics for each province down to the sarkar and pargana levels."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The personal landed property directly owned and cultivated by Zamindars using hired laborers was \ncalled:",
        "options": [
          "(a) Milkiyat",
          "(b) Jagir",
          "(c) Khalisa",
          "(d) Inam"
        ],
        "answer": "(a) Milkiyat",
        "explanation": "Milkiyat was personal landed property held by zamindars for private use; they could sell, mortgage, or \nbequeath it to their heirs at will."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In the Ahom kingdom of Assam, people who were obliged to render compulsory rotational labor to \nthe state were known as:",
        "options": [
          "(a) Paiks",
          "(b) Ryots",
          "(c) Asamis",
          "(d) Jagirdars"
        ],
        "answer": "(a) Paiks",
        "explanation": "The Ahom state relied on compulsory labor; adult males registered in village militias who performed \nrotational public and military duties for the king were known as Paiks."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which agricultural taboo restricted women's physical participation in rural agrarian tasks?",
        "options": [
          "(a) Menstruating women were barred from touching the plough or the potter's wheel",
          "(b) Women were forbidden from entering grain storehouses",
          "(c) Women could not milk cows",
          "(d) Women were prohibited from cooking food during harvest"
        ],
        "answer": "(a) Menstruating women were barred from touching the plough or the potter's\nwheel",
        "explanation": "Rural customs and ritual purity codes prevented menstruating women from touching the agricultural \nplough or approaching the potter's wheel in regions like Bengal."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What proportion of Indian territory was estimated to be covered by dense forests during the Mughal \nperiod in the 16th and 17th centuries?",
        "options": [
          "(a) Approximately 40%",
          "(b) Less than 5%",
          "(c) Almost 90%",
          "(d) Exactly 10%"
        ],
        "answer": "(a) Approximately 40%",
        "explanation": "Historical geographers estimate that roughly 40% of the subcontinent's landmass was covered by vast \nscrublands and dense forests harboring diverse tribal communities."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The imperial official responsible for collecting land revenue and supervising local treasuries at the \nSarkar level in the Mughal empire was the:",
        "options": [
          "(a) Amil-guzar",
          "(b) Qanungo",
          "(c) Faujdar",
          "(d) Kotwal"
        ],
        "answer": "(a) Amil-guzar",
        "explanation": "The Amil-guzar (or revenue collector) assessed and gathered rural taxes, encouraged cash-crop \ncultivation, and ensured that revenue collectors did not extort peasants."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Why did 19th-century British officials like Sir Charles Metcalfe characterize Indian villages as 'Little \nRepublics'?",
        "options": [
          "(a) They assumed villages were self-sufficient, egalitarian communities with collective landholding",
          "(b) Because villagers elected the Mughal emperor",
          "(c) Because villages had written constitutions",
          "(d) Because money was totally unknown in rural areas"
        ],
        "answer": "(a) They assumed villages were self-sufficient, egalitarian communities with\ncollective landholding",
        "explanation": "Early colonial officials romantically idealized the Indian village as an unchangeable, autonomous, self-\nsufficient 'little republic', overlooking deep caste, gender, and economic disparities."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Under Akbar's land revenue reforms, the legendary revenue minister who introduced the 'Dahsala' \n(Bandobast) system was:",
        "options": [
          "(a) Raja Todar Mal",
          "(b) Raja Birbal",
          "(c) Raja Man Singh",
          "(d) Tansen"
        ],
        "answer": "(a) Raja Todar Mal",
        "explanation": "Raja Todar Mal designed the Dahsala system in 1580, which calculated revenue based on average crop \nyields and price trends over the previous 10 years."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following was NOT a New World crop introduced to India during the 16th and 17th \ncenturies?",
        "options": [
          "(a) Mustard",
          "(b) Maize",
          "(c) Tomato",
          "(d) Chili"
        ],
        "answer": "(a) Mustard",
        "explanation": "Mustard is an ancient indigenous crop of India. Maize, tomatoes, potatoes, chilies, pineapples, and \npapayas were introduced from the Americas via European seafarers."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Land left uncultivated for five years or more to allow vegetation to regenerate was classified in \nMughal revenue records as:",
        "options": [
          "(a) Banjar",
          "(b) Chachar",
          "(c) Parauti",
          "(d) Polaj"
        ],
        "answer": "(a) Banjar",
        "explanation": "Banjar was barren or degraded land left uncultivated for 5 or more years, assessed at concessionary tax \nrates when brought back under the plough."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The hereditary keeper of imperial revenue records at the Pargana level, who maintained data on land \ntenures and tax yields, was the:",
        "options": [
          "(a) Qanungo",
          "(b) Patwari",
          "(c) Muqaddam",
          "(d) Jagirdar"
        ],
        "answer": "(a) Qanungo",
        "explanation": "The Qanungo was the hereditary repository of local agrarian customs, land boundaries, revenue \nassessments, and yield statistics at the pargana level."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "How did the Mughal state ensure that zamindars did not rebel or abuse their local power?",
        "options": [
          "(a) By keeping records of their troops and military forts and absorbing them into the imperial mansabdari system",
          "(b) By banning them from owning land",
          "(c) By executing all zamindars' heirs",
          "(d) By forcing them to live in Delhi"
        ],
        "answer": "(a) By keeping records of their troops and military forts and absorbing them\ninto the imperial mansabdari system",
        "explanation": "The state maintained imperial surveillance over zamindars' forts and cavalry, while integrating influential \nzamindars into the imperial aristocracy as mansabdars."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the primary limitation of the 'Ain-i Akbari' as an objective source of agrarian history?",
        "options": [
          "(a) It was an official court-sponsored chronicle that portrayed the empire exclusively from the perspective of Emperor Akbar and the Delhi court",
          "(b) It was written in Portuguese",
          "(c) It contains no figures on land revenue",
          "(d) It was destroyed in an earthquake"
        ],
        "answer": "(a) It was an official court-sponsored chronicle that portrayed the empire\nexclusively from the perspective of Emperor Akbar and the Delhi court",
        "explanation": "The Ain-i Akbari was an imperial court document celebrating Akbar's reign, containing clerical arithmetic \nerrors, selective statistics, and minimal coverage of peripheral provinces."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following social groups provided menial agricultural labor in Mughal Bihar, treated \nalmost as untouchables?",
        "options": [
          "(a) Mallahzadas",
          "(b) Halalkhoran",
          "(c) Jats",
          "(d) Ahirs"
        ],
        "answer": "(a) Mallahzadas",
        "explanation": "Contemporary documents refer to Mallahzadas (boatmen's descendants) in Bihar who were relegated to \nbonded agrarian servitude and regarded as outcastes."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What powers did the Village Panchayat exercise in Mughal rural society?",
        "options": [
          "(a) Levying fines, ordering community labor, and expelling caste offenders from the village",
          "(b) Declaring war on neighboring provinces",
          "(c) Minting silver coins",
          "(d) Appointing the imperial governor"
        ],
        "answer": "(a) Levying fines, ordering community labor, and expelling caste offenders\nfrom the village",
        "explanation": "The village panchayat managed communal funds, adjudicated property disputes, supervised public \nsanitation, and enforced strict caste norms through fines or social ostracism."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What was the significance of the Persian wheel (Rahat) in medieval Indian agriculture?",
        "options": [
          "(a) It used geared pots attached to a wheel driven by bullocks to lift water efficiently from deep wells",
          "(b) It was a mechanical reaper for wheat",
          "(c) It ground sugarcane into jaggery",
          "(d) It wove silk fabric"
        ],
        "answer": "(a) It used geared pots attached to a wheel driven by bullocks to lift water\nefficiently from deep wells",
        "explanation": "The Persian wheel (Rahat) revolutionized lift irrigation, employing geared wheels driven by bullocks to \nbring deep groundwater up to surface canals for crops."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "How many 'daftars' (books) constitute the entire compilation of the 'Ain-i Akbari'?",
        "options": [
          "(a) 5",
          "(b) 3",
          "(c) 7",
          "(d) 10"
        ],
        "answer": "(a) 5",
        "explanation": "The Ain-i Akbari is organized into five books: Manzil-abadi, Sipah-abadi, Mulk-abadi, Hindu \ntraditions/sciences, and the moral maxims/sayings of Akbar."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Mughal state actively encouraged peasants to cultivate Jins-i Kamil (cash crops) \nlike cotton and sugarcane.\nReason (R): High-value commercial crops fetched higher market prices, enabling the imperial treasury \nto collect taxes in liquid cash.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Cash crops enhanced monetization of the rural economy, allowing the state to \nmaximize cash revenue collections."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Women played an integral and indispensable economic role in Mughal agricultural \nproduction.\nReason (R): In pre-industrial peasant societies, tasks like weeding, threshing, winnowing, and spinning \nwere performed predominantly by female labor.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Rural production depended on the complementary labor of men (ploughing) and \nwomen (weeding, harvesting, cleaning, and spinning)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The 19th-century colonial notion of the pre-colonial Indian village as an egalitarian \n'Little Republic' was an accurate historical portrait.\nReason (R): Mughal villages had deep internal hierarchies characterized by rigid caste distinctions, \nuntouchability, and gender subjugation.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Metcalfe's 'little republic' concept ignored internal rural oppression; Reason \nR is true and explains the deep inequalities that existed."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): Forest dwellers in the Mughal Empire were entirely isolated and cut off from external \nurban civilizations.\nReason (R): The Mughal army frequently penetrated forests to extract elephants, timber, and hunting \ngame, while merchants bartered grain for forest honey, wax, and lac.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because forest tribes engaged in constant trade and diplomatic contact with \nplainsmen; Reason R is true and describes this commercial and imperial penetration."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Zamindars in the Mughal Empire occupied an intermediate socio-economic position \nbetween the state and the peasantry.\nReason (R): Zamindars collected revenue on behalf of the crown, commanded their own private \nmilitias, and often paternalistically defended peasants during peasant rebellions against state \nextortion.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Zamindars were local landed elites whose paternalistic ties with villagers meant \nthey frequently led peasant insurgencies against excessive central taxation."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Explain the fourfold classification of agricultural land under Emperor Akbar's revenue administration.",
        "options": null,
        "answer": "Land classification under Akbar",
        "explanation": "1. Polaj [0.75 Mark] : Prime fertile land cropped continuously every year, never left fallow, paying \nmaximum revenue.\n2. Parauti [0.75 Mark] : Land left fallow for a year or two to naturally regain soil fertility.\n3. Chachar [0.75 Mark] : Fallow land left uncultivated for three to four consecutive years before \nreploughing.\n4. Banjar [0.75 Mark] : Barren or uncultivated land left fallow for five years or more, taxed at nominal \nconcessionary rates to encourage reclamation."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the composition, role, and powers of the Village Panchayat in Mughal India.",
        "options": null,
        "answer": "Composition and powers of the Village Panchayat",
        "explanation": "1. Composition [1 Mark] : An assembly of respected village elders representing major caste and lineage \nheads, presided over by the village headman (Muqaddam/Mandal).\n2. Fiscal Management [1 Mark] : Maintained common village financial accounts, funded welfare tasks \n(digging wells, repairing bunds), and ensured timely tax payment to state officials.\n3. Judicial & Caste Authority [1 Mark] : Punished social transgressions, arbitrated domestic property \ndisputes, and levied fines or ordered social ostracism to preserve caste boundaries."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did New World crops transform the agrarian landscape of 17th-century Mughal India? Name \nthree such crops.",
        "options": null,
        "answer": "Impact of New World crops in Mughal India",
        "explanation": "1. Dietary and Economic Transformation [1.5 Marks] : European trans-oceanic trade introduced new \nagricultural crops from the Americas, enriching Indian diets, enhancing agricultural diversity, and \nstimulating cash trade.\n2. Key Introduced Crops [1.5 Marks] :\n- Tobacco: Arrived via Deccan c. 1600; became a widespread recreational stimulant.\n- Maize (Makka): Cultivated extensively across western and northern India.\n- Vegetables & Fruits: Tomatoes, potatoes, chilies, pineapples, and papayas."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Examine the role and economic status of women in Mughal rural peasant society.",
        "options": null,
        "answer": "Role of women in Mughal agrarian society",
        "explanation": "1. Labor in the Fields [1 Mark] : Women participated in weeding, transplanting, harvesting, and \nwinnowing alongside men who ploughed.\n2. Artisanal & Domestic Production [1 Mark] : Spun yarn, prepared clay for potters, embroidered textiles, \nand took produce to local weekly markets (haats).\n3. Property & Legal Rights [1 Mark] : In landed communities (e.g. Rajput and Jat households), widows \ninherited landed estates (Milkiyat) with the legal freedom to sell, gift, or mortgage their land."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Who were the Zamindars in the Mughal Empire? What were the sources of their power and prestige?",
        "options": null,
        "answer": "Sources of power of Mughal Zamindars",
        "explanation": "1. Hereditary Landed Rights (Milkiyat) [1 Mark] : Owned private landed estates cultivated by hired \nlaborers; could buy, sell, or mortgage these lands at will.\n2. Revenue Collection Rights [1 Mark] : Collected land tax from peasants on behalf of the state, retaining \nan agreed financial percentage (Nankar).\n3. Military Might & Castes [1 Mark] : Maintained private forts, cavalry, infantry, and matchlock troops; \nenjoyed caste solidarity and paternalistic loyalty from local cultivators."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "Describe the five books (daftars) that constitute the 'Ain-i Akbari' of Abul Fazl.",
        "options": null,
        "answer": "Five books of the Ain-i Akbari",
        "explanation": "1. First Book (Manzil-abadi) [0.5 Mark] : Deals with the imperial household, royal palace, harem, kitchen, \nand the mint.\n2. Second Book (Sipah-abadi) [0.5 Mark] : Covers military organization, mansabdars, civil servants, and \nroyal poets/artists.\n3. Third Book (Mulk-abadi) [1 Mark] : Details fiscal regulations, revenue administration, land \nclassifications, and provincial (Subah) statistical tables.\n4. Fourth Book [0.5 Mark] : Surveys Hindu philosophy, religion, literature, astronomy, and social customs.\n5. Fifth Book [0.5 Mark] : Contains a collection of wise sayings, moral maxims, and philosophical \nreflections of Emperor Akbar."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "What was the 'Jajmani system'? How did it integrate village artisans into the rural economy?",
        "options": null,
        "answer": "The Jajmani system in Mughal rural economy",
        "explanation": "1. Reciprocal Economic Relationship [1 Mark] : Village artisans (blacksmiths, carpenters, potters, \nbarbers) rendered customary professional services to peasant families.\n2. Remuneration in Harvest Share [1 Mark] : In return, cultivators paid them a fixed share of agricultural \ngrain at every harvest (called Thoka or Kamin rights).\n3. Watan / Miras Land Grants [1 Mark] : In western India (Maharashtra), artisans were also granted \nsmall plots of hereditary, tax-exempt village land (Watan/Miras)."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Explain how the Mughal state penetrated the lives of forest-dwelling tribes (Janglis).",
        "options": null,
        "answer": "Mughal state penetration into tribal forests",
        "explanation": "1. Resource Extraction [1 Mark] : The empire extracted war elephants, timber for boats and palaces, and \nforest goods (honey, beeswax, gum, lac) as tribute (Peshkash).\n2. Commercial Integration [1 Mark] : Caravan traders (Banjaras) exchanged lowland grain and salt for \nforest products, drawing tribals into monetary transactions.\n3. Military and Colonization [1 Mark] : The state cleared border forests for agriculture; tribal chiefs (like \nGond and Bhil rajas) were co-opted as local zamindars or mansabdars."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "Why is the 19th-century colonial view of Indian villages as self-sufficient 'Little Republics' considered \nflawed by modern historians?",
        "options": null,
        "answer": "Flaws of the 'Little Republic' concept",
        "explanation": "1. Commercial Integration [1 Mark] : Villages were not isolated; they actively produced cash crops \n(cotton, sugarcane) and engaged in monetary trade with urban markets.\n2. Deep Caste Stratification [1 Mark] : Social equality was absent; lower castes and agricultural laborers \nwere subjected to severe untouchability and land deprivation.\n3. External State Control [1 Mark] : The Mughal state maintained direct fiscal surveillance through \nPatwaris, Qanungos, and revenue collectors, proving villages were deeply tied to the empire."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "What limitations and biases must a historian keep in mind while consulting the 'Ain-i Akbari'?",
        "options": null,
        "answer": "Limitations and biases of the Ain-i Akbari",
        "explanation": "1. Imperial Court Bias [1 Mark] : Written by Abul Fazl to glorify Emperor Akbar; portrays the state as an \nall-powerful, benevolent machine while ignoring dissent.\n2. Incomplete Regional Data [1 Mark] : Revenue and price data were compiled primarily for the northern \ncore (Agra, Delhi); statistical data for peripheral provinces like Bengal and Assam was patchy.\n3. Arithmetic & Transcription Errors [1 Mark] : Contains numerous arithmetical discrepancies and \nclerical slip-ups that modern historians (like Irfan Habib) had to painstakingly recalculate."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Examine the land revenue administration of the Mughal Empire under Akbar. Discuss the Dahsala \nsystem, land classification, revenue officials, and the distinction between Jama and Hasil.",
        "options": null,
        "answer": "Comprehensive essay on Mughal land revenue administration",
        "explanation": "Marking Scheme (8 Marks total):\n1. Todar Mal's Dahsala System (1580) (2.5 Marks):\n- Designed by finance minister Raja Todar Mal; surveyed land using bamboo rods with iron rings (Tanab).\n- Assessed the average crop yield and prevailing market prices over the preceding 10 years (1570-1580).\n- Fixed state share at one-third (1/3rd) of average production, converting grain demand into cash rates \n(Dastur).\n2. Scientific Fourfold Land Classification (2 Marks):\n- Polaj: Cropped every year, never fallow.\n- Parauti: Left fallow for 1-2 years to regain organic fertility.\n- Chachar: Fallow for 3-4 years.\n- Banjar: Uncultivated for 5 or more years; assessed at low, progressive rates.\n3. Revenue Officials and Machinery (2 Marks):\n- Amil-guzar: Executive collector in the sarkar, charged with expanding cultivation and collecting cash.\n- Qanungo: Pargana official keeping hereditary land and revenue records.\n- Patwari: Village accountant maintaining peasant land ledgers.\n4. Jama versus Hasil (1.5 Marks):\n- Jama: The estimated potential revenue assessed on paper.\n- Hasil: The actual net revenue collected in cash and deposited in the imperial treasury; collectors were \nurged to bridge the gap between Jama and Hasil."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Discuss the socio-economic structure of the village community in Mughal India. Analyze the roles of \nthe cultivators, the village panchayat, the headman, and village artisans.",
        "options": null,
        "answer": "Socio-economic structure of the Mughal village community",
        "explanation": "Marking Scheme (8 Marks total):\n1. Peasantry (Khud-kasht and Pahi-kasht) (2 Marks):\n- Khud-kasht: Permanent residents owning land, oxen, and ploughs in their home village.\n- Pahi-kasht: Non-resident tenant farmers cultivating lands in other villages on contractual terms due to \neconomic incentives or natural disasters.\n2. Village Headman (Muqaddam / Mandal) (2 Marks):\n- Chosen by village elders, confirmed by the zamindar; held personal financial responsibility for \ncollecting village taxes.\n- Maintained village expense ledgers (audited by Patwari) and mediated disputes.\n3. The Village Panchayat (2 Marks):\n- Assembly representing major caste lineages; functioned as a rural local government.\n- Managed public welfare works (irrigation channels, wells); enforced social order through fines, \ncommunity labor, and caste expulsion for moral transgressions.\n4. Village Artisans and Jajmani Economy (2 Marks):\n- Blacksmiths, potters, carpenters, and barbers provided specialized craft tools and services to farmers.\n- Recompensed through customary shares of the crop harvest (Jajmani) or small hereditary, tax-exempt \nplots of land (Watan/Miras)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Analyze the position, privileges, and political significance of Zamindars in the Mughal Empire. What \nwas the nature of their relationship with the peasantry and the imperial state?",
        "options": null,
        "answer": "Role, privileges, and relations of Zamindars in Mughal India",
        "explanation": "Marking Scheme (8 Marks total):\n1. Sources of Socio-Economic Power (2.5 Marks):\n- Possessed personal private lands (Milkiyat) cultivated by hired or bonded laborers.\n- Collected revenue from peasants on behalf of the state, retaining a hereditary commission \n(Nankar/Malikana).\n- Commanded substantial private armed forces (infantry, cavalry, artillery, and mud forts).\n2. Caste Base and Social Legitimacy (2 Marks):\n- Dominated by high-caste Rajputs, Brahmanas, and Muslim landed lineages, though intermediate \ncastes (Jats, Ahirs) also acquired zamindaris through armed colonization.\n- Bound to their peasant tenants through deep shared caste, kinship, and clan ties.\n3. Relationship with the Imperial State (2 Marks):\n- Served as vital fiscal and military intermediaries; the state incorporated prominent zamindars into the \nimperial aristocracy as mansabdars.\n- Yet, armed clashes occurred when imperial collectors demanded exorbitant revenue taxes.\n4. Paternalistic Alliance with Peasantry (1.5 Marks):\n- During agrarian distress, zamindars extended crop loans (taqavi) to peasants.\n- When zamindars rebelled against the Mughal crown, peasants frequently rallied behind them, viewing \nthe local zamindar as a paternal protector against imperial plunder."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding land classification from the Ain-i Akbari carefully and answer the \nquestions:\nSource: Classification of Lands by Akbar\n'The Emperor Akbar in his profound wisdom divided the lands into four classes and fixed revenue for each: \nPolaj is land which is annually cultivated for each crop in succession and is never allowed to lie fallow. \nParauti is land left out of cultivation for a time that it may recover its strength. Chachar is land that has lain \nfallow for three or four years. Banjar is land of which the soil has been uncultivated for five years and more. \nOf the first two kinds of land, there are three classes: good, middling, and bad. They add together the \nproduce of each, and one-third of this represents the medium produce, one-third part of which is exacted as \nthe Royal dues...'\n(i) Name the four classes of land described by Abul Fazl. (1 Mark)\n(ii) How was the state revenue share calculated from Polaj and Parauti lands? (1 Mark)\n(iii) Why did Akbar's administration devise such a nuanced classification system? (2 Marks)",
        "options": null,
        "answer": "Solutions for Ain-i Akbari Land Classification Source Question",
        "explanation": "Marking Scheme:\n(i) Four Classes [1 Mark] : Polaj, Parauti, Chachar, and Banjar.\n(ii) Calculation of Dues [1 Mark] : Average produce was calculated across good, middling, and bad \nqualities, and one-third (1/3rd) of this medium output was collected as state revenue.\n(iii) Rationale for Classification [2 Marks] :\n1. Scientific & Equitable: Prevented over-taxation on degraded or fallow land while capturing maximum \nyield from fertile soil. [1 Mark]\n2. Encouraged Agrarian Expansion: Allowed peasants reclaiming Banjar land to pay lower progressive \ntaxes, stimulating agricultural growth. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from an imperial farman of Jahangir regarding tobacco carefully and \nanswer the questions:\nSource: The Spread of Tobacco\n'As the evil of tobacco had made its way into the country, and had produced an intoxicating and noxious \neffect on many people, my brother King Abbas of Persia had ordered that whoever smoked tobacco in his \nrealm should have his nose and lips cut off... I also issued an order that no one should smoke it in any of my \nterritories, as it caused severe health damage and wasted precious money...'\n(i) When and from where was tobacco introduced into India? (1 Mark)\n(ii) Why did Emperor Jahangir issue a ban against smoking tobacco? (1 Mark)\n(iii) What does the rapid spread of New World crops reveal about the integration of Mughal India into \nglobal commerce? (2 Marks)",
        "options": null,
        "answer": "Solutions for Jahangir's Tobacco Farman Source Question",
        "explanation": "Marking Scheme:\n(i) Introduction [1 Mark] : Introduced into the Deccan around 1600 by Portuguese merchants from the \nAmericas.\n(ii) Jahangir's Ban [1 Mark] : Because it was perceived as an intoxicating, noxious habit that caused \nphysical health damage and economic waste.\n(iii) Global Commercial Integration [2 Marks] :\n1. Active maritime networks: Proves that Portuguese, Dutch, and Asian traders linked India to global \nbotanical transfers following the Columbian Exchange. [1 Mark]\n2. Rapid peasant adaptation: Shows Indian farmers were enterprising and quickly cultivated lucrative \ncommercial crops for market demand. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Evaluate the 'Ain-i Akbari' as a monumental historical source for reconstructing the administrative, \nsocial, and economic life of the Mughal Empire under Akbar.",
        "options": null,
        "answer": "Evaluation of the Ain-i Akbari as an administrative and historical source",
        "explanation": "Marking Scheme (8 Marks total):\n1. Monumental Scope and Structure (3 Marks):\n- Authored by Abul Fazl as the third volume of the Akbar Nama (completed 1598).\n- Structured into 5 daftars: Imperial household (Manzil-abadi), military and nobles (Sipah-abadi), \nprovincial administration and revenue tables (Mulk-abadi), Indian religions and sciences, and sayings of \nAkbar.\n2. Exceptional Empirical Detail (3 Marks):\n- Provides unprecedented statistical data on prices, wages, revenues, crop yields, army sizes, and caste \ncomposition of zamindars down to the pargana level.\n- Captures the diversity of regional agricultural output and provides invaluable data on currency, mints, \nand weights.\n3. Critical Historiographical Limitations (2 Marks):\n- Court-centric perspective: Eulogizes Akbar as an infallible, divinely guided monarch, obscuring popular \npeasant protests.\n- Regional imbalance: Highly detailed for the Gangetic core; sketchy for peripheral regions like Bengal \nand Kashmir.\n- Arithmetical errors and clerical slips require careful corroboration with independent archival records."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Describe the diverse agricultural crops grown in Mughal India during the Kharif and Rabi seasons. \nWhy were cash crops designated as 'Jins-i Kamil'?",
        "options": null,
        "answer": "Mughal agricultural crops, cropping seasons, and Jins-i Kamil",
        "explanation": "Marking Scheme (8 Marks total):\n1. Two Major Cropping Seasons (Do-Fasla) (3 Marks):\n- Kharif (Autumn harvest): Sown during monsoons; included rice, millets (jowar, bajra), maize, cotton, \nand pulses.\n- Rabi (Spring harvest): Sown in winter; included wheat, barley, gram, mustard, and lentils.\n- Exceptionally fertile regions with canal or river irrigation yielded three crops a year.\n2. The Concept of 'Jins-i Kamil' (Cash Crops) (3 Marks):\n- Designated as 'perfect crops' because they commanded high market demand and generated lucrative \ncash profits.\n- Cotton: Cultivated across vast belts in Gujarat, Khandesh, and Bengal, feeding the booming domestic \nand export textile industries.\n- Sugarcane: High-yield cash crop; Bengal was famed for producing the finest crystallized white sugar.\n- Oilseeds: Mustard, sesame, and castor cultivated for domestic lighting and cooking.\n3. Fiscal Significance for the State (2 Marks):\n- The state actively encouraged cash-crop farming by providing loans and tax rebates, as these yielded \nrevenue directly in silver currency."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following excerpt from Abul Fazl's Ain-i Akbari regarding the duties of the revenue collector \n(Amil-guzar) and answer the questions:\nSource: Instructions to the Amil-Guzar\n'The Amil-guzar should be a friend of the agriculturist. Let him not make it his practice to take land revenue \nonly in cash, but let him also accept payment in kind. Let him assist the needy husbandman with advances \nof money (taqavi) to purchase cattle and seed, and recover the loan in easy installments at the time of \nharvest... He should inspect the fields in person and not rely on the reports of others...'\n(i) What relationship should the Amil-guzar maintain with the peasant cultivator? (1 Mark)\n(ii) In what forms could land revenue be collected? (1 Mark)\n(iii) Mention two welfare measures the collector was instructed to undertake for farmers in distress. \n(2 Marks)",
        "options": null,
        "answer": "Solutions for Amil-guzar Instructions Source Question",
        "explanation": "Marking Scheme:\n(i) Relationship [1 Mark] : He was instructed to act as a benevolent friend, protector, and guide to the \nagriculturalist.\n(ii) Forms of Payment [1 Mark] : Both in liquid cash and in kind (grain produce).\n(iii) Welfare Measures [2 Marks] :\n1. Extend agricultural loans (taqavi) to purchase seeds, ploughs, and draft bullocks. [1 Mark]\n2. Personally inspect fields to assess real harvest losses rather than blindly trusting subordinates' \nreports. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Examine the lifestyle, economic activities, and tribal-state relations of forest dwellers (Janglis) in the \nMughal Empire during the 16th and 17th centuries.",
        "options": null,
        "answer": "Forest dwellers and tribal-state relations in Mughal India",
        "explanation": "Marking Scheme (8 Marks total):\n1. Life and Livelihood in the Forest (2.5 Marks):\n- Over 40% of the subcontinent was forested; dwellers were termed 'Jangli' (referring to their habitat, not \nsavage behavior).\n- Engaged in hunting, gathering wild honey, lac, resin, and medicinal herbs, alongside slash-and-burn \nshifting cultivation (Jhum).\n2. Commercial Exchanges with the Plains (2.5 Marks):\n- Active barter trade: Exchanged forest wax, timber, gum, and animal hides for grain, iron tools, and sea \nsalt brought by itinerant merchant caravans (Banjaras).\n3. State Penetration and Extraction (3 Marks):\n- Mughal state extracted elephants (monopolized for royal armies), military wood, and tribute \n(Peshkash) from tribal chiefs.\n- Clearing of frontier forests for permanent settled agriculture pushed tribal groups into subordinate \nagricultural caste status (Shudras).\n- Powerful tribal chiefs (e.g. Ahom rajas, Gond chieftains) transformed into regional zamindars, \ncommanding their own forts and cavalry."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Discuss the roles and status of women in the agrarian society of medieval India. To what extent did \nwomen enjoy property rights in rural households?",
        "options": null,
        "answer": "Roles, status, and property rights of women in Mughal agrarian society",
        "explanation": "Marking Scheme (8 Marks total):\n1. Agricultural Labor Roles (3 Marks):\n- Active participants in family farming: Men prepared the soil with the plough, while women engaged in \nweeding, transplanting, harvesting, and winnowing.\n- Handled home-based craft manufacturing: Spinning yarn on charkhas, grinding grain, and making \npottery clay.\n2. Gender Biases and Patriarchal Subjugation (2.5 Marks):\n- Subjected to strict patriarchal control; domestic violence, seclusion, and child marriage were prevalent.\n- Ritual taboos: Menstruating women were barred from touching the sacred plough or entering \ngranaries.\n- High mortality rates from repeated pregnancies, malnutrition, and diseases.\n3. Property and Inheritance Rights (2.5 Marks):\n- In several landed communities (e.g. Rajput and Jat peasantry), documents show that widows inherited \ntheir deceased husbands' landed property.\n- Could buy, sell, bequeath, or mortgage their Milkiyat land plots without male interference, \ndemonstrating that elite rural women exercised substantial economic autonomy."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "book": "Themes in Indian History Part-III (Modern India)",
      "title": "Colonialism and the Countryside: Exploring Official Archives",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part III: Modern India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The Permanent Settlement of land revenue was introduced in Bengal in 1793 by which British \nGovernor-General?",
        "options": [
          "(a) Lord Charles Cornwallis",
          "(b) Warren Hastings",
          "(c) Lord Wellesley",
          "(d) Lord William Bentinck"
        ],
        "answer": "(a) Lord Charles Cornwallis",
        "explanation": "Lord Charles Cornwallis introduced the Permanent Settlement in Bengal in 1793, fixing the land revenue \ndemand permanently in perpetuity with local zamindars."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The 'Sunset Law' in colonial Bengal dictated that:",
        "options": [
          "(a) If the zamindar failed to pay the revenue installment by sunset on the designated date, his estate was liable to be auctioned",
          "(b) Agricultural labor had to end strictly at sunset",
          "(c) Peasants were prohibited from entering the fields after sunset",
          "(d) Courts closed at sunset"
        ],
        "answer": "(a) If the zamindar failed to pay the revenue installment by sunset on the\ndesignated date, his estate was liable to be auctioned",
        "explanation": "Under the rigid Sunset Law, if revenue dues were not paid into the treasury before sunset on the \nappointed date, the zamindar's estate was seized and auctioned off."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In the villages of northern Bengal, wealthy resident peasants who commanded vast lands, local trade, \nand moneylending were called:",
        "options": [
          "(a) Jotedars",
          "(b) Ryots",
          "(c) Adhiyars",
          "(d) Bargadars"
        ],
        "answer": "(a) Jotedars",
        "explanation": "Jotedars (also known as haoladars or gantidars) were affluent village-based peasant landlords in north \nBengal who exercised immense local economic leverage over poor sharecroppers."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who led the great Santhal Rebellion (Hul) of 1855–56 against the British colonial authorities and \nmoneylenders?",
        "options": [
          "(a) Sidhu and Kanhu Manjhi",
          "(b) Birsa Munda",
          "(c) Alluri Sitarama Raju",
          "(d) Tirath Singh"
        ],
        "answer": "(a) Sidhu and Kanhu Manjhi",
        "explanation": "The Santhal Hul was spearheaded by two charismatic brothers, Sidhu and Kanhu Manjhi, who claimed \ndivine revelations to overthrow British and moneylender (Diku) exploitation."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The demarcated geographical tract created by the British in 1832 in the foothills of the Rajmahal for \nsettled Santhal agriculture was called:",
        "options": [
          "(a) Damin-i-Koh",
          "(b) Jangal Mahal",
          "(c) Santhal Pargana",
          "(d) Chota Nagpur"
        ],
        "answer": "(a) Damin-i-Koh",
        "explanation": "In 1832, the British enclosed a large fertile tract in the Rajmahal hills using boundary pillars, designating \nit as Damin-i-Koh ('skirts of the hills') for exclusive Santhal farming."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In the Bombay Deccan, which land revenue settlement was introduced by the British where revenue \nwas negotiated directly with individual cultivators?",
        "options": [
          "(a) Ryotwari Settlement",
          "(b) Permanent Settlement",
          "(c) Mahalwari Settlement",
          "(d) Talukdari Settlement"
        ],
        "answer": "(a) Ryotwari Settlement",
        "explanation": "In the Bombay Deccan and Madras, the British introduced the Ryotwari system, bypassing zamindars to \ncollect taxes directly from individual peasants (ryots) after periodic land surveys."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The Deccan Riots of 1875 broke out in which village of the Poona district in western India?",
        "options": [
          "(a) Supa",
          "(b) Shirur",
          "(c) Baramati",
          "(d) Indapur"
        ],
        "answer": "(a) Supa",
        "explanation": "The agrarian uprising erupted on 12 May 1875 at the market village of Supa (Poona district), where ryots \nattacked Gujarati and Marwari moneylenders' shops and set fire to account books."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which historic global conflict in the 1860s led to an unprecedented, temporary cotton export boom in \nthe Bombay Deccan?",
        "options": [
          "(a) The American Civil War (1861–1865)",
          "(b) The Crimean War",
          "(c) The Franco-Prussian War",
          "(d) The Opium Wars"
        ],
        "answer": "(a) The American Civil War (1861–1865)",
        "explanation": "The outbreak of the American Civil War in 1861 halted the supply of raw American cotton to British \ntextile mills in Lancashire, triggering a frantic scramble for Indian cotton."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Francis Buchanan, whose extensive survey journals provide invaluable insight into the Rajmahal hills \nand peasant life, was an employee of:",
        "options": [
          "(a) The British East India Company",
          "(b) The Archaeological Survey of India",
          "(c) The French East India Company",
          "(d) The Royal Geographic Society"
        ],
        "answer": "(a) The British East India Company",
        "explanation": "Francis Buchanan was a Scottish physician, botanist, and surveyor employed by the English East India \nCompany to assess the commercial and natural resources of newly annexed territories."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The British passed the 'Limitation Law' in 1859 in the Bombay Deccan, stipulating that loan bonds \nsigned between peasants and moneylenders were legally valid for only:",
        "options": [
          "(a) 3 years",
          "(b) 5 years",
          "(c) 1 year",
          "(d) 10 years"
        ],
        "answer": "(a) 3 years",
        "explanation": "The Limitation Law of 1859 declared that loan bonds would remain valid for only 3 years, intending to \ncheck compounding interest; however, moneylenders simply forced peasants to sign fresh bonds every \n3 years."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The Paharias of the Rajmahal hills practiced which form of agriculture using the hoe?",
        "options": [
          "(a) Shifting (Jhum) cultivation",
          "(b) Intensive canal irrigation",
          "(c) Terrace paddy cultivation",
          "(d) Commercial plantation"
        ],
        "answer": "(a) Shifting (Jhum) cultivation",
        "explanation": "The Paharias practiced shifting slash-and-burn cultivation on hill slopes, scratching the soil with a hand-\nhoe, growing pulses and millets for subsistence."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The 'Fifth Report' submitted to the British Parliament in 1813 was primarily an administrative inquiry \ninto:",
        "options": [
          "(a) The administration and commercial activities of the East India Company in India",
          "(b) The 1857 Revolt",
          "(c) Indian higher education",
          "(d) Railway construction"
        ],
        "answer": "(a) The administration and commercial activities of the East India Company in\nIndia",
        "explanation": "The Fifth Report, running over 1,000 pages, was submitted by a parliamentary select committee \nexamining the corruption, misrule, and agrarian impact of the East India Company's monopoly in Bengal."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In the struggle between the hill folk and the plainsmen in the Rajmahal region, the 'Hoe' and the \n'Plough' symbolized:",
        "options": [
          "(a) The hoe represented the shifting cultivation of the Paharias, and the plough represented the settled agriculture of the Santhals",
          "(b) The hoe was a British weapon, the plough was Indian",
          "(c) The hoe represented iron tools, the plough wooden tools",
          "(d) There was no symbolic meaning"
        ],
        "answer": "(a) The hoe represented the shifting cultivation of the Paharias, and the plough\nrepresented the settled agriculture of the Santhals",
        "explanation": "The clash between the Paharias and Santhals was characterized by historians as the battle between the \n'hoe' (Paharia forest shifting farming) and the 'plough' (Santhal settled agricultural reclamation)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What fraudulent strategy did Bengali zamindars employ to retain control over their estates during \ncolonial public revenue auctions?",
        "options": [
          "(a) Fictitious sales (benami transactions) through their own agents and transferring estates to female relatives",
          "(b) Bribing the Governor-General directly in London",
          "(c) Fleeing to Nepal",
          "(d) Burning down auction houses"
        ],
        "answer": "(a) Fictitious sales (benami transactions) through their own agents and\ntransferring estates to female relatives",
        "explanation": "Zamindars transferred properties to their mothers/wives (as Company law prohibited seizing women's \nland) and had trusted servants outbid competitors at auctions without paying the purchase price."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Who was the British Collector of Bhagalpur who proposed a pacification policy towards the Paharias \nin the 1780s, offering stipends to chiefs?",
        "options": [
          "(a) Augustus Cleveland",
          "(b) Colin Mackenzie",
          "(c) Charles Metcalfe",
          "(d) Mountstuart Elphinstone"
        ],
        "answer": "(a) Augustus Cleveland",
        "explanation": "Augustus Cleveland, Collector of Bhagalpur in the 1780s, abandoned the brutal extermination policy and \ngranted annual government pensions to Paharia tribal chiefs in exchange for peaceful conduct."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The strongmen or clubmen maintained by Bengali zamindars to intimidate ryots and enforce rent \ncollection were known as:",
        "options": [
          "(a) Lathyals",
          "(b) Paiks",
          "(c) Barkandazes",
          "(d) Sepoys"
        ],
        "answer": "(a) Lathyals",
        "explanation": "Lathyals were hired musclemen armed with bamboo quarterstaffs (lathis) employed by zamindars to \nintimidate tenants, attack rival revenue agents, and resist outside auction buyers."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What was the term used by the Santhals to describe non-tribal outsiders, moneylenders, and \nexploitative British agents?",
        "options": [
          "(a) Dikus",
          "(b) Sahukars",
          "(c) Ryots",
          "(d) Jamadars"
        ],
        "answer": "(a) Dikus",
        "explanation": "Santhals termed all exploitative outsiders—moneylenders, corrupt zamindari tax agents, traders, and \nBritish officials—as 'Dikus'."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Following the suppression of the Santhal Rebellion in 1856, the British created a separate \nadministrative district called:",
        "options": [
          "(a) Santhal Pargana",
          "(b) Damin-i-Koh",
          "(c) Rarh Bengal",
          "(d) Bhagalpur District"
        ],
        "answer": "(a) Santhal Pargana",
        "explanation": "To pacify the tribal populace, the British carved out a new 5,500-square-mile district named Santhal \nPargana out of Bhagalpur and Birbhum, placing it under non-regulation special tenancy laws."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What primary target did the rioting peasants attack and set ablaze during the Deccan Riots of 1875?",
        "options": [
          "(a) Moneylenders' account books, loan bonds, and debt contracts (Bahi-khatas)",
          "(b) British telegraph lines",
          "(c) Railway engines",
          "(d) Cotton textile mills"
        ],
        "answer": "(a) Moneylenders' account books, loan bonds, and debt contracts (Bahi-\nkhatas)",
        "explanation": "Peasants deliberately raided sahukars' homes to seize and publicly burn debt bonds, promissory notes, \nand ledger books (bahi-khatas) that legally enslaved them in unpayable debt."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Under the Ryotwari settlement in the Bombay Deccan, land revenue was fixed for a period of:",
        "options": [
          "(a) 30 years (subject to periodic upward revision)",
          "(b) Permanently in perpetuity",
          "(c) 1 year only",
          "(d) 100 years"
        ],
        "answer": "(a) 30 years (subject to periodic upward revision)",
        "explanation": "Unlike Bengal's Permanent Settlement, Ryotwari assessments were temporary, fixing revenue for 30-\nyear terms after which the colonial government could hike tax rates based on reassessments."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which legislative Act was enacted by the British colonial government in 1879 to protect Deccan \npeasants from imprisonment for debt?",
        "options": [
          "(a) Deccan Agriculturists' Relief Act",
          "(b) Bengal Tenancy Act",
          "(c) Indian Forest Act",
          "(d) Vernacular Press Act"
        ],
        "answer": "(a) Deccan Agriculturists' Relief Act",
        "explanation": "Alarmed by rural unrest, the British passed the Deccan Agriculturists' Relief Act in 1879, which protected \nryots from being imprisoned for debt defaults and restricted moneylenders' land confiscations."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In the famous public auction at Burdwan (Bengal) in 1797, why were the auctioned mahals secretly \npurchased by the Raja's own men?",
        "options": [
          "(a) To outwit the East India Company and retain real ownership of his ancestral estates",
          "(b) Because the British asked the Raja to buy them",
          "(c) To donate the land to temples",
          "(d) Because the land had no value"
        ],
        "answer": "(a) To outwit the East India Company and retain real ownership of his ancestral\nestates",
        "explanation": "Over 95% of the sales at the 1797 Burdwan auction were fictitious (benami); the Raja's servants outbid \ncompetitors, defaulted on payment, and repurchased the land at nominal rates."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Sharecroppers in rural Bengal who handed over half their agricultural produce to jotedars were called:",
        "options": [
          "(a) Adhiyars or Bargadars",
          "(b) Ryots",
          "(c) Asamis",
          "(d) Lathyals"
        ],
        "answer": "(a) Adhiyars or Bargadars",
        "explanation": "Adhiyars (or Bargadars) were impoverished sharecroppers who cultivated the lands of wealthy Jotedars, \nproviding their own ploughs and handing over 50% of the harvest as rent."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What was the official British commission appointed to investigate the agrarian revolt of 1875 in \nMaharashtra?",
        "options": [
          "(a) The Deccan Riots Commission",
          "(b) The Hunter Commission",
          "(c) The Simon Commission",
          "(d) The Floud Commission"
        ],
        "answer": "(a) The Deccan Riots Commission",
        "explanation": "The Bombay Government set up the Deccan Riots Commission in 1875, which interviewed ryots, \nsahukars, and collectors, submitting an exhaustive report to the British Parliament in 1878."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which raw forest resource did the Paharias gather from the Rajmahal hills to sell to lowland traders?",
        "options": [
          "(a) Silk cocoons, resin, and mahua",
          "(b) Teak and mahogany only",
          "(c) Rubber and coffee",
          "(d) Spices and cloves"
        ],
        "answer": "(a) Silk cocoons, resin, and mahua",
        "explanation": "Paharias collected wild forest silk cocoons (tussar), resin, beeswax, and sweet mahua flowers, bartering \nthem for salt, iron, and cloth with plains merchants."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Following the Permanent Settlement of 1793, over 75% of the zamindaris in Bengal \nchanged hands or defaulted on revenue payments within the first few decades.\nReason (R): The initial colonial revenue demand was fixed exceptionally high, and agricultural grain \nprices in the 1790s were severely depressed.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The Company set an exorbitant initial revenue demand anticipating that it could \nnever be increased later, bankrupting traditional zamindars when prices crashed."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The Jotedars in north Bengal wielded far more effective direct control over the \npeasantry than the traditional absentee Zamindars.\nReason (R): Jotedars lived directly in the villages, controlled grain trade and rural credit, and actively \nincited sharecroppers to resist paying rent to the zamindar.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. While zamindars resided away in urban towns, jotedars commanded immediate \nvillage power through credit and sharecropping contracts."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The Santhals welcomed the British state and moneylenders as benevolent benefactors \nwho modernized their tribal life.\nReason (R): British authorities provided free agricultural loans and constructed hospitals across the \nDamin-i-Koh.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. The Santhals rose in violent rebellion in 1855 against the extortionate taxes of \nthe British state and the debt traps of moneylenders (Dikus)."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The end of the American Civil War in 1865 plunged cotton cultivators in the Bombay \nDeccan into acute economic misery.\nReason (R): British textile merchants abruptly withdrew credit advances, while Indian raw cotton \nprices plummeted due to the revival of American cotton exports.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The post-Civil War market crash ended the cotton boom; moneylenders denied \nfresh loans, demanded debt repayments, and seized peasant cattle and lands."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Peasants in the 1875 Deccan Riots murdered British colonial collectors and tore down \ngovernment railway stations.\nReason (R): The Deccan agrarian uprising was a revolutionary armed socialist movement aimed at \noverthrowing British colonial sovereignty.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. The Deccan Riots were aimed almost exclusively at Gujarati and Marwari \nmoneylenders (sahukars) to destroy debt bonds; no British officials were murdered."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Explain any three reasons why zamindars regularly defaulted on land revenue payments following the \nPermanent Settlement of 1793 in Bengal.",
        "options": null,
        "answer": "Reasons for zamindari default under Permanent Settlement",
        "explanation": "1. High Initial Assessment [1 Mark] : The British fixed the revenue demand exceptionally high in \nperpetuity, anticipating they could never raise it in future.\n2. Depressed Agricultural Prices [1 Mark] : In the 1790s, agricultural market prices were severely low, \nmaking it impossible for ryots to sell crops and pay rent to the zamindar.\n3. Invariable Demand & Sunset Law [1 Mark] : The revenue had to be paid punctually regardless of \nharvest failures or droughts before sunset of the specified date, or the estate was auctioned."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Who were the Jotedars? How did their position differ from that of the traditional Zamindars in \nBengal?",
        "options": null,
        "answer": "Jotedars vs Zamindars in rural Bengal",
        "explanation": "1. Identity of Jotedars [1 Mark] : Wealthy resident peasants in north Bengal holding vast tracts of \nagricultural land (thousands of acres).\n2. Rural Dominance vs Absenteeism [1 Mark] : Jotedars lived directly in the villages controlling local \ngrain trade, moneylending, and poor sharecroppers (Adhiyars), whereas zamindars often resided as \nabsentee rentiers in cities like Calcutta.\n3. Undermining Zamindars [1 Mark] : Jotedars actively encouraged ryots to delay rent payments, \nmobilized resistance against zamindari agents, and bought up auctioned zamindari estates."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Discuss the life, subsistence strategies, and habitat of the Paharias of the Rajmahal hills.",
        "options": null,
        "answer": "Paharias of the Rajmahal hills",
        "explanation": "1. Forest Dwellers & Shifting Agriculture [1 Mark] : Lived in the rugged Rajmahal hills, clearing hill \npatches with the hoe, growing pulses and millets through shifting farming (Jhum).\n2. Forest Economy [1 Mark] : Depended on forest produce: gathering wild mahua flowers for food, silk \ncocoons for trade, and making charcoal.\n3. Conflict with Plainsmen [1 Mark] : Regularly launched raids on settled agricultural villages in the \nplains during food shortages, extracting tributes from merchants for safe passage through hill passes."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "What was the 'Damin-i-Koh'? Why did the Santhals rebel against British rule in 1855–56 despite being \nsettled there?",
        "options": null,
        "answer": "Damin-i-Koh and the Santhal Rebellion",
        "explanation": "1. Creation of Damin-i-Koh (1832) [1 Mark] : A designated enclave in the Rajmahal foothills demarcated \nby boundary pillars by the British to settle Santhals for permanent plough agriculture.\n2. State & Moneylender Exploitation [1 Mark] : The colonial government imposed steep land revenue \ndemands, while non-tribal moneylenders (Dikus) charged usurious interest (over 50–500%) and seized \nmortgaged ancestral lands.\n3. The 1855 Hul [1 Mark] : Led by Sidhu and Kanhu, Santhals rose in armed rebellion to expel the British, \neradicate debt bonds, and establish an autonomous Santhal raj."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "How did the American Civil War (1861–1865) impact the economy and agrarian society of the \nBombay Deccan?",
        "options": null,
        "answer": "Impact of American Civil War on Bombay Deccan",
        "explanation": "1. Panic in Lancashire & Easy Credit [1 Mark] : When US cotton exports halted, British merchants \nflooded Bombay with easy credit advances (Rs 100 per acre) to expand Indian cotton cultivation.\n2. Expansion of Acreage [1 Mark] : Deccan ryots switched massively from foodgrains to cotton farming, \nenjoying high export profits for four years.\n3. The Collapse of 1865 [1 Mark] : The war's end revived cheap American cotton supply; Indian prices \ncollapsed, credit evaporated, and moneylenders foreclosed on indebted peasant holdings."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What was the 'Limitation Law' of 1859? How did moneylenders manipulate it to exploit indebted \npeasants?",
        "options": null,
        "answer": "The Limitation Law of 1859 and moneylender manipulation",
        "explanation": "1. Purpose of the Law [1 Mark] : Enacted by the colonial state to declare loan bonds legally valid for only \n3 years, aiming to stop endless compounding of debt.\n2. Sahukar Manipulation [1 Mark] : Moneylenders forced illiterate ryots to sign a fresh bond every three \nyears, adding accumulated unpaid interest to the principal.\n3. Resulting Subjugation [1 Mark] : Ensured peasants remained perpetually trapped in legally sanctioned \ndebt servitude, leading to widespread anger."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Describe the fictitious sales (benami transactions) practiced by Bengali zamindars to survive the \nPermanent Settlement auctions.",
        "options": null,
        "answer": "Fictitious sales practiced by zamindars",
        "explanation": "1. Transfer to Women [1 Mark] : Zamindars transferred ownership to mothers or wives, as British law \nforbade confiscating women's property.\n2. Benami Bidding [1 Mark] : When estates were auctioned for arrears, zamindars sent trusted agents to \noutbid outsiders, deliberately defaulting on the purchase price so the estate was re-auctioned.\n3. Cheap Repurchase [1 Mark] : Repeated defaults forced the exhausted treasury to resell the estate \nback to the original zamindar at a fraction of its real value."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "What were the main findings and significance of the 'Fifth Report' submitted to the British Parliament \nin 1813?",
        "options": null,
        "answer": "Findings and significance of the Fifth Report",
        "explanation": "1. Context & Purpose [1 Mark] : Prepared by a British Parliamentary committee to review the \nadministration and revenue governance of the East India Company in Bengal.\n2. Narrative of Zamindari Ruin [1 Mark] : Documented the collapse of traditional aristocracy, exorbitant \nrevenue demands, and frequent public auctions of ancestral estates.\n3. Political Motive [1 Mark] : Exaggerated Company mismanagement to justify parliamentary \nintervention and curb the Company's trading monopoly."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "How did the Deccan Riots of 1875 unfold in Poona and Ahmednagar? What were the main demands \nof the rioters?",
        "options": null,
        "answer": "Course and demands of the Deccan Riots of 1875",
        "explanation": "1. The Spark at Supa [1 Mark] : Began in May 1875 when villagers attacked the bazaar of Supa, targeting \nGujarati and Marwari moneylenders.\n2. Destruction of Debt Records [1 Mark] : Cultivators broke open moneylenders' safes, dragged out loan \nbonds and ledger books (bahi-khatas), and burned them in public bonfires.\n3. Targeted Action [1 Mark] : Peasants engaged in social boycotts (refusing to cultivate sahukars' lands) \nwithout resorting to physical violence against the British state."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Explain the British policy of pacification towards the Paharias under Augustus Cleveland in the 1780s.",
        "options": null,
        "answer": "Cleveland's pacification policy towards Paharias",
        "explanation": "1. Transition from Extermination [1 Mark] : The British abandoned the brutal military hunts of the 1770s \nthat had failed to subdue the forest hill dwellers.\n2. Annual Allowances [1 Mark] : Collector Augustus Cleveland gave Paharia chiefs annual financial \nstipends in return for ensuring their men maintained peace.\n3. Indigenous Policing [1 Mark] : Chiefs were made responsible for disciplining tribesmen, though many \nchiefs lost authority among clan members who viewed them as puppets of the Raj."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the introduction of the Permanent Settlement in Bengal in 1793. Why did Lord Cornwallis \nintroduce it, why did traditional zamindars default, and how did they subvert colonial auctions?",
        "options": null,
        "answer": "Comprehensive essay on the Permanent Settlement in Bengal",
        "explanation": "Marking Scheme (8 Marks total):\n1. Motives behind the Permanent Settlement (2.5 Marks):\n- British revenue collections were erratic and plunging; agriculture was suffering from neglect.\n- Cornwallis sought to create a stable, regular revenue inflow while fostering a loyal class of landed \nproprietors (zamindars) who would invest capital to improve agriculture, akin to British landlords.\n2. Reasons for Zamindari Defaults (2.5 Marks):\n- Demand fixed exorbitantly high: British anticipated inflation and wanted to maximize revenue \npermanently.\n- Depressed 1790s grain prices: Peasants could not sell produce at viable prices to pay rents.\n- Inflexible Sunset Law: Strict deadlines without relief for droughts or floods.\n- Power curbs: British disbanded zamindars' private militias (lathyals) and took away judicial powers, \nmaking rent collection slow.\n3. Strategies of Subversion and Survival (3 Marks):\n- Fictitious sales (Benami transfers): Transferred property titles to mothers/wives, whose lands were \nlegally exempt from confiscation.\n- Auction sabotage: Zamindars' agents outbid competitors, refused to pay the balance, forcing endless \nre-auctions until the state sold the land back to the zamindar cheaply.\n- Intimidation of new buyers: Lathyals assaulted outside purchasers, while loyal ryots resisted allowing \nnew owners onto ancestral lands."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the confrontation between the 'Hoe' and the 'Plough' in the Rajmahal hills. Contrast the \nlifestyle of the Paharias with the Santhals and discuss the causes and consequences of the Santhal \nHul of 1855.",
        "options": null,
        "answer": "The battle between the Hoe and the Plough in the Rajmahal hills",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Paharias (The Hoe) (2.5 Marks):\n- Indigenous forest dwellers; practiced shifting cultivation using the hoe; collected mahua, silk cocoons, \nand resin.\n- Intensely attached to forest freedom; resisted British encroachment and defended their ancestral \nautonomy.\n2. The Santhals (The Plough) (2.5 Marks):\n- Settled agriculturalists encouraged by British officials to clear dense forests and till the land with the \nheavy iron plough.\n- Enclosed within the Damin-i-Koh (1832); reclaimed wild jungle into vast paddy fields, expanding British \nrevenues.\n3. Causes of the Santhal Rebellion (Hul) (1.5 Marks):\n- Heavy revenue extortion by colonial tax officers.\n- Ruthless exploitation by non-tribal moneylenders (Dikus) charging compounding interest rates of 50–\n500% and seizing mortgaged tribal lands.\n- Corrupt police and judicial systems siding openly with sahukars.\n4. Course and Consequences (1.5 Marks):\n- Led by brothers Sidhu and Kanhu in 1855, Santhals rose in open rebellion, targeting moneylenders and \nBritish outposts.\n- The rebellion was ruthlessly crushed with military force.\n- In 1856, the British carved out the separate 'Santhal Pargana' district with special non-regulation \nprotective tenancy laws."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the agrarian crisis in the Bombay Deccan during the 19th century. How did the Ryotwari \nsystem, the American Civil War cotton boom, and moneylender manipulation lead to the Deccan Riots \nof 1875?",
        "options": null,
        "answer": "Agrarian crisis, cotton boom, and Deccan Riots in Bombay Deccan",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Ryotwari System and High Assessment (2 Marks):\n- Land revenue was assessed directly on individual cultivators (ryots) at crushing rates (often 50% of \ngross produce).\n- Subject to upward revision every 30 years; peasants were forced into the clutches of moneylenders to \npay taxes during famines.\n2. The Cotton Boom of the 1860s (2 Marks):\n- American Civil War (1861-65) severed British cotton supplies; merchants pumped millions into the \nDeccan, extending lavish credit loans (Rs 100/acre).\n- Ryots expanded cotton farming, but the boom was brief and debt mounted.\n3. Post-War Bust and Credit Freeze (2 Marks):\n- Civil War ended in 1865; American cotton flooded European markets; Indian cotton prices crashed.\n- Moneylenders (Marwaris, Gujaratis) abruptly stopped giving fresh credit, demanding immediate \nrepayment of old loans.\n4. Limitation Law (1859) and the 1875 Riots (2 Marks):\n- Moneylenders bypassed the 3-year limitation law by forcing ryots to sign fraudulent fresh bonds, \nturning unpaid interest into principal.\n- In May 1875, ryots rose in revolt at Supa (Poona) and Ahmednagar, attacking sahukars' shops, seizing \nand burning debt ledgers (bahi-khatas).\n- Prompted the Deccan Riots Commission (1878) and the Deccan Agriculturists' Relief Act (1879)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Buchanan's account of the Rajmahal hills carefully and answer \nthe questions:\nSource: Buchanan on the Paharias\n'Buchanan wrote of the Paharias: 'They are very suspicious of every stranger... On entering their villages, \nthey seem to view us with dread, and run into the woods... They live in huts made of wattle and thatch, \nsurrounded by their little fields cleared by fire. They dig with the hoe and cultivate small millets and pulses. \nThey consider the forest their home and fiercely resist the encroachment of outsiders who bring the \nplough...'\n(i) Who was Buchanan and why did the Paharias view him with dread? (1 Mark)\n(ii) Describe the housing and agricultural techniques of the Paharias. (1 Mark)\n(iii) Why did the Paharias perceive the 'plough' as an existential threat? (2 Marks)",
        "options": null,
        "answer": "Solutions for Buchanan's Paharia Account Source Question",
        "explanation": "Marking Scheme:\n(i) Buchanan & Suspicion [1 Mark] : An East India Company surgeon and surveyor; Paharias dreaded \nhim as an agent of the British state coming to survey and alienate their ancestral lands.\n(ii) Housing & Farming [1 Mark] : Lived in simple wattle-and-thatch huts; cleared hillsides with fire and \ncultivated millets and pulses using hand-hoes (shifting jhum farming).\n(iii) Threat of the Plough [2 Marks] :\n1. Ecological destruction: The iron plough required cutting down sacred forests, destroying their hunting \nand gathering way of life. [1 Mark]\n2. Subjugation by settled farmers: The plough was associated with aggressive Santhal immigrants and \nlowland revenue collectors who sought to displace them from their hills. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from the Deccan Riots Commission Report (1878) and answer the \nquestions:\nSource: A Ryot's Petition\n'A cultivator from village Supa stated before the Commission:\n'I borrowed fifty rupees from the Marwari sahukar ten years ago to pay the government revenue \nassessment. Over the years, I paid him back more than two hundred rupees in grain and cash, but his bahi-\nkhata (ledger) shows that I still owe him four hundred rupees! Every three years, he threatened to take away \nmy bullocks and house unless I signed a new bond... I had no choice but to place my thumb impression on \na blank paper...'\n(i) Why did the cultivator initially borrow money from the sahukar? (1 Mark)\n(ii) What was the legal trick used by the moneylender every three years? (1 Mark)\n(iii) How does this petition explain why the rioters in 1875 targeted account books rather than human \nlives? (2 Marks)",
        "options": null,
        "answer": "Solutions for Deccan Riots Commission Source Question",
        "explanation": "Marking Scheme:\n(i) Initial Reason [1 Mark] : To pay the rigid, inflexible colonial government land revenue installment.\n(ii) The Sahukar's Trick [1 Mark] : Exploited the 1859 Limitation Law by forcing the peasant to sign a \nfresh bond every three years, transforming accumulated usurious interest into new principal.\n(iii) Targeting of Account Books [2 Marks] :\n1. Source of legal bondage: The ledger books (bahi-khatas) and loan bonds were the legal weapons \nused by courts to seize peasant land and cattle. [1 Mark]\n2. Burning debt: Destroying the bonds liberated the ryots from fraudulent, intergenerational debt \nservitude. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Critically analyze the role of Jotedars in the agrarian economy of colonial Bengal. Why were they \nmore powerful than Zamindars in rural areas?",
        "options": null,
        "answer": "Role and power of Jotedars in colonial Bengal",
        "explanation": "Marking Scheme (8 Marks total):\n1. Socio-Economic Identity of Jotedars (2.5 Marks):\n- Wealthy class of resident peasant landholders in northern Bengal (Dinajpur, Rangpur, Jalpaiguri).\n- Owned massive consolidated landholdings, sometimes extending over thousands of acres.\n- Controlled local grain trade, haats (markets), and rural moneylending, accumulating vast capital.\n2. Superiority over Absentee Zamindars (3 Marks):\n- Village Presence: Jotedars resided permanently in the village, exercising direct daily authority over \ncultivators, unlike absentee zamindars living in cities.\n- Sharecropping Control: Employed poor sharecroppers (Adhiyars/Bargadars) who tilled their land and \nsurrendered 50% of the crop, creating bonds of economic dependency.\n3. Active Sabotage of Zamindari Administration (2.5 Marks):\n- Urged ryots to withhold rent payments to the zamindar, directly causing zamindari default.\n- Prevented zamindari revenue collectors (Gomasthas) from executing their duties.\n- At colonial auctions, Jotedars bought up defaulting zamindari estates, steadily replacing the old \naristocratic order."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Trace the causes, mobilization, outbreak, and aftermath of the Santhal Rebellion (Hul) of 1855–56 in \neastern India.",
        "options": null,
        "answer": "Santhal Rebellion (Hul) of 1855-56",
        "explanation": "Marking Scheme (8 Marks total):\n1. Causes of Discontent (2.5 Marks):\n- Enclosed in the Damin-i-Koh (1832) to clear forests; soon confronted crushing land revenue levies from \nthe British.\n- Ensnared by non-tribal moneylenders (Dikus) charging extortionate interest rates of 50-500% and \nseizing land.\n- Corrupt police and judicial systems sided with usurious sahukars, humiliating tribal chiefs.\n2. Mobilization and Divine Sanction (2 Marks):\n- Led by four brothers: Sidhu, Kanhu, Chand, and Bhairav Manjhi.\n- Sidhu and Kanhu proclaimed divine messages from Thakur (God), ordering them to liberate Santhal \nland from the Dikus and the White Raj.\n3. The Outbreak of Armed Rebellion (2 Marks):\n- Thousands of Santhals armed with bows, poisoned arrows, and axes marched across Bhagalpur and \nBirbhum.\n- Attacked moneylenders' houses, tore up debt bonds, and executed oppressive police darogas.\n4. Brutal Suppression and Santhal Pargana (1.5 Marks):\n- British deployed modern troops, artillery, and elephant regiments, burning Santhal villages and killing \nover 15,000 tribals.\n- Created the separate 'Santhal Pargana' district (1856) with non-regulation protective laws to prevent \nfuture unrest."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding the Fifth Report of 1813 and answer the questions:\nSource: On the Evils of the Permanent Settlement\n'The Fifth Report states: 'The revenue was fixed in perpetuity, but the zamindars could not collect their rents \nfrom the ryots with the same punctuality with which the government demanded it from them. The result \nwas that the estates of ancient zamindars were put up for auction in rapid succession... Many of the oldest \nfamilies of Bengal have been reduced to poverty, while their lands have passed into the hands of petty \nmerchants and speculators from Calcutta...'\n(i) What major imbalance between the state and the zamindars is highlighted in the excerpt? (1 Mark)\n(ii) Who purchased the ancient landed estates when they were auctioned? (1 Mark)\n(iii) Why did the British Parliamentary Committee criticize the effects of the Permanent Settlement? \n(2 Marks)",
        "options": null,
        "answer": "Solutions for Fifth Report on Permanent Settlement Source Question",
        "explanation": "Marking Scheme:\n(i) Imbalance [1 Mark] : The government demanded punctual revenue from zamindars on a fixed date \n(under the Sunset Law), but zamindars lacked prompt judicial mechanisms to collect rents from \nrecalcitrant ryots.\n(ii) Purchasers [1 Mark] : Urban merchants, moneylenders, and speculators from Calcutta.\n(iii) Parliamentary Criticism [2 Marks] :\n1. Destruction of traditional nobility: Ruined the historic landed aristocracy of Bengal, generating rural \ninstability. [1 Mark]\n2. Exposed Company misrule: Proved the East India Company's rigid fiscal machinery impoverished \nboth rural landlords and peasants to fuel colonial greed. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Discuss the Cotton Boom in the Bombay Deccan during the American Civil War (1861–1865). How \ndid the boom transform into a devastating depression, culminating in the Deccan Riots of 1875?",
        "options": null,
        "answer": "Cotton boom, post-war depression, and the 1875 Deccan Riots",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Outbreak of the American Civil War (2.5 Marks):\n- In 1861, American ports were blockaded; raw cotton shipments to Britain plummeted by over 90%.\n- The Cotton Supply Association in Britain turned to India; credit advances of Rs 100 per acre were \ndisbursed to Deccan ryots.\n- Cultivators abandoned food crops to plant cotton, enjoying windfall profits for four years.\n2. The Sudden Crash of 1865 (2.5 Marks):\n- The American Civil War ended in 1865; American cotton re-entered world markets at cheaper rates.\n- Indian cotton export prices crashed; moneylenders panicked, refusing to extend fresh credit and \ndemanding repayment of past loans.\n3. Compounding Agrarian Distress (1.5 Marks):\n- Revenue demand was hiked by up to 50% under fresh 30-year Ryotwari assessments.\n- Severe drought in the early 1870s wiped out crops and killed cattle, pushing peasants into starvation.\n4. The Explosion of 1875 (1.5 Marks):\n- Moneylenders manipulated the 3-year Limitation Law, forcing peasants to surrender their ancestral \nlands.\n- In May 1875, ryots erupted in rebellion across Poona and Ahmednagar, systematically attacking \nmoneylenders' shops and burning debt bonds (bahi-khatas)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Compare and contrast the colonial land revenue systems: the Permanent Settlement of Bengal and \nthe Ryotwari System of the Bombay Deccan. How did each impact rural agrarian society?",
        "options": null,
        "answer": "Comparative analysis of Permanent Settlement and Ryotwari systems",
        "explanation": "Marking Scheme (8 Marks total):\n1. Permanent Settlement of Bengal (1793) (4 Marks):\n- Revenue settlement made with Zamindars as permanent landed proprietors.\n- Revenue demand was fixed permanently in perpetuity; failed payments triggered the Sunset Law, \nauctioning estates.\n- Impact: Caused the ruin of ancient aristocratic families; rise of prosperous resident Jotedars; severe \nexploitation of rack-rented sharecroppers (Adhiyars).\n2. Ryotwari System of Bombay Deccan (1820s) (4 Marks):\n- Settlement made directly with individual peasant cultivators (ryots), eliminating large zamindars.\n- Revenue was not permanent; subject to periodic upward reassessment every 30 years (often up to 50% \nof gross produce).\n- Impact: Peasants lacked capital to pay fixed cash taxes during droughts; became hopelessly ensnared \nby Marwari and Gujarati moneylenders, leading to the 1875 Deccan agrarian uprising."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "book": "Themes in Indian History Part-III (Modern India)",
      "title": "Rebels and the Raj: The 1857 Revolt and Its Representations",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part III: Modern India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The historic Revolt of 1857 began on 10 May 1857 in the military cantonment of:",
        "options": [
          "(a) Meerut",
          "(b) Barrackpore",
          "(c) Delhi",
          "(d) Kanpur"
        ],
        "answer": "(a) Meerut",
        "explanation": "The mutiny erupted on the afternoon of Sunday, 10 May 1857, at Meerut cantonment when Indian \nsepoys broke into the bell of arms, liberated imprisoned comrades, and marched to Delhi."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which Mughal Emperor was proclaimed the symbolic supreme leader of the 1857 uprising when \nrebellious sepoys stormed the Red Fort in Delhi?",
        "options": [
          "(a) Bahadur Shah Zafar",
          "(b) Shah Alam II",
          "(c) Akbar II",
          "(d) Jahandar Shah"
        ],
        "answer": "(a) Bahadur Shah Zafar",
        "explanation": "Rebel sepoys arrived at the Red Fort on 11 May 1857 and prevailed upon the aged Mughal emperor \nBahadur Shah Zafar to accept nominal leadership of the revolt."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which kingdom was described by Lord Dalhousie in 1851 as 'a cherry that will drop into our mouth \none day'?",
        "options": [
          "(a) Awadh",
          "(b) Jhansi",
          "(c) Satara",
          "(d) Nagpur"
        ],
        "answer": "(a) Awadh",
        "explanation": "Governor-General Lord Dalhousie used this famous metaphor for the kingdom of Awadh in 1851, \neventually annexing it in 1856 on the pretext of 'misgovernance'."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who was the popular preacher known as 'Danka Shah' who traveled on a palanquin with drums, \npredicting the imminent end of British rule?",
        "options": [
          "(a) Maulvi Ahmadullah Shah",
          "(b) Shah Mal",
          "(c) Bakht Khan",
          "(d) Mangal Pandey"
        ],
        "answer": "(a) Maulvi Ahmadullah Shah",
        "explanation": "Maulvi Ahmadullah Shah of Faizabad was called Danka Shah ('drum maulvi') because he traveled in a \npalanquin preceded by drum-beaters, inspiring thousands to fight in Lucknow."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Who led the revolt in the region of Arrah (Jagdishpur, Bihar), fighting valiantly despite his advanced \nage?",
        "options": [
          "(a) Kunwar Singh",
          "(b) Nana Sahib",
          "(c) Tantia Tope",
          "(d) Khan Bahadur Khan"
        ],
        "answer": "(a) Kunwar Singh",
        "explanation": "Kunwar Singh, an elderly 75-year-old Rajput zamindar of Jagdishpur near Arrah in Bihar, organized a \nformidable guerilla rebellion against British troops across Bihar and eastern UP."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Under the British 'Summary Settlement of 1856' in Awadh, what percentage of villages previously held \nby Taluqdars were confiscated?",
        "options": [
          "(a) Over 67%",
          "(b) Less than 10%",
          "(c) 25%",
          "(d) 90%"
        ],
        "answer": "(a) Over 67%",
        "explanation": "The 1856 Summary Settlement stripped the powerful landed Taluqdars of Awadh of their ancestral \nestates, reducing their control from 67% of villages to 38%."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The famous rebel proclamation issued on 25 August 1857 appealing to all sections of Indian society \n(zamindars, merchants, artisans) is known as the:",
        "options": [
          "(a) Azamgarh Proclamation",
          "(b) Delhi Declaration",
          "(c) Meerut Manifesto",
          "(d) Lucknow Charter"
        ],
        "answer": "(a) Azamgarh Proclamation",
        "explanation": "The Azamgarh Proclamation of 25 August 1857, published under the authority of Prince Firoz Shah, \noutlined the grievances and assurances offered to every stratum of Indian society."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which British painting by Thomas Jones Barker celebrated the triumphant arrival of British forces to \nrescue the besieged British garrison?",
        "options": [
          "(a) 'Relief of Lucknow'",
          "(b) 'In Memoriam'",
          "(c) 'The Clemency of Canning'",
          "(d) 'Justice'"
        ],
        "answer": "(a) 'Relief of Lucknow'",
        "explanation": "Thomas Jones Barker painted 'The Relief of Lucknow' in 1859, depicting Colin Campbell, James Outram, \nand Henry Havelock meeting in triumph to commemorate British imperial endurance."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Who mobilized the Jat cultivators and village headmen across the eighty-four villages (chaurasee \ndes) of Baraut in western Uttar Pradesh during 1857?",
        "options": [
          "(a) Shah Mal",
          "(b) Gonoo",
          "(c) Devi Singh",
          "(d) Bakht Khan"
        ],
        "answer": "(a) Shah Mal",
        "explanation": "Shah Mal, an enterprising local leader of Baraut (Baghpat), organized Jat peasants, raided British grain \nstores, set up an intelligence network, and turned his home into a 'hall of justice'."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which emotional phrase was recorded by contemporary chroniclers to describe the public grief \nacross Lucknow when Nawab Wajid Ali Shah was exiled to Calcutta in 1856?",
        "options": [
          "(a) 'The life was gone out of the body, and the body of this country had become lifeless'",
          "(b) 'A new era of prosperity has arrived'",
          "(c) 'The city celebrated with fireworks'",
          "(d) 'The peasants rejoiced at freedom'"
        ],
        "answer": "(a) 'The life was gone out of the body, and the body of this country had become\nlifeless'",
        "explanation": "Contemporary chroniclers recorded that thousands wept in the streets following the Nawab's carriage to \nKanpur, lamenting that 'the life had gone out of the body of the country'."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Why was the territory of Awadh referred to as the 'nursery of the Bengal Army'?",
        "options": [
          "(a) A vast majority of the high-caste Hindu and Muslim sepoys of the Bengal Army were recruited from peasant homes in Awadh",
          "(b) British officers opened nursery schools in Awadh",
          "(c) Awadh supplied horses to the army",
          "(d) Awadh had gunpowder factories"
        ],
        "answer": "(a) A vast majority of the high-caste Hindu and Muslim sepoys of the Bengal\nArmy were recruited from peasant homes in Awadh",
        "explanation": "Almost every rural household in Awadh had at least one son serving as a sepoy in the Bengal Army; \nsepoy grievances directly resonated with agrarian peasant families in the region."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Who led the uprising in Kanpur, proclaiming himself as the Peshwa?",
        "options": [
          "(a) Nana Sahib",
          "(b) Tantia Tope",
          "(c) Baji Rao II",
          "(d) Kunwar Singh"
        ],
        "answer": "(a) Nana Sahib",
        "explanation": "Nana Sahib, the adopted son of the deposed Peshwa Baji Rao II, joined the revolt after the British denied \nhim his father's pension, expelling the British garrison from Kanpur."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The famous British painting 'In Memoriam' by Joseph Noel Paton depicted:",
        "options": [
          "(a) Helpless, terrified British women and children huddled together awaiting their fate",
          "(b) The coronation of Queen Victoria",
          "(c) The storming of the Red Fort",
          "(d) The trial of Bahadur Shah Zafar"
        ],
        "answer": "(a) Helpless, terrified British women and children huddled together awaiting\ntheir fate",
        "explanation": "Paton's painting portrayed defenseless English women and children huddled in prayer, designed to \narouse deep emotional outrage and demand violent vengeance in the British public."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which tribal Kol leader organized the rebellion in the Singhbhum region of Chota Nagpur in 1857?",
        "options": [
          "(a) Gonoo",
          "(b) Birsa Munda",
          "(c) Kanhu",
          "(d) Alluri"
        ],
        "answer": "(a) Gonoo",
        "explanation": "Gonoo, a tribal cultivator of Singhbhum, mobilized the Kol tribesmen to fight alongside regional rebel \nforces against colonial authorities."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What immediate military innovation triggered the sepoy mutiny in early 1857?",
        "options": [
          "(a) The introduction of greased cartridges for the new Enfield rifle",
          "(b) Abolition of military pensions",
          "(c) Compulsory overseas sea voyage",
          "(d) Replacement of uniforms with European tunics"
        ],
        "answer": "(a) The introduction of greased cartridges for the new Enfield rifle",
        "explanation": "The cartridges for the new Enfield rifle were coated with cow and pig fat, which soldiers had to bite with \ntheir teeth, offending the religious sentiments of both Hindu and Muslim sepoys."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "How did the 1857 rebel proclamations ensure Hindu-Muslim unity?",
        "options": [
          "(a) They invoked both Hindu deities and Allah, strictly banned cow slaughter, and respected both faiths",
          "(b) They declared English the national language",
          "(c) They banned religious practices",
          "(d) They forced conversion to Buddhism"
        ],
        "answer": "(a) They invoked both Hindu deities and Allah, strictly banned cow slaughter,\nand respected both faiths",
        "explanation": "Rebel manifestos addressed both communities equally, strictly banned cow slaughter to protect Hindu \nsentiments, and emphasized that the Firangis were bent on destroying both religions."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Who wrote the famous nationalist poem on Rani Lakshmibai of Jhansi featuring the immortal line \n'Khoob ladi mardani woh to Jhansi wali rani thi'?",
        "options": [
          "(a) Subhadra Kumari Chauhan",
          "(b) Sarojini Naidu",
          "(c) Mahadevi Verma",
          "(d) Subhash Chandra Bose"
        ],
        "answer": "(a) Subhadra Kumari Chauhan",
        "explanation": "Subhadra Kumari Chauhan's stirring Hindi poem 'Jhansi ki Rani' celebrated Rani Lakshmibai as an iconic \nhero who fought the British like a valiant warrior."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which minor prince was crowned as the Nawab of Awadh by the rebels of Lucknow in 1857 under the \nleadership of his mother Begum Hazrat Mahal?",
        "options": [
          "(a) Birjis Qadr",
          "(b) Wajid Ali Shah",
          "(c) Asaf-ud-Daula",
          "(d) Shuja-ud-Daula"
        ],
        "answer": "(a) Birjis Qadr",
        "explanation": "Begum Hazrat Mahal took active leadership of the rebellion in Lucknow, crowning her young son Birjis \nQadr as Nawab and rallying taluqdars against British forces."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What brutal method of public execution was extensively used by the British military to strike terror \ninto surviving rebels in 1857?",
        "options": [
          "(a) Blowing rebels from the mouths of artillery cannons",
          "(b) Poison gas",
          "(c) Guillotine",
          "(d) Electric shock"
        ],
        "answer": "(a) Blowing rebels from the mouths of artillery cannons",
        "explanation": "British commanders staged public executions by strapping mutineers across the muzzles of artillery \ncannons and firing them to terrorize the Indian population."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which British officer infamously shot dead the young Mughal princes (sons and grandson of Bahadur \nShah Zafar) at Delhi Gate after capturing the city?",
        "options": [
          "(a) Captain William Hodson",
          "(b) General John Nicholson",
          "(c) Colin Campbell",
          "(d) Henry Lawrence"
        ],
        "answer": "(a) Captain William Hodson",
        "explanation": "Captain Hodson executed the Mughal princes in cold blood near the Delhi Gate (subsequently named \nKhooni Darwaza) after the fall of Delhi in September 1857."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What secret symbols were circulated among villages in northern India on the eve of the 1857 \nuprising?",
        "options": [
          "(a) Chapatis and red lotuses",
          "(b) Swords and turbans",
          "(c) Silver coins and beads",
          "(d) Flags and conch shells"
        ],
        "answer": "(a) Chapatis and red lotuses",
        "explanation": "Chapatis passed rapidly from village watchman to village watchman, alongside circulating red lotuses, \nserving as cryptic signals heralding an impending upheaval."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "How did the British pacify the influential landed Taluqdars of Awadh after recapturing Lucknow in \n1858?",
        "options": [
          "(a) By restoring their confiscated estates and securing their loyalty through royal pardons",
          "(b) By executing every taluqdar",
          "(c) By exiling them to the Andaman Islands",
          "(d) By converting them to Christianity"
        ],
        "answer": "(a) By restoring their confiscated estates and securing their loyalty through\nroyal pardons",
        "explanation": "Recognizing that taluqdar resistance sustained the revolt, the British reversed the 1856 Summary \nSettlement, restoring estates to taluqdars who pledged loyalty to the crown."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who described the 1857 rebellion as the 'First War of Indian Independence' in his 1909 nationalist \nwork?",
        "options": [
          "(a) V.D. Savarkar",
          "(b) Bal Gangadhar Tilak",
          "(c) Jawaharlal Nehru",
          "(d) Dadabhai Naoroji"
        ],
        "answer": "(a) V.D. Savarkar",
        "explanation": "Vinayak Damodar Savarkar published 'The Indian War of Independence of 1857' in 1909, reinterpreting \nthe event as a planned national war to liberate India from foreign servitude."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "In Delhi, who was the Subedar from Bareilly who brought a large army of rebel soldiers and assumed \nactual military command of the uprising?",
        "options": [
          "(a) Bakht Khan",
          "(b) Khan Bahadur Khan",
          "(c) Maulvi Liaquat Ali",
          "(d) Mirza Mughal"
        ],
        "answer": "(a) Bakht Khan",
        "explanation": "Subedar Bakht Khan arrived in Delhi from Bareilly on 2 July 1857 with a large force, organizing military \ndefense and serving as supreme field commander."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Why did the rebel sepoys systematically burn down colonial court offices, treasuries, and telegraph \nlines?",
        "options": [
          "(a) Because they were visible symbols of colonial authority, debt servitude, and British communication",
          "(b) Because they lacked timber for cooking",
          "(c) By accidental fire",
          "(d) To build barracks"
        ],
        "answer": "(a) Because they were visible symbols of colonial authority, debt servitude, and\nBritish communication",
        "explanation": "Rebels targeted government bungalows, court records (which recorded usurious debt and land taxes), \nand telegraph lines as the apparatus of British colonial subjugation."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Revolt of 1857 witnessed remarkable solidarity and mutual respect between \nHindus and Muslims across northern India.\nReason (R): Rebel proclamations strictly prohibited cow slaughter and appealed to both communities \nto defend their shared cultural traditions against the Firangis.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. British efforts to incite communal divisions (such as in Bareilly) failed completely \nbecause the rebellion was perceived as a common holy war (jihad/dharma-yuddha) against foreign \nsubjugation."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The annexation of Awadh by Lord Dalhousie in 1856 triggered widespread fury among \nthe sepoys of the Bengal Army.\nReason (R): A vast majority of the Bengal Army's soldiers were recruited from peasant homes in \nAwadh, making them personally aggrieved by the displacement of their Nawab and the dispossession \nof taluqdars.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Awadh was the 'nursery of the Bengal Army'; sepoy grievances over military pay \nand cartridges merged with deep civilian rage over the humiliation of their homeland."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): British visual representations of 1857 (such as 'In Memoriam' and Punch cartoons) \nemphasized the cruelty of the sepoys and the innocence of British women and children.\nReason (R): These images were crafted to generate public sympathy in Britain, justify violent military \nretribution, and legitimize the merciless hanging of Indian rebels.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. British imperial art deliberately stoked nationalist anger in England by framing the \nsuppression of 1857 as a civilized moral defense against savage mutineers."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): In 1857, Indian rebel leaders completely lacked any administrative structure and fought \nwithout plans or organization.\nReason (R): In cities like Delhi, Lucknow, and Kanpur, rebels established administrative courts, \nappointed revenue collectors, and set up municipal supply chains.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because rebels established administrative councils (court of soldiers in Delhi) to \nmaintain order; Reason R is true and proves the existence of institutional governance."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Rani Lakshmibai of Jhansi joined the rebellion immediately on 10 May 1857 alongside \nthe Meerut soldiers.\nReason (R): The British had annexed Jhansi under Lord Dalhousie's Doctrine of Lapse by refusing to \nrecognize her adopted son Anand Rao.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Rani Lakshmibai initially tried to negotiate with the British; only when \nnegotiations failed and sepoys revolted in Jhansi did she lead the rebellion. Reason R is true."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Why did Awadh become the storm center of the 1857 Revolt? Explain three factors.",
        "options": null,
        "answer": "Factors making Awadh the storm center of 1857",
        "explanation": "1. Emotional Humiliation of Annexation [1 Mark] : The arbitrary deposition and exile of Nawab Wajid Ali \nShah in 1856 created profound grief among nobles, courtiers, poets, and common citizens.\n2. Nursery of the Bengal Army [1 Mark] : Roughly 75,000 sepoys in the Bengal Army hailed from Awadh \npeasant families; military discontent over service and cartridges instantly inflamed rural villages.\n3. Dispossession of Taluqdars [1 Mark] : The 1856 Summary Settlement stripped taluqdars of 67% of \ntheir villages and demolished their forts, prompting landlords and their loyal peasant retainers to join the \nrevolt."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the vision of unity between Hindus and Muslims reflected in the 1857 rebel proclamations.",
        "options": null,
        "answer": "Hindu-Muslim unity in 1857 proclamations",
        "explanation": "1. Joint Appeals [1 Mark] : Proclamations (like the Azamgarh Proclamation) were addressed to both \nHindus and Muslims, invoking both Ram and Allah to resist British tyranny.\n2. Ban on Cow Slaughter [1 Mark] : The rebel government strictly banned cow slaughter across Delhi \nand Lucknow to honor Hindu religious sentiments.\n3. Failure of British Divide-and-Rule [1 Mark] : British officials in Bareilly spent Rs 50,000 to incite Hindu-\nMuslim riots; the money was taken, but the communities refused to fight, staying united."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Who was Shah Mal? What was his role in the 1857 uprising in Baraut (Baghpat)?",
        "options": null,
        "answer": "Shah Mal's role in the 1857 revolt",
        "explanation": "1. Mobilization of Cultivators [1 Mark] : Shah Mal belonged to a prominent clan of Jat cultivators in \nBaraut; he mobilized headmen across eighty-four villages (chaurasee des).\n2. Alternative Administration [1 Mark] : Severed British communications between Meerut and Delhi, \ndestroyed bridges, and turned his home into a 'hall of justice' to arbitrate disputes.\n3. Defiance & Martyrdom [1 Mark] : Maintained a network of peasant spies, routed British detachments, \nand died fighting heroically on the battlefield in July 1857."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "How did British visual arts (paintings and cartoons) represent the 1857 Revolt in England? Give two \nexamples.",
        "options": null,
        "answer": "British visual representations of 1857",
        "explanation": "1. Celebrating British Triumphalism [1.5 Marks] : Thomas Jones Barker's painting 'Relief of Lucknow' \n(1859) portrayed British generals (Campbell, Outram, Havelock) as heroic deliverers, restoring imperial \nprestige.\n2. Eliciting Vengeance through Victimhood [1.5 Marks] : Joseph Noel Paton's 'In Memoriam' depicted \nhelpless English women and children huddled in fear, designed to arouse public outrage in Britain and \njustify brutal retribution against Indian rebels."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Explain how the Azamgarh Proclamation of 25 August 1857 appealed to different socio-economic \nclasses.",
        "options": null,
        "answer": "Azamgarh Proclamation appeals to various classes",
        "explanation": "1. Zamindars [1 Mark] : Promised absolute proprietary rights over their ancestral estates and lower \nrevenue assessments, ending public auctions under the Sunset Law.\n2. Merchants [1 Mark] : Promised freedom from oppressive British road taxes (toll fees) and colonial \ntrade monopolies, providing state-subsidized transport.\n3. Artisans & Public Servants [1 Mark] : Pledged to revive native manufacturing by barring European \nimported goods, and guaranteed dignified, high-ranking administrative posts to native officials."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What measures did the British take to suppress the 1857 Revolt in northern India?",
        "options": null,
        "answer": "Measures taken by British to suppress 1857",
        "explanation": "1. Imposition of Martial Law [1 Mark] : British commanders and junior officers were empowered to try, \nconvict, and execute any suspicious Indian without regular legal trials.\n2. Strategic Military Offensives [1 Mark] : Launched massive two-pronged military offensives on Delhi \n(from Punjab and Meerut), capturing the Mughal capital in September 1857.\n3. Terror and Conciliation [1 Mark] : Executed mutineers en masse (blowing from cannons, mass \nhangings), while simultaneously bribing loyal taluqdars in Awadh by promising to restore their lands."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Examine the role played by Begum Hazrat Mahal of Awadh and Rani Lakshmibai of Jhansi in the 1857 \nRevolt.",
        "options": null,
        "answer": "Role of Begum Hazrat Mahal and Rani Lakshmibai",
        "explanation": "1. Begum Hazrat Mahal (Awadh) [1.5 Marks] : Took command in Lucknow after Wajid Ali Shah's exile, \ncrowned her minor son Birjis Qadr, mobilized Hindu and Muslim taluqdars, and fought British troops \nuntil retreating to Nepal.\n2. Rani Lakshmibai (Jhansi) [1.5 Marks] : Defied Lord Dalhousie's Doctrine of Lapse, took up arms when \nthe British annexed Jhansi, led cavalry charges dressed in male attire, and died fighting heroically at \nGwalior."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "How did 20th-century Indian nationalist leaders and writers interpret the Revolt of 1857?",
        "options": null,
        "answer": "Nationalist re-interpretation of 1857",
        "explanation": "1. First War of Independence [1 Mark] : V.D. Savarkar reinterpreted 1857 not as a mere 'sepoy mutiny', \nbut as a patriotic national struggle against British imperialism.\n2. Heroic Folk Memory [1 Mark] : Leaders like Rani Lakshmibai, Kunwar Singh, and Nana Sahib were \nimmortalized in popular folklore, poems, and songs as symbols of armed defiance.\n3. Inspiration for Freedom Struggle [1 Mark] : Provided moral inspiration for 20th-century freedom \nfighters (Subhas Chandra Bose's INA named its women's regiment the 'Rani of Jhansi Regiment')."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What were the communication patterns and secret signals used by the rebels during the 1857 \nuprising?",
        "options": null,
        "answer": "Communication patterns and secret signals in 1857",
        "explanation": "1. Circulating Chapatis [1 Mark] : Freshly baked chapatis were passed from village watchman to village \nwatchman across northern India, symbolizing communal readiness.\n2. Red Lotuses [1 Mark] : Circulated from hand to hand among sepoy regiments, signifying a shared \nrevolutionary pledge.\n3. Inter-Cantonment Messengers [1 Mark] : Sepoys dispatched emissaries (Panchayats) between \nMeerut, Delhi, Kanpur, and Lucknow to synchronize mutiny dates and coordinate troop movements."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Who was Maulvi Ahmadullah Shah? Why did the British consider him one of their most dangerous \nadversaries in 1857?",
        "options": null,
        "answer": "Maulvi Ahmadullah Shah's role in 1857",
        "explanation": "1. Charismatic Preacher [1 Mark] : Known as Danka Shah; traveled with drum-beaters across Awadh, \ncalling for jihad to expel the British infidels.\n2. Decisive Military Leadership [1 Mark] : Defeated British forces under Henry Lawrence at the Battle of \nChinhat near Lucknow in June 1857, forcing the British into the Residency.\n3. Relentless Resistance [1 Mark] : Fought tenaciously across Awadh and Rohilkhand, compelling the \nBritish to place a massive bounty of Rs 50,000 on his head."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the causes of the 1857 Revolt. How did military grievances, agrarian distress, political \nannexations, and religious fears combine to produce a massive conflagration against the British Raj?",
        "options": null,
        "answer": "Comprehensive essay on the causes of the 1857 Revolt",
        "explanation": "Marking Scheme (8 Marks total):\n1. Military Grievances (2 Marks):\n- Sepoys faced racial discrimination, inferior pay compared to European soldiers, and denial of foreign \nservice allowances (batta).\n- Humiliation by arrogant British officers; the immediate trigger was the greased cartridge containing \ncow and pig fat.\n2. Political Annexations & Doctrine of Lapse (2 Marks):\n- Lord Dalhousie annexed states under the Doctrine of Lapse (Satara, Jhansi, Nagpur), stripping rulers of \ntheir kingdoms.\n- The deposition of Nawab Wajid Ali Shah of Awadh (1856) caused widespread outrage across the \nregion.\n3. Agrarian & Economic Distress (2 Marks):\n- Exorbitant land revenue demands under the Permanent Settlement and Ryotwari systems ruined \npeasants and dispossessed landlords.\n- De-industrialization: Influx of British machine-made cloth ruined millions of traditional Indian weavers \nand artisans.\n4. Religious and Cultural Anxieties (2 Marks):\n- Aggressive activities of Christian missionaries; British social reforms (Abolition of Sati, Widow \nRemarriage Act, Lex Loci religious conversion law) were perceived as deliberate plots to destroy Hindu \nand Muslim faiths."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the pattern of the 1857 Revolt. Discuss how mutinies began, the leadership that emerged in \ndifferent regions, and the alternative administrative arrangements created by the rebels.",
        "options": null,
        "answer": "Pattern of rebellion, leadership, and alternative administration",
        "explanation": "Marking Scheme (8 Marks total):\n1. Outbreak and Synchronized Pattern (2.5 Marks):\n- Initiated by the sounding of the evening gun or bugle in cantonments; sepoys seized armories (bell of \narms), broke open jails, looted treasuries, and destroyed telegraph lines.\n- Civil populace joined: Peasants, artisans, and moneylenders' debtors joined in destroying colonial \nrecords and bungalows.\n2. Diverse Regional Leadership (3 Marks):\n- Delhi: Bahadur Shah Zafar (symbolic leader) and Subedar Bakht Khan (military leader).\n- Kanpur: Nana Sahib (adopted son of Peshwa) and Tantia Tope.\n- Jhansi: Rani Lakshmibai.\n- Awadh: Begum Hazrat Mahal and Birjis Qadr.\n- Bihar (Arrah): Kunwar Singh.\n- Local folk leaders: Shah Mal in Baraut and Gonoo in Singhbhum.\n3. Alternative Administrative Structures (2.5 Marks):\n- Rebels attempted to restore pre-British traditional administration.\n- Delhi: Formed a Court of Soldiers (10-member administrative committee) regulating food supply, tax \ncollection, and military patrols.\n- Issued official seals, collected land taxes, and paid stipends to rebel soldiers, showing a conscious \nattempt at statecraft."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the visual representations of the 1857 Revolt. Contrast the British imperial narrative with the \n20th-century Indian nationalist interpretation.",
        "options": null,
        "answer": "Visual representations of 1857: British imperial vs Nationalist",
        "explanation": "Marking Scheme (8 Marks total):\n1. British Visual Narrative (4 Marks):\n- Heroes and Saviors: Paintings like Thomas Jones Barker's 'Relief of Lucknow' celebrated Campbell, \nHavelock, and Outram as noble imperial conquerors.\n- Victimhood and Pity: Joseph Noel Paton's 'In Memoriam' showed vulnerable English women and \nchildren awaiting death, designed to generate public outrage.\n- Vengeance and Retribution: Allegorical cartoons in Punch ('Justice') depicted Britannia slaying \nmutineers; sketches showed rebels being blown from cannons, establishing white supremacy.\n2. Indian Nationalist Narrative (4 Marks):\n- Reinterpretation as War of Independence: 20th-century nationalists (Savarkar, Nehru) viewed 1857 as \nthe First War of National Independence.\n- Immortalizing Heroes: Rani of Jhansi was celebrated in Subhadra Kumari Chauhan's poem ('Khoob ladi \nmardani'), portrayed on horseback with drawn sword, baby tied to her back.\n- Symbol of Communal Unity: Commemorated as an era when Hindus and Muslims united under one \nflag to liberate the motherland."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from the Azamgarh Proclamation (25 August 1857) carefully and answer \nthe questions:\nSource: The Azamgarh Proclamation\n'It is well known to all, that in this age the people of Hindostan, both Hindoos and Mohammedans, are being \nruined under the tyranny and the oppression of the infidel and treacherous English... Under the bad \nadministration of the British Government, all the four classes of people are being impoverished... Be it \nknown that the Native army has broken the chains of servitude... When the royal government is re-\nestablished, the landholders shall have their estates returned, the merchants shall have the trade of the \ncountry secured to them, and artisans shall be encouraged by the exclusion of foreign English goods...'\n(i) Under what name or authority was this proclamation published? (1 Mark)\n(ii) State any two promises made to the mercantile community (traders). (1 Mark)\n(iii) What does this proclamation reveal about the rebel leadership's vision of an independent India? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for Azamgarh Proclamation Source Question",
        "explanation": "Marking Scheme:\n(i) Publication Authority [1 Mark] : Issued on 25 August 1857 under the authority of Prince Firoz Shah \n(grandson of the Mughal emperor).\n(ii) Promises to Merchants [1 Mark] : Freedom from extortionate road tolls, state security for \ncommercial caravans, and protection from British trading monopolies.\n(iii) Vision of Independent India [2 Marks] :\n1. Re-establishment of pre-colonial Mughal sovereignty: Replaced British colonial capitalism with \ntraditional monarchical patronage. [1 Mark]\n2. Economic self-reliance & Communal harmony: United Hindus and Muslims and protected native \nartisans by banning British imported manufactured goods. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding the annexation of Awadh and answer the questions:\nSource: The Life was Gone out of the Body\n'Lord Dalhousie's annexation of Awadh shocked the entire kingdom. Nawab Wajid Ali Shah was dethroned \nand exiled to Calcutta. As he left his beloved Lucknow, thousands of his subjects followed him along the \nroad to Kanpur, weeping and wailing in sorrow. A contemporary poet recorded: 'The life had gone out of the \nbody, and the body of this country had become lifeless. There was no street or market that did not weep... \nThe musicians laid down their instruments, and the dancers ceased to dance...''\n(i) In which year and by which Governor-General was Awadh annexed? (1 Mark)\n(ii) What was the emotional reaction of the people of Lucknow as the Nawab left? (1 Mark)\n(iii) Why did the displacement of the Nawab lead to widespread social and economic dislocation in \nAwadh? (2 Marks)",
        "options": null,
        "answer": "Solutions for Awadh Annexation Grief Source Question",
        "explanation": "Marking Scheme:\n(i) Date & Official [1 Mark] : In 1856 by Governor-General Lord Dalhousie.\n(ii) Emotional Reaction [1 Mark] : Thousands followed his carriage weeping; contemporary records \nnoted that 'the life had gone out of the body of the country'.\n(iii) Social & Economic Dislocation [2 Marks] :\n1. Ruin of the court economy: The dissolution of the royal court impoverished thousands of musicians, \ndancers, poets, artisans, soldiers, and retainers who depended on royal patronage. [1 Mark]\n2. Disenchantment of the elite: Taluqdars lost their estates, and sepoys in the British army felt their \nhome country had been dishonorably betrayed. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Examine the role of Taluqdars in the 1857 Revolt in Awadh. Why did they resist the British Summary \nSettlement of 1856, and how were they pacified after 1858?",
        "options": null,
        "answer": "Role and resistance of Awadh Taluqdars in 1857",
        "explanation": "Marking Scheme (8 Marks total):\n1. Position of Taluqdars before 1856 (2.5 Marks):\n- Landed aristocrats who controlled extensive fortified estates (sometimes dozens of villages), \nmaintaining private armies, artillery, and mud forts.\n- Held deep feudal and paternalistic ties of loyalty with peasant tenants.\n2. The Blow of the Summary Settlement of 1856 (2.5 Marks):\n- The British operated on the doctrine that taluqdars were illegitimate extortionate interlopers.\n- Summary Settlement removed taluqdars from 67% of their villages, disarmed their troops, and \ndemolished their forts.\n- Increased revenue demand on peasants without providing relief, alienating both landlords and ryots.\n3. Ferocious Resistance during the 1857 Revolt (1.5 Marks):\n- Taluqdars rallied under Begum Hazrat Mahal, re-armed their militias, and fought British troops at the \nsiege of the Lucknow Residency.\n4. British Pacification Strategy after 1858 (1.5 Marks):\n- British realized they could not govern rural Awadh without taluqdar support.\n- Viceroy Canning reversed the Summary Settlement, restoring confiscated estates and granting sanads \nto taluqdars who submitted, transforming them into loyal bulwarks of the British Crown."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Analyze the nature and extent of the 1857 Revolt. Was it merely a military sepoy mutiny or a \nwidespread popular rebellion? Support your answer with historical evidence.",
        "options": null,
        "answer": "Nature and extent of 1857 Revolt: Sepoy mutiny vs popular rebellion",
        "explanation": "Marking Scheme (8 Marks total):\n1. Colonial Historiographical Label ('Sepoy Mutiny') (2.5 Marks):\n- British historians (like John Lawrence and Sir John Kaye) minimized 1857 as an uncoordinated 'sepoy \nmutiny' over greased cartridges.\n- Argued that it lacked national sentiment and was confined to disgruntled native soldiers.\n2. Evidence of Widespread Popular Rebellion (3 Marks):\n- Transcended military garrisons: In Awadh, Rohilkhand, Bihar, and western UP, ordinary peasants, \nzamindars, town artisans, and tribal groups joined the fray.\n- In Awadh alone, over 100,000 civilians were killed in the fighting; British civilian administration \ncompletely collapsed for over a year.\n- Common people targeted court records, moneylenders, and colonial police stations, expressing deep \nsocial discontent.\n3. Multi-Class and Multi-Religious Unity (2.5 Marks):\n- Mobilized peasants, artisans, weavers, and dispossessed rajas.\n- Outstanding Hindu-Muslim unity under the banner of Bahadur Shah Zafar proved it was a popular anti-\nimperialist war of liberation."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following poem by Subhadra Kumari Chauhan carefully and answer the questions:\nSource: The Valour of Rani Lakshmibai\n'Sinhasan hil uthe, raajvanshon ne bhrukuti tani thi,\nBoondhe Bharat mein aayi phir se nayi jawani thi...\nDoor firangi ko karne ki sabne mann mein thaani thi,\nChamak uthi san sattawan mein woh talwar purani thi,\nBundele Harbolon ke munh humne suni kahani thi,\nKhoob ladi mardani woh to Jhansi wali rani thi...'\n(i) Name the poem and its author. (1 Mark)\n(ii) What historical year and battle are celebrated in the poem? (1 Mark)\n(iii) How did this poem transform Rani Lakshmibai into an enduring symbol of the Indian national \nmovement? (2 Marks)",
        "options": null,
        "answer": "Solutions for Subhadra Kumari Chauhan Jhansi Poem Source Question",
        "explanation": "Marking Scheme:\n(i) Poem & Author [1 Mark] : 'Jhansi ki Rani' authored by poetess Subhadra Kumari Chauhan.\n(ii) Year & Battle [1 Mark] : The year 1857 ('san sattawan') and the armed rebellion against the British.\n(iii) Enduring Symbol of Nationalism [2 Marks] :\n1. Portrayed as an embodiment of feminine courage: Shattered patriarchal stereotypes by depicting a \nwoman leading troops in battle against foreign oppression. [1 Mark]\n2. National inspiration: Became a rallying cry for the 20th-century anti-colonial movement, inspiring \nmillions of women and youth to fight for independence. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Examine the role of rumors, prophecies, and popular beliefs in fueling the fire of the 1857 Revolt \nacross northern India.",
        "options": null,
        "answer": "Role of rumors, prophecies, and popular beliefs in 1857",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Greased Cartridge Rumor (2.5 Marks):\n- Began in Dum Dum arsenal: A low-caste laborer taunted a high-caste sepoy that the Enfield cartridges \nwere greased with cow and pig fat.\n- Spread instantly across military cantonments, striking at the heart of Hindu and Muslim religious \npurity.\n2. The Bone-Dust Flour and Conversion Panic (2.5 Marks):\n- Rumors spread that the British had mixed the powdered bone-dust of cows and pigs into the wheat \nflour (atta) sold in bazaars to secretly convert the population to Christianity.\n- Sepoys and villagers refused to touch bazaar food, dreading loss of caste.\n3. The Prophecy of the Hundredth Year (1.5 Marks):\n- Popular prophecy circulated that British rule, established at the Battle of Plassey on 23 June 1757, was \ndestined to collapse exactly 100 years later in 1857.\n4. Psychological Resonance (1.5 Marks):\n- Rumors spread like wildfire because they gave voice to deep-seated popular anxieties caused by \ndecades of British annexations, Christian missionary zeal, and economic ruin."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Discuss the reasons for the ultimate failure of the 1857 Revolt against the British. Why were the \nrebels unable to hold on to their initial military victories?",
        "options": null,
        "answer": "Reasons for the failure of the 1857 Revolt",
        "explanation": "Marking Scheme (8 Marks total):\n1. Lack of Unified National Leadership & Central Command (2.5 Marks):\n- The movement was regionally fragmented; Bahadur Shah Zafar was aged and frail.\n- Regional leaders (Nana Sahib, Lakshmibai, Kunwar Singh) fought primarily for their localized interests \nwithout a coordinated grand strategy.\n2. Superior British Military Resources & Communications (2.5 Marks):\n- The British commanded modern rifles, heavy artillery, and reinforcements from Britain after the \nCrimean War.\n- Electric telegraph and railways enabled rapid intelligence transmission and swift troop deployments.\n3. Non-Participation of Vital Regions and Social Groups (1.5 Marks):\n- The revolt was largely confined to northern and central India; southern India, western India, and Punjab \nremained largely quiet.\n- Many powerful princely rulers (Scindia of Gwalior, Nizam of Hyderabad, rulers of Patiala and Nepal) \nactively aided the British.\n4. Betrayal of Modern Educated Elites (1.5 Marks):\n- The newly emerged western-educated Indian middle class in Calcutta, Bombay, and Madras distanced \nthemselves from the revolt, viewing it as a backward-looking feudal reaction."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 11,
      "book": "Themes in Indian History Part-III (Modern India)",
      "title": "Mahatma Gandhi and the Nationalist Movement: Civil Disobedience and Beyond",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part III: Modern India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In which month and year did Mahatma Gandhi return to India from South Africa after two decades of \nanti-apartheid Satyagraha?",
        "options": [
          "(a) January 1915",
          "(b) December 1914",
          "(c) August 1916",
          "(d) April 1917"
        ],
        "answer": "(a) January 1915",
        "explanation": "Mahatma Gandhi returned to India on 9 January 1915 at the age of 45, having developed and tested his \nsignature technique of non-violent Satyagraha in South Africa."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "At the opening of which educational institution in February 1916 did Mahatma Gandhi deliver his \nfamous speech criticizing the elite for neglecting the starving peasant masses?",
        "options": [
          "(a) Banaras Hindu University (BHU)",
          "(b) Aligarh Muslim University (AMU)",
          "(c) Jamia Millia Islamia",
          "(d) Presidency College, Calcutta"
        ],
        "answer": "(a) Banaras Hindu University (BHU)",
        "explanation": "At the opening of BHU in February 1916, Gandhi openly confronted the richly dressed princes and \nwealthy lawyers, asserting that Indian nationalism could not succeed without the millions of peasants."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Mahatma Gandhi launched his first Satyagraha movement on Indian soil in 1917 in Champaran \n(Bihar) to support peasants oppressed by:",
        "options": [
          "(a) European indigo planters under the Tinkathia system",
          "(b) British cotton mill owners",
          "(c) Salt tax collectors",
          "(d) Forest department contractors"
        ],
        "answer": "(a) European indigo planters under the Tinkathia system",
        "explanation": "In Champaran (1917), Gandhi intervened on behalf of tenant farmers forced by British planters under the \nTinkathia system to cultivate indigo on 3/20th of their land at unviable prices."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why did Rabindranath Tagore renounce his British Knighthood in May 1919?",
        "options": [
          "(a) In protest against the Jallianwala Bagh massacre in Amritsar",
          "(b) In protest against the Partition of Bengal",
          "(c) Due to the arrest of Mahatma Gandhi",
          "(d) Because of the Salt Law"
        ],
        "answer": "(a) In protest against the Jallianwala Bagh massacre in Amritsar",
        "explanation": "Deeply anguished by General Dyer's brutal slaughter of hundreds of unarmed citizens at Jallianwala \nBagh on 13 April 1919, Tagore renounced his Knighthood."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Following which violent incident in February 1922 did Mahatma Gandhi abruptly withdraw the \nnationwide Non-Cooperation Movement?",
        "options": [
          "(a) Chauri Chaura incident",
          "(b) Jallianwala Bagh massacre",
          "(c) Kakori train robbery",
          "(d) Chittagong armoury raid"
        ],
        "answer": "(a) Chauri Chaura incident",
        "explanation": "On 4 February 1922, a crowd of protesting peasants set fire to a police station at Chauri Chaura \n(Gorakhpur, UP), burning 22 policemen alive, prompting Gandhi to halt the movement."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "The historic resolution demanding 'Purna Swaraj' (Complete Independence) was passed under the \npresidency of Jawaharlal Nehru at which Congress session?",
        "options": [
          "(a) Lahore Session (December 1929)",
          "(b) Karachi Session (1931)",
          "(c) Nagpur Session (1920)",
          "(d) Belgaum Session (1924)"
        ],
        "answer": "(a) Lahore Session (December 1929)",
        "explanation": "At the midnight of 31 December 1929, the Lahore Congress adopted the Purna Swaraj resolution, \nunfurling the tricolor and declaring 26 January 1930 as Independence Day."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The historic Dandi March undertaken by Mahatma Gandhi to break the Salt Law began on 12 March \n1930 from:",
        "options": [
          "(a) Sabarmati Ashram, Ahmedabad",
          "(b) Sevagram Ashram, Wardha",
          "(c) Bardoli",
          "(d) Porbandar"
        ],
        "answer": "(a) Sabarmati Ashram, Ahmedabad",
        "explanation": "Gandhi set out on foot with 78 chosen satyagrahis on 12 March 1930 from Sabarmati Ashram, walking \n240 miles to the coastal village of Dandi in Gujarat."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which prominent socialist feminist leader persuaded Mahatma Gandhi not to restrict the Salt \nSatyagraha only to men, paving the way for mass female participation?",
        "options": [
          "(a) Kamaladevi Chattopadhyay",
          "(b) Sarojini Naidu",
          "(c) Annie Besant",
          "(d) Aruna Asaf Ali"
        ],
        "answer": "(a) Kamaladevi Chattopadhyay",
        "explanation": "Kamaladevi Chattopadhyay urged Gandhi to open the movement to women, transforming the Civil \nDisobedience Movement into the first national campaign with massive female mobilization."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "Who was revered as the 'Frontier Gandhi' for leading the non-violent 'Khudai Khidmatgars' (Red Shirts) \nin the North-West Frontier Province?",
        "options": [
          "(a) Khan Abdul Ghaffar Khan",
          "(b) Maulana Abul Kalam Azad",
          "(c) Liaquat Ali Khan",
          "(d) Mohammad Ali Jinnah"
        ],
        "answer": "(a) Khan Abdul Ghaffar Khan",
        "explanation": "Khan Abdul Ghaffar Khan ('Badshah Khan') mobilized Pathan society along strictly non-violent lines \nthrough his volunteer movement Khudai Khidmatgars ('Servants of God')."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The Poona Pact of September 1932, signed between Mahatma Gandhi and Dr. B.R. Ambedkar, \nresulted in:",
        "options": [
          "(a) Abandoning separate electorates for the Depressed Classes in exchange for increased reserved seats within the general electorate",
          "(b) Granting separate electorates to Dalits",
          "(c) Banning untouchables from voting",
          "(d) Complete merger of the Muslim League with Congress"
        ],
        "answer": "(a) Abandoning separate electorates for the Depressed Classes in exchange for\nincreased reserved seats within the general electorate",
        "explanation": "Under the Poona Pact, Ambedkar agreed to forgo separate communal electorates for Depressed \nClasses after Gandhi's fast unto death, securing reserved seats within joint electorates."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "At which session of the All India Congress Committee on 8 August 1942 did Mahatma Gandhi deliver \nhis historic 'Do or Die' (Karo ya Maro) speech?",
        "options": [
          "(a) Gowalia Tank Maidan, Bombay",
          "(b) Ramgarh",
          "(c) Faizpur",
          "(d) Haripura"
        ],
        "answer": "(a) Gowalia Tank Maidan, Bombay",
        "explanation": "On 8 August 1942 at Gowalia Tank (now August Kranti Maidan) in Bombay, Gandhi launched the Quit \nIndia Movement, exhorting Indians to 'Do or Die' to liberate the nation."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Where was Mahatma Gandhi on 15 August 1947, the day India achieved Independence?",
        "options": [
          "(a) In Calcutta, fasting and praying to stop communal riots",
          "(b) At the Red Fort in Delhi unfurling the tricolor",
          "(c) In Wardha Ashram",
          "(d) In London negotiating partition"
        ],
        "answer": "(a) In Calcutta, fasting and praying to stop communal riots",
        "explanation": "Gandhi avoided all official celebrations in Delhi, staying in a riot-torn Muslim neighborhood (Beliaghata, \nCalcutta), fasting and working tirelessly to heal communal wounds."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Who was Mahatma Gandhi's political mentor, on whose advice he spent his first year back in India \ntraveling in third-class railway compartments to know the country?",
        "options": [
          "(a) Gopal Krishna Gokhale",
          "(b) Bal Gangadhar Tilak",
          "(c) Bipin Chandra Pal",
          "(d) Dadabhai Naoroji"
        ],
        "answer": "(a) Gopal Krishna Gokhale",
        "explanation": "Gopal Krishna Gokhale advised Gandhi to keep his ears open and mouth shut for one year, traveling \nthird-class across India to grasp the genuine conditions of ordinary people."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which British judge sentenced Mahatma Gandhi to six years' imprisonment in March 1922, stating it \nwould be a pleasure to reduce the term if the government saw fit?",
        "options": [
          "(a) Justice C.N. Broomfield",
          "(b) Lord Reading",
          "(c) Sir John Simon",
          "(d) Justice Rowlatt"
        ],
        "answer": "(a) Justice C.N. Broomfield",
        "explanation": "Judge C.N. Broomfield conducted Gandhi's historic trial in Ahmedabad in March 1922, paying tribute to \nGandhi as a man of noble ideals before sentencing him to 6 years."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Why did Mahatma Gandhi select 'Salt' as the central weapon of the Civil Disobedience Movement in \n1930?",
        "options": [
          "(a) Salt was a universal necessity consumed by every Indian, making the colonial tax a direct symbol of British oppression",
          "(b) Because Indians only ate salt",
          "(c) Salt was the only item taxed by the British",
          "(d) Because salt was found only in Gujarat"
        ],
        "answer": "(a) Salt was a universal necessity consumed by every Indian, making the\ncolonial tax a direct symbol of British oppression",
        "explanation": "Salt was an everyday necessity consumed equally by the richest landlord and poorest peasant; the \ngovernment's monopoly and tax symbolized colonial cruelty touching every home."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Under the terms of the Gandhi-Irwin Pact signed in March 1931, the Indian National Congress agreed \nto:",
        "options": [
          "(a) Suspend the Civil Disobedience Movement and participate in the Second Round Table Conference",
          "(b) Accept the partition of Bengal",
          "(c) Stop spinning khadi",
          "(d) Dissolve the Congress party"
        ],
        "answer": "(a) Suspend the Civil Disobedience Movement and participate in the Second\nRound Table Conference",
        "explanation": "The Gandhi-Irwin Pact led to the suspension of the Civil Disobedience Movement, the release of non-\nviolent political prisoners, and Congress's agreement to attend the Second RTC in London."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "During the Quit India Movement of 1942, an independent parallel government ('Prati Sarkar') was \nestablished in which district of Maharashtra?",
        "options": [
          "(a) Satara",
          "(b) Pune",
          "(c) Nagpur",
          "(d) Kolhapur"
        ],
        "answer": "(a) Satara",
        "explanation": "A famous parallel government (Prati Sarkar) was organized in Satara by Nana Patil and Y.B. Chavan, \nadministering people's courts and welfare services for months."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which American news magazine initially ridiculed Gandhi's Dandi March as a childish stunt, but later \nhailed him as a saint and named him 'Man of the Year' in 1930?",
        "options": [
          "(a) Time Magazine",
          "(b) Newsweek",
          "(c) The New York Times",
          "(d) The Washington Post"
        ],
        "answer": "(a) Time Magazine",
        "explanation": "Time magazine initially mocked Gandhi's physical frailty, but marveled at the massive popular response \nto the Salt Satyagraha, honoring him on its cover as 'Man of the Year' for 1930."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The Khilafat Movement was launched in India by the Ali brothers (Muhammad Ali and Shaukat Ali) to \nprotest against:",
        "options": [
          "(a) The harsh treatment of the Ottoman Caliph (Khalifa) by the British after World War I",
          "(b) The partition of Bengal",
          "(c) The Rowlatt Act",
          "(d) Income tax increases"
        ],
        "answer": "(a) The harsh treatment of the Ottoman Caliph (Khalifa) by the British after\nWorld War I",
        "explanation": "The movement was launched to protect the Ottoman Caliphate and holy Islamic places following the \ndismantling of the Ottoman Empire by the Allied powers after World War I."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Who assassinated Mahatma Gandhi on the evening of 30 January 1948 during his prayer meeting at \nBirla House in New Delhi?",
        "options": [
          "(a) Nathuram Godse",
          "(b) Bhagat Singh",
          "(c) Udham Singh",
          "(d) Madan Lal Dhingra"
        ],
        "answer": "(a) Nathuram Godse",
        "explanation": "Nathuram Godse, an extremist who denounced Gandhi's policy of communal reconciliation and \nappeasement of Muslims, shot Mahatma Gandhi dead at Birla House on 30 January 1948."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What symbolic instrument did Mahatma Gandhi adopt as a weapon of mass self-reliance, economic \nboycott, and spiritual dignity?",
        "options": [
          "(a) The Charkha (spinning wheel)",
          "(b) The Plough",
          "(c) The Sword",
          "(d) The Pen"
        ],
        "answer": "(a) The Charkha (spinning wheel)",
        "explanation": "The charkha symbolized national economic self-reliance (swadeshi), broke the British Lancashire textile \nmonopoly, and dignified manual labor across all social classes."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In which city did Dr. B.R. Ambedkar demand separate electorates for the 'Depressed Classes' during \nthe Second Round Table Conference in 1931?",
        "options": [
          "(a) London",
          "(b) Geneva",
          "(c) Delhi",
          "(d) Bombay"
        ],
        "answer": "(a) London",
        "explanation": "At the Second Round Table Conference in London (1931), Dr. Ambedkar argued forcefully for separate \nelectorates for Dalits, a proposal Gandhi opposed as divisive."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following peasant movements witnessed the participation of Mahatma Gandhi in 1918 \nto demand remission of taxes due to crop failure?",
        "options": [
          "(a) Kheda Satyagraha",
          "(b) Bardoli Satyagraha",
          "(c) Champaran Satyagraha",
          "(d) Tebhaga Movement"
        ],
        "answer": "(a) Kheda Satyagraha",
        "explanation": "In Kheda (Gujarat, 1918), Gandhi and Sardar Vallabhbhai Patel supported Patidar peasants in refusing to \npay land revenue after catastrophic monsoon failure destroyed their crops."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "During the Quit India Movement of 1942, who operated an underground secret radio station to \nbroadcast uncensored nationalist news?",
        "options": [
          "(a) Usha Mehta",
          "(b) Sarojini Naidu",
          "(c) Sucheta Kripalani",
          "(d) Matangini Hazra"
        ],
        "answer": "(a) Usha Mehta",
        "explanation": "Usha Mehta and her associates bravely ran the 'Secret Congress Radio' from undisclosed locations in \nBombay, broadcasting inspiring news across India during the 1942 crackdown."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which British proposal in March 1942 was dismissed by Mahatma Gandhi as a 'post-dated cheque on \na crashing bank'?",
        "options": [
          "(a) The Cripps Mission",
          "(b) The Cabinet Mission",
          "(c) The Simon Commission",
          "(d) The Mountbatten Plan"
        ],
        "answer": "(a) The Cripps Mission",
        "explanation": "Sir Stafford Cripps brought proposals offering conditional Dominion Status after World War II, which \nCongress rejected as inadequate and divisive."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Mahatma Gandhi transformed the Indian National Congress from an elite, middle-class \ndebating club into a genuine mass movement.\nReason (R): Gandhi adopted the language of the masses (Hindustani), dressed in a peasant's \nloincloth, spun on the charkha, and identified with the poorest rural folk.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Gandhi shed western dress and elitism, creating a visual, moral, and linguistic \nconnection that mobilized millions of peasants, women, and workers."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Mahatma Gandhi chose salt as the core symbol of the Civil Disobedience Movement in \n1930.\nReason (R): The salt tax directly burdened every Indian household, making it an ingenious tactical \nweapon to unite all castes, classes, and communities against colonial rule.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Salt was a universal commodity; taxing it exposed the petty greed and inhumanity \nof British colonial exploitation to the global public."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The Second Round Table Conference in London (1931) ended in a historic \nconstitutional breakthrough for Indian independence.\nReason (R): Mahatma Gandhi, Dr. B.R. Ambedkar, and Muhammad Ali Jinnah reached a unanimous \nconsensus on minority representation and dominion status.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. The Second RTC was a complete failure; it deadlocked over separate electorates \ndemanded by Ambedkar and Jinnah, and Gandhi returned empty-handed."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): Mahatma Gandhi withdrew the Non-Cooperation Movement in February 1922 following \nthe Chauri Chaura incident.\nReason (R): Gandhi believed that Satyagraha required absolute non-violence (Ahimsa), and that \nmasses who indulged in violence were unready for disciplined civil resistance.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. When peasants burned the Chauri Chaura police post, Gandhi suspended the \nmovement on moral principle despite furious objections from senior leaders."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): On 15 August 1947, Mahatma Gandhi delivered a triumphant victory address to the \nConstituent Assembly in New Delhi.\nReason (R): Gandhi rejoiced at the creation of an independent India and accepted the partition of \nBengal and Punjab as a necessary political compromise.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. Gandhi stayed away from Delhi, refused to celebrate, and spent the day fasting in \nCalcutta, deeply sorrowed by the tragic communal bloodbath of Partition."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "How did Mahatma Gandhi transform the Indian National Congress into a mass organization? Mention \nthree organizational changes.",
        "options": null,
        "answer": "Transformation of Congress into a mass organization",
        "explanation": "1. Linguistic Reorganization [1 Mark] : Replaced elite English proceedings with provincial Congress \ncommittees based on regional linguistic zones, allowing common folk to participate.\n2. Democratic Fee Structure [1 Mark] : Lowered membership fees to four annas (25 paise) a year, \nmaking membership affordable to peasants, urban workers, and artisans.\n3. Constructive Program [1 Mark] : Linked political struggle with social reform: promoting hand-spun \nkhadi, eradication of untouchability, Hindu-Muslim fraternity, and women's empowerment."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Explain the significance of the Dandi March (Salt Satyagraha) of 1930 in the history of the Indian \nnational movement.",
        "options": null,
        "answer": "Significance of the Dandi March",
        "explanation": "1. Universal Resonance [1 Mark] : Salt was an essential commodity used by every Indian; attacking the \nBritish salt monopoly united all religious, caste, and class divisions.\n2. Global Press Attention [1 Mark] : Drawn into the international media spotlight (covered by American \nreporter Webb Miller and Time magazine), discrediting British moral legitimacy.\n3. Mass Participation of Women [1 Mark] : Broke traditional domestic seclusion; thousands of women \npicketed liquor shops, courted arrest, and collected salt, transforming women's public roles."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Describe the three local struggles led by Mahatma Gandhi in Champaran, Ahmedabad, and Kheda \nbetween 1917 and 1918.",
        "options": null,
        "answer": "Champaran, Ahmedabad, and Kheda struggles",
        "explanation": "1. Champaran (1917) [1 Mark] : First Satyagraha in India; fought against European planters forcing \npeasants to cultivate indigo under the Tinkathia system, winning a 25% compensation refund.\n2. Ahmedabad Mill Strike (1918) [1 Mark] : Supported cotton mill workers demanding a 35% wage hike \n(plague bonus); undertook his first hunger strike, successfully mediating an agreement.\n3. Kheda Satyagraha (1918) [1 Mark] : Led peasant protest against revenue collection following severe \ncrop failure, compelling the government to grant tax remissions."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "What was the Khilafat Movement? Why did Mahatma Gandhi align the Non-Cooperation Movement \nwith Khilafat?",
        "options": null,
        "answer": "Khilafat Movement and alliance with Non-Cooperation",
        "explanation": "1. The Khilafat Cause [1.5 Marks] : Initiated by the Ali brothers to protest the dismantling of the Ottoman \nCaliphate by Allied powers after World War I, demanding the preservation of the Khalifa's authority.\n2. Gandhi's Strategic Vision [1.5 Marks] : Gandhi saw Khilafat as a historic opportunity to forge an \nunbreakable alliance between Hindus and Muslims, bringing both communities together against the \nBritish."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Discuss the popular rumors and supernatural powers attributed to Mahatma Gandhi by Indian \npeasants.",
        "options": null,
        "answer": "Rumors and miraculous powers attributed to Gandhi",
        "explanation": "1. Divine Avatar [1 Mark] : Peasants viewed Gandhi as a saintly avatar sent by God to end their agrarian \nsuffering and overthrow the tax collectors.\n2. Miraculous Retribution [1 Mark] : Rumors circulated that anyone who opposed Gandhi or mocked his \nkhadi clothes suffered mysterious fires, broken bullock carts, or ruined harvests.\n3. The Golden Age of Swaraj [1 Mark] : Peasants believed that 'Gandhi Raj' was imminent, meaning rent \nwould be cancelled, zamindars removed, and forest lands restored to commoners."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What was the Poona Pact of 1932? How did it resolve the conflict between Mahatma Gandhi and Dr. \nB.R. Ambedkar?",
        "options": null,
        "answer": "The Poona Pact of 1932",
        "explanation": "1. The Conflict [1 Mark] : The British Communal Award (1932) granted separate electorates to the \nDepressed Classes (Dalits); Gandhi went on a fast unto death in Yerwada jail, arguing it would \npermanently divide Hindu society.\n2. The Compromise [1 Mark] : Dr. B.R. Ambedkar yielded to save Gandhi's life, signing the Poona Pact in \nSeptember 1932.\n3. The Outcome [1 Mark] : Separate electorates for Dalits were replaced by reserved seats within a joint \ngeneral electorate, with the number of reserved seats nearly doubled (from 71 to 148)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "Explain the significance of the Quit India Movement of 1942. Why was it called a spontaneous mass \nmovement?",
        "options": null,
        "answer": "Significance of Quit India Movement 1942",
        "explanation": "1. Leadership Arrested [1 Mark] : Following Gandhi's 'Do or Die' call on 8 August 1942, British authorities \narrested all senior Congress leaders overnight on 9 August.\n2. Spontaneous People's Uprising [1 Mark] : Without central leadership, students, peasants, and workers \norganized nationwide strikes, derailed trains, cut telegraph wires, and attacked police stations.\n3. Parallel Governments & Underground [1 Mark] : Local underground resistance (Jayaprakash Narayan, \nAruna Asaf Ali) and parallel governments (Satara, Ballia, Midnapore) proved British rule had lost all \npopular legitimacy."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Why did Mahatma Gandhi emphasize the spinning of Khadi and the use of the Charkha?",
        "options": null,
        "answer": "Significance of Khadi and Charkha",
        "explanation": "1. Economic Independence (Swadeshi) [1 Mark] : Boycotted Lancashire manufactured cloth, retaining \nmillions of rupees in the rural economy and providing supplementary income to poor peasants.\n2. Dignity of Labor [1 Mark] : Broke traditional caste prejudices against manual work by insisting that \nlawyers, doctors, and students spin daily.\n3. Living Symbol of Nationalism [1 Mark] : Hand-spun Khadi became the 'livery of freedom', visually \nuniting millions of Indians across caste, religion, and regional divides."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "Describe Mahatma Gandhi's role in communal harmony during the partition riots of 1946–1947.",
        "options": null,
        "answer": "Gandhi's role in communal harmony during Partition",
        "explanation": "1. Walking through Noakhali [1 Mark] : Walked barefoot through blood-soaked villages in Noakhali (East \nBengal) to protect Hindu minorities from communal massacres.\n2. Miracle of Calcutta [1 Mark] : Campaigned in Beliaghata, Calcutta, staging hunger strikes that halted \ncommunal mob violence, prompting Lord Mountbatten to hail him as a 'One-Man Boundary Force'.\n3. Fasting for Pakistan's Treasury Dues [1 Mark] : Fasted in Delhi in January 1948 to ensure safety for \nMuslims and demanded the transfer of Rs 55 crore in financial dues to Pakistan on moral principles."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "What were the main terms of the Gandhi-Irwin Pact signed in March 1931?",
        "options": null,
        "answer": "Main terms of the Gandhi-Irwin Pact",
        "explanation": "1. Suspension of CDM [1 Mark] : The Indian National Congress agreed to suspend the Civil \nDisobedience Movement and participate in the Second Round Table Conference.\n2. Release of Political Prisoners [1 Mark] : The British government agreed to immediately release all \npolitical prisoners not convicted of violent crimes.\n3. Coastal Salt Concession [1 Mark] : Permitted poor coastal residents to manufacture salt for their \npersonal consumption and allowed peaceful picketing of foreign cloth and liquor shops."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the Non-Cooperation Movement (1920–1922). Discuss its causes, program, popular \nparticipation across diverse regions, and the reasons for its abrupt suspension.",
        "options": null,
        "answer": "Comprehensive essay on the Non-Cooperation Movement",
        "explanation": "Marking Scheme (8 Marks total):\n1. Causes and Background (2.5 Marks):\n- Widespread public outrage over the Rowlatt Act (1919) and the Jallianwala Bagh massacre.\n- Economic distress following World War I (inflation, taxes, food shortages).\n- Muslim anguish over the dismantling of the Ottoman Caliphate (Khilafat Movement), which Gandhi \nlinked to Non-Cooperation.\n2. Program of Action (2 Marks):\n- Surrender of British titles and honors (e.g. Gandhi returned the Kaisar-i-Hind medal).\n- Boycott of government schools, colleges, and law courts; establishment of national universities (Jamia \nMillia, Kashi Vidyapeeth).\n- Boycott of foreign cloth, picketing of liquor shops, and promotion of hand-spun Khadi and the charkha.\n3. Regional People's Initiatives (2 Marks):\n- Peasants in Awadh (led by Baba Ramchandra) refused to pay extortionate cesses (abwabs) to \ntaluqdars.\n- Gudem Hills (Andhra Pradesh): Tribal rebellion led by Alluri Sitarama Raju against forest laws.\n- Assam: Tea plantation laborers went on strike, shouting 'Gandhi Maharaj ki Jai'.\n4. Chauri Chaura and Suspension (1.5 Marks):\n- On 4 February 1922, a violent clash at Chauri Chaura (Gorakhpur) led to 22 policemen being burned \nalive in their station.\n- On 12 February 1922, Gandhi suspended the movement on moral principle, stating that masses must \nmaster non-violence before courting arrest."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the Salt Satyagraha of 1930. Why did Mahatma Gandhi choose salt, how did the Dandi \nMarch capture world attention, and what was the impact on British administration?",
        "options": null,
        "answer": "Comprehensive essay on Salt Satyagraha and Dandi March",
        "explanation": "Marking Scheme (8 Marks total):\n1. Choice of Salt as the Core Symbol (2.5 Marks):\n- Salt was an indispensable, universal food item consumed by every Indian regardless of caste, class, or \nreligion.\n- State monopoly prevented individuals from collecting natural salt and levied a regressive tax, \nsymbolizing colonial economic cruelty.\n- Provided an easily understood, emotional, and non-violent issue to galvanize the masses.\n2. The Dandi March and Global Impact (3 Marks):\n- Set out on foot on 12 March 1930 with 78 volunteers from Sabarmati Ashram to Dandi (240 miles in 24 \ndays), addressing huge rallies daily.\n- On 6 April 1930, broke the law by picking up a lump of natural sea salt, launching the nationwide Civil \nDisobedience Movement.\n- American journalist Webb Miller documented brutal police beatings of peaceful volunteers at the \nDharasana salt works, shocking world public opinion.\n- Time magazine celebrated Gandhi's moral victory, honoring him as 'Man of the Year'.\n3. Widespread National Upsurge (1.5 Marks):\n- Thousands of peasants refused to pay chaukidari tax; forest laws were violated in Maharashtra and \nCentral Provinces.\n- Khan Abdul Ghaffar Khan's Khudai Khidmatgars defied British firing in Peshawar.\n4. Compelling British Negotiation (1 Mark):\n- Over 60,000 Indians were jailed, forcing Viceroy Lord Irwin to negotiate with Gandhi on equal footing in \nMarch 1931."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the Quit India Movement of 1942. Evaluate its background, the spontaneous mass upsurge, \nunderground networks, parallel governments, and its historical significance.",
        "options": null,
        "answer": "Comprehensive essay on the Quit India Movement 1942",
        "explanation": "Marking Scheme (8 Marks total):\n1. Causes and Background (2.5 Marks):\n- Failure of the Cripps Mission (March 1942), which offered only vague dominion status after the war.\n- Looming threat of Japanese invasion on India's eastern border; Gandhi believed British presence \ninvited Japanese aggression.\n- Severe wartime inflation, rice famine in Bengal, and military requisitions of boats and carts.\n2. Launch and Total Repression (2 Marks):\n- On 8 August 1942, the AICC passed the historic Quit India resolution at Bombay; Gandhi gave the \nmantra 'Do or Die'.\n- On 9 August, the British arrested all top leaders (Gandhi, Nehru, Patel, Azad), outlawing Congress.\n3. Spontaneous Mass Upsurge & Parallel Governments (2.5 Marks):\n- Strikes, hartals, and attacks on telegraph lines, railway stations, and government treasuries.\n- Underground networks organized by young socialists: Jayaprakash Narayan, Ram Manohar Lohia, and \nAruna Asaf Ali.\n- Parallel Governments (Prati Sarkar) established in Ballia (Chittu Pandey), Tamluk/Midnapore (Jatiya \nSarkar), and Satara (Nana Patil).\n4. Historical Significance (1 Mark):\n- Brutally crushed with machine guns and air strafing, yet proved to the British that they could no longer \nrule India without armed force."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Mahatma Gandhi's speech at the opening of Banaras Hindu \nUniversity (February 1916) and answer the questions:\nSource: Gandhi at Banaras Hindu University\n'Mahatma Gandhi said: 'There is no salvation for India unless you strip yourselves of this jewellery and hold \nit in trust for your countrymen in India. There can be no spirit of self-government about us if we take away or \nallow others to take away from the peasant almost the whole of the result of his labour. Our salvation can \nonly come through the farmer. Neither the lawyers, nor the doctors, nor the rich landlords are going to \nsecure it...''\n(i) Where and in which year did Gandhi deliver this historic address? (1 Mark)\n(ii) Whom did Gandhi criticize in his speech, and what advice did he give them? (1 Mark)\n(iii) Why is this speech considered the foundational manifesto of Gandhian mass nationalism? (2 \nMarks)",
        "options": null,
        "answer": "Solutions for BHU Speech Source Question",
        "explanation": "Marking Scheme:\n(i) Venue & Year [1 Mark] : At the opening of Banaras Hindu University (BHU) in February 1916.\n(ii) Criticism & Advice [1 Mark] : Criticized the bedecked princes and wealthy elites; advised them to \nsurrender their jewelry and hold their wealth in trust for India's poor.\n(iii) Foundational Manifesto [2 Marks] :\n1. Rejection of elite politics: Explicitly announced that freedom could never be won by urban lawyers and \nlandlords, but solely through the peasant masses. [1 Mark]\n2. Redefined nationalism: Transformed the anti-colonial struggle from an upper-class debating club into \nan agrarian mass movement. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following excerpt from Mahatma Gandhi's letter to Viceroy Lord Irwin before launching the \nDandi March (2 March 1930) and answer the questions:\nSource: Gandhi's Letter to Lord Irwin\n'Dear Friend, Before embarking on Civil Disobedience and taking the risk I have dreaded all these years, I \nwould fain approach you and find a way out... I regard this tax to be the most iniquitous of all from the poor \nman's standpoint. As the Independence movement is essentially for the poorest in the land, the beginning \nwill be made with this evil. If my letter makes no appeal to your heart, on the eleventh day of this month I \nshall proceed with such co-workers of the Ashram as I can take, to disregard the provisions of the Salt \nLaws...'\n(i) Why did Gandhi consider the salt tax 'the most iniquitous of all'? (1 Mark)\n(ii) What course of action did Gandhi warn the Viceroy he would take if his demands were ignored? (1 \nMark)\n(iii) What does this letter reveal about the ethical philosophy of Satyagraha? (2 Marks)",
        "options": null,
        "answer": "Solutions for Gandhi's Letter to Irwin Source Question",
        "explanation": "Marking Scheme:\n(i) Iniquitous Tax [1 Mark] : Because salt was a basic life necessity consumed by the poorest citizens, \nmaking a state monopoly and tax an unjust burden on the destitute.\n(ii) Warned Action [1 Mark] : He would march with ashram volunteers on 11/12 March to breach the Salt \nLaws.\n(iii) Ethical Philosophy of Satyagraha [2 Marks] :\n1. Transparency & courtesy: Addressed his adversary as 'Dear Friend' and gave prior notice of civil \ndisobedience, avoiding secrecy. [1 Mark]\n2. Moral appeal: Exhausted every peaceful channel of negotiation before resorting to non-violent direct \naction. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Examine Mahatma Gandhi's constructive program. How did his efforts to eradicate untouchability, \npromote Hindu-Muslim unity, and empower women strengthen the freedom movement?",
        "options": null,
        "answer": "Gandhian constructive program and national freedom",
        "explanation": "Marking Scheme (8 Marks total):\n1. Philosophy of the Constructive Program (2 Marks):\n- Gandhi insisted that true Swaraj required internal social regeneration, not merely replacing British \nrulers with Indian politicians.\n- Engaged in social reforms during interludes between major political movements (1922-28, 1934-39).\n2. Eradication of Untouchability (Harijan Upliftment) (2 Marks):\n- Coined the term 'Harijan' ('Children of God') for untouchables, founding the Harijan Sevak Sangh.\n- Cleaned public latrines himself, toured India in 1933-34, and campaigned for temple entry, challenging \northodox Hindu caste discrimination.\n3. Hindu-Muslim Fraternal Unity (2 Marks):\n- Actively forged alliances (Khilafat movement, joint fasts).\n- Toured riot-hit regions (Noakhali, Bihar, Calcutta, Delhi), preaching religious reconciliation at personal \nrisk to his life.\n4. Women's Empowerment and Khadi (2 Marks):\n- Drew millions of women out of seclusion into picketing, spinning, and salt marches, establishing \ngender parity in political action.\n- Promoted Khadi to foster self-reliance, rural employment, and boycott of foreign textiles."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Analyze the circumstances leading to the Partition of India in 1947. What role did the Muslim League, \nthe Congress, and British imperial policies play in this tragic outcome?",
        "options": null,
        "answer": "Circumstances, politics, and tragedy of Partition in 1947",
        "explanation": "Marking Scheme (8 Marks total):\n1. British Imperial Divide-and-Rule Policy (2.5 Marks):\n- Institutionalized communal divisions through separate electorates (Morley-Minto Reforms 1909, \nCommunal Award 1932).\n- Pitted the Muslim League against Congress to stall constitutional self-rule.\n2. The Muslim League and the Pakistan Resolution (2.5 Marks):\n- Revived under M.A. Jinnah; passed the Lahore Resolution in March 1940 demanding autonomous \nMuslim-majority zones in the northwest and east.\n- Swept reserved Muslim seats in the 1946 elections, asserting that the League was the sole \nrepresentative of Indian Muslims.\n- Direct Action Day (16 August 1946) launched the Great Calcutta Killings, triggering irreversible \ncommunal violence.\n3. The Congress Dilemma and Partition Acceptance (2 Marks):\n- Vehemently opposed partition; Gandhi called it a vivisection of the motherland.\n- However, rampant communal massacres in Punjab and Bengal and the failure of the interim \ngovernment convinced Nehru and Patel that partition was the only alternative to civil war.\n4. The Mountbatten Plan & Human Cost (1 Mark):\n- Mountbatten Plan (3 June 1947) advanced the independence date to 15 August 1947, leading to \nhurried boundary demarcation, massive refugee flight, and 1 million deaths."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following tribute to Mahatma Gandhi by Albert Einstein and answer the questions:\nSource: Albert Einstein's Tribute\n'Generations to come, it may be, will scarce believe that such a one as this ever in flesh and blood walked \nupon this earth... A leader of his people, unsupported by any outward authority; a politician whose success \nrests not upon craft nor the mastery of technical devices, but simply on the convincing power of his \npersonality; a victorious fighter who has always scorned the use of force...'\n(i) Who authored this historic tribute to Mahatma Gandhi? (1 Mark)\n(ii) Mention two unique qualities of Gandhi highlighted in the passage. (1 Mark)\n(iii) Why did Gandhi's philosophy of non-violence achieve universal global admiration? (2 Marks)",
        "options": null,
        "answer": "Solutions for Einstein's Tribute Source Question",
        "explanation": "Marking Scheme:\n(i) Author [1 Mark] : Renowned physicist Albert Einstein.\n(ii) Unique Qualities [1 Mark] : Commanded millions without any formal state or military power; relied \nentirely on moral character and absolute non-violence.\n(iii) Global Admiration of Non-Violence [2 Marks] :\n1. Revolutionary moral weapon: Proved that a subjugated nation could overthrow a global empire \nwithout weapons or hatred. [1 Mark]\n2. Universal application: Inspired global civil rights struggles (Martin Luther King Jr. in the USA, Nelson \nMandela in South Africa). [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Examine the role of women in the nationalist movements led by Mahatma Gandhi. How did \nparticipation in Satyagraha transform women's social status in India?",
        "options": null,
        "answer": "Role of women in Gandhian nationalist movements",
        "explanation": "Marking Scheme (8 Marks total):\n1. Entry into Public Space during Non-Cooperation (2 Marks):\n- Donated jewelry, spun khadi, boycotted foreign cloth, and picketed toddy shops, stepping outside \ndomestic seclusion.\n2. Mass Mobilization during Civil Disobedience (3 Marks):\n- Kamaladevi Chattopadhyay urged Gandhi to welcome women into direct action.\n- Thousands of women broke the Salt Law, courted arrest, and organized processions; Sarojini Naidu led \nthe historic raid on the Dharasana salt works.\n3. Vanguard Leadership in Quit India (1.5 Marks):\n- With male leaders jailed, women stepped into frontline leadership: Aruna Asaf Ali hoisted the tricolor at \nGowalia Tank; Usha Mehta ran the underground radio; 73-year-old Matangini Hazra faced bullets in \nMidnapore.\n4. Social Transformation and Emancipation (1.5 Marks):\n- Shattered the myth of female docility; earned social respect and directly catalyzed post-independence \nconstitutional guarantees of equal voting rights and legal parity."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "Discuss the various peasant and tribal uprisings that took place under the umbrella of the Non-\nCooperation Movement across India between 1920 and 1922.",
        "options": null,
        "answer": "Peasant and tribal movements during Non-Cooperation (1920-1922)",
        "explanation": "Marking Scheme (8 Marks total):\n1. Awadh Kisan Movement (Uttar Pradesh) (2.5 Marks):\n- Led by Baba Ramchandra; organized peasants against exorbitant rents, illegal cesses (abwabs), and \narbitrary evictions (bedakhali) by taluqdars.\n- Formed the Awadh Kisan Sabha; staged social boycotts (Nai-Dhobi bandh) under the slogan of Gandhi \nMaharaj.\n2. Gudem Hills Tribal Rebellion (Andhra Pradesh) (2.5 Marks):\n- Led by Alluri Sitarama Raju against oppressive colonial forest laws restricting cattle grazing and fuel \ncollection.\n- Raju praised Gandhi, urged tribals to wear khadi and give up alcohol, while maintaining that guerrilla \nwarfare was necessary to win freedom.\n3. Forest Satyagrahas in Central Provinces and Maharashtra (1.5 Marks):\n- Peasant communities deliberately entered reserved forests with cattle to break grazing restrictions, \nasserting traditional customary rights.\n4. Bengal & Assam Worker Movements (1.5 Marks):\n- Midnapore peasants refused to pay Union Board taxes; tea plantation workers in Assam walked off \nestates demanding freedom under Gandhi's raj."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 12,
      "book": "Themes in Indian History Part-III (Modern India)",
      "title": "Framing the Constitution: The Beginning of a New Era",
      "author": "NCERT Class 12 History (027)",
      "weightage_unit": "Part III: Modern India (25 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Who served as the permanent President of the Constituent Assembly of India?",
        "options": [
          "(a) Dr. Rajendra Prasad",
          "(b) Dr. B.R. Ambedkar",
          "(c) Jawaharlal Nehru",
          "(d) Dr. Sachchidananda Sinha"
        ],
        "answer": "(a) Dr. Rajendra Prasad",
        "explanation": "Dr. Rajendra Prasad was elected permanent President of the Constituent Assembly on 11 December \n1946, steering its debates over nearly three years."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The historic 'Objectives Resolution' outlining the ideals of an Independent Sovereign Republic of India \nwas moved in the Constituent Assembly by:",
        "options": [
          "(a) Jawaharlal Nehru",
          "(b) Sardar Vallabhbhai Patel",
          "(c) Dr. B.R. Ambedkar",
          "(d) Maulana Abul Kalam Azad"
        ],
        "answer": "(a) Jawaharlal Nehru",
        "explanation": "Jawaharlal Nehru introduced the historic Objectives Resolution on 13 December 1946, defining the \nphilosophy and guiding values of the Indian Constitution."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who was appointed the Chairman of the Drafting Committee of the Constituent Assembly?",
        "options": [
          "(a) Dr. B.R. Ambedkar",
          "(b) B.N. Rau",
          "(c) K.M. Munshi",
          "(d) Alladi Krishnaswami Ayyar"
        ],
        "answer": "(a) Dr. B.R. Ambedkar",
        "explanation": "Dr. B.R. Ambedkar served as Chairman of the six-member Drafting Committee, playing the central role in \npiloting and formulating the legal articles of the Constitution."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Who served as the brilliant Constitutional Advisor to the Government of India, preparing comparative \nbackground research on world constitutions?",
        "options": [
          "(a) B.N. Rau",
          "(b) S.N. Mukherjee",
          "(c) K.M. Munshi",
          "(d) Gopalaswami Ayyangar"
        ],
        "answer": "(a) B.N. Rau",
        "explanation": "Sir Benegal Narsing Rau (B.N. Rau), an eminent civil servant and jurist, served as Constitutional Advisor, \npreparing the initial draft based on extensive global constitutional studies."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Who was the Chief Draughtsman of the Constituent Assembly, acclaimed by Dr. Ambedkar for his \nextraordinary ability to translate complex legal proposals into precise constitutional prose?",
        "options": [
          "(a) S.N. Mukherjee",
          "(b) B.N. Rau",
          "(c) Frank Anthony",
          "(d) H.V.R. Iengar"
        ],
        "answer": "(a) S.N. Mukherjee",
        "explanation": "S.N. Mukherjee was the Chief Draughtsman whose remarkable precision in legal drafting was publicly \napplauded by Dr. Ambedkar on the final day of the Assembly."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "Which prominent tribal leader, and former Olympic hockey captain, passionately defended the rights \nof Adivasis in the Constituent Assembly, asserting 'I represent the real original inhabitants of India'?",
        "options": [
          "(a) Jaipal Singh",
          "(b) Birsa Munda",
          "(c) J. Nagappa",
          "(d) K.J. Khandekar"
        ],
        "answer": "(a) Jaipal Singh",
        "explanation": "Jaipal Singh eloquently advocated for India's 44 million tribal people, demanding an end to moral \ncondescension, constitutional safeguards, and reserved legislative seats."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Which nationalist leader vehemently opposed separate electorates in the Constituent Assembly, \ncalling them 'a poison that has entered the body politic of our country'?",
        "options": [
          "(a) Sardar Vallabhbhai Patel",
          "(b) Govind Ballabh Pant",
          "(c) Jawaharlal Nehru",
          "(d) Begum Aizaz Rasul"
        ],
        "answer": "(a) Sardar Vallabhbhai Patel",
        "explanation": "Sardar Patel forcefully condemned separate communal electorates on 27 August 1947 as a British \nimperial poison that divided citizens and directly led to the tragedy of Partition."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which female Muslim member of the Constituent Assembly declared that separate electorates were \nself-destructive and suicidal for minorities in a democracy?",
        "options": [
          "(a) Begum Aizaz Rasul",
          "(b) Dakshayani Velayudhan",
          "(c) Durgabai Deshmukh",
          "(d) Sarojini Naidu"
        ],
        "answer": "(a) Begum Aizaz Rasul",
        "explanation": "Begum Aizaz Rasul courageously opposed separate electorates for Muslims, arguing that they would \npermanently isolate the minority community from the national mainstream."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 DELHI",
        "question": "The member from Madras who warned the Assembly that overburdening the Central Government \nwith financial powers would cripple provinces and make the Centre collapse under its own weight \nwas:",
        "options": [
          "(a) K. Santhanam",
          "(b) Alladi Krishnaswami Ayyar",
          "(c) T.A. Ramalingam Chettiar",
          "(d) C. Rajagopalachari"
        ],
        "answer": "(a) K. Santhanam",
        "explanation": "K. Santhanam of Madras argued passionately for fiscal federalism, warning that concentrating all \nfinancial resources in the Centre would make provinces mere beggars."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which aggressive Congress member from the United Provinces insisted that Hindi in the Devanagari \nscript must immediately be adopted as the sole National Language of India?",
        "options": [
          "(a) R.V. Dhulekar",
          "(b) Govind Ballabh Pant",
          "(c) Purushottam Das Tandon",
          "(d) Algurai Shastri"
        ],
        "answer": "(a) R.V. Dhulekar",
        "explanation": "R.V. Dhulekar took an uncompromising stance on Hindi, declaring that those who did not understand \nHindustani had no moral right to sit in the Constituent Assembly."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Under the compromise language formula devised by the Language Committee, Hindi in the \nDevanagari script was designated as the:",
        "options": [
          "(a) 'Official Language' of the Union (with English continuing for 15 years)",
          "(b) 'National Language' with immediate replacement of English",
          "(c) Language of northern states only",
          "(d) Sole medium of university instruction"
        ],
        "answer": "(a) 'Official Language' of the Union (with English continuing for 15 years)",
        "explanation": "The Assembly astutely avoided the contentious word 'National Language', designating Hindi as the \n'Official Language' of the Union while permitting English to continue for 15 years."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which member from Madras warned that any aggressive attempt to force Hindi upon non-Hindi \nspeaking southern provinces would spark bitter agitation and tear the nation apart?",
        "options": [
          "(a) Shrimati G. Durgabai",
          "(b) Dakshayani Velayudhan",
          "(c) Amrit Kaur",
          "(d) Hansa Mehta"
        ],
        "answer": "(a) Shrimati G. Durgabai",
        "explanation": "Shrimati G. Durgabai expressed deep shock at the aggressive Hindi campaigning, warning that it eroded \nthe goodwill built by southern social workers who had voluntarily learned Hindi."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The Constituent Assembly of India met for how many days of sessions over a period of nearly three \nyears?",
        "options": [
          "(a) 165 days across 11 sessions",
          "(b) 500 days across 20 sessions",
          "(c) 60 days across 3 sessions",
          "(d) 365 days across 5 sessions"
        ],
        "answer": "(a) 165 days across 11 sessions",
        "explanation": "The Assembly held 11 sessions spanning 165 working days between 9 December 1946 and 26 \nNovember 1949 to craft the world's most extensive written constitution."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which composite language, blending Hindi and Urdu vocabulary, was passionately championed by \nMahatma Gandhi as the ideal national language of communication?",
        "options": [
          "(a) Hindustani",
          "(b) Sanskritized Hindi",
          "(c) Persianized Urdu",
          "(d) Punjabi"
        ],
        "answer": "(a) Hindustani",
        "explanation": "Mahatma Gandhi strongly advocated Hindustani—a multi-cultural, syncretic blend of Hindi and Urdu \nspoken widely across northern India—as the natural language of composite national identity."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "How did the Indian Constitution resolve the allocation of legislative powers between the Union Centre \nand the States?",
        "options": [
          "(a) Through three lists: Union List, State List, and Concurrent List, with residuary powers vested in the Centre",
          "(b) Giving all powers exclusively to the States",
          "(c) By abolishing state governments",
          "(d) Copying the British unitary system"
        ],
        "answer": "(a) Through three lists: Union List, State List, and Concurrent List, with\nresiduary powers vested in the Centre",
        "explanation": "The Constitution created a three-tier legislative structure (Union, State, Concurrent Lists), keeping \nstrategic subjects and residuary powers firmly with the Union Centre."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "The abolition of which dehumanizing social practice was enshrined under Fundamental Rights as \nArticle 17 of the Indian Constitution?",
        "options": [
          "(a) Untouchability",
          "(b) Child marriage",
          "(c) Purdah",
          "(d) Dowry"
        ],
        "answer": "(a) Untouchability",
        "explanation": "Article 17 explicitly abolished 'Untouchability', forbidding its practice in any form and making its \nenforcement a punishable criminal offence under the law."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which member of the Constituent Assembly represented the sole Communist voice, critiquing the \nAssembly as functioning under the shadow of British imperialism?",
        "options": [
          "(a) Somnath Lahiri",
          "(b) N.G. Ranga",
          "(c) A.K. Gopalan",
          "(d) P.C. Joshi"
        ],
        "answer": "(a) Somnath Lahiri",
        "explanation": "Somnath Lahiri, the only Communist member in the Assembly, cautioned that the body was created by \nthe British Cabinet Mission and urged members to free themselves from British influence."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which constitutional mechanism empowers the Governor of a state to recommend the dismissal of \nan elected state government and impose central rule?",
        "options": [
          "(a) Article 356 (President's Rule)",
          "(b) Article 370",
          "(c) Article 14",
          "(d) Article 21"
        ],
        "answer": "(a) Article 356 (President's Rule)",
        "explanation": "Article 356 authorizes the Central Government to assume executive control of a state (President's Rule) \nupon the breakdown of constitutional machinery in that state."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which Dalit member from Madras spoke movingly of historical suffering, stating 'We have been \nsuffering for six thousand years, our moral degradation is due to our socio-economic suppression'?",
        "options": [
          "(a) J. Nagappa",
          "(b) Dakshayani Velayudhan",
          "(c) Jagjivan Ram",
          "(d) B.R. Ambedkar"
        ],
        "answer": "(a) J. Nagappa",
        "explanation": "J. Nagappa highlighted that untouchables constituted 20-25% of India's population and had been \nsystematically denied education, land, and dignity for millennia."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The Constitution of India was officially signed and adopted by the Constituent Assembly on:",
        "options": [
          "(a) 26 November 1949",
          "(b) 26 January 1950",
          "(c) 15 August 1947",
          "(d) 30 January 1948"
        ],
        "answer": "(a) 26 November 1949",
        "explanation": "The Constitution was formally adopted and signed by members on 26 November 1949 (celebrated as \nConstitution Day), coming into full force on 26 January 1950 (Republic Day)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "How were the members of the Constituent Assembly of India originally chosen in 1946?",
        "options": [
          "(a) Indirectly elected by the members of the Provincial Legislative Assemblies",
          "(b) Directly elected through universal adult franchise",
          "(c) Nominated entirely by the Viceroy",
          "(d) Appointed by the British Parliament"
        ],
        "answer": "(a) Indirectly elected by the members of the Provincial Legislative Assemblies",
        "explanation": "Members were elected indirectly by the Provincial Legislative Assemblies elected in 1946 under the \nlimited franchise established by the Government of India Act 1935."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Why was 26 January chosen as the historic date for the commencement of the Indian Constitution in \n1950?",
        "options": [
          "(a) To commemorate the anniversary of the 1930 Purna Swaraj Declaration",
          "(b) It was Mahatma Gandhi's birthday",
          "(c) The British army left on that day",
          "(d) It was chosen by an astrological consultation"
        ],
        "answer": "(a) To commemorate the anniversary of the 1930 Purna Swaraj Declaration",
        "explanation": "26 January was selected to honor the historic day in 1930 when the Indian National Congress first \ncelebrated 'Independence Day' under the Purna Swaraj pledge."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which veteran socialist leader defended the rights of peasants, stating that 'the real minority in India \nare the exploited masses who are starving'?",
        "options": [
          "(a) N.G. Ranga",
          "(b) Jaipal Singh",
          "(c) Somnath Lahiri",
          "(d) Acharya Narendra Deva"
        ],
        "answer": "(a) N.G. Ranga",
        "explanation": "Kisan leader N.G. Ranga argued that the true minorities requiring constitutional protection were the \nimpoverished, indebted agricultural laborers and peasants."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2022 TERM-1",
        "question": "What proportion of seats did the Indian National Congress hold in the Constituent Assembly \nfollowing the partition of India?",
        "options": [
          "(a) 82%",
          "(b) 51%",
          "(c) 100%",
          "(d) 65%"
        ],
        "answer": "(a) 82%",
        "explanation": "Following the withdrawal of the Muslim League representatives from Pakistan areas, the Congress held \nan overwhelming 82% of the seats in the Assembly."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2021 TERM-1",
        "question": "Who was Dakshayani Velayudhan in the Constituent Assembly?",
        "options": [
          "(a) The only Dalit woman elected to the Constituent Assembly",
          "(b) The Chairman of the Minorities Committee",
          "(c) The Chief Draughtsman",
          "(d) The Governor of Madras"
        ],
        "answer": "(a) The only Dalit woman elected to the Constituent Assembly",
        "explanation": "Dakshayani Velayudhan was the sole Dalit woman member of the Constituent Assembly, passionately \ndemanding moral regeneration and an end to caste servitude."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Constituent Assembly decided to establish a strong Central Government with \nextensive fiscal and administrative powers.\nReason (R): In the traumatic aftermath of Partition, mass communal violence, and the integration of \n565 princely states, a powerful Centre was deemed vital to prevent national balkanization.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. The chaos of Partition convinced leaders like Nehru, Patel, and Ambedkar that a \nweak federal centre would jeopardize India's security and unity."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Separate electorates for religious minorities were permanently abolished in the \nConstitution of independent India.\nReason (R): Leaders realized that separate electorates institutionalized communal divisions, \nalienated minorities, and had directly culminated in the partition of the subcontinent.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) A is false but R is true."
        ],
        "answer": "(a) Both A and R are true and R is the correct explanation of A.",
        "explanation": "Both A and R are true. Separate electorates were viewed as a colonial mechanism that poisoned \nnational unity, replaced instead by joint electorates and fundamental rights."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022 TERM-1",
        "question": "Assertion (A): The Language Committee of the Constituent Assembly declared Hindi in the \nDevanagari script to be the 'National Language' of India.\nReason (R): Representatives from non-Hindi southern states unanimously accepted Hindi as the \nsupreme national language of the new republic.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is true but R is false.",
          "(d) Both A and R are false."
        ],
        "answer": "(d) Both A and R are false.",
        "explanation": "Both A and R are false. Hindi was designated as the 'Official Language' (not National Language) under a \ncompromise formula, because southern members strongly resisted Hindi imposition."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021 TERM-1",
        "question": "Assertion (A): The Constitution of India was merely an unoriginal copy of the Government of India Act \n1935 and Western constitutions.\nReason (R): While adopting structural frameworks from across the globe, the framers adapted them \nto address India's unique social inequalities and civilizational ethos.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Nehru and Ambedkar stressed that India was not blind-copying foreign \nmodels; Reason R is true and explains the indigenous adaptations (reservations, secularism)."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Jaipal Singh demanded that Adivasis should be granted separate electorates and \nsegregated from mainstream Indian society.\nReason (R): Jaipal Singh argued that Adivasis had suffered centuries of exploitation and needed \nreserved seats in legislatures and security of ancestral lands.",
        "options": [
          "(a) Both A and R are true and R is the correct explanation of A.",
          "(b) Both A and R are true but R is NOT the correct explanation of A.",
          "(c) A is false but R is true.",
          "(d) A is true but R is false."
        ],
        "answer": "(c) A is false but R is true.",
        "explanation": "Assertion A is false because Jaipal Singh explicitly stated that Adivasis did not demand separate \nelectorates; they demanded reserved seats within the democratic legislature. Reason R is true."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024 (3 MARKS)",
        "question": "Explain the significance of Jawaharlal Nehru's 'Objectives Resolution' introduced on 13 December \n1946.",
        "options": null,
        "answer": "Significance of Objectives Resolution",
        "explanation": "1. Philosophical Compass [1 Mark] : Outlined the guiding vision of the Constitution: proclaiming India as \nan Independent Sovereign Republic based on democratic ideals.\n2. Fundamental Guarantees [1 Mark] : Guaranteed all citizens justice (social, economic, and political), \nequality of status and opportunity, and freedom of expression and belief.\n3. Safeguards for Marginalized [1 Mark] : Mandated specific constitutional safeguards for minorities, \nbackward and tribal areas, and depressed classes, forming the bedrock of the Preamble."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "Why did Sardar Vallabhbhai Patel and Begum Aizaz Rasul strongly oppose separate electorates for \nminorities?",
        "options": null,
        "answer": "Opposition to separate electorates by Patel and Aizaz Rasul",
        "explanation": "1. Patel's Warning [1.5 Marks] : Patel described separate electorates as a British imperial poison that \ndivided citizens into hostile camps, arguing that they had produced Partition and had no place in a \nunited nation.\n2. Begum Aizaz Rasul's Stance [1.5 Marks] : Argued that separate electorates were suicidal for Muslims, \npermanently isolating them as an alienated minority and depriving them of influence in a joint \ndemocracy."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023 (3 MARKS)",
        "question": "How did Jaipal Singh present the case of the Adivasis (tribals) in the Constituent Assembly?",
        "options": null,
        "answer": "Jaipal Singh's presentation of Adivasi rights",
        "explanation": "1. Rejection of Paternalism [1 Mark] : Proclaimed that Adivasis were the original inhabitants of India, \ndemanding that non-tribals shed their superior moral arrogance.\n2. Historical Dispossession [1 Mark] : Highlighted that tribals had been pushed into hills, robbed of \nancestral forests, and treated as savage outcasts for centuries.\n3. Demand for Constitutional Equity [1 Mark] : Demanded reservation of seats in the legislature, \nprotection of forest lands, and full integration as equal citizens without demanding separate electorates."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2022 (3 MARKS)",
        "question": "Explain the arguments presented by K. Santhanam in favor of greater provincial autonomy in financial \nmatters.",
        "options": null,
        "answer": "K. Santhanam's arguments for provincial autonomy",
        "explanation": "1. Financial Crippling of Provinces [1 Mark] : Argued that centralizing all lucrative tax heads (income tax, \ncustoms, excise) in the Union government left provinces financially crippled.\n2. Dependence on Central Doles [1 Mark] : Stated that provinces would be reduced to 'beggars' forced to \nmarch to New Delhi for funds to build schools, roads, or hospitals.\n3. Collapse of Overburdened Centre [1 Mark] : Warned that an overloaded Centre trying to micro-\nmanage regional state affairs would eventually collapse under its own structural weight."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2020 (3 MARKS)",
        "question": "Describe the compromise formula evolved by the Language Committee of the Constituent Assembly \nto resolve the national language deadlock.",
        "options": null,
        "answer": "Compromise formula on language",
        "explanation": "1. Official Language, Not National [1 Mark] : Hindi in the Devanagari script was declared the 'Official \nLanguage' of the Union, consciously avoiding the divisive label 'National Language'.\n2. Retention of English for 15 Years [1 Mark] : Decided that English would continue to be used for all \nofficial union purposes for an initial transitional period of 15 years (until 1965).\n3. Provincial Linguistic Freedom [1 Mark] : Permitted each state/province to choose its regional \nlanguage for internal provincial administration and school education."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2019 (3 MARKS)",
        "question": "What arguments were advanced by Dr. B.R. Ambedkar and Jawaharlal Nehru in favor of a strong \nCentral Government?",
        "options": null,
        "answer": "Arguments for a strong Central Government",
        "explanation": "1. Preserving National Unity [1 Mark] : Argued that in the wake of Partition and communal riots, only a \npowerful Centre could prevent regional disintegration and balkanization.\n2. Economic Planning [1 Mark] : A strong Central government was essential to mobilize national \nresources, eradicate poverty, and execute nationwide industrial planning.\n3. Protecting Depressed Classes [1 Mark] : Dr. Ambedkar asserted that provincial state governments \nwere often dominated by local upper-caste landed elites; a powerful Centre was vital to enforce civil \nrights for Dalits."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2018 (3 MARKS)",
        "question": "How did the Constituent Assembly ensure social justice for the Depressed Classes (Dalits)?",
        "options": null,
        "answer": "Constitutional safeguards for the Depressed Classes",
        "explanation": "1. Abolition of Untouchability [1 Mark] : Article 17 formally abolished untouchability and criminalized its \npractice in any shape or form.\n2. Legislative & Employment Reservations [1 Mark] : Provided guaranteed political reservation of seats \nin the Lok Sabha and State Legislative Assemblies, alongside public employment quotas.\n3. Temple Entry & Civic Access [1 Mark] : Guaranteed equal fundamental access to all public places, \ntemples, wells, tanks, and educational institutions."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2017 (3 MARKS)",
        "question": "Discuss the contribution of Dr. B.R. Ambedkar to the framing of the Indian Constitution.",
        "options": null,
        "answer": "Dr. B.R. Ambedkar's contribution to the Constitution",
        "explanation": "1. Drafting Committee Leadership [1 Mark] : As Chairman, piloted the draft constitution through intense \nclause-by-clause debates, reconciling conflicting opinions.\n2. Architect of Fundamental Rights [1 Mark] : Insisted on robust constitutional remedies (Article 32 - \n'heart and soul of the Constitution') to protect civil liberties against executive tyranny.\n3. Champion of Marginalized [1 Mark] : Ensured comprehensive legal safeguards, reservations, and \naffirmative action for Scheduled Castes and Scheduled Tribes."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2016 (3 MARKS)",
        "question": "What were the views expressed by G. Durgabai and T.A. Ramalingam Chettiar regarding the Hindi \nlanguage controversy?",
        "options": null,
        "answer": "Southern members' views on Hindi controversy",
        "explanation": "1. Shock at Aggressive Propaganda [1.5 Marks] : Shrimati G. Durgabai expressed distress that militant \nHindi advocates were alienating southern citizens who had voluntarily learned Hindi in Gandhian \nschools.\n2. Warning of Separation [1.5 Marks] : T.A. Ramalingam Chettiar warned that forcing Hindi on non-Hindi \npopulations would make them feel like second-class citizens, generating bitter regional hostility."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2015 (3 MARKS)",
        "question": "Describe the composition and functioning of the Constituent Assembly of India.",
        "options": null,
        "answer": "Composition and functioning of Constituent Assembly",
        "explanation": "1. Indirect Election [1 Mark] : Members were elected by provincial legislative assemblies in 1946; \nCongress held 82% of seats following Partition.\n2. Broad Ideological Spectrum [1 Mark] : Encompassed socialists, liberals, landlords, industrialists, and \nDalit representatives; non-Congress legal experts (Ambedkar, B.N. Rau) played leading roles.\n3. Public Scrutiny & Debate [1 Mark] : Functioned through open democratic debate; drafts were \npublished in newspapers, receiving thousands of public representations and amendments."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024 (8 MARKS)",
        "question": "Analyze the debates in the Constituent Assembly regarding the distribution of legislative and financial \npowers between the Union Centre and the States. Contrast the views of K. Santhanam with those of \nDr. B.R. Ambedkar and Jawaharlal Nehru.",
        "options": null,
        "answer": "Comprehensive essay on the Federalism debates in Constituent Assembly",
        "explanation": "Marking Scheme (8 Marks total):\n1. Context of the Federalism Debate (2 Marks):\n- Framing took place during Partition violence, refugee flight, and princely state integration.\n- The core question was balancing provincial autonomy with the need for national cohesion.\n2. K. Santhanam's Critique of Centralization (3 Marks):\n- Warned that concentrating fiscal resources (income tax, excise, customs) in the Union would turn \nprovinces into dependent beggars.\n- Argued that provincial governments were directly responsible for health, education, and sanitation, \nwhich would starve without autonomous funds.\n- Warned that an overloaded Centre would crumble under excessive administrative responsibilities.\n3. The Case for a Strong Centre by Ambedkar and Nehru (3 Marks):\n- Defended by Nehru, Ambedkar, and Balkrishna Sharma: A weak centre in pre-British India had \nrepeatedly invited foreign conquest.\n- Vital for National Unity: Only a resolute Centre could check communal riots, quell secessionist forces, \nand integrate 565 princely states.\n- Resulting Structure: Three Lists (Union, State, Concurrent) with residuary powers and emergency \nprovisions (Article 356) vested in the Centre."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2023 (8 MARKS)",
        "question": "Examine the fierce debates in the Constituent Assembly on the issue of 'Separate Electorates' versus \n'Reserved Seats'. How was the minority question ultimately resolved?",
        "options": null,
        "answer": "Debate on Separate Electorates vs Reserved Seats",
        "explanation": "Marking Scheme (8 Marks total):\n1. Demand for Separate Electorates (2 Marks):\n- Raised by B. Pocker Bahadur (Madras), arguing that separate electorates were essential for Muslims to \nensure authentic political representation without being drowned by the majority.\n2. Fierce Nationalist Condemnation (3 Marks):\n- Sardar Patel attacked separate electorates as a colonial poison that divided citizens and directly \nculminated in Partition.\n- Govind Ballabh Pant argued that separate electorates permanently isolated minorities and prevented \nthem from gaining the trust of the majority.\n- Begum Aizaz Rasul (Muslim member) courageously declared separate electorates suicidal for \nminorities in a sovereign democracy.\n3. The Dalit Question & Dr. Ambedkar's Solution (2 Marks):\n- Separate electorates for Dalits were rejected in favor of the Poona Pact formula: reserved legislative \nseats within joint electorates.\n- Ensured political presence without tearing apart the social fabric.\n4. Constitutional Resolution (1 Mark):\n- Separate electorates were permanently abolished; minorities were safeguarded through robust \nFundamental Rights (Articles 25-30: freedom of religion, cultural and educational rights)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2022 (8 MARKS)",
        "question": "Discuss the passionate debates surrounding the 'National Language' in the Constituent Assembly. \nAnalyze the positions of R.V. Dhulekar, Mahatma Gandhi, G. Durgabai, and the final Language \nCommittee compromise.",
        "options": null,
        "answer": "Passionate debates on the National Language issue",
        "explanation": "Marking Scheme (8 Marks total):\n1. Mahatma Gandhi's Ideal of Hindustani (2 Marks):\n- Championed Hindustani—a multi-cultural, syncretic blend of Hindi and Urdu written in both Nagari and \nUrdu scripts—as the natural language of composite national identity.\n2. R.V. Dhulekar's Aggressive Stance on Hindi (2 Marks):\n- Demanded that Hindi in the Devanagari script be immediately crowned as the sole National Language.\n- Stated provocatively that anyone in the Assembly who did not know Hindustani had no right to frame \nIndia's constitution, provoking fierce uproar.\n3. Resistance from Non-Hindi Regions (2 Marks):\n- Southern members (Shrimati G. Durgabai, T.A. Ramalingam Chettiar) warned that linguistic imperialism \nwould alienate non-Hindi speakers and destroy national unity.\n- Highlighted that Hindi was an alien tongue to millions in the South who had their own rich ancient \nliteratures (Tamil, Telugu, Kannada, Malayalam).\n4. The Landmark Compromise Formula (2 Marks):\n- The Language Committee resolved the deadlock: Hindi in Devanagari script declared the 'Official \nLanguage' of the Union (not National Language).\n- English allowed to continue for all union official work for 15 years (until 1965); states free to adopt \nregional languages."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2024 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source from Jawaharlal Nehru's speech moving the Objectives Resolution (13 \nDecember 1946) and answer the questions:\nSource: We are at the Threshold of a New Age\n'Jawaharlal Nehru said: 'We are at the end of an era and possibly even at the threshold of a new age... We \nsay that our objective is an Independent Sovereign Republic of India. But we do not wish to copy just any \nconstitution. We have to take the spirit of democracy, justice and liberty from the great struggles of the \nworld—the American Revolution, the French Revolution, the Russian Revolution—and fit them into the genius \nand needs of our own people...''\n(i) On what historic date did Nehru introduce the Objectives Resolution? (1 Mark)\n(ii) Which three global revolutions did Nehru cite as inspirations for democracy and justice? (1 Mark)\n(iii) Why did Nehru insist that India must not merely copy foreign Western constitutions? (2 Marks)",
        "options": null,
        "answer": "Solutions for Nehru's Objectives Resolution Source Question",
        "explanation": "Marking Scheme:\n(i) Historic Date [1 Mark] : 13 December 1946.\n(ii) Three Global Revolutions [1 Mark] : The American Revolution, the French Revolution, and the Russian \nRevolution.\n(iii) Rejection of Mere Copying [2 Marks] :\n1. Distinct civilizational genius: Insisted that the constitution must fit the unique cultural ethos, \npluralism, and economic needs of Indian society. [1 Mark]\n2. Innovative social democracy: Aimed to synthesize political liberty with social justice and economic \nequality to serve India's impoverished millions. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2023 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Jaipal Singh's speech in the Constituent Assembly and answer \nthe questions:\nSource: The Real Inhabitants of India\n'Jaipal Singh said: 'I rise to speak on behalf of the millions of unknown, unheeded people of India—the \nAdibasis. As an Adibasi, I am not expected to understand the legal intricacies of the Resolution. But my \ncommon sense tells me that every one of us should march in that road to freedom... For the last six \nthousand years you have been pushing us into the jungles. You have treated us as savages... You cannot \nteach my people democracy; you have to learn democracy from them. They are the most democratic people \non earth...''\n(i) On behalf of which community was Jaipal Singh speaking? (1 Mark)\n(ii) What historical injustice did he accuse non-tribals of committing for 6,000 years? (1 Mark)\n(iii) Why did Jaipal Singh assert that non-tribals needed to learn democracy from Adivasis? (2 Marks)",
        "options": null,
        "answer": "Solutions for Jaipal Singh's Adivasi Speech Source Question",
        "explanation": "Marking Scheme:\n(i) Community [1 Mark] : Speaking on behalf of the Adibasis (tribal indigenous peoples of India).\n(ii) Historical Injustice [1 Mark] : Systematically pushing them into jungles, dispossessing them of lands, \nand treating them as inferior savages.\n(iii) Learning Democracy from Adivasis [2 Marks] :\n1. Egalitarian communal values: Tribal societies functioned on collective consensus, shared land, and \nabsence of hereditary caste hierarchies. [1 Mark]\n2. Moral critique: Reminded the Assembly that true democracy lies in equality and mutual respect, which \ntribal society had practiced for millennia. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021 (8 MARKS)",
        "question": "Analyze the role and vision of Dr. B.R. Ambedkar in shaping the Constitution of India. Discuss his \ncontributions towards Fundamental Rights, affirmative action, and social democracy.",
        "options": null,
        "answer": "Role and vision of Dr. B.R. Ambedkar in framing the Constitution",
        "explanation": "Marking Scheme (8 Marks total):\n1. Chairman of the Drafting Committee (2.5 Marks):\n- Guided the six-member drafting committee through exhaustive legal debates, harmonizing divergent \nviewpoints with intellectual rigor.\n- Defended individual liberty against state encroachment, balancing civil rights with state security.\n2. Architect of Fundamental Rights and Judicial Remedies (2.5 Marks):\n- Ensured that Fundamental Rights were enforceable by courts; termed Article 32 (Right to \nConstitutional Remedies) as the 'heart and soul of the Constitution'.\n- Championed Article 17, outlawing untouchability and declaring its practice a criminal offence.\n3. Affirmative Action and Reservations (1.5 Marks):\n- Incorporated affirmative action: guaranteed political reservation of seats in legislatures and public \nemployment quotas for SCs and STs.\n- Provided institutional safeguards to dismantle centuries of educational and economic deprivation.\n4. The Vision of Social Democracy (1.5 Marks):\n- In his final address on 25 November 1949, warned that political democracy (one person, one vote) \nwould be meaningless without social democracy (one person, one value), urging India to eradicate \nsocial and economic inequalities."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020 (8 MARKS)",
        "question": "Examine the tumultuous historical context in which the Constituent Assembly functioned between \n1946 and 1949. What immense challenges did the framers confront?",
        "options": null,
        "answer": "Historical context and challenges confronting the Constituent Assembly",
        "explanation": "Marking Scheme (8 Marks total):\n1. The Trauma of Partition and Communal Carnage (2.5 Marks):\n- Concurrently drafted during the horrific communal riots following Direct Action Day (1946) and \nPartition (1947).\n- Over 1 million people were killed; millions of refugees poured into Delhi, Punjab, and Bengal, \ndemanding immediate rehabilitation.\n2. Integration of 565 Princely States (2.5 Marks):\n- British paramountcy lapsed, leaving 565 princely states theoretically free to declare independence or \njoin Pakistan.\n- Framers faced the imminent danger of balkanization; resolved through Sardar Patel's diplomatic \npersuasion and decisive integration.\n3. Agrarian Distress and Communist Insurgency (1.5 Marks):\n- Food shortages, inflation, and peasant uprisings (such as the Telangana armed rebellion) posed severe \nthreats to stability.\n4. Crafting Consensus in a Pluralist Society (1.5 Marks):\n- Framers had to reconcile conflicting demands: regional language claims, minority rights, secularism, \nand federal distribution of powers without compromising national integrity."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019 (SOURCE-BASED - 4 MARKS)",
        "question": "Read the following source regarding Dr. B.R. Ambedkar's final speech to the Constituent Assembly \n(25 November 1949) and answer the questions:\nSource: On the Threshold of Contradiction\n'Dr. Ambedkar said: 'On the 26th of January 1950, we are going to enter into a life of contradictions. In \npolitics we will have equality and in social and economic life we will have inequality. In politics we will be \nrecognizing the principle of one man one vote and one vote one value. In our social and economic life, we \nshall, by reason of our social and economic structure, continue to deny the principle of one man one value. \nHow long shall we continue to live this life of contradictions? How long shall we continue to deny equality in \nour social and economic life? If we continue to deny it for long, we will do so only by putting our political \ndemocracy in peril...''\n(i) On which date did India enter into this 'life of contradictions'? (1 Mark)\n(ii) What contradiction between political life and social life does Dr. Ambedkar identify? (1 Mark)\n(iii) What grave warning does Dr. Ambedkar issue if social and economic equality is denied for long? \n(2 Marks)",
        "options": null,
        "answer": "Solutions for Ambedkar's Final Speech Source Question",
        "explanation": "Marking Scheme:\n(i) Date [1 Mark] : 26 January 1950 (Commencement of the Republic of India).\n(ii) The Contradiction [1 Mark] : Political equality (one person, one vote) versus pervasive social and \neconomic inequality (denial of one person, one value due to caste and poverty).\n(iii) Grave Warning [2 Marks] :\n1. Threat to political democracy: Warned that those who suffer from social and economic inequality will \neventually blow up the structure of political democracy crafted by the Assembly. [1 Mark]\n2. Call for radical social reform: Emphasized that political independence must immediately be followed \nby aggressive social and economic democratization. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018 (8 MARKS)",
        "question": "Discuss the vision of rights that emerged in the Constituent Assembly. How did the framers balance \nindividual civil liberties with social justice for historically marginalized groups?",
        "options": null,
        "answer": "Vision of rights and social justice in the Indian Constitution",
        "explanation": "Marking Scheme (8 Marks total):\n1. Universal Fundamental Rights (Part III) (2.5 Marks):\n- Enshrined non-negotiable fundamental civil liberties: Equality before the law (Article 14), freedom of \nspeech and assembly (Article 19), and protection of life and personal liberty (Article 21).\n- Guaranteed freedom of religion (Article 25) and secularism, ensuring no state religion.\n2. Concrete Safeguards for Historical Injustices (Affirmative Action) (3 Marks):\n- Abolished Untouchability (Article 17) and prohibited forced labor/begar (Article 23).\n- Enacted positive discrimination (reservations in legislative bodies and civil services) under Articles \n15(4) and 16(4) for Scheduled Castes and Scheduled Tribes.\n3. Cultural and Educational Rights of Minorities (1.5 Marks):\n- Protected under Articles 29 and 30: guaranteed religious and linguistic minorities the fundamental \nright to conserve their script, culture, and establish educational institutions.\n4. Directive Principles of State Policy (Part IV) (1 Mark):\n- Mandated the state to promote welfare, secure fair wages, free education, and equitable distribution of \nmaterial wealth."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017 (8 MARKS)",
        "question": "'The Constitution of India is a living document that harmoniously synthesizes diverse national \naspirations.' Discuss how the framers resolved contentious issues of federalism, official language, \nand fundamental rights.",
        "options": null,
        "answer": "Constitutional synthesis of federalism, language, and fundamental rights",
        "explanation": "Marking Scheme (8 Marks total):\n1. Resolution of the Federal Dilemma (3 Marks):\n- Reconciled central authority with provincial aspirations by establishing a cooperative federal model.\n- Three distinct legislative lists (Union, State, Concurrent) ensured national defense and foreign policy \nstayed with the Centre while agriculture and public health remained with the States.\n- Created a unified judiciary, all-India civil services, and single citizenship to foster national integration.\n2. The Solomonic Language Compromise (2.5 Marks):\n- Defused bitter North-South linguistic polarization by adopting Hindi as the Official Language (not \nNational Language) while retaining English for 15 years.\n- Permitted each state to conduct its internal administration in its mother tongue.\n3. Balance between Liberty and Social Democracy (2.5 Marks):\n- Harmonized individual fundamental freedoms with collective social justice (affirmative action, minority \nsafeguards, Directive Principles).\n- Resulted in an enduring, flexible constitutional framework that has sustained the world's largest vibrant \ndemocracy for over seven decades."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 13,
      "book": "CBSE Official Map Work Module",
      "title": "Official Map Work Module: Ancient, Medieval & Modern India",
      "author": "CBSE Class 12 History (027)",
      "weightage_unit": "Compulsory Section E (5 Marks in Board Exam)"
    },
    "questions": [
      {
        "id": 1,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the given political outline map of India, locate and label the following Harappan sites:\n(i) Kalibangan - site of ploughed field\n(ii) Dholavira - site of water reservoirs\n(iii) Rakhigarhi - major mature Harappan metropolis",
        "options": null,
        "answer": "(i) Kalibangan (Hanumangarh district, Rajasthan); (ii)\nDholavira (Kutch district, Gujarat); (iii) Rakhigarhi (Hisar district, Haryana)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Kalibangan: Correctly plotted in northern Rajasthan near Ghaggar river [1 Mark] .\n(ii) Dholavira: Correctly plotted in Khadir Bet island in the Great Rann of Kutch, Gujarat [1 Mark] .\n(iii) Rakhigarhi: Correctly plotted in western Haryana near Hisar [1 Mark] ."
      },
      {
        "id": 2,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the political outline map of India, two Harappan sites are marked as A and B. Identify them and \nwrite their correct names:\nA: A coastal Harappan port town with a tidal dockyard\nB: A craft production settlement specialized in shell working near the coast of Gujarat",
        "options": null,
        "answer": "A - Lothal; B - Nageshwar",
        "explanation": "Marking Scheme:\nA: Lothal (Gulf of Khambhat, Gujarat) [1 Mark] .\nB: Nageshwar (near Dwarka on Saurashtra coast, Gujarat) [1 Mark] ."
      },
      {
        "id": 3,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "Locate and label the following ancient Mahajanapadas and urban centers on the outline map of India:\n(i) Magadha (Capital Rajagriha/Pataliputra)\n(ii) Gandhara (Capital Taxila)\n(iii) Avanti (Capital Ujjayini)",
        "options": null,
        "answer": "(i) Magadha in southern Bihar; (ii) Gandhara in\nnorthwestern Pakistan (Rawalpindi); (iii) Avanti in Malwa region, western Madhya Pradesh",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Magadha: Correctly marked in South Bihar along the Ganga/Son rivers [1 Mark] .\n(ii) Gandhara: Correctly marked in northwestern region near Taxila/Peshawar [1 Mark] .\n(iii) Avanti: Correctly marked around Ujjain in western MP [1 Mark] ."
      },
      {
        "id": 4,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "On the map of India, two Ashokan Major Rock Edict sites are marked as A and B. Identify them:\nA: Major Rock Edict located in the foothills of Himalayas in present-day Uttarakhand\nB: Major Rock Edict located in coastal Odisha where Kalinga war remorse was recorded",
        "options": null,
        "answer": "A - Kalsi; B - Dhauli / Shishupalgarh",
        "explanation": "Marking Scheme:\nA: Kalsi (Dehradun district, Uttarakhand, at confluence of Yamuna and Tons) [1 Mark] .\nB: Dhauli or Jaugada (Odisha) [1 Mark] ."
      },
      {
        "id": 5,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "Locate and label the following major Buddhist sites on the outline map of India:\n(i) Sanchi (Madhya Pradesh)\n(ii) Bodh Gaya (Bihar)\n(iii) Sarnath (Uttar Pradesh)",
        "options": null,
        "answer": "(i) Sanchi in Raisen district, MP; (ii) Bodh Gaya in Gaya\ndistrict, Bihar; (iii) Sarnath near Varanasi, UP",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Sanchi: Correctly located in central Madhya Pradesh near Bhopal [1 Mark] .\n(ii) Bodh Gaya: Correctly located in southern Bihar along Falgu river [1 Mark] .\n(iii) Sarnath: Correctly located in eastern UP, 10 km north of Varanasi [1 Mark] ."
      },
      {
        "id": 6,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "On the outline map of India, identify the site marked as A:\nA: The Buddhist stupa site in Andhra Pradesh where beautiful limestone sculptures were plundered by \ncolonial collectors",
        "options": null,
        "answer": "A - Amaravati",
        "explanation": "Marking Scheme:\nA: Amaravati (Guntur district, Andhra Pradesh on the right bank of Krishna river) [1 Mark] ."
      },
      {
        "id": 7,
        "type": "SA",
        "tag": "CBSE 2021 (MAP)",
        "question": "Locate and label the following Ashokan Pillar Inscription sites on the map of India:\n(i) Topra (Haryana)\n(ii) Meerut (Uttar Pradesh)\n(iii) Kaushambi (Uttar Pradesh)",
        "options": null,
        "answer": "(i) Topra in Yamunanagar, Haryana; (ii) Meerut in western\nUP; (iii) Kaushambi near Prayagraj, UP",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Topra: Correctly marked in northern Haryana [1 Mark] .\n(ii) Meerut: Correctly marked in western UP northeast of Delhi [1 Mark] .\n(iii) Kaushambi: Correctly marked southwest of Prayagraj along Yamuna [1 Mark] ."
      },
      {
        "id": 8,
        "type": "SA",
        "tag": "CBSE 2020 (MAP)",
        "question": "On the map of India, locate and label the following early historic urban trade centers:\n(i) Mathura - crossroad of trade and cultural center\n(ii) Puhar (Kaveripattinam) - coastal Chola port in Tamil Nadu\n(iii) Bharuch (Bhrigukachchha) - premier port on the Arabian Sea in Gujarat",
        "options": null,
        "answer": "(i) Mathura (western UP); (ii) Puhar (coastal Tamil Nadu at\nKaveri mouth); (iii) Bharuch (Narmada estuary, Gujarat)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Mathura: Marked on the Yamuna in western UP [1 Mark] .\n(ii) Puhar: Marked on the Coromandel coast at the mouth of Kaveri, Tamil Nadu [1 Mark] .\n(iii) Bharuch: Marked on the Gulf of Khambhat at the mouth of Narmada, Gujarat [1 Mark] ."
      },
      {
        "id": 9,
        "type": "SA",
        "tag": "CBSE 2019 (MAP)",
        "question": "On the outline map of India, identify the Harappan site marked as A:\nA: A mature Harappan site in Haryana where terracotta models of the plough were discovered",
        "options": null,
        "answer": "A - Banawali",
        "explanation": "Marking Scheme:\nA: Banawali (Fatehabad district, Haryana) [1 Mark] ."
      },
      {
        "id": 10,
        "type": "SA",
        "tag": "CBSE 2018 (MAP)",
        "question": "Locate and label the following sacred sites associated with the life of Gautama Buddha on the map \nof India and neighboring countries:\n(i) Lumbini - Birthplace of Buddha\n(ii) Kusinagara - Site of Mahaparinirvana",
        "options": null,
        "answer": "(i) Lumbini in southern Nepal foothills; (ii) Kusinagara in\nDeoria/Kushinagar district, eastern UP",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Lumbini: Located just across the Indo-Nepal border in Kapilavastu/Rupandehi, Nepal [1 Mark] .\n(ii) Kusinagara: Located in eastern Uttar Pradesh [1 Mark] ."
      },
      {
        "id": 11,
        "type": "SA",
        "tag": "CBSE 2017 (MAP)",
        "question": "On the outline map of India, identify the ancient rock-cut cave site marked as A in Maharashtra:\nA: A world-famous horseshoe-shaped gorge containing 30 rock-cut Buddhist caves and tempera \nmurals",
        "options": null,
        "answer": "A - Ajanta Caves",
        "explanation": "Marking Scheme:\nA: Ajanta Caves (Aurangabad / Chhatrapati Sambhajinagar district, Maharashtra) [1 Mark] ."
      },
      {
        "id": 12,
        "type": "SA",
        "tag": "CBSE 2016 (MAP)",
        "question": "Locate and label the following capital cities of ancient kingdoms on the map of India:\n(i) Pataliputra - Imperial capital of the Mauryas and Guptas\n(ii) Ujjayini - Strategic western commercial capital in Avanti",
        "options": null,
        "answer": "(i) Pataliputra (modern Patna, Bihar); (ii) Ujjayini (modern\nUjjain, MP)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Pataliputra: Marked at the confluence of Ganga and Son rivers in Bihar [1 Mark] .\n(ii) Ujjayini: Marked in the Malwa plateau of western Madhya Pradesh [1 Mark] ."
      },
      {
        "id": 13,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the map of India, locate and label the Ashokan Rock Edict at Girnar (Junagadh, Gujarat) where the \nSudarshana lake inscription was also engraved.",
        "options": null,
        "answer": "Girnar, Junagadh district, Kathiawar peninsula, Gujarat",
        "explanation": "Marking Scheme:\nGirnar: Correctly plotted at Junagadh in southern Saurashtra / Kathiawar peninsula, Gujarat [1 Mark] ."
      },
      {
        "id": 14,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "Identify the ancient stupa site marked as A in Madhya Pradesh:\nA: A major Buddhist stupa site in Satna district, MP, renowned for stone railings depicting Jataka \nstories",
        "options": null,
        "answer": "A - Bharhut",
        "explanation": "Marking Scheme:\nA: Bharhut (Satna district, northern Madhya Pradesh) [1 Mark] ."
      },
      {
        "id": 15,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "Locate and label the Mahajanapada of Kuru with its ancient epic capital Hastinapura on the map of \nIndia.",
        "options": null,
        "answer": "Hastinapura (Meerut district, western Uttar Pradesh)",
        "explanation": "Marking Scheme:\nHastinapura: Correctly located in western UP near Meerut, northeast of Delhi [1 Mark] ."
      },
      {
        "id": 16,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the political outline map of India, locate and label the following centers of the Vijayanagara Empire \nand Deccan Sultanates:\n(i) Vijayanagara (Hampi) - Imperial capital\n(ii) Bijapur (Vijayapura) - Capital of Adil Shahi Sultanate\n(iii) Golconda - Capital of Qutb Shahi Sultanate",
        "options": null,
        "answer": "(i) Hampi in Bellary/Vijayanagara district, Karnataka; (ii)\nBijapur in northern Karnataka; (iii) Golconda near Hyderabad, Telangana",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Vijayanagara (Hampi): Plotted on the southern bank of Tungabhadra in central Karnataka [1 Mark] .\n(ii) Bijapur: Plotted in northern Karnataka near Krishna-Bhima basin [1 Mark] .\n(iii) Golconda: Plotted in central Telangana near Hyderabad [1 Mark] ."
      },
      {
        "id": 17,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "On the map of India, two medieval sites are marked as A and B. Identify them:\nA: A capital of the Aravidu dynasty of Vijayanagara located in Andhra Pradesh\nB: The premier Sultanate capital in Maharashtra that formed an alliance at Talikota in 1565",
        "options": null,
        "answer": "A - Penukonda (or Chandragiri); B - Ahmadnagar",
        "explanation": "Marking Scheme:\nA: Penukonda (Anantapur district, AP) [1 Mark] .\nB: Ahmadnagar (western Maharashtra) [1 Mark] ."
      },
      {
        "id": 18,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "Locate and label the following major temple towns of South India associated with the Vijayanagara \nempire:\n(i) Thanjavur (Brihadishvara temple town)\n(ii) Chidambaram (Nataraja temple town)\n(iii) Kanchipuram (Varadaraja and Ekambareshwara temple town)",
        "options": null,
        "answer": "(i) Thanjavur (Kaveri delta, Tamil Nadu); (ii) Chidambaram\n(Cuddalore district, Tamil Nadu); (iii) Kanchipuram (northern Tamil Nadu near Chennai)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Thanjavur: Located in Kaveri delta in central Tamil Nadu [1 Mark] .\n(ii) Chidambaram: Located on the coast south of Puducherry in Tamil Nadu [1 Mark] .\n(iii) Kanchipuram: Located 70 km southwest of Chennai in northern Tamil Nadu [1 Mark] ."
      },
      {
        "id": 19,
        "type": "SA",
        "tag": "CBSE 2021 (MAP)",
        "question": "On the map of India, identify the premier Sufi pilgrimage shrine marked as A in Rajasthan:\nA: The Dargah of Khwaja Muinuddin Chishti (Gharib Nawaz)",
        "options": null,
        "answer": "A - Ajmer",
        "explanation": "Marking Scheme:\nA: Ajmer (central Rajasthan) [1 Mark] ."
      },
      {
        "id": 20,
        "type": "SA",
        "tag": "CBSE 2020 (MAP)",
        "question": "Locate and label the following centers of Bhakti-Sufi traditions on the outline map of India:\n(i) Delhi - Dargah of Shaikh Nizamuddin Auliya\n(ii) Nankana Sahib - Birthplace of Guru Nanak (Punjab)\n(iii) Puri (Odisha) - Temple of Lord Jagannatha",
        "options": null,
        "answer": "(i) Delhi; (ii) Nankana Sahib (Punjab, Pakistan); (iii) Puri\n(coastal Odisha)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Delhi: Located on Yamuna river [1 Mark] .\n(ii) Nankana Sahib: Located west of Lahore in Pakistani Punjab [1 Mark] .\n(iii) Puri: Located on the Bay of Bengal coast south of Bhubaneswar, Odisha [1 Mark] ."
      },
      {
        "id": 21,
        "type": "SA",
        "tag": "CBSE 2019 (MAP)",
        "question": "On the map of India, identify the medieval fort capital marked as A in Maharashtra:\nA: The fort city where Ibn Battuta visited 'Tarababad', the marketplace of singers",
        "options": null,
        "answer": "A - Daulatabad (Devagiri)",
        "explanation": "Marking Scheme:\nA: Daulatabad / Devagiri (near Chhatrapati Sambhajinagar, Maharashtra) [1 Mark] ."
      },
      {
        "id": 22,
        "type": "SA",
        "tag": "CBSE 2018 (MAP)",
        "question": "Locate and label the following administrative hubs of the Mughal Empire:\n(i) Agra - Imperial capital on the Yamuna\n(ii) Fatehpur Sikri - Ceremonial capital built by Akbar\n(iii) Lahore - Strategic northwestern imperial capital",
        "options": null,
        "answer": "(i) Agra in western UP; (ii) Fatehpur Sikri near Agra, UP;\n(iii) Lahore in Punjab (Pakistan)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Agra: Plotted along Yamuna in western UP [1 Mark] .\n(ii) Fatehpur Sikri: Plotted 40 km west of Agra in UP [1 Mark] .\n(iii) Lahore: Plotted along Ravi river in Punjab [1 Mark] ."
      },
      {
        "id": 23,
        "type": "SA",
        "tag": "CBSE 2017 (MAP)",
        "question": "On the map of India, identify the port town marked as A in Gujarat:\nA: The premier international commercial port of the Mughal Empire on the western coast",
        "options": null,
        "answer": "A - Surat",
        "explanation": "Marking Scheme:\nA: Surat (mouth of Tapti river in southern Gujarat) [1 Mark] ."
      },
      {
        "id": 24,
        "type": "SA",
        "tag": "CBSE 2016 (MAP)",
        "question": "Locate and label the battlefield of Talikota (Rakshasi-Tangadi) where the Vijayanagara army was \ndefeated in 1565.",
        "options": null,
        "answer": "Talikota (Rakshasi-Tangadi, northern Karnataka near\nBijapur border)",
        "explanation": "Marking Scheme:\nTalikota: Located in northern Karnataka south of Krishna river near Bijapur [1 Mark] ."
      },
      {
        "id": 25,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the map of India, locate and label the town of Bidar in northern Karnataka, renowned for its \nBahmani Sultanate fort and Mahmud Gawan madrasa.",
        "options": null,
        "answer": "Bidar (northeastern Karnataka near\nTelangana/Maharashtra border)",
        "explanation": "Marking Scheme:\nBidar: Plotted in northernmost tip of Karnataka [1 Mark] ."
      },
      {
        "id": 26,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the political outline map of India, locate and label the following main centers of the 1857 Revolt:\n(i) Meerut (Uttar Pradesh) - starting point of revolt\n(ii) Jhansi (Uttar Pradesh) - led by Rani Lakshmibai\n(iii) Arrah / Jagdishpur (Bihar) - led by Kunwar Singh",
        "options": null,
        "answer": "(i) Meerut (western UP); (ii) Jhansi (southern\nUP/Bundelkhand); (iii) Arrah (western Bihar near Patna)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Meerut: Located 65 km northeast of Delhi in western UP [1 Mark] .\n(ii) Jhansi: Located in southwestern UP (Bundelkhand) [1 Mark] .\n(iii) Arrah: Located in western Bihar west of Patna [1 Mark] ."
      },
      {
        "id": 27,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "On the map of India, two centers of the 1857 Revolt are marked as A and B. Identify them:\nA: Capital city where Bahadur Shah Zafar was proclaimed leader\nB: Center of revolt in Awadh led by Begum Hazrat Mahal",
        "options": null,
        "answer": "A - Delhi; B - Lucknow",
        "explanation": "Marking Scheme:\nA: Delhi [1 Mark] .\nB: Lucknow (central UP) [1 Mark] ."
      },
      {
        "id": 28,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "Locate and label the following centers of the 1857 Revolt on the outline map of India:\n(i) Kanpur (Uttar Pradesh) - led by Nana Sahib\n(ii) Bareilly (Uttar Pradesh) - led by Khan Bahadur Khan\n(iii) Gwalior (Madhya Pradesh) - site of Rani Lakshmibai's martyrdom",
        "options": null,
        "answer": "(i) Kanpur (central UP); (ii) Bareilly (Rohilkhand, northern\nUP); (iii) Gwalior (northern MP)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Kanpur: Plotted on Ganga river in central UP [1 Mark] .\n(ii) Bareilly: Plotted in Rohilkhand in northern UP [1 Mark] .\n(iii) Gwalior: Plotted in northern MP south of Agra [1 Mark] ."
      },
      {
        "id": 29,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "On the map of India, identify the place marked as A:\nA: The military cantonment near Calcutta where Mangal Pandey revolted against the greased \ncartridge on 29 March 1857",
        "options": null,
        "answer": "A - Barrackpore",
        "explanation": "Marking Scheme:\nA: Barrackpore (North 24 Parganas district, West Bengal, north of Kolkata) [1 Mark] ."
      },
      {
        "id": 30,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "Locate and label the following centers of the Indian National Movement associated with Mahatma \nGandhi:\n(i) Champaran (Bihar) - Indigo Satyagraha of 1917\n(ii) Kheda (Gujarat) - Peasant Satyagraha of 1918\n(iii) Dandi (Gujarat) - Breaking of the Salt Law in 1930",
        "options": null,
        "answer": "(i) Champaran (northwestern Bihar); (ii) Kheda (central\nGujarat near Nadiad); (iii) Dandi (coastal Navsari district, southern Gujarat)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Champaran: Located in northwestern Bihar bordering Nepal [1 Mark] .\n(ii) Kheda: Located in central Gujarat between Ahmedabad and Vadodara [1 Mark] .\n(iii) Dandi: Located on the Arabian Sea coast near Navsari/Surat in southern Gujarat [1 Mark] ."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "On the map of India, two centers of the national movement are marked as A and B. Identify them:\nA: The city where the tragic Jallianwala Bagh massacre occurred on 13 April 1919\nB: The village in Uttar Pradesh where violence led to the suspension of Non-Cooperation in 1922",
        "options": null,
        "answer": "A - Amritsar; B - Chauri Chaura",
        "explanation": "Marking Scheme:\nA: Amritsar (Punjab) [1 Mark] .\nB: Chauri Chaura (Gorakhpur district, eastern UP) [1 Mark] ."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2021 (MAP)",
        "question": "Locate and label the following centers on the map of India:\n(i) Bardoli (Gujarat) - Peasant Satyagraha of 1928 led by Sardar Patel\n(ii) Ahmedabad (Gujarat) - Cotton mill workers' strike of 1918 and Sabarmati Ashram\n(iii) Lahore - Site of the 1929 Congress Purna Swaraj session",
        "options": null,
        "answer": "(i) Bardoli in Surat district, Gujarat; (ii) Ahmedabad in\ncentral Gujarat; (iii) Lahore in Punjab (Pakistan)",
        "explanation": "Marking Scheme (1 Mark each):\n(i) Bardoli: Marked in southern Gujarat near Surat [1 Mark] .\n(ii) Ahmedabad: Marked on Sabarmati river in central Gujarat [1 Mark] .\n(iii) Lahore: Marked in Pakistani Punjab along Ravi river [1 Mark] ."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2020 (MAP)",
        "question": "On the map of India, locate and label the city of Bombay (Mumbai) where the Quit India Resolution \nwas passed on 8 August 1942.",
        "options": null,
        "answer": "Bombay (Mumbai, coastal Maharashtra)",
        "explanation": "Marking Scheme:\nBombay: Correctly plotted on the Konkan coast of Maharashtra [1 Mark] ."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2019 (MAP)",
        "question": "On the map of India, identify the center marked as A:\nA: The riot-torn district in East Bengal (now Bangladesh) where Mahatma Gandhi walked barefoot in \n1946–47 to restore communal harmony",
        "options": null,
        "answer": "A - Noakhali",
        "explanation": "Marking Scheme:\nA: Noakhali (southeastern Bangladesh, Chittagong division) [1 Mark] ."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2018 (MAP)",
        "question": "Locate and label the town of Supa (Poona district, Maharashtra) where the agrarian Deccan Riots \nbroke out on 12 May 1875.",
        "options": null,
        "answer": "Supa (near Pune, western Maharashtra)",
        "explanation": "Marking Scheme:\nSupa: Located in Pune district in western Maharashtra [1 Mark] ."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2017 (MAP)",
        "question": "On the map of India, locate and label the Rajmahal Hills in Jharkhand, homeland of the Paharias and \nSanthals.",
        "options": null,
        "answer": "Rajmahal Hills (Santhal Pargana region, eastern\nJharkhand)",
        "explanation": "Marking Scheme:\nRajmahal Hills: Marked in eastern Jharkhand bordering West Bengal along the Ganga bend [1 Mark] ."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2016 (MAP)",
        "question": "Identify the center of 1857 revolt marked as A in central India:\nA: The city in Uttar Pradesh where Maulvi Ahmadullah Shah (Danka Shah) preached against British \nrule",
        "options": null,
        "answer": "A - Faizabad (Ayodhya)",
        "explanation": "Marking Scheme:\nA: Faizabad / Ayodhya (eastern-central UP on Saryu river) [1 Mark] ."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2024 (MAP)",
        "question": "Locate and label the city of Calcutta (Kolkata) where Lord Cornwallis introduced the Permanent \nSettlement in 1793 and where Gandhi fasted for communal peace in August 1947.",
        "options": null,
        "answer": "Calcutta (Kolkata, West Bengal on Hooghly river)",
        "explanation": "Marking Scheme:\nCalcutta: Correctly plotted along the Hooghly river in lower Bengal [1 Mark] ."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2023 (MAP)",
        "question": "On the map of India, identify the center of 1857 resistance marked as A:\nA: The fortress town in Uttar Pradesh where Nana Sahib and Tantia Tope fought British forces along \nthe Yamuna",
        "options": null,
        "answer": "A - Kalpi",
        "explanation": "Marking Scheme:\nA: Kalpi (Jalaun district, UP, on Yamuna river) [1 Mark] ."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2022 (MAP)",
        "question": "Locate and label Satara in Maharashtra, where a parallel government ('Prati Sarkar') was formed \nduring the Quit India Movement of 1942.",
        "options": null,
        "answer": "Satara (southern Maharashtra)",
        "explanation": "Marking Scheme:\nSatara: Correctly located in southwestern Maharashtra south of Pune [1 Mark] ."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 1 (5 MARKS)",
        "question": "(a) On the given political outline map of India, two places have been marked as A and B. Identify them \nand write their correct names on the lines drawn near them:\nA: A mature Harappan site in Rajasthan where a ploughed field was discovered (1 Mark)\nB: A major center of the Revolt of 1857 in Bihar led by Kunwar Singh (1 Mark)\n(b) On the same map, locate and label any THREE of the following with appropriate symbols:\n(i) Dholavira - a Harappan water harvesting site\n(ii) Sarnath - site of Buddha's first sermon\n(iii) Vijayanagara (Hampi) - capital of the Vijayanagara Empire\n(iv) Dandi - site of breaking Salt Law in 1930 (3 Marks)",
        "options": null,
        "answer": "(a) A - Kalibangan; B - Arrah (Jagdishpur) (b) (i) Dholavira\n(Kutch, Gujarat); (ii) Sarnath (Varanasi, UP); (iii) Hampi (Karnataka); (iv) Dandi (Navsari, Gujarat)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) Identification (2 Marks):\nA: Kalibangan (Rajasthan) [1 Mark] .\nB: Arrah / Jagdishpur (Bihar) [1 Mark] .\nPart (b) Location & Labeling (Any 3, 1 Mark each):\n(i) Dholavira: Plotted in Khadir Bet, Kutch, Gujarat [1 Mark] .\n(ii) Sarnath: Plotted near Varanasi in eastern UP [1 Mark] .\n(iii) Hampi: Plotted on Tungabhadra in Karnataka [1 Mark] .\n(iv) Dandi: Plotted on southern Gujarat coast [1 Mark] ."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 2 (5 MARKS)",
        "question": "(a) On the given political outline map of India, two places are marked as A and B. Identify them:\nA: An Ashokan Major Rock Edict located in Gujarat (1 Mark)\nB: The village in Uttar Pradesh associated with the suspension of Non-Cooperation in 1922 (1 Mark)\n(b) On the same map, locate and label any THREE of the following:\n(i) Lothal - Harappan port town with dockyard\n(ii) Sanchi - major Buddhist stupa in Madhya Pradesh\n(iii) Jhansi - center of 1857 revolt led by Rani Lakshmibai\n(iv) Champaran - first satyagraha by Mahatma Gandhi in Bihar (3 Marks)",
        "options": null,
        "answer": "(a) A - Girnar; B - Chauri Chaura (b) (i) Lothal (Gujarat); (ii)\nSanchi (MP); (iii) Jhansi (UP); (iv) Champaran (Bihar)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) Identification (2 Marks):\nA: Girnar / Junagadh (Gujarat) [1 Mark] .\nB: Chauri Chaura (Gorakhpur, UP) [1 Mark] .\nPart (b) Location & Labeling (Any 3, 1 Mark each):\n(i) Lothal: Plotted near Gulf of Khambhat, Gujarat [1 Mark] .\n(ii) Sanchi: Plotted in Raisen district, MP [1 Mark] .\n(iii) Jhansi: Plotted in Bundelkhand, southern UP [1 Mark] .\n(iv) Champaran: Plotted in northwestern Bihar [1 Mark] ."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 3 (5 MARKS)",
        "question": "(a) On the outline map of India, two places are marked as A and B. Identify them:\nA: A coastal Harappan craft production site in Gujarat specialized in shell objects (1 Mark)\nB: The city where Jallianwala Bagh massacre occurred on 13 April 1919 (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Rakhigarhi - Harappan site in Haryana\n(ii) Magadha (Pataliputra) - ancient imperial capital\n(iii) Ajmer - Dargah of Khwaja Muinuddin Chishti\n(iv) Kheda - peasant satyagraha in Gujarat (3 Marks)",
        "options": null,
        "answer": "(a) A - Nageshwar; B - Amritsar (b) (i) Rakhigarhi\n(Haryana); (ii) Pataliputra (Patna, Bihar); (iii) Ajmer (Rajasthan); (iv) Kheda (Gujarat)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Nageshwar [1 Mark] ; B - Amritsar [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Rakhigarhi: Plotted in Hisar, Haryana [1 Mark] .\n(ii) Pataliputra: Plotted in Bihar [1 Mark] .\n(iii) Ajmer: Plotted in Rajasthan [1 Mark] .\n(iv) Kheda: Plotted in Gujarat [1 Mark] ."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 4 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: The Buddhist stupa site in Andhra Pradesh (1 Mark)\nB: Center of the 1857 Revolt in Uttar Pradesh led by Nana Sahib (1 Mark)\n(b) Locate and label any THREE of the following:\n(i) Banawali - Harappan site in Haryana\n(ii) Bodh Gaya - site of Buddha's enlightenment in Bihar\n(iii) Bijapur - Deccan Sultanate capital in Karnataka\n(iv) Bardoli - peasant satyagraha led by Sardar Patel in Gujarat (3 Marks)",
        "options": null,
        "answer": "(a) A - Amaravati; B - Kanpur (b) (i) Banawali (Haryana); (ii)\nBodh Gaya (Bihar); (iii) Bijapur (Karnataka); (iv) Bardoli (Gujarat)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Amaravati [1 Mark] ; B - Kanpur [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Banawali: Fatehabad, Haryana [1 Mark] .\n(ii) Bodh Gaya: Gaya, Bihar [1 Mark] .\n(iii) Bijapur: Northern Karnataka [1 Mark] .\n(iv) Bardoli: Surat, Gujarat [1 Mark] ."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 5 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: An Ashokan Major Rock Edict located in Uttarakhand (1 Mark)\nB: Center of the 1857 Revolt in Uttar Pradesh led by Begum Hazrat Mahal (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Kot Diji - Harappan site in Sindh (or Kalibangan in Rajasthan)\n(ii) Ujjayini - ancient capital of Avanti\n(iii) Golconda - Deccan Sultanate in Telangana\n(iv) Ahmedabad - mill workers' strike and Sabarmati Ashram in Gujarat (3 Marks)",
        "options": null,
        "answer": "(a) A - Kalsi; B - Lucknow (b) (i) Kalibangan (Rajasthan);\n(ii) Ujjayini (MP); (iii) Golconda (Telangana); (iv) Ahmedabad (Gujarat)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Kalsi [1 Mark] ; B - Lucknow [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Kalibangan: Northern Rajasthan [1 Mark] .\n(ii) Ujjayini: Western MP [1 Mark] .\n(iii) Golconda: Hyderabad, Telangana [1 Mark] .\n(iv) Ahmedabad: Central Gujarat [1 Mark] ."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 6 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: Military cantonment in Uttar Pradesh where the 1857 Revolt began on 10 May 1857 (1 Mark)\nB: The town in Maharashtra where the Deccan Riots began in May 1875 (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Kusinagara - site of Buddha's death in Uttar Pradesh\n(ii) Thanjavur - Chola temple capital in Tamil Nadu\n(iii) Bareilly - 1857 revolt center in Rohilkhand, UP\n(iv) Bombay - site of Quit India Resolution in 1942 (3 Marks)",
        "options": null,
        "answer": "(a) A - Meerut; B - Supa (b) (i) Kusinagara (UP); (ii)\nThanjavur (TN); (iii) Bareilly (UP); (iv) Bombay (Maharashtra)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Meerut [1 Mark] ; B - Supa [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Kusinagara: Eastern UP [1 Mark] .\n(ii) Thanjavur: Kaveri delta, TN [1 Mark] .\n(iii) Bareilly: Northern UP [1 Mark] .\n(iv) Bombay: Western coast, Maharashtra [1 Mark] ."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 7 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: Ancient port town of the Cholas in Tamil Nadu at the mouth of Kaveri (1 Mark)\nB: City in Punjab where the historic 1929 Congress Purna Swaraj session was held (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Harappa - first excavated site on the Ravi river\n(ii) Topra - Ashokan pillar site in Haryana\n(iii) Gwalior - 1857 revolt center in Madhya Pradesh\n(iv) Noakhali - Gandhi's 1946 peace march center (3 Marks)",
        "options": null,
        "answer": "(a) A - Puhar (Kaveripattinam); B - Lahore (b) (i) Harappa\n(Punjab, Pakistan); (ii) Topra (Haryana); (iii) Gwalior (MP); (iv) Noakhali (Bangladesh border)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Puhar [1 Mark] ; B - Lahore [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Harappa: Sahiwal, Pakistani Punjab [1 Mark] .\n(ii) Topra: Yamunanagar, Haryana [1 Mark] .\n(iii) Gwalior: Northern MP [1 Mark] .\n(iv) Noakhali: Southeastern Bengal [1 Mark] ."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 8 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: Famous rock-cut cave temple site in Maharashtra containing Kailashanatha temple (1 Mark)\nB: The military garrison town in West Bengal where Mangal Pandey was stationed (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Mohenjodaro - mature Harappan metropolis on the Indus\n(ii) Mathura - crossroad of trade and Kushana sculpture\n(iii) Penukonda - capital of Aravidu dynasty in Andhra Pradesh\n(iv) Satara - parallel government center in 1942 in Maharashtra (3 Marks)",
        "options": null,
        "answer": "(a) A - Ellora; B - Barrackpore (b) (i) Mohenjodaro (Sindh);\n(ii) Mathura (UP); (iii) Penukonda (AP); (iv) Satara (Maharashtra)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Ellora [1 Mark] ; B - Barrackpore [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Mohenjodaro: Larkana district, Sindh [1 Mark] .\n(ii) Mathura: Western UP [1 Mark] .\n(iii) Penukonda: Anantapur district, AP [1 Mark] .\n(iv) Satara: Western Maharashtra [1 Mark] ."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 9 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: A Harappan craft production site in Sindh almost exclusively devoted to bead-making (1 Mark)\nB: Center of the 1857 Revolt in Uttar Pradesh where Maulvi Ahmadullah Shah fought (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Kalsi - Ashokan Major Rock Edict in Uttarakhand\n(ii) Bharhut - Buddhist stupa in Madhya Pradesh\n(iii) Agra - Mughal capital on the Yamuna in UP\n(iv) Dandi - coastal village in Gujarat where salt law was broken (3 Marks)",
        "options": null,
        "answer": "(a) A - Chanhudaro; B - Faizabad (b) (i) Kalsi\n(Uttarakhand); (ii) Bharhut (MP); (iii) Agra (UP); (iv) Dandi (Gujarat)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Chanhudaro [1 Mark] ; B - Faizabad [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Kalsi: Dehradun, Uttarakhand [1 Mark] .\n(ii) Bharhut: Satna, MP [1 Mark] .\n(iii) Agra: Western UP [1 Mark] .\n(iv) Dandi: Navsari, Gujarat [1 Mark] ."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE SAMPLE MOCK MAP 10 (5 MARKS)",
        "question": "(a) Identify the marked places A and B on the outline map of India:\nA: The ancient Mahajanapada capital located in the Malwa region of Madhya Pradesh (1 Mark)\nB: The city in Bihar near Arrah where Kunwar Singh organized the 1857 Revolt (1 Mark)\n(b) Locate and label any THREE of the following on the same map:\n(i) Shortughai - Harappan outpost in Afghanistan\n(ii) Sannati - Ashokan rock edict in Karnataka\n(iii) Surat - premier Mughal port on the Arabian Sea\n(iv) Calcutta - capital where Cornwallis introduced Permanent Settlement (3 Marks)",
        "options": null,
        "answer": "(a) A - Ujjayini; B - Jagdishpur / Arrah (b) (i) Shortughai\n(Afghanistan); (ii) Sannati (Karnataka); (iii) Surat (Gujarat); (iv) Calcutta (West Bengal)",
        "explanation": "Marking Scheme (5 Marks total):\nPart (a) (2 Marks): A - Ujjayini [1 Mark] ; B - Jagdishpur / Arrah [1 Mark] .\nPart (b) (3 Marks, 1 Mark each):\n(i) Shortughai: Northeastern Afghanistan [1 Mark] .\n(ii) Sannati: Gulbarga/Kalaburagi district, Karnataka [1 Mark] .\n(iii) Surat: Southern Gujarat [1 Mark] .\n(iv) Calcutta: Hooghly river, West Bengal [1 Mark] ."
      }
    ]
  }
];
