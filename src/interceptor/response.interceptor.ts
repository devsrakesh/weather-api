import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'src/interceptor/response.interface';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({
        status: context.switchToHttp().getResponse().statusCode,
        message: data.message || 'Success',
        count: data.count || 1,
        data: data.data,
      })),
      catchError((error) => {
        const status =
          error instanceof HttpException
            ? error.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        return throwError(() => error).pipe(
          map((err: any) => ({
            status,
            message: err.message || 'Internal  error',
            data: null,
          })),
        );
      }),
    );
  }
}
