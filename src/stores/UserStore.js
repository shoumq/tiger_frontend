import { defineStore } from "pinia";
import router from "../router";

export const useUserStore = defineStore('userStore', {
    state: () => ({
        API_LINK: 'http://127.0.0.1:8000/api',
        user: {}
    }),

    actions: {
        async getUserData() {
            try {
                if (localStorage.getItem('access_token') != null) {
                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('access_token'));

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        redirect: 'follow'
                    };

                    const res = await fetch(this.API_LINK + '/auth/me', requestOptions);
                    const data = await res.json();

                    localStorage.setItem('name', data.name);
                    this.user = data
                } else {
                    this.user = {
                        title: 'Empty'
                    }
                }
            }
            catch (e) {
                localStorage.removeItem('access_token');
            }
        },

        logout() {
            localStorage.removeItem('access_token');
            localStorage.removeItem('name');
            router.push('/')
        }
    }
})
