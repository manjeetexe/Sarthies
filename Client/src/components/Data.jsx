const getData = (user) => {

  
  if (user.class === "10") {
    
    const data = {
      English: {
        lessons: {
          "Where the Mind is Without Fear.." : {
             "Test1":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             }
            
          },
          "The Thief’s Story": { 
            "Test1":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             }
          },
          "On Wings of Courage": { 
            "Test1":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             } 
          },
          " All the World’s a Stage": { 
            "Test1":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             } 
          },
         " Joan of Arc": { 
            "Test1":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             } 
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
              { Marks: "1", answer: "Gravitational force", type: "MCQ", no: "1", question: "The force responsible for keeping planets in orbit around the Sun is:", options: ["Electromagnetic force", "Gravitational force", "Nuclear force", "Frictional force"] },
              { Marks: "1", answer: "The Sun", type: "MCQ", no: "2", question: "Which of these celestial bodies exerts the greatest gravitational pull on Earth?", options: ["The Moon", "The Sun", "Mars", "Venus"] },

              { Marks: "1", answer: "Attractive", type: "MCQ", no: "3", question: "The force acting between the Earth and the Moon is:", options: ["Repulsive", "Attractive", "Zero", " Electrostatic"] },
              { Marks: "1", answer: "The poles", type: "MCQ", no: "4", question: "The weight of a body is maximum at:", options: ["The poles", " The equator", "The center of the Earth", "A mountain top"] },
              { Marks: "1", answer: "Centripetal force provided by gravity", type: "MCQ", no: "5", question: "A satellite remains in orbit because of:", options: [" Centripetal force provided by gravity", "Air resistance", "Its shape", "Earth's rotation"] },
              { Marks: "1", answer: "Newton", type: "MCQ", no: "6", question: " What is the unit of weight?", options: ["Kilogram", "Newton", "Joule", " Watt"] },
              { Marks: "1", answer: " 1/9th of the original force", type: "MCQ", no: "7", question: "If the distance between two masses is tripled, the gravitational force between them becomes:", options: [" 1/9th of the original force", " 1/3rd of the original force", " 9 times the original force", " 3 times the original force"] },
              { Marks: "1", answer: "It has tangential velocity", type: "MCQ", no: "8", question: "The Moon does not fall on Earth because:", options: [" Gravitational force is weak", " It has tangential velocity", " It is very far from Earth", " It has no mass"] },
              { Marks: "1", answer: "Gravitational force", type: "MCQ", no: "9", question: "The centripetal force acting on a satellite in orbit is provided by:", options: ["Its velocity", "Gravitational force", " Friction", " Air resistance"] },
              { Marks: "1", answer: " 11.2km/s", type: "MCQ", no: "10", question: " What is the approximate escape velocity for Earth?", options: [" 11.2km/s", "9.8m/s", " 7.9km/s", " 1.6km/s"] },
              { Marks: "1", answer: "Always attractive", type: "MCQ", no: "11", question: " Gravitational force is:", options: ["Always attractive", "Always repulsive", "Attractive or repulsive", "None of the above"] },
              { Marks: "1", answer: " Zero", type: "MCQ", no: "12", question: "The weight of a body at the center of the Earth is:", options: ["Maximum", " Zero", " Equal to its mass", " Cannot be determined"] },
              { Marks: "1", answer: "Gravitational force", type: "MCQ", no: "13", question: "Kepler’s second law states that a line joining the planet and the Sun sweeps out:", options: ["Equal areas in equal times", "Unequal areas in equal times", "Equal distances in equal times", "None of these"] },
              { Marks: "1", answer: "Both a and b", type: "MCQ", no: "14", question: " Acceleration due to gravity (g) on the surface of the Earth is:", options: ["Directly proportional to the mass of the Earth", " Inversely proportional to the square of radius of the Earth", " Both a and b", " None of these"] },
              { Marks: "1", answer: " Quadruples", type: "MCQ", no: "15", question: " What happens to the value of ‘g’ if the Earth’s radius reduces to half but its mass is same?", options: [" Remains the same", " Doubles", " Quadruples", " Halves"] },
            ]
          },
          "Periodic Classification of Element": {
            Questions: [
              { Marks: "4", answer: "Chlorophyll", type: "MCQ", no: "3", question: "What gives plants their green color?", options: ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"] },
              { Marks: "4", answer: "Oxygen", type: "MCQ", no: "4", question: "What gas do plants release during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"] },
            ]
          },
          "Chemical Reactions and Equations" : {
             "Test1":{
              Questions: [
                { Marks: "4", answer: "s for solid, l for liquid, g for gas, aq for aqueous", type: "MCQ", no: "1", question: "The physical state of a reactant in a chemical equation is represented as:", options: ["s for solid, l for liquid, g for gas, aq for aqueous", "p for plasma, w for water, s for steam", "l for liquid, d for dry, g for gas", "s for solution, l for liquid, g for gaseous"] },  
                { Marks: "4", answer: "2H₂ + O₂ → 2H₂O", type: "MCQ", no: "2", question: "Which of the following reactions is an example of a combination reaction?", options: ["2H₂ + O₂ → 2H₂O", "CaCO₃ → CaO + CO₂", "Zn + CuSO₄ → ZnSO₄ + Cu", "2KClO₃ → 2KCl + 3O₂"] },  
                { Marks: "4", answer: "Displacement reaction", type: "MCQ", no: "3", question: "What type of reaction is represented by the equation: Zn + H₂SO₄ → ZnSO₄ + H₂?", options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"] },  
                { Marks: "4", answer: "Double displacement reaction", type: "MCQ", no: "4", question: "The reaction NaCl + AgNO₃ → NaNO₃ + AgCl is an example of:", options: ["Combination reaction", "Decomposition reaction", "Displacement reaction", "Double displacement reaction"] },
                { Marks: "4", answer: "Conservation of mass", type: "MCQ", no: "4", question: "A balanced chemical equation follows the law of:", options: ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Constant proportion"] },
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "5", question: "Which of the following reactions involves the evolution of gas?", options: ["Na₂CO₃ + 2HCl → 2NaCl + CO₂ + H₂O", "Zn + 2HCl → ZnCl₂ + H₂", "CaCO₃ → CaO + CO₂", "All of the above"] },
                { Marks: "4", answer: "The number of atoms of each element is the same on both sides", type: "MCQ", no: "6", question: "The chemical equation H₂ + Cl₂ → 2HCl is balanced because:", options: ["It involves only one reactant", "The number of atoms of each element is the same on both sides", "It is a simple reaction", "The product is stable"] },
                { Marks: "4", answer: "Potassium chloride and oxygen", type: "MCQ", no: "7", question: "In the reaction: 2KClO₃ → 2KCl + 3O₂, potassium chlorate decomposes into:", options: ["Potassium chloride and oxygen", "Potassium oxide and oxygen", "Potassium and oxygen", "Potassium hydroxide and water"] },  
                { Marks: "4", answer: "CaO", type: "MCQ", no: "8", question: "What is the chemical formula of quicklime?", options: ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"] },
                { Marks: "4", answer: "Redox reaction", type: "MCQ", no: "9", question: "The rusting of iron is an example of which type of reaction?", options: ["Combination reaction", "Redox reaction", "Neutralization reaction", "Decomposition reaction"] },  
                { Marks: "4", answer: "Oxidized", type: "MCQ", no: "10", question: "In a redox reaction, the substance that loses electrons is said to be:", options: ["Reduced", "Oxidized", "Neutralized", "Decomposed"] },  
                { Marks: "4", answer: "To speed up the reaction without undergoing any permanent change", type: "MCQ", no: "11", question: "What is the role of a catalyst in a chemical reaction?", options: ["To slow down the reaction", "To speed up the reaction without undergoing any permanent change", "To consume the reactants", "To produce more products"] },  
                { Marks: "4", answer: "Calcium carbonate", type: "MCQ", no: "12", question: "When limewater reacts with carbon dioxide, it turns milky due to the formation of:", options: ["Calcium oxide", "Calcium carbonate", "Calcium hydroxide", "Calcium bicarbonate"] },  
                { Marks: "4", answer: "Precipitate", type: "MCQ", no: "13", question: "In a Double Displacement reaction, the insoluble solid formed is called a:", options: ["Catalyst", "Precipitate", "Reactant", "Residue"] },  
                { Marks: "4", answer: "Endothermic reaction", type: "MCQ", no: "14", question: "The reaction in which heat is absorbed is called an:", options: ["Exothermic reaction", "Endothermic reaction", "Combination reaction", "Displacement reaction"] },  
                { Marks: "4", answer: "Exothermic reaction", type: "MCQ", no: "15", question: "The reaction: CaO + H₂O → Ca(OH)₂ + Heat is an example of:", options: ["Exothermic reaction", "Endothermic reaction", "Redox reaction", "Neutralization reaction"] },  
                { Marks: "4", answer: "A more reactive element displaces a less reactive element from its compound.", type: "MCQ", no: "16", question: "Which of the following statements about a displacement reaction is correct?", options: ["A more reactive element displaces a less reactive element from its compound.", "A less reactive element displaces a more reactive element from its compound.", "It occurs only in the presence of a catalyst.", "It involves only non-metals."] },  
                { Marks: "4", answer: "Ca(OH)₂", type: "MCQ", no: "17", question: "The product of the reaction between quicklime (CaO) and water is:", options: ["CaCO₃", "Ca(OH)₂", "CaO + H₂O", "CaO₃"] },  
                { Marks: "4", answer: "Neutralization reaction", type: "MCQ", no: "18", question: "Which type of reaction occurs when an acid reacts with a base to form salt and water?", options: ["Displacement reaction", "Neutralization reaction", "Decomposition reaction", "Oxidation reaction"] },  
                { Marks: "4", answer: "Double displacement reaction", type: "MCQ", no: "19", question: "What type of reaction is: AgNO₃ + NaCl → AgCl + NaNO₃?", options: ["Combination reaction", "Displacement reaction", "Double displacement reaction", "Decomposition reaction"] },  
                { Marks: "4", answer: "Hydrogen", type: "MCQ", no: "20", question: "During electrolysis of water, which gas is liberated at the cathode?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"] },  
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "21", question: "Which of the following is a characteristic of chemical reactions?", options: ["Change in temperature", "Evolution of gas", "Change in color", "All of the above"] },  
                { Marks: "4", answer: "Magnesium oxide", type: "MCQ", no: "22", question: "When magnesium ribbon is burnt in air, it forms:", options: ["Magnesium hydroxide", "Magnesium carbonate", "Magnesium oxide", "Magnesium chloride"] },  
                { Marks: "4", answer: "Temporary change", type: "MCQ", no: "23", question: "Which of the following is not a characteristic of a chemical reaction?", options: ["Formation of a new substance", "Change in energy", "Temporary change", "Change in physical state"] },  
                { Marks: "4", answer: "Exothermic", type: "MCQ", no: "24", question: "When quicklime is dissolved in water, the solution becomes hot. This shows that the reaction is:", options: ["Endothermic", "Exothermic", "Reversible", "Neutralization"] },  
                { Marks: "4", answer: "Lead oxide, nitrogen dioxide, and oxygen", type: "MCQ", no: "25", question: "When lead nitrate is heated, the products formed are:", options: ["Lead, oxygen, and nitrogen", "Lead oxide, nitrogen dioxide, and oxygen", "Lead oxide, oxygen, and nitrogen monoxide", "Lead nitrate and water"] },  
                { Marks: "4", answer: "Oxidation of iron", type: "MCQ", no: "26", question: "The process of rusting involves:", options: ["Oxidation of iron", "Reduction of iron", "Neutralization reaction", "Combustion of iron"] },  
                { Marks: "4", answer: "Fe₂O₃ + 3CO → 2Fe + 3CO₂", type: "MCQ", no: "27", question: "Which reaction represents both oxidation and reduction?", options: ["Fe₂O₃ + 3CO → 2Fe + 3CO₂", "NaCl + AgNO₃ → NaNO₃ + AgCl", "HCl + NaOH → NaCl + H₂O", "2H₂ + O₂ → 2H₂O"] },  
                { Marks: "4", answer: "Cl₂", type: "MCQ", no: "28", question: "Identify the oxidizing agent in the reaction: 2Fe + 3Cl₂ → 2FeCl₃.", options: ["Fe", "Cl₂", "FeCl₃", "None"] },  
                { Marks: "4", answer: "Reducing agent", type: "MCQ", no: "29", question: "In a redox reaction, the substance that donates electrons is called a:", options: ["Reducing agent", "Oxidizing agent", "Catalyst", "Inert substance"] },  
                { Marks: "4", answer: "Oxidation of oils and fats", type: "MCQ", no: "30", question: "Rancidity occurs due to:", options: ["Oxidation of oils and fats", "Reduction of oils and fats", "Addition of oxygen to food", "Mixing of fats and water"] },  
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "31", question: "How can rancidity be prevented?", options: ["Adding antioxidants to food", "Storing food in airtight containers", "Refrigerating food", "All of the above"] },  
                { Marks: "4", answer: "O₂", type: "MCQ", no: "32", question: "In the reaction: 2Mg + O₂ → 2MgO, which substance is reduced?", options: ["Mg", "O₂", "MgO", "None"] },  
                { Marks: "4", answer: "Reduction", type: "MCQ", no: "33", question: "The removal of oxygen from a substance during a chemical reaction is called:", options: ["Oxidation", "Reduction", "Combustion", "Neutralization"] },
                { Marks: "4", answer: "Combustion of methane", type: "MCQ", no: "34", question: "Which of the following reactions is exothermic?", options: ["Combustion of methane", "Melting of ice", "Evaporation of water", "Photosynthesis"] },  
                { Marks: "4", answer: "Fe₂O₃·xH₂O", type: "MCQ", no: "35", question: "What is the chemical formula of rust?", options: ["FeO", "Fe₂O₃·xH₂O", "Fe₃O₄", "FeCl₃"] },  
                { Marks: "4", answer: "Redox reaction", type: "MCQ", no: "36", question: "Rusting is an example of:", options: ["Reduction reaction", "Oxidation reaction", "Redox reaction", "Combination reaction"] },  
                { Marks: "4", answer: "Fe → Fe²⁺ + 2e⁻", type: "MCQ", no: "38", question: "At the anodic region of iron during rusting, which reaction takes place?", options: ["Fe → Fe²⁺ + 2e⁻", "O₂ + 4H⁺ + 4e⁻ → 2H₂O", "2H₂O + O₂ → 4OH⁻", "Fe³⁺ + 3OH⁻ → Fe(OH)₃"] },  
                { Marks: "4", answer: "O₂ + 4H⁺ + 4e⁻ → 2H₂O", type: "MCQ", no: "39", question: "At the cathodic region during rusting, what is the main reaction?", options: ["O₂ + 4H⁺ + 4e⁻ → 2H₂O", "Fe → Fe²⁺ + 2e⁻", "Fe³⁺ + 3OH⁻ → Fe(OH)₃", "2H₂ + O₂ → 2H₂O"] },  
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "40", question: "Which condition increases the rate of rusting?", options: ["Presence of salt in water", "High humidity", "Acidic environment", "All of the above"] },  
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "41", question: "Which factor affects the rate of reaction?", options: ["Temperature", "Concentration", "Surface area", "All of the above"] },  
                { Marks: "4", answer: "It has a larger surface area", type: "MCQ", no: "42", question: "A finely powdered reactant reacts faster because:", options: ["It has a smaller surface area", "It has a larger surface area", "It absorbs light", "It is less reactive"] },  
                { Marks: "4", answer: "Burning wood", type: "MCQ", no: "43", question: "Which of the following represents a chemical change in daily life?", options: ["Boiling water", "Burning wood", "Melting ice", "Mixing salt in water"] },  
                { Marks: "4", answer: "All of the above", type: "MCQ", no: "44", question: "Which process involves oxidation in everyday life?", options: ["Digestion of food", "Respiration", "Rusting of iron", "All of the above"] }  ,
                { Marks: "4", answer: "Burning of paper", type: "MCQ", no: "45", question: "Which of the following is a chemical change?", options: ["Melting of ice", "Dissolving sugar in water", "Burning of paper", "Breaking of glass"] },  
                { Marks: "4", answer: "Loss of electrons", type: "MCQ", no: "46", question: "In a redox reaction, oxidation refers to:", options: ["Gain of electrons", "Loss of electrons", "Loss of protons", "Gain of protons"] },  
                { Marks: "4", answer: "Chemical change", type: "MCQ", no: "47", question: "The formation of curd from milk is an example of:", options: ["Physical change", "Reversible change", "Chemical change", "Sublimation"] },  
                { Marks: "4", answer: "4Al + 3O₂ → 2Al₂O₃", type: "MCQ", no: "48", question: "What is the balanced form of the equation: Al + O₂ → Al₂O₃?", options: ["2Al + 3O₂ → 2Al₂O₃", "4Al + 3O₂ → 2Al₂O₃", "3Al + 2O₂ → 3Al₂O₃", "Al + O₂ → Al₂O₃"] },  
                { Marks: "4", answer: "Changing the coefficients of reactants or products", type: "MCQ", no: "49", question: "Which of the following is used to balance a chemical equation?", options: ["Changing the chemical formula of reactants", "Changing the coefficients of reactants or products", "Changing the products of the reaction", "None of the above"] },  
                { Marks: "4", answer: "ZnO + C → Zn + CO", type: "MCQ", no: "50", question: "Which of the following is a redox reaction?", options: ["NaOH + HCl → NaCl + H₂O", "ZnO + C → Zn + CO", "BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl", "CaO + CO₂ → CaCO₃"] }  

              ] 
             },
             "Test 2":{
              Questions: [
                { Marks: "4", answer: "Paris", type: "MCQ", no: "1", question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"] },
                { Marks: "4", answer: "4", type: "MCQ", no: "2", question: "What is 2 + 2?", options: ["3", "4", "5", "6"] },
              ]
             }
            
          },
          "Effects of electric current": {
            Questions: [
              { Marks: "1", answer: "Joule", type: "MCQ", no: "1", question: "The SI unit of heat is:", options: ["Calorie", "Joule", "Kelvin", "Celsius"] },
              { Marks: "1", answer: "Conduction", type: "MCQ", no: "2", question: "The process of heat transfer in solids occurs through:", options: ["Conduction", "Convection", "Radiation", "All of these"] },
              { Marks: "1", answer: "Raise the temperature of 1 kg of the substance by 1 degree C", type: "MCQ", no: "3", question: "The specific heat capacity of a substance is defined as the amount of heat required to:", options: ["Raise the temperature of 1 kg of the substance by 1 degree C", "Melt 1 kg of the substance", "Convert 1 kg of the substance into vapor", "None of these"] },
              { Marks: "1", answer: "Water", type: "MCQ", no: "4", question: "Which of the following has the highest specific heat capacity?", options: ["Water", "Iron", "Mercury", "Copper"] },
              { Marks: "1", answer: "Latent heat", type: "MCQ", no: "5", question: "The heat energy absorbed during a change of state without a change in temperature is called:", options: ["Sensible heat", "Latent heat", "Thermal energy", "Specific heat"] },
              { Marks: "1", answer: "Thermometer", type: "MCQ", no: "6", question: "Which device is used to measure temperature?", options: ["Barometer", "Thermometer", "Hydrometer", "Anemometer"] },
              { Marks: "1", answer: "Latent heat of fusion", type: "MCQ", no: "7", question: "The heat required to convert a unit mass of solid to liquid at its melting point is called:", options: ["Latent heat of vaporization", "Latent heat of fusion", "Specific heat", "Sensible heat"] },
              { Marks: "1", answer: "Calorimeter", type: "MCQ", no: "8", question: "The device used to measure heat energy is:", options: ["Calorimeter", "Thermometer", "Hygrometer", "Barometer"] },
              { Marks: "1", answer: "Both b and c", type: "MCQ", no: "9", question: "The amount of heat required to raise the temperature of 1 gram of water by 1-degree Celcius is:", options: ["1 Joule", "1 Calorie", "4.18 Joules", "Both b and c"] },
              { Marks: "1", answer: "Expands", type: "MCQ", no: "10", question: "What happens to water when it is cooled below 4-degree Celcius?", options: ["Contracts", "Expands", "Remains the same", "Turns to vapor"] },
              { Marks: "1", answer: "It has a lower density", type: "MCQ", no: "11", question: "Why does ice float on water?", options: ["It has a lower density", "It has higher heat capacity", "It absorbs more heat", "None of these"] },
              { Marks: "1", answer: "Radiation", type: "MCQ", no: "12", question: "What is the main mechanism of heat transfer in the Sun's energy reaching Earth?", options: ["Conduction", "Convection", "Radiation", "All of these"] },
              { Marks: "1", answer: "80cal/g", type: "MCQ", no: "13", question: "The latent heat of fusion for ice is approximately:", options: ["80cal/g", "100cal/g", "540cal/g", "273cal/g"] },
              { Marks: "1", answer: "Both a and b", type: "MCQ", no: "14", question: "The formula to calculate heat energy is:", options: ["Q=mcΔT", "Q=mL", "None of these", "Both a and b"] },
              { Marks: "1", answer: "Decreases", type: "MCQ", no: "15", question: "What happens to the boiling point of water when atmospheric pressure decreases?", options: ["Increases", "Decreases", "Remains the same", "First increases, then decreases"] },
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
              { Marks: "1", answer: "Carbohydrates", type: "MCQ", no: "1", question: "The primary source of energy in all living organisms is:", options: ["Protein", "Lipid", "Carbohydrates", "Nucleic acid"] },
              { Marks: "1", answer: "Respiration", type: "MCQ", no: "2", question: "Which of the following processes releases energy in cells?", options: ["Photosynthesis", "Respiration", "Transpiration", "Osmosis"] },
              { Marks: "1", answer: "Carbon dioxide, water, and energy", type: "MCQ", no: "3", question: "The end products of aerobic respiration are:", options: [" Lactic acid and energy", "Ethanol and energy", "Carbon dioxide, water, and energy", "Glucose and oxygen"] },
              { Marks: "1", answer: "Ethanol", type: "MCQ", no: "4", question: "Which of the following is a by-product of anaerobic respiration in yeast?", options: ["Water", "Ethanol", "Lactic acid", "Oxygen"] },
              { Marks: "1", answer: "To provide energy for cellular activities", type: "MCQ", no: "5", question: "What is the main function of ATP in cells?", options: ["To store genetic information", "To provide energy for cellular activities", "To transport oxygen", "To act as a structural protein"] },
              { Marks: "1", answer: "Mitochondria", type: "MCQ", no: "6", question: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Chloroplast", "Endoplasmic reticulum"] },
              { Marks: "1", answer: "Krebs cycle", type: "MCQ", no: "7", question: "Which process occurs in the mitochondria?", options: ["Glycolysis", "Krebs cycle", "Photolysis", "Transcription"] },
              { Marks: "1", answer: "Lactic acid", type: "MCQ", no: "8", question: "Anaerobic respiration in human muscles produces:", options: ["Carbon dioxide and water", "Ethanol and carbon dioxide", "Lactic acid", "Glucose"] },
              { Marks: "1", answer: "Amino acids", type: "MCQ", no: "9", question: " The end products of digestion of proteins are:", options: ["Fatty acids and glycerol", "Amino acids", "Monosaccharides", "Nucleotides"] },
              { Marks: "1", answer: "ATP", type: "MCQ", no: "10", question: "The energy currency of the cell is:", options: ["NADH2", "FADH2", "ATP", "ADP"] },
              { Marks: "1", answer: "Small intestine", type: "MCQ", no: "11", question: "In which part of the human body does most digestion take place?", options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"] },
              { Marks: "1", answer: "Aerobic", type: "MCQ", no: "12", question: "Which type of respiration is more energy-efficient?", options: ["Aerobic", "Anaerobic", "Both are equal", "Neither"] },
              { Marks: "1", answer: "Starch", type: "MCQ", no: "13", question: "Plants store excess glucose in the form of:", options: ["Cellulose", "Glycogen", "Starch", "Proteins"] },
              { Marks: "1", answer: "Cytoplasm", type: "MCQ", no: "14", question: "Glycolysis takes place in this part of the cell:", options: ["Mitochondria", "Cytoplasm", "Ribosomes", "Nucleus"] },
              { Marks: "1", answer: "Glycolysis", type: "MCQ", no: "15", question: "The process of splitting glucose into pyruvate is called:", options: ["Krebs cycle", "Electron transport chain", "Glycolysis", "Fermentation"] },
            ]
          },
          " Life Processes in Living Organisms Part – 2": {
            Questions: [
              { Marks: "1", answer: "Asexual reproductionl", type: "MCQ", no: "1", question: "The process of reproduction in which a single parent produces offspring is called:", options: ["Sexual reproduction", "Asexual reproduction", "Pollination", "Fertilization"] },
              { Marks: "1", answer: "Leaves, stems, and roots", type: "MCQ", no: "2", question: "In plants, vegetative propagation occurs through:", options: ["Flowers", "Leaves, stems, and roots", "Fruits", "Seeds"] },
              { Marks: "1", answer: "Ovary", type: "MCQ", no: "3", question: "Which part of the flower develops into fruit?", options: ["Ovule reproduction", "Ovary", "Petal", "Sepal"] },
              { Marks: "1", answer: "Pollination", type: "MCQ", no: "4", question: "The process of transfer of pollen grains from the anther to the stigma of a flower is called:", options: ["Fertilization", "Pollination", "Germination", "Vegetative reproduction"] },
              { Marks: "1", answer: "Testosterone", type: "MCQ", no: "5", question: "Which hormone is primarily responsible for the development of male secondary sexual characteristics?", options: ["Estrogen", "Testosterone", "Progesterone", "Insulin"] },
              { Marks: "1", answer: "Testes", type: "MCQ", no: "6", question: "The organ in the human male reproductive system that produces sperm is:", options: ["Testes", "Vas deferens", "Epididymis", "Prostate gland"] },
              { Marks: "1", answer: "Oviduct", type: "MCQ", no: "7", question: "The site of fertilization in human females is:", options: ["Uterus", "Ovary", "Oviduct", "Cervix"] },
              { Marks: "1", answer: "Gamete formation → Fertilization → Zygote formation → Embryo development", type: "MCQ", no: "8", question: "Which is the correct sequence of events in sexual reproduction?", options: ["Gamete formation → Fertilization → Zygote formation → Embryo development", "Fertilization → Gamete formation → Embryo development → Zygote formation", "Embryo development → Zygote formation → Gamete formation → Fertilization", "Gamete formation → Embryo development → Zygote formation → Fertilization"] },
              { Marks: "1", answer: "Ovum", type: "MCQ", no: "9", question: "The female gamete is also known as:", options: ["Ovum", "Zygote", "Embryo", "Egg sac"] },
              { Marks: "1", answer: "Stigma", type: "MCQ", no: "10", question: "The structure in plants where pollen grains germinate is called:", options: ["Stigma", "Style", "Ovule", "Anther"] },
              { Marks: "1", answer: "Seed", type: "MCQ", no: "11", question: "The fertilized ovule develops into a:", options: ["Seed", "Fruit", "Flower", "Root"] },
              { Marks: "1", answer: "Vegetative propagation", type: "MCQ", no: "12", question: "The process by which plants reproduce without seeds is called:", options: ["Budding", "Vegetative propagation", "Pollination", "Fertilization"] },
              { Marks: "1", answer: "Vas deferens", type: "MCQ", no: "13", question: "he tube that carries sperm from the testes to the urethra is called:", options: ["Vas deferens", "Epididymis", "Ureter", "Seminal vesicle"] },
              { Marks: "1", answer: "Uterus", type: "MCQ", no: "14", question: "The part of the female reproductive system where implantation occurs is:", options: ["Uterus", "Ovary", "Cervix", "Fallopian tube"] },
              { Marks: "1", answer: "14th day of the menstrual cycle", type: "MCQ", no: "15", question: "Ovulation occurs around the:", options: ["5th day of the menstrual cycle", "14th day of the menstrual cycle", "21st day of the menstrual cycle", "Last day of the menstrual cycle"] },
              // { Marks: "1", answer: "Both a and b", type: "MCQ", no: "16", question: "Cross-pollination requires the help of:", options: ["Wind and water", "Insects and animals", "Both a and b", "None of these"] },
              // { Marks: "1", answer: "It divides and grows into an embryo", type: "MCQ", no: "17", question: "What happens to the zygote after fertilization in humans?", options: ["It remains static", "It divides and grows into an embryo", "It dissolves in the uterus", "It develops into sperm and egg cells"] },
              // { Marks: "1", answer: "21 days", type: "MCQ", no: "18", question: "The menstrual cycle in human females lasts for about:", options: ["15 days", "21 days", "28 days", "40 days"] },
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