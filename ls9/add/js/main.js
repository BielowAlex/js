// - Є масив :
//
    let usersList = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
                geo: {
                    lat: '-37.3159',
                    lng: '81.1496'
                }
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
                name: 'Romaguera-Crona',
                catchPhrase: 'Multi-layered client-server neural-net',
                bs: 'harness real-time e-markets'
            }
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            address: {
                street: 'Victor Plains',
                suite: 'Suite 879',
                city: 'Wisokyburgh',
                zipcode: '90566-7771',
                geo: {
                    lat: '-43.9509',
                    lng: '-34.4618'
                }
            },
            phone: '010-692-6593 x09125',
            website: 'anastasia.net',
            company: {
                name: 'Deckow-Crist',
                catchPhrase: 'Proactive didactic contingency',
                bs: 'synergize scalable supply-chains'
            }
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            address: {
                street: 'Douglas Extension',
                suite: 'Suite 847',
                city: 'McKenziehaven',
                zipcode: '59590-4157',
                geo: {
                    lat: '-68.6102',
                    lng: '-47.0653'
                }
            },
            phone: '1-463-123-4447',
            website: 'ramiro.info',
            company: {
                name: 'Romaguera-Jacobson',
                catchPhrase: 'Face to face bifurcated interface',
                bs: 'e-enable strategic applications'
            }
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            address: {
                street: 'Hoeger Mall',
                suite: 'Apt. 692',
                city: 'South Elvis',
                zipcode: '53919-4257',
                geo: {
                    lat: '29.4572',
                    lng: '-164.2990'
                }
            },
            phone: '493-170-9623 x156',
            website: 'kale.biz',
            company: {
                name: 'Robel-Corkery',
                catchPhrase: 'Multi-tiered zero tolerance productivity',
                bs: 'transition cutting-edge web services'
            }
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            address: {
                street: 'Skiles Walks',
                suite: 'Suite 351',
                city: 'Roscoeview',
                zipcode: '33263',
                geo: {
                    lat: '-31.8129',
                    lng: '62.5342'
                }
            },
            phone: '(254)954-1289',
            website: 'demarco.info',
            company: {
                name: 'Keebler LLC',
                catchPhrase: 'User-centric fault-tolerant solution',
                bs: 'revolutionize end-to-end systems'
            }
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            address: {
                street: 'Norberto Crossing',
                suite: 'Apt. 950',
                city: 'South Christy',
                zipcode: '23505-1337',
                geo: {
                    lat: '-71.4197',
                    lng: '71.7478'
                }
            },
            phone: '1-477-935-8478 x6430',
            website: 'ola.org',
            company: {
                name: 'Considine-Lockman',
                catchPhrase: 'Synchronised bottom-line interface',
                bs: 'e-enable innovative applications'
            }
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            address: {
                street: 'Rex Trail',
                suite: 'Suite 280',
                city: 'Howemouth',
                zipcode: '58804-1099',
                geo: {
                    lat: '24.8918',
                    lng: '21.8984'
                }
            },
            phone: '210.067.6132',
            website: 'elvis.io',
            company: {
                name: 'Johns Group',
                catchPhrase: 'Configurable multimedia task-force',
                bs: 'generate enterprise e-tailers'
            }
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            address: {
                street: 'Ellsworth Summit',
                suite: 'Suite 729',
                city: 'Aliyaview',
                zipcode: '45169',
                geo: {
                    lat: '-14.3990',
                    lng: '-120.7677'
                }
            },
            phone: '586.493.6943 x140',
            website: 'jacynthe.com',
            company: {
                name: 'Abernathy Group',
                catchPhrase: 'Implemented secondary concept',
                bs: 'e-enable extensible e-tailers'
            }
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            address: {
                street: 'Dayna Park',
                suite: 'Suite 449',
                city: 'Bartholomebury',
                zipcode: '76495-3109',
                geo: {
                    lat: '24.6463',
                    lng: '-168.8889'
                }
            },
            phone: '(775)976-6794 x41206',
            website: 'conrad.com',
            company: {
                name: 'Yost and Sons',
                catchPhrase: 'Switchable contextually-based project',
                bs: 'aggregate real-time technologies'
            }
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            address: {
                street: 'Kattie Turnpike',
                suite: 'Suite 198',
                city: 'Lebsackbury',
                zipcode: '31428-2261',
                geo: {
                    lat: '-38.2386',
                    lng: '57.2232'
                }
            },
            phone: '024-648-3804',
            website: 'ambrose.net',
            company: {
                name: 'Hoeger LLC',
                catchPhrase: 'Centralized empowering task-force',
                bs: 'target end-to-end models'
            }
        }
    ];
