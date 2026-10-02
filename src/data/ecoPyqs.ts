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

export const ECO_PYQ_CHAPTERS: PyqChapter[] = [
  {
    "info": {
      "chapter_num": 1,
      "book": "Part A: Introductory Macroeconomics",
      "title": "National Income: Basic Concepts & Aggregates",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 1: National Income and Related Aggregates (10 Marks combined with Ch 2)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is a 'Flow' variable?",
        "options": [
          "(a) Total Wealth of an individual",
          "(b) Monthly Income of a teacher",
          "(c) Total Population of India on 31st March 2024",
          "(d) Balance in a bank savings account on 1st January"
        ],
        "answer": "(b) Monthly Income of a teacher",
        "explanation": "A flow variable is measured over a specified period of time (e.g., monthly income, annual depreciation), whereas stock variables are measured at a specific point in time (e.g., wealth, population on a date)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Goods purchased by a production firm for resale or for use as raw materials in the production process during the same year are called:",
        "options": [
          "(a) Final Goods",
          "(b) Capital Goods",
          "(c) Intermediate Goods",
          "(d) Consumer Durable Goods"
        ],
        "answer": "(c) Intermediate Goods",
        "explanation": "Intermediate goods are goods used either for resale or as inputs for further production in the same accounting year, remaining within the production boundary."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The formula to convert Domestic Income (NDP_FC) into National Income (NNP_FC) is:",
        "options": [
          "(a) NDP_FC + Net Indirect Taxes",
          "(b) NDP_FC + Depreciation",
          "(c) NDP_FC + Net Factor Income from Abroad (NFIA)",
          "(d) NDP_FC - Subsidies"
        ],
        "answer": "(c) NDP_FC + Net Factor Income from Abroad (NFIA)",
        "explanation": "National Income (NNP_FC) = Domestic Income (NDP_FC) + Net Factor Income from Abroad (NFIA)."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following is considered a 'Transfer Payment' and is EXCLUDED from National Income?",
        "options": [
          "(a) Wages paid to factory workers",
          "(b) Old-age pensions paid by the government to senior citizens",
          "(c) Interest on business loans",
          "(d) Profits of corporate enterprises"
        ],
        "answer": "(b) Old-age pensions paid by the government to senior citizens",
        "explanation": "Old-age pensions are unilateral transfer payments for which no productive service is rendered in return; hence they are excluded from national income (unlike retirement pensions which are deferred factor payments)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Unforeseen obsolescence of fixed capital assets due to natural disasters (earthquakes, floods) or market crashes is termed as:",
        "options": [
          "(a) Consumption of Fixed Capital (Depreciation)",
          "(b) Capital Loss",
          "(c) Gross Capital Formation",
          "(d) Net Indirect Tax"
        ],
        "answer": "(b) Capital Loss",
        "explanation": "Unexpected destruction or sudden obsolescence of fixed assets is a Capital Loss, not depreciation (depreciation accounts only for expected normal wear and tear and foreseen obsolescence)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following is included in the 'Domestic Territory' (Economic Territory) of India?",
        "options": [
          "(a) Embassy of Japan located in New Delhi",
          "(b) Indian Embassy located in Washington, D.C.",
          "(c) Office of the World Bank located in New Delhi",
          "(d) United Nations Office in New Delhi"
        ],
        "answer": "(b) Indian Embassy located in Washington, D.C.",
        "explanation": "Embassies, consulates, and military bases of a country located abroad are legally and geographically treated as part of the domestic territory of that home country."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "If Gross Domestic Product at Market Price (GDP_MP) is ₹5,000 crore, Net Indirect Taxes (NIT) is ₹400 crore, and Consumption of Fixed Capital is ₹300 crore, what is the Net Domestic Product at Factor Cost (NDP_FC)?",
        "options": [
          "(a) ₹4,300 crore",
          "(b) ₹4,700 crore",
          "(c) ₹5,100 crore",
          "(d) ₹3,900 crore"
        ],
        "answer": "(a) ₹4,300 crore",
        "explanation": "NDP_FC = GDP_MP - Depreciation - Net Indirect Taxes = ₹5,000 - ₹300 - ₹400 = ₹4,300 crore."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Car purchased by a taxi driver for commercial passenger transport is classified as:",
        "options": [
          "(a) Intermediate Good",
          "(b) Capital Good (Final Producer Good)",
          "(c) Consumer Durable Good",
          "(d) Non-durable Good"
        ],
        "answer": "(b) Capital Good (Final Producer Good)",
        "explanation": "A car used by a taxi operator repeatedly over multiple years to generate transport revenue is a fixed capital asset (Capital Good)."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "In a two-sector circular flow economy, which flow represents the movement of factor services (land, labor, capital, enterprise) from households to firms?",
        "options": [
          "(a) Money Flow",
          "(b) Real Flow",
          "(c) Financial Flow",
          "(d) Capital Flow"
        ],
        "answer": "(b) Real Flow",
        "explanation": "Real flow refers to the physical flow of factor services from households to firms and the physical flow of finished goods and services from firms to households."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Net Factor Income from Abroad (NFIA) is equal to zero when:",
        "options": [
          "(a) Factor income from abroad equals factor income paid to abroad",
          "(b) Exports equal imports",
          "(c) Subsidies equal indirect taxes",
          "(d) Depreciation is zero"
        ],
        "answer": "(a) Factor income from abroad equals factor income paid to abroad",
        "explanation": "NFIA = Factor Income from Abroad (FIFA) - Factor Income to Abroad (FITA). When FIFA = FITA, NFIA is zero, making National Income equal to Domestic Income."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following is NOT a 'Normal Resident' of India?",
        "options": [
          "(a) An Indian citizen working in the Reserve Bank of India",
          "(b) A foreign tourist visiting the Taj Mahal for 10 days",
          "(c) An Indian citizen living and working in New Delhi",
          "(d) A citizen of Nepal working permanently in an Indian university for 5 years"
        ],
        "answer": "(b) A foreign tourist visiting the Taj Mahal for 10 days",
        "explanation": "Foreign tourists, pilgrims, and seasonal travelers visiting a country for recreation or holiday are non-residents because their center of economic interest does not lie in the host country."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Net Indirect Taxes (NIT) is calculated as:",
        "options": [
          "(a) Indirect Taxes + Subsidies",
          "(b) Indirect Taxes - Subsidies",
          "(c) Subsidies - Indirect Taxes",
          "(d) Direct Taxes - Indirect Taxes"
        ],
        "answer": "(b) Indirect Taxes - Subsidies",
        "explanation": "Net Indirect Taxes = Indirect Taxes (GST, customs duty) - Subsidies (financial assistance granted by the government)."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following is a 'Stock' variable?",
        "options": [
          "(a) Distance between Delhi and Mumbai",
          "(b) Monthly salary of an engineer",
          "(c) Production of wheat during 2023",
          "(d) Annual capital expenditure"
        ],
        "answer": "(a) Distance between Delhi and Mumbai",
        "explanation": "Distance between two cities is a fixed physical magnitude measurable at any point in time (stock), whereas salaries and annual production are measured over time intervals (flows)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A refrigerator purchased by a household for domestic kitchen use is classified as:",
        "options": [
          "(a) Intermediate Good",
          "(b) Consumer Durable Good",
          "(c) Capital Good",
          "(d) Single-use Producer Good"
        ],
        "answer": "(b) Consumer Durable Good",
        "explanation": "Goods purchased by households for direct personal consumption that provide utility over several years are Consumer Durable Goods."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When does Domestic Income exceed National Income?",
        "options": [
          "(a) When Net Factor Income from Abroad (NFIA) is positive",
          "(b) When Net Factor Income from Abroad (NFIA) is negative",
          "(c) When Depreciation is zero",
          "(d) When Net Indirect Tax is negative"
        ],
        "answer": "(b) When Net Factor Income from Abroad (NFIA) is negative",
        "explanation": "National Income = Domestic Income + NFIA. If NFIA is negative (i.e., FITA > FIFA), Domestic Income will be greater than National Income."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following transactions is an 'Intermediate Expenditure'?",
        "options": [
          "(a) Flour purchased by a bakery to bake bread",
          "(b) Flour purchased by a housewife to cook dinner",
          "(c) Tractor purchased by a farmer",
          "(d) Air conditioner installed in an office"
        ],
        "answer": "(a) Flour purchased by a bakery to bake bread",
        "explanation": "Flour bought by a bakery is completely transformed and incorporated into bread for resale within the same year, making it an intermediate good."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "National Income is the sum total of factor incomes earned by:",
        "options": [
          "(a) Normal residents of a country during an accounting year",
          "(b) Non-residents living inside the country",
          "(c) Foreign diplomats living in India",
          "(d) All citizens regardless of where they earn"
        ],
        "answer": "(a) Normal residents of a country during an accounting year",
        "explanation": "National income is the net factor income earned by normal residents of a country from productive services, regardless of where they are earned globally."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Consumption of Fixed Capital refers to:",
        "options": [
          "(a) Natural disasters destroying a dam",
          "(b) Fall in the value of fixed assets due to normal wear and tear and expected obsolescence",
          "(c) Purchase of raw material",
          "(d) Fall in market share prices"
        ],
        "answer": "(b) Fall in the value of fixed assets due to normal wear and tear and expected obsolescence",
        "explanation": "Consumption of fixed capital (depreciation) is the normal anticipated loss of value of capital assets during the production process due to wear, tear, and predictable technological obsolescence."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If Market Price equals Factor Cost, what must be the value of Net Indirect Taxes?",
        "options": [
          "(a) Positive",
          "(b) Negative",
          "(c) Zero",
          "(d) Greater than GDP"
        ],
        "answer": "(c) Zero",
        "explanation": "Since Market Price = Factor Cost + Net Indirect Taxes, if Market Price equals Factor Cost, NIT must be zero (Indirect Taxes = Subsidies)."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following is NOT included in Net Factor Income from Abroad (NFIA)?",
        "options": [
          "(a) Net compensation of employees",
          "(b) Net income from property and entrepreneurship",
          "(c) Net retained earnings of resident companies abroad",
          "(d) Unilateral flood relief aid received from foreign governments"
        ],
        "answer": "(d) Unilateral flood relief aid received from foreign governments",
        "explanation": "Disaster relief aid is a transfer payment, not factor income; NFIA includes only factor earnings (wages, rent, interest, profit, retained earnings)."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "The basis of classification between 'Final Goods' and 'Intermediate Goods' is:",
        "options": [
          "(a) The physical nature of the good",
          "(b) The end-use of the good",
          "(c) The retail price of the good",
          "(d) The weight of the good"
        ],
        "answer": "(b) The end-use of the good",
        "explanation": "End-use determines classification: if used for final consumption or capital investment, it is a final good; if used for resale or input in production, it is an intermediate good."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Which of the following is a component of 'Gross Domestic Capital Formation'?",
        "options": [
          "(a) Gross Fixed Capital Formation + Change in Stock (Inventory Investment)",
          "(b) Personal Consumption Expenditure",
          "(c) Export of services",
          "(d) Net Indirect Taxes"
        ],
        "answer": "(a) Gross Fixed Capital Formation + Change in Stock (Inventory Investment)",
        "explanation": "Gross Domestic Capital Formation (Total Investment) = Gross Fixed Capital Formation (plant, buildings, machinery) + Change in Stock (Closing Stock - Opening Stock)."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Branch of an Indian commercial bank (e.g., State Bank of India) operating in London is part of the:",
        "options": [
          "(a) Domestic territory of India",
          "(b) Domestic territory of the United Kingdom",
          "(c) International territory",
          "(d) United Nations territory"
        ],
        "answer": "(b) Domestic territory of the United Kingdom",
        "explanation": "Commercial bank branches, unlike political embassies, do not enjoy diplomatic extraterritoriality; an SBI branch in London lies within the economic/domestic territory of the UK."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Scholarships awarded to merit students by the government are:",
        "options": [
          "(a) Factor income earned for studying",
          "(b) Transfer payment and excluded from domestic and national income",
          "(c) Part of GDP_FC",
          "(d) Intermediate consumption"
        ],
        "answer": "(b) Transfer payment and excluded from domestic and national income",
        "explanation": "Scholarships are unearned unilateral transfer payments without any reciprocal productive output, hence excluded from national and domestic income."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In a simple two-sector circular flow model without government and foreign trade:",
        "options": [
          "(a) Total Production = Total Factor Income = Total Expenditure",
          "(b) Total Income is always greater than Production",
          "(c) Expenditure is zero",
          "(d) Savings are mandatory by law"
        ],
        "answer": "(a) Total Production = Total Factor Income = Total Expenditure",
        "explanation": "In a closed two-sector circular flow economy, the value of total output produced equals the total factor income generated, which in turn equals total consumption expenditure."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Intermediate goods are excluded from the estimation of National Income.\nReason (R): Including intermediate goods in national income alongside final goods causes the error of 'Double Counting'.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Intermediate goods are already embedded in the final value of output; adding them separately counts their value multiple times."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): National Income is a broader concept than Domestic Income.\nReason (R): National Income includes Net Factor Income from Abroad (NFIA), incorporating the factor earnings of all normal residents regardless of geographical location.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. National Income measures earnings of normal residents globally, whereas domestic income measures income within the domestic geographical boundary."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Capital loss and depreciation are identical concepts in macroeconomics.\nReason (R): Both represent the loss of value of fixed capital assets during a given year.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is false but (R) is true",
          "(d) (A) is true but (R) is false"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Depreciation is anticipated loss due to wear and tear provided for via reserves; Capital loss is unanticipated destruction (floods, fires) not covered by depreciation."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Transfer earnings are not included in National Income.\nReason (R): Transfer payments do not involve any corresponding production of goods or services in the economy.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. National income accounts only for productive factor payments; unearned transfer payments are omitted."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Milk purchased by a household is a final good, whereas milk purchased by a sweet maker is an intermediate good.\nReason (R): The classification of a good as final or intermediate depends strictly on its end-use.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. End-use governs classification: household consumption ends the production boundary, while restaurant use represents intermediate transformation."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Distinguish between 'Final Goods' and 'Intermediate Goods' on any three bases. [3 Marks]",
        "answer": "Distinction on Meaning/End-use, Production boundary, and Inclusion in National Income.",
        "explanation": "Marking Scheme (1 Mark per basis):\n• 1. Meaning & End-Use: Final goods are meant for final consumption by households or investment by firms. Intermediate goods are used as raw materials in production or for resale during the same year.\n• 2. Production Boundary: Final goods have crossed the production boundary and are ready for use. Intermediate goods remain within the production boundary.\n• 3. National Income Treatment: Final goods are included in the estimation of National Income. Intermediate goods are excluded to avoid double counting."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Differentiate between 'Stock' and 'Flow' variables with two examples of each. [3 Marks]",
        "answer": "Stock measured at a point in time; Flow measured over a period of time.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Stock: A variable measured at a particular point in time. It has no time dimension. Examples: National wealth on 31st March, capital stock in a factory, balance in a bank account.\n• 2. Flow: A variable measured over a period of time (per hour, per month, per year). It has a time dimension. Examples: National income, monthly salary, annual capital depreciation, investment."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the concept of 'Consumption of Fixed Capital' (Depreciation) and distinguish it from 'Capital Loss'. [3 Marks]",
        "answer": "Depreciation is expected wear and tear; Capital loss is unforeseen accidental destruction.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Consumption of Fixed Capital (Depreciation): The anticipated fall in the value of fixed capital assets due to normal wear and tear, passage of time, or expected technological obsolescence. Provided for through a Depreciation Reserve Fund.\n• 2. Capital Loss: The unexpected, unforeseen loss of value of capital assets caused by natural disasters (earthquakes, floods), fire, or sudden economic crashes. It is not provided for by depreciation reserves (covered by insurance)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the 'Circular Flow of Income' in a simple two-sector economy with the help of a neat diagram. [3 Marks]",
        "answer": "Real flow of factor services and goods; Money flow of factor payments and consumption expenditure.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks diagrammatic explanation):\n• Concept: In a two-sector closed economy (Households and Firms):\n  1. Real Flow: Households supply factor services (land, labor, capital, enterprise) to firms; firms produce goods and services and supply them to households.\n  2. Money Flow: Firms pay factor incomes (rent, wages, interest, profit) to households; households spend this income on consumption expenditure buying goods from firms.\n• Equilibrium: Total Factor Income = Total Production Output = Total Consumption Expenditure."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "State whether the following are included in the 'Domestic Territory' of India. Give reasons: [3 Marks]\n(a) Indian Embassy located in Beijing, China.\n(b) Microsoft corporate office located in Bengaluru, India.\n(c) Russian Embassy located in Chanakyapuri, New Delhi.",
        "answer": "(a) Yes, included; (b) Yes, included; (c) No, excluded.",
        "explanation": "Marking Scheme (1 Mark each with reason):\n• (a) Indian Embassy in Beijing: YES, included. Embassies and consulates located abroad are legally and economically part of the domestic territory of the home nation.\n• (b) Microsoft Office in Bengaluru: YES, included. It is physically located within the geographical boundaries of India and operates under Indian sovereignty.\n• (c) Russian Embassy in New Delhi: NO, excluded. Foreign embassies located within India are extraterritorial enclaves forming part of the domestic territory of their respective foreign home countries."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Distinguish between 'Factor Income' and 'Transfer Income' with two examples of each. [3 Marks]",
        "answer": "Factor income is earned for productive services; Transfer income is unearned unilateral receipt.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Factor Income: Income earned by owners of factors of production for rendering productive factor services in the production process. Included in national income. Examples: Wages and salaries, rent, interest, profit.\n• 2. Transfer Income: Unilateral, unearned receipts received without rendering any productive service in return. Excluded from national income. Examples: Old-age pensions, unemployment allowances, gifts, pocket money."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "What is 'Net Factor Income from Abroad' (NFIA)? Name its three core components. [3 Marks]",
        "answer": "Difference between factor income from abroad and paid abroad; Components: Net compensation of employees, Net property/entrepreneurial income, Net retained earnings.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks components):\n• Concept: NFIA is the difference between factor income received by normal residents of a country from the rest of the world (FIFA) and factor income paid to non-residents within the domestic territory (FITA).\n• Three Components:\n  1. Net compensation of employees.\n  2. Net income from property and entrepreneurship (rent, interest, dividends).\n  3. Net retained earnings of resident companies operating abroad."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "From the following data, calculate 'Net Domestic Product at Factor Cost' (NDP_FC): [3 Marks]\nParticulars | Amount (₹ Crore)\nGross National Product at Market Price (GNP_MP) | 8,500\nConsumption of Fixed Capital (Depreciation) | 500\nNet Indirect Taxes (NIT) | 700\nNet Factor Income from Abroad (NFIA) | 200",
        "answer": "NDP_FC = ₹7,100 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• Formula: NDP_FC = GNP_MP - Depreciation - NFIA - Net Indirect Taxes [1 Mark]\n• Substitution: NDP_FC = ₹8,500 - ₹500 - ₹200 - ₹700 [1 Mark]\n• Calculation: NDP_FC = ₹7,100 Crore. [1 Mark]"
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Explain 'Gross Investment' and 'Net Investment'. What is the relationship between the two? [3 Marks]",
        "answer": "Gross investment includes total additions to capital; Net investment equals gross investment minus depreciation.",
        "explanation": "Marking Scheme:\n• Concepts [2 Marks]:\n  - Gross Investment: Total physical additions to the capital stock of the economy during an accounting year, including expenditures on new machinery and inventory additions before deducting depreciation.\n  - Net Investment: The actual net addition to the capital stock of an economy during an accounting year after accounting for depreciation.\n• Relationship [1 Mark]: Net Investment = Gross Investment - Consumption of Fixed Capital (Depreciation)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "State the conditions under which a person is treated as a 'Normal Resident' of a country. [3 Marks]",
        "answer": "Ordinary residence for one year or more; Center of economic interest lies in that country.",
        "explanation": "Marking Scheme (1.5 Marks per condition):\n• 1. Period of Residence: An individual (or institution) must ordinarily reside in the country for a period of one year or more.\n• 2. Center of Economic Interest: The individual's center of economic interest must lie in that country (i.e., the person carries out their basic economic activities—earning, spending, and accumulation—within that economic territory)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Calculate (a) Domestic Income (NDP_FC) and (b) National Income (NNP_FC) from the following information: [6 Marks]\nParticulars | ₹ in Crore\n1. Gross Domestic Product at Market Price (GDP_MP) | 12,000\n2. Consumption of Fixed Capital | 1,200\n3. Indirect Taxes | 1,500\n4. Subsidies | 300\n5. Factor Income received from Abroad | 800\n6. Factor Income paid to Abroad | 1,000",
        "answer": "(a) Domestic Income (NDP_FC) = ₹9,600 Crore; (b) National Income (NNP_FC) = ₹9,400 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• 1. Calculate Net Indirect Taxes (NIT) [1 Mark]:\n  NIT = Indirect Taxes (₹1,500) - Subsidies (₹300) = ₹1,200 Crore.\n• 2. Calculate Net Factor Income from Abroad (NFIA) [1 Mark]:\n  NFIA = Factor Income from Abroad (₹800) - Factor Income to Abroad (₹1,000) = -₹200 Crore.\n• 3. Calculate Domestic Income (NDP_FC) [2 Marks]:\n  NDP_FC = GDP_MP - Consumption of Fixed Capital - Net Indirect Taxes [1 Mark]\n  NDP_FC = ₹12,000 - ₹1,200 - ₹1,200 = ₹9,600 Crore. [1 Mark]\n• 4. Calculate National Income (NNP_FC) [2 Marks]:\n  NNP_FC = NDP_FC + NFIA [1 Mark]\n  NNP_FC = ₹9,600 + (-₹200) = ₹9,400 Crore. [1 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "State giving valid economic reasons whether the following transactions will be included in the 'Domestic Factor Income' of India: [6 Marks]\n(a) Profits earned by a branch of State Bank of India in New York.\n(b) Salaries received by Indian technical experts working temporarily in the US Embassy in New Delhi.\n(c) Profits earned by a foreign bank branch (HSBC) operating in Mumbai.\n(d) Rent received by an Indian resident from property owned in London.\n(e) Financial assistance given by the government to earthquake victims in Gujarat.\n(f) Remuneration paid to Japanese engineers working in a Japanese automobile joint-venture factory in Gurugram.",
        "answer": "(a) No; (b) No; (c) Yes; (d) No; (e) No; (f) Yes.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each with reason):\n• (a) Profits of SBI branch in New York: NO. It is earned outside the domestic territory of India (earned within the economic territory of the USA). [1 Mark]\n• (b) Salaries of Indians in US Embassy in New Delhi: NO. The US Embassy is part of the domestic territory of the United States, not India. [1 Mark]\n• (c) Profits of foreign bank HSBC in Mumbai: YES. It is earned inside the domestic geographical/economic territory of India. [1 Mark]\n• (d) Rent from property in London: NO. It is located outside India's domestic territory (forms part of factor income from abroad in national income, but not domestic income). [1 Mark]\n• (e) Financial assistance to earthquake victims: NO. It is a unilateral transfer payment, not a factor income. [1 Mark]\n• (f) Remuneration paid to Japanese engineers in Gurugram: YES. Factor income generated inside India's domestic territory, regardless of whether earned by residents or non-residents. [1 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Explain the concept of 'Circular Flow of Income' across its three phases: Generation, Distribution, and Disposition. How do these three phases establish the equality: Production = Income = Expenditure? [6 Marks]",
        "answer": "Detailed breakdown of Generation (Production of goods), Distribution (Flow of factor incomes), and Disposition (Consumption/Investment expenditure); proof of Triple Identity.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks per phase + 1.5 Marks for equality):\n• 1. Generation Phase (Production Phase) [1.5 Marks]:\n  Firms hire factor services from households to produce goods and services. In this phase, physical value is added through manufacturing and service activities.\n• 2. Distribution Phase (Income Phase) [1.5 Marks]:\n  The value added generated in the production phase is converted into monetary factor incomes (rent, wages, interest, profit) and distributed to household owners of factor services.\n• 3. Disposition Phase (Expenditure Phase) [1.5 Marks]:\n  Households spend the factor incomes received on final goods and services produced by firms (consumption expenditure and capital goods investment), channeling money back to firms.\n• 4. The Triple Identity [1.5 Marks]:\n  Production generates income; income generates expenditure; expenditure finances production. Therefore, in an economy: Value of Output = Value of Factor Income = Value of Total Expenditure."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Given the following macroeconomic aggregates, calculate: [6 Marks]\n(a) Gross Domestic Product at Factor Cost (GDP_FC)\n(b) Net National Product at Market Price (NNP_MP)\nData:\nNational Income (NNP_FC) = ₹18,000 Crore\nConsumption of Fixed Capital = ₹1,500 Crore\nSubsidies = ₹400 Crore\nGoods and Services Tax (GST) = ₹1,800 Crore\nNet Factor Income from Abroad = -₹300 Crore",
        "answer": "(a) GDP_FC = ₹19,800 Crore; (b) NNP_MP = ₹19,400 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• Preliminary Calculations [1.5 Marks]:\n  - Net Indirect Taxes (NIT) = GST (₹1,800) - Subsidies (₹400) = ₹1,400 Crore. [0.75 Mark]\n  - NFIA = -₹300 Crore. [0.75 Mark]\n• (a) Calculate GDP_FC [2.5 Marks]:\n  - NDP_FC = NNP_FC - NFIA = ₹18,000 - (-₹300) = ₹18,300 Crore. [1.25 Marks]\n  - GDP_FC = NDP_FC + Consumption of Fixed Capital = ₹18,300 + ₹1,500 = ₹19,800 Crore. [1.25 Marks]\n• (b) Calculate NNP_MP [2 Marks]:\n  - NNP_MP = NNP_FC + Net Indirect Taxes [1 Mark]\n  - NNP_MP = ₹18,000 + ₹1,400 = ₹19,400 Crore. [1 Mark]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Explain the following concepts with suitable illustrations: [6 Marks]\n(a) Domestic Territory of a Country\n(b) Normal Resident\n(c) Net Factor Income from Abroad (NFIA)",
        "answer": "Comprehensive conceptual and legal analysis of Domestic Territory, Normal Resident, and NFIA.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Domestic Territory [2 Marks]:\n  - In economic terms, it is the geographical territory administered by a government within which persons, goods, and capital circulate freely. It includes national land, air space, territorial waters, embassies/consulates abroad, and domestic ships/aircraft operating in international waters.\n• (b) Normal Resident [2 Marks]:\n  - An individual or institution who ordinarily resides in a country for one year or more and whose center of economic interest lies in that country (conducting their basic earning, spending, and saving within that country).\n• (c) Net Factor Income from Abroad [2 Marks]:\n  - The net difference between factor income earned by normal residents of a country from the rest of the world (wages, rent, interest, profit) and factor income paid to non-residents within the domestic economic territory."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Classify the following into 'Intermediate Goods' and 'Final Goods'. Give reasons for your classification: [6 Marks]\n(a) Milk purchased by a school cafeteria to prepare milkshakes for sale to students.\n(b) Furniture purchased by a school for its classrooms.\n(c) Petrol purchased by a delivery boy for his personal bike used in food deliveries.\n(d) Computers purchased by an engineering college for its student computer lab.\n(e) Chalk, dusters, and stationery purchased by a coaching institute.\n(f) Sewing machine purchased by a housewife for stitching family clothes.",
        "answer": "(a) Intermediate; (b) Final (Capital); (c) Intermediate; (d) Final (Capital); (e) Intermediate; (f) Final (Consumer Durable).",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each with reason):\n• (a) Milk for school cafeteria: INTERMEDIATE GOOD. Used as an input for resale/transformation in food preparation during the same year. [1 Mark]\n• (b) Furniture purchased by school: FINAL CAPITAL GOOD. Used repeatedly over multiple years as fixed assets, not meant for resale. [1 Mark]\n• (c) Petrol for delivery bike: INTERMEDIATE GOOD. Consumed as an operational fuel expense in rendering commercial delivery services. [1 Mark]\n• (d) Computers for college lab: FINAL CAPITAL GOOD. Acts as a fixed capital asset used over multiple academic years. [1 Mark]\n• (e) Chalk and stationery for coaching: INTERMEDIATE GOOD. Single-use operational supplies completely consumed within the year. [1 Mark]\n• (f) Sewing machine for housewife: FINAL CONSUMER DURABLE GOOD. Purchased by a household for direct family use. [1 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Calculate 'Gross Domestic Product at Market Price' (GDP_MP) and 'National Income' (NNP_FC) from the following: [6 Marks]\nParticulars | ₹ in Crore\nNet Domestic Product at Factor Cost (NDP_FC) | 25,000\nSubsidies | 500\nGoods and Services Tax | 2,500\nDepreciation | 2,000\nFactor Income to Abroad | 800\nFactor Income from Abroad | 600",
        "answer": "GDP_MP = ₹29,000 Crore; National Income (NNP_FC) = ₹24,800 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• Preliminary Calculations [1.5 Marks]:\n  - Net Indirect Taxes (NIT) = GST (₹2,500) - Subsidies (₹500) = ₹2,000 Crore. [0.75 Mark]\n  - NFIA = FIFA (₹600) - FITA (₹800) = -₹200 Crore. [0.75 Mark]\n• 1. Calculate GDP_MP [2.5 Marks]:\n  - GDP_MP = NDP_FC + Depreciation + Net Indirect Taxes [1.25 Marks]\n  - GDP_MP = ₹25,000 + ₹2,000 + ₹2,000 = ₹29,000 Crore. [1.25 Marks]\n• 2. Calculate National Income (NNP_FC) [2 Marks]:\n  - NNP_FC = NDP_FC + NFIA [1 Mark]\n  - NNP_FC = ₹25,000 + (-₹200) = ₹24,800 Crore. [1 Mark]"
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "State giving reasons whether the following will be included in the 'National Income' of India: [6 Marks]\n(a) Earnings of an Indian software engineer working in Google's headquarters in California for 3 months on a deputation visa.\n(b) Compensation received by an injured laborer under Workmen's Compensation Act.\n(c) Dividends received by an Indian shareholder from an American company.\n(d) Old-age pensions paid by the Delhi government.\n(e) Purchase of second-hand machinery by a factory owner.\n(f) Imputed rent of self-occupied residential building.",
        "answer": "(a) Yes; (b) No; (c) Yes; (d) No; (e) No; (f) Yes.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each with reason):\n• (a) Software engineer's 3-month earnings in California: YES. He remains a normal resident of India temporarily abroad; his earnings form part of NFIA in National Income. [1 Mark]\n• (b) Workmen's compensation: NO. It is a unilateral transfer compensation payment, not factor income. [1 Mark]\n• (c) Dividends from American company: YES. It is factor income from property/shares received from abroad by a normal resident. [1 Mark]\n• (d) Old-age pension: NO. It is a unilateral transfer payment granted without productive contribution. [1 Mark]\n• (e) Purchase of second-hand machinery: NO. Value was already counted in the year of original manufacture; including it again would cause double counting. [1 Mark]\n• (f) Imputed rent of self-occupied house: YES. Provides continuous productive housing services; imputed rental value must be included. [1 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Explain the inter-relationships and conversions among the following eight national income aggregates: [6 Marks]\nGDP_MP, GDP_FC, NDP_MP, NDP_FC, GNP_MP, GNP_FC, NNP_MP, and NNP_FC.",
        "answer": "Comprehensive structural derivation showing Gross/Net (Depreciation), Domestic/National (NFIA), and Market Price/Factor Cost (NIT) conversion bridges.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks per conversion bridge):\n• 1. Gross to Net Transition (Consumption of Fixed Capital) [2 Marks]:\n  - Net = Gross - Depreciation\n  - e.g., NDP_MP = GDP_MP - Depreciation; NNP_FC = GNP_FC - Depreciation.\n• 2. Domestic to National Transition (Net Factor Income from Abroad) [2 Marks]:\n  - National = Domestic + NFIA\n  - e.g., GNP_MP = GDP_MP + NFIA; NNP_FC = NDP_FC + NFIA.\n• 3. Market Price to Factor Cost Transition (Net Indirect Taxes) [2 Marks]:\n  - Factor Cost = Market Price - Net Indirect Taxes (where NIT = Indirect Taxes - Subsidies)\n  - e.g., GDP_FC = GDP_MP - NIT; NNP_FC = NNP_MP - NIT."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Differentiate between: [6 Marks]\n(a) Real Flow and Money Flow\n(b) Domestic Income and National Income\n(c) Gross Investment and Net Investment",
        "answer": "Detailed comparative analysis of Real/Money Flow, Domestic/National Income, and Gross/Net Investment.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Real Flow vs Money Flow [2 Marks]:\n  - Real Flow: Exchange of physical factor services (labor, land) and physical finished goods between households and firms without monetary intervention.\n  - Money Flow: Exchange of monetary payments (factor incomes and consumption expenditures) flowing in the opposite direction of real flows.\n• (b) Domestic Income vs National Income [2 Marks]:\n  - Domestic Income (NDP_FC): Total factor income earned within the geographical domestic territory of a country by all producers (residents and non-residents).\n  - National Income (NNP_FC): Total factor income earned by normal residents of a country worldwide (Domestic Income + NFIA).\n• (c) Gross Investment vs Net Investment [2 Marks]:\n  - Gross Investment: Total capital expenditure on new fixed assets and inventory before deducting depreciation.\n  - Net Investment: Actual net addition to the existing physical capital stock of the economy (Gross Investment minus Depreciation)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 2,
      "book": "Part A: Introductory Macroeconomics",
      "title": "Measurement of National Income",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 1: National Income and Related Aggregates (10 Marks combined with Ch 1)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following items is included under 'Operating Surplus' in the Income Method?",
        "options": [
          "(a) Wages and Salaries in cash",
          "(b) Rent, Royalty, Interest, and Profits",
          "(c) Employers' contribution to social security schemes",
          "(d) Old-age pensions"
        ],
        "answer": "(b) Rent, Royalty, Interest, and Profits",
        "explanation": "Operating Surplus is the factor income earned from ownership of property and entrepreneurship, comprising Rent, Royalty, Interest, and Profits (Dividends + Corporate Tax + Retained Earnings)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In the Value Added Method, Gross Value Added at Market Price (GVA_MP) is equal to:",
        "options": [
          "(a) Value of Output + Intermediate Consumption",
          "(b) Value of Output - Intermediate Consumption",
          "(c) Sales - Purchases",
          "(d) Net Value Added + Subsidies"
        ],
        "answer": "(b) Value of Output - Intermediate Consumption",
        "explanation": "GVA_MP = Value of Output - Intermediate Consumption (where Value of Output = Sales + Change in Stock)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "If Nominal GDP is ₹1,200 crore and the Price Index (GDP Deflator) is 120, what is the Real GDP?",
        "options": [
          "(a) ₹1,000 crore",
          "(b) ₹1,440 crore",
          "(c) ₹900 crore",
          "(d) ₹1,100 crore"
        ],
        "answer": "(a) ₹1,000 crore",
        "explanation": "Real GDP = (Nominal GDP / Price Index) × 100 = (₹1,200 / 120) × 100 = ₹1,000 crore."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following is considered an 'Externalities' limitation of GDP as an index of welfare?",
        "options": [
          "(a) Black money transactions",
          "(b) Pollution and environmental degradation caused by industrial factories for which no penalty is paid",
          "(c) Capital depreciation",
          "(d) Foreign exchange fluctuations"
        ],
        "answer": "(b) Pollution and environmental degradation caused by industrial factories for which no penalty is paid",
        "explanation": "Negative externalities like industrial air and water pollution cause harm to society without being penalized or subtracted from GDP, leading GDP to overstate social welfare."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In the Expenditure Method, 'Gross Domestic Capital Formation' (GDCF) is calculated as:",
        "options": [
          "(a) Gross Fixed Capital Formation + Change in Stock",
          "(b) Net Fixed Capital Formation - Depreciation",
          "(c) Personal Consumption + Imports",
          "(d) Gross Exports - Net Indirect Taxes"
        ],
        "answer": "(a) Gross Fixed Capital Formation + Change in Stock",
        "explanation": "GDCF represents total physical investment in the economy, comprising Gross Fixed Capital Formation (business fixed investment, residential construction, public infrastructure) plus Change in Stock (inventory investment)."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Brokerage or commission paid on the sale and purchase of second-hand goods is:",
        "options": [
          "(a) Excluded from National Income because second-hand goods are excluded",
          "(b) Included in National Income because it is a reward for productive brokerage services rendered",
          "(c) Treated as a transfer payment",
          "(d) Deducted from GDP"
        ],
        "answer": "(b) Included in National Income because it is a reward for productive brokerage services rendered",
        "explanation": "While the sale value of second-hand goods is excluded (already counted in year of manufacture), the commission or brokerage paid to agents is a fresh reward for productive intermediation services and is included in national income."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Compensation of Employees (COE) includes all of the following EXCEPT:",
        "options": [
          "(a) Wages and salaries paid in cash",
          "(b) Free housing and medical facilities provided to workers",
          "(c) Employers' contribution to Provident Fund",
          "(d) Employees' own contribution to Provident Fund out of their take-home wages"
        ],
        "answer": "(d) Employees' own contribution to Provident Fund out of their take-home wages",
        "explanation": "Employees' contribution to PF is paid out of their already-received wages; adding it again would cause double counting. Only the employer's contribution is added."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Real GDP is calculated using prices of:",
        "options": [
          "(a) The current accounting year",
          "(b) A designated constant base year",
          "(c) The next financial year",
          "(d) The international market"
        ],
        "answer": "(b) A designated constant base year",
        "explanation": "Real GDP measures physical volume of output valued at fixed, constant base-year prices, eliminating the distorting effect of inflation."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "A farmer sells wheat to a flour mill for ₹500. The mill converts it into flour and sells it to a baker for ₹700. The baker bakes bread and sells it to consumers for ₹1,000. What is the total Value Added in this chain?",
        "options": [
          "(a) ₹2,200",
          "(b) ₹1,000",
          "(c) ₹1,200",
          "(d) ₹500"
        ],
        "answer": "(b) ₹1,000",
        "explanation": "Total Value Added = Farmer (₹500) + Mill (₹700 - ₹500 = ₹200) + Baker (₹1,000 - ₹700 = ₹300) = ₹500 + ₹200 + ₹300 = ₹1,000 (which exactly equals the final value of bread)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following is an example of a 'Non-Monetary Exchange' omitted from GDP?",
        "options": [
          "(a) Services rendered by a homemaker for her family",
          "(b) Services rendered by a paid domestic chef",
          "(c) Food served in a luxury restaurant",
          "(d) Ready-made meals ordered via food delivery apps"
        ],
        "answer": "(a) Services rendered by a homemaker for her family",
        "explanation": "Household services performed out of love, care, and duty by family members do not pass through the market and lack reliable price data, leading to an understatement of GDP."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Profits of corporate enterprises consist of:",
        "options": [
          "(a) Dividends + Corporate Tax + Undistributed Profits (Retained Earnings)",
          "(b) Rent + Wages + Interest",
          "(c) Subsidies + Depreciation",
          "(d) Sales - Purchases"
        ],
        "answer": "(a) Dividends + Corporate Tax + Undistributed Profits (Retained Earnings)",
        "explanation": "Corporate Profit = Distributed Profit (Dividends) + Corporate Tax + Undistributed Profit / Retained Earnings."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which method of estimating National Income measures income at the stage of disposition?",
        "options": [
          "(a) Product Method",
          "(b) Value Added Method",
          "(c) Expenditure Method",
          "(d) Income Method"
        ],
        "answer": "(c) Expenditure Method",
        "explanation": "The Expenditure Method measures national income at the disposition stage, calculating total final spending on consumption and investment."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The problem of 'Double Counting' can be avoided by:",
        "options": [
          "(a) Counting only the value of final goods, or summing the value added at each stage of production",
          "(b) Adding all intermediate goods",
          "(c) Ignoring industrial production",
          "(d) Counting sales twice"
        ],
        "answer": "(a) Counting only the value of final goods, or summing the value added at each stage of production",
        "explanation": "Double counting is eliminated either by taking the value of final output only, or by taking only the net value added (Value of Output - Intermediate Consumption) at each production phase."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "If Real GDP is ₹500 crore and the Price Index is 150, what is the Nominal GDP?",
        "options": [
          "(a) ₹750 crore",
          "(b) ₹333.33 crore",
          "(c) ₹650 crore",
          "(d) ₹800 crore"
        ],
        "answer": "(a) ₹750 crore",
        "explanation": "Nominal GDP = (Real GDP × Price Index) / 100 = (₹500 × 150) / 100 = ₹750 crore."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Windfall gains from lotteries, horse racing, and gambling are:",
        "options": [
          "(a) Included in National Income as entrepreneurial profit",
          "(b) Excluded from National Income because they do not arise from any productive activity",
          "(c) Included in GDP_MP only",
          "(d) Treated as factor income"
        ],
        "answer": "(b) Excluded from National Income because they do not arise from any productive activity",
        "explanation": "Lottery winnings and gambling gains are transfer receipts without any productive contribution to economic output, hence excluded from national income."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Imputed rent of self-occupied residential houses is:",
        "options": [
          "(a) Included in National Income because housing provides continuous productive shelter services",
          "(b) Excluded because no actual cash rent is paid",
          "(c) Deducted from GDP",
          "(d) Treated as intermediate consumption"
        ],
        "answer": "(a) Included in National Income because housing provides continuous productive shelter services",
        "explanation": "Owner-occupied houses yield shelter services equivalent to rented homes; their estimated rental value (imputed rent) must be included in national income."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "'Change in Stock' is calculated as:",
        "options": [
          "(a) Opening Stock - Closing Stock",
          "(b) Closing Stock - Opening Stock",
          "(c) Total Purchases - Sales",
          "(d) Net Imports - Exports"
        ],
        "answer": "(b) Closing Stock - Opening Stock",
        "explanation": "Change in Stock (Inventory Investment) = Closing Stock of finished, semi-finished, and raw materials minus Opening Stock."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following is a 'Positive Externality'?",
        "options": [
          "(a) Smoke from an oil refinery polluting a neighboring residential colony",
          "(b) A beautiful public flower park maintained by a private corporation that provides fresh air and recreation to residents without any charge",
          "(c) Loud noise from a marriage banquet hall",
          "(d) Chemical effluents poured into a river"
        ],
        "answer": "(b) A beautiful public flower park maintained by a private corporation that provides fresh air and recreation to residents without any charge",
        "explanation": "A positive externality provides external benefits to the community for which the provider receives no payment, leading GDP to understate true social welfare."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In the Expenditure Method, if 'Net Imports' are given as ₹50 crore, how will they be treated while calculating GDP_MP?",
        "options": [
          "(a) Added to GDP_MP",
          "(b) Subtracted as -₹50 crore",
          "(c) Multiplied by 2",
          "(d) Ignored completely"
        ],
        "answer": "(b) Subtracted as -₹50 crore",
        "explanation": "Net Exports = Exports - Imports = -(Net Imports). Since Net Imports are +₹50 crore, Net Exports are -₹50 crore, which must be subtracted."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Mixed Income of the Self-Employed refers to:",
        "options": [
          "(a) Earnings of unincorporated own-account enterprises (doctors, farmers, barbers) where wages, rent, interest, and profit cannot be separated",
          "(b) Income from illegal smuggling",
          "(c) Income of foreign tourists",
          "(d) Dividends from shares"
        ],
        "answer": "(a) Earnings of unincorporated own-account enterprises (doctors, farmers, barbers) where wages, rent, interest, and profit cannot be separated",
        "explanation": "Self-employed individuals utilize their own labor, land, and capital; their total earnings combine wages, rent, interest, and profit into an indivisible 'Mixed Income'."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "The GDP Deflator is also known as:",
        "options": [
          "(a) Wholesale Price Index (WPI)",
          "(b) Implicit Price Deflator",
          "(c) Consumer Price Index (CPI)",
          "(d) Production Index"
        ],
        "answer": "(b) Implicit Price Deflator",
        "explanation": "The GDP Deflator is also termed the Implicit Price Deflator, measuring the average price level of all domestically produced final goods and services."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Which of the following is EXCLUDED from the estimation of National Income by the Expenditure Method?",
        "options": [
          "(a) Government expenditure on defense fighter jets",
          "(b) Expenditure incurred on purchasing second-hand machinery",
          "(c) Household expenditure on food and medicine",
          "(d) Business investment in new factory buildings"
        ],
        "answer": "(b) Expenditure incurred on purchasing second-hand machinery",
        "explanation": "Expenditure on second-hand goods represents a transfer of existing assets, not current production; including it would count output twice."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "If an economy's GDP increases purely due to a rise in general price level (inflation) without any increase in physical output, which GDP has increased?",
        "options": [
          "(a) Real GDP",
          "(b) Nominal GDP",
          "(c) Net National Product at Factor Cost",
          "(d) Welfare Index"
        ],
        "answer": "(b) Nominal GDP",
        "explanation": "Nominal GDP is evaluated at current market prices; when prices rise without physical production growth, Nominal GDP inflates artificially."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Production of goods for self-consumption (e.g., wheat retained by a farmer for family food) is:",
        "options": [
          "(a) Included in National Income at estimated market value",
          "(b) Excluded because no money changed hands",
          "(c) Treated as a transfer payment",
          "(d) Deducted from GVA_MP"
        ],
        "answer": "(a) Included in National Income at estimated market value",
        "explanation": "Self-consumed output contributes directly to the current physical flow of goods; its imputed market value must be included in national income."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following describes the limitation of 'Distribution of GDP' on social welfare?",
        "options": [
          "(a) If GDP rises but the increase is concentrated among a few billionaires while poverty worsens, social welfare may decline despite GDP growth",
          "(b) GDP cannot be divided mathematically",
          "(c) Distribution is forbidden by law",
          "(d) Only governments distribute GDP"
        ],
        "answer": "(a) If GDP rises but the increase is concentrated among a few billionaires while poverty worsens, social welfare may decline despite GDP growth",
        "explanation": "A rise in aggregate GDP fails to reflect true social well-being if economic gains are skewed toward the rich, deepening poverty and inequality."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Real GDP is considered a better indicator of economic growth than Nominal GDP.\nReason (R): Real GDP eliminates price distortions by measuring physical output at constant base-year prices, rising only when actual physical production increases.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Real GDP strips out inflation, serving as a reliable benchmark of true physical production expansion."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Sale of shares and bonds is included in the estimation of National Income by the Expenditure Method.\nReason (R): Purchase of shares is an investment in productive factory equipment that increases physical output.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Buying shares/bonds is merely a transfer of paper financial claims, not physical capital formation; hence excluded."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): GDP cannot be treated as a perfect index of social welfare.\nReason (R): GDP excludes non-monetary transactions, ignores income distribution, and fails to account for positive and negative externalities.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Non-market exchanges, unequal income distribution, and externalities prevent GDP from accurately measuring welfare."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): The problem of double counting arises when the value of intermediate goods is included alongside final goods.\nReason (R): The value of final goods already incorporates the value of all intermediate goods utilized during production.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Intermediate inputs are embodied in the final price; adding them separately inflates output estimates."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Imputed value of self-consumed agricultural produce is included in National Income.\nReason (R): Self-consumed agricultural output adds to the current physical flow of goods and services in the economy.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Whether sold or retained for family meals, produced grain is productive economic output and is counted."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain the 'Problem of Double Counting' in measuring National Income. How can it be avoided? [3 Marks]",
        "answer": "Counting intermediate inputs repeatedly; avoided by Final Product Method or Value Added Method.",
        "explanation": "Marking Scheme (1.5 Marks for problem + 1.5 Marks for remedies):\n• Problem of Double Counting: Counting the value of a commodity more than once while calculating national income. It occurs when intermediate goods are added along with the final product (e.g., counting the value of wheat, flour, and bread together).\n• Two Ways to Avoid It:\n  1. Final Output Method: Count only the value of final goods and services that enter direct consumption or investment.\n  2. Value Added Method: Sum only the net value added (Value of Output - Intermediate Consumption) at each successive production stage."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Distinguish between 'Real GDP' and 'Nominal GDP'. Which of the two is a better measure of economic growth and why? [3 Marks]",
        "answer": "Real at constant base prices; Nominal at current prices; Real GDP is better as it measures physical output growth.",
        "explanation": "Marking Scheme (1.5 Marks distinction + 1.5 Marks justification):\n• Distinction:\n  - Nominal GDP: Total monetary value of final goods and services produced in an economy valued at current prevailing market prices (affected by both output and inflation).\n  - Real GDP: Total monetary value of final goods and services evaluated at fixed, constant base-year prices (affected only by physical output changes).\n• Superiority of Real GDP: Real GDP is superior because it strips away inflationary price spikes. An increase in Real GDP guarantees an increase in the physical volume of goods available to society."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain 'Compensation of Employees' and its three core components under the Income Method. [3 Marks]",
        "answer": "Total remuneration paid to employees; Components: Wages in cash, Wages in kind, Employers' social security contribution.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks components):\n• Concept: Total remuneration payable by an enterprise to its employees in return for labor services rendered during an accounting period.\n• Three Components:\n  1. Wages and Salaries in Cash: Basic pay, dearness allowance, bonuses, overtime allowances.\n  2. Wages and Salaries in Kind: Non-monetary benefits like free company housing, medical services, free uniforms, and meals.\n  3. Employers' Contribution to Social Security Schemes: Contributions made by employers to provident funds, gratuity funds, and labor welfare insurance."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "From the following information, calculate 'Value of Output': [3 Marks]\nParticulars | ₹ in Lakhs\nNet Value Added at Factor Cost (NVA_FC) | 500\nIntermediate Consumption | 250\nDepreciation | 50\nSubsidies | 20\nGoods and Services Tax (GST) | 70",
        "answer": "Value of Output = ₹850 Lakhs.",
        "explanation": "Step-by-Step Marking Scheme:\n• 1. Calculate Net Indirect Taxes (NIT) = GST (₹70) - Subsidies (₹20) = ₹50 Lakhs. [0.5 Mark]\n• 2. Calculate Gross Value Added at Market Price (GVA_MP):\n  GVA_MP = NVA_FC + Depreciation + NIT = ₹500 + ₹50 + ₹50 = ₹600 Lakhs. [1.5 Marks]\n• 3. Calculate Value of Output:\n  Value of Output = GVA_MP + Intermediate Consumption = ₹600 + ₹250 = ₹850 Lakhs. [1 Mark]"
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain 'Externalities' as a limitation of using GDP as an index of welfare. Give one positive and one negative example. [3 Marks]",
        "answer": "Benefits or harms caused by firms without payment/penalty; Positive: Public park; Negative: Industrial pollution.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks examples):\n• Concept: Externalities refer to benefits or harms that a firm or individual causes to third parties without paying a penalty or receiving compensation. Since these lack market valuations, they are omitted from GDP, making GDP an imperfect welfare index.\n• Positive Externality: A corporate enterprise constructs and maintains a public park that provides health benefits to residents; social welfare increases, but GDP excludes it.\n• Negative Externality: A chemical factory pollutes a river, destroying fish stock and causing waterborne diseases; social welfare drops, but GDP does not subtract this harm."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "State any three precautions that must be observed while estimating National Income using the 'Income Method'. [3 Marks]",
        "answer": "Exclude transfer payments, exclude windfall gains, and include imputed rent of self-occupied property.",
        "explanation": "Marking Scheme (1 Mark each for three precautions):\n• 1. Exclude Transfer Earnings: Unilateral receipts (pensions, gifts, unemployment relief) must be excluded because no productive service is rendered.\n• 2. Exclude Windfall Capital Gains: Earnings from lotteries, horse racing, and speculative capital gains on shares must be excluded as they do not generate output.\n• 3. Include Imputed Rent of Owner-Occupied Property: The estimated rental value of self-occupied houses must be added to factor income as part of operating surplus."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "If Real GDP of an economy is ₹800 crore and Nominal GDP is ₹1,000 crore, calculate the 'GDP Deflator'. What does this deflator indicate? [3 Marks]",
        "answer": "GDP Deflator = 125; Indicates price level rose by 25% since the base year.",
        "explanation": "Step-by-Step Marking Scheme:\n• 1. Formula & Calculation [2 Marks]:\n  GDP Deflator = (Nominal GDP / Real GDP) × 100\n  GDP Deflator = (₹1,000 / ₹800) × 100 = 125.\n• 2. Economic Interpretation [1 Mark]:\n  A GDP Deflator of 125 indicates that the general price level of domestically produced final goods and services has increased by 25% relative to the base year (base year index = 100)."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain 'Operating Surplus'. What are its four core components? [3 Marks]",
        "answer": "Income from property and entrepreneurship; Components: Rent, Royalty, Interest, and Profit.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks components):\n• Concept: Operating surplus is the sum total of factor incomes earned from the ownership of capital assets, real estate, and entrepreneurial risk-taking.\n• Four Components:\n  1. Rent: Income earned from leasing land and residential/commercial buildings.\n  2. Royalty: Income earned from granting rights to exploit mineral reserves, patents, and copyrights.\n  3. Interest: Income earned from lending funds to production enterprises.\n  4. Profit: Residual income earned by entrepreneurs (Dividends + Corporate Tax + Retained Earnings)."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "State any three precautions while estimating National Income by the 'Expenditure Method'. [3 Marks]",
        "answer": "Exclude intermediate expenditure, exclude second-hand goods, and exclude financial assets.",
        "explanation": "Marking Scheme (1 Mark each for three precautions):\n• 1. Exclude Intermediate Expenditure: Only final consumption and investment expenditures must be included; adding intermediate expenses leads to double counting.\n• 2. Exclude Expenditure on Second-Hand Goods: Purchasing used assets does not create fresh current output; only brokerage on such sales is included.\n• 3. Exclude Financial Assets: Spending on shares, bonds, and debentures represents paper asset transfers, not physical investment."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Explain how 'Non-Monetary Exchanges' act as a limitation of GDP as an indicator of welfare. [3 Marks]",
        "answer": "Barter and household unpaid domestic work are omitted, causing GDP to understate welfare.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Prevalence of Non-Monetary Transactions: In developing economies like India, extensive productive activities occur without money changing hands (barter trade in rural villages, household care by women).\n• 2. Exclusion from GDP: Because these transactions lack objective market pricing data, national income accounts omit them.\n• 3. Understatement of Welfare: Omission of extensive household and unpaid community work causes GDP to significantly understate actual economic well-being and productive activity."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "From the following data, calculate: [6 Marks]\n(a) Gross Domestic Product at Market Price (GDP_MP) by Expenditure Method\n(b) National Income (NNP_FC) by Income Method\nData: (₹ in Crore)\n1. Compensation of Employees | 13,300\n2. Private Final Consumption Expenditure | 20,000\n3. Operating Surplus | 5,000\n4. Gross Domestic Capital Formation | 5,500\n5. Net Indirect Taxes | 1,800\n6. Government Final Consumption Expenditure | 4,000\n7. Mixed Income of Self-Employed | 16,100\n8. Net Factor Income from Abroad | 300\n9. Net Exports | -200\n10. Consumption of Fixed Capital (Depreciation) | 1,200",
        "answer": "(a) GDP_MP (Expenditure Method) = ₹29,300 Crore; (b) National Income (NNP_FC) (Income Method) = ₹34,700 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Expenditure Method for GDP_MP [3 Marks]:\n  - Formula: GDP_MP = PFCE + GFCE + GDCF + Net Exports [1 Mark]\n  - Substitution: GDP_MP = ₹20,000 + ₹4,000 + ₹5,500 + (-₹200) [1 Mark]\n  - Calculation: GDP_MP = ₹29,300 Crore. [1 Mark]\n• (b) Income Method for National Income (NNP_FC) [3 Marks]:\n  - Formula: NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income [1 Mark]\n  - NDP_FC = ₹13,300 + ₹5,000 + ₹16,100 = ₹34,400 Crore. [1 Mark]\n  - NNP_FC = NDP_FC + NFIA = ₹34,400 + ₹300 = ₹34,700 Crore. [1 Mark]"
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Calculate 'Gross National Product at Market Price' (GNP_MP) from the following data using: [6 Marks]\n(a) Value Added Method\n(b) Expenditure Method\nData: (₹ in Crore)\n1. Value of Output of Primary Sector | 1,000\n2. Intermediate Consumption of Primary Sector | 400\n3. Value of Output of Secondary Sector | 2,000\n4. Intermediate Consumption of Secondary Sector | 800\n5. Value of Output of Tertiary Sector | 1,500\n6. Intermediate Consumption of Tertiary Sector | 600\n7. Private Final Consumption Expenditure | 1,800\n8. Government Final Consumption Expenditure | 600\n9. Gross Fixed Capital Formation | 500\n10. Change in Stock | 100\n11. Net Imports | 300\n12. Net Factor Income from Abroad | -50",
        "answer": "(a) GNP_MP (Value Added) = ₹2,650 Crore; (b) GNP_MP (Expenditure) = ₹2,650 Crore (Reconciled).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks per method):\n• (a) Value Added Method [3 Marks]:\n  - GVA_MP Primary = ₹1,000 - ₹400 = ₹600 Crore [0.75 Mark]\n  - GVA_MP Secondary = ₹2,000 - ₹800 = ₹1,200 Crore [0.75 Mark]\n  - GVA_MP Tertiary = ₹1,500 - ₹600 = ₹900 Crore [0.75 Mark]\n  - GDP_MP = ₹600 + ₹1,200 + ₹900 = ₹2,700 Crore\n  - GNP_MP = GDP_MP + NFIA = ₹2,700 + (-₹50) = ₹2,650 Crore [0.75 Mark]\n• (b) Expenditure Method [3 Marks]:\n  - GDCF = Gross Fixed Capital Formation (₹500) + Change in Stock (₹100) = ₹600 Crore [0.75 Mark]\n  - Net Exports = -(Net Imports) = -₹300 Crore [0.75 Mark]\n  - GDP_MP = PFCE (₹1,800) + GFCE (₹600) + GDCF (₹600) + Net Exports (-₹300) = ₹2,700 Crore [0.75 Mark]\n  - GNP_MP = GDP_MP + NFIA = ₹2,700 + (-₹50) = ₹2,650 Crore. [0.75 Mark]"
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "'Gross Domestic Product (GDP) is often treated as the definitive yardstick of a country's economic progress. However, there are significant reasons why GDP cannot be considered an accurate index of social welfare.' Critically evaluate this statement by discussing the four major limitations of GDP as a welfare index. [6 Marks]",
        "answer": "Detailed critical evaluation of Distribution of GDP, Non-monetary exchanges, Externalities, and Composition of GDP.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks per limitation):\n• 1. Distribution of GDP [1.5 Marks]:\n  If GDP increases but the additional income is captured primarily by the top 1% wealthiest elite while the bottom 50% suffer declining real wages, social inequality deepens and welfare falls despite rising GDP.\n• 2. Non-Monetary Exchanges [1.5 Marks]:\n  In developing nations, extensive economic services (housework by mothers, barter trade, communal agricultural labor) are non-monetized. Because they lack market pricing, they are excluded from GDP, causing GDP to understate real welfare.\n• 3. Externalities (Positive and Negative) [1.5 Marks]:\n  GDP excludes environmental damages (air pollution, toxic river waste, deforestation) that diminish quality of life without penalty. Conversely, positive social externalities (unpaid charity parks, civic tree planting) are omitted, causing GDP to misrepresent net welfare.\n• 4. Composition of GDP [1.5 Marks]:\n  A surge in GDP driven by manufacturing nuclear weapons, cluster bombs, or liquor adds to output figures but does not enhance consumer living standards the way producing food, schools, and hospitals does."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Calculate (a) Operating Surplus and (b) Domestic Income (NDP_FC) from the following data: [6 Marks]\nParticulars | ₹ in Crore\n1. Net Value Added at Factor Cost (NVA_FC) | 4,200\n2. Wages and Salaries in Cash | 2,000\n3. Employers' Contribution to Social Security | 200\n4. Rent | 400\n5. Interest | 300\n6. Royalty | 100\n7. Corporate Tax | 150\n8. Dividend | 250\n9. Undistributed Profits | 100\n10. Mixed Income of Self-Employed | 700",
        "answer": "(a) Operating Surplus = ₹1,300 Crore; (b) Domestic Income (NDP_FC) = ₹4,200 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Calculate Operating Surplus [3 Marks]:\n  - Profit = Corporate Tax (₹150) + Dividend (₹250) + Undistributed Profits (₹100) = ₹500 Crore. [1 Mark]\n  - Operating Surplus = Rent (₹400) + Royalty (₹100) + Interest (₹300) + Profit (₹500) [1 Mark]\n  - Operating Surplus = ₹1,300 Crore. [1 Mark]\n• (b) Calculate Domestic Income (NDP_FC) [3 Marks]:\n  - Compensation of Employees = Wages in cash (₹2,000) + Employers' SS contribution (₹200) = ₹2,200 Crore. [1 Mark]\n  - NDP_FC = Compensation of Employees + Operating Surplus + Mixed Income [1 Mark]\n  - NDP_FC = ₹2,200 + ₹1,300 + ₹700 = ₹4,200 Crore. [1 Mark] (Note: Reconciles with NVA_FC = ₹4,200 Crore)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Explain the step-by-step procedure of estimating National Income using the 'Value Added Method'. State any three essential precautions to be observed. [6 Marks]",
        "answer": "Three-step procedure: Identify industrial sectors, Compute GVA_MP, Deduct Depreciation & NIT, Add NFIA; Three precautions.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks for procedure + 3 Marks for precautions):\n• I. Steps in Value Added Method [3 Marks]:\n  1. Classify all producing units into Primary, Secondary, and Tertiary sectors.\n  2. Estimate Gross Value Added at Market Price (GVA_MP) for each sector: GVA_MP = Value of Output (Sales + Change in Stock) - Intermediate Consumption.\n  3. Sum GVA_MP of all sectors to get GDP_MP. Deduct Depreciation to get NDP_MP, deduct Net Indirect Taxes to get NDP_FC (Domestic Income), and add NFIA to arrive at NNP_FC (National Income).\n• II. Three Precautions [3 Marks (1 Mark each)]:\n  1. Avoid Double Counting: Deduct intermediate consumption completely; do not count raw materials separately.\n  2. Sale of Second-Hand Goods: Exclude sale proceeds of second-hand goods (counted in year of manufacture), but include brokerage/commission earned on their sale.\n  3. Production for Self-Consumption: Imputed value of self-consumed output (e.g., farmer retaining food grain) must be included, while non-market household services of homemakers are excluded."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Calculate 'National Income' (NNP_FC) by: (a) Expenditure Method, and (b) Income Method from the following: [6 Marks]\nData: (₹ in Crore)\n1. Compensation of Employees | 1,200\n2. Private Final Consumption Expenditure | 2,000\n3. Rent and Interest | 600\n4. Gross Fixed Capital Formation | 700\n5. Profits | 800\n6. Government Final Consumption Expenditure | 800\n7. Change in Stock | 100\n8. Net Indirect Taxes | 200\n9. Net Exports | -50\n10. Consumption of Fixed Capital | 150\n11. Net Factor Income from Abroad | -20\n12. Mixed Income of Self-Employed | 1,000",
        "answer": "(a) National Income (Expenditure) = ₹3,180 Crore; (b) National Income (Income) = ₹3,580 Crore.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks per method):\n• (a) Expenditure Method [3 Marks]:\n  - GDCF = Gross Fixed Capital Formation (₹700) + Change in Stock (₹100) = ₹800 Crore [0.75 Mark]\n  - GDP_MP = PFCE (₹2,000) + GFCE (₹800) + GDCF (₹800) + Net Exports (-₹50) = ₹3,550 Crore [1 Mark]\n  - NNP_FC = GDP_MP - Depreciation (₹150) - NIT (₹200) + NFIA (-₹20) = ₹3,180 Crore [1.25 Marks]\n• (b) Income Method [3 Marks]:\n  - Operating Surplus = Rent & Interest (₹600) + Profits (₹800) = ₹1,400 Crore [0.75 Mark]\n  - NDP_FC = Compensation of Employees (₹1,200) + Operating Surplus (₹1,400) + Mixed Income (₹1,000) = ₹3,600 Crore [1.25 Marks]\n  - NNP_FC = NDP_FC + NFIA (-₹20) = ₹3,580 Crore. [1 Mark]"
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Explain the meaning of 'Nominal GDP', 'Real GDP', and 'GDP Deflator'. With the help of a numerical illustration, show how a country's Nominal GDP can increase while Real GDP remains completely unchanged. [6 Marks]",
        "answer": "Conceptual explanation + Numerical illustration demonstrating pure inflationary increase in Nominal GDP.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks for concepts + 3 Marks for numerical illustration):\n• Concepts [3 Marks (1 Mark each)]:\n  - Nominal GDP: Value of final goods and services produced in an economy evaluated at current prevailing market prices (Q1 × P1).\n  - Real GDP: Value of final goods evaluated at constant base-year prices (Q1 × P0), measuring physical output growth.\n  - GDP Deflator: (Nominal GDP / Real GDP) × 100; a price index measuring general inflation.\n• Numerical Illustration [3 Marks]:\n  - Suppose an economy produces only one commodity: Wheat.\n  - Year 2015 (Base Year): Output = 100 kg; Price = ₹10/kg -> Real GDP = ₹1,000; Nominal GDP = ₹1,000.\n  - Year 2024 (Current Year): Output = 100 kg (Physical output unchanged); Price rises to ₹25/kg due to inflation.\n  - Current Year Nominal GDP = 100 kg × ₹25 = ₹2,500.\n  - Current Year Real GDP = 100 kg × ₹10 = ₹1,000.\n  - Conclusion: Nominal GDP surged by 150% (from ₹1,000 to ₹2,500), but Real GDP remained at ₹1,000. People have no additional grain to eat; the rise is an optical inflationary illusion."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Calculate 'Gross National Product at Factor Cost' (GNP_FC) by: (a) Income Method, and (b) Expenditure Method from the following: [6 Marks]\nData: (₹ in Crore)\n1. Compensation of Employees | 800\n2. Private Final Consumption Expenditure | 1,200\n3. Operating Surplus | 500\n4. Gross Fixed Capital Formation | 350\n5. Change in Stock | 50\n6. Government Final Consumption Expenditure | 400\n7. Net Imports | 20\n8. Net Indirect Taxes | 120\n9. Mixed Income of Self-Employed | 600\n10. Consumption of Fixed Capital | 80\n11. Net Factor Income from Abroad | -30",
        "answer": "(a) GNP_FC (Income) = ₹1,950 Crore; (b) GNP_FC (Expenditure) = ₹1,800 Crore.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks per method):\n• (a) Income Method [3 Marks]:\n  - NDP_FC = COE (₹800) + Operating Surplus (₹500) + Mixed Income (₹600) = ₹1,900 Crore [1 Mark]\n  - GDP_FC = NDP_FC + Depreciation (₹80) = ₹1,980 Crore [1 Mark]\n  - GNP_FC = GDP_FC + NFIA (-₹30) = ₹1,950 Crore. [1 Mark]\n• (b) Expenditure Method [3 Marks]:\n  - GDCF = GFCF (₹350) + Change in Stock (₹50) = ₹400 Crore [0.75 Mark]\n  - Net Exports = -(Net Imports) = -₹20 Crore [0.75 Mark]\n  - GDP_MP = PFCE (₹1,200) + GFCE (₹400) + GDCF (₹400) + Net Exports (-₹20) = ₹1,980 Crore [0.75 Mark]\n  - GNP_FC = GDP_MP - NIT (₹120) + NFIA (-₹30) = ₹1,830 Crore. [0.75 Mark]"
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "State giving valid reasons whether the following transactions will be included in the estimation of 'National Income': [6 Marks]\n(a) Expenditure on financial shares and bonds issued by a commercial bank.\n(b) Purchase of a newly constructed apartment by an individual for residential living.\n(c) Government expenditure on providing free polio vaccines to infants.\n(d) Commission earned by an estate broker on the resale of a residential plot.\n(e) Capital gains earned by selling a vintage car at double its original price.\n(f) Imputed rent of self-occupied residential property.",
        "answer": "(a) No; (b) Yes; (c) Yes; (d) Yes; (e) No; (f) Yes.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each with reason):\n• (a) Purchase of shares and bonds: NO. It represents a transfer of financial claims, not physical production. [1 Mark]\n• (b) Purchase of newly constructed apartment: YES. Part of gross residential construction investment (capital formation). [1 Mark]\n• (c) Government expenditure on free vaccines: YES. Part of Government Final Consumption Expenditure on public health. [1 Mark]\n• (d) Commission on resale of plot: YES. Productive factor payment for rendering brokerage services. [1 Mark]\n• (e) Capital gain on vintage car: NO. Capital gains do not flow from current production of goods and services. [1 Mark]\n• (f) Imputed rent of self-occupied house: YES. Housing provides continuous productive shelter services. [1 Mark]"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Explain the components of 'Final Expenditure' in the Expenditure Method of measuring National Income. [6 Marks]",
        "answer": "Detailed breakdown: Private Final Consumption Expenditure (PFCE), Government Final Consumption Expenditure (GFCE), Gross Domestic Capital Formation (GDCF), and Net Exports (X - M).",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks per component):\n• 1. Private Final Consumption Expenditure (PFCE) [1.5 Marks]:\n  Expenditure incurred by resident households and non-profit institutions serving households on final consumer goods (durables, non-durables) and services (education, healthcare, transport).\n• 2. Government Final Consumption Expenditure (GFCE) [1.5 Marks]:\n  Current expenditure incurred by government on providing administrative and non-market community services (defense, police, judiciary, sanitation, public administration).\n• 3. Gross Domestic Capital Formation (GDCF / Total Investment) [1.5 Marks]:\n  Additions to physical capital stock of the country: (i) Gross Fixed Capital Formation (business fixed investment, residential construction, public works), plus (ii) Change in Stock (inventory investment = Closing Stock - Opening Stock).\n• 4. Net Exports (X - M) [1.5 Marks]:\n  The difference between exports (goods/services produced domestically and purchased by foreigners) and imports (domestic expenditure spent on foreign goods)."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 3,
      "book": "Part A: Introductory Macroeconomics",
      "title": "Money and Banking",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 2: Money and Banking (6 Marks in Board Exam)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which measure of money supply in India is defined as: 'Currency with public + Demand deposits of commercial banks + Other deposits with RBI'?",
        "options": [
          "(a) M1",
          "(b) M2",
          "(c) M3",
          "(d) M4"
        ],
        "answer": "(a) M1",
        "explanation": "M1 is the narrowest and most liquid measure of money supply: M1 = Currency with the Public (C) + Demand Deposits with Banks (DD) + Other Deposits with RBI (OD)."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If the Legal Reserve Ratio (LRR) is 20%, what is the value of the 'Money Multiplier'?",
        "options": [
          "(a) 2",
          "(b) 5",
          "(c) 10",
          "(d) 4"
        ],
        "answer": "(b) 5",
        "explanation": "Money Multiplier = 1 / LRR = 1 / 0.20 = 5."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What happens to the credit creation capacity of commercial banks when the Central Bank INCREASES the Cash Reserve Ratio (CRR)?",
        "options": [
          "(a) Credit creation capacity increases",
          "(b) Credit creation capacity decreases",
          "(c) Credit creation capacity remains unchanged",
          "(d) Money multiplier becomes infinite"
        ],
        "answer": "(b) Credit creation capacity decreases",
        "explanation": "A higher CRR forces banks to park a larger percentage of deposits as idle cash with the RBI, shrinking lendable cash reserves and reducing the money multiplier."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The interest rate at which the Reserve Bank of India lends short-term funds to commercial banks against approved government securities is called:",
        "options": [
          "(a) Bank Rate",
          "(b) Repo Rate",
          "(c) Reverse Repo Rate",
          "(d) Call Rate"
        ],
        "answer": "(b) Repo Rate",
        "explanation": "Repo Rate (Repurchase Rate) is the benchmark rate at which the RBI lends short-term funds to commercial banks against government securities under repurchase agreements."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following functions of the Central Bank is highlighted when it extends emergency liquidity assistance to commercial banks facing temporary solvency crises?",
        "options": [
          "(a) Bank of Issue",
          "(b) Lender of the Last Resort",
          "(c) Banker to the Government",
          "(d) Custodian of Foreign Exchange"
        ],
        "answer": "(b) Lender of the Last Resort",
        "explanation": "As the Lender of the Last Resort, the Central Bank guarantees solvency support to sound commercial banks that have exhausted all other liquidity options, preventing financial panic."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "To curb 'Inflation' (Excess Demand) in the economy, the Central Bank should:",
        "options": [
          "(a) Decrease Repo Rate and buy government securities",
          "(b) Increase Repo Rate, increase CRR, and sell government securities in the open market",
          "(c) Reduce margin requirements on loans",
          "(d) Reduce Statutory Liquidity Ratio (SLR)"
        ],
        "answer": "(b) Increase Repo Rate, increase CRR, and sell government securities in the open market",
        "explanation": "To fight inflation, the central bank adopts a dear/tight monetary policy by raising policy rates (Repo, CRR, SLR) and selling securities to absorb excess liquidity from the banking system."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "If an initial deposit of ₹1,000 crore is made in a banking system with a Legal Reserve Ratio (LRR) of 10%, what is the TOTAL credit created?",
        "options": [
          "(a) ₹10,000 crore",
          "(b) ₹5,000 crore",
          "(c) ₹1,000 crore",
          "(d) ₹20,000 crore"
        ],
        "answer": "(a) ₹10,000 crore",
        "explanation": "Total Credit Created = Initial Deposit × (1 / LRR) = ₹1,000 × (1 / 0.10) = ₹1,000 × 10 = ₹10,000 crore."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following is a 'Qualitative / Selective' instrument of monetary control?",
        "options": [
          "(a) Bank Rate",
          "(b) Cash Reserve Ratio (CRR)",
          "(c) Margin Requirement on Loans",
          "(d) Open Market Operations"
        ],
        "answer": "(c) Margin Requirement on Loans",
        "explanation": "Margin Requirement is a qualitative/selective credit control tool that regulates the direction and flow of credit to specific sectors, unlike quantitative tools that affect overall credit volume."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Demand deposits held by commercial banks are called 'Money' because:",
        "options": [
          "(a) They are backed by gold bars in the home",
          "(b) They can be withdrawn or transferred on demand via cheques or electronic transfers for settling debt obligations",
          "(c) They earn high interest",
          "(d) They are exempt from taxes"
        ],
        "answer": "(b) They can be withdrawn or transferred on demand via cheques or electronic transfers for settling debt obligations",
        "explanation": "Demand deposits act as money because they are chequable and electronically transferable, serving as an accepted medium of exchange."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The rate at which commercial banks can park their surplus surplus liquidity with the RBI is the:",
        "options": [
          "(a) Repo Rate",
          "(b) Reverse Repo Rate",
          "(c) Statutory Liquidity Ratio",
          "(d) Marginal Standing Facility"
        ],
        "answer": "(b) Reverse Repo Rate",
        "explanation": "Reverse Repo Rate is the interest rate paid by the RBI to absorb surplus funds parked by commercial banks with the central bank."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What is meant by 'Margin Requirement' on a loan?",
        "options": [
          "(a) The difference between the market value of the security pledged and the actual loan amount sanctioned",
          "(b) The interest charged by the bank",
          "(c) The bank's profit margin",
          "(d) The penalty for late loan repayment"
        ],
        "answer": "(a) The difference between the market value of the security pledged and the actual loan amount sanctioned",
        "explanation": "Margin requirement is the proportion of collateral value not funded by the bank (e.g., if a house worth ₹100 lakhs secures a loan of ₹80 lakhs, the margin is 20%)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Statutory Liquidity Ratio (SLR) requires commercial banks to maintain a specified percentage of their Net Demand and Time Liabilities (NDTL) in the form of:",
        "options": [
          "(a) Cash deposits parked exclusively in RBI vaults",
          "(b) Specified liquid assets (unencumbered government securities, cash in hand, gold) maintained with themselves",
          "(c) Physical real estate",
          "(d) Foreign currencies only"
        ],
        "answer": "(b) Specified liquid assets (unencumbered government securities, cash in hand, gold) maintained with themselves",
        "explanation": "SLR is maintained by banks with themselves in liquid form (cash, gold, approved treasury/government bonds), ensuring solvency."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Who has the sole, legal monopoly authority to issue currency notes (except one-rupee notes and coins) in India?",
        "options": [
          "(a) Ministry of Finance",
          "(b) Reserve Bank of India (RBI)",
          "(c) State Bank of India",
          "(d) NITI Aayog"
        ],
        "answer": "(b) Reserve Bank of India (RBI)",
        "explanation": "Under the RBI Act, the Reserve Bank of India enjoys the sole legal monopoly right to issue currency notes of all denominations (except ₹1 note and coins, which are issued by the Ministry of Finance)."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When the Central Bank conducts 'Open Market Sales' of government securities, what is the direct impact on the commercial banking system?",
        "options": [
          "(a) Cash reserves of commercial banks contract, curbing their lending capacity",
          "(b) Bank deposits double immediately",
          "(c) Cash reserves of banks expand",
          "(d) Interest rates drop to zero"
        ],
        "answer": "(a) Cash reserves of commercial banks contract, curbing their lending capacity",
        "explanation": "When the central bank sells government securities to commercial banks and the public, payments flow to the central bank, draining bank reserves and reducing credit creation."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following is NOT a commercial bank in India?",
        "options": [
          "(a) Punjab National Bank",
          "(b) HDFC Bank",
          "(c) Reserve Bank of India",
          "(d) ICICI Bank"
        ],
        "answer": "(c) Reserve Bank of India",
        "explanation": "The Reserve Bank of India is the central bank and apex monetary authority of the country, not a commercial retail bank."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "How does an INCREASE in 'Margin Requirement' affect the demand for credit?",
        "options": [
          "(a) It makes borrowing easier and increases loan demand",
          "(b) It discourages borrowers because they must pledge more collateral for the same loan, reducing credit demand",
          "(c) It eliminates bank deposits",
          "(d) It has zero effect"
        ],
        "answer": "(b) It discourages borrowers because they must pledge more collateral for the same loan, reducing credit demand",
        "explanation": "Raising the margin requirement decreases the loan-to-value ratio, making borrowing costlier and reducing the volume of credit sought."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "'Moral Suasion' as an instrument of monetary control involves:",
        "options": [
          "(a) Imposing heavy criminal jail terms on bank managers",
          "(b) Persuasion, advice, informal appeals, and guidelines issued by the Central Bank to commercial banks to align credit with monetary policy",
          "(c) Banning all loans",
          "(d) Distributing free gold to depositors"
        ],
        "answer": "(b) Persuasion, advice, informal appeals, and guidelines issued by the Central Bank to commercial banks to align credit with monetary policy",
        "explanation": "Moral suasion is a combination of persuasion, periodic meetings, and informal directives from the central bank to encourage commercial bank compliance."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following is a difference between 'Bank Rate' and 'Repo Rate'?",
        "options": [
          "(a) Bank Rate involves long-term lending without collateral; Repo Rate involves short-term lending against pledged government securities",
          "(b) Bank Rate is charged by commercial banks to customers",
          "(c) Repo Rate is charged only to foreign tourists",
          "(d) Both are identical in every respect"
        ],
        "answer": "(a) Bank Rate involves long-term lending without collateral; Repo Rate involves short-term lending against pledged government securities",
        "explanation": "Repo Rate is a short-term lending rate backed by government collateral under repurchase agreements; Bank Rate is a long-term lending rate without collateral."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Commercial banks create credit on the basis of which fundamental assumption?",
        "options": [
          "(a) All depositors will withdraw all their cash deposits on the same single day",
          "(b) All depositors never withdraw their entire cash simultaneously, and there is a constant inflow of fresh cash deposits daily",
          "(c) Banks never face bank runs",
          "(d) Loans are never repaid"
        ],
        "answer": "(b) All depositors never withdraw their entire cash simultaneously, and there is a constant inflow of fresh cash deposits daily",
        "explanation": "Fractional reserve banking works because historical experience demonstrates that all depositors do not withdraw funds at once, allowing banks to lend out the excess above statutory reserves."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "To combat 'Deflation' or economic recession, what should the Central Bank do regarding the Bank Rate?",
        "options": [
          "(a) Increase Bank Rate to make loans expensive",
          "(b) Decrease Bank Rate to make commercial bank borrowing cheaper, encouraging lower lending rates and credit expansion",
          "(c) Keep Bank Rate unchanged at 100%",
          "(d) Close the discount window"
        ],
        "answer": "(b) Decrease Bank Rate to make commercial bank borrowing cheaper, encouraging lower lending rates and credit expansion",
        "explanation": "Cutting the Bank Rate lowers refinancing costs for commercial banks, prompting them to reduce retail loan rates, which stimulates investment and consumption demand."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "The currency issued by the Central Bank (coins and currency notes) held by the public and commercial banks is called:",
        "options": [
          "(a) High-Powered Money (Monetary Base)",
          "(b) Bank Money",
          "(c) Commercial Paper",
          "(d) Plastic Money"
        ],
        "answer": "(a) High-Powered Money (Monetary Base)",
        "explanation": "High-powered money (Monetary Base / Reserve Money) consists of currency in circulation with the public plus cash reserves of commercial banks, serving as the base for credit expansion."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "What is the relation between Legal Reserve Ratio (LRR) and the Money Multiplier?",
        "options": [
          "(a) Direct positive relationship",
          "(b) Inverse relationship",
          "(c) Zero relationship",
          "(d) Constant linear relationship"
        ],
        "answer": "(b) Inverse relationship",
        "explanation": "Money Multiplier = 1 / LRR. As LRR increases, the multiplier decreases, and vice versa."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following bodies in India issues one-rupee currency notes and coins?",
        "options": [
          "(a) Reserve Bank of India",
          "(b) Ministry of Finance, Government of India",
          "(c) State Bank of India",
          "(d) Securities and Exchange Board of India"
        ],
        "answer": "(b) Ministry of Finance, Government of India",
        "explanation": "In India, ₹1 notes and all metallic coins are minted and issued by the Ministry of Finance, Government of India (signed by the Finance Secretary), while other currency is issued by the RBI."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "When the Central Bank acts as a 'Clearing House', it:",
        "options": [
          "(a) Sweeps the floors of commercial banks",
          "(b) Settles mutual inter-bank claims and cheque clearings smoothly through central bank accounts",
          "(c) Closes down sick banks",
          "(d) Cancels all bank loans"
        ],
        "answer": "(b) Settles mutual inter-bank claims and cheque clearings smoothly through central bank accounts",
        "explanation": "Because commercial banks hold cash reserve accounts with the central bank, inter-bank claims are easily settled by simple debit and credit book entries."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Money creation by commercial banks is also referred to as:",
        "options": [
          "(a) Minting of coins",
          "(b) Derivative Deposit Creation",
          "(c) Printing currency notes",
          "(d) Fiscal Deficit Financing"
        ],
        "answer": "(b) Derivative Deposit Creation",
        "explanation": "Banks create secondary (derivative) demand deposits whenever they sanction loans, expanding the money supply without printing physical currency."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Commercial banks create credit that is many times more than their primary cash deposits.\nReason (R): Fractional reserve banking is founded on the empirical fact that all depositors never withdraw their cash deposits simultaneously.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Because withdrawal demands are predictable and fractional, banks can safely lend out the non-reserved portion of deposits across successive rounds."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Central Bank is an apex institution that does not deal directly with the general public for retail banking.\nReason (R): The primary objective of the Central Bank is public welfare and macroeconomic monetary stability, not commercial profit maximization.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. As the apex regulator, the central bank oversees monetary stability and functions as a bankers' bank rather than competing for retail retail deposits."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): An increase in the Reverse Repo Rate helps in controlling inflationary pressures in the economy.\nReason (R): A higher Reverse Repo Rate incentivizes commercial banks to park surplus funds with the RBI, reducing lendable reserves for retail credit expansion.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Higher returns on funds parked with the RBI absorb liquidity from banks, curbing speculative credit."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Total money supply in an economy consists only of the physical currency notes printed by the government.\nReason (R): Demand deposits created by commercial banks do not possess purchasing power.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Money supply (M1) includes both currency in circulation AND demand deposits, which carry full purchasing power via cheques and digital transfers."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): During an economic slowdown, the Central Bank purchases government securities in the open market.\nReason (R): Open market purchases inject fresh liquidity into the commercial banking system, expanding banks' lending capacity and stimulating investment.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Open market purchases inject cash into bank reserves, reducing borrowing costs and reviving economic activity."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain 'Repo Rate' and 'Reverse Repo Rate'. How are they utilized to control credit expansion during inflationary periods? [3 Marks]",
        "answer": "Repo is RBI's short-term lending rate; Reverse repo is RBI's borrowing rate; Hikes in both absorb liquidity and curb inflation.",
        "explanation": "Marking Scheme (1.5 Marks concepts + 1.5 Marks anti-inflation mechanism):\n• Concepts: (i) Repo Rate is the interest rate at which the RBI lends short-term funds to commercial banks against government securities. (ii) Reverse Repo Rate is the rate at which the RBI borrows / absorbs surplus cash parked by commercial banks.\n• Control of Inflation: During inflation (excess demand), the RBI raises both the Repo Rate and Reverse Repo Rate. A higher Repo Rate makes borrowing from the RBI expensive, forcing banks to raise retail lending rates. A higher Reverse Repo Rate incentivizes banks to park cash safely with the RBI. This contracts credit expansion and cools inflation."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain the concept of 'Money Multiplier'. If the Legal Reserve Ratio is 12.5%, calculate the money multiplier and total credit created on an initial deposit of ₹800 crore. [3 Marks]",
        "answer": "Money Multiplier = 8; Total Credit Created = ₹6,400 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• 1. Concept of Money Multiplier [1 Mark]: The number by which total deposits increase in response to a given change in initial primary deposits: Money Multiplier = 1 / LRR.\n• 2. Calculation [2 Marks]:\n  - LRR = 12.5% = 0.125\n  - Money Multiplier = 1 / 0.125 = 8 [1 Mark]\n  - Total Credit Created = Initial Deposit × Money Multiplier = ₹800 × 8 = ₹6,400 Crore. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Differentiate between a 'Central Bank' and a 'Commercial Bank' on any three bases. [3 Marks]",
        "answer": "Distinction on Status/Objective, Currency issue, and Public dealing.",
        "explanation": "Marking Scheme (1 Mark per basis):\n• 1. Status and Primary Objective: Central Bank is the apex monetary regulator functioning for national economic stability and public welfare (not profit). Commercial banks are financial intermediaries operating for profit maximization.\n• 2. Currency Issue Authority: Central Bank possesses the sole monopoly authority to issue currency notes. Commercial banks have zero note-issuing authority (they only create credit).\n• 3. Dealing with the Public: Central Bank does not deal directly with retail individual citizens. Commercial banks interact directly with the general public to accept deposits and grant loans."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain 'Banker to the Government' as a function of the Central Bank. [3 Marks]",
        "answer": "Manages government accounts, acts as financial agent, and advises on economic policy.",
        "explanation": "Marking Scheme (1 Mark each for three roles):\n• 1. As a Banker: Maintains the operational banking accounts of the Central and State Governments, accepts government tax receipts, and makes disbursements.\n• 2. As an Agent: Manages the public debt, issues government treasury bills and sovereign bonds, and manages market borrowing on behalf of the government.\n• 3. As a Financial Advisor: Advises the government on monetary matters, fiscal deficits, inflation management, foreign exchange reserves, and trade policies."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain 'Cash Reserve Ratio' (CRR) and 'Statutory Liquidity Ratio' (SLR). [3 Marks]",
        "answer": "CRR is cash parked with RBI; SLR is liquid assets held by banks with themselves.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Cash Reserve Ratio (CRR): The statutory fraction of Net Demand and Time Liabilities (NDTL) that commercial banks must maintain as cash reserves exclusively with the Reserve Bank of India. Banks earn zero interest on CRR.\n• 2. Statutory Liquidity Ratio (SLR): The statutory percentage of NDTL that commercial banks must maintain in liquid assets (cash in hand, gold, unencumbered government and other approved securities) with themselves."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain the role of the Central Bank as 'Lender of the Last Resort'. [3 Marks]",
        "answer": "Provides emergency liquidity to solvent banks facing cash runs, preventing systemic banking collapse.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Emergency Safety Net: When a commercial bank faces unexpected deposit runs or acute liquidity shortages and fails to borrow from the inter-bank market, it approaches the central bank.\n• 2. Discounting Eligible Securities: The central bank provides emergency advances and rediscounts approved securities to honor depositor obligations.\n• 3. Preserving Systemic Solvency: Guarantees public confidence in the banking system, preventing solitary bank runs from triggering systemic financial contagion."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "What is 'Open Market Operations' (OMO)? How is it used to control deficient demand (deflation)? [3 Marks]",
        "answer": "Buying and selling of government securities; RBI purchases securities to inject liquidity during deflation.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks deflation mechanism):\n• Concept: Open Market Operations refer to the deliberate outright purchase and sale of government securities in the open financial market by the Central Bank to regulate banking liquidity.\n• During Deficient Demand (Deflation): The RBI conducts open market PURCHASES of government bonds from commercial banks and the public. Payments made by the RBI flow into commercial banks' reserve accounts, expanding their credit base, lowering interest rates, and stimulating aggregate demand."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain the 'Margin Requirement' on loans as a tool of selective credit control with an example. [3 Marks]",
        "answer": "Proportion of collateral value not funded by the bank; Example: Raising margin from 20% to 40% restricts speculative credit.",
        "explanation": "Marking Scheme:\n• Concept [1.5 Marks]: Margin requirement is the difference between the current market value of the security pledged as collateral and the actual loan amount disbursed by the commercial bank.\n• Illustration [1.5 Marks]: Suppose a borrower pledges gold jewelry worth ₹1,00,000. If the margin is 20%, the bank lends ₹80,000. If the RBI wants to curb speculative borrowing, it raises the margin to 40%, reducing the maximum loan to ₹60,000. This discourages credit flow to speculative sectors without affecting productive loans."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "What are the components of the 'M1' measure of money supply? [3 Marks]",
        "answer": "Currency with public (C) + Demand deposits with banks (DD) + Other deposits with RBI (OD).",
        "explanation": "Marking Scheme (1 Mark each for three components):\n• 1. Currency with Public (C): Currency notes and coins circulating among households, firms, and individuals outside the banking system.\n• 2. Demand Deposits with Commercial Banks (DD): Chequable balances held by the public in current accounts and savings accounts of commercial banks.\n• 3. Other Deposits with the RBI (OD): Demand deposits held with the RBI by foreign central banks, international institutions (IMF, World Bank), and quasi-government bodies (excluding government and bank deposits)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Explain how commercial banks act as 'Financial Intermediaries' between savers and investors. [3 Marks]",
        "answer": "Mobilizes household savings and channels them to productive business borrowers.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Mobilizing Savings: Accepts small and large surplus savings from households and institutions by offering diverse deposit accounts with interest incentives.\n• 2. Capital Allocation: Aggregates these deposits and advances them as loans and working capital credit to industrial entrepreneurs, farmers, and businesses.\n• 3. Economic Productivity: Channels idle domestic savings into productive capital investments, accelerating employment and GDP growth."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the process of 'Credit Creation' (Money Creation) by the commercial banking system with the help of a numerical illustration and a round-by-round tabular presentation. Take an initial deposit of ₹1,000 crore and a Legal Reserve Ratio (LRR) of 20%. [6 Marks]",
        "answer": "Complete multi-round tabular illustration showing Primary Deposits, Required Reserves (LRR 20%), and Loan Creation; Total deposits = ₹5,000 Crore.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks for theoretical mechanism + 3 Marks for table + 1 Mark for formula):\n• 1. Underlying Principles [2 Marks]:\n  - Commercial banks accept primary cash deposits from depositors.\n  - Based on historical experience, all depositors do not withdraw funds simultaneously.\n  - Banks legally reserve a fixed proportion (LRR = 20%) to meet daily withdrawals and lend the remaining 80%.\n  - Banks do not disburse cash directly to borrowers; they open a secondary/derivative deposit account, which enters the banking system again.\n• 2. Credit Creation Table (LRR = 20%) [3 Marks]:\n  Round | Deposits Received (₹ Cr) | Loans Granted (80%) (₹ Cr) | Cash Reserves (LRR 20%) (₹ Cr)\n  Initial Round | 1,000 | 800 | 200\n  Round 1 | 800 | 640 | 160\n  Round 2 | 640 | 512 | 128\n  Round 3 | 512 | 409.6 | 102.4\n  ... | ... | ... | ...\n  TOTAL | 5,000 | 4,000 | 1,000\n• 3. Formulaic Verification [1 Mark]:\n  - Money Multiplier = 1 / LRR = 1 / 0.20 = 5.\n  - Total Deposits Created = Initial Deposit × Money Multiplier = ₹1,000 × 5 = ₹5,000 Crore.\n  - Total Loans Created = ₹4,000 Crore; Total Cash Reserves Kept = ₹1,000 Crore."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain how the following monetary policy instruments of the Reserve Bank of India are deployed to control 'Excess Demand' (Inflationary Gap) in an economy: [6 Marks]\n(a) Repo Rate\n(b) Open Market Operations\n(c) Margin Requirements",
        "answer": "Detailed examination of Repo Rate hike, Open Market Sales, and Margin Requirement increase to curb inflationary demand.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Repo Rate [2 Marks]:\n  - Mechanism: During excess demand / inflation, the RBI increases the Repo Rate. This makes short-term borrowing by commercial banks from the central bank costlier.\n  - Impact: Commercial banks raise their retail lending rates. Business borrowing and consumer vehicle/housing loans become expensive, dampening consumption and investment, and curbing excess demand.\n• (b) Open Market Operations (OMO) [2 Marks]:\n  - Mechanism: The RBI conducts outright sales of government securities in the open market to commercial banks and the public.\n  - Impact: Buyers pay for these securities by drawing down balances in commercial banks, draining bank cash reserves. Reduced reserves restrict the money multiplier, curtailing credit expansion and reducing aggregate demand.\n• (c) Margin Requirements on Loans [2 Marks]:\n  - Mechanism: The RBI increases the margin requirement on loans. Borrowers are required to pledge a larger value of collateral to obtain the same loan amount.\n  - Impact: Borrowing capacity decreases, discouraging speculative credit and durable goods purchases, bringing aggregate demand back into equilibrium with aggregate supply."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Explain the major functions of the Central Bank (Reserve Bank of India) in detail: [6 Marks]\n(a) Currency Authority (Bank of Issue)\n(b) Banker, Agent, and Advisor to the Government\n(c) Bankers' Bank and Supervisor",
        "answer": "Comprehensive analysis of Bank of Issue, Banker to Government, and Bankers' Bank/Supervisor.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Currency Authority (Bank of Issue) [2 Marks]:\n  - Sole legal monopoly to issue currency notes across the nation (except ₹1 notes/coins). Ensures uniformity in currency circulation, builds public trust, and allows the central bank to control the total volume of money supply and high-powered money in the economy.\n• (b) Banker, Agent, and Advisor to the Government [2 Marks]:\n  - As Banker: Manages accounts, accepts taxes, and makes disbursements for the Central and State Governments.\n  - As Agent: Manages public debt, floats treasury bills, and handles sovereign loan repayments.\n  - As Advisor: Advises the government on fiscal policy, inflation control, foreign exchange reserves, and public finance.\n• (c) Bankers' Bank and Supervisor [2 Marks]:\n  - Holds statutory cash reserves of commercial banks (CRR).\n  - Acts as the 'Lender of the Last Resort', providing liquidity to solvent banks facing runs.\n  - Operates the centralized clearing house for inter-bank cheque settlements.\n  - Supervises banks through licensing, branch expansion approvals, asset audits, and periodic on-site inspections."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Distinguish between 'Quantitative Instruments' and 'Qualitative Instruments' of credit control used by the Central Bank. Discuss two instruments under each category. [6 Marks]",
        "answer": "Quantitative tools regulate total credit volume; Qualitative tools regulate allocation to specific sectors; 2 instruments each.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks for distinction + 2 Marks for quantitative tools + 2 Marks for qualitative tools):\n• Core Distinction [2 Marks]:\n  - Quantitative Instruments (General Controls): Regulate the total volume and aggregate quantity of bank credit in the entire economy without discriminating between uses.\n  - Qualitative Instruments (Selective Controls): Regulate the direction, purpose, and sectoral allocation of credit, encouraging priority sectors and curbing speculative sectors.\n• Two Quantitative Instruments [2 Marks]:\n  1. Cash Reserve Ratio (CRR): Percentage of deposits banks must park as cash with RBI. Raising CRR reduces total lending capacity across all banks.\n  2. Open Market Operations (OMO): Direct buying and selling of government securities by the central bank to adjust overall banking liquidity.\n• Two Qualitative Instruments [2 Marks]:\n  1. Margin Requirements: Fixes the difference between security market value and sanctioned loan amount, restricting credit for specific commodities.\n  2. Moral Suasion: Periodic meetings and persuasive appeals by the central bank to commercial banks to follow credit rationing guidelines."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "An economy is suffering from severe 'Deficient Demand' (Deflationary Gap / Economic Recession). Explain how the Central Bank can use the following tools to revive economic activity: [6 Marks]\n(a) Bank Rate\n(b) Cash Reserve Ratio (CRR)\n(c) Open Market Operations (OMO)",
        "answer": "Detailed examination of cutting Bank Rate, reducing CRR, and purchasing government securities to inject liquidity and stimulate demand.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Bank Rate [2 Marks]:\n  - Mechanism: The central bank decreases the Bank Rate (the long-term refinancing rate).\n  - Impact: Commercial banks borrow from the central bank at lower cost and reduce retail lending interest rates. Cheaper business and personal credit encourages capital investment and durable goods consumption, lifting aggregate demand.\n• (b) Cash Reserve Ratio (CRR) [2 Marks]:\n  - Mechanism: The central bank lowers the CRR percentage.\n  - Impact: Commercial banks need to keep less idle cash with the RBI, freeing up lendable reserves. The money multiplier expands, credit availability increases, and business investment revives.\n• (c) Open Market Operations (OMO) [2 Marks]:\n  - Mechanism: The central bank conducts open market purchases of government securities from commercial banks and institutional investors.\n  - Impact: Cash flows from the central bank into the commercial banking system, boosting excess reserves and expanding credit creation across the economy."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "What is meant by 'Money Supply'? Explain the M1 and M3 measures of money supply in India. Why is M1 called narrow money and M3 broad money? [6 Marks]",
        "answer": "Concept of money supply; Detailed breakdown of M1 and M3; Narrow vs Broad money distinction.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks for concept + 2 Marks for M1/M3 + 2 Marks for narrow/broad rationale):\n• Meaning of Money Supply [2 Marks]:\n  The total stock of money (currency, coins, demand deposits) in circulation held by the public at a specific point in time in an economy (excluding money held by the government and the banking system).\n• M1 and M3 Measures [2 Marks (1 Mark each)]:\n  - M1 = Currency with Public (C) + Demand Deposits with Commercial Banks (DD) + Other Deposits with RBI (OD).\n  - M3 = M1 + Time Deposits (Fixed Deposits) with Commercial Banks.\n• Narrow vs. Broad Money Rationale [2 Marks]:\n  - M1 is called 'Narrow Money' because it includes only the most liquid transactional assets (cash and demand deposits) directly usable as media of exchange.\n  - M3 is called 'Broad Money' because it incorporates time/fixed deposits with banks along with M1, reflecting total liquid and store-of-value monetary purchasing power in the economy."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Suppose the banking system receives an initial primary cash deposit of ₹2,000 crore. If the Legal Reserve Ratio (LRR) is 25%:\n(a) Calculate the Money Multiplier. [1 Mark]\n(b) Calculate the Total Money (Credit) created by the banking system. [2 Marks]\n(c) Calculate the Total Amount of Loans generated. [1 Mark]\n(d) What will happen to the total credit created if the LRR is increased to 50%? Explain with calculations. [2 Marks]",
        "answer": "(a) Multiplier = 4; (b) Total Credit = ₹8,000 Crore; (c) Loans = ₹6,000 Crore; (d) If LRR = 50%, Multiplier drops to 2, Total Credit contracts to ₹4,000 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Calculate Money Multiplier [1 Mark]:\n  Multiplier = 1 / LRR = 1 / 0.25 = 4.\n• (b) Calculate Total Money / Deposits Created [2 Marks]:\n  Total Deposits = Initial Deposit × Multiplier = ₹2,000 × 4 = ₹8,000 Crore.\n• (c) Total Loans Generated [1 Mark]:\n  Total Reserves = 25% of ₹8,000 = ₹2,000 Crore.\n  Total Loans = Total Deposits - Reserves = ₹8,000 - ₹2,000 = ₹6,000 Crore.\n• (d) Impact of Increasing LRR to 50% [2 Marks]:\n  - New Multiplier = 1 / 0.50 = 2 [1 Mark]\n  - New Total Credit Created = ₹2,000 × 2 = ₹4,000 Crore.\n  - Conclusion: Total credit creation capacity is halved (from ₹8,000 crore to ₹4,000 crore), demonstrating the inverse relationship between LRR and money creation [1 Mark]."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Explain the following functions of the Central Bank with suitable operational illustrations: [6 Marks]\n(a) Controller of Money Supply and Credit\n(b) Custodian of Foreign Exchange Reserves\n(c) Clearing House Function",
        "answer": "Detailed examination of Controller of Credit, Custodian of Forex, and Clearing House.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Controller of Credit [2 Marks]:\n  The primary macroeconomic function of the Central Bank. Uses quantitative tools (Repo, CRR, SLR, OMO) and qualitative tools (margin requirements, moral suasion) to regulate the volume and direction of credit, keeping inflation and deflation in check.\n• (b) Custodian of Foreign Exchange Reserves [2 Marks]:\n  The Central Bank maintains and manages the nation's foreign exchange reserves (US Dollars, Euros, Gold, SDRs). It intervenes in foreign exchange markets by buying or selling foreign currencies (Managed Floating) to stabilize the external value of the domestic currency.\n• (c) Clearing House Function [2 Marks]:\n  Because all commercial banks maintain reserve accounts with the Central Bank, mutual financial claims and cheque clearances between banks are settled through simple debit and credit book entries at the central clearing house, avoiding unnecessary cash transfers."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Explain how commercial banks create credit out of primary deposits. What are the two primary limitations on the credit creation capacity of commercial banks? [6 Marks]",
        "answer": "Fractional reserve mechanism; Limitations: Magnitude of cash deposits and Legal Reserve Ratio.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks for mechanism + 3 Marks for limitations):\n• Credit Creation Mechanism [3 Marks]:\n  When a customer deposits cash (primary deposit), the bank keeps a mandatory fraction (LRR) to honor daily cash withdrawals. The remaining surplus is lent out. When granting loans, the bank does not pay cash; it opens a secondary/derivative deposit account for the borrower. When the borrower spends this money, it is deposited in another bank, initiating a multi-round credit expansion cycle.\n• Two Primary Limitations [3 Marks (1.5 Marks each)]:\n  1. Size of Initial Cash Deposits: The total credit created is a direct multiple of the primary cash deposits received from the public. If people hoard cash at home instead of depositing it, bank credit capacity is curtailed.\n  2. Legal Reserve Ratio (LRR): The higher the LRR (CRR + SLR) set by the Central Bank, the lower the money multiplier, restricting credit creation."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Differentiate between: [6 Marks]\n(a) Central Bank and Commercial Bank\n(b) Repo Rate and Bank Rate\n(c) Primary Deposit and Derivative Deposit",
        "answer": "Comprehensive differentiation across Central/Commercial Bank, Repo/Bank Rate, and Primary/Derivative Deposit.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Central Bank vs Commercial Bank [2 Marks]:\n  - Central Bank: Apex regulatory monetary authority; no public retail dealings; solely driven by public economic welfare; issues currency notes.\n  - Commercial Bank: Financial profit-seeking intermediary; accepts retail public deposits and grants loans; no currency issuing authority.\n• (b) Repo Rate vs Bank Rate [2 Marks]:\n  - Repo Rate: Short-term lending rate charged by the Central Bank against government securities collateral under repurchase agreements.\n  - Bank Rate: Long-term discount/lending rate charged by the Central Bank without collateral backing.\n• (c) Primary Deposit vs Derivative Deposit [2 Marks]:\n  - Primary Deposit: Actual physical cash deposited by customers into bank accounts, forming the foundation of reserves.\n  - Derivative Deposit: Secondary credit balances created by the bank when sanctioning loans to borrowers, multiplying the money supply."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 4,
      "book": "Part A: Introductory Macroeconomics",
      "title": "Determination of Income and Employment",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 3: Determination of Income and Employment (12 Marks in Board Exam)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If the Marginal Propensity to Consume (MPC) is 0.8, what is the value of the Investment Multiplier (k)?",
        "options": [
          "(a) 4",
          "(b) 5",
          "(c) 8",
          "(d) 10"
        ],
        "answer": "(b) 5",
        "explanation": "Multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "At the 'Break-Even Point', which of the following conditions holds true?",
        "options": [
          "(a) Consumption is equal to National Income (C = Y) and Saving is zero (S = 0)",
          "(b) Consumption is zero",
          "(c) Investment is equal to National Income",
          "(d) APC is zero"
        ],
        "answer": "(a) Consumption is equal to National Income (C = Y) and Saving is zero (S = 0)",
        "explanation": "At the break-even point, total consumption equals total income (C = Y), meaning savings S = 0 and APC = C / Y = 1."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following represents the correct relationship between APC and APS?",
        "options": [
          "(a) APC - APS = 1",
          "(b) APC + APS = 1",
          "(c) APC × APS = 1",
          "(d) APC / APS = 1"
        ],
        "answer": "(b) APC + APS = 1",
        "explanation": "Since Y = C + S, dividing both sides by Y gives Y/Y = C/Y + S/Y, which simplifies to 1 = APC + APS."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The consumption function is given as C = 100 + 0.75Y. What is the value of Autonomous Consumption and Marginal Propensity to Save (MPS)?",
        "options": [
          "(a) Autonomous Consumption = 100, MPS = 0.25",
          "(b) Autonomous Consumption = 75, MPS = 0.25",
          "(c) Autonomous Consumption = 100, MPS = 0.75",
          "(d) Autonomous Consumption = 25, MPS = 0.75"
        ],
        "answer": "(a) Autonomous Consumption = 100, MPS = 0.25",
        "explanation": "In C = c̄ + bY, autonomous consumption c̄ = 100 and MPC (b) = 0.75. Since MPC + MPS = 1, MPS = 1 - 0.75 = 0.25."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "When Aggregate Demand (AD) is GREATER than Aggregate Supply (AS) in an economy, how do producers restore equilibrium?",
        "options": [
          "(a) They face unplanned accumulation of unsold inventories and cut production",
          "(b) They face unplanned decumulation of inventories (depletion of stocks) and expand production and employment",
          "(c) They stop hiring labor permanently",
          "(d) They decrease prices to zero"
        ],
        "answer": "(b) They face unplanned decumulation of inventories (depletion of stocks) and expand production and employment",
        "explanation": "When AD > AS, buyers demand more goods than currently produced, causing unexpected inventory drawdowns. Producers respond by expanding output and hiring more workers until AD = AS."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "What is the minimum and maximum possible value of the Investment Multiplier (k)?",
        "options": [
          "(a) Minimum = 0, Maximum = 1",
          "(b) Minimum = 1, Maximum = Infinity (∞)",
          "(c) Minimum = -1, Maximum = +1",
          "(d) Minimum = 0, Maximum = 10"
        ],
        "answer": "(b) Minimum = 1, Maximum = Infinity (∞)",
        "explanation": "When MPC = 0, k = 1 / (1 - 0) = 1 (minimum). When MPC = 1, k = 1 / (1 - 1) = 1 / 0 = ∞ (maximum)."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "The situation where Aggregate Demand exceeds Aggregate Supply corresponding to full employment level of output is known as:",
        "options": [
          "(a) Deficient Demand / Deflationary Gap",
          "(b) Excess Demand / Inflationary Gap",
          "(c) Underemployment Equilibrium",
          "(d) Full Employment Equilibrium"
        ],
        "answer": "(b) Excess Demand / Inflationary Gap",
        "explanation": "Excess Demand occurs when AD exceeds AS at full employment, creating an 'Inflationary Gap' that drives prices up without increasing real output."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "If an additional investment of ₹500 crore generates an additional national income of ₹2,500 crore, what is the value of Marginal Propensity to Consume (MPC)?",
        "options": [
          "(a) 0.5",
          "(b) 0.6",
          "(c) 0.8",
          "(d) 0.75"
        ],
        "answer": "(c) 0.8",
        "explanation": "Multiplier k = ΔY / ΔI = 2,500 / 500 = 5. Since k = 1 / (1 - MPC), 5 = 1 / (1 - MPC) ⇒ 1 - MPC = 0.2 ⇒ MPC = 0.8."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Which of the following can NEVER be negative?",
        "options": [
          "(a) Average Propensity to Save (APS)",
          "(b) Average Propensity to Consume (APC)",
          "(c) Net National Product",
          "(d) Saving"
        ],
        "answer": "(b) Average Propensity to Consume (APC)",
        "explanation": "APC = C / Y. Even at zero income, autonomous consumption is positive (c̄ > 0), so consumption C can never be negative or zero. Hence, APC can never be negative."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In a two-sector economy (Households and Firms), the components of Aggregate Demand (AD) are:",
        "options": [
          "(a) Consumption (C) and Saving (S)",
          "(b) Consumption (C) and Investment (I)",
          "(c) Investment (I) and Net Exports (X - M)",
          "(d) Government Expenditure (G) and Taxes (T)"
        ],
        "answer": "(b) Consumption (C) and Investment (I)",
        "explanation": "In a simple two-sector macroeconomic model without government or foreign trade, AD = C + I."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The slope of the Consumption curve is represented by:",
        "options": [
          "(a) Average Propensity to Consume (APC)",
          "(b) Marginal Propensity to Consume (MPC)",
          "(c) Marginal Propensity to Save (MPS)",
          "(d) Autonomous Consumption"
        ],
        "answer": "(b) Marginal Propensity to Consume (MPC)",
        "explanation": "The slope of the linear consumption line C = c̄ + bY is given by ΔC / ΔY, which is the Marginal Propensity to Consume (b or MPC)."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What is meant by 'Involuntary Unemployment'?",
        "options": [
          "(a) People who are not willing to work at the prevailing wage rate",
          "(b) A situation where people who are able and willing to work at the prevailing wage rate cannot find work",
          "(c) People who quit jobs to take a vacation",
          "(d) Retired senior citizens"
        ],
        "answer": "(b) A situation where people who are able and willing to work at the prevailing wage rate cannot find work",
        "explanation": "Involuntary unemployment occurs when able-bodied individuals who actively seek employment at going market wage rates fail to secure jobs due to deficient aggregate demand."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "If the saving function of an economy is S = -50 + 0.2Y, the corresponding consumption function is:",
        "options": [
          "(a) C = 50 + 0.8Y",
          "(b) C = -50 + 0.8Y",
          "(c) C = 50 + 0.2Y",
          "(d) C = 100 + 0.8Y"
        ],
        "answer": "(a) C = 50 + 0.8Y",
        "explanation": "Since Y = C + S, C = Y - S = Y - (-50 + 0.2Y) = 50 + (1 - 0.2)Y = 50 + 0.8Y."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "To correct 'Excess Demand' using Fiscal Policy, the government should:",
        "options": [
          "(a) Increase government expenditure and decrease taxes",
          "(b) Decrease government expenditure and increase taxes",
          "(c) Reduce CRR and Repo Rate",
          "(d) Print more currency notes"
        ],
        "answer": "(b) Decrease government expenditure and increase taxes",
        "explanation": "A contractionary fiscal policy reduces government spending and hikes taxes, lowering disposable income and private consumption, which eliminates the inflationary gap."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When National Income increases from ₹1,000 crore to ₹1,500 crore, consumption expenditure increases from ₹800 crore to ₹1,200 crore. What is the value of MPC?",
        "options": [
          "(a) 0.6",
          "(b) 0.8",
          "(c) 0.75",
          "(d) 0.5"
        ],
        "answer": "(b) 0.8",
        "explanation": "ΔY = 1,500 - 1,000 = 500; ΔC = 1,200 - 800 = 400. MPC = ΔC / ΔY = 400 / 500 = 0.8."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In Keynesian macroeconomic theory, the Aggregate Supply curve is represented by a:",
        "options": [
          "(a) Horizontal straight line parallel to the X-axis",
          "(b) 45-degree line originating from the origin",
          "(c) Vertical line parallel to the Y-axis",
          "(d) Downward sloping curve"
        ],
        "answer": "(b) 45-degree line originating from the origin",
        "explanation": "The 45-degree line represents AS = Y because every point on this line has Aggregate Expenditure equal to National Income (Output)."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The vertical intercept of the linear consumption function on the Y-axis represents:",
        "options": [
          "(a) Marginal Propensity to Consume",
          "(b) Autonomous Consumption (c̄)",
          "(c) Induced Investment",
          "(d) Break-Even Income"
        ],
        "answer": "(b) Autonomous Consumption (c̄)",
        "explanation": "At zero income (Y = 0), consumption equals autonomous consumption (c̄), which is the Y-intercept of the consumption schedule."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "If MPC = MPS, what is the value of the investment multiplier?",
        "options": [
          "(a) 1",
          "(b) 2",
          "(c) 0.5",
          "(d) 4"
        ],
        "answer": "(b) 2",
        "explanation": "Since MPC + MPS = 1 and MPC = MPS, MPS = 0.5. Multiplier k = 1 / MPS = 1 / 0.5 = 2."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is 'Deflationary Gap'?",
        "options": [
          "(a) The amount by which Aggregate Demand falls short of Aggregate Supply at full employment level",
          "(b) The gap between exports and imports",
          "(c) The difference between direct and indirect taxes",
          "(d) The excess of actual demand over full employment demand"
        ],
        "answer": "(a) The amount by which Aggregate Demand falls short of Aggregate Supply at full employment level",
        "explanation": "Deflationary Gap measures the shortfall of aggregate demand below the level required to maintain full employment output, causing underemployment and price drops."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following is an example of 'Autonomous Investment'?",
        "options": [
          "(a) Private company building a factory solely to earn quarterly profit",
          "(b) Government constructing national highways and rural roads for public welfare regardless of current income",
          "(c) Buying shares on the stock exchange",
          "(d) Purchasing raw material for immediate resale"
        ],
        "answer": "(b) Government constructing national highways and rural roads for public welfare regardless of current income",
        "explanation": "Autonomous investment is income-inelastic, undertaken by the government for social infrastructure and community welfare independent of current output or income levels."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "Can the value of Average Propensity to Consume (APC) ever be greater than 1?",
        "options": [
          "(a) No, never",
          "(b) Yes, at income levels below the break-even point where consumption exceeds income due to dissaving",
          "(c) Yes, only when saving is positive",
          "(d) Yes, when MPC = 0"
        ],
        "answer": "(b) Yes, at income levels below the break-even point where consumption exceeds income due to dissaving",
        "explanation": "When income is very low, households dissave (consume past savings or borrow) to meet basic needs, making C > Y and therefore APC = C / Y > 1."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "What is the relation between Marginal Propensity to Consume (MPC) and Investment Multiplier (k)?",
        "options": [
          "(a) Inverse relationship",
          "(b) Direct (positive) relationship",
          "(c) No relationship",
          "(d) Negative exponential relationship"
        ],
        "answer": "(b) Direct (positive) relationship",
        "explanation": "There is a direct positive relationship: as MPC increases, 1 - MPC decreases, making k = 1 / (1 - MPC) larger."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Under the 'Saving and Investment Approach', equilibrium national income is achieved when:",
        "options": [
          "(a) Ex-ante Saving = Ex-ante Investment",
          "(b) Actual Saving > Actual Investment",
          "(c) Ex-post Saving = Zero",
          "(d) Ex-ante Investment is double of Ex-ante Saving"
        ],
        "answer": "(a) Ex-ante Saving = Ex-ante Investment",
        "explanation": "Equilibrium occurs where planned (ex-ante) saving equals planned (ex-ante) investment: S = I."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What is the economic consequence if planned saving is GREATER than planned investment (S > I)?",
        "options": [
          "(a) Output and income will expand rapidly",
          "(b) Inventories will pile up unsold, causing producers to cut output and employment until S = I",
          "(c) Prices will rise to record highs",
          "(d) Banks will run out of cash"
        ],
        "answer": "(b) Inventories will pile up unsold, causing producers to cut output and employment until S = I",
        "explanation": "When S > I, households spend less on consumption than firms expected, resulting in unsold inventory pile-ups. Firms cut production and lay off workers, lowering national income until S falls back into equality with I."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "In the saving function S = -40 + 0.25Y, what does '-40' signify?",
        "options": [
          "(a) Autonomous Saving / Dissaving at zero income",
          "(b) Marginal Propensity to Save",
          "(c) Investment multiplier",
          "(d) Equilibrium income"
        ],
        "answer": "(a) Autonomous Saving / Dissaving at zero income",
        "explanation": "At Y = 0, consumption is ₹40 crore financed by drawing down past savings or borrowing, so saving is -40 (dissaving)."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The value of the Investment Multiplier varies directly with the Marginal Propensity to Consume (MPC).\nReason (R): A higher MPC means that recipients of initial investment spending will spend a larger fraction of their income on consumption, generating larger successive rounds of income.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. One person's spending becomes another person's income; the higher the propensity to consume, the stronger this expansionary multiplier effect."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Full employment does not mean zero unemployment in an economy.\nReason (R): Even in a fully employed economy, natural frictional and structural unemployment always exist as workers switch jobs or upgrade skills.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Full employment is the absence of involuntary unemployment; it coexists with the natural rate of unemployment (frictional and structural)."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Average Propensity to Consume (APC) falls continuously as national income increases.\nReason (R): As household income rises, the proportion of income spent on consumption decreases while the proportion devoted to saving increases.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. According to Keynes' psychological law of consumption, consumption increases with income, but by less than the increase in income, causing APC to fall."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): An increase in government expenditure is an effective fiscal remedy to eliminate a Deflationary Gap.\nReason (R): Government expenditure is an autonomous component of Aggregate Demand that injects purchasing power and shifts AD upward.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Public spending directly raises AD, restoring equilibrium at full employment."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): At the break-even point, Marginal Propensity to Consume (MPC) must equal 1.\nReason (R): At the break-even point, Average Propensity to Consume (APC) is equal to 1 because total consumption equals total income.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) (A) is false but (R) is true",
          "(c) (A) is true but (R) is false",
          "(d) Both (A) and (R) are false"
        ],
        "answer": "(b) (A) is false but (R) is true",
        "explanation": "Assertion is false: at break-even point, APC = 1, but MPC is the ratio of change (ΔC/ΔY) and can take any value between 0 and 1. Reason is true."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Define 'Marginal Propensity to Consume' (MPC) and 'Marginal Propensity to Save' (MPS). Prove that MPC + MPS = 1. [3 Marks]",
        "answer": "Definitions of MPC and MPS; Algebraic proof that MPC + MPS = 1.",
        "explanation": "Marking Scheme:\n• 1. Definitions [1 Mark]:\n  - MPC: The ratio of change in consumption expenditure (ΔC) to the change in total national income (ΔY). MPC = ΔC / ΔY.\n  - MPS: The ratio of change in savings (ΔS) to the change in total national income (ΔY). MPS = ΔS / ΔY.\n• 2. Algebraic Proof [2 Marks]:\n  - We know that total income change is split between consumption and saving: ΔY = ΔC + ΔS.\n  - Dividing both sides by ΔY:\n    ΔY / ΔY = (ΔC / ΔY) + (ΔS / ΔY)\n    1 = MPC + MPS\n  - Hence proved, MPC + MPS = 1."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "In an economy, the consumption function is C = 200 + 0.8Y and autonomous investment (I) is ₹300 crore. Calculate:\n(a) Equilibrium level of National Income (Y)\n(b) Consumption expenditure at equilibrium [3 Marks]",
        "answer": "(a) Equilibrium Income Y = ₹2,500 Crore; (b) Consumption C = ₹2,200 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Equilibrium Income [2 Marks]:\n  - At equilibrium: Y = C + I\n  - Y = (200 + 0.8Y) + 300\n  - Y - 0.8Y = 500\n  - 0.2Y = 500 ⇒ Y = 500 / 0.2 = ₹2,500 Crore. [2 Marks]\n• (b) Consumption at Equilibrium [1 Mark]:\n  - C = 200 + 0.8(2,500) = 200 + 2,000 = ₹2,200 Crore. [1 Mark]"
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "What is 'Involuntary Unemployment'? How does it differ from 'Voluntary Unemployment'? [3 Marks]",
        "answer": "Involuntary: willing and able but without work; Voluntary: unwilling to work at prevailing wages.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Involuntary Unemployment: A situation where able-bodied persons who are willing and capable of working at the prevailing market wage rates fail to find employment due to insufficient aggregate demand in the economy. This is counted in official unemployment statistics.\n• 2. Voluntary Unemployment: A situation where persons choose not to work at the prevailing wage rate, either because they have other financial support or prefer leisure. This is not treated as macroeconomic unemployment."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the concept of 'Inflationary Gap' with a neat graphical diagram. [4 Marks]",
        "answer": "Excess of AD over AS at full employment; Graphical illustration of AD full vs AD actual.",
        "explanation": "Marking Scheme (2 Marks concept + 2 Marks diagram):\n• Concept [2 Marks]: Inflationary Gap is the extent to which Aggregate Demand exceeds Aggregate Supply corresponding to the full employment level of output. Because resources are already fully employed, this gap cannot increase real production; it causes demand-pull inflation.\n• Diagram [2 Marks]: Draw a 45-degree AS line and full employment output Yf. Draw AD at full employment (ADf) cutting AS at full employment. Draw actual AD line (AD1) lying above ADf. The vertical distance between AD1 and ADf at Yf represents the Inflationary Gap."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "If investment increases by ₹400 crore and the Marginal Propensity to Save (MPS) is 0.2, calculate:\n(a) Value of the Investment Multiplier\n(b) Total increase in National Income\n(c) Total increase in Consumption expenditure [3 Marks]",
        "answer": "(a) Multiplier = 5; (b) Increase in Income = ₹2,000 Crore; (c) Increase in Consumption = ₹1,600 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Multiplier k = 1 / MPS = 1 / 0.2 = 5. [1 Mark]\n• (b) ΔY = k × ΔI = 5 × ₹400 = ₹2,000 Crore. [1 Mark]\n• (c) Since MPS = 0.2, MPC = 1 - 0.2 = 0.8.\n  ΔC = MPC × ΔY = 0.8 × ₹2,000 = ₹1,600 Crore. [1 Mark]"
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain the adjustment mechanism if Planned Saving is LESS than Planned Investment (S < I). [3 Marks]",
        "answer": "When S < I, AD > AS; inventories fall below desired levels, prompting firms to expand output and employment until S = I.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Imbalance: When planned saving is less than planned investment (S < I), planned expenditure exceeds planned output (AD > AS).\n• 2. Inventory Effect: Retailers and producers face unplanned depletion (decumulation) of inventory stocks as goods sell faster than produced.\n• 3. Output Adjustment: To restore desired inventory levels, producers hire more workers and raise production. National income increases, and because savings rise with income, saving expands until planned saving equals planned investment (S = I)."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "Distinguish between 'Autonomous Consumption' and 'Induced Consumption'. [3 Marks]",
        "answer": "Autonomous consumption is independent of income (c̄); Induced consumption depends on income (bY).",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Autonomous Consumption (c̄): The baseline subsistence consumption expenditure that occurs even when national income is zero (Y = 0). It is financed by drawing down past savings, selling assets, or borrowing. It is income-inelastic.\n• 2. Induced Consumption (bY): The component of consumption expenditure that varies directly with changes in national income. It is calculated as MPC × Income (bY). As income rises, induced consumption increases."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain the role of 'Taxes' and 'Government Spending' in correcting 'Excess Demand'. [4 Marks]",
        "answer": "Contractionary fiscal policy: raising taxes lowers disposable income; cutting government spending directly lowers AD.",
        "explanation": "Marking Scheme (2 Marks each):\n• 1. Increasing Taxes: During excess demand, the government raises direct taxes (personal income tax, corporate tax). This reduces households' disposable income, curbing consumer demand for goods and services.\n• 2. Decreasing Government Spending: The government curtails public expenditures on capital projects, administrative purchases, and subsidies. Since government spending is a direct component of AD, this reduction directly shrinks AD and eliminates the inflationary gap."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Can the value of Average Propensity to Save (APS) be negative? If yes, under what circumstances? [3 Marks]",
        "answer": "Yes, APS is negative at income levels below the break-even point where consumption exceeds income.",
        "explanation": "Marking Scheme:\n• Yes, APS can be negative [1 Mark].\n• Circumstances [2 Marks]: APS = S / Y. At very low levels of national income (below the break-even level), consumption expenditure exceeds national income (C > Y). To survive, households must dissave (withdraw past bank deposits or borrow). Since saving (S) is negative, APS is also negative."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "What is 'Effective Demand'? How is it determined in Keynesian theory? [3 Marks]",
        "answer": "Effective demand is the level of aggregate demand that becomes effective because it is equal to aggregate supply.",
        "explanation": "Marking Scheme:\n• Meaning [1.5 Marks]: Effective demand refers to that specific point on the Aggregate Demand schedule where Aggregate Demand is exactly equal to Aggregate Supply (AD = AS). It represents the actual equilibrium output and employment realized in the economy.\n• Determination [1.5 Marks]: Determined at the intersection of the AD curve (C + I) and the 45-degree AS line (C + S). At this equilibrium point, producers have no incentive to expand or contract output."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the working of the 'Investment Multiplier' with the help of a numerical illustration and a round-by-round tabular schedule. Assume an initial increase in investment of ₹1,000 crore and Marginal Propensity to Consume (MPC) of 0.8. [6 Marks]",
        "answer": "Multi-round tabular demonstration of investment multiplier; Initial ΔI = ₹1,000 Cr; MPC = 0.8; Total ΔY = ₹5,000 Cr, Total ΔC = ₹4,000 Cr, Total ΔS = ₹1,000 Cr.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks principle + 3 Marks schedule + 1 Mark formula verification):\n• 1. Multiplier Principle [2 Marks]:\n  - The multiplier operates on the principle that 'one person's expenditure is another person's income'.\n  - An autonomous increase in investment injects income into factor owners.\n  - The recipients spend a fraction (MPC = 0.8) on consumption and save the rest (MPS = 0.2).\n  - This consumption expenditure becomes fresh income for sellers in the next round, continuing until total savings generated equal the initial investment.\n• 2. Tabular Schedule (ΔI = ₹1,000 Cr, MPC = 0.8) [3 Marks]:\n  Round | Increase in Investment (ΔI) | Increase in Income (ΔY) | Increase in Consumption (ΔC) | Increase in Saving (ΔS)\n  Round 1 | 1,000 | 1,000 | 800 | 200\n  Round 2 | — | 800 | 640 | 160\n  Round 3 | — | 640 | 512 | 128\n  Round 4 | — | 512 | 409.6 | 102.4\n  ... | ... | ... | ... | ...\n  TOTAL | 1,000 | 5,000 | 4,000 | 1,000\n• 3. Verification [1 Mark]:\n  - Multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.8) = 1 / 0.2 = 5.\n  - Total Increase in National Income (ΔY) = k × ΔI = 5 × ₹1,000 = ₹5,000 Crore."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the determination of Equilibrium Level of National Income using the 'Aggregate Demand and Aggregate Supply (AD-AS)' approach. What changes take place when AD is NOT equal to AS? [6 Marks]",
        "answer": "AD-AS equilibrium determination with diagram; Detailed analysis of adjustments when AD > AS and AD < AS.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks equilibrium + 2 Marks AD > AS + 2 Marks AD < AS):\n• 1. Equilibrium Determination [2 Marks]:\n  - According to Keynes, equilibrium national income is achieved where Aggregate Demand equals Aggregate Supply (AD = AS), where AD = C + I and AS = C + S (the 45-degree line).\n  - Graphically, equilibrium is established at point E where the AD schedule intersects the 45-degree line, yielding equilibrium income Ye.\n• 2. When AD > AS [2 Marks]:\n  - Aggregate expenditure exceeds current output. Buyers purchase more than firms produce.\n  - Unplanned depletion (decumulation) of inventory stocks occurs.\n  - To rebuild stocks to desired levels, firms expand production and hire more labor.\n  - Output and income increase until AD = AS.\n• 3. When AD < AS [2 Marks]:\n  - Current output exceeds aggregate expenditure. Goods remain unsold.\n  - Unplanned accumulation of inventory takes place.\n  - To reduce excessive unsold inventory, producers cut back production and reduce employment.\n  - Income and output fall until AD = AS."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Explain the determination of Equilibrium National Income using the 'Saving and Investment (S-I)' approach. What automatic adjustment occurs if Planned Saving is GREATER than Planned Investment? [6 Marks]",
        "answer": "S-I equilibrium framework; Adjustment mechanism when S > I (inventory accumulation, output cuts, income drops until S = I).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks derivation + 2 Marks diagram + 2 Marks S > I adjustment):\n• 1. Derivation of S-I Approach [2 Marks]:\n  - At equilibrium, AD = AS.\n  - In a two-sector economy, AD = C + I and AS = C + S.\n  - Therefore, C + I = C + S, which simplifies to S = I (Planned Saving = Planned Investment).\n• 2. Diagrammatic Representation [2 Marks]:\n  - Plot Investment (I) as an autonomous horizontal line parallel to the X-axis.\n  - Plot Saving (S) starting below the origin (due to dissaving -c̄) and sloping upward.\n  - The intersection point E where S = I determines the equilibrium income Ye.\n• 3. Adjustment when Planned Saving > Planned Investment (S > I) [2 Marks]:\n  - When S > I, households are withdrawing more purchasing power from the income stream than firms are injecting as investment.\n  - Consequently, Aggregate Demand falls short of Aggregate Supply (AD < AS), causing unsold inventories to accumulate.\n  - Firms respond by cutting production, reducing factor payments, and laying off workers.\n  - National income falls, which reduces household savings until planned saving equals planned investment (S = I)."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What is 'Deficient Demand' (Deflationary Gap)? Explain its impact on:\n(a) Real Output\n(b) Employment\n(c) General Price Level\nExplain how an increase in government expenditure helps to correct this situation. [6 Marks]",
        "answer": "Meaning of Deficient Demand; Impacts on output, employment, and prices; Corrective role of public spending.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks meaning & deflationary gap + 2 Marks impacts + 2 Marks corrective fiscal policy):\n• 1. Meaning of Deficient Demand & Deflationary Gap [2 Marks]:\n  - Deficient demand is when Aggregate Demand falls short of Aggregate Supply at full employment level of output.\n  - The Deflationary Gap measures this deficiency in spending required to maintain full employment.\n• 2. Impacts of Deficient Demand [2 Marks]:\n  - (a) Output: Fall in aggregate demand leads to unplanned inventory build-up, forcing producers to curtail production, causing real GDP to drop below potential full-employment output.\n  - (b) Employment: Lower production causes widespread involuntary unemployment and layoffs.\n  - (c) General Price Level: Weak demand puts downward pressure on prices, leading to deflation.\n• 3. Corrective Role of Government Expenditure [2 Marks]:\n  - The government increases public investments in capital infrastructure (roads, bridges, energy) and social spending.\n  - This directly shifts the AD curve upward, absorbing idle capacity, generating jobs, and eliminating the deflationary gap."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "An economy is in equilibrium at an income level of ₹5,000 crore. The autonomous consumption is ₹250 crore and Marginal Propensity to Save (MPS) is 0.2.\n(a) Calculate the consumption expenditure and saving at equilibrium. [2 Marks]\n(b) Calculate the autonomous investment (I) in the economy. [2 Marks]\n(c) If full employment income is ₹7,000 crore, calculate the additional investment required to reach full employment equilibrium. [2 Marks]",
        "answer": "(a) C = ₹4,250 Cr, S = ₹750 Cr; (b) I = ₹750 Cr; (c) Additional investment required ΔI = ₹400 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Consumption and Saving [2 Marks]:\n  - MPS = 0.2 ⇒ MPC = 1 - 0.2 = 0.8.\n  - Consumption Function: C = 250 + 0.8Y.\n  - At equilibrium (Y = 5,000):\n    C = 250 + 0.8(5,000) = 250 + 4,000 = ₹4,250 Crore. [1 Mark]\n    S = Y - C = 5,000 - 4,250 = ₹750 Crore. [1 Mark]\n• (b) Autonomous Investment [2 Marks]:\n  - At equilibrium, Planned Saving = Planned Investment (S = I).\n  - Therefore, I = ₹750 Crore. [2 Marks]\n• (c) Additional Investment to Reach Full Employment (Yf = ₹7,000 Cr) [2 Marks]:\n  - Desired increase in income ΔY = 7,000 - 5,000 = ₹2,000 Crore. [0.5 Mark]\n  - Multiplier k = 1 / MPS = 1 / 0.2 = 5. [0.5 Mark]\n  - Since ΔY = k × ΔI ⇒ 2,000 = 5 × ΔI ⇒ ΔI = 2,000 / 5 = ₹400 Crore. [1 Mark]"
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Discuss the monetary and fiscal measures adopted to eliminate 'Excess Demand' (Inflationary Gap) in an economy. [6 Marks]",
        "answer": "Detailed examination of Contractionary Fiscal Policy (raising taxes, cutting public spending) and Contractionary Monetary Policy (hiking Repo/Bank Rate, CRR, OMO sales).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks fiscal + 3 Marks monetary):\n• 1. Fiscal Policy Measures [3 Marks]:\n  - Reduction in Government Spending: Government reduces expenditure on administrative services, defense, infrastructure, and subsidies, directly lowering aggregate demand.\n  - Increase in Taxes: Hiking direct and corporate taxes reduces households' disposable income, curbing consumer demand.\n  - Curtailment of Deficit Financing: Restricting borrowing from the central bank reduces excess money creation.\n• 2. Monetary Policy Measures [3 Marks]:\n  - Hike in Policy Rates (Repo Rate & Bank Rate): Raises the cost of borrowing for commercial banks, leading to higher retail lending rates, discouraging business loans.\n  - Increase in Reserve Ratios (CRR and SLR): Commercial banks must freeze more cash with RBI and in liquid assets, shrinking credit creation capacity.\n  - Open Market Sales: RBI sells government securities to commercial banks and the public, mopping up surplus liquidity.\n  - Increase in Margin Requirements: Reduces the borrowing limit against pledged collateral."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Explain the concept of 'Consumption Function'. Derive the 'Saving Function' mathematically and graphically from a linear consumption function. [6 Marks]",
        "answer": "Concept of consumption function; Mathematical derivation of saving function; Graphical derivation.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks mathematical derivation + 2 Marks graphical derivation):\n• 1. Consumption Function Concept [2 Marks]:\n  The functional relationship between aggregate consumption expenditure and national income: C = f(Y). Linear form: C = c̄ + bY, where c̄ is autonomous consumption and b is MPC (0 < b < 1).\n• 2. Mathematical Derivation of Saving Function [2 Marks]:\n  - National income is split between consumption and saving: Y = C + S ⇒ S = Y - C.\n  - Substitute C = c̄ + bY:\n    S = Y - (c̄ + bY)\n    S = -c̄ + (1 - b)Y\n  - Since (1 - b) = MPS (s), the saving function is: S = -c̄ + sY, where -c̄ represents dissaving at zero income.\n• 3. Graphical Derivation [2 Marks]:\n  - Draw the 45-degree reference line (Y = C + S) and the consumption line C = c̄ + bY starting at (0, c̄).\n  - Mark the break-even point B where the C line intersects the 45-degree line (C = Y).\n  - In the panel below, start the saving curve at -c̄ on the negative Y-axis.\n  - Project point B vertically down to the X-axis: at this income level, saving must be exactly zero (S = 0). Connect -c̄ through this zero-saving point to form the upward-sloping saving curve."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Explain the meaning of 'Underemployment Equilibrium'. Can an economy be in equilibrium at less than full employment? Explain using a diagram. [6 Marks]",
        "answer": "Underemployment equilibrium concept; Keynesian justification; AD-AS diagram showing equilibrium below full employment capacity.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks Keynesian justification + 2 Marks diagram):\n• 1. Concept [2 Marks]:\n  Underemployment Equilibrium refers to a macroeconomic state where Aggregate Demand equals Aggregate Supply (AD = AS), but this equilibrium occurs at an output level lower than the full-employment potential of the economy. Involuntary unemployment persists at this equilibrium.\n• 2. Keynesian Justification [2 Marks]:\n  Classical economists assumed market forces always ensure automatic full employment. Keynes refuted this, demonstrating that equilibrium merely requires planned expenditure to equal planned output (AD = AS). If aggregate demand is deficient, equilibrium is established at an underemployment level without any automatic market mechanism to restore full employment.\n• 3. Diagram [2 Marks]:\n  - Draw the 45-degree AS line.\n  - Mark full employment output Yf on the horizontal axis and show the required aggregate demand curve ADf intersecting AS at Ef.\n  - Draw the actual deficient aggregate demand curve AD1 intersecting AS at point E1, corresponding to income Y1 (where Y1 < Yf).\n  - Point E1 represents the Underemployment Equilibrium, and the vertical distance at Yf represents the Deflationary Gap."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "What is 'Paradox of Thrift'? Explain with the help of a numerical example and economic reasoning. [6 Marks]",
        "answer": "Paradox of Thrift: If everyone tries to save more, aggregate savings remain constant or decline due to falling national income.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks economic reasoning + 2 Marks numerical example):\n• 1. Concept of Paradox of Thrift [2 Marks]:\n  The Paradox of Thrift (formulated by Keynes) states that if all individuals in an economy attempt to increase their savings rate (increase MPS), it reduces aggregate demand and consumption, causing total national income to fall. As a result, aggregate savings in the economy do not increase, but instead remain unchanged or may even decline.\n• 2. Economic Reasoning [2 Marks]:\n  - 'One person's expenditure is another person's income.'\n  - When everyone saves more, consumption expenditure drops.\n  - Reduced consumption causes unsold inventories to pile up, prompting firms to cut production and employment.\n  - As national income contracts, the total volume of savings generated contracts because savings depend directly on income level (S = sY).\n• 3. Numerical Example [2 Marks]:\n  - Suppose autonomous investment I = ₹500 crore. In equilibrium, S = I = ₹500 crore.\n  - Initially, MPS = 0.2. Equilibrium income Y = I / MPS = 500 / 0.2 = ₹2,500 crore. Savings = 0.2 × 2,500 = ₹500 crore.\n  - Now suppose society becomes thriftier and increases MPS to 0.25.\n  - New equilibrium income Y' = 500 / 0.25 = ₹2,000 crore.\n  - Total new savings = 0.25 × 2,000 = ₹500 crore.\n  - National income collapsed by ₹500 crore, yet aggregate savings remained at ₹500 crore!"
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "In an economy, the consumption function is C = 150 + 0.75Y and investment expenditure is ₹250 crore.\n(a) Find the equilibrium level of National Income. [2 Marks]\n(b) Find the equilibrium level of Consumption and Saving. [2 Marks]\n(c) What will be the increase in National Income if investment increases by ₹100 crore? [2 Marks]",
        "answer": "(a) Equilibrium Income Y = ₹1,600 Cr; (b) C = ₹1,350 Cr, S = ₹250 Cr; (c) Increase in Income ΔY = ₹400 Crore.",
        "explanation": "Step-by-Step Marking Scheme:\n• (a) Equilibrium Income [2 Marks]:\n  - At equilibrium: Y = C + I\n  - Y = (150 + 0.75Y) + 250\n  - Y - 0.75Y = 400 ⇒ 0.25Y = 400 ⇒ Y = 400 / 0.25 = ₹1,600 Crore. [2 Marks]\n• (b) Equilibrium Consumption and Saving [2 Marks]:\n  - C = 150 + 0.75(1,600) = 150 + 1,200 = ₹1,350 Crore. [1 Mark]\n  - S = Y - C = 1,600 - 1,350 = ₹250 Crore (Notice S = I = 250). [1 Mark]\n• (c) Increase in Income when ΔI = ₹100 Crore [2 Marks]:\n  - Multiplier k = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4. [1 Mark]\n  - ΔY = k × ΔI = 4 × ₹100 = ₹400 Crore. [1 Mark]"
      }
    ]
  },
  {
    "info": {
      "chapter_num": 5,
      "book": "Part A: Introductory Macroeconomics",
      "title": "Government Budget and the Economy",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 4: Government Budget and the Economy (6 Marks in Board Exam)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is a 'Revenue Receipt' of the government?",
        "options": [
          "(a) Recovery of loans granted to state governments",
          "(b) Sale of shares of a Public Sector Undertaking (Disinvestment)",
          "(c) Corporation Tax collected from companies",
          "(d) Market borrowings raised by issuing sovereign bonds"
        ],
        "answer": "(c) Corporation Tax collected from companies",
        "explanation": "Corporation Tax is a tax revenue receipt because it neither creates any liability for the government nor causes any reduction in government assets."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "When the government sells shares of a Public Sector Undertaking (PSU) like Air India to private buyers, this receipt is classified as:",
        "options": [
          "(a) Revenue Receipt",
          "(b) Capital Receipt",
          "(c) Revenue Expenditure",
          "(d) Capital Expenditure"
        ],
        "answer": "(b) Capital Receipt",
        "explanation": "Disinvestment leads to a reduction in the government's financial assets, so it is classified as a Capital Receipt."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Fiscal Deficit is exactly equal to:",
        "options": [
          "(a) Total Expenditure - Total Receipts",
          "(b) Total Borrowings and other liabilities of the government",
          "(c) Revenue Deficit + Primary Deficit",
          "(d) Capital Expenditure - Capital Receipts"
        ],
        "answer": "(b) Total Borrowings and other liabilities of the government",
        "explanation": "Fiscal Deficit measures the total borrowing requirements of the government from all sources to bridge the gap between total expenditure and non-debt receipts."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Primary Deficit is calculated as:",
        "options": [
          "(a) Fiscal Deficit - Interest Payments",
          "(b) Revenue Deficit - Interest Payments",
          "(c) Total Expenditure - Revenue Receipts",
          "(d) Fiscal Deficit + Borrowings"
        ],
        "answer": "(a) Fiscal Deficit - Interest Payments",
        "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. It indicates the government's borrowing needs excluding past debt servicing obligations."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which of the following expenditures by the government creates a physical or financial asset?",
        "options": [
          "(a) Payment of salaries to government school teachers",
          "(b) Construction of a new expressway / highway network",
          "(c) Payment of interest on national public debt",
          "(d) Old-age pensions disbursed under welfare schemes"
        ],
        "answer": "(b) Construction of a new expressway / highway network",
        "explanation": "Construction of highways creates a tangible public capital asset, so it is classified as Capital Expenditure."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "A tax whose burden CANNOT be shifted to another person and is paid directly by the entity on whom it is legally assessed is called:",
        "options": [
          "(a) Indirect Tax",
          "(b) Direct Tax",
          "(c) Goods and Services Tax (GST)",
          "(d) Customs Duty"
        ],
        "answer": "(b) Direct Tax",
        "explanation": "Direct taxes (like Personal Income Tax and Corporate Tax) have their legal incidence and economic impact on the same person; the burden cannot be shifted."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "If the Primary Deficit of a country is zero, it implies that:",
        "options": [
          "(a) The government has no need to borrow at all",
          "(b) Total borrowings of the government are exactly equal to the interest payments on past debt",
          "(c) Revenue Deficit is zero",
          "(d) Fiscal deficit is infinite"
        ],
        "answer": "(b) Total borrowings of the government are exactly equal to the interest payments on past debt",
        "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments. If Primary Deficit = 0, then Fiscal Deficit = Interest Payments."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Heavy excise duties imposed on cigarettes and tobacco products while giving tax exemptions to khadi textiles reflect which budget objective?",
        "options": [
          "(a) Economic Growth",
          "(b) Reallocation of Resources",
          "(c) Management of Public Enterprises",
          "(d) Balance of Payments"
        ],
        "answer": "(b) Reallocation of Resources",
        "explanation": "The government uses differential tax and subsidy policies to discourage harmful demerit goods and promote socially beneficial production."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Which of the following is an example of 'Non-Tax Revenue' for the Central Government?",
        "options": [
          "(a) Customs Duty",
          "(b) GST",
          "(c) Dividends and profits received from Public Sector Undertakings (PSUs)",
          "(d) Securities Transaction Tax"
        ],
        "answer": "(c) Dividends and profits received from Public Sector Undertakings (PSUs)",
        "explanation": "Dividends earned from government equity in enterprises like ONGC, BHEL, and LIC are non-tax commercial revenues."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Repayment of a past loan taken from the World Bank by the Government of India is classified as:",
        "options": [
          "(a) Revenue Expenditure",
          "(b) Capital Expenditure",
          "(c) Capital Receipt",
          "(d) Non-Tax Revenue"
        ],
        "answer": "(b) Capital Expenditure",
        "explanation": "Loan repayment reduces the government's liabilities, meeting the criterion for Capital Expenditure."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "'Escheat' refers to:",
        "options": [
          "(a) Revenue of the government from property left without any legal heir or will",
          "(b) Tax on black money",
          "(c) Money borrowed from IMF",
          "(d) Fine for traffic violation"
        ],
        "answer": "(a) Revenue of the government from property left without any legal heir or will",
        "explanation": "Escheat is the government's legal acquisition of estates or property of individuals who die intestate without leaving any legal heirs."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Interest received by the central government on loans extended to state governments is:",
        "options": [
          "(a) Capital Receipt",
          "(b) Revenue Receipt (Non-Tax)",
          "(c) Capital Expenditure",
          "(d) Revenue Expenditure"
        ],
        "answer": "(b) Revenue Receipt (Non-Tax)",
        "explanation": "Interest received neither creates a liability nor reduces any asset (the loan principal remains unchanged), so it is a non-tax Revenue Receipt."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "The budget presented by the Finance Minister for the coming financial year is an estimate of receipts and expenditures from:",
        "options": [
          "(a) 1st January to 31st December",
          "(b) 1st April to 31st March",
          "(c) 1st July to 30th June",
          "(d) 1st October to 30th September"
        ],
        "answer": "(b) 1st April to 31st March",
        "explanation": "The Indian financial year runs from 1st April to 31st March of the following calendar year."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A persistent high 'Revenue Deficit' indicates that:",
        "options": [
          "(a) The government is spending heavily on productive capital assets",
          "(b) The government is dissaving and using borrowings/disinvestment to finance its day-to-day administrative consumption",
          "(c) The country has an export surplus",
          "(d) Private investment is rising"
        ],
        "answer": "(b) The government is dissaving and using borrowings/disinvestment to finance its day-to-day administrative consumption",
        "explanation": "Revenue Deficit = Revenue Expenditure - Revenue Receipts. It signifies that current consumption exceeds current earnings, forcing the government to borrow for routine expenses."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following is a 'Direct Tax'?",
        "options": [
          "(a) Goods and Services Tax (GST)",
          "(b) Customs Duty",
          "(c) Income Tax",
          "(d) Central Excise Duty"
        ],
        "answer": "(c) Income Tax",
        "explanation": "Income tax is levied directly on personal or corporate income and cannot be shifted onto others."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which budget objective is pursued when the government levies higher progressive tax rates on high-income groups and provides free food grains to BPL families?",
        "options": [
          "(a) Reducing Inequalities in Income and Wealth",
          "(b) Management of Public Sector",
          "(c) Regional balance",
          "(d) Currency stabilization"
        ],
        "answer": "(a) Reducing Inequalities in Income and Wealth",
        "explanation": "Progressive taxation combined with targeted social welfare transfers narrows the gap between the rich and the poor."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Recovery of loans granted by the central government to union territories is a:",
        "options": [
          "(a) Revenue Receipt",
          "(b) Capital Receipt",
          "(c) Revenue Expenditure",
          "(d) Capital Expenditure"
        ],
        "answer": "(b) Capital Receipt",
        "explanation": "When past loans are recovered, the government's financial claim (asset) against the borrower is extinguished, making it a Capital Receipt."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following is an example of 'Revenue Expenditure'?",
        "options": [
          "(a) Purchase of military fighter jets from France",
          "(b) Subsidies provided on agricultural fertilizers",
          "(c) Construction of AIIMS hospital buildings",
          "(d) Equity investment in a public enterprise"
        ],
        "answer": "(b) Subsidies provided on agricultural fertilizers",
        "explanation": "Subsidies are routine transfer expenditures that neither create assets nor reduce liabilities, classifying them as Revenue Expenditure."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If Fiscal Deficit is ₹1,40,000 crore and Interest Payments are ₹35,000 crore, what is the value of the Primary Deficit?",
        "options": [
          "(a) ₹1,75,000 crore",
          "(b) ₹1,05,000 crore",
          "(c) ₹4,000 crore",
          "(d) ₹1,40,000 crore"
        ],
        "answer": "(b) ₹1,05,000 crore",
        "explanation": "Primary Deficit = Fiscal Deficit - Interest Payments = 1,40,000 - 35,000 = ₹1,05,000 crore."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why is 'Borrowing' considered a Capital Receipt?",
        "options": [
          "(a) Because it increases government revenue without any repayment obligation",
          "(b) Because it creates a future repayment liability for the government",
          "(c) Because it reduces physical assets",
          "(d) Because it earns profits"
        ],
        "answer": "(b) Because it creates a future repayment liability for the government",
        "explanation": "Any receipt that creates a liability for repayment is defined as a Capital Receipt."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "Which of the following is a 'Public Good'?",
        "options": [
          "(a) Private luxury car",
          "(b) National Defense and Street Lighting",
          "(c) Branded clothes",
          "(d) Movie tickets"
        ],
        "answer": "(b) National Defense and Street Lighting",
        "explanation": "Public goods are non-rivalrous and non-excludable (like national defense and street lighting), requiring government provision through budget allocations."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "What is the primary danger of an excessively large 'Fiscal Deficit'?",
        "options": [
          "(a) It always leads to immediate currency deflation",
          "(b) It creates an inflationary spiral, causes a debt trap, and crowds out private investment",
          "(c) It eliminates public debt completely",
          "(d) It stops international trade"
        ],
        "answer": "(b) It creates an inflationary spiral, causes a debt trap, and crowds out private investment",
        "explanation": "High fiscal deficits necessitate heavy borrowing, driving up interest rates, fueling inflation via deficit financing, and imposing debt servicing burdens on future generations."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Gifts and grants received from foreign governments and international agencies are classified as:",
        "options": [
          "(a) Capital Receipts",
          "(b) Non-Tax Revenue Receipts",
          "(c) Capital Expenditure",
          "(d) Tax Revenue"
        ],
        "answer": "(b) Non-Tax Revenue Receipts",
        "explanation": "Grants and foreign aid are unrequited receipts that create no liability to repay and cause no reduction in assets, so they are non-tax Revenue Receipts."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The difference between Total Expenditure and Total Receipts is termed as:",
        "options": [
          "(a) Revenue Deficit",
          "(b) Budgetary Deficit",
          "(c) Primary Deficit",
          "(d) Fiscal Deficit"
        ],
        "answer": "(b) Budgetary Deficit",
        "explanation": "Budgetary Deficit = Total Budget Expenditure - Total Budget Receipts."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following is NOT a direct tax in India?",
        "options": [
          "(a) Personal Income Tax",
          "(b) Corporate Profit Tax",
          "(c) Goods and Services Tax (GST)",
          "(d) Wealth Tax"
        ],
        "answer": "(c) Goods and Services Tax (GST)",
        "explanation": "GST is a comprehensive indirect tax levied on the supply of goods and services, whose economic incidence is shifted to the final consumer."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): High fiscal deficits can trigger an inflationary spiral in an developing economy.\nReason (R): When governments finance large fiscal deficits by borrowing from the Central Bank (deficit financing/monetization), it expands high-powered money and aggregate demand without an immediate increase in output.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Monetizing the deficit injects newly printed currency into the economy, stoking demand-pull inflation."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Disinvestment of public sector undertakings is treated as a Capital Receipt.\nReason (R): The sale of government equity shares in state enterprises leads to a permanent reduction in government-owned financial assets.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. By definition, any receipt that liquidates or reduces government assets is a Capital Receipt."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): A zero primary deficit indicates that the government has to borrow only to pay interest on past debt.\nReason (R): Primary deficit is obtained by deducting interest payments from fiscal deficit.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Since Primary Deficit = Fiscal Deficit - Interest Payments, a zero value means all current borrowings are consumed by debt service."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Indirect taxes are considered regressive in nature compared to progressive income taxes.\nReason (R): Indirect taxes are levied at uniform rates on goods consumed by rich and poor alike, taking a higher percentage of income from low-income households.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. A flat indirect tax on a commodity represents a higher proportion of a poor person's income than a rich person's, giving it a regressive incidence."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Payment of interest by the government on national debt is classified as Capital Expenditure.\nReason (R): Payment of interest reduces the principal sovereign debt liability of the government.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Interest payment is a routine Revenue Expenditure because it neither creates assets nor reduces the loan principal (liability)."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Classify the following into Revenue Receipts and Capital Receipts, giving valid reasons: [3 Marks]\n(a) Recovery of loans from State Governments\n(b) Dividend received from state-owned enterprises like SBI\n(c) Funds borrowed from the market through issuing Treasury Bills",
        "answer": "(a) Capital Receipt; (b) Revenue Receipt; (c) Capital Receipt.",
        "explanation": "Marking Scheme (1 Mark each for identification + reason):\n• (a) Recovery of loans: Capital Receipt, because it reduces the financial assets (claims) of the Central Government.\n• (b) Dividend from SBI: Revenue Receipt, because it neither creates any liability nor causes any reduction in government assets.\n• (c) Market borrowings: Capital Receipt, because it creates a legal debt liability for the government to repay in the future."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Distinguish between 'Direct Tax' and 'Indirect Tax' with two examples of each. [3 Marks]",
        "answer": "Direct taxes cannot be shifted (Income/Corporate Tax); Indirect taxes can be shifted (GST/Customs).",
        "explanation": "Marking Scheme (1.5 Marks each category):\n• 1. Direct Taxes: Taxes whose burden cannot be shifted to another entity; the person on whom the tax is legally assessed bears the full incidence. Examples: Personal Income Tax, Corporate Profit Tax.\n• 2. Indirect Taxes: Taxes whose legal burden can be shifted from the seller to the buyer; levied on goods and services. Examples: Goods and Services Tax (GST), Customs Duty."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain 'Reallocation of Resources' as an objective of the Government Budget. [3 Marks]",
        "answer": "Using taxes, subsidies, and public investment to shift resources towards social welfare and away from harmful goods.",
        "explanation": "Marking Scheme (1 Mark per dimension):\n• 1. Tax and Subsidy Policy: Government imposes high excise taxes on harmful commodities (cigarettes, alcohol) to discourage consumption, while granting tax holidays and production subsidies to socially vital goods (khadi, renewable energy, affordable healthcare).\n• 2. Direct Public Production: Government directly produces non-profitable public goods (sanitation, rural roads, national defense) that private markets under-provide.\n• 3. Balanced Allocation: Balances private profit motives with broader social welfare objectives."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "From the following budget data of the Government of India, calculate:\n(a) Revenue Deficit\n(b) Fiscal Deficit\n(c) Primary Deficit [3 Marks]\nData: (₹ in crore)\n- Revenue Expenditure = 40,000\n- Revenue Receipts = 30,000\n- Capital Expenditure = 25,000\n- Capital Receipts (net of borrowings) = 15,000\n- Interest Payments = 5,000",
        "answer": "(a) Revenue Deficit = ₹10,000 Cr; (b) Fiscal Deficit = ₹20,000 Cr; (c) Primary Deficit = ₹15,000 Cr.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each):\n• (a) Revenue Deficit = Revenue Expenditure - Revenue Receipts = 40,000 - 30,000 = ₹10,000 Crore.\n• (b) Fiscal Deficit = (Total Expenditure) - (Revenue Receipts + Non-debt Capital Receipts)\n  = (40,000 + 25,000) - (30,000 + 15,000) = 65,000 - 45,000 = ₹20,000 Crore.\n• (c) Primary Deficit = Fiscal Deficit - Interest Payments = 20,000 - 5,000 = ₹15,000 Crore."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Classify the following into Revenue Expenditure and Capital Expenditure with reasons: [3 Marks]\n(a) Construction of school buildings in tribal regions\n(b) Payment of monthly salaries to government hospital doctors\n(c) Repayment of loan borrowed from Asian Development Bank",
        "answer": "(a) Capital Expenditure; (b) Revenue Expenditure; (c) Capital Expenditure.",
        "explanation": "Marking Scheme (1 Mark each for identification + reason):\n• (a) Construction of school buildings: Capital Expenditure, because it creates a durable physical asset for the government.\n• (b) Salary payment: Revenue Expenditure, because it neither creates any asset nor reduces any government liability.\n• (c) Repayment of ADB loan: Capital Expenditure, because it reduces the external debt liability of the government."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain how the government budget can be used to reduce 'Regional Disparities' in a country. [3 Marks]",
        "answer": "Tax exemptions, subsidies, and public infrastructure investments in economically backward regions.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Tax Concessions & Holidays: Offering multi-year income tax exemptions, GST rebates, and cheap power tariffs to private industrial units set up in underdeveloped and backward districts.\n• 2. Special Economic Zones (SEZs): Establishing designated industrial corridors and export zones in lagging states with ready infrastructure.\n• 3. Public Infrastructure Spending: Allocating higher budgetary capital to construct highways, rail freight lines, irrigation, and power grids in backward areas."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "What is meant by 'Revenue Deficit'? What are its two key economic implications? [3 Marks]",
        "answer": "Excess of revenue expenditure over revenue receipts; Implications: Government dissaving and diversion of capital receipts to consumption.",
        "explanation": "Marking Scheme:\n• Meaning [1 Mark]: The excess of total government revenue expenditure over total revenue receipts: Revenue Deficit = Revenue Expenditure - Revenue Receipts.\n• Implications [2 Marks (1 Mark each)]:\n  1. Government Dissaving: Indicates that the government cannot even meet its day-to-day administrative running expenses from regular earnings.\n  2. Capital Erosion & Debt Growth: Forces the government to finance routine consumption by borrowing or liquidating assets (disinvestment), shrinking capital formation and burdening future generations."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain 'Economic Stability' as an objective of the Government Budget. [3 Marks]",
        "answer": "Counter-cyclical fiscal policy: curbing inflation through surplus budgets and fighting recession via deficit budgets.",
        "explanation": "Marking Scheme (1.5 Marks each scenario):\n• 1. During Inflation (Excess Demand): The government formulates a surplus/contractionary budget by raising taxes and cutting public spending, dampening aggregate demand and stabilizing price levels.\n• 2. During Deflation / Recession (Deficient Demand): The government deploys a deficit/expansionary budget by increasing public capital investments and cutting taxes to boost aggregate purchasing power and revive employment."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Distinguish between 'Revenue Deficit' and 'Fiscal Deficit'. [3 Marks]",
        "answer": "Revenue Deficit covers routine earnings shortfall; Fiscal Deficit reflects total non-debt financing gap (borrowing requirement).",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Revenue Deficit: Measures the difference strictly between routine operational revenue expenditure and revenue receipts (Revenue Exp - Revenue Receipts). It indicates whether government daily consumption is self-financing.\n• 2. Fiscal Deficit: Measures the overall gap between total expenditure (revenue + capital) and non-debt receipts (revenue receipts + non-debt capital receipts). It represents the total net borrowing requirement of the government from all domestic and external sources."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Why are borrowings considered a 'Capital Receipt', whereas tax collections are 'Revenue Receipts'? [3 Marks]",
        "answer": "Borrowings create debt liabilities; Taxes create no liability and reduce no assets.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Borrowings as Capital Receipts: Borrowings from the public, RBI, or foreign bodies create a mandatory legal obligation (liability) for future debt repayment with interest. Under budgetary accounting, any receipt that creates a liability is a Capital Receipt.\n• 2. Taxes as Revenue Receipts: Taxes are compulsory payments legally paid to the government without any quid pro quo (direct benefit). They create no future repayment liability for the state, nor do they reduce any public asset. Hence, they are Revenue Receipts."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the following objectives of the Government Budget in detail: [6 Marks]\n(a) Reducing Inequalities in Income and Wealth\n(b) Reallocation of Resources\n(c) Management of Public Enterprises",
        "answer": "Detailed examination of income inequality reduction, resource reallocation, and public enterprise management.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Reducing Inequalities in Income and Wealth [2 Marks]:\n  - Progressive Taxation: The government imposes higher tax rates on wealthy individuals and corporations while exempting low earners.\n  - Welfare Spending: Revenue collected is redirected toward free public schooling, public healthcare (Ayushman Bharat), subsidized rations (PDS), and direct benefit cash transfers, elevating the real living standards of the underprivileged.\n• (b) Reallocation of Resources [2 Marks]:\n  - Discouraging Demerit Goods: Imposing steep excise taxes and cess on harmful products like tobacco, liquor, and polluting industries.\n  - Encouraging Socially Beneficial Goods: Granting production-linked subsidies and tax concessions to clean energy, electric vehicles, and rural handicrafts.\n  - Direct Provision: Directly financing public goods like street lighting, flood embankments, and national defense where the market fails.\n• (c) Management of Public Enterprises [2 Marks]:\n  - Operating Natural Monopolies: Financing and operating key public utilities (railways, postal network, atomic energy) in the interest of social welfare rather than commercial profit.\n  - Strategic Capital Infusion: Providing budgetary support to state-run enterprises to maintain critical infrastructure and promote employment."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "What is 'Fiscal Deficit'? What are its major macroeconomic implications for an economy? How can a government reduce its fiscal deficit? [6 Marks]",
        "answer": "Meaning of Fiscal Deficit (= Borrowings); Four major implications (Debt trap, Inflation, Foreign dependence, Crowding out); Reduction strategies.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks meaning + 2 Marks implications + 2 Marks reduction strategies):\n• 1. Meaning of Fiscal Deficit [2 Marks]:\n  The excess of total budget expenditure over total budget receipts excluding borrowings:\n  Fiscal Deficit = Total Budget Expenditure - (Revenue Receipts + Non-Debt Capital Receipts).\n  Significance: It indicates the exact volume of total borrowings required by the government to finance its budget.\n• 2. Macroeconomic Implications [2 Marks (0.5 Mark each)]:\n  - (a) Debt Trap: Borrowing increases interest burdens; to pay past interest, the government borrows more, spiraling into a vicious debt trap.\n  - (b) Inflationary Spiral: Deficit financing (printing new money via RBI) increases aggregate money supply, triggering demand-pull inflation.\n  - (c) Crowding Out Effect: Heavy government market borrowing absorbs loanable funds, driving up interest rates and starving private businesses of investment capital.\n  - (d) Erosion of Sovereign Credit Rating: High public debt damages international creditworthiness, deterring foreign direct investment.\n• 3. Measures to Reduce Fiscal Deficit [2 Marks]:\n  - Broadening the tax base through digital enforcement and rationalizing GST rates.\n  - Disinvesting loss-making public sector enterprises to raise non-debt capital.\n  - Rationalizing non-developmental revenue expenditure (reducing untargeted subsidies and administrative overheads)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Given the following budgetary data of an economy, calculate: [6 Marks]\n(a) Revenue Deficit\n(b) Fiscal Deficit\n(c) Primary Deficit\nItems: (₹ in thousand crore)\n1. Tax Revenue = 1,050\n2. Non-Tax Revenue = 250\n3. Revenue Expenditure = 1,600\n4. Capital Expenditure = 700\n5. Recovery of Loans = 120\n6. Disinvestment Receipts = 80\n7. Interest Payments = 400",
        "answer": "(a) Revenue Deficit = ₹300 Thousand Cr; (b) Fiscal Deficit = ₹700 Thousand Cr; (c) Primary Deficit = ₹300 Thousand Cr.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each calculation with formulas):\n• (a) Revenue Deficit [2 Marks]:\n  - Total Revenue Receipts = Tax Revenue + Non-Tax Revenue = 1,050 + 250 = ₹1,300 Thousand Crore.\n  - Revenue Deficit = Revenue Expenditure - Revenue Receipts\n  = 1,600 - 1,300 = ₹300 Thousand Crore. [2 Marks]\n• (b) Fiscal Deficit [2 Marks]:\n  - Total Expenditure = Revenue Expenditure + Capital Expenditure = 1,600 + 700 = ₹2,300 Thousand Crore.\n  - Non-Debt Receipts = Revenue Receipts (1,300) + Non-Debt Capital Receipts (Recovery of Loans 120 + Disinvestment 80 = 200) = ₹1,500 Thousand Crore.\n  - Fiscal Deficit = Total Expenditure - Non-Debt Receipts\n  = 2,300 - 1,500 = ₹700 Thousand Crore. [2 Marks]\n• (c) Primary Deficit [2 Marks]:\n  - Primary Deficit = Fiscal Deficit - Interest Payments\n  = 700 - 400 = ₹300 Thousand Crore. [2 Marks]"
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Explain the classification of Government Budget Receipts into 'Revenue Receipts' and 'Capital Receipts'. Give two distinguishing criteria and two practical examples of each. [6 Marks]",
        "answer": "Detailed criteria (liability creation and asset reduction) for Revenue vs Capital Receipts with practical examples.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks Revenue Receipts + 3 Marks Capital Receipts):\n• 1. Revenue Receipts [3 Marks]:\n  - Definition & Two Criteria: Receipts that satisfy BOTH of the following conditions:\n    (i) They do NOT create any liability for the government (no obligation to return funds).\n    (ii) They do NOT lead to any reduction in the government's assets.\n  - Sub-categories & Examples:\n    (a) Tax Revenue: Personal Income Tax, Corporate Tax, GST, Customs Duty.\n    (b) Non-Tax Revenue: Commercial profits and dividends from PSUs, administrative fees, fines, licenses, and external grants.\n• 2. Capital Receipts [3 Marks]:\n  - Definition & Two Criteria: Receipts that satisfy EITHER of the following conditions:\n    (i) They create a liability for the government (must be repaid in future), OR\n    (ii) They cause a reduction in the assets of the government.\n  - Major Examples:\n    (a) Borrowings: Market loans, loans from RBI, or external loans from IMF/World Bank (creates liabilities).\n    (b) Disinvestment: Sale of PSU shares to private investors (reduces assets).\n    (c) Recovery of Loans: Cash recovered from past loans given to state governments (reduces financial claims/assets)."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Classify the following into Revenue Expenditure and Capital Expenditure, giving clear justification for each: [6 Marks]\n(a) Subsidies provided to farmers on electricity and fertilizers\n(b) Construction of a metro rail network in a metropolitan city\n(c) Repayment of market borrowings\n(d) Grants given to state governments for building cyclone shelters\n(e) Purchase of advanced defense weaponry from abroad\n(f) Payment of old-age pensions to citizens",
        "answer": "Subsidies (Rev), Metro rail (Cap), Repayment of borrowings (Cap), Grants for capital assets (Rev), Defense weaponry (Cap), Old-age pensions (Rev).",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each for classification + reason):\n• (a) Subsidies: Revenue Expenditure. It is a recurring transfer payment that neither creates assets nor reduces liabilities.\n• (b) Metro rail construction: Capital Expenditure. Directly creates a physical capital asset for the public transport network.\n• (c) Repayment of market borrowings: Capital Expenditure. Reduces the sovereign debt liability of the government.\n• (d) Grants to state governments for building assets: Revenue Expenditure. Even though used by states to create assets, for the Central Government it is an unrequited transfer payment that creates no asset in the central accounts.\n• (e) Purchase of defense weaponry: Capital Expenditure. Adds to national capital military hardware and defense assets.\n• (f) Old-age pensions: Revenue Expenditure. Pure social transfer payment; neither creates an asset nor reduces any liability."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Distinguish clearly between: [6 Marks]\n(a) Revenue Deficit and Fiscal Deficit\n(b) Fiscal Deficit and Primary Deficit\n(c) Direct Tax and Indirect Tax",
        "answer": "Comparative differentiation: Rev vs Fiscal Deficit, Fiscal vs Primary Deficit, Direct vs Indirect Tax.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Revenue Deficit vs Fiscal Deficit [2 Marks]:\n  - Revenue Deficit: Focuses solely on the operational consumption gap: Revenue Exp - Revenue Receipts. Reflects government dissaving.\n  - Fiscal Deficit: Measures the total resource gap: Total Exp - Non-debt Receipts. Reflects total borrowing requirements of the government.\n• (b) Fiscal Deficit vs Primary Deficit [2 Marks]:\n  - Fiscal Deficit: Total borrowings required in the current year, including interest obligations incurred by past administrations.\n  - Primary Deficit: Fiscal Deficit minus Interest Payments. Measures current-year spending imbalances independent of past historical debt servicing.\n• (c) Direct Tax vs Indirect Tax [2 Marks]:\n  - Direct Tax: Levied on income/property of individuals and firms; impact and incidence fall on the same entity; non-shiftable (e.g. Income Tax).\n  - Indirect Tax: Levied on goods and services; impact is on seller while incidence is shifted to buyer; shiftable (e.g. GST)."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Explain how the government budget can be utilized as a powerful tool to achieve: [6 Marks]\n(a) Economic Growth\n(b) Price Stability (Control of Inflation and Deflation)",
        "answer": "Detailed analysis of budget tools for economic growth and macroeconomic price stabilization.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks each):\n• (a) Fostering Economic Growth [3 Marks]:\n  - Capital Infrastructure Outlays: Allocating large budgetary sums for transportation (rail, expressways, ports), energy grids, and digital infrastructure lowers logistical costs and crowds in private enterprise.\n  - Investment Incentives: Offering tax holidays, accelerated depreciation, and production-linked incentives (PLI) stimulates domestic industrial manufacturing and capital formation.\n  - Human Capital Development: Budget allocations toward skill training, primary health, and technical education boost worker productivity and potential GDP.\n• (b) Maintaining Price Stability [3 Marks]:\n  - Fighting Inflation (Excess Demand): Deploying contractionary fiscal policy—raising direct taxes to curb disposable income, pruning non-essential administrative spending, and postponing non-critical projects.\n  - Overcoming Deflation (Deficient Demand): Deploying expansionary fiscal policy—cutting taxes to leave more purchasing power in households' hands, increasing public work projects to generate immediate employment and ignite consumer demand."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Discuss the various sources of 'Non-Tax Revenue Receipts' available to the Government of India. [6 Marks]",
        "answer": "Exhaustive breakdown of 6 non-tax sources: Commercial revenues, Fees, Fines/Penalties, Escheats, Grants/Gifts, and Special Assessments.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each for six sources):\n• 1. Commercial Revenues (Profits and Dividends): Earnings and dividend payouts from commercial public sector enterprises (e.g., Indian Railways, NTPC, IOCL, RBI surpluses transferred to the Union government).\n• 2. Administrative Fees: Mandatory payments charged by the government for administrative public services (e.g., passport fees, court fees, university exam fees, land registration fees).\n• 3. Fines and Penalties: Levies imposed on individuals and corporations as punishment for violating statutory laws (e.g., traffic penalties, environmental pollution fines).\n• 4. Escheat: Property and financial assets that revert to the state when the owner dies intestate without leaving any legal heirs or designated will.\n• 5. Grants-in-Aid and External Donations: Financial gifts and development assistance received from foreign governments, philanthropic foundations, and multilateral bodies during peacetime or natural disasters.\n• 6. Special Assessments: Compulsory contributions levied on private property owners whose asset values have surged due to specific government infrastructure development (e.g., building a metro line adjacent to their land)."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Can an economy have a high Fiscal Deficit alongside a zero Primary Deficit? What does such a situation indicate regarding the financial health of the government? [6 Marks]",
        "answer": "Yes, when Fiscal Deficit = Interest Payments; Indicates severe debt trap where all new borrowing is consumed by past debt servicing.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks mathematical relation + 4 Marks economic evaluation):\n• 1. Mathematical Condition [2 Marks]:\n  - We know: Primary Deficit = Fiscal Deficit - Interest Payments.\n  - If Primary Deficit = 0, then:\n    0 = Fiscal Deficit - Interest Payments ⇒ Fiscal Deficit = Interest Payments.\n  - Thus, an economy can indeed have a very large fiscal deficit alongside a zero primary deficit whenever total new borrowing exactly matches the interest bill on past accumulated debt.\n• 2. Economic Interpretation and Financial Health [4 Marks]:\n  - Vicious Debt Trap: This situation indicates acute fiscal distress. The government is not borrowing to build fresh productive assets (schools, hospitals, dams); 100% of its current borrowing is consumed simply servicing past sovereign debts.\n  - Zero Fiscal Headroom: Past debt accumulation leaves zero resources for current developmental or social spending.\n  - Urgency of Fiscal Consolidation: The government must adopt aggressive fiscal reforms—pruning wasteful revenue expenditure, widening the tax base, and restructuring debt to break free from debt sustainability risks."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "From the following information, calculate: [6 Marks]\n(a) Revenue Receipts\n(b) Non-Debt Capital Receipts\n(c) Total Expenditure\n(d) Fiscal Deficit\nData: (₹ in crore)\n1. Revenue Deficit = 2,000\n2. Revenue Expenditure = 8,000\n3. Borrowings = 3,500\n4. Capital Expenditure = 4,000\n5. Interest Payments = 1,200\n6. Primary Deficit = 2,300",
        "answer": "(a) Revenue Receipts = ₹6,000 Cr; (b) Non-Debt Capital Receipts = ₹2,500 Cr; (c) Total Expenditure = ₹12,000 Cr; (d) Fiscal Deficit = ₹3,500 Cr.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each part):\n• (a) Revenue Receipts [1.5 Marks]:\n  - Revenue Deficit = Revenue Expenditure - Revenue Receipts\n  - 2,000 = 8,000 - Revenue Receipts\n  - Revenue Receipts = 8,000 - 2,000 = ₹6,000 Crore.\n• (b) Fiscal Deficit [1.5 Marks]:\n  - Fiscal Deficit = Borrowings = ₹3,500 Crore. (Also verifiable: Primary Deficit + Interest = 2,300 + 1,200 = ₹3,500 Crore).\n• (c) Total Expenditure [1.5 Marks]:\n  - Total Expenditure = Revenue Expenditure + Capital Expenditure\n  = 8,000 + 4,000 = ₹12,000 Crore.\n• (d) Non-Debt Capital Receipts [1.5 Marks]:\n  - Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-Debt Capital Receipts)\n  - 3,500 = 12,000 - (6,000 + Non-Debt Capital Receipts)\n  - 6,000 + Non-Debt Capital Receipts = 12,000 - 3,500 = 8,500\n  - Non-Debt Capital Receipts = 8,500 - 6,000 = ₹2,500 Crore."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 6,
      "book": "Part A: Introductory Macroeconomics",
      "title": "Balance of Payments and Foreign Exchange",
      "author": "CBSE Economics Curriculum",
      "weightage_unit": "Unit 5: Balance of Payments (6 Marks in Board Exam)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following transactions is recorded in the 'Current Account' of Balance of Payments?",
        "options": [
          "(a) Foreign Direct Investment (FDI) made by a multinational company in India",
          "(b) Import of crude oil from Saudi Arabia",
          "(c) External Commercial Borrowing (ECB) raised by an Indian firm from London",
          "(d) Purchase of shares of an American company by an Indian resident"
        ],
        "answer": "(b) Import of crude oil from Saudi Arabia",
        "explanation": "Import of crude oil is an import of visible merchandise goods, which is recorded in the Current Account of BoP."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If the price of 1 US Dollar increases from ₹80 to ₹85, the Indian Rupee has:",
        "options": [
          "(a) Appreciated",
          "(b) Depreciated",
          "(c) Revalued",
          "(d) Demonetized"
        ],
        "answer": "(b) Depreciated",
        "explanation": "When more units of domestic currency are required to buy one unit of foreign currency under a flexible exchange rate regime, the domestic currency depreciates."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Transactions in the Balance of Payments that are undertaken strictly for private profit and are independent of the BoP status are known as:",
        "options": [
          "(a) Accommodating transactions",
          "(b) Autonomous transactions ('Above the line')",
          "(c) Official reserve transactions",
          "(d) Unilateral transfers"
        ],
        "answer": "(b) Autonomous transactions ('Above the line')",
        "explanation": "Autonomous transactions ('above the line') are driven by individual economic motives (profit maximization) without regard to maintaining BoP equilibrium."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Balance of Trade (BoT) reflects the net balance of:",
        "options": [
          "(a) Export of goods minus Import of goods (Visible items only)",
          "(b) Total Current Account receipts minus Total Capital Account receipts",
          "(c) Export of services minus Import of services",
          "(d) Total Inflows of foreign capital minus Total Outflows"
        ],
        "answer": "(a) Export of goods minus Import of goods (Visible items only)",
        "explanation": "Balance of Trade (BoT) is the difference between export of visible merchandise goods and import of visible merchandise goods: BoT = Visible Exports - Visible Imports."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "An Indian software engineer working in California sends money home to his parents in New Delhi. Where will this transaction be recorded in India's BoP?",
        "options": [
          "(a) Credit side of Current Account as Unilateral Transfer",
          "(b) Debit side of Current Account",
          "(c) Credit side of Capital Account as Foreign Investment",
          "(d) Debit side of Capital Account"
        ],
        "answer": "(a) Credit side of Current Account as Unilateral Transfer",
        "explanation": "Remittances from abroad represent an inflow of foreign exchange with no future repayment obligation, recorded as a unilateral transfer on the credit side of the Current Account."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Under a 'Managed Floating Exchange Rate System', the exchange rate is determined by:",
        "options": [
          "(a) Exclusively by international gold reserves",
          "(b) Market forces of demand and supply, with occasional Central Bank intervention to curb excessive volatility",
          "(c) Rigid government decree without any market influence",
          "(d) The International Monetary Fund (IMF) alone"
        ],
        "answer": "(b) Market forces of demand and supply, with occasional Central Bank intervention to curb excessive volatility",
        "explanation": "Managed Floating (dirty floating) allows market forces of demand and supply to set the exchange rate, while the Central Bank buys or sells foreign currency to smooth out excessive swings."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Depreciation of the domestic currency leads to:",
        "options": [
          "(a) Increase in exports and decrease in imports",
          "(b) Decrease in exports and increase in imports",
          "(c) Both exports and imports fall to zero",
          "(d) No change in international trade"
        ],
        "answer": "(a) Increase in exports and decrease in imports",
        "explanation": "Depreciation makes domestic goods cheaper for foreign buyers (boosting exports) and foreign goods more expensive for domestic buyers (curbing imports)."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following is an entry in the 'Capital Account' of Balance of Payments?",
        "options": [
          "(a) Payment of shipping freight charges to foreign shipping lines",
          "(b) Foreign Direct Investment (FDI) inflows into manufacturing plants",
          "(c) Export of agricultural spices",
          "(d) Gifts and donations sent to flood victims abroad"
        ],
        "answer": "(b) Foreign Direct Investment (FDI) inflows into manufacturing plants",
        "explanation": "FDI creates an international financial asset/liability claim, classifying it as a Capital Account transaction."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "If visible exports are ₹800 crore and visible imports are ₹1,000 crore, the Balance of Trade shows a:",
        "options": [
          "(a) Surplus of ₹200 crore",
          "(b) Deficit of ₹200 crore",
          "(c) Balanced trade of ₹1,800 crore",
          "(d) Surplus of ₹1,800 crore"
        ],
        "answer": "(b) Deficit of ₹200 crore",
        "explanation": "Balance of Trade = Visible Exports - Visible Imports = 800 - 1,000 = -₹200 crore (Trade Deficit of ₹200 crore)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The demand curve for foreign exchange slopes downward from left to right because:",
        "options": [
          "(a) There is an inverse relationship between the foreign exchange rate and the quantity demanded of foreign exchange",
          "(b) There is a direct positive relationship between foreign exchange rate and demand",
          "(c) Demand is constant at all exchange rates",
          "(d) It depends only on government taxes"
        ],
        "answer": "(a) There is an inverse relationship between the foreign exchange rate and the quantity demanded of foreign exchange",
        "explanation": "When the foreign exchange rate falls (domestic currency strengthens), foreign goods and travel become cheaper, increasing the quantity of foreign currency demanded."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which of the following creates a 'Supply' of foreign exchange in India?",
        "options": [
          "(a) Indian students traveling to the UK for university education",
          "(b) Foreign tourists spending US Dollars while visiting the Taj Mahal in Agra",
          "(c) Repaying a loan taken from the World Bank",
          "(d) Importing defense aircraft from France"
        ],
        "answer": "(b) Foreign tourists spending US Dollars while visiting the Taj Mahal in Agra",
        "explanation": "Foreign tourists convert their foreign currency into rupees to spend within India, generating an inflow (supply) of foreign exchange."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Deliberate downward adjustment in the value of the domestic currency by the government or monetary authority under a FIXED exchange rate regime is called:",
        "options": [
          "(a) Depreciation",
          "(b) Devaluation",
          "(c) Appreciation",
          "(d) Demonetization"
        ],
        "answer": "(b) Devaluation",
        "explanation": "Under a fixed exchange rate system, an official policy reduction in currency value by the government/central bank is called Devaluation."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "'Accommodating Transactions' in Balance of Payments are also termed as:",
        "options": [
          "(a) 'Above the line' items",
          "(b) 'Below the line' items",
          "(c) Autonomous capital inflows",
          "(d) Invisibles"
        ],
        "answer": "(b) 'Below the line' items",
        "explanation": "Accommodating items are known as 'below the line' items because they are undertaken by the central bank solely to bridge the deficit or surplus resulting from autonomous ('above the line') transactions."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "When an Indian company acquires a software company in Germany, this capital transaction is recorded as:",
        "options": [
          "(a) Debit entry in Capital Account of India's BoP",
          "(b) Credit entry in Capital Account",
          "(c) Credit entry in Current Account",
          "(d) Debit entry in Current Account"
        ],
        "answer": "(a) Debit entry in Capital Account of India's BoP",
        "explanation": "Outward foreign investment involves an outflow of foreign exchange to purchase foreign assets, which is recorded as a debit entry in the Capital Account."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following is NOT a component of the Current Account of Balance of Payments?",
        "options": [
          "(a) Export and Import of merchandise goods",
          "(b) Banking, insurance, and software services trade",
          "(c) Foreign Portfolio Investment (FPI)",
          "(d) Unilateral remittances and gifts"
        ],
        "answer": "(c) Foreign Portfolio Investment (FPI)",
        "explanation": "Foreign Portfolio Investment represents cross-border financial asset ownership, which is recorded under the Capital Account, not the Current Account."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The supply curve of foreign exchange is upward sloping because:",
        "options": [
          "(a) Higher exchange rates make domestic goods cheaper for foreigners, boosting domestic exports and increasing forex inflows",
          "(b) Lower exchange rates boost exports",
          "(c) Foreigners dislike cheap goods",
          "(d) It is horizontal in reality"
        ],
        "answer": "(a) Higher exchange rates make domestic goods cheaper for foreigners, boosting domestic exports and increasing forex inflows",
        "explanation": "A rise in the exchange rate (domestic depreciation) makes domestic goods more price-competitive abroad, driving higher export sales and expanding foreign exchange supply."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the primary difference between Foreign Direct Investment (FDI) and Foreign Portfolio Investment (FPI)?",
        "options": [
          "(a) FDI gives direct ownership and control/management over enterprise assets, whereas FPI involves only passive financial asset purchases without management control",
          "(b) FDI is only done in cash, FPI in kind",
          "(c) FPI is illegal in India",
          "(d) Both are identical in every aspect"
        ],
        "answer": "(a) FDI gives direct ownership and control/management over enterprise assets, whereas FPI involves only passive financial asset purchases without management control",
        "explanation": "FDI (e.g. setting up a factory) provides direct operational control, whereas FPI (e.g. buying shares on the stock exchange) represents portfolio investment without managerial oversight."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "In the Balance of Payments accounting, all inflows of foreign exchange are recorded as:",
        "options": [
          "(a) Credit items (with a positive + sign)",
          "(b) Debit items (with a negative - sign)",
          "(c) Neutral entries",
          "(d) Unbalanced items"
        ],
        "answer": "(a) Credit items (with a positive + sign)",
        "explanation": "Under double-entry BoP accounting conventions, all transactions resulting in foreign exchange receipts (inflows) are recorded on the Credit side (+)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "If an economy experiences an overall BoP deficit in autonomous transactions, how is it settled by the Central Bank?",
        "options": [
          "(a) By drawing down official foreign exchange reserves (accommodating transaction)",
          "(b) By stopping all international trade",
          "(c) By doubling personal income taxes",
          "(d) By canceling all currency notes"
        ],
        "answer": "(a) By drawing down official foreign exchange reserves (accommodating transaction)",
        "explanation": "A BoP deficit (autonomous outflows > autonomous inflows) is settled by the Central Bank selling foreign exchange from its official reserve assets, balancing the books."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following will create a 'Demand' for foreign exchange in India?",
        "options": [
          "(a) Export of Indian pharmaceuticals to the US",
          "(b) Indian tourists traveling to Switzerland for holidays",
          "(c) Inward remittance by an NRI living in Dubai",
          "(d) Foreign investment in Indian bonds"
        ],
        "answer": "(b) Indian tourists traveling to Switzerland for holidays",
        "explanation": "Indian travelers need foreign currency to cover expenses abroad, creating a demand for foreign exchange."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "A rise in the price of foreign currency from $1 = ₹75 to $1 = ₹82 in a market-determined system is called:",
        "options": [
          "(a) Depreciation of Rupee",
          "(b) Appreciation of Rupee",
          "(c) Revaluation of Rupee",
          "(d) Devaluation of Dollar"
        ],
        "answer": "(a) Depreciation of Rupee",
        "explanation": "A rise in the exchange rate (more rupees needed per dollar) through market forces is Depreciation of the domestic currency."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Balance of Payments is always in balance in which sense?",
        "options": [
          "(a) In an economic operational sense",
          "(b) In an accounting double-entry bookkeeping sense",
          "(c) In terms of physical export volumes",
          "(d) In agricultural terms"
        ],
        "answer": "(b) In an accounting double-entry bookkeeping sense",
        "explanation": "Due to double-entry bookkeeping, Total Credits always equal Total Debits once accommodating reserve transactions and errors/omissions are incorporated."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is an invisible item in the Current Account?",
        "options": [
          "(a) Export of textile garments",
          "(b) Software development and IT consulting services exported to Europe",
          "(c) Import of machinery from Japan",
          "(d) Import of electronic microchips"
        ],
        "answer": "(b) Software development and IT consulting services exported to Europe",
        "explanation": "Services, investment income, and unilateral transfers are non-merchandise intangibles categorized as 'Invisibles'."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An 'Appreciation' of the domestic currency is beneficial for:",
        "options": [
          "(a) Domestic exporters whose products become more expensive abroad",
          "(b) Domestic importers whose foreign import costs become cheaper in terms of domestic currency",
          "(c) Foreign tourists visiting India",
          "(d) Local craftsmen relying on exports"
        ],
        "answer": "(b) Domestic importers whose foreign import costs become cheaper in terms of domestic currency",
        "explanation": "Currency appreciation means fewer rupees are needed to buy each unit of foreign currency, making imported raw materials, petroleum, and foreign goods cheaper."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "When the Reserve Bank of India intervenes in the foreign exchange market by selling US dollars to check the steep depreciation of the rupee, this practice is termed:",
        "options": [
          "(a) Clean Floating",
          "(b) Managed Floating (Dirty Floating)",
          "(c) Pegged Gold Standard",
          "(d) Demonetization"
        ],
        "answer": "(b) Managed Floating (Dirty Floating)",
        "explanation": "Managed floating involves market exchange rate determination paired with strategic central bank interventions to stabilize currency swings."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Depreciation of the domestic currency leads to an expansion of national exports.\nReason (R): Depreciation makes domestic goods and services cheaper in terms of foreign currencies, increasing their price competitiveness in international markets.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. A weaker rupee allows foreign buyers to acquire more Indian goods per dollar, boosting overseas demand."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Accommodating transactions are called 'below the line' items in Balance of Payments.\nReason (R): Accommodating transactions are undertaken independently of the autonomous BoP surplus or deficit for private commercial profit.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) (A) is true but (R) is false",
          "(c) (A) is false but (R) is true",
          "(d) Both (A) and (R) are false"
        ],
        "answer": "(b) (A) is true but (R) is false",
        "explanation": "Assertion is true. Reason is false: accommodating transactions are non-profit official transactions carried out specifically to cover the BoP gap caused by autonomous items."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): A country can sustain a Trade Deficit while still having a Current Account Surplus.\nReason (R): A surplus in invisible transactions (services, net investment income, and unilateral transfers) can be large enough to offset the deficit in visible merchandise trade.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. India frequently runs a trade deficit on merchandise goods that is cushioned by robust surpluses in software service exports and NRI worker remittances."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Balance of Payments always balances in the accounting sense.\nReason (R): BoP accounts are compiled using the double-entry system of bookkeeping where every credit entry has a matching debit entry.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. By accounting identity, double-entry bookkeeping guarantees that total credits equal total debits across the full statement."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Outflow of foreign exchange is recorded on the credit side of Balance of Payments accounts.\nReason (R): Any transaction that results in a payment to foreigners decreases the foreign exchange assets of the nation.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is false but (R) is true",
          "(d) (A) is true but (R) is false"
        ],
        "answer": "(c) (A) is false but (R) is true",
        "explanation": "Assertion is false: outflows of foreign exchange are recorded on the DEBIT side (-) of BoP. Reason is true."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Distinguish between 'Autonomous' and 'Accommodating' transactions in the Balance of Payments. [3 Marks]",
        "answer": "Autonomous items ('above the line') are driven by profit motives; Accommodating items ('below the line') restore BoP balance.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Autonomous Transactions ('Above the line'): International economic transactions undertaken for their own economic motives (e.g. maximizing profit or commercial returns), independent of the country's BoP balance. They are the underlying cause of BoP surpluses or deficits.\n• 2. Accommodating Transactions ('Below the line'): Official transactions undertaken by monetary authorities (RBI) specifically to cover any deficit or absorb any surplus resulting from autonomous transactions, usually via official reserve adjustments."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "How does 'Depreciation' of domestic currency affect exports and imports of an economy? Explain. [3 Marks]",
        "answer": "Depreciation makes exports cheaper for foreigners (boosting exports) and imports costlier for locals (reducing imports).",
        "explanation": "Marking Scheme (1.5 Marks each impact):\n• 1. Impact on Exports: When the domestic currency depreciates (e.g. $1 moves from ₹80 to ₹85), foreign buyers can purchase more Indian goods for the same dollar amount. Domestic goods become price-competitive abroad, stimulating export demand.\n• 2. Impact on Imports: Domestic consumers and firms must pay more rupees for every dollar of foreign goods. Imports become expensive, reducing import demand and encouraging domestic import substitution."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Distinguish between 'Balance of Trade' (BoT) and 'Current Account Balance'. [3 Marks]",
        "answer": "BoT includes only visible goods; Current Account includes visible goods, invisible services, and unilateral transfers.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Balance of Trade (BoT): Narrow measure recording only the monetary difference between the export and import of physical, tangible merchandise goods (Visible Trade). It ignores services and transfers.\n• 2. Current Account Balance: Comprehensive measure covering visible goods trade PLUS invisible transactions: services (software, banking, shipping), investment factor incomes, and unrequited unilateral transfers (remittances, gifts, donations)."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain three major sources of 'Supply of Foreign Exchange' for an economy. [3 Marks]",
        "answer": "Exports of goods/services, Inflows of foreign investment (FDI/FPI), and Inward remittances from abroad.",
        "explanation": "Marking Scheme (1 Mark each for three sources):\n• 1. Exports of Domestic Goods and Services: Foreign buyers must purchase domestic currency using foreign exchange to pay for Indian merchandise and IT services.\n• 2. Inflows of Foreign Capital (FDI and FPI): Multinational corporations investing in local production plants and institutional investors buying shares in domestic equity markets inject foreign capital.\n• 3. Inward Remittances and Foreign Tourism: Non-resident citizens sending earnings to families back home, and international tourists spending foreign exchange within the domestic economy."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What is meant by 'Managed Floating Exchange Rate System'? Why is it also known as 'Dirty Floating'? [3 Marks]",
        "answer": "Market-determined rate with strategic central bank interventions; called dirty floating because it deviates from pure market floating.",
        "explanation": "Marking Scheme:\n• Concept [2 Marks]: A hybrid exchange rate regime where the currency's external value is primarily determined by market forces of demand and supply, but the Central Bank actively intervenes by buying or selling foreign exchange to prevent excessive exchange rate volatility and preserve financial stability.\n• Why 'Dirty Floating' [1 Mark]: It is called 'dirty floating' because the central bank's behind-the-scenes market operations manipulate the pure, clean equilibrium that unrestricted market forces would otherwise produce."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "State whether the following transactions will be entered on the Credit or Debit side of BoP, with reasons: [3 Marks]\n(a) Import of mobile phone components from South Korea\n(b) Inflow of Foreign Direct Investment from Singapore\n(c) Financial aid given by India to earthquake victims in Nepal",
        "answer": "(a) Debit side (Current Account); (b) Credit side (Capital Account); (c) Debit side (Current Account).",
        "explanation": "Marking Scheme (1 Mark each for side + reason):\n• (a) Import of components: Debit side of Current Account, because payment for imported merchandise involves an outflow of foreign exchange.\n• (b) Inflow of FDI: Credit side of Capital Account, because inward foreign direct investment brings an inflow of foreign exchange.\n• (c) Foreign aid to Nepal: Debit side of Current Account, because unilateral transfer assistance to foreign nations leads to an outflow of foreign exchange."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "Distinguish between 'Foreign Direct Investment' (FDI) and 'Foreign Portfolio Investment' (FPI). [3 Marks]",
        "answer": "FDI provides direct ownership and operational control; FPI is financial market investment without managerial control.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Foreign Direct Investment (FDI): Cross-border investment where a foreign investor acquires a lasting interest and significant management control over a domestic enterprise (e.g., establishing a manufacturing subsidiary or acquiring >10% voting equity). It brings technology, physical capital, and managerial expertise.\n• 2. Foreign Portfolio Investment (FPI): Cross-border purchase of domestic liquid financial assets (equities, corporate bonds, government gilts) purely for financial return and capital gains, without exercising any operational or managerial control over the issuing firm."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain three major sources of 'Demand for Foreign Exchange'. [3 Marks]",
        "answer": "Imports of goods/services, Outward tourism/education, and Overseas asset purchases/investments.",
        "explanation": "Marking Scheme (1 Mark each for three sources):\n• 1. Payment for Imports: Domestic businesses purchasing raw materials, machinery, or consumer goods from foreign countries require foreign exchange to settle invoices.\n• 2. Tourism and Foreign Travel: Domestic residents traveling abroad for medical treatment, university education, or leisure need foreign currency to cover expenses.\n• 3. Overseas Investments and Lending: Domestic firms purchasing real estate, factories, or equity abroad, or making unilateral grants to foreign entities, require foreign exchange."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "What is 'Devaluation'? How does it differ from 'Depreciation'? [3 Marks]",
        "answer": "Devaluation is an official government reduction under fixed regimes; Depreciation is a market-driven fall under flexible regimes.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Devaluation: A deliberate, official downward adjustment in the value of the domestic currency in terms of foreign currency, executed by the government or central bank under a FIXED exchange rate system.\n• 2. Depreciation: A fall in the external value of the domestic currency in terms of foreign currency caused by market forces of demand and supply (excess demand for foreign exchange) under a FLEXIBLE exchange rate system."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Calculate the Balance of Trade from the following data: [3 Marks]\n- Export of Visible Goods = ₹750 crore\n- Import of Visible Goods = ₹900 crore\n- Export of Services = ₹300 crore\n- Import of Services = ₹200 crore\n- Unilateral Transfers from abroad = ₹50 crore",
        "answer": "Balance of Trade = -₹150 Crore (Trade Deficit).",
        "explanation": "Step-by-Step Marking Scheme:\n• BoT Definition [1 Mark]: Balance of Trade includes ONLY visible merchandise transactions (exports and imports of goods), completely excluding invisibles (services and unilateral transfers).\n• Calculation [2 Marks]:\n  - Balance of Trade = Export of Visible Goods - Import of Visible Goods\n  = 750 - 900 = -₹150 Crore.\n  - Conclusion: Trade Deficit of ₹150 Crore. (Services and transfers belong to Current Account, not Balance of Trade)."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the concept of 'Foreign Exchange Rate'. How is the equilibrium exchange rate determined under a flexible exchange rate regime? Use a suitable diagram to explain what happens when the demand for foreign exchange increases. [6 Marks]",
        "answer": "Definition; Flexible equilibrium where Demand = Supply; Diagrammatic analysis showing rightward shift of demand curve causing currency depreciation.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept & equilibrium + 2 Marks diagram + 2 Marks impact of demand increase):\n• 1. Foreign Exchange Rate & Equilibrium Determination [2 Marks]:\n  - Foreign exchange rate is the price of one unit of foreign currency in terms of the domestic currency (e.g., $1 = ₹83).\n  - Under a flexible exchange rate regime, the equilibrium rate is determined at the intersection of the downward-sloping Demand Curve (DD) and upward-sloping Supply Curve (SS) of foreign exchange, where Demand for Forex = Supply of Forex.\n• 2. Graphical Representation [2 Marks]:\n  - X-axis: Demand and Supply of US Dollars; Y-axis: Exchange Rate (₹ per $).\n  - Initial equilibrium E0 where DD0 intersects SS0 at rate R0.\n• 3. Increase in Demand for Foreign Exchange [2 Marks]:\n  - An increase in demand for foreign exchange (due to rising imports or overseas investments) shifts the demand curve rightward from DD0 to DD1.\n  - At the original rate R0, there is excess demand for dollars.\n  - Competition among dollar buyers drives the exchange rate up to R1 (new equilibrium E1).\n  - This rise in the exchange rate (from R0 to R1) means more rupees are needed per dollar, representing a DEPRECIATION of the Indian Rupee."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the structure of the 'Balance of Payments' (BoP) account. Detail the components of the 'Current Account' and the 'Capital Account'. [6 Marks]",
        "answer": "Systematic breakdown of Current Account (Visible goods, Invisible services, Transfers) and Capital Account (Investments, Borrowings, Forex reserves).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks Current Account + 3 Marks Capital Account):\n• 1. Current Account Components [3 Marks]:\n  Records all transactions that do not impact the international asset or liability status of the nation:\n  (a) Visible Trade (Merchandise): Exports (+) and imports (-) of physical goods.\n  (b) Invisible Trade (Services):\n      - Factor Services: Income from work (compensation of employees) and investment returns (dividends, interest, profits).\n      - Non-Factor Services: Transportation, travel/tourism, IT/software, insurance, financial services.\n  (c) Unilateral Transfers: One-way receipts (+) and payments (-) like worker remittances, donations, foreign aid, gifts.\n• 2. Capital Account Components [3 Marks]:\n  Records cross-border transactions that alter the international asset-liability claims of the country:\n  (a) Foreign Investments:\n      - Foreign Direct Investment (FDI): Inward (+) and outward (-) investments giving operational control (factories, equity >10%).\n      - Foreign Portfolio Investment (FPI): Inward (+) and outward (-) purchases of corporate shares/bonds without control.\n  (b) External Borrowings: Commercial bank loans (ECBs), concessional government assistance, NRI bank deposits.\n  (c) Official Foreign Exchange Reserves Transactions: Central bank operations to accommodate BoP imbalances."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Distinguish clearly between: [6 Marks]\n(a) Balance of Trade and Balance of Payments\n(b) Depreciation and Devaluation of Currency\n(c) Autonomous Transactions and Accommodating Transactions",
        "answer": "Comparative differentiation: BoT vs BoP, Depreciation vs Devaluation, Autonomous vs Accommodating items.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each):\n• (a) Balance of Trade vs Balance of Payments [2 Marks]:\n  - Balance of Trade: Measures only the difference between merchandise exports and merchandise imports (visible items). Narrow in scope; can be in surplus or deficit.\n  - Balance of Payments: Exhaustive statistical record of all economic transactions (goods, services, capital, transfers) between domestic residents and the rest of the world. Always balances in an accounting sense.\n• (b) Depreciation vs Devaluation [2 Marks]:\n  - Depreciation: Market-driven decrease in the domestic currency's value under a flexible exchange rate regime, caused by market forces of demand and supply.\n  - Devaluation: Deliberate, official reduction in the domestic currency's value decreed by the government/central bank under a fixed exchange rate regime.\n• (c) Autonomous vs Accommodating Transactions [2 Marks]:\n  - Autonomous: Economic activities carried out for independent motives (e.g. corporate profit) regardless of the BoP outcome ('above the line').\n  - Accommodating: Official compensatory operations executed by monetary authorities to finance deficits or absorb surpluses arising from autonomous transactions ('below the line')."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "From the following data, calculate: [6 Marks]\n(a) Balance of Trade\n(b) Current Account Balance\n(c) Capital Account Balance\nItems: (₹ in crore)\n1. Export of Merchandise Goods = 1,200\n2. Import of Merchandise Goods = 1,700\n3. Export of Services (Software, Tourism) = 800\n4. Import of Services = 450\n5. Net Inward Remittances and Transfers = 250\n6. Foreign Direct Investment (Inflow) = 500\n7. External Commercial Borrowing (Net Outflow) = 200\n8. Net NRI Bank Deposits Inflow = 100",
        "answer": "(a) Balance of Trade = -₹500 Cr; (b) Current Account Balance = +₹100 Cr; (c) Capital Account Balance = +₹400 Cr.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each calculation with formulas):\n• (a) Balance of Trade [2 Marks]:\n  - Balance of Trade = Export of Goods - Import of Goods\n  = 1,200 - 1,700 = -₹500 Crore (Trade Deficit of ₹500 Cr). [2 Marks]\n• (b) Current Account Balance [2 Marks]:\n  - Net Invisibles = (Export of Services - Import of Services) + Net Transfers\n  = (800 - 450) + 250 = 350 + 250 = +₹600 Crore.\n  - Current Account Balance = Balance of Trade + Net Invisibles\n  = -500 + 600 = +₹100 Crore (Current Account Surplus of ₹100 Cr). [2 Marks]\n• (c) Capital Account Balance [2 Marks]:\n  - Capital Account Balance = Inflow of FDI - Outflow of ECB + Inflow of NRI Deposits\n  = 500 - 200 + 100 = +₹400 Crore (Capital Account Surplus of ₹400 Cr). [2 Marks]"
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "What is meant by 'Foreign Exchange Market'? Explain its major functions. Distinguish between 'Spot Market' and 'Forward Market'. [6 Marks]",
        "answer": "Definition; Three functions (Transfer, Credit, Hedging); Spot vs Forward market distinction.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept & functions + 2 Marks spot/forward distinction + 2 Marks examples):\n• 1. Meaning & Functions of Foreign Exchange Market [3 Marks]:\n  - Meaning: The global decentralized financial market where national currencies are bought, sold, and exchanged.\n  - Three Core Functions:\n    (i) Transfer Function: Facilitates the conversion and cross-border transfer of purchasing power between different countries.\n    (ii) Credit Function: Provides trade credit to international exporters and importers to finance the transit of goods across borders.\n    (iii) Hedging Function: Protects cross-border traders and investors against future exchange rate fluctuations by locking in exchange rates via forward contracts.\n• 2. Spot Market vs Forward Market [3 Marks]:\n  - Spot Market: Handles daily foreign exchange transactions that are executed and settled immediately (on the spot, within two business days) at the prevailing spot exchange rate.\n  - Forward Market: Handles transactions where foreign currencies are contracted to be bought or sold at a future specified date at a price determined today (forward exchange rate), insulating counterparties against adverse price movements."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Explain how the following transactions are treated in the Balance of Payments of India, giving clear reasons: [6 Marks]\n(a) Acquisition of an overseas hotel in London by Tata Group\n(b) Royalties paid by an Indian automaker to a Japanese patent holder\n(c) Purchase of Indian government securities by foreign institutional investors\n(d) Medical expenses incurred by foreign tourists in Indian hospitals\n(e) Repayment of loan borrowed from the International Monetary Fund\n(f) Financial aid received by India from the United Nations during a health crisis",
        "answer": "Acquisition (Cap Debit), Royalties (Cur Debit), Securities (Cap Credit), Medical tourism (Cur Credit), IMF repayment (Cap Debit), UN aid (Cur Credit).",
        "explanation": "Step-by-Step Marking Scheme (1 Mark each for classification + reason):\n• (a) Tata acquiring London hotel: Capital Account, Debit side. Represents outward foreign direct investment resulting in an outflow of foreign exchange to acquire foreign assets.\n• (b) Royalties paid to Japanese firm: Current Account, Debit side. Represents payment for factor/non-factor service, involving foreign exchange outflow without creating an asset.\n• (c) Foreign purchase of Indian securities: Capital Account, Credit side. Portfolio investment bringing an inflow of foreign exchange.\n• (d) Medical tourism spending: Current Account, Credit side. Export of medical services earning foreign exchange.\n• (e) IMF loan repayment: Capital Account, Debit side. Outflow of foreign exchange that reduces sovereign external liabilities.\n• (f) UN health crisis aid: Current Account, Credit side. Unrequited unilateral transfer receipt bringing foreign exchange with no repayment obligation."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "What is meant by 'Deficit in Balance of Payments'? Explain the role of the Central Bank's 'Official Reserve Transactions' in accommodating this deficit. [6 Marks]",
        "answer": "Concept of BoP deficit; Difference between autonomous and accommodating transactions; Official reserve transactions mechanism.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks BoP deficit concept + 2 Marks official reserve mechanism + 2 Marks economic implications):\n• 1. Meaning of BoP Deficit [2 Marks]:\n  - A deficit in the Balance of Payments occurs when autonomous foreign exchange payments (autonomous debits) exceed autonomous foreign exchange receipts (autonomous credits).\n  - Autonomous transactions are undertaken for private commercial profits independent of the BoP balance.\n• 2. Role of Official Reserve Transactions [2 Marks]:\n  - To bridge the autonomous foreign exchange deficit, the Central Bank executes accommodating transactions by selling foreign currencies (US dollars, gold) from its official foreign exchange reserves.\n  - Alternatively, the Central Bank may borrow from the IMF or foreign central banks to cover the shortfall.\n  - This accommodating intervention ensures that total debits equal total credits in accounting terms.\n• 3. Economic Implications [2 Marks]:\n  - Persistent BoP deficits deplete national foreign exchange reserves, risking sovereign debt defaults and currency crises.\n  - Forces macroeconomic adjustments such as currency depreciation, tightening import restrictions, or structural reforms."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Evaluate the merits and demerits of a 'Flexible Exchange Rate System' compared to a 'Fixed Exchange Rate System'. [6 Marks]",
        "answer": "Balanced comparative evaluation: Merits of flexible system (automatic adjustments, policy autonomy) vs Demerits (volatility, exchange rate risk).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks merits + 3 Marks demerits):\n• 1. Merits of Flexible Exchange Rate System [3 Marks]:\n  - Automatic Market Adjustment: Automatically eliminates BoP deficits and surpluses through market-driven exchange rate movements without depleting official reserves.\n  - Monetary Policy Independence: The central bank can tailor domestic interest rates to national macroeconomic goals (inflation, employment) without having to defend a pegged currency rate.\n  - No Need for Massive Forex Hoarding: Eliminates the requirement to stockpile massive foreign currency reserves to support an artificial parity.\n• 2. Demerits of Flexible Exchange Rate System [3 Marks]:\n  - High Market Uncertainty & Volatility: Continuous currency fluctuations introduce uncertainty for international traders and long-term foreign investors.\n  - Inflationary Pressures: Severe currency depreciation raises the domestic cost of imported essential commodities (crude oil, machinery), fueling imported inflation.\n  - Encourages Currency Speculation: Fluctuating rates attract destabilizing currency speculation in international financial markets."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Explain the concept of 'Currency Appreciation'. How does an appreciation of the Indian Rupee affect:\n(a) Domestic Exporters\n(b) Domestic Importers\n(c) Domestic National Income [6 Marks]",
        "answer": "Meaning of Currency Appreciation; Harmful to exporters; Beneficial to importers; Net contracting pressure on National Income.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 4 Marks impacts):\n• 1. Meaning of Currency Appreciation [2 Marks]:\n  Currency appreciation refers to an increase in the value of the domestic currency in terms of foreign currency under a flexible exchange rate regime (e.g., $1 changes from ₹80 to ₹72). Domestic currency becomes stronger.\n• 2. Impacts [4 Marks]:\n  - (a) On Exporters [1.5 Marks]: Indian export goods become more expensive for foreign buyers in terms of foreign currency. International demand for Indian exports declines, hurting export revenues and employment in export industries.\n  - (b) On Importers [1.5 Marks]: Foreign goods become cheaper in terms of rupees. Importers pay fewer rupees per unit of foreign imports, lowering the cost of imported raw materials, electronics, and capital equipment.\n  - (c) On National Income [1 Mark]: Since exports fall and imports rise, Net Exports (X - M) decline. Because AD = C + I + G + (X - M), a drop in net exports exerts downward contractionary pressure on aggregate demand and equilibrium National Income."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Distinguish between 'Fixed Exchange Rate' and 'Floating Exchange Rate' systems across four key operational parameters. [6 Marks]",
        "answer": "Comprehensive comparison across Determination, Reserve requirements, Policy autonomy, and Mechanism of adjustment.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four parameters):\n• 1. Determination of Rate: In a Fixed system, the exchange rate is officially pegged and declared by the government or central bank to gold or a foreign anchor currency. In a Floating system, the rate is determined freely by market demand and supply of foreign currency.\n• 2. Official Forex Reserve Requirement: Under a Fixed regime, the central bank must maintain substantial foreign exchange reserves to defend the fixed parity through continuous intervention. Under a Floating regime, massive reserves are not mandatory as the market clears itself.\n• 3. Independence of Monetary Policy: Under a Fixed regime, domestic monetary policy is subservient to maintaining the exchange rate peg. Under a Floating regime, the central bank retains full autonomy to set interest rates to stabilize domestic employment and inflation.\n• 4. Adjustment to BoP Imbalances: Under a Fixed regime, BoP imbalances require official devaluations/revaluations or domestic deflation/inflation. Under a Floating regime, exchange rate depreciation or appreciation automatically restores BoP equilibrium."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 7,
      "book": "Part B: Indian Economic Development",
      "title": "Indian Economy on the Eve of Independence",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 6: Development Experience (1947-90) and Economic Reforms since 1991 (12 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which year is celebrated/designated as the 'Year of the Great Divide' in the demographic history of India?",
        "options": [
          "(a) 1901",
          "(b) 1921",
          "(c) 1947",
          "(d) 1951"
        ],
        "answer": "(b) 1921",
        "explanation": "1921 is known as the 'Year of the Great Divide' because prior to 1921, India was in the first stage of demographic transition (stagnant/fluctuating population), and after 1921, India entered the second stage with continuous population growth."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Whose estimate of National Income and Per Capita Income during the colonial period was considered the most significant and reliable by economists?",
        "options": [
          "(a) Dadabhai Naoroji",
          "(b) William Digby",
          "(c) Dr. V.K.R.V. Rao",
          "(d) Findlay Shirras"
        ],
        "answer": "(c) Dr. V.K.R.V. Rao",
        "explanation": "While Dadabhai Naoroji made the first non-official attempt, the estimates of national income and per capita income computed by Dr. V.K.R.V. Rao were considered the most statistically rigorous and authoritative."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The primary motive of the British colonial government behind the ruin of traditional Indian handicraft industries was:",
        "options": [
          "(a) To transform India into a mere exporter of raw materials to feed modern British industries and an importer of finished British manufactured goods",
          "(b) To promote cottage industries in rural villages",
          "(c) To help Indian artisans adopt modern power-looms",
          "(d) To encourage agricultural exports only"
        ],
        "answer": "(a) To transform India into a mere exporter of raw materials to feed modern British industries and an importer of finished British manufactured goods",
        "explanation": "Colonial tariff and trade policy deliberately undermined Indian handicrafts to establish India as a supplier of cheap industrial raw materials for Britain and a captive market for Manchester textiles."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "What was the average overall literacy rate in India on the eve of Independence?",
        "options": [
          "(a) Less than 16%",
          "(b) Around 32%",
          "(c) Exactly 50%",
          "(d) Less than 7%"
        ],
        "answer": "(a) Less than 16%",
        "explanation": "On the eve of independence, the overall literacy rate was dismal at less than 16%, and female literacy was even lower at barely 7%."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Under the British colonial land tenure system known as the 'Zamindari System' in the Bengal Presidency:",
        "options": [
          "(a) Zamindars paid rent to cultivators",
          "(b) Zamindars were declared legal owners of the land who extracted extortionate rent from actual tillers regardless of agricultural distress",
          "(c) Farmers owned the land collectively",
          "(d) The government provided free irrigation to tenant farmers"
        ],
        "answer": "(b) Zamindars were declared legal owners of the land who extracted extortionate rent from actual tillers regardless of agricultural distress",
        "explanation": "Under the Permanent Settlement/Zamindari system, zamindars acted as tax-collecting intermediaries, exploiting peasant tillers with high rents while investing nothing in land development."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In which year were Railways introduced in India by the British colonial administration?",
        "options": [
          "(a) 1850",
          "(b) 1853",
          "(c) 1901",
          "(d) 1921"
        ],
        "answer": "(a) 1850",
        "explanation": "Railways were introduced in India in 1850, and the first passenger train operated in 1853 between Bombay and Thane over a distance of 34 kilometers."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "The commercialisation of agriculture during the colonial period forced Indian farmers to produce:",
        "options": [
          "(a) Food grains like wheat and rice for domestic consumption",
          "(b) Cash crops like indigo, cotton, and jute required as raw materials by British industries",
          "(c) Organic fruits and vegetables",
          "(d) Medicinal herbal plants"
        ],
        "answer": "(b) Cash crops like indigo, cotton, and jute required as raw materials by British industries",
        "explanation": "Peasants were coerced into switching from subsistence food crops to cash crops (indigo, cotton, jute) required by British factories, severely worsening vulnerability to famines."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "More than 50% of India's foreign trade during the colonial period was restricted to which single country?",
        "options": [
          "(a) China",
          "(b) Britain",
          "(c) Sri Lanka (Ceylon)",
          "(d) Persia (Iran)"
        ],
        "answer": "(b) Britain",
        "explanation": "The British government maintained a strict trade monopoly, directing more than half of India's foreign trade exclusively to Great Britain."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "The opening of which engineering marvel in 1869 drastically reduced the shipping time and transportation cost between Britain and India?",
        "options": [
          "(a) Panama Canal",
          "(b) Suez Canal",
          "(c) Kiel Canal",
          "(d) Erie Canal"
        ],
        "answer": "(b) Suez Canal",
        "explanation": "The opening of the Suez Canal in 1869 connected the Mediterranean Sea and the Red Sea, eliminating the long voyage around the Cape of Good Hope and tightening Britain's commercial grip on India."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What was the Infant Mortality Rate (IMR) in India during the colonial era compared to modern times?",
        "options": [
          "(a) 218 per thousand live births",
          "(b) 30 per thousand live births",
          "(c) 50 per thousand live births",
          "(d) 100 per thousand live births"
        ],
        "answer": "(a) 218 per thousand live births",
        "explanation": "The infant mortality rate during colonial rule was alarming at 218 per 1,000 live births, reflecting acute poverty, poor sanitation, and absence of public health facilities."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "On the eve of independence, what percentage of India's workforce was engaged in the Agricultural sector?",
        "options": [
          "(a) 50-55%",
          "(b) 70-75%",
          "(c) 85-90%",
          "(d) 30-35%"
        ],
        "answer": "(b) 70-75%",
        "explanation": "Agriculture accounted for the vast majority of the occupational structure, employing roughly 70-75% of the total working population."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What was the Life Expectancy of an Indian citizen at birth during the colonial period?",
        "options": [
          "(a) 32-44 years",
          "(b) 68 years",
          "(c) 72 years",
          "(d) 55 years"
        ],
        "answer": "(a) 32-44 years",
        "explanation": "Life expectancy at birth on the eve of independence was shockingly low at around 32 to 44 years due to frequent famines and poor medical access."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which modern manufacturing industry established in 1907 marked a major pioneering private Indian industrial breakthrough?",
        "options": [
          "(a) Tata Iron and Steel Company (TISCO) at Jamshedpur",
          "(b) Reliance Petrochemicals",
          "(c) Hindustan Aeronautics Limited",
          "(d) Bharat Heavy Electricals Limited"
        ],
        "answer": "(a) Tata Iron and Steel Company (TISCO) at Jamshedpur",
        "explanation": "TISCO was incorporated in 1907 by Jamsetji Tata and began commercial steel production in 1911, establishing India's modern heavy industrial base."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The export surplus generated by India's foreign trade during the colonial era was used by the British to:",
        "options": [
          "(a) Build schools and universities in Indian villages",
          "(b) Finance administrative expenses of colonial offices and war costs fought by the British army (Drain of Indian Wealth)",
          "(c) Import gold for the Reserve Bank of India",
          "(d) Subsidize Indian peasant farming"
        ],
        "answer": "(b) Finance administrative expenses of colonial offices and war costs fought by the British army (Drain of Indian Wealth)",
        "explanation": "India's trade surplus did not translate into gold or capital inflows; it was siphoned away to meet Britain's colonial administrative overheads and overseas military campaigns."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The first official, comprehensive population census in British India was conducted in the year:",
        "options": [
          "(a) 1850",
          "(b) 1881",
          "(c) 1921",
          "(d) 1947"
        ],
        "answer": "(b) 1881",
        "explanation": "The first synchronized, comprehensive decennial population census of India was carried out in 1881, and has been repeated every ten years since."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "During colonial rule, cotton textile mills were predominantly concentrated in which geographical region of India?",
        "options": [
          "(a) Western parts (Maharashtra and Gujarat)",
          "(b) Bengal and Assam",
          "(c) Punjab and Kashmir",
          "(d) Kerala and Tamil Nadu"
        ],
        "answer": "(a) Western parts (Maharashtra and Gujarat)",
        "explanation": "Cotton textile mills were predominantly developed in western India (Maharashtra and Gujarat) by Indian entrepreneurs, while jute mills in Bengal were largely controlled by British capital."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following was a positive contribution/legacy of British rule in India?",
        "options": [
          "(a) Creation of a nationwide railway infrastructure network",
          "(b) Elimination of all income inequality",
          "(c) 100% literacy rate",
          "(d) Eradication of caste discrimination"
        ],
        "answer": "(a) Creation of a nationwide railway infrastructure network",
        "explanation": "Despite being built for colonial exploitation and military mobilization, the railway network integrated the domestic market, broke geographic isolation, and aided famine relief."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "The growth rate of per capita output per year in India during the first half of the twentieth century was estimated to be:",
        "options": [
          "(a) Less than 0.5% per annum",
          "(b) Around 5% per annum",
          "(c) More than 10% per annum",
          "(d) Exactly 2% per annum"
        ],
        "answer": "(a) Less than 0.5% per annum",
        "explanation": "Aggregate real GDP grew at less than 2% per year, and annual growth of per capita output was less than 0.5% during the first half of the 20th century."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which region witnessed a notable DECLINE in the agricultural workforce and an increase in manufacturing and services employment during colonial times?",
        "options": [
          "(a) Parts of Madras Presidency, Bombay, and Bengal",
          "(b) Punjab, Rajasthan, and Orissa",
          "(c) Bihar and Uttar Pradesh",
          "(d) Central Provinces"
        ],
        "answer": "(a) Parts of Madras Presidency, Bombay, and Bengal",
        "explanation": "Parts of Madras Presidency (present Tamil Nadu, Andhra Pradesh, Kerala, Karnataka), Bombay, and Bengal saw an increase in the workforce share of manufacturing and services."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The British policy of 'discriminatory tariff' involved:",
        "options": [
          "(a) Duty-free export of Indian raw materials to Britain and duty-free import of British manufactured goods into India, while imposing heavy duties on Indian handicraft exports",
          "(b) Complete ban on British ships",
          "(c) Uniform 50% tariff on all goods",
          "(d) Zero taxes on Indian textiles everywhere"
        ],
        "answer": "(a) Duty-free export of Indian raw materials to Britain and duty-free import of British manufactured goods into India, while imposing heavy duties on Indian handicraft exports",
        "explanation": "Discriminatory tariffs gave free transit to British manufactures and raw materials, while pricing Indian finished handicrafts out of domestic and foreign markets."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "What was the female literacy rate in India on the eve of independence?",
        "options": [
          "(a) About 7%",
          "(b) About 25%",
          "(c) About 40%",
          "(d) Less than 1%"
        ],
        "answer": "(a) About 7%",
        "explanation": "Educational neglect and pervasive gender discrimination left the female literacy rate at a meager 7% at the time of independence."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Muslin of Dacca, especially the exquisite quality called 'Malmal Khas', was famous worldwide for its:",
        "options": [
          "(a) Extraordinary fineness, lightweight texture, and unmatched craftsmanship",
          "(b) Heavy wool composition",
          "(c) Cheap plastic fibers",
          "(d) Synthetic dye patterns"
        ],
        "answer": "(a) Extraordinary fineness, lightweight texture, and unmatched craftsmanship",
        "explanation": "Dacca (now Dhaka) muslin, known as 'Malmal Khas' (royal muslin), was celebrated globally for its delicate weave and soft texture before the colonial collapse of Indian handicrafts."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following was a major cause of stagnation in the Indian agricultural sector under colonial rule?",
        "options": [
          "(a) Lack of modern irrigation facilities and dependence on erratic monsoons",
          "(b) Excessive government subsidies given to farmers",
          "(c) Surplus supply of tractors",
          "(d) Elimination of all agricultural taxes"
        ],
        "answer": "(a) Lack of modern irrigation facilities and dependence on erratic monsoons",
        "explanation": "Low public investment in irrigation, absence of chemical fertilizers, and heavy reliance on monsoons kept agricultural productivity depressed."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The public sector under British rule was restricted primarily to which of the following areas?",
        "options": [
          "(a) Heavy engineering, aviation, and automobile manufacturing",
          "(b) Railways, ports, communications, and administrative services",
          "(c) Consumer electronics",
          "(d) Agriculture and milk cooperatives"
        ],
        "answer": "(b) Railways, ports, communications, and administrative services",
        "explanation": "Colonial state investment was limited to strategic infrastructure that facilitated raw material extraction, troop movements, and colonial administration."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What happened to the traditional Indian handicraft industry when machine-made cheap textiles from Britain flooded Indian markets?",
        "options": [
          "(a) Massive de-industrialization and widespread rural unemployment among artisans",
          "(b) Exponential growth of artisan wages",
          "(c) Emergence of India as a global textile exporter",
          "(d) Complete mechanization of all Indian handlooms"
        ],
        "answer": "(a) Massive de-industrialization and widespread rural unemployment among artisans",
        "explanation": "Cheap factory textiles from Manchester devastated traditional handloom weavers, driving millions out of work and crowding an already overburdened agricultural sector."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The year 1921 is regarded as the defining 'Year of the Great Divide' in India's demographic history.\nReason (R): Prior to 1921, India experienced alternating phases of population increase and decrease due to famines and epidemics, whereas after 1921, population growth was consistently positive and accelerating.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. 1921 marked India's transition from the first demographic phase of high birth and death rates to the second phase of sustained population expansion."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Commercialisation of agriculture under British rule did not improve the economic condition of Indian tenant farmers.\nReason (R): Farmers were coerced by British planters into cultivating cash crops like indigo under oppressive advance contracts, reducing land under food grain cultivation and intensifying famine risks.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Commercialization was forced rather than market-driven, enriching British merchants while leaving Indian peasants vulnerable to crop failure and starvation."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): The export surplus generated by India's foreign trade under British rule resulted in a massive inflow of gold and silver into India.\nReason (R): The export surplus was used to meet the administrative expenses of colonial offices and war expenditures incurred by the British Crown.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) (A) is false but (R) is true",
          "(c) (A) is true but (R) is false",
          "(d) Both (A) and (R) are false"
        ],
        "answer": "(b) (A) is false but (R) is true",
        "explanation": "Assertion is false: the trade surplus generated no gold inflows. Reason is true: it was drained away through Home Charges and colonial war expenditures."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): On the eve of independence, India's industrial sector suffered from a near absence of heavy capital goods industries.\nReason (R): British colonial policy intentionally prevented the establishment of domestic machine-making industries to keep India dependent on British engineering goods.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. The lack of domestic capital goods industries left independent India with minimal industrial self-reliance."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Infant mortality rate on the eve of independence was 218 per thousand live births.\nReason (R): Public health facilities, clean drinking water, and epidemic prevention measures were almost non-existent for the general Indian population under British rule.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Severe deprivation in healthcare and sanitation under colonial administration drove infant mortality above 20%."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain the 'Drain of Indian Wealth' during the colonial period as propounded by Dadabhai Naoroji. [3 Marks]",
        "answer": "Systematic unrequited transfer of Indian economic surplus to Britain via Home Charges, military costs, and remittance of profits.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Concept: The unilateral transfer of resources and export surplus from India to Britain without any economic, commercial, or material return.\n• 2. Mechanisms of Drain: India maintained an export surplus in primary commodities. Instead of receiving gold or capital, this surplus was used to pay 'Home Charges'—salaries and pensions of British civil servants, interest on British capital investments, and expenses of the India Office in London.\n• 3. War Financing: Financed colonial military expeditions across Asia and Africa fought to expand the British Empire, bleeding the domestic economy dry."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Why did the British colonial administration introduce Railways in India? Mention any two positive effects and one negative effect. [3 Marks]",
        "answer": "Motive: military mobility and raw material extraction; Positives: market integration and famine relief; Negative: commercial drain.",
        "explanation": "Marking Scheme (1 Mark motive + 1 Mark positives + 1 Mark negative):\n• Colonial Motive: Introduced in 1850 to move troops rapidly to control internal rebellions and transport agricultural raw materials from the hinterland to coastal ports for export to Britain.\n• Two Positive Effects:\n  1. Facilitated commercial integration of internal markets across regional barriers.\n  2. Enabled rapid shipment of food grains during localized droughts, helping mitigate acute regional famines.\n• One Negative Effect: Facilitated the penetration of cheap British factory textiles into rural Indian markets, hastening the destruction of village handicrafts."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the major causes of stagnation in the Agricultural sector during the British colonial rule. [3 Marks]",
        "answer": "Land tenure systems (Zamindari), lack of irrigation/technology, and forced commercialization.",
        "explanation": "Marking Scheme (1 Mark per cause):\n• 1. Exploitative Land Tenure Systems: The Zamindari settlement declared zamindars as legal proprietors. Zamindars squeezed maximum rent from tenant tillers without investing in soil conservation or drainage.\n• 2. Primitive Technology and Lack of Irrigation: Dependence on erratic rainfall, lack of fertilizers, and minimal state investment in irrigation led to low yields per hectare.\n• 3. Forced Commercialization: Forced cultivation of commercial cash crops (indigo, opium, jute) displaced food grains, increasing peasant debt and famine exposure."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Describe the state of 'Demographic Conditions' in India on the eve of Independence. [3 Marks]",
        "answer": "High birth and death rates, low life expectancy (32-44 years), alarming infant mortality (218/1,000), and abysmal literacy (<16%).",
        "explanation": "Marking Scheme (1 Mark per parameter):\n• 1. High Birth and Death Rates: Both birth rates (~48 per thousand) and death rates (~40 per thousand) were very high, characteristic of the first stage of demographic transition.\n• 2. Poor Health Indicators: Infant mortality was 218 per 1,000 live births, and life expectancy at birth was barely 32 to 44 years due to frequent epidemics and inadequate medical access.\n• 3. Abysmal Literacy: Overall literacy was below 16%, and female literacy was a meager 7%."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What were the twin motives behind the colonial policy of 'De-industrialization' in India? [3 Marks]",
        "answer": "Turn India into an exporter of raw materials to Britain, and transform India into a captive importer of British manufactured goods.",
        "explanation": "Marking Scheme (1.5 Marks each motive):\n• 1. Exporter of Cheap Raw Materials: To reduce India to an exporter of essential raw materials (raw cotton, jute, indigo, silk) to feed the growing industrial factories of Great Britain.\n• 2. Captive Consumer Market: To dismantle India's independent manufacturing capability, converting the vast Indian domestic market into a captive consumer outlet for British manufactured machine products."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain the 'Occupational Structure' of the Indian economy on the eve of Independence. Highlight its regional variations. [3 Marks]",
        "answer": "Agricultural predominance (70-75%), manufacturing (10%), services (15-20%); Regional shifts in Madras/Bombay vs Punjab/Orissa.",
        "explanation": "Marking Scheme (1.5 Marks structure + 1.5 Marks regional variation):\n• 1. Overall Structure: The occupational pattern showed heavy agricultural dependence. Agriculture employed 70-75% of the workforce, manufacturing accounted for barely 10%, and services employed 15-20%.\n• 2. Regional Variations: Parts of the Madras Presidency, Bombay, and Bengal witnessed a decline in agricultural dependence with growing employment in manufacturing and services, while Punjab, Rajasthan, and Orissa experienced an increasing share of agricultural workforce."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "What were the major limitations of the modern industrial sector that emerged in India during the second half of the nineteenth century? [3 Marks]",
        "answer": "Slow growth rate, concentrated in cotton/jute, near absence of capital goods industries, and limited public sector footprint.",
        "explanation": "Marking Scheme (1 Mark per limitation):\n• 1. Sluggish Growth and Narrow Geographic Base: Modern industry remained confined primarily to cotton textiles in Maharashtra/Gujarat and jute mills in Bengal.\n• 2. Neglect of Capital Goods: There was a near absence of heavy machine-tool and engineering industries, leaving the economy dependent on foreign capital imports.\n• 3. Narrow Public Sector Role: Government investment was restricted to railways, ports, communications, and power generation to support colonial governance."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain the 'Commercialisation of Agriculture' during the British rule. Did it benefit Indian farmers? [3 Marks]",
        "answer": "Shift from food crops to cash crops for export; Did not benefit farmers because it led to exploitation, debt traps, and food shortages.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks farmer impact):\n• Concept: Commercialization refers to the shift from cultivating food crops for domestic household consumption to cash crops (cotton, jute, indigo, tea) for sale in the market.\n• Impact on Farmers: It did not benefit Indian peasants. Farmers were coerced into signing advance supply agreements with European planters at fixed, unremunerative prices. Cash crops exhausted soil fertility, displaced food crops, and led to chronic peasant indebtedness and frequent famines."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "State any three positive contributions made by the British colonial rule in India. [3 Marks]",
        "answer": "Railways and modern transport infrastructure, Commercialization mindset in agriculture, Administrative and legal system.",
        "explanation": "Marking Scheme (1 Mark each):\n• 1. Development of Transportation and Communications: Construction of an integrated railway network, metalled roads, major ports, and the electric telegraph integrated the country.\n• 2. Shift to a Monetary Market Economy: British rule dismantled barter transactions and introduced a standardized currency system, encouraging market-oriented agricultural trade.\n• 3. Effective Administrative & Legal System: Left behind an organized civil administrative framework, codified legal system, and census apparatus that aided governance after independence."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Why is the year 1921 considered the 'Year of the Great Divide' in the demographic history of India? [3 Marks]",
        "answer": "Transition from fluctuating/stagnant population (Stage 1) to continuous, sustained population growth (Stage 2).",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Demographic Transition Stages: Prior to 1921, India was in the first stage of demographic transition, characterized by both high birth rates and high death rates.\n• 2. Fluctuating Population: Periodic famines, plague, and the 1918 influenza pandemic caused severe mortality spikes; in fact, the census of 1921 recorded a negative population growth rate.\n• 3. Sustained Growth After 1921: After 1921, death rates gradually began to decline due to localized epidemic control, while birth rates remained stubbornly high. India entered the second stage of demographic transition, experiencing uninterrupted population expansion."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Examine the state of the Agricultural sector in India on the eve of Independence. What were the institutional and technological factors responsible for its backwardness and stagnation? [6 Marks]",
        "answer": "Comprehensive review of agricultural stagnation; Institutional factors (Zamindari, land tenure) and Technological factors (irrigation, inputs, partition).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks overview + 2 Marks institutional factors + 2 Marks technological factors):\n• 1. State of Agriculture on the Eve of Independence [2 Marks]:\n  - Agriculture supported 70-75% of the population, yet total production and productivity per hectare were among the lowest in the world.\n  - The sector suffered from chronic stagnation, low output, frequent crop failures, and pervasive rural indebtedness.\n• 2. Institutional Factors Responsible for Stagnation [2 Marks]:\n  - Land Settlement Systems (Zamindari System): The British introduced the Permanent Settlement in Bengal and eastern regions. Zamindars were recognized as landowners and squeezed exorbitant rent from tenant cultivators without investing in soil fertility or flood prevention.\n  - Revenue Settlement Terms: The colonial government fixed rigid tax collection dates. Zamindars had to deposit revenues on scheduled dates or lose their estates, incentivizing ruthless rent extraction.\n• 3. Technological and Economic Factors [2 Marks]:\n  - Low Levels of Technology: Absence of modern farm machinery, poor agricultural implements, lack of chemical fertilizers, and near-total reliance on erratic rainfall.\n  - Lack of Irrigation: Less than 16% of total cultivated area had assured artificial irrigation.\n  - Partition Shocks: Partition separated India from rich, irrigated agricultural tracts (Punjab canal colonies, Sind) and prime raw jute fields in East Bengal."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the systematic 'De-industrialization' of traditional Indian handicrafts during British colonial rule. What were the two-fold motives and the disastrous economic consequences of this policy? [6 Marks]",
        "answer": "Process of de-industrialization; Two-fold colonial motives; Disastrous economic consequences (unemployment, agricultural pressure, market loss).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks process & motives + 4 Marks consequences):\n• 1. Concept and Two-Fold Motives [2 Marks]:\n  - Prior to British rule, Indian textiles (muslin, calico, silk) and metal handicrafts enjoyed worldwide acclaim for craftsmanship.\n  - The British pursued deliberate de-industrialization with twin motives:\n    (i) Exporter of Raw Materials: Reducing India to a supplier of cheap raw cotton, silk, and jute for British factories.\n    (ii) Captive Consumer Market: Turning India into a captive, duty-free market for machine-made goods manufactured in Manchester and Lancashire.\n• 2. Disastrous Economic Consequences [4 Marks (1 Mark each)]:\n  - (a) Massive Unemployment: Millions of skilled weavers, potters, and metal artisans lost their livelihoods overnight as hand-crafted goods could not compete with cheap machine textiles.\n  - (b) Excessive Pressure on Agriculture: Displaced urban and rural artisans migrated back to villages, crowding agricultural land and worsening disguised unemployment and rural poverty.\n  - (c) Drain of Domestic Income: Domestic demand was satisfied by imported British manufactured goods, diverting income away from Indian producers to Britain.\n  - (d) Loss of Export Markets: Heavy discriminatory export duties on Indian handicrafts shut down traditional foreign markets across Europe and the Middle East."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Analyze India's 'Foreign Trade' during the colonial period. Discuss the composition, direction, and the volume of trade, along with the concept of the 'Drain of Indian Wealth'. [6 Marks]",
        "answer": "Colonial foreign trade characteristics; Composition (raw materials out, finished goods in), Direction (British monopoly), and Drain of Wealth.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks composition & direction + 2 Marks export surplus paradox + 2 Marks drain of wealth):\n• 1. Composition and Direction of Trade [2 Marks]:\n  - Composition: India became an exporter of primary agricultural raw materials (raw silk, cotton, wool, jute, indigo, sugar, tea) and an importer of finished industrial consumer products (cotton, woollen clothes from British mills, light capital machinery).\n  - Direction: Great Britain maintained a monopoly stranglehold over India's foreign trade, controlling more than 50% directly. The remaining trade was limited to China, Ceylon (Sri Lanka), and Persia (Iran). The opening of the Suez Canal in 1869 further strengthened this control.\n• 2. The Paradox of Export Surplus [2 Marks]:\n  - Throughout colonial rule, India generated a substantial export surplus in merchandise goods.\n  - Paradoxically, this surplus brought no economic benefit or inflow of gold/silver to India.\n• 3. Drain of Indian Wealth [2 Marks]:\n  - The export surplus was used to pay 'Home Charges'—the administrative running costs of the colonial government and pensions in Britain.\n  - Financed imperial wars fought by the British army in Asia and Africa.\n  - Siphoned away invisibles, leaving the domestic economy depleted of capital."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Describe the 'Demographic Profile' of India on the eve of Independence. Explain why the year 1921 is known as the 'Year of the Great Divide'. [6 Marks]",
        "answer": "Demographic indicators (Birth/death rates, infant mortality, life expectancy, literacy); Explanation of 1921 Year of Great Divide.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks demographic indicators + 3 Marks 1921 analysis):\n• 1. Demographic Indicators on the Eve of Independence [3 Marks]:\n  - High Birth and Death Rates: Birth rate was approximately 48 per thousand and death rate around 40 per thousand, reflecting an underdeveloped demographic structure.\n  - High Infant Mortality Rate: An alarming 218 infants per thousand live births died before reaching age one.\n  - Low Life Expectancy: Average life expectancy at birth was only 32 to 44 years due to frequent epidemics and lack of healthcare.\n  - Poor Literacy: Overall literacy was under 16%, and female literacy was barely 7%.\n  - Low Standard of Living: Widespread malnutrition, recurring famines, and inadequate access to clean drinking water.\n• 2. Significance of 1921 as the 'Year of the Great Divide' [3 Marks]:\n  - Prior to 1921, India was in the first stage of demographic transition, where high birth rates were matched by high death rates due to famines and pandemics, causing population to fluctuate.\n  - In fact, between 1911 and 1921, India recorded negative population growth (-0.03%) due to the 1918 influenza pandemic.\n  - After 1921, epidemic controls and emergency transport gradually brought death rates down, while birth rates remained elevated.\n  - India entered the second stage of demographic transition, embarking on sustained, accelerating population growth."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Critically evaluate the 'Infrastructure' development undertaken by the British colonial administration in India. Was it intended to serve the interests of the Indian people? [6 Marks]",
        "answer": "Evaluation of railways, ports, posts/telegraphs, roads; Colonial motives vs positive by-products.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks areas of development + 2 Marks colonial motives + 2 Marks positive externalities):\n• 1. Key Areas of Infrastructure Development [2 Marks]:\n  - Railways: Introduced in 1850; connected major interior markets to coastal ports.\n  - Metalled Roads: Built primarily to move defense forces and transport raw materials to railheads.\n  - Ports & Shipping: Developed at Bombay, Calcutta, Madras, and Karachi for international trade.\n  - Posts and Electric Telegraph: Modern postal system and electric telegraph network set up for law and order enforcement.\n• 2. Colonial Motives Behind Development [2 Marks]:\n  - These projects were not undertaken to advance public welfare or promote domestic industrialization.\n  - Strategic Military Objective: Built to enable swift deployment of colonial troops to suppress local rebellions and safeguard the empire.\n  - Commercial Exploitation: Designed to facilitate the extraction of agricultural raw materials and the distribution of British manufactured imports.\n• 3. Positive Externalities / Legacies for Independent India [2 Marks]:\n  - Integrated the national domestic market, reducing geographic barriers.\n  - Enabled rapid movement of food grains during localized crop failures, saving lives during famines.\n  - Left a physical transport network that served as a foundation for independent India's planning."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Discuss the 'Occupational Structure' of India on the eve of Independence. Did it reflect a balanced and developed economy? Justify your answer. [6 Marks]",
        "answer": "Analysis of workforce distribution (Primary 70-75%, Secondary 10%, Tertiary 15-20%); Justification of why it was unbalanced and backward.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks workforce data + 4 Marks justification of imbalance):\n• 1. Workforce Distribution on Eve of Independence [2 Marks]:\n  - Primary Sector (Agriculture): 70% to 75% of the total working population.\n  - Secondary Sector (Manufacturing & Industry): Barely 10% of the workforce.\n  - Tertiary Sector (Services, Trade, Transport): Accounted for 15% to 20%.\n• 2. Justification: Why it Reflected an Unbalanced and Backward Economy [4 Marks]:\n  - Extreme Over-dependence on Agriculture: Developed economies typically have less than 10-15% of their workforce in agriculture; India had three-quarters dependent on low-yield farming.\n  - Underdeveloped Industrial Sector: Only 10% in manufacturing indicated an inability of domestic industry to generate factory employment, leaving millions in disguised unemployment.\n  - Regional Asymmetry: Industrial activity was concentrated in isolated coastal urban hubs (Bombay, Calcutta, Madras), leaving large swaths of the hinterland economically isolated.\n  - Structural Stagnation: The occupational structure remained largely frozen over two centuries, showing no structural transformation toward higher-productivity sectors."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "What was the condition of the 'Modern Industrial Sector' in India on the eve of Independence? Discuss the role and limitations of private Indian enterprises and the public sector. [6 Marks]",
        "answer": "Growth of cotton and jute mills; Emergence of TISCO; Severe lack of capital goods industries; Minimal public sector role.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks emerging industries + 2 Marks private enterprise & capital goods gap + 2 Marks public sector evaluation):\n• 1. Emergence of Modern Industries [2 Marks]:\n  - In the second half of the 19th century, modern machine-based industries began to take root in India.\n  - Cotton textile mills were established in Maharashtra and Gujarat, primarily by Indian entrepreneurs.\n  - Jute mills were concentrated in Bengal, dominated by British corporate capital.\n  - After World War I, sugar, cement, and paper industries also developed.\n• 2. Role of Private Enterprise and the Capital Goods Void [2 Marks]:\n  - In 1907, the Tata Iron and Steel Company (TISCO) was founded at Jamshedpur, marking an important private Indian breakthrough in basic metal production.\n  - However, there was a near-total absence of heavy capital goods and engineering industries to produce machinery, leaving India reliant on imported capital equipment.\n• 3. Scope and Limitations of the Public Sector [2 Marks]:\n  - The colonial state's industrial role was extremely limited.\n  - Confined strictly to railways, ports, communications, and power utilities necessary for colonial trade and governance.\n  - The colonial government made no effort to establish basic heavy industries, leaving a stunted industrial base at independence."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Explain how the 'Partition of India' in 1947 aggravated the economic difficulties of the newly independent country in agriculture, industry, and population rehabilitation. [6 Marks]",
        "answer": "Impact of partition: Loss of fertile food/cash crop lands (Punjab/Sind/Bengal), raw material crises for jute and cotton mills, and refugee crisis.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks agricultural impact + 2 Marks industrial impact + 2 Marks refugee crisis):\n• 1. Impact on Agriculture [2 Marks]:\n  - Loss of Highly Productive Food Bowls: India lost fertile, canal-irrigated agricultural lands in West Punjab and Sind to Pakistan, worsening acute domestic food grain shortages.\n  - Reduced Agricultural Capacity: Per capita arable land in India shrank, intensifying food import dependence.\n• 2. Impact on Modern Industry [2 Marks]:\n  - Raw Jute Crisis: While almost all jute processing mills remained in West Bengal (India), roughly 80% of the rich jute-growing acreage went to East Pakistan (now Bangladesh), idling mills.\n  - Raw Cotton Shortage: Textile mills in Bombay and Ahmedabad faced severe shortages as prime long-staple cotton tracts went to West Pakistan.\n• 3. Refugee and Rehabilitation Burden [2 Marks]:\n  - Millions of displaced persons crossed borders into Punjab, Bengal, and Delhi, placing enormous strain on public finances, housing, and social infrastructure."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Were there any positive legacies of British colonial rule in India? Provide a balanced critical assessment of four key positive contributions. [6 Marks]",
        "answer": "Critical evaluation of positive legacies: Transport network, Market economy, Famine management, and Civil administrative machinery.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four legacies):\n• 1. Introduction of Integrated Railway System: Built an extensive rail network connecting distant corners of the subcontinent, breaking geographic isolation and serving as a transport foundation for independent India.\n• 2. Shift to a Monetized Commercial Market: The abolition of barter in favor of a uniform currency system facilitated domestic trade, modern banking, and market-oriented agricultural production.\n• 3. Mitigation of Localized Famines: Railways and improved roads enabled quick transport of food grains from surplus to drought-stricken regions, improving famine response.\n• 4. Established Civil Administration and Legal Framework: Left an organized administrative apparatus (Indian Civil Service), codified judicial system, and statistical institutions that provided administrative continuity after independence."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Compare the estimates of 'National Income' and 'Per Capita Income' during the colonial period made by various economists. Why were official colonial authorities reluctant to measure India's national income? [6 Marks]",
        "answer": "Estimates by Naoroji, Digby, Shirras, Rao, and Desai; Dr. Rao's authority; Reluctance of colonial authorities to expose economic drain.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks economists' estimates + 3 Marks colonial reluctance):\n• 1. Pioneer Estimators and Findings [3 Marks]:\n  - Dadabhai Naoroji made the first non-official attempt in 1867-68, estimating per capita income at ₹20 per year.\n  - Other prominent estimators included William Digby, Findlay Shirras, Dr. V.K.R.V. Rao, and R.C. Desai.\n  - The estimates prepared by Dr. V.K.R.V. Rao were considered the most statistically rigorous and reliable.\n  - All studies concluded that aggregate real GDP grew at less than 2% per year and per capita output grew at less than 0.5% annually during the first half of the 20th century.\n• 2. Reluctance of Colonial Authorities [3 Marks]:\n  - The British government never undertook an official estimation of India's national income.\n  - Official statistics would have exposed the stagnant living standards, worsening poverty, and the massive unrequited transfer of Indian resources ('Drain of Wealth').\n  - It suited colonial interests to portray British governance as a modernizing force rather than an extractive regime."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 8,
      "book": "Part B: Indian Economic Development",
      "title": "Indian Economy (1950–1990)",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 6: Development Experience (1947-90) and Economic Reforms since 1991 (12 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following was NOT one of the four common core goals of India's Five Year Plans?",
        "options": [
          "(a) Growth",
          "(b) Modernization",
          "(c) Self-reliance",
          "(d) Complete Privatization"
        ],
        "answer": "(d) Complete Privatization",
        "explanation": "The four core goals of Five Year Plans articulated by the Planning Commission were Growth, Modernization, Self-reliance, and Equity. Privatization was not an objective during the 1950-1990 planning era."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Under the Industrial Policy Resolution (IPR) 1956, how many industrial categories/schedules were established?",
        "options": [
          "(a) Two schedules",
          "(b) Three schedules (Schedule A, B, and C)",
          "(c) Four schedules",
          "(d) Five schedules"
        ],
        "answer": "(b) Three schedules (Schedule A, B, and C)",
        "explanation": "IPR 1956 classified industries into three schedules: Schedule A (17 industries exclusively state-owned), Schedule B (12 mixed industries state-led), and Schedule C (remaining private industries subject to licensing)."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The strategy of protecting domestic industries from foreign competition through tariffs and import quotas is known as:",
        "options": [
          "(a) Export Promotion Strategy",
          "(b) Import Substitution Strategy (Inward-Looking Trade Policy)",
          "(c) Outward-Looking Strategy",
          "(d) Foreign Direct Investment Policy"
        ],
        "answer": "(b) Import Substitution Strategy (Inward-Looking Trade Policy)",
        "explanation": "Import substitution aimed to replace foreign imports with domestic production, shielding nascent local industries using tariffs and quantitative quotas."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The 'Green Revolution' in India was primarily based on the introduction of:",
        "options": [
          "(a) Organic compost manure only",
          "(b) High-Yielding Varieties (HYV) seeds, chemical fertilizers, pesticides, and assured irrigation",
          "(c) Genetically modified cash crops",
          "(d) Complete manual farming"
        ],
        "answer": "(b) High-Yielding Varieties (HYV) seeds, chemical fertilizers, pesticides, and assured irrigation",
        "explanation": "The Green Revolution was built on a technological package combining HYV semi-dwarf seeds with chemical inputs and controlled irrigation."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The portion of agricultural harvest that is sold in the open market by farmers after meeting their own family consumption requirements is called:",
        "options": [
          "(a) Subsistence Output",
          "(b) Marketed Surplus",
          "(c) Deficit Stock",
          "(d) Buffer Stock"
        ],
        "answer": "(b) Marketed Surplus",
        "explanation": "Marketed Surplus = Total Agricultural Production - Farmer's On-Farm Self-Consumption. It represents the food available for non-agricultural urban populations."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which committee, constituted in 1955, recognized the importance of using small-scale industries for promoting rural development and employment?",
        "options": [
          "(a) Karve Committee (Village and Small-Scale Industries Committee)",
          "(b) Kothari Committee",
          "(c) Narasimham Committee",
          "(d) Mahalanobis Committee"
        ],
        "answer": "(a) Karve Committee (Village and Small-Scale Industries Committee)",
        "explanation": "The Village and Small-Scale Industries Committee (Karve Committee) was appointed in 1955 to examine the potential of small industries for rural industrialization and job creation."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "'Land Ceiling' as an institutional land reform measure refers to:",
        "options": [
          "(a) Constructing roofs on agricultural fields",
          "(b) Fixing the maximum legal limit on the size of agricultural land that could be owned by an individual or family",
          "(c) Banning the sale of agricultural land to foreigners",
          "(d) Fixing minimum crop prices"
        ],
        "answer": "(b) Fixing the maximum legal limit on the size of agricultural land that could be owned by an individual or family",
        "explanation": "Land ceiling legislated a statutory cap on individual land holdings to dismantle rural feudal concentration and redistribute surplus land to landless tillers."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "The architect of India's Second Five Year Plan, which focused heavily on establishing basic and heavy capital goods industries, was:",
        "options": [
          "(a) Dr. Manmohan Singh",
          "(b) Prof. P.C. Mahalanobis",
          "(c) Amartya Sen",
          "(d) Dadabhai Naoroji"
        ],
        "answer": "(b) Prof. P.C. Mahalanobis",
        "explanation": "The Second Five Year Plan (1956-61) was framed around the Mahalanobis Model, prioritizing state-led heavy capital goods and core infrastructure."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Why did the government impose 'Industrial Licensing' under the Industries (Development and Regulation) Act, 1951?",
        "options": [
          "(a) To promote regional balance by encouraging new industries in economically backward areas through easier licensing",
          "(b) To shut down all private enterprises",
          "(c) To maximize tax collection from consumers",
          "(d) To encourage foreign imports"
        ],
        "answer": "(a) To promote regional balance by encouraging new industries in economically backward areas through easier licensing",
        "explanation": "Licensing was used to direct industrial investments into backward regions by offering accelerated approvals, tax concessions, and subsidized electricity."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The first phase of the Green Revolution (mid-1960s to mid-1970s) was primarily restricted to which crops and regions?",
        "options": [
          "(a) Wheat crop in Punjab, Haryana, and Western Uttar Pradesh",
          "(b) Rice crop in Kerala and West Bengal",
          "(c) Cotton crop in Gujarat and Maharashtra",
          "(d) Pulses in Madhya Pradesh"
        ],
        "answer": "(a) Wheat crop in Punjab, Haryana, and Western Uttar Pradesh",
        "explanation": "The initial phase was largely a 'Wheat Revolution' concentrated in irrigated northern plains (Punjab, Haryana, Western UP) with access to reliable canal water."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Small-scale industries are considered more advantageous for India because they are:",
        "options": [
          "(a) Highly capital-intensive",
          "(b) Labor-intensive, generating more employment opportunities per unit of capital invested",
          "(c) Exclusively export-oriented",
          "(d) Dependent entirely on foreign technology"
        ],
        "answer": "(b) Labor-intensive, generating more employment opportunities per unit of capital invested",
        "explanation": "Small-scale enterprises use labor-intensive production methods, making them well-suited for a labor-surplus, capital-scarce economy like India."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "A tax levied on imported goods to make them more expensive in domestic markets is called a:",
        "options": [
          "(a) Quota",
          "(b) Tariff",
          "(c) Subsidy",
          "(d) Royalty"
        ],
        "answer": "(b) Tariff",
        "explanation": "A tariff is a customs duty or tax imposed on imported commodities to raise their price and protect domestic producers from foreign competition."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Specifying the physical quantity of a commodity that can be imported into the country during a given period is known as:",
        "options": [
          "(a) Tariff",
          "(b) Import Quota",
          "(c) Embargo",
          "(d) Trade License"
        ],
        "answer": "(b) Import Quota",
        "explanation": "An import quota sets a quantitative limit on the physical volume of a commodity permitted to enter the country."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The abolition of intermediaries in post-independence land reforms brought how many tenant farmers into direct contact with the state?",
        "options": [
          "(a) Nearly 200 lakh (20 million) tenants",
          "(b) Only 5,000 tenants",
          "(c) Exactly 10 lakh tenants",
          "(d) 500 lakh tenants"
        ],
        "answer": "(a) Nearly 200 lakh (20 million) tenants",
        "explanation": "Abolishing zamindars and jagirdars brought approximately 200 lakh tenant tillers into direct contact with the government, freeing them from landlord exploitation."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following was a major criticism of the 'Permit-License Raj' between 1950 and 1990?",
        "options": [
          "(a) Big industrial houses misused licensing to block competition, resulting in monopolies, red tape, and bureaucratic delays",
          "(b) It led to excessive foreign investment",
          "(c) It created too many private universities",
          "(d) It caused hyper-deflation"
        ],
        "answer": "(a) Big industrial houses misused licensing to block competition, resulting in monopolies, red tape, and bureaucratic delays",
        "explanation": "Industrial licensing was frequently exploited by entrenched business houses to preempt capacity, restrict competition, and create domestic seller monopolies."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "In 1950, a Small-Scale Industrial unit was defined as one investing a maximum of:",
        "options": [
          "(a) ₹5 lakh",
          "(b) ₹1 crore",
          "(c) ₹10 crore",
          "(d) ₹25 lakh"
        ],
        "answer": "(a) ₹5 lakh",
        "explanation": "In 1950, a small-scale industry was defined as an enterprise with a maximum capital investment of ₹5 lakh in fixed assets/machinery (which has been increased periodically)."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The goal of 'Self-Reliance' in the first seven Five Year Plans was emphasized primarily to:",
        "options": [
          "(a) Avoid foreign political interference and vulnerability to external economic pressures, especially in food grain supplies",
          "(b) Completely isolate India from world science",
          "(c) Stop all domestic investments",
          "(d) Banish all technology"
        ],
        "answer": "(a) Avoid foreign political interference and vulnerability to external economic pressures, especially in food grain supplies",
        "explanation": "Self-reliance aimed to safeguard national sovereignty by ending dependence on foreign food aid (such as US PL-480 imports) and strategic machinery."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What is the primary argument advanced by economists who SUPPORT agricultural subsidies in India?",
        "options": [
          "(a) Most Indian farmers are poor and smallholders who cannot afford costly HYV inputs without government support",
          "(b) Subsidies help rich fertilizer company owners",
          "(c) Subsidies eliminate the need for farming",
          "(d) Subsidies cause budget surpluses"
        ],
        "answer": "(a) Most Indian farmers are poor and smallholders who cannot afford costly HYV inputs without government support",
        "explanation": "Supporters argue that agriculture is an inherently risky, monsoon-dependent activity, and removing subsidies would force vulnerable smallholders to abandon modern technology."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Under Schedule A of IPR 1956, how many industries were reserved exclusively for the Public Sector?",
        "options": [
          "(a) 17 industries",
          "(b) 12 industries",
          "(c) 6 industries",
          "(d) 24 industries"
        ],
        "answer": "(a) 17 industries",
        "explanation": "Schedule A of IPR 1956 listed 17 strategic industries—including defense equipment, atomic energy, iron and steel, and railways—reserved exclusively for state development."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why did land reform legislation largely fail to achieve its intended redistributive goals in many Indian states?",
        "options": [
          "(a) Big landlords used legal loopholes, challenged laws in courts, registered lands under fictitious names (benami), and evicted tenants",
          "(b) No tenants wanted free land",
          "(c) The Supreme Court banned all land reforms",
          "(d) Land was distributed to foreign companies"
        ],
        "answer": "(a) Big landlords used legal loopholes, challenged laws in courts, registered lands under fictitious names (benami), and evicted tenants",
        "explanation": "Except in Kerala and West Bengal where political will was strong, landlords delayed ceiling acts through litigation and registered excess land under relatives to evade ceilings."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "Which of the following is an example of 'Modernization' as a planning objective?",
        "options": [
          "(a) Adoption of advanced IT technologies and recognition of equal rights for women in the workplace",
          "(b) Returning to ancient barter systems",
          "(c) Shutting down engineering colleges",
          "(d) Importing old machines"
        ],
        "answer": "(a) Adoption of advanced IT technologies and recognition of equal rights for women in the workplace",
        "explanation": "Modernization entails not just adopting advanced technology to raise productivity, but also modernizing social outlooks, such as gender empowerment and social equality."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "During 1950–1990, the Public Sector was assigned the 'Commanding Heights' of the economy primarily because:",
        "options": [
          "(a) Private entrepreneurs lacked sufficient capital and there was an inadequate domestic market to incentivize heavy private investment",
          "(b) Private enterprise was illegal in India",
          "(c) Foreign banks owned all Indian industries",
          "(d) The government wanted to sell all factories abroad"
        ],
        "answer": "(a) Private entrepreneurs lacked sufficient capital and there was an inadequate domestic market to incentivize heavy private investment",
        "explanation": "At independence, the private sector lacked the enormous capital required for heavy infrastructure, compelling the state to lead heavy industrialization."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "In which two Indian states were Land Reforms implemented most successfully due to strong political commitment?",
        "options": [
          "(a) Kerala and West Bengal (Operation Barga)",
          "(b) Bihar and Uttar Pradesh",
          "(c) Rajasthan and Gujarat",
          "(d) Punjab and Haryana"
        ],
        "answer": "(a) Kerala and West Bengal (Operation Barga)",
        "explanation": "Kerala and West Bengal showed genuine political will, successfully enforcing land ceilings, recording sharecroppers (Operation Barga), and giving land rights to tillers."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which institution set up government buffer stocks of food grains to protect the country against crop failures and famine?",
        "options": [
          "(a) Food Corporation of India (FCI)",
          "(b) NITI Aayog",
          "(c) State Bank of India",
          "(d) NABARD"
        ],
        "answer": "(a) Food Corporation of India (FCI)",
        "explanation": "The Food Corporation of India (FCI) was established in 1965 to procure marketed surplus from farmers at Minimum Support Prices (MSP) and maintain national buffer stocks."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What was the ceiling on private investment in fixed assets for Small-Scale Industries updated to by the year 2000?",
        "options": [
          "(a) ₹1 crore",
          "(b) ₹5 lakh",
          "(c) ₹50 lakh",
          "(d) ₹10 crore"
        ],
        "answer": "(a) ₹1 crore",
        "explanation": "The investment ceiling in plant and machinery for small-scale industrial units was raised from ₹5 lakh in 1950 to ₹1 crore by the year 2000 to accommodate technological upgrading."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): The Green Revolution transformed India from a ship-to-mouth food-deficient nation into a self-reliant agricultural power.\nReason (R): The widespread adoption of HYV seeds along with fertilizers, pesticides, and assured irrigation led to a substantial marketed surplus, enabling large buffer stocks.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. The Green Revolution generated substantial marketed surplus, ending reliance on American PL-480 food imports and building national food reserves."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Protection of domestic industries through import tariffs and quotas between 1950 and 1990 created an inefficient monopolistic sellers' market.\nReason (R): In the absence of foreign competition, domestic manufacturers faced zero pressure to upgrade product quality or reduce production costs.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Insulating domestic producers from external competition fostered a captive sellers' market where consumers had to accept substandard goods."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Economic growth alone does not necessarily guarantee an improvement in the living conditions of the poorest sections of society.\nReason (R): The fruits of economic growth may be cornered by wealthy elites unless the state deliberately pursues the plan objective of 'Equity' through redistribution.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Growth without equity widens disparities, making equity essential to ensure broad-based access to basic food, housing, and education."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): The Karve Committee (1955) recommended the preservation and promotion of small-scale industries.\nReason (R): Small-scale enterprises require huge amounts of capital and very little labor per unit of production.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) (A) is true but (R) is false",
          "(c) (A) is false but (R) is true",
          "(d) Both (A) and (R) are false"
        ],
        "answer": "(b) (A) is true but (R) is false",
        "explanation": "Assertion is true. Reason is false: small-scale industries were championed specifically because they are labor-intensive and capital-saving, not capital-intensive."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Land ceiling laws were successfully implemented with uniform thoroughness across every state in India.\nReason (R): State governments demonstrated strong political commitment and closed all legal loopholes to prevent landlords from holding benami land.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Land reforms met severe resistance from landed lobbies and failed in most states (except Kerala and West Bengal) due to legal delays and lack of political will."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain 'Modernization' and 'Self-Reliance' as common goals of Five Year Plans in India. [3 Marks]",
        "answer": "Modernization: adopting new technology and modern social values; Self-reliance: avoiding dependence on foreign imports.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Modernization: Involves the adoption of modern technology in agriculture and industry (e.g., HYV seeds, computers) to raise output per worker. It also includes modernizing social outlooks, such as ensuring equal workplace opportunities and recognition for women.\n• 2. Self-Reliance: Means avoiding reliance on foreign imports for essential goods (especially food grains, core machinery, and defense). Promoted to safeguard national sovereignty from foreign geopolitical pressures."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "What is 'Marketed Surplus'? Why was it critical for the success of the Green Revolution? [3 Marks]",
        "answer": "Portion of farm output sold in market; Crucial because it feeds urban workers, stabilizes food prices, and enables government buffer stocks.",
        "explanation": "Marking Scheme:\n• Concept [1 Mark]: Marketed surplus is the portion of total agricultural produce sold by farmers in the open commercial market after retaining sufficient output for household consumption: Marketed Surplus = Total Output - Self-Consumption.\n• Critical Importance [2 Marks]:\n  1. If farmers consumed all the extra grain from HYV seeds, the urban and industrial population would still face food shortages.\n  2. Marketed surplus lowered food grain prices relative to industrial goods, helping low-income consumers, and allowed the Food Corporation of India (FCI) to build strategic buffer stocks against droughts."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the three-fold classification of industries under the Industrial Policy Resolution (IPR) 1956. [3 Marks]",
        "answer": "Schedule A (17 industries, state monopoly), Schedule B (12 industries, state-led mixed), Schedule C (remaining, private sector with licensing).",
        "explanation": "Marking Scheme (1 Mark each category):\n• 1. Schedule A: Comprised 17 strategic heavy industries (defense hardware, atomic energy, iron and steel, railways) whose development was the exclusive monopoly of the Central Government.\n• 2. Schedule B: Included 12 basic industries (aluminum, mining, fertilizers, machine tools) where the state would take the lead in setting up new units, while private enterprise could supplement public efforts.\n• 3. Schedule C: Consisted of all remaining consumer and light industries left open to the private sector, but strictly controlled through mandatory industrial licensing."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "What were 'Land Ceilings'? State two reasons why they failed to achieve effective land redistribution in most states. [3 Marks]",
        "answer": "Statutory cap on land ownership; Reasons for failure: Benami transfers/loopholes and protracted court litigation.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks failure reasons):\n• Concept: Land ceiling was a statutory law fixing the maximum limit on the amount of agricultural land an individual or family could legally own, with the surplus to be confiscated and redistributed to landless laborers.\n• Reasons for Failure:\n  1. Big landlords exploited loopholes in the legislation to register surplus land under fictitious names (benami transactions) or transferred holdings to distant relatives.\n  2. Landlords challenged the legislation in courts, using prolonged legal delays to evict tenants and claim the land for 'personal cultivation'."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What is an 'Inward-Looking Trade Strategy' (Import Substitution)? Mention its two main instruments. [3 Marks]",
        "answer": "Strategy to replace foreign imports with domestic production; Instruments: Tariffs and Import Quotas.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks instruments):\n• Concept: An inward-looking trade strategy replaces foreign imports with domestic production of the same goods, insulating infant domestic industries from external competition.\n• Two Main Instruments:\n  1. Tariffs: Heavy customs duties levied on imported goods, making foreign products more expensive than domestic substitutes.\n  2. Import Quotas: Non-tariff quantitative restrictions that specify the maximum physical volume of a good that may be imported during a year."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Why did the government protect Small-Scale Industries (SSI) through product reservations and financial concessions? [3 Marks]",
        "answer": "To protect them from large corporate competition, generate labor-intensive employment, and promote regional decentralization.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Protection from Large Mills: Small-scale units lacked the financial resources and economies of scale to compete directly with large domestic and multinational corporations.\n• 2. High Employment Generation: SSIs are labor-intensive, creating more employment opportunities per unit of capital than large mechanized factories.\n• 3. Decentralized Regional Growth: SSIs can be set up in rural and semi-urban areas with modest investment, checking urban migration and reducing regional disparities."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "State the arguments for and against 'Agricultural Subsidies' in India. [4 Marks]",
        "answer": "For: protects poor smallholders and encourages adoption of new technology; Against: huge fiscal drain and benefits captured by rich farmers/fertilizer lobbies.",
        "explanation": "Marking Scheme (2 Marks for + 2 Marks against):\n• Arguments in Favor of Subsidies:\n  1. Farming in India is inherently risky and dependent on monsoons; subsidies encourage poor farmers to adopt expensive HYV seeds and fertilizers.\n  2. The majority of Indian cultivators are small and marginal farmers who cannot afford market-rate agricultural inputs.\n• Arguments Against Subsidies:\n  1. They place a massive fiscal burden on government finances, diverting resources away from long-term capital investments like irrigation canals and cold storage.\n  2. Subsidies are largely captured by rich, large-scale farmers and fertilizer manufacturers rather than reaching target smallholders."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain how the 'Industrial Licensing' policy was used to promote 'Regional Equality'. [3 Marks]",
        "answer": "Mandatory licensing prioritized approvals, tax holidays, and cheap power for industrial units set up in economically backward districts.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Licensing as a Regional Tool: Under the Industries (Development and Regulation) Act, 1951, no new factory could be started or expanded without a government license.\n• 2. Concessions in Backward Areas: The licensing authority made it easier to obtain licenses if the factory was established in an economically backward district.\n• 3. Complementary Incentives: Enterprises setting up in backward areas were offered tax holidays, concessional industrial power tariffs, and subsidized land, encouraging regional industrial dispersal."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "What is the difference between 'Economic Growth' and 'Equity' as goals of planning? Why must they go together? [3 Marks]",
        "answer": "Growth is expansion of GDP; Equity is fair distribution so all citizens share prosperity; Both needed to prevent extreme inequality.",
        "explanation": "Marking Scheme (1 Mark each concept + 1 Mark synthesis):\n• 1. Economic Growth: Refers to a sustained increase in the country's Gross Domestic Product (GDP) and per capita output over time.\n• 2. Equity: Ensures that the benefits of economic growth are distributed fairly across all segments of society, reducing wealth inequality and providing basic necessities (food, housing, healthcare) to the poorest.\n• 3. Why Both are Essential: Growth without equity leads to wealth concentration among the rich while the poor remain impoverished; equity without growth results in the redistribution of poverty."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Explain the role of the 'Public Sector' in the industrial development of India between 1950 and 1990. [3 Marks]",
        "answer": "Commanding heights of economy, building heavy capital goods infrastructure, and generating industrial employment.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Building Basic Capital Goods Infrastructure: The state established steel plants (Bhilai, Rourkela, Durgapur), heavy machinery (BHEL), and power grids where private capital was unavailable.\n• 2. Commanding Heights: Guided national resource allocation toward social priorities rather than private profit maximization.\n• 3. Employment and Regional Development: Provided organized employment and established large public industrial complexes in economically backward regions to foster balanced development."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the four core goals of Five Year Plans in India: Growth, Modernization, Self-Reliance, and Equity. Discuss how these goals sometimes conflict with each other. [6 Marks]",
        "answer": "Detailed examination of the 4 core planning goals and their potential trade-offs and conflicts.",
        "explanation": "Step-by-Step Marking Scheme (4 Marks for four goals + 2 Marks for conflict/trade-off):\n• 1. The Four Core Goals [4 Marks (1 Mark each)]:\n  - (a) Growth: Increasing the country's productive capacity and aggregate output of goods and services (GDP). A larger GDP pie allows more resources for national development.\n  - (b) Modernization: Adoption of modern technology in agriculture and manufacturing to raise productivity per worker, accompanied by modernizing social outlooks (e.g., gender equality, breaking caste barriers).\n  - (c) Self-Reliance: Fostering domestic manufacturing capacity to avoid dependence on foreign imports for vital items (food grains, defense, heavy machinery), safeguarding national political autonomy.\n  - (d) Equity: Ensuring that the fruits of growth are distributed fairly, reducing disparities between rich and poor and ensuring every citizen has access to basic necessities.\n• 2. Trade-offs and Conflicts Between Goals [2 Marks]:\n  - Growth vs. Equity: High growth strategies often rely on capital-intensive technology and tax incentives for corporations, which can widen income disparities if not checked.\n  - Modernization vs. Employment: Introducing automated machinery and modern technology can displace labor in the short run, conflicting with the goal of full employment in a labor-abundant economy."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Evaluate the 'Green Revolution' in Indian agriculture. Discuss its major achievements and the socio-economic criticisms leveled against it. [6 Marks]",
        "answer": "Achievements: food self-sufficiency, marketed surplus, buffer stocks; Criticisms: crop/regional skew, ecological strain, income disparities.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks achievements + 3 Marks criticisms):\n• 1. Major Achievements of Green Revolution [3 Marks]:\n  - (a) Self-Sufficiency in Food Grains: India eliminated its humiliating dependence on imported food grains under the US PL-480 program, achieving national food sovereignty.\n  - (b) Substantial Marketed Surplus: Output expanded beyond farmers' self-consumption, generating large commercial supplies that kept food prices affordable for urban workers.\n  - (c) Strategic Buffer Stocks: The Food Corporation of India (FCI) was able to build substantial buffer stocks to counter droughts and food emergencies.\n• 2. Socio-Economic and Environmental Criticisms [3 Marks]:\n  - (a) Regional Disparities: In the first phase, benefits were concentrated in irrigated states (Punjab, Haryana, Western UP), widening regional economic inequality.\n  - (b) Inter-Crop Skew: Gains were heavily skewed toward wheat and rice, while coarse cereals, pulses, and oilseeds were largely bypassed.\n  - (c) Widening Farm Income Gap: Wealthy landlords with capital and tubewells benefited disproportionately, leaving marginal peasants indebted.\n  - (d) Ecological Damage: Excessive chemical fertilizer use, monoculture, and groundwater depletion led to soil degradation and falling water tables."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Analyze the 'Industrial Policy Resolution (IPR) 1956'. How did it serve as the guiding blueprint for industrial development during the planning era? Discuss the role of 'Industrial Licensing'. [6 Marks]",
        "answer": "Comprehensive review of IPR 1956 (Schedules A, B, C), socialist pattern of society, and the role/misuse of Industrial Licensing.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks IPR 1956 provisions + 3 Marks Industrial Licensing role & critique):\n• 1. Framework of IPR 1956 [3 Marks]:\n  - In accordance with the goal of establishing a 'Socialist Pattern of Society', IPR 1956 placed the public sector at the commanding heights.\n  - Classified all industries into three categories:\n    (i) Schedule A: 17 industries exclusively owned and managed by the Central Government (railways, defense, atomic energy, basic metals).\n    (ii) Schedule B: 12 industries where the state would progressively expand ownership, with private enterprise playing a supplementary role.\n    (iii) Schedule C: Remaining consumer goods industries open to private entrepreneurs, but subject to government regulation.\n• 2. Role and Implementation of Industrial Licensing [3 Marks]:\n  - Mandatory Licenses: No new industrial unit could be set up, expanded, or diversified without an explicit industrial license from the government.\n  - Promoting Regional Balance: Licenses were granted more easily in economically backward areas, paired with tax holidays and subsidized utility rates.\n  - Critical Appraisal: Big industrial houses routinely obtained and sat on licenses to block potential competitors, resulting in monopoly dominance, production bottlenecks, and bureaucratic rent-seeking ('Permit-License Raj')."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What were 'Land Reforms'? Discuss the two major types of land reforms introduced after independence: 'Abolition of Intermediaries' and 'Land Ceilings'. Why was their implementation uneven across states? [6 Marks]",
        "answer": "Concept of land reforms; Abolition of intermediaries; Land ceilings; Reasons for uneven performance (political will vs landed interests).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks abolition of intermediaries + 2 Marks land ceilings + 2 Marks reasons for uneven success):\n• 1. Abolition of Intermediaries [2 Marks]:\n  - The post-independence government legislated the abolition of the Zamindari, Mahalwari, and Jagirdari systems.\n  - Brought approximately 200 lakh (20 million) tenant farmers into direct contact with the state, conferring ownership rights and ending rent exploitation.\n• 2. Land Ceilings [2 Marks]:\n  - Legislation setting a statutory ceiling on the maximum size of agricultural land an individual or family could hold.\n  - Surplus land above the ceiling was to be acquired by the government and redistributed to landless agricultural laborers.\n• 3. Reasons for Uneven Success Across States [2 Marks]:\n  - Success in Kerala and West Bengal: Strong political commitment ensured strict enforcement, registry of sharecroppers (Operation Barga), and genuine land redistribution.\n  - Failure in Other States: In states like Bihar and Uttar Pradesh, landlords exploited legal loopholes, registered land under benami names, transferred titles to relatives, and used litigation to evict tenants, blunting the impact of reforms."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Critically examine the 'Inward-Looking Trade Strategy' (Import Substitution) adopted by India during 1950–1990. What were its main merits and demerits? [6 Marks]",
        "answer": "Merits: diversified industrial base, protection of infant industries; Demerits: lack of competitiveness, inefficient sellers' market, foreign exchange drain.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks merits + 2 Marks demerits):\n• 1. Concept of Inward-Looking Strategy [2 Marks]:\n  - Policy of replacing foreign imports with domestic production, protecting domestic industries through heavy tariffs and import quotas to foster self-reliance.\n• 2. Merits and Achievements [2 Marks]:\n  - Diversified Industrial Base: Spurred the development of a broad domestic industrial base spanning consumer goods, chemicals, automobiles, and engineering.\n  - Industrial Growth: Industrial sector output grew at a respectable ~6% per annum during the planning period, raising industry's contribution to GDP from 13% in 1950 to 24% in 1990.\n• 3. Demerits and Structural Failures [2 Marks]:\n  - Inefficient Domestic Monopolies: Shielded from global competition, domestic manufacturers had little incentive to improve quality or cut costs, creating an uncompetitive sellers' market.\n  - Consumer Exploitation: Domestic buyers had to accept overpriced, technologically obsolete products (e.g., waiting years for Ambassador cars or Bajaj scooters).\n  - Foreign Exchange Drain: The strategy neglected export promotion, leading to chronic trade deficits and contributing to the 1991 Balance of Payments crisis."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Discuss the significance and problems of the 'Public Sector' in India's economic development during 1950–1990. [6 Marks]",
        "answer": "Significance: capital mobilization, basic infrastructure, employment; Problems: chronic losses, operational overstaffing, lack of accountability.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks significance + 3 Marks problems):\n• 1. Significance of the Public Sector [3 Marks]:\n  - Capital Mobilization for Heavy Industries: Set up core industries (steel, heavy electricals, coal, petroleum, power) requiring capital investments beyond the reach of private firms.\n  - Infrastructure Foundation: Built national rail, communication, and power networks, laying the foundation for private industrial growth.\n  - Social and Regional Equity: Set up public enterprises in backward regions to generate employment and foster balanced regional development.\n• 2. Problems and Inefficiencies [3 Marks]:\n  - Chronic Operating Losses: Many public sector undertakings (PSUs) incurred persistent financial losses, becoming a heavy drain on government budgets.\n  - Mission Creep: The state expanded into non-essential commercial activities (running hotels, producing bread, manufacturing footwear) where private enterprise was better suited.\n  - Bureaucratic Interference & Overstaffing: PSUs suffered from excessive political interference, overstaffing, lack of managerial autonomy, and absence of accountability."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Explain the role and significance of 'Small-Scale Industries' (SSIs) in the economic development of India during 1950–1990. How did the government protect and support them? [6 Marks]",
        "answer": "Significance of SSIs (labor-intensive, low capital, regional balance); Government support (reservation of products, concessions, credit).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks significance + 3 Marks government protection measures):\n• 1. Role and Significance of SSIs [3 Marks]:\n  - High Employment Generation: SSIs are labor-intensive, generating substantially more jobs per unit of capital invested than large mechanized corporations.\n  - Capital Saving: Suited for India's capital-scarce economy, enabling small entrepreneurs to start manufacturing with modest savings.\n  - Balanced Regional Industrialization: SSIs can be set up in rural and semi-urban areas, checking distress migration to crowded cities.\n  - Equitable Income Distribution: Disperses industrial ownership across a wider base of small entrepreneurs.\n• 2. Government Protective Measures [3 Marks]:\n  - Reservation of Products: The government reserved hundreds of items (over 800 products at its peak) for exclusive manufacture by the SSI sector.\n  - Financial & Tax Concessions: Lower excise duties, sales tax exemptions, and preferential government procurement policies.\n  - Priority Sector Bank Credit: Commercial banks were directed to extend loans to SSIs at concessional interest rates under priority sector lending."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Provide a comprehensive critical appraisal of the development strategies pursued by India between 1950 and 1990. What were the major achievements and shortcomings? [6 Marks]",
        "answer": "Balanced appraisal: Achievements (diversified industry, food security, capital stock) vs Shortcomings (inefficiencies, PSU losses, BoP crisis).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks achievements + 3 Marks shortcomings):\n• 1. Major Achievements (1950–1990) [3 Marks]:\n  - Structural Transformation: Industrial contribution to GDP rose from 13% (1950) to nearly 24% (1990), with India producing everything from consumer goods to heavy machinery.\n  - Agricultural Self-Sufficiency: The Green Revolution ended chronic food deficits and external food dependence, building national buffer stocks.\n  - Expansion of Technical Manpower: Massive investments in higher education (IITs, IIMs, engineering universities) created a large pool of scientific and technical talent.\n• 2. Critical Shortcomings and Failures [3 Marks]:\n  - Inefficient Monopolistic Production: Domestic protection and licensing fostered uncompetitive domestic monopolies and poor product quality.\n  - Heavy PSU Financial Burden: Public sector enterprises suffered from mismanagement, overstaffing, and chronic losses.\n  - Export Neglect & 1991 BoP Crisis: An inward-looking trade orientation neglected exports, resulting in worsening current account deficits and culminating in the 1991 Balance of Payments crisis."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Explain the debate surrounding 'Agricultural Subsidies' in India. Should subsidies to agriculture be continued or phased out? Give balanced economic arguments. [6 Marks]",
        "answer": "Arguments favoring continuation vs arguments for phasing out/rationalizing subsidies; Concluding recommendation on direct targeted cash transfers.",
        "explanation": "Step-by-Step Marking Scheme (2.5 Marks for subsidies + 2.5 Marks against subsidies + 1 Mark policy recommendation):\n• 1. Arguments for Continuing Agricultural Subsidies [2.5 Marks]:\n  - Farming is inherently risky and vulnerable to erratic monsoons and pest attacks; subsidies help de-risk modern technology adoption.\n  - Over 85% of Indian cultivators are small and marginal farmers with limited financial capacity to purchase market-rate fertilizers and power.\n  - Fertilizer and power subsidies keep input costs low, helping maintain affordable food grain prices for poor consumers.\n• 2. Arguments for Phasing Out / Rationalizing Subsidies [2.5 Marks]:\n  - Huge Fiscal Drain: Input subsidies consume a massive portion of the agricultural budget, leaving little funding for long-term capital investments (canals, cold storage, research).\n  - Regressive Distribution: Wealthy farmers in irrigated states consume a disproportionate share of fertilizer and electricity subsidies.\n  - Environmental Degradation: Subsidized electricity leads to over-pumping of groundwater, and subsidized urea distorts soil NPK ratios.\n• 3. Conclusion and Recommendation [1 Mark]:\n  - Subsidies should not be eliminated abruptly, but restructured from price-distorting input subsidies into Direct Benefit Transfers (DBT) directly credited to smallholders' bank accounts (e.g. PM-KISAN)."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "What is meant by 'Economic Planning'? Why did India adopt planning through 'Five Year Plans' after independence? [6 Marks]",
        "answer": "Definition of economic planning; Historical context; Why planning was adopted (rebuilding devastated economy, socialist ideals, capital scarcity).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks definition + 4 Marks reasons for adopting planning):\n• 1. Meaning of Economic Planning [2 Marks]:\n  - Economic planning refers to the deliberate utilization of a country's economic resources for prioritized national development goals, coordinated by a central authority over a specified time horizon.\n  - India adopted five-year planning cycles in 1951, coordinated by the Planning Commission headed by the Prime Minister.\n• 2. Why India Adopted Five Year Plans [4 Marks (1 Mark each)]:\n  - (a) Rebuilding a Stagnant Colonial Economy: Colonial rule left Indian agriculture and industry backward, requiring coordinated state resource mobilization to rebuild productive capacity.\n  - (b) Acute Scarcity of Private Capital: Private enterprise lacked the financial capacity to undertake massive capital investments in infrastructure, dams, power grids, and basic steel mills.\n  - (c) Commitment to Social Equity: Guided by the goal of a 'Socialist Pattern of Society', national leaders sought to direct investment toward social welfare and poverty alleviation rather than private profit.\n  - (d) Harmonizing Conflicting Regional Demands: Planning enabled the central government to allocate resources strategically across states to mitigate deep regional disparities."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 9,
      "book": "Part B: Indian Economic Development",
      "title": "Economic Reforms Since 1991: LPG, Demonetization, and GST",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 6: Development Experience (1947-90) and Economic Reforms since 1991 (12 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following was the immediate external trigger that precipitated India's acute Balance of Payments crisis in 1991?",
        "options": [
          "(a) Global Financial Crisis of 2008",
          "(b) Gulf War of 1990–91, which led to a spike in crude oil prices and a sharp drop in inward remittances",
          "(c) Collapse of the World Bank",
          "(d) Complete ban on Indian textiles"
        ],
        "answer": "(b) Gulf War of 1990–91, which led to a spike in crude oil prices and a sharp drop in inward remittances",
        "explanation": "The Gulf War caused oil prices to surge and disrupted remittances from Indian expatriates in the Middle East, depleting foreign exchange reserves to barely two weeks of imports."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The Goods and Services Tax (GST) was officially implemented across India on which historic date?",
        "options": [
          "(a) 1st July 2017",
          "(b) 8th November 2016",
          "(c) 1st April 2015",
          "(d) 24th July 1991"
        ],
        "answer": "(a) 1st July 2017",
        "explanation": "GST, embodying the motto 'One Nation, One Tax, One Market', was rolled out nationwide on 1st July 2017."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "On 8th November 2016, the Government of India declared which specific high-denomination currency notes as invalid legal tender (Demonetization)?",
        "options": [
          "(a) ₹100 and ₹500 notes",
          "(b) ₹500 and ₹1,000 notes",
          "(c) ₹1,000 and ₹2,000 notes",
          "(d) ₹50 and ₹100 notes"
        ],
        "answer": "(b) ₹500 and ₹1,000 notes",
        "explanation": "Demonetization demonetized the existing ₹500 and ₹1,000 currency notes, which constituted roughly 86% of the total currency value in circulation."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "The World Trade Organization (WTO) was established in 1995 as the permanent successor to which international agreement?",
        "options": [
          "(a) International Monetary Fund (IMF)",
          "(b) General Agreement on Tariffs and Trade (GATT)",
          "(c) World Bank (IBRD)",
          "(d) United Nations Development Programme (UNDP)"
        ],
        "answer": "(b) General Agreement on Tariffs and Trade (GATT)",
        "explanation": "The WTO was established on January 1, 1995, as the legal successor to GATT (created in 1948) to administer multilateral trade agreements covering goods, services, and intellectual property."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Under the 1991 financial sector reforms, how did the role of the Reserve Bank of India (RBI) transform?",
        "options": [
          "(a) From a 'Regulator' to a 'Facilitator' of the financial market",
          "(b) From a commercial bank to a central bank",
          "(c) RBI was completely abolished",
          "(d) RBI lost the power to issue currency"
        ],
        "answer": "(a) From a 'Regulator' to a 'Facilitator' of the financial market",
        "explanation": "Financial sector reforms transitioned RBI's role from a rigid regulator dictating interest rates and lending quotas to a facilitator granting greater operational freedom to commercial banks."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Selling a part of government equity shares in Public Sector Undertakings (PSUs) to the private sector and general public is termed as:",
        "options": [
          "(a) Disinvestment",
          "(b) Nationalization",
          "(c) Amalgamation",
          "(d) Depreciation"
        ],
        "answer": "(a) Disinvestment",
        "explanation": "Disinvestment refers to the dilution of government equity ownership in public enterprises, transferring shares to private investors or the open public market."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Why has India become the most preferred global destination for 'Outsourcing' (BPO and IT services)?",
        "options": [
          "(a) High tax rates and strict labor laws",
          "(b) Availability of skilled, English-fluent educated manpower at significantly lower wage costs compared to developed nations",
          "(c) High geographic distance from Western nations",
          "(d) Absence of internet connectivity"
        ],
        "answer": "(b) Availability of skilled, English-fluent educated manpower at significantly lower wage costs compared to developed nations",
        "explanation": "India offers a large pool of technically trained, English-speaking professionals at a fraction of Western payroll costs, combined with high-speed digital communications."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which of the following indirect taxes was NOT subsumed under the Goods and Services Tax (GST)?",
        "options": [
          "(a) Central Excise Duty",
          "(b) Basic Customs Duty on Imports",
          "(c) Service Tax",
          "(d) State Value Added Tax (VAT)"
        ],
        "answer": "(b) Basic Customs Duty on Imports",
        "explanation": "Basic Customs Duty remains separate under the Customs Act to regulate cross-border trade, whereas domestic excise, VAT, service tax, and luxury taxes were subsumed into GST."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "To secure a $7 billion emergency bailout loan during the 1991 crisis, the Government of India agreed to conditionalities set by which two international institutions?",
        "options": [
          "(a) World Bank (IBRD) and International Monetary Fund (IMF)",
          "(b) Asian Development Bank and United Nations",
          "(c) Federal Reserve and European Central Bank",
          "(d) BRICS Bank and WTO"
        ],
        "answer": "(a) World Bank (IBRD) and International Monetary Fund (IMF)",
        "explanation": "India borrowed $7 billion from the IMF and World Bank under structural adjustment conditionalities, requiring liberalization, opening to trade, and fiscal discipline."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "In which sector was the growth rate of output and employment largely neglected during the post-1991 economic reform era?",
        "options": [
          "(a) Telecommunication services",
          "(b) Information Technology",
          "(c) Agricultural Sector",
          "(d) Financial services"
        ],
        "answer": "(c) Agricultural Sector",
        "explanation": "Reforms focused predominantly on industry, finance, and foreign trade, while public capital investment in agriculture (irrigation, rural roads, agricultural research) declined."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The status of 'Maharatna', 'Navratna', and 'Miniratna' was granted to central public sector enterprises to:",
        "options": [
          "(a) Prepare them for immediate closure",
          "(b) Grant them greater financial and managerial autonomy to compete in global and domestic markets",
          "(c) Increase government interference in day-to-day decisions",
          "(d) Transfer their entire equity to foreign multinational corporations"
        ],
        "answer": "(b) Grant them greater financial and managerial autonomy to compete in global and domestic markets",
        "explanation": "Ratna statuses empower well-performing PSUs (such as ONGC, IOCL, BHEL) with board-level autonomy to make major capital investments and form global joint ventures."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "What is the primary advantage of the 'Input Tax Credit' (ITC) mechanism under GST?",
        "options": [
          "(a) It completely eliminates the 'cascading effect' (tax-on-tax)",
          "(b) It doubles the income tax rate",
          "(c) It eliminates corporate profits",
          "(d) It stops all interstate commerce"
        ],
        "answer": "(a) It completely eliminates the 'cascading effect' (tax-on-tax)",
        "explanation": "Input Tax Credit allows businesses to offset taxes paid on input purchases against tax liabilities on output sales, eliminating the cascading effect of tax-on-tax."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "As part of trade policy reforms in 1991, quantitative restrictions (import quotas) on manufactured consumer goods and agricultural products were fully dismantled by:",
        "options": [
          "(a) 1991",
          "(b) April 2001",
          "(c) 2010",
          "(d) 2020"
        ],
        "answer": "(b) April 2001",
        "explanation": "In compliance with WTO commitments, India fully dismantled quantitative import restrictions on manufactured consumer and agricultural goods by April 2001."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "The 1991 New Economic Policy comprised two categories of measures: 'Stabilization Measures' and 'Structural Reform Measures'. Stabilization measures were:",
        "options": [
          "(a) Short-term measures aimed at controlling inflation and correcting adverse balance of payments",
          "(b) Long-term measures aimed at improving economic efficiency",
          "(c) Measures to ban all foreign investments",
          "(d) Five-year industrial plans"
        ],
        "answer": "(a) Short-term measures aimed at controlling inflation and correcting adverse balance of payments",
        "explanation": "Stabilization measures were short-term emergency steps to restore macroeconomic stability (reining in inflation and stabilizing foreign exchange reserves)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "What happened to the limit of Foreign Institutional Investment (FII) in the Indian equity markets following the 1991 reforms?",
        "options": [
          "(a) It was completely banned",
          "(b) Foreign portfolio investors, merchant banks, and mutual funds were permitted to invest in Indian stock markets",
          "(c) Kept restricted to 1% only",
          "(d) Restricted strictly to government debt"
        ],
        "answer": "(b) Foreign portfolio investors, merchant banks, and mutual funds were permitted to invest in Indian stock markets",
        "explanation": "Reforms opened Indian capital markets to foreign portfolio investors (FIIs/FPIs), facilitating significant foreign capital inflows into domestic equities and bonds."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Under the Goods and Services Tax, which tax is levied on an INTER-STATE supply of goods and services?",
        "options": [
          "(a) Central GST (CGST)",
          "(b) Integrated GST (IGST)",
          "(c) State GST (SGST)",
          "(d) Union Territory GST (UTGST)"
        ],
        "answer": "(b) Integrated GST (IGST)",
        "explanation": "Integrated GST (IGST) is levied by the Central Government on all inter-state supplies of goods and services, and the revenue is shared between the Centre and the destination state."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Devaluation of the Indian Rupee in July 1991 was executed to:",
        "options": [
          "(a) Discourage exports",
          "(b) Stimulate exports by making Indian goods cheaper abroad and curb the outflow of foreign exchange",
          "(c) Replace currency with gold",
          "(d) Lower domestic interest rates"
        ],
        "answer": "(b) Stimulate exports by making Indian goods cheaper abroad and curb the outflow of foreign exchange",
        "explanation": "A two-step devaluation of the Rupee by nearly 19% made Indian exports price-competitive abroad, boosting export earnings and curbing capital flight."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following industries still requires a mandatory Industrial License in India?",
        "options": [
          "(a) Electronic aerospace and defense equipment, industrial explosives, and hazardous chemicals",
          "(b) Readymade textile garments",
          "(c) Footwear manufacturing",
          "(d) Software development"
        ],
        "answer": "(a) Electronic aerospace and defense equipment, industrial explosives, and hazardous chemicals",
        "explanation": "Industrial licensing is retained only for a handful of strategic, security, and environmental concern industries (defense aerospace, hazardous chemicals, industrial explosives, tobacco, alcohol)."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The GST Council, which decides GST rates and tax rules, is chaired by:",
        "options": [
          "(a) Governor of the Reserve Bank of India",
          "(b) Union Finance Minister of India",
          "(c) Prime Minister of India",
          "(d) Chief Justice of India"
        ],
        "answer": "(b) Union Finance Minister of India",
        "explanation": "The GST Council is a joint constitutional forum chaired by the Union Finance Minister and comprising finance ministers from all state governments."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A major criticism of the post-1991 economic growth in India is that it has been a 'Jobless Growth' because:",
        "options": [
          "(a) GDP grew at a fast pace driven by capital-intensive services and manufacturing, but formal employment opportunities failed to expand commensurately",
          "(b) Everyone stopped working",
          "(c) Unemployment fell to zero",
          "(d) Population decreased"
        ],
        "answer": "(a) GDP grew at a fast pace driven by capital-intensive services and manufacturing, but formal employment opportunities failed to expand commensurately",
        "explanation": "Growth was driven by capital-intensive service sectors (finance, software) and capital-intensive manufacturing, leaving the majority of new job seekers in precarious informal employment."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "Which body replaced the Monopolies and Restrictive Trade Practices (MRTP) Commission in the reform era?",
        "options": [
          "(a) Competition Commission of India (CCI)",
          "(b) Planning Commission",
          "(c) Enforcement Directorate",
          "(d) National Development Council"
        ],
        "answer": "(a) Competition Commission of India (CCI)",
        "explanation": "The Competition Act, 2002 replaced the MRTP Act, establishing the Competition Commission of India (CCI) to prevent anti-competitive practices and promote healthy market competition."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Which of the following is an example of an 'Information Technology Enabled Service' (ITES) outsourced to India?",
        "options": [
          "(a) Medical transcription, call centers, and clinical data analysis",
          "(b) Heavy steel fabrication",
          "(c) Coal mining",
          "(d) Wheat harvesting"
        ],
        "answer": "(a) Medical transcription, call centers, and clinical data analysis",
        "explanation": "ITES outsourcing covers knowledge-intensive services including customer call centers, medical transcription, financial bookkeeping, and legal process outsourcing."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "One of the key objectives behind Demonetization in 2016 was to:",
        "options": [
          "(a) Channel unaccounted black money into the formal banking system and promote digital payments",
          "(b) Stop all bank lending",
          "(c) Eliminate all digital wallets",
          "(d) Increase the use of paper cash"
        ],
        "answer": "(a) Channel unaccounted black money into the formal banking system and promote digital payments",
        "explanation": "Demonetization aimed to neutralize unaccounted cash, dismantle counterfeit currency networks, expand the income tax base, and accelerate the transition toward digital payments."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Tax reforms initiated since 1991 have focused primarily on:",
        "options": [
          "(a) Raising tax rates to 90% on high earners",
          "(b) Continuous reduction and rationalization of personal and corporate tax rates to encourage voluntary tax compliance",
          "(c) Abolishing all income taxes",
          "(d) Banning all indirect taxes"
        ],
        "answer": "(b) Continuous reduction and rationalization of personal and corporate tax rates to encourage voluntary tax compliance",
        "explanation": "Tax reforms followed the principle that moderate, rational tax rates combined with simpler compliance procedures reduce tax evasion and broaden total tax revenues."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following is an argument often raised by developing countries against the World Trade Organization (WTO)?",
        "options": [
          "(a) Developed nations protect their own agriculture with massive subsidies while pressuring developing countries to open up their markets",
          "(b) WTO only helps poor countries",
          "(c) WTO banned all international trade",
          "(d) WTO charges high income taxes"
        ],
        "answer": "(a) Developed nations protect their own agriculture with massive subsidies while pressuring developing countries to open up their markets",
        "explanation": "Developing countries criticize the WTO for double standards: rich nations maintain heavy farm subsidies while demanding that developing nations dismantle agricultural tariffs."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Post-1991 economic reforms led to a marked acceleration in the growth rate of India's services sector.\nReason (R): Liberalization, opening of the telecommunications sector, and integration with global markets enabled India to emerge as a global hub for software services and business process outsourcing.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. IT and telecom deregulation, combined with global cost competitiveness, propelled service sector growth to double digits."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): The agricultural sector did not benefit significantly from the 1991 economic reform policies.\nReason (R): Post-1991 policies saw a decline in public capital investment in agricultural infrastructure, fertilizer subsidy cuts, and increased vulnerability to global agricultural price swings.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Fiscal consolidation reduced public spending on irrigation, rural power, and extension services, causing farm sector growth to lag."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Goods and Services Tax (GST) has created a unified national common market in India.\nReason (R): GST subsumed multiple cascading central and state indirect taxes into a single destination-based tax system with seamless Input Tax Credit across state borders.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. By eliminating state-level check posts and harmonizing indirect taxes under a single credit chain, GST established a unified internal market."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Disinvestment of Public Sector Undertakings (PSUs) always results in higher social welfare.\nReason (R): Private sector managers always prioritize unprofitable rural social services over corporate profit margins.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Disinvestment often leads to commercial tariff hikes and job retrenchments, as private entities prioritize commercial profit over social welfare obligations."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Demonetization in 2016 contributed to the financialization of household savings in India.\nReason (R): Following the demonetization of high-value notes, households deposited large sums of cash into commercial banks, stimulating mutual funds, insurance, and digital banking transactions.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Idle cash was brought into formal bank accounts, accelerating formal financial savings and digital transactions."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "State the key factors that led to the economic crisis of 1991 in India. [3 Marks]",
        "answer": "Fiscal deficit crisis, depleted foreign exchange reserves (2 weeks of imports), high inflation (>12%), and PSU losses.",
        "explanation": "Marking Scheme (1 Mark per factor):\n• 1. Fiscal Deficit & Debt Burden: Persistent government revenue deficits and reliance on non-developmental borrowing inflated public debt and interest burdens.\n• 2. Balance of Payments Crisis: Foreign exchange reserves plummeted to less than $1 billion (barely enough to finance two weeks of imports), exacerbated by the Gulf War oil shock.\n• 3. High Inflation & PSU Losses: Double-digit inflation (>12%) eroded purchasing power, while state-run PSUs suffered chronic losses and absorbed budgetary support."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain 'Outsourcing'. Why has India emerged as the preferred outsourcing destination for global corporations? [3 Marks]",
        "answer": "Contracting out business activities to third parties; India preferred due to cheap skilled English-speaking labor and IT infrastructure.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks reasons):\n• Concept: Outsourcing is the practice where a company hires external specialized service providers, often overseas, to perform non-core business activities (customer care, billing, transcription).\n• Why India is Preferred:\n  1. Availability of a large, skilled, English-fluent educated workforce at competitive wage rates.\n  2. Robust telecommunication networks and time-zone differences that allow 24/7 service delivery for Western clients."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "What were the major 'Financial Sector Reforms' introduced under Liberalization in 1991? [3 Marks]",
        "answer": "Shift in RBI's role from regulator to facilitator, opening banking to private domestic/foreign banks, and raising FDI limits.",
        "explanation": "Marking Scheme (1 Mark per reform):\n• 1. Redefined Role of RBI: Transformed from a rigid regulator dictating deposit and loan rates into a facilitator granting commercial banks operational autonomy.\n• 2. Entry of Private and Foreign Banks: Private domestic banks (HDFC, ICICI, Axis) and international banks were permitted to establish operations, spurring competition.\n• 3. Foreign Investment Limit: The cap on foreign investment in banking was raised up to 74%, and branch licensing norms were rationalized."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the concept of 'Disinvestment'. What are the two primary objectives of disinvesting government equity in PSUs? [3 Marks]",
        "answer": "Sale of government shares in PSUs; Objectives: raising fiscal non-debt capital and improving managerial efficiency.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks objectives):\n• Concept: Disinvestment refers to the sale or dilution of a portion of the government's equity shareholding in Public Sector Undertakings to the private sector and general public.\n• Two Primary Objectives:\n  1. Mobilizing Non-Debt Fiscal Revenue: To generate capital resources for the government to invest in social infrastructure (health, education) and reduce fiscal deficits.\n  2. Improving Operational Efficiency: Introducing private commercial discipline, corporate governance, and accountability into PSU management."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What is 'Demonetization'? State two key positive economic impacts and one adverse impact of the 2016 demonetization. [3 Marks]",
        "answer": "Withdrawal of currency status; Positives: tax compliance and digital payments surge; Negative: temporary disruption to cash-based informal sector.",
        "explanation": "Marking Scheme (1 Mark concept + 1 Mark positives + 1 Mark negative):\n• Concept: Demonetization is an official policy act stripping specified currency units of their status as legal tender.\n• Two Positive Impacts:\n  1. Widened the formal tax net as unaccounted cash was deposited in banks, increasing income tax returns.\n  2. Spurred widespread adoption of digital payment systems (UPI, mobile wallets, debit cards).\n• One Adverse Impact: Severe temporary cash shortage that disrupted the informal, unorganized cash-dependent sectors (agriculture, daily-wage labor, small retail)."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain the structure of the 'Goods and Services Tax' (GST) in India (CGST, SGST, IGST). [3 Marks]",
        "answer": "Dual GST structure: CGST (Centre), SGST (State) for intra-state sales; IGST (Centre shared with destination state) for inter-state sales.",
        "explanation": "Marking Scheme (1 Mark each component):\n• 1. Central GST (CGST): Levied by the Central Government on intra-state supplies of taxable goods and services.\n• 2. State GST (SGST) / UTGST: Levied by State Governments or Union Territories on the same intra-state supply alongside CGST.\n• 3. Integrated GST (IGST): Levied by the Central Government on all inter-state supplies and imports. Revenue is apportioned between the Centre and the destination state based on the destination principle."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "What is meant by 'Navratna' policy? Why did the government grant Navratna and Maharatna status to certain PSUs? [3 Marks]",
        "answer": "Granting managerial and financial autonomy to high-performing PSUs to build global champions.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks purpose):\n• Concept: In 1997, the government identified nine high-performing public sector enterprises (e.g., BHEL, ONGC, NTPC, IOCL) and conferred on them 'Navratna' status (later expanding to Maharatna and Miniratna categories).\n• Purpose: To grant enterprise boards operational and financial autonomy to make substantial capital investments (up to ₹1,000 crore without prior ministry clearance), form global joint ventures, and raise capital from domestic and international markets to compete globally."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain the major reforms introduced in the 'Industrial Sector' under Liberalization in 1991. [3 Marks]",
        "answer": "Abolition of licensing (except strategic goods), de-reservation of products, and narrowing of public sector monopolies.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Abolition of Industrial Licensing: De-licensed almost all industrial categories, retaining mandatory licensing only for defense, hazardous chemicals, industrial explosives, tobacco, and alcohol.\n• 2. De-reservation of the Public Sector: Cut public sector monopolies from 17 to just 2 strategic sectors: Atomic Energy and Railway Operations.\n• 3. De-reservation of Small-Scale Products: De-reserved hundreds of goods previously reserved for SSIs, allowing modern production at scale."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Why did India devalue its currency in July 1991? What follow-up exchange rate reform was instituted? [3 Marks]",
        "answer": "Devalued to restore export competitiveness and stop capital flight; Follow-up: transitioned to market-determined flexible exchange rate (LERS).",
        "explanation": "Marking Scheme (1.5 Marks devaluation + 1.5 Marks follow-up reform):\n• Devaluation: The RBI devalued the Indian Rupee by about 19% against major foreign currencies in two stages. This restored price competitiveness for Indian exports and checked speculative capital flight during the BoP crisis.\n• Follow-up Reform: India transitioned from an administratively pegged exchange rate to the Liberalized Exchange Rate Management System (LERMS), eventually moving to a unified, market-determined managed floating exchange rate regime."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "State any three major objectives of the World Trade Organization (WTO). [3 Marks]",
        "answer": "Administering trade agreements, resolving disputes, and facilitating open non-discriminatory international trade.",
        "explanation": "Marking Scheme (1 Mark each objective):\n• 1. Facilitating Non-Discriminatory Multilateral Trade: Reducing tariffs and eliminating non-tariff barriers to encourage free global trade across goods and services.\n• 2. Administering Trade Agreements: Overseeing the implementation of multilateral trade agreements (GATT, GATS, TRIPS) among member countries.\n• 3. Dispute Settlement: Operating an impartial, rule-based dispute settlement mechanism to resolve international trade conflicts between sovereign governments."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Discuss the economic factors that necessitated the adoption of the 'New Economic Policy' (NEP) in 1991. What were the conditionalities imposed by international financial institutions? [6 Marks]",
        "answer": "Comprehensive review of 1991 economic crisis causes (BoP crisis, high fiscal deficit, inflation, PSU losses, Gulf war) and IMF/World Bank conditionalities.",
        "explanation": "Step-by-Step Marking Scheme (4 Marks crisis factors + 2 Marks conditionalities):\n• 1. Economic Factors Behind the 1991 Crisis [4 Marks (1 Mark each)]:\n  - (a) Severe Balance of Payments Crisis: Foreign exchange reserves dropped to less than $1 billion (barely enough to cover two weeks of essential imports). India had to pledge 47 tonnes of gold with the Bank of England to avoid sovereign default.\n  - (b) High Fiscal Deficit: Decades of non-developmental government borrowing widened the fiscal deficit to 8.4% of GDP in 1990-91, creating an unsustainable public debt burden.\n  - (c) Double-Digit Inflation: High deficit financing and supply bottlenecks drove inflation above 12%, squeezing household living standards.\n  - (d) Gulf War Shocks: The 1990-91 Gulf War spiked crude petroleum prices and disrupted inward remittances from Gulf-based Indian workers.\n• 2. IMF and World Bank Conditionalities [2 Marks]:\n  - To secure a $7 billion emergency bailout loan from the IMF and World Bank (IBRD), India agreed to a Structural Adjustment Program (SAP).\n  - The conditionalities required India to dismantle the 'Permit-License Raj', remove quantitative import restrictions, devalue the rupee, reduce fiscal deficits, and open the economy to foreign trade and private enterprise."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the major reforms undertaken under 'Liberalization' in the Indian economy in 1991 across:\n(a) Industrial Sector\n(b) Financial Sector\n(c) Foreign Trade & Investment [6 Marks]",
        "answer": "Detailed breakdown of reforms in Industrial Sector, Financial Sector, and Foreign Trade/Investment.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each sector):\n• (a) Industrial Sector Reforms [2 Marks]:\n  - Abolition of Industrial Licensing: Abolished licensing for all but a handful of strategic sectors (defense, hazardous chemicals, explosives, tobacco, alcohol).\n  - De-reservation of the Public Sector: Public sector monopolies were reduced from 17 to just 2 (Atomic Energy and Railway Operations).\n  - De-reservation of Small Scale: Dismantled product reservations for SSIs, enabling large-scale production.\n• (b) Financial Sector Reforms [2 Marks]:\n  - Changing Role of RBI: Transformed from a restrictive regulator to an enabling facilitator, allowing banks autonomy to set deposit and lending rates.\n  - Private and Foreign Banking: Permitted the entry of new private commercial banks (HDFC, ICICI) and foreign banks, increasing sector competition.\n  - Foreign Investment: Raised foreign investment limits in banking up to 74% and eased branch expansion norms.\n• (c) Foreign Trade and Investment Reforms [2 Marks]:\n  - Removal of Quantitative Restrictions: Quotas and discretionary import licenses on capital goods, raw materials, and consumer products were phased out.\n  - Tariff Reductions: Peak customs duties were sharply lowered from over 300% to international benchmarks.\n  - Foreign Direct Investment: Introduced automatic approval routes for FDI up to 51% (and later 100%) in designated priority sectors."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What is 'Privatization'? Explain the concept of 'Disinvestment'. Discuss the policy of conferring 'Maharatna', 'Navratna', and 'Miniratna' statuses on public enterprises. [6 Marks]",
        "answer": "Privatization vs Disinvestment; Navratna/Maharatna/Miniratna policy framework and autonomy objectives.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks privatization & disinvestment + 4 Marks Ratna policy):\n• 1. Privatization and Disinvestment [2 Marks]:\n  - Privatization: The transfer of ownership, property, or business from the government to the private sector through outright sale or disinvestment.\n  - Disinvestment: The sale of a portion of government equity shares in public enterprises to private institutional investors or the public, mobilizing non-debt resources while retaining state control.\n• 2. The Ratna Policy Framework [4 Marks]:\n  - Context: Rather than privatizing all PSUs, the government sought to improve their performance by granting managerial and financial autonomy to well-run enterprises.\n  - Tiered Categories:\n    (i) Maharatnas (e.g., ONGC, IOCL, NTPC, SAIL, BHEL): Enjoy the highest autonomy; boards can invest up to ₹5,000 crore without prior central cabinet approval.\n    (ii) Navratnas (e.g., Bharat Electronics, Container Corporation): Boards can invest up to ₹1,000 crore in single projects and enter joint ventures.\n    (iii) Miniratnas (Category I and II): Granted moderate financial freedom for projects up to ₹500 crore.\n  - Outcomes: Helped PSUs professionalize corporate boards, make commercial decisions, and compete against private conglomerates."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Explain 'Globalization'. Discuss its manifestation through 'Outsourcing'. Why has India become a favored global destination for Business Process Outsourcing (BPO)? [6 Marks]",
        "answer": "Globalization concept; Outsourcing phenomenon; Detailed analysis of India's competitive advantages in BPO/ITES.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks globalization & outsourcing + 4 Marks India's advantages):\n• 1. Concept of Globalization and Outsourcing [2 Marks]:\n  - Globalization: The integration of the domestic national economy with the global economy through cross-border trade, capital flows, technology transfers, and labor mobility.\n  - Outsourcing: An enterprise contracting out non-core business activities (IT services, customer support, payroll accounting) to specialized third-party providers abroad to cut operating costs.\n• 2. Why India is the Preferred BPO Destination [4 Marks (1 Mark each)]:\n  - (a) Abundant Low-Cost Skilled Manpower: India has a large annual supply of college graduates, software engineers, and commerce graduates willing to work for wages lower than Western counterparts.\n  - (b) English Language Fluency: A large English-speaking workforce enables clear communication with US, UK, and Australian clients.\n  - (c) Digital and Telecommunications Infrastructure: Investments in undersea fiber cables, software technology parks (STPIs), and high-speed broadband ensure reliable data connectivity.\n  - (d) Time-Zone Advantage: Time-zone differences between India and the Western Hemisphere allow companies to operate round-the-clock, finishing overnight work for Western morning delivery."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Provide a comprehensive critical appraisal of the 1991 New Economic Policy. Discuss its major achievements and its key limitations. [6 Marks]",
        "answer": "Balanced appraisal: Achievements (GDP growth, forex reserves, consumer choice, exports) vs Limitations (neglect of agriculture, jobless growth, inequality).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks achievements + 3 Marks limitations):\n• 1. Major Achievements of 1991 Reforms [3 Marks]:\n  - Accelerated GDP Growth: Real GDP growth jumped from the 'Hindu rate of growth' (3.5%) to over 7-8% annually, driven by services and manufacturing.\n  - Surging Foreign Exchange Reserves: Reserves grew from less than $1 billion in 1991 to over $600 billion, providing strong external stability.\n  - Inflow of Foreign Investment: India emerged as a leading recipient of FDI and FPI, integrating with global supply chains.\n  - Expanded Consumer Choice: Dismantling monopolies allowed consumers access to higher-quality automobiles, electronics, and telecom services at competitive prices.\n• 2. Critical Limitations and Shortcomings [3 Marks]:\n  - Neglect of Agriculture: Agricultural growth decelerated as public infrastructure investments fell, leaving rural areas in distress.\n  - Jobless Growth & Informalization: Most new employment occurred in low-paid, precarious informal work without social security protections.\n  - Widening Income Disparities: Economic gains accrued disproportionately to urban service professionals and corporate owners, widening rural-urban inequality."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "What is 'Demonetization'? Discuss the rationale, positive outcomes, and short-term challenges associated with the 2016 demonetization exercise in India. [6 Marks]",
        "answer": "Concept; Rationale (black money, fake notes, terror funding); Positive outcomes (tax base, digital payments) vs Short-term challenges (cash crunch, informal disruption).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept & rationale + 2 Marks positive outcomes + 2 Marks challenges):\n• 1. Concept and Rationale [2 Marks]:\n  - On 8th November 2016, the Government of India declared existing ₹500 and ₹1,000 currency notes invalid as legal tender.\n  - Core Rationale: Neutralize unaccounted black money, eliminate high-quality counterfeit notes, disrupt terrorist financing, and encourage a transition toward a digital, formal economy.\n• 2. Positive Outcomes [2 Marks]:\n  - Expansion of the Tax Net: Depositing cash in bank accounts created a financial trail, widening the direct tax net and increasing personal income tax filings.\n  - Growth in Digital Payments: Spurred the widespread adoption of Unified Payments Interface (UPI), debit cards, and digital wallets.\n  - Financialization of Savings: Shifted household savings away from physical cash and real estate toward formal banking deposits and mutual funds.\n• 3. Short-Term Challenges and Disruptions [2 Marks]:\n  - Liquidity Crunch: Because ₹500 and ₹1,000 notes accounted for 86% of currency in circulation, remonetization delays caused cash shortages.\n  - Informal Sector Slowdown: Cash-dependent small businesses, unorganized retailers, and daily-wage laborers experienced temporary disruptions in sales and employment."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Explain the concept of 'Goods and Services Tax' (GST). What were the main shortcomings of the previous indirect tax system that GST sought to overcome? [6 Marks]",
        "answer": "GST concept ('One Nation, One Tax, One Market'); Shortcomings of earlier tax regime (cascading tax-on-tax, multiple compliances, state check-posts).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks GST concept + 4 Marks shortcomings overcome):\n• 1. Concept of GST [2 Marks]:\n  - GST was rolled out on 1st July 2017 as a destination-based, comprehensive indirect tax levied on the supply of goods and services from manufacturer to consumer.\n  - Designed around the motto 'One Nation, One Tax, One Market', providing end-to-end Input Tax Credit across the value chain.\n• 2. Shortcomings of the Pre-GST Tax Regime Overcome by GST [4 Marks (1 Mark each)]:\n  - (a) Cascading Effect of Taxes: Earlier, excise duty and sales tax were levied on top of previous taxes (tax on tax). GST provides credit for taxes paid at earlier stages, eliminating cascading.\n  - (b) Multiplicity of Indirect Taxes: Overcame a patchwork of fragmented levies (Central Excise, State VAT, Service Tax, Luxury Tax, Entertainment Tax, Octroi) into a unified tax framework.\n  - (c) Interstate Tax Distortions & Check Posts: Previously, Central Sales Tax (CST) and entry check-posts created interstate transit delays. GST eliminated physical check-posts, speeding up national logistics.\n  - (d) High Compliance Costs: A single digital portal (GSTN) replaced multiple returns and audits with an automated online compliance system."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Discuss the role and functioning of the 'World Trade Organization' (WTO). Why do developing countries like India feel marginalized in the WTO framework? [6 Marks]",
        "answer": "Role and functions of WTO; Arguments on marginalization of developing countries (agricultural subsidies in rich countries, TRIPS).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks WTO functions + 3 Marks developing countries' grievances):\n• 1. Role and Functions of the WTO [3 Marks]:\n  - Established on 1st January 1995 to replace GATT.\n  - Administers multilateral trade agreements covering trade in goods, services (GATS), and intellectual property rights (TRIPS).\n  - Acts as a negotiating forum for global tariff reductions and non-tariff barrier removals.\n  - Resolves international trade disputes through its dispute settlement mechanism.\n• 2. Why Developing Countries Feel Marginalized [3 Marks]:\n  - Agricultural Subsidy Double Standards: Developed countries (US, EU) continue to provide massive domestic agricultural subsidies to their farmers, creating an uneven playing field while pressuring developing countries to open their farm markets.\n  - Non-Tariff Barriers: Developed nations frequently use sanitary, phytosanitary, and environmental standards to restrict exports from developing economies.\n  - Restrictive TRIPS Provisions: Stringent intellectual property patent regimes inflate the costs of essential medicines and technology transfers for poorer nations."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Why did the 'Agricultural Sector' fail to witness the benefits of the 1991 economic reforms? Explain four critical reasons. [6 Marks]",
        "answer": "Decline in public investment, reduction in fertilizer subsidies, reduction of import duties exposing farmers to global price shocks, and shift to export crops.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four reasons):\n• 1. Reduction in Public Investment: Fiscal deficit targets prompted cuts in capital spending on rural infrastructure (irrigation canals, flood control, rural electrification, and agricultural research).\n• 2. Subsidy Rationalization & Rising Input Costs: Cuts to fertilizer and power subsidies increased production costs for small and marginal farmers, squeezing profit margins.\n• 3. Reduction of Import Tariffs & Global Price Volatility: Dismantling quantitative import restrictions and lowering agricultural customs duties exposed Indian farmers to international price volatility and subsidized foreign agricultural imports.\n• 4. Shift from Food Grains to Export Cash Crops: Encouraged by trade liberalization, farmers shifted land toward export crops (cotton, vanilla, flowers) away from traditional subsistence food grains, increasing exposure to international market fluctuations and localized food insecurity."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Explain how the 1991 economic reforms led to the transformation of India's 'Foreign Exchange Regime' and 'Foreign Trade Policy'. [6 Marks]",
        "answer": "Shift from pegged to market-determined exchange rate; Removal of import quotas; Tariff reductions and export promotion.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks forex reforms + 3 Marks foreign trade reforms):\n• 1. Transformation of the Foreign Exchange Regime [3 Marks]:\n  - Devaluation: In July 1991, the Rupee was devalued by ~19% to correct currency overvaluation, stimulate exports, and discourage speculative capital flight.\n  - Market-Determined Rate: Transitioned from an administratively fixed exchange rate to a market-determined system (LERMS in 1992, unified floating rate in 1993).\n  - Managed Floating: The exchange rate is now determined by market forces of demand and supply, with the RBI intervening only to check excessive volatility.\n• 2. Transformation of Foreign Trade Policy [3 Marks]:\n  - Dismantling Quantitative Restrictions: Phased out import quotas and discretionary import licenses, lifting restrictions on consumer and farm goods by April 2001.\n  - Sharp Tariff Cuts: Peak customs duties were lowered from over 300% to international competitive levels.\n  - Export Promotion: Removed export duties and simplified export procedures, transitioning India from import substitution to an export-competitive economy."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 10,
      "book": "Part B: Indian Economic Development",
      "title": "Human Capital Formation and Rural Development",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 7: Current Challenges Facing Indian Economy (20 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following is considered the MOST fundamental and potent source of Human Capital Formation?",
        "options": [
          "(a) Expenditure on luxury cars",
          "(b) Expenditure on Education",
          "(c) Expenditure on real estate speculation",
          "(d) Expenditure on imported jewelry"
        ],
        "answer": "(b) Expenditure on Education",
        "explanation": "Investment in education enhances skill sets, mental horizons, productive efficiency, and lifetime earning power, making it the primary driver of human capital formation."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The National Bank for Agriculture and Rural Development (NABARD) was established in which year as the apex refinancing agency for rural credit?",
        "options": [
          "(a) 1969",
          "(b) 1982",
          "(c) 1991",
          "(d) 2001"
        ],
        "answer": "(b) 1982",
        "explanation": "NABARD was set up on July 12, 1982, under an Act of Parliament to serve as the apex institution coordinating and refinancing all rural financing institutions."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "'Operation Flood' (White Revolution), launched in 1970 under the leadership of Dr. Verghese Kurien, led to a massive increase in the production of:",
        "options": [
          "(a) Food grains",
          "(b) Milk and dairy products",
          "(c) Marine fish",
          "(d) Honey and horticulture"
        ],
        "answer": "(b) Milk and dairy products",
        "explanation": "Operation Flood created a nationwide milk grid through village dairy cooperatives (like AMUL), making India the largest producer of milk in the world."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the following constitutes 'Preventive Medicine' as a source of health expenditure?",
        "options": [
          "(a) Medical treatment during illness in hospitals",
          "(b) Vaccination / Immunization campaigns against infectious diseases",
          "(c) Buying prescription medicines after infection",
          "(d) Surgery after an accident"
        ],
        "answer": "(b) Vaccination / Immunization campaigns against infectious diseases",
        "explanation": "Preventive medicine encompasses vaccinations, clean drinking water, and sanitation that stop diseases before they occur."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The period between 1991 and 2003 in Indian agriculture is celebrated as the era of:",
        "options": [
          "(a) Green Revolution",
          "(b) Golden Revolution (Horticulture and Honey)",
          "(c) Blue Revolution",
          "(d) Silver Revolution"
        ],
        "answer": "(b) Golden Revolution (Horticulture and Honey)",
        "explanation": "The Golden Revolution (1991–2003) refers to the surge in production of horticultural crops (fruits, vegetables, flowers, plantation crops) and honey in India."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Which Constitutional Amendment Act made free and compulsory elementary education a Fundamental Right for all Indian children aged 6 to 14 years (Article 21A)?",
        "options": [
          "(a) 42nd Amendment Act",
          "(b) 86th Amendment Act (2002)",
          "(c) 73rd Amendment Act",
          "(d) 101st Amendment Act"
        ],
        "answer": "(b) 86th Amendment Act (2002)",
        "explanation": "The 86th Constitutional Amendment Act of 2002 inserted Article 21A, enacting free and compulsory education as a fundamental right, later operationalized via the RTE Act 2009."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "A situation where skilled and highly educated professionals (doctors, engineers, scientists) migrate to developed countries in search of higher earnings is termed:",
        "options": [
          "(a) Brain Drain",
          "(b) Outsourcing",
          "(c) Urbanization",
          "(d) Financial Inclusion"
        ],
        "answer": "(a) Brain Drain",
        "explanation": "Brain Drain refers to the loss of domestically trained human capital when skilled specialists emigrate to foreign countries seeking better career and income opportunities."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Apni Mandi (in Punjab and Haryana), Rythu Bazars (in Andhra Pradesh/Telangana), and Uzhavar Sandies (in Tamil Nadu) are examples of:",
        "options": [
          "(a) Regulated APMC wholesale yards",
          "(b) Direct agricultural marketing channels connecting farmers directly to consumers",
          "(c) Export promotion zones",
          "(d) Non-institutional moneylending clubs"
        ],
        "answer": "(b) Direct agricultural marketing channels connecting farmers directly to consumers",
        "explanation": "These farmers' markets allow cultivators to sell farm-fresh produce directly to consumers without exploitative middlemen, securing higher profit shares."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Which of the following is an apex regulatory body overseeing technical and management education in India?",
        "options": [
          "(a) University Grants Commission (UGC)",
          "(b) All India Council for Technical Education (AICTE)",
          "(c) Indian Council of Medical Research (ICMR)",
          "(d) National Council of Educational Research and Training (NCERT)"
        ],
        "answer": "(b) All India Council for Technical Education (AICTE)",
        "explanation": "AICTE is the statutory national regulatory council for technical, engineering, and management higher education institutions in India."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Self-Help Groups (SHGs) promote rural credit primarily through which mechanism?",
        "options": [
          "(a) Demanding collateral land deeds from members",
          "(b) Mobilizing small voluntary thrift savings of 10-20 rural women and extending collateral-free microcredit to members",
          "(c) Direct subsidies from the World Bank",
          "(d) Printing local paper money"
        ],
        "answer": "(b) Mobilizing small voluntary thrift savings of 10-20 rural women and extending collateral-free microcredit to members",
        "explanation": "SHGs pool small savings from low-income women members and provide collateral-free microloans for emergent consumption and income-generating needs."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Which committee appointed by the Government of India in 1998 estimated that India needed an investment of ₹1.37 lakh crore over 10 years to universalize elementary education?",
        "options": [
          "(a) Tapas Majumdar Committee",
          "(b) Kothari Commission",
          "(c) Karve Committee",
          "(d) Swaminathan Committee"
        ],
        "answer": "(a) Tapas Majumdar Committee",
        "explanation": "The Tapas Majumdar Committee (1998) formulated the financial roadmap to universalize elementary schooling for all Indian children."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Organic farming is an agricultural production system that completely avoids the use of:",
        "options": [
          "(a) Animal cow-dung manure",
          "(b) Synthetic chemical fertilizers, chemical pesticides, and growth hormones",
          "(c) Bio-fertilizers and compost",
          "(d) Drip irrigation"
        ],
        "answer": "(b) Synthetic chemical fertilizers, chemical pesticides, and growth hormones",
        "explanation": "Organic agriculture relies on ecological crop rotations, animal compost, and biological pest controls, avoiding chemical fertilizers and synthetic pesticides."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which of the following is a major limitation / challenge associated with 'Organic Farming' in India?",
        "options": [
          "(a) It causes severe water pollution",
          "(b) Lower crop yields during the initial transition/gestation years and shorter shelf life of produce",
          "(c) High usage of toxic chemical sprays",
          "(d) Complete lack of consumer demand abroad"
        ],
        "answer": "(b) Lower crop yields during the initial transition/gestation years and shorter shelf life of produce",
        "explanation": "Organic farming experiences lower yields during the first few gestation years as soil recalibrates, and organic goods spoil faster without chemical preservatives."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Why is 'Expenditure on Migration' considered a source of Human Capital Formation?",
        "options": [
          "(a) Because traveling for vacations builds physical stamina",
          "(b) Because the enhanced earnings in the new job market substantially exceed the transportation and living costs of migration",
          "(c) Because foreign passports carry prestige",
          "(d) Because it lowers population in rural villages"
        ],
        "answer": "(b) Because the enhanced earnings in the new job market substantially exceed the transportation and living costs of migration",
        "explanation": "People migrate from rural areas or overseas to access higher-paying jobs; the resulting gain in earnings exceeds the financial cost of migration."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "A situation where farmers are compelled by pressing debt obligations to sell their farm produce immediately after harvest at low, unremunerative prices is called:",
        "options": [
          "(a) Marketed Surplus",
          "(b) Distress Sale",
          "(c) Future Trading",
          "(d) Speculative Hoarding"
        ],
        "answer": "(b) Distress Sale",
        "explanation": "Lacking storage facilities and facing urgent debts to moneylenders, small farmers are forced into 'distress sales' at depressed post-harvest prices."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which sector accounts for the largest share in the total livestock population of India?",
        "options": [
          "(a) Poultry",
          "(b) Cattle and Buffaloes",
          "(c) Sheep and Goats",
          "(d) Pigs and Horses"
        ],
        "answer": "(a) Poultry",
        "explanation": "Poultry accounts for over 58% of India's total livestock population, followed by cattle and buffaloes."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "What is the primary difference between 'Human Capital' and 'Human Development'?",
        "options": [
          "(a) Human Capital treats human beings as a means to increase productivity; Human Development views human well-being and education as an end in itself",
          "(b) Human Capital is only about machines, Human Development is about animals",
          "(c) Both concepts are completely identical",
          "(d) Human Development excludes health"
        ],
        "answer": "(a) Human Capital treats human beings as a means to increase productivity; Human Development views human well-being and education as an end in itself",
        "explanation": "Human capital evaluates people as productive instruments of labor output; human development views education, health, and dignity as fundamental human rights regardless of labor productivity."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "Which of the following is an INSTITUTIONAL source of rural credit in India?",
        "options": [
          "(a) Village Moneylenders",
          "(b) Agricultural Traders and Commission Agents",
          "(c) Regional Rural Banks (RRBs)",
          "(d) Rich Landlords"
        ],
        "answer": "(c) Regional Rural Banks (RRBs)",
        "explanation": "RRBs, Commercial Banks, and Cooperatives are regulated institutional lenders, unlike non-institutional moneylenders and commission agents."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What percentage of India's GDP did the Education Commission (Kothari Commission, 1964-66) recommend spending on education?",
        "options": [
          "(a) 2%",
          "(b) 4%",
          "(c) 6%",
          "(d) 10%"
        ],
        "answer": "(c) 6%",
        "explanation": "The Kothari Commission recommended that the government allocate at least 6% of GDP to education to achieve meaningful educational expansion."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why do firms invest in 'On-the-job Training' for their employees?",
        "options": [
          "(a) To spend their surplus profits without paying taxes",
          "(b) Because the enhanced labor productivity and output generated by trained workers exceed the training costs",
          "(c) Because it is required by the police",
          "(d) To keep workers busy during weekends"
        ],
        "answer": "(b) Because the enhanced labor productivity and output generated by trained workers exceed the training costs",
        "explanation": "On-the-job training upgrades employee technical skills, boosting productivity; firms retain workers for a minimum duration to recoup training costs."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "In which sector does the majority of India's rural female labor force find non-crop employment?",
        "options": [
          "(a) Heavy mining",
          "(b) Animal husbandry / Livestock and dairy farming",
          "(c) Software programming",
          "(d) Deep-sea trawling"
        ],
        "answer": "(b) Animal husbandry / Livestock and dairy farming",
        "explanation": "Animal husbandry and dairy care provide supplementary income and flexible work near the homestead, engaging a large share of rural female workers."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Which institution regulates medical education and public health research standards in India?",
        "options": [
          "(a) National Medical Commission (NMC) and ICMR",
          "(b) AICTE",
          "(c) NCERT",
          "(d) UGC"
        ],
        "answer": "(a) National Medical Commission (NMC) and ICMR",
        "explanation": "The National Medical Commission (formerly MCI) regulates medical colleges, and the Indian Council of Medical Research (ICMR) coordinates health research."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the primary motive behind government intervention in the Agricultural Marketing System through 'Regulated Markets'?",
        "options": [
          "(a) To eliminate exploitative trade malpractices like faulty weights, unauthorized broker deductions, and price collusion",
          "(b) To confiscate all food grain crops from farmers",
          "(c) To double middlemen commissions",
          "(d) To ban private retail food sales"
        ],
        "answer": "(a) To eliminate exploitative trade malpractices like faulty weights, unauthorized broker deductions, and price collusion",
        "explanation": "Regulated markets (APMCs) were created to protect farmers by standardizing weighing equipment, ensuring transparent open auctions, and preventing illicit fee deductions."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "An 'Education Cess' of 2% (plus an additional 1% higher education cess) was levied on all central taxes by the Government of India to:",
        "options": [
          "(a) Earmark dedicated budgetary funding for universalizing elementary and secondary school education",
          "(b) Build luxury universities abroad",
          "(c) Fund corporate marketing campaigns",
          "(d) Subsidize imported textbooks"
        ],
        "answer": "(a) Earmark dedicated budgetary funding for universalizing elementary and secondary school education",
        "explanation": "The Education Cess earmarks tax revenues specifically to fund elementary, secondary, and higher public schooling across the country."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Why is 'Agricultural Diversification' into non-farm activities essential for rural India?",
        "options": [
          "(a) Because it reduces the risk of crop failure, stabilizes farm household income, and provides year-round productive employment",
          "(b) Because crop farming is completely banned in India",
          "(c) Because all agricultural land has turned into desert",
          "(d) Because food grains have zero market value"
        ],
        "answer": "(a) Because it reduces the risk of crop failure, stabilizes farm household income, and provides year-round productive employment",
        "explanation": "Diversification into livestock, horticulture, and rural processing mitigates monsoon and price risks while absorbing seasonal disguised unemployment."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Expenditure on health directly contributes to human capital formation and economic growth.\nReason (R): A healthy worker experiences fewer sick days, possesses higher stamina, and operates with greater productivity than an ailing worker.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Health investments directly enhance labor efficiency, stamina, and productive output, forming vital human capital."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Non-institutional sources of rural credit like village moneylenders charge extortionate interest rates.\nReason (R): Moneylenders lend collateral-free credit for both productive and unproductive personal consumption purposes, exploiting illiterate farmers into bonded debt traps.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Moneylenders operate without regulatory limits, manipulating loan accounts and charging usurious interest rates that trap rural borrowers."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Organic agriculture is an environmentally sustainable alternative to chemical-intensive farming.\nReason (R): Organic farming relies on natural ecological cycles, bio-fertilizers, and biological pest control, protecting groundwater tables and soil microbiomes from toxic chemical accumulation.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Eliminating synthetic chemicals preserves soil biology, avoids chemical runoff, and sustains long-term ecological balance."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Human Capital Formation and Human Development mean the exact same thing.\nReason (R): Both terms evaluate human education exclusively as an input tool to maximize Gross Domestic Product (GDP).",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Human capital views humans as productive inputs; human development views human education, health, and dignity as ends in themselves."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): Microcredit programs through Self-Help Groups (SHGs) have significantly contributed to women's empowerment in rural India.\nReason (R): Participation in SHGs provides rural women with access to collateral-free credit, encourages micro-entrepreneurship, and enhances their decision-making power in households.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. SHG participation builds financial independence, micro-enterprise skills, and community voice for rural women."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain 'On-the-job Training' and 'Expenditure on Information' as sources of Human Capital Formation. [3 Marks]",
        "answer": "On-the-job training upgrades practical skills; Information expenditure enables optimal educational and employment choices.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. On-the-job Training: Enterprises provide practical training either on-site under senior supervision or off-site at training institutes. Upgraded technical know-how increases worker productivity and efficiency, yielding returns that exceed training expenses.\n• 2. Expenditure on Information: People spend time and money acquiring information about educational institutions, salaries, and labor market vacancies. Reliable data enables informed career choices, improving the allocation of human capital."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "What is 'Agricultural Marketing'? State any two defects of the traditional agricultural marketing system in India. [3 Marks]",
        "answer": "Process of assembling, grading, storing, and distributing farm produce; Defects: Middlemen exploitation and distress sales.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks defects):\n• Concept: Agricultural marketing encompasses all activities involved in assembling, storage, processing, transportation, packaging, grading, and distributing farm produce from cultivator to final consumer.\n• Defects of Traditional Marketing:\n  1. Exploitation by Middlemen: Multiple intermediaries pocket large commissions while manipulating scales and weights to underpay farmers.\n  2. Lack of Storage & Distress Sales: Inadequate village warehousing forces indebted farmers to sell their harvest immediately to local traders at depressed post-harvest prices."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Distinguish between 'Physical Capital' and 'Human Capital' on any three bases. [3 Marks]",
        "answer": "Distinction on Tangibility, Separability from owner, and Depreciation/Mobility.",
        "explanation": "Marking Scheme (1 Mark per basis):\n• 1. Nature and Tangibility: Physical capital (machinery, buildings) is tangible and can be seen and touched. Human capital (skills, knowledge, expertise) is intangible and resides within the human mind.\n• 2. Separability from Owner: Physical capital is completely separable from its owner and can be sold independently. Human capital cannot be separated from the human owner; only the services of human capital can be leased/sold.\n• 3. Mobility: Physical capital moves across borders subject to customs tariffs. Human capital faces international migration and visa restrictions."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the role and significance of 'NABARD' in the rural financing structure of India. [3 Marks]",
        "answer": "Apex refinancing institution for rural banks, coordinator of agricultural credit, and policy facilitator for rural projects.",
        "explanation": "Marking Scheme (1 Mark per role):\n• 1. Apex Refinancing Agency: Provides concessional refinancing facilities to commercial banks, Regional Rural Banks (RRBs), and State Cooperative Banks for agricultural and rural lending.\n• 2. Coordination of Rural Credit: Oversees, monitors, and coordinates the operations of all grassroots rural credit institutions.\n• 3. Project Financing & SHG Promotion: Finances rural infrastructure projects through the Rural Infrastructure Development Fund (RIDF) and pioneered the SHG-Bank Linkage Programme."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What is 'Organic Farming'? Discuss any two major benefits of organic farming for Indian agriculture. [3 Marks]",
        "answer": "Ecological farming avoiding synthetic chemicals; Benefits: preserves soil fertility and commands premium export prices.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks benefits):\n• Concept: A holistic agricultural production system that relies on biological inputs, crop rotations, green manures, and compost, avoiding synthetic chemical fertilizers, pesticides, and GMOs.\n• Two Major Benefits:\n  1. Ecological Sustainability & Soil Health: Preserves soil microbiomes, prevents chemical runoff into aquifers, and sustains long-term soil fertility.\n  2. Premium Market Value & Export Demand: Organic crops are healthier, pesticide-free, and command premium pricing in domestic and international organic export markets."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain how 'Expenditure on Health' acts as an important source of Human Capital Formation. [3 Marks]",
        "answer": "Preventive, curative, and social medicine enhance worker stamina, reduce absenteeism, and raise productivity.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Types of Health Outlays: Health expenditure covers preventive medicine (vaccinations, clean water), curative medicine (medical treatment during sickness), and social medicine (health hygiene education).\n• 2. Productivity Enhancement: A healthy individual works with higher physical energy, focus, and mental acuity, generating higher output per hour.\n• 3. Reducing Absenteeism: Proper healthcare reduces sick days and prevents permanent physical disability, lengthening the active working lifespan."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "Why is 'Agricultural Diversification' necessary in rural India? Mention its two main aspects. [3 Marks]",
        "answer": "Necessity: risk mitigation and livelihood stability; Two aspects: diversification of crop production and shift to non-farm activities.",
        "explanation": "Marking Scheme (1 Mark necessity + 2 Marks aspects):\n• Necessity: Relying solely on monsoon-dependent farming leaves rural households vulnerable to weather failures and price crashes; diversification stabilizes incomes and provides year-round employment.\n• Two Main Aspects:\n  1. Diversification of Crop Production: Shifting from single-crop farming to multi-cropping, including high-value commercial fruits, vegetables, and pulses.\n  2. Diversification of Productive Activities: Shifting surplus farm labor into non-farm sectors like animal husbandry, dairy, fisheries, horticulture, and agro-processing."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "What are the major challenges faced by the 'Rural Banking' system in India? [3 Marks]",
        "answer": "High loan default rates, inadequate coverage of marginal farmers, and poor recovery culture.",
        "explanation": "Marking Scheme (1 Mark per challenge):\n• 1. High Default Rates & Culture of Write-Offs: Frequent political farm loan waivers have eroded credit discipline, leading to high non-performing assets (NPAs) and weakened rural bank balance sheets.\n• 2. Neglect of Small and Marginal Farmers: Formal banks often demand collateral land documents that tenant farmers and landless laborers lack, leaving them reliant on informal moneylenders.\n• 3. Inadequate Deposit Mobilization: Rural bank branches often struggle to mobilize local rural savings effectively and operate with high transaction costs."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Explain the concept of 'Direct Marketing Channels' with suitable examples from different Indian states. [3 Marks]",
        "answer": "Channels where farmers sell directly to consumers without middlemen; Examples: Apni Mandi, Rythu Bazar, Uzhavar Sandies.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks examples):\n• Concept: Marketing arrangements where farmers sell their agricultural harvests directly to final retail consumers, bypassing exploitative commission agents and securing higher net profits.\n• State-Level Examples:\n  1. Apni Mandi in Punjab, Haryana, and Rajasthan.\n  2. Rythu Bazars (vegetable farmers' markets) in Andhra Pradesh and Telangana.\n  3. Uzhavar Sandies in Tamil Nadu, and Hadaspar Mandi in Pune (Maharashtra)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "What were the recommendations of the 'Tapas Majumdar Committee' (1998) regarding education expenditure in India? [3 Marks]",
        "answer": "Recommended spending ₹1.37 lakh crore over 10 years to achieve universal elementary education; Emphasized reaching 6% of GDP.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Dedicated Outlay for Universal Schooling: In 1998, the committee estimated that an additional government expenditure of ₹1.37 lakh crore over 10 years (1998-99 to 2006-07) was necessary to provide elementary schooling for all Indian children aged 6 to 14.\n• 2. 6% GDP Target: Reaffirmed the Kothari Commission target that total public spending on education should reach at least 6% of GDP.\n• 3. Bridging the Gap: Criticized the actual expenditure (~3-4% of GDP) as inadequate to achieve quality infrastructure and teacher-student ratios."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Explain the five major sources of 'Human Capital Formation' in an economy. How does human capital contribute to economic growth? [6 Marks]",
        "answer": "Education, Health, On-the-job training, Migration, and Information; Mechanism connecting human capital to economic growth.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks sources + 3 Marks economic growth contribution):\n• 1. Five Major Sources of Human Capital Formation [3 Marks]:\n  - (a) Education: Equips individuals with skills, scientific literacy, and productivity, expanding their lifetime earning capacity.\n  - (b) Health: Preventive, curative, and clean water outlays build stamina, reduce work absenteeism, and extend the active working life.\n  - (c) On-the-job Training: Enterprise training upgrades workers' practical skills, enabling faster adoption of new technologies.\n  - (d) Migration: Spending on transport and relocation to urban hubs or abroad allows workers to move to higher-productivity jobs.\n  - (e) Information: Spending to acquire data on labor market jobs and educational programs prevents misallocation of human skills.\n• 2. Contribution of Human Capital to Economic Growth [3 Marks]:\n  - Higher Labor Productivity: Educated, healthy workers produce greater real output per labor hour.\n  - Innovation and Technological Adaptability: High human capital enables societies to absorb foreign technologies and innovate locally.\n  - Social Progress: Education fosters modern social attitudes, lower fertility rates, and civic participation, supporting sustainable GDP growth."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Critically examine the 'Agricultural Marketing System' in India. What measures has the government taken to improve agricultural marketing? [6 Marks]",
        "answer": "Defects of traditional marketing; Government interventions: Regulated markets, Infrastructure, Cooperative marketing, MSP, and PDS.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks defects + 4 Marks government remedial measures):\n• 1. Defects of the Traditional Agricultural Marketing System [2 Marks]:\n  - Middlemen exploitation through fraudulent weighing and unauthorized brokerage cuts.\n  - Lack of rural storage facilities, forcing smallholders into distress sales immediately after harvest.\n  - Information deficits regarding wholesale prices, leaving farmers vulnerable to local trader cartels.\n• 2. Government Remedial Measures [4 Marks (1 Mark each)]:\n  - (a) Regulated Markets (APMCs): Establishing market committees with farmer representation to enforce standardized weights and transparent open auctions.\n  - (b) Physical Infrastructure Development: Constructing storage warehouses (Central Warehousing Corporation), cold-chain facilities, and rural link roads.\n  - (c) Cooperative Marketing: Promoting farmer cooperatives (like AMUL in dairy) to pool produce, build bargaining power, and eliminate middlemen.\n  - (d) Policy Instruments: Announcing Minimum Support Prices (MSP) to guarantee floor prices, maintaining buffer stocks through the Food Corporation of India (FCI), and distributing subsidized food through the Public Distribution System (PDS)."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What is 'Rural Credit'? Explain the Institutional and Non-Institutional sources of rural credit in India. Discuss the role of 'Self-Help Groups' (SHGs). [6 Marks]",
        "answer": "Rural credit concept; Non-institutional (moneylenders/landlords) vs Institutional (commercial banks, RRBs, NABARD); Role of SHGs.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks non-institutional & institutional sources + 2 Marks limitations + 2 Marks role of SHGs):\n• 1. Sources of Rural Credit [2 Marks]:\n  - Non-Institutional Sources: Village moneylenders, traders, commission agents, and landlords. Historically dominated rural lending, charging usurious interest rates (24-60%) and leading to debt bondage.\n  - Institutional Sources: Commercial Banks (nationalized post-1969), Regional Rural Banks (RRBs), Primary Agricultural Credit Societies (PACS), and NABARD.\n• 2. Limitations of Formal Banking in Rural Areas [2 Marks]:\n  - Formal banks require collateral land titles that tenant and marginal farmers often lack.\n  - Bureaucratic paperwork and distance from bank branches deter illiterate villagers.\n• 3. Role of Self-Help Groups (SHGs) [2 Marks]:\n  - Small voluntary groups (10-20 rural women) pooling regular thrift savings to create an internal lending pool.\n  - Provide small, collateral-free loans for consumption and micro-enterprises at reasonable interest rates.\n  - The NABARD SHG-Bank Linkage Programme connected millions of women to formal credit, fostering financial inclusion and self-reliance."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Discuss 'Diversification of Productive Activities' as an essential strategy for sustainable rural livelihoods. Detail the role of:\n(a) Animal Husbandry / Livestock\n(b) Fisheries\n(c) Horticulture [6 Marks]",
        "answer": "Rationale for diversification; Comprehensive review of Livestock (Operation Flood), Fisheries, and Horticulture (Golden Revolution).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each sub-sector):\n• (a) Animal Husbandry / Livestock [2 Marks]:\n  - Livestock farming (cattle, buffaloes, goats, poultry) provides supplementary income and security against crop failure.\n  - 'Operation Flood' (White Revolution), led by Dr. Verghese Kurien and AMUL cooperatives, increased milk production multi-fold, making India the global leader in dairy output.\n• (b) Fisheries [2 Marks]:\n  - Fishing communities along India's 7,500 km coastline and inland rivers/lakes depend on marine and inland aquaculture.\n  - Inland fisheries now account for roughly 65% of total fish production.\n  - Challenges include low per capita earnings, seasonal monsoon bans, and environmental pollution of water bodies.\n• (c) Horticulture [2 Marks]:\n  - The 'Golden Revolution' (1991–2003) transformed India into a leading producer of fruits (mangoes, bananas), vegetables, spices, and plantation crops.\n  - Horticulture accounts for nearly one-third of agricultural GDP, providing high per-hectare incomes and export potential."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "What is 'Organic Farming'? Discuss its major merits. What are the key bottlenecks hindering the widespread adoption of organic farming in India? [6 Marks]",
        "answer": "Organic farming concept; Merits (ecological sustainability, healthy food, export potential); Bottlenecks (gestation yields, short shelf life, lack of infrastructure).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks merits + 2 Marks bottlenecks):\n• 1. Concept of Organic Farming [2 Marks]:\n  - An ecological farm management system that promotes and enhances biodiversity, biological cycles, and soil biological activity by avoiding synthetic agrochemicals and GMOs.\n• 2. Merits of Organic Agriculture [2 Marks]:\n  - Environmentally Friendly: Prevents chemical degradation of soils, eliminates toxic pesticide runoff into water bodies, and sustains long-term ecological balance.\n  - Nutritional and Health Value: Yields food with higher nutritional content free from chemical residues, driving consumer demand.\n  - Export Potential & Employment: Commands premium pricing in international organic markets and generates more rural labor employment.\n• 3. Major Bottlenecks and Challenges [2 Marks]:\n  - Initial Yield Drop during Gestation: Crops yield less during the initial 2-3 transition years as soil purges synthetic residues, deterring risk-averse smallholders.\n  - Shorter Shelf Life: Organic produce lacks chemical preservatives and spoils more rapidly, requiring efficient cold chains.\n  - Inadequate Marketing Infrastructure & Certification: High certification costs and limited specialized retail networks restrict domestic access."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Distinguish between 'Human Capital' and 'Human Development'. Explain why government intervention is indispensable in the Education and Health sectors in India. [6 Marks]",
        "answer": "Human Capital vs Human Development; Justification for government intervention in education and health (positive externalities, monopolies, social justice).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks distinction + 4 Marks justification for state intervention):\n• 1. Human Capital vs. Human Development [2 Marks]:\n  - Human Capital considers education and health as means to enhance labor productivity and GDP growth; if an investment does not raise output, it is deemed unproductive.\n  - Human Development views education, health, and a decent standard of living as fundamental human rights and ends in themselves, essential for human dignity regardless of labor productivity.\n• 2. Why Government Intervention is Indispensable [4 Marks (1 Mark each)]:\n  - (a) Long Gestation and Substantial Capital Outlays: Setting up schools, medical colleges, and hospitals requires heavy long-term investments that private capital alone cannot supply.\n  - (b) Positive Social Externalities: The benefits of education and immunization extend beyond the individual to society (lower crime, disease prevention, scientific awareness).\n  - (c) Asymmetric Information and Consumer Protection: Healthcare patients cannot easily evaluate medical procedures or drug quality, necessitating public regulation against malpractice.\n  - (d) Equity and Poverty Alleviation: Unregulated private markets price poor households out of quality education and health, perpetuating poverty cycles."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Discuss the major problems confronting 'Human Capital Formation' in India. [6 Marks]",
        "answer": "Exhaustive review of 6 challenges: Rising population, Brain drain, Deficient manpower planning, Regional disparities, Low academic standards, and Underfunding.",
        "explanation": "Step-by-Step Marking Scheme (1 Mark per problem):\n• 1. Rapid Population Growth: A large annual addition to population dilutes per capita availability of schools, hospitals, and clean water.\n• 2. Brain Drain: Thousands of doctors, software engineers, and researchers trained in premier subsidized domestic institutions (IITs, AIIMS) migrate abroad for higher pay, depriving India of valuable skills.\n• 3. Inadequate Manpower Planning: Imbalances between degrees awarded and market skill needs leave millions of graduates unemployed alongside shortages of technical technicians.\n• 4. Regional and Socio-Economic Disparities: Healthcare and elite universities remain concentrated in urban metropolitan areas, leaving rural and tribal tracts underserved.\n• 5. Low Academic and Pedagogical Standards: Rote-learning curricula, underqualified teachers, and inadequate laboratory/library infrastructure produce graduates lacking workplace readiness.\n• 6. Chronic Underfunding: Public spending on education (~3-4% of GDP) and health (~1.5-2% of GDP) remains below recommended international benchmarks."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Evaluate the role of 'Information Technology' (IT) in achieving sustainable development and food security in rural India. [6 Marks]",
        "answer": "IT in weather forecasting, crop advisory, price discovery (e-NAM), soil health cards, and rural employment.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four dimensions):\n• 1. Accurate Weather Forecasting and Disaster Warning: Remote-sensing satellites and mobile alerts deliver real-time monsoon tracking and cyclone warnings, helping farmers plan sowing and harvest windows.\n• 2. Real-Time Price Discovery (e-NAM): The National Agriculture Market (e-NAM) digital trading portal connects physical mandis online, allowing farmers to check wholesale prices across India and avoid local trader exploitation.\n• 3. Digital Agronomic Advisory and Soil Health: Initiatives like the Soil Health Card scheme and Kisan Call Centers provide customized advice on fertilizer dosages, pest management, and crop rotations.\n• 4. Rural Employment and Service Delivery: Common Service Centers (CSCs) and rural BPOs create local non-farm jobs, delivering digital land records, insurance claims, and government transfers directly to villages."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Critically analyze the performance of the 'Education Sector' in India since Independence. Highlight key achievements and persistent deficits. [6 Marks]",
        "answer": "Achievements: Literacy gains, RTE Act, higher education expansion; Deficits: Quality crisis, gender gap, low spending vs 6% goal.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks achievements + 3 Marks persistent deficits):\n• 1. Key Achievements [3 Marks]:\n  - Rise in Overall Literacy: Adult literacy increased from less than 16% in 1947 to over 77% today.\n  - Universal Primary Enrollment & RTE: The 86th Constitutional Amendment and RTE Act 2009 made primary schooling a justiciable fundamental right, achieving near 100% gross primary enrollment.\n  - Expansion of Higher Education Network: Rapid multiplication of universities, IITs, IIMs, and polytechnics established a large domestic pool of scientific and technical manpower.\n• 2. Persistent Deficits and Concerns [3 Marks]:\n  - The Learning Crisis: Annual Status of Education Reports (ASER) reveal that many primary students struggle with basic reading and arithmetic.\n  - Gender and Caste Disparities: Female literacy and secondary school completion rates among disadvantaged groups lag national averages.\n  - Underfunding: Public education expenditure hovers around 3.5-4% of GDP, well below the 6% target recommended by the Kothari Commission in 1966."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "What is the 'Golden Revolution'? How does it differ from the 'Green Revolution'? Discuss its role in rural transformation. [6 Marks]",
        "answer": "Golden Revolution (Horticulture/Honey, 1991-2003) vs Green Revolution (Wheat/Rice, 1960s); Role in livelihood diversification, high farmer incomes, and exports.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks Golden Revolution concept + 2 Marks contrast with Green Revolution + 2 Marks rural transformation role):\n• 1. Concept of the Golden Revolution [2 Marks]:\n  - Refers to the rapid growth and modernization of the horticulture sector (fruits, vegetables, flowers, plantation crops, spices, and honey) in India between 1991 and 2003.\n• 2. Contrast with the Green Revolution [2 Marks]:\n  - Focus Crops: Green Revolution focused on food grain staples (wheat and rice); Golden Revolution focused on horticultural crops, honey, and medicinal plants.\n  - Time Period & Technology: Green Revolution began in the mid-1960s using HYV seeds and chemical packages; Golden Revolution emerged in the post-1991 reform era using drip irrigation, greenhouse farming, and cold-chain logistics.\n• 3. Role in Rural Transformation [2 Marks]:\n  - Raised farmer incomes: High-value horticultural crops yield significantly higher returns per hectare than conventional cereals.\n  - Provided nutrition and export earnings: Made India a major exporter of fruits, vegetables, and cashew nuts, while generating employment for rural women in packaging and food processing."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 11,
      "book": "Part B: Indian Economic Development",
      "title": "Employment and Sustainable Economic Development",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 7: Current Challenges Facing Indian Economy (20 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "Which of the following defines the 'Workforce' of a country?",
        "options": [
          "(a) Total population of the country",
          "(b) Total number of persons who are actually employed and engaged in economic activities",
          "(c) Persons seeking jobs but not working",
          "(d) Children below 14 years"
        ],
        "answer": "(b) Total number of persons who are actually employed and engaged in economic activities",
        "explanation": "Workforce represents the number of persons who are actively employed in productive economic activities: Workforce = Labor Force - Unemployed Persons."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The Brundtland Commission Report (1987), 'Our Common Future', defined 'Sustainable Development' as:",
        "options": [
          "(a) Development that maximizes industrial profits in the shortest possible time",
          "(b) Development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
          "(c) Stopping all industrial production permanently",
          "(d) Banning all non-renewable energy"
        ],
        "answer": "(b) Development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs",
        "explanation": "The Brundtland Report established the classic definition of sustainable development: balancing current resource utilization with inter-generational equity."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Under the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005, how many days of guaranteed wage employment are provided per financial year to every rural household?",
        "options": [
          "(a) 50 days",
          "(b) 100 days",
          "(c) 200 days",
          "(d) 365 days"
        ],
        "answer": "(b) 100 days",
        "explanation": "MGNREGA provides a legal guarantee of at least 100 days of unskilled wage employment per year to every rural household whose adult members volunteer to do manual work."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "A situation where more workers are engaged in an agricultural activity than are actually required, such that the marginal productivity of surplus workers is zero, is called:",
        "options": [
          "(a) Seasonal Unemployment",
          "(b) Disguised Unemployment",
          "(c) Open Unemployment",
          "(d) Frictional Unemployment"
        ],
        "answer": "(b) Disguised Unemployment",
        "explanation": "Disguised unemployment is pervasive in Indian agriculture; withdrawing surplus family workers causes zero reduction in total crop output because their marginal productivity is zero."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "An environmental crisis occurs when resource extraction exceeds the rate of resource regeneration and waste generation exceeds the:",
        "options": [
          "(a) Carrying capacity / Absorptive capacity of the environment",
          "(b) Export capacity of the country",
          "(c) National income",
          "(d) Buffer stock capacity"
        ],
        "answer": "(a) Carrying capacity / Absorptive capacity of the environment",
        "explanation": "When resource exploitation and pollution exceed the natural regenerative and absorptive thresholds of ecosystems, the carrying capacity collapses, triggering environmental crises."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "The process of moving from self-employment and regular salaried employment towards casual daily-wage labor is known as:",
        "options": [
          "(a) Formalization",
          "(b) Casualisation of Workforce",
          "(c) Industrialization",
          "(d) Modernization"
        ],
        "answer": "(b) Casualisation of Workforce",
        "explanation": "Casualisation refers to the rising percentage of casual wage laborers in the total workforce over time, reflecting a decline in stable salaried positions."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "All public sector establishments and private business enterprises that employ 10 or more hired workers belong to which sector?",
        "options": [
          "(a) Formal / Organized Sector",
          "(b) Informal / Unorganized Sector",
          "(c) Agricultural Sector",
          "(d) Cooperative Sector"
        ],
        "answer": "(a) Formal / Organized Sector",
        "explanation": "By definition, the formal organized sector includes all public enterprises and private establishments employing 10 or more hired workers, covered by statutory labor laws and social security."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which international agreement was adopted in 1987 to phase out the production of Chlorofluorocarbons (CFCs) to protect the stratospheric ozone layer?",
        "options": [
          "(a) Kyoto Protocol",
          "(b) Montreal Protocol",
          "(c) Paris Climate Agreement",
          "(d) Basel Convention"
        ],
        "answer": "(b) Montreal Protocol",
        "explanation": "The Montreal Protocol (1987) is a landmark international treaty designed to protect the ozone layer by phasing out substances like CFCs responsible for ozone depletion."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "Which of the following is an example of a 'Renewable Resource'?",
        "options": [
          "(a) Crude petroleum oil",
          "(b) Sunlight and Trees/Forests (when sustainably harvested)",
          "(c) Coal deposits",
          "(d) Iron ore"
        ],
        "answer": "(b) Sunlight and Trees/Forests (when sustainably harvested)",
        "explanation": "Renewable resources replenish naturally over time (like solar radiation, wind, and biomass), unlike non-renewable fossil fuels that are finite."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The Chipko Movement, which originated in the Garhwal Himalayas of Uttarakhand, was aimed at:",
        "options": [
          "(a) Promoting chemical fertilizers",
          "(b) Protecting natural forests from commercial logging by hugging trees",
          "(c) Banning all agriculture",
          "(d) Constructing large dams"
        ],
        "answer": "(b) Protecting natural forests from commercial logging by hugging trees",
        "explanation": "The Chipko Movement, spearheaded by Sundarlal Bahuguna and local village women, used non-violent tree-hugging protests to prevent deforestation in Uttarakhand."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "What proportion of India's total workforce is employed in the 'Informal / Unorganized' sector?",
        "options": [
          "(a) Around 10%",
          "(b) Over 90%",
          "(c) Exactly 50%",
          "(d) Less than 5%"
        ],
        "answer": "(b) Over 90%",
        "explanation": "Over 90% of India's workforce is engaged in the informal unorganized sector, lacking formal employment contracts, paid leaves, and social security protections."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which statutory board was established by the Government of India in 1974 to prevent and control water and air pollution?",
        "options": [
          "(a) Central Pollution Control Board (CPCB)",
          "(b) NITI Aayog",
          "(c) National Green Tribunal",
          "(d) Indian Council of Forestry Research"
        ],
        "answer": "(a) Central Pollution Control Board (CPCB)",
        "explanation": "The Central Pollution Control Board (CPCB) was set up in 1974 under the Water (Prevention and Control of Pollution) Act to monitor air and water quality nationwide."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "'Worker-Population Ratio' (WPR) is a useful macroeconomic indicator to evaluate:",
        "options": [
          "(a) The proportion of a country's population actively contributing to the production of goods and services",
          "(b) The literacy rate of workers",
          "(c) The total number of retired pensioners",
          "(d) The infant mortality rate"
        ],
        "answer": "(a) The proportion of a country's population actively contributing to the production of goods and services",
        "explanation": "Worker-Population Ratio (WPR = Total Workers / Total Population × 100) measures the proportion of the population engaged in economic output."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Which of the following is a major cause of 'Land Degradation' in India?",
        "options": [
          "(a) Organic crop rotation",
          "(b) Deforestation, unsustainable fuel-wood extraction, and excessive chemical fertilizer application",
          "(c) Rainwater harvesting",
          "(d) Planting neem trees"
        ],
        "answer": "(b) Deforestation, unsustainable fuel-wood extraction, and excessive chemical fertilizer application",
        "explanation": "Land degradation is driven by topsoil erosion from deforestation, overgrazing, waterlogging from improper canal irrigation, and chemical imbalances."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Why is the Worker-Population Ratio (WPR) higher in rural areas compared to urban areas in India?",
        "options": [
          "(a) Rural residents have higher university degrees",
          "(b) Poor economic conditions compel rural people, including women and youth, to enter manual agricultural work at an early age rather than attending colleges",
          "(c) Urban residents are not allowed to work",
          "(d) Rural wages are triple urban wages"
        ],
        "answer": "(b) Poor economic conditions compel rural people, including women and youth, to enter manual agricultural work at an early age rather than attending colleges",
        "explanation": "Poverty in rural areas forces family members into farm labor early, whereas urban youth often spend more years in secondary and higher education before entering the labor force."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following is a clean, non-conventional energy strategy for sustainable rural development?",
        "options": [
          "(a) Burning raw coal",
          "(b) Biogas (Gobar Gas) and Solar Photovoltaic Energy",
          "(c) Diesel generators",
          "(d) Burning plastic waste"
        ],
        "answer": "(b) Biogas (Gobar Gas) and Solar Photovoltaic Energy",
        "explanation": "Biogas plants and rooftop solar panels provide clean, renewable energy in rural areas without polluting smoke or greenhouse gas emissions."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "A worker who owns and operates an enterprise to earn his livelihood (e.g. a farmer on his own field or a shopkeeper in his own shop) is categorized as:",
        "options": [
          "(a) Regular Salaried Employee",
          "(b) Self-Employed",
          "(c) Casual Wage Laborer",
          "(d) Disguised Laborer"
        ],
        "answer": "(b) Self-Employed",
        "explanation": "Self-employed individuals operate their own economic enterprises (farms, trade shops, freelance practices) using their own or family labor."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What is the primary function of the 'Ozone Layer' in the Earth's stratosphere?",
        "options": [
          "(a) To absorb harmful Ultraviolet (UV) radiation emitted by the sun",
          "(b) To generate rain clouds",
          "(c) To produce oxygen for plants",
          "(d) To absorb carbon dioxide"
        ],
        "answer": "(a) To absorb harmful Ultraviolet (UV) radiation emitted by the sun",
        "explanation": "The stratospheric ozone layer shields living organisms on Earth from dangerous solar ultraviolet (UV) radiation, which causes skin cancer and cataracts."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The phenomenon where GDP expands rapidly without generating a corresponding increase in formal employment opportunities is known as:",
        "options": [
          "(a) Disguised Growth",
          "(b) Jobless Growth",
          "(c) Casual Growth",
          "(d) Sustainable Growth"
        ],
        "answer": "(b) Jobless Growth",
        "explanation": "Jobless growth occurs when economic output expands through capital-intensive automation and services without generating sufficient formal jobs."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "In which southern Indian state did the 'Appiko Movement' take place as a grassroots forest conservation campaign inspired by the Chipko Movement?",
        "options": [
          "(a) Tamil Nadu",
          "(b) Karnataka",
          "(c) Kerala",
          "(d) Andhra Pradesh"
        ],
        "answer": "(b) Karnataka",
        "explanation": "The Appiko Movement began in 1983 in the Uttara Kannada district of Karnataka, where villagers embraced forest trees to prevent commercial felling."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "Which fuel was made mandatory for all public transport buses in New Delhi to combat hazardous urban air pollution?",
        "options": [
          "(a) Compressed Natural Gas (CNG)",
          "(b) High-Sulfur Diesel",
          "(c) Leaded Petrol",
          "(d) Kerosene"
        ],
        "answer": "(a) Compressed Natural Gas (CNG)",
        "explanation": "Under Supreme Court directives, Delhi transitioned its public transport fleet to Compressed Natural Gas (CNG), reducing vehicular emissions."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Under MGNREGA, what proportion of employment is legally reserved for female workers?",
        "options": [
          "(a) One-tenth",
          "(b) At least one-third (33%)",
          "(c) Exactly half (50%)",
          "(d) Zero reservation"
        ],
        "answer": "(b) At least one-third (33%)",
        "explanation": "The MGNREGA guidelines mandate that at least one-third of the total beneficiaries granted wage employment must be women."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "Which of the following is NOT one of the four vital functions performed by the environment?",
        "options": [
          "(a) Supplies renewable and non-renewable natural resources",
          "(b) Assimilates waste generated by consumption and production",
          "(c) Fixes the legal minimum wage rates for industrial laborers",
          "(d) Sustains life by providing genetic and biological diversity"
        ],
        "answer": "(c) Fixes the legal minimum wage rates for industrial laborers",
        "explanation": "Fixing minimum wage rates is a statutory economic labor regulation made by human governments, not an environmental ecological function."
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "A worker who is hired on a permanent basis, receives regular monthly wages, and is entitled to social security benefits (like PF and gratuity) is classified as:",
        "options": [
          "(a) Casual Wage Laborer",
          "(b) Regular Salaried Employee",
          "(c) Self-Employed",
          "(d) Unpaid Family Worker"
        ],
        "answer": "(b) Regular Salaried Employee",
        "explanation": "Regular salaried employees have ongoing employment contracts, steady monthly compensation, and statutory social security benefits."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which treaty was negotiated under the UN Framework Convention on Climate Change (UNFCCC) in 1997 to commit industrialized countries to reduce greenhouse gas emissions?",
        "options": [
          "(a) Kyoto Protocol",
          "(b) Montreal Protocol",
          "(c) Ramsar Convention",
          "(d) Washington Treaty"
        ],
        "answer": "(a) Kyoto Protocol",
        "explanation": "The Kyoto Protocol (1997) set legally binding greenhouse gas emission reduction targets for industrialized nations to combat global warming."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): Disguised unemployment is widely prevalent in Indian agriculture.\nReason (R): In rural India, family members crowd onto ancestral agricultural holdings due to a lack of non-farm alternative employment, even when extra hands add nothing to total farm output.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Lack of rural manufacturing and services forces surplus family labor to work on small plots, reducing their marginal productivity to zero."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): Informalisation of the workforce exposes workers to high economic vulnerability.\nReason (R): Workers in the informal sector lack job security, written contracts, trade union representation, and statutory social security benefits like pensions and paid maternity leave.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Informal workers face arbitrary dismissal, irregular earnings, and absence of social safety nets."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): Sustainable development requires maintaining the regenerative capacity of renewable natural resources.\nReason (R): If the rate of extraction of a renewable resource exceeds its natural rate of regeneration, the resource will eventually face depletion and ecological extinction.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Sustainable resource management requires keeping consumption rates below biological regeneration thresholds."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Delhi's transition of its entire public bus transit fleet to Compressed Natural Gas (CNG) is a strategy for sustainable urban development.\nReason (R): CNG combustion produces significantly lower particulate matter (PM2.5), sulfur oxides, and carbon monoxide compared to conventional diesel.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. CNG cleaner burning substantially cuts airborne emissions, supporting sustainable urban air quality."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): In India, the female labor force participation rate is significantly higher in urban areas than in rural areas.\nReason (R): Urban women have access to superior air-conditioned offices and multinational corporate careers.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. The female worker-population ratio is higher in rural areas (~25-30%) than in urban areas (~15-20%) because rural poverty forces women into subsistence agricultural labor."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Distinguish between the 'Formal Sector' and the 'Informal Sector' of employment in India on any three bases. [3 Marks]",
        "answer": "Distinction on Size threshold (10+ workers), Labor laws/social security coverage, and Trade union protection.",
        "explanation": "Marking Scheme (1 Mark per basis):\n• 1. Establishment Size Threshold: Formal sector comprises public sector units and private enterprises employing 10 or more hired workers. Informal sector comprises all enterprises employing fewer than 10 workers, including self-employed individuals and unorganized farms.\n• 2. Labor Laws & Social Security: Formal workers enjoy statutory social security benefits (PF, gratuity, pensions, health insurance) and protections under labor laws. Informal workers have zero social security protections.\n• 3. Trade Union Rights: Formal workers can organize into trade unions to bargain collectively for wages. Informal workers lack union representation and can be dismissed arbitrarily."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "What is 'Jobless Growth'? Why has post-reform economic growth in India failed to generate adequate formal employment? [3 Marks]",
        "answer": "Growth without commensurate employment expansion; Caused by capital-intensive production and service-led expansion.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks reasons):\n• Concept: Jobless growth describes an economic scenario where aggregate GDP grows rapidly, but this expansion fails to generate a proportional increase in formal employment opportunities.\n• Reasons:\n  1. Heavy reliance on modern capital-intensive automated technology imported from developed nations rather than labor-absorbing techniques.\n  2. Output growth has been led primarily by service sectors (finance, telecommunications, software) that employ skilled professionals rather than absorbing semi-skilled mass labor."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the four vital functions performed by the 'Environment'. [4 Marks]",
        "answer": "Supplies resources, Assimilates waste, Sustains life through biodiversity, and Provides aesthetic services.",
        "explanation": "Marking Scheme (1 Mark each function):\n• 1. Supplies Natural Resources: Provides renewable resources (trees, fish, water) and non-renewable minerals and fossil fuels that serve as raw materials for production.\n• 2. Assimilates Waste: Acts as a natural sink, absorbing, neutralizing, and recycling waste products generated by production and household consumption.\n• 3. Sustains Life: Provides oxygen, water, and genetic biodiversity, maintaining the ecological conditions necessary for biological survival.\n• 4. Provides Aesthetic Services: Offers scenic beauty (mountains, oceans, forests) that enhances human psychological well-being and recreational quality of life."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "What is 'Disguised Unemployment'? How does it differ from 'Seasonal Unemployment'? [3 Marks]",
        "answer": "Disguised: surplus labor with zero marginal productivity; Seasonal: unemployment occurring during off-crop agricultural months.",
        "explanation": "Marking Scheme (1.5 Marks each):\n• 1. Disguised Unemployment: A condition where more workers are engaged in an economic activity (like farming) than are actually needed. If some workers are withdrawn, total output remains completely unchanged because their marginal product of labor is zero.\n• 2. Seasonal Unemployment: Unemployment that occurs at specific predictable times of the year, particularly in agriculture between sowing and harvesting seasons when farming operations are dormant."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "Explain 'Carrying Capacity' and 'Absorptive Capacity' of the environment. When does an environmental crisis occur? [3 Marks]",
        "answer": "Carrying capacity: resource extraction < regeneration; Absorptive capacity: ability to neutralize waste; Crisis occurs when thresholds are exceeded.",
        "explanation": "Marking Scheme (1 Mark carrying capacity + 1 Mark absorptive capacity + 1 Mark crisis condition):\n• 1. Absorptive Capacity: The ability of the environment to absorb, decompose, and neutralize waste without sustaining permanent ecological degradation.\n• 2. Carrying Capacity: Means two conditions:\n    (i) Resource extraction remains within the natural rate of resource regeneration.\n    (ii) Waste generation remains within the environment's absorptive capacity.\n• 3. Environmental Crisis: Occurs when resource extraction exceeds resource regeneration and waste generation exceeds absorptive capacity, leading to environmental collapse and resource degradation."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What is the 'Casualisation of Workforce'? State two key factors contributing to this trend in India. [3 Marks]",
        "answer": "Rising proportion of casual daily-wage laborers; Factors: lack of formal jobs and displacement of small farmers.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks contributing factors):\n• Concept: The process whereby the proportion of casual wage laborers in the total workforce steadily increases over time at the expense of self-employment and regular salaried jobs.\n• Contributing Factors:\n  1. Lack of Formal Employment: Insufficient creation of regular, protected jobs in the organized industrial sector forces job-seekers into casual contract labor.\n  2. Displaced Smallholders: Marginal farmers suffering from unviable landholdings and farm distress are forced to work as casual wage laborers on construction sites and brick kilns."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "Explain any three strategies for achieving 'Sustainable Development' in India. [3 Marks]",
        "answer": "Use of non-conventional energy (solar/wind), LPG/Gobar gas in rural homes, and Biological pest control.",
        "explanation": "Marking Scheme (1 Mark each strategy):\n• 1. Non-Conventional Energy (Solar & Wind): Tapping India's abundant solar radiation via the International Solar Alliance and installing wind turbines to generate clean electricity without fossil emissions.\n• 2. Clean Rural Cooking Fuels (LPG & Biogas): Replacing traditional firewood and cow dung cakes with LPG (PM Ujjwala Yojana) and gobar gas, reducing indoor air pollution and protecting forests.\n• 3. Bio-Pest Control and Bio-Fertilizers: Using natural predators and neem-based biopesticides to manage agricultural pests without polluting soils and water tables."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "Explain the key features of the 'MGNREGA 2005' as an employment generation program. [3 Marks]",
        "answer": "Legal right to 100 days of unskilled work per rural household, 1/3 reserved for women, and mandatory unemployment allowance.",
        "explanation": "Marking Scheme (1 Mark per feature):\n• 1. Statutory Right to Work: Guarantees at least 100 days of guaranteed unskilled wage employment per financial year to every rural household volunteering for manual work.\n• 2. Gender Inclusion: Mandates that at least one-third of the total work opportunities must be reserved for women, paying equal wages.\n• 3. Unemployment Allowance: If the government fails to provide work within 15 days of application, the applicant is legally entitled to a daily unemployment cash allowance."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "What is 'Global Warming'? Mention its two major causes and two adverse consequences. [4 Marks]",
        "answer": "Rise in average planetary temperature; Causes: fossil fuel burning and deforestation; Consequences: polar ice melt and extreme weather events.",
        "explanation": "Marking Scheme (1 Mark concept + 1.5 Marks causes + 1.5 Marks consequences):\n• Concept: The gradual increase in the average temperature of the Earth's atmosphere and oceans caused by the accumulation of greenhouse gases (carbon dioxide, methane, nitrous oxide).\n• Causes:\n  1. Burning of fossil fuels (coal, petroleum) in power plants, factories, and vehicles.\n  2. Large-scale deforestation, which reduces the planet's capacity to absorb carbon dioxide.\n• Consequences:\n  1. Melting of polar ice sheets and glaciers, resulting in sea-level rise that threatens coastal cities.\n  2. Increased frequency and severity of extreme weather events (cyclones, droughts, and heatwaves)."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "Why is female workforce participation in India underreported in official statistics? [3 Marks]",
        "answer": "Women's non-market household work, unpaid farm labor, and social stigma around reporting female work.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Exclusion of Domestic Labor: Cooking, child rearing, fetching firewood, and household maintenance are treated as non-market activities, excluded from national income and workforce counts.\n• 2. Unpaid Family Farm Labor: Rural women contribute significantly to sowing, weeding, and cattle rearing on family farms, but are often categorized as dependents rather than economic workers.\n• 3. Social Norms: Cultural resistance in some regions leads male household heads to underreport women's informal economic activities."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "What is meant by the 'Informalisation of the Workforce'? Discuss the causes and serious socio-economic consequences of informalisation in India. [6 Marks]",
        "answer": "Concept of informalisation; Causes (lack of formal industrial jobs, subcontracting); Consequences (no social security, low wages, precarious conditions).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept + 2 Marks causes + 2 Marks consequences):\n• 1. Concept of Informalisation of Workforce [2 Marks]:\n  - The economic process where an increasing proportion of the total workforce is pushed into the informal sector, while the share of employment in the formal organized sector stagnates or shrinks.\n  - Over 90% of India's workforce operates in the informal sector, lacking written employment contracts and legal protections.\n• 2. Causes of Informalisation [2 Marks]:\n  - Inadequate Formal Job Creation: Organized industry and service sectors rely on capital-intensive technology, generating few regular salaried positions.\n  - Corporate Subcontracting: Modern corporations outsource non-core manufacturing and services to informal contractual vendors to avoid labor laws, minimum wages, and provident fund contributions.\n  - Agricultural Distress: Falling farm returns push smallholders into unorganized construction, retail, and informal delivery services.\n• 3. Socio-Economic Consequences [2 Marks]:\n  - Lack of Social Security: Informal workers have no statutory provident fund, pension, gratuity, or health insurance, leaving them vulnerable to health and income shocks.\n  - Low and Volatile Earnings: Absence of minimum wage enforcement keeps earnings low, perpetuating working poverty.\n  - Precarious Job Tenure: Workers can be terminated without notice or severance compensation, preventing long-term household economic security."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Define 'Sustainable Development'. Discuss Herman Daly's principles for achieving sustainable development. Explain four strategies adopted in India to promote sustainable development. [6 Marks]",
        "answer": "Definition; Daly's operational principles; 4 strategies: Solar/Wind power, Gobar gas, Urban CNG, and Biopesticides.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks definition & Daly's principles + 4 Marks Indian strategies):\n• 1. Sustainable Development & Herman Daly's Principles [2 Marks]:\n  - Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.\n  - Herman Daly's Principles:\n    (i) The harvest rate of renewable resources must not exceed their regeneration rate.\n    (ii) The emission of wastes must not exceed the absorptive capacity of the environment.\n    (iii) Non-renewable resources should be exploited at a rate equal to the development of renewable substitutes.\n• 2. Strategies Adopted in India [4 Marks (1 Mark each)]:\n  - (a) Solar and Wind Energy: Large-scale solar parks and rooftop installations, supported by the International Solar Alliance, generating clean power.\n  - (b) Rural Gobar Gas and Clean LPG (PM Ujjwala Yojana): Replacing polluting firewood with subsidized LPG and biogas, reducing indoor pollution and deforestation.\n  - (c) Urban CNG Public Transit: Mandating compressed natural gas for public buses, auto-rickshaws, and taxis to reduce urban vehicular emissions.\n  - (d) Traditional Knowledge and Bio-Pest Controls: Using neem-based biopesticides and organic compost to manage pests without chemical runoff."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Analyze the 'Employment Structure' of India across:\n(a) Self-Employed, Regular Salaried, and Casual Wage Laborers\n(b) Sectoral Distribution (Primary, Secondary, and Tertiary)\n(c) Gender Disparities in Workforce Participation [6 Marks]",
        "answer": "Comprehensive structural analysis across employment status, economic sectors, and gender participation gaps.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each part):\n• (a) By Status of Employment [2 Marks]:\n  - Self-Employed: Remains the largest segment (~52%), comprising smallholder farmers, independent shopkeepers, and artisans.\n  - Regular Salaried Employees: Account for roughly 24% of the workforce, offering steady income and social security in formal firms.\n  - Casual Wage Laborers: Make up roughly 24%, working on daily or temporary contracts with low job security.\n• (b) Sectoral Distribution [2 Marks]:\n  - Primary Sector (Agriculture): Continues to employ about 44-45% of the total workforce, but contributes less than 18% to GDP, reflecting low productivity per worker.\n  - Secondary Sector (Manufacturing & Construction): Employs roughly 25% of workers.\n  - Tertiary Sector (Services): Employs around 30% of the workforce, but generates over 54% of GDP, highlighting a productivity divide.\n• (c) Gender Disparities [2 Marks]:\n  - Female workforce participation (~25-30%) is substantially lower than male participation (~75-80%).\n  - Rural women exhibit higher participation than urban women due to subsistence farm labor requirements, and women's unpaid household and care work remains excluded from official employment statistics."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What is an 'Environmental Crisis'? Discuss the major environmental challenges facing India today, focusing on:\n(a) Land Degradation\n(b) Air Pollution\n(c) Loss of Biodiversity [6 Marks]",
        "answer": "Environmental crisis concept; In-depth analysis of Land Degradation, Air Pollution (CPCB findings), and Biodiversity loss.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks crisis concept + 1.5 Marks each challenge):\n• 1. Concept of Environmental Crisis [1.5 Marks]:\n  - Occurs when economic activities push resource extraction beyond ecological regeneration rates and waste generation beyond environmental absorptive capacity, causing resource depletion and pollution.\n• 2. Land Degradation [1.5 Marks]:\n  - Over 30% of India's landmass suffers from degradation, driven by deforestation, topsoil erosion, overgrazing, waterlogging, and soil salinization from excessive chemical fertilizers.\n• 3. Air Pollution [1.5 Marks]:\n  - Indian metropolitan cities rank among the world's most polluted, caused by vehicular emissions, coal-fired thermal power plants, construction dust, and seasonal agricultural stubble burning.\n  - High PM2.5 and PM10 concentrations cause widespread chronic respiratory illnesses.\n• 4. Loss of Biodiversity [1.5 Marks]:\n  - Expanding industrial projects, mining, and urban encroachment destroy natural habitats in the Western Ghats and Himalayan forests, threatening indigenous flora and fauna with extinction."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Critically examine 'MGNREGA 2005' as a macroeconomic policy instrument for employment generation and rural poverty alleviation. What are its major strengths and implementation challenges? [6 Marks]",
        "answer": "MGNREGA appraisal; Strengths (statutory guarantee, women empowerment, asset building) vs Challenges (wage delays, corruption, lack of durable assets).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks overview + 2 Marks strengths + 2 Marks challenges):\n• 1. Overview of MGNREGA [2 Marks]:\n  - Enacted in 2005 to legally guarantee at least 100 days of unskilled wage employment per year to every rural household volunteering for manual work.\n  - Operates as a demand-driven safety net, providing work within 15 days or paying a mandatory unemployment allowance.\n• 2. Major Strengths and Achievements [2 Marks]:\n  - Poverty Alleviation & Safety Net: Provides critical income support during agricultural off-seasons and drought years, checking distress rural migration.\n  - Women's Empowerment: Over 50% of person-days generated are utilized by rural women, who receive equal statutory wages directly in their bank accounts.\n  - Rural Asset Creation: Builds community water harvesting ponds, flood embankments, and village roads.\n• 3. Implementation Challenges and Bottlenecks [2 Marks]:\n  - Payment Delays: Administrative bottlenecks often delay wage transfers beyond the statutory 15-day limit, causing distress.\n  - Non-Durable Assets: Many projects suffer from poor engineering supervision, resulting in community assets that wash away during monsoons.\n  - Inadequate Budget Outlays: Budget allocations sometimes fail to keep pace with rural demand during economic slowdowns."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Discuss the 'Causes of Unemployment' in India. Suggest four practical policy measures to address educated and youth unemployment. [6 Marks]",
        "answer": "Causes: population growth, capital-intensive technology, stagnant agriculture, education-skill mismatch; Four practical policy remedies.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks causes + 3 Marks policy solutions):\n• 1. Major Causes of Unemployment [3 Marks]:\n  - Rapid Population Growth: A large youth cohort enters the job market annually, outstripping the economy's job-creation capacity.\n  - Capital-Intensive Industrial Growth: Industries prioritize automation to boost profit margins, limiting direct labor absorption.\n  - Skill-Mismatched Educational System: Rote-learning curricula produce degree holders lacking the technical and practical skills demanded by modern employers.\n  - Slow Growth of Non-Farm Rural Sectors: Agriculture remains overcrowded with disguised unemployment due to slow rural industrialization.\n• 2. Practical Policy Measures [3 Marks]:\n  - Vocational and Skill Training: Aligning polytechnic curricula with industry standards through initiatives like the Skill India Mission.\n  - Fostering Labor-Intensive Manufacturing: Providing tax incentives and credit to labor-absorbing sectors like apparel, leather, food processing, and tourism.\n  - Promoting Micro-Enterprises: Expanding subsidized credit schemes (such as PM Mudra Yojana) to help educated youths launch independent startups.\n  - Public Capital Investments: Investing in rural logistics, cold storage, and digital infrastructure to stimulate localized economic activity."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "What is the 'Ozone Depletion' crisis? Explain the international response through the 'Montreal Protocol'. How does ozone depletion affect living organisms? [6 Marks]",
        "answer": "Ozone depletion causes; Montreal Protocol 1987; Biological impacts (skin cancer, cataracts, phytoplankton damage).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks crisis & causes + 2 Marks Montreal Protocol + 2 Marks biological impacts):\n• 1. Ozone Depletion and Causes [2 Marks]:\n  - Refers to the thinning of the stratospheric ozone layer (O3), particularly the formation of the 'ozone hole' over Antarctica.\n  - Caused by the release of synthetic chemical compounds containing chlorine and bromine, primarily Chlorofluorocarbons (CFCs) and halons used in refrigeration, air conditioning, and aerosol propellants.\n• 2. International Response: Montreal Protocol (1987) [2 Marks]:\n  - An international treaty agreed in 1987 under which signatory nations committed to freeze and phase out the production and consumption of ozone-depleting substances.\n  - Widely regarded as the most successful multilateral environmental agreement, leading to the gradual recovery of the stratospheric ozone layer.\n• 3. Adverse Biological Impacts [2 Marks]:\n  - Increased exposure to solar UV radiation causes elevated rates of skin cancers, melanoma, and ocular cataracts in humans.\n  - Damages marine ecosystems by inhibiting the photosynthesis of phytoplankton, disrupting aquatic food chains and damaging crop productivity."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "Differentiate between 'Disguised Unemployment' and 'Open Unemployment'. How can the surplus agricultural workforce be productively absorbed into other sectors? [6 Marks]",
        "answer": "Distinction; Absorption strategies: agro-processing, livestock, rural infrastructure, and vocational skill centers.",
        "explanation": "Step-by-Step Marking Scheme (3 Marks distinction + 3 Marks absorption strategies):\n• 1. Disguised vs. Open Unemployment [3 Marks]:\n  - Disguised Unemployment: A situation where more laborers work on a farm than necessary; workers appear fully employed, but their marginal productivity is zero. Withdrawing them causes no drop in total farm output.\n  - Open Unemployment: A situation where an able-bodied person is actively seeking work at prevailing market wage rates but cannot find any employment. The individual is visibly and entirely idle.\n• 2. Absorbing Surplus Agricultural Labor [3 Marks]:\n  - Developing Agro-Processing Industries: Setting up fruit pulping, dairy packaging, and grain milling facilities in rural towns creates non-farm jobs.\n  - Promoting Animal Husbandry and Fisheries: Shifting farm hands into livestock, commercial poultry, and aquaculture provides higher per-hour returns.\n  - Public Rural Infrastructure Works: Public works projects (canals, rural roads, warehouses) absorb unskilled labor and improve farm logistics.\n  - Skill Training for Urban Services: Establishing technical training centers to qualify rural youth for manufacturing, assembly, and service-sector jobs."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "What is 'Global Warming'? Explain the role of the 'Kyoto Protocol' and discuss four major anthropogenic causes of climate change. [6 Marks]",
        "answer": "Global warming concept; Kyoto Protocol; Four anthropogenic causes: Fossil fuels, Deforestation, Industrial pollutants, and Livestock methane.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks concept & Kyoto Protocol + 4 Marks causes):\n• 1. Concept of Global Warming & The Kyoto Protocol [2 Marks]:\n  - The sustained rise in the average surface temperature of the Earth driven by increased atmospheric concentrations of greenhouse gases.\n  - The Kyoto Protocol (1997) set legally binding targets for industrialized countries to reduce aggregate greenhouse gas emissions below 1990 benchmark levels.\n• 2. Four Anthropogenic Causes [4 Marks (1 Mark each)]:\n  - (a) Fossil Fuel Combustion: Burning coal, petroleum, and natural gas in power plants, industrial boilers, and motor vehicles emits billions of tonnes of carbon dioxide.\n  - (b) Large-Scale Deforestation: Clearing forests for commercial agriculture and urban sprawl eliminates vital carbon sinks that absorb CO2.\n  - (c) Livestock Farming and Agriculture: Enteric fermentation in cattle and wet flooded paddy fields generate significant volumes of methane (CH4).\n  - (d) Synthetic Industrial Gases: The emission of hydrofluorocarbons (HFCs), perfluorocarbons (PFCs), and sulfur hexafluoride from refrigeration and manufacturing."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Explain the role of the 'Central Pollution Control Board' (CPCB) in environmental protection in India. Mention four functions performed by the CPCB. [6 Marks]",
        "answer": "Establishment in 1974; Four key functions: Water/air monitoring, Industrial standards, Technical advisory, and Public awareness.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks background + 4 Marks functions):\n• 1. Background of the CPCB [2 Marks]:\n  - Established in September 1974 under the Water (Prevention and Control of Pollution) Act, and later entrusted with powers under the Air (Prevention and Control of Pollution) Act, 1981.\n  - Serves as the apex statutory technical body advising the Central Government on environmental pollution prevention, abatement, and control.\n• 2. Four Major Functions [4 Marks (1 Mark each)]:\n  - (a) Air and Water Quality Monitoring: Operates nationwide networks (NAMP and NWMP) to monitor ambient air quality and water conditions across river basins.\n  - (b) Setting Emission & Effluent Standards: Lays down statutory discharge standards for industrial effluents, vehicular emissions, and hazardous waste disposal.\n  - (c) Technical Assistance & Enforcement: Provides technical guidance to State Pollution Control Boards (SPCBs) and conducts on-site audits of polluting industrial clusters.\n  - (d) Disseminating Environmental Data & Awareness: Publishes air quality indices (AQI), environmental status reports, and technical manuals to inform public policy."
      }
    ]
  },
  {
    "info": {
      "chapter_num": 12,
      "book": "Part B: Indian Economic Development",
      "title": "Comparative Development Experiences of India and Its Neighbours",
      "author": "NCERT Indian Economic Development",
      "weightage_unit": "Unit 8: Development Experience of India: A Comparison with Neighbours (8 Marks)"
    },
    "questions": [
      {
        "id": 1,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "In which year did China initiate its landmark market-oriented economic reforms under Deng Xiaoping?",
        "options": [
          "(a) 1951",
          "(b) 1978",
          "(c) 1988",
          "(d) 1991"
        ],
        "answer": "(b) 1978",
        "explanation": "China initiated economic reforms in 1978, followed by Pakistan in 1988 and India in 1991."
      },
      {
        "id": 2,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "The 'Great Leap Forward' (GLF) campaign launched in China in 1958 aimed at:",
        "options": [
          "(a) Promoting private capitalism",
          "(b) Rapid industrialization of the country on a massive scale by encouraging backyard furnaces and establishing rural communes",
          "(c) Banning all agriculture",
          "(d) Promoting foreign imports"
        ],
        "answer": "(b) Rapid industrialization of the country on a massive scale by encouraging backyard furnaces and establishing rural communes",
        "explanation": "Launched by Mao Zedong in 1958, the GLF sought to transform agrarian China into an industrial power by encouraging households to set up backyard steel furnaces and organizing farmers into collective agricultural communes."
      },
      {
        "id": 3,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Why did China's population growth rate drop sharply to around 0.5% per annum in the late twentieth century?",
        "options": [
          "(a) Due to large-scale outward migration",
          "(b) Due to the strict enforcement of the 'One-Child Policy' introduced in 1979",
          "(c) Due to high infant mortality",
          "(d) Due to economic recessions"
        ],
        "answer": "(b) Due to the strict enforcement of the 'One-Child Policy' introduced in 1979",
        "explanation": "China's One-Child Policy (introduced in 1979) successfully curtailed population growth, though it created long-term demographic challenges like an aging population and a skewed sex ratio."
      },
      {
        "id": 4,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Which of the three countries—India, China, or Pakistan—has the highest Human Development Index (HDI) ranking and score?",
        "options": [
          "(a) India",
          "(b) Pakistan",
          "(c) China",
          "(d) Both India and Pakistan equally"
        ],
        "answer": "(c) China",
        "explanation": "China ranks in the High Human Development category (HDI rank ~75-80), far ahead of India (rank ~130-134, Medium) and Pakistan (rank ~160-164)."
      },
      {
        "id": 5,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "Under the 'Commune System' of agriculture in China:",
        "options": [
          "(a) Land was privately owned by foreign multinationals",
          "(b) Land was collectively owned and cultivated jointly by rural households who pooled their labor",
          "(c) Farmers worked as unpaid slaves in factories",
          "(d) Individual farmers owned thousands of acres privately"
        ],
        "answer": "(b) Land was collectively owned and cultivated jointly by rural households who pooled their labor",
        "explanation": "Under the commune system, rural agricultural land was collectively owned, and roughly 26,000 communes organized millions of farm households into collective cultivation units."
      },
      {
        "id": 6,
        "type": "MCQ",
        "tag": "CBSE 2022 Term-1",
        "question": "In which economic sector has China established global dominance, earning the title 'Workshop of the World'?",
        "options": [
          "(a) Agricultural Sector",
          "(b) Secondary / Manufacturing Sector",
          "(c) Tourism Sector",
          "(d) Mining Sector"
        ],
        "answer": "(b) Secondary / Manufacturing Sector",
        "explanation": "China's export-driven manufacturing policies and Special Economic Zones (SEZs) made industry contribute ~40% of GDP, establishing it as the global manufacturing workshop."
      },
      {
        "id": 7,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "When did India, Pakistan, and China launch their respective First Five Year Plans?",
        "options": [
          "(a) India in 1951, China in 1953, Pakistan in 1956",
          "(b) India in 1947, China in 1949, Pakistan in 1950",
          "(c) India in 1956, China in 1951, Pakistan in 1953",
          "(d) All three launched in 1950"
        ],
        "answer": "(a) India in 1951, China in 1953, Pakistan in 1956",
        "explanation": "India launched its First Five Year Plan in 1951, China in 1953, and Pakistan launched its first plan (Medium Term Plan) in 1956."
      },
      {
        "id": 8,
        "type": "MCQ",
        "tag": "CBSE 2020 Delhi",
        "question": "Which country introduced economic reforms FIRST among India, China, and Pakistan?",
        "options": [
          "(a) India (1991)",
          "(b) Pakistan (1988)",
          "(c) China (1978)",
          "(d) All initiated in 1990"
        ],
        "answer": "(c) China (1978)",
        "explanation": "China was the pioneer, launching reforms in 1978, followed by Pakistan in 1988, and India in 1991."
      },
      {
        "id": 9,
        "type": "MCQ",
        "tag": "CBSE 2020 AI",
        "question": "What is the primary reason for the lowest population density in China compared to India and Pakistan?",
        "options": [
          "(a) China has very few people",
          "(b) China possesses an immense geographic land area (nearly three times the size of India)",
          "(c) Most Chinese live abroad",
          "(d) Half of China is underwater"
        ],
        "answer": "(b) China possesses an immense geographic land area (nearly three times the size of India)",
        "explanation": "Although populous, China's massive landmass (~9.6 million sq km) gives it a lower population density (~150 persons/sq km) than India (~435) or Pakistan (~280)."
      },
      {
        "id": 10,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Under the 'Dual Pricing System' introduced during China's reform process:",
        "options": [
          "(a) Goods were sold at two prices based on social class",
          "(b) Farmers and industrial units bought and sold a fixed quota quantity at government-fixed prices, while surplus production was traded at market prices",
          "(c) Domestic prices were doubled for foreign tourists",
          "(d) Export prices were kept zero"
        ],
        "answer": "(b) Farmers and industrial units bought and sold a fixed quota quantity at government-fixed prices, while surplus production was traded at market prices",
        "explanation": "Dual pricing required enterprises to fulfill state production quotas at administrative prices, while allowing surplus output to be sold at market-determined prices."
      },
      {
        "id": 11,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "The 'Great Proletarian Cultural Revolution' (1966–1976) introduced in China by Mao Zedong involved:",
        "options": [
          "(a) Promoting American Hollywood films",
          "(b) Sending urban students, intellectuals, and professionals to the countryside to work with and learn from peasants",
          "(c) Privatizing all universities",
          "(d) Banning all factories"
        ],
        "answer": "(b) Sending urban students, intellectuals, and professionals to the countryside to work with and learn from peasants",
        "explanation": "Mao launched the Cultural Revolution in 1966 to maintain ideological purity, dispatching millions of urban youth and professionals to rural villages for ideological re-education."
      },
      {
        "id": 12,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which factor contributed significantly to the economic recovery and foreign exchange inflows in Pakistan during the 1980s?",
        "options": [
          "(a) High-tech software exports",
          "(b) Inward worker remittances from Pakistani emigrants in the Middle East and external financial aid from Western nations",
          "(c) Gold mining",
          "(d) Automobile manufacturing"
        ],
        "answer": "(b) Inward worker remittances from Pakistani emigrants in the Middle East and external financial aid from Western nations",
        "explanation": "Pakistan's growth in the 1970s and 1980s was heavily supported by remittances from expatriates in the Persian Gulf and bilateral aid during the Afghan-Soviet conflict."
      },
      {
        "id": 13,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which country among the three has the HIGHEST proportion of its workforce still engaged in the Agricultural sector?",
        "options": [
          "(a) China",
          "(b) India",
          "(c) Pakistan",
          "(d) All three have identical shares"
        ],
        "answer": "(b) India",
        "explanation": "India retains the highest proportion of its workforce in agriculture (~44-45%), compared to ~25% in China and ~37% in Pakistan."
      },
      {
        "id": 14,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Maternal Mortality Rate (MMR) is the LOWEST in which of the following countries?",
        "options": [
          "(a) India",
          "(b) Pakistan",
          "(c) China",
          "(d) Equal in all three"
        ],
        "answer": "(c) China",
        "explanation": "China's investments in universal primary healthcare and institutional delivery have brought its MMR down to ~18 per 100,000 live births, far lower than India (~103) and Pakistan (~154)."
      },
      {
        "id": 15,
        "type": "MCQ",
        "tag": "CBSE 2017",
        "question": "Why did China establish 'Special Economic Zones' (SEZs) along its coastal regions during the reform era?",
        "options": [
          "(a) To quarantine citizens during epidemics",
          "(b) To attract foreign direct investment, advanced modern technology, and promote export-oriented manufacturing with tax holidays",
          "(c) To build naval military bases",
          "(d) To store buffer food stocks"
        ],
        "answer": "(b) To attract foreign direct investment, advanced modern technology, and promote export-oriented manufacturing with tax holidays",
        "explanation": "China set up coastal SEZs (like Shenzhen) offering tax concessions, duty-free imports, and streamlined logistics to attract multinational export manufacturers."
      },
      {
        "id": 16,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "The Sex Ratio (females per 1,000 males) in India, China, and Pakistan reflects:",
        "options": [
          "(a) A massive surplus of female population",
          "(b) An unfavorable and skewed sex ratio against females due to historical son-preference, female feticide, and social bias",
          "(c) Exactly 1,000 females per 1,000 males in all three countries",
          "(d) Rapid natural decline of male births"
        ],
        "answer": "(b) An unfavorable and skewed sex ratio against females due to historical son-preference, female feticide, and social bias",
        "explanation": "All three Asian neighbors show skewed sex ratios (~940 to 950 females per 1,000 males) driven by cultural son-preference, selective abortion, and healthcare disparities."
      },
      {
        "id": 17,
        "type": "MCQ",
        "tag": "CBSE 2016",
        "question": "Which of the following is a key reason for Pakistan's volatile and erratic economic growth rate in recent decades?",
        "options": [
          "(a) Lack of access to the sea",
          "(b) Political instability, heavy defense spending, reliance on foreign aid/remittances, and volatile agricultural harvests",
          "(c) Excess of high-tech industries",
          "(d) Complete ban on commercial banking"
        ],
        "answer": "(b) Political instability, heavy defense spending, reliance on foreign aid/remittances, and volatile agricultural harvests",
        "explanation": "Political instability, security costs, balance of payments deficits, and reliance on volatile crop weather have hindered sustained growth in Pakistan."
      },
      {
        "id": 18,
        "type": "MCQ",
        "tag": "CBSE 2015",
        "question": "What led China to relax its One-Child Policy in 2016 (permitting two children) and in 2021 (permitting three children)?",
        "options": [
          "(a) A dramatic collapse in food production",
          "(b) Alarming demographic aging of the population and a shrinking working-age labor force",
          "(c) Pressure from the United Nations",
          "(d) Demand from foreign corporate employers"
        ],
        "answer": "(b) Alarming demographic aging of the population and a shrinking working-age labor force",
        "explanation": "Decades of the One-Child Policy created a rapidly aging demographic pyramid with too few working-age citizens to support elderly dependents, prompting policy relaxation."
      },
      {
        "id": 19,
        "type": "MCQ",
        "tag": "CBSE 2024",
        "question": "What is the level of 'Urbanization' in China compared to India and Pakistan?",
        "options": [
          "(a) China is highest (~65%), Pakistan (~37%), India (~35%)",
          "(b) India is highest (~70%), China (~30%)",
          "(c) Pakistan is highest (~80%)",
          "(d) All three have identical urbanization of 20%"
        ],
        "answer": "(a) China is highest (~65%), Pakistan (~37%), India (~35%)",
        "explanation": "China has urbanized rapidly, with roughly 65% of its population living in urban centers, compared to ~37% in Pakistan and ~35% in India."
      },
      {
        "id": 20,
        "type": "MCQ",
        "tag": "CBSE 2023",
        "question": "Life Expectancy at birth is HIGHEST in which country among the three?",
        "options": [
          "(a) China (~78 years)",
          "(b) India (~70 years)",
          "(c) Pakistan (~66 years)",
          "(d) Equal across all three"
        ],
        "answer": "(a) China (~78 years)",
        "explanation": "China's life expectancy at birth is ~78 years, compared to ~70 years in India and ~66 years in Pakistan."
      },
      {
        "id": 21,
        "type": "MCQ",
        "tag": "CBSE 2022",
        "question": "In the 1970s, Pakistan pursued a policy of 'Nationalization' of capital goods industries under which political leader?",
        "options": [
          "(a) Muhammad Ali Jinnah",
          "(b) Zulfikar Ali Bhutto",
          "(c) General Zia-ul-Haq",
          "(d) Imran Khan"
        ],
        "answer": "(b) Zulfikar Ali Bhutto",
        "explanation": "Zulfikar Ali Bhutto's government in the 1970s carried out extensive nationalization of heavy industries, insurance companies, and commercial banks."
      },
      {
        "id": 22,
        "type": "MCQ",
        "tag": "CBSE 2021",
        "question": "Which of the following sectors contributes the LARGEST share to the Gross Domestic Product (GDP) in India?",
        "options": [
          "(a) Agriculture Sector",
          "(b) Secondary / Industrial Sector",
          "(c) Tertiary / Service Sector",
          "(d) Mining Sector"
        ],
        "answer": "(c) Tertiary / Service Sector",
        "explanation": "India's service sector contributes over 54% of total GDP, driving the economy forward even as agriculture remains the largest employer."
      },
      {
        "id": 23,
        "type": "MCQ",
        "tag": "CBSE 2020",
        "question": "What is the primary indicator used to measure the standard of living in the calculation of the Human Development Index (HDI)?",
        "options": [
          "(a) Gross National Income (GNI) per capita in Purchasing Power Parity (PPP) US Dollars",
          "(b) Total stock of gold reserves",
          "(c) Military expenditure per capita",
          "(d) Number of private vehicles per family"
        ],
        "answer": "(a) Gross National Income (GNI) per capita in Purchasing Power Parity (PPP) US Dollars",
        "explanation": "HDI assesses living standards using Gross National Income (GNI) per capita adjusted for Purchasing Power Parity (PPP US$).</explanation>"
      },
      {
        "id": 24,
        "type": "MCQ",
        "tag": "CBSE 2019",
        "question": "Before initiating market reforms in 1978, how did China ensure widespread basic social security for its population?",
        "options": [
          "(a) By distributing free oil to all citizens",
          "(b) Through universal public provision of basic primary healthcare, collective food distribution through communes, and basic schooling",
          "(c) By borrowing heavily from foreign banks",
          "(d) By privatizing all farmland"
        ],
        "answer": "(b) Through universal public provision of basic primary healthcare, collective food distribution through communes, and basic schooling",
        "explanation": "Prior to 1978, China built strong social foundations via 'barefoot doctors', commune food distribution, and universal primary schooling, establishing human capital for post-1978 growth."
      },
      {
        "id": 25,
        "type": "MCQ",
        "tag": "CBSE 2018",
        "question": "Which neighbor of India experienced the highest annual population growth rate (~2.0%) in recent decades?",
        "options": [
          "(a) China",
          "(b) Pakistan",
          "(c) Sri Lanka",
          "(d) Japan"
        ],
        "answer": "(b) Pakistan",
        "explanation": "Pakistan maintains the highest annual population growth rate (~1.8-2.0%) and highest fertility rate (~3.4) among the three countries."
      },
      {
        "id": 26,
        "type": "AR",
        "tag": "CBSE 2024",
        "question": "Assertion (A): China's introduction of the 'One-Child Policy' in 1979 effectively arrested its rapid population growth.\nReason (R): The policy led to an unintended long-term demographic distortion, creating an aging population and a skewed sex ratio that forced China to ease birth restrictions.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
        "explanation": "Both statements are true. The policy brought fertility rates down, but the resulting aging labor force and gender imbalance required successive policy relaxations."
      },
      {
        "id": 27,
        "type": "AR",
        "tag": "CBSE 2023",
        "question": "Assertion (A): India's post-independence structural transformation differed markedly from the conventional historical pathway of developed nations.\nReason (R): Developed economies transitioned from agriculture to manufacturing and then to services, whereas India bypassed the manufacturing-heavy phase, jumping directly from agriculture to service-led growth.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Unlike China and the West, India's secondary sector remained modest, while services expanded to over 54% of GDP."
      },
      {
        "id": 28,
        "type": "AR",
        "tag": "CBSE 2022",
        "question": "Assertion (A): China outperforms both India and Pakistan on almost all major Human Development Indicators.\nReason (R): Prior to 1978, China established strong public foundations in universal basic primary education, decentralized healthcare, and social safety nets.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Early social investments in health and literacy enabled China's workforce to absorb industrial employment rapidly after market reforms."
      },
      {
        "id": 29,
        "type": "AR",
        "tag": "CBSE 2021",
        "question": "Assertion (A): Pakistan's long-term economic growth trajectory has been steady, stable, and completely immune to external shocks.\nReason (R): Pakistan developed a self-sufficient domestic capital goods manufacturing sector that eliminates reliance on foreign aid.",
        "options": [
          "(a) Both (A) and (R) are true",
          "(b) Both (A) and (R) are false",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(b) Both (A) and (R) are false",
        "explanation": "Both statements are false. Pakistan's growth has been volatile, hampered by political instability, fiscal deficits, and dependence on foreign aid and remittances."
      },
      {
        "id": 30,
        "type": "AR",
        "tag": "CBSE 2020",
        "question": "Assertion (A): The sex ratio across India, China, and Pakistan is biased against females.\nReason (R): Cultural preferences for male heirs, sex-selective abortions, and neglect of female nutrition and health persist across the region.",
        "options": [
          "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
          "(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)",
          "(c) (A) is true but (R) is false",
          "(d) (A) is false but (R) is true"
        ],
        "answer": "(a) Both (A) and (R) are true and (R) is the correct explanation of (A)",
        "explanation": "Both statements are true. Deep-rooted patriarchal attitudes and son-preference across all three countries depress the female-to-male ratio below 950 per 1,000."
      },
      {
        "id": 31,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "Explain the 'Great Leap Forward' (GLF) campaign initiated in China in 1958. What were its two main components? [3 Marks]",
        "answer": "Massive industrialization campaign; Components: Backyard steel furnaces and Rural agricultural communes.",
        "explanation": "Marking Scheme (1 Mark concept + 2 Marks components):\n• Concept: Launched by Mao Zedong in 1958 to transform agrarian China into an industrialized socialist power.\n• Two Main Components:\n  1. Backyard Furnaces: Citizens were encouraged to set up backyard steel furnaces in homes and courtyards to expand steel production.\n  2. Commune System: In rural areas, 26,000 communes were established where farm households pooled land and labor for collective cultivation."
      },
      {
        "id": 32,
        "type": "SA",
        "tag": "CBSE 2024",
        "question": "What is the 'Dual Pricing System' introduced in China during the reform period? [3 Marks]",
        "answer": "Two-tier pricing: Quota production bought/sold at state-fixed prices; Surplus traded freely at market prices.",
        "explanation": "Marking Scheme (1.5 Marks mechanism + 1.5 Marks purpose):\n• Mechanism: Under China's economic reforms, farmers and industrial enterprises were required to sell a specified production quota to the state at administrative prices, and buy quota inputs at fixed state rates. All surplus production beyond the quota could be sold freely in the open market at prevailing market prices.\n• Purpose: Gradually introduced market incentives and price discovery into the socialist economy without triggering sudden hyperinflation or hoarding."
      },
      {
        "id": 33,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Compare the 'Demographic Indicators' of India and China regarding Population Growth Rate and Sex Ratio. [3 Marks]",
        "answer": "Population Growth: China is lower (~0.5%) vs India (~1.0%); Sex Ratio: Both unfavorable against females (~949 in China vs ~948 in India).",
        "explanation": "Marking Scheme (1.5 Marks each indicator):\n• 1. Annual Population Growth Rate: China's population growth rate is significantly lower (~0.4-0.5% per annum) due to the strict enforcement of the One-Child Policy since 1979. India's population growth rate is higher at ~1.0-1.2% per year.\n• 2. Sex Ratio: Both countries display unfavorable sex ratios against females (China has ~949 females per 1,000 males, and India has ~940-948 females per 1,000 males), driven by cultural son-preference and sex-selective practices."
      },
      {
        "id": 34,
        "type": "SA",
        "tag": "CBSE 2023",
        "question": "Explain the role of 'Special Economic Zones' (SEZs) in the economic transformation of China. [3 Marks]",
        "answer": "Attracted massive Foreign Direct Investment (FDI), modern technology, and built world-class export manufacturing infrastructure.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Inflow of Foreign Direct Investment: Coastal SEZs (like Shenzhen and Zhuhai) offered tax holidays, cheap land, and duty-free inputs, attracting foreign multinational capital.\n• 2. Export-Led Industrialization: Transformed China into a global export hub for consumer goods, textiles, and electronics.\n• 3. Technology Transfer: Facilitated the transfer of modern Western industrial manufacturing techniques to domestic Chinese enterprises."
      },
      {
        "id": 35,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "State any three common developmental strategies shared by India, Pakistan, and China in their initial planning phases. [3 Marks]",
        "answer": "Centralized five-year planning, Dominance of the public sector, and Inward-looking import substitution trade strategies.",
        "explanation": "Marking Scheme (1 Mark each strategy):\n• 1. Adoption of Five-Year Plans: All three nations initiated centralized economic planning (India in 1951, China in 1953, Pakistan in 1956).\n• 2. Leading Role of the Public Sector: All three assigned the state a dominant role in building basic heavy industries and infrastructure.\n• 3. Inward-Looking Trade Policy: Initially protected domestic infant industries through high tariffs and import controls to achieve self-reliance."
      },
      {
        "id": 36,
        "type": "SA",
        "tag": "CBSE 2022",
        "question": "What were the adverse socio-demographic consequences of the 'One-Child Policy' in China? [3 Marks]",
        "answer": "Aging population, shrinking working-age workforce, and skewed gender imbalance.",
        "explanation": "Marking Scheme (1 Mark per consequence):\n• 1. Rapid Population Aging: Created a top-heavy demographic pyramid with a rising proportion of elderly citizens requiring pensions and healthcare.\n• 2. Shrinking Labor Force: Reduced the supply of young, working-age laborers, pushing up industrial wage rates.\n• 3. Gender Imbalance: Strong traditional preference for male heirs led to sex-selective abortions, resulting in millions more men than women."
      },
      {
        "id": 37,
        "type": "SA",
        "tag": "CBSE 2020",
        "question": "Why has Pakistan's economic growth rate lagged behind India and China in recent decades? State three reasons. [3 Marks]",
        "answer": "Political instability, heavy debt and defense expenditures, and reliance on foreign aid and remittances.",
        "explanation": "Marking Scheme (1 Mark per reason):\n• 1. Political Instability & Security Challenges: Frequent changes in governance and internal security conflicts discouraged domestic and foreign private investments.\n• 2. Heavy Fiscal Burden: High defense spending and debt servicing crowd out public investment in primary education, health, and transport infrastructure.\n• 3. External Dependence: Heavy reliance on foreign remittances from the Middle East and multilateral loans leaves the economy exposed to external balance of payments shocks."
      },
      {
        "id": 38,
        "type": "SA",
        "tag": "CBSE 2019",
        "question": "How did China ensure high levels of Human Development even prior to its 1978 market reforms? [3 Marks]",
        "answer": "Universal primary healthcare ('barefoot doctors'), collective food security through communes, and universal primary schooling.",
        "explanation": "Marking Scheme (1 Mark per point):\n• 1. Universal Primary Healthcare: Community-based 'barefoot doctors' provided preventive and basic curative health services to rural villages, cutting infant mortality.\n• 2. Equitable Food Distribution: The commune system pooled agricultural harvests and guaranteed basic grain rations to all members, preventing famines.\n• 3. Mass Schooling: Universal primary education achieved high literacy rates, equipping the workforce with skills needed for industrialization post-1978."
      },
      {
        "id": 39,
        "type": "SA",
        "tag": "CBSE 2018",
        "question": "Explain the sectoral shift in GDP and employment in India compared to China. [3 Marks]",
        "answer": "China shifted labor to manufacturing (~40% of GDP); India shifted to services (~54% of GDP) while retaining ~44% of labor in agriculture.",
        "explanation": "Marking Scheme (1.5 Marks China + 1.5 Marks India):\n• 1. China's Sectoral Shift: Transitioned out of agriculture into secondary manufacturing (which accounts for ~40% of GDP and ~28% of employment) and services (~54% of GDP), absorbing millions of rural workers into factory production.\n• 2. India's Sectoral Shift: Bypassed the manufacturing stage, with services driving GDP growth (~54%), while agriculture still employs ~44-45% of the workforce, creating a labor-productivity mismatch."
      },
      {
        "id": 40,
        "type": "SA",
        "tag": "CBSE 2017",
        "question": "What is the 'Great Proletarian Cultural Revolution'? Why was it introduced in China? [3 Marks]",
        "answer": "Ideological campaign (1966-76); Urban youth sent to countryside to learn from peasants; Aimed at countering capitalist tendencies.",
        "explanation": "Marking Scheme (1.5 Marks concept + 1.5 Marks purpose):\n• Concept: A socio-political campaign launched by Mao Zedong between 1966 and 1976 that mobilized Red Guards and sent students, professionals, and intellectuals to rural villages to perform manual labor alongside peasants.\n• Purpose: Mao sought to purge revisionist elements, eliminate bureaucratic elitism, and reinforce socialist ideology within the Communist Party and Chinese society."
      },
      {
        "id": 41,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Compare the developmental trajectories of India, China, and Pakistan across:\n(a) Initial Planning Frameworks and Timeline of Reforms\n(b) Sectoral Contribution to GDP (Agriculture, Industry, Services)\n(c) Occupational Distribution of Workforce [6 Marks]",
        "answer": "Detailed comparative analysis across Planning/Reforms, Sectoral GDP contributions, and Workforce distribution across the 3 nations.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each parameter):\n• (a) Initial Planning & Timeline of Reforms [2 Marks]:\n  - Planning: India began 5-year plans in 1951; China in 1953; Pakistan in 1956. All three emphasized public sector dominance and import substitution.\n  - Reform Timeline: China reformed earliest in 1978; Pakistan initiated reforms in 1988; India introduced comprehensive LPG reforms in 1991.\n• (b) Sectoral Contribution to GDP [2 Marks]:\n  - Agriculture: China's share is ~7-8%, India's ~16-18%, Pakistan's ~22-24%.\n  - Industry: China leads with ~38-40% of GDP ('Workshop of the World'), India ~26-28%, Pakistan ~18-20%.\n  - Services: Contributes over 54% of GDP in India, ~53-54% in China, and ~54% in Pakistan.\n• (c) Occupational Distribution of Workforce [2 Marks]:\n  - India retains the largest agricultural workforce (~44-45%), with 25% in industry and 30% in services.\n  - China shifted labor out of agriculture (~25%) into manufacturing (~28%) and services (~47%).\n  - Pakistan employs ~37% in agriculture, ~26% in industry, and ~37% in services."
      },
      {
        "id": 42,
        "type": "LA",
        "tag": "CBSE 2024",
        "question": "Examine the factors behind China's rapid economic ascent into the world's second-largest economy. What structural reforms were key to its success? [6 Marks]",
        "answer": "Early social investments (health/education), Phased market reforms, Commune land division, Dual pricing, and Coastal SEZs.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks pre-reform foundation + 4 Marks structural reforms):\n• 1. Pre-Reform Social Foundations [2 Marks]:\n  - Prior to 1978, public healthcare ('barefoot doctors') and universal primary schooling built a healthy, literate workforce.\n  - The commune system established an egalitarian social structure that eliminated extreme rural landlessness.\n• 2. Phased and Measured Market Reforms (1978 onward) [4 Marks (1 Mark each)]:\n  - (a) Agricultural Reforms: Commune lands were divided into small plots leased to individual households; farmers kept and sold surplus output after meeting state quotas, raising farm incomes.\n  - (b) Dual Pricing System: Fixed quota production was transacted at state-administered prices, while surplus output was traded at market prices, introducing market incentives gradually.\n  - (c) Town and Village Enterprises (TVEs): Permitted local rural collectives to set up light consumer manufacturing units, absorbing surplus farm labor.\n  - (d) Special Economic Zones (SEZs): Set up coastal zones offering tax holidays and streamlined logistics, attracting multinational FDI and driving export-led growth."
      },
      {
        "id": 43,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "Evaluate the 'Human Development Indicators' of India, China, and Pakistan. Present a comparative analysis based on HDI Rank, Life Expectancy, Infant Mortality Rate, and Maternal Mortality Rate. [6 Marks]",
        "answer": "Comparative evaluation of HDI rank, Life expectancy, IMR, and MMR; Explanation of China's lead over India and Pakistan.",
        "explanation": "Step-by-Step Marking Scheme (4 Marks comparative indicators + 2 Marks analytical evaluation):\n• 1. Comparative Human Development Indicators [4 Marks (1 Mark each)]:\n  - (a) HDI Rank and Category: China ranks ~75-80 (High Human Development tier); India ranks ~130-134 (Medium Human Development); Pakistan ranks ~160-164 (Medium/Low Human Development).\n  - (b) Life Expectancy at Birth: China leads with ~78 years, India records ~70 years, and Pakistan trails at ~66 years.\n  - (c) Infant Mortality Rate (IMR per 1,000 live births): China has achieved an IMR of ~7 per 1,000, India ~27 per 1,000, and Pakistan ~55 per 1,000.\n  - (d) Maternal Mortality Rate (MMR per 100,000 live births): China's MMR is ~18, India's is ~103, and Pakistan's is ~154.\n• 2. Analytical Evaluation [2 Marks]:\n  - China's leadership stems from sustained public investment in universal primary healthcare, hospital deliveries, and clean drinking water.\n  - India and Pakistan suffer from higher maternal and child mortality due to underfunded public health infrastructure and persistent rural disparities."
      },
      {
        "id": 44,
        "type": "LA",
        "tag": "CBSE 2023",
        "question": "What is the 'One-Child Policy' of China? Discuss its implementation, demographic successes, and unintended negative socio-economic consequences. [6 Marks]",
        "answer": "Implementation in 1979; Demographic success (population growth slowed to 0.5%); Negative consequences (aging population, labor shortages, skewed sex ratio).",
        "explanation": "Step-by-Step Marking Scheme (2 Marks policy & success + 4 Marks negative consequences):\n• 1. Policy Implementation & Demographic Success [2 Marks]:\n  - Introduced in 1979 to control rapid population growth through family size limits and financial penalties.\n  - Successfully reduced the annual population growth rate from over 2% to ~0.4-0.5%, avoiding tens of millions of births and easing pressure on resources.\n• 2. Unintended Negative Consequences [4 Marks (1 Mark each)]:\n  - (a) Severe Demographic Aging: Created a rapidly aging population, increasing pension obligations and healthcare costs on a shrinking working-age base.\n  - (b) Shrinking Working-Age Labor Force: Reduced the inflow of young factory workers, driving up industrial labor costs and threatening China's manufacturing competitiveness.\n  - (c) Skewed Sex Ratio: Traditional preference for sons led to sex-selective abortions, resulting in ~949 females per 1,000 males and a demographic deficit of brides.\n  - (d) Policy Reversals: Forced the Chinese government to ease rules to a 'Two-Child Policy' in 2016 and a 'Three-Child Policy' in 2021 to encourage births."
      },
      {
        "id": 45,
        "type": "LA",
        "tag": "CBSE 2022",
        "question": "Analyze the reasons for the slow and volatile economic growth of Pakistan compared to India and China. What structural weaknesses hinder Pakistan's development? [6 Marks]",
        "answer": "Political instability, heavy debt/defense outlays, reliance on foreign remittances/aid, volatile agriculture, and low human capital investments.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four structural weaknesses):\n• 1. Political Instability & Governance Volatility: Frequent shifts between military regimes and civilian administrations created uncertain economic policies and deterred foreign direct investment.\n• 2. Heavy Defense Outlays and Debt Burden: Geopolitical conflicts resulted in disproportionate budgetary allocations to defense and external debt servicing, crowding out social spending on education and healthcare.\n• 3. Excessive Reliance on External Remittances & Aid: Foreign exchange stability relied heavily on worker remittances from the Middle East and Western aid packages rather than export earnings, leaving the country exposed to external shocks.\n• 4. Neglect of Human Capital & Industrial Base: Public investment in science, technical institutes, and basic schooling remained low, leaving manufacturing narrow and dependent on weather-sensitive textiles and agriculture."
      },
      {
        "id": 46,
        "type": "LA",
        "tag": "CBSE 2021",
        "question": "Compare the 'Demographic Profile' of India, China, and Pakistan across:\n(a) Total Population and Population Density\n(b) Fertility Rate\n(c) Urbanization [6 Marks]",
        "answer": "Demographic comparison across Population & Density, Fertility Rate, and Urbanization.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each parameter):\n• (a) Total Population and Density [2 Marks]:\n  - India and China are the world's most populous nations (~1.4 billion each), while Pakistan has ~230 million.\n  - China has the lowest population density (~150 persons/sq km) due to its vast landmass. India has the highest density (~435 persons/sq km), and Pakistan records ~280 persons/sq km.\n• (b) Fertility Rate [2 Marks]:\n  - China has the lowest total fertility rate (~1.2-1.6 births per woman), well below the replacement rate (2.1).\n  - India's fertility rate has declined to ~2.0 births per woman.\n  - Pakistan records the highest fertility rate (~3.4-3.6 births per woman), driving rapid population growth.\n• (c) Urbanization [2 Marks]:\n  - China is the most urbanized (~65%), reflecting rapid industrial migration to coastal cities.\n  - Pakistan's urban population is ~37%.\n  - India's urbanization stands at ~35%, with the majority of citizens still living in rural villages."
      },
      {
        "id": 47,
        "type": "LA",
        "tag": "CBSE 2020",
        "question": "Discuss the 'Reform Experience of China'. How did China's dual pricing system, town and village enterprises (TVEs), and foreign trade reforms contribute to its economic expansion? [6 Marks]",
        "answer": "Detailed examination of Dual pricing, TVEs in rural industrialization, and Export promotion through SEZs.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each reform mechanism):\n• 1. Dual Pricing System [2 Marks]:\n  - Allowed state-owned enterprises and agricultural farmers to purchase inputs and sell output at government-mandated prices for fixed production quotas.\n  - Allowed all surplus production above quotas to be bought and sold at free market prices.\n  - Provided market incentives while maintaining supply stability and avoiding sudden price shocks.\n• 2. Town and Village Enterprises (TVEs) [2 Marks]:\n  - Locally managed collective enterprises established in rural towns to manufacture consumer goods and construction materials.\n  - Productively absorbed millions of surplus farm laborers released by agricultural commune de-collectivization, boosting rural incomes.\n• 3. Foreign Trade Reforms & Special Economic Zones [2 Marks]:\n  - Established coastal SEZs offering tax holidays, high-speed ports, and flexible labor rules to attract multinational corporations.\n  - Turned China into a global export powerhouse for manufactured electronics, machinery, and consumer goods."
      },
      {
        "id": 48,
        "type": "LA",
        "tag": "CBSE 2019",
        "question": "India's structural transformation is termed 'Service-Led', whereas China's is 'Manufacturing-Led'. Compare the economic implications of these two distinct growth models. [6 Marks]",
        "answer": "China's manufacturing-led model (mass labor absorption, physical infrastructure) vs India's service-led model (high skill, software/finance, jobless growth in mass labor).",
        "explanation": "Step-by-Step Marking Scheme (3 Marks China's model + 3 Marks India's model):\n• 1. China's Manufacturing-Led Model [3 Marks]:\n  - Focus: Built physical capital, power grids, and ports to become the global hub for factory manufacturing.\n  - Employment Absorption: Absorbed millions of semi-skilled and unskilled rural farm laborers into factory jobs, driving rapid poverty reduction.\n  - Implication: Created a broad industrial base, strong domestic supply chains, and large trade surpluses, but generated high environmental pollution.\n• 2. India's Service-Led Model [3 Marks]:\n  - Focus: Growth has been driven by high-skill services (software programming, finance, telecommunications, business outsourcing).\n  - Employment Limitation: High-skill services require technical degrees, failing to absorb India's semi-skilled rural workforce.\n  - Implication: Generated strong services export revenue, but left ~44% of the workforce trapped in low-productivity agriculture, contributing to 'jobless growth' in the formal industrial sector."
      },
      {
        "id": 49,
        "type": "LA",
        "tag": "CBSE 2018",
        "question": "Explain the major lessons that India and Pakistan can draw from China's development experience. [6 Marks]",
        "answer": "Lessons: Prioritize public health and basic education, Invest in world-class infrastructure, Attract export FDI, and Ensure political policy continuity.",
        "explanation": "Step-by-Step Marking Scheme (1.5 Marks each for four key lessons):\n• 1. Prioritize Basic Healthcare and Universal Education First: China built primary healthcare and mass literacy before liberalizing markets, equipping workers to enter modern manufacturing.\n• 2. Build World-Class Physical Infrastructure: China invested heavily in expressways, high-speed rail, ports, and power utilities, lowering logistical costs for exporters.\n• 3. Export-Oriented Manufacturing and FDI Promotion: Rather than relying on volatile foreign debt, China used coastal SEZs to attract multinational manufacturing and integrate with global supply chains.\n• 4. Policy Continuity and Agricultural Reforms: China reformed agriculture first (giving land contracts to families), generating rural purchasing power and capital that supported subsequent urban industrialization."
      },
      {
        "id": 50,
        "type": "LA",
        "tag": "CBSE 2017",
        "question": "Write short notes on: [6 Marks]\n(a) Commune System of Agriculture in China\n(b) Economic Reforms in Pakistan (1988)\n(c) The Great Proletarian Cultural Revolution",
        "answer": "Concise analytical notes on Commune system, Pakistan's 1988 reforms, and the Cultural Revolution.",
        "explanation": "Step-by-Step Marking Scheme (2 Marks each note):\n• (a) Commune System of Agriculture in China [2 Marks]:\n  - Initiated during the Great Leap Forward in 1958, grouping rural lands into 26,000 collective communes.\n  - Farm households pooled land, implements, and labor, receiving collective work-points. In the 1978 reforms, communes were disbanded and leased to individual households under the Household Responsibility System.\n• (b) Economic Reforms in Pakistan (1988) [2 Marks]:\n  - Initiated in 1988 under an IMF structural adjustment program, three years ahead of India.\n  - Focused on privatizing nationalized industries, removing price controls, and deregulating financial markets, though political instability hindered sustained growth.\n• (c) The Great Proletarian Cultural Revolution (1966–1976) [2 Marks]:\n  - Socio-political movement led by Mao Zedong to revive revolutionary fervor and purge bourgeois tendencies.\n  - Dispatched millions of urban students and intellectuals to the countryside to perform manual labor with peasants, disrupting higher education and economic production for a decade."
      }
    ]
  }
];
