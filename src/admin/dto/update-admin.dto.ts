import { PartialType } from '@nestjs/swagger';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  login?: string;
  email?: string;
  password?: string;
  tgLink?: string;
  photo?: string;
  hashed_password?: string;
  is_active?: boolean;
  is_creator?: boolean;
  hashed_refresh_token?: string;
}
