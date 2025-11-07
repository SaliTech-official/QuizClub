import { Question } from "./types"

export const quizQuestions: Question[] = [
    {
        question: "What does URL stand for?",
        correct_answer: "Uniform Resource Locator",
        incorrect_answers: ["Universal Remote Link", "Unified Resource Locator", "Uniform Remote Link"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What device do you use to click on icons and move the cursor on the screen?",
        correct_answer: "Mouse",
        incorrect_answers: ["Keyboard", "Monitor", "Speaker"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What is the main circuit board inside a computer called?",
        correct_answer: "Motherboard",
        incorrect_answers: ["CPU", "Sound Card", "Power Supply"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What is the common keyboard shortcut for 'Paste'?",
        correct_answer: "Ctrl + V",
        incorrect_answers: ["Ctrl + C", "Ctrl + X", "Ctrl + P"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "Which of these is a common unit of digital storage?",
        correct_answer: "Gigabyte",
        incorrect_answers: ["Hertz", "Pixel", "Volt"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What are the physical parts of a computer called?",
        correct_answer: "Hardware",
        incorrect_answers: ["Software", "Firmware", "Programs"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What is a set of instructions that tells the computer what to do?",
        correct_answer: "Software",
        incorrect_answers: ["Hardware", "Input", "Output"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What does ISP stand for?",
        correct_answer: "Internet Service Provider",
        incorrect_answers: ["Internal System Program", "International Software Protocol", "Internet System Port"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "In computing, what is a 'bug'?",
        correct_answer: "An error or flaw in a program",
        incorrect_answers: ["A type of computer virus", "A small hardware component", "A feature for users"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "What is the keyboard shortcut to save a document?",
        correct_answer: "Ctrl + S",
        incorrect_answers: ["Ctrl + O", "Ctrl + N", "Ctrl + W"],
        difficulty: "easy",
        category: "computer_science"
    },
    {
        question: "Which of these is a primary difference between an SSD and an HDD?",
        correct_answer: "No moving parts",
        incorrect_answers: ["Requires more power", "Larger physical size", "Slower data access"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "What is the core component of an operating system called?",
        correct_answer: "Kernel",
        incorrect_answers: ["Shell", "GUI", "Desktop"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "What does the acronym 'API' stand for?",
        correct_answer: "Application Programming Interface",
        incorrect_answers: ["Automated Program Interaction", "Application Process Integration", "Advanced Peripheral Interconnect"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "Which image file format natively supports transparency?",
        correct_answer: "PNG",
        incorrect_answers: ["JPEG", "BMP", "TIFF (in some variants, but PNG is standard)"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "In networking, what is the purpose of a DNS?",
        correct_answer: "Resolve domain names to IP addresses",
        incorrect_answers: ["Block unauthorized access", "Store website data", "Encrypt network traffic"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "Which of these is NOT a type of cloud computing service?",
        correct_answer: "HaaS (Hardware as a Service)",
        incorrect_answers: ["SaaS (Software as a Service)", "PaaS (Platform as a Service)", "IaaS (Infrastructure as a Service)"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "What does 'ping' command primarily measure?",
        correct_answer: "Latency and packet loss",
        incorrect_answers: ["Bandwidth speed", "CPU temperature", "Hard drive errors"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "Which protocol is used for secure web browsing?",
        correct_answer: "HTTPS",
        incorrect_answers: ["HTTP", "FTP", "SMTP"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "What type of memory is fastest for a CPU to access?",
        correct_answer: "CPU Cache",
        incorrect_answers: ["RAM", "SSD", "ROM"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "What is 'Open Source' software?",
        correct_answer: "Software with publicly available source code",
        incorrect_answers: ["Software that is always free", "Software without a user interface", "Software that runs on any OS"],
        difficulty: "medium",
        category: "computer_science"
    },
    {
        question: "In the OSI model of networking, at which layer does a router primarily operate?",
        correct_answer: "Layer 3 (Network)",
        incorrect_answers: ["Layer 2 (Data Link)", "Layer 4 (Transport)", "Layer 7 (Application)"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "What is the term for a situation in virtual memory systems where excessive paging leads to a severe drop in performance?",
        correct_answer: "Thrashing",
        incorrect_answers: ["Faulting", "Swapping", "Fragmenting"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "Which of the following is an example of an asymmetric encryption algorithm?",
        correct_answer: "RSA",
        incorrect_answers: ["AES", "DES", "Blowfish"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "In a Unix-like filesystem, what data structure stores metadata about a file, such as its owner, permissions, and location on the disk?",
        correct_answer: "Inode",
        incorrect_answers: ["Superblock", "FAT", "Master File Table"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "What is the main purpose of a CPU's Translation Lookaside Buffer (TLB)?",
        correct_answer: "To speed up virtual-to-physical address translation",
        incorrect_answers: ["To execute out-of-order instructions", "To predict branch outcomes", "To store pre-fetched data from RAM"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "In RAID configurations, which level combines mirroring and striping and requires at least four disks?",
        correct_answer: "RAID 10 (1+0)",
        incorrect_answers: ["RAID 5", "RAID 6", "RAID 1"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "Which process scheduling algorithm can suffer from the 'convoy effect', where short processes are stuck waiting behind long ones?",
        correct_answer: "First-Come, First-Served (FCFS)",
        incorrect_answers: ["Shortest Job First (SJF)", "Round Robin", "Priority Scheduling"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "What type of cybersecurity attack involves injecting malicious scripts into a trusted website, which are then executed by the victim's browser?",
        correct_answer: "Cross-Site Scripting (XSS)",
        incorrect_answers: ["SQL Injection", "Man-in-the-Middle (MITM)", "Denial-of-Service (DoS)"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "What is the primary difference between a mutex and a binary semaphore?",
        correct_answer: "Ownership: A mutex can only be unlocked by the thread that locked it.",
        incorrect_answers: ["Semaphores are faster than mutexes.", "Mutexes are used for file access only.", "A semaphore cannot be used for mutual exclusion."],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "In computer architecture, what is 'endianness'?",
        correct_answer: "The order of bytes in a multi-byte word in memory",
        incorrect_answers: ["The number of bits a CPU can process at once", "The method for error correction in RAM", "The physical layout of transistors on a chip"],
        difficulty: "hard",
        category: "computer_science"
    },
    {
        question: "What is 15 + 27?",
        correct_answer: "42",
        incorrect_answers: ["32", "41", "52"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "How many sides does a hexagon have?",
        correct_answer: "6",
        incorrect_answers: ["5", "7", "8"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "What is 8 multiplied by 7?",
        correct_answer: "56",
        incorrect_answers: ["48", "64", "54"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "If x - 5 = 10, what is the value of x?",
        correct_answer: "15",
        incorrect_answers: ["5", "-5", "10"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "What is the area of a square with a side length of 4 units?",
        correct_answer: "16",
        incorrect_answers: ["8", "12", "20"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "Which of the following is a prime number?",
        correct_answer: "11",
        incorrect_answers: ["9", "15", "12"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "What is 100 minus 43?",
        correct_answer: "57",
        incorrect_answers: ["67", "53", "63"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "What is 50% of 200?",
        correct_answer: "100",
        incorrect_answers: ["50", "25", "150"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "How many degrees are in a right angle?",
        correct_answer: "90",
        incorrect_answers: ["45", "180", "360"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "What is 64 divided by 8?",
        correct_answer: "8",
        incorrect_answers: ["6", "7", "9"],
        difficulty: "easy",
        category: "mathematics"
    },
    {
        question: "In a right-angled triangle with legs of length 3 and 4, what is the length of the hypotenuse?",
        correct_answer: "5",
        incorrect_answers: ["6", "7", "12"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the result of (x + 2)(x + 3)?",
        correct_answer: "x^2 + 5x + 6",
        incorrect_answers: ["x^2 + 6", "x^2 + 5x + 5", "2x + 5"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the area of a circle with a radius of 5? (in terms of pi)",
        correct_answer: "25π",
        incorrect_answers: ["10π", "5π", "50π"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the slope of the line given by the equation y = 3x - 2?",
        correct_answer: "3",
        incorrect_answers: ["-2", "1", "x"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the value of 2 to the power of 5?",
        correct_answer: "32",
        incorrect_answers: ["10", "16", "25"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is log base 10 of 100?",
        correct_answer: "2",
        incorrect_answers: ["10", "1", "100"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the average (mean) of the numbers 2, 4, 6, and 8?",
        correct_answer: "5",
        incorrect_answers: ["4", "6", "20"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "Following the order of operations (PEMDAS/BODMAS), what is 5 + 3 * 2?",
        correct_answer: "11",
        incorrect_answers: ["16", "13", "10"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the probability of rolling an even number on a standard six-sided die?",
        correct_answer: "1/2",
        incorrect_answers: ["1/3", "1/6", "2/3"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "If x + y = 10 and x - y = 4, what is the value of x?",
        correct_answer: "7",
        incorrect_answers: ["3", "6", "14"],
        difficulty: "medium",
        category: "mathematics"
    },
    {
        question: "What is the derivative of x^3 with respect to x?",
        correct_answer: "3x^2",
        incorrect_answers: ["x^4 / 4", "3x", "x^3"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the value of the imaginary unit 'i' squared (i^2)?",
        correct_answer: "-1",
        incorrect_answers: ["1", "i", "-i"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the integral of 2x dx?",
        correct_answer: "x^2 + C",
        incorrect_answers: ["2x^2 + C", "2 + C", "x + C"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the value of sin(π/2) in radians?",
        correct_answer: "1",
        incorrect_answers: ["0", "-1", "π/2"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the determinant of the 2x2 matrix [[a, b], [c, d]]?",
        correct_answer: "ad - bc",
        incorrect_answers: ["ac - bd", "ab - cd", "a+d - (b+c)"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the sum of the infinite geometric series 1 + 1/2 + 1/4 + 1/8 + ...?",
        correct_answer: "2",
        incorrect_answers: ["1.5", "Infinity", "1.75"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the limit of (sin(x) / x) as x approaches 0?",
        correct_answer: "1",
        incorrect_answers: ["0", "Infinity", "Undefined"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the derivative of e^x?",
        correct_answer: "e^x",
        incorrect_answers: ["xe^(x-1)", "0", "1"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "How many ways can you choose 2 items from a set of 5, without regard to order (5C2)?",
        correct_answer: "10",
        incorrect_answers: ["20", "25", "7"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "What is the value of Euler's number 'e' approximated to two decimal places?",
        correct_answer: "2.72",
        incorrect_answers: ["3.14", "1.62", "2.17"],
        difficulty: "hard",
        category: "mathematics"
    },
    {
        question: "Who was the first President of the United States?",
        correct_answer: "George Washington",
        incorrect_answers: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "In which country are the Great Pyramids of Giza located?",
        correct_answer: "Egypt",
        incorrect_answers: ["Greece", "Rome", "Mexico"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "Which war was fought between the Axis and the Allied powers?",
        correct_answer: "World War II",
        incorrect_answers: ["World War I", "The Cold War", "The Vietnam War"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "The ancient Roman Empire was centered in which modern-day country?",
        correct_answer: "Italy",
        incorrect_answers: ["Greece", "Turkey", "Spain"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "Who was the famous queen of ancient Egypt known for her relationship with Mark Antony?",
        correct_answer: "Cleopatra",
        incorrect_answers: ["Nefertiti", "Hatshepsut", "Queen Victoria"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "The Renaissance, a period of great cultural change and artistic achievement, began in which country?",
        correct_answer: "Italy",
        incorrect_answers: ["France", "England", "Germany"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "What ship did the Pilgrims use to travel to North America in 1620?",
        correct_answer: "The Mayflower",
        incorrect_answers: ["The Santa Maria", "The Titanic", "The Discovery"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "The Great Wall is a famous landmark in which country?",
        correct_answer: "China",
        incorrect_answers: ["Japan", "India", "Mongolia"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "Who is credited with discovering America in 1492?",
        correct_answer: "Christopher Columbus",
        incorrect_answers: ["Leif Erikson", "Ferdinand Magellan", "Marco Polo"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "Which US President is known for the Emancipation Proclamation?",
        correct_answer: "Abraham Lincoln",
        incorrect_answers: ["George Washington", "Theodore Roosevelt", "Andrew Jackson"],
        difficulty: "easy",
        category: "history"
    },
    {
        question: "The Battle of Hastings in 1066 was fought for the throne of which country?",
        correct_answer: "England",
        incorrect_answers: ["France", "Scotland", "Spain"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "Who was the leader of the Soviet Union during World War II?",
        correct_answer: "Joseph Stalin",
        incorrect_answers: ["Vladimir Lenin", "Mikhail Gorbachev", "Nikita Khrushchev"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "The Code of Hammurabi is an ancient set of laws from which civilization?",
        correct_answer: "Babylonian",
        incorrect_answers: ["Roman", "Greek", "Egyptian"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "The Hundred Years' War was primarily fought between which two kingdoms?",
        correct_answer: "England and France",
        incorrect_answers: ["Spain and Portugal", "England and Scotland", "France and Germany"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "What event in 1517 is considered the start of the Protestant Reformation?",
        correct_answer: "Martin Luther posting his 95 Theses",
        incorrect_answers: ["The signing of the Magna Carta", "The crowning of King Henry VIII", "The Council of Trent"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "In which country did the Industrial Revolution begin?",
        correct_answer: "Great Britain",
        incorrect_answers: ["United States", "Germany", "France"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "Who was the leader of the Mongol Empire at its height?",
        correct_answer: "Genghis Khan",
        incorrect_answers: ["Attila the Hun", "Kublai Khan", "Alexander the Great"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "The ancient city of Carthage was the main rival to which empire?",
        correct_answer: "The Roman Empire",
        incorrect_answers: ["The Greek Empire", "The Persian Empire", "The Egyptian Empire"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "Which Japanese city was the first to be attacked with an atomic bomb?",
        correct_answer: "Hiroshima",
        incorrect_answers: ["Tokyo", "Nagasaki", "Kyoto"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "Apartheid was a system of racial segregation in which country?",
        correct_answer: "South Africa",
        incorrect_answers: ["India", "Australia", "Brazil"],
        difficulty: "medium",
        category: "history"
    },
    {
        question: "The Treaty of Tordesillas (1494) divided newly discovered lands between which two countries?",
        correct_answer: "Spain and Portugal",
        incorrect_answers: ["England and France", "Netherlands and Spain", "Portugal and England"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "The series of conflicts between Rome and Carthage are known by what name?",
        correct_answer: "The Punic Wars",
        incorrect_answers: ["The Peloponnesian Wars", "The Gallic Wars", "The Samnite Wars"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "What was the name of the political doctrine used to justify the westward expansion of the United States?",
        correct_answer: "Manifest Destiny",
        incorrect_answers: ["The Monroe Doctrine", "Populism", "Isolationism"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "The Meiji Restoration period led to the modernization of which country?",
        correct_answer: "Japan",
        incorrect_answers: ["China", "Korea", "Vietnam"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "The War of the Roses was a series of civil wars fought for control of the throne of which country?",
        correct_answer: "England",
        incorrect_answers: ["France", "The Holy Roman Empire", "Spain"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "Who was the last emperor of the Aztec Empire before its fall to the Spanish?",
        correct_answer: "Moctezuma II",
        incorrect_answers: ["Pachacuti", "Atahualpa", "Huayna Capac"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "The Khmer Rouge regime was responsible for a genocide in which modern-day country?",
        correct_answer: "Cambodia",
        incorrect_answers: ["Vietnam", "Laos", "Thailand"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "What was the name of the 19th-century trade conflict between Great Britain and China?",
        correct_answer: "The Opium Wars",
        incorrect_answers: ["The Spice Wars", "The Boxer Rebellion", "The Taiping Rebellion"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "The Battle of Thermopylae was fought between an alliance of Greek city-states and which empire?",
        correct_answer: "The Persian Empire",
        incorrect_answers: ["The Roman Empire", "The Ottoman Empire", "The Macedonian Empire"],
        difficulty: "hard",
        category: "history"
    },
    {
        question: "What was the name of the German republic that existed between World War I and the rise of Nazi Germany?",
        correct_answer: "The Weimar Republic",
        incorrect_answers: ["The Prussian Republic", "The Federal Republic of Germany", "The German Confederation"],
        difficulty: "hard",
        category: "history"
    },
    
]
