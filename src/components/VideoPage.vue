<script>
export default {
    props: {
        video:Object,
        url: String,
        videos:Array,
    },
}
</script>
<template>
    <div class="row">
        <div class="col-12 col-lg-8 mb-3">
            <h3 class="fw-bold lh-1 mb-3">{{video.title}}</h3>
            <div v-if="video.youtube" v-html="video.youtube"></div>

            <img v-else :src="url + '/'+ video.preview" class="d-block img-fluid  mb-3" loading="lazy">

            <div class="lead d-flex justify-content-between">
                <div>
                    by
                    <a class="card-link video-author">
                        {{ video.author }}
                    </a>
                </div>

                <div class="likes">
                    {{ video.likes }}
                    <img :src="url + '/icons/heart-fill.svg'" alt="">
                </div>
            </div>
        </div>


        <!-- Другие видео этого блогера -->
        <div class="col-12 col-lg-4 mb-3">
            <h3>Другие видео: </h3>


            <div class="card mb-3" v-for="relatedVideo in videos" :key="relatedVideo">
                <img :src="url + '/' + relatedVideo.preview" class="video-preview" loading="lazy">
                <div class="card-footer text-muted">
                    <h5 class="card-title">
                        <a @click="$emit('toVideo',relatedVideo._id)" class="card-link video-title">
                           {{ relatedVideo.title}}
                        </a>
                    </h5>
                    <div class="d-flex justify-content-between">
                        <a class="card-link video-author">
                            {{ relatedVideo.author}}
                        </a>
                        <div>
                            {{ relatedVideo.likes}}
                            <img :src="url + '/icons/heart-fill.svg'" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>