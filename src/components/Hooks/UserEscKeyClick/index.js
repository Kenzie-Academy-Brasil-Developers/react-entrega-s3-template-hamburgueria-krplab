import { useEffect } from "react";

const UserEscKeyClick = (callback) => {
    useEffect(() => {
        function handleEscapeKey(event) {
            if (event.key === 'Escape') {
                callback();
            }
        }

        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [callback]);
}

export default UserEscKeyClick;