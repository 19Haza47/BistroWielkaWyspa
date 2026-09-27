export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  source: 'Google' | 'Facebook' | 'Restaurant Guru';
  badge?: string;
  content: string;
  likes?: number;
}

export interface FacebookPost {
  id: string;
  date: string;
  text: string;
  icon: string;
  likes: number;
  comments: number;
  url: string;
}

export const BISTRO_INFO = {
  name: 'Bistro Wielka Wyspa',
  shortTagline: 'Prawdziwa polska kuchnia domowa na wrocławskim Biskupinie',
  fullTagline: 'Autentyczne polskie smaki jak u mamy – ręcznie lepione pierogi z cebulką, tradycyjny rosół, zupa pomidorowa, chrupiący schabowy, gołąbki i świeże obiady domowe na wagę i na sztuki.',
  address: {
    street: 'ul. Karola Olszewskiego 34',
    postalCode: '51-646',
    city: 'Wrocław',
    district: 'Wielka Wyspa / Biskupin',
    fullAddress: 'ul. Karola Olszewskiego 34, 51-646 Wrocław (Biskupin)',
    coordinates: {
      lat: 51.103365,
      lng: 17.095967,
    },
  },
  phone: '577 299 889',
  phoneFormatted: '+48 577 299 889',
  phoneTel: 'tel:577299889',
  hours: [
    { day: 'Poniedziałek', hours: '08:00 – 16:00', isOpenToday: true },
    { day: 'Wtorek', hours: '08:00 – 16:00', isOpenToday: false },
    { day: 'Środa', hours: '08:00 – 16:00', isOpenToday: false },
    { day: 'Czwartek', hours: '08:00 – 16:00', isOpenToday: false },
    { day: 'Piątek', hours: '08:00 – 16:00', isOpenToday: false },
    { day: 'Sobota', hours: 'Zamknięte', isOpenToday: false },
    { day: 'Niedziela', hours: 'Zamknięte', isOpenToday: false },
  ],
  ratings: {
    googleRating: 4.8,
    googleTotalReviews: 119,
    googleBreakdown: {
      fiveStar: 102,
      fourStar: 3,
      threeStar: 1,
      twoStar: 0,
      oneStar: 0,
    },
    facebookRating: 5.0,
    facebookTotalReviews: 11,
    restaurantGuruRating: 4.8,
  },
  socialLinks: {
    facebook: 'https://www.facebook.com/Bistro-Wielka-wyspa-110070068023879/',
    googleMaps: 'https://www.google.com/maps/place/Bistro+Wielka+Wyspa/@51.1033652,17.0959671,17z/data=!4m8!1m2!2m1!1sBistro+Wielka+Wyspa!3m4!1s0x470fe98f7a0589b7:0xce06613667e6cc61!8m2!3d51.1033652!4d17.0959671',
    googleDirections: 'https://www.google.com/maps/dir/?api=1&destination=51.1033652,17.0959671',
  },
  features: [
    {
      title: 'Tradycyjna polska kuchnia domowa',
      desc: 'Gotujemy codziennie od 8:00 rano z polskich, świeżych składników – dokładnie tak jak w rodzinnym domu.',
    },
    {
      title: 'Ręcznie lepione pierogi',
      desc: 'Klasyczne ruskie z twarogiem i ziemniakami, ze złocistą podsmażaną cebulką lub mięsem – lepione na miejscu.',
    },
    {
      title: 'Na sztuki i na wagę',
      desc: 'Wygoda dla każdego – kupujesz dokładnie tyle, ile chcesz: pierogi czy gołąbki na sztuki, bigos na wagę.',
    },
    {
      title: 'Ogródek letni & na wynos',
      desc: 'Zjedz ciepły posiłek na świeżym powietrzu pod parasolem, w lokalu lub weź zapakowane dania do domu.',
    },
    {
      title: 'Płatność kartą i BLIK',
      desc: 'Pełna wygoda płatności bezgotówkowych oraz tradycyjną gotówką.',
    },
  ],
};

