const events = [
  {
    name: 'Battle of the Bands',
    description:
      "Get ready for Battle of the Bands, where the hottest up-and-coming rock groups will compete for the ultimate prize. With heart-pumping beats and electrifying performances, you won't want to miss this adrenaline-fueled event. Each band will bring their A-game, leaving everything on the stage for the chance to be crowned champion. Don't miss out on the most unforgettable rock competition of the year!",
    venue: 'All Stars Arena, Las Vegas, NV, USA',
    datetime: new Date('28 February 2023 21:00 PST').toISOString(),
    timezone: 'America/Los_Angeles',
    are_seats_available: true,
    is_registered: false,
    is_bookmarked: false,
    img_url: 'https://i.ibb.co/3zbdvWX/battle-of-bands.jpg',
  },
  {
    name: 'Cowboy Rodeo',
    description:
      "Hold on tight for the Cowboy Rodeo, where the best riders in the country will compete for the championship title. Witness heart-stopping events like bull riding, calf roping, and steer wrestling that showcase the strength and bravery of these incredible cowboys. With non-stop action and adrenaline-fueled excitement, the Cowboy Rodeo is the ultimate display of rodeo skills and cowboy grit. Don't miss out on this wild and exhilarating event!",
    venue: 'BB Center, Dallas, TX, USA',
    datetime: new Date('01 March 2023 21:00 CST').toISOString(),
    timezone: 'US/Central',
    are_seats_available: false,
    is_registered: false,
    is_bookmarked: false,
    img_url:
      'https://thumbs.dreamstime.com/b/rodeo-cowboy-rough-ride-tossed-around-his-horse-red-bluff-california-april-63692080.jpg',
  },
  {
    name: 'Wicked the Musical',
    description:
      'Get ready for an unforgettable journey into the magical world of Wicked! Join us for this spellbinding musical adventure as we follow the captivating story of two unlikely friends and their journey to become the Wicked Witch of the West and Glinda the Good. With show-stopping musical numbers, stunning costumes, and breathtaking sets, Wicked will transport you to a world beyond your imagination. So come along for the ride and experience the magic of this beloved musical phenomenon.',
    venue: 'Gershwin Theatre, NYC, NY, USA',
    datetime: new Date('10 March 2023 19:00 EST').toISOString(),
    timezone: 'US/Eastern',
    are_seats_available: true,
    is_registered: false,
    is_bookmarked: true,
    img_url:
      'https://res.cloudinary.com/dwzhqvxaz/f_auto,q_auto,fl_progressive/v1643801942/Titles/Wicked/2022%20Cast/Wicked_Prod2022_1RT_2560x1440.jpg',
  },
  {
    name: 'Karaoke Contest',
    description:
      "Get ready to belt out your favorite tunes and show off your vocal skills at the Karaoke Contest! Whether you're a seasoned singer or a first-time performer, this is your chance to take center stage and shine. With a wide selection of songs to choose from, you can sing your heart out and compete for the grand prize. So warm up those vocal cords, gather your friends, and get ready for a night of music, laughter, and karaoke fun!",
    venue: 'Old Town Pub, Chicago, IL, USA',
    datetime: new Date('20 March 2023 21:00 EST').toISOString(),
    timezone: 'US/Eastern',
    are_seats_available: true,
    is_registered: true,
    is_bookmarked: false,
    img_url: 'https://i.ibb.co/Hx0gKgH/karaoke-2.jpg',
  },
];

const themes = [
  {
    color_hex_code: '#000000',
    is_active: true,
  },
  {
    color_hex_code: '#800080',
    is_active: false,
  },
  {
    color_hex_code: '#0000FF',
    is_active: false,
  },
  {
    color_hex_code: '#9B9999',
    is_active: false,
  },
];
module.exports = {
  events, themes
};