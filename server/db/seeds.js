use navigate;
db.dropDatabase();

    db.serviceUsers.insertMany([
        {
            name: "Robert Falconbridge",
            age: 55,
            dob: "11/01/1605",
            gender: "female",
            mob: "057573836953",
            address: "64 Falconwalk Avenue",
            nok: "Sarah Falconbridge - 24576082547",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
            
        },
        {
            name: "Hugh Rebeck",
            age: 32,
            dob: "01/08/1642",
            gender: 'female',
            mob: '04040948748',
            address: 'The Big Blue House',
            nok: 'Jonjoe - 399477488',
            clinic: 'The RoundHouse',
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        },
        
        {
            name: "Richard Ratcliffe",
            age: 25,
            dob:"14/05/1671",
            gender: "female",
            mob: "03677836953",
            address: "50 Somewhere Road",
            nok: "Not Provided",
            clinic: "Clinic 32 - Govan",
            employment: "Full-time - Porter",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
            
        },
        {
            name: "Henry Gadshill",
            age: 78,
            dob: "18/10/1601",
            gender: "male",
            mob: "066059444",
            address: "1/2, Steven Street",
            nok: 'Barry White, 09455748855',
            clinic: "not-registered",
            employment: "Part-time, kitchen staff",
            image: 'https://png.pngtree.com/png-clipart/20221101/ourlarge/pngtree-passport-photo-cartoon-design-png-image_6405812.png'
        },
        {
            name: "Stephen Gardiner",
            age: 45,
            dob: "13/09/1624",
            gender: "male",
            mob: "24069787456",
            address: "5 Happy Crescent",
            nok: "Steve. - 02457874256",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://png.pngtree.com/png-clipart/20221101/ourlarge/pngtree-passport-photo-cartoon-design-png-image_6405812.png'
        },
        {
            name: "Hugh Harfleur",
            age: 17,
            dob:"27/10/1630",
            gender: "male",
            mob: "24508764656",
            address: "Block 5, Flat 3 - Cement Road",
            nok: "Hugh's Brother - 24507887565",
            clinic: "Clinic 5 - Somewheresville",
            employment: "unemployed",
            image: 'https://png.pngtree.com/png-clipart/20221101/ourlarge/pngtree-passport-photo-cartoon-design-png-image_6405812.png'
        },
        {
            name: "Johnson Simonides",
            age: 67,
            dob:"18/11/1672",
            gender: "male",
            mob: "06695594444",
            address: "133 Station Road",
            nok: "Unknown",
            clinic: "The Clinics' Clinic",
            employment: "unemployed",
            image: 'https://png.pngtree.com/png-clipart/20221101/ourlarge/pngtree-passport-photo-cartoon-design-png-image_6405812.png'
        },
        {
            name: "Jaques de Boys",
            age: 21,
            dob:"31/12/1622",
            gender: "female",
            mob: "243560701356072",
            address: "rough-sleeping",
            nok: "not provided",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        },
        {
            name: "Margarine Jourdain",
            age: 46,
            dob: "10/12/1654",
            gender: "female",
            mob: "07786995485554",
            address: "Not fixed",
            nok: "Bob Jourdain, 233222",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://png.pngtree.com/png-clipart/20221101/ourlarge/pngtree-passport-photo-cartoon-design-png-image_6405812.png'
        },
        {
            name: "Lucy William",
            age: 36,
            dob:"14/03/1672",
            gender: "female",
            mob: "not provided",
            address: "100 William Walk",
            nok: "Dad - 45268754968",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        },
        {
            name:"Mari Lucilius",
            age: 87,
            dob:"17/08/1642",
            gender: "female",
            mob: "9444857573",
            address: "134 Wisteria Lane",
            nok: "Unknown",
            clinic: "not-registered",
            employment: "Part-time cleaner",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        },
        {
            name:"Samantha Lysander",
            age: 36,
            dob: "18/06/1627",
            gender: "female",
            mob: "057573836953",
            address: "20 Barry Avenue",
            nok: "not provided",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        },
        {
            name:"Amanda Torchbearers",
            age: 14,
            dob: "17/09/1681",
            gender: "female",
            mob: "077696565664",
            address: "12 Pear Road",
            nok: "Geoffrey Torchbearers, 099344924024",
            clinic: "not-registered",
            employment: "unemployed",
            image: 'https://iepfclaim.in/wp-content/uploads/2022/01/29-297391_woman-at-clker-vector-free-download-png-clipart.png'
        }
    ]);