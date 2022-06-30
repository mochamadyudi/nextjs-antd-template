import bcrypt from 'bcrypt'

export const encryptChar = (str = '',length = 10)=> {
    const salt = bcrypt.genSaltSync(length);
    const hashed =bcrypt.hashSync(str,salt)
    return hashed
}

