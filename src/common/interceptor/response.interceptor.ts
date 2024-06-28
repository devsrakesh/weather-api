import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Response } from 'src/common/interceptor/response.interface';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const httpContext = context.switchToHttp();
        const response = httpContext.getResponse();

        // Check for a custom message from the controller
        let message = 'Operation successful';
        if (data && typeof data === 'object' && 'message' in data) {
          message = data.message;
        }

        // Construct the response using the ApiResponse interface
        const apiResponse: Response<T> = {
          status: response.statusCode,
          message,
          data, // Controller's output
        };

        return apiResponse;
      }),
      catchError((error) => {
        const status = error instanceof HttpException ? error.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        return throwError(() => error).pipe(
          map((err: any) => ({
            status,
            message: err.message || 'Internal server error',
            data: null,
          })),
        );
      }),
    );
  }
}
