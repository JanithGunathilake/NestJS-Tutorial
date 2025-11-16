import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [

        {
            id: 1,
            name: 'Alice',
            email: 'HwN1o@example.com',
            role: 'INTERN',
        },
        {
            id: 2,
            name: 'Bob',
            email: 'wvOuP@example.com',
            role: 'INTERN',
        },
        {
            id: 3,
            name: 'Charlie',
            email: 'f5A2q@example.com',
            role: 'ENGINEER',

        },
        {
            id: 4,
            name: 'David',
            email: 'RyTtq@example.com',
            role: 'ENGINEER',
        },
        {
            id: 5,
            name: 'Eve',
            email: 'admin@gmail.com',
            role: 'ADMIN',
        }

    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const rolesArray = this.users.filter(user => user.role === role);
            if (!rolesArray.length) throw new NotFoundException(`User Role Not found`);
            return rolesArray;
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }


        return user;
    }

    create(createUserDto: CreateUserDto) {
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id) 
        const newUser = {
            id: usersByHighestId[0].id + 1, 
            ...createUserDto
        }
        this.users.push(newUser);
        return newUser;
    }


    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user

        })

        return this.findOne(id);
    }      
    
    delete(id: number) {
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }

}
