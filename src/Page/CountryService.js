import data from './contires.json';
export class CountryService {
    getCountries() {
        const result = [];
        data.map((datas) => {
            result.push(datas)
        });
        return result;
    }}