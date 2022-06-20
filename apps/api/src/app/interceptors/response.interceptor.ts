import { ApiResponse } from '@cervotech/types/api';
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<Response>();

    return next.handle().pipe(
      map((data) => {
        let statusCode = response.statusCode;
        if (data === undefined && statusCode === HttpStatus.OK) {
          statusCode = HttpStatus.NOT_FOUND;
        }
        response.status(statusCode);

        const finalRes: ApiResponse<any> = {
          statusCode,
        };
        if (data === undefined) return finalRes;

        finalRes.data = data;

        return finalRes;
      })
    );
  }
}
