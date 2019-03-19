<template>
    <div>
        <h1>Search</h1>
        <form @submit.prevent="doSearch">
            <p>
                <label for="title-input">
                    <span>Title:  </span>
                    <input v-model="title" :disabled="loading" type="text" id="title-input" name="title-input">
                </label>
            </p>
            <p>
                <label for="year-input">
                    <span>Year:  </span>
                    <input v-model="year" :disabled="loading" type="number" id="year-input" name="year-input">
                </label>
            </p>
            <button type="submit">
                Search
            </button>
        </form>

        <div v-if="results">
            <div v-if="results.length">
                <h1>Results</h1>

                <table>
                    <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Year
                            </th>
                            <th>
                                Poster
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="movie in results" :key="movie.imdbID">
                            <td>
                                {{movie.Title}}
                            </td>
                            <td>
                                {{movie.Year}}
                            </td>
                            <td class="movie-image">
                                <img :src="movie.Poster">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                No results.
            </div>
        </div>
    </div>
</template>

<script>
import { search as omdbSearch } from '@/services/omdb';
import { getValue, saveValue } from '@/services/storage';

export default {
    name: 'SearchPage',

    data: function() {
        return {
            apiKey: '',
            loading: true,
            title: '',
            year: '',
            results: null
        }
    },

    created: function() {
        getValue('apiKey').then(
            function(apiKey) {
                this.apiKey = apiKey;
                // Since localstore is instantaneous, insert an artificial delay
                // to show how to prevent the page from being interactive during loading.
                setTimeout(function() {
                    this.loading = false;
                }.bind(this), 2000);
            }.bind(this)
        );
    },

    methods: {
        doSearch: function() {
            console.log(this.title, this.year);
            omdbSearch(this.title, this.year, this.apiKey).then(
                function(results) {
                    this.results = results;
                }.bind(this)
            );
        }
    }
}
</script>

<style>
.movie-image img {
    height: 50%;
}
</style>
