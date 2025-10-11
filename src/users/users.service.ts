import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [

        {
            id: '1',
            name: 'Alice',
            email: 'HwN1o@example.com',
            role: 'INTERN',
        },
        {
            id: '2',
            name: 'Bob',
            email: 'wvOuP@example.com',
            role: 'INTERN',
        },
        {
            id: '3',
            name: 'Charlie',
            email: 'f5A2q@example.com',
            role: 'ENGINEER',

        },
        {
            id: '4',
            name: 'David',
            email: 'RyTtq@example.com',
            role: 'ENGINEER',
        },
        {
            id: '5',
            name: 'Eve',
            email: 'admin@gmail.com',
            role: 'ADMIN',
        }

    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: string) {
        const user = this.users.find(user => user.id === id);

        return user;
    }

    create(user: { name: string; email: string; role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        

}
