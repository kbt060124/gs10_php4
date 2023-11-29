import axios from "axios";

export const Logout = () => {
    // const baseUrl = "http://localhost/00_GS/01_assignment/10_php4";
    const baseUrl = "https://kkgsacademy.sakura.ne.jp/gs10_php4";

    axios
        .post(baseUrl + "/api/logout.php")
        .then((response) => {
            sessionStorage.clear();
            window.location.href = "/login";
        })
        .catch((error) => {
            console.error(error);
        });
}
