import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class createUserDTO {
    
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword(
        {
            minLength: 8,
        
        }
    )


    password: string;
}