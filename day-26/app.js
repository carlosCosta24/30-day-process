const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]
const searchByFirst = document.querySelector(".search-by-first")
const searchByAny = document.querySelector(".search-by-any")
const sort = document.querySelector(".sort-it")
const searchArea = document.querySelector(".search-box")
const visualArea = document.querySelector(".visual-container")
const upIcon = document.querySelector("#up")
const downIcon = document.querySelector("#down")

//injecting countries name

for (let i = 0; i < countries.length; i++) {
    let newCountry = document.createElement("div")
    newCountry.innerText = countries[i]
    newCountry.setAttribute("class", "country-item")
    visualArea.append(newCountry)
}

//first search method
searchByFirst.addEventListener('click', () => {
    let word = searchArea.value.toLowerCase()
    if (word === '') {
        alert('plese enter a word ')
    } else {
        visualArea.innerHTML = ''
        for (let r = 0; r < countries.length; r++) {
            let newCountry = document.createElement("div")
            if (countries[r].toLowerCase().startsWith(word)) {
                newCountry.innerText = countries[r]
                newCountry.setAttribute("class", "country-item")
                visualArea.append(newCountry)
            }
        }
    }

})


// method two
searchByAny.addEventListener('click', () => {
    let word = searchArea.value.toLowerCase()
    if (word === '') {
        alert('enter at least letter')
    } else {
        visualArea.innerHTML = ''
        for (let x = 0; x < countries.length; x++) {
            let newCountry = document.createElement("div")
            if (countries[x].toLowerCase().includes(word)) {
                newCountry.innerText = countries[x]
                newCountry.setAttribute("class", "country-item")
                visualArea.append(newCountry)
            }
        }
    }

})

// sort function

sort.addEventListener('click', () => {
    let value = sort.value
    if (value === 'assendig') {
        alert('it\'s alredy in assending order ')
    } else {
        visualArea.innerHTML = ''
        let sortedArr = countries.sort()
        for (let y = 0; y < sortedArr.length; y++) {
            let newCountry = document.createElement("div")
            newCountry.innerText = sortedArr[y]
            newCountry.setAttribute("class", "country-item")
            visualArea.append(newCountry)
        }
        upIcon.style.display = "none"
        value = 'deassendig'

    }
    if (value === 'deassendig') {

        let sortedArr = countries.sort()
        visualArea.innerHTML = ''
        for (let y = sortedArr.length - 1; y >= 0; y--) {
            let newCountry = document.createElement("div")
            newCountry.innerText = sortedArr[y]
            newCountry.setAttribute("class", "country-item")
            visualArea.append(newCountry)
        }
        downIcon.style.display = 'none'
        value = 'deassendig'

    }

})