//
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.

class Geo{
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}
class Company{
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street; this.suite = suite; this.city = city; this.zipcode = zipcode; this.geo = new Geo(lat, lng);
    }
}
class Person{
    constructor(id, name, username, email,street,suite,city,zipcode,lat,lng, phone, website,nameCompany,catchPhrase,bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.geo = new Geo(lat,lng);
        this.address = new Address(street,suite,city,zipcode,this.geo);
        this.phone = phone;
        this.website = website;
        this.company = new Company(nameCompany,catchPhrase,bs);
    }

    init(){
        let wrapDiv = document.createElement('div');
        wrapDiv.style.border = 'solid 1px black'
        wrapDiv.style.padding = '15px'
        //===GlobalInfo===
        let infoDiv = document.createElement('div');
        infoDiv.style.border = 'solid 1px black'
        infoDiv.style.padding = '15px'
        let username = document.createElement('h1');
        username.style.textAlign = 'center';
        username.innerText = 'Info user ' + this.username ;
        username.style.color = 'orange';
        let id = document.createElement('h3');
        id.innerText = 'id:' + this.id + ';';
        let name = document.createElement('h3');
        name.innerText = 'Name:' + this.name + ';';
        let email = document.createElement('h3');
        email.innerText = 'Email:' + this.email + ';';
        let phone = document.createElement('h3');
        phone.innerText = 'Phone:' + this.phone + ';';
        let website = document.createElement('h3');
        website.innerHTML =`Website: <a href="${this.website}">${this.website}</a>` ;


        infoDiv.append(id,name,email,phone,website);
        //===Address
        let addressDiv = document.createElement('div');
        addressDiv.style.border = 'solid 1px black';
        addressDiv.style.padding = '15px'
        let address = document.createElement('h1');
        address.style.borderBottom = 'solid 1px grey'
        address.style.width = '30%';
        address.style.margin = '0 auto';
        address.style.textAlign = 'center';
        address.innerText = 'Address';
        let street = document.createElement('h3');
        street.innerText = 'Street:' + this.address.street + ';';
        let suite = document.createElement('h3');
        suite.innerText = 'Suit:' + this.address.suite + ';';
        let city = document.createElement('h3');
        city.innerText = 'City:' + this.address.city + ';';
        let zipcode = document.createElement('h3');
        zipcode.innerText = 'Zipcode:' + this.address.zipcode + ';';
        //===Address.Geo===
        let geo = document.createElement('h1');
        geo.style.textAlign = 'center';
        geo.innerText = 'Geo location'
        geo.style.borderBottom = 'solid 1px grey'
        geo.style.width = '30%';
        geo.style.margin = '0 auto';
        let lat = document.createElement('h3');
        lat.innerText = 'Lat:' + this.geo.lat + ';';
        let lng = document.createElement('h3');
        lng.innerText = 'Lng:' + this.geo.lng + ';';
        addressDiv.append(address,street,suite,city,zipcode,geo,lat,lng);
        //===Company===
        let companyDiv = document.createElement('div');
        companyDiv.style.border = 'solid 1px black'
        companyDiv.style.padding = '15px'
        let company = document.createElement('h1');
        company.style.textAlign = 'center';
        company.innerText = 'Company';
        company.style.borderBottom = 'solid 1px grey'
        company.style.width = '30%';
        company.style.margin = '0 auto';
        let companyName = document.createElement('h3');
        companyName.innerText = 'Company name:' + this.company.name + ';';
        let catchPhrase = document.createElement('h3');
        catchPhrase.innerText = 'Catch phrase:' + this.company.catchPhrase + ';';
        let bs = document.createElement('h3');
        bs.innerText = 'Bs:' + this.company.bs + ';';
        companyDiv.append(company,companyName,catchPhrase,bs);

        wrapDiv.append(username,infoDiv,addressDiv,companyDiv);
        document.body.append(wrapDiv);

    }

}


for (const user of usersList) {
    let u = new Person(user.id,user.name,user.username,user.email,user.address.street,user.address.suite,user.address.city,user.address.zipcode,user.address.geo.lat,user.address.geo.lng,
                        user.phone,user.website,user.company.name,user.company.catchPhrase,user.company.bs);
    u.init();
}