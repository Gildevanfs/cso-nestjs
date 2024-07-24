import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { createUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./users.service";


@Controller('users')

export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    async index() {
        return {msg: 'body'}
    }

    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return {msg: 'get id users', id}
    }

    @Post()
    async store(@Body() body: createUserDTO) {

        return await this.userService.createUser(body)
    }

    @Put(':id')
    async update(@Body() {name, email, password} : UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {name, email, password}
    }

    @Patch(':id')
    async updatePartial(@Body() {name, email, password} : UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return {name, email, password}
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
      return { msg: 'get id users', id };
    }


}