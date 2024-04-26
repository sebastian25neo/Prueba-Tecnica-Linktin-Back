export const AuthService = {
    login: (username: string, password: string): string | null => {
        // Lógica de autenticación (por ejemplo, verificar las credenciales en una base de datos)
        if (username === 'user' && password === '123') {
            // Si las credenciales son válidas, generar y devolver un token de acceso
            return 'token_de_acceso';
        }
        return null; // Devolver null si las credenciales son inválidas
    }
}; 