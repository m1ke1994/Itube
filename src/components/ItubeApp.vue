<script>
import axios from "axios"
import VideoPage from "./VideoPage.vue";
import BloggerPage from "./BloggerPage.vue";
axios.defaults.baseURL = "http://localhost:3000";

export default {
    components: {
        VideoPage,
        BloggerPage
    },
    data() {
        return {
            videos: [],
            video: {},
            blogger: {},
            isBlogger: false,
            isVideo: false,
            url: axios.defaults.baseURL,
        };
    },
    methods: {
        async loadVideos() {
        let response=await axios.get(`/videos`);
        this.videos=response.data
           

            this.isVideo = false;
            this.isBlogger = false;
        },
        async toVideo(id) {
            let response=await axios.get(`/video`,{
                params:{
                    id:id
                }
            });
            this.video=response.data.video;
            this.videos=response.data.videos;
            this.isVideo = true;
            this.isBlogger = false;

        },
        async toBlogger(username) {

            this.isVideo = false;
            this.isBlogger = true;

        }

    },
    mounted() {
        this.loadVideos()
    }
};
</script>

<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a @click="loadVideos"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">ITube</span>
            </a>

        </header>
    </div>

    <main>
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="!isVideo && !isBlogger">
                <!-- Цикл сразу в шаблоне  -->
                
                <div class="col" v-for="(video,index) in videos" :key="index">
                    <div class="card">
                        <img :src="url + '/'+ video.preview" class="video-preview" loading="lazy">
                        <div class="card-footer text-muted">
                            <h5 class="card-title">
                                <a @click="toVideo(video._id)" class="card-link video-title">
                                    {{ video.title }}

                                </a>
                            </h5>
                            <div class="d-flex justify-content-between">
                                <a @click="toBlogger()" class="card-link video-author">
                                    {{ video.author }}
                                </a>
                                <div class="likes">
                                    {{ video.likes }}
                                    <img :src="url + '/icons/heart-fill.svg'" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <video-page v-if="isVideo" :url="url" :video="video" :videos="videos" @to-video="toVideo"></video-page>
        </div>
        <blogger-page v-if="isBlogger" :url="url"></blogger-page>
    </main>
</template>

<style>
.card {
    overflow: hidden;
}

a {
    cursor: pointer;
}

.video-preview {
    height: 120px;
    object-fit: cover;
}

.video-title,
.video-author {
    text-decoration: none;
    color: black;
}

.video-title:hover,
.video-author:hover {
    text-decoration: underline;
    color: #0d6efd;
}

.blogger-container {
    background-color: rgba(33, 37, 41, 0.03);
}

.blogger-avatar {
    min-width: 100px;
    max-height: 200px;
}

.likes {
    text-align: right;
    width: 100px;
    cursor: pointer;
}

iframe {
    width: 100%;
}
</style>