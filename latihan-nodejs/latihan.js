function verifikasiLogin(username, password) {

    try {
        if (typeof username !== 'string' || typeof password !== 'string' ) {
            throw new Error("Username dan password harus berupa teks")
        } else if (username === "admin" && password === "12345") {
            console.log('Login berhasil')
        } else { 
            console.log('Username atau password salah')
        }

    } catch (error) {
        console.log("Terjadi kesalahan:", error.message)
    }
}

module.exports = verifikasiLogin;