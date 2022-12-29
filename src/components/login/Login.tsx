import React from 'react';

export default function Login() {
    return (
        <form className="login">
            <label>
                Username:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="text" />
            </label>
            <input type="submit" value="Login" />
        </form>
    );
}
