export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  creditUrl: string;
  license: string;
  licenseUrl: string;
};

const lotus: Photo = {
  src: "/photos/lotus-temple.jpg",
  alt: "The Lotus Temple in Delhi, a white building of curved petals under a blue sky",
  width: 1920,
  height: 3413,
  credit: "eclicks_by_bunny",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:Lotus_temple_in_Delhi,_India_(2018).jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const shaolin: Photo = {
  src: "/photos/shaolin-temple.jpg",
  alt: "A quiet hall of meditation cushions inside the Shaolin Meditation Temple",
  width: 1920,
  height: 1440,
  credit: "Godstar23",
  creditUrl: "https://commons.wikimedia.org/wiki/File:Shaolin_Meditation_Temple.jpg",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
};

const yogaArt: Photo = {
  src: "/photos/yoga-art.jpg",
  alt: "A painted illustration of a seated yoga posture",
  width: 800,
  height: 500,
  credit: "Ayurvedic India",
  creditUrl: "https://commons.wikimedia.org/wiki/File:Yoga_asana_art.jpg",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
};

const dawn: Photo = {
  src: "/photos/dawn.jpg",
  alt: "Pale light at dawn over a dark horizon",
  width: 1920,
  height: 1275,
  credit: "Abhijit Kar Gupta",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:At_the_break_of_dawn_(19168975402).jpg",
  license: "CC BY 2.0",
  licenseUrl: "https://creativecommons.org/licenses/by/2.0",
};

const himalaya: Photo = {
  src: "/photos/himalaya.jpg",
  alt: "Sunrise on the Kanchenjunga range in the Himalaya, Sikkim",
  width: 1920,
  height: 1439,
  credit: "Schowdhuri",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:The_Sunrise_of_Kanchenhunga,_Himalaya,Sikkim.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const spices: Photo = {
  src: "/photos/ayurveda.jpg",
  alt: "Bowls and piles of spices photographed in India",
  width: 1920,
  height: 1939,
  credit: "Vikas 1980",
  creditUrl: "https://commons.wikimedia.org/wiki/File:Spices_of_India.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const manuscript: Photo = {
  src: "/photos/manuscript.jpg",
  alt: "A leaf of the Bower manuscript, Sanskrit written in early Gupta script",
  width: 1920,
  height: 456,
  credit: "Ms Sarah Welch",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:5th_to_6th_century_Bower_manuscript,_Sanskrit,_early_Gupta_script,_Kucha_Xinjiang_China,_Leaf_1.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const ganges: Photo = {
  src: "/photos/ganges.jpg",
  alt: "The Ganges river seen from the bank",
  width: 1920,
  height: 1080,
  credit: "Ravi Ranjan 04",
  creditUrl: "https://commons.wikimedia.org/wiki/File:Ganges_River_2.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const mala: Photo = {
  src: "/photos/mala.jpg",
  alt: "Strands of japa mala prayer beads for sale in Varanasi",
  width: 1920,
  height: 1280,
  credit: "Suyash Dwivedi",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:Different_types_of_Japa_mala_(prayer_beads)_selling_in_Varanasi,_India.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const incense: Photo = {
  src: "/photos/incense.jpg",
  alt: "A bronze incense burner at Sinheungsa temple",
  width: 1920,
  height: 2688,
  credit: "Bernard Gagnon",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:Incense_burner_at_Sinheungsa_01.jpg",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
};

const batu: Photo = {
  src: "/photos/batu-caves.jpg",
  alt: "The Hindu temple inside the Batu Caves",
  width: 1920,
  height: 3409,
  credit: "Sam Hidayat",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:Hindu_temple_located_in_the_interior_of_Batu_Caves.jpg",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
};

const virupaksha: Photo = {
  src: "/photos/virupaksha.jpg",
  alt: "The Virupaksha Temple in Hampi at night, with visitors in the courtyard",
  width: 1920,
  height: 1280,
  credit: "Vyacheslav Argenberg",
  creditUrl:
    "https://commons.wikimedia.org/wiki/File:Hampi,_India,_Hindu_women_in_Virupaksha_Temple_at_night.jpg",
  license: "CC BY 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by/4.0",
};

const byTopic: Record<string, Photo[]> = {
  meditation: [shaolin, dawn],
  mindfulness: [dawn, shaolin],
  yoga: [yogaArt, virupaksha],
  consciousness: [himalaya, dawn],
  spirituality: [lotus, virupaksha],
  kundalini: [himalaya, lotus],
  chakras: [batu, virupaksha],
  reiki: [incense, dawn],
  ayurveda: [spices],
  "ancient-wisdom": [manuscript, ganges],
  vedanta: [manuscript, ganges],
  moksha: [ganges, himalaya],
  mantras: [mala, incense],
  breathwork: [dawn, himalaya],
  publication: [lotus, manuscript],
};

export const homePhoto = lotus;

export const photoCatalog: Photo[] = [
  lotus,
  shaolin,
  yogaArt,
  dawn,
  himalaya,
  spices,
  manuscript,
  ganges,
  mala,
  incense,
  batu,
  virupaksha,
];

function pickIndex(id: string, count: number): number {
  let hash = 0;
  for (const character of id) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }
  return hash % count;
}

export function photoFor(topic: string, id: string): Photo {
  const choices = byTopic[topic] ?? byTopic.publication;
  return choices[pickIndex(id, choices.length)];
}
