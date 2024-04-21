import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticatorService } from './authenticator.service';
import { CreateAuthenticatorDto } from './dto/create-authenticator.dto';
import { UpdateAuthenticatorDto } from './dto/update-authenticator.dto';

@Controller('authenticator')
export class AuthenticatorController {
  constructor(private readonly authenticatorService: AuthenticatorService) {}

  @Post()
  create(@Body() createAuthenticatorDto: CreateAuthenticatorDto) {
    return this.authenticatorService.create(createAuthenticatorDto);
  }

  @Get()
  findAll() {
    return this.authenticatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authenticatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthenticatorDto: UpdateAuthenticatorDto) {
    return this.authenticatorService.update(+id, updateAuthenticatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authenticatorService.remove(+id);
  }
}
