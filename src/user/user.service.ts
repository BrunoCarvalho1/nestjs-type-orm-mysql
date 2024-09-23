import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service"
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto"
import { urlToHttpOptions } from "url";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async create(data: CreateUserDTO) {

        const salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt);

        return await this.prisma.user.create({
            data,
        });
    }

    async list (){

        return this.prisma.user.findMany();
    }

    async show(id: number){
        return this.prisma.user.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, {email, name, password, birthAt, role}: UpdatePutUserDTO){

        await this.exists(id);
        const salt = await bcrypt.genSalt();
        password = await bcrypt.hash(password, salt);

        return this.prisma.user.update({
            data: {email, name, password, birthAt: birthAt ? new Date(birthAt) : null},
            where: {
                id
            }
        });
    }
    
    async updatePartial(id: number, {email, name, password, birthAt, role}: UpdatePatchUserDTO){

        const data: any = {};

        if (birthAt){
            data.birthAt = new Date(birthAt);
        }

        if(email) {
            data.email = email;
        }

        if(name) {
            data.name = name;
        }

        if(password) {
            const salt = await bcrypt.genSalt();
            password = await bcrypt.hash(password, salt);            
        }

        if(role) {
            data.password = password;
        }

        return this.prisma.user.update({
            data: {email, name, password, birthAt},
            where: {
                id
            }
        });
    }    

    async delete(id: number) {

        await this.exists(id);
        
        return this.prisma.user.delete({
            where: {
                id,
            }
        });
    }
    async exists(id: number){
        if(!(await this.prisma.user.count({
            where: {
                id  
            }
        }))){
            throw new NotFoundException(`O usuário ${id} não existe.`)
        }
    }
}