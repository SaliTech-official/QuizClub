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
    
]
