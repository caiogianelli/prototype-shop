const products = [
  {
    name: "Berserk Guts 410 Berserker Armor Ver. Figma PVC Action Figure Collection Figurine Model Toy",
    price: 200.0,
    type: "figure",
    img: "https://i.ebayimg.com/images/g/mWYAAOSwDsVhznc6/s-l1600.jpg",
    description:
      "Action Figure, vem com a figure e os acessórios de o suporte, tamanho 16,5 cm de altura",
    offer: 25,
    id: 1,
  },
  {
    name: "Goku Dragon Ball Z Figurinhas Son Figura 20th Aniversário Pvc Toy Action Figure",
    price: 55.0,
    type: "figure",
    img: "https://cf.shopee.com.br/file/6c7ed8e022114dd8a4342d4b8cff7fe0",
    description: "Figure em PVC, com altura de 19 cm",
    offer: 0,
    id: 2,
  },
  {
    name: "Action Figure One Piece Luffy Pvc",
    price: 50.0,
    type: "figure",
    img: "https://m.media-amazon.com/images/I/61cmFBiD5bS._AC_SL1000_.jpg",
    description:
      "Figure Monkey D. Luffy, com tamanho de 17 cm, feita de materiais de PVC ecológicos de alta qualidade. Realmente requintado! Estas bonecas modernas exclusivas fazem adições superiores à sua coleção.",
    offer: 0,
    id: 3,
  },
  {
    name: "Pokemon Blastoise - Battle Feature Figure - Deluxe Action Articulado",
    price: 115.0,
    type: "figure",
    img: "https://imgs.extra.com.br/1512334433/1xg.jpg",
    description: "Action Figure em PVC com tamanho de 10 cm",
    offer: 10,
    id: 4,
  },
  {
    name: "Demon Slayer - Kimetsu No Yaiba Vol. 1",
    price: 19.3,
    type: "manga",
    img: "https://images-na.ssl-images-amazon.com/images/I/51W6wPKu6JL._SX337_BO1,204,203,200_.jpg",
    description:
      "Produto em português, autor Koyoharu Gotouge, Sinopse: Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. A única sobrevivente é Nezuko, sua irmã mais nova. Porém, agora, ela se transformou em um Oni. Diante dessa tragédia, os dois irmãos partem em uma jornada para derrotar o Oni que matou sua mãe e irmãozinhos. E assim tem início uma aventura sanguinolenta de espadachins!",
    offer: 0,
    id: 5,
  },
  {
    name: "Kaiju N.° 8 - 01",
    price: 29.7,
    type: "manga",
    img: "https://images-na.ssl-images-amazon.com/images/I/61vueV14xBL._SX611_BO1,204,203,200_.jpg",
    description:
      "Produto em português, autor Naoya Matsumoto, Sinopse: O Japão é o lugar com o maior índice de aparição de monstros no mundo, sofrendo invasões todos os dias. No passado, Kafka Hibino almejava fazer parte das Forças de Defesa, mas atualmente trabalha para uma empresa especializada na limpeza dos resquícios das batalhas travadas com os monstros. Certo dia, o rapaz tem seu corpo transformado por uma criatura misteriosa e recebe o codinome Kaiju no. 8 das Forças de Defesa do Japão, a organização responsável por subjugar os monstros!!",
    offer: 0,
    id: 6,
  },
  {
    name: "Horimiya Vol. 1",
    price: 29.9,
    type: "manga",
    img: "https://images-na.ssl-images-amazon.com/images/I/51Y1FeJhbbL._SX340_BO1,204,203,200_.jpg",
    description:
      "Produto em português, autor Hero, Sinopse: O doce e levemente ácido gostinho da juventude!! De um lado, Hori-san, que à primeira vista faz o tipo patricinha, mas na verdade é uma garota simples e prendada. Do outro, Miyamura-kun, que na escola emana um ar negativo com seus óculos e aparência sem graça, quando na verdade é um gato cheio de piercings. O que acontece quando o acaso faz com que esses dois, que parecem ser tão diferentes, mas têm tanto em comum, se encontrem.?!",
    offer: 0,
    id: 7,
  },
  {
    name: "Demon Slayer - Kimetsu No Yaiba Vol. 18",
    price: 22.7,
    type: "manga",
    img: "https://images-na.ssl-images-amazon.com/images/I/51i2he+4FDS._SX337_BO1,204,203,200_.jpg",
    description:
      "Produto em português, autor Koyoharu Gotouge, Sinopse: Estamos na Era Taishou. O dia-a-dia pacato de Tanjiro, um gentil garoto que vende carvão, se transforma radicalmente quando sua família é assassinada por um demônio. A única sobrevivente é Nezuko, sua irmã mais nova. Porém, agora, ela se transformou em um Oni. Diante dessa tragédia, os dois irmãos partem em uma jornada para derrotar o Oni que matou sua mãe e irmãozinhos. E assim tem início uma aventura sanguinolenta de espadachins!",
    offer: 0,
    id: 8,
  },
  {
    name: "CAMISETA BABYLOOK EU SOU OTAKU SAITAMA",
    price: 35.9,
    type: "vestuario",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/658/370/products/13173601049-148474ca475142d48af00705d45995a6-2e1f5bc497f87430fd16271528599929-480-0.jpeg",
    description:
      "Camiseta Babylook Raglan Branca, Material: Malha fria 100% Poliéster",
    size: ["S", "M", "L"],
    offer: 0,
    id: 9,
  },
  {
    name: "CAMISETA BABYLOOK UNDERTALE V3 JOGO GAME RPG",
    price: 30,
    type: "vestuario",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/658/370/products/13173650573-c50c2e7c6d6c384ec47de38b16f8fe4e-4ec47de38b16f8fe4e16271373954266-480-0.jpeg",
    description:
      "Camiseta Babylook Raglan Branca, Material: Malha fria 100% Poliéster",
    size: ["S", "M", "L"],
    offer: 5,
    id: 10,
  },
  {
    name: "CAMISETA BRANCA TORADORA TAIGA E RYUUJI",
    price: 35.9,
    type: "vestuario",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/658/370/products/13173669942-b5e6983ef88b03a6f7987a474c309f10-a6f7987a474c309f1016271373471730-480-0.jpeg",
    description:
      "Camiseta Babylook Raglan Branca, Material: Malha fria 100% Poliéster",
    size: ["S", "M", "L"],
    offer: 0,
    id: 11,
  },
  {
    name: "CAMISETA BABYLOOK HATSUNE MIKU VOCALOID",
    price: 35.9,
    type: "vestuario",
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/658/370/products/13173685461-997c5adc6c9b5e595239e7315bc37f03-595239e7315bc37f0316271372746007-480-0.jpeg",
    description:
      "Camiseta Babylook Raglan Branca, Material: Malha fria 100% Poliéster",
    offer: 0,
    id: 12,
  },
  {
    name: "7 Estilos Genshin Impacto Periférica Casal Colares Requintado Pingentes Jogo Jóias Anime Acessórios Presentes Para Amigos",
    price: 9.5,
    type: "acessorios",
    img: "https://cf.shopee.com.br/file/f9a3c4ba4a8f46a3cf7ab86af34f04bf",
    description: "Chaveiro de metal unissex, com tamanhos variados",
    offer: 0,
    id: 13,
  },
  {
    name: "Demon slayer Bloco De Construção Brinquedo Anime Montado Brinquedos Educativos Infantis",
    price: 39.5,
    type: "acessorios",
    img: "https://cf.shopee.com.br/file/a5ddcf7cc424ef3d031beb42eb44d569",
    description: "Material plastico ABS, com 400-800 peças",
    offer: 0,
    id: 14,
  },
  {
    name: "Novo Anime One Piece Luffy 3 Billion Bounty Wanted Cartazes Quatro Imperadores Figuras De Ação Infantil Vintage Wall Decoration Toys",
    price: 7.5,
    type: "acessorios",
    img: "https://cf.shopee.com.br/file/34852369614597a3b7ae584397b1d9d9",
    description:
      "Cartaz com papel kraft amarelo 150g, com Dimensões: 42 x 28,5cm",
    offer: 0,
    id: 15,
  },
  {
    name: "Chaveiro Com Alça Anime Demon Slayer Kimetsu No Yaiba",
    price: 9.9,
    type: "acessorios",
    img: "https://cf.shopee.com.br/file/1b3f16c14db372d268fffb57f5d4de23",
    description: "Chaveiro de metal unissex, com tamanho de 45 x 2 cm",
    offer: 0,
    id: 16,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(type, id) {
  const product = products.find(
    (product) => product.type === type && product.id === id
  );
  return [product];
}

export function getCategoryProducts(type) {
  const filteredProducts = products.filter((product) => product.type === type);
  return filteredProducts;
}

export function getAllCategories() {
  const types = products.map((product) => product.type);

  // eslint-disable-next-line no-undef
  const unicTypes = [...new Set(types)];
  return unicTypes;
}

export default function handler(req, res) {
  const products = getProducts();
  res.status(200).json(products);
}
