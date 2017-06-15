$(function () {

    function loadItemList(json) {
        var template = $('#template').html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, json);
        $('#target').prepend(rendered);
    }

    var mockJosn = {
        'items': [
            {
                image: 'custom/img/lista/thai-airways-international.jpg',
                title: 'Milano - Osaka',
                description: 'Volo di sola andata dall\'aereoporto di Milano Malpensa per Tokyo Narita, con scalo a Bangkok (Thai Airways International). Durata volo 18 ore e 40 minuti.',
                totalPrice: '900',
                consumedPrice: '50'
            },
            {
                image: 'custom/img/lista/kyoto.jpg',
                title: 'Hotel Kyoto',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/food-2.jpg',
                title: 'Prima cena Giapponese',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/tokyo.jpg',
                title: 'Hotel Tokyo',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/hakone-onsen.jpg',
                title: 'Ryokan Hakone',
                description: 'Volo di sola andata dall\'aereoporto di Milano Malpensa per Tokyo Narita, con scalo a Bangkok (Thai Airways International). Durata volo 18 ore e 40 minuti.',
                totalPrice: '900',
                consumedPrice: '50'
            },
            {
                image: 'custom/img/lista/srilankan-airlines.jpg',
                title: 'Tokyo - Seychelles',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/seychelles-beach.jpg',
                title: 'Hotel Seychelles',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/food-3.jpg',
                title: 'Ultima cena in luna di miele',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            },
            {
                image: 'custom/img/lista/ethiopian-airlines.jpg',
                title: 'Seychelles - Milano',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ' +
                'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
                'aliquip ex ea commodo consequat.',
                totalPrice: '150',
                consumedPrice: '0'
            }
        ]
    };

    loadItemList(mockJosn);

});