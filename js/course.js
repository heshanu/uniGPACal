/* 

GPA Calculator by Nuwan94
https://github.com/nuwan94/se-gpa-calculator

*/


var courseName = "B Tech in Software Technology - University of Vocational Technology";

var courseUnits = [
    {
        year: '1',
        sems: [
            {
                sem: '1',
                semCredits: 24,
                subs: [{
                    name: 'Mathematics for ICT 1',
                    id: 'IT103011',
                    moduleCredit: 3
                }, {
                    name: 'Computer Programming',
                    id: 'IT104021',
                    moduleCredit: 4
                }, {
                    name: 'Software Development Practices',
                    id: 'IT104031',
                    moduleCredit: 4
                }, {
                    name: 'Data Communication and Network',
                    id: 'IT104051',
                    moduleCredit: 3
                }, {
                    name: 'Digital Eletronics',
                    id: 'IT104041',
                    moduleCredit: 3
                }, {
                    name: 'Database Design',
                    id: 'IT104061',
                    moduleCredit: 3
                },
                {
                    name: 'Internet Techonlogy',
                    id: 'IT104071',
                    moduleCredit: 4
                },

                ]
            },
            {
                sem: '2',
                semCredits: 31,
                subs: [{
                    name: 'Operation Systems',
                    id: 'IT202011',
                    moduleCredit: 2
                }, {
                    name: 'Mathematics for ICT 11',
                    id: 'IT203021',
                    moduleCredit: 3
                }, {
                    name: 'Computer Architecture',
                    id: 'IT203031',
                    moduleCredit: 3
                }, {
                    name: 'Data Struture and Algorithms',
                    id: 'IT204041',
                    moduleCredit: 4
                }, {
                    name: 'Database and programming',
                    id: 'IT206051',
                    moduleCredit: 6
                }, {
                    name: 'Visual Programming 1',
                    id: 'IT204061',
                    moduleCredit: 4
                },
                {
                    name: 'Web Programming',
                    id: 'IT206071',
                    moduleCredit: 6
                },
                {
                    name: 'Computer Network',
                    id: 'IT203081',
                    moduleCredit: 3
                },
                    // {
                    //     name: 'Visual Programming',
                    //     id: 'IT203091'
                    // },
                ]
            }
        ]
    },
    {
        year: '2',
        sems: [
            {
                sem: '3',
                semCredits: 32,
                subs: [
                    {
                        name: 'Web Technology and Application',
                        id: 'IT304011',
                        moduleCredit: 4
                    }, {
                        name: 'PIP',
                        id: 'IT304021', moduleCredit: 4
                    }, {
                        name: 'Visual Programming 11',
                        id: 'IT306031', moduleCredit: 6
                    }, {
                        name: 'Software Arch and Design',
                        id: 'IT306041', moduleCredit: 6
                    },
                    {
                        name: 'Software Deployment and Evolution',
                        id: 'IT306051', moduleCredit: 4
                    }
                    , {
                        name: 'Database Implmentation',
                        id: 'IT304061', moduleCredit: 4
                    }, {
                        name: 'Entrepreurship Development and Management',
                        id: 'MS304121', moduleCredit: 4
                    }
                    //, {
                    //     id: "IT302160",
                    //     name: "Professional Practices"
                    // }, {
                    //     name: 'Interactive Application Development',
                    //     id: 'SENG 21263',
                    //     type: 'o'
                    //     }
                ]
            },
            {
                sem: '4',
                semCredits: 28,
                subs: [{
                    name: 'Mobile Application Development',
                    id: 'IT404010'
                }, {
                    name: 'Cloud Based Application Development',
                    id: 'IT404020'
                }, {
                    name: 'Human Computer Interaction',
                    id: 'IT402030'
                }, {
                    name: 'Real Time Programming',
                    id: 'IT404041'
                }, {
                    name: 'Software Testing and Reliability',
                    id: 'IT406051'
                }, {
                    name: 'Enterprising System Technologies and Arch',
                    id: 'IT406051',
                    // type: 'o'
                }, {
                    name: 'UX Enginneering',
                    id: 'IT402070',
                    //type: 'o'
                },
                {
                    name: 'Research Methodolgy',
                    id: 'MS403130',
                    //type: 'o'
                },

                ]
            }
        ]
    },
    {
        year: '3',
        // sems: [{
        //     sem: '5',
        //     subs: [{
        //         id: "SENG 31212",
        //         name: "Software Quality"
        //     }, {
        //         id: "SENG 31222",
        //         name: "Information Security"
        //     }, {
        //         id: "SENG 31232",
        //         name: "Software Project Management"
        //     }, {
        //         id: "SENG 31242",
        //         name: "System Design Project"
        //     }, {
        //         id: "SENG 31262",
        //         name: "Research Methods"
        //     }, {
        //         id: "SENG 31282",
        //         name: "Computer Network Management",
        //         type: 'o'
        //     },

        //     // Not Available for 2015/16
        //     {
        //         id: "SENG 31272",
        //         name: "Internet of Things",
        //         type: 'o'
        //     }, {
        //         id: "SENG 31292",
        //         name: "Enterprise Information Systems",
        //         type: 'o'
        //     },
        //     {
        //         id: "SENG 34222",
        //         name: "Software Process"
        //     }, {
        //         id: "SENG 31313",
        //         name: "Advanced Web Applications Development",
        //         type: 'n'
        //     }, {
        //         id: "SENG 31323",
        //         name: "Mobile Computing Technologies",
        //         type: 'm'
        //     }, {
        //         id: "SENG 31333",
        //         name: "Business Intelligence and Management Support Systems",
        //         type: 'd'
        //     }, {
        //         id: "SENG 31343",
        //         name: "Health Information Management",
        //         type: 'h'
        //     }, {
        //         id: "SENG 31353",
        //         name: "Game Development Technology",
        //         type: 'g'
        //     }, {
        //         id: "SENG 31363",
        //         name: "Business Systems Modelling and Optimization",
        //         type: 'b'
        //     }
        //     ]

        // },

        sem: '6',
        subs: [{
            id: "IT604011",
            name: "Professional Issues in IT"
        },
        {
            id: "IT604021",
            name: "Enterprise System Design"
        },
        {
            id: "IT604030",
            name: "Enterprise Resource plaining Systems"
        },
        {
            id: "IT604040",
            name: "Intelligent Systems"
        },
        {
            id: "IT604051",
            name: "Information Systems Security And Practices"
        },
        {
            id: "IT604061",
            name: "Software project management"
        },
        {
            id: "IT604071",
            name: "Enterprise Application Development"
        },
        {
            id: "IT604090",
            name: "Game Development and programming"
        },
        {
            id: "IT603100",
            name: "Digital Marketing"
        },
        {
            id: "IT612111",
            name: "Final Year Project"
        },
        ]
    }
    // ]
    // , {
    //     year: '4',
    //     sems: [{
    //         sem: '7',
    //         subs: [{
    //             name: 'Software Evolution',
    //             id: 'SENG 41212'
    //         }, {
    //             name: 'Software Metrics and Measurements',
    //             id: 'SENG 41222'
    //         }, {
    //             name: 'Digital Image Processing',
    //             id: 'SENG 41233',
    //             type: 'o'
    //         }, {
    //             name: 'Advanced Databases',
    //             id: 'SENG 41242',
    //             type: 'o'
    //         }, {
    //             name: 'Advanced Computer Networks',
    //             id: 'SENG 41252',
    //             type: 'o'
    //         }, {
    //             name: 'Speech Interfaces',
    //             id: 'SENG 41262',
    //             type: 'o'
    //         }, {
    //             name: 'Formal Methods',
    //             id: 'SENG 41272',
    //             type: 'o'
    //         }, {
    //             id: "SENG 41283",
    //             name: "Distributed and Cloud Computing",
    //             type: 'n'
    //         }, {
    //             id: "SENG 41293",
    //             name: "Mobile Web Application Development",
    //             type: 'm'
    //         }, {
    //             id: "SENG 41303",
    //             name: "Big Data Infrastructure",
    //             type: 'd'
    //         }, {
    //             id: "SENG 41313",
    //             name: "Health Information Systems Design and Development",
    //             type: 'h'
    //         }, {
    //             id: "SENG 41323",
    //             name: "Games Design, Artwork, and Programming",
    //             type: 'g'
    //         }, {
    //             id: "SENG 41333",
    //             name: "Computer Based Operations Management",
    //             type: 'b'
    //         }]
    //     },
    //     {
    //         sem: '8',
    //         subs: [{
    //             name: 'Software Safety and Reliability',
    //             id: 'SENG 42212'
    //         }, {
    //             name: 'Software Engineering Research Project',
    //             id: 'SENG 43216'
    //         }, {
    //             name: 'Usability Engineering',
    //             id: 'SENG 42222',
    //             type: 'o'
    //         }, {
    //             name: 'Software Management',
    //             id: 'SENG 42232',
    //             type: 'o'
    //         }, {
    //             name: 'Machine Learning',
    //             id: 'SENG 42242',
    //             type: 'o'
    //         }, {
    //             name: 'Computer Graphics',
    //             id: 'SENG 42252',
    //             type: 'o'
    //         }, {
    //             id: "SENG 42273",
    //             name: "Semantic Web and Ontological Engineering",
    //             type: 'n'
    //         }, {
    //             id: "SENG 42283",
    //             name: "Mobile Networks",
    //             type: 'm'
    //         }, {
    //             id: "SENG 42293",
    //             name: "Big Data Analytics",
    //             type: 'd'
    //         }, {
    //             id: "SENG 42303",
    //             name: "Medical Imaging and Biomedical Signal Processing",
    //             type: 'h'
    //         }, {
    //             id: "SENG 42313",
    //             name: "Advanced Topics in Game Design and Animation",
    //             type: 'g'
    //         }, {
    //             id: "SENG 42323",
    //             name: "Business Process Engineering",
    //             type: 'b'
    //         }]
    //     }
    //     ]
    // }
];
