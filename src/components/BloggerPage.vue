<script>
export default {
    props: {
        url: String,
    }
}
</script>
<template>
    <div class="blogger-container mb-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <img :src="url + '/avatars/avatar1.png'" class="d-block mx-auto img-fluid blogger-avatar"
                        loading="lazy">
                </div>
                <div class="col">
                    <h1 class="display-5 fw-bold text-center">
                        Имя блогера
                    </h1>
                    <p class="text-center">
                        100 подписчиков
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <!-- Цикл сразу в шаблоне -->

            <div class="col">
                <div class="card">
                    <!-- выведи реальную превью -->
                    <img :src="url + '/previews/preview1.jpg'" class="video-preview" loading="lazy">
                    <div class="card-footer text-muted">
                        <h5 class="card-title">
                            <a class="card-link video-title">
                                Название видео
                            </a>
                        </h5>
                        <div class="d-flex justify-content-between">
                            <a class="card-link video-author">
                                Автор видео
                            </a>
                            <div class="likes">
                                99
                                <img :src="url + '/icons/heart-fill.svg'" alt="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>