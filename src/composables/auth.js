import { ref } from 'vue'

const isLoggedIn = ref(false)
const user = ref(null)

const login = async (email, password) => {
    const error = ref(null)

    try {
        const resp = await fetch(
            '/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            }
        )

        if (!resp.ok) {
            throw 'Login Failed'
        }

        isLoggedIn.value = true
        user.value = await resp.json()

    } catch (err) {
        error.value = err
    }
}

const logout = () => {
    isLoggedIn.value = false
    user.value = null
}

const register = async (username, email, password) => {
    const error = ref(null)

    try {
        const resp = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })

        if (!resp.ok) {
            throw 'Registration Failed'
        }

    } catch (err) {
        error.value = err
    }
}

export { isLoggedIn, user, login, logout, register }


