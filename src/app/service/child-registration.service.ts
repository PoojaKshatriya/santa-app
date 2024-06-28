import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChildRegistrationService {
    private children = [
        { id: 1, name: 'John Doe', age: 8 },
        { id: 2, name: 'Jane Doe', age: 5 },
        { id: 3, name: 'Pooja Kshatriya', age: 12 },
    ];

    constructor() { }

    isChildRegistered(name: string): boolean {
        return this.children.some(child => child.name.toLowerCase() === name.toLowerCase());
    }

    isChildUnderAge(name: string): boolean {
        const child = this.children.find(child => child.name.toLowerCase() === name.toLowerCase());
        return child ? child.age < 10 : false;
    }
}
