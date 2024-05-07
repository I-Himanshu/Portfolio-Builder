const API_ENDPOINT = `${import.meta.env.VITE_APP_API_URL}/api/profile`;

export const createProfile = async (profileData) => {
    let data = {
        ...profileData,
    }
    try {
        const response = await fetch(`${API_ENDPOINT}/create-profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getProfile = async (username) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/get-profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });
        const result = await response.json();
        return {
            status: response.status,
            ...result
        };
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getBasicProfile = async () => {
    try {
        const response = await fetch(`${API_ENDPOINT}/get-basic-profile`);
        console.log(API_ENDPOINT);
        const result = await response.json();
        return {
            status: response.status,
            data: result
        };
    } catch (error) {
        throw new Error(error.message);
    }
}