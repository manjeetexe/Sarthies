const getData = (user) => {

  
  if (user.class === "10") {
    console.log(user.class)
    const data = {
      English: {
        lessons: {
          "Where the Mind is Without Fear.." : { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "The Thief’s Story": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "On Wings of Courage": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          " All the World’s a Stage": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
         " Joan of Arc": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "The Alchemy of Nature": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Animals": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Three Questions": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Connecting the Dots": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "The Pulley": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          " Let’s March": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Science and Spirituality": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Night of the Scorpion": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          " The Night I Met Einstein": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Stephen Hawking": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Will to Win": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Unbeatable Super Mom-Mary Kom": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Concert": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          " A Thing of Beauty is a Joy For Ever": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          " The Luncheon": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "World Heritage": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Height of the Ridiculous": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Old Man and The Sea: Book Review": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Gift of the Magi": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          }
        }
      },
      "Math 1": {
        lessons: {
          "Linear Equations in Two Variables": {
            Questions: [
              { Marks: "4", answer: "25", type: "MCQ", no: "1", question: "What is 5 × 5?", options: ["20", "25", "30", "35"] },
              { Marks: "4", answer: "12", type: "MCQ", no: "2", question: "What is 4 × 3?", options: ["10", "12", "14", "16"] },
            ]
          },
          "Quadratic Equations": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Arithmetic Progression": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Financial Planning": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          " Probability": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Statistics": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          }
        }
      },
      "Math 2": {
        lessons: {
          "Similarity": {
            Questions: [
              { Marks: "4", answer: "25", type: "MCQ", no: "1", question: "What is 5 × 5?", options: ["20", "25", "30", "35"] },
              { Marks: "4", answer: "12", type: "MCQ", no: "2", question: "What is 4 × 3?", options: ["10", "12", "14", "16"] },
            ]
          },
          "Pythagoras Theorem": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Circle": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Geometric Constructions": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Co-ordinate Geometry": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Trigonometry": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Mensuration": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          }
          
        }
      },
      "Science 1": {
        lessons: {
          "Gravitation": {
            Questions: [
              { Marks: "4", answer: "Water", type: "MCQ", no: "1", question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "N2"] },
              { Marks: "4", answer: "Earth", type: "MCQ", no: "2", question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
            ]
          },
          "Periodic Classification of Element": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Chemical reactions and equations": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Effects of electric current": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Heat": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Refraction of light": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Lenses": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Metallurgy": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Carbon compounds": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Space Missions": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          }

        }
      },
      "Science 2": {
        lessons: {
          "Heredity and Evolution": {
            Questions: [
              { Marks: "4", answer: "Gandhi", type: "MCQ", no: "1", question: "Who led India to independence?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"] },
              { Marks: "4", answer: "1947", type: "MCQ", no: "2", question: "In which year did India gain independence?", options: ["1942", "1947", "1950", "1960"] },
            ]
          },
          "Life Processes in Living Organisms Part –1": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          " Life Processes in Living Organisms Part – 2": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Environmental management": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Towards Green Energy": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Animal Classification": {
            Questions: [
              { Marks: "1", answer: "Arthropoda", type: "MCQ", no: "1", question: "The largest phylum in the animal kingdom is _______.", options: ["Annelida", "Aschelminthes", "Mollusca", "Arthropoda"] },
              { Marks: "1", answer: "Warm", type: "MCQ", no: "2", question: "Members of the class Aves are _______ blooded.", options: ["Cold", "Warm", "None of the Above", "Both A & B"] },
              { Marks: "1", answer: "Tube Feet", type: "MCQ", no: "3", question: " The locomotory organ in starfish is _______. ", options: ["Sucker", "Setae", "Tube Feet", "Tentacles"] },
              { Marks: "1", answer: " Annelida", type: "MCQ", no: "4", question: "Animals that are bilaterally symmetrical and have a segmented body belong to the phylum _______. ", options: ["Aschelminthes", "Cnidaria", "Hemichordata", "Annelida"] },
              { Marks: "1", answer: "Cellular", type: "MCQ", no: "5", question: "Sponges exhibit a _______ grade organization.", options: ["Tissue-Organ", "Organ-System", "Cellular", "Cell-Tissue"] },
              { Marks: "1", answer: "Appendages", type: "MCQ", no: "6", question: "Arthropods have jointed _______.", options: ["Clitellum", "Fin", "Appendages", "Tympanum"] },
              { Marks: "1", answer: "Tentacles", type: "MCQ", no: "7", question: "Hydra uses its _______ for capturing prey.", options: ["Collar cells", "Tentacles", " Suckers", "Cnidocytes"] },
              { Marks: "1", answer: "Vertebrata", type: "MCQ", no: "8", question: "Craniata is another Name for _______.", options: ["Cephalochordata", "Hemichordata", "Urochordata", "Vertebrata"] },
              { Marks: "1", answer: "Echinodermata", type: "MCQ", no: "9", question: "Body of Animals in _______ phylum is radially symmetrical in adult stage but they show bilateral symmetry in larval stage.", options: ["Echinodermata", "Mollusca", "Platyhelminthes", "Porifera"] },
              { Marks: "1", answer: "Mollusca", type: "MCQ", no: "10", question: "Phylum _______ is the second largest phylum in animal kingdom.", options: ["Mollusca", "Arthropoda", "Annelida", "Echinodermata"] },
              { Marks: "1", answer: "Platyhelminthes", type: "MCQ", no: "11", question: "Body of animals of phylum _______ is slender & flat like a leaf or strip.", options: ["Aschelminthes", "Cnidaria", "Annelida", "Platyhelminthes"] },
              { Marks: "1", answer: "Collar cells", type: "MCQ", no: "12", question: "Phylum Porifera have special types of cells called ________.", options: ["Ostia", "Oscula", "Cnidoblasts", "Collar cells"] },
              { Marks: "1", answer: "Snake", type: "MCQ", no: "13", question: " _______ is a Cold Blooded Animal.", options: ["Rabbit", "Elephant", "Snake", "Bat"] },
              { Marks: "1", answer: "Mammalia", type: "MCQ", no: "14", question: "Human Beings belong to _______ Class.", options: ["Cyclostomata", "Reptilia", "Amphibia", "Mammalia"] },
              { Marks: "1", answer: "Arthropoda", type: "MCQ", no: "15", question: "The largest phylum in the animal kingdom is _______.", options: ["Arthropoda", "Annelida", "Acorn worms", "Aschelminthes"] },
            ]
          },
          "Introduction to Microbiology": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Cell Biology and Biotechnology": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Social health": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Disaster Management": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          }
          
        }
      },
      History: {
        lessons: {
          "Development in the West": {
            Questions: [
              { Marks: "4", answer: "Gandhi", type: "MCQ", no: "1", question: "Who led India to independence?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"] },
              { Marks: "4", answer: "1947", type: "MCQ", no: "2", question: "In which year did India gain independence?", options: ["1942", "1947", "1950", "1960"] },
            ]
          },
          "Indian Tradition": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Applied History": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "History of Indian Arts": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Mass Media and History": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Entertainment and History": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Sports and History": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Tourism and History": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Heritage Management": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          }
        }
      },
      Geography: {
        lessons: {
          "Field Visit": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Location and Extent": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Physiography and Drainage": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Climate": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Natural Vegetation and Wildlife": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Population": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Human Settlements": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Economy and Occupations": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Tourism, Transport and Communication": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }

        }
      },
      "Political Science": {
        lessons: {
          "Working of the Constitution": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "The Electoral Process": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Political Parties": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Social and Political Movements": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Challenges faced by Indian Democracy": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      },
      "Marathi": {
        lessons: {
          "Marathi 1": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Marathi 2": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      },
      "Hindi": {
        lessons: {
          "Hindi 1": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Hindi 2": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      }
    };
    return data;
  }

  if (user.class === "9") {
    console.log(user.class)
    const data = {
      English: {
        lessons: {
          "Life": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "A Synopsis-The Swiss Family Robinson": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Have you ever seen ... ?": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Have you thought of the verb ‘have’": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Necklace": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Invictus": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "A True Story of Sea Turtles": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          " Somebody’s Mother": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Fall of Troy": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Autumn": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Past in the Present": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Silver": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Reading Works of Art": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "The Road Not Taken": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "How the First Letter was Written": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Please Listen!": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Storyteller": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Intellectual Rubbish": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "My Financial Career": { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Tansen": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },

        }
      },
      " Maths 1": {
        lessons: {
          "Sets": {
            Questions: [
              { Marks: "4", answer: "25", type: "MCQ", no: "1", question: "What is 5 × 5?", options: ["20", "25", "30", "35"] },
              { Marks: "4", answer: "12", type: "MCQ", no: "2", question: "What is 4 × 3?", options: ["10", "12", "14", "16"] },
            ]
          },
          "Real Numbers": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Polynomials": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Ratio & Proportion": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          " Linear Equations in Two Variables": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Financial Planning": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Statistics": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
        }
      },
      "Maths 2": {
        lessons: {
          "Basic Concepts in Geometry": {
            Questions: [
              { Marks: "4", answer: "Water", type: "MCQ", no: "1", question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "N2"] },
              { Marks: "4", answer: "Earth", type: "MCQ", no: "2", question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
            ]
          },
          "Parallel Lines": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Triangles": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Constructions of Triangles": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Quadrilaterals": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Circle": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Co-ordinate Geometry": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Trigonometry": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Surface Area & Volume": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          }
          
        }
      },
      "Science 1": {
        lessons: {
          "Laws of Motion": {
            Questions: [
              { Marks: "4", answer: "Water", type: "MCQ", no: "1", question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "N2"] },
              { Marks: "4", answer: "Earth", type: "MCQ", no: "2", question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
            ]
          },
          "Work and Energy": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Current Electricity": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Measurement of Matter": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Acids, Bases and Salts": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          " Reflection of Light": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Study of Sound": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          " Carbon: An important element": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Substances in Common Use": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          }
          

        }
      },
      "Science 2": {
        lessons: {
          "Classification of Plants": {
            Questions: [
              { Marks: "4", answer: "Water", type: "MCQ", no: "1", question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "N2"] },
              { Marks: "4", answer: "Earth", type: "MCQ", no: "2", question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
            ]
          },
          "Energy Flow in an Ecosystem": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Useful and Harmful Microbes": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Environmental Management": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Information Communication Technology (ICT)": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Life Processes in Living Organisms": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Heredity and Variation": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Introduction to Biotechnology": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Observing Space: Telescopes": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          }
          

        }
      },
      History: {
        lessons: {
          " Sources of History": {
            Questions: [
              { Marks: "4", answer: "Gandhi", type: "MCQ", no: "1", question: "Who led India to independence?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"] },
              { Marks: "4", answer: "1947", type: "MCQ", no: "2", question: "In which year did India gain independence?", options: ["1942", "1947", "1950", "1960"] },
            ]
          },
          "India: Events after 1960": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "India’s Internal Challenges": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Economic Development": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Education": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Empowerment of Women and other Weaker Sections": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Science and Technology": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          " Industry and Trade": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Changing Life: 1": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Changing Life: 2": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          }
        }
      },
      "Political Science": {
        lessons: {
          "Post World War Political Developments": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          " India’s Foreign Policy": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " India’s Defence System": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " The United Nations": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " India and Other Countries": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " International Problems": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          
        }
      },
      Geography: {
        lessons: {
          "Distributional Maps": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Endogenetic Movements": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Exogenetic Processes Part-1": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Exogenetic Processes Part-2": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Precipitation": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "The Properties of Sea Water": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "International Date Line": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Introduction to Economics": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Trade": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Urbanisation": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Transport and Communication": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " Tourism": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
          

        }
      },
      "Marathi": {
        lessons: {
          Marathi1: {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          Marathi2: {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      },
      "Hindi": {
        lessons: {
          Hindi1: {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          Hindi2: {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      }
    };
    return data;
  }

  if (user.class === "8") {
    console.log(user.class)
    const data = {
      English: {
        lessons: {
          'A Time to Believe': { 
            Questions: [
              { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
              { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
            ] 
          },
          "Dick Whittington and his Cat": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Pilgrim": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Revathi’s Musical Plants": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Vocation": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Nature Created Man and Woman as Equals": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Worm": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Three Visions for India": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Happy Prince": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Plate of Gold": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          " The Kite Festival": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Last Leaf": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Leisure": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Vet": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Revolutionary Steps in Surgery": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "The Bees": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "Ramanujan": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          },
          "A Battle to Baffle": {
            Questions: [
              { Marks: "4", answer: "180", type: "MCQ", no: "4", question: "What is the area of a rectangle with length 12 cm and breadth 15 cm?", options: ["100", "120", "150", "180"] },
              { Marks: "4", answer: "10", type: "MCQ", no: "5", question: "What is 20 ÷ 2?", options: ["10", "20", "15", "30"] },
            ]
          }

        }
      },
      Maths: {
        lessons: {
          "Rational and Irrational numbers": {
            Questions: [
              { Marks: "4", answer: "25", type: "MCQ", no: "1", question: "What is 5 × 5?", options: ["20", "25", "30", "35"] },
              { Marks: "4", answer: "12", type: "MCQ", no: "2", question: "What is 4 × 3?", options: ["10", "12", "14", "16"] },
            ]
          },
          "Parallel lines and transversals": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Indices and Cube root": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Altitudes and Medians of a triangle": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Expansion formulae": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Factorisation of Algebraic expressions": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Variation": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Quadrilateral: Constructions and Types": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Discount and Commission": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          
          " Division of Polynomials": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Statistics": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          " Equations in one variable": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Congruence of triangles": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Compound interest": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Area": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Surface area and Volume": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          },
          "Circle: Chord and Arc": {
            Questions: [
              { Marks: "4", answer: "15", type: "MCQ", no: "3", question: "What is 30 ÷ 2?", options: ["10", "15", "20", "25"] },
              { Marks: "4", answer: "72", type: "MCQ", no: "4", question: "What is 9 × 8?", options: ["64", "72", "80", "90"] },
            ]
          }

        }
      },
      Science: {
        lessons: {
          "Living World and Classification of Microbes": {
            Questions: [
              { Marks: "4", answer: "Water", type: "MCQ", no: "1", question: "What is the chemical formula of water?", options: ["H2O", "CO2", "O2", "N2"] },
              { Marks: "4", answer: "Earth", type: "MCQ", no: "2", question: "Which planet is known as the Blue Planet?", options: ["Mars", "Earth", "Venus", "Jupiter"] },
            ]
          },
          "Health and Diseases": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Force and Pressure": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Current Electricity and Magnetism": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Inside the Atom": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Composition of Matter": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Metals and Nonmetals": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Pollution": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Disaster Management": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Cell and Cell Organelles": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Human Body and Organ System": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Introduction to Acid and Base": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Chemical Change and Chemical Bond": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Measurement and Effects of Heat": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Sound": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Reflection of Light": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Man made Materials": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Ecosystems": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          " Life Cycle of Stars": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          }
        }
      },
      History: {
        lessons: {
          "Sources of History": {
            Questions: [
              { Marks: "4", answer: "Gandhi", type: "MCQ", no: "1", question: "Who led India to independence?", options: ["Nehru", "Gandhi", "Ambedkar", "Patel"] },
              { Marks: "4", answer: "1947", type: "MCQ", no: "2", question: "In which year did India gain independence?", options: ["1942", "1947", "1950", "1960"] },
            ]
          },
          "Europe and India": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Effects of British rule": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "The Freedom Struggle of 1857": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Social and Religious Reforms": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Beginning of Freedom Movement": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Non-co-operation Movement": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Civil Disobedience Movement": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Last Phase of Struggle for Independence": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Armed Revolutionary Movement": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Struggle for Equality": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "India gains Independence": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          "Fulfillment of Struggle for Independence": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          },
          " Formation of State of Maharashtra": {
            Questions: [
              { Marks: "4", answer: "Mughal", type: "MCQ", no: "3", question: "Which dynasty ruled India during the 16th century?", options: ["Mughal", "Gupta", "Maurya", "Chola"] },
              { Marks: "4", answer: "Delhi", type: "MCQ", no: "4", question: "Where is the Red Fort located?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"] },
            ]
          }
          
        }
      },
      Geography: {
        lessons: {
          "Local Time and Standard Time": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Interior of the Earth": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Humidity and Clouds": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Structure of Ocean Floor": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Ocean Currents": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Land Use": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Population": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Industries": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Map Scale": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Field Visit": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      },
      Civics: {
        lessons: {
          "Introduction to the Parliamentary System": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "The Indian Parliament": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          " The Union Executive": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "The Indian Judicial System": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "The State Government": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          },
          "Bureaucracy": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }

        }
      },
      Marathi: {
        lessons: {
          "Marathi 1": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
         "Marathi 2": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      },
      Hindi: {
        lessons: {
          "Hindi 1": {
            Questions: [
              { Marks: "4", answer: "Asia", type: "MCQ", no: "1", question: "Which continent is the largest?", options: ["Asia", "Africa", "North America", "Europe"] },
              { Marks: "4", answer: "Pacific Ocean", type: "MCQ", no: "2", question: "Which is the largest ocean?", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"] },
            ]
          },
          "Hindi 2": {
            Questions: [
              { Marks: "4", answer: "Africa", type: "MCQ", no: "3", question: "Which continent is home to the Sahara Desert?", options: ["Africa", "Asia", "Australia", "South America"] },
              { Marks: "4", answer: "Mount Everest", type: "MCQ", no: "4", question: "What is the highest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"] },
            ]
          }
        }
      }
    };
    return data;
  }

  // Add other classes here if necessary
  return {}; // Return empty data for unsupported classes
};

export default getData;