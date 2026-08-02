import { IsString, IsOptional } from 'class-validator';

export class CreateFacilityDto {

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  organizationId: string;
}