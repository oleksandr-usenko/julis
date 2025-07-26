export default function useLocalStorage(){
    const setItem = (key: string, value: unknown) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getItem = (key: string) => {
        return JSON.parse(localStorage.getItem(key) ?? "");
    }

    return { setItem, getItem };
}