import { SetMetadata } from '@nestjs/common';

export const Permission = (resource: string, action: string) => SetMetadata('resource', resource) && SetMetadata('action', action);
