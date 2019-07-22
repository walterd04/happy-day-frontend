export interface IUser { 
    id: string, 
    username: string, 
    password: string, 
    email: string, 
    firstName: string, 
    lastName: string, 
    bio?: string, 
    profilePicture?: File 
}

export interface IUserState { 
    isLoggedIn: boolean, 
    session: string,
    user: IUser
}