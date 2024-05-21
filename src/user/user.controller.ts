import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Company } from 'src/company/entities/company.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto, @CurrentUser() user: Company) {
    return this.userService.create(createUserDto, Number(user.id));
  }

  @Get()
  findAll(@CurrentUser() user: Company) {
    return this.userService.findAll(Number(user.id));
  }

  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: Company) {
    return this.userService.findOne(Number(id), user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdatePatchUserDTO, @CurrentUser() user: Company) {
    return this.userService.update(+id, updateUserDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: Company) {
    return this.userService.remove(+id, user.id);
  }
}
