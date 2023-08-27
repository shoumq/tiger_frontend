import { defineStore } from "pinia";
import router from "../router";

export const useBookStore = defineStore('bookStore', {
    state: () => ({
        books: [],
        currentBook: {},
        API_LINK: 'http://127.0.0.1:8000/api'
    }),

    actions: {
        async getBooks() {
            const res = await fetch(this.API_LINK + '/get_books');
            const data = await res.json();
            this.books = data;
        },

        async getBookById(book_id) {
            const res = await fetch(this.API_LINK + '/get_book_by_id/' + book_id)
            const data = await res.json();
            this.currentBook = data;

            if (this.currentBook.length === 0) {
                window.location.href = '/404';
            }
        }
    }
})
