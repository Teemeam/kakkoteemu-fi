import avautuvat_sotilassaaret from '~/assets/avautuvat-sotilassaaret.jpg';
import kutsuntaliite from '~/assets/kutsuntaliite-2014.jpg';
import kaupunkisotilas_ja_siviili from '~/assets/kaupunkisotilas-ja-siviili.jpg';
import yhteiskuntaa_karkuun from '~/assets/yhteiskuntaa-karkuun-kiven-sisaan.jpg';

const articles: Article[] = [
  {
    type: 'web',
    title:
      'Massiivinen Tripla kiilaa koollaan Suomen ostoskeitaiden kärkikolmikkoon ja on pian lähin kauppakeskus yli 100 000:lle joukkoliikenteen käyttäjälle',
    url: 'https://yle.fi/uutiset/3-11016106',
    image_id: '39-5893575d762b795ff2f',
    published: '14.10.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Vanhusten palvelutaloihin tehdään vain harvoin yllätystarkastuksia – katso, kuinka sinun kuntasi valvoo ikäihmisten oloja',
    url: 'https://yle.fi/uutiset/3-10734160',
    image_id: '13-3-10731896',
    published: '24.4.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Äärioikeistolainen lapuanliike muilutti, murhasi ja terrorisoi – Jaakko Kosola on kuuluisaa sukua ja kantaa historian arpia mukanaan',
    url: 'https://yle.fi/uutiset/3-11068956',
    image_id: '39-6237985df8ea2ff41a3',
    published: '21.12.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '"Mitä nää uudet sanat on? Yhtäkkii mä käytän niit" – tämän jutun äikän ope haluaisi sinulta kieltää, mutta lukee itse salaa',
    url: 'https://yle.fi/uutiset/3-11089578',
    image_id: '13-3-11103569',
    published: '8.12.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '"Perhe on vähän vanhanaikainen haave" – Ylen kone näyttää, kuinka moni ikäisesi asuu yksin',
    url: 'https://yle.fi/uutiset/3-11088126',
    image_id: '39-6160635ddd28eb92bf2',
    published: '28.11.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Suomessa ajetaan vuosittain tuhansia hirvikolareita – katso kartasta, millä teillä pelti rytisee',
    url: 'https://yle.fi/uutiset/3-10946241',
    image_id: '13-3-10947472',
    published: '4.9.2019',
    publisher: 'Yle',
    role: 'code, writing',
  },
  {
    type: 'web',
    title:
      'Kaksoismurhaajan jahtaaminen oli viedä poliisin epätoivoon – suohon kätketty salaisuus raottuu Tulilahden tutkintamateriaalista',
    url: 'https://yle.fi/uutiset/3-10881289',
    image_id: '13-3-10883209',
    published: '19.7.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Onko Helsingissä pian yhtä kuuma kuin Montenegrossa? Katso, miten suomalaiset kaupungit lämpenevät vuoteen 2080 mennessä',
    url: 'https://yle.fi/uutiset/3-10346334',
    image_id: '13-3-10374675',
    published: '1.9.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Donald Trumpin presidenttikausi ei ole vakuuttanut suomalaisia – vain ani harva uskoo Trumpin tehneen maailmasta turvallisemman',
    url: 'https://yle.fi/uutiset/3-10277828',
    image_id: '13-3-10287820',
    published: '9.7.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Hyvätapainen televisiotähti vai kovasanainen kiinteistöhai? – tällainen vieras Donald Trump saattaisi olla, jos hän astuisi sinun kotiisi',
    url: 'https://yle.fi/uutiset/3-10289879',
    image_id: '13-3-10302881',
    published: '15.7.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Suomalaisten lempikarkin hämmentävä ristiriita – salmiakki on terveellinen, mutta samaan aikaan terveydelle vaarallinen herkku',
    url: 'https://yle.fi/uutiset/3-10805175',
    image_id: '13-3-10805719',
    published: '2.6.2019',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Katso, mistä löytyvät vaarallisimmat tiet ja kuumapäisimmät kuskit – "Kaikilla on raja, jonka jälkeen kiehahtaa yli"',
    url: 'https://yle.fi/uutiset/3-11116844',
    image_id: '39-6297195e1845bd6f04b',
    published: '11.1.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Näin Trumpin ja Kimin tapaaminen huomioitiin Pohjois-Korean mediassa – pohjoiskorealaiset seurasivat lähetystä Pjongjangin rautatieasemalla',
    url: 'https://yle.fi/uutiset/3-10249603',
    image_id: '13-3-10249645',
    published: '12.6.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Purkutuomion saanut kerrostalo teki viimeisen palveluksensa – muuttui värikkääksi festaripaikaksi',
    url: 'https://yle.fi/uutiset/3-8212940',
    image_id: '13-3-8213008',
    published: '9.8.2015',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Thaimaassa luolasta pelastetut pojat kertovat, kuinka he joivat sadevettä tippukivistä ja yrittivät kaivaa tietään ulos – Yle seurasi hetki hetkeltä',
    url: 'https://yle.fi/uutiset/3-10310825',
    image_id: '13-3-10311352',
    published: '18.7.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Unkari muuttaa perustuslakiaan – uusi laki tekee turvapaikanhakijoiden auttamisesta rangaistavaa',
    url: 'https://yle.fi/uutiset/3-10266522',
    image_id: '13-3-10266670',
    published: '20.6.2018',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title: 'Mustikka kukkii parhaiten 22 vuoteen – sadosta kypsymässä hyvin runsas',
    url: 'https://yle.fi/uutiset/3-8106280',
    image_id: '13-3-6794021',
    published: '26.6.2015',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title: 'Perussuomalaisten Sebastian Tynkkynen: BB-tähdestä puolueen varapuheenjohtajaksi',
    url: 'https://yle.fi/uutiset/3-8213407',
    image_id: '13-3-8213448',
    published: '9.8.2015',
    publisher: 'Yle',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Tämä on kertomus saamenpuvuista – aviomies halusi säpikkäisiinsä vihreää, sillä vaimo on kotoisin Lemmenjoen mäntymetsästä – Gákti čatná olbmuid oktii: vihtta gáktemuitalusa',
    url: 'https://yle.fi/uutiset/3-11191637',
    image_id: '39-6391335e3abe44dee40',
    published: '5.2.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Avantouinti on nyt niin suosittua, että jäihin pitää jonottaa – katso, miten liha kangistuu ja nahka höyryää Suomen vilkkaimmalla avannolla',
    url: 'https://yle.fi/uutiset/3-11192805',
    image_id: '39-6381075e38278eba158',
    published: '8.2.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kuoppaisella tiellä ambulanssikyytikin kestää kauemmin – Suomessa on tuhansia kilometrejä huonoja teitä, katso kartasta oman kuntasi tilanne',
    url: 'https://yle.fi/uutiset/3-11228875',
    image_id: '39-6474095e57711235dd1',
    published: '4.3.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'print',
    title:
      'Avautuvat sotilassaaret – Puolustusvoimien vuokralaisuus sotilassaarilla päättyy. Miltä saarten tulevaisuus näyttää?',
    url: 'https://drive.google.com/file/d/1qbTA0E3qbq5oDLrAxuo-_cNpJsqZMqxa/view?usp=sharing',
    image_id: avautuvat_sotilassaaret.src,
    published: '26.6.2014',
    publisher: 'Ruotuväki',
    role: 'writing',
  },
  {
    type: 'print',
    title: 'Kutsuntaliite 2014 – Kutsuntojen kautta asevelvollisuuden matkalle',
    url: 'https://drive.google.com/file/d/15uCUsIVqhioFFdOI7-bm6ahZqHcm97TL/view?usp=sharing',
    image_id: kutsuntaliite.src,
    published: '17.7.2014',
    publisher: 'Ruotuväki',
    role: 'writing',
  },
  {
    type: 'print',
    title: 'Kaupunkisotilas & siviili',
    url: 'https://drive.google.com/file/d/1PQSTiNn24AFKnxosjzPy37TScCqIwDjt/view?usp=sharing',
    image_id: kaupunkisotilas_ja_siviili.src,
    published: '3.4.2014',
    publisher: 'Ruotuväki',
    role: 'writing',
  },
  {
    type: 'print',
    title: 'Yhteiskuntaa karkuun kiven sisään',
    url: 'https://drive.google.com/file/d/1yg0uMZFYjl6qvSv-ZxFdN_qMgwMOKglo/view?usp=sharing',
    image_id: yhteiskuntaa_karkuun.src,
    published: '15.1.2015',
    publisher: 'Utain',
    role: 'writing',
  },
  {
    type: 'web',
    title:
      'Jos koronatilanne ahdistaa, on hyvä hetki pysähtyä miettimään omaa elämää – testaa tästä, kuinka onnellinen olet',
    url: 'https://yle.fi/uutiset/3-11263263',
    image_id: '39-6556815e7470b15a6e1',
    published: '21.3.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title: 'Ylen selvitys: Liikennemäärä Uudenmaan rajoilla on jo merkittävästi vähentynyt',
    url: 'https://yle.fi/uutiset/3-11277639',
    image_id: '39-6566855e78b2ecf3b81',
    published: '26.3.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Mikä on surumuna, mitä kertoo munan koodi ja onko vapaa kana vapaa? Suomalainen syö 12 kiloa munia vuodessa ja siksi on hyvä tietää, mitä syö',
    url: 'https://yle.fi/uutiset/3-11290114',
    image_id: '13-3-11290540',
    published: '4.4.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Tulipalo saa yleensä alkunsa liedeltä, mutta vanha vitsaus aiheuttaa edelleen eniten kuolemia – katso kartasta, missä ja miten rakennukset palavat Tampereella',
    url: 'https://yle.fi/uutiset/3-11325984',
    image_id: '13-3-11341810',
    published: '8.5.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Ylen selvitys: toimeentulotuen uudistus on epäonnistunut kaikkein heikompiosaisten kohdalla – lue Jaron, Sirpan, Ilmin ja Johannan tarinat köyhyydestä',
    url: 'https://yle.fi/uutiset/3-11351353',
    image_id: '13-3-11350850',
    published: '19.5.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kysyimme, mitä on hyvä elämä ja näin suomalaiset vastasivat – testaa, ovatko sinulle tärkeät asiat tärkeitä myös muille',
    url: 'https://yle.fi/uutiset/3-11360661',
    image_id: '39-5696215cfe5f8d5cfc3',
    published: '22.5.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Henkirikokset rajussa kasvussa tänä keväänä, poliisi: "Ei ole kontrollia, minne veitsen isku päätyy" – katso kartalta 2000-luvun Suomen väkivaltaisimmat paikat',
    url: 'https://yle.fi/uutiset/3-11383347',
    image_id: '13-3-11405609',
    published: '17.6.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '35 000 miestä rakensi Suomen halki valtavan rakennelman, joka kestää vaikka tykkitulen – katso, miten Salpalinja syntyi ja mitä siitä on jäljellä',
    url: 'https://yle.fi/uutiset/3-11403518',
    image_id: '13-3-11408424',
    published: '21.6.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Nyt on paras hetki rakentaa muodikas ötökkähotelli, mutta asuuko niissä oikeasti hyönteisiä? – Katso, millaisia asukkaita hotellissamme majailee',
    url: 'https://yle.fi/uutiset/3-11417908',
    image_id: '13-3-11454139',
    published: '23.7.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Katso, kuinka vihreä kotikuntasi on – vertasimme Suomen kaikkia kuntia viidellä eri kriteerillä, ja mallioppilaat erottuvat joukosta',
    url: 'https://yle.fi/uutiset/3-11504485',
    image_id: '13-3-11513638',
    published: '3.9.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Saaʹmi ouddoummuvaali võboršeǩ-kueiʹtes ǩeâsttâʹlle vuäʹmm tååimast – Kolttien luottamusmiesvaalin ehdokaskaksikko kisaa ikivanhasta luottamustoimesta',
    url: 'https://yle.fi/uutiset/3-11516665',
    image_id: '39-7124345f477ebe917ac',
    published: '3.9.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Moni meistä ajattelee kuin Jari Matikainen: Biojätteen lajittelu on liian hankalaa – siksi valtava määrä ruokaa poltetaan sekajätteen mukana',
    url: 'https://yle.fi/uutiset/3-11533305',
    image_id: '39-7188865f605bb2a1dd1',
    published: '21.9.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Katso kartasta, mitkä rikollisorganisaatiot kokoontuvat kotikulmillasi – KRP: jengitilanne voimakkaassa muutoksessa United Brotherhoodin väliaikaisen toimintakiellon vuoksi',
    url: 'https://yle.fi/uutiset/3-11542665',
    image_id: '14-svyle-499531971e593882',
    published: '26.9.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '"Nainen ei saa olla seksikäs, mies ei saa itkeä" – 1 200 opiskelijaa vastasi, miten sukupuolinormit vaikuttavat heidän elämäänsä',
    url: 'https://yle.fi/uutiset/3-11570381',
    image_id: '13-3-11580957',
    published: '13.10.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Mitä teet, kun pieni koululainen kertoo nähneensä pornoa kaverin puhelimesta? Testaa pelissä, miten selviydytte vaikeasta paikasta yhdessä',
    url: 'https://yle.fi/uutiset/3-11603623',
    image_id: '13-3-11623822',
    published: '9.11.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Ylen toimittaja soluttautui hämärille eläinmarkkinoille – koirasusien kasvatus ja myynti kiellettiin lailla, mutta kauppa käy yhä',
    url: 'https://yle.fi/uutiset/3-11689345',
    image_id: '39-7524315fd0ca55e7dcc',
    published: '10.12.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kun Mannerheim halusi viettää löhölomaa, hän lähti metsästysmajalleen, jossa ei koskaan metsästetty – tutustu Marskin majaan',
    url: 'https://yle.fi/uutiset/3-11688673',
    image_id: '13-3-11689391',
    published: '11.12.2020',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Suomalaisten ruokavalio kuuluu EU:n pahiksiin – kokeile Ylen ruokakoneella, miten lounaalla tekemäsi valinnat vaikuttavat ympäristöön',
    url: 'https://yle.fi/uutiset/3-11699920',
    image_id: '13-3-11714060',
    published: '1.1.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Moni on tietämättään säilyttänyt dna-tutkijan aarretta piironginlaatikossa – suomenhevosen alkuperää selvitetään vanhojen näytteiden avulla',
    url: 'https://yle.fi/uutiset/3-11772583',
    image_id: '39-770101601be266175b9',
    published: '7.2.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Yle selvitti: Kunnat säästivät miljoonia euroja kulttuurirahoista samalla kun korona vei taiteilijoiden työt – katso kotikuntasi tilanne',
    url: 'https://yle.fi/uutiset/3-11807638',
    image_id: '13-3-11811007',
    published: '28.2.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Hiki valui otsalta, kun Jasmin Muqolli näki äänisaaliinsa – kuntapolitiikka opetti ensikertalaiselle paljon, mutta tuotti myös pettymyksiä',
    url: 'https://yle.fi/uutiset/3-11795312',
    image_id: '39-780611603f94594f14e',
    published: '6.3.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Selvitimme kaikissa Manner-Suomen kunnissa, mikä niissä puhuttaa vaalien alla – kuuntele Kuntarundi-keskustelu omasta kotikunnastasi',
    url: 'https://yle.fi/uutiset/3-11916600',
    image_id: '39-8028036093a317a6f11',
    published: '11.5.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Selvitimme kaikkien Manner-Suomen kuntien nykykunnon ja tulevaisuuden näkymät – katso kotikuntasi tilanne Ylen Kuntatutkasta',
    url: 'https://yle.fi/uutiset/3-11925581',
    image_id: '39-805993609d5f67656a5',
    published: '14.5.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Tamperelainen, tule keskustelemaan kuntavaaleista Ylen Maailman suurimpaan vaalitelttaan – mukana myös asiantuntijoita',
    url: 'https://yle.fi/uutiset/3-11946063',
    image_id: '13-3-11952744',
    published: '31.5.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '7 nuoren elämä päättyi, kun panssarivaunu upposi järveen – pelastuneiden painajainen on kestänyt 30 vuotta: "En ole puhunut tästä oikeastaan kenellekään"',
    url: 'https://yle.fi/uutiset/3-11959451',
    image_id: '39-81020260ab875b143ef',
    published: '6.6.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kymmenen ihmistä asuu vakituisesti pienellä Aspön saarella keskellä Saaristomerta – Tore Johansson kertoo, millaista on elää karussa kodissa',
    url: 'https://yle.fi/uutiset/3-11969907',
    image_id: '39-81807960c0743f7558e',
    published: '12.6.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title: 'Näin posti kulkee – seurasimme kirjeiden matkaa 38 reitillä gps-lähettimillä',
    url: 'https://yle.fi/uutiset/3-11973043',
    image_id: '39-82300960cc9e87665f6',
    published: '21.6.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Yle selvitti: Naiset ottivat aiempaa enemmän kuntapolitiikan huippupaikkoja – katso, ketkä käyttävät valtaa sinun kotikunnassasi',
    url: 'https://yle.fi/uutiset/3-12092060',
    image_id: '39-85135861389eb2d7b08',
    published: '10.9.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kummallinen kulkija tuli taloon, söi ja kuoli – perheeltään Ruotsissa mystisesti kadonnut mies eli kymmeniä vuosia ammattikulkurina Suomessa',
    url: 'https://yle.fi/uutiset/3-12144231',
    image_id: '39-86703761681e9387dbb',
    published: '16.10.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Vuosikymmen sitten turkulaiset keksivät rakentaa hienon sillan, ja sen jälkeen kaikki mahdollinen meni pieleen: tämä on Logomon sillan tarina',
    url: 'https://yle.fi/uutiset/3-12110486',
    image_id: '39-838588610a6877035fa',
    published: '17.10.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Ruoka kallistuu, kun ryhdymme maksamaan sen ilmastosynneistä – kokeile Ylen koneella, mitä kauppalaskullesi tapahtuu',
    url: 'https://yle.fi/uutiset/3-12193590',
    image_id: '39-88143461975460538ab',
    published: '19.11.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Sinä äänestät, kuka päättää terveydenhoidostasi – lue 13 kysymystä ja vastausta, niin pääset kärryille tammikuun aluevaaleista',
    url: 'https://yle.fi/uutiset/3-12176668',
    image_id: '13-3-12207049',
    published: '30.11.2021',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Teimme pelin, jota pelaamalla tiedät, mistä äänestämme aluevaaleissa – tai jos et tiedä, eliminoimme sinut',
    url: 'https://yle.fi/uutiset/3-12232988',
    image_id: '39-89907461d5adb3aa315',
    published: '11.1.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kokeile, miltä maailma näyttää näkövammaisen, pyörätuolilla liikkuvan ja hahmotushäiriöisen silmin',
    url: 'https://yle.fi/uutiset/3-12234621',
    image_id: '39-90182961e12ac1e4088',
    published: '15.1.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Rokotteista puhuminen päättyy herkästi jankkaamiseen, riitaan ja rikkoutuneisiin väleihin – onnistutko keskustelemaan botin kanssa kunnioittavasti?',
    url: 'https://yle.fi/uutiset/3-12302695',
    image_id: '39-914863620a3264b79aa',
    published: '15.2.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Joseph ja Mohamed kaapattiin lapsena, ja heistä tehtiin hirviömäisiä sotilaita – nyt he ovat rikkinäisiä aikuisia, jotka katuvat tekojaan',
    url: 'https://yle.fi/uutiset/3-12360693',
    image_id: '39-9366296246c24828c94',
    published: '3.4.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Mika Aaltolan perheessä on kolme harvinaista karvatonta terrieriä – katso, montako tietyn rotuista koiraa on kotipaikkakunnallasi',
    url: 'https://yle.fi/uutiset/3-12411117',
    image_id: '39-947451626a530f88821',
    published: '6.5.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Vikkeläliikkeinen murhaaja sai nimensä hukuttamalla uhrinsa kanaliin, jonka pohjassa muhii nyt ikävä yllätys',
    url: 'https://yle.fi/uutiset/3-12511723',
    image_id: '13-3-12517618',
    published: '3.7.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Tässä pelissä kohtaat mahdottomia mukuloita ja kiukkuisia vanhempia – kokeile, selviätkö opettajana, terkkarina tai junnuvalmentajana',
    url: 'https://yle.fi/aihe/a/20-10003220',
    image_id: '39-1012807633187af00def',
    published: '1.10.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Mitä jos Linnan juhlat olisivat vaarassa peruuntua, ja kaikki olisi sinusta kiinni? Tässä pelissä valintasi ratkaisevat itsenäisyyspäivän kohtalon',
    url: 'https://yle.fi/aihe/a/20-10003769',
    image_id: '39-10407656385b40c8e6e5',
    published: '29.11.2022',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Ratikka imi kylkeensä pienen kaupungin verran ihmisiä – näin rakentaminen on mullistunut Tampereella',
    url: 'https://yle.fi/a/74-20017812',
    image_id: '39-107516863f34924775ca',
    published: '20.2.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kiersimme toriteltat, bileet ja tupaillat – kokeile, mihin päin Suomea Ylen vaalikaruselli sinut heittää',
    url: 'https://yle.fi/a/74-20024116',
    image_id: '39-10852176410d001491d4',
    published: '26.3.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Astu hoitajan kenkiin ja kokeile, miten pärjäät päivystyksen työvuorossa – tällaista on joutua valitsemaan potilaat, joita autat',
    url: 'https://yle.fi/a/74-20029828',
    image_id: '39-1108976645499805fa45',
    published: '9.5.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title: 'Tällaista on elämä mäntynä – tutustu puun 700 vuoden elinkaareen monine seuralaisineen',
    url: 'https://yle.fi/a/74-20034378',
    image_id: '39-11238356479d3be128ad',
    published: '4.6.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kohdatessaan "vanhanaikaisia miesjohtajia" Iida-Amalia Nikkilä lyö pöytään armeijakortin – näin intin käyminen on auttanut naisia uralla',
    url: 'https://yle.fi/a/74-20034923',
    image_id: '39-112163964759d05f1714',
    published: '6.6.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kun näytös päättyy, jatkuu Karvon perheen asuntovaunuarki – tämä juttu kertoo siitä, mitä sirkuksen yleisö ei näe',
    url: 'https://yle.fi/a/74-20036927',
    image_id: '39-1130067648acc51786d0',
    published: '24.6.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Harva tajuaa, että Helsingissä lähes kuka tahansa pääsee kesällä 26 saareen – katso kartalta kaikki saaret, reitit ja palvelut',
    url: 'https://yle.fi/a/74-20036843',
    image_id: '39-1136475649e758a95424',
    published: '2.7.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Pyöräetu suosii hyväpalkkaista – katso laskurista, paljonko sinä hyötyisit työsuhdepyörästä',
    url: 'https://yle.fi/a/74-20045103',
    image_id: '39-115703664dba599c7971',
    published: '18.8.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Nautitko jonottamisesta vai laittaako se kärsivällisyytesi koetukselle? Tämä juttu kertoo miksi',
    url: 'https://yle.fi/a/74-20045030',
    image_id: '39-115656164db100c6b55d',
    published: '18.8.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Jarmo Saarela myy yksiötään 24 000 eurolla, mutta ketään ei kiinnosta – katso koneesta, paljonko omassa kunnassasi on tyhjiä asuntoja',
    url: 'https://yle.fi/a/74-20056571',
    image_id: '39-1187845652f8a5fb931e',
    published: '27.10.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title: 'Onnea valmistuneille! Katso koulunsa päättävien nimet Ylen valmistuneiden koneesta',
    url: 'https://yle.fi/a/74-20057938',
    image_id: '39-11968216549e8120dbd8',
    published: '9.11.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '”Tämä on ollut elämäntehtävä”, sanoo palkittu tutkija – katso Ylen koneesta, kuka sai omassa kunnassasi kunniamerkin',
    url: 'https://yle.fi/a/74-20062499',
    image_id: '39-12096406569c320197e7',
    published: '1.12.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Miksi turvapaikanhakijat eivät vain kävele metsän läpi Suomeen? Tällaiset esteet Venäjä on rakentanut rajalle',
    url: 'https://yle.fi/a/74-20065026',
    image_id: '39-1217345658057c0131fd',
    published: '20.12.2023',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Jokainen presidenttiehdokas täytti ystäväkirjan – se paljastaa menneisyyden poikkeuksellisella tavalla',
    url: 'https://yle.fi/a/74-20069557',
    image_id: '39-1226690659fe96d57f12',
    published: '18.1.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Komba Johnbull löysi timantin, jonka piti muuttaa Sierra Leonen tulevaisuus – jäljelle jäi vain pettymys',
    url: 'https://yle.fi/a/74-20074146',
    image_id: '39-124457165cddd58d4f5d',
    published: '17.2.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      '20-vuotias Aarne Kokko kuoli asepalveluksessa – isä kysyy, miksi Puolustusvoimissa tapahtuu jatkuvasti onnettomuuksia',
    url: 'https://yle.fi/a/74-20080854',
    image_id: '39-125506865eaf0fa27766',
    published: '1.4.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Nyt yleistyy trendi, että suomen kielellä ei saa palvelua – testaa, millainen kielitaito riittää eri ammateissa',
    url: 'https://yle.fi/a/74-20079949',
    image_id: '39-125379565e826e03a6b4',
    published: '3.4.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Suomen hallitus haluaa säästää kolme miljardia euroa ja äkkiä – leikkaa itse ja päätä, kuka kärsii',
    url: 'https://yle.fi/a/74-20082596',
    image_id: '39-12690406617b28c2ff6d',
    published: '12.4.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Tarkistimme faktoja EU:sta vuosien varrelta – kokeile tiedätkö, mikä on totta ja mikä tarua',
    url: 'https://yle.fi/a/74-20084891',
    image_id: '39-1291567665438c111525',
    published: '2.6.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Tämä juttu kumoaa yleisen uskomuksen liikenneonnettomuuksista – katso, liikutko itse riskiteillä',
    url: 'https://yle.fi/a/74-20091408',
    image_id: '39-130169866695279a6530',
    published: '17.6.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Trump solvaa siirtolaisia mielisairaiksi ja terroristeiksi – lähde Texasiin ja selvitä, mitä rajalla tapahtuu',
    url: 'https://yle.fi/a/74-20116511',
    image_id: '39-13733196724abf14efad',
    published: '13.10.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Kokeile, millaista on hakea mielenterveysapua – huonolla tuurilla pääset vain päivystyksen kautta kotiin',
    url: 'https://yle.fi/a/74-20119762',
    image_id: '39-136735767179e9c9fe84',
    published: '26.10.2024',
    publisher: 'Yle',
    role: 'code',
  },
  {
    type: 'web',
    title:
      'Yle sai ennen julkaisemattomia tietoja kadonneen Raisa Räisäsen ja paloittelumurhaajan yhteydestä',
    url: 'https://yle.fi/a/74-20120185',
    image_id: '39-1369394671b66f14abca',
    published: '27.10.2024',
    publisher: 'Yle',
    role: 'code',
  },
];

export default articles;