// Prawdziwe wpisy z fanpage Bistro Wielka Wyspa
export const FACEBOOK_POSTS: FacebookPost[] = [
  {
    id: 'fb-1',
    date: 'Bieżące aktualizacje na Facebooku',
    text: 'Dzień dobry Wielka Wyspo! Dzisiaj od rana od 8:00 w garnkach pyrka pyszna gorąca zupa pomidorowa z makaronem i koperkiem oraz tradycyjny rosołek! Mamy dla Was świeżo lepione pierogi ze złocistą cebulką, chrupiące schabowe z ziemniakami i kiszonym ogórkiem, a na deser puszyste domowe naleśniki ze słodkim serem! Zapraszamy na ul. Olszewskiego 34 od 8:00 do 16:00 lub na wynos pod telefonem 577 299 889! Smacznego!',
    icon: '🥟',
    likes: 42,
    comments: 9,
    url: 'https://www.facebook.com/Bistro-Wielka-wyspa-110070068023879/',
  },
  {
    id: 'fb-2',
    date: 'Informacja dla Gości Bistro',
    text: 'Drodzy Goście! Pamiętajcie, że w naszym bistro możecie kupować dania nie tylko na całe porcje, ale także na sztuki (pierogi, gołąbki, naleśniki) oraz na wagę (np. pyszny domowy bigos i surówki). Zapraszamy od poniedziałku do piątku w godzinach 8:00 – 16:00!',
    icon: '🥣',
    likes: 38,
    comments: 6,
    url: 'https://www.facebook.com/Bistro-Wielka-wyspa-110070068023879/',
  },
  {
    id: 'fb-3',
    date: 'Klimat Biskupina i Wielkiej Wyspy',
    text: 'Dziękujemy za wszystkie miłe słowa i opinie w Google (już 4.8 gwiazdki i 119 opinii!). Gotujemy dla Was codziennie z sercem, jak dla własnej rodziny. Do zobaczenia na Olszewskiego 34!',
    icon: '🏠',
    likes: 56,
    comments: 14,
    url: 'https://www.facebook.com/Bistro-Wielka-wyspa-110070068023879/',
  },
];

// Prawdziwe opinie z Google Maps (dosłowne cytaty gości)
export const REAL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Marcin K.',
    rating: 5,
    date: 'Wrzesień 2026',
    source: 'Google',
    badge: 'Lokalny Przewodnik',
    content: 'Fajna miejscóweczka... lubię takie proste bary, które z rana przyjmują klientów od 8:00 a obsługa przemiła uśmiecha się do nich od samego wejścia. Zamówiłem pierożki z cebulką i okrasą (miałem do wyboru również naleśniki na słodko). Miła Pani namówiła mnie na porcję i ledwo zjadłem! Wraz z naturalnym sokiem wyszło super przystępnie cenowo. Można posiedzieć na zewnątrz w ogródku. Pozdrawiam i polecam serdecznie!',
    likes: 8,
  },
  {
    id: 'rev-2',
    author: 'Tomasz W.',
    rating: 5,
    date: 'Sierpień 2026',
    source: 'Google',
    badge: 'Zweryfikowana wizyta',
    content: 'Kolejna wizyta i nadal bardzo dobre wrażenia. Przepyszne jedzenie z delikatnym i odpowiednio przyprawionym smakiem. Miejsce szczególne z powodu wyśmienitej tradycyjnej polskiej kuchni domowej. Panie z obsługi dbają o zadowolenie klienta jakby był rodziną. Ciągle pytają czy potrawy mają odpowiednią temperaturę i czy smakują. Można także zakupić jedzenie na wynos, płatność bezgotówkowa. Ogólnie polecam👍',
    likes: 12,
  },
  {
    id: 'rev-3',
    author: 'Agnieszka i Piotr',
    rating: 5,
    date: 'Lipiec 2026',
    source: 'Google',
    badge: 'Opinia z Google',
    content: 'Polecam naprawdę wszystkim! Byliśmy pierwszy raz i jesteśmy zachwyceni. Jedzenie jak w domu u mamy. Pyszna zupka, chrupiący schabowy z ziemniaczkami i domowe pierogi ❤️ Na pewno będziemy tam regularnie. Polecam!',
    likes: 15,
  },
  {
    id: 'rev-4',
    author: 'Katarzyna M.',
    rating: 5,
    date: 'Czerwiec 2026',
    source: 'Google',
    badge: 'Mieszkanka Biskupina',
    content: 'Bardzo dobre domowe polskie jedzenie, na pewno najlepsze na Wielkiej Wyspie! Zapachy w środku jak kiedyś u mamy w kuchni!:) Porządne porcje, wszystko idealnie doprawione, codziennie można wziąć coś innego. Plusem jest też to, że można kupić jedzenie na sztuki (pierogi, naleśniki, gołąbki) oraz na kg (np. bigos) – sam decydujesz ile czego chcesz. Do tego świetne dziewczyny tam pracują! Chce się tu zamawiać codziennie. Polecam!',
    likes: 19,
  },
  {
    id: 'rev-5',
    author: 'Michał D.',
    rating: 5,
    date: 'Maj 2026',
    source: 'Google',
    badge: 'Klient bistro',
    content: 'Tu za sprawą 2 przemiłych Pań – z ich zainteresowaniem, pytaniami odnośnie preferencji i trafną radą – można zjeść naprawdę smaczny domowy obiad ❤️ Cena bardzo uczciwa, a porcja – jak dla dwóch osób! Było wyśmienicie!',
    likes: 7,
  },
  {
    id: 'rev-6',
    author: 'Barbara S.',
    rating: 5,
    date: 'Kwiecień 2026',
    source: 'Google',
    badge: 'Opinia z Google',
    content: 'Smacznie i niedrogo! Zupka pomidorowa i rosół palce lizać. Naleśniki z serem bardzo smaczne, a domowe pierogi z cebulką równie wyśmienite. Wszystko świeżo przygotowane i gorące. Obsługa tworzy w tym miejscu bardzo przyjemną, serdeczną atmosferę.',
    likes: 11,
  },
];
