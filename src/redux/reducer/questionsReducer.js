
const INITIAL_STATE = {
    questions: {

            pl:{
                javascript: {
                    easy: {
                        1: [

                            {
                                question: 'Jak dodać elementy do tablicy?',
                                a: 'push',
                                b: 'slice',
                                c: 'add',
                                d: 'remove',
                                correctAnswer: 'push',
                            },

                        ],
                        2: [
                            {
                                question: 'Do czego służy operator typeof?',
                                a: 'Zmienia typ',
                                b: 'Tworzy nowy typ',
                                c: 'Nie ma takiego operatora',
                                d: 'Operator typeof zwraca typ operandu w postaci ciągu znaków',
                                correctAnswer: 'Operator typeof zwraca typ operandu w postaci ciągu znaków',
                            },
                        ],
                        3: [
                            {
                                question: 'Który z poniższych elementów jest poprawnym wyjściem dla następującego kodu JavaScript:',
                                questionDescription:
                                    `1.\tconst = "Qualiyt Point Technologies";
                                     2.\tconst result = qpt.split(" ");
                                     3.\tdocument.write(result);`,
                                a: 'Quality',
                                b: 'Q,u,a,l,i,t,y,P,o,i,n,t,T,e,c,h,n,o,l,o,g,i,e,s',
                                c: 'Qualiyt,Point,Technologies',
                                d: 'QualityPointTechnologies',
                                correctAnswer: 'Qualiyt,Point,Technologies',
                            }
                        ],
                        4: [
                            {
                                question: 'Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków:',
                                a: '#',
                                b: '<?',
                                c: '<--!',
                                d: '//',
                                correctAnswer: '//',
                            }
                        ],
                        5: [
                            {
                                question: 'Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę:',
                                a: 'onLoad',
                                b: 'onDblClick',
                                c: 'onClick',
                                d: 'onKeyDown',
                                correctAnswer: 'onClick',
                            }
                        ],
                        6: [
                            {
                                question: 'W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:',
                                a: 'if (liczba < 100 || liczba >= 200)',
                                b: 'if (liczba > 100 && liczba <= 200)',
                                c: 'if (liczba > 100 || liczba <= 200)',
                                d: 'if (liczba < 100 && liczba <= 200)',
                                correctAnswer: 'if (liczba > 100 && liczba <= 200)',
                            }
                        ],
                        7: [
                            {
                                question: 'Kiedy został wprowadzony EcmaScript 6?',
                                a: 'Nie ma czegoś takiego',
                                b: '2021',
                                c: '2015',
                                d: '2018',
                                correctAnswer: '2015',
                            }
                        ],
                        8: [
                            {
                                question: 'W którym roku powstał Javascript?',
                                a: '2001',
                                b: '1996',
                                c: '1995',
                                d: '1899',
                                correctAnswer: '1995',
                            }
                        ],
                        9: [
                            {
                                question: 'Jak się nazywa twórca Javascript?',
                                a: 'Brendan Eich',
                                b: 'Bill Gates',
                                c: 'Elon Musk',
                                d: 'Linus Torvalds',
                                correctAnswer: 'Brendan Eich',
                            }
                        ],
                    },
                    hard: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                },
                html: {
                    easy: {
                        1: [
                            {
                                question: 'Który z nagłówków domyślnie zostanie zapisany najmniejszą czcionką?',
                                a: '<h>',
                                b: '<h1>',
                                c: '<h6>',
                                d: '<h7>',
                                correctAnswer: '<h6>',
                            },
                        ],
                        2: [
                            {
                                question: 'Główna treść dokumentu zawiera się w znacznikach:',
                                a: '<html> </html>',
                                b: '<title> </title>',
                                c: '<meta> </meta>',
                                d: '<body> </body>',
                                correctAnswer: '<body> </body>',
                            },
                        ],
                        3: [
                            {
                                question: 'Do przejścia do nowego wiersza (przełamania wiersza) służy polecenie:',
                                a: '<p>',
                                b: '<bg/>',
                                c: '<br/>',
                                d: '<br></br>',
                                correctAnswer: '<br/>',
                            },
                        ],
                        4: [
                            {
                                question: 'Aby wstawić odsyłacz (link) do strony kontakt.html należy użyć polecenia:',
                                a: '<a img="kontakt.html" />',
                                b: '<a link="kontakt.html" />',
                                c: '<a href="kontakt.html" />',
                                d: '<a body="kontakt.html" />',
                                correctAnswer: '<a href="kontakt.html" />',
                            },
                        ],
                        5: [
                            {
                                question: 'Jak dołączyć arkusz stylów CSS z zewnętrznego pliku?',
                                a: '<link rel="stylesheet" href="style.css">',
                                b: '<link rel="css" href="style.css"></link>',
                                c: '<link href="stylesheet" rel="style.css">',
                                d: '<link rel="stylesheet" src="style.css">',
                                correctAnswer: '<link rel="stylesheet" href="style.css">',
                            },
                        ],
                        6: [
                            {
                                question: 'Pojedynczy element listy definiujemy tagiem:',
                                a: '<li>',
                                b: '<ul>',
                                c: '<ol>',
                                d: '<lo>',
                                correctAnswer: '<li>',
                            },
                        ],

                        7: [
                            {
                                question: 'Atrybut placeholder pola edycyjnego określa:',
                                a: 'wartość wpisaną wewnątrz pola',
                                b: 'typ danych oczekiwany w polu',
                                c: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
                                d: 'alternatywny tekst, pojawiający się w razie niepoprawnego wczytania pola',
                                correctAnswer: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
                            },
                        ],
                        8: [
                            {
                                question: 'Aby zacytować czyjeś słowa w tzw. zapisie inline (czyli w ramach własnej wypowiedzi, bez wyrywania cytatu do osobnego paragrafu), należy zastosować znacznik:',
                                a: '<q>',
                                b: '<quote>',
                                c: '<cite>',
                                d: '<blockquote>',
                                correctAnswer: '<q>',
                            },
                        ],
                        9: [
                            {
                                question: 'Kiedy powstał HTML?',
                                a: '1990',
                                b: '2001',
                                c: '1981',
                                d: '1995',
                                correctAnswer: '1990',
                            },
                        ],
                    },
                    hard: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                },
                css: {
                    easy: {
                        1: [
                            {
                                question: 'Komentarz w CSS ma postać:',
                                a: '<!-- komentarz --> ',
                                b: '// komentarz',
                                c: '/* komentarz */',
                                d: '\t\\\\',
                                correctAnswer: '/* komentarz */',
                            },
                            {
                                question: 'Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość',
                                a: 'font-style: Verdana;',
                                b: 'font-weight: Verdana;',
                                c: 'font-name: Verdana;',
                                d: 'font-family: Verdana;',
                                correctAnswer: 'font-family: Verdana;',
                            },
                        ],
                        2: [
                            {
                                question: 'W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstępu między elementem a otaczającym go obramowaniem, należy użyć polecenia',
                                a: 'local-top',
                                b: 'outline-top',
                                c: 'padding-top',
                                d: 'border-top',
                                correctAnswer: 'padding-top',
                            },
                        ],
                        3: [
                            {
                                question: 'W języku CSS, aby formatować tekst poprzez: przekreślenie, podkreślenie dolne lub podkreślenie górne, należy zastosować właściwość',
                                a: 'text-align',
                                b: 'text-transform',
                                c: 'text-decoration',
                                d: 'text-indent',
                                correctAnswer: 'text-decoration',
                            },
                            {
                                question: 'Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości',
                                a: 'text-decoration',
                                b: 'letter-spacing',
                                c: 'letter-transform',
                                d: 'text-space',
                                correctAnswer: 'letter-spacing',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                    hard: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: 'Kolor zapisany w postaci szesnastkowej o następującej wartości: #11FE07 w kodzie RGB ma postać',
                                a: 'rgb(17,254,7)',
                                b: 'rgb(17,255,7)',
                                c: 'rgb(11,127,7)',
                                d: 'rgb(17,FE,7)',
                                correctAnswer: 'rgb(17,254,7)',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                },
                react: {
                    easy: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                    hard: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                },
                vue: {
                    easy: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                    hard: {
                        1: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        2: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        3: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        4: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        5: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        6: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        7: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        8: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                        9: [
                            {
                                question: '',
                                a: '',
                                b: '',
                                c: '',
                                d: '',
                                correctAnswer: '',
                            },
                        ],
                    },
                },
            },
        //     en: {
        //         javascript: {
        //             easy: {
        //                 1: [
        //
        //                     {
        //                         question: 'How do I add elements to an array?',
        //                         a: 'push',
        //                         b: 'slice',
        //                         c: 'add',
        //                         d: 'remove',
        //                         correctAnswer: 'push',
        //                     },
        //
        //                 ],
        //                 2: [
        //                     {
        //                         question: 'What is the typeof operator used for?',
        //                         a: 'Changes the type',
        //                         b: 'Creates a new type',
        //                         c: 'There is no such operator',
        //                         d: 'The typeof operator returns the type of operand as a string',
        //                         correctAnswer: 'The typeof operator returns the type of operand as a string',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: 'Które wartości będą kolejno wypisane w wyniku działania przedstawionego skryptu?',
        //                         a: '2 1 1',
        //                         b: '1 2 2',
        //                         c: '2 2 1',
        //                         d: '1 2 1',
        //                         correctAnswer: '2 2 1',
        //                         image: '../question-image-1.png',
        //                     }
        //                 ],
        //                 4: [
        //                     {
        //                         question: 'Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków:',
        //                         a: '#',
        //                         b: '<?',
        //                         c: '<--!',
        //                         d: '//',
        //                         correctAnswer: '//',
        //                     }
        //                 ],
        //                 5: [
        //                     {
        //                         question: 'Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę:',
        //                         a: 'onLoad',
        //                         b: 'onDblClick',
        //                         c: 'onClick',
        //                         d: 'onKeyDown',
        //                         correctAnswer: 'onClick',
        //                     }
        //                 ],
        //                 6: [
        //                     {
        //                         question: 'W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:',
        //                         a: 'if (liczba < 100 || liczba >= 200)',
        //                         b: 'if (liczba > 100 && liczba <= 200)',
        //                         c: 'if (liczba > 100 || liczba <= 200)',
        //                         d: 'if (liczba < 100 && liczba <= 200)',
        //                         correctAnswer: 'if (liczba > 100 && liczba <= 200)',
        //                     }
        //                 ],
        //                 7: [
        //                     {
        //                         question: 'Kiedy został wprowadzony EcmaScript 6?',
        //                         a: 'Nie ma czegoś takiego',
        //                         b: '2021',
        //                         c: '2015',
        //                         d: '2018',
        //                         correctAnswer: '2015',
        //                     }
        //                 ],
        //                 8: [
        //                     {
        //                         question: 'W którym roku powstał Javascript?',
        //                         a: '2001',
        //                         b: '1996',
        //                         c: '1995',
        //                         d: '1899',
        //                         correctAnswer: '1995',
        //                     }
        //                 ],
        //                 9: [
        //                     {
        //                         question: 'Jak się nazywa twórca Javascript?',
        //                         a: 'Brendan Eich',
        //                         b: 'Bill Gates',
        //                         c: 'Elon Musk',
        //                         d: 'Linus Torvalds',
        //                         correctAnswer: 'Brendan Eich',
        //                     }
        //                 ],
        //             },
        //             hard: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //         },
        //         html: {
        //             easy: {
        //                 1: [
        //                     {
        //                         question: 'Which headline will be written in the smallest font by default?',
        //                         a: '<h>',
        //                         b: '<h1>',
        //                         c: '<h6>',
        //                         d: '<h7>',
        //                         correctAnswer: '<h6>',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: 'The main content of the document is contained in the tags:',
        //                         a: '<html> </html>',
        //                         b: '<title> </title>',
        //                         c: '<meta> </meta>',
        //                         d: '<body> </body>',
        //                         correctAnswer: '<body> </body>',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: 'Do przejścia do nowego wiersza (przełamania wiersza) służy polecenie:',
        //                         a: '<p>',
        //                         b: '<bg/>',
        //                         c: '<br/>',
        //                         d: '<br></br>',
        //                         correctAnswer: '<br/>',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: 'Aby wstawić odsyłacz (link) do strony kontakt.html należy użyć polecenia:',
        //                         a: '<a img="kontakt.html" />',
        //                         b: '<a link="kontakt.html" />',
        //                         c: '<a href="kontakt.html" />',
        //                         d: '<a body="kontakt.html" />',
        //                         correctAnswer: '<a href="kontakt.html" />',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: 'Jak dołączyć arkusz stylów CSS z zewnętrznego pliku?',
        //                         a: '<link rel="stylesheet" href="style.css">',
        //                         b: '<link rel="css" href="style.css"></link>',
        //                         c: '<link href="stylesheet" rel="style.css">',
        //                         d: '<link rel="stylesheet" src="style.css">',
        //                         correctAnswer: '<link rel="stylesheet" href="style.css">',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: 'Pojedynczy element listy definiujemy tagiem:',
        //                         a: '<li>',
        //                         b: '<ul>',
        //                         c: '<ol>',
        //                         d: '<lo>',
        //                         correctAnswer: '<li>',
        //                     },
        //                 ],
        //
        //                 7: [
        //                     {
        //                         question: 'Atrybut placeholder pola edycyjnego określa:',
        //                         a: 'wartość wpisaną wewnątrz pola',
        //                         b: 'typ danych oczekiwany w polu',
        //                         c: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
        //                         d: 'alternatywny tekst, pojawiający się w razie niepoprawnego wczytania pola',
        //                         correctAnswer: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: 'Aby zacytować czyjeś słowa w tzw. zapisie inline (czyli w ramach własnej wypowiedzi, bez wyrywania cytatu do osobnego paragrafu), należy zastosować znacznik:',
        //                         a: '<q>',
        //                         b: '<quote>',
        //                         c: '<cite>',
        //                         d: '<blockquote>',
        //                         correctAnswer: '<q>',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: 'Kiedy powstał HTML?',
        //                         a: '1990',
        //                         b: '2001',
        //                         c: '1981',
        //                         d: '1995',
        //                         correctAnswer: '1990',
        //                     },
        //                 ],
        //             },
        //             hard: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //         },
        //         css: {
        //             easy: {
        //                 1: [
        //                     {
        //                         question: 'Komentarz w CSS ma postać:',
        //                         a: '<!-- komentarz --> ',
        //                         b: '// komentarz',
        //                         c: '/* komentarz */',
        //                         d: '\t\\\\',
        //                         correctAnswer: '/* komentarz */',
        //                     },
        //                     {
        //                         question: 'Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość',
        //                         a: 'font-style: Verdana;',
        //                         b: 'font-weight: Verdana;',
        //                         c: 'font-name: Verdana;',
        //                         d: 'font-family: Verdana;',
        //                         correctAnswer: 'font-family: Verdana;',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: 'W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstępu między elementem a otaczającym go obramowaniem, należy użyć polecenia',
        //                         a: 'local-top',
        //                         b: 'outline-top',
        //                         c: 'padding-top',
        //                         d: 'border-top',
        //                         correctAnswer: 'padding-top',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: 'W języku CSS, aby formatować tekst poprzez: przekreślenie, podkreślenie dolne lub podkreślenie górne, należy zastosować właściwość',
        //                         a: 'text-align',
        //                         b: 'text-transform',
        //                         c: 'text-decoration',
        //                         d: 'text-indent',
        //                         correctAnswer: 'text-decoration',
        //                     },
        //                     {
        //                         question: 'Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości',
        //                         a: 'text-decoration',
        //                         b: 'letter-spacing',
        //                         c: 'letter-transform',
        //                         d: 'text-space',
        //                         correctAnswer: 'letter-spacing',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //             hard: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: 'Kolor zapisany w postaci szesnastkowej o następującej wartości: #11FE07 w kodzie RGB ma postać',
        //                         a: 'rgb(17,254,7)',
        //                         b: 'rgb(17,255,7)',
        //                         c: 'rgb(11,127,7)',
        //                         d: 'rgb(17,FE,7)',
        //                         correctAnswer: 'rgb(17,254,7)',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //         },
        //         react: {
        //             easy: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //             hard: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //         },
        //         vue: {
        //             easy: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //             hard: {
        //                 1: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 2: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 3: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 4: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 5: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 6: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 7: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 8: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //                 9: [
        //                     {
        //                         question: '',
        //                         a: '',
        //                         b: '',
        //                         c: '',
        //                         d: '',
        //                         correctAnswer: '',
        //                     },
        //                 ],
        //             },
        //         },
        //     },
        //     de: {
        //     javascript: {
        //         easy: {
        //             1: [
        //
        //                 {
        //                     question: 'How do I add elements to an array?',
        //                     a: 'push',
        //                     b: 'slice',
        //                     c: 'add',
        //                     d: 'remove',
        //                     correctAnswer: 'push',
        //                 },
        //
        //             ],
        //             2: [
        //                 {
        //                     question: 'What is the typeof operator used for?',
        //                     a: 'Changes the type',
        //                     b: 'Creates a new type',
        //                     c: 'There is no such operator',
        //                     d: 'The typeof operator returns the type of operand as a string',
        //                     correctAnswer: 'The typeof operator returns the type of operand as a string',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: 'Które wartości będą kolejno wypisane w wyniku działania przedstawionego skryptu?',
        //                     a: '2 1 1',
        //                     b: '1 2 2',
        //                     c: '2 2 1',
        //                     d: '1 2 1',
        //                     correctAnswer: '2 2 1',
        //                     image: '../question-image-1.png',
        //                 }
        //             ],
        //             4: [
        //                 {
        //                     question: 'Komentarz w języku JavaScript rozpoczyna się od znaku lub znaków:',
        //                     a: '#',
        //                     b: '<?',
        //                     c: '<--!',
        //                     d: '//',
        //                     correctAnswer: '//',
        //                 }
        //             ],
        //             5: [
        //                 {
        //                     question: 'Zdarzenie JavaScript, będące reakcją na pojedynczo kliknięty dowolny element strony, nosi nazwę:',
        //                     a: 'onLoad',
        //                     b: 'onDblClick',
        //                     c: 'onClick',
        //                     d: 'onKeyDown',
        //                     correctAnswer: 'onClick',
        //                 }
        //             ],
        //             6: [
        //                 {
        //                     question: 'W języku JavaScript, aby sprawdzić warunek czy liczba znajduje się w przedziale (100;200>, należy zapisać:',
        //                     a: 'if (liczba < 100 || liczba >= 200)',
        //                     b: 'if (liczba > 100 && liczba <= 200)',
        //                     c: 'if (liczba > 100 || liczba <= 200)',
        //                     d: 'if (liczba < 100 && liczba <= 200)',
        //                     correctAnswer: 'if (liczba > 100 && liczba <= 200)',
        //                 }
        //             ],
        //             7: [
        //                 {
        //                     question: 'Kiedy został wprowadzony EcmaScript 6?',
        //                     a: 'Nie ma czegoś takiego',
        //                     b: '2021',
        //                     c: '2015',
        //                     d: '2018',
        //                     correctAnswer: '2015',
        //                 }
        //             ],
        //             8: [
        //                 {
        //                     question: 'W którym roku powstał Javascript?',
        //                     a: '2001',
        //                     b: '1996',
        //                     c: '1995',
        //                     d: '1899',
        //                     correctAnswer: '1995',
        //                 }
        //             ],
        //             9: [
        //                 {
        //                     question: 'Jak się nazywa twórca Javascript?',
        //                     a: 'Brendan Eich',
        //                     b: 'Bill Gates',
        //                     c: 'Elon Musk',
        //                     d: 'Linus Torvalds',
        //                     correctAnswer: 'Brendan Eich',
        //                 }
        //             ],
        //         },
        //         hard: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //     },
        //     html: {
        //         easy: {
        //             1: [
        //                 {
        //                     question: 'Which headline will be written in the smallest font by default?',
        //                     a: '<h>',
        //                     b: '<h1>',
        //                     c: '<h6>',
        //                     d: '<h7>',
        //                     correctAnswer: '<h6>',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: 'The main content of the document is contained in the tags:',
        //                     a: '<html> </html>',
        //                     b: '<title> </title>',
        //                     c: '<meta> </meta>',
        //                     d: '<body> </body>',
        //                     correctAnswer: '<body> </body>',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: 'Do przejścia do nowego wiersza (przełamania wiersza) służy polecenie:',
        //                     a: '<p>',
        //                     b: '<bg/>',
        //                     c: '<br/>',
        //                     d: '<br></br>',
        //                     correctAnswer: '<br/>',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: 'Aby wstawić odsyłacz (link) do strony kontakt.html należy użyć polecenia:',
        //                     a: '<a img="kontakt.html" />',
        //                     b: '<a link="kontakt.html" />',
        //                     c: '<a href="kontakt.html" />',
        //                     d: '<a body="kontakt.html" />',
        //                     correctAnswer: '<a href="kontakt.html" />',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: 'Jak dołączyć arkusz stylów CSS z zewnętrznego pliku?',
        //                     a: '<link rel="stylesheet" href="style.css">',
        //                     b: '<link rel="css" href="style.css"></link>',
        //                     c: '<link href="stylesheet" rel="style.css">',
        //                     d: '<link rel="stylesheet" src="style.css">',
        //                     correctAnswer: '<link rel="stylesheet" href="style.css">',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: 'Pojedynczy element listy definiujemy tagiem:',
        //                     a: '<li>',
        //                     b: '<ul>',
        //                     c: '<ol>',
        //                     d: '<lo>',
        //                     correctAnswer: '<li>',
        //                 },
        //             ],
        //
        //             7: [
        //                 {
        //                     question: 'Atrybut placeholder pola edycyjnego określa:',
        //                     a: 'wartość wpisaną wewnątrz pola',
        //                     b: 'typ danych oczekiwany w polu',
        //                     c: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
        //                     d: 'alternatywny tekst, pojawiający się w razie niepoprawnego wczytania pola',
        //                     correctAnswer: 'wewnętrzną podpowiedź, która zniknie podczas wpisywania wartości pola',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: 'Aby zacytować czyjeś słowa w tzw. zapisie inline (czyli w ramach własnej wypowiedzi, bez wyrywania cytatu do osobnego paragrafu), należy zastosować znacznik:',
        //                     a: '<q>',
        //                     b: '<quote>',
        //                     c: '<cite>',
        //                     d: '<blockquote>',
        //                     correctAnswer: '<q>',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: 'Kiedy powstał HTML?',
        //                     a: '1990',
        //                     b: '2001',
        //                     c: '1981',
        //                     d: '1995',
        //                     correctAnswer: '1990',
        //                 },
        //             ],
        //         },
        //         hard: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //     },
        //     css: {
        //         easy: {
        //             1: [
        //                 {
        //                     question: 'Komentarz w CSS ma postać:',
        //                     a: '<!-- komentarz --> ',
        //                     b: '// komentarz',
        //                     c: '/* komentarz */',
        //                     d: '\t\\\\',
        //                     correctAnswer: '/* komentarz */',
        //                 },
        //                 {
        //                     question: 'Aby ustawić czcionkę Verdana w kodzie CSS, należy wykorzystać właściwość',
        //                     a: 'font-style: Verdana;',
        //                     b: 'font-weight: Verdana;',
        //                     c: 'font-name: Verdana;',
        //                     d: 'font-family: Verdana;',
        //                     correctAnswer: 'font-family: Verdana;',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: 'W języku CSS, w celu zdefiniowania wewnętrznego górnego marginesu, czyli odstępu między elementem a otaczającym go obramowaniem, należy użyć polecenia',
        //                     a: 'local-top',
        //                     b: 'outline-top',
        //                     c: 'padding-top',
        //                     d: 'border-top',
        //                     correctAnswer: 'padding-top',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: 'W języku CSS, aby formatować tekst poprzez: przekreślenie, podkreślenie dolne lub podkreślenie górne, należy zastosować właściwość',
        //                     a: 'text-align',
        //                     b: 'text-transform',
        //                     c: 'text-decoration',
        //                     d: 'text-indent',
        //                     correctAnswer: 'text-decoration',
        //                 },
        //                 {
        //                     question: 'Aby uzyskać efekt rozstrzelenia liter w selektorze CSS, należy użyć właściwości',
        //                     a: 'text-decoration',
        //                     b: 'letter-spacing',
        //                     c: 'letter-transform',
        //                     d: 'text-space',
        //                     correctAnswer: 'letter-spacing',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //         hard: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: 'Kolor zapisany w postaci szesnastkowej o następującej wartości: #11FE07 w kodzie RGB ma postać',
        //                     a: 'rgb(17,254,7)',
        //                     b: 'rgb(17,255,7)',
        //                     c: 'rgb(11,127,7)',
        //                     d: 'rgb(17,FE,7)',
        //                     correctAnswer: 'rgb(17,254,7)',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //     },
        //     react: {
        //         easy: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //         hard: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //     },
        //     vue: {
        //         easy: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //         hard: {
        //             1: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             2: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             3: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             4: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             5: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             6: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             7: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             8: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //             9: [
        //                 {
        //                     question: '',
        //                     a: '',
        //                     b: '',
        //                     c: '',
        //                     d: '',
        //                     correctAnswer: '',
        //                 },
        //             ],
        //         },
        //     },
        // }

    },
    questionsPrice: ['500', '2.000', '5.000', '10.000', '25.000', '100.000', '250.000', '500.000', '1.000.000'],
}


const questionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default questionsReducer;

// 1: [
//     {
//         question: '',
//         a: '',
//         b: '',
//         c: '',
//         d: '',
//         correctAnswer: '',
//     },
// ],