interface IHair {
    "color": string,
    "type": string,
};
interface IAddress {
    "address": string,
    "city": string,
    "state": string,
    "stateCode": string,
    "postalCode": string,
    "coordinates": IAddressCoordinates,
    "country": string,
};
interface IAddressCoordinates {
    "lat": number,
    "lng": number,
}
interface IBank{
    "cardExpire": string,
    "cardNumber": string,
    "cardType": string,
    "currency": string,
    "iban": string,
}
interface ICompany{
    "department": string,
    "name": string,
    "title": string,
    "address": IAddress,
}
interface ICrypto{
    "coin": string,
    "wallet": string,
    "network": string,
}

export interface IUser {
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": string,
    "email": string,
    "phone": string,
    "username": string,
    "password": string,
    "birthDate": string,
    "bloodGroup": string,
    "image": string,
    "height": number,
    "weight": number,
    "eyeColor": string,
    "hair": IHair,
    "ip": string,
    "address": IAddress,
    "macAddress": string,
    "university": string,
    "bank":IBank,
    "company":ICompany,
    "ein": string,
    "ssn": string,
    "userAgent": string,
    "crypto": ICrypto,
    "role": string,
}