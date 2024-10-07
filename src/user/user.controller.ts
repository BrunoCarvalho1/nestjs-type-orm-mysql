import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Param,
  Put,
  Patch,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UserService } from './user.service';
import { Roles } from '../decorators/role.decorator';
import { Role } from '../enums/role.enum';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { LogInterceptor } from '../inteceptos/log.interceptos';
import { ParamId } from '../decorators/param-id.decorator';

@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.UserService.create(data);
  }

  @Roles(Role.Admin, Role.User)
  @Get()
  async list() {
    return this.UserService.list();
  }

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.UserService.show(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.UserService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.UserService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.UserService.delete(id);
  }
}
