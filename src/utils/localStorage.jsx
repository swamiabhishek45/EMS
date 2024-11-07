const employees = [
    {
        id: 1,
        email: "emp1@example.com",
        password: "123",
        tasks: [
            {
                title: "Write Project Documentation",
                description:
                    "Complete the project documentation for the new feature.",
                category: "Documentation",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Fix Login Bugs",
                description:
                    "Resolve all bugs related to the login functionality.",
                category: "Development",
                date: "2024-10-22",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Prepare Presentation",
                description: "Create slides for the client presentation.",
                category: "Presentation",
                date: "2024-10-20",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
        ],
    },
    {
        id: 2,
        email: "emp2@example.com",
        password: "123",
        tasks: [
            {
                title: "Design Dashboard Interface",
                description:
                    "Design the user interface for the admin dashboard.",
                category: "Design",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Test New Features",
                description:
                    "Perform tests on the new features deployed on the staging environment.",
                category: "Testing",
                date: "2024-10-21",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Client Meeting Setup",
                description:
                    "Set up a meeting with the client to discuss the project updates.",
                category: "Communication",
                date: "2024-10-19",
                active: false,
                newTask: true,
                completed: false,
                failed: true,
            },
            {
                title: "Update User Manual",
                description:
                    "Revise and update the user manual for the application.",
                category: "Documentation",
                date: "2024-10-22",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 3,
        email: "emp3@example.com",
        password: "123",
        tasks: [
            {
                title: "Optimize Database Queries",
                description: "Improve the performance of database queries.",
                category: "Development",
                date: "2024-10-20",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Conduct Code Review",
                description:
                    "Review the code for the recent feature development.",
                category: "Code Review",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Write Unit Tests",
                description: "Write unit tests for the newly added features.",
                category: "Testing",
                date: "2024-10-19",
                active: false,
                newTask: true,
                completed: false,
                failed: true,
            },
            {
                title: "Deploy to Production",
                description:
                    "Deploy the latest release to the production environment.",
                category: "Deployment",
                date: "2024-10-21",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
            {
                title: "Update API Documentation",
                description: "Document the new API endpoints.",
                category: "Documentation",
                date: "2024-10-18",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
        ],
    },
    {
        id: 4,
        email: "emp4@example.com",
        password: "123",
        tasks: [
            {
                title: "Prepare Project Timeline",
                description:
                    "Create a project timeline for the next phase of development.",
                category: "Planning",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Debug Payment Gateway",
                description:
                    "Identify and resolve issues in the payment gateway integration.",
                category: "Development",
                date: "2024-10-20",
                active: false,
                newTask: false,
                completed: false,
                failed: true,
            },
            {
                title: "Organize Team Workshop",
                description:
                    "Arrange a workshop for team members on the latest tools.",
                category: "Team Management",
                date: "2024-10-19",
                active: false,
                newTask: true,
                completed: true,
                failed: false,
            },
            {
                title: "Refactor Codebase",
                description:
                    "Refactor the codebase to improve readability and performance.",
                category: "Development",
                date: "2024-10-21",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Coordinate Marketing Strategy",
                description:
                    "Collaborate with the marketing team to finalize the new strategy.",
                category: "Marketing",
                date: "2024-10-18",
                active: true,
                newTask: false,
                completed: false,
                failed: false,
            },
        ],
    },
    {
        id: 5,
        email: "emp5@example.com",
        password: "123",
        tasks: [
            {
                title: "Perform Security Audit",
                description:
                    "Conduct a security audit for the new application.",
                category: "Security",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Implement Authentication",
                description: "Add user authentication using OAuth 2.0.",
                category: "Development",
                date: "2024-10-22",
                active: false,
                newTask: true,
                completed: false,
                failed: true,
            },
            {
                title: "Write Blog Post",
                description:
                    "Draft a blog post about the latest company updates.",
                category: "Content",
                date: "2024-10-18",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "User Interviews",
                description:
                    "Conduct user interviews to gather feedback on the new feature.",
                category: "User Research",
                date: "2024-10-21",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
            {
                title: "Review Analytics Data",
                description:
                    "Analyze website analytics data to understand user behavior.",
                category: "Analytics",
                date: "2024-10-19",
                active: false,
                newTask: false,
                completed: true,
                failed: false,
            },
            {
                title: "Prepare Training Materials",
                description: "Create training materials for the new hires.",
                category: "Training",
                date: "2024-10-23",
                active: true,
                newTask: true,
                completed: false,
                failed: false,
            },
        ],
    },
];

const admin = [
    {
        id: 1,
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
};
