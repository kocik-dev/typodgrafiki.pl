const data = {
    name: 'Grzegorz Kocik',
    experienceYears: '10 lat doświadczenia',
    contact: {
        email: 'grzegorz.kocik.pn@gmail.com',
        phone: '+48 516 804 511',
        linedin: 'https://www.linkedin.com/in/grzegorz-kocik/',
        www: 'http://typodgrafiki.pl'
    },
    aboutMe: 'Frontend developer o zapleczu graficznym z doświadczeniem w tworzeniu warstwy graficznej ecommerce. Szukam możliwości rozwoju przy projektach wykorzystujących nowe technologie (React)',
    techSkils: [
        ['Front-end', 'HTML5, CSS3, Bootstrap, SCSS/LESS, JavaScript, jQuery, React'],
        ['Code tools', 'VSC, Terminal'],
        ['Design Tools', 'Figma, Photoshop, Illustrator'],
        ['Others', 'SVN, Github, Jira']
    ],
    experience: {
        name: 'Doświadczenie zawodowe',
        works: [
            [
                {
                    date: '04.2012 - now',
                    position: 'Frontend Developer / Web designer',
                    company: 'SOTE / Poznań',
                    tasks: [
                        'Tworzenie projektów graficznych ecommerce zgodnej z dobrymi praktykami UX/UI,',
                        'Tworzenie warstwy frontend aplikacji w oparciu o silnik oprogramowania  SOTESHOP (bazując na projekcie graficznym),',
                        'Wykonywanie modyfikacji graficznych / frontend w sklepach klientów,',
                        'Uwzględnianie wymogów SEO,',
                        'Rozbudowa i ulepszanie oprogramowania SOTESHOP,',
                        'Projektowanie elementów graficznych,',
                        'Debugowanie i naprawa błędów na stronach klientów,',
                        'Technologie: Czysty HTML5/CSS3, JavaScript DOM, jQuery, Bootstrap, LESS'
                    ]
                },
            ] , [
                {
                    date: '10.2013 - 03.2014',
                    position: 'Junior Frontend Developer',
                    company: 'AXI / Poznań',
                    tasks: [
                        'Tworzenie warstwy frontend aplikacji w oparciu o silnik oprogramowania  AXI (bazując na projekcie graficznym),',
                        'Debugowanie i naprawa błędów w istniejących stronach,',
                        'Rozbudowa skton klientów,',
                        'Technologie: HTML5, CSS3, jQuery,'
                    ]
                }      
            ]
        ] 
    },
    side: [
        ['04.2015', 'Konkurs'],
        ['---', 'projekt własny js - opisac ze uzywam tu aby rozwinac sie poza praca bo tam nie ma'],
        ['---', 'jakies uniwersalne style na github albo system design']
    ],
    languages: [
        ['polish', 'ojczysty'],
        ['english', 'podstawowy']
    ],
    education: {
        date: '09.2014 - 09.2017',
        field: 'Grafika - studia zaoczne,',
        name: 'Collegium da Vinci',
        spec: 'Specjalizacja: Grafika wydawnicza'
    },
    interests: 'bieganie, trekking górski'
}

export { data }