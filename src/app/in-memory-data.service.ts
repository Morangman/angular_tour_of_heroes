import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 11, name: 'Rick Sunchez'},
            {id: 12, name: 'Morty'},
            {id: 13, name: 'Nickolas Cage'},
            {id: 14, name: 'Vietnam'},
            {id: 15, name: 'Captaine Marvel'},
            {id: 16, name: 'SonyC'},
            {id: 17, name: 'Vendetta'},
            {id: 18, name: 'Dmitry'},
            {id: 19, name: 'Tornado'},
            {id: 20, name: 'Hurricane'}
        ];
        return {heroes};
    }
}