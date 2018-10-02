import { phoneModel } from "../models/phoneModel";

const getPhones = () => {

    const getPhonesUrl = 'https://fvadocodechallengeapi.azurewebsites.net/api/Phones';

    return fetch(getPhonesUrl).then((response) => (response.json())).then(mapPhonesModel);

}

const mapPhonesModel = (response) => {
    const phones = [];
    response.forEach((phonejson) => {
        const phone = new phoneModel();
        phone.ID = phonejson.id;
        phone.Brand = phonejson.brand;
        phone.Color = phonejson.color;
        phone.Description = phonejson.description;
        phone.ImgURL = phonejson.imgURL;
        phone.Model = phonejson.model;
        phone.Price = phonejson.price;
        phones.push(phone);
    });
    return phones;
}

export const phoneAPI = {
    getPhones,
}