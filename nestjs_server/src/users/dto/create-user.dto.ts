import { IsEmail, IsNotEmpty, IsOptional, MinLength, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng!' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu là bắt buộc' })
  @MinLength(6, { message: 'Mật khẩu phải dài ít nhất 6 ký tự' })
  password: string;

  @IsNotEmpty({ message: 'Vui lòng điền đủ họ và tên?' })
  name: string;

  @IsOptional() 
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}