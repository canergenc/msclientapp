import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    name: 'Mark',
    description: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
    type:'SMS',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 2,
    name: 'Jacob',
    description: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 3,
    name: 'Larry',
    description: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
    type:'SMS',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 4,
    name: 'John',
    description: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 5,
    name: 'Jack',
    description: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 6,
    name: 'Ann',
    description: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 7,
    name: 'Barbara',
    description: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 8,
    name: 'Sevan',
    description: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 9,
    name: 'Ruben',
    description: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 10,
    name: 'Karen',
    description: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 11,
    name: 'Mark',
    description: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: '38',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 12,
    name: 'Jacob',
    description: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 13,
    name: 'Haik',
    description: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: '48',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 14,
    name: 'Garegin',
    description: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: '40',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    id: 15,
    name: 'Krikor',
    description: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32',
    type:'Mail',
    template:'Template Name',
    query:'Query Name',
    startDate:'2019-10-15 11:00:00',
    endDate:'2019-10-26 11:00:00',
    every:1,
    when:'Year'
  }, {
    'id': 16,
    'name': 'Francisca',
    'description': 'Brady',
    'username': '@Gibson',
    'email': 'franciscagibson@comtours.com',
    'age': 11,
  }, {
    'id': 17,
    'name': 'Tillman',
    'description': 'Figueroa',
    'username': '@Snow',
    'email': 'tillmansnow@comtours.com',
    'age': 34,
  }, {
    'id': 18,
    'name': 'Jimenez',
    'description': 'Morris',
    'username': '@Bryant',
    'email': 'jimenezbryant@comtours.com',
    'age': 45,
  }, {
    'id': 19,
    'name': 'Sandoval',
    'description': 'Jacobson',
    'username': '@Mcbride',
    'email': 'sandovalmcbride@comtours.com',
    'age': 32,
  }, {
    'id': 20,
    'name': 'Griffin',
    'description': 'Torres',
    'username': '@Charles',
    'email': 'griffincharles@comtours.com',
    'age': 19,
  }, {
    'id': 21,
    'name': 'Cora',
    'description': 'Parker',
    'username': '@Caldwell',
    'email': 'coracaldwell@comtours.com',
    'age': 27,
  }, {
    'id': 22,
    'name': 'Cindy',
    'description': 'Bond',
    'username': '@Velez',
    'email': 'cindyvelez@comtours.com',
    'age': 24,
  }, {
    'id': 23,
    'name': 'Frieda',
    'description': 'Tyson',
    'username': '@Craig',
    'email': 'friedacraig@comtours.com',
    'age': 45,
  }, {
    'id': 24,
    'name': 'Cote',
    'description': 'Holcomb',
    'username': '@Rowe',
    'email': 'coterowe@comtours.com',
    'age': 20,
  }, {
    'id': 25,
    'name': 'Trujillo',
    'description': 'Mejia',
    'username': '@Valenzuela',
    'email': 'trujillovalenzuela@comtours.com',
    'age': 16,
  }, {
    'id': 26,
    'name': 'Pruitt',
    'description': 'Shepard',
    'username': '@Sloan',
    'email': 'pruittsloan@comtours.com',
    'age': 44,
  }, {
    'id': 27,
    'name': 'Sutton',
    'description': 'Ortega',
    'username': '@Black',
    'email': 'suttonblack@comtours.com',
    'age': 42,
  }, {
    'id': 28,
    'name': 'Marion',
    'description': 'Heath',
    'username': '@Espinoza',
    'email': 'marionespinoza@comtours.com',
    'age': 47,
  }, {
    'id': 29,
    'name': 'Newman',
    'description': 'Hicks',
    'username': '@Keith',
    'email': 'newmankeith@comtours.com',
    'age': 15,
  }, {
    'id': 30,
    'name': 'Boyle',
    'description': 'Larson',
    'username': '@Summers',
    'email': 'boylesummers@comtours.com',
    'age': 32,
  }, {
    'id': 31,
    'name': 'Haynes',
    'description': 'Vinson',
    'username': '@Mckenzie',
    'email': 'haynesmckenzie@comtours.com',
    'age': 15,
  }, {
    'id': 32,
    'name': 'Miller',
    'description': 'Acosta',
    'username': '@Young',
    'email': 'milleryoung@comtours.com',
    'age': 55,
  }, {
    'id': 33,
    'name': 'Johnston',
    'description': 'Brown',
    'username': '@Knight',
    'email': 'johnstonknight@comtours.com',
    'age': 29,
  }, {
    'id': 34,
    'name': 'Lena',
    'description': 'Pitts',
    'username': '@Forbes',
    'email': 'lenaforbes@comtours.com',
    'age': 25,
  }, {
    'id': 35,
    'name': 'Terrie',
    'description': 'Kennedy',
    'username': '@Branch',
    'email': 'terriebranch@comtours.com',
    'age': 37,
  }, {
    'id': 36,
    'name': 'Louise',
    'description': 'Aguirre',
    'username': '@Kirby',
    'email': 'louisekirby@comtours.com',
    'age': 44,
  }, {
    'id': 37,
    'name': 'David',
    'description': 'Patton',
    'username': '@Sanders',
    'email': 'davidsanders@comtours.com',
    'age': 26,
  }, {
    'id': 38,
    'name': 'Holden',
    'description': 'Barlow',
    'username': '@Mckinney',
    'email': 'holdenmckinney@comtours.com',
    'age': 11,
  }, {
    'id': 39,
    'name': 'Baker',
    'description': 'Rivera',
    'username': '@Montoya',
    'email': 'bakermontoya@comtours.com',
    'age': 47,
  }, {
    'id': 40,
    'name': 'Belinda',
    'description': 'Lloyd',
    'username': '@Calderon',
    'email': 'belindacalderon@comtours.com',
    'age': 21,
  }, {
    'id': 41,
    'name': 'Pearson',
    'description': 'Patrick',
    'username': '@Clements',
    'email': 'pearsonclements@comtours.com',
    'age': 42,
  }, {
    'id': 42,
    'name': 'Alyce',
    'description': 'Mckee',
    'username': '@Daugherty',
    'email': 'alycedaugherty@comtours.com',
    'age': 55,
  }, {
    'id': 43,
    'name': 'Valencia',
    'description': 'Spence',
    'username': '@Olsen',
    'email': 'valenciaolsen@comtours.com',
    'age': 20,
  }, {
    'id': 44,
    'name': 'Leach',
    'description': 'Holcomb',
    'username': '@Humphrey',
    'email': 'leachhumphrey@comtours.com',
    'age': 28,
  }, {
    'id': 45,
    'name': 'Moss',
    'description': 'Baxter',
    'username': '@Fitzpatrick',
    'email': 'mossfitzpatrick@comtours.com',
    'age': 51,
  }, {
    'id': 46,
    'name': 'Jeanne',
    'description': 'Cooke',
    'username': '@Ward',
    'email': 'jeanneward@comtours.com',
    'age': 59,
  }, {
    'id': 47,
    'name': 'Wilma',
    'description': 'Briggs',
    'username': '@Kidd',
    'email': 'wilmakidd@comtours.com',
    'age': 53,
  }, {
    'id': 48,
    'name': 'Beatrice',
    'description': 'Perry',
    'username': '@Gilbert',
    'email': 'beatricegilbert@comtours.com',
    'age': 39,
  }, {
    'id': 49,
    'name': 'Whitaker',
    'description': 'Hyde',
    'username': '@Mcdonald',
    'email': 'whitakermcdonald@comtours.com',
    'age': 35,
  }, {
    'id': 50,
    'name': 'Rebekah',
    'description': 'Duran',
    'username': '@Gross',
    'email': 'rebekahgross@comtours.com',
    'age': 40,
  }, {
    'id': 51,
    'name': 'Earline',
    'description': 'Mayer',
    'username': '@Woodward',
    'email': 'earlinewoodward@comtours.com',
    'age': 52,
  }, {
    'id': 52,
    'name': 'Moran',
    'description': 'Baxter',
    'username': '@Johns',
    'email': 'moranjohns@comtours.com',
    'age': 20,
  }, {
    'id': 53,
    'name': 'Nanette',
    'description': 'Hubbard',
    'username': '@Cooke',
    'email': 'nanettecooke@comtours.com',
    'age': 55,
  }, {
    'id': 54,
    'name': 'Dalton',
    'description': 'Walker',
    'username': '@Hendricks',
    'email': 'daltonhendricks@comtours.com',
    'age': 25,
  }, {
    'id': 55,
    'name': 'Bennett',
    'description': 'Blake',
    'username': '@Pena',
    'email': 'bennettpena@comtours.com',
    'age': 13,
  }, {
    'id': 56,
    'name': 'Kellie',
    'description': 'Horton',
    'username': '@Weiss',
    'email': 'kellieweiss@comtours.com',
    'age': 48,
  }, {
    'id': 57,
    'name': 'Hobbs',
    'description': 'Talley',
    'username': '@Sanford',
    'email': 'hobbssanford@comtours.com',
    'age': 28,
  }, {
    'id': 58,
    'name': 'Mcguire',
    'description': 'Donaldson',
    'username': '@Roman',
    'email': 'mcguireroman@comtours.com',
    'age': 38,
  }, {
    'id': 59,
    'name': 'Rodriquez',
    'description': 'Saunders',
    'username': '@Harper',
    'email': 'rodriquezharper@comtours.com',
    'age': 20,
  }, {
    'id': 60,
    'name': 'Lou',
    'description': 'Conner',
    'username': '@Sanchez',
    'email': 'lousanchez@comtours.com',
    'age': 16,
  }];

  getData() {
    return this.data;
  }
}
