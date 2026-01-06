import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(registerDto: any) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    
    return {
      message: 'تم التسجيل بنجاح',
      user: {
        email: registerDto.email,
        firstName: registerDto.firstName,
        lastName: registerDto.lastName,
      },
    };
  }

  async login(loginDto: any) {
    const payload = {
      id: 'user-id',
      email: loginDto.email,
      role: 'user',
    };

    const token = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });

    return {
      accessToken: token,
      refreshToken: refreshToken,
      user: {
        id: payload.id,
        email: payload.email,
        role: payload.role,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign({
        id: payload.id,
        email: payload.email,
        role: payload.role,
      });

      return {
        accessToken: newAccessToken,
      };
    } catch (error) {
      throw new Error('رمز التحديث غير صالح');
    }
  }

  async forgotPassword(email: string) {
    return {
      message: 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني',
    };
  }

  async resetPassword(token: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    return {
      message: 'تم تحديث كلمة المرور بنجاح',
    };
  }
}